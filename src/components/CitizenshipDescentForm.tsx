// src/components/CitizenshipDescentForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { p } from "@/lib/localePath";

import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementLocale } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

/** Stripe (client) **/
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Add it to .env.local",
  );
}
const stripePromise = loadStripe(publishableKey);

/** Google Apps Script endpoint + token (same as other services) **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

type Locale = "en" | "it";
type Option = "guide-35" | "check-170";

/* ---------- Locale detection ---------- */
function useSafeLocale(): Locale {
  const pathname = usePathname() || "/";
  return /^\/it(\/|$)/i.test(pathname) ? "it" : "en";
}

/* ---------- i18n for intake + checkout ---------- */
function t(locale: Locale) {
  const it = locale === "it";

  return {
    title: it
      ? "Prenota il supporto cittadinanza per discendenza"
      : "Book citizenship-by-descent support",
    desc: it
      ? "Inserisci i tuoi dati, scegli se vuoi la guida scritta da £35 o il controllo documenti + piano 1:1 da £170 e completa il pagamento in modo sicuro direttamente su questa pagina."
      : "Enter your details, choose either the £35 written guide or the £170 1:1 document & plan check, and complete payment securely on this page.",

    fullName: it ? "Nome e cognome *" : "Full name *",
    phone: it ? "Telefono / WhatsApp *" : "Phone / WhatsApp *",
    phoneHint: it
      ? "Aggiungi il prefisso internazionale, es. +44 7…"
      : "Include country code, e.g. +44 7…",
    email: it ? "Email *" : "Email *",

    optionLabel: it
      ? "Che tipo di supporto vuoi prenotare? *"
      : "Which option do you want to book? *",
    optionGuideTitle: it
      ? "£35 – guida scritta (fai-da-te)"
      : "£35 – written guide (self-paced)",
    optionGuideBody: it
      ? "Guida approfondita (PDF/online) con note specifiche per il Regno Unito, checklists e modelli di email."
      : "Detailed written guide (PDF/online) with UK-specific notes, checklists and email templates.",
    optionCheckTitle: it
      ? "£170 – controllo documenti + piano 1:1"
      : "£170 – 1:1 document & plan check",
    optionCheckBody: it
      ? "Revisione pratica della linea familiare e dei documenti, call 1:1, piano scritto e struttura cartelle digitale."
      : "Practical review of your line and documents, 1:1 call, written plan and simple digital folder structure.",

    multiPayTitle: it
      ? "Pagamenti flessibili disponibili"
      : "Flexible payments available",
    multiPayLine: it
      ? "Il pagamento è gestito da Stripe. A seconda della banca e del tuo profilo potresti vedere opzioni come Klarna (paga in 3) e Clearpay (paga in 4), oltre a carta, Apple Pay e Google Pay."
      : "Payment is handled by Stripe. Depending on your bank and profile you may see options like Klarna (pay in 3) and Clearpay (pay in 4), as well as card, Apple Pay and Google Pay.",

    // Agreements
    startNowLabel: it
      ? "Chiedo a Resinaro di iniziare subito a lavorare su questo servizio."
      : "I ask Resinaro to start working on this service immediately.",
    coolingOff: it
      ? "Capisco di avere 14 giorni di recesso, ma se annullo dopo l’inizio del lavoro potrete trattenere una parte proporzionata; una volta che il servizio è stato completato entro 14 giorni, perdo il diritto di recesso."
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
    payGuide: it ? "Paga £35 ora" : "Pay £35 now",
    payCheck: it ? "Paga £170 ora" : "Pay £170 now",
    payProcessing: it ? "Pagamento in corso…" : "Processing payment…",
    payDisabled: it ? "Scegli un’opzione" : "Choose an option",

    paymentSecurityNote: it
      ? "Il pagamento avviene direttamente su questa pagina tramite Stripe. Resinaro non vede né memorizza mai i dati della tua carta. A seconda della banca, potresti vedere anche Klarna (paga in 3) e Clearpay (paga in 4)."
      : "Payment is processed on this page by Stripe. Resinaro never sees or stores your card details. Depending on your bank, you may also see Klarna (pay in 3) and Clearpay (pay in 4).",

    backToDetails: it ? "← Modifica dati / opzione" : "← Edit details / option",

    qBeforePay: it
      ? "Domande prima di pagare? Scrivici a resinaro@proton.me o su WhatsApp."
      : "Questions before paying? Email resinaro@proton.me or message us on WhatsApp.",

    // Errors
    errBasics: it
      ? "Inserisci nome completo, telefono/WhatsApp ed email."
      : "Please enter your full name, phone/WhatsApp and email.",
    errOption: it
      ? "Seleziona se vuoi la guida da £35 o il controllo 1:1 da £170."
      : "Please choose either the £35 guide or the £170 1:1 check.",
    errStart: it
      ? "Conferma che possiamo iniziare subito e che hai capito i termini di recesso."
      : "Please confirm we can start immediately and that you understand the cooling-off terms.",
    errRefund: it
      ? "Accetta la Refund & Credit Policy."
      : "Please accept the Refund & Credit Policy.",
    errConsent: it
      ? "Accetta il consenso privacy."
      : "Please accept the privacy consent.",
    errGeneric: it
      ? "Qualcosa è andato storto. Riprova o contattaci via email/WhatsApp."
      : "Something went wrong. Please try again or contact us by email/WhatsApp.",
  };
}

