/* --------------------------------------------------------------------------
   Italian Citizenship by Marriage Support — Resinaro
   Service page for jure matrimonii / citizenship by marriage support from the UK.
---------------------------------------------------------------------------*/

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CitizenshipMarriageForm from "@/components/CitizenshipMarriageForm";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title:
    "Italian Citizenship by Marriage Support (UK, Jure Matrimonii) | Resinaro",
  description:
    "Practical support with Italian citizenship by marriage (jure matrimonii) for people living in the UK. £35 written guide and £170 1:1 document & plan check. Real humans, honest expectations.",
  alternates: {
    canonical: "/services/citizenship-by-marriage",
    languages: {
      en: "/en/services/citizenship-by-marriage",
      it: "/it/services/citizenship-by-marriage",
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
      "Italian Citizenship by Marriage Support (UK, Jure Matrimonii) | Resinaro",
    description:
      "Support for Italian citizenship by marriage (jure matrimonii) from the UK. Understand if you can apply, which documents you need and how to avoid common mistakes.",
    url: "https://www.resinaro.com/services/citizenship-by-marriage",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-passport.png", // swap for a dedicated citizenship image when ready
        width: 1200,
        height: 630,
        alt: "Italian citizenship by marriage support by Resinaro",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Italian Citizenship by Marriage Support (UK, Jure Matrimonii) | Resinaro",
    description:
      "Help with Italian citizenship by marriage (jure matrimonii) from the UK. £35 guide and £170 1:1 support. No guarantees, just honest, practical help.",
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
      name: "Do you guarantee that I will obtain Italian citizenship through marriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Only the Italian authorities can recognise citizenship. Resinaro helps you understand the process, organise documents and spot obvious gaps, but we cannot guarantee recognition or timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Is this legal advice or a law firm service?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Resinaro is not a law firm and does not provide legal advice. We focus on practical support: documents, checklists, file organisation and realistic expectations for citizenship by marriage.",
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
  name: "Italian Citizenship by Marriage Support (Jure Matrimonii, UK)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Italian citizenship by marriage / jure matrimonii support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Support for people in the UK exploring or preparing Italian citizenship by marriage (jure matrimonii). Includes a written guide and an optional 1:1 document & plan check.",
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
      name: "Citizenship by marriage support",
      item: "https://www.resinaro.com/services/citizenship-by-marriage",
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
      ? "Supporto cittadinanza italiana per matrimonio"
      : "Italian citizenship by marriage support",
    heroH1: it
      ? "Supporto per cittadinanza italiana per matrimonio (jure matrimonii)"
      : "Italian citizenship by marriage support (jure matrimonii, UK)",
    heroSub: it ? (
      <>
        Ti aiutiamo a capire se puoi chiedere la{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          cittadinanza italiana per matrimonio o unione civile
        </span>{" "}
        mentre vivi nel Regno Unito: requisiti base, documenti tipici e errori
        da evitare. <strong>Non siamo uno studio legale</strong> e non
        promettiamo cittadinanza: ti offriamo chiarezza, struttura e un piano
        pratico.
      </>
    ) : (
      <>
        We help you understand if you can apply for{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          Italian citizenship by marriage or civil partnership
        </span>{" "}
        while living in the UK: basic requirements, typical documents and
        mistakes to avoid. <strong>We’re not a law firm</strong> and we don’t
        promise recognition – we give you clarity, structure and a practical
        plan.
      </>
    ),
    heroCta: it ? "Inizia il supporto per cittadinanza" : "Start citizenship support",
    heroSecondaryCta: it ? "Vedi cosa è incluso" : "See what’s included",
    heroTrustLine: it
      ? "Persone reali nel Regno Unito · Italiano e inglese · Nessuna promessa irrealistica"
      : "Real humans in the UK · Italian & English · No unrealistic promises",

    heroSideTitle: it ? "Su cosa ci concentriamo" : "What we focus on",
    heroSideList: it
      ? [
          "Orientamento pratico sui requisiti base (non è un parere legale).",
          "Piano documenti e tempistiche realistico per chi vive in UK.",
          "Struttura chiara per seguire le indicazioni del Consolato.",
        ]
      : [
          "Practical orientation on basic requirements (not legal advice).",
          "Realistic document & timeline planning for people in the UK.",
          "Clear structure so you can follow your consulate’s instructions.",
        ],

    whoH: it ? "Questo servizio fa per te se…" : "This service is for you if…",
    whoList: it
      ? [
          "Sei sposato/a o in unione civile con un cittadino italiano.",
          "Vivi nel Regno Unito e ti interfacci con consolati italiani qui.",
          "Ti confondono le regole sui tempi, permesso di soggiorno, B1 e casellario.",
          "Vuoi mettere ordine nei documenti prima di fare la domanda.",
        ]
      : [
          "You are married to or in a civil partnership with an Italian citizen.",
          "You live in the UK and deal with Italian consulates here.",
          "You feel confused by rules around timelines, residence, language (B1) and criminal record checks.",
          "You want your documents organised before you submit an application.",
        ],
    whoNotH: it ? "Non è adatto se…" : "It’s not the right fit if…",
    whoNotList: it
      ? [
          "Ti serve un parere legale formale, un ricorso o assistenza da studio legale.",
          "Ti aspetti che qualcuno accorci i tempi del Ministero dell’Interno o garantisca l’esito.",
        ]
      : [
          "You need formal legal advice, an appeal or court representation.",
          "You expect someone to speed up the Ministry of Interior or guarantee the outcome.",
        ],

    whatH: it ? "Cosa è incluso nel supporto" : "What’s included in this service",
    what1Title: it
      ? "Quadro chiaro su requisiti e tempistiche"
      : "Clarity on requirements & timelines",
    what1Body: it
      ? "Ti aiutiamo a tradurre in pratica i requisiti di base (anni di matrimonio, residenza, B1, casellario), usando solo fonti ufficiali come riferimento."
      : "We help you turn the basic requirements (years of marriage, residence, B1, criminal record checks) into something practical using official sources as reference.",
    what2Title: it ? "Checklist documenti e priorità" : "Document checklist & priorities",
    what2Body: it
      ? "Mettiamo in ordine i documenti italiani e UK che probabilmente ti serviranno, con priorità chiare per non sprecare soldi."
      : "We organise the Italian and UK documents you’ll likely need, with clear priorities so you don’t waste money.",
    what3Title: it
      ? "Piano passo-per-passo e cartella digitale"
      : "Step-by-step plan & digital folder",
    what3Body: it
      ? "Ricevi un piano scritto con i prossimi passi e una struttura di cartelle semplice, così puoi tenere sotto controllo ogni fase."
      : "You get a written plan with next steps and a simple folder structure so you can keep each stage under control.",

    howH: it ? "Come funziona (3 passi)" : "How it works (3 steps)",
    how1Title: it ? "1. Racconti la vostra situazione" : "1. Tell us your situation",
    how1Body: it
      ? "Compili un breve modulo o ci scrivi con dati base (matrimonio/unione, dove vivete, consolato competente) e cosa ti preoccupa."
      : "You fill a short form or email us with basic details (marriage/partnership, where you live, consulate) and what you’re worried about.",
    how2Title: it ? "2. Analisi pratica dei documenti" : "2. Practical document analysis",
    how2Body: it
      ? "Rivediamo documenti e informazioni disponibili, segnaliamo lacune evidenti e proponiamo una checklist personalizzata."
      : "We review the documents and information you have, flag obvious gaps and propose a personalised checklist.",
    how3Title: it ? "3. Call 1:1 + riepilogo" : "3. 1:1 call + summary",
    how3Body: it
      ? "Facciamo una videocall (italiano/inglese) per rivedere il piano. Dopo ricevi un riepilogo scritto con prossimi passi specifici."
      : "We meet on a video call (Italian/English) to review the plan. Afterwards you get a written summary with concrete next steps.",

    pricingH: it ? "Quanto costa" : "Pricing",
    pricingSub: it
      ? "Prezzi per persona, in sterline (GBP). Puoi usare solo la guida, solo il 1:1 o entrambi."
      : "Prices are per person, in GBP. You can use just the guide, just the 1:1, or both.",
    guideLabel: it ? "Guida scritta (fai-da-te)" : "Written guide (self-guided)",
    oneToOneLabel: it ? "Supporto 1:1 (con noi)" : "1:1 support (done-with-you)",
    pricingNote: it
      ? "Il servizio non sostituisce un parere legale. Le decisioni su cittadinanza e tempi spettano solo alle autorità italiane."
      : "This service does not replace legal advice. Citizenship decisions and timelines belong only to the Italian authorities.",

    startH: it
      ? "Inizia il supporto per cittadinanza per matrimonio"
      : "Start citizenship-by-marriage support",
    startP: it
      ? "Compila il modulo qui sotto, scegli se acquistare la guida scritta da £35 o il controllo documenti + piano 1:1 da £170 e paga in modo sicuro in questa pagina. Ti scriveremo via email con i prossimi passi."
      : "Fill in the short form below, choose either the £35 written guide or the £170 1:1 document & plan check, and pay securely on this page. We’ll then email you with the next steps.",

    expectationsH: it
      ? "Aspettative oneste (da leggere)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        Non possiamo cambiare i requisiti di legge né accelerare le pratiche al
        Ministero dell’Interno. <strong>Non promettiamo cittadinanza</strong> e
        non sostituiamo il Consolato o un avvocato: ti aiutiamo a presentarti
        con una pratica più chiara e organizzata.
      </>
    ) : (
      <>
        We can’t change the law or speed up processing times at the Ministry of
        Interior. <strong>We do not promise citizenship</strong> and we don’t
        replace the Consulate or a lawyer – we help you show up with a clearer,
        better organised file.
      </>
    ),
    expectationsP2: it ? (
      <>
        Se il tuo caso riguarda ricorsi, contenziosi o situazioni molto
        complesse, probabilmente ti serve un avvocato specializzato. Possiamo
        comunque aiutarti a mettere ordine nei documenti di base.
      </>
    ) : (
      <>
        If your case involves appeals, litigation or very complex issues, you
        probably need a specialist lawyer. We can still help you tidy the basic
        documentation.
      </>
    ),

    otherH: it ? "Altre risorse utili" : "Other helpful routes",
    otherGuide: it
      ? "Guida pratica: cittadinanza italiana per matrimonio dal Regno Unito"
      : "Practical guide: Italian citizenship by marriage from the UK",
    otherDescent: it
      ? "Supporto cittadinanza per discendenza"
      : "Citizenship by descent support",
    otherServices: it ? "Vedi tutti i servizi Resinaro" : "View all Resinaro services",
    otherContact: it ? "Contatta Resinaro" : "Contact Resinaro",
  };
}

/* ================================ PAGE ================================= */

export default function CitizenshipByMarriageServicePage({
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
                    ? "Servizio per chi vive nel Regno Unito"
                    : "Service for people living in the UK"}
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
                • Rules, timelines and typical documents for marriage route
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
                • Practical review of your situation & documents
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

          <CitizenshipMarriageForm />

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

      {/* ===================== HONEST EXPECTATIONS + OTHER ROUTES ========= */}
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
              href={p("/community/citizenship-by-marriage-uk")}
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 hover:bg-emerald-50"
            >
              {copy.otherGuide}
            </a>
            <a
              href={p("/services/citizenship-by-descent")}
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 hover:bg-emerald-50"
            >
              {copy.otherDescent}
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
