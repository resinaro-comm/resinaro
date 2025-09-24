// src/app/api/contact/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import crypto from "crypto";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

/**
 * This route:
 *  - lazy-imports googleapis for Sheets (keeps bundle small)
 *  - lazy-imports @google-cloud/storage for uploading files to a GCS bucket
 *  - validates inputs, uploads files to a per-submission prefix in the bucket,
 *    generates short-lived signed URLs for each uploaded file, and appends a row to Sheets.
 *
 * Requirements (to run after this change):
 *  - Environment vars: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_STORAGE_BUCKET
 *  - Install @google-cloud/storage in your project (I will ask you to run the npm command next)
 */

/* Helper: lazy-init googleapis (Sheets) and GCS Storage client */
async function initGoogleClients() {
  // lazy import googleapis for Sheets
  const googleMod = await import("googleapis");
  const google: any = (googleMod as any).google ?? (googleMod as any);

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const bucketName = process.env.GOOGLE_STORAGE_BUCKET;

  if (!clientEmail || !privateKey || !sheetId || !bucketName) {
    throw new Error("Missing required Google env vars (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_STORAGE_BUCKET)");
  }
  privateKey = privateKey.replace(/\\n/g, "\n");

  // auth for Sheets
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
    ],
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
    // optional: you can also pass projectId if you set it in env
    projectId: process.env.GCP_PROJECT_ID,
  });

  return { sheets, storage, sheetId, bucketName };
}

/* Upload a single File to GCS under a submission prefix and return a signed URL */
async function uploadToGCS(storage: any, bucketName: string, submissionId: string, file: File) {
  const ab = await file.arrayBuffer();
  const buffer = Buffer.from(ab);

  // object path: submissions/<submissionId>/<filename>
  const objectName = `submissions/${submissionId}/${file.name.replace(/\//g, "_")}`;

  const bucket = storage.bucket(bucketName);
  const fileObj = bucket.file(objectName);

  // save buffer (non-resumable for small files)
  await fileObj.save(buffer, {
    resumable: false,
    metadata: {
      contentType: file.type || "application/octet-stream",
    },
  });

  // generate a short-lived signed URL (7 days)
  const expiresMs = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  // getSignedUrl accepts a Date or string in some libs; pass a timestamp number works in recent versions
  const [signedUrl] = await fileObj.getSignedUrl({
    action: "read",
    expires: expiresMs,
  });

  // Return the signed URL and the GCS object path for debugging/reference
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
    const firstName = (formData.get("firstName") as string) || (formData.get("first_name") as string) || "";
    const lastName = (formData.get("lastName") as string) || (formData.get("last_name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

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
      return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
    }

    // unique submission id
    const submissionId = crypto.randomUUID();

    // init clients
    const { sheets, storage, sheetId, bucketName } = await initGoogleClients();

    // upload files to GCS
    const uploadResults: { url: string; path: string }[] = [];
    for (const file of files) {
      if (!file || typeof file.size !== "number") continue;
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: `File "${file.name}" exceeds 5MB.` }, { status: 400 });
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ error: `File "${file.name}" has unsupported type: ${file.type}` }, { status: 400 });
      }

      const { signedUrl, objectPath } = await uploadToGCS(storage, bucketName, submissionId, file);
      uploadResults.push({ url: signedUrl, path: objectPath });
    }

    // append row to sheet; record bucket path and signed URLs
    // columns: SubmissionId,First,Last,Phone,Email,Message,StoragePath,FileLinks,Timestamp
    const storagePath = `gs://${bucketName}/submissions/${submissionId}/`;
    const fileLinksStr = uploadResults.map((r) => r.url).join(", ");

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          submissionId,
          firstName,
          lastName,
          phone,
          email,
          message,
          storagePath,
          fileLinksStr,
          new Date().toISOString(),
        ]],
      },
    });

    return NextResponse.json({
      success: true,
      submissionId,
      storagePath,
      fileLinks: uploadResults.map((r) => r.url),
    });
  } catch (err) {
    console.error("Error handling form submission:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
