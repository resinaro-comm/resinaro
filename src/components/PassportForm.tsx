// src/components/PassportForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";
import { usePathname } from "next/navigation";

import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementLocale } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

/* =============================== STRIPE =============================== */

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Add it to .env.local",
  );
}
const stripePromise = loadStripe(publishableKey);

/* =============================== GAS ================================= */

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

type Locale = "en" | "it";
type Choice = "ap-1" | "ap-2" | "ap-3";

/* Quantity + pricing for appointments */
const CHOICES: Record<Choice, { qty: 1 | 2 | 3; amount: number }> = {
  "ap-1": { qty: 1, amount: 40 },
  "ap-2": { qty: 2, amount: 78 },
  "ap-3": { qty: 3, amount: 115 },
};

/* -------------------------- locale detection ------------------------- */
function useSafeLocale(): Locale {
  const pathname = usePathname() || "/";
  return /^\/it(\/|$)/i.test(pathname) ? "it" : "en";
}

/* ------------------------------- i18n -------------------------------- */
function t(locale: Locale) {
  const it = locale === "it";

  return {
    qTitle: it
      ? "Assistenza appuntamento passaporto (Prenot@Mi 12+)"
      : "Passport appointment support (Prenot@Mi 12+)",
    qDesc: it
      ? "Inserisci i tuoi dati, scegli per quante persone vuoi l’appuntamento e completa il pagamento in modo sicuro su questa pagina."
      : "Enter your details, choose how many people need an appointment, and complete payment securely on this page.",

    fullName: it ? "Nome e cognome *" : "Full name *",
    email: it ? "Email *" : "Email *",
    qty: it
      ? "Quante persone servono l’appuntamento? *"
      : "How many people need an appointment? *",
    priceHint: it
      ? "Prezzi appuntamento Prenot@Mi (12+ / adulti): 1 persona £40 • 2 persone £78 • 3 persone £115."
      : "Appointment pricing (Prenot@Mi, 12+ / adults): 1 person £40 • 2 people £78 • 3 people £115.",

    // Klarna / Clearpay highlight (step 1)
    multiPayTitle: it
      ? "Pagamenti flessibili disponibili"
      : "Flexible payments available",
    multiPayLine: it
      ? "Il pagamento viene gestito da Stripe. A seconda della banca e del tuo profilo potresti vedere opzioni come Klarna (paga in 3) e Clearpay (paga in 4), oltre a carta, Apple Pay e Google Pay."
      : "Payment is handled by Stripe. Depending on your bank and profile you may see options like Klarna (pay in 3) and Clearpay (pay in 4), as well as card, Apple Pay and Google Pay.",

    // Klarna / Clearpay legend (step 2)
    installmentTitle: it
      ? "Se vedi queste opzioni al pagamento:"
      : "If you see these options at checkout:",
    installmentCard: it
      ? "Carta: paghi tutto subito, una sola volta."
      : "Card: pay the full amount now, in one go.",
    installmentKlarna: it
      ? "Klarna: di solito permette di dividere l’importo in 3 pagamenti. La disponibilità dipende da Klarna e dalla tua banca."
      : "Klarna: usually lets you split the amount into 3 payments. Availability depends on Klarna and your bank.",
    installmentClearpay: it
      ? "Clearpay: di solito permette di dividere l’importo in 4 pagamenti. La disponibilità dipende da Clearpay e dalla tua banca."
      : "Clearpay: usually lets you split the amount into 4 payments. Availability depends on Clearpay and your bank.",

    // Agreements
    startNowLabel: it
      ? "Acconsento che Resinaro inizi subito a lavorare su questo servizio."
      : "I agree for Resinaro to start working on this service immediately.",
    coolingOff: it
      ? "Capisco che ho 14 giorni di recesso, ma se annullo dopo l’inizio del lavoro potrete trattenere una parte proporzionata; una volta che il servizio è stato completato entro 14 giorni, perdo il diritto di recesso."
      : "I understand I have a 14-day cooling-off period, but if I cancel after work has started you may retain a proportionate amount; once the service is fully performed within 14 days I lose my right to cancel.",
    refundPrefix: it ? "Ho letto e accetto la" : "I have read and accept the",
    consentText: it
      ? "Acconsento al trattamento dei miei dati da parte di Resinaro per fornire questo servizio."
      : "I consent to Resinaro storing and processing my data in order to provide this service.",

    // Buttons / states
    detailsCta: it ? "Vai al pagamento sicuro" : "Go to secure payment",
    detailsPreparing: it
      ? "Preparazione del pagamento sicuro…"
      : "Preparing secure payment…",
    payNow: (amount: number) =>
      it ? `Paga £${amount} ora` : `Pay £${amount} now`,
    payProcessing: it ? "Pagamento in corso…" : "Processing payment…",

    paymentSecurityNote: it
      ? "Il pagamento avviene direttamente su questa pagina tramite Stripe. Resinaro non vede né memorizza mai i dati della tua carta. A seconda della banca, potresti vedere anche Klarna (paga in 3) e Clearpay (paga in 4)."
      : "Payment is processed on this page by Stripe. Resinaro never sees or stores your card details. Depending on your bank, you may also see Klarna (pay in 3) and Clearpay (pay in 4).",

    backToDetails: it
      ? "← Modifica dati / quantità"
      : "← Edit details / quantity",

    // Errors
    errNameEmail: it
      ? "Inserisci nome completo ed email."
      : "Please enter your full name and email address.",
    errQty: it
      ? "Seleziona quante persone hanno bisogno dell’appuntamento."
      : "Please choose how many people need an appointment.",
    errStart: it
      ? "Conferma che possiamo iniziare subito e di aver compreso i termini di recesso."
      : "Please confirm we can start immediately and that you understand the cooling-off terms.",
    errRefund: it
      ? "Accetta la Refund & Credit Policy."
      : "Please accept the Refund & Credit Policy.",
    errConsent: it
      ? "Accetta il consenso privacy."
      : "Please accept the privacy consent.",
    errGeneric: it
      ? "Qualcosa è andato storto. Riprova o scrivici via email/WhatsApp."
      : "Something went wrong. Please try again or contact us by email/WhatsApp.",
  } as const;
}

