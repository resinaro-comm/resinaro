// src/components/CitizenshipDescentSupportForm.tsx
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
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

// Optional: Apps Script / backend endpoint to log submissions
const ENDPOINT =
  process.env.NEXT_PUBLIC_CITIZENSHIP_DESCENT_FORM_ENDPOINT || "";

function copy(locale: Locale) {
  const it = locale === "it";
  return {
    title: it
      ? "£35 guida o £170 1:1? Parti da qui."
      : "£35 guide or £170 1:1? Start here.",
    intro: it
      ? "1) Dicci chi sei. 2) Scegli guida o 1:1. 3) Paga in modo sicuro con Stripe qui sotto."
      : "1) Tell us who you are. 2) Pick guide or 1:1. 3) Pay securely with Stripe below.",
    nameLabel: it ? "Nome e cognome" : "Full name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    summaryLabel: it
      ? "Qual è la tua situazione in poche righe?"
      : "What’s your situation in a few lines?",
    summaryPlaceholder: it
      ? "Da chi discendi, quali documenti hai già, dove vivi nel Regno Unito."
      : "Who you descend from, what documents you already have, where you live in the UK.",
    serviceLabel: it
      ? "Che opzione vuoi oggi?"
      : "Which option do you want today?",
    serviceGuide: it
      ? "Guida scritta da £35 (PDF + esempi email)"
      : "£35 written guide (PDF + email examples)",
    service121: it
      ? "Pacchetto 1:1 da £170 (revisione + piano)"
      : "£170 1:1 package (review + plan)",
    helper: it
      ? "Dopo l’invio prepariamo il pagamento Stripe qui sotto. Carta, Apple Pay e altri metodi supportati da Stripe."
      : "After you submit we prepare a Stripe payment below. Card, Apple Pay and other methods supported by Stripe.",
    button: it ? "Continua al pagamento" : "Continue to payment",
    errName: it ? "Inserisci il tuo nome." : "Please enter your name.",
    errEmail: it
      ? "Inserisci una email valida."
      : "Please enter a valid email address.",
    errService: it
      ? "Seleziona un’opzione."
      : "Please choose an option.",
    errNoStripe: it
      ? "Pagamento online non è disponibile al momento."
      : "Online payment is not available right now.",
    errServer: it
      ? "Errore nel preparare il pagamento."
      : "There was an error preparing the payment.",
    successMsg: it
      ? "OK, ora compila i dati di pagamento qui sotto."
      : "Great, now add your payment details below.",
  };
}

