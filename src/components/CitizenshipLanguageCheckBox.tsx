// src/components/CitizenshipLanguageCheckBox.tsx
"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

type Locale = "en" | "it";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

const copy = {
  en: {
    title: "£50 Citizenship Route & Language Strategy Mini-Review",
    badge: "High-value, low-risk check",
    intro:
      "Get clear on whether the B1 Italian rule applies to you, which citizenship route makes sense next, and what to focus on first — without paying law-firm prices.",
    bullets: [
      "We look at your situation: jure sanguinis vs naturalisation, where you live, and your goals.",
      "We tell you clearly whether the B1 Italian requirement should apply to your route or not.",
      "You get a short written summary with a realistic next-steps plan (not generic blog advice).",
      "Similar 1:1 calls with agencies or law firms are often priced in the hundreds of pounds — this is a lean, practical version for £50.",
    ],
    disclaimer:
      "Resinaro is not a law firm and cannot give legal advice or guarantee citizenship. This mini-review focuses on practical clarity about routes, language requirements and document planning.",
    detailsTitle: "Step 1 — tell us who you are",
    nameLabel: "Full name",
    emailLabel: "Email",
    noteLabel: "Where are you in the process?",
    notePlaceholder:
      "Example: “Applying by descent via Manchester consulate, confused about B1 rule and route…”",
    continueBtn: "Continue to secure payment (£50)",
    continueBusy: "Preparing secure payment…",
    paymentTitle: "Step 2 — pay securely on this page",
    paymentIntro:
      "Card details are processed by Stripe. We’ll email you within 1–2 working days to schedule your mini-review.",
    payBtn: "Pay £50 now",
    payBusy: "Processing payment…",
    paymentErrorPrefix: "Payment error:",
  },
  it: {
    title:
      "Mini-check percorso cittadinanza & requisito B1 — £50 (circa 500£ altrove)",
    badge: "Controllo ad alto valore",
    intro:
      "Ti aiutiamo a capire se il requisito B1 vale per il tuo caso, quale percorso di cittadinanza ha più senso e su cosa concentrarti per primo — senza spendere centinaia di sterline in consulenze.",
    bullets: [
      "Guardiamo alla tua situazione: jure sanguinis vs naturalizzazione, dove vivi e quali sono i tuoi obiettivi.",
      "Ti diciamo in modo chiaro se il requisito di italiano B1 dovrebbe applicarsi o meno al tuo percorso.",
      "Ricevi un breve riepilogo scritto con un piano di passi successivi realistico (non i soliti consigli generici da blog).",
      "Servizi simili 1:1 offerti da agenzie o studi legali spesso costano diverse centinaia di sterline: qui hai una versione essenziale e pratica a £50.",
    ],
    disclaimer:
      "Resinaro non è uno studio legale e non offre pareri giuridici né garanzie di cittadinanza. Questo mini-check ti aiuta a fare chiarezza pratica su percorsi, requisito linguistico e pianificazione dei documenti.",
    detailsTitle: "Step 1 — raccontaci chi sei",
    nameLabel: "Nome e cognome",
    emailLabel: "Email",
    noteLabel: "A che punto sei con la cittadinanza?",
    notePlaceholder:
      'Esempio: “Sto valutando la cittadinanza per discendenza dal Regno Unito, non capisco se mi serve il B1…”',
    continueBtn: "Continua al pagamento sicuro (£50)",
    continueBusy: "Preparazione pagamento sicuro…",
    paymentTitle: "Step 2 — paga in modo sicuro su questa pagina",
    paymentIntro:
      "I dati della carta vengono gestiti da Stripe. Ti scriveremo entro 1–2 giorni lavorativi per fissare il mini-check.",
    payBtn: "Paga ora £50",
    payBusy: "Elaborazione pagamento…",
    paymentErrorPrefix: "Errore pagamento:",
  },
};

type Props = {
  locale: Locale;
};

