// src/app/[locale]/community/healthcare-private-insurance-uk/page.tsx
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
      ? "Sanità privata nel Regno Unito: assicurazioni, coperture internazionali, dentale e prevenzione"
      : "Private Healthcare in the UK: Insurance, International Cover, Dental & Preventive Care",
    metaDesc: it
      ? "Guida pratica alla sanità privata UK: come scegliere una polizza, costi tipici, coperture internazionali, piani dentali e pacchetti di prevenzione. Consigli, pro/contro e link utili."
      : "Practical guide to UK private healthcare: choosing a plan, typical costs, international cover, dental plans and preventive packages. Tips, pros/cons and useful links.",
    ogDesc: it
      ? "Dopo la guida NHS: come muoversi tra assicurazioni (BUPA, AXA), comparatori, dentale e check-up in UK."
      : "After the NHS guide: how to navigate insurers (BUPA, AXA), comparison sites, dental cover and health checks in the UK.",

    // Hero
    chip: it ? "SALUTE • guida pratica" : "HEALTH • practical guide",
    h1Top: it ? "Sanità privata in UK" : "Private Healthcare in the UK",
    h1Sub: it
      ? "Assicurazioni, dentale, prevenzione e coperture estere"
      : "Insurance, Dental, Preventive & International Cover",
    heroP: it
      ? "L’NHS è il pilastro; la sanità privata accelera visite e diagnostica e amplia la scelta. Qui trovi quando ha senso, come confrontare i piani, fasce di costo e una checklist decisionale."
      : "The NHS is the backbone; private care speeds up access and broadens choice. Here’s when it makes sense, how to compare plans, price bands, and a quick decision checklist.",
    ctaLead: it
      ? "Scarica la checklist “Scegli la polizza giusta” (PDF) + aggiornamenti salute in UK."
      : "Get the ‘Choose the right policy’ checklist (PDF) + UK health updates.",
    ctaNote: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    metaPub: it ? "Pubblicato: 5 Nov 2025" : "Published: 5 Nov 2025",
    metaUpd: it ? "Aggiornato: 5 Nov 2025" : "Updated: 5 Nov 2025",
    metaRead: it ? "~12 min di lettura" : "~12 min read",

    // Benefit chips
    b1h: it ? "Tempi più rapidi" : "Faster access",
    b1p: it
      ? "Riduci le attese per consulenze, diagnostica e alcuni interventi."
      : "Shorter waits for consults, diagnostics and select procedures.",
    b2h: it ? "Più scelta" : "More choice",
    b2p: it
      ? "Rete di cliniche/ospedali privati, specialisti e orari flessibili."
      : "Private hospitals/clinics, wider specialist choice and flexible hours.",
    b3h: it ? "Coperture mirate" : "Targeted cover",
    b3p: it
      ? "Moduli per ricovero, day-case, diagnostica, fisio, salute mentale, dentale."
      : "Modules for inpatient, day-case, diagnostics, physio, mental health, dental.",

    // Intro
    introP: it
      ? "La sanità privata non sostituisce l’NHS e non copre l’emergenza, ma può sbloccare accessi più rapidi e servizi aggiuntivi. Questa pagina riassume struttura delle polizze, costi tipici, pro/contro, coperture internazionali, piani dentali e check-up preventivi."
      : "Private care doesn’t replace the NHS or A&E, but it can speed up access and add services. This page covers policy structure, typical costs, pros/cons, international cover, dental plans, and preventive check-ups.",

    // Sections
    sec1H2: it ? "Come funziona l’assicurazione sanitaria privata" : "How Private Health Insurance Works",
    sec1L1: it
      ? "Struttura modulare: ricovero (inpatient), day-case, diagnostica, terapie (fisioterapia), salute mentale, farmaci specialistici."
      : "Modular structure: inpatient, day-case, diagnostics, therapies (physio), mental health, specialist drugs.",
    sec1L2: it
      ? "Limiti & franchigie: massimali annui, sottolimiti (es. fisio), eccesso per sinistro per ridurre il premio."
      : "Limits & excess: annual caps, sub-limits (e.g., physio), per-claim excess to lower premiums.",
    sec1L3: it
      ? "Esclusioni comuni: condizioni pre-esistenti, maternità elettiva, pronto soccorso, medicina generale."
      : "Common exclusions: pre-existing conditions, elective maternity, A&E, routine GP.",
    sec1L4: it
      ? "Rete & ‘fee-assured’: verifica ospedali/specialisti accreditati per evitare conguagli."
      : "Network & ‘fee-assured’: check approved hospitals/specialists to avoid shortfalls.",

    secCostH2: it ? "Costi tipici (indicativi)" : "Typical Costs (indicative)",
    secCostNote: it
      ? "Range orientativi per adulto in buona salute; i prezzi reali dipendono da età, CAP, storia clinica e opzioni scelte."
      : "Indicative ranges for a healthy adult; pricing varies by age, postcode, medical history and selected options.",
    tblTier: it ? "Livello" : "Tier",
    tblWhat: it ? "Cosa include" : "What’s included",
    tblFrom: it ? "Da ~/mese" : "From ~/mo",
    row1T: it ? "Base" : "Core",
    row1W: it
      ? "Ricovero + day-case in rete; diagnostica essenziale."
      : "Inpatient + day-case in-network; essential diagnostics.",
    row1C: "£25–£45",
    row2T: it ? "Intermedio" : "Mid",
    row2W: it
      ? "Diagnostica estesa, fisioterapia, salute mentale limitata, eccesso £100+."
      : "Broader diagnostics, physio, limited mental health, £100+ excess.",
    row2C: "£45–£90",
    row3T: it ? "Completo" : "Comprehensive",
    row3W: it
      ? "Massimali più alti, rete premium, add-on estero."
      : "Higher limits, premium network, international add-ons.",
    row3C: "£90–£180+",

    secIntlH2: it ? "Coperture internazionali & viaggio" : "International & Travel Cover",
    secIntlL1: it
      ? "Add-on ‘EU/Worldwide’ utili per expat e rientri in Italia; controlla massimali e aree escluse (USA)."
      : "‘EU/Worldwide’ add-ons help for expats and trips to Italy; check limits and excluded regions (e.g., USA).",
    secIntlL2: it
      ? "Per emergenze in viaggio spesso serve una polizza viaggio dedicata (A&E, rimpatrio, evacuazione)."
      : "You’ll often still need separate travel insurance for emergencies (A&E, repatriation, evacuation).",
    secIntlL3: it
      ? "Coordina la copertura con GHIC/EHIC ed eventuali polizze aziendali."
      : "Coordinate with GHIC/EHIC and any employer policy.",

    secDentalH2: it ? "Piani dentali (NHS vs privato)" : "Dental Plans (NHS vs Private)",
    secDentalL1: it
      ? "NHS: band di prezzo calmierate ma accesso difficile in alcune aree."
      : "NHS: capped fee bands but access can be limited in some areas.",
    secDentalL2: it
      ? "Polizze private: igiene, otturazioni, emergenze; ortodonzia/impianti spesso con tetti o escluse."
      : "Private cover: hygiene, fillings, emergencies; orthodontics/implants often capped or excluded.",
    secDentalL3: it
      ? "Costi indicativi: piani base £8–£20/mese; completi £20–£40+/mese."
      : "Indicative cost: basic £8–£20/mo; comprehensive £20–£40+/mo.",

    secPrevH2: it ? "Prevenzione & check-up" : "Preventive Care & Check-ups",
    secPrevL1: it
      ? "Screening annuali: profilo ematico base, pressione, BMI, lipidi, reni/fegato."
      : "Annual screens: core bloods, BP, BMI, lipids, kidney/liver function.",
    secPrevL2: it
      ? "Pacchetti ‘health assessment’: alcune cliniche includono ECG, tiroide, vitamina D."
      : "‘Health assessment’ packages: some include ECG, thyroid, vitamin D.",
    secPrevL3: it
      ? "Costi indicativi: base £120–£250; avanzati £300–£700+."
      : "Indicative cost: basic £120–£250; advanced £300–£700+.",

    secProsH2: it ? "Pro & contro rapidi" : "Quick Pros & Cons",
    pros: it
      ? ["Accesso più rapido", "Scelta specialisti/ospedali", "Coperture modulabili"]
      : ["Faster access", "Specialist/hospital choice", "Modular cover"],
    cons: it
      ? ["Costo mensile", "Esclusioni/pre-esistenti", "Possibili conguagli fuori rete"]
      : ["Monthly cost", "Exclusions/pre-existing", "Potential out-of-network shortfalls"],

    secChooseH2: it ? "Checklist veloce per scegliere" : "Quick Checklist to Choose",
    chooseL1: it
      ? "Definisci obiettivo (rapidità, rete locale, estero, dentale)."
      : "Define your goal (speed, local network, international, dental).",
    chooseL2: it
      ? "Stabilisci budget e franchigia massima accettabile."
      : "Set budget and the maximum excess you’re comfortable with.",
    chooseL3: it
      ? "Verifica rete ospedaliera nella tua area."
      : "Check hospital/specialist network in your area.",
    chooseL4: it
      ? "Confronta 2–3 preventivi (comparatore + sito compagnia)."
      : "Compare 2–3 quotes (comparison site + insurer site).",
    chooseL5: it
      ? "Leggi esperienze utenti su tempi reali e rimborsi."
      : "Read user experiences on real timelines and claims.",

    // Links & CTAs
    seeOptions: it ? "Vedi opzioni →" : "See options →",
    relatedH2: it ? "Articoli correlati" : "Related reads",
    related1: it ? "Sanità NHS per italiani nel Regno Unito (2025)" : "NHS Healthcare for Italians in the UK (2025)",
    related2: it ? "Farmacia di casa (UK): pronti spendendo meno" : "Home Pharmacy (UK): Ready, Spend Less",
    outroNote: it
      ? "Trasparenza: alcuni link possono essere affiliati, senza costi per te."
      : "Transparency: some links may be affiliate at no extra cost to you.",
    needH3: it ? "Dubbi sulla tua copertura?" : "Unsure about your cover?",
    needP: it
      ? "Scrivici obiettivo e budget: ti rispondiamo con una bozza di coperture e domande da porre all’assicuratore."
      : "Tell us your goal and budget: we’ll reply with a cover sketch and key questions to ask an insurer.",

    // FAQ extra
    faq1Q: it ? "L’assicurazione privata sostituisce l’NHS?" : "Does private insurance replace the NHS?",
    faq1A: it
      ? "No. L’NHS resta il riferimento e copre l’emergenza. La polizza accelera visite/diagnostica e amplia la scelta, ma non sostituisce A&E."
      : "No. The NHS remains the backbone and covers emergencies. Private insurance speeds up access/diagnostics and expands choice; it doesn’t replace A&E.",
    faq2Q: it ? "Le condizioni pre-esistenti sono coperte?" : "Are pre-existing conditions covered?",
    faq2A: it
      ? "Dipende dalla sottoscrizione. Molti piani escludono o prevedono carenze. Verifica i documenti pre-contrattuali."
      : "It depends on underwriting. Many plans exclude them or apply waiting periods. Check pre-contract docs.",
    faq3Q: it ? "Serve anche un’assicurazione viaggio?" : "Do I still need travel insurance?",
    faq3A: it
      ? "Sì, per emergenze, rimpatrio ed evacuazione. Gli add-on ‘Worldwide’ possono non coprire tutto."
      : "Yes—for emergencies, repatriation and evacuation. ‘Worldwide’ add-ons may not cover everything.",
    faq4Q: it ? "Quanto costa in media?" : "How much does it cost on average?",
    faq4A: it
      ? "Indicativamente: base £25–£45/mese; intermedio £45–£90; completo £90–£180+. Prezzi reali variano per età, CAP, storia clinica e franchigia."
      : "Roughly: core £25–£45/mo; mid £45–£90; comprehensive £90–£180+. Real quotes vary by age, postcode, medical history and excess.",
    faq5Q: it ? "Cosa spesso non è coperto?" : "What’s often not covered?",
    faq5A: it
      ? "Pronto soccorso, GP di base, gravidanza elettiva, condizioni pre-esistenti, cure fuori rete senza autorizzazione."
      : "A&E, routine GP, elective maternity, pre-existing conditions, out-of-network care without approval.",

    // Disclaimer
    disclaimerH: it ? "Nota importante (non è un parere medico)" : "Important note (not medical advice)",
    disclaimerP: it
      ? "Le informazioni sono a scopo informativo, non sostituiscono consulenza medica o assicurativa professionale. Verifica sempre i documenti di polizza e parla con un professionista qualificato."
      : "Information is for guidance only and not medical or insurance advice. Always check policy documents and consult a qualified professional.",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  const base = "https://resinaro.com";
  const path = "/community/healthcare-private-insurance-uk";
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
          url: `${base}/og/healthcare-private-insurance-uk.jpg`,
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
      images: [`${base}/og/healthcare-private-insurance-uk.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
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

  // ===== JSON-LD (Article + FAQ + Breadcrumbs + Organization-lite) =====
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
      "@id": `https://resinaro.com${p("/community/healthcare-private-insurance-uk").replace(`/${locale}`, "")}`,
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
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Salute" : "Healthcare", item: `https://resinaro.com/${locale}/community/healthcare` },
      { "@type": "ListItem", position: 3, name: copy.h1Top, item: `https://resinaro.com/${locale}/community/healthcare-private-insurance-uk` },
    ],
  };

  const orgLiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    url: "https://resinaro.com",
    logo: "https://resinaro.com/brand/logo.png",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLiteJsonLd) }} />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/healthcare-private-insurance-uk-hero.jpg"
            alt={
              locale === "it"
                ? "Clinica privata nel Regno Unito con medico e paziente in sala visite"
                : "UK private clinic setting with doctor and patient in consultation"
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
        {/* Visible breadcrumbs (no sticky ToC) */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center gap-1 text-gray-600">
            <li>
              <Link className="text-emerald-800 hover:underline" href={langRoot}>
                {locale === "it" ? "Community" : "Community"}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link className="text-emerald-800 hover:underline" href={`${langRoot}/healthcare`}>
                {locale === "it" ? "Salute" : "Healthcare"}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-gray-800">{copy.h1Top}</li>
          </ol>
        </nav>

        {/* Benefit chips */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: copy.b1h, p: copy.b1p },
            { h: copy.b2h, p: copy.b2p },
            { h: copy.b3h, p: copy.b3p },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-emerald-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div className="mt-8 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">{copy.introP}</p>
        </div>

        {/* How it works */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">{copy.sec1H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.sec1L1}</li>
            <li>{copy.sec1L2}</li>
            <li>{copy.sec1L3}</li>
            <li>{copy.sec1L4}</li>
          </ul>
        </section>

        {/* Typical costs */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secCostH2}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.secCostNote}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">{copy.secCostH2}</caption>
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>{copy.tblTier}</th>
                  <th>{copy.tblWhat}</th>
                  <th>{copy.tblFrom}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row1T}</td>
                  <td>{copy.row1W}</td>
                  <td>{copy.row1C}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row2T}</td>
                  <td>{copy.row2W}</td>
                  <td>{copy.row2C}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row3T}</td>
                  <td>{copy.row3W}</td>
                  <td>{copy.row3C}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* International cover */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secIntlH2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.secIntlL1}</li>
            <li>{copy.secIntlL2}</li>
            <li>{copy.secIntlL3}</li>
          </ul>
        </section>

        {/* Dental */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secDentalH2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.secDentalL1}</li>
            <li>{copy.secDentalL2}</li>
            <li>{copy.secDentalL3}</li>
          </ul>
        </section>

        {/* Preventive */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secPrevH2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.secPrevL1}</li>
            <li>{copy.secPrevL2}</li>
            <li>{copy.secPrevL3}</li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secProsH2}</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold text-emerald-900">{locale === "it" ? "Pro" : "Pros"}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                {copy.pros.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{locale === "it" ? "Contro" : "Cons"}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {copy.cons.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.secChooseH2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.chooseL1}</li>
            <li>{copy.chooseL2}</li>
            <li>{copy.chooseL3}</li>
            <li>{copy.chooseL4}</li>
            <li>{copy.chooseL5}</li>
          </ul>
        </section>

        {/* Quick links: insurers & comparison */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: locale === "it" ? "BUPA (assicurazioni)" : "BUPA (insurer)",
              copy:
                locale === "it"
                  ? "Consulta piani, rete ospedaliera e health assessments."
                  : "Review plans, hospital network and health assessments.",
              href: "https://www.bupa.co.uk/",
            },
            {
              title: locale === "it" ? "AXA Health (assicurazioni)" : "AXA Health (insurer)",
              copy:
                locale === "it"
                  ? "Piani modulari, opzioni dentali e coperture aziendali."
                  : "Modular plans, dental options and corporate cover.",
              href: "https://www.axahealth.co.uk/",
            },
            {
              title: locale === "it" ? "Comparatori UK" : "UK Comparison Sites",
              copy:
                locale === "it"
                  ? "Confronta 2–3 preventivi per prezzo/rete/coperture."
                  : "Compare 2–3 quotes for price/network/benefits.",
              href: "https://www.google.com/search?q=compare+private+health+insurance+uk",
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
                  href={p("/community/nhs-healthcare-italians-uk")}
                >
                  {copy.related1}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/home-pharmacy-uk")}
                >
                  {copy.related2}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.outroNote}</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{copy.needH3}</h3>
            <p className="mt-1 text-sm text-gray-700">{copy.needP}</p>
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
                {locale === "it" ? "Trova cliniche e dentisti →" : "Find clinics & dentists →"}
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
