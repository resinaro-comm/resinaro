// src/app/[locale]/services/citizenship-by-descent/page.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CitizenshipDescentForm from "@/components/CitizenshipDescentForm";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title:
    "Italian Citizenship by Descent Support (UK, Jure Sanguinis) | Resinaro",
  description:
    "Practical support with Italian citizenship by descent (jure sanguinis) for people living in the UK. £35 written guide and £170 1:1 document & plan check. Real humans, honest expectations.",
  alternates: {
    canonical: "/services/citizenship-by-descent",
    languages: {
      en: "/en/services/citizenship-by-descent",
      it: "/it/services/citizenship-by-descent",
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
    title:
      "Italian Citizenship by Descent Support (UK, Jure Sanguinis) | Resinaro",
    description:
      "Support for Italian citizenship by descent (jure sanguinis) from the UK. Understand if it makes sense to continue, avoid document mistakes and organise a clear file.",
    url: "https://www.resinaro.com/services/citizenship-by-descent",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-passport.png", // swap to dedicated citizenship image later if you want
        width: 1200,
        height: 630,
        alt: "Italian citizenship by descent support by Resinaro",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Italian Citizenship by Descent Support (UK, Jure Sanguinis) | Resinaro",
    description:
      "Help with Italian citizenship by descent (jure sanguinis) from the UK. £35 guide and £170 1:1 support. No guarantees, just honest, practical help.",
    images: ["/images/service-passport.png"],
    creator: "@resinaro",
  },
};

/* =============================== JSON-LD ================================ */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you guarantee that I will obtain Italian citizenship?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Only Italian authorities can recognise citizenship. Resinaro helps you understand the process, organise documents and spot obvious gaps, but we cannot guarantee recognition or timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Is this legal advice or a law firm service?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Resinaro is not a law firm and does not provide legal advice. We focus on practical support: documents, checklists, file organisation and realistic expectations.",
      },
    },
    {
      "@type": "Question",
      name:
        "Can I start with the written guide and later book the 1:1 document check?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Many people buy the £35 guide first to understand the basics and only book the £170 1:1 document & plan check once they are ready to move forward.",
      },
    },
    {
      "@type": "Question",
      name: "Is this service only for people who live in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "This service is designed for people living in the United Kingdom and dealing with Italian consulates there. Some content in the guide may still be useful elsewhere, but details like certificates and procedures are UK-specific.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian Citizenship by Descent Support (Jure Sanguinis, UK)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Italian citizenship by descent / jure sanguinis support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Support for people in the UK exploring or preparing Italian citizenship by descent (jure sanguinis). Includes a written guide and an optional 1:1 document & plan check.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Services",
      item: "https://www.resinaro.com/services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Citizenship by descent support",
      item: "https://www.resinaro.com/services/citizenship-by-descent",
    },
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

/* ============================= i18n STRINGS ============================ */

