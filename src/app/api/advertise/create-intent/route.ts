import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

const stripe = secretKey
  ? new Stripe(secretKey, {
      apiVersion: "2025-09-30.clover" as const,
    })
  : null;

type AdChoice = "web-5" | "web-audit" | "web-50" | "dir-basic" | "dir-premium";

// Prices in pence (GBP)
const PRODUCTS: Record<
  AdChoice,
  { amount: number; description: string; service: string }
> = {
  "web-5": {
    amount: 5000, // £50
    description: "Resinaro — 5-page website build",
    service: "advertise-web-5",
  },
  "web-audit": {
    amount: 7000, // £70
    description: "Resinaro — SEO & conversion audit",
    service: "advertise-web-audit",
  },
  "web-50": {
    amount: 30000, // £300
    description: "Resinaro — up to 50-page website build",
    service: "advertise-web-50",
  },
  "dir-basic": {
    amount: 1000, // £10 (first month)
    description: "Resinaro — basic directory listing (first month)",
    service: "advertise-dir-basic",
  },
  "dir-premium": {
    amount: 6000, // £60 (first month)
    description: "Resinaro — premium directory listing (first month)",
    service: "advertise-dir-premium",
  },
};

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured (missing STRIPE_SECRET_KEY in environment).",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { choice, name, email, locale, bookingId } = body as {
      choice: AdChoice;
      name?: string;
      email?: string;
      locale?: string;
      bookingId?: string;
    };

    const product = PRODUCTS[choice];
    if (!product) {
      return NextResponse.json(
        { error: "Invalid advertising package choice." },
        { status: 400 },
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.amount,
      currency: "gbp",
      description: product.description,
      receipt_email: email || undefined,
      metadata: {
        service: product.service,
        choice,
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
    console.error("Error creating advertise PaymentIntent", err);
    return NextResponse.json(
      { error: "Failed to prepare payment." },
      { status: 500 },
    );
  }
}
