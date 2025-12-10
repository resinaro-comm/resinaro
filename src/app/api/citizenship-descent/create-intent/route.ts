// src/app/api/citizenship-descent/create-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover" as const,
    })
  : null;

// amounts in pence (GBP)
const AMOUNTS: Record<"guide" | "121", number> = {
  guide: 3500, // £35
  121: 17000,  // £170
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
    const { name, email, locale, service, summary } = body as {
      name?: string;
      email?: string;
      locale?: string;
      service?: "guide" | "121";
      summary?: string;
    };

    if (!service || !(service in AMOUNTS)) {
      return NextResponse.json(
        { error: "Missing or invalid service type." },
        { status: 400 },
      );
    }

    const amount = AMOUNTS[service];

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      description:
        service === "guide"
          ? "Italian citizenship by descent – £35 written guide (Resinaro)"
          : "Italian citizenship by descent – £170 1:1 support (Resinaro)",
      receipt_email: email || undefined,
      metadata: {
        product: "citizenship-by-descent-uk",
        service,
        name: name || "",
        email: email || "",
        locale: locale || "",
        summary: summary || "",
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
    console.error("Error creating citizenship-descent PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