export function CitizenshipLanguageCheckBox({ locale }: Props) {
  const text = locale === "it" ? copy.it : copy.en;

  const [step, setStep] = useState<"details" | "payment">("details");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(locale === "it" ? "Inserisci il tuo nome." : "Please enter your name.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(
        locale === "it"
          ? "Inserisci un indirizzo email valido."
          : "Please enter a valid email address.",
      );
      return;
    }

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      setError(
        locale === "it"
          ? "Pagamento online non configurato. Riprova più tardi o scrivici via email."
          : "Online payment is not configured. Please try again later or contact us by email.",
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/citizenship-language-check/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          locale,
          sourcePage: "blog-do-you-need-italian-for-citizenship-by-descent",
          note: note.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to prepare payment.");
      }

      const data = (await res.json()) as { clientSecret?: string };

      if (!data.clientSecret) {
        throw new Error("Missing client secret from payment API.");
      }

      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err: unknown) {
      console.error(err);
      setError(
        locale === "it"
          ? "Impossibile preparare il pagamento. Riprova più tardi."
          : "Could not prepare payment. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  }

  const showPaymentStep = step === "payment" && clientSecret && stripePromise;

  return (
    <section className="not-prose mt-10">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm shadow-sm md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
            {text.badge}
          </span>
        </div>

        <h2 className="text-base font-semibold text-neutral-900 md:text-lg">
          {text.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-800">{text.intro}</p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-800">
          {text.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <p className="mt-3 text-[11px] text-neutral-500">{text.disclaimer}</p>

        {/* Step 1: Details */}
        {step === "details" && (
          <form
            onSubmit={handleDetailsSubmit}
            className="mt-5 space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              {text.detailsTitle}
            </p>

            <div className="space-y-1">
              <label
                htmlFor="clc-name"
                className="block text-xs font-semibold text-neutral-800"
              >
                {text.nameLabel}
              </label>
              <input
                id="clc-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-9 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="clc-email"
                className="block text-xs font-semibold text-neutral-800"
              >
                {text.emailLabel}
              </label>
              <input
                id="clc-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="clc-note"
                className="block text-xs font-semibold text-neutral-800"
              >
                {text.noteLabel}
              </label>
              <textarea
                id="clc-note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={text.notePlaceholder}
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            {error && (
              <p className="text-xs text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`mt-1 inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold text-white ${
                loading
                  ? "cursor-not-allowed bg-neutral-400"
                  : "bg-neutral-900 hover:bg-black"
              }`}
            >
              {loading ? text.continueBusy : text.continueBtn}
            </button>
          </form>
        )}

        {/* Step 2: Payment */}
        {showPaymentStep && (
          <div className="mt-5 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              {text.paymentTitle}
            </p>
            <p className="mt-1 text-xs text-neutral-700">{text.paymentIntro}</p>

            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecret || "",
              }}
            >
              <CitizenshipLanguagePaymentForm locale={locale} />
            </Elements>
          </div>
        )}

        {!showPaymentStep && step === "payment" && (
          <p className="mt-4 text-xs text-red-700">
            {locale === "it"
              ? "Si è verificato un problema nel caricare il modulo di pagamento."
              : "There was a problem loading the payment form."}
          </p>
        )}
      </div>
    </section>
  );
}

function CitizenshipLanguagePaymentForm({ locale }: { locale: Locale }) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Just return to same page – you can customise if you want a /thank-you page
        return_url: window.location.href,
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed.");
    }

    setSubmitting(false);
  }

  const payLabel =
    locale === "it" ? "Paga ora £50" : "Pay £50 now";
  const payBusyLabel =
    locale === "it" ? "Elaborazione pagamento…" : "Processing payment…";
  const errPrefix =
    locale === "it" ? "Errore pagamento:" : "Payment error:";

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-sm">
      <PaymentElement />
      {errorMessage && (
        <p className="text-xs text-red-700">
          {errPrefix} {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting || !stripe || !elements}
        className={`inline-flex h-10 w-full items-center justify-center rounded-lg px-4 text-sm font-semibold text-white ${
          submitting || !stripe || !elements
            ? "cursor-not-allowed bg-neutral-400"
            : "bg-neutral-900 hover:bg-black"
        }`}
      >
        {submitting ? payBusyLabel : payLabel}
      </button>
      <p className="mt-1 text-[11px] text-neutral-500">
        Powered by Stripe • We never see your full card details.
      </p>
    </form>
  );
}
