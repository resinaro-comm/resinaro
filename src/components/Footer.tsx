// src/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { p } from "@/lib/localePath"; // keep your prefix helper
import TrustpilotReviewButton from "@/components/TrustpilotReviewButton";
import { useLocale } from "next-intl"; // <-- use Next-Intl locale (SSR/CSR-safe)

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

// NOTE: .com domain
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resinaro",
  url: "https://www.resinaro.com",
  logo: "https://www.resinaro.com/images/logo.png",
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

  // ✅ Locale now comes from next-intl provider (stable SSR/CSR)
  const locale = (useLocale() as "en" | "it") || "en";
  const isIt = locale === "it";

  const copy = useMemo(
    () => ({
      blurb: isIt
        ? "Supporto pratico per gli italiani nel Regno Unito. Guide chiare. Posti che amerai."
        : "Practical support for Italians in the UK. Clear guides. Places you’ll love.",
      emailPh: isIt ? "tua@email.com" : "your@email.com",
      subscribe: isIt ? "Iscriviti" : "Subscribe",
      thanks: isIt ? "Grazie!" : "Thanks!",
      lowVolume: isIt
        ? "Aggiornamenti rari, disiscrizione in ogni momento."
        : "Low-volume updates, unsubscribe anytime.",
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
        ? "Come Affiliato Amazon, Resinaro riceve un compenso sugli acquisti idonei."
        : "As an Amazon Associate, Resinaro earns from qualifying purchases.",
      rights: isIt ? "Tutti i diritti riservati." : "All rights reserved.",
      hours: isIt ? "Lun–Ven · 9:00–17:00 (UK)" : "Mon–Fri · 9:00–17:00 (UK)",
      reviewCta: isIt ? "Hai trovato utile Resinaro?" : "Found Resinaro helpful?",
      reviewSub: isIt ? "Lascia una recensione su Trustpilot." : "Leave a Trustpilot review.",
      newsletterAria: isIt ? "Iscriviti agli aggiornamenti" : "Subscribe to updates",
      emailLabel: isIt ? "Email" : "Email",
      builtByText: isIt ? "Costruito da Alveriano" : "Built by Alveriano",
      builtByAria: isIt ? "Apri il sito di Alveriano" : "Open Alveriano website",
      svc: {
        passport: isIt ? "Passaporto" : "Passport",
        nin: isIt ? "Supporto NIN" : "NIN Support",
        bureaucracy: isIt ? "Burocrazia" : "Bureaucracy",
        housing: isIt ? "Casa" : "Housing",
      },

      /* ---- Alveriano footer promo ---- */
      alv: {
        heading: isIt
          ? "Costruito da Alveriano — web & funnel studio"
          : "Built by Alveriano — web & funnel studio",
        sub: isIt
          ? "Siti web veloci, SEO, funnel con AI e contenuti che portano clienti. Creato per aziende di servizi."
          : "Fast websites, SEO, AI funnels and content that brings leads — built for service businesses.",
        bullets: isIt
          ? [
              "Next.js, prestazioni A+ e accessibilità.",
              "SEO tecnico + content engine che scala.",
              "Funnel conversazionali con AI (chatbot sui tuoi contenuti).",
              "Integrazioni Stripe, Calendly, CRM e automazioni.",
              "Design pulito, copy chiaro, tracciamento serio.",
            ]
          : [
              "Next.js builds with A+ performance & accessibility.",
              "Technical SEO + scalable content engine.",
              "AI conversational funnels (chatbot on your content).",
              "Stripe, Calendly, CRM integrations & automations.",
              "Clean design, clear copy, real analytics.",
            ],
        ctaPrimary: isIt ? "Scopri Alveriano" : "Explore Alveriano",
        ctaSecondary: isIt ? "Richiedi un audit gratuito (15 min)" : "Request a free 15-min audit",
        foot: isIt
          ? "Pronto a far crescere il tuo sito come Resinaro? Parla con noi: risultati misurabili, senza fronzoli."
          : "Want results like Resinaro? Talk to us — measurable growth, no fluff.",
        email: "hello@alveriano.com",
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
      {/* background: homepage hero (full width, responsive, doesn’t change height) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/landscape-image.png"
          alt=""
          fill
          className="object-cover object-[50%_30%] w-full h-full max-w-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/78 to-white/92" />
      </div>

      {/* tricolour hairline */}
      <div className="h-[3px] w-full flex" aria-hidden>
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-600" />
      </div>

      {/* ROW 1: brand + actions */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center text-center gap-5 md:flex-row md:items-start md:justify-between md:text-left">
          {/* brand + blurb */}
          <div className="min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-2xl font-extrabold tracking-tight text-green-900">
                Resinaro
              </div>
              <div className="h-0.5 w-16 overflow-hidden rounded">
                <div className="flex h-full">
                  <div className="flex-1 bg-green-700" />
                  <div className="flex-1 bg-white" />
                  <div className="flex-1 bg-red-600" />
                </div>
              </div>
            </div>
            <p className="mt-1 text-[14px] text-gray-700 md:max-w-xl max-w-md">
              {copy.blurb}
            </p>
          </div>

          {/* newsletter + trustpilot */}
          <div className="flex w-full md:w-auto flex-col items-center gap-3 md:flex-row md:items-center md:justify-end md:flex-1 md:pl-8 md:gap-4">
            <form
              method="post"
              action="/api/newsletter"
              onSubmit={() => setSubmitted(true)}
              aria-label={copy.newsletterAria}
              className="
                w-full md:flex-1
                overflow-hidden rounded-full border border-emerald-900/15 bg-white
                shadow-sm ring-1 ring-black/5
                flex items-stretch
                max-w-xl md:max-w-3xl
              "
            >
              {/* Input has real width; button is fixed-width and never shrinks */}
              <input
                name="email"
                type="email"
                inputMode="email"
                required
                placeholder={copy.emailPh}
                className="flex-1 min-w-[14rem] md:min-w-[28rem] px-4 py-2.5 text-[14px] outline-none"
                aria-label={copy.emailLabel}
              />
              <button
                type="submit"
                className="flex-none shrink-0 min-w-[136px] px-5 text-[13px] font-semibold rounded-l-none rounded-r-full bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 whitespace-nowrap"
                aria-live="polite"
              >
                {submitted ? copy.thanks : copy.subscribe}
              </button>
            </form>

            <div className="w-full sm:w-auto flex justify-center md:justify-start">
              <TrustpilotReviewButton locale={locale} />
            </div>
          </div>
        </div>

        <p className="mt-2 text-[11px] text-gray-500 text-center md:text-left">
          {copy.lowVolume}
        </p>
      </div>

      {/* thin divider */}
      <div className="mx-auto max-w-7xl border-t border-black/5" />

      {/* ROW 2: nav — desktop always visible; mobile collapsible */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-6">
          <FooterSection title={copy.explore}>
            <FooterList>
              <FooterItem href={p(locale, "/about")}>{copy.about}</FooterItem>
              <FooterItem href={p(locale, "/community")}>{copy.community}</FooterItem>
              <FooterItem href={p(locale, "/volunteer")}>{copy.volunteer}</FooterItem>
              <FooterItem href={p(locale, "/advertise")}>{copy.advertise}</FooterItem>
            </FooterList>
          </FooterSection>

          <FooterSection title={copy.directory}>
            <FooterList>
              {cities.map((c) => (
                <FooterItem key={c.href} href={c.href}>
                  {c.title}
                </FooterItem>
              ))}
              <FooterItem subtle href={p(locale, "/directory")}>
                {copy.allCities}
              </FooterItem>
            </FooterList>
          </FooterSection>

          <FooterSection title={copy.services}>
            <FooterList>
              {services.map((s) => (
                <FooterItem key={s.href} href={s.href}>
                  {s.title}
                </FooterItem>
              ))}
            </FooterList>
          </FooterSection>

          <FooterSection title={copy.legal}>
            <FooterList>
              <FooterItem href={p(locale, "/privacy-policy")}>{copy.privacy}</FooterItem>
              <FooterItem href={p(locale, "/terms")}>{copy.terms}</FooterItem>
              <FooterItem href={p(locale, "/cookies")}>{copy.cookies}</FooterItem>
              <FooterItem href={p(locale, "/refund-policy")}>{copy.refunds}</FooterItem>
            </FooterList>
          </FooterSection>
        </div>
      </div>

      {/* bottom meta bar */}
      <div className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-[12px] flex flex-col items-center gap-1 md:flex-row md:justify-between md:gap-0">
          <div>
            © {new Date().getFullYear()} Resinaro · {copy.rights}
          </div>
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
            <span className="text-white/70">{copy.hours}</span>
            <span aria-hidden className="hidden sm:inline text-white/40">·</span>
            <a href="mailto:resinaro@proton.me" className="hover:underline">
              resinaro@proton.me
            </a>
            <span aria-hidden className="hidden sm:inline text-white/40">·</span>
            <a
              href="https://alveriano.com"
              className="hover:underline"
              aria-label={copy.builtByAria}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.builtByText}
            </a>
          </div>
        </div>
      </div>

      {/* --- Alveriano Promo Band (SEO + Leads) --- */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-emerald-900 text-center">
              {copy.alv.heading}
            </h2>
            <p className="mt-2 text-sm md:text-base text-emerald-900/90 text-center max-w-3xl mx-auto">
              {copy.alv.sub}
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-emerald-900/90 max-w-4xl mx-auto">
              {copy.alv.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 text-emerald-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://alveriano.com/?utm_source=resinaro&utm_medium=referral&utm_campaign=footer_promo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-2.5 text-white text-sm font-semibold hover:bg-emerald-800 shadow-md hover:shadow-lg"
              >
                {copy.alv.ctaPrimary}
              </a>
              <a
                href={`mailto:${copy.alv.email}?subject=Resinaro%20site%20audit%20request&body=Hi%20Alveriano,%0D%0A%0D%0AWe%27d%20like%20a%2015-minute%20audit.%20Website:%20_____%0D%0AGoals:%20_____%0D%0A`}
                className="inline-flex items-center justify-center rounded-lg border border-emerald-700 px-5 py-2.5 text-emerald-800 text-sm font-semibold hover:bg-emerald-100"
              >
                {copy.alv.ctaSecondary}
              </a>
            </div>

            <p className="mt-4 text-center text-[13px] text-emerald-900/80 max-w-3xl mx-auto">
              {copy.alv.foot}{" "}
              <a
                href="https://alveriano.com/case-studies?utm_source=resinaro&utm_medium=referral&utm_campaign=footer_promo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-emerald-600 decoration-2 underline-offset-2 hover:text-emerald-800"
              >
                alveriano.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD (Resinaro) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* JSON-LD (Alveriano) */}
      <script
        type="application/ld+json"
        // Minimal, safe Organization block to help Alveriano’s SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://alveriano.com/#organization",
            name: "Alveriano",
            url: "https://alveriano.com",
            sameAs: ["https://alveriano.com"],
            description:
              "Alveriano is a web & funnel studio building fast Next.js sites, SEO systems and AI-driven conversion funnels for service businesses.",
          }),
        }}
      />
    </footer>
  );
}

