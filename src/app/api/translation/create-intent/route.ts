// src/app/api/translation/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not set. Add it to .env.local");
}

// Use a recent API version; adjust if needed for your project.
const stripe = new Stripe(secretKey, {
  apiVersion: "2025-09-30.clover",
});

const PAGE_AMOUNTS: Record<"1" | "2" | "3" | "4", number> = {
  "1": 1800, // £18
  "2": 2400, // £24
  "3": 2600, // £26
  "4": 3000, // £30
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const pageBand = body.pageBand as "1" | "2" | "3" | "4" | undefined;
    const email = (body.email as string | undefined)?.trim();
    const telephone = (body.telephone as string | undefined)?.trim() ?? "";
    const locale = (body.locale as string | undefined) ?? "";
    const bookingId = (body.bookingId as string | undefined)?.trim();

    if (!pageBand || !PAGE_AMOUNTS[pageBand]) {
      return NextResponse.json(
        { error: "Invalid pageBand." },
        { status: 400 },
      );
    }
    if (!email) {
      return NextResponse.json(
        { error: "Missing email." },
        { status: 400 },
      );
    }
    if (!bookingId) {
      return NextResponse.json(
        { error: "Missing bookingId." },
        { status: 400 },
      );
    }

    const amount = PAGE_AMOUNTS[pageBand];

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      receipt_email: email,
      automatic_payment_methods: { enabled: true },
      metadata: {
        service: `translation-${pageBand}-page`,
        bookingId,
        pageBand,
        email,
        telephone,
        locale,
      },
    });

    if (!intent.client_secret) {
      return NextResponse.json(
        { error: "No client secret returned from Stripe." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { clientSecret: intent.client_secret },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error creating translation PaymentIntent:", err);
    return NextResponse.json(
      { error: "Unable to create payment intent." },
      { status: 500 },
    );
  }
}
