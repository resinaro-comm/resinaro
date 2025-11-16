// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";
import { useTranslations } from "next-intl";
import { p } from "@/lib/localePath"; // <-- keep your helper
import { useLocale } from "next-intl"; // ✅ stable SSR/CSR locale

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export default function Navbar() {
  const tNav = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const router = useRouter();

  // ✅ Use next-intl for a stable locale (fixes hydration)
  const locale = (useLocale() as "en" | "it") || "en";

  // Logs (client only)
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[NAV] isOpen:", isOpen, "pathname:", pathname, "locale:", locale);
  }, [isOpen, pathname, locale]);

  // Shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    const el = document.documentElement;
    if (isOpen) {
      const prev = el.style.overflow;
      el.style.overflow = "hidden";
      return () => {
        el.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Trap focus in drawer when open
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a,button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const links = useMemo(
    () => [
      { href: "/directory", label: tNav("directory") },
      { href: "/services",  label: tNav("services") },
      { href: "/community", label: tNav("community") },
      { href: "/about",     label: tNav("about") },
      { href: "/contact",   label: tNav("contact") },
      { href: "/advertise", label: tNav("advertise") }
    ],
    [tNav]
  );

  const isActive = (href: string) => {
    const full = p(locale, href);
    return pathname === full || (href !== "/" && pathname.startsWith(full));
  };

  function remember(next: "en" | "it") {
    document.cookie = `${LOCALE_COOKIE}=${next}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  }
  function switchTo(next: "en" | "it") {
    if (next === locale) return;
    remember(next);
    const parts = pathname.split("/");
    parts[1] = next;
    const nextPath = parts.join("/") || `/${next}`;
    router.push(nextPath);
  }

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed left-0 w-full z-[60] border-b border-green-900/60 backdrop-blur supports-[backdrop-filter]:bg-[#F9F6F1]/70 bg-[#F9F6F1]/80 transition-all ${scrolled ? "shadow-sm" : ""}`}
        style={{ top: "var(--ad-banner-offset, 0px)" }}
        aria-label="Primary"
      >
        <div className={`container mx-auto flex items-center gap-3 px-4 ${scrolled ? "py-1.5" : "py-2"}`}>
          {/* Brand */}
          <Link href={`/${locale}`} className="group leading-tight shrink-0">
            <span className="text-xl md:text-2xl font-bold text-green-900">Resinaro</span>
            <span className="sr-only">{tNav("homeSr")}</span>
            <div className="h-0.5 w-16 mt-1 flex overflow-hidden rounded">
              <div className="flex-1 bg-green-700" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-red-600" />
            </div>
          </Link>

          {/* MOBILE search */}
          <div className="flex-1 md:hidden">
            <SearchBox placeholder={tNav("searchPlaceholder")} />
          </div>

          {/* Desktop */}
          <div className="ml-auto hidden md:flex items-center gap-4">
            {links.slice(0, 5).map((l) => (
              <Link
                key={l.href}
                href={p(locale, l.href)}
                className={`text-sm transition-colors ${isActive(l.href) ? "text-green-900 underline underline-offset-4" : "text-green-900/80 hover:text-green-900"}`}
              >
                {l.label}
              </Link>
            ))}
            {/* Socials (desktop) */}
            <div className="ml-1 flex items-center gap-2">
              <a
                href="https://www.instagram.com/resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-green-800 text-green-900 hover:bg-emerald-50"
              >
                {/* Instagram icon */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4"/>
                  <circle cx="12" cy="12" r="4.2"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-green-800 text-green-900 hover:bg-emerald-50"
              >
                {/* YouTube icon */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.9 12 3.9 12 3.9s-6.9 0-8.42.4A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1.1 12c-.01 1.89.14 3.78.36 5.58a3 3 0 0 0 2.12 2.12c1.52.4 8.42.4 8.42.4s6.9 0 8.42-.4a3 3 0 0 0 2.12-2.12c.22-1.8.37-3.69.36-5.58a31.7 31.7 0 0 0-.36-5.58Z"/>
                  <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#fff"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                onClick={() => switchTo("en")}
                className={`px-2 py-1 rounded text-sm ${locale === "en" ? "bg-black text-white" : "border text-green-900"}`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchTo("it")}
                className={`px-2 py-1 rounded text-sm ${locale === "it" ? "bg-black text-white" : "border text-green-900"}`}
                aria-pressed={locale === "it"}
              >
                IT
              </button>
            </div>
            <SearchBox className="w-64" placeholder={tNav("searchPlaceholder")} />
            <Link
              href={p(locale, "/advertise")}
              className="inline-flex h-8 items-center rounded-full border border-green-800 px-3 text-[13px] font-medium text-green-900 hover:bg-emerald-50"
            >
              {tNav("advertise")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
            aria-label={isOpen ? tNav("closeMenu") : tNav("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(true); }}
          >
            {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed right-0 top-0 z-[90] max-h-screen w-[min(15.5rem,82vw)] rounded-l-[2rem] bg-[#F2EDE5]/95 backdrop-blur-md shadow-2xl ring-1 ring-black/10 overflow-y-auto flex flex-col pt-4 pb-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
            >
              <div className="px-3 pt-4 pb-3 border-b">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-semibold text-green-900 tracking-wide">
                    {tNav("menu")}
                  </span>
                  <div className="ml-auto mr-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => switchTo("en")}
                      className={`px-2 py-1 rounded text-sm ${locale === "en" ? "bg-black text-white" : "border text-green-900"}`}
                      aria-pressed={locale === "en"}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => switchTo("it")}
                      className={`px-2 py-1 rounded text-sm ${locale === "it" ? "bg-black text-white" : "border text-green-900"}`}
                      aria-pressed={locale === "it"}
                    >
                      IT
                    </button>
                  </div>
                  <button
                    type="button"
                    className="rounded p-1.5 focus:outline-none focus:ring-2 focus:ring-green-900"
                    aria-label={tNav("closeMenu")}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl leading-none">✕</span>
                  </button>
                </div>

                <div className="mt-2">
                  <SearchBox placeholder={tNav("searchPlaceholder")} />
                </div>
              </div>

              <nav className="px-2 py-3 flex flex-col">
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={p(locale, l.href)}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl px-3 py-3 text-[15px] leading-none truncate ${
                          isActive(l.href)
                            ? "bg-emerald-50 text-green-900"
                            : "text-green-900/90 hover:bg-stone-50 hover:text-green-900"
                        }`}
                      >
                        <span className="truncate">{l.label}</span>
                        <svg
                          className="ml-2 h-4 w-4 flex-none opacity-80 transition-transform group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Socials (mobile drawer) */}
                <div className="mt-4 px-1.5">
                  <div className="text-[11px] uppercase tracking-wide text-stone-500 mb-1">Follow</div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.instagram.com/resinaroUK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-sm text-green-900 hover:bg-emerald-50 justify-start bg-white/80"
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <rect x="3.5" y="3.5" width="17" height="17" rx="4"/>
                        <circle cx="12" cy="12" r="4.2"/>
                        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@resinaroUK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-sm text-green-900 hover:bg-emerald-50 justify-start bg-white/80"
                      aria-label="YouTube"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.9 12 3.9 12 3.9s-6.9 0-8.42.4A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1.1 12c-.01 1.89.14 3.78.36 5.58a3 3 0 0 0 2.12 2.12c1.52.4 8.42.4 8.42.4s6.9 0 8.42-.4a3 3 0 0 0 2.12-2.12c.22-1.8.37-3.69.36-5.58a31.7 31.7 0 0 0-.36-5.58Z"/>
                        <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#fff"/>
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </nav>

              {/* Footer section removed per request (drawer ends after social links) */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