/* ----------------------------- small bits ----------------------------- */

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  // Mobile: collapsible; Desktop: force-open and show content.
  return (
    <details className="group md:open">
      <summary
        className="
          mx-auto w-full max-w-sm md:max-w-none md:mx-0
          flex cursor-pointer list-none items-center justify-between gap-3
          px-3 py-2 md:px-0 md:py-1
        "
      >
        <span className="text-[13px] font-semibold uppercase tracking-wide text-gray-900 w-full text-center md:text-left">
          {title}
        </span>
        <span
          aria-hidden
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs text-gray-700 md:hidden group-open:rotate-45 transition"
        >
          +
        </span>
      </summary>

      {/* On desktop, don't allow closing/hiding; keep content visible */}
      <div className="pb-2 md:pb-0 md:block">{children}</div>
    </details>
  );
}

function FooterList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1.5 text-sm text-center md:text-left">{children}</ul>;
}

function FooterItem({
  href,
  children,
  subtle,
}: {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`group inline-flex items-center justify-center md:justify-start gap-1 text-gray-700 hover:text-green-900 ${
          subtle ? "text-gray-600" : ""
        }`}
      >
        <span>{children}</span>
        <svg
          className="h-3.5 w-3.5 translate-x-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 md:opacity-100 md:relative md:-right-[1px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </li>
  );
}
