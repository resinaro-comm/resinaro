// src/app/api/passport/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover" as const,
    })
  : null;

// Prices in pence (GBP)
const AMOUNTS: Record<string, number> = {
  "ap-1": 4000,  // £40
  "ap-2": 7800,  // £78
  "ap-3": 11500, // £115
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
    const { choice, qty, name, email, locale, bookingId } = body as {
      choice: "ap-1" | "ap-2" | "ap-3";
      qty?: number;
      name?: string;
      email?: string;
      locale?: string;
      bookingId?: string;
    };

    const amount = AMOUNTS[choice];
    if (!amount) {
      return NextResponse.json(
        { error: "Invalid appointment choice." },
        { status: 400 },
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      description:
        qty && qty > 1
          ? `Italian passport appointments (${qty} people, Prenot@Mi 12+) — Resinaro`
          : "Italian passport appointment (1 person, Prenot@Mi 12+) — Resinaro",
      receipt_email: email || undefined,
      metadata: {
        service: "passport-appointment-prenotami-12plus",
        choice,
        qty: String(qty ?? ""),
        name: name || "",
        email: email || "",
        locale: locale || "",
        bookingId: bookingId || "",
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "always", // needed for Klarna / Clearpay
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
    console.error("Error creating passport PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
