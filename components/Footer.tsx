// src/components/Footer.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Passport", href: "/services/passport" },
  { title: "NIN Support", href: "/services/nin-support" },
  { title: "Bureaucracy", href: "/services/bureaucracy" },
  { title: "Housing", href: "/services/housing" },
];

const cities = [
  { title: "Manchester", href: "/directory/manchester" },
  { title: "Leeds", href: "/directory/leeds" },
  { title: "Bradford", href: "/directory/bradford" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resinaro",
  url: "https://resinaro.org",
  logo: "https://resinaro.org/images/logo.png",
  sameAs: [
    "https://www.instagram.com/resinarouk/",
    "https://www.youtube.com/@resinaroUK",
    "https://www.tiktok.com/@resinaro.uk",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-20-1234-5678",
      email: "resinaro@proton.me",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: ["English", "Italian"],
    },
  ],
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-[#F9F6F1]">
      {/* subtle radial tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(1200px 400px at 50% 120%, rgba(16,185,129,0.08), rgba(255,255,255,0))",
        }}
      />

      {/* tricolore hairline */}
      <div className="h-1 w-full flex relative z-10" aria-hidden="true">
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & newsletter */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="leading-tight">
              <div className="text-2xl font-bold text-green-900">Resinaro</div>
              <div className="mt-1 h-0.5 w-16 flex overflow-hidden rounded">
                <div className="flex-1 bg-green-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-red-600" />
              </div>
            </div>

            <p className="mt-3 max-w-sm text-sm text-gray-700">
              Practical, human support for Italians in the UK. Guides you can trust. Places you’ll love.
            </p>

            {/* Email subscription */}
            <div className="mt-5">
              <form
                method="post"
                action="/api/newsletter"
                aria-label="Subscribe to updates"
                onSubmit={() => {
                  // Let the endpoint handle it; fake a happy state for quick UX
                  setSubmitted(true);
                }}
                className="group"
              >
                <label htmlFor="newsletter" className="sr-only">
                  Your email
                </label>
                <div className="flex items-stretch overflow-hidden rounded-xl border border-green-900/20 bg-white shadow-sm ring-1 ring-black/5 focus-within:border-green-800">
                  <input
                    id="newsletter"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className="w-full min-w-0 flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 text-sm font-medium text-green-900 hover:bg-emerald-50"
                    aria-live="polite"
                  >
                    {submitted ? "Grazie!" : "Subscribe"}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">Low-volume updates. Unsubscribe anytime.</p>
              </form>

              {/* Socials */}
              <div className="mt-5 flex items-center gap-4" aria-label="Social links">
                <IconLink href="https://www.instagram.com/resinarouk/" label="Instagram">
                  <InstagramIcon />
                </IconLink>
                <IconLink href="https://www.youtube.com/@resinaroUK" label="YouTube">
                  <YouTubeIcon />
                </IconLink>
                <IconLink href="https://www.tiktok.com/@resinaro.uk" label="TikTok">
                  <TikTokIcon />
                </IconLink>
                <IconLink href="mailto:resinaro@proton.me" label="Email">
                  <MailIcon />
                </IconLink>
              </div>
            </div>
          </motion.div>

          {/* Link columns */}
          <motion.nav
            aria-label="Explore"
            className="md:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          >
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-1.5 text-sm">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/community">Community</FooterLink></li>
              <li><FooterLink href="/volunteer">Volunteer</FooterLink></li>
              <li><FooterLink href="/advertise">Advertise</FooterLink></li>
            </ul>
          </motion.nav>

          <motion.nav
            aria-label="Directory"
            className="md:col-span-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
          >
            <ColumnTitle>Directory</ColumnTitle>
            <ul className="space-y-1.5 text-sm">
              {cities.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href}>{c.title}</FooterLink>
                </li>
              ))}
              <li className="pt-1">
                <FooterLink href="/directory" subtle>
                  All cities →
                </FooterLink>
              </li>
            </ul>
          </motion.nav>

          <motion.nav
            aria-label="Services"
            className="md:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          >
            <ColumnTitle>Services</ColumnTitle>
            <ul className="space-y-1.5 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href}>{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            aria-label="Legal"
            className="md:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
          >
            <ColumnTitle>Legal</ColumnTitle>
            <ul className="space-y-1.5 text-sm">
              <li><FooterLink href="/privacy-policy">Privacy</FooterLink></li>
              <li><FooterLink href="/terms">Terms</FooterLink></li>
              <li><FooterLink href="/cookies">Cookies</FooterLink></li>
              <li><FooterLink href="/refund-policy">Refunds</FooterLink></li>
            </ul>
          </motion.nav>
        </div>
      </div>

      {/* Associate disclosure */}
      <div className="relative z-10 border-t border-gray-200 bg-[#F2EEE6] text-gray-600">
        <div className="mx-auto max-w-6xl px-6 py-2 text-xs">
          As an Amazon Associate, Resinaro earns from qualifying purchases.
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-green-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-3 text-xs sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Resinaro · All rights reserved.</div>
          <div className="opacity-90">
            <span className="text-white/70">Mon–Fri · 9:00–17:00 (UK)</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <a href="mailto:resinaro@proton.me" className="hover:underline">resinaro@proton.me</a>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </footer>
  );
}

/* ---------- small presentational helpers ---------- */
function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 font-semibold text-gray-900">{children}</div>;
}

function FooterLink({
  href,
  children,
  subtle,
}: {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 text-gray-700 hover:text-green-900 ${subtle ? "text-gray-600" : ""}`}
    >
      <span>{children}</span>
      <svg
        className="h-3.5 w-3.5 translate-x-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-700 transition hover:scale-[1.04] hover:text-green-900"
    >
      {children}
    </a>
  );
}

/* ---------- icons (tiny, clean) ---------- */
function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.5-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"
      />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.8 8.001a2.75 2.75 0 0 0-1.936-1.945C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.864.556A2.75 2.75 0 0 0 2.2 8.001C1.643 9.765 1.643 12 1.643 12s0 2.235.557 3.999a2.75 2.75 0 0 0 1.936 1.945C5.9 18.5 12 18.5 12 18.5s6.1 0 7.864-.556a2.75 2.75 0 0 0 1.936-1.945C22.357 14.235 22.357 12 22.357 12s0-2.235-.557-3.999zM10.5 15.5v-7l6 3.5-6 3.5z"
      />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.25 2A3.25 3.25 0 0 0 14 5.25V17a2.75 2.75 0 1 1-2.75-2.75h.25V12h-.25A5.25 5.25 0 1 0 16.5 17v-5.5h1.25A3.25 3.25 0 0 0 21 8.25V5.5h-2.25A1.25 1.25 0 0 1 17.25 4.25V2z"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z"
      />
    </svg>
  );
}
