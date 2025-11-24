// src/components/PassportForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";
import { usePathname } from "next/navigation";

/** GAS endpoint **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

/** Files (kept for future use, not used in this simplified form) **/
const ALLOWED = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
const MAX_MB = 5;
const MAX = MAX_MB * 1024 * 1024;

/** Links **/
const FAST_IT_URL = "https://serviziconsolari.esteri.it/ScoFE/index.sco";

/** Types **/
type Service = "prenotami" | "under12";
type Aire = "yes" | "no" | "unsure";
type Marital = "single" | "married" | "divorced" | "widowed" | "other";
type Locale = "en" | "it";

type PersonDetails = {
  name: string;
  dob: string;
  heightCm: string;
  eyeColour: string;
  maritalStatus: Marital;
};

type ExtraAccount = {
  email: string;
  password: string;
  show: boolean;
};

/* ---------- locale detection (fixed) ---------- */
function useSafeLocale(): Locale {
  const pathname = usePathname() || "/";
  // Use IT only when the path begins with "/it" or is exactly "/it"
  // Examples that match IT: /it, /it/, /it/contact
  // Everything else defaults to EN.
  return /^\/it(\/|$)/i.test(pathname) ? "it" : "en";
}

/* ---------- i18n (kept for future use) ---------- */
function t(locale: Locale) {
  const en = {
    submit: {
      errFile: (label: string) => `${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`,
      fail: "Submission failed. Try again or email us.",
      proofLabel: "Proof of address",
    },
  } as const;

  const it = {
    submit: {
      errFile: (label: string) => `${label}: PDF/JPG/PNG, ≤${MAX_MB}MB`,
      fail: "Invio non riuscito. Riprova o scrivici.",
      proofLabel: "Prova di indirizzo",
    },
  } as const;

  return locale === "it" ? it : en;
}

/* ---------- i18n for the single (upgraded) form ---------- */
function tq(locale: Locale) {
  const it = locale === "it";
  return {
    qTitle: it
      ? "Assistenza appuntamento passaporto (Prenot@Mi 12+)"
      : "Passport appointment support (Prenot@Mi 12+)",
    qDesc: it
      ? "Inserisci i tuoi dati, scegli per quante persone vuoi l’appuntamento e paga in modo sicuro."
      : "Enter your details, choose how many people need an appointment, and pay securely.",
    fullName: it ? "Nome e cognome *" : "Full name *",
    email: it ? "Email *" : "Email *",
    qty: it
      ? "Quante persone servono l’appuntamento? *"
      : "How many people need an appointment? *",
    priceHint: it
      ? "Prezzi appuntamento Prenot@Mi (12+ / adulti): 1 persona £40 • 2 persone £78 • 3 persone £115."
      : "Appointment pricing (Prenot@Mi, 12+ / adults): 1 person £40 • 2 people £78 • 3 people £115.",

    multiPayTitle: it
      ? "Pagamenti flessibili disponibili"
      : "Flexible payments available",
    multiPayLine: it
      ? "Puoi pagare con carta, Apple Pay / Google Pay, bonifico, oppure a rate tramite Klarna (paga in 3) e Clearpay (paga in 4), se mostrati alla cassa."
      : "You can pay by card, Apple Pay / Google Pay, bank transfer, or in instalments via Klarna (pay in 3) and Clearpay (pay in 4) where shown at checkout.",

    // Agreements
    startNowLabel: it
      ? "Acconsento che Resinaro inizi subito a lavorare su questo servizio."
      : "I agree for Resinaro to start working on this immediately.",
    refundPrefix: it ? "Ho letto e accetto la" : "I have read and accept the",
    consent: it
      ? "Acconsento al trattamento dei dati come descritto nella Privacy Policy."
      : "I consent to data processing as described in the Privacy Policy.",

    // Buttons / states (UPDATED)
    pay: it
      ? "paga ora con checkout sicuro Stripe"
      : "pay now with secure Stripe checkout",
    redirecting: it
      ? "Reindirizzamento a Stripe…"
      : "Redirecting to Stripe…",

    // Errors
    errorStartNow: it
      ? "Conferma che possiamo iniziare subito."
      : "Please confirm you agree we can start immediately.",
    errorRefund: it
      ? "Accetta la policy di rimborso."
      : "Please accept the refund policy.",
    errorConsent: it
      ? "Accetta il consenso privacy."
      : "Please accept the privacy consent.",
    err: it ? "Si è verificato un errore." : "Something went wrong.",
  } as const;
}

/* ---------- Small helpers ---------- */
function okFile(f: File) {
  return ALLOWED.includes(f.type) && f.size <= MAX;
}