/* ------------------------------ UUID helper --------------------------- */

type CryptoWithRandomUUID = Crypto & {
  randomUUID?: () => string;
};

function safeUUID(): string {
  try {
    if (typeof crypto !== "undefined") {
      const c = crypto as CryptoWithRandomUUID;

      if (typeof c.randomUUID === "function") {
        return c.randomUUID();
      }

      if (typeof c.getRandomValues === "function") {
        const buf = new Uint8Array(16);
        c.getRandomValues(buf);
        buf[6] = (buf[6] & 0x0f) | 0x40; // version 4
        buf[8] = (buf[8] & 0x3f) | 0x80; // variant 10
        const h = Array.from(buf, (b) => b.toString(16).padStart(2, "0"));
        return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
          .slice(6, 8)
          .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
      }
    }
  } catch {
    // fall through
  }

  return `rsr-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* ================================ MAIN FORM ============================ */

export default function PassportForm() {
  const locale = useSafeLocale();
  const copy = t(locale);

  // Step 1 – intake
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState<Choice>("ap-1");

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [detailsSubmitting, setDetailsSubmitting] = useState(false);

  // Step 2 – on-page payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  // Shared UI
  const [error, setError] = useState<string | null>(null);

  const sel = CHOICES[choice];
  const amountLabel = `£${sel.amount}`;

  const detailsSubmitDisabled =
    detailsSubmitting ||
    !fullName.trim() ||
    !email.trim() ||
    !startNowAgree ||
    !refundAgree ||
    !privacyConsent;

  const showPaymentStep = !!clientSecret;

  /* ---------- Step 1: handle intake + create PaymentIntent ---------- */
  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim()) {
      setError(copy.errNameEmail);
      return;
    }
    if (!choice) {
      setError(copy.errQty);
      return;
    }
    if (!startNowAgree) {
      setError(copy.errStart);
      return;
    }
    if (!refundAgree) {
      setError(copy.errRefund);
      return;
    }
    if (!privacyConsent) {
      setError(copy.errConsent);
      return;
    }

    try {
      setDetailsSubmitting(true);
      const id = safeUUID();
      setBookingId(id);

      // Log to Google Apps Script (best-effort)
      const dataPayload = {
        mode: "single",
        qty: String(sel.qty),
        amount: String(sel.amount),
        startNowAgree: startNowAgree ? "1" : "0",
        refundPolicyAgree: refundAgree ? "1" : "0",
        privacyConsent: privacyConsent ? "1" : "0",
        policyVersion: "2025-12-07",
        locale,
      };

      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId: id,
          service: `passport-appointment-prenotami-${sel.qty}`,
          name: fullName.trim(),
          email: email.trim(),
          telephone: "",
          files: [],
          data: dataPayload,
        }),
      }).catch(() => {
        // If logging fails, still proceed to payment.
      });

      // Ask our API to create a PaymentIntent and return clientSecret
      const res = await fetch("/api/passport/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          choice,
          qty: sel.qty,
          name: fullName.trim(),
          email: email.trim(),
          locale,
          bookingId: id,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.clientSecret) {
        throw new Error(json.error || copy.errGeneric);
      }

      setClientSecret(json.clientSecret);
    } catch (err) {
      const msg =
        err instanceof Error && err.message ? err.message : copy.errGeneric;
      setError(msg);
    } finally {
      setDetailsSubmitting(false);
    }
  }

  /* -------------------------- RENDER STEP 1 -------------------------- */
  if (!showPaymentStep) {
    return (
      <form
        onSubmit={handleDetailsSubmit}
        className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        aria-live="polite"
      >
        <div>
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.qTitle}
          </h2>
          <p className="mt-1 text-sm text-zinc-700">{copy.qDesc}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm text-zinc-900">{copy.fullName}</span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm text-zinc-900">{copy.email}</span>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Quantity + clear pricing */}
        <div>
          <label className="block">
            <span className="text-sm text-zinc-900">{copy.qty}</span>
            <select
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={choice}
              onChange={(e) => setChoice(e.target.value as Choice)}
              required
            >
              <option value="ap-1">
                {locale === "it"
                  ? "1 × appuntamento — £40"
                  : "1 × appointment — £40"}
              </option>
              <option value="ap-2">
                {locale === "it"
                  ? "2 × appuntamenti — £78"
                  : "2 × appointments — £78"}
              </option>
              <option value="ap-3">
                {locale === "it"
                  ? "3 × appuntamenti — £115"
                  : "3 × appointments — £115"}
              </option>
            </select>
          </label>

          <p className="mt-2 text-xs text-zinc-700">{copy.priceHint}</p>

          {/* Big, visible multi-pay box */}
          <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-xs text-emerald-950">
            <p className="font-semibold">{copy.multiPayTitle}</p>
            <p className="mt-1">{copy.multiPayLine}</p>
          </div>
        </div>

        {/* Agreements — all three required */}
        <div className="space-y-3 rounded-xl border border-green-200 bg-green-50 p-3">
          <label className="flex items-start gap-2 text-sm text-emerald-950">
            <input
              type="checkbox"
              className="mt-1"
              checked={startNowAgree}
              onChange={(e) => setStartNowAgree(e.target.checked)}
            />
            <span>
              <span className="block font-semibold">
                {copy.startNowLabel}
              </span>
              <span className="mt-0.5 block text-xs">
                {copy.coolingOff}
              </span>
            </span>
          </label>

          <label className="flex items-start gap-2 text-sm text-emerald-950">
            <input
              type="checkbox"
              className="mt-1"
              checked={refundAgree}
              onChange={(e) => setRefundAgree(e.target.checked)}
            />
            <span>
              {copy.refundPrefix}{" "}
              <Link
                href={p(locale, "/refund-policy")}
                className="underline text-emerald-900"
                target="_blank"
                rel="noreferrer"
              >
                {locale === "it"
                  ? "Refund & Credit Policy"
                  : "Refund & Credit Policy"}
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-2 text-sm text-emerald-950">
            <input
              type="checkbox"
              className="mt-1"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
            />
            <span>
              {copy.consentText}{" "}
              <Link
                href={p(locale, "/privacy-policy")}
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={detailsSubmitDisabled}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${
              detailsSubmitDisabled
                ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
                : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
            }`}
          >
            {detailsSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-50" />
                <span>{copy.detailsPreparing}</span>
              </>
            ) : (
              copy.detailsCta
            )}
          </button>
          <p className="mt-1 text-[11px] text-zinc-500">
            {locale === "it"
              ? `Prossimo passo: pagamento di ${amountLabel} con Stripe.`
              : `Next step: pay ${amountLabel} securely with Stripe.`}
          </p>
        </div>
      </form>
    );
  }

  /* -------------------------- RENDER STEP 2 -------------------------- */
  const elementsOptions = {
    clientSecret: clientSecret!,
    locale:
      locale === "it"
        ? ("it" as StripeElementLocale)
        : ("en-GB" as StripeElementLocale),
  };

  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <PassportPaymentStep
        locale={locale}
        copy={copy}
        choice={choice}
        amountLabel={amountLabel}
        bookingId={bookingId!}
        error={error}
        setError={setError}
        onBack={() => {
          setClientSecret(null);
          setError(null);
        }}
      />
    </Elements>
  );
}

