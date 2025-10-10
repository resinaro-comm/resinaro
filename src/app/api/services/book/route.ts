// app/api/services/book/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendSubmissionEmail, escapeHtml } from "@/utils/email";

const PAYMENT_LINKS: Record<string, string> = {
  "visa-application": "https://buy.stripe.com/3cIcN54987Jt5Ed5wKaMU04", // Visa Assistance
  "aire-registration": "https://buy.stripe.com/8x228r0WWd3NgiRcZcaMU03", // AIRE
  "id-card": "https://buy.stripe.com/4gM4gz6hgd3N6IhgboaMU02", // ID Card
  "passport-assistance": "https://buy.stripe.com/7sY14n354bZJ9Ut6AOaMU01", // Passport
  "passport-assistance-account": "https://buy.stripe.com/eVq14n7lkfbVfeN1guaMU0b", // Passport + account creation (£55)
  // Newly added services
  "nin-support": "https://buy.stripe.com/cNi3cv3543tdfeNbV8aMU07", // National Insurance
  "translation-assistance": "https://buy.stripe.com/9B63cv9ts6Fp0jTf7kaMU08", // Translation
  "benefits-guidance": "https://buy.stripe.com/14A14naxwfbVaYxgboaMU09", // Benefits
  "housing-guidance": "https://buy.stripe.com/fZu5kD210gfZgiRaR4aMU0a", // Housing
};

export async function POST(req: NextRequest) {
  try {
  const form = await req.formData();

    // Core fields
  const email = String(form.get("email") || "");
    const service = String(form.get("service") || "visa-application");
    const incomingBookingId = String(form.get("bookingId") || "");

    // 1) Persist form to your DB/storage here if you have one (not shown)
    const bookingId = incomingBookingId || crypto.randomUUID();

    // Email notify: summarise the payload for triage
    try {
      const lines: string[] = [];
      // FormData is iterable in Web API: yields [key, value]
      const maskKeys = new Set(["password", "prenotami_password"]);
      for (const [k, v] of (form as unknown as Iterable<[string, FormDataEntryValue]>)) {
        if (typeof v === "string") {
          const display = maskKeys.has(k) ? "••••••" : v;
          lines.push(`<li><strong>${escapeHtml(k)}:</strong> ${escapeHtml(display)}</li>`);
        } else if (v && typeof (v as File).name === "string") {
          const f = v as File;
          lines.push(`<li><strong>${escapeHtml(k)}:</strong> [file] ${escapeHtml(f.name)} (${f.size} bytes)</li>`);
        }
      }
      const html = `
        <div>
          <p>A new ${escapeHtml(service)} submission has been received.</p>
          <p><strong>Booking ID:</strong> ${escapeHtml(bookingId)}</p>
          <ul>${lines.join("\n")}</ul>
        </div>`;
      await sendSubmissionEmail({
        subject: `[Resinaro] New ${service} submission (${bookingId})`,
        html,
        text: `New ${service} submission. Booking ID: ${bookingId}.`,
      });
    } catch (notifyErr) {
      console.warn("Submission email failed:", notifyErr);
    }

    // 2) Pick the right Payment Link
    const base = PAYMENT_LINKS[service] || PAYMENT_LINKS["visa-application"];

    // 3) Add useful params (Checkout supports these on Payment Links)
    const url = new URL(base);
    if (email) url.searchParams.set("prefilled_email", email);
    url.searchParams.set("client_reference_id", bookingId); // lets you match via webhooks

    // Optional: add your own UTM/source tags
    url.searchParams.set("utm_source", "resinaro");
    url.searchParams.set("utm_medium", service);

    // 4) Respond with the Payment Link
    return NextResponse.json({ url: url.toString() }, { status: 200 });
  } catch (e: unknown) {
    console.error(e);
    const message = e instanceof Error ? e.message : "Unable to prepare checkout";
    return new NextResponse(message, { status: 500 });
  }
}
