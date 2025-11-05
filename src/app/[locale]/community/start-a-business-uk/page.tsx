// src/app/[locale]/community/start-a-business-uk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    // Meta
    metaTitle: it
      ? "Avviare un’attività nel Regno Unito: forma giuridica, conto business, visti e tasse"
      : "Starting a Business in the United Kingdom: Legal Forms, Business Bank Accounts, Visas & Taxes",
    metaDesc: it
      ? "Guida passo-passo: ditta individuale vs LTD, come aprire un conto business, visti rilevanti per non-UK, imposte (Income Tax, Corporation Tax, VAT), opportunità per italiani e risorse utili."
      : "Step-by-step guide: sole trader vs LTD, how to open a business bank account, visas relevant to non-UK nationals, taxes (Income Tax, Corporation Tax, VAT), opportunities for Italians and helpful resources.",
    ogDesc: it
      ? "Dalla scelta della forma giuridica all’apertura del conto e agli adempimenti fiscali: tutto per avviare un’attività in UK."
      : "From choosing your legal structure to opening a bank account and meeting tax duties: everything to start a business in the UK.",

    // Hero
    chip: it ? "LAVORO • guida pratica" : "BUSINESS • practical guide",
    h1Top: it ? "Avviare un’attività in UK" : "Start a Business in the UK",
    h1Sub: it ? "Forma giuridica, conto, visti, tasse" : "Structure, Banking, Visas, Taxes",
    heroP: it
      ? "Il Regno Unito conta circa 6 milioni di imprese e oltre 5 milioni di lavoratori autonomi. Qui trovi un percorso in 6 sezioni per partire con il piede giusto—dalla scelta tra ditta individuale e LTD fino a contabilità, IVA e risorse per italiani."
      : "The UK has ~6 million businesses and over 5 million self-employed workers. This 6-section path gets you started—from choosing between sole trader and LTD to banking, VAT and support resources for Italians.",
    ctaLead: it
      ? "Scarica la checklist ‘Avvio impresa UK in 7 passi’ (PDF) + aggiornamenti per imprenditori."
      : "Get the ‘Start a UK business in 7 steps’ checklist (PDF) + founder updates.",
    ctaNote: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    metaPub: it ? "Pubblicato: 5 Nov 2025" : "Published: 5 Nov 2025",
    metaUpd: it ? "Aggiornato: 5 Nov 2025" : "Updated: 5 Nov 2025",
    metaRead: it ? "~12 min di lettura" : "~12 min read",

    // Intro
    introP: it
      ? "Questa guida copre le scelte fondamentali: forma giuridica (sole trader vs LTD), iscrizioni a HMRC/Companies House, apertura conto business, visti per chi non ha status UK, tassazione base e risorse di supporto (acceleratori, consulenti, community)."
      : "This guide covers key choices: legal form (sole trader vs LTD), HMRC/Companies House registrations, opening a business account, visas for non-UK status, baseline taxes and support resources (accelerators, advisors, communities).",

    // Sections
    s1H2: it ? "1) Scegli la forma giuridica" : "1) Choose Your Legal Structure",
    s1P: it
      ? "Le opzioni più comuni: ditta individuale (sole trader) e società a responsabilità limitata (private limited company, LTD)."
      : "The most common options: sole trader and private limited company (LTD).",
    tbl1ColA: it ? "Aspetto" : "Aspect",
    tbl1ColB: it ? "Ditta individuale (Sole Trader)" : "Sole Trader",
    tbl1ColC: it ? "LTD (Limited Company)" : "LTD (Limited Company)",
    tbl1R1A: it ? "Responsabilità" : "Liability",
    tbl1R1B: it ? "Illimitata" : "Unlimited",
    tbl1R1C: it ? "Limitata al capitale" : "Limited to share capital",
    tbl1R2A: it ? "Tassazione" : "Tax",
    tbl1R2B: it ? "Income Tax + NI su profitti personali" : "Income Tax + NI on personal profits",
    tbl1R2C: it ? "Corporation Tax su profitti societari" : "Corporation Tax on company profits",
    tbl1R3A: it ? "Amministrazione" : "Admin",
    tbl1R3B: it ? "Snella (contabilità semplificata)" : "Lean (simpler bookkeeping)",
    tbl1R3C: it ? "Bilanci, registri, conferimenti" : "Accounts, registers, filings",
    tbl1R4A: it ? "Percezione esterna" : "External perception",
    tbl1R4B: it ? "Freelance/consulenza" : "Freelance/consultancy",
    tbl1R4C: it ? "Più ‘corporate’/contratti B2B" : "More ‘corporate’/B2B contracts",

    s2H2: it ? "2) Registrazioni iniziali" : "2) Initial Registrations",
    s2ST: it ? "Ditta individuale (sole trader)" : "Sole trader",
    s2STL1: it ? "Registra Self Assessment con HMRC e ottieni UTR." : "Register for Self Assessment with HMRC and get a UTR.",
    s2STL2: it ? "Apri un conto dedicato (consigliato) e tieni traccia di entrate/uscite." : "Open a dedicated account (recommended) and track income/expenses.",
    s2STL3: it ? "Valuta la registrazione IVA se superi la soglia o su base volontaria." : "Consider VAT registration if above the threshold or voluntarily.",
    s2LTD: it ? "Società a responsabilità limitata (LTD)" : "Limited Company (LTD)",
    s2LTDL1: it ? "Costituisci su Companies House (denominazione, SIC, atto costitutivo, soci/PSC)." : "Incorporate via Companies House (name, SIC, articles, shareholders/PSC).",
    s2LTDL2: it ? "Registra la società presso HMRC per Corporation Tax." : "Register with HMRC for Corporation Tax.",
    s2LTDL3: it ? "Valuta VAT e PAYE se assumi o ti corrispondi stipendio." : "Assess VAT and PAYE if hiring or paying salary.",

    s3H2: it ? "3) Conto business & strumenti" : "3) Business Bank Account & Tools",
    s3L1: it ? "Apri un conto business (KYC: documenti personali e societari)." : "Open a business account (KYC: personal & company docs).",
    s3L2: it ? "Software contabile (es. Xero, QuickBooks) per fatture, spese e VAT." : "Bookkeeping software (e.g., Xero, QuickBooks) for invoices, expenses & VAT.",
    s3L3: it ? "Pagamenti: gateway online, POS e fatturazione con numerazione sequenziale." : "Payments: online gateways, POS, invoicing with sequential numbering.",

    s4H2: it ? "4) Visti & diritto al lavoro" : "4) Visas & Right to Work",
    s4P: it
      ? "Per cittadini senza status UK/EU idoneo, valuta percorsi come Skilled Worker (sponsorizzazione), Innovator Founder (startup innovativa), Global Talent o Graduate (post-studio). Lavorare come autonomo richiede il diritto al lavoro."
      : "If you lack UK status, consider routes such as Skilled Worker (sponsorship), Innovator Founder (innovative startup), Global Talent, or Graduate. Self-employment requires the right to work.",

    s5H2: it ? "5) Tasse: base da conoscere" : "5) Taxes: The Basics",
    s5L1: it ? "Income Tax & National Insurance (sole trader): paghi sull’utile personale." : "Income Tax & National Insurance (sole trader): you pay on personal profit.",
    s5L2: it ? "Corporation Tax (LTD): a carico della società sui profitti." : "Corporation Tax (LTD): paid by the company on profits.",
    s5L3: it ? "VAT: registra se superi la soglia corrente; considera regimi semplificati se idonei." : "VAT: register if over the current threshold; consider simplified schemes if eligible.",
    s5L4: it ? "Payroll (PAYE): se assumi o paghi stipendi, gestisci buste paga e contributi." : "Payroll (PAYE): if you hire or pay salaries, manage payroll and contributions.",
    s5L5: it ? "Scadenze: imposta un calendario (VAT returns, Self Assessment, CT600, conferimenti contabili)." : "Deadlines: set a calendar (VAT returns, Self Assessment, CT600, accounts filings).",

    s6H2: it ? "6) Opportunità & risorse per italiani" : "6) Opportunities & Resources for Italians",
    s6L1: it ? "Network: camere di commercio, Istituto Italiano di Cultura, gruppi professionali italiani in UK." : "Networks: Chambers of Commerce, Italian Cultural Institute, Italian professional groups in the UK.",
    s6L2: it ? "Consulenza: commercialisti bilingue, consulenti immigration, mentor e acceleratori." : "Advisors: bilingual accountants, immigration advisors, mentors and accelerators.",
    s6L3: it ? "Settori in crescita: servizi specialistici B2B, cibo di qualità, design, software e consulenza." : "Growing niches: specialist B2B services, quality food, design, software & consulting.",

    // Links & CTAs
    linksH2: it ? "Link ufficiali & strumenti" : "Official Links & Tools",
    link1T: it ? "HMRC — Self Assessment (sole trader)" : "HMRC — Self Assessment (sole trader)",
    link2T: it ? "Companies House — Incorporare una LTD" : "Companies House — Incorporate an LTD",
    link3T: it ? "HMRC — Registrazione VAT" : "HMRC — VAT Registration",
    link4T: it ? "GOV.UK — Visti per imprenditori e lavoro" : "GOV.UK — Business & Work Visas",
    link5T: it ? "Xero / QuickBooks — software contabile" : "Xero / QuickBooks — accounting software",
    link6T: it ? "Guide di settore (es. Fiscomania)" : "Sector guides (e.g., Fiscomania)",

    seeOptions: it ? "Apri →" : "Open →",
    relatedH2: it ? "Articoli correlati" : "Related reads",
    related1: it ? "Aprire conto business & KYC in UK" : "Open a UK Business Account & KYC",
    related2: it ? "Freelance in UK: UTR, Self Assessment, IVA" : "Freelancing in the UK: UTR, Self Assessment, VAT",
    outroNote: it
      ? "Trasparenza: alcune risorse esterne possono essere affiliate, senza costi per te."
      : "Transparency: some external resources may be affiliate at no extra cost to you.",

    // FAQ
    faq1Q: it ? "Meglio ditta individuale o LTD?" : "Sole trader or LTD—what’s better?",
    faq1A: it
      ? "Dipende da rischio, clienti e profitti. La LTD limita la responsabilità e può aiutare con clienti corporate; la ditta individuale è più semplice all’inizio."
      : "Depends on risk, clients and profits. LTD limits liability and can help with corporate clients; sole trader is simpler early on.",
    faq2Q: it ? "Quando registrarsi all’IVA?" : "When should I register for VAT?",
    faq2A: it
      ? "Se superi la soglia corrente su base annua o prevedi di superarla. Puoi anche registrarti volontariamente per recuperare IVA sugli acquisti."
      : "When your annual turnover exceeds the current threshold or you expect to exceed it. You can also register voluntarily to reclaim input VAT.",
    faq3Q: it ? "Posso aprire un’azienda senza conto business?" : "Can I start without a business bank account?",
    faq3A: it
      ? "È fortemente consigliato un conto dedicato (obbligatorio per LTD). Aiuta con KYC, incassi e contabilità."
      : "A dedicated account is strongly recommended (mandatory for LTD). It helps with KYC, payments and bookkeeping.",
    faq4Q: it ? "Quali visti permettono di fare impresa?" : "Which visas allow me to run a business?",
    faq4A: it
      ? "Percorsi come Innovator Founder, Global Talent o Graduate consentono attività imprenditoriali; verifica sempre requisiti e condizioni."
      : "Routes like Innovator Founder, Global Talent or Graduate can allow entrepreneurial activity; always check requirements.",
    faq5Q: it ? "Serve un commercialista?" : "Do I need an accountant?",
    faq5A: it
      ? "Non è obbligatorio, ma utile per fiscalità, buste paga e scadenze (specie con LTD o IVA)."
      : "Not mandatory, but helpful for tax, payroll and deadlines—especially with an LTD or VAT.",

    // Disclaimer
    disclaimerH: it ? "Nota importante" : "Important note",
    disclaimerP: it
      ? "Queste informazioni sono orientative e non costituiscono consulenza legale o fiscale. Verifica sempre le istruzioni aggiornate su GOV.UK/HMRC/Companies House e consulta un professionista se necessario."
      : "This is guidance only and not legal or tax advice. Always check the latest GOV.UK/HMRC/Companies House guidance and consult a professional if needed.",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  const base = "https://resinaro.com";
  const path = "/community/start-a-business-uk";
  const localePrefix = params.locale === "it" ? "/it" : "/en";

  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    alternates: {
      canonical: path,
      languages: {
        "en-GB": `/en${path}`,
        "it-IT": `/it${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.ogDesc,
      type: "article",
      url: `${base}${localePrefix}${path}`,
      images: [
        {
          url: `${base}/og/start-a-business-uk.jpg`,
          width: 1200,
          height: 630,
          alt: copy.h1Top,
        },
      ],
      locale: params.locale === "it" ? "it_IT" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.ogDesc,
      images: [`${base}/og/start-a-business-uk.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
}

// Dates for meta display / JSON-LD
const PUBLISHED = "2025-11-05";
const UPDATED = "2025-11-05";

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;
  const langRoot = `/${locale}/community`;

  // ===== JSON-LD (Article + FAQ + Breadcrumbs) =====
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.metaTitle,
    description: copy.metaDesc,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Person", name: locale === "it" ? "Redazione Resinaro" : "Resinaro Editorial" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: { "@type": "ImageObject", url: "https://resinaro.com/brand/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://resinaro.com${p("/community/start-a-business-uk").replace(`/${locale}`, "")}`,
    },
    inLanguage: locale === "it" ? "it-IT" : "en-GB",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: copy.faq1Q, acceptedAnswer: { "@type": "Answer", text: copy.faq1A } },
      { "@type": "Question", name: copy.faq2Q, acceptedAnswer: { "@type": "Answer", text: copy.faq2A } },
      { "@type": "Question", name: copy.faq3Q, acceptedAnswer: { "@type": "Answer", text: copy.faq3A } },
      { "@type": "Question", name: copy.faq4Q, acceptedAnswer: { "@type": "Answer", text: copy.faq4A } },
      { "@type": "Question", name: copy.faq5Q, acceptedAnswer: { "@type": "Answer", text: copy.faq5A } },
    ],
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: `https://resinaro.com/${locale}/community` },
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Lavoro & Impresa" : "Work & Business", item: `https://resinaro.com/${locale}/community/business` },
      { "@type": "ListItem", position: 3, name: copy.h1Top, item: `https://resinaro.com/${locale}/community/start-a-business-uk` },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/start-a-business-uk-hero.jpg"
            alt={
              locale === "it"
                ? "Imprenditore italiano che avvia un’attività nel Regno Unito"
                : "Italian entrepreneur starting a UK business"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.chip}
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              {copy.h1Top}
              <span className="block text-emerald-200">{copy.h1Sub}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{copy.heroP}</p>
          </div>

          {/* CTA */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">{copy.ctaLead}</p>
                <p className="text-xs text-gray-700">{copy.ctaNote}</p>
              </div>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="flex w-full flex-col gap-2 sm:flex-row md:justify-end"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-emerald-600 px-5 font-semibold text-white shadow hover:bg-emerald-700"
                >
                  {copy.ctaBtn}
                </button>
              </form>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>{copy.metaPub}</span>
            <span className="opacity-60">•</span>
            <span>{copy.metaUpd}</span>
            <span className="opacity-60">•</span>
            <span>{copy.metaRead}</span>
          </div>
        </div>

        {/* Wave separator */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto mt-8 max-w-7xl px-6 md:mt-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center gap-1 text-gray-600">
            <li>
              <Link className="text-emerald-800 hover:underline" href={langRoot}>
                {locale === "it" ? "Community" : "Community"}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link className="text-emerald-800 hover:underline" href={`${langRoot}/business`}>
                {locale === "it" ? "Lavoro & Impresa" : "Work & Business"}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-gray-800">{copy.h1Top}</li>
          </ol>
        </nav>

        {/* Intro */}
        <div className="mt-2 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">{copy.introP}</p>
        </div>

        {/* Structure comparison table */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">{copy.s1H2}</h2>
          <p className="mt-2 text-sm text-gray-700">{copy.s1P}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>{copy.tbl1ColA}</th>
                  <th>{copy.tbl1ColB}</th>
                  <th>{copy.tbl1ColC}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.tbl1R1A}</td>
                  <td>{copy.tbl1R1B}</td>
                  <td>{copy.tbl1R1C}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.tbl1R2A}</td>
                  <td>{copy.tbl1R2B}</td>
                  <td>{copy.tbl1R2C}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.tbl1R3A}</td>
                  <td>{copy.tbl1R3B}</td>
                  <td>{copy.tbl1R3C}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.tbl1R4A}</td>
                  <td>{copy.tbl1R4B}</td>
                  <td>{copy.tbl1R4C}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Registrations */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s2H2}</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold text-emerald-900">{copy.s2ST}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                <li>{copy.s2STL1}</li>
                <li>{copy.s2STL2}</li>
                <li>{copy.s2STL3}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{copy.s2LTD}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.s2LTDL1}</li>
                <li>{copy.s2LTDL2}</li>
                <li>{copy.s2LTDL3}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Banking & tools */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s3H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s3L1}</li>
            <li>{copy.s3L2}</li>
            <li>{copy.s3L3}</li>
          </ul>
        </section>

        {/* Visas */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s4H2}</h2>
          <p className="mt-2 text-sm text-gray-700">{copy.s4P}</p>
        </section>

        {/* Taxes */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s5H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s5L1}</li>
            <li>{copy.s5L2}</li>
            <li>{copy.s5L3}</li>
            <li>{copy.s5L4}</li>
            <li>{copy.s5L5}</li>
          </ul>
        </section>

        {/* Opportunities & resources */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s6H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s6L1}</li>
            <li>{copy.s6L2}</li>
            <li>{copy.s6L3}</li>
          </ul>
        </section>

        {/* Useful links */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: copy.link1T,
              href: "https://www.gov.uk/set-up-sole-trader",
              copy:
                locale === "it"
                  ? "Registra Self Assessment e ottieni UTR."
                  : "Register for Self Assessment and get a UTR.",
            },
            {
              title: copy.link2T,
              href: "https://www.gov.uk/limited-company-formation",
              copy:
                locale === "it"
                  ? "Incorpora la tua LTD su Companies House."
                  : "Incorporate your LTD at Companies House.",
            },
            {
              title: copy.link3T,
              href: "https://www.gov.uk/register-for-vat",
              copy:
                locale === "it"
                  ? "Registrazione IVA: soglie e moduli."
                  : "VAT registration: thresholds and forms.",
            },
            {
              title: copy.link4T,
              href: "https://www.gov.uk/browse/visas-immigration/work-visas",
              copy:
                locale === "it"
                  ? "Percorsi di visto per lavorare e fare impresa."
                  : "Visa routes for work and entrepreneurship.",
            },
            {
              title: copy.link5T,
              href: "https://www.google.com/search?q=xero+quickbooks+uk",
              copy:
                locale === "it"
                  ? "Confronta software contabile e funzionalità."
                  : "Compare accounting software and features.",
            },
            {
              title: copy.link6T,
              href: "https://fiscomania.com/uk/",
              copy:
                locale === "it"
                  ? "Approfondimenti fiscali per italiani (in italiano)."
                  : "Italian-language tax explainers for Italians abroad.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-1 text-sm text-gray-700">{card.copy}</p>
              <a
                className="mt-3 inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
                rel="nofollow noopener"
                target="_blank"
                href={card.href}
              >
                {copy.seeOptions}
              </a>
            </div>
          ))}
        </section>

        {/* Disclaimer */}
        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 text-sm shadow-sm">
          <h3 className="font-semibold text-gray-900">{copy.disclaimerH}</h3>
          <p className="mt-1 text-gray-700">{copy.disclaimerP}</p>
        </section>

        {/* Related & outro */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{copy.relatedH2}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/open-uk-business-account")}
                >
                  {copy.related1}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/freelance-uk-utr-self-assessment-vat")}
                >
                  {copy.related2}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.outroNote}</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              {locale === "it" ? "Vuoi un piano personalizzato?" : "Want a tailored plan?"}
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              {locale === "it"
                ? "Scrivici settore, fatturato previsto e forma giuridica: ti inviamo un piano in 7 passi con scadenze."
                : "Tell us your sector, expected revenue and structure: we’ll send a 7-step plan with key deadlines."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={p("/contact")}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              >
                {locale === "it" ? "Fai una domanda →" : "Ask a question →"}
              </Link>
              <Link
                href={p("/directory")}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {locale === "it" ? "Trova commercialisti →" : "Find accountants →"}
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