/** Robust UUID (v4) with fallbacks for older browsers */
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

export default function CitizenshipDescentForm() {
  const locale = useSafeLocale();
  const copy = t(locale);

  // Step 1 – intake
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState<Option | "">("");

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [detailsSubmitting, setDetailsSubmitting] = useState(false);

  // Step 2 – on-page payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // Shared UI
  const [error, setError] = useState<string | null>(null);

  const detailsSubmitDisabled =
    detailsSubmitting ||
    !fullName.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !option ||
    !startNowAgree ||
    !refundAgree ||
    !privacyConsent;

  const showPaymentStep = !!clientSecret;

  const amountLabel =
    option === "check-170" ? "£170" : option === "guide-35" ? "£35" : "";

  /* ---------- Step 1: intake + create PaymentIntent ---------- */
  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setError(copy.errBasics);
      return;
    }
    if (!option) {
      setError(copy.errOption);
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

      // Log to Google Apps Script (best-effort)
      const dataPayload = {
        selectedOption: option,
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
          service: `citizenship-by-descent-${option}`,
          name: fullName.trim(),
          email: email.trim(),
          telephone: phone.trim(),
          files: [],
          data: dataPayload,
        }),
      }).catch(() => {
        // logging failure shouldn't block payment
      });

      // Ask our API to create a PaymentIntent and return clientSecret
      const res = await fetch("/api/citizenship-by-descent/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          option,
          name: fullName.trim(),
          email: email.trim(),
          telephone: phone.trim(),
          locale,
          bookingId: id,
        }),
      });

      let json: { clientSecret?: string; error?: string };
      try {
        json = await res.json();
      } catch {
        throw new Error(copy.errGeneric);
      }

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

  /* ---------- Render ---------- */
  if (!showPaymentStep) {
    // STEP 1: intake only
    return (
      <form
        onSubmit={handleDetailsSubmit}
        className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
        aria-live="polite"
      >
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {copy.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">{copy.desc}</p>
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
            <span className="text-sm text-zinc-900">{copy.phone}</span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder={locale === "it" ? "+44 7…" : "+44 7…"}
            />
            <p className="mt-1 text-[11px] text-zinc-500">{copy.phoneHint}</p>
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-zinc-900">{copy.email}</span>
          <input
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>

        {/* Option choice */}
        <fieldset className="space-y-2">
          <legend className="text-sm text-zinc-900">
            {copy.optionLabel} <span className="text-red-600">*</span>
          </legend>
          <div className="mt-1 grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer flex-col rounded-xl border px-3 py-3 text-sm transition-colors hover:border-emerald-500">
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  name="cit-option"
                  className="mt-1"
                  checked={option === "guide-35"}
                  onChange={() => setOption("guide-35")}
                />
                <div>
                  <p className="font-semibold text-emerald-950">
                    {copy.optionGuideTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-700">
                    {copy.optionGuideBody}
                  </p>
                </div>
              </div>
            </label>

            <label className="flex cursor-pointer flex-col rounded-xl border px-3 py-3 text-sm transition-colors hover:border-emerald-500">
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  name="cit-option"
                  className="mt-1"
                  checked={option === "check-170"}
                  onChange={() => setOption("check-170")}
                />
                <div>
                  <p className="font-semibold text-emerald-950">
                    {copy.optionCheckTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-700">
                    {copy.optionCheckBody}
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Klarna / Clearpay info */}
          <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-xs text-emerald-950">
            <p className="font-semibold">{copy.multiPayTitle}</p>
            <p className="mt-1">{copy.multiPayLine}</p>
          </div>
        </fieldset>

        {/* Legal checkboxes */}
        <div className="space-y-3 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-emerald-950">
          <label className="flex items-start gap-2">
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

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={refundAgree}
              onChange={(e) => setRefundAgree(e.target.checked)}
            />
            <span className="text-sm">
              {copy.refundPrefix}{" "}
              <Link
                href={p(locale, "/refund-policy")}
                className="text-green-900 underline"
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

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
            />
            <span className="text-sm">
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
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
              detailsSubmitDisabled
                ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
                : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
            }`}
          >
            {detailsSubmitting ? copy.detailsPreparing : copy.detailsCta}
          </button>
          {amountLabel && (
            <p className="mt-1 text-[11px] text-zinc-500">
              {locale === "it"
                ? `Prossimo passo: pagamento di ${amountLabel} con Stripe.`
                : `Next step: pay ${amountLabel} securely with Stripe.`}
            </p>
          )}
        </div>

        <p className="mt-3 text-[11px] text-zinc-500">{copy.qBeforePay}</p>
      </form>
    );
  }

  // STEP 2: payment element (on-page)
  const elementsOptions = {
    clientSecret: clientSecret!,
    locale:
      locale === "it"
        ? ("it" as StripeElementLocale)
        : ("en-GB" as StripeElementLocale),
  };

  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <CitizenshipPaymentStep
        locale={locale}
        copy={copy}
        option={option as Option}
        amountLabel={amountLabel}
        error={error}
        setError={setError}
        onBack={() => {
          setClientSecret(null);
          setError(null);
          // keep bookingId / intake data as-is
        }}
      />
    </Elements>
  );
}

/* ============================= PAYMENT STEP ============================ */

function CitizenshipPaymentStep({
  locale,
  copy,
  option,
  amountLabel,
  error,
  setError,
  onBack,
}: {
  locale: Locale;
  copy: ReturnType<typeof t>;
  option: Option;
  amountLabel: string;
  error: string | null;
  setError: (val: string | null) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setError(null);
    setPaying(true);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || copy.errGeneric);
        setPaying(false);
        return;
      }

      const returnUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/services/citizenship-by-descent?paid=1`
          : "https://www.resinaro.com/services/citizenship-by-descent?paid=1";

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

      // For card 3DS, Klarna, Clearpay, etc., Stripe will auto-redirect.
    } catch (err) {
      const msg =
        err instanceof Error && err.message ? err.message : copy.errGeneric;
      setError(msg);
      setPaying(false);
    }
  }

  const payLabel =
    option === "check-170"
      ? copy.payCheck
      : option === "guide-35"
      ? copy.payGuide
      : copy.payDisabled;

  return (
    <form
      onSubmit={handlePay}
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
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
          <span className="font-medium">
            {option === "guide-35"
              ? copy.optionGuideTitle
              : copy.optionCheckTitle}
          </span>
        </p>
        {amountLabel && (
          <p className="mt-0.5">
            {locale === "it" ? "Importo:" : "Amount:"}{" "}
            <span className="font-semibold">{amountLabel}</span>
          </p>
        )}
      </div>

      {/* Stripe Payment Element */}
      <div className="rounded-xl border border-zinc-200 bg-white p-3">
        <PaymentElement />
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
