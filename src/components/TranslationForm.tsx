// src/components/TranslationForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { p, type Locale } from "@/lib/localePath";

import { loadStripe } from "@stripe/stripe-js";
import type { StripeElementLocale } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Add it to .env.local",
  );
}
const stripePromise = loadStripe(publishableKey);

/** Google Apps Script endpoint + token **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

type PageBand = "1" | "2" | "3" | "4";

const PAGE_PRICES: Record<PageBand, string> = {
  "1": "£18",
  "2": "£24",
  "3": "£26",
  "4": "£30",
};

/* ========================= locale + copy helpers ======================= */

function useSafeLocale(): Locale {
  const pathname = usePathname() || "/";
  return /^\/it(\/|$)/i.test(pathname) ? "it" : "en";
}

function copyFor(locale: Locale) {
  const it = locale === "it";

  return {
    title: it
      ? "Prenota una traduzione certificata"
      : "Book a certified translation",
    desc: it
      ? "Inserisci email e numero di telefono/WhatsApp, scegli quante pagine ti servono e procedi al pagamento sicuro direttamente su questa pagina. Dopo il pagamento ti scriviamo noi per chiederti i documenti da tradurre e i dettagli del consolato / autorità."
      : "Add your email and phone/WhatsApp number, choose how many pages you need translated and complete secure payment on this page. After payment we’ll email you to collect the documents and consulate/authority details.",

    emailLabel: it ? "Email *" : "Email *",
    phoneLabel: it ? "Telefono / WhatsApp *" : "Phone / WhatsApp *",
    phonePlaceholder: it ? "+44 7…" : "+44 7…",

    pagesLabel: it
      ? "Quante pagine A4 ti servono tradotte ora? *"
      : "How many A4 pages do you need translated now? *",
    pagesHelp: it
      ? "Se hai più certificati, puoi sempre aggiungerne altri dopo. Per documenti più lunghi (5+ pagine) ti faremo un preventivo separato."
      : "If you have multiple certificates you can always add more later. For longer documents (5+ pages) we’ll send a separate quote.",
    pagesPlaceholder: it ? "Seleziona un’opzione…" : "Select an option…",
    option1: it
      ? "1 pagina – £18 tutto incluso (traduzione + dichiarazione firmata + posta UK 48h)"
      : "1 page – £18 all-in (translation + signed declaration + UK 48h post)",
    option2: it
      ? "2 pagine – £24 tutto incluso"
      : "2 pages – £24 all-in",
    option3: it
      ? "3 pagine – £26 tutto incluso"
      : "3 pages – £26 all-in",
    option4: it
      ? "4 pagine – £30 tutto incluso"
      : "4 pages – £30 all-in",

    startNowLabel: it
      ? "Chiedo a Resinaro di iniziare subito a lavorare su questa traduzione."
      : "I ask Resinaro to start working on this translation immediately.",
    coolingOff: it
      ? "Capisco di avere 14 giorni di recesso, ma se annullo dopo l’inizio del lavoro potrete trattenere una parte proporzionata; una volta che la traduzione (PDF e/o copia cartacea) è stata consegnata entro 14 giorni, perdo il diritto di recesso."
      : "I understand I have a 14-day cooling-off period, but if I cancel after work has started you may retain a proportionate amount; once the translation (PDF and/or hard copy) has been delivered within 14 days, I lose my right to cancel.",
    refundPrefix: it ? "Ho letto e accetto la" : "I have read and accept the",
    consentText: it
      ? "Acconsento al trattamento dei miei dati da parte di Resinaro per fornire questo servizio di traduzione."
      : "I consent to Resinaro storing and processing my data in order to provide this translation service.",

    detailsCta: it ? "Vai al pagamento sicuro" : "Go to secure payment",
    detailsPreparing: it
      ? "Preparazione del pagamento sicuro…"
      : "Preparing secure payment…",
    payProcessing: it ? "Pagamento in corso…" : "Processing payment…",

    backToDetails: it
      ? "← Modifica email / pagine"
      : "← Edit email / pages",
    paymentSecurityNote: it
      ? "Il pagamento avviene direttamente su questa pagina tramite Stripe. Resinaro non vede né memorizza mai i dati della tua carta. A seconda della banca potresti vedere anche Klarna (paga in 3) e Clearpay (paga in 4)."
      : "Payment is processed on this page by Stripe. Resinaro never sees or stores your card details. Depending on your bank you may also see Klarna (pay in 3) and Clearpay (pay in 4).",

    qBeforePay: it
      ? "Domande prima di pagare? Scrivici a resinaro@proton.me o su WhatsApp."
      : "Questions before paying? Email resinaro@proton.me or message us on WhatsApp.",

    // errors
    errEmail: it ? "Inserisci la tua email." : "Please enter your email.",
    errPhone: it
      ? "Inserisci il tuo numero di telefono/WhatsApp."
      : "Please enter your phone/WhatsApp number.",
    errPages: it
      ? "Seleziona quante pagine vuoi tradurre."
      : "Please choose how many pages you need translated.",
    errStart: it
      ? "Conferma che possiamo iniziare subito e che hai capito il diritto di recesso."
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

/** Robust UUID with browser fallbacks */
type CryptoWithRandomUUID = Crypto & { randomUUID?: () => string };

function safeUUID(): string {
  try {
    if (typeof crypto !== "undefined") {
      const c = crypto as CryptoWithRandomUUID;
      if (typeof c.randomUUID === "function") return c.randomUUID();
      if (typeof c.getRandomValues === "function") {
        const buf = new Uint8Array(16);
        c.getRandomValues(buf);
        buf[6] = (buf[6] & 0x0f) | 0x40;
        buf[8] = (buf[8] & 0x3f) | 0x80;
        const h = Array.from(buf, (b) => b.toString(16).padStart(2, "0"));
        return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
          .slice(6, 8)
          .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
      }
    }
  } catch {
    // ignore
  }
  return `rsr-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* ================================ MAIN FORM ============================ */

export default function TranslationForm() {
  const locale = useSafeLocale();
  const copy = copyFor(locale);

  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [pageBand, setPageBand] = useState<PageBand | "">("");

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [detailsSubmitting, setDetailsSubmitting] = useState(false);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const detailsSubmitDisabled =
    detailsSubmitting ||
    !email.trim() ||
    !telephone.trim() ||
    !pageBand ||
    !startNowAgree ||
    !refundAgree ||
    !privacyConsent;

  const showPaymentStep = !!clientSecret;
  const amountLabel = pageBand ? PAGE_PRICES[pageBand as PageBand] : "";

  /* ---------- Step 1: intake + create PaymentIntent ---------- */
  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError(copy.errEmail);
      return;
    }
    if (!telephone.trim()) {
      setError(copy.errPhone);
      return;
    }
    if (!pageBand) {
      setError(copy.errPages);
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

      const band = pageBand as PageBand;
      const price = PAGE_PRICES[band];

      // Log to Google Apps Script (best-effort)
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId: id,
          service: `translation-${band}-page`,
          name: "",
          email: email.trim(),
          telephone: telephone.trim(),
          files: [],
          data: {
            pageBand: band,
            price,
            locale,
            startNowAgree: startNowAgree ? "1" : "0",
            refundPolicyAgree: refundAgree ? "1" : "0",
            privacyConsent: privacyConsent ? "1" : "0",
            policyVersion: "2025-12-07",
          },
        }),
      }).catch(() => {
        // logging failure shouldn't block payment
      });

      // Ask our API to create a PaymentIntent and return clientSecret
      const res = await fetch("/api/translation/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageBand: band,
          email: email.trim(),
          telephone: telephone.trim(),
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

  /* ---------- Render ---------- */

  if (!showPaymentStep) {
    // STEP 1: intake only
    return (
      <form
        onSubmit={handleDetailsSubmit}
        className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
        aria-live="polite"
        noValidate
      >
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {copy.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">{copy.desc}</p>
        </div>

        {/* CONTACT */}
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-emerald-950">
            {copy.emailLabel}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              autoComplete="email"
            />
          </label>
          <label className="block text-sm text-emerald-950">
            {copy.phoneLabel}
            <input
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              placeholder={copy.phonePlaceholder}
              autoComplete="tel"
            />
          </label>
        </div>

        {/* PAGES – DROPDOWN */}
        <div>
          <label className="block text-sm text-emerald-950">
            {copy.pagesLabel} <span className="text-red-600">*</span>
            <select
              value={pageBand}
              onChange={(e) =>
                setPageBand(e.target.value as PageBand | "")
              }
              className="mt-1 block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            >
              <option value="">{copy.pagesPlaceholder}</option>
              <option value="1">{copy.option1}</option>
              <option value="2">{copy.option2}</option>
              <option value="3">{copy.option3}</option>
              <option value="4">{copy.option4}</option>
            </select>
          </label>
          <p className="mt-1 text-[11px] text-zinc-500">
            {copy.pagesHelp}
          </p>
        </div>

        {/* LEGAL CHECKBOXES */}
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
                Refund &amp; Credit Policy
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

        {/* ERROR */}
        {error && (
          <div
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* SUBMIT */}
        <div>
          <button
            type="submit"
            disabled={detailsSubmitDisabled}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm ${
              detailsSubmitDisabled
                ? "cursor-not-allowed bg-gray-300 text-gray-600"
                : "bg-emerald-700 text-emerald-50 shadow-emerald-700/40 hover:bg-emerald-800"
            }`}
          >
            {detailsSubmitting ? copy.detailsPreparing : copy.detailsCta}
          </button>
          {pageBand && (
            <p className="mt-1 text-[11px] text-zinc-500">
              {locale === "it"
                ? `Prossimo passo: pagamento di ${
                    PAGE_PRICES[pageBand as PageBand]
                  } con Stripe.`
                : `Next step: pay ${
                    PAGE_PRICES[pageBand as PageBand]
                  } securely with Stripe.`}
            </p>
          )}
          <p className="mt-2 text-[11px] text-gray-600">
            {copy.qBeforePay}
          </p>
        </div>
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
      <TranslationPaymentStep
        locale={locale}
        copy={copy}
        pageBand={pageBand as PageBand}
        amountLabel={amountLabel}
        error={error}
        setError={setError}
        onBack={() => {
          setClientSecret(null);
          setError(null);
          // keep intake data & bookingId
        }}
      />
    </Elements>
  );
}

