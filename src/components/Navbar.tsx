// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";
import { useTranslations } from "next-intl";
import { p } from "@/lib/localePath";
import { useLocale } from "next-intl";

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
const WHATSAPP_NUMBER = "447424208127";

function buildWhatsAppLink(locale: "en" | "it") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const msg =
    locale === "it"
      ? "Ciao, ho trovato Resinaro dal sito. Ho una domanda sul supporto passaporto."
      : "Hi, I found Resinaro from your website. I have a question about passport support.";
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export default function Navbar() {
  const tNav = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const router = useRouter();

  const locale = (useLocale() as "en" | "it") || "en";

  // Shrink / add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer open
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
      { href: "/services", label: tNav("services") },
      { href: "/community", label: tNav("community") },
      { href: "/about", label: tNav("about") },
      { href: "/contact", label: tNav("contact") },
      { href: "/advertise", label: tNav("advertise") },
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

  const whatsappHref = buildWhatsAppLink(locale);
  const whatsappLabel =
    locale === "it" ? "WhatsApp supporto" : "WhatsApp support";

  return (
    <>
      {/* Top nav bar */}
      <nav
        className={`fixed left-0 w-full z-[60] border-b border-emerald-900/10 bg-[#F9F6F1]/90 backdrop-blur-xl transition-all ${
          scrolled ? "shadow-[0_8px_25px_rgba(15,23,42,0.18)]" : "shadow-none"
        }`}
        style={{ top: "var(--ad-banner-offset, 0px)" }}
        aria-label="Primary"
      >
        <div
          className={`container mx-auto flex items-center gap-3 px-4 ${
            scrolled ? "py-1.5" : "py-2.5"
          }`}
        >
          {/* Brand */}
          <Link href={`/${locale}`} className="group shrink-0 leading-tight">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-emerald-950">
              Resinaro
            </span>
            <span className="sr-only">{tNav("homeSr")}</span>
            <div className="mt-1 flex h-0.5 w-16 overflow-hidden rounded-full">
              <div className="flex-1 bg-emerald-700" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-red-600" />
            </div>
          </Link>

          {/* MOBILE search (takes remaining space) */}
          <div className="flex-1 md:hidden">
            <SearchBox placeholder={tNav("searchPlaceholder")} />
          </div>

          {/* Desktop content */}
          <div className="ml-auto hidden md:flex items-center gap-4 lg:gap-5">
            {/* Main nav links as pill group */}
            <div className="hidden lg:flex items-center gap-0.5 rounded-full border border-emerald-900/10 bg-white/90 px-1 py-1 shadow-sm">
              {links.slice(0, 5).map((l) => (
                <Link
                  key={l.href}
                  href={p(locale, l.href)}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight transition-all ${
                    isActive(l.href)
                      ? "bg-emerald-700 text-emerald-50 shadow-sm"
                      : "text-emerald-900/80 hover:text-emerald-900 hover:bg-emerald-50/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Condensed text links for md screens (before lg) */}
            <div className="flex lg:hidden items-center gap-3">
              {links.slice(0, 3).map((l) => (
                <Link
                  key={l.href}
                  href={p(locale, l.href)}
                  className={`text-sm font-medium tracking-tight transition-colors ${
                    isActive(l.href)
                      ? "text-emerald-900 underline underline-offset-4"
                      : "text-emerald-900/80 hover:text-emerald-900"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Social icons (desktop) */}
            <div className="hidden md:flex items-center gap-1.5">
              <a
                href="https://www.instagram.com/resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/25 bg-white/70 text-emerald-900 hover:bg-emerald-50 hover:border-emerald-500/60 transition-colors shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/25 bg-white/70 text-emerald-900 hover:bg-emerald-50 hover:border-emerald-500/60 transition-colors shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.9 12 3.9 12 3.9s-6.9 0-8.42.4A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1.1 12c-.01 1.89.14 3.78.36 5.58a3 3 0 0 0 2.12 2.12c1.52.4 8.42.4 8.42.4s6.9 0 8.42-.4a3 3 0 0 0 2.12-2.12c.22-1.8.37-3.69.36-5.58a31.7 31.7 0 0 0-.36-5.58Z" />
                  <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#fff" />
                </svg>
              </a>
            </div>

            {/* Locale switcher */}
            <div className="hidden md:flex items-center">
              <div className="inline-flex items-center rounded-full border border-emerald-900/25 bg-white/90 p-0.5 shadow-sm">
                <button
                  type="button"
                  onClick={() => switchTo("en")}
                  className={`px-2.5 py-1 text-[11px] font-medium tracking-tight rounded-full transition-colors ${
                    locale === "en"
                      ? "bg-emerald-900 text-emerald-50"
                      : "text-emerald-900/80 hover:bg-emerald-50"
                  }`}
                  aria-pressed={locale === "en"}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => switchTo("it")}
                  className={`px-2.5 py-1 text-[11px] font-medium tracking-tight rounded-full transition-colors ${
                    locale === "it"
                      ? "bg-emerald-900 text-emerald-50"
                      : "text-emerald-900/80 hover:bg-emerald-50"
                  }`}
                  aria-pressed={locale === "it"}
                >
                  IT
                </button>
              </div>
            </div>

            {/* Search (desktop) */}
            <SearchBox
              className="hidden md:block w-52 lg:w-72"
              placeholder={tNav("searchPlaceholder")}
            />

            {/* WhatsApp CTA (desktop) */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-8 items-center rounded-full border border-emerald-600/60 bg-white px-3 text-[13px] font-semibold text-emerald-800 shadow-sm hover:bg-emerald-50 hover:border-emerald-700/70 transition-colors"
              aria-label={whatsappLabel}
            >
              <span className="mr-1 inline-flex h-4 w-4 items-center justify-center">
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M16 4.5A9.5 9.5 0 0 0 6.5 14c0 1.9.55 3.3 1.61 4.9L6 26l7.35-1.96C14 24.4 15 24.5 16 24.5A9.5 9.5 0 0 0 25.5 15 9.5 9.5 0 0 0 16 4.5Z"
                    stroke="#059669"
                    strokeWidth="1.4"
                    fill="#ECFDF5"
                  />
                  <path
                    d="M13.2 12.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.2 5.1 4.4 2.5 1 3 0.8 3.5 0.8.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.1-.1-.2-.3-.3l-1.5-.7c-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.1-.4.2-.8 0-.4-.2-1.6-.6-2.9-1.9-1.1-1.1-1.9-2.4-2.1-2.8-.2-.4 0-.6.1-.7.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.6Z"
                    fill="#059669"
                  />
                </svg>
              </span>
              <span>{locale === "it" ? "WhatsApp" : "WhatsApp"}</span>
            </a>

            {/* Advertise CTA */}
            <Link
              href={p(locale, "/advertise")}
              className="hidden sm:inline-flex h-8 items-center rounded-full bg-emerald-700 px-4 text-[13px] font-semibold text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800 transition-colors"
            >
              {tNav("advertise")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900/20 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/80"
            aria-label={isOpen ? tNav("closeMenu") : tNav("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            {/* Simple animated icon */}
            {!isOpen ? (
              <div className="flex flex-col gap-0.5">
                <span className="h-[2px] w-4 rounded-full bg-emerald-950" />
                <span className="h-[2px] w-4 rounded-full bg-emerald-950" />
                <span className="h-[2px] w-4 rounded-full bg-emerald-950" />
              </div>
            ) : (
              <span className="text-lg leading-none text-emerald-950">✕</span>
            )}
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
              className="fixed right-0 top-0 z-[90] flex max-h-screen w-[min(15.5rem,82vw)] flex-col overflow-y-auto rounded-l-[2rem] bg-[#F2EDE5]/95 pb-4 pt-4 shadow-2xl ring-1 ring-black/10 backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
            >
              <div className="border-b px-3 pt-4 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-semibold tracking-wide text-emerald-950">
                    {tNav("menu")}
                  </span>
                  <div className="ml-auto mr-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => switchTo("en")}
                      className={`px-2 py-1 rounded text-sm ${
                        locale === "en"
                          ? "bg-black text-white"
                          : "border text-emerald-900"
                      }`}
                      aria-pressed={locale === "en"}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => switchTo("it")}
                      className={`px-2 py-1 rounded text-sm ${
                        locale === "it"
                          ? "bg-black text-white"
                          : "border text-emerald-900"
                      }`}
                      aria-pressed={locale === "it"}
                    >
                      IT
                    </button>
                  </div>
                  <button
                    type="button"
                    className="rounded p-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-900"
                    aria-label={tNav("closeMenu")}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl leading-none text-emerald-950">
                      ✕
                    </span>
                  </button>
                </div>

                <div className="mt-2">
                  <SearchBox placeholder={tNav("searchPlaceholder")} />
                </div>
              </div>

              <nav className="flex flex-col px-2 py-3">
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={p(locale, l.href)}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl px-3 py-3 text-[15px] leading-none truncate ${
                          isActive(l.href)
                            ? "bg-emerald-50 text-emerald-900"
                            : "text-emerald-900/90 hover:bg-stone-50 hover:text-emerald-900"
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Socials (mobile drawer) */}
                <div className="mt-4 px-1.5">
                  <div className="mb-1 text-[11px] uppercase tracking-wide text-stone-500">
                    Follow
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.instagram.com/resinaroUK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-xl border bg-white/80 px-3 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                      aria-label="Instagram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1.2"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@resinaroUK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-xl border bg-white/80 px-3 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                      aria-label="YouTube"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22.54 6.42a3 3 0 0 0-2.12-2.12C18.9 3.9 12 3.9 12 3.9s-6.9 0-8.42.4A3 3 0 0 0 1.46 6.42 31.7 31.7 0 0 0 1.1 12c-.01 1.89.14 3.78.36 5.58a3 3 0 0 0 2.12 2.12c1.52.4 8.42.4 8.42.4s6.9 0 8.42-.4a3 3 0 0 0 2.12-2.12c.22-1.8.37-3.69.36-5.58a31.7 31.7 0 0 0-.36-5.58Z" />
                        <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#fff" />
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp (mobile drawer) */}
                <div className="mt-4 px-1.5">
                  <div className="mb-1 text-[11px] uppercase tracking-wide text-stone-500">
                    WhatsApp
                  </div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-xl border border-emerald-600/70 bg-white px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
                    aria-label={whatsappLabel}
                  >
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                    >
                      <path
                        d="M16 4.5A9.5 9.5 0 0 0 6.5 14c0 1.9.55 3.3 1.61 4.9L6 26l7.35-1.96C14 24.4 15 24.5 16 24.5A9.5 9.5 0 0 0 25.5 15 9.5 9.5 0 0 0 16 4.5Z"
                        stroke="#059669"
                        strokeWidth="1.4"
                        fill="#ECFDF5"
                      />
                      <path
                        d="M13.2 12.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.2 5.1 4.4 2.5 1 3 0.8 3.5 0.8.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.1-.1-.2-.3-.3l-1.5-.7c-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.1-.4.2-.8 0-.4-.2-1.6-.6-2.9-1.9-1.1-1.1-1.9-2.4-2.1-2.8-.2-.4 0-.6.1-.7.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.6Z"
                        fill="#059669"
                      />
                    </svg>
                    <span>{whatsappLabel}</span>
                  </a>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
