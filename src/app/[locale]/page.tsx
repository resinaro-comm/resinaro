"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HomeReviewsSection } from "@/components/HomeReviewsSection";

/* ---------- Constants ---------- */
const OG_IMAGE_URL =
  "https://www.resinaro.com/images/og/home-italian-passport-aire-help-1200x630.png";

/* ---------- Anim helpers ---------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});
const staggerChildren = { animate: { transition: { staggerChildren: 0.08 } } };
const blurIn = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(6px)", y: 12 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.55, delay },
  },
});

/* ---------- Types ---------- */
type Pillar = { title: string; desc: string; href?: string };
type Faq = { q: string; a: React.ReactNode };
type Service = {
  href: string;
  title: string;
  badge?: string;
  highlight?: boolean;
  line: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export default function Home() {
  const pathname = usePathname() || "/";
  const locale = (pathname.split("/")[1] === "it" ? "it" : "en") as "en" | "it";
  const p = (path: string) => `/${locale}${path}`;
  const isIt = locale === "it";

  const servicesTrackRef = useRef<HTMLDivElement | null>(null);
  const [whyOpen, setWhyOpen] = useState(false);

  const scrollServices = (direction: "left" | "right") => {
    const el = servicesTrackRef.current;
    if (!el) return;
    const amount = 360;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* ---------- Content (static arrays with locale toggles) ---------- */
  const pillars: Pillar[] = [
    {
      title: isIt ? "Selezioni locali" : "Local picks",
      desc: isIt
        ? "Guide a ristoranti e gastronomie curate da chi vive qui."
        : "Restaurant & deli guides curated by people who live here.",
      href: "/directory",
    },
    {
      title: isIt ? "Verificate a mano" : "Hand-checked",
      desc: isIt
        ? "Ogni guida è verificata e aggiornata con i consigli della comunità."
        : "Every guide is verified and updated with community tips.",
      href: "/community",
    },
    {
      title: isIt ? "Guidate dalla comunità" : "Community-guided",
      desc: isIt
        ? "Valorizziamo i posti e i passaggi che gli italiani usano davvero."
        : "We highlight places and steps Italians actually use.",
      href: "/about",
    },
  ];

  const services: Service[] = [
    {
      href: "/services/passport",
      badge: isIt ? "Passaporti" : "Passports",
      title: isIt
        ? "Appuntamenti passaporto (Prenot@Mi 12+)"
        : "Passport appointments (Prenot@Mi 12+)",
      line: isIt
        ? "Bloccato su Prenot@Mi? Prenotiamo noi."
        : "No passport slots? We click for you.",
      cta: isIt ? "Apri servizio passaporto →" : "Open passport service →",
      highlight: true,
      image: "/images/homepage/prenotami-passport-application.png",
      imageAlt: isIt
        ? "Passaporto italiano pronto per una pratica consolare"
        : "Italian passport ready for a consular application",
    },
    {
      href: "/services/visa",
      badge: isIt ? "Visti" : "Visas",
      title: isIt ? "Supporto visti e permessi" : "Visa and permit support",
      line: isIt
        ? "Paura di sbagliare visto? Controlliamo noi."
        : "Scared to apply? We check your visa.",
      cta: isIt ? "Controlla il mio visto →" : "Check my visa plan →",
      image: "/images/service-visa.png",
      imageAlt: isIt
        ? "Documenti per una domanda di visto"
        : "Documents for a visa application",
    },
    {
      href: "/services/aire",
      badge: "AIRE",
      title: isIt
        ? "Iscrizione e correzioni AIRE"
        : "AIRE registration & checks",
      line: isIt
        ? "Pratica AIRE ferma da mesi? Sistemiamo."
        : "AIRE file stuck for months? Fix it.",
      cta: isIt ? "Sistema la pratica AIRE →" : "Fix my AIRE file →",
      image: "/images/aire-registration.png",
      imageAlt: isIt
        ? "Documenti per iscrizione AIRE"
        : "Documents for AIRE registration",
    },
    {
      href: "/services/id-card",
      badge: isIt ? "Carta d’identità" : "ID card",
      title: isIt
        ? "Appuntamenti carta d’identità (CIE)"
        : "CIE / ID card appointments",
      line: isIt
        ? "Serve la CIE? Gli slot spariscono? Aiutiamo."
        : "Need CIE? Appointments disappear? We monitor.",
      cta: isIt ? "Apri servizio CIE →" : "Open CIE service →",
      image: "/images/passportreg.png",
      imageAlt: isIt
        ? "Carta d’identità elettronica italiana"
        : "Italian electronic ID card",
    },
    {
      href: "/services/translation",
      badge: isIt ? "Traduzioni" : "Translations",
      title: isIt
        ? "Traduzioni giurate / ufficiali"
        : "Certified / official translations",
      line: isIt
        ? "Documenti in inglese, consolato vuole italiano? Fatto."
        : "Docs in English, consulate wants Italian? Sorted.",
      cta: isIt ? "Prenota una traduzione →" : "Book a translation →",
      image: "/images/service-passport.png",
      imageAlt: isIt
        ? "Documento tradotto con timbro ufficiale"
        : "Translated document with official stamp",
    },
  ];

  const process = [
    {
      title: isIt ? "Ricerca" : "Research",
      desc: isIt
        ? "Mappiamo il problema (AIRE, CIE, registrazione dal GP, ecc.) e raccogliamo le regole aggiornate."
        : "We map the problem (AIRE, CIE, GP registration, etc.) and gather the latest rules.",
      meta: isIt
        ? "Fonti ufficiali + realtà sul campo"
        : "Official sources + real world",
    },
    {
      title: isIt ? "Verifica" : "Verify",
      desc: isIt
        ? "Testiamo i passaggi con utenti reali, poi facciamo un sanity-check con esperti locali quando possibile."
        : "We test steps with real users, then sanity-check with local experts where possible.",
      meta: isIt ? "Niente fuffa" : "No fluff",
    },
    {
      title: isIt ? "Scriviamo chiaro" : "Write clearly",
      desc: isIt
        ? "Guide pratiche e brevi in IT/EN, dritte a ciò che serve fare."
        : "Short, practical guides in EN/IT that cut straight to what you need to do.",
      meta: isIt ? "Linguaggio semplice" : "Plain-language",
    },
    {
      title: isIt ? "Aggiorniamo" : "Keep it fresh",
      desc: isIt
        ? "Aggiorniamo quando cambiano le regole e aggiungiamo note della comunità nel tempo."
        : "We update when rules change and add community notes over time.",
      meta: isIt ? "Aggiornato regolarmente" : "Updated regularly",
    },
  ];

  const blog = [
    {
      title: isIt
        ? "Come richiedere il Passaporto italiano"
        : "How to apply for your Italian Passport",
      desc: isIt
        ? "Documenti, minori, costi e consigli per prenotare nel Regno Unito."
        : "Docs, minor applications, fees and booking tips in the UK.",
      link: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
      img: "/images/italian-passport-uk-hero-3840x1280.png",
      alt: isIt
        ? "Passaporto italiano e documenti su una scrivania"
        : "Italian passport and documents on a desk",
      delay: 0.1,
    },
    {
      title: isIt ? "NHS: le basi per chi arriva" : "NHS Basics for newcomers",
      desc: isIt
        ? "Registrarsi dal GP, interpreti, urgenze, ricette e GHIC."
        : "Register with a GP, interpreters, urgent care, prescriptions and GHIC.",
      link: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025",
      img: "/images/nhs-healthcare-italians-uk-hero-3840x1280.png",
      alt: "NHS healthcare hero",
      delay: 0.2,
    },
    {
      title: isIt ? "Cos’è l’AIRE e come registrarsi" : "What is AIRE and how to register",
      desc: isIt
        ? "FAST IT, prove richieste, errori comuni, tempistiche e consigli pratici."
        : "FAST IT, proofs, common errors, timelines and local tips.",
      link: "/community/bureaucracy-guides/aire-registration-uk",
      img: "/images/aire-registration.png",
      alt: isIt
        ? "Documenti per registrazione AIRE"
        : "AIRE registration documents",
      delay: 0.3,
    },
  ];

  const blogMeta = [
    isIt ? "Guida più letta · passaporto" : "Most used guide · passports",
    isIt ? "Guida pratica · 5 minuti" : "Practical guide · 5 min read",
    isIt ? "Guida pratica · 6 minuti" : "Practical guide · 6 min read",
  ];

  const faqs: Faq[] = [
    {
      q: isIt ? "Resinaro è solo per italiani?" : "Is Resinaro only for Italians?",
      a: isIt ? (
        <>
          No. Aiutiamo italiani e <em>tutte le persone che vivono all’estero</em>{" "}
          nel Regno Unito. Molte guide sono bilingui (IT/EN).
        </>
      ) : (
        <>
          No. We support Italians and{" "}
          <em>anyone living in the UK with Italian paperwork</em>. Many guides
          are bilingual (EN/IT).
        </>
      ),
    },
    {
      q: isIt ? "Le guide sono gratuite?" : "Are your guides free?",
      a: isIt ? (
        <>
          Sì. Tutte le guide della community sono gratuite. Sostienici
          condividendole o consigliando ottimi posti locali.
        </>
      ) : (
        <>
          Yes. All community guides are free. Support us by sharing them or
          recommending great local places.
        </>
      ),
    },
    {
      q: isIt ? "Ogni quanto aggiornate i contenuti?" : "How often do you update content?",
      a: isIt ? (
        <>
          Rivediamo regolarmente le guide più lette e aggiorniamo quando
          cambiano le regole. Le selezioni si aggiornano con input della
          community.
        </>
      ) : (
        <>
          We review popular guides regularly and update when rules change.
          Directory picks refresh with community input.
        </>
      ),
    },
    {
      q: isIt ? "Come posso contribuire?" : "How can I contribute?",
      a: (
        <>
          {isIt ? "Condividi consigli o suggerisci modifiche via " : "Share tips or suggest edits via "}
          <Link href={p("/contact")} className="underline text-green-900">
            {isIt ? "Contatti" : "Contact"}
          </Link>
          .{" "}
          {isIt
            ? "Puoi anche suggerire posti da inserire nella "
            : "You can also recommend places to feature in the "}
          <Link href={p("/directory")} className="underline text-green-900">
            {isIt ? "Directory" : "Directory"}
          </Link>
          .
        </>
      ),
    },
  ];

  const aboutCards: [string, string][] = [
    [
      isIt ? "Guide bilingui" : "Bilingual guides",
      isIt
        ? "Passi chiari in IT/EN per le pratiche che contano."
        : "Clear steps in EN/IT for life admin that matters.",
    ],
    [
      isIt ? "Selezioni per città" : "City picks",
      isIt
        ? "Ristoranti, gastronomie e negozi amati dagli italiani."
        : "Restaurants, delis and shops Italians love.",
    ],
    [
      isIt ? "Consigli della comunità" : "Community tips",
      isIt
        ? "Aggiungiamo note dei lettori per tenerle pratiche."
        : "We add notes from readers to keep things practical.",
    ],
    [
      isIt ? "No spam, no drama" : "No spam, no drama",
      isIt
        ? "Tono sicuro per i brand, sempre rispettoso."
        : "Brand-safe, human tone — always respectful.",
    ],
  ];

  /* ---------- JSON-LD ---------- */
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Resinaro",
        url: "https://www.resinaro.com",
        logo: "https://www.resinaro.com/icon.svg",
        image: OG_IMAGE_URL,
        description: isIt
          ? "Supporto pratico per passaporti, AIRE e pratiche consolari dal Regno Unito, in italiano e inglese."
          : "Practical help with Italian passports, AIRE and consular admin from the UK, in Italian and English.",
        areaServed: "GB",
        sameAs: [
          "https://www.youtube.com/@resinaroUK",
          "https://www.instagram.com/resinaro",
          "https://x.com/resinaro",
          "https://facebook.com/resinaro",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "resinaro@proton.me",
          contactType: "customer support",
          availableLanguage: ["it", "en"],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.resinaro.com",
        name: "Resinaro",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.resinaro.com/community?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
    [isIt]
  );

  const heroPill = isIt
    ? "Piattaforma pratica per italiani nel Regno Unito"
    : "Practical platform for Italians in the UK";

  const heroTitle = isIt
    ? "La guida di riferimento per italiani nel Regno Unito"
    : "The go-to guide & community for Italians in the UK";

  const heroSub = isIt
    ? "Da AIRE e passaporto a NHS e casa — passi chiari e tranquilli, in italiano e inglese."
    : "From AIRE and passports to NHS and housing — calm, step-by-step help in Italian and English.";

  const heroReassure = isIt
    ? "Guide gratuite, senza pubblicità invadente. E umani veri se ti blocchi."
    : "Free guides, no noisy ads. And real humans if you get stuck.";

  const aboutIcons = ["📘", "📍", "💬", "🕊️"];

  return (
    <main className="bg-[#F9F6F1] text-gray-800 [--brand:#0B5D3B]">
      {/* Global structured data (Org + WebSite) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -------------------- HERO -------------------- */}
      <motion.section
        aria-label={isIt ? "Benvenuto su Resinaro" : "Welcome to Resinaro"}
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
      >
        <div className="relative h-[76vh] md:h-[78vh] lg:h-[80vh] w-full">
          {/* RESTORED ORIGINAL HERO IMAGE */}
          <Image
            src="/images/landscape-image.png"
            alt={
              isIt
                ? "Skyline combinato Italia-Regno Unito"
                : "Italy and UK combined skyline"
            }
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 pointer-events-none">
            {/* Warmer, softer overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020c08]/80 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(65%_50%_at_50%_35%,rgba(5,54,31,0.55),transparent)]" />
          </div>
          {/* Soft blend into page background */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 pointer-events-none">
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F6F1]/75 to-[#F9F6F1]" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative max-w-3xl text-center">
            <div className="mx-auto max-w-3xl rounded-3xl bg-black/22 backdrop-blur-sm px-6 py-6 sm:px-9 sm:py-7 shadow-[0_18px_50px_rgba(0,0,0,.45)]">
              <motion.div
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-50"
                {...fadeUp(0.02)}
              >
                {heroPill}
              </motion.div>

              <motion.h1
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_10px_28px_rgba(0,0,0,.55),0_2px_8px_rgba(0,0,0,.45)]"
                {...fadeUp(0.08)}
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                className="mt-3 text-sm md:text-lg/relaxed mx-auto max-w-2xl text-white/95"
                {...fadeUp(0.16)}
              >
                {heroSub}
              </motion.p>
            </div>

            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
              {...fadeUp(0.26)}
            >
              <Link
                href={p("/community")}
                className="inline-flex whitespace-nowrap rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-800/50 transition hover:bg-emerald-700"
              >
                {isIt ? "Inizia da una guida" : "Start with a guide"}
              </Link>
              <Link
                href={p("/directory")}
                className="inline-flex whitespace-nowrap rounded-xl border border-white/80 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/90 hover:text-emerald-900"
              >
                {isIt
                  ? "Scopri i posti italiani per città"
                  : "Browse Italian places by city"}
              </Link>
            </motion.div>

            <motion.p
              className="mt-4 text-xs md:text-sm text-white/80"
              {...fadeUp(0.36)}
            >
              {heroReassure}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* -------------------- SERVICES CAROUSEL -------------------- */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-extrabold text-green-900 text-center"
              {...fadeUp(0)}
            >
              {isIt
                ? "Servizi con cui ti aiutiamo"
                : "Services we can help you with"}
            </motion.h2>
            <motion.p
              className="mt-2 text-gray-700 text-center max-w-2xl mx-auto"
              {...fadeUp(0.12)}
            >
              {isIt
                ? "Scorri verso destra per vedere i servizi principali. Tocca una scheda per aprire la pagina completa del servizio."
                : "Slide sideways to see the main services. Tap a card to open the full service page."}
            </motion.p>

            <div className="mt-7 relative">
              <div
                ref={servicesTrackRef}
                className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-1"
                aria-label={isIt ? "Servizi Resinaro" : "Resinaro services"}
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={`${service.href}-${service.title}`}
                    className="snap-center shrink-0"
                    whileInView="animate"
                    viewport={{ once: true }}
                    {...blurIn(0.06 * idx)}
                  >
                    <Link
                      href={p(service.href)}
                      className={`flex h-full w-[88vw] sm:w-[360px] md:w-[280px] lg:w-[340px] flex-col rounded-2xl border shadow-[0_10px_26px_rgba(15,68,41,0.10)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,68,41,0.16)] ${
                        service.highlight
                          ? "border-emerald-500/70 bg-emerald-50/90"
                          : "border-emerald-100 bg-white"
                      }`}
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 360px, 340px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        {service.badge && (
                          <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                        <h3 className="text-sm sm:text-base font-semibold text-emerald-950">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-800">
                          {service.line}
                        </p>
                        <span className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-800">
                          {service.cta}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Scroll controls (desktop) */}
              <button
                type="button"
                onClick={() => scrollServices("left")}
                className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full border border-emerald-100 bg-white shadow-md hover:bg-emerald-50"
                aria-label={
                  isIt ? "Scorri i servizi a sinistra" : "Scroll services left"
                }
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                onClick={() => scrollServices("right")}
                className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full border border-emerald-100 bg-white shadow-md hover:bg-emerald-50"
                aria-label={
                  isIt ? "Scorri i servizi a destra" : "Scroll services right"
                }
              >
                <span aria-hidden>›</span>
              </button>
            </div>

            <motion.div
              className="mt-6 flex flex-col items-center gap-2"
              {...fadeUp(0.18)}
            >
              <Link
                href={p("/services")}
                className="inline-flex items-center gap-2 rounded-full border border-green-900 px-5 py-2.5 text-sm font-semibold text-green-900 transition hover:bg-green-900 hover:text-white"
              >
                {isIt ? "Vedi tutti i servizi" : "View all services"}
                <span aria-hidden>→</span>
              </Link>

              <button
                type="button"
                onClick={() => setWhyOpen(true)}
                className="text-[11px] sm:text-xs font-medium text-emerald-900 underline underline-offset-2"
              >
                {isIt
                  ? "Perché Resinaro invece di altri servizi?"
                  : "Why Resinaro instead of other services?"}
              </button>
            </motion.div>

            <p className="mt-2 text-center text-[11px] text-gray-500">
              {isIt
                ? "Suggerimento: su telefono puoi scorrere le schede con il dito da destra a sinistra."
                : "Tip: on your phone you can swipe the cards sideways with your finger."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------------------- REVIEWS SECTION (NEW) -------------------- */}
      <HomeReviewsSection />

      {/* -------------------- BLOG FIRST -------------------- */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F9F6F1] via-[#FFFDF7] to-[#F3EFE6]"
          aria-hidden="true"
        />
        <motion.div
          className="py-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-extrabold text-green-900 text-center"
              {...fadeUp(0)}
            >
              {isIt ? "Dalla Comunità" : "From the Community"}
            </motion.h2>
            <motion.p
              className="mt-2 text-gray-700 text-center max-w-2xl mx-auto"
              {...fadeUp(0.15)}
            >
              {isIt
                ? "Contenuti pratici e gratuiti, scritti da italiani nel Regno Unito e verificati dal team Resinaro."
                : "Practical, free guides written by Italians in the UK and double-checked by the Resinaro team."}
            </motion.p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 lg:gap-7">
              {blog.map((b, idx) => (
                <motion.article
                  key={b.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-50 bg-white/95 shadow-[0_14px_34px_rgba(15,68,41,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,68,41,0.18)]"
                  {...blurIn(b.delay ?? 0)}
                >
                  <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                    <Image
                      src={b.img}
                      alt={b.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-emerald-900 shadow-sm">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                      {blogMeta[idx]}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700">
                      {isIt ? "Guida della community" : "Community guide"}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-emerald-950">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-800">{b.desc}</p>
                    <div className="mt-4">
                      <Link
                        href={p(b.link)}
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-700 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
                      >
                        {isIt ? "Apri la guida" : "Open the guide"}{" "}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href={p("/community")}
                className="inline-flex items-center gap-2 rounded-full border border-green-900 px-5 py-2.5 text-sm font-semibold text-green-900 transition hover:bg-green-900 hover:text-white"
              >
                {isIt
                  ? "Sfoglia tutte le guide della community"
                  : "Browse all community guides"}{" "}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------------------- ABOUT / VALUE PROPS -------------------- */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-b from-[#F8F3E9] via-[#FFFDF7] to-[#F9F6F1]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(0,0,0,0.06),transparent)]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-900">
              {isIt ? "Su Resinaro" : "About Resinaro"}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-green-900">
              {isIt
                ? "Comunità prima. Chiarezza sempre."
                : "Community first. Clarity always."}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-800">
              {isIt
                ? "Resinaro è nato come progetto volontario per rendere la vita nel Regno Unito meno confusa per gli italiani. Oggi pubblichiamo guide verificate e selezioni locali, basate su esperienze reali e feedback."
                : "Resinaro started as a volunteer effort to make life in the UK less confusing for Italians. Today, we publish hand-checked guides and local picks, shaped by real experiences and feedback."}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutCards.map(([t1, d1], i) => (
              <motion.div
                key={`${t1}-${i}`}
                className="rounded-2xl border border-emerald-50 bg-white/95 p-4 shadow-[0_10px_26px_rgba(15,68,41,0.10)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,68,41,0.16)]"
                {...blurIn(0.04 * i)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-lg">
                    <span aria-hidden>{aboutIcons[i]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">{t1}</div>
                    <div className="mt-1 text-sm text-gray-700">{d1}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600">
            <span>
              {isIt
                ? "Scritto da italiani che vivono nel Regno Unito."
                : "Written by Italians living in the UK."}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              {isIt
                ? "Aggiornato con feedback reale della community."
                : "Updated regularly with real community feedback."}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={p("/about")}
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              {isIt ? "Scopri di più" : "Learn more"}
            </Link>
              <Link
              href={p("/contact")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-green-900 px-6 text-sm font-medium text-green-900 hover:bg-emerald-50"
            >
              {isIt ? "Scrivici" : "Say hello"}
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- HOW WE WORK -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-extrabold text-green-900 text-center"
            {...fadeUp(0)}
          >
            {isIt ? "Come lavora Resinaro" : "How Resinaro works"}
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-700 text-center max-w-2xl mx-auto"
            {...fadeUp(0.15)}
          >
            {isIt
              ? "Contenuti affidabili — ricercati, testati e scritti in linguaggio semplice."
              : "Content you can rely on — researched, tested and written in plain language."}
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((s, i) => (
              <motion.div
                key={s.title}
                className="relative rounded-2xl bg-white border border-gray-200 shadow-sm p-6"
                {...blurIn(0.05 * i)}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold shadow">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-center font-semibold text-green-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 text-center">
                  {s.desc}
                </p>
                {s.meta && (
                  <div className="mt-3 text-center text-xs text-gray-500">
                    {s.meta}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- FAQ -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-green-900 text-center">
            {isIt ? "Domande frequenti" : "Questions, answered"}
          </h2>
          <p className="mt-2 text-gray-700 text-center max-w-3xl mx-auto">
            {isIt ? (
              <>
                Risposte rapide alle domande più comuni. Per tutto il resto,{" "}
                <Link href={p("/contact")} className="underline text-green-900">
                  contattaci
                </Link>
                .
              </>
            ) : (
              <>
                Short answers to common questions. For anything else,{" "}
                <Link href={p("/contact")} className="underline text-green-900">
                  contact us
                </Link>
                .
              </>
            )}
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {faqs.map((f, i) => (
                <li
                  key={`${f.q}-${i}`}
                  className="rounded-2xl bg-white border p-5 shadow-sm"
                >
                  <details className="group">
                    <summary className="marker-none list-none cursor-pointer font-semibold text-green-900 flex items-center justify-between">
                      <span>{f.q}</span>
                      <span
                        className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm group-open:rotate-45 transition"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-2 text-sm text-gray-700">
                      {typeof f.a === "string" ? <>{f.a}</> : f.a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------- WHY RESINARO MODAL -------------------- */}
      {whyOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4">
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl rounded-2xl bg-white p-5 sm:p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setWhyOpen(false)}
              className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-600 hover:bg-gray-50"
              aria-label={isIt ? "Chiudi" : "Close"}
            >
              ✕
            </button>

            <h3 className="pr-7 text-lg font-semibold text-emerald-950">
              {isIt ? "Perché scegliere Resinaro" : "Why choose Resinaro"}
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              {isIt
                ? "Vogliamo che tu capisca esattamente cosa fai, quanto paghi e cosa possiamo (e non possiamo) controllare."
                : "We want you to know exactly what you’re doing, what you’re paying, and what we can (and can’t) control."}
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 text-xs sm:text-sm">
              <div className="grid grid-cols-2 bg-gray-50">
                <div className="bg-emerald-50 px-3 py-2 font-semibold text-emerald-900">
                  Resinaro
                </div>
                <div className="px-3 py-2 font-semibold text-gray-800">
                  {isIt
                    ? "Da solo / altri servizi"
                    : "On your own / other services"}
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-2">
                  <div className="bg-emerald-50/60 px-3 py-2">
                    {isIt
                      ? "Prezzi chiari su ogni pagina servizio."
                      : "Clear pricing on every service page."}
                  </div>
                  <div className="px-3 py-2">
                    {isIt
                      ? "Costi poco chiari o solo a preventivo."
                      : "Fees hard to find or only on quote."}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-emerald-50/60 px-3 py-2">
                    {isIt
                      ? "Screenshot reali di appuntamenti, dati oscurati."
                      : "Real booking screenshots, client details blurred."}
                  </div>
                  <div className="px-3 py-2">
                    {isIt
                      ? "Poca o nessuna prova di casi recenti."
                      : "Little or no proof of recent cases."}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-emerald-50/60 px-3 py-2">
                    {isIt
                      ? "Supporto in italiano e inglese via email/WhatsApp."
                      : "Support in Italian & English via email/WhatsApp."}
                  </div>
                  <div className="px-3 py-2">
                    {isIt
                      ? "Call center generici o una sola lingua."
                      : "Generic call centres or one language only."}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-emerald-50/60 px-3 py-2">
                    {isIt
                      ? "Onesti sui limiti: il Consolato decide sempre."
                      : "Honest about limits: the Consulate always decides."}
                  </div>
                  <div className="px-3 py-2">
                    {isIt
                      ? "Promesse che suonano come garanzie assolute."
                      : "Promises that sound like guarantees."}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-emerald-50/60 px-3 py-2">
                    {isIt
                      ? "Guide gratuite che puoi seguire anche senza pagare."
                      : "Free guides you can follow even without paying us."}
                  </div>
                  <div className="px-3 py-2">
                    {isIt
                      ? "Poca chiarezza scritta, solo servizi a pagamento."
                      : "Little written guidance, pay-first approach."}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-gray-500">
              {isIt ? (
                <>
                  Nessun servizio può garantire slot o passaporti: le decisioni
                  restano sempre al Consolato. Noi possiamo solo applicare le
                  regole correttamente, monitorare e spiegarti i passaggi con
                  trasparenza.
                </>
              ) : (
                <>
                  No service can ever guarantee slots or passports: decisions
                  always belong to the Consulate. We can only apply the rules
                  correctly, monitor carefully and explain the steps
                  transparently.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
