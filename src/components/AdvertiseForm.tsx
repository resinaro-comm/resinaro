// src/components/AdvertiseForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";

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

type ServiceId =
  | "website-5-page"
  | "website-seo-audit"
  | "website-50-page"
  | "directory-basic-monthly"
  | "directory-premium-monthly";

const SERVICE_CONFIG: Record<
  ServiceId,
  {
    amount: number; // display in GBP
    kind: "one_off" | "subscription";
    label: (locale: Locale) => string;
  }
> = {
  "website-5-page": {
    amount: 50,
    kind: "one_off",
    label: (locale) =>
      locale === "it"
        ? "Sito essenziale — fino a 5 pagine"
        : "Essential site — up to 5 pages",
  },
  "website-seo-audit": {
    amount: 70,
    kind: "one_off",
    label: (locale) =>
      locale === "it"
        ? "SEO & conversion audit del tuo sito"
        : "SEO & conversion audit of your site",
  },
  "website-50-page": {
    amount: 300,
    kind: "one_off",
    label: (locale) =>
      locale === "it"
        ? "Sito espanso — fino a 50 pagine"
        : "Expanded site — up to 50 pages",
  },
  "directory-basic-monthly": {
    amount: 10,
    kind: "subscription",
    label: (locale) =>
      locale === "it"
        ? "Listing base directory (mensile)"
        : "Basic directory listing (monthly)",
  },
  "directory-premium-monthly": {
    amount: 60,
    kind: "subscription",
    label: (locale) =>
      locale === "it"
        ? "Listing premium directory (mensile)"
        : "Premium directory listing (monthly)",
  },
};

/* ------------------------------- i18n -------------------------------- */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    aria: it
      ? "Modulo pagamento pubblicità / sito"
      : "Advertising & website checkout form",

    step1Title: it
      ? "Raccontaci della tua attività"
      : "Tell us about your business",
    step1Desc: it
      ? "Useremo queste informazioni per preparare correttamente il tuo sito o listing e collegare il pagamento all’ordine giusto."
      : "We use this information to set up your website or listing correctly and tie the payment to the right order.",

    businessNameLabel: it ? "Nome attività *" : "Business name *",
    contactNameLabel: it ? "Tuo nome *" : "Your name *",
    emailLabel: it ? "Email *" : "Email *",
    phoneLabel: it ? "Telefono / WhatsApp (facoltativo)" : "Phone / WhatsApp (optional)",
    websiteLabel: it
      ? "Sito web (se esiste già)"
      : "Website (if you already have one)",
    websitePh: "https://example.com",

    serviceLabel: it
      ? "Che pacchetto vuoi acquistare? *"
      : "Which package do you want to buy? *",
    serviceHint: it
      ? "Se poi decidiamo insieme un pacchetto diverso, adatteremo l’ordine."
      : "If we later agree a different package together, we’ll adjust the order.",

    notesLabel: it
      ? "Qualcosa di importante da sapere? (facoltativo)"
      : "Anything important we should know? (optional)",
    notesPh: it
      ? "Es: “Ristorante italiano a Manchester, vogliamo più prenotazioni in settimana.”"
      : 'E.g. “Italian restaurant in Manchester, we want more weekday bookings.”',

    // Agreements
    startNowLabel: it
      ? "Acconsento che Resinaro inizi subito a lavorare su questo servizio."
      : "I agree for Resinaro to start working on this service immediately.",
    coolingOff: it
      ? "Capisco di avere 14 giorni di recesso, ma se annullo dopo l’inizio del lavoro potrete trattenere una parte proporzionata; se il servizio viene completato entro 14 giorni, perdo il diritto di recesso."
      : "I understand I have a 14-day cooling-off period, but if I cancel after work has started you may keep a proportionate amount; if the service is fully performed within 14 days, I lose the right to cancel.",
    refundPrefix: it
      ? "Ho letto e accetto la"
      : "I have read and accept the",
    refundLinkText: "Refund & Credit Policy",
    privacyConsentLabel: it
      ? "Acconsento al trattamento dei miei dati da parte di Resinaro per fornire questo servizio."
      : "I consent to Resinaro storing and processing my data in order to provide this service.",

    // Step 1 buttons
    detailsCta: it ? "Vai al pagamento sicuro" : "Go to secure payment",
    detailsPreparing: it
      ? "Preparazione del pagamento sicuro…"
      : "Preparing secure payment…",

    // Payment step
    payTitle: it ? "Completa il pagamento sicuro" : "Complete secure payment",
    payDesc: it
      ? "Inserisci i dati di pagamento qui sotto. Il pagamento viene elaborato da Stripe su questa pagina."
      : "Enter your payment details below. Payment is processed by Stripe on this page.",
    summaryTitle: it ? "Riepilogo" : "Summary",
    summaryServiceLabel: it ? "Servizio:" : "Service:",
    summaryAmountLabel: it ? "Importo:" : "Amount:",
    payButton: (amount: number) =>
      it ? `Paga £${amount} adesso` : `Pay £${amount} now`,
    payProcessing: it ? "Pagamento in corso…" : "Processing payment…",
    paymentSecurityNote: it
      ? "Il pagamento avviene tramite Stripe. Resinaro non vede né memorizza mai i dati della tua carta. A seconda della banca potresti vedere anche Klarna (paga in 3) e Clearpay (paga in 4)."
      : "Payment is handled by Stripe. Resinaro never sees or stores your card details. Depending on your bank you may also see Klarna (pay in 3) and Clearpay (pay in 4).",

    installmentTitle: it
      ? "Se vedi queste opzioni al checkout:"
      : "If you see these options at checkout:",
    installmentCard: it
      ? "Carta: paghi tutto subito in un’unica soluzione."
      : "Card: pay the full amount now in one go.",
    installmentKlarna: it
      ? "Klarna: di solito permette di dividere l’importo in 3 pagamenti. La disponibilità dipende da Klarna e dalla tua banca."
      : "Klarna: usually lets you split the amount into 3 payments. Availability depends on Klarna and your bank.",
    installmentClearpay: it
      ? "Clearpay: di solito permette di dividere in 4 pagamenti. La disponibilità dipende da Clearpay e dalla tua banca."
      : "Clearpay: usually lets you split the amount into 4 payments. Availability depends on Clearpay and your bank.",

    backToDetails: it
      ? "← Modifica dati / pacchetto"
      : "← Edit details / package",

    // Errors
    errBusiness: it
      ? "Inserisci il nome della tua attività."
      : "Please enter your business name.",
    errContactEmail: it
      ? "Inserisci il tuo nome e una email valida."
      : "Please enter your name and a valid email.",
    errService: it
      ? "Scegli un pacchetto."
      : "Please choose a package.",
    errStart: it
      ? "Conferma che possiamo iniziare subito e che hai compreso il diritto di recesso."
      : "Please confirm we can start immediately and that you understand the cooling-off terms.",
    errRefund: it
      ? "Accetta la Refund & Credit Policy."
      : "Please accept the Refund & Credit Policy.",
    errPrivacy: it
      ? "Accetta il consenso privacy."
      : "Please accept the privacy consent.",
    errGeneric: it
      ? "Qualcosa è andato storto. Riprova o contattaci via email/WhatsApp."
      : "Something went wrong. Please try again or contact us by email/WhatsApp.",
  } as const;
}

