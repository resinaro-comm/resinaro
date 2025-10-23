// src/app/[locale]/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n";

export const metadata: Metadata = {
  title:
    "About Resinaro | Fair, transparent support for Italians & migrants in the UK",
  description:
    "Resinaro helps migrants with passports, ID cards, NIN, AIRE, housing guidance and mental health signposting — clear pricing, humane support and community-first values.",
  // Note: canonical is localized at runtime via JSON-LD; static metadata stays generic.
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Resinaro",
    description:
      "Professional migrant support with fair pricing, transparency and real outcomes.",
    url: "/about",
    images: ["/images/about/hero-bluehour.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Resinaro",
    description:
      "Fair, transparent migrant support in the UK — passports, NIN, AIRE, housing, mental health signposting.",
    images: ["/images/about/hero-bluehour.png"],
  },
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const it = locale === "it";
  const prefix = `/${locale}`;

  // ——— Copy (EN/IT) ————————————————————————————————————————————————
  const copy = {
    heroTitle: it ? "Chi è Resinaro" : "About Resinaro",
    heroTagline: it
      ? "Supporto professionale con valori di comunità — prezzi equi, trasparenza e risultati concreti. Noi pensiamo alla burocrazia; tu alla vita."
      : "Professional support with community values — fair pricing, transparency, and real outcomes. We do admin; you do life.",
    ctaServices: it ? "Scopri i servizi" : "Explore services",
    ctaContact: it ? "Contattaci" : "Contact us",

    whyTitle: it ? "Perché esistiamo (e perché ci teniamo)" : "Why we exist (and why we care)",
    whyBody: it
      ? "Trasferirsi all’estero ha un livello bonus chiamato “burocrazia”. È una missione secondaria infinita: hai fatto l’AIRE, ma ora il consolato chiede una prova che non sapevi esistesse, in un formato che nessuna stampante accetta. Resinaro è nato dopo aver aiutato amici e familiari e aver capito che tantissimi vivevano lo stesso labirinto. La nostra promessa è semplice: passi chiari, costi onesti, supporto umano. E zero giudizi se lo scanner è… la fotocamera del telefono."
      : "Moving countries comes with a bonus level called “paperwork”. It’s like a side-quest that never ends: you just unlocked AIRE, but now the consulate wants a proof you didn’t know existed, in a format no printer accepts. We started Resinaro after helping friends and family and realising how many people were dealing with the same maze. Our promise is simple: clear steps, fair fees, human support. Also, no judgement if your scanner is just your phone camera.",
    whyBul1: it ? "Trasformiamo la confusione in checklist." : "We turn confusion into checklists.",
    whyBul2: it
      ? "Tempi realistici (con caveat quando dipende dal consolato)."
      : "We give realistic timelines (with caveats when it’s the consulate).",
    whyBul3: it
      ? "Ti teniamo aggiornato: mai più “e adesso?”"
      : "We keep you informed so you’re never guessing “what now?”",
    fairTitle: it ? "Cosa significa “equo” per noi" : "What “fair” means to us",
    fair1: it ? "Prezzi trasparenti: sai tutto in anticipo." : "Transparent fees: you see costs upfront.",
    fair2: it ? "Ambito onesto: diciamo no se non siamo adatti." : "Honest scope: we say no when we’re not the right fit.",
    fair3: it
      ? "Comunità prima: molte guide sono gratuite; il supporto a pagamento le mantiene tali."
      : "Community first: many guides are free; paid support keeps them free.",
    fairPs: it
      ? "PS: niente PDF da 37 pagine. Preferiamo checklist ordinate e schermate con “clicca qui”."
      : "PS: We don’t do 37-page PDFs. We do tidy checklists and “here’s exactly what to click” screenshots.",

    whatTitle: it ? "Di cosa ci occupiamo" : "What we help with",
    thService: it ? "Servizio" : "Service",
    thTurn: it ? "Tempistica tipica" : "Typical Turnaround",
    thGet: it ? "Cosa ricevi" : "What You Get",
    thFee: it ? "Prezzo di partenza" : "Starting Fee",
    row1s: it ? "Passaporto & Consolari" : "Passport & Consular",
    row1t: it ? "1–3 settimane (slot variabili)" : "1–3 weeks (slots vary)",
    row1g: it
      ? "Aiuto prenotazione, controllo documenti, preparazione passo-passo"
      : "Booking help, document check, step-by-step prep",
    row1f: it ? "Da £35" : "From £35",
    row2s: "ID Card (CIE)",
    row2t: it ? "1–2 settimane" : "1–2 weeks",
    row2g: it
      ? "Checklist, guida biometrici, follow-up post-appuntamento"
      : "Checklist, biometric guidance, post-visit follow-up",
    row2f: it ? "Da £35" : "From £35",
    row3s: it ? "National Insurance (NIN)" : "National Insurance (NIN)",
    row3t: it ? "2–4 settimane" : "2–4 weeks",
    row3g: it
      ? "Supporto domanda, passaggi HMRC, consigli per il tracking"
      : "Application support, HMRC steps, tracking tips",
    row3f: it ? "Da £35" : "From £35",
    row4s: it ? "AIRE (iscrizione/aggiornamento)" : "AIRE (register/update)",
    row4t: it ? "2–6 settimane" : "2–6 weeks",
    row4g: it
      ? "Verifica circoscrizione, pacchetto documenti, guida FAST-IT"
      : "Jurisdiction check, docs pack, FAST-IT guidance",
    row4f: it ? "Da £35" : "From £35",
    needDetails: it ? "Vuoi i dettagli? Guarda tutti i" : "Need details? Browse the full list on",
    servicesLink: it ? "Servizi" : "Services",

    howTitle: it ? "Come lavoriamo" : "How we work",
    step1: it ? "Raccontaci la situazione" : "Tell us the situation",
    step1txt: it
      ? "Condividi esigenza e tempi. Qualche foto dei documenti ci aiuta a rispondere velocemente."
      : "Share what you need and your timeline. A few photos of documents help us answer fast.",
    step1hint: it ? "Email o modulo: entrambi vanno bene." : "Email or form; both work.",
    step2: it ? "Rivediamo e confermiamo" : "We review & confirm",
    step2txt: it
      ? "Ricevi una checklist chiara, un prezzo equo e tempi realistici. Se non siamo il servizio giusto, lo diciamo e indirizziamo."
      : "You receive a clear checklist, fair price, and realistic timings. If we’re not a fit, we’ll say so and signpost.",
    step2hint: it ? "Niente pressioni, niente sorprese." : "No pressure, no surprises.",
    step3: it ? "Consegna & follow-up" : "Delivery & follow-up",
    step3txt: it
      ? "Ti guidiamo nelle prenotazioni o nell’invio delle pratiche, poi restiamo disponibili per un periodo definito."
      : "We prepare and guide you through bookings or submissions, then stay available for a defined period.",
    step3hint: it ? "Riepilogo scritto incluso." : "Written summary included.",

    values: it ? "I nostri valori" : "Our values",
    clarity: it ? "Chiarezza: il tuo tempo conta; spieghiamo semplice." : "Clarity: your time matters; we explain in plain language.",
    fairness: it ? "Correttezza: prezzi pubblici e ambito chiaro. Zero 'spese amministrative' a sorpresa." : "Fairness: pricing is posted and scoped. No “admin fee” ambushes.",
    care: it ? "Cura: non sei un ticket. Teniamo memoria del contesto." : "Care: you’re more than a ticket number. We keep track of context.",
    privacy: it ? "Privacy: dati minimi; archiviazione sicura; cancellazione su richiesta." : "Privacy: minimal data; secure storage; delete on request.",

    inclusion: it ? "Inclusione (sul serio)" : "Inclusion (for real)",
    inclusionP: it
      ? "Resinaro è per chiunque stia navigando la vita nel Regno Unito. Italiano, mezzo italiano, italiano-per-amore o semplicemente amante della pasta fatta bene: sei il benvenuto."
      : "Resinaro is for anyone navigating UK life. Whether you’re Italian, half-Italian, Italian-by-love, or simply someone who appreciates a proper plate of pasta — you’re welcome.",
    incl1: it ? "Supporto per tutti (scrivici!)" : "Support for everyone (just contact us!)",
    incl2: it ? "Guide in italiano e inglese chiaro" : "Guides in clear, simple English",

    glossary: it ? "Glossario (linguaggio semplice)" : "Glossary (plain English)",
    faqs: it ? "Domande frequenti" : "FAQs",
    faqContact: it ? "Per casi specifici, " : "For case-specific questions, ",
    contactUs: it ? "contattaci" : "contact us",

    accessTitle: it ? "Accessibilità & protezione dati" : "Accessibility & data protection",
    accessP1: it
      ? "Il sito è costruito con HTML semantico, componenti navigabili da tastiera e colori ad alto contrasto. Conserviamo solo ciò che serve per erogare il servizio, e cancelliamo i dati su richiesta."
      : "Our site is built with semantic HTML, keyboard-navigable components and high-contrast colours. We store only what we must to deliver the service, and we delete data on request.",
    accessP2: it ? "Vedi la nostra " : "See our ",
    privacyPolicy: it ? "Informativa Privacy" : "Privacy Policy",
  };

  // ——— Config / assets ————————————————————————————————————————————————
  const heroSrc = "/images/about/hero-bluehour.png";
  const stats = it
    ? [
        { kpi: "4.000+", label: "Richieste risposte", hint: "Community + email dal 2023" },
        { kpi: "72%", label: "Casi risolti", hint: "Entro i primi 14 giorni" },
        { kpi: "48h", label: "Risposta tipica", hint: "Lun–Ven, 10:00–18:00" },
        { kpi: "£0", label: "Costi nascosti", hint: "Mai. Odio anche noi le sorprese." },
      ]
    : [
        { kpi: "4,000+", label: "Queries answered", hint: "Community + email since 2023" },
        { kpi: "72%", label: "Cases resolved", hint: "Within the first 14 days" },
        { kpi: "48h", label: "Typical reply", hint: "Mon–Fri, 10:00–18:00" },
        { kpi: "£0", label: "Hidden charges", hint: "Ever. We hate surprises too." },
      ];

  // ——— JSON-LD (localized where it matters) ————————————————————————————
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com/",
    logo: "https://www.resinaro.com/icon.svg",
    sameAs: [
      "https://www.youtube.com/@resinaroUK",
      "https://www.instagram.com/resinaro",
      "https://x.com/resinaro",
      "https://facebook.com/resinaro",
    ],
    description:
      "Resinaro provides fair, transparent support for Italians and migrants in the UK.",
    foundingDate: "2025-01-01",
    areaServed: ["GB"],
    email: "resinaro@proton.me",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "resinaro@proton.me",
        contactType: "customer support",
        availableLanguage: ["it", "en"],
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: it ? "Home" : "Home",
        item: `https://www.resinaro.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: it ? "Chi siamo" : "About",
        item: `https://www.resinaro.com/${locale}/about`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: it
          ? "Quali servizi offre Resinaro?"
          : "What services does Resinaro provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Aiutiamo con passaporti italiani, appuntamenti per la CIE, National Insurance Number, iscrizione AIRE, orientamento abitativo e segnalazione servizi di salute mentale."
            : "We help with Italian passports, ID card (CIE) appointments, National Insurance numbers, AIRE registration, housing guidance, and mental health signposting.",
        },
      },
      {
        "@type": "Question",
        name: it ? "Aiutate solo gli italiani?" : "Do you only help Italians?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "No. Supportiamo italiani e tutte le persone migranti che vivono nel Regno Unito. La nostra community è inclusiva e aperta a tutti."
            : "No. We support Italians and all migrants living in the UK. Our community is inclusive and open to everyone.",
        },
      },
      {
        "@type": "Question",
        name: it ? "I prezzi sono trasparenti?" : "Are your prices transparent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Sì. Pubbliciamo tariffe chiare senza costi nascosti e spieghiamo cosa è incluso prima di confermare."
            : "Yes. We publish clear rates with no hidden fees and explain what’s included before you commit.",
        },
      },
      {
        "@type": "Question",
        name: it ? "Siete un ente no profit o un’azienda?" : "Are you a charity or a business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Siamo una social business: valori di comunità e consegna professionale. Alcuni servizi sono gratuiti; quelli a pagamento sono chiaramente prezzati per sostenere il progetto."
            : "We are a social business: community values with professional delivery. Some services are free; paid services are clearly priced to keep the lights on and the help flowing.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: it ? "Come ottenere supporto da Resinaro" : "How to get support from Resinaro",
    description: it
      ? "Un percorso semplice in tre passi per ricevere aiuto con pratiche consolari e amministrative UK."
      : "A simple three-step way to get help with consular and UK admin tasks.",
    step: [
      {
        "@type": "HowToStep",
        name: it ? "Raccontaci la situazione" : "Tell us the situation",
        text: it
          ? "Compila un breve modulo o scrivi a resinaro@proton.me indicando città, documenti e scadenze."
          : "Submit a short form or email resinaro@proton.me with your location, documents and deadlines.",
      },
      {
        "@type": "HowToStep",
        name: it ? "Revisione e conferma" : "We review and confirm",
        text: it
          ? "Ricevi una checklist, tempistiche realistiche e un preventivo se il servizio è a pagamento."
          : "You receive a checklist, realistic timeline and a quote if the service is paid.",
      },
      {
        "@type": "HowToStep",
        name: it ? "Consegna e follow-up" : "Delivery & follow-up",
        text: it
          ? "Ti aiutiamo a preparare domanda/appuntamento e offriamo un periodo di supporto successivo."
          : "We help prepare the application/appointment and support for a defined follow-up period.",
      },
    ],
  };

  const ratingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "180",
    },
  };

  // ——— UI ————————————————————————————————————————————————————————————————
  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Structured data */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Script
        id="rating-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingJsonLd) }}
      />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[44vh] md:h-[56vh] w-full overflow-hidden">
          <Image
            src={heroSrc}
            alt={
              it
                ? "Italia e Regno Unito: colori caldi di comunità, skyline moderno e tricolore in sovrimpressione"
                : "Italy meets UK: warm community colours, modern city skyline and Italian tricolore overlay"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 pointer-events-none" />
        </div>

        <div className="relative -mt-20 md:-mt-28">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-green-900">
                    {copy.heroTitle}
                  </h1>
                  <p className="mt-3 text-gray-700 max-w-2xl">{copy.heroTagline}</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`${prefix}/services`}
                    className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-medium"
                  >
                    {copy.ctaServices} <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href={`${prefix}/contact`}
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-green-700 text-green-900 px-5 py-3 rounded-lg font-medium bg-white"
                  >
                    {copy.ctaContact}
                  </Link>
                </div>
              </div>

              {/* quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {stats.map((s) => (
                  <div key={s.kpi} className="rounded-xl border bg-neutral-50 p-4">
                    <div className="text-2xl md:text-3xl font-extrabold text-green-900">
                      {s.kpi}
                    </div>
                    <div className="text-sm font-medium text-gray-800">{s.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.hint}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
              {copy.whyTitle}
            </h2>
            <p className="leading-relaxed">{copy.whyBody}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{copy.whyBul1}</li>
              <li>{copy.whyBul2}</li>
              <li>{copy.whyBul3}</li>
            </ul>
          </div>

          <aside className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-green-900">{copy.fairTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <strong>{it ? "Prezzi trasparenti:" : "Transparent fees:"}</strong>{" "}
                {copy.fair1.replace(/.*:\s*/,"")}
              </li>
              <li>
                <strong>{it ? "Ambito onesto:" : "Honest scope:"}</strong>{" "}
                {copy.fair2.replace(/.*:\s*/,"")}
              </li>
              <li>
                <strong>{it ? "Comunità prima:" : "Community first:"}</strong>{" "}
                {copy.fair3.replace(/.*:\s*/,"")}
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-600">{copy.fairPs}</div>
          </aside>
        </div>
      </section>

      {/* What we help with (table) */}
      <section className="container mx-auto max-w-6xl px-6 pb-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            {copy.whatTitle}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">{copy.thService}</th>
                  <th className="px-4 py-3 font-semibold">{copy.thTurn}</th>
                  <th className="px-4 py-3 font-semibold">{copy.thGet}</th>
                  <th className="px-4 py-3 font-semibold">{copy.thFee}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3">{copy.row1s}</td>
                  <td className="px-4 py-3">{copy.row1t}</td>
                  <td className="px-4 py-3">{copy.row1g}</td>
                  <td className="px-4 py-3">{copy.row1f}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{copy.row2s}</td>
                  <td className="px-4 py-3">{copy.row2t}</td>
                  <td className="px-4 py-3">{copy.row2g}</td>
                  <td className="px-4 py-3">{copy.row2f}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{copy.row3s}</td>
                  <td className="px-4 py-3">{copy.row3t}</td>
                  <td className="px-4 py-3">{copy.row3g}</td>
                  <td className="px-4 py-3">{copy.row3f}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">{copy.row4s}</td>
                  <td className="px-4 py-3">{copy.row4t}</td>
                  <td className="px-4 py-3">{copy.row4g}</td>
                  <td className="px-4 py-3">{copy.row4f}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            {copy.needDetails}{" "}
            <Link className="text-green-900 underline" href={`${prefix}/services`}>
              {copy.servicesLink}
            </Link>
            .
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: copy.step1,
              text: copy.step1txt,
              hint: copy.step1hint,
            },
            {
              step: "2",
              title: copy.step2,
              text: copy.step2txt,
              hint: copy.step2hint,
            },
            {
              step: "3",
              title: copy.step3,
              text: copy.step3txt,
              hint: copy.step3hint,
            },
          ].map((b) => (
            <div
              key={b.step}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"
            >
              <div className="text-green-900 font-extrabold text-3xl">{b.step}</div>
              <h3 className="text-xl font-semibold mt-2">{b.title}</h3>
              <p className="mt-2 text-gray-700">{b.text}</p>
              <div className="mt-3 text-xs text-gray-500">{b.hint}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values + Inclusion */}
      <section className="bg-white border-y">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900">
                {copy.values}
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong>{it ? "Chiarezza:" : "Clarity:"}</strong> {copy.clarity.replace(/.*:\s*/,"")}
                </li>
                <li>
                  <strong>{it ? "Correttezza:" : "Fairness:"}</strong>{" "}
                  {copy.fairness.replace(/.*:\s*/,"")}
                </li>
                <li>
                  <strong>{it ? "Cura:" : "Care:"}</strong> {copy.care.replace(/.*:\s*/,"")}
                </li>
                <li>
                  <strong>{it ? "Privacy:" : "Privacy:"}</strong>{" "}
                  {copy.privacy.replace(/.*:\s*/,"")}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900">
                {copy.inclusion}
              </h2>
              <p className="mt-4">{copy.inclusionP}</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>{copy.incl1}</li>
                <li>{copy.incl2}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-white border-y">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            {copy.glossary}
          </h2>
          <div className="mt-5 grid md:grid-cols-2 gap-6">
            {(it
              ? [
                  {
                    term: "AIRE",
                    def: "Anagrafe degli Italiani Residenti all’Estero — l’anagrafe degli italiani all’estero. Tienila aggiornata per accedere ai servizi consolari.",
                  },
                  {
                    term: "CIE",
                    def: "Carta d’Identità Elettronica. Usata per l’identificazione e alcuni servizi digitali.",
                  },
                  {
                    term: "SPID",
                    def: "Identità digitale per i servizi pubblici italiani. In pratica: login sicuro per i portali della PA.",
                  },
                  {
                    term: "NIN",
                    def: "National Insurance Number (UK). Serve per lavorare e pagare tasse.",
                  },
                  {
                    term: "FAST-IT",
                    def: "Portale consolare per AIRE e altri servizi. Non sempre “fast”, ma ti aiutiamo noi.",
                  },
                  {
                    term: "GHIC",
                    def: "UK Global Health Insurance Card per cure necessarie nell’UE.",
                  },
                ]
              : [
                  {
                    term: "AIRE",
                    def: "Anagrafe degli Italiani Residenti all’Estero — the registry of Italians living abroad. Keep it updated to access consular services.",
                  },
                  {
                    term: "CIE",
                    def: "Carta d’Identità Elettronica — Italian electronic ID card. Often used for ID and some digital services.",
                  },
                  {
                    term: "SPID",
                    def: "Digital identity login for Italian public services. Think ‘secure login’ for government portals.",
                  },
                  {
                    term: "NIN",
                    def: "National Insurance Number (UK). Needed for work/taxes. It’s like a tax ID.",
                  },
                  {
                    term: "FAST-IT",
                    def: "Italian consular online portal for AIRE and other services. Not fast by name only — we’ll help you through it.",
                  },
                  {
                    term: "GHIC",
                    def: "UK Global Health Insurance Card for state-provided medically necessary healthcare in the EU.",
                  },
                ]
            ).map((g) => (
              <div key={g.term} className="rounded-2xl border border-gray-200 p-5">
                <div className="font-semibold text-green-900">{g.term}</div>
                <div className="text-gray-700 mt-1">{g.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (visible content) */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
          {copy.faqs}
        </h2>

        {(it
          ? [
              {
                q: "Quali servizi offre Resinaro?",
                a: "Passaporti italiani, CIE, National Insurance Number, iscrizione AIRE, orientamento casa e segnalazione servizi di salute mentale.",
              },
              {
                q: "Aiutate solo gli italiani?",
                a: "No. Supportiamo italiani e tutte le persone migranti che vivono nel Regno Unito.",
              },
              {
                q: "I prezzi sono trasparenti?",
                a: "Sì. Tariffe chiare senza costi nascosti, e spieghiamo cosa è incluso prima.",
              },
              {
                q: "Sostituite consolati o NHS?",
                a: "No. Ti aiutiamo a preparare e orientarti. Decisioni e appuntamenti sono degli enti competenti.",
              },
              {
                q: "Quanto è veloce 'veloce'?",
                a: "Di solito rispondiamo entro 48 ore; se i tempi del consolato sono il collo di bottiglia, te lo diciamo.",
              },
            ]
          : [
              {
                q: "What services does Resinaro provide?",
                a: "Italian passports, CIE, National Insurance numbers, AIRE, housing guidance, and mental health signposting.",
              },
              {
                q: "Do you only help Italians?",
                a: "No. We support Italians and all migrants living in the UK.",
              },
              {
                q: "Are your prices transparent?",
                a: "Yes. Clear rates, no hidden fees, and we explain what's included.",
              },
              {
                q: "Do you replace consulates or the NHS?",
                a: "No. We help you navigate and prepare. Decisions and appointments are made by the authority.",
              },
              {
                q: "How fast is ‘fast’?",
                a: "We typically reply within 48 hours and will call out external bottlenecks.",
              },
            ]
        ).map((item, i) => (
          <details
            key={i}
            className="mb-3 bg-white rounded-lg border border-neutral-200 p-4"
          >
            <summary className="font-semibold cursor-pointer">{item.q}</summary>
            <p className="mt-2 text-sm text-gray-700">{item.a}</p>
          </details>
        ))}

        <div className="mt-6 text-sm text-gray-600">
          {copy.faqContact}
          <Link href={`${prefix}/contact`} className="text-green-900 underline">
            {copy.contactUs}
          </Link>
          .
        </div>
      </section>

      {/* Accessibility & compliance footnote */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-green-900">
            {copy.accessTitle}
          </h3>
          <p className="mt-2 text-gray-700">{copy.accessP1}</p>
          <p className="mt-2 text-sm text-gray-600">
            {copy.accessP2}
            <Link href={`${prefix}/privacy-policy`} className="text-green-900 underline">
              {copy.privacyPolicy}
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
