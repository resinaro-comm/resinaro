// src/components/FamilyTravelCheckForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementLocale } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

type Locale = "en" | "it";

/* ============================ STRIPE SETUP ============================ */

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Add it to .env.local",
  );
}

const stripePromise = loadStripe(publishableKey);
const AMOUNT_LABEL = "£5";

/* =============================== GAS ================================= */

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

/* ================================ i18n ================================ */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    // Step 1
    ariaStep1: it
      ? "Modulo acquisto Family Travel Check"
      : "Family Travel Check purchase form",
    step1Title: it
      ? "Raccontaci del tuo viaggio"
      : "Tell us about your trip",
    step1Desc: it
      ? "Controlliamo se documenti, età dei bambini e percorso hanno senso per un viaggio UK → Italia e ti mandiamo una checklist personalizzata."
      : "We sanity-check whether your documents, kids’ ages and route make sense for a UK → Italy trip and send a short personalised checklist.",
    fullName: it ? "Nome e cognome *" : "Full name *",
    email: it ? "Email *" : "Email *",
    tripDetails: it
      ? "Viaggio & bambini (in breve) *"
      : "Trip & kids (briefly) *",
    tripDetailsPh: it
      ? 'Es.: "Due bimbi di 3 e 7 anni, volo Manchester–Roma a luglio, io ho passaporto italiano, loro solo UK, viaggio da sola."'
      : 'E.g. “Two kids (3 and 7), flight Manchester–Rome in July, I have Italian passport, they only have UK, I’m travelling alone.”',
    languageLabel: it ? "Lingua preferita" : "Preferred language",
    langEither: it
      ? "Italiano o inglese, va bene tutto"
      : "Either Italian or English",
    langIt: it ? "Italiano" : "Italian",
    langEn: it ? "English" : "English",

    startNowLabel: it
      ? "Acconsento che Resinaro inizi subito a lavorare su questo controllo da £5."
      : "I agree for Resinaro to start working on this £5 check immediately.",
    coolingOff: it
      ? "Capisco che, trattandosi di un servizio digitale veloce, una volta ricevuto il responso personalizzato il diritto di recesso si considera consumato."
      : "I understand that because this is a quick digital service, once I receive the personalised response my right to cancel is considered used.",
    refundPrefix: it ? "Ho letto e accetto la" : "I have read and accept the",
    privacyText: it
      ? "Acconsento al trattamento dei miei dati da parte di Resinaro per fornire questo servizio."
      : "I consent to Resinaro storing and processing my data in order to provide this service.",

    detailsCta: it
      ? "Vai al pagamento sicuro"
      : "Go to secure payment",
    detailsPreparing: it
      ? "Preparazione del pagamento sicuro…"
      : "Preparing secure payment…",
    step1Hint: it
      ? `Prossimo passo: pagamento di ${AMOUNT_LABEL} con Stripe.`
      : `Next step: pay ${AMOUNT_LABEL} securely with Stripe.`,

    // Step 2
    paymentTitle: it
      ? "Completa il pagamento Family Travel Check"
      : "Complete Family Travel Check payment",
    paymentDesc: it
      ? "Inserisci i dati di pagamento qui sotto. Il pagamento viene elaborato da Stripe; Resinaro non vede mai i dati della carta."
      : "Enter your payment details below. Payment is processed by Stripe; Resinaro never sees your card details.",
    summaryTitle: it ? "Riepilogo" : "Summary",
    serviceLabel: it
      ? "Family Travel Quick Check (UK → Italia)"
      : "Family Travel Quick Check (UK → Italy)",
    amountLabelPrefix: it ? "Importo:" : "Amount:",
    backToDetails: it
      ? "← Modifica dati viaggio"
      : "← Edit trip details",

    payNow: (amount: string) =>
      it ? `Paga ${amount} ora` : `Pay ${amount} now`,
    payProcessing: it
      ? "Pagamento in corso…"
      : "Processing payment…",

    paymentSecurityNote: it
      ? "Il pagamento avviene su questa pagina tramite Stripe. A seconda della banca, potresti vedere anche Klarna (paga in 3) o Clearpay (paga in 4), oltre a carta, Apple Pay e Google Pay."
      : "Payment is processed on this page by Stripe. Depending on your bank, you may also see Klarna (pay in 3) or Clearpay (pay in 4), as well as cards, Apple Pay and Google Pay.",

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

    // Errors
    errNameEmail: it
      ? "Inserisci nome completo ed email."
      : "Please enter your full name and email address.",
    errTrip: it
      ? "Racconta in poche righe il viaggio e i bambini."
      : "Please describe the trip and kids in a few lines.",
    errStart: it
      ? "Conferma che possiamo iniziare subito e di aver compreso le condizioni."
      : "Please confirm we can start immediately and that you understand the conditions.",
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

