// src/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { p, useLocaleFromPathname } from "@/lib/localePath";
import TrustpilotReviewButton from "@/components/TrustpilotReviewButton";

/* ----------------------------- base data ----------------------------- */

const baseServices = [
  { title: "Passport", href: "/services/passport" },
  { title: "NIN Support", href: "/services/nin-support" },
  { title: "Bureaucracy", href: "/services/bureaucracy" },
  { title: "Housing", href: "/services/housing" },
];

const baseCities = [
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

/* ----------------------------- component ----------------------------- */

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const locale = useLocaleFromPathname();
  const isIt = locale === "it";

  const copy = useMemo(
    () => ({
      blurb: isIt
        ? "Supporto pratico e umano per gli italiani nel Regno Unito. Guide affidabili. Posti che amerai."
        : "Practical, human support for Italians in the UK. Guides you can trust. Places you’ll love.",
      emailPh: isIt ? "tua@email.com" : "your@email.com",
      subscribe: isIt ? "Iscriviti" : "Subscribe",
      thanks: isIt ? "Grazie!" : "Thanks!",
      lowVolume: isIt
        ? "Aggiornamenti a basso volume. Disiscrizione in qualsiasi momento."
        : "Low-volume updates. Unsubscribe anytime.",
      explore: isIt ? "Esplora" : "Explore",
      about: isIt ? "Chi siamo" : "About",
      community: isIt ? "Comunità" : "Community",
      volunteer: isIt ? "Volontariato" : "Volunteer",
      advertise: isIt ? "Pubblicità" : "Advertise",
      directory: isIt ? "Directory" : "Directory",
      allCities: isIt ? "Tutte le città →" : "All cities →",
      services: isIt ? "Servizi" : "Services",
      legal: isIt ? "Legale" : "Legal",
      privacy: isIt ? "Privacy" : "Privacy",
      terms: isIt ? "Termini" : "Terms",
      cookies: isIt ? "Cookie" : "Cookies",
      refunds: isIt ? "Rimborsi" : "Refunds",
      associate: isIt
        ? "In qualità di Affiliato Amazon, Resinaro riceve un compenso per gli acquisti idonei."
        : "As an Amazon Associate, Resinaro earns from qualifying purchases.",
      rights: isIt ? "Tutti i diritti riservati." : "All rights reserved.",
      hours: isIt ? "Lun–Ven · 9:00–17:00 (UK)" : "Mon–Fri · 9:00–17:00 (UK)",
      reviewCta: isIt ? "Ti è stato utile Resinaro?" : "Found Resinaro helpful?",
      reviewSub: isIt ? "Lascia una recensione su Trustpilot." : "Leave us a Trustpilot review.",
      // service titles
      svc: {
        passport: isIt ? "Passaporto" : "Passport",
        nin: isIt ? "Supporto NIN" : "NIN Support",
        bureaucracy: isIt ? "Burocrazia" : "Bureaucracy",
        housing: isIt ? "Casa" : "Housing",
      },
    }),
    [isIt]
  );

  const services = useMemo(
    () =>
      baseServices.map((s) => ({
        ...s,
        title:
          s.title === "Passport"
            ? copy.svc.passport
            : s.title === "NIN Support"
            ? copy.svc.nin
            : s.title === "Bureaucracy"
            ? copy.svc.bureaucracy
            : s.title === "Housing"
            ? copy.svc.housing
            : s.title,
        href: p(locale, s.href),
      })),
    [copy.svc, locale]
  );

  const cities = useMemo(
    () => baseCities.map((c) => ({ ...c, href: p(locale, c.href) })),
    [locale]
  );

  return (
    <footer className="relative overflow-hidden">
      {/* Background: soft hero with overlays for depth */}
      <div className="absolute inset-0 -z-10">
        {/* Your homepage hero image */}
        <Image
          src="/images/landscape-image.png"
          alt=""
          fill
          priority={false}
          className="object-cover opacity-35"
          sizes="100vw"
        />
        {/* Soft color/contrast overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_420px_at_50%_100%,rgba(16,185,129,.20),transparent)]" />
      </div>

      {/* Top hairline (tricolore) */}
      <div className="h-1 w-full flex" aria-hidden>
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-600" />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Card surface for contrast on the photo background */}
        <div className="rounded-3xl border border-black/5 bg-white/85 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,.12)]">
          {/* Brand + nav grid */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 px-5 py-8 md:grid-cols-12 md:px-8 lg:px-10">
            {/* Brand + newsletter + Trustpilot */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
            >
              <div className="leading-tight">
                <div className="text-2xl font-extrabold tracking-tight text-green-900">Resinaro</div>
                <div className="mt-1 h-0.5 w-16 flex overflow-hidden rounded">
                  <div className="flex-1 bg-green-700" />
                  <div className="flex-1 bg-white" />
                  <div className="flex-1 bg-red-600" />
                </div>
              </div>

              <p className="mt-3 max-w-sm text-sm text-gray-800">
                {copy.blurb}
              </p>

              {/* Newsletter */}
              <form
                method="post"
                action="/api/newsletter"
                aria-label={isIt ? "Iscriviti agli aggiornamenti" : "Subscribe to updates"}
                onSubmit={() => setSubmitted(true)}
                className="mt-5"
              >
                <div className="flex items-stretch overflow-hidden rounded-2xl border border-emerald-900/15 bg-white shadow-sm ring-1 ring-black/5 focus-within:border-green-800">
                  <input
                    id="newsletter"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder={copy.emailPh}
                    className="w-full min-w-0 flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 text-sm font-semibold text-green-900 hover:bg-emerald-50"
                    aria-live="polite"
                  >
                    {submitted ? copy.thanks : copy.subscribe}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-600">{copy.lowVolume}</p>
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

              {/* Trustpilot review CTA */}
              <div className="mt-6 rounded-2xl border border-emerald-900/10 bg-emerald-50/70 p-4">
                <div className="text-[15px] font-semibold text-green-900">
                  {copy.reviewCta}
                </div>
                <p className="text-xs text-emerald-900/80 mt-0.5">{copy.reviewSub}</p>
                <div className="mt-2 max-w-xs">
                  <TrustpilotReviewButton locale={locale} />
                </div>
              </div>
            </motion.div>

            {/* Explore */}
            <motion.nav
              aria-label="Explore"
              className="md:col-span-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <ColumnTitle>{copy.explore}</ColumnTitle>
              <ul className="space-y-1.5 text-sm">
                <li><FooterLink href={p(locale, "/about")}>{copy.about}</FooterLink></li>
                <li><FooterLink href={p(locale, "/community")}>{copy.community}</FooterLink></li>
                <li><FooterLink href={p(locale, "/volunteer")}>{copy.volunteer}</FooterLink></li>
                <li><FooterLink href={p(locale, "/advertise")}>{copy.advertise}</FooterLink></li>
              </ul>
            </motion.nav>

            {/* Directory */}
            <motion.nav
              aria-label="Directory"
              className="md:col-span-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.08 }}
            >
              <ColumnTitle>{copy.directory}</ColumnTitle>
              <ul className="space-y-1.5 text-sm">
                {cities.map((c) => (
                  <li key={c.href}>
                    <FooterLink href={c.href}>{c.title}</FooterLink>
                  </li>
                ))}
                <li className="pt-1">
                  <FooterLink href={p(locale, "/directory")} subtle>
                    {copy.allCities}
                  </FooterLink>
                </li>
              </ul>
            </motion.nav>

            {/* Services */}
            <motion.nav
              aria-label="Services"
              className="md:col-span-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <ColumnTitle>{copy.services}</ColumnTitle>
              <ul className="space-y-1.5 text-sm">
                {services.map((s) => (
                  <li key={s.href}>
                    <FooterLink href={s.href}>{s.title}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Legal */}
            <motion.nav
              aria-label="Legal"
              className="md:col-span-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.12 }}
            >
              <ColumnTitle>{copy.legal}</ColumnTitle>
              <ul className="space-y-1.5 text-sm">
                <li><FooterLink href={p(locale, "/privacy-policy")}>{copy.privacy}</FooterLink></li>
                <li><FooterLink href={p(locale, "/terms")}>{copy.terms}</FooterLink></li>
                <li><FooterLink href={p(locale, "/cookies")}>{copy.cookies}</FooterLink></li>
                <li><FooterLink href={p(locale, "/refund-policy")}>{copy.refunds}</FooterLink></li>
              </ul>
            </motion.nav>
          </div>

          {/* Divider & bottom rows inside the glass card */}
          <div className="mx-5 md:mx-8 lg:mx-10 border-t border-black/5" />

          {/* Associate disclosure */}
          <div className="px-5 md:px-8 lg:px-10 py-3 text-[12px] text-gray-700">
            {copy.associate}
          </div>

          {/* Bottom bar (inside card for clean edges on desktop) */}
          <div className="rounded-b-3xl bg-green-900 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 md:px-8 lg:px-10 py-3 text-xs sm:flex-row sm:items-center">
              <div>© {new Date().getFullYear()} Resinaro · {copy.rights}</div>
              <div className="opacity-90">
                <span className="text-white/70">{copy.hours}</span>
                <span aria-hidden className="mx-2">·</span>
                <a href="mailto:resinaro@proton.me" className="hover:underline">resinaro@proton.me</a>
              </div>
            </div>
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

/* ----------------------------- helpers ----------------------------- */

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-gray-900">
      {children}
    </div>
  );
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
      className="text-gray-700 transition hover:scale-[1.05] hover:text-green-900"
    >
      {children}
    </a>
  );
}

/* ----------------------------- icons ----------------------------- */

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
