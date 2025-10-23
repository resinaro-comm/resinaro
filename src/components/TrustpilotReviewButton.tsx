"use client";

import { useEffect, useRef } from "react";

// Map your app's locale to Trustpilot locale codes.
const LOCALE_MAP: Record<string, string> = {
  en: "en-GB",
  it: "it-IT",
};

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: Element, immediate?: boolean) => void;
    };
  }
}

type Props = {
  /** "en" | "it" etc. Defaults to "en". */
  locale?: string;
  /** Optional className wrapper */
  className?: string;
};

export default function TrustpilotReviewButton({ locale = "en", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ask Trustpilot to (re)hydrate this widget when script is ready.
    if (ref.current && typeof window !== "undefined" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, [locale]);

  const tpLocale = LOCALE_MAP[locale] ?? LOCALE_MAP.en;

  return (
    <div className={className}>
      {/* TrustBox widget - Review Collector */}
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale={tpLocale}
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="68ea33b71f4a2fbeae4ca4bf"
        data-style-height="52px"
        data-style-width="100%"
        data-token="9a6d1fe4-3460-49de-9b63-cdc26a1df3db"
      >
        {/* Fallback link if the widget doesn't hydrate */}
        <a href="https://uk.trustpilot.com/review/resinaro.com" target="_blank" rel="noopener">
          Trustpilot
        </a>
      </div>
      {/* End TrustBox widget */}
    </div>
  );
}
