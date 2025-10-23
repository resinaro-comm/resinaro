"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import { usePathname } from "next/navigation";

/* ---------- Anim helpers ---------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});
const staggerChildren = { animate: { transition: { staggerChildren: 0.08 } } };
const blurIn = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(6px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.55, delay } },
});

/* ---------- Types ---------- */
type Testimonial = { name: string; quote: string; meta?: string; avatar?: string };
type Pillar = { title: string; desc: string; href?: string };
type Faq = { q: string; a: React.ReactNode };

export default function Home() {
  const pathname = usePathname() || "/";
  const locale = (pathname.split("/")[1] === "it" ? "it" : "en") as "en" | "it";
  const p = (path: string) => `/${locale}${path}`; // locale prefix helper
  const isIt = locale === "it";

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

  const process = [
    {
      title: isIt ? "Ricerca" : "Research",
      desc: isIt
        ? "Mappiamo il problema (AIRE, CIE, registrazione dal GP, ecc.) e raccogliamo le regole aggiornate."
        : "We map the problem (AIRE, CIE, GP registration, etc.) and gather the latest rules.",
      meta: isIt ? "Fonti ufficiali + realtà sul campo" : "Official sources + real world",
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

  const testimonials: Testimonial[] = [
    {
      name: "Giulia R.",
      quote: isIt
        ? "Ho trovato tutto per passaporto + AIRE in un unico posto. Passi chiari, niente fronzoli. Grazie!"
        : "Found everything I needed for my passport + AIRE in one place. Clear steps, no waffle. Grazie!",
      meta: isIt ? "Lettrice guide, Londra" : "Community guide reader, London",
      
    },
    {
      name: "Marco B.",
      quote: isIt
        ? "Le scelte su Manchester erano perfette. Posti che consiglierei davvero agli amici in visita."
        : "The Manchester picks were spot on. Places I’d actually recommend to friends visiting.",
      meta: isIt ? "Lettore directory, Manchester" : "Directory reader, Manchester",
      
    },
    {
      name: "Elena S.",
      quote: isIt
        ? "Mi piace che le guide spieghino i prossimi passi, non solo i link. Mi ha risparmiato un weekend."
        : "I like that guides explain what to do next, not just link to forms. Saved me a weekend.",
      meta: isIt ? "Lettrice, guida AIRE" : "Reader, AIRE guide",
      
    },
  ];

  const blog = [
    {
      title: isIt ? "Come richiedere il Passaporto italiano" : "How to apply for your Italian Passport",
      desc: isIt
        ? "Documenti, minori, costi e consigli per prenotare nel Regno Unito."
        : "Docs, minor applications, fees and booking tips in the UK.",
      link: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
      img: "/images/italian-passport-uk-hero-3840x1280.png",
      alt: isIt ? "Passaporto italiano e documenti su una scrivania" : "Italian passport and documents on a desk",
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
      alt: isIt ? "Documenti per registrazione AIRE" : "AIRE registration documents",
      delay: 0.3,
    },
  ];

  const faqs: Faq[] = [
    {
      q: isIt ? "Resinaro è solo per italiani?" : "Is Resinaro only for Italians?",
      a: isIt ? (
        <>No. Aiutiamo italiani e <em>tutte le persone migranti</em> nel Regno Unito. Molte guide sono bilingui (IT/EN).</>
      ) : (
        <>No. We support Italians and <em>all migrants</em> living in the UK. Many guides are bilingual (EN/IT).</>
      ),
    },
    {
      q: isIt ? "Le guide sono gratuite?" : "Are your guides free?",
      a: isIt ? (
        <>Sì. Tutte le guide della community sono gratuite. Sostienici condividendole o consigliando ottimi posti locali.</>
      ) : (
        <>Yes. All community guides are free. Support us by sharing them or recommending great local places.</>
      ),
    },
    {
      q: isIt ? "Ogni quanto aggiornate i contenuti?" : "How often do you update content?",
      a: isIt ? (
        <>Rivediamo regolarmente le guide più lette e aggiorniamo quando cambiano le regole. Le selezioni si aggiornano con input della community.</>
      ) : (
        <>We review popular guides regularly and update when rules change. Directory picks refresh with community input.</>
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
          {isIt ? "Puoi anche suggerire posti da inserire nella " : "You can also recommend places to feature in the "}
          <Link href={p("/directory")} className="underline text-green-900">
            {isIt ? "Directory" : "Directory"}
          </Link>
          .
        </>
      ),
    },
  ];

  const aboutCards: [string, string][] = [
    [isIt ? "Guide bilingui" : "Bilingual guides", isIt ? "Passi chiari in IT/EN per le pratiche che contano." : "Clear steps in EN/IT for life admin that matters."],
    [isIt ? "Selezioni per città" : "City picks", isIt ? "Ristoranti, gastronomie e negozi amati dagli italiani." : "Restaurants, delis and shops Italians love."],
    [isIt ? "Consigli della comunità" : "Community tips", isIt ? "Aggiungiamo note dei lettori per tenerle pratiche." : "We add notes from readers to keep things practical."],
    [isIt ? "No spam, no drama" : "No spam, no drama", isIt ? "Tono sicuro per i brand, sempre rispettoso." : "Brand-safe, human tone — always respectful."],
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  /* ---------- JSON-LD ---------- */
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Resinaro",
        url: "https://www.resinaro.com",
        logo: "https://www.resinaro.com/icon.svg",
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
    []
  );

  return (
    <main className="bg-[#F9F6F1] text-gray-800 [--brand:#0B5D3B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -------------------- HERO -------------------- */}
      <motion.section aria-label="Welcome" className="relative overflow-hidden" initial="initial" animate="animate">
        <div className="relative h-[68vh] md:h-[72vh] lg:h-[78vh] w-full">
          <Image
            src="/images/landscape-image.png"
            alt={isIt ? "Skyline combinato Italia-Regno Unito" : "Italy and UK combined skyline"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_40%,rgba(0,0,0,0.38),transparent)]" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative max-w-4xl text-center">
            <div className="mx-auto max-w-4xl rounded-3xl bg-black/25 backdrop-blur-sm px-6 py-5 sm:px-8 sm:py-6 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_10px_28px_rgba(0,0,0,.55),0_2px_8px_rgba(0,0,0,.45)]"
                {...fadeUp(0.05)}
              >
                {isIt ? "Guide & community per italiani nel Regno Unito" : "Guides & community for Italians in the UK"}
              </motion.h1>

              <motion.p className="mt-3 text-base md:text-xl/relaxed mx-auto max-w-3xl text-white/95" {...fadeUp(0.2)}>
                {isIt
                  ? "Consigli pratici e verificati, e selezioni per città — da chi l’ha già fatto."
                  : "Practical, hand-checked advice and city picks — by people who’ve done it before."}
              </motion.p>
            </div>

            <motion.div className="mt-6" {...fadeUp(0.35)}>
              <Typewriter
                texts={[
                  isIt ? "Passi chiari per AIRE, CIE e passaporto" : "Clear steps for AIRE, CIE & passports",
                  isIt ? "NHS, casa e basi per vivere nel Regno Unito" : "NHS, housing & life-in-the-UK basics",
                  isIt ? "I migliori posti italiani per città" : "Best Italian spots by city",
                  isIt ? "Aggiornato con i consigli della comunità" : "Updated with community tips",
                ]}
                typingSpeed={34}
                deletingSpeed={20}
                pause={1400}
                loop
                className="text-2xl md:text-3xl font-semibold text-white"
                cursorClassName="ml-2"
                ariaLive="polite"
              />
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" {...fadeUp(0.45)}>
              <Link
                href={p("/community")}
                className="inline-flex whitespace-nowrap rounded-lg bg-emerald-600 text-white font-semibold px-5 py-3 hover:bg-emerald-700 transition shadow"
              >
                {isIt ? "Esplora la Community" : "Explore the Community"}
              </Link>
              <Link
                href={p("/directory")}
                className="inline-flex whitespace-nowrap rounded-lg bg-white/90 text-green-900 font-semibold px-5 py-3 hover:bg-white transition shadow"
              >
                {isIt ? "Sfoglia la Directory" : "Browse the Directory"}
              </Link>
              <Link
                href={p("/about")}
                className="inline-flex whitespace-nowrap rounded-lg bg-white/10 text-white backdrop-blur px-5 py-3 hover:bg-white/20 transition"
              >
                {isIt ? "Su Resinaro" : "About Resinaro"}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* -------------------- PILLARS -------------------- */}
      <section className="relative">
        <div className="container mx-auto px-6 -mt-8 md:-mt-10">
          <motion.ul
            role="list"
            className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-5 text-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pillars.map((f, i) => (
              <motion.li
                key={f.title}
                className="rounded-xl bg-white/90 backdrop-blur border border-gray-200 shadow-sm p-5"
                {...blurIn(0.05 * i)}
              >
                <h3 className="font-semibold text-green-900 text-base">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{f.desc}</p>
                {f.href && (
                  <Link href={p(f.href)} className="mt-2 inline-flex items-center gap-1 text-green-900 underline underline-offset-4">
                    {isIt ? "Scopri di più" : "Learn more"} <span aria-hidden>→</span>
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* -------------------- BLOG FIRST -------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/70 pointer-events-none -z-10" aria-hidden="true" />
        <motion.div className="py-16" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container mx-auto px-6 text-center">
            <motion.h2 className="text-3xl font-extrabold text-green-900" {...fadeUp(0)}>
              {isIt ? "Dalla Comunità" : "From the Community"}
            </motion.h2>
            <motion.p className="mt-2 text-gray-700" {...fadeUp(0.15)}>
              {isIt
                ? "Contenuti pratici e gratuiti. Senza fronzoli: solo ciò che serve per andare avanti."
                : "Fresh, practical and free. No fluff—just what you need to move forward."}
            </motion.p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {blog.map((b) => (
                <motion.article
                  key={b.title}
                  className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white text-left overflow-hidden flex flex-col"
                  {...blurIn(b.delay ?? 0)}
                >
                  <div className="w-full aspect-[3/1] relative">
                    <Image src={b.img} alt={b.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-green-900">{b.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                    <Link href={p(b.link)} className="inline-flex items-center gap-1 text-green-900 underline mt-2 hover:decoration-4">
                      {isIt ? "Leggi di più" : "Read more"} <span aria-hidden>→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href={p("/community")}
                className="inline-flex items-center gap-2 rounded-lg border border-green-900 text-green-900 px-5 py-2 hover:bg-green-900 hover:text-white transition"
              >
                {isIt ? "Sfoglia tutte le guide" : "Browse all guides"} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------------------- ABOUT -------------------- */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10">
          <div className="grid h-full w-full grid-cols-3">
            <div className="bg-[#0B5D3B]/15" />
            <div className="bg-white/70" />
            <div className="bg-[#B22222]/15" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_0%,rgba(0,0,0,0.08),transparent)]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs text-emerald-900">
              {isIt ? "Su Resinaro" : "About Resinaro"}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-green-900">
              {isIt ? "Comunità prima. Chiarezza sempre." : "Community first. Clarity always."}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-800">
              {isIt
                ? "Resinaro è nato come progetto volontario per rendere la vita nel Regno Unito meno confusa per gli italiani. Oggi pubblichiamo guide verificate e selezioni locali, basate su esperienze reali e feedback."
                : "Resinaro started as a volunteer effort to make life in the UK less confusing for Italians. Today, we publish hand-checked guides and local picks, shaped by real experiences and feedback."}
            </p>

            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {aboutCards.map(([t1, d1], i) => (
                <motion.div key={`${t1}-${i}`} className="rounded-2xl border bg-white/90 p-4 shadow-sm backdrop-blur" {...blurIn(0.04 * i)}>
                  <div className="font-semibold text-green-900">{t1}</div>
                  <div className="mt-1 text-sm text-gray-700">{d1}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={p("/about")} className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700">
                {isIt ? "Scopri di più" : "Learn more"}
              </Link>
              <Link href={p("/contact")} className="inline-flex h-11 items-center justify-center rounded-xl border border-green-900 px-5 font-medium text-green-900 hover:bg-emerald-50">
                {isIt ? "Scrivici" : "Say hello"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- HOW WE WORK -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-extrabold text-green-900 text-center" {...fadeUp(0)}>
            {isIt ? "Come lavora Resinaro" : "How Resinaro works"}
          </motion.h2>
          <motion.p className="mt-2 text-gray-700 text-center max-w-2xl mx-auto" {...fadeUp(0.15)}>
            {isIt
              ? "Contenuti affidabili — ricercati, testati e scritti in linguaggio semplice."
              : "Content you can rely on — researched, tested and written in plain language."}
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((s, i) => (
              <motion.div key={s.title} className="relative rounded-2xl bg-white border border-gray-200 shadow-sm p-6" {...blurIn(0.05 * i)}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold shadow">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-center font-semibold text-green-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-700 text-center">{s.desc}</p>
                {s.meta && <div className="mt-3 text-center text-xs text-gray-500">{s.meta}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- TESTIMONIALS -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-extrabold text-green-900 text-center" {...fadeUp(0)}>
            {isIt ? "Cosa dicono i lettori" : "What readers say"}
          </motion.h2>
          <motion.p className="mt-2 text-gray-700 text-center max-w-2xl mx-auto" {...fadeUp(0.15)}>
            {isIt
              ? "Note brevi e sincere da chi ha usato le nostre guide e selezioni."
              : "Short and honest notes from people who used our guides and picks."}
          </motion.p>

          <div className="mt-8 relative mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-lg text-gray-800 text-center">&ldquo;{testimonials[index].quote}&rdquo;</p>
                  <footer className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-600">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-emerald-100">
                      <Image
                        src={testimonials[index].avatar || "/images/resinaro-general.png"}
                        alt={testimonials[index].name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-center">{testimonials[index].name}</div>
                      {testimonials[index].meta && <div className="text-xs text-center">{testimonials[index].meta}</div>}
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button aria-label={isIt ? "Testimonianza precedente" : "Previous testimonial"} onClick={prev} className="rounded-full border bg-white px-3 py-2 text-sm hover:bg-gray-50">←</button>
              <div className="text-xs text-gray-600">{index + 1} / {testimonials.length}</div>
              <button aria-label={isIt ? "Testimonianza successiva" : "Next testimonial"} onClick={next} className="rounded-full border bg-white px-3 py-2 text-sm hover:bg-gray-50">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRUST BAND -------------------- */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero/uk-italy-composite.png" alt="" fill className="object-cover opacity-40" sizes="100vw" aria-hidden />
          <div className="absolute inset-0 mix-blend-multiply pointer-events-none" aria-hidden>
            <div className="absolute inset-0 grid grid-cols-3">
              <div className="bg-[#0B5D3B]/15" />
              <div className="bg-white/15" />
              <div className="bg-[#B22222]/15" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-green-900">
            {isIt ? "Apprezzato dai lettori della comunità" : "Trusted by community readers"}
          </h2>
          <p className="text-gray-700 mt-2">
            {isIt ? "Lavoriamo insieme a gruppi locali e istituzioni." : "We work alongside local groups and institutions."}
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            <a href="https://amblondra.esteri.it/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image src="/Emblem_of_Italy.svg.png" alt="Italian Embassy - Emblem of Italy" width={80} height={80} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </a>
            <a href="https://www.nhs.uk/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image src="/nhs-logo.svg" alt="NHS logo" width={80} height={80} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </a>
            <a href={p("/community")} className="flex flex-col items-center">
              <Image src="/handshake-solid-full.svg" alt="Community organisation" width={80} height={80} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </a>
            <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image src="/trust/govuk.png" alt="GOV.UK logo" width={140} height={50} className="w-auto h-12 object-contain grayscale hover:grayscale-0 transition" />
              <span className="mt-2 text-sm font-semibold text-gray-800">GOV.UK</span>
            </a>
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
                <Link href={p("/contact")} className="underline text-green-900">contattaci</Link>.
              </>
            ) : (
              <>
                Short answers to common questions. For anything else,{" "}
                <Link href={p("/contact")} className="underline text-green-900">contact us</Link>.
              </>
            )}
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {faqs.map((f, i) => (
                <li key={`${f.q}-${i}`} className="rounded-2xl bg-white border p-5 shadow-sm">
                  <details className="group">
                    <summary className="marker-none list-none cursor-pointer font-semibold text-green-900 flex items-center justify-between">
                      <span>{f.q}</span>
                      <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm group-open:rotate-45 transition" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="mt-2 text-sm text-gray-700">{typeof f.a === "string" ? <>{f.a}</> : f.a}</div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
