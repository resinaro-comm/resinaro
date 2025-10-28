// src/app/[locale]/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";

export default function NotFound({
  params,
}: {
  params: { locale: "en" | "it" | string };
}) {
  const router = useRouter();
  const locale = params?.locale === "it" ? "it" : "en";
  const p = (path: string) => `/${locale}${path}`;

  const copy = {
    badge: locale === "it" ? "Ops — pagina non trovata" : "Oops — page not found",
    h1:
      locale === "it"
        ? "Questa pagina non esiste (ancora)."
        : "This page doesn’t exist (yet).",
    desc:
      locale === "it"
        ? "Hai seguito un link rotto o la pagina è stata spostata. Nessun problema — prova a cercare o visita una delle sezioni popolari qui sotto."
        : "You’ve hit a broken or moved link. Try searching, or jump to one of our most-visited sections below.",
    goHome: locale === "it" ? "Vai alla Home" : "Go to Home",
    browseDir: locale === "it" ? "Sfoglia la Directory" : "Browse the Directory",
    blogHub: locale === "it" ? "Community (blog)" : "Community (blog hub)",
    services: locale === "it" ? "Sportello servizi" : "Service hub",
    contact: locale === "it" ? "Contattaci" : "Contact us",
    emailLine: locale === "it" ? "Preferisci email?" : "Prefer email?",
    popular: locale === "it" ? "Contenuti popolari" : "Popular right now",
    exploreCities: locale === "it" ? "Città più cercate" : "Popular cities",
    helpLinks: locale === "it" ? "Serve aiuto?" : "Need help?",
    searchLabel: locale === "it" ? "Cerca sul sito" : "Search the site",
    back: locale === "it" ? "Indietro" : "Go back",
    report: locale === "it" ? "Segnala link rotto" : "Report broken link",
  };

  // Build a mailto with the current path so we get useful reports
  const [mailtoHref, setMailtoHref] = useState("mailto:resinaro@proton.me");
  useEffect(() => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      const subject =
        locale === "it" ? "Link rotto su Resinaro" : "Broken link on Resinaro";
      const body =
        (locale === "it"
          ? "Ho trovato un link rotto su questa pagina:%0D%0A"
          : "I found a broken link on this page:%0D%0A") +
        encodeURIComponent(url) +
        "%0D%0A%0D%0A" +
        (locale === "it" ? "Dettagli:" : "Details:");
      setMailtoHref(
        `mailto:resinaro@proton.me?subject=${encodeURIComponent(
          subject
        )}&body=${body}`
      );
    } catch {
      /* noop */
    }
  }, [locale]);

  // Curated internal links (match existing routes in your tree)
  const popularLinks = useMemo(
    () =>
      locale === "it"
        ? [
            { href: p("/nin-number"), label: "Numero NIN (UK)" },
            { href: p("/utilities-and-internet"), label: "Utenze & Internet (UK)" },
            { href: p("/education"), label: "Istruzione (UCAS, visti, diplomi)" },
            { href: p("/tax-and-money"), label: "Tasse & Soldi (banche, credito, HMRC)" },
            { href: p("/community/bureaucracy-guides/italian-passport-uk-docs-prep"), label: "Passaporto italiano in UK" },
            { href: p("/community/bureaucracy-guides/aire-registration-uk"), label: "Cos’è l’AIRE e come registrarsi" },
          ]
        : [
            { href: p("/nin-number"), label: "National Insurance Number (NIN)" },
            { href: p("/utilities-and-internet"), label: "Utilities & Internet (UK)" },
            { href: p("/education"), label: "Education (UCAS, visas, diplomas)" },
            { href: p("/tax-and-money"), label: "Tax & Money (banking, credit, HMRC)" },
            { href: p("/community/bureaucracy-guides/italian-passport-uk-docs-prep"), label: "Italian Passport in the UK" },
            { href: p("/community/bureaucracy-guides/aire-registration-uk"), label: "What is AIRE & how to register" },
          ],
    [locale]
  );

  // Dynamic city pages exist under /directory/[city] — these are valid deep links
  const cityLinks = useMemo(
    () => [
      { href: p("/directory/london"), label: "London" },
      { href: p("/directory/manchester"), label: "Manchester" },
      { href: p("/directory/leeds"), label: "Leeds" },
      { href: p("/directory/glasgow"), label: "Glasgow" },
    ],
    [locale]
  );

  const helpLinks = useMemo(
    () => [
      { href: p("/services"), label: copy.services },
      { href: p("/contact"), label: copy.contact },
      { href: p("/privacy-policy"), label: locale === "it" ? "Privacy" : "Privacy" },
      { href: p("/terms"), label: locale === "it" ? "Termini" : "Terms" },
    ],
    [copy.contact, copy.services, locale]
  );

  // JSON-LD: WebSite SearchAction (eligible for sitelinks search box)
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.resinaro.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    // Wrapped by the segment layout (Navbar/Footer)
    <main
      className="relative isolate min-h-[80vh] px-4 py-10 md:py-14"
      style={{ paddingTop: "calc(var(--ad-banner-offset, 0px) + 56px)" }}
    >
      {/* Soft background vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 50% 0%, rgba(16,185,129,0.10), rgba(255,255,255,0))",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
        {/* Left: copy + actions */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs text-emerald-900">
            {copy.badge}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            {copy.h1}
          </h1>
          <p className="mt-2 max-w-prose text-sm text-stone-700 sm:text-base">
            {copy.desc}{" "}
            <span className="whitespace-nowrap">
              {locale === "it"
                ? "Le nostre guide sono verificate a mano e guidate dalla comunità."
                : "Our guides are hand-checked and community-guided."}
            </span>
          </p>

          {/* Site search (drives discovery + UX) */}
          <div className="mt-5 max-w-lg">
            <label className="mb-2 block text-sm font-medium text-green-900">
              {copy.searchLabel}
            </label>
            <SearchBox />
          </div>

          {/* Primary CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-green-800 px-4 font-medium text-green-900 hover:bg-emerald-50"
            >
              ← {copy.back}
            </button>
            <Link
              href={`/${locale}`}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700"
            >
              {copy.goHome}
            </Link>
            <Link
              href={mailtoHref}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-green-800 px-4 font-medium text-green-900 hover:bg-emerald-50"
            >
              {copy.report}
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <NavCard
              href={p("/directory")}
              title={copy.browseDir}
              desc={
                locale === "it"
                  ? "Trova i migliori posti italiani per città."
                  : "Find the best Italian places by city."
              }
            />
            <NavCard
              href={p("/community")}
              title={copy.blogHub}
              desc={
                locale === "it"
                  ? "Consigli, guide e preferiti locali."
                  : "Tips, guides, and local favourites."
              }
            />
            <NavCard
              href={p("/services")}
              title={copy.services}
              desc={
                locale === "it"
                  ? "Passaporti, NIN, burocrazia e casa."
                  : "Passports, NIN, bureaucracy & housing."
              }
            />
            <NavCard
              href={p("/contact")}
              title={copy.contact}
              desc={
                locale === "it"
                  ? "Hai trovato un link rotto? Dicci tutto."
                  : "Spotted a broken link? Tell us."
              }
            />
          </div>

          {/* Popular/internal discovery blocks */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <CardBlock title={copy.popular} links={popularLinks} />
            <CardBlock title={copy.exploreCities} links={cityLinks} />
          </div>

          <div className="mt-8">
            <CardBlock title={copy.helpLinks} links={helpLinks} />
          </div>

          {/* Contact line */}
          <p className="mt-5 text-xs text-stone-500">
            {copy.emailLine}{" "}
            <a
              className="underline underline-offset-2 hover:text-stone-700"
              href="mailto:resinaro@proton.me"
            >
              resinaro@proton.me
            </a>
          </p>
        </div>

        {/* Right: playful-but-classy illustration */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
          aria-hidden="true"
        >
          <div className="relative select-none rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full">
              <div className="flex h-full">
                <div className="flex-1 bg-green-600" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-red-600" />
              </div>
            </div>

            <div className="flex items-center justify-center py-6">
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="text-[68px] font-extrabold leading-none tracking-tighter text-green-900 sm:text-[84px]"
              >
                4<span className="opacity-80">0</span>4
              </motion.div>
            </div>

            <div className="mx-auto h-40 w-40">
              <motion.svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                initial={{ rotate: -6 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="96" fill="url(#g)" />
                <circle cx="100" cy="100" r="72" fill="#fff" stroke="#065F46" strokeWidth="3" />
                <path d="M100 40c22 0 40 18 40 40 0 28-40 80-40 80S60 108 60 80c0-22 18-40 40-40z" fill="#10B981" opacity="0.15" />
                <circle cx="100" cy="80" r="16" fill="#10B981" stroke="#065F46" strokeWidth="3" />
                <path d="M100 30v20M170 100h-20M100 170v-20M30 100h20" stroke="#065F46" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* JSON-LD: WebSite SearchAction */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </main>
  );
}

function NavCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white/80 p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-medium text-green-900">{title}</div>
          <div className="mt-0.5 text-xs text-stone-600">{desc}</div>
        </div>
        <svg
          className="h-5 w-5 flex-none text-green-900/80 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function CardBlock({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="rounded-2xl border bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-900">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-2 text-green-900 hover:underline"
            >
              <span>{l.label}</span>
              <svg
                className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
