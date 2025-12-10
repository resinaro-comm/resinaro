// src/app/api/family-travel/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover" as const,
    })
  : null;

// Single-price service in pence (GBP)
const FAMILY_TRAVEL_CHECK_AMOUNT = 500; // £5.00

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { name, email, locale, bookingId } = body as {
      name?: string;
      email?: string;
      locale?: string;
      bookingId?: string;
    };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: FAMILY_TRAVEL_CHECK_AMOUNT,
      currency: "gbp",
      description: "Family Travel Quick Check (UK → Italy) — Resinaro",
      receipt_email: email || undefined,
      metadata: {
        service: "family-travel-check-uk-it",
        name: name || "",
        email: email || "",
        locale: locale || "",
        bookingId: bookingId || "",
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "always", // needed for Klarna / Clearpay etc.
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
    console.error("Error creating family-travel PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
