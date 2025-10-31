"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

/** ── Reuse your existing GAS endpoint & token ───────────────────────────── **/
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbx_S1yGOb31CWMQVvi6qShVzgRA350Sj40aKnLVNl4ctdHxm77nzjYZIgnhVmgY1BQ/exec";
const GAS_TOKEN = "abc123!abidsdjaosda!!!hhda2314532";

/** ── i18n (based on first path segment) ─────────────────────────────────── **/
type Locale = "en" | "it";
function useLocale(): Locale {
  const pathname = usePathname() || "/";
  return pathname.startsWith("/it") ? "it" : "en";
}
function t(locale: Locale) {
  return locale === "it"
    ? {
        title: "Novità e consigli esclusivi",
        desc: "Solo info utili, niente spam.",
        email: "Email *",
        phone: "Telefono",
        consent1:
          "Acconsento al trattamento dei dati per comunicazioni di marketing.",
        consent2: "Privacy Policy",
        submit: "Iscrivimi",
        submitting: "Invio…",
        ok: "Grazie! Controlla la posta per la conferma.",
        err: "Invio non riuscito. Riprova.",
        noThanks: "",
      }
    : {
        title: "Exclusive News & Advice",
        desc: "Useful info only, no spam.",
        email: "Email *",
        phone: "Phone",
        consent1:
          "I consent to marketing communications and data processing.",
        consent2: "Privacy Policy",
        submit: "Sign me up",
        submitting: "Submitting…",
        ok: "Thanks! Please check your inbox to confirm.",
        err: "Couldn’t submit. Please try again.",
        noThanks: "",
      };
}

/** ── small helpers ──────────────────────────────────────────────────────── **/
const STORE_KEY = "rsr_news_dismissed_until";
function dismissedUntil(): number {
  const v = localStorage.getItem(STORE_KEY);
  return v ? Number(v) : 0;
}
function setDismiss(days = 30) {
  const until = Date.now() + days * 24 * 60 * 60 * 1000;
  localStorage.setItem(STORE_KEY, String(until));
}
function useExitIntent(cb: () => void) {
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) cb();
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [cb]);
}
function useUtms() {
  const sp = useSearchParams();
  return useMemo(
    () => ({
      utm_source: sp?.get("utm_source") || "",
      utm_medium: sp?.get("utm_medium") || "",
      utm_campaign: sp?.get("utm_campaign") || "",
      utm_content: sp?.get("utm_content") || "",
      utm_term: sp?.get("utm_term") || "",
    }),
    [sp]
  );
}

