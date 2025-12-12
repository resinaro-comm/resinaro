// src/app/api/contact/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import crypto from "crypto";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

/**
 * This route:
 *  - (optionally) pushes to Google Sheets + GCS if Google env vars are present
 *  - always validates inputs
 *  - always forwards a structured summary to the central Alveriano Platform API
 *    so the submission is logged in Supabase
 *
 * Google integration is **best-effort**:
 *  - If GOOGLE_* envs are missing or broken, we log a warning/error
 *    but still continue with the rest of the flow.
 *
 * Requirements (to use Google integration):
 *  - GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_STORAGE_BUCKET
 *  - @google-cloud/storage installed
 *  - Optionally GCP_PROJECT_ID
 *
 * Requirements (for Alveriano):
 *  - ALVERIANO_API_BASE_URL
 */

function hasGoogleEnv() {
  return (
    !!process.env.GOOGLE_CLIENT_EMAIL &&
    !!process.env.GOOGLE_PRIVATE_KEY &&
    !!process.env.GOOGLE_SHEET_ID &&
    !!process.env.GOOGLE_STORAGE_BUCKET
  );
}

/* Helper: lazy-init googleapis (Sheets) and GCS Storage client */
async function initGoogleClients() {
  const googleMod = await import("googleapis");
  const google: any = (googleMod as any).google ?? (googleMod as any);

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const bucketName = process.env.GOOGLE_STORAGE_BUCKET;

  if (!clientEmail || !privateKey || !sheetId || !bucketName) {
    // We already guard with hasGoogleEnv(), so this is a "should not happen".
    throw new Error(
      "Google env vars missing inside initGoogleClients (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_STORAGE_BUCKET)",
    );
  }
  privateKey = privateKey.replace(/\\n/g, "\n");

  // auth for Sheets
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  await auth.authorize();
  const sheets = google.sheets({ version: "v4", auth });

  // lazy import GCS Storage (use dynamic import to keep build-time small)
  const storageMod = await import("@google-cloud/storage");
  const { Storage } = storageMod as any;

  // Create storage client using explicit credentials (no need for ADC)
  const storage = new Storage({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    projectId: process.env.GCP_PROJECT_ID,
  });

  return { sheets, storage, sheetId, bucketName };
}