type Copy = ReturnType<typeof t>;

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

  return `adv-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* ================================ MAIN FORM ============================ */

export default function AdvertiseForm({ locale }: { locale: Locale }) {
  const copy = t(locale);

  const [serviceId, setServiceId] =
    useState<ServiceId>("website-5-page");
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [detailsSubmitting, setDetailsSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const sel = SERVICE_CONFIG[serviceId];
  const amountLabel = `£${sel.amount}`;
  const showPaymentStep = !!clientSecret;

  const detailsDisabled =
    detailsSubmitting ||
    !businessName.trim() ||
    !contactName.trim() ||
    !email.trim() ||
    !serviceId ||
    !startNowAgree ||
    !refundAgree ||
    !privacyConsent;

  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!businessName.trim()) {
      setError(copy.errBusiness);
      return;
    }
    if (
      !contactName.trim() ||
      !email.trim() ||
      !/\S+@\S+\.\S+/.test(email)
    ) {
      setError(copy.errContactEmail);
      return;
    }
    if (!serviceId) {
      setError(copy.errService);
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
      setError(copy.errPrivacy);
      return;
    }

    try {
      setDetailsSubmitting(true);
      const id = safeUUID();
      setOrderId(id);

      // Log to Google Apps Script (best-effort)
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId: id,
          service: `advertise-${serviceId}`,
          name: contactName.trim(),
          email: email.trim(),
          telephone: phone.trim(),
          files: [],
          data: {
            locale,
            businessName: businessName.trim(),
            website: website.trim(),
            notes: notes.trim(),
            serviceId,
            startNowAgree: startNowAgree ? "1" : "0",
            refundPolicyAgree: refundAgree ? "1" : "0",
            privacyConsent: privacyConsent ? "1" : "0",
            policyVersion: "2025-12-09",
          },
        }),
      }).catch(() => {
        // ignore logging failure
      });

      // Ask our API to create PaymentIntent / subscription invoice intent
      const res = await fetch("/api/advertise/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId,
          locale,
          bookingId: id,
          businessName: businessName.trim(),
          contactName: contactName.trim(),
          email: email.trim(),
          website: website.trim(),
          phone: phone.trim(),
          notes: notes.trim(),
        }),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.clientSecret) {
        throw new Error(json?.error || copy.errGeneric);
      }

      setClientSecret(json.clientSecret);
    } catch (err) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : copy.errGeneric;
      setError(msg);
    } finally {
      setDetailsSubmitting(false);
    }
  }

  if (!showPaymentStep) {
    return (
      <form
        onSubmit={handleDetailsSubmit}
        noValidate
        aria-label={copy.aria}
        className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm"
      >
        <div>
          <h3 className="text-lg font-semibold text-emerald-950">
            {copy.step1Title}
          </h3>
          <p className="mt-1 text-sm text-neutral-700">
            {copy.step1Desc}
          </p>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {/* Basic details */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2 block text-sm">
            <span className="font-medium">
              {copy.businessNameLabel}
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">
              {copy.contactNameLabel}
            </span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">{copy.emailLabel}</span>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium">{copy.phoneLabel}</span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+44…"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">{copy.websiteLabel}</span>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder={copy.websitePh}
            />
          </label>
        </div>

        {/* Package selection */}
        <div className="space-y-1 text-sm">
          <label className="block font-medium">
            {copy.serviceLabel}
          </label>
          <select
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={serviceId}
            onChange={(e) =>
              setServiceId(e.target.value as ServiceId)
            }
            required
          >
            {(
              [
                "website-5-page",
                "website-seo-audit",
                "website-50-page",
                "directory-basic-monthly",
                "directory-premium-monthly",
              ] as ServiceId[]
            ).map((id) => {
              const cfg = SERVICE_CONFIG[id];
              const label = cfg.label(locale);
              const price = `£${cfg.amount}${
                cfg.kind === "subscription"
                  ? locale === "it"
                    ? "/mese"
                    : "/month"
                  : ""
              }`;
              return (
                <option key={id} value={id}>
                  {label} — {price}
                </option>
              );
            })}
          </select>
          <p className="text-xs text-neutral-600">
            {copy.serviceHint}
          </p>
        </div>

        {/* Notes */}
        <div className="text-sm">
          <label className="block font-medium">
            {copy.notesLabel}
          </label>
          <textarea
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={copy.notesPh}
          />
        </div>

        {/* Agreements */}
        <div className="space-y-3 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-emerald-950">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={startNowAgree}
              onChange={(e) =>
                setStartNowAgree(e.target.checked)
              }
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
              onChange={(e) =>
                setRefundAgree(e.target.checked)
              }
            />
            <span className="text-sm">
              {copy.refundPrefix}{" "}
              <Link
                href={p(locale, "/refund-policy")}
                className="underline text-emerald-900"
                target="_blank"
                rel="noreferrer"
              >
                {copy.refundLinkText}
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={privacyConsent}
              onChange={(e) =>
                setPrivacyConsent(e.target.checked)
              }
            />
            <span className="text-sm">
              {copy.privacyConsentLabel}{" "}
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

        <div>
          <button
            type="submit"
            disabled={detailsDisabled}
            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
              detailsDisabled
                ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
                : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
            }`}
          >
            {detailsSubmitting
              ? copy.detailsPreparing
              : copy.detailsCta}
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

  // ---- Payment step ----
  const stripeLocale: StripeElementLocale =
    locale === "it" ? "it" : ("en-GB" as StripeElementLocale);

  const elementsOptions = {
    clientSecret: clientSecret!,
    locale: stripeLocale,
  };

  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <AdvertisePaymentStep
        locale={locale}
        copy={copy}
        serviceId={serviceId}
        amountLabel={amountLabel}
        orderId={orderId!}
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

