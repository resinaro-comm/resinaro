// src/app/[locale]/community/import-car-italy-to-uk/page.tsx
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
      ? "Importare un’auto dall’Italia al Regno Unito: guida DVLA, VED (road tax), assicurazione, targhe e requisiti tecnici"
      : "Bringing or Importing a Car from Italy to the UK: DVLA, VED (Road Tax), Insurance, Plates & Technical Requirements",
    metaDesc: it
      ? "Procedura passo-passo per importare un’auto dall’Italia al Regno Unito: NOVA/HMRC, registrazione DVLA, VED, MOT, assicurazione, targhe e adeguamenti tecnici. Confronto costi vs comprare in UK."
      : "Step-by-step process to import a car from Italy to the UK: HMRC/NOVA, DVLA registration, VED, MOT, insurance, plates and technical adjustments. Cost comparison vs buying in the UK.",
    ogDesc: it
      ? "Come trasferire e registrare un’auto italiana in UK: controlli, documenti, costi indicativi e alternative."
      : "How to transfer and register an Italian car in the UK: checks, paperwork, indicative costs and alternatives.",

    // Hero
    chip: it ? "MOBILITÀ • guida pratica" : "MOBILITY • practical guide",
    h1Top: it ? "Importare un’auto Italia → UK" : "Importing a Car Italy → UK",
    h1Sub: it
      ? "DVLA, VED, assicurazione, targhe e requisiti tecnici"
      : "DVLA, VED, Insurance, Plates & Technical Requirements",
    heroP: it
      ? "Panoramica completa su cosa fare prima di partire, all’arrivo e alla registrazione: NOVA/HMRC, DVLA, MOT, copertura assicurativa temporanea e adeguamenti tecnici tipici (fari, tachimetro, fendinebbia)."
      : "A full overview of what to do pre-departure, on arrival and at registration: HMRC/NOVA, DVLA, MOT, temporary cover and common technical adjustments (headlights, speedometer, fog light).",
    ctaLead: it
      ? "Scarica la checklist ‘Import auto Italia→UK’ (PDF) + aggiornamenti pratici per automobilisti in UK."
      : "Get the ‘Italy→UK car import’ checklist (PDF) + practical motoring updates.",
    ctaNote: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    metaPub: it ? "Pubblicato: 5 Nov 2025" : "Published: 5 Nov 2025",
    metaUpd: it ? "Aggiornato: 5 Nov 2025" : "Updated: 5 Nov 2025",
    metaRead: it ? "~10 min di lettura" : "~10 min read",

    // Intro
    introP: it
      ? "Importare può convenire per modelli rari o storici, ma tra trasporto, NOVA/HMRC, DVLA, VED, MOT e adeguamenti tecnici i costi salgono. Qui trovi un percorso chiaro e una tabella con voci di spesa tipiche per decidere se importare o comprare in UK."
      : "Importing may make sense for rare or historic models, but transport, HMRC/NOVA, DVLA, VED, MOT and technical tweaks all add cost. This guide lays out the steps and a line-item cost table so you can decide whether to import or buy in the UK.",

    // Sections
    s1H2: it ? "Prima di partire (Italia)" : "Before You Travel (Italy)",
    s1L1: it
      ? "Documenti: libretto (carta di circolazione), certificato di proprietà/dematerializzato, eventuale fattura/vendita."
      : "Papers: registration (carta di circolazione), proof of ownership, invoice/bill of sale if applicable.",
    s1L2: it
      ? "Controlli: verifica numero di telaio (VIN) e corrispondenza documenti; conserva manutenzione e certificazioni."
      : "Checks: confirm VIN matches documents; keep service history and certificates.",
    s1L3: it
      ? "Trasporto: guida propria con copertura internazionale o spedizione su bisarca; fotografa lo stato del veicolo."
      : "Transport: self-drive with international cover or carrier truck; photograph the vehicle’s condition.",
    s1L4: it
      ? "Assicurazione: verifica estensione internazionale/temporanea fino alla registrazione UK."
      : "Insurance: confirm international or temporary cover up to UK registration.",

    s2H2: it ? "All’arrivo in UK" : "On Arrival in the UK",
    s2L1: it
      ? "Dichiarazione HMRC (NOVA): registra l’arrivo del veicolo; in base a status fiscale e veicolo, HMRC conferma eventuali imposte dovute."
      : "HMRC NOVA: notify HMRC that the vehicle arrived; HMRC confirms any taxes due based on your status and the vehicle.",
    s2L2: it
      ? "MOT/controllo tecnico: programma ispezione (se richiesto per età/uso) e verifica emissioni/sicurezza."
      : "MOT/technical check: book inspection (if needed for age/use) and confirm emissions/safety compliance.",
    s2L3: it
      ? "Adeguamenti tipici: fascio fari per guida a sinistra, tachimetro visibile in mph, fendinebbia posteriore, triangolo e giubbino dove richiesto."
      : "Common tweaks: left-hand traffic headlight pattern, mph-readable speedometer, rear fog light, triangle/high-vis where applicable.",

    s3H2: it ? "Registrazione DVLA (domestica)" : "DVLA Registration (Domestic)",
    s3L1: it
      ? "Modulo di registrazione (ad es. V55/5 per veicoli usati importati), prova d’identità/indirizzo, conferma NOVA, assicurazione, MOT (se richiesto) e pagamento."
      : "Registration form (e.g., V55/5 for used imported), ID/address proof, NOVA confirmation, insurance, MOT (if required) and fees.",
    s3L2: it
      ? "VED (road tax): calcolato per classe/CO₂/anno di immatricolazione; da pagare al momento della registrazione."
      : "VED (road tax): calculated by class/CO₂/first reg year; payable when you register.",
    s3L3: it
      ? "Targhe UK: ordina targhe presso fornitore autorizzato dopo l’assegnazione del numero; porta ID e documenti."
      : "UK plates: buy from an approved supplier once your number is assigned; bring ID and documents.",

    s4H2: it ? "Assicurazione & guida legale" : "Insurance & Legal Driving",
    s4L1: it
      ? "Copertura temporanea/‘VIN insurance’ finché non hai il numero UK; poi aggiorna la polizza con targa britannica."
      : "Temporary/VIN insurance until you get the UK number; then update the policy with the UK plate.",
    s4L2: it
      ? "Guida con targa estera: verifica il limite temporale e le condizioni (residenza, uso) prima della registrazione."
      : "Driving on foreign plates: check time limits and conditions (residency, use) before registration.",
    s4L3: it
      ? "Veicoli storici: regole diverse per esenzioni MOT/ved; verifica i requisiti per auto d’epoca."
      : "Historic vehicles: different MOT/VED rules may apply; check eligibility for classic exemptions.",

    s5H2: it ? "Costi indicativi (guida rapida)" : "Indicative Costs (Quick Guide)",
    s5Note: it
      ? "Valori puramente indicativi; le cifre reali variano per veicolo, età, emissioni, trasporto, assicurazione e area."
      : "Purely indicative; real figures vary by vehicle, age, emissions, transport, insurance and region.",
    tblItem: it ? "Voce di costo" : "Line item",
    tblRange: it ? "Range tipico" : "Typical range",
    tblNotes: it ? "Note" : "Notes",
    row1I: it ? "Trasporto (bisarca/traghetto)" : "Transport (carrier/ferry)",
    row1R: "£300–£900+",
    row1N: it ? "Dipende da distanza e modalità" : "Depends on distance and method",
    row2I: it ? "MOT / ispezione tecnica" : "MOT / technical inspection",
    row2R: "£40–£100",
    row2N: it ? "Se richiesto per età/uso" : "If required for age/use",
    row3I: it ? "Adeguamenti tecnici (fari, mph, fendinebbia)" : "Technical tweaks (lights, mph, fog)",
    row3R: "£50–£300+",
    row3N: it ? "In base al modello" : "Varies by model",
    row4I: it ? "Targhe UK" : "UK plates",
    row4R: "£25–£50",
    row4N: it ? "Rivenditore autorizzato" : "Approved supplier",
    row5I: it ? "Tassa DVLA / prima registrazione" : "DVLA / first registration fee",
    row5R: "£55",
    row5N: it ? "Una tantum" : "One-off",
    row6I: it ? "VED (road tax)" : "VED (road tax)",
    row6R: it ? "£0–£600+/anno" : "£0–£600+/yr",
    row6N: it ? "Per classe/CO₂" : "By class/CO₂",
    row7I: it ? "Assicurazione (mensile)" : "Insurance (monthly)",
    row7R: "£40–£120+",
    row7N: it ? "Età, CAP, storico, valore" : "Age, postcode, history, value",

    s6H2: it ? "Comprare in UK vs importare: confronto rapido" : "Buy in the UK vs Import: Quick Comparison",
    buyProsH: it ? "Comprare in UK — Pro" : "Buy in the UK — Pros",
    buyConsH: it ? "Comprare in UK — Contro" : "Buy in the UK — Cons",
    impProsH: it ? "Importare — Pro" : "Import — Pros",
    impConsH: it ? "Importare — Contro" : "Import — Cons",
    buyPros: it
      ? ["Iter semplice", "Targhe/assicurazione immediata", "Storico verificabile (HPI)"]
      : ["Simpler process", "Immediate plates/insurance", "Traceable history (HPI)"],
    buyCons: it
      ? ["Prezzi mercato UK", "Scarsa disponibilità di versioni italiane/rare"]
      : ["UK market pricing", "Limited supply of Italian/rare specs"],
    impPros: it
      ? ["Modello/optional specifici", "Possibile valore per storiche"]
      : ["Specific trim/options", "Potential value for classics"],
    impCons: it
      ? ["Iter lungo (NOVA/DVLA)", "Costi di adeguamento", "Rischio imprevisti tecnici"]
      : ["Longer process (NOVA/DVLA)", "Adjustment costs", "Risk of technical surprises"],

    // Links & CTAs
    linksH2: it ? "Link utili (fonti DVLA & settore)" : "Useful Links (DVLA & sector)",
    link1T: it ? "DVLA — Registrare un veicolo importato" : "DVLA — Register an imported vehicle",
    link2T: it ? "HMRC — NOVA (notifica veicoli)" : "HMRC — NOVA (vehicle notification)",
    link3T: it ? "Calcolo VED / tasse veicolo" : "VED / vehicle tax rates",
    link4T: it ? "Assicurazione temporanea UK" : "Temporary UK car insurance",

    seeOptions: it ? "Vedi opzioni →" : "See options →",
    relatedH2: it ? "Articoli correlati" : "Related reads",
    related1: it ? "Patente italiana in UK: conversione e regole" : "Italian Driving Licence in the UK: Rules & Exchange",
    related2: it ? "Acquistare un’auto usata in UK: checklist" : "Buying a Used Car in the UK: Checklist",
    outroNote: it
      ? "Trasparenza: alcune risorse esterne possono essere affiliate, senza costi per te."
      : "Transparency: some external resources may be affiliate at no extra cost to you.",

    // FAQ
    faq1Q: it ? "Devo pagare IVA o dazi per importare?" : "Do I owe VAT or duty when importing?",
    faq1A: it
      ? "Dipende dallo status fiscale, dall’origine e da come/quando il veicolo entra in UK. La registrazione NOVA con HMRC determina l’eventuale dovuto."
      : "It depends on your tax status, vehicle origin and how/when it enters the UK. HMRC NOVA will determine any liability.",
    faq2Q: it ? "Posso guidare con targa italiana in UK?" : "Can I drive on Italian plates in the UK?",
    faq2A: it
      ? "Esiste un limite temporale e condizioni legate alla residenza/uso. Verifica prima di metterti alla guida."
      : "There’s a time limit with conditions tied to residency/use. Check the rules before driving.",
    faq3Q: it ? "Serve l’MOT prima della registrazione?" : "Do I need MOT before registration?",
    faq3A: it
      ? "Se richiesto per età/uso, sì: prenota un controllo per dimostrare l’idoneità alla circolazione in UK."
      : "If required for the vehicle’s age/use, yes—book an inspection to show UK roadworthiness.",
    faq4Q: it ? "Le auto con guida a sinistra sono ammesse?" : "Are left-hand-drive cars allowed?",
    faq4A: it
      ? "Sì, ma potrebbero servire adeguamenti a luci, tachimetro e altri elementi per conformità e sicurezza."
      : "Yes, but lights, speedometer and some other items may need adjustment for compliance and safety.",
    faq5Q: it ? "Posso assicurare l’auto prima della targa UK?" : "Can I insure before getting a UK plate?",
    faq5A: it
      ? "Molti assicuratori offrono copertura temporanea o su VIN; aggiorna la polizza dopo l’assegnazione della targa."
      : "Many insurers offer temporary or VIN-based cover; update the policy once you get your UK plate.",

    // Disclaimer
    disclaimerH: it ? "Nota importante" : "Important note",
    disclaimerP: it
      ? "Queste informazioni sono orientative e non costituiscono consulenza legale o fiscale. Verifica sempre le istruzioni aggiornate su DVLA/HMRC e consulta un professionista se necessario."
      : "This information is guidance only and not legal or tax advice. Always check the latest DVLA/HMRC instructions and consult a professional if needed.",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  const base = "https://resinaro.com";
  const path = "/community/import-car-italy-to-uk";
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
          url: `${base}/og/import-car-italy-to-uk.jpg`,
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
      images: [`${base}/og/import-car-italy-to-uk.jpg`],
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
      "@id": `https://resinaro.com${p("/community/import-car-italy-to-uk").replace(`/${locale}`, "")}`,
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
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Mobilità" : "Mobility", item: `https://resinaro.com/${locale}/community/mobility` },
      { "@type": "ListItem", position: 3, name: copy.h1Top, item: `https://resinaro.com/${locale}/community/import-car-italy-to-uk` },
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
            src="/images/import-car-italy-to-uk-hero.jpg"
            alt={
              locale === "it"
                ? "Auto con targa italiana su traghetto verso il Regno Unito"
                : "Italian-plated car on a ferry en route to the UK"
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
              <Link className="text-emerald-800 hover:underline" href={`${langRoot}/mobility`}>
                {locale === "it" ? "Mobilità" : "Mobility"}
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

        {/* Before you travel */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">{copy.s1H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s1L1}</li>
            <li>{copy.s1L2}</li>
            <li>{copy.s1L3}</li>
            <li>{copy.s1L4}</li>
          </ul>
        </section>

        {/* On arrival */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s2H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s2L1}</li>
            <li>{copy.s2L2}</li>
            <li>{copy.s2L3}</li>
          </ul>
        </section>

        {/* DVLA Registration */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s3H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s3L1}</li>
            <li>{copy.s3L2}</li>
            <li>{copy.s3L3}</li>
          </ul>
        </section>

        {/* Insurance & Legal */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s4H2}</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>{copy.s4L1}</li>
            <li>{copy.s4L2}</li>
            <li>{copy.s4L3}</li>
          </ul>
        </section>

        {/* Costs table */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s5H2}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.s5Note}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">{copy.s5H2}</caption>
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>{copy.tblItem}</th>
                  <th>{copy.tblRange}</th>
                  <th>{copy.tblNotes}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row1I}</td>
                  <td>{copy.row1R}</td>
                  <td>{copy.row1N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row2I}</td>
                  <td>{copy.row2R}</td>
                  <td>{copy.row2N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row3I}</td>
                  <td>{copy.row3R}</td>
                  <td>{copy.row3N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row4I}</td>
                  <td>{copy.row4R}</td>
                  <td>{copy.row4N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row5I}</td>
                  <td>{copy.row5R}</td>
                  <td>{copy.row5N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row6I}</td>
                  <td>{copy.row6R}</td>
                  <td>{copy.row6N}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row7I}</td>
                  <td>{copy.row7R}</td>
                  <td>{copy.row7N}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Buy vs Import comparison */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.s6H2}</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold text-emerald-900">{copy.buyProsH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                {copy.buyPros.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="mt-4 font-semibold text-emerald-900">{copy.impProsH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                {copy.impPros.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{copy.buyConsH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {copy.buyCons.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="mt-4 font-semibold text-gray-900">{copy.impConsH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {copy.impCons.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Useful links */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: copy.link1T,
              href: "https://www.gov.uk/importing-vehicles-into-the-uk",
              copy:
                locale === "it"
                  ? "Guida ufficiale DVLA: requisiti e moduli."
                  : "Official DVLA page: requirements and forms.",
            },
            {
              title: copy.link2T,
              href: "https://www.gov.uk/nova-log-in",
              copy:
                locale === "it"
                  ? "Servizio HMRC NOVA: registrare l’arrivo del veicolo."
                  : "HMRC NOVA service: notify vehicle arrival.",
            },
            {
              title: copy.link3T,
              href: "https://www.gov.uk/vehicle-tax-rate-tables",
              copy:
                locale === "it"
                  ? "Tabelle VED (road tax) per classe ed emissioni."
                  : "VED (road tax) tables by class and emissions.",
            },
            {
              title: copy.link4T,
              href: "https://www.google.com/search?q=temporary+car+insurance+uk",
              copy:
                locale === "it"
                  ? "Assicurazione temporanea/VIN per la fase di registrazione."
                  : "Temporary/VIN insurance for the registration phase.",
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
                  href={p("/community/italian-driving-licence-uk")}
                >
                  {copy.related1}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                  href={p("/community/buying-used-car-uk")}
                >
                  {copy.related2}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.outroNote}</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              {locale === "it" ? "Hai domande sull’import?" : "Questions about importing?"}
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              {locale === "it"
                ? "Scrivici modello, anno e budget: ti rispondiamo con una bozza di costi e passi successivi."
                : "Tell us the model, year and budget: we’ll reply with a cost sketch and next steps."}
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
                {locale === "it" ? "Trova officine & MOT →" : "Find garages & MOT →"}
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
