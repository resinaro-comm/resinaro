/* --------------------------------------------------------------------------
   Italian Passport Help (UK) — Resinaro
   - Fixed horizontal-only carousel (no page jumps)
   - Portrait-safe image sizing
   - Layout polish (centering fix)
   - Expanded SEO metadata & JSON-LD
   NOTE: This remains a single file page as requested.
---------------------------------------------------------------------------*/

import PassportForm from "@/components/PassportForm";
import CarouselBinder from "@/components/CarouselBinder";
import { Metadata } from "next";
import Image from "next/image";

/* =============================== METADATA =============================== */
/**
 * Expanded SEO:
 * - robots: index/follow + max image preview
 * - alternates with language variants (en/it)
 * - richer OpenGraph/Twitter images
 * - tightly written descriptions for search intent
 */
export const metadata: Metadata = {
  title: "Italian Passport Help (UK) | Resinaro",
  description:
    "Book Prenot@Mi passport appointments (12+/adults) and get Under-12 postal guidance. Clear steps, honest expectations, and human email support when you need it.",
  alternates: {
    canonical: "/services/passport",
    languages: {
      en: "/en/services/passport",
      it: "/it/services/passport",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Friendly help to book Prenot@Mi (12+/adults) and prepare Under-12 postal packs. We are not the Consulate; availability and issuance are their decision.",
    url: "https://www.resinaro.com/services/passport",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-passport.png",
        width: 1200,
        height: 630,
        alt: "Italian passport help by Resinaro",
      },
      {
        url: "/proof/2026-02-manchester-appointment-01.webp",
        width: 1600,
        height: 1000,
        alt: "Recent appointment booked — Manchester",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Book Prenot@Mi (12+/adults) and Under-12 postal help. Clear steps, no false promises. Email resinaro@proton.me for tailored advice.",
    images: ["/images/service-passport.png"],
    creator: "@resinaro",
  },
};

/* =============================== JSON-LD ================================ */
/**
 * Structured data:
 * - FAQPage (already present)
 * - Service (already present)
 * - BreadcrumbList (already present)
 * - Organization + WebSite (added)
 * - ImageObject for the three proof images (added)
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you guarantee an appointment or passport?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Appointment availability and passport issuance are decided only by the Consulate. Resinaro provides booking assistance and postal-pack guidance; outcomes and timelines are outside our control.",
      },
    },
    {
      "@type": "Question",
      name: "What does Resinaro actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Two things: (1) help monitor and book passport appointments on Prenot@Mi for 12+/adults; (2) guide parents through the Under-12 postal application with a fool-proof checklist.",
      },
    },
    {
      "@type": "Question",
      name: "Can I email documents instead of uploading?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can email documents to resinaro@proton.me. The form also has an “I’ll email later” option if that’s easier.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian Passport Appointment Help",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Prenot@Mi appointment support and Under-12 postal guidance",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Clear, friendly support for booking Italian passport appointments and preparing Under-12 postal packs. No guarantees of availability or issuance.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Services", item: "https://www.resinaro.com/services" },
    { "@type": "ListItem", position: 2, name: "Passport", item: "https://www.resinaro.com/services/passport" },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resinaro",
  url: "https://www.resinaro.com",
  email: "resinaro@proton.me",
  logo: "https://www.resinaro.com/android-chrome-192x192.png",
  sameAs: [
    "https://www.instagram.com/resinaro",
    "https://www.youtube.com/@resinaro",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "resinaro@proton.me",
      availableLanguage: ["English", "Italian"],
      areaServed: "GB",
    },
  ],
};

const siteJsonLd = {
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

const imageObjectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/2026-02-manchester-appointment-01.webp",
      name: "Booked appointment — Manchester — February 2026",
      width: 1600,
      height: 1000,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/wl-2025-11-10-01.webp",
      name: "Waiting list secured — Manchester — 10 Nov 2025",
      width: 1080,
      height: 1920,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/wl-2025-11-12-02.webp",
      name: "Waiting list secured — Manchester — 12 Nov 2025",
      width: 1080,
      height: 1920,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_1.webp",
      name: "passport appointment confirmed",
      width: 1284,
      height: 1336,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_2.webp",
      name: "passport appointment booked successfully",
      width: 1234,
      height: 2290,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_3.webp",
      name: "Passport appointment booked successfully",
      width: 1216,
      height: 1968,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_4.webp",
      name: "Recent passport appointment booked successfully",
      width: 1134,
      height: 598,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_5.webp",
      name: "Passport appointment booked successfully",
      width: 1242,
      height: 1574,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_6.webp",
      name: "Passport appointment booked successfully",
      width: 1184,
      height: 733,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_7.webp",
      name: "Recent passport appointment booked successfully",
      width: 1284,
      height: 904,
    },
  ],
};

/* ============================= i18n strings ============================ */
function t(locale: "en" | "it") {
  const it = locale === "it";
  return {
    heroAlt: it ? "Supporto per passaporto italiano" : "Italian passport support",
    h1: it ? "Assistenza Passaporto Italiano (Regno Unito)" : "Italian Passport Help (UK)",
    introP1: it ? (
      <>
        Ti aiutiamo con la <strong>prenotazione Prenot@Mi (12+/adulti)</strong> e con i{" "}
        <strong>pacchetti postali Under-12</strong>. Se hai dubbi, scrivi a{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        prima di pagare — ti guideremo.
      </>
    ) : (
      <>
        We help with <strong>Prenot@Mi booking (12+/adults)</strong> and <strong>Under-12 postal packs</strong>. If
        you’re unsure, email{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        before paying — we’ll guide you.
      </>
    ),

    // PRICING
    pricingH: it ? "Prezzi" : "Pricing",
    pricingL1: it ? (
      <>
        <strong>£40</strong> — Prenotazione della <strong>data/ora</strong> (Prenot@Mi).
      </>
    ) : (
      <>
        <strong>£40</strong> — Appointment <strong>date &amp; time booking</strong> (Prenot@Mi).
      </>
    ),
    pricingL2: it ? (
      <>
        <strong>£30</strong> — <strong>Lista d’attesa</strong> e monitoraggio (Prenot@Mi).
      </>
    ) : (
      <>
        <strong>£30</strong> — <strong>Waiting list</strong> &amp; monitoring (Prenot@Mi).
      </>
    ),
    pricingNote: it
      ? "Prezzi riferiti all’assistenza Resinaro; non includono tariffe consolari o spedizioni."
      : "Prices are for Resinaro’s help only; consular fees or postage are not included.",

    // Important (bottom)
    importantH: it ? "Importante" : "Important",
    importantP1: it ? (
      <>
        Non siamo il Consolato. La disponibilità degli appuntamenti e le decisioni sul passaporto spettano a loro.{" "}
        <strong>Non garantiamo</strong> date o esiti. Evita di prenotare viaggi finché il passaporto non è emesso.
      </>
    ) : (
      <>
        We are <strong>not</strong> the Consulate. Appointment supply and passport decisions are theirs. We don’t
        guarantee dates or outcomes. We recommend not booking travel until your passport is issued.
      </>
    ),
    importantP2: it ? (
      <>
        Preferisci l’email? Invia le informazioni a{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ) : (
      <>
        Prefer email? Send info to{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ),

    formH: it ? "Prenota assistenza passaporto" : "Book passport support",
    formP: it ? "Una procedura guidata semplice. Un passo alla volta ✨" : "A tiny, friendly wizard. One small step at a time ✨",

    doH: it ? "Cosa facciamo" : "What we do",
    do12H: it ? "Prenot@Mi (12+/adulti)" : "Prenot@Mi booking (12+/adults)",
    do12P: it
      ? "Monitoriamo e tentiamo le prenotazioni, aiutiamo a configurare l’account se vuoi, e prepariamo la tua checklist. La disponibilità è gestita dal Consolato."
      : "We monitor and attempt bookings, help set up the account if you want, and prepare your checklist. Availability is controlled by the Consulate.",
    doU12H: it ? "Guida postale Under-12" : "Under-12 postal guidance",
    doU12P: it
      ? "Ti forniamo una lista infallibile del pacchetto e rivediamo i documenti prima della spedizione al Consolato (nessun appuntamento in presenza per Under-12)."
      : "We give you a fool-proof pack list and review uploads before you post to the Consulate (no in-person appointment required for U12).",

    docsH: it ? "Documenti rapidi (promemoria)" : "Quick docs (heads-up)",
    docs12H: it ? "Per Prenot@Mi" : "For Prenot@Mi",
    docs12L1: it ? "Documento d’identità valido (passaporto/CIE)" : "Valid photo ID (passport/ID card)",
    docs12L2: it ? "Prova di indirizzo nel Regno Unito (≤ 3 mesi)" : "Proof of UK address (≤3 months)",
    docs12L3: it ? "AIRE aggiornato" : "AIRE up to date",
    docs12Note: it ? (
      <>
        Dubbi sui requisiti? Scrivici prima:{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ) : (
      <>
        Unsure you qualify? Email us first:{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ),
    docsU12H: it ? "Per Under-12 (posta)" : "For Under-12 (postal)",
    docsU12L1: it ? "Modulo U12 + documenti d’identità di entrambi i genitori (no patente)" : "U12 form + both parents’ IDs (no driving licences)",
    docsU12L2: it ? "Consenso dei genitori + 2 foto (una controfirmata)" : "Parents’ consent + 2 photos (one countersigned)",
    docsU12L3: it ? "Prova di indirizzo + busta di ritorno Special Delivery" : "Proof of address + Special Delivery return envelope",
    docsU12Note: it
      ? "Primo passaporto e trascrizione di nascita non possono essere inviati insieme (regola dal 28 maggio 2025)."
      : "First passport + birth registration can’t be sent together (rule from 28 May 2025).",

    adviceH: it ? "Serve un consiglio su misura?" : "Need tailored advice?",
    adviceP: it ? (
      <>
        Se hai dubbi su requisiti o percorso, scrivi a{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        prima di pagare. Puoi anche inviare i documenti via email se preferisci.
      </>
    ) : (
      <>
        If you’re unsure about eligibility or which path to use, email{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        before paying. You can also submit documents by email if that’s easier.
      </>
    ),

    urgentH: it ? "Urgenza?" : "Urgent?",
    urgentP: it ? (
      <>
        Invia un’email a{" "}
        <a className="underline text-amber-300" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        con oggetto <strong>“Urgent”</strong>. Ti indicheremo il percorso corretto. (L’urgenza è valutata dal Consolato.)
      </>
    ) : (
      <>
        Email{" "}
        <a className="underline text-amber-300" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        with subject <strong>“Urgent”</strong>. We’ll advise the correct route. (Urgency is assessed by the Consulate.)
      </>
    ),
    moreLinksH: it ? "Altri servizi" : "More services",
    allServices: it ? "Tutti i servizi" : "All services",
    contact: it ? "Contatta Resinaro" : "Contact Resinaro",
  };
}

/* ================================ PAGE ================================= */
export default function PassportServicePage({
  params,
}: {
  params: { locale: "en" | "it" };
}) {
  const { locale } = params;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* ================================ HERO ================================ */}
      <section className="relative w-full pb-6 sm:pb-8 md:pb-10">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/service-passport.png"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Intro card — compact, centered */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{copy.h1}</h1>
            <p className="mt-3 text-green-800">{copy.introP1}</p>
            <a href="#book" className="mt-3 inline-block text-sm underline underline-offset-4 text-green-900">
              {locale === "it" ? "Clicca per vedere il modulo" : "Click to view the form"}
            </a>

            {/* Compact pricing tag row */}
            <div className="mt-5 flex flex-col sm:flex-row items-stretch justify-center gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:min-w-[320px] text-left">
                <h2 className="font-semibold text-center">{copy.pricingH}</h2>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1 space-y-1">
                  <li>{copy.pricingL1}</li>
                  <li>{copy.pricingL2}</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-2 text-center">{copy.pricingNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================ FORM =============================== */}
      <section id="book" className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <PassportForm />
        </div>
      </section>

      {/* ============================ RECENT RESULTS =========================
          Minimal slider with buttons (no anchors) — no page-jump, horizontal-only
      ===================================================================== */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          {locale === "it" ? "Prenotazioni recenti + liste d'attesa" : "Recent bookings + waiting lists"}
        </h2>
        {/* trust strip removed per request */}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" data-carousel>
          {/* Slider viewport */}
          <div className="relative mx-auto w-full max-w-[900px]">
            {/* Track */}
            <div
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
              id="proof-track"
              data-track
            >
              {/* Slide 1 – landscape */}
              <figure id="s1" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image
                    src="/proof/2026-02-manchester-appointment-01.webp"
                    alt="Booked appointment — Manchester — February 2026"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain"
                    priority={false}
                  />
                </div>

                {/* arrows */}
                <button
                  type="button"
                  data-prev
                  aria-label={locale === "it" ? "Precedente" : "Previous"}
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-next
                  aria-label={locale === "it" ? "Successiva" : "Next"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">
                  <span className="font-medium">Manchester</span> •{" "}
                  {locale === "it"
                    ? "Febbraio 2026 • Data e ora confermate (nascoste)"
                    : "February 2026 • Date & time confirmed (hidden)"}
                </figcaption>
              </figure>

              {/* Slide 2 – portrait */}
              <figure id="s2" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image
                    src="/proof/wl-2025-11-10-01.webp"
                    alt="Waiting list secured — Manchester — 10 Nov 2025"
                    width={1080}
                    height={1920}
                    className="w-full h-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  data-prev
                  aria-label={locale === "it" ? "Precedente" : "Previous"}
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-next
                  aria-label={locale === "it" ? "Successiva" : "Next"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">
                  <span className="font-medium">Manchester</span> • {locale === "it" ? "Lista d’attesa" : "Waiting list"}
                </figcaption>
              </figure>

              {/* Slide 3 – portrait */}
              <figure id="s3" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image
                    src="/proof/wl-2025-11-12-02.webp"
                    alt="Waiting list secured — Manchester — 12 Nov 2025"
                    width={1080}
                    height={1920}
                    className="w-full h-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  data-prev
                  aria-label={locale === "it" ? "Precedente" : "Previous"}
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-next
                  aria-label={locale === "it" ? "Successiva" : "Next"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">
                  <span className="font-medium">Manchester</span> • {locale === "it" ? "Lista d'attesa" : "Waiting list"}
                </figcaption>
              </figure>

              {/* Slide 4 */}
              <figure id="s4" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_1.webp" alt="Appointment confirmed — November 2025" width={1284} height={1336} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Confermato • Novembre 2025" : "Confirmed • November 2025"}</figcaption>
              </figure>

              {/* Slide 5 */}
              <figure id="s5" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_2.webp" alt="Waiting list confirmation — November 2025" width={1234} height={2290} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Lista d'attesa • Novembre 2025" : "Waiting list • November 2025"}</figcaption>
              </figure>

              {/* Slide 6 */}
              <figure id="s6" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_3.webp" alt="Appointment booking confirmed" width={1216} height={1968} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Prenotazione confermata" : "Booking confirmed"}</figcaption>
              </figure>

              {/* Slide 7 */}
              <figure id="s7" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_4.webp" alt="Recent successful booking" width={1134} height={598} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Prenotazione riuscita" : "Successful booking"}</figcaption>
              </figure>

              {/* Slide 8 */}
              <figure id="s8" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_5.webp" alt="Passport appointment secured" width={1242} height={1574} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Appuntamento assicurato" : "Appointment secured"}</figcaption>
              </figure>

              {/* Slide 9 */}
              <figure id="s9" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_6.webp" alt="Confirmed appointment details" width={1184} height={733} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Dettagli confermati" : "Details confirmed"}</figcaption>
              </figure>

              {/* Slide 10 */}
              <figure id="s10" className="relative snap-center shrink-0 w-full bg-neutral-100">
                <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
                  <Image src="/proof/proof_7.webp" alt="Latest booking confirmation" width={1284} height={904} className="w-full h-full object-contain" />
                </div>
                <button type="button" data-prev aria-label={locale === "it" ? "Precedente" : "Previous"} className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button type="button" data-next aria-label={locale === "it" ? "Successiva" : "Next"} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/95 border shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-600/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">{locale === "it" ? "Ultima conferma" : "Latest confirmation"}</figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* JS: attach controls after hydration via a tiny client component */}
        <CarouselBinder />
      </section>

      {/* ============================== INFO ================================ */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10 md:pb-16 grid gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-center">{copy.doH}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <h3 className="font-semibold">{copy.do12H}</h3>
              <p className="text-sm text-gray-700 mt-1">{copy.do12P}</p>
            </div>
            <div className="rounded-xl border p-4">
              <h3 className="font-semibold">{copy.doU12H}</h3>
              <p className="text-sm text-gray-700 mt-1">{copy.doU12P}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-center">{copy.docsH}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-sm">{copy.docs12H}</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                <li>{copy.docs12L1}</li>
                <li>{copy.docs12L2}</li>
                <li>{copy.docs12L3}</li>
              </ul>
              <p className="text-[12px] text-gray-600 mt-1">{copy.docs12Note}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{copy.docsU12H}</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                <li>{copy.docsU12L1}</li>
                <li>{copy.docsU12L2}</li>
                <li>{copy.docsU12L3}</li>
              </ul>
              <p className="text-[12px] text-gray-600 mt-1">{copy.docsU12Note}</p>
            </div>
          </div>
        </div>

        {/* IMPORTANT — final block */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 md:p-7 shadow-sm text-center">
          <h2 className="font-semibold">{copy.importantH}</h2>
          <p className="text-sm text-gray-800 mt-1">{copy.importantP1}</p>
          <p className="text-[12px] text-gray-700 mt-1">{copy.importantP2}</p>
        </div>

        {/* Helpful links */}
        <nav
          aria-label="Helpful links"
          className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm text-sm text-center"
        >
          <h4 className="font-semibold mb-2">{copy.moreLinksH}</h4>
          <ul className="inline-flex gap-6 justify-center">
            <li>
              <a className="underline" href={p("/services")}>
                {copy.allServices}
              </a>
            </li>
            <li>
              <a className="underline" href={p("/contact")}>
                {copy.contact}
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* ============================ STRUCTURED DATA ======================= */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectsJsonLd) }} />
    </main>
  );
}