export function CitizenshipDescentSupportForm({ locale }: { locale: Locale }) {
  const copyText = copy(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [service, setService] = useState<"guide" | "121" | "">("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!name.trim()) {
      setError(copyText.errName);
      return;
    }

    const okEmail = /\S+@\S+\.\S+/.test(email);
    if (!okEmail) {
      setError(copyText.errEmail);
      return;
    }

    if (!service) {
      setError(copyText.errService);
      return;
    }

    if (!stripePromise) {
      setError(copyText.errNoStripe);
      return;
    }

    setBusy(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      summary: summary.trim(),
      service,
      locale,
    };

    try {
      // Optional logging to Apps Script etc.
      if (ENDPOINT) {
        const body = new URLSearchParams({
          ...payload,
          source: "citizenship-by-descent-uk",
        } as Record<string, string>);

        fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: body.toString(),
        }).catch(() => {
          // ignore logging error
        });
      }

      const res = await fetch("/api/citizenship-descent/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.clientSecret) {
        setError(data.error || copyText.errServer);
        return;
      }

      setClientSecret(data.clientSecret);
      setInfo(copyText.successMsg);
    } catch (err) {
      console.error("citizenship-descent form error", err);
      setError(copyText.errServer);
    } finally {
      setBusy(false);
    }
  }

  const chosenService = service === "" ? null : (service as "guide" | "121");

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-5 text-sm shadow-sm ring-1 ring-emerald-200 md:p-6">
      <p className="text-base font-semibold text-gray-900">
        {copyText.title}
      </p>
      <p className="text-xs text-gray-600">{copyText.intro}</p>

      {/* Step 1: case details */}
      <form onSubmit={handleSubmit} className="mt-2 space-y-3">
        <div className="space-y-1">
          <label
            htmlFor="cit-name"
            className="block text-xs font-semibold text-gray-800"
          >
            {copyText.nameLabel}
          </label>
          <input
            id="cit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-full rounded-xl border border-emerald-200 bg-white px-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="cit-email"
            className="block text-xs font-semibold text-gray-800"
          >
            {copyText.emailLabel}
          </label>
          <input
            id="cit-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copyText.emailPlaceholder}
            className="h-10 w-full rounded-xl border border-emerald-200 bg-white px-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="cit-summary"
            className="block text-xs font-semibold text-gray-800"
          >
            {copyText.summaryLabel}
          </label>
          <textarea
            id="cit-summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder={copyText.summaryPlaceholder}
            rows={3}
            className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <fieldset className="space-y-2">
          <legend className="text-xs font-semibold text-gray-800">
            {copyText.serviceLabel}
          </legend>
          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-gray-900">
              <input
                type="radio"
                name="cit-service"
                value="guide"
                checked={service === "guide"}
                onChange={() => setService("guide")}
                className="h-3.5 w-3.5 border-gray-400 text-emerald-600 focus:ring-emerald-500"
              />
              <span>{copyText.serviceGuide}</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-gray-900">
              <input
                type="radio"
                name="cit-service"
                value="121"
                checked={service === "121"}
                onChange={() => setService("121")}
                className="h-3.5 w-3.5 border-gray-400 text-emerald-600 focus:ring-emerald-500"
              />
              <span>{copyText.service121}</span>
            </label>
          </div>
        </fieldset>

        {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
        {info && !error && (
          <p className="mt-1 text-xs text-emerald-800">{info}</p>
        )}

        <p className="mt-1 text-[11px] text-gray-600">{copyText.helper}</p>

        <button
          type="submit"
          disabled={busy}
          className={`mt-2 inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white ${
            busy
              ? "cursor-not-allowed bg-gray-400"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {busy ? "…" : copyText.button}
        </button>
      </form>

      {/* Step 2: Stripe payment element */}
      {clientSecret && chosenService && (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-gray-800">
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CitizenshipPaymentElement
              locale={locale}
              service={chosenService}
            />
          </Elements>
        </div>
      )}
    </div>
  );
}

function CitizenshipPaymentElement({
  locale,
  service,
}: {
  locale: Locale;
  service: "guide" | "121";
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const label =
    locale === "it"
      ? service === "guide"
        ? "Paga £35 in modo sicuro"
        : "Paga £170 in modo sicuro"
      : service === "guide"
      ? "Pay £35 securely"
      : "Pay £170 securely";

  async function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setPaying(true);
    setError(null);
    setStatus(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Stripe handles any 3D Secure. You can change this URL later.
        return_url: window.location.href,
      },
    });

    if (stripeError) {
      setError(stripeError.message || "Payment failed.");
    } else {
      setStatus(
        locale === "it"
          ? "Pagamento inviato, controlla la mail di conferma."
          : "Payment submitted, please check your email for confirmation.",
      );
    }

    setPaying(false);
  }

  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-3">
      <PaymentElement />
      {error && <p className="text-xs text-red-700">{error}</p>}
      {status && <p className="text-xs text-emerald-700">{status}</p>}
      <button
        type="submit"
        disabled={!stripe || !elements || paying}
        className={`mt-2 inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white ${
          paying ? "bg-gray-400" : "bg-emerald-600 hover:bg-emerald-700"
        }`}
      >
        {paying ? "…" : label}
      </button>
    </form>
  );
}