async function toB64(f: File) {
  const ab = await f.arrayBuffer();
  let s = "",
    bytes = new Uint8Array(ab); // eslint-disable-line prefer-const
  for (let i = 0; i < bytes.length; i += 0x8000) {
    s += String.fromCharCode(...Array.from(bytes.subarray(i, i + 0x8000)));
  }
  return btoa(s);
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
    // fall through to simple fallback
  }

  return `rsr-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* ---------- Single (upgraded) Form component: APPOINTMENTS ONLY ---------- */
function AppointmentForm({ locale }: { locale: Locale }) {
  const trq = tq(locale);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Only appointment choices now
  type Choice = "ap-1" | "ap-2" | "ap-3";
  const [choice, setChoice] = useState<Choice>("ap-1");

  const CHOICES: Record<
    Choice,
    { qty: 1 | 2 | 3; kind: "appointment"; amount: number; link: string }
  > = {
    "ap-1": {
      qty: 1,
      kind: "appointment",
      amount: 40,
      link: "https://buy.stripe.com/8x24gz7lkgfZc2BcZcaMU0p",
    },
    "ap-2": {
      qty: 2,
      kind: "appointment",
      amount: 78,
      link: "https://buy.stripe.com/28E3cveNMd3N1nXbV8aMU0q",
    },
    "ap-3": {
      qty: 3,
      kind: "appointment",
      amount: 115,
      link: "https://buy.stripe.com/00w3cvbBAe7R7Ml6AOaMU0r",
    },
  };

  const sel = CHOICES[choice];

  const [startNowAgree, setStartNowAgree] = useState(false);
  const [refundAgree, setRefundAgree] = useState(false);
  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const allChecked = startNowAgree && refundAgree && consent;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!startNowAgree) return setErr(trq.errorStartNow);
    if (!refundAgree) return setErr(trq.errorRefund);
    if (!consent) return setErr(trq.errorConsent);

    try {
      setLoading(true);
      const bookingId = safeUUID();

      // Persist lightweight submission to GAS (non-blocking downstream)
      const data: Record<string, string> = {
        mode: "single",
        qty: String(sel.qty),
        kind: sel.kind,
        startNowAgree: startNowAgree ? "1" : "0",
        refundPolicyAgree: refundAgree ? "1" : "0",
        privacyConsent: consent ? "1" : "0",
        policyVersion: "2025-10-18",
        locale,
      };

      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          action: "submit",
          bookingId,
          service: `passport-appointment-prenotami-${sel.qty}`,
          name: fullName.trim(),
          email: email.trim(),
          telephone: "", // phone field removed in this simplified form
          files: [],
          data,
        }),
      }).catch(() => {});

      const url = new URL(sel.link);
      if (email) url.searchParams.set("prefilled_email", email.trim());
      url.searchParams.set("client_reference_id", bookingId);
      window.location.href = url.toString();
    } catch (e) {
      setErr(e instanceof Error ? e.message : trq.err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-lg font-semibold text-emerald-950">
          {trq.qTitle}
        </h2>
        <p className="mt-1 text-sm text-zinc-700">{trq.qDesc}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-zinc-900">{trq.fullName}</span>
          <input
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm text-zinc-900">{trq.email}</span>
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
          <span className="text-sm text-zinc-900">{trq.qty}</span>
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

        <p className="mt-2 text-xs text-zinc-700">{trq.priceHint}</p>

        {/* Big, visible multi-pay box */}
        <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-xs text-emerald-950">
          <p className="font-semibold">{trq.multiPayTitle}</p>
          <p className="mt-1">{trq.multiPayLine}</p>
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
          <span>{trq.startNowLabel}</span>
        </label>

        <label className="flex items-start gap-2 text-sm text-emerald-950">
          <input
            type="checkbox"
            className="mt-1"
            checked={refundAgree}
            onChange={(e) => setRefundAgree(e.target.checked)}
          />
          <span>
            {trq.refundPrefix}{" "}
            <a
              className="underline"
              href={p(locale, "/refund-policy")}
              target="_blank"
              rel="noreferrer"
            >
              {locale === "it" ? "Politica di rimborso" : "Refund Policy"}
            </a>
            .
          </span>
        </label>

        <label className="flex items-start gap-2 text-sm text-emerald-950">
          <input
            type="checkbox"
            className="mt-1"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            {trq.consent}{" "}
            <a
              className="underline"
              href={p(locale, "/privacy-policy")}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>

      {err && <p className="text-sm text-red-600">{err}</p>}

      <div>
        <button
          type="submit"
          disabled={loading || !allChecked}
          className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
            loading || !allChecked
              ? "cursor-not-allowed border border-zinc-300 bg-zinc-100 text-zinc-500"
              : "border border-emerald-700 bg-emerald-700 text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800"
          }`}
        >
          {loading ? trq.redirecting : `${trq.pay} — £${sel.amount}`}
        </button>
        <p className="mt-1 text-[11px] text-zinc-500">
          {locale === "it"
            ? "Verrai reindirizzato a una pagina di pagamento Stripe protetta. Resinaro non vede né memorizza mai i dati della tua carta."
            : "You’ll be redirected to a secure Stripe payment page. Resinaro never sees or stores your card details."}
        </p>
      </div>
    </form>
  );
}

/* ---------- Main export: ONLY the upgraded appointments form ---------- */
export default function PassportForm() {
  const locale = useSafeLocale(); // ← derives from path correctly
  return (
    <div className="space-y-6" aria-live="polite">
      <AppointmentForm locale={locale} />
    </div>
  );
}
