// src/components/TermsAcceptance.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { p, useLocaleFromPathname } from "@/lib/localePath";

const TERMS_COOKIE = "resinaro_terms_accepted";
const COOKIE_EXPIRES_DAYS = 365;

function setCookie(name: string, value: string, days = COOKIE_EXPIRES_DAYS) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${d.toUTCString()}; SameSite=Lax`;
}

function getCookie(name: string) {
  const raw = document.cookie.split(";").map((c) => c.trim());
  const found = raw.find((c) => c.startsWith(name + "="));
  return found ? decodeURIComponent(found.split("=")[1]) : null;
}

export default function TermsAcceptance() {
  const locale = useLocaleFromPathname();
  const [checked, setChecked] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const existing = getCookie(TERMS_COOKIE);
    if (existing === "1") {
      setAccepted(true);
    }
  }, []);

  function onAccept() {
    setCookie(TERMS_COOKIE, "1");
    localStorage.setItem(TERMS_COOKIE, new Date().toISOString());
    setAccepted(true);
  }

  function onClear() {
    // Clear acceptance (for testing / user revoke)
    setCookie(TERMS_COOKIE, "", -1);
    localStorage.removeItem(TERMS_COOKIE);
    setAccepted(false);
    setChecked(false);
  }

  if (accepted) {
    return (
      <div className="rounded-md bg-green-50 border border-green-200 p-3 text-sm flex items-center justify-between">
        <div>
          <strong className="text-green-900">You have accepted our Terms</strong>
          <div className="text-gray-700">Saved locally. You can change cookies preferences any time.</div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={p(locale, "/cookies")} className="text-green-800 underline text-sm">
            Manage cookies
          </Link>
          <button
            onClick={onClear}
            className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-50"
            aria-label="Revoke terms acceptance"
            type="button"
          >
            Revoke
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
          <label htmlFor="accept_terms" className="font-semibold block text-gray-800">
            I have read and accept the Terms of Service
          </label>
          <div id="terms-accept-desc" className="text-gray-700">
            You may review the full Terms above or read the{" "}
            <Link href={p(locale, "/terms")} className="underline text-green-800">
              full Terms page
            </Link>
            . We also use cookies to improve the site. Manage cookies{" "}
            <Link href={p(locale, "/cookies")} className="underline text-green-800">
              here
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
            checked ? "bg-green-900 hover:bg-green-800" : "bg-gray-300 cursor-not-allowed"
          }`}
          aria-disabled={!checked}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Accept and continue
        </button>

        <Link href={p(locale, "/cookies")} className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50">
          Manage cookies
        </Link>
      </div>
    </div>
  );
}