function t(locale: "en" | "it") {
  const it = locale === "it";

  return {
    heroAlt: it
      ? "Supporto cittadinanza italiana per discendenza"
      : "Italian citizenship by descent support",
    heroH1: it
      ? "Supporto per cittadinanza italiana per discendenza (jure sanguinis)"
      : "Italian citizenship by descent support (jure sanguinis, UK)",
    heroSub: it ? (
      <>
        Ti aiutiamo a capire se ha senso{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          portare avanti
        </span>{" "}
        la <strong>cittadinanza per discendenza</strong> dal Regno Unito,
        evitando errori costosi sui documenti.{" "}
        <strong>Non siamo uno studio legale</strong> e non promettiamo
        cittadinanza: ti offriamo chiarezza, struttura e un piano pratico.
      </>
    ) : (
      <>
        We help you decide if it still makes sense to{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          pursue
        </span>{" "}
        <strong>Italian citizenship by descent</strong> from the UK and avoid
        expensive document mistakes. <strong>We’re not a law firm</strong> and
        we don’t promise recognition – we give you clarity, structure and a
        practical plan.
      </>
    ),
    heroCta: it ? "Inizia il supporto cittadinanza" : "Start citizenship support",
    heroSecondaryCta: it ? "Leggi cosa è incluso" : "See what’s included",
    heroTrustLine: it
      ? "Persone reali nel Regno Unito · Italiano e inglese · Nessuna promessa irreale"
      : "Real humans in the UK · Italian & English · No unrealistic promises",

    heroSideTitle: it
      ? "Due modi in cui possiamo aiutarti"
      : "Two ways we can support you",
    heroSideList: it
      ? [
          "Guida scritta approfondita (£35) per capire regole, documenti e percorso tipico.",
          "Controllo documenti + piano 1:1 (£170) con cartella digitale ordinata.",
          "Nessuna garanzia di riconoscimento: solo supporto pratico e onesto.",
        ]
      : [
          "Deep-dive written guide (£35) to understand rules, documents and the typical path.",
          "1:1 document & plan check (£170) with an organised digital folder.",
          "No guarantees of recognition – just practical, honest support.",
        ],

    whoH: it ? "Questo servizio fa per te se…" : "This service is for you if…",
    whoList: it
      ? [
          "Hai un antenato italiano e vivi nel Regno Unito.",
          "Ti senti perso tra regole jure sanguinis, forum e gruppi Facebook.",
          "Hai paura di spendere soldi in certificati, apostille o traduzioni sbagliate.",
          "Vuoi un piano chiaro prima di investire altro tempo e denaro.",
        ]
      : [
          "You have an Italian ancestor and you live in the UK.",
          "You feel lost between jure sanguinis rules, forums and Facebook groups.",
          "You’re scared of wasting money on the wrong certificates, apostilles or translations.",
          "You want a clear plan before you spend more time and money.",
        ],
    whoNotH: it ? "Non è adatto se…" : "It’s not the right fit if…",
    whoNotList: it
      ? [
          "Ti serve un parere legale formale o assistenza da studio legale / avvocato.",
          "Ti aspetti una garanzia di cittadinanza o tempi precisi dal Consolato.",
        ]
      : [
          "You need formal legal advice or representation from a law firm.",
          "You expect a guarantee of recognition or exact timelines from the Consulate.",
        ],

    whatH: it ? "Cosa è incluso nel supporto" : "What’s included in this service",
    what1Title: it ? "Quadro chiaro della tua linea familiare" : "Clarity on your family line",
    what1Body: it
      ? "Ti aiutiamo a mettere in fila la linea (antenato italiano, generazioni successive, eventuali naturalizzazioni) in modo comprensibile."
      : "We help you map out your line (Italian ancestor, later generations, any naturalisations) in a way that actually makes sense.",
    what2Title: it ? "Controllo pratico dei documenti" : "Practical document review",
    what2Body: it
      ? "Segnaliamo lacune evidenti, documenti rischiosi o formati sbagliati prima che tu spenda altri soldi."
      : "We flag obvious gaps, risky documents or wrong formats before you spend more money.",
    what3Title: it ? "Piano passo-per-passo e cartella digitale" : "Step-by-step plan & digital folder",
    what3Body: it
      ? "Ricevi un piano scritto con priorità chiare e una struttura di cartelle semplice, così ogni nuovo documento finisce al posto giusto."
      : "You get a written plan with clear priorities and a simple folder structure so every new document has a home.",

    howH: it ? "Come funziona (3 passi)" : "How it works (3 steps)",
    how1Title: it ? "1. Racconti il tuo caso" : "1. Tell us your situation",
    how1Body: it
      ? "Compili un breve modulo o ci scrivi con la tua linea familiare, dove vivi in UK e a che punto sei."
      : "You fill a short form or email us with your family line, where you live in the UK and where you’re stuck.",
    how2Title: it ? "2. Analisi e proposta di piano" : "2. We analyse and propose a plan",
    how2Body: it
      ? "Rivediamo documenti e info, evidenziamo problemi evidenti e abbozziamo un piano realistico con priorità."
      : "We review your documents and information, highlight obvious issues and sketch a realistic plan with priorities.",
    how3Title: it ? "3. Call 1:1 + riepilogo scritto" : "3. 1:1 call + written summary",
    how3Body: it
      ? "Ci sentiamo in videocall (italiano/inglese), rivediamo il piano e ti lasciamo con un riepilogo scritto e prossimi passi concreti."
      : "We meet on a video call (Italian/English), walk through the plan and leave you with a written summary and concrete next steps.",

    pricingH: it ? "Quanto costa" : "Pricing",
    pricingSub: it
      ? "Prezzi per persona, in sterline (GBP). Puoi usare solo la guida, solo il 1:1 o entrambi."
      : "Prices are per person, in GBP. You can use just the guide, just the 1:1, or both.",
    guideLabel: it ? "Guida scritta (fai-da-te)" : "Written guide (self-guided)",
    oneToOneLabel: it ? "Supporto 1:1 (con noi)" : "1:1 support (done-with-you)",
    pricingNote: it
      ? "Il servizio non sostituisce un parere legale. Le decisioni su cittadinanza e tempi spettano solo alle autorità italiane."
      : "This service does not replace legal advice. Citizenship decisions and timelines belong only to the Italian authorities.",

    startH: it ? "Inizia il supporto cittadinanza" : "Start citizenship support",
    startP: it
      ? "Compila il modulo qui sotto, scegli se acquistare la guida scritta da £35 o il controllo documenti + piano 1:1 da £170 e paga in modo sicuro in questa pagina. Ti scriveremo via email con i prossimi passi."
      : "Fill in the short form below, choose either the £35 written guide or the £170 1:1 document & plan check, and pay securely on this page. We’ll then email you with the next steps.",
    startCtaPrimary: it ? "Parla con Resinaro del tuo caso" : "Talk to Resinaro about my case",
    startCtaSecondary: it ? "Leggi la guida pratica" : "Read the practical guide",

    expectationsH: it
      ? "Aspettative oneste (da leggere)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        Non possiamo promettere riconoscimento, tempi veloci o scorciatoie.{" "}
        <strong>Non siamo uno studio legale</strong> e non sostituiamo il
        Consolato: ti aiutiamo a presentarti con una pratica più chiara e
        organizzata.
      </>
    ) : (
      <>
        We can’t promise recognition, fast timelines or shortcuts.{" "}
        <strong>We are not a law firm</strong> and we don’t replace the
        Consulate – we help you show up with a clearer, better organised file.
      </>
    ),
    expectationsP2: it ? (
      <>
        Se hai una situazione molto complessa (controversie legali, casi di
        giurisprudenza, ricorsi in tribunale), è probabile che tu abbia bisogno
        di un avvocato specializzato. Possiamo comunque aiutarti a mettere ordine
        ai documenti di base.
      </>
    ) : (
      <>
        If your case is very complex (case law issues, court appeals, litigation),
        you probably need a specialist lawyer. We can still help you tidy the
        basic documents, but we won’t act as legal representatives.
      </>
    ),

    otherH: it ? "Altre risorse utili" : "Other helpful routes",
    otherGuide: it
      ? "Guida pratica: cittadinanza italiana per discendenza dal Regno Unito"
      : "Practical guide: Italian citizenship by descent from the UK",
    otherServices: it ? "Vedi tutti i servizi Resinaro" : "View all Resinaro services",
    otherContact: it ? "Contatta Resinaro" : "Contact Resinaro",
  };
}

/* ================================ PAGE ================================= */

export default function CitizenshipByDescentServicePage({
  params,
}: {
  params: { locale: "en" | "it" };
}) {
  const { locale } = params;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* ================================ HERO ================================ */}
      <section className="relative w-full pb-10 pt-4 sm:pt-6 md:pt-8">
        {/* Background image */}
        <div className="relative h-[230px] w-full overflow-hidden sm:h-[300px] md:h-[380px] lg:h-[420px]">
          <Image
            src="/images/service-passport.png"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/5" />
        </div>

        {/* Hero content card */}
        <div className="-mt-16 mx-auto max-w-5xl px-3 sm:px-6 md:px-8 lg:-mt-20 lg:px-0 relative">
          <div className="rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-md md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="md:flex-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">
                  {locale === "it"
                    ? "Servizio per italiani nel Regno Unito"
                    : "Service for Italians in the UK"}
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">
                  {copy.heroH1}
                </h1>
                <p className="mt-3 text-sm text-emerald-900 sm:text-[15px]">
                  {copy.heroSub}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="#start"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-50 shadow-sm shadow-emerald-700/40 transition-colors hover:bg-emerald-800"
                  >
                    {copy.heroCta}
                  </a>
                  <a
                    href="#what"
                    className="text-sm font-medium text-emerald-900 underline underline-offset-4"
                  >
                    {copy.heroSecondaryCta}
                  </a>
                </div>

                <p className="mt-3 text-xs text-emerald-800">
                  {copy.heroTrustLine}
                </p>
              </div>

              {/* Side mini card */}
              <div className="md:w-[270px]">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
                    {copy.heroSideTitle}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[12px] text-emerald-900">
                    {copy.heroSideList.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[4px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHO IT'S FOR / NOT FOR ==================== */}
      <section className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-emerald-950">
              {copy.whoH}
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-emerald-900">
              {copy.whoList.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[3px] inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-800">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-emerald-950">
              {copy.whoNotH}
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-emerald-900">
              {copy.whoNotList.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[3px] inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-rose-200 text-[10px] text-rose-900">
                    !
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================= WHAT YOU GET ========================= */}
      <section
        id="what"
        className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8"
      >
        <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-xl font-semibold text-center text-emerald-950">
            {copy.whatH}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <FeatureCard title={copy.what1Title} body={copy.what1Body} />
            <FeatureCard title={copy.what2Title} body={copy.what2Body} />
            <FeatureCard title={copy.what3Title} body={copy.what3Body} />
          </div>
        </div>
      </section>

      {/* ============================== HOW IT WORKS ======================== */}
      <section className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8">
        <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-xl font-semibold text-center text-emerald-950">
            {copy.howH}
          </h2>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <StepCard title={copy.how1Title} body={copy.how1Body} index={1} />
            <StepCard title={copy.how2Title} body={copy.how2Body} index={2} />
            <StepCard title={copy.how3Title} body={copy.how3Body} index={3} />
          </ol>
        </div>
      </section>

      {/* ================================ PRICING =========================== */}
      <section className="mx-auto max-w-5xl px-3 pb-4 sm:px-6 md:px-8 md:pb-6">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 shadow-sm md:p-7">
          <h2 className="text-xl font-semibold text-center text-emerald-950">
            {copy.pricingH}
          </h2>
          <p className="mt-2 text-center text-sm text-emerald-900">
            {copy.pricingSub}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-white p-4">
              <p className="text-xs font-semibold text-emerald-700">
                {copy.guideLabel}
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-950">
                £35
              </p>
              <p className="mt-2 text-sm text-emerald-900">
                • Deep-dive written guide (PDF / online)
                <br />
                • Rules, typical documents and UK-specific notes
                <br />
                • Checklists and email templates (IT/EN)
              </p>
            </div>

            <div className="rounded-xl border border-emerald-800 bg-emerald-900 p-4 text-emerald-50">
              <p className="text-xs font-semibold text-emerald-100">
                {copy.oneToOneLabel}
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-50">
                £170
              </p>
              <p className="mt-2 text-sm text-emerald-50">
                • Practical review of your line & documents
                <br />
                • Personalised step-by-step plan + folder structure
                <br />
                • Live video call + written summary
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-emerald-900/80">
            {copy.pricingNote}
          </p>
        </div>
      </section>

      {/* ================================ START CTA + FORM ================== */}
      <section
        id="start"
        className="mx-auto max-w-5xl px-3 py-6 sm:px-6 md:px-8 md:py-8"
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold text-emerald-950">
              {copy.startH}
            </h2>
            <p className="mt-1 text-sm text-emerald-900">{copy.startP}</p>
          </div>

          <CitizenshipDescentForm />

          <p className="mt-4 text-center text-xs text-emerald-900/80">
            Email:{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>{" "}
            · WhatsApp:{" "}
            <a
              className="underline"
              href="https://wa.me/447424208127"
              target="_blank"
              rel="noopener noreferrer"
            >
              +44 7424 208127
            </a>
          </p>
        </div>
      </section>

      {/* ===================== HONEST EXPECTATIONS ========================= */}
      <section className="mx-auto grid max-w-5xl gap-6 px-3 pb-8 sm:px-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.expectationsH}
          </h2>
          <p className="mt-2 text-sm text-emerald-950">{copy.expectationsP1}</p>
          <p className="mt-2 text-xs text-emerald-900/90">
            {copy.expectationsP2}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.otherH}
          </h2>
          <div className="mt-2 flex flex-col gap-2 text-sm text-emerald-900">
            <a
              href={p("/community/citizenship-by-descent-uk")}
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 hover:bg-emerald-50"
            >
              {copy.otherGuide}
            </a>
            <a
              href={p("/services")}
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 hover:bg-emerald-50"
            >
              {copy.otherServices}
            </a>
            <a
              href={p("/contact")}
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 hover:bg-emerald-50"
            >
              {copy.otherContact}
            </a>
          </div>
        </div>
      </section>

      {/* ============================ STRUCTURED DATA ======================= */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLd),
        }}
      />
    </main>
  );
}

/* ============================ SMALL COMPONENTS ========================== */

function FeatureCard({
  title,
  body,
}: {
  title: ReactNode;
  body: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
      <h3 className="text-sm font-semibold text-emerald-950">{title}</h3>
      <p className="mt-1 text-sm text-emerald-900/90">{body}</p>
    </div>
  );
}

function StepCard({
  title,
  body,
  index,
}: {
  title: ReactNode;
  body: ReactNode;
  index: number;
}) {
  return (
    <li className="relative rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
      <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-emerald-50">
        {index}
      </div>
      <h3 className="text-sm font-semibold text-emerald-950">{title}</h3>
      <p className="mt-1 text-sm text-emerald-900/90">{body}</p>
    </li>
  );
}
