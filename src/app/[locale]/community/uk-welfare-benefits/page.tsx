// src/app/[locale]/community/uk-welfare-benefits/page.tsx
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
      ? "Welfare e Benefici nel Regno Unito: Universal Credit, Child Benefit, Council Tax Reduction, Housing"
      : "UK Welfare & Benefits: Universal Credit, Child Benefit, Council Tax Reduction, Housing Support",
    metaDesc: it
      ? "Guida ai principali benefici in UK: requisiti, come fare domanda e link ufficiali. Differenze con il sistema italiano e servizi locali di supporto."
      : "Guide to key UK benefits: eligibility, how to apply and official links. Differences from the Italian system and local support services.",
    ogDesc: it
      ? "Panoramica chiara su Universal Credit, Child Benefit, Council Tax Reduction, supporto all’alloggio e dove chiedere aiuto."
      : "Clear overview of Universal Credit, Child Benefit, Council Tax Reduction, housing support and where to get help.",

    // Hero
    chip: it ? "WELFARE • guida pratica" : "WELFARE • practical guide",
    h1Top: it ? "Benefici & Welfare in UK" : "Welfare & Benefits in the UK",
    h1Sub: it
      ? "Cosa esiste, chi può richiederlo, come fare domanda"
      : "What exists, who can claim, how to apply",
    heroP: it
      ? "Un’introduzione operativa ai principali benefici britannici con link GOV.UK e organizzazioni di supporto a migranti e famiglie. Include differenze chiave rispetto all’Italia."
      : "A hands-on introduction to the UK’s main benefits with GOV.UK links and support organisations for migrants and families. Includes key differences vs Italy.",
    ctaLead: it
      ? "Scarica la checklist ‘Domanda benefici UK’ (PDF) + aggiornamenti pratici."
      : "Get the ‘Claim UK benefits’ checklist (PDF) + practical updates.",
    ctaNote: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    metaPub: it ? "Pubblicato: 5 Nov 2025" : "Published: 5 Nov 2025",
    metaUpd: it ? "Aggiornato: 5 Nov 2025" : "Updated: 5 Nov 2025",
    metaRead: it ? "~12 min di lettura" : "~12 min read",

    // Intro
    introP: it
      ? "I benefici UK variano in base a reddito, risparmi, composizione della famiglia, disabilità/salute e status di immigrazione/residenza. Sotto trovi tabelle sintetiche, requisiti tipici e link ufficiali per avviare le domande in autonomia."
      : "UK benefits depend on income, savings, family make-up, disability/health and immigration/residence status. Below you’ll find compact tables, typical eligibility points and official links to start applications yourself.",

    // Section: Overview table
    s1H2: it ? "Panoramica rapida dei principali benefici" : "Quick Overview of Key Benefits",
    tbl1ColA: it ? "Beneficio" : "Benefit",
    tbl1ColB: it ? "A cosa serve" : "Purpose",
    tbl1ColC: it ? "Dove si applica" : "Where to apply",
    b1N: "Universal Credit",
    b1P: it
      ? "Sostegno al reddito e al costo dell’alloggio; sostituisce vari benefici legacy."
      : "Means-tested income support incl. help with housing; replaces several legacy benefits.",
    b1L: it ? "GOV.UK — Universal Credit" : "GOV.UK — Universal Credit",
    b2N: "Child Benefit",
    b2P: it ? "Contributo per figli a carico; importo fisso per figlio." : "Payment for children you’re responsible for; fixed per-child rate.",
    b2L: it ? "GOV.UK — Child Benefit" : "GOV.UK — Child Benefit",
    b3N: it ? "Council Tax Reduction" : "Council Tax Reduction",
    b3P: it
      ? "Riduzione locale della tassa comunale in base a reddito/condizione."
      : "Local reduction on Council Tax depending on income/circumstances.",
    b3L: it ? "Il tuo council (sito locale)" : "Your local council site",
    b4N: it ? "Supporto all’alloggio" : "Housing Support",
    b4P: it
      ? "Aiuto con affitto tramite Universal Credit o Housing Benefit (casi particolari)."
      : "Help with rent via Universal Credit or Housing Benefit (specific cases).",
    b4L: it ? "GOV.UK — Housing" : "GOV.UK — Housing",

    // Section: Eligibility basics
    s2H2: it ? "Requisiti di base (in generale)" : "Eligibility Basics (in general)",
    s2L1: it
      ? "Residenza abituale/diritto a risiedere in UK e status di immigrazione idoneo; potrebbero applicarsi restrizioni."
      : "Habitual residence/right to reside in the UK and an eligible immigration status; certain restrictions may apply.",
    s2L2: it
      ? "Test dei mezzi: reddito e risparmi sotto soglie previste."
      : "Means test: income and savings below set thresholds.",
    s2L3: it
      ? "Varia in base a età, figli a carico, disabilità/salute, alloggio."
      : "Varies with age, children, disability/health, housing situation.",
    s2L4: it
      ? "Ogni beneficio ha regole specifiche: controlla sempre la pagina ufficiale."
      : "Each benefit has specific rules: always check the official page.",

    // Section: How to apply
    s3H2: it ? "Come fare domanda (passi tipici)" : "How to Apply (typical steps)",
    s3L1: it
      ? "Verifica l’idoneità su GOV.UK; usa un calcolatore affidabile (es. Turn2us)."
      : "Check eligibility on GOV.UK; use a reputable calculator (e.g., Turn2us).",
    s3L2: it
      ? "Prepara documenti: identità, NINo, prove di affitto, buste paga/conti, certificati di nascita dei figli."
      : "Prepare documents: ID, NINo, tenancy proof, payslips/bank statements, children’s birth certificates.",
    s3L3: it
      ? "Compila il form online; conserva login e numeri di riferimento."
      : "Complete the online form; keep login and reference numbers.",
    s3L4: it
      ? "Rispondi a richieste di ulteriori prove e aggiorna eventuali cambiamenti."
      : "Respond to evidence requests and report any changes promptly.",

    // Section: Differences vs Italy
    s4H2: it ? "Differenze chiave rispetto all’Italia" : "Key Differences vs Italy",
    s4L1: it
      ? "Sistema più centralizzato online (GOV.UK) ma con componenti locali (council)."
      : "More centralised online journey (GOV.UK) but local elements (councils).",
    s4L2: it
      ? "Universal Credit integra più sostegni in un’unica prestazione mensile."
      : "Universal Credit merges multiple supports into a single monthly payment.",
    s4L3: it
      ? "Valutazioni di idoneità (means test) frequenti e report di cambiamenti obbligatori."
      : "Frequent means-testing and mandatory change-of-circumstance reporting.",
    s4L4: it
      ? "Supporto all’alloggio legato all’affitto locale e alle regole UC/Housing Benefit."
      : "Housing support tied to local rent levels and UC/Housing Benefit rules.",

    // Section: Useful links
    linksH2: it ? "Link utili (fonti ufficiali & supporto)" : "Useful Links (official & support)",
    link1T: it ? "GOV.UK — Universal Credit" : "GOV.UK — Universal Credit",
    link2T: it ? "GOV.UK — Child Benefit" : "GOV.UK — Child Benefit",
    link3T: it ? "Trova il tuo council" : "Find your local council",
    link4T: it ? "Citizens Advice — Aiuto con benefici" : "Citizens Advice — Benefits help",
    link5T: "Turn2us — Benefits Calculator",
    link6T: it ? "Shelter — Consigli su alloggio" : "Shelter — Housing advice",

    seeOptions: it ? "Apri →" : "Open →",

    // Extras
    relatedH2: it ? "Articoli correlati" : "Related reads",
    related1: it ? "NHS: guida per italiani in UK" : "NHS: Guide for Italians in the UK",
    related2: it ? "Iscrizione al GP e pronto soccorso" : "Registering with a GP & Using A&E",

    // FAQ
    faq1Q: it ? "Posso richiedere benefici appena arrivato in UK?" : "Can I claim benefits right after arriving in the UK?",
    faq1A: it
      ? "Dipende da residenza abituale, diritto a risiedere e status di immigrazione. Verifica i criteri e le eventuali attese."
      : "It depends on habitual residence, right to reside and immigration status. Check criteria and any waiting rules.",
    faq2Q: it ? "Universal Credit paga anche l’affitto?" : "Does Universal Credit cover rent?",
    faq2A: it
      ? "Può includere una componente housing, soggetta a limiti locali/regole familiari."
      : "It can include a housing element, subject to local limits and household rules.",
    faq3Q: it ? "Il Child Benefit è per tutti?" : "Is Child Benefit for everyone?",
    faq3A: it
      ? "Di norma sì per chi ha responsabilità di figli in UK, ma esistono limiti (es. High Income Child Benefit Charge)."
      : "Generally for those responsible for children in the UK, but limits exist (e.g., High Income Child Benefit Charge).",
    faq4Q: it ? "Dove chiedo aiuto se la domanda è complicata?" : "Where can I get help if my claim is complex?",
    faq4A: it
      ? "Rivolgiti a Citizens Advice, organizzazioni per migranti o al tuo council per assistenza gratuita."
      : "Contact Citizens Advice, migrant-support orgs, or your local council for free assistance.",

    // Disclaimer
    disclaimerH: it ? "Nota importante" : "Important note",
    disclaimerP: it
      ? "Informazioni orientative, non consulenza legale/benefit. Controlla sempre le pagine ufficiali GOV.UK e richiedi supporto qualificato se necessario."
      : "Guidance only, not legal/benefits advice. Always check official GOV.UK pages and seek qualified help when needed.",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  const base = "https://resinaro.com";
  const path = "/community/uk-welfare-benefits";
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
          url: `${base}/og/uk-welfare-benefits.jpg`,
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
      images: [`${base}/og/uk-welfare-benefits.jpg`],
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
      "@id": `https://resinaro.com${p("/community/uk-welfare-benefits").replace(`/${locale}`, "")}`,
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
    ],
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: `https://resinaro.com/${locale}/community` },
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Famiglia & Welfare" : "Family & Welfare", item: `https://resinaro.com/${locale}/community/welfare` },
      { "@type": "ListItem", position: 3, name: copy.h1Top, item: `https://resinaro.com/${locale}/community/uk-welfare-benefits` },
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
            src="/images/uk-welfare-benefits-hero.jpg"
            alt={
              locale === "it"
                ? "Famiglia che consulta una guida ai benefici nel Regno Unito"
                : "Family reviewing a UK benefits guide"
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
              <Link className="text-emerald-800 hover:underline" href={`${langRoot}/welfare`}>
                {locale === "it" ? "Famiglia & Welfare" : "Family & Welfare"}
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

        {/* Overview table */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">{copy.s1H2}</h2>
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
                  <td>{copy.b1N}</td>
                  <td>{copy.b1P}</td>
                  <td>
                    <a
                      className="text-emerald-800 underline underline-offset-4"
                      target="_blank"
                      rel="noopener"
                      href="https://www.gov.uk/universal-credit"
                    >
                      {copy.b1L}
                    </a>
                  </td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.b2N}</td>
                  <td>{copy.b2P}</td>
                  <td>
                    <a
                      className="text-emerald-800 underline underline-offset-4"
                      target="_blank"
                      rel="noopener"
                      href="https://www.gov.uk/child-benefit"
                    >
                      {copy.b2L}
                    </a>
                  </td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.b3N}</td>
                  <td>{copy.b3P}</td>
                  <td>
                    <a
                      className="text-emerald-800 underline underline-offset-4"
                      target="_blank"
                      rel="noopener"
                      href="https://www.gov.uk/find-local-council"
                    >
                      {copy.b3L}
                    </a>
                  </td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.b4N}</td>
                  <td>{copy.b4P}</td>
                  <td>
                    <a
                      className="text-emerald-800 underline underline-offset-4"
                      target="_blank"
                      rel="noopener"
                      href="https://www.gov.uk/housing-benefit"
                    >
                      {copy.b4L}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Eligibility basics */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s2H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s2L1}</li>
            <li>{copy.s2L2}</li>
            <li>{copy.s2L3}</li>
            <li>{copy.s2L4}</li>
          </ul>
        </section>

        {/* How to apply */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s3H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s3L1}</li>
            <li>{copy.s3L2}</li>
            <li>{copy.s3L3}</li>
            <li>{copy.s3L4}</li>
          </ul>
        </section>

        {/* Differences vs Italy */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s4H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s4L1}</li>
            <li>{copy.s4L2}</li>
            <li>{copy.s4L3}</li>
            <li>{copy.s4L4}</li>
          </ul>
        </section>

        {/* Useful links */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: copy.link1T,
              href: "https://www.gov.uk/universal-credit",
              copy:
                locale === "it"
                  ? "Pagina ufficiale: criteri, importi, domanda online."
                  : "Official page: criteria, amounts, online claim.",
            },
            {
              title: copy.link2T,
              href: "https://www.gov.uk/child-benefit",
              copy:
                locale === "it"
                  ? "Come richiedere il Child Benefit e quando decorre."
                  : "How to claim Child Benefit and start dates.",
            },
            {
              title: copy.link3T,
              href: "https://www.gov.uk/find-local-council",
              copy:
                locale === "it"
                  ? "Trova il tuo council per Council Tax Reduction e servizi locali."
                  : "Find your council for Council Tax Reduction and local services.",
            },
            {
              title: copy.link4T,
              href: "https://www.citizensadvice.org.uk/benefits/",
              copy:
                locale === "it"
                  ? "Supporto gratuito e imparziale, guide e chat."
                  : "Free, impartial help with guides and chat.",
            },
            {
              title: copy.link5T,
              href: "https://benefits-calculator.turn2us.org.uk/",
              copy:
                locale === "it"
                  ? "Calcolatore affidabile per stimare i benefici."
                  : "Trusted calculator to estimate your entitlements.",
            },
            {
              title: copy.link6T,
              href: "https://england.shelter.org.uk/housing_advice",
              copy:
                locale === "it"
                  ? "Consigli su alloggio e diritti degli inquilini."
                  : "Advice on housing and tenants’ rights.",
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

        {/* FAQ */}
        <section id="faq" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            {[
              { q: copy.faq1Q, a: copy.faq1A },
              { q: copy.faq2Q, a: copy.faq2A },
              { q: copy.faq3Q, a: copy.faq3A },
              { q: copy.faq4Q, a: copy.faq4A },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-emerald-900">{f.q}</h3>
                <p className="mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer & Related */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 text-sm shadow-sm">
            <h3 className="font-semibold text-gray-900">{copy.disclaimerH}</h3>
            <p className="mt-1 text-gray-700">{copy.disclaimerP}</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{copy.relatedH2}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/nhs-healthcare-italians-uk")}
                >
                  {copy.related1}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/register-with-gp-uk")}
                >
                  {copy.related2}
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
