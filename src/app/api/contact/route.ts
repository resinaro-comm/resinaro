import { NextResponse } from "next/server";
import { google } from "googleapis";
import crypto from "crypto";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// create a subfolder for each submission
async function createSubmissionFolder(auth: any, submissionId: string) {
  const drive = google.drive({ version: "v3", auth });
  const res = await drive.files.create({
    requestBody: {
      name: `Submission_${submissionId}`,
      mimeType: "application/vnd.google-apps.folder",
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID as string],
    },
    fields: "id, webViewLink",
  });
  return res.data;
}

// upload a single file into the given folder id
async function uploadToDrive(auth: any, file: File, submissionFolderId: string) {
  const drive = google.drive({ version: "v3", auth });
  const buffer = Buffer.from(await file.arrayBuffer());

  const res = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [submissionFolderId],
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: buffer,
    },
    fields: "id, webViewLink",
  });

  return res.data.webViewLink;
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
    const files: File[] = rawFiles.filter((v) => (v as any)?.name).map((v) => v as File);

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

    // Google Auth (service account)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // create folder for this submission
    const folder = await createSubmissionFolder(auth, submissionId);

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

      const link = await uploadToDrive(auth, file, folder.id!);
      fileLinks.push(link || "Upload failed");
    }

    // append row to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
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
