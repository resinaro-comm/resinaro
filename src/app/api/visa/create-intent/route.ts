import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not set. Add it to .env.local");
}

const stripe = new Stripe(secretKey, {
  apiVersion: "2025-09-30.clover", // or latest in your dashboard
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { option, name, email, telephone, locale, bookingId } = body;

    if (!option || !name || !telephone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const amount = option === "full-70" ? 7000 : 3500; // GBP in pence

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      receipt_email: email || undefined,
      automatic_payment_methods: { enabled: true }, // card + Klarna + Clearpay etc, depending on your account settings
      metadata: {
        service: `visa-intake-${option}`,
        name,
        email: email || "",
        telephone,
        locale: locale || "en",
        bookingId: bookingId || "",
      },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 },
    );
  }
}
