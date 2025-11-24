"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";
import type { Locale } from "@/i18n";

function t(locale: Locale) {
  const en = {
    chip: "HELP",
    message: "Struggling to book a Prenot@Mi passport slot? Get help →",
    subline: "Real humans in the UK who speak Italian & English.",
    ariaLabel: "Passport booking assistance banner",
    dismiss: "Dismiss banner",
  } as const;

  const it = {
    chip: "AIUTO",
    message: "Hai difficoltà a prenotare un appuntamento passaporto su Prenot@Mi? Ti aiutiamo →",
    subline: "Persone reali nel Regno Unito, italiano e inglese senza stress.",
    ariaLabel: "Banner assistenza prenotazione passaporto",
    dismiss: "Chiudi banner",
  } as const;

  return locale === "it" ? it : en;
}

interface PageWrapperProps {
  children: ReactNode;
  routeKey?: string;
  // Pass locale from server to avoid SSR/CSR mismatch
  locale: Locale;
}

export default function PageWrapper({ children, routeKey, locale }: PageWrapperProps) {
  const safeKey: string = routeKey ?? "page";
  const tr = t(locale);

  const [bannerHidden, setBannerHidden] = useState<boolean>(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  /* ---------- Always show banner (no dismissal, no URL/localStorage overrides) ---------- */
  useEffect(() => {
    setBannerHidden(false);
    try {
      window.localStorage.removeItem("resinaro_ad_hidden_v2");
    } catch {
      // ignore
    }
  }, []);

  /* ---------- expose banner height for navbar offset ---------- */
  useEffect(() => {
    const el = bannerRef.current;

    const setVar = () => {
      const h = !bannerHidden && el ? Math.ceil(el.getBoundingClientRect().height) : 0;
      document.documentElement.style.setProperty("--ad-banner-offset", `${h}px`);
    };
    setVar();

    let ro: ResizeObserver | undefined;
    const canObserve = typeof window !== "undefined" && "ResizeObserver" in window;

    if (el && !bannerHidden) {
      try {
        if (canObserve) {
          ro = new ResizeObserver(setVar);
          ro.observe(el);
        } else {
          window.addEventListener("resize", setVar, { passive: true });
        }
      } catch {
        window.addEventListener("resize", setVar, { passive: true });
      }
    }

    return () => {
      try {
        ro?.disconnect();
      } catch {
        // ignore
      }
      window.removeEventListener("resize", setVar);
      document.documentElement.style.setProperty("--ad-banner-offset", "0px");
    };
  }, [bannerHidden]);

  return (
    <>
      {/* Top banner ABOVE the navbar: full-bleed width, upgraded visual design */}
      <AnimatePresence initial={false}>
        {!bannerHidden && (
          <motion.div
            ref={bannerRef}
            key="resinaro-banner"
            className="fixed inset-x-0 top-0 z-[60] pointer-events-none"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="region"
            aria-label={tr.ariaLabel}
          >
            <div className="pointer-events-auto border-b border-emerald-500/20 bg-gradient-to-r from-emerald-950/95 via-slate-950/90 to-emerald-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
              {/* Full-width content, padded */}
              <div className="relative flex items-stretch px-3 sm:px-6 lg:px-10">
                {/* Edge gradients to soften cutoff */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-1 left-0 w-8 bg-gradient-to-r from-black/40 via-black/0 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-1 right-0 w-8 bg-gradient-to-l from-black/40 via-black/0 to-transparent"
                />

                {/* Clickable band */}
                <Link
                  href={p(locale, "/services/passport")}
                  className="relative z-10 flex w-full items-center gap-3 sm:gap-4 py-2 sm:py-2.5"
                >
                  {/* Left chip + context (desktop) */}
                  <div className="hidden shrink-0 items-center sm:flex">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/70 px-2.5 py-1 text-[11px] font-medium text-emerald-100 ring-1 ring-emerald-400/40 shadow-[0_0_0_1px_rgba(16,185,129,0.5)]">
                      <Chip>{tr.chip}</Chip>
                      <span className="tracking-tight">Passport & consular help</span>
                    </div>
                  </div>

                  {/* Marquee track (text content) */}
                  <div className="banner-track w-full overflow-hidden">
                    <div className="banner-marquee flex items-center gap-8 whitespace-nowrap">
                      {/* Sequence is duplicated so animation loop is seamless.
                          Having 4 messages means on desktop you usually see ~3 at once. */}
                      <BannerMessage
                        chip={tr.chip}
                        message={tr.message}
                        subline={tr.subline}
                      />
                      <BannerMessage
                        chip={tr.chip}
                        message={tr.message}
                        subline={tr.subline}
                        ariaHidden
                      />
                      <BannerMessage
                        chip={tr.chip}
                        message={tr.message}
                        subline={tr.subline}
                        ariaHidden
                      />
                      <BannerMessage
                        chip={tr.chip}
                        message={tr.message}
                        subline={tr.subline}
                        ariaHidden
                      />
                    </div>
                  </div>

                  {/* Right arrow (desktop) */}
                  <div className="hidden shrink-0 items-center sm:flex">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/90 text-slate-950 shadow-lg shadow-emerald-500/40">
                      <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Inline styles for marquee */}
            <style>{`
              @keyframes resinaroMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .banner-marquee {
                width: max-content;
                animation: resinaroMarquee 22s linear infinite;
                will-change: transform;
              }
              .banner-track:hover .banner-marquee {
                animation-play-state: paused;
              }
              @media (max-width: 639px) {
                .banner-marquee {
                  animation-duration: 18s;
                }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page transition wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={safeKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ minHeight: "100vh" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/* --- tiny presentational helpers for banner items --- */

function Chip({ children }: { children: ReactNode }) {
  // Larger pill so HELP / AIUTO fits cleanly
  return (
    <span className="inline-flex h-6 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-50 px-2.5 text-[10px] font-semibold tracking-tight text-emerald-800">
      {children}
    </span>
  );
}

function BannerMessage({
  chip,
  message,
  subline,
  ariaHidden,
}: {
  chip: string;
  message: string;
  subline?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 text-xs sm:text-[13px]"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {/* Mobile-only chip */}
      <div className="flex sm:hidden">
        <Chip>{chip}</Chip>
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="max-w-full truncate font-medium text-emerald-50">
          {message}
        </span>
        {subline && (
          <span className="mt-0.5 hidden max-w-full truncate text-[11px] text-emerald-100/80 sm:inline">
            {subline}
          </span>
        )}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 12L12 4M8.5 4H12V7.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