/* ============================ MAIN COMPONENT =========================== */

export default function FamilyTravelCheckForm({
  locale,
}: {
  locale: Locale;
}) {
  const copy = t(locale);

  // Step 1 – intake
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tripDetails, setTripDetails] = useState("");
  const [languagePref, setLanguagePref] = useState<"either" | "it" | "en">(
    "either",
  );

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [detailsSubmitting, setDetailsSubmitting] = useState(false);

  // Step 2 – on-page payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  // Shared UI
  const [error, setError] = useState<string | null>(null);

  const detailsSubmitDisabled =
    detailsSubmitting ||
    !fullName.trim() ||
    !email.trim() ||
    !tripDetails.trim() ||
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
    if (!tripDetails.trim()) {
      setError(copy.errTrip);
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

      const dataPayload = {
        tripDetails: tripDetails.trim(),
        languagePref,
        startNowAgree: startNowAgree ? "1" : "0",
        refundPolicyAgree: refundAgree ? "1" : "0",
        privacyConsent: privacyConsent ? "1" : "0",
        policyVersion: "2025-12-09",
        locale,
      };

      // Best-effort log to Google Apps Script
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId: id,
          service: "family-travel-check-uk-it",
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
      const res = await fetch("/api/family-travel/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          locale,
          bookingId: id,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.clientSecret) {
        throw new Error(json?.error || copy.errGeneric);
      }

      setClientSecret(json.clientSecret as string);
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
        noValidate
        aria-label={copy.ariaStep1}
        className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm"
      >
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {copy.step1Title}
          </h3>
          <p className="mt-1 text-sm text-neutral-700">{copy.step1Desc}</p>
        </div>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {error}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2 block">
            <span className="text-sm text-zinc-900">{copy.fullName}</span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>

          <label className="sm:col-span-2 block">
            <span className="text-sm text-zinc-900">{copy.email}</span>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="sm:col-span-2 block">
            <span className="text-sm text-zinc-900">{copy.tripDetails}</span>
            <textarea
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              rows={4}
              value={tripDetails}
              onChange={(e) => setTripDetails(e.target.value)}
              placeholder={copy.tripDetailsPh}
              required
            />
          </label>

          <label className="sm:col-span-2 block">
            <span className="text-sm text-zinc-900">
              {copy.languageLabel}
            </span>
            <select
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={languagePref}
              onChange={(e) =>
                setLanguagePref(e.target.value as "either" | "it" | "en")
              }
            >
              <option value="either">{copy.langEither}</option>
              <option value="it">{copy.langIt}</option>
              <option value="en">{copy.langEn}</option>
            </select>
          </label>
        </div>

        {/* Agreements */}
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
                href={`/${locale}/refund-policy`}
                className="underline text-emerald-900"
                target="_blank"
                rel="noreferrer"
              >
                Refund &amp; Credit Policy
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
              {copy.privacyText}{" "}
              <Link
                href={`/${locale}/privacy-policy`}
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

        <div>
          <button
            type="submit"
            disabled={detailsSubmitDisabled}
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
              detailsSubmitDisabled
                ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
                : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
            }`}
          >
            {detailsSubmitting ? copy.detailsPreparing : copy.detailsCta}
          </button>
          <p className="mt-1 text-[11px] text-zinc-500">
            {copy.step1Hint}
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
      <FamilyTravelPaymentStep
        locale={locale}
        copy={copy}
        amountLabel={AMOUNT_LABEL}
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

function FamilyTravelPaymentStep({
  locale,
  copy,
  amountLabel,
  bookingId,
  error,
  setError,
  onBack,
}: {
  locale: Locale;
  copy: ReturnType<typeof t>;
  amountLabel: string;
  bookingId: string;
  error: string | null;
  setError: (val: string | null) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);

  const payLabel = copy.payNow(amountLabel);

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

      const returnUrl = `${base}/${locale}/community/italy-with-kids-from-uk?paid=1&ref=${encodeURIComponent(
        bookingId,
      )}`;

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

      // Stripe handles any redirects (3DS, Klarna, Clearpay…) and then
      // sends the user back to returnUrl.
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
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm"
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {copy.paymentTitle}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">
            {copy.paymentDesc}
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
        <p className="font-semibold">{copy.summaryTitle}</p>
        <p className="mt-1">
          {copy.serviceLabel}
        </p>
        <p className="mt-0.5">
          {copy.amountLabelPrefix}{" "}
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
          className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
            paying || !stripe || !elements
              ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
              : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
          }`}
        >
          {paying ? copy.payProcessing : payLabel}
        </button>
        <p className="mt-1 text-[11px] text-zinc-500">
          {copy.paymentSecurityNote}
        </p>
      </div>
    </form>
  );
}
