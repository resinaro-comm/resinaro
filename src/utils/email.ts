// src/utils/email.ts
const RESINARO_TO = "resinaro@proton.me";

const resendApiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.NOTIFY_FROM_EMAIL || "notifications@resinaro.com";

export type SubmissionEmail = {
  subject: string;
  html: string;
  text?: string;
};

export async function sendSubmissionEmail(payload: SubmissionEmail, to: string = RESINARO_TO) {
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not set; skipping email send.");
    return { skipped: true } as const;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [to],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Resend error ${res.status}: ${txt}`);
  }
  return res.json().catch(() => ({}));
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
