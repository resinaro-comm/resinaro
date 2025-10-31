// src/components/AdvertiseForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocaleFromPathname, p } from "@/lib/localePath";

/** === SAME GAS MECHANISM AS PASSPORT FORM === **/
const GAS_URL =
  "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOY_URL/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

/** i18n **/
type Locale = "en" | "it";
function t(locale: Locale) {
  const en = {
    aria: "Advertiser quick contact form",
    title: "Let’s keep this easy",
    blurb:
      "Pop your email (and phone/WhatsApp if you like). We’ll reply with a simple plan—no pressure.",
    email: "Email *",
    phone: "Phone / WhatsApp (optional)",
    phonePh: "+44…",
    msg: "Anything we should know? (optional)",
    msgPh: "e.g. “Italian deli in Leeds, want more weekday lunch traffic.”",
    consent1:
      "I agree to the processing of this data for advertising enquiries. See our",
    privacy: "Privacy Policy",
    submit: "Send",
    sending: "Sending…",
    hint: "Kind, human follow-up within 2 business days.",
    ok: "Thanks! We’ve got your details. We’ll be in touch shortly.",
    errEmail: "Please enter a valid email.",
    errConsent: "Please agree to data processing.",
    fail: "Submission failed. Try again or email us.",
  } as const;

  const it = {
    aria: "Modulo rapido inserzionisti",
    title: "Facciamola semplice",
    blurb:
      "Inserisci la tua email (e telefono/WhatsApp se vuoi). Ti rispondiamo con una proposta semplice—senza impegno.",
    email: "Email *",
    phone: "Telefono / WhatsApp (facoltativo)",
    phonePh: "+44…",
    msg: "Qualcosa da aggiungere? (facoltativo)",
    msgPh: "es. “Gastronomia a Leeds, vogliamo più pranzi in settimana.”",
    consent1:
      "Acconsento al trattamento dei dati per richieste pubblicitarie. Vedi la",
    privacy: "Privacy Policy",
    submit: "Invia",
    sending: "Invio…",
    hint: "Risposta umana e gentile entro 2 giorni lavorativi.",
    ok: "Grazie! Ricevuto. Ti ricontatteremo a breve.",
    errEmail: "Inserisci una email valida.",
    errConsent: "Acconsenti al trattamento dei dati.",
    fail: "Invio non riuscito. Riprova o scrivici.",
  } as const;

  return locale === "it" ? it : en;
}

/** Optional GTM/analytics */
function pushDL(evt: Record<string, unknown>) {
  try {
    (window as unknown as {
      dataLayer?: { push?: (e: Record<string, unknown>) => void };
    }).dataLayer?.push?.(evt);
  } catch {}
}

export default function AdvertiseForm() {
  const locale = (useLocaleFromPathname() as Locale) || "en";
  const i = t(locale);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState(""); // honeypot

  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setOk(false);

    const emailOk = /\S+@\S+\.\S+/.test(email);
    if (!emailOk) return setErr(i.errEmail);
    if (!consent) return setErr(i.errConsent);

    try {
      setBusy(true);
      pushDL({ event: "ad_lead_started", method: "GAS" });

      const r = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "ad-lead",
          locale,
          hp_field: hp, // ignored server-side if empty; used to drop bots
          data: {
            email: email.trim(),
            telephone: phone.trim(),
            message: message.trim(),
            source: "advertise-form",
            path: typeof window !== "undefined" ? window.location.pathname : "",
            userAgent:
              typeof navigator !== "undefined" ? navigator.userAgent : "",
          },
        }),
      });

      const js = await r.json().catch(() => ({}));
      if (!r.ok || !js?.ok) throw new Error(js?.error || "Error");

      pushDL({ event: "ad_lead_submitted", method: "GAS" });
      setOk(true);
      setMessage("");
    } catch {
      setErr(i.fail);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label={i.aria}
      className="space-y-5 rounded-2xl border p-4 sm:p-6"
    >
      <div>
        <h3 className="text-lg font-semibold">{i.title}</h3>
        <p className="mt-1 text-sm text-neutral-700">{i.blurb}</p>
      </div>

      {err && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800"
          role="alert"
        >
          {err}
        </div>
      )}
      {ok && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          {i.ok}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">{i.email}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">{i.phone}</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={i.phonePh}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">{i.msg}</label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={i.msgPh}
            className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>

      {/* Honeypot (kept invisible) */}
      <input
        type="text"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
      />

      {/* Consent */}
      <div className="text-sm">
        <label className="inline-flex items-start gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            {i.consent1}{" "}
            <Link
              href={p(locale, "/privacy-policy")}
              className="underline text-green-900"
            >
              {i.privacy}
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={busy}
          className={`rounded-xl px-5 py-2 text-white ${
            busy ? "bg-gray-400" : "bg-green-800 hover:bg-green-900"
          }`}
        >
          {busy ? i.sending : i.submit}
        </button>
        <p className="text-xs text-green-700">{i.hint}</p>
      </div>
    </form>
  );
}
