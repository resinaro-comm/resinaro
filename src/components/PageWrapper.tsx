"use client";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { p } from "@/lib/localePath";
import type { Locale } from "@/i18n";

function t(locale: Locale) {
  const en = {
    chip: "AD",
    featuredOn: "Get featured on",
    placements: "City & category placements",
    curation: "Clean, human curation",
    apply: "Apply to be featured →",
    ariaLabel: "Resinaro sponsor banner",
    dismiss: "Dismiss banner",
  } as const;

  const it = {
    chip: "ADV",
    featuredOn: "Fatti conoscere su",
    placements: "Posizionamenti per città e categoria",
    curation: "Selezione curata, umana",
    apply: "Candidati per essere in evidenza →",
    ariaLabel: "Banner sponsor Resinaro",
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
  // Always provide a stable key for framer-motion
  const safeKey: string = routeKey ?? "page";
  const tr = t(locale);

  // Banner visibility persisted in localStorage
  const [bannerHidden, setBannerHidden] = useState<boolean>(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  /* ---------- initial show/hide logic (with URL overrides) ---------- */
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const showParam = params.get("showBanner") === "1" || params.get("banner") === "on";
      const hideParam = params.get("hideBanner") === "1" || params.get("banner") === "off";

      // In dev, default to showing the banner to aid iteration
      if (process.env.NODE_ENV === "development" && !hideParam) {
        setBannerHidden(false);
        return;
      }
      if (showParam) {
        window.localStorage.removeItem("resinaro_ad_hidden_v2");
        setBannerHidden(false);
        return;
      }
      if (hideParam) {
        window.localStorage.setItem("resinaro_ad_hidden_v2", "1");
        setBannerHidden(true);
        return;
      }
      const v = window.localStorage.getItem("resinaro_ad_hidden_v2");
      setBannerHidden(v === "1");
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

    // Guard ResizeObserver for older environments
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
      } catch {}
      window.removeEventListener("resize", setVar);
      document.documentElement.style.setProperty("--ad-banner-offset", "0px");
    };
  }, [bannerHidden]);

  function closeBanner(e?: MouseEvent<HTMLButtonElement>) {
    e?.stopPropagation();
    try {
      window.localStorage.setItem("resinaro_ad_hidden_v2", "1");
    } catch {}
    setBannerHidden(true);
  }

  return (
    <>
      {/* Top banner ABOVE the navbar: full-bleed width, animated marquee */}
      <AnimatePresence initial={false}>
        {!bannerHidden && (
          <motion.div
            ref={bannerRef}
            key="resinaro-banner"
            className="fixed inset-x-0 top-0 z-[60]"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="region"
            aria-label={tr.ariaLabel}
          >
            <div className="relative w-full border-b border-emerald-200/70 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 text-green-900 shadow-sm">
              {/* Clickable band */}
              <Link href={p(locale, "/advertise")} className="block select-none">
                <div className="relative flex items-center py-2 sm:py-2.5">
                  {/* Marquee track (full-bleed) */}
                  <div className="banner-track w-full overflow-hidden">
                    <div className="banner-marquee flex gap-10 whitespace-nowrap">
                      {/* ROW 1 */}
                      <div className="flex items-center gap-10">
                        <Chip>{tr.chip}</Chip>
                        <Item>
                          {tr.featuredOn} <strong>Resinaro</strong>
                        </Item>
                        <Dot />
                        <Item>{tr.placements}</Item>
                        <Dot />
                        <Item>{tr.curation}</Item>
                        <Dot />
                        <Item>{tr.apply}</Item>
                      </div>
                      {/* ROW 2 (duplicate for seamless loop) */}
                      <div className="flex items-center gap-10" aria-hidden="true">
                        <Chip>{tr.chip}</Chip>
                        <Item>
                          {tr.featuredOn} <strong>Resinaro</strong>
                        </Item>
                        <Dot />
                        <Item>{tr.placements}</Item>
                        <Dot />
                        <Item>{tr.curation}</Item>
                        <Dot />
                        <Item>{tr.apply}</Item>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Close button */}
              <button
                onClick={closeBanner}
                aria-label={tr.dismiss}
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200/70 bg-white/80 text-green-900/80 hover:bg-white"
                type="button"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            {/* Inline styles for marquee */}
            <style>{`
              @keyframes resinaroMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); } /* because we duplicate two rows of equal width */
              }
              .banner-marquee {
                width: max-content;
                animation: resinaroMarquee 18s linear infinite;
                will-change: transform;
              }
              .banner-track:hover .banner-marquee {
                animation-play-state: paused;
              }
              @media (min-width: 1024px) {
                .banner-marquee { animation-duration: 22s; }
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
  return (
    <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-emerald-500/50 bg-white text-[10px] font-semibold text-emerald-700">
      {children}
    </span>
  );
}
function Item({ children }: { children: ReactNode }) {
  return <span className="text-[13px] sm:text-sm">{children}</span>;
}
function Dot() {
  return <span className="text-emerald-700/60">•</span>;
}