/* ============================= PAYMENT STEP ============================ */

function PassportPaymentStep({
  locale,
  copy,
  choice,
  amountLabel,
  bookingId,
  error,
  setError,
  onBack,
}: {
  locale: Locale;
  copy: ReturnType<typeof t>;
  choice: Choice;
  amountLabel: string;
  bookingId: string;
  error: string | null;
  setError: (val: string | null) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);

  const sel = CHOICES[choice];
  const payLabel = copy.payNow(sel.amount);

  const serviceLabel =
    locale === "it"
      ? `${sel.qty} × appuntamento passaporto (Prenot@Mi, 12+)`
      : `${sel.qty} × passport appointment${sel.qty > 1 ? "s" : ""} (Prenot@Mi, 12+)`;

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setError(null);
    setPaying(true);

    try {
      // Validate PaymentElement fields first
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || copy.errGeneric);
        setPaying(false);
        return;
      }

      const base =
        typeof window !== "undefined"
          ? window.location.origin
          : "https://www.resinaro.com";

      // locale-aware onboarding path, e.g. /en/services/passport/onboarding
      const onboardingPath = p(locale, "/services/passport/onboarding");

      // include qty so onboarding knows how many person cards to show
      const returnUrl = `${base}${onboardingPath}?paid=1&ref=${encodeURIComponent(
        bookingId,
      )}&qty=${sel.qty}`;

      const { error: stripeErr } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (stripeErr) {
        setError(stripeErr.message || copy.errGeneric);
        setPaying(false);
        return;
      }

      // For cards with 3DS / Klarna / Clearpay etc, Stripe handles redirects
    } catch (err) {
      const msg =
        err instanceof Error && err.message ? err.message : copy.errGeneric;
      setError(msg);
      setPaying(false);
    }
  }

  return (
    <form
      onSubmit={handlePay}
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {locale === "it"
              ? "Completa il pagamento sicuro"
              : "Complete secure payment"}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">
            {locale === "it"
              ? "Inserisci i dati di pagamento qui sotto. Il pagamento viene elaborato da Stripe."
              : "Enter your payment details below. Payment is processed by Stripe."}
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-medium text-emerald-800 underline underline-offset-2"
        >
          {copy.backToDetails}
        </button>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-800">
        <p className="font-semibold">
          {locale === "it" ? "Riepilogo" : "Summary"}
        </p>
        <p className="mt-1">
          {locale === "it" ? "Servizio:" : "Service:"}{" "}
          <span className="font-medium">{serviceLabel}</span>
        </p>
        <p className="mt-0.5">
          {locale === "it" ? "Importo:" : "Amount:"}{" "}
          <span className="font-semibold">{amountLabel}</span>
        </p>
      </div>

      {/* Stripe Payment Element */}
      <div className="rounded-xl border border-zinc-200 bg-white p-3">
        <PaymentElement />
      </div>

      {/* Klarna / Clearpay legend */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-[11px] text-zinc-700">
        <p className="font-semibold">{copy.installmentTitle}</p>
        <ul className="mt-1 list-disc list-inside space-y-0.5">
          <li>{copy.installmentCard}</li>
          <li>{copy.installmentKlarna}</li>
          <li>{copy.installmentClearpay}</li>
        </ul>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={paying || !stripe || !elements}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${
            paying || !stripe || !elements
              ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
              : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
          }`}
        >
          {paying ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-50" />
              <span>{copy.payProcessing}</span>
            </>
          ) : (
            payLabel
          )}
        </button>
        <p className="mt-1 text-[11px] text-zinc-500">
          {copy.paymentSecurityNote}
        </p>
      </div>
    </form>
  );
}