/* Upload a single File to GCS under a submission prefix and return a signed URL */
async function uploadToGCS(
  storage: any,
  bucketName: string,
  submissionId: string,
  file: File,
) {
  const ab = await file.arrayBuffer();
  const buffer = Buffer.from(ab);

  // object path: submissions/<submissionId>/<filename>
  const objectName = `submissions/${submissionId}/${file.name.replace(
    /\//g,
    "_",
  )}`;

  const bucket = storage.bucket(bucketName);
  const fileObj = bucket.file(objectName);

  await fileObj.save(buffer, {
    resumable: false,
    metadata: {
      contentType: file.type || "application/octet-stream",
    },
  });

  const expiresMs = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const [signedUrl] = await fileObj.getSignedUrl({
    action: "read",
    expires: expiresMs,
  });

  return { signedUrl, objectPath: `gs://${bucketName}/${objectName}` };
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // debug incoming fields
    console.log("Incoming form keys/values:");
    formData.forEach((v, k) => {
      if (v instanceof File) {
        console.log("  file:", k, "=>", v.name, v.type, v.size);
      } else {
        console.log("  field:", k, "=>", String(v).slice(0, 200));
      }
    });

    // textual fields
    const firstName =
      (formData.get("firstName") as string) ||
      (formData.get("first_name") as string) ||
      "";
    const lastName =
      (formData.get("lastName") as string) ||
      (formData.get("last_name") as string) ||
      "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";
    const postcode = (formData.get("postcode") as string) || "";
    const service =
      ((formData.get("service") as string) || "other").toLowerCase();

    // files
    const rawFiles = formData.getAll("files");
    const files: File[] = rawFiles
      .filter((v) => (v as unknown as { name?: unknown })?.name)
      .map((v) => v as File);

    // required checks
    const missing: string[] = [];
    if (!firstName.trim()) missing.push("firstName");
    if (!lastName.trim()) missing.push("lastName");
    if (!phone.trim()) missing.push("phone");
    if (!email.trim()) missing.push("email");
    if (!message.trim()) missing.push("message");
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    // unique submission id
    const submissionId = crypto.randomUUID();

    // We’ll collect these whether or not Google is enabled,
    // so they can still be forwarded to the Alveriano API.
    const uploadResults: { url: string; path: string }[] = [];
    let storagePath: string | null = null;

    // ─────────────────────────────────────────────
    // 1) Best-effort Google Sheets + GCS integration
    // ─────────────────────────────────────────────
    if (hasGoogleEnv()) {
      try {
        const { sheets, storage, sheetId, bucketName } =
          await initGoogleClients();

        for (const file of files) {
          if (!file || typeof file.size !== "number") continue;
          if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
              { error: `File "${file.name}" exceeds 5MB.` },
              { status: 400 },
            );
          }
          if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
              {
                error: `File "${file.name}" has unsupported type: ${file.type}`,
              },
              { status: 400 },
            );
          }

          const { signedUrl, objectPath } = await uploadToGCS(
            storage,
            bucketName,
            submissionId,
            file,
          );
          uploadResults.push({ url: signedUrl, path: objectPath });
        }

        storagePath = `gs://${bucketName}/submissions/${submissionId}/`;
        const fileLinksStr = uploadResults.map((r) => r.url).join(", ");

        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Sheet1!A:I",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                submissionId,
                firstName,
                lastName,
                phone,
                email,
                message,
                storagePath,
                fileLinksStr,
                new Date().toISOString(),
              ],
            ],
          },
        });
      } catch (err) {
        console.error(
          "[contact] Google Sheets / GCS integration failed:",
          err,
        );
        // We deliberately DO NOT fail the request here.
      }
    } else {
      console.warn(
        "[contact] Google env vars missing – skipping Sheets + GCS upload.",
      );
    }

    // ─────────────────────────────────────────────
    // 2) Forward a summary to the central Alveriano Platform API
    // ─────────────────────────────────────────────
    const apiBaseRaw = process.env.ALVERIANO_API_BASE_URL;
    if (!apiBaseRaw) {
      console.warn(
        "[contact] ALVERIANO_API_BASE_URL not set – skipping platform forwarding.",
      );
    } else {
      const apiBase = apiBaseRaw.replace(/\/+$/, ""); // trim trailing slash
      const site = "resinaro";
      const formSlug = `contact_${service || "other"}`; // e.g. contact_passport, contact_other

      const sourceUrl = (() => {
        try {
          const u = new URL(req.url);
          return u.href;
        } catch {
          return undefined;
        }
      })();

      const payload = {
        message,
        postcode,
        service,
        files: uploadResults, // { url, path } from GCS if available
        storagePath,
        submissionId,
      };

      try {
        const res = await fetch(`${apiBase}/forms/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            site,
            formSlug,
            email,
            name: `${firstName} ${lastName}`.trim(),
            phone,
            sourceUrl,
            payload,
          }),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          console.error(
            "[contact] Failed to forward to Alveriano API",
            res.status,
            text,
          );
        } else {
          const json = await res.json().catch(() => null);
          console.log(
            "[contact] Forwarded to Alveriano API",
            formSlug,
            json ?? "",
          );
        }
      } catch (err) {
        console.error(
          "[contact] Error calling Alveriano API /forms/submit",
          err,
        );
        // Do not throw – user should still see success if our own logic worked.
      }
    }

    // ─────────────────────────────────────────────
    // 3) Final response (what the frontend already expects)
    // ─────────────────────────────────────────────
    return NextResponse.json({
      success: true,
      submissionId,
      storagePath,
      fileLinks: uploadResults.map((r) => r.url),
    });
  } catch (err) {
    console.error("Error handling form submission:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