function AdvertisePaymentStep({
  locale,
  copy,
  serviceId,
  amountLabel,
  orderId,
  error,
  setError,
  onBack,
}: {
  locale: Locale;
  copy: Copy;
  serviceId: ServiceId;
  amountLabel: string;
  orderId: string;
  error: string | null;
  setError: (val: string | null) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);

  const cfg = SERVICE_CONFIG[serviceId];
  const serviceLabel = cfg.label(locale);

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

      const base =
        typeof window !== "undefined"
          ? window.location.origin
          : "https://www.resinaro.com";

      const returnUrl = `${base}/${locale}/advertise?paid=1&ref=${encodeURIComponent(
        orderId,
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

      // For 3DS / Klarna / Clearpay etc, Stripe handles redirects and
      // will send the user to return_url afterwards.
    } catch (err) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : copy.errGeneric;
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
            {copy.payTitle}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">
            {copy.payDesc}
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
          {copy.summaryServiceLabel}{" "}
          <span className="font-medium">{serviceLabel}</span>
        </p>
        <p className="mt-0.5">
          {copy.summaryAmountLabel}{" "}
          <span className="font-semibold">{amountLabel}</span>
          {SERVICE_CONFIG[serviceId].kind === "subscription" && (
            <span className="ml-1">
              {locale === "it"
                ? "/mese (abbonamento)"
                : "/month (subscription)"}
            </span>
          )}
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
          {paying
            ? copy.payProcessing
            : copy.payButton(SERVICE_CONFIG[serviceId].amount)}
        </button>
        <p className="mt-1 text-[11px] text-zinc-500">
          {copy.paymentSecurityNote}
        </p>
      </div>
    </form>
  );
}
