// src/app/api/stripe/webhook/route.ts
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-09-30.clover",
});

export const runtime = "nodejs"; // ensure Node.js runtime (not edge) for raw body

// Next.js App Router needs the raw body for signature verification.
export const POST = async (req: Request) => {
  const h = await headers();
  const sig = h.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("Missing STRIPE_WEBHOOK_SECRET env var");
    return new NextResponse("Webhook secret not configured", { status: 500 });
  }
  if (!sig) {
    return new NextResponse("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const buf = Buffer.from(await req.arrayBuffer());
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Webhook signature verification failed:", message);
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.customer_details?.email || session.customer_email || undefined;
        const md = (session.metadata ?? undefined) as Stripe.Metadata | undefined;
        const clientRef = session.client_reference_id || md?.bookingId;
        const service = md?.service;
        console.log("[stripe] checkout.session.completed", { email, clientRef, service, sessionId: session.id });
        break;
      }
      case "payment_intent.succeeded": {
        const pi = event.data.object as Stripe.PaymentIntent;
        console.log("[stripe] payment_intent.succeeded", { id: pi.id, amount: pi.amount, currency: pi.currency });
        break;
      }
      default:
        // Optionally handle subscription or refund events later
        console.log("[stripe] unhandled event", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Webhook handler error:", message);
    return new NextResponse("Handler error", { status: 500 });
  }
};
