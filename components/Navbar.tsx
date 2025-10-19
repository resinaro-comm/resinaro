"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SearchBox from "@/components/SearchBox"; // ← add

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* --- Shrink on scroll --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- Close drawer on route change --- */
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* --- A11y: ESC to close, trap focus inside sheet --- */
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
      { href: "/directory", label: "Directory" },
      { href: "/services", label: "Services" },
      { href: "/community", label: "Community" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/advertise", label: "Advertise" }, // same size as others
    ],
    []
  );

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed left-0 w-full z-50 border-b border-green-900/60 backdrop-blur supports-[backdrop-filter]:bg-[#F9F6F1]/70 bg-[#F9F6F1]/80 transition-all ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{ top: "var(--ad-banner-offset, 0px)" }}
        aria-label="Primary"
      >
        <div
          className={`container mx-auto flex items-center gap-3 px-4 ${
            scrolled ? "py-1.5" : "py-2"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group leading-tight shrink-0">
            <span className="text-xl md:text-2xl font-bold text-green-900">Resinaro</span>
            <span className="sr-only">Home</span>
            <div className="h-0.5 w-16 mt-1 flex overflow-hidden rounded">
              <div className="flex-1 bg-green-700" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-red-600" />
            </div>
          </Link>

          {/* MOBILE search: sits between brand and hamburger */}
          <div className="flex-1 md:hidden">
            <SearchBox placeholder="Search the site…" />
          </div>

          {/* Desktop links + search + CTA */}
          <div className="ml-auto hidden md:flex items-center gap-4">
            {links.slice(0, 5).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  isActive(l.href)
                    ? "text-green-900 underline underline-offset-4"
                    : "text-green-900/80 hover:text-green-900"
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* DESKTOP/TABLET search: between links and CTA */}
            <SearchBox className="w-64" placeholder="Search the site…" />

            <Link
              href="/advertise"
              className="inline-flex h-8 items-center rounded-full border border-green-800 px-3 text-[13px] font-medium text-green-900 hover:bg-emerald-50"
            >
              Advertise
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer: compact premium rail */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              id="mobile-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className={`
                fixed right-0 top-[var(--ad-banner-offset,0px)] z-50
                h-[calc(100vh-var(--ad-banner-offset,0px))]
                w-[min(14.5rem,70vw)]
                rounded-l-[2rem] bg-white/95 backdrop-blur-md shadow-2xl ring-1 ring-black/5
                overflow-hidden flex flex-col
              `}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Accent */}
              <div className="h-1.5 w-full flex">
                <div className="flex-1 bg-green-600" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-red-600" />
              </div>

              {/* Header */}
              <div className="px-3 pt-2 pb-2 border-b">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-green-900 tracking-wide">Menu</span>
                  <button
                    className="rounded p-1.5 focus:outline-none focus:ring-2 focus:ring-green-900"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl leading-none">✕</span>
                  </button>
                </div>

                {/* Drawer search */}
                <div className="mt-2">
                  <SearchBox placeholder="Search the site…" />
                </div>
              </div>

              {/* Links */}
              <nav className="px-1.5 py-2 overflow-y-auto">
                <ul className="space-y-1">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl px-3 py-2
                          text-[15px] leading-none truncate
                          ${
                            isActive(l.href)
                              ? "bg-emerald-50 text-green-900"
                              : "text-green-900/90 hover:bg-stone-50 hover:text-green-900"
                          }`}
                      >
                        <span className="truncate">{l.label}</span>
                        <svg
                          className="ml-2 h-4 w-4 flex-none opacity-80 transition-transform group-hover:translate-x-0.5"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-auto px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-1 text-[11px] text-stone-500">
                <div className="flex items-center justify-between">
                  <span>© {new Date().getFullYear()} Resinaro</span>
                  <div className="flex gap-2">
                    <Link href="/privacy" className="hover:text-stone-700">Privacy</Link>
                    <Link href="/terms" className="hover:text-stone-700">Terms</Link>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
