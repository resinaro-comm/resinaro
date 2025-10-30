// src/components/TermsAcceptance.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { p, useLocaleFromPathname } from "@/lib/localePath";

const TERMS_COOKIE = "resinaro_terms_accepted";
const COOKIE_EXPIRES_DAYS = 365;

type Locale = "en" | "it";

function setCookie(name: string, value: string, days = COOKIE_EXPIRES_DAYS) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; expires=${d.toUTCString()}; SameSite=Lax`;
}

function getCookie(name: string) {
  const raw = document.cookie.split(";").map((c) => c.trim());
  const found = raw.find((c) => c.startsWith(name + "="));
  return found ? decodeURIComponent(found.split("=")[1]) : null;
}

const copy = {
  en: {
    acceptedTitle: "You have accepted our Terms",
    acceptedNote: "Saved locally. You can change cookies preferences any time.",
    manageCookies: "Manage cookies",
    revoke: "Revoke",
    checkboxLabel: "I have read and accept the Terms of Service",
    readFull: "You may review the full Terms above or read the",
    fullTerms: "full Terms page",
    cookiesLead: "We also use cookies to improve the site. Manage cookies",
    here: "here",
    acceptCta: "Accept and continue",
  },
  it: {
    acceptedTitle: "Hai accettato i nostri Termini",
    acceptedNote:
      "Salvato in locale. Puoi modificare le preferenze dei cookie in qualsiasi momento.",
    manageCookies: "Gestisci i cookie",
    revoke: "Revoca",
    checkboxLabel: "Ho letto e accetto i Termini di Servizio",
    readFull: "Puoi rivedere i Termini sopra oppure leggere la",
    fullTerms: "pagina completa dei Termini",
    cookiesLead:
      "Usiamo anche i cookie per migliorare il sito. Gestisci i cookie",
    here: "qui",
    acceptCta: "Accetta e continua",
  },
} as const;

export default function TermsAcceptance({
  locale: localeProp,
}: {
  /** Pass the page locale to keep SSR/CSR links identical and avoid hydration drift */
  locale?: Locale;
}) {
  // Use the server-provided locale when available to lock hrefs.
  // Fallback to pathname only if not provided.
  const inferred = useLocaleFromPathname() as Locale | undefined;
  const stableLocale: Locale = useMemo(
    () => (localeProp ?? inferred ?? "en"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localeProp] // do NOT include `inferred` so it won't change after mount
  );

  const txt = copy[stableLocale];

  const [checked, setChecked] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const existing = getCookie(TERMS_COOKIE);
    if (existing === "1") setAccepted(true);
  }, []);

  function onAccept() {
    setCookie(TERMS_COOKIE, "1");
    try {
      localStorage.setItem(TERMS_COOKIE, new Date().toISOString());
    } catch {}
    setAccepted(true);
  }

  function onClear() {
    setCookie(TERMS_COOKIE, "", -1);
    try {
      localStorage.removeItem(TERMS_COOKIE);
    } catch {}
    setAccepted(false);
    setChecked(false);
  }

  if (accepted) {
    return (
      <div
        className="rounded-md bg-green-50 border border-green-200 p-3 text-sm flex items-center justify-between"
        role="status"
        aria-live="polite"
      >
        <div>
          <strong className="text-green-900">{txt.acceptedTitle}</strong>
          <div className="text-gray-700">{txt.acceptedNote}</div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={p(stableLocale, "/cookies")}
            className="text-green-800 underline text-sm"
          >
            {txt.manageCookies}
          </Link>
          <button
            onClick={onClear}
            className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-50"
            aria-label={
              stableLocale === "it"
                ? "Revoca l'accettazione dei Termini"
                : "Revoke terms acceptance"
            }
            type="button"
          >
            {txt.revoke}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm">
      <div className="flex items-start gap-3">
        <input
          id="accept_terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1"
          aria-describedby="terms-accept-desc"
        />
        <div>
          <label
            htmlFor="accept_terms"
            className="font-semibold block text-gray-800"
          >
            {txt.checkboxLabel}
          </label>
          <div id="terms-accept-desc" className="text-gray-700">
            {txt.readFull}{" "}
            <Link
              href={p(stableLocale, "/terms")}
              className="underline text-green-800"
            >
              {txt.fullTerms}
            </Link>
            . {txt.cookiesLead}{" "}
            <Link
              href={p(stableLocale, "/cookies")}
              className="underline text-green-800"
            >
              {txt.here}
            </Link>
            .
          </div>
        </div>
      </div>

      <div className="mt-3 flex gap-3">
        <button
          onClick={onAccept}
          disabled={!checked}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-white ${
            checked
              ? "bg-green-900 hover:bg-green-800"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          aria-disabled={!checked}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {txt.acceptCta}
        </button>

        <Link
          href={p(stableLocale, "/cookies")}
          className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50"
        >
          {txt.manageCookies}
        </Link>
      </div>
    </div>
  );
}
