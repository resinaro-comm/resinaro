// src/app/api/citizenship-by-descent/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover",
    })
  : null;

type Option = "guide-35" | "check-170";

const AMOUNTS: Record<Option, number> = {
  "guide-35": 3500,   // £35
  "check-170": 17000, // £170
};

const DESCRIPTIONS: Record<Option, string> = {
  "guide-35":
    "Italian citizenship by descent guide (UK) — Resinaro",
  "check-170":
    "Italian citizenship by descent 1:1 document & plan check (UK) — Resinaro",
};

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { option, name, email, telephone, locale, bookingId } = body as {
      option: Option;
      name?: string;
      email?: string;
      telephone?: string;
      locale?: string;
      bookingId?: string;
    };

    if (!option || !(option in AMOUNTS)) {
      return NextResponse.json(
        { error: "Invalid option." },
        { status: 400 },
      );
    }

    const amount = AMOUNTS[option];
    const description = DESCRIPTIONS[option];

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      description,
      receipt_email: email || undefined,
      metadata: {
        service: "citizenship-by-descent",
        option,
        name: name || "",
        email: email || "",
        telephone: telephone || "",
        locale: locale || "",
        bookingId: bookingId || "",
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "always", // required for Klarna / Clearpay
      },
    });

    if (!paymentIntent.client_secret) {
      return NextResponse.json(
        { error: "Could not create payment intent." },
        { status: 500 },
      );
    }

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Error creating citizenship PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