/** ── Component ──────────────────────────────────────────────────────────── **/
export default function NewsletterModal() {
  const locale = useLocale();
  const tr = t(locale);
  const pathname = usePathname() || "/";
  const utms = useUtms();
  const search = useSearchParams();

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const shownOnce = useRef(false);
  const emailRef = useRef<HTMLInputElement | null>(null);

  // Global kill-switch and URL overrides
  const globalOff = process.env.NEXT_PUBLIC_NEWSLETTER_OFF === "1";
  const urlToggle = (search?.get("newsletter") || search?.get("news"))?.toLowerCase();
  useEffect(() => {
    if (urlToggle === "off") {
      setDismiss(365);
    } else if (urlToggle === "on") {
      localStorage.removeItem(STORE_KEY);
      // force immediate show once
      setTimeout(() => {
        setOpen(true);
        shownOnce.current = true;
      }, 0);
    }
  }, [urlToggle]);

  // show after 6s if not dismissed recently
  useEffect(() => {
    if (shownOnce.current) return;
    if (typeof window === "undefined") return;
    if (globalOff) return;
    if (Date.now() < dismissedUntil()) return;
    const t = setTimeout(() => {
      setOpen(true);
      shownOnce.current = true;
    }, 6000);
    return () => clearTimeout(t);
  }, [globalOff]);

  // also show on exit intent (if not already shown/dismissed)
  useExitIntent(() => {
    if (shownOnce.current) return;
    if (Date.now() < dismissedUntil()) return;
    setOpen(true);
    shownOnce.current = true;
  });

  function closeAndSnooze(days = 30) {
    setOpen(false);
    setDismiss(days);
  }

  // Focus and ESC handling once open
  useEffect(() => {
    if (!open) return;
    emailRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAndSnooze();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!email.trim() || !consent) {
      setErr(locale === "it" ? "Aggiungi email e consenti il trattamento." : "Add your email and consent.");
      return;
    }
    if (hp) {
      // bot — quietly drop & hide
      closeAndSnooze(365);
      return;
    }

    // robust UUID generator with fallbacks
    function safeUUID(): string {
      try {
        if (typeof crypto !== "undefined") {
          // Some TS lib versions may not type randomUUID
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (typeof (crypto as any).randomUUID === "function") return (crypto as any).randomUUID();
          if (typeof crypto.getRandomValues === "function") {
            const buf = new Uint8Array(16);
            crypto.getRandomValues(buf);
            buf[6] = (buf[6] & 0x0f) | 0x40;
            buf[8] = (buf[8] & 0x3f) | 0x80;
            const h = Array.from(buf, (b) => b.toString(16).padStart(2, "0"));
            return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
              .slice(6, 8)
              .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
          }
        }
      } catch {}
      return `rsr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }

    try {
      setLoading(true);
      const bookingId = safeUUID();
      const r = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: GAS_TOKEN,
          // Use the same action and envelope as other working service forms
          action: "submit",
          bookingId,
          service: "newsletter-signup",
          name: email.trim(),
          email: email.trim(),
          telephone: phone.trim(),
          files: [],
          data: {
            marketing_consent: consent ? "1" : "0",
            source: "newsletter-modal",
            locale,
            path: pathname,
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
            ts: new Date().toISOString(),
            ...utms,
          },
        }),
      });
      // Expect the standard { ok: true } contract, fall back to 2xx
      let okResp = r.ok;
      try {
        const js: unknown = await r.json();
        if (typeof js === "object" && js && "ok" in js) {
          okResp = Boolean((js as { ok?: unknown }).ok);
        }
      } catch {}
      if (!okResp) throw new Error("fail");
      setOk(true);
      setEmail("");
      setPhone("");
      setConsent(false);
      // snooze popup for 90 days after successful signup
      setDismiss(90);
      setTimeout(() => setOpen(false), 800);
    } catch {
      setErr(tr.err);
    } finally {
      setLoading(false);
    }
  }

  if (!open || globalOff) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAndSnooze();
      }}
    >
      <div className="w-full max-w-xl rounded-3xl bg-[#FFFBF3] shadow-[0_20px_60px_rgba(16,24,40,0.12)] border border-[#E6DECF] ring-1 ring-[#F0EADC]" role="document" aria-labelledby="newsletter-title">
        <div className="p-6 sm:p-8">
          <div className="relative">
            <button
              onClick={() => closeAndSnooze()}
              aria-label="Close"
              className="absolute right-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E6DECF] bg-white/70 hover:bg-white text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <h2 id="newsletter-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1F3E2D]">
                {tr.title}
              </h2>
              <p id="newsletter-desc" className="text-[15px] text-[#5b5b5b] mt-3">
                {tr.desc}
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="mt-6 space-y-5 text-center" aria-describedby="newsletter-desc">
            {err && (
              <div className="rounded-lg border border-red-200 bg-red-50/80 px-4 py-2.5 text-sm text-red-800">
                {err}
              </div>
            )}
            {ok && (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-900">
                {tr.ok}
              </div>
            )}

            {/* Honeypot */}
            <input
              type="text"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium sm:text-center text-left text-[#1F3E2D]">{tr.email}</label>
              <input
                type="email"
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A86F] focus:border-[#C9A86F]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium sm:text-center text-left text-[#1F3E2D]">{tr.phone}</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-2xl border border-[#E5DCCB] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A86F] focus:border-[#C9A86F]"
                placeholder="+44…"
              />
            </div>

            <div className="flex justify-center">
              <label className="mt-1 inline-flex items-start gap-2 text-xs text-left text-[#234030]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  {tr.consent1}{" "}
                  <Link
                    href={locale === "it" ? "/it/privacy-policy" : "/en/privacy-policy"}
                    className="underline"
                  >
                    {tr.consent2}
                  </Link>
                  .
                </span>
              </label>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-emerald-500/20 transition ${
                  loading
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800"
                }`}
              >
                {loading ? tr.submitting : tr.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
