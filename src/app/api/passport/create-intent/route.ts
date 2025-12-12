// src/app/api/passport/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";

type Choice = "ap-1" | "ap-2" | "ap-3";

// Prices in pence (GBP)
const AMOUNTS: Record<Choice, number> = {
  "ap-1": 4000,  // £40
  "ap-2": 7800,  // £78
  "ap-3": 11500, // £115
};

// You can override this with env vars if you want.
// For now we hard-default to your HTTP API URL so dev “just works”.
const DEFAULT_FORMS_API_BASE_URL =
  "https://y1se62wura.execute-api.eu-west-2.amazonaws.com";

const FORMS_API_BASE_URL =
  process.env.FORMS_API_BASE_URL ||
  process.env.NEXT_PUBLIC_FORMS_API_BASE_URL ||
  DEFAULT_FORMS_API_BASE_URL;

if (!FORMS_API_BASE_URL) {
  throw new Error("FORMS_API_BASE_URL is not configured");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      choice: Choice;
      qty?: number;
      name?: string;
      email?: string;
      locale?: string;
      bookingId?: string;
    };

    const { choice, qty, name, email, locale, bookingId } = body;

    const amountCents = AMOUNTS[choice];
    if (!amountCents) {
      return NextResponse.json(
        { error: "Invalid appointment choice." },
        { status: 400 },
      );
    }
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields (name/email)." },
        { status: 400 },
      );
    }

    const people = qty && qty > 1 ? qty : 1;

    const description =
      people > 1
        ? `Italian passport appointments (${people} people, Prenot@Mi 12+) — Resinaro`
        : "Italian passport appointment (1 person, Prenot@Mi 12+) — Resinaro";

    // This is what your AWS Lambda expects
    const payloadForPlatform = {
      site: "resinaro",
      formSlug: "passport_appointment_12plus",
      email: email.trim(),
      name: name.trim(),
      phone: "", // Passport form doesn't currently collect phone
      sourceUrl: "https://resinaro.com/services/passport",
      payload: {
        choice,
        qty: people,
        locale,
        bookingId,
      },
      payment: {
        amountCents,
        currency: "gbp",
        description,
      },
    };

    const res = await fetch(
      `${FORMS_API_BASE_URL.replace(/\/$/, "")}/forms/submit-paid`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadForPlatform),
      },
    );

    const json = await res.json().catch(() => ({}));

    if (!res.ok || !json.clientSecret) {
      console.error(
        "[passport/create-intent] Platform error",
        res.status,
        json,
      );
      return NextResponse.json(
        {
          error:
            json.error ||
            "Unable to prepare payment. Please try again or email resinaro@proton.me.",
        },
        { status: 500 },
      );
    }

    // Front-end expects at least { clientSecret }
    // We also pass submissionId so we can use it later if we want.
    return NextResponse.json({
      clientSecret: json.clientSecret,
      submissionId: json.submissionId,
    });
  } catch (err) {
    console.error("Error creating passport PaymentIntent via platform", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
