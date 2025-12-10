// src/app/api/citizenship-language-check/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover" as const,
    })
  : null;

// Price in pence (GBP) – £50.00
const CITIZENSHIP_LANGUAGE_CHECK_AMOUNT = 5000;

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured (missing STRIPE_SECRET_KEY env variable).",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { name, email, locale, sourcePage } = body as {
      name?: string;
      email?: string;
      locale?: string;
      sourcePage?: string;
    };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: CITIZENSHIP_LANGUAGE_CHECK_AMOUNT,
      currency: "gbp",
      description:
        "Citizenship Route & Language Strategy Mini-Review — Resinaro",
      receipt_email: email || undefined,
      metadata: {
        service: "citizenship-language-check",
        name: name || "",
        email: email || "",
        locale: locale || "",
        sourcePage: sourcePage || "",
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "always",
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
    console.error("Error creating citizenship-language-check PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
