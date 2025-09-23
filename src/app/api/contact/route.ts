// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { Readable } from "stream";


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

/**
 * NOTE:
 * - This file preserves your existing Drive + Sheets behavior.
 * - It lazy-imports `googleapis` to avoid bundling it at build time.
 * - A very small eslint-disable block is scoped to the dynamic import helpers
 *   to avoid sprinkling `any` everywhere while keeping strict typing elsewhere.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
async function createSubmissionFolder(drive: any, submissionId: string) {
  const res = await drive.files.create({
    requestBody: {
      name: `Submission_${submissionId}`,
      mimeType: "application/vnd.google-apps.folder",
      parents: process.env.GOOGLE_DRIVE_FOLDER_ID ? [process.env.GOOGLE_DRIVE_FOLDER_ID as string] : undefined,
    },
    fields: "id, webViewLink",
  });
  return res.data;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
async function uploadToDrive(drive: any, file: File, submissionFolderId: string) {
  // Convert web File -> ArrayBuffer -> Buffer
  const ab = await file.arrayBuffer();
  const buffer = Buffer.from(ab);

  // Create a Node Readable stream from the buffer so googleapis can pipe it.
  const stream = Readable.from(buffer);

  const res = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [submissionFolderId],
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: stream,
    },
    fields: "id, webViewLink",
  });

  return res.data?.webViewLink;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function initGoogleClients() {
  // lazy import googleapis and create auth/clients
  const googleMod = await import("googleapis");
  // `googleMod` is a dynamically imported module; treat as any only here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const google: any = (googleMod as any).google ?? (googleMod as any);

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error("Missing required Google env vars");
  }
  // Vercel sometimes stores \n as literal backslash-n. Convert if needed.
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
  await auth.authorize();

  const drive = google.drive({ version: "v3", auth });
  const sheets = google.sheets({ version: "v4", auth });

  return { drive, sheets, sheetId };
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // --- DEBUG: log incoming entries so you can see what's being received
    console.log("Incoming form keys/values:");
    formData.forEach((v, k) => {
      if (v instanceof File) {
        console.log("  file:", k, "=>", v.name, v.type, v.size);
      } else {
        console.log("  field:", k, "=>", String(v).slice(0, 200));
      }
    });

    // read textual fields (FormData returns FormDataEntryValue which can be string or File)
    const firstName = (formData.get("firstName") as string) || (formData.get("first_name") as string) || "";
    const lastName = (formData.get("lastName") as string) || (formData.get("last_name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    // collect files (FormData.getAll returns arrays of FormDataEntryValue)
    const rawFiles = formData.getAll("files");
    const files: File[] = rawFiles
      .filter((v) => (v as unknown as { name?: unknown })?.name)
      .map((v) => v as File);

    // validate required fields
    const missing: string[] = [];
    if (!firstName.trim()) missing.push("firstName");
    if (!lastName.trim()) missing.push("lastName");
    if (!phone.trim()) missing.push("phone");
    if (!email.trim()) missing.push("email");
    if (!message.trim()) missing.push("message");

    if (missing.length) {
      return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
    }

    // Generate unique ID for submission
    const submissionId = crypto.randomUUID();

    // Initialize google clients (lazy import)
    const { drive, sheets, sheetId } = await initGoogleClients();

    // create folder for this submission
    const folder = await createSubmissionFolder(drive, submissionId);

    // validate + upload files to that folder
    const fileLinks: string[] = [];
    for (const file of files) {
      if (!file || typeof file.size !== "number") continue;
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: `File "${file.name}" exceeds 5MB.` }, { status: 400 });
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ error: `File "${file.name}" has unsupported type: ${file.type}` }, { status: 400 });
      }

      const link = await uploadToDrive(drive, file, folder.id!);
      fileLinks.push(link || "Upload failed");
    }

    // append row to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:I", // columns: SubmissionId,First,Last,Phone,Email,Message,FolderLink,FileLinks,Timestamp
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          submissionId,
          firstName,
          lastName,
          phone,
          email,
          message,
          folder.webViewLink || "",
          fileLinks.join(", "),
          new Date().toISOString(),
        ]],
      },
    });

    return NextResponse.json({ success: true, submissionId, folderLink: folder.webViewLink, fileLinks });
  } catch (err) {
    console.error("Error handling form submission:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