/* ============================= PAYMENT STEP ============================ */

function TranslationPaymentStep({
  locale,
  copy,
  pageBand,
  amountLabel,
  error,
  setError,
  onBack,
}: {
  locale: Locale;
  copy: ReturnType<typeof copyFor>;
  pageBand: PageBand;
  amountLabel: string;
  error: string | null;
  setError: (val: string | null) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);

  const pageLabelMap: Record<PageBand, string> = {
    "1": copy.option1,
    "2": copy.option2,
    "3": copy.option3,
    "4": copy.option4,
  };
  const pageLabel = pageLabelMap[pageBand];

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
          ? `${window.location.origin}/services/translation?paid=1`
          : "https://www.resinaro.com/services/translation?paid=1";

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

      // For 3DS / Klarna / Clearpay, Stripe will handle redirects itself.
    } catch (err) {
      const msg =
        err instanceof Error && err.message ? err.message : copy.errGeneric;
      setError(msg);
      setPaying(false);
    }
  }

  const payLabel =
    amountLabel && !paying
      ? locale === "it"
        ? `Paga ora (${amountLabel})`
        : `Pay now (${amountLabel})`
      : copy.payProcessing;

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
          <span className="font-medium">{pageLabel}</span>
        </p>
        {amountLabel && (
          <p className="mt-0.5">
            {locale === "it" ? "Importo:" : "Amount:"}{" "}
            <span className="font-semibold">{amountLabel}</span>
          </p>
        )}
      </div>

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
