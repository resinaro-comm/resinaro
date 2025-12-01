// src/app/[locale]/community/bureaucracy-guides/italian-cie-id-card-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

const BASE_URL = "https://www.resinaro.com";

// Shared descriptions
const DESCRIPTION_EN =
  "Complete guide to the Italian Electronic ID Card (CIE) from the UK: who can apply, required documents, how to book, fingerprints, minors, fees, and how to use the CIE for digital services (CIE ID/SPID-style access).";

const DESCRIPTION_IT =
  "Guida completa alla Carta d’Identità Elettronica italiana (CIE) dal Regno Unito: chi può richiederla, documenti necessari, prenotazione, impronte, minori, costi e come usare la CIE per i servizi digitali (accesso tipo SPID/CIE ID).";

const TITLE_EN =
  "Italian Electronic ID Card (CIE) in the UK (2025): Eligibility, Documents, Booking & Uses";
const TITLE_IT =
  "Carta d’Identità Elettronica (CIE) nel Regno Unito (2025): requisiti, documenti, prenotazione & usi";

// ---- Dynamic metadata per locale ----
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isIt = locale === "it";
  const title = isIt ? TITLE_IT : TITLE_EN;
  const description = isIt ? DESCRIPTION_IT : DESCRIPTION_EN;

  const url = `${BASE_URL}/${locale}/community/bureaucracy-guides/italian-cie-id-card-uk`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: "/community/bureaucracy-guides/italian-cie-id-card-uk",
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: ["/images/cie-hero-3840x1280.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cie-hero-3840x1280.png"],
    },
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const isIt = locale === "it";
  const readMinutes = 18;
  const lastUpdatedIso = "2025-11-16";
  const lastUpdatedLabel = isIt ? "nov 2025" : "Nov 2025";

  // ---- Localised copy ----
  const copy = {
    heroKicker: isIt ? "Guida gratuita della community" : "Free community guide",
    heroTitle: isIt ? TITLE_IT : TITLE_EN,
    heroIntro: isIt
      ? "Cos’è la CIE, chi può richiederla dal Regno Unito, quali documenti servono, come funziona l’appuntamento al consolato e come usare CIE ID per i servizi digitali italiani."
      : "What the CIE is, who can apply from the UK, which documents you need, how the consular appointment works, and how to use CIE ID for Italian digital services.",
    heroPrimaryCta: isIt
      ? "Apri la checklist documenti"
      : "Open document checklist",
    heroSecondaryCta: isIt
      ? "Scopri gli usi digitali (CIE ID)"
      : "See digital uses (CIE ID)",
    onThisPage: isIt ? "In questa pagina" : "On this page",

    // Section titles
    secWhatWhereTitle: isIt
      ? "1. Cos’è la CIE e dove si richiede dal Regno Unito?"
      : "1. What is the CIE and where do you apply from the UK?",
    secWhoTitle: isIt ? "2. Chi può richiederla?" : "2. Who can apply?",
    secCompareTitle: isIt
      ? "3. CIE vs passaporto (confronto rapido)"
      : "3. CIE vs passport (quick comparison)",
    secChecklistTitle: isIt
      ? "4. Checklist documenti (adulti)"
      : "4. Required documents (adults)",
    secMinorsTitle: isIt ? "5. Minori (under 18)" : "5. Minors (under 18)",
    secBookingTitle: isIt
      ? "6. Prenotazione & giorno dell’appuntamento"
      : "6. Booking & appointment day",
    secUsesTitle: isIt
      ? "7. Usi pratici della CIE (ID in UE & servizi digitali)"
      : "7. Practical uses of the CIE (EU ID & digital services)",
    secIssuesTitle: isIt
      ? "8. Problemi comuni (e come risolverli)"
      : "8. Common issues (and fixes)",
    secLinksTitle: isIt
      ? "9. Link ufficiali & altre guide Resinaro"
      : "9. Official links & more Resinaro guides",
    secFaqTitle: isIt ? "10. Domande frequenti" : "10. FAQs",

    // Sub copy
    whatWhereIntro: isIt
      ? "La Carta d’Identità Elettronica (CIE) è il documento di identità elettronico italiano. Per chi vive nel Regno Unito, di solito si richiede al consolato competente, se sei registrato correttamente all’AIRE."
      : "The Italian Electronic ID Card (CIE) is Italy’s electronic identity document. If you live in the UK, you normally apply at the consulate responsible for your area, once your AIRE registration is correct.",
    consulateCardTitle: isIt
      ? "Quale consolato segue la tua zona?"
      : "Which consulate covers you?",
    consulateCardText: isIt
      ? "In linea generale: Londra (gran parte di Inghilterra & Galles), Manchester (Nord & parte delle Midlands), Edimburgo (Scozia & Irlanda del Nord). Controlla sempre la mappa aggiornata sul sito ufficiale."
      : "Broadly: London (most of England & Wales), Manchester (North of England & parts of the Midlands), Edinburgh (Scotland & Northern Ireland). Always double-check the latest map on your consulate’s site.",
    aireCalloutTitle: isIt
      ? "Prima AIRE, poi CIE"
      : "AIRE first, CIE second",
    aireCalloutBody: isIt
      ? "Quasi tutti i consolati richiedono che la tua iscrizione AIRE e il tuo indirizzo UK siano corretti prima di accettare la domanda CIE. Se non sei sicuro, sistema prima AIRE."
      : "Almost all consulates expect your AIRE registration and UK address to be correct before they’ll process a CIE application. If you’re not sure, fix AIRE first.",
    aireCalloutLink1: isIt
      ? "AIRE dal Regno Unito (2025)"
      : "AIRE from the UK (2025)",
    aireCalloutLink2: isIt
      ? "Aggiornare l’AIRE dal Regno Unito"
      : "AIRE updates from the UK",

    whoListIntro: isIt
      ? "In generale, può richiedere la CIE chi:"
      : "In general, you can apply for the CIE if you:",
    whoLi1: isIt
      ? "è cittadino/a italiano/a regolarmente iscritto/a all’AIRE presso il consolato competente per il proprio indirizzo nel Regno Unito;"
      : "is an Italian citizen correctly registered with AIRE at the consulate covering your UK address;",
    whoLi2: isIt
      ? "è adulto o minorenne (per i minori serve quasi sempre il consenso dei genitori);"
      : "is an adult or minor (minors usually need parental consent);",
    whoLi3: isIt
      ? "non ha situazioni aperte su trascrizioni (nascita, matrimonio, divorzio) che il consolato richiede di sistemare prima."
      : "doesn’t have unresolved vital registrations (birth, marriage, divorce) that the consulate asks you to fix first.",

    compareFeature: isIt ? "Caratteristica" : "Feature",
    compareCie: isIt ? "CIE (Carta d’Identità Elettronica)" : "CIE (Electronic ID Card)",
    comparePassport: isIt ? "Passaporto" : "Passport",

    checklistIntro: isIt
      ? "Le richieste concrete variano da consolato a consolato; confronta sempre questa tabella con l’elenco ufficiale sul loro sito."
      : "Exact requirements vary by consulate; always compare this table with the official list on your consulate’s website.",
    checklistCalloutTitle: isIt
      ? "AIRE o prova di indirizzo difficili?"
      : "Struggling with AIRE or proof of address?",
    checklistCalloutBody: isIt
      ? "Se ti sei appena trasferito e non hai ancora bollette, la guida su prova di indirizzo senza bollette (2025) spiega documenti alternativi e modelli da usare."
      : "If you’ve just moved and don’t have bills yet, our guide on proof of address without bills (2025) walks through alternative documents and templates you can use.",

    minorsIntro: isIt
      ? "Per i minori le regole sono più rigide. Organizzati per tempo, soprattutto se uno dei genitori non può presentarsi."
      : "Rules are stricter for minors. Plan ahead, especially if one parent cannot attend.",
    bookingIntro: isIt
      ? "La maggior parte dei consolati usa Prenot@Mi per le prenotazioni CIE. Il flusso tipico:"
      : "Most consulates now use Prenot@Mi for CIE bookings. The usual flow:",
    bookingLi1: isIt
      ? "crei un account personale con i tuoi dati e la tua email;"
      : "create a personal account with your details and email;",
    bookingLi2: isIt
      ? "selezioni il consolato competente e il servizio “Carta d’Identità” o simile;"
      : "select your consulate and the “Carta d’Identità / ID card” service (or similar);",
    bookingLi3: isIt
      ? "scegli data/ora e confermi la prenotazione (alcuni post chiedono conferma via email);"
      : "choose a date/time and confirm the booking (some posts also require email confirmation);",
    bookingLi4: isIt
      ? "salvi una schermata o stampa della prenotazione e delle email ricevute."
      : "save a screenshot or print of the booking page and any confirmation emails.",

    bookingDayBefore: isIt
      ? "Prima di uscire di casa"
      : "Before you leave home",
    bookingDayDuring: isIt
      ? "Al consolato"
      : "At the consulate",
    bookingDayAfter: isIt
      ? "Dopo l’appuntamento"
      : "After the appointment",

    usesIntro: isIt
      ? "La CIE non è solo una tessera fisica: apre anche la porta all’identità digitale per i servizi pubblici italiani."
      : "The CIE is more than just a plastic card: it also unlocks digital identity for Italian public services.",
    usesBul1: isIt
      ? "Documento di identità in Italia e in diversi Paesi UE/Schengen (da verificare secondo le regole locali)."
      : "Identity document in Italy and many EU/Schengen countries (always check local rules).",
    usesBul2: isIt
      ? "Accesso ai portali della PA italiana con CIE ID (alternativa o complemento a SPID)."
      : "Login to Italian public-sector websites with CIE ID (an alternative or complement to SPID).",
    usesBul3: isIt
      ? "Supporto per pratiche bancarie, lavoro e affitto quando è richiesto un documento italiano aggiornato."
      : "Useful for banking, work and renting when an up-to-date Italian ID document is requested.",

    issuesIntro: isIt
      ? "Ecco alcuni problemi ricorrenti che vediamo e come di solito vengono gestiti:"
      : "Here are common problems we see and how they’re usually handled:",

    linksOfficialTitle: isIt
      ? "Link ufficiali"
      : "Official links",
    linksGuidesTitle: isIt
      ? "Altre guide Resinaro"
      : "More Resinaro guides",

    ctaSupportText: isIt
      ? "Vuoi un controllo personalizzato dei documenti CIE, dello stato AIRE o delle opzioni di prenotazione?"
      : "Want personalised help checking your CIE documents, AIRE status or booking options?",
    ctaSupportBtn: isIt
      ? "Ottieni supporto per CIE/passaporto →"
      : "Get CIE/passport support →",
    ctaContactBtn: isIt
      ? "Parla con il team Resinaro"
      : "Talk to the Resinaro team",
    ctaDisclaimer: isIt
      ? "Siamo un servizio indipendente, non un consolato. Ti aiutiamo a prepararti e a capire il processo; le decisioni finali restano sempre alle autorità italiane."
      : "We’re an independent service, not a consulate. We help you prepare and understand the process; final decisions always rest with the Italian authorities.",
  };

  // ---- JSON-LD ----
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isIt
          ? "Posso avere sia CIE che passaporto?"
          : "Can I have both CIE and passport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isIt
            ? "Sì: moltissime persone mantengono sia CIE sia passaporto. La CIE è ottima come documento di identità e per i servizi digitali; il passaporto resta il documento principale per i viaggi internazionali."
            : "Yes — many Italians keep both. The CIE is great as an ID and for digital services; the passport remains your primary document for wider international travel.",
        },
      },
      {
        "@type": "Question",
        name: isIt ? "La sola CIE basta per viaggiare?" : "Is CIE enough for travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isIt
            ? "Spesso è sufficiente per viaggiare in Italia e in vari Paesi UE/Schengen, ma devi sempre controllare le regole di ingresso del Paese e della compagnia aerea. Per la maggior parte dei viaggi extra-UE serve il passaporto."
            : "Often it’s enough for travel within Italy and many EU/Schengen countries, but you must always check the airline and destination entry rules. For most travel outside the EU you will need a passport.",
        },
      },
      {
        "@type": "Question",
        name: isIt
          ? "Quanto tempo ci mette la CIE dal Regno Unito?"
          : "How long does the CIE take from the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isIt
            ? "I tempi variano da consolato a consolato e dal metodo di consegna. In molti casi servono alcune settimane dal giorno dell’appuntamento, ma controlla sempre le indicazioni aggiornate del tuo consolato."
            : "Processing time varies by consulate and delivery method. In many cases it takes a few weeks from the appointment date, but always check your consulate’s updated guidance.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isIt ? TITLE_IT : TITLE_EN,
    description: isIt ? DESCRIPTION_IT : DESCRIPTION_EN,
    image: `${BASE_URL}/images/cie-hero-3840x1280.png`,
    datePublished: "2025-10-01",
    dateModified: lastUpdatedIso,
    author: {
      "@type": "Organization",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
      },
    },
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${locale}/community/bureaucracy-guides/italian-cie-id-card-uk`,
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isIt
      ? "Richiedere la CIE dal Regno Unito (passaggi principali)"
      : "Apply for the Italian CIE from the UK (key steps)",
    description: isIt
      ? "Tre passaggi chiari per controllare AIRE, preparare i documenti e presentarsi all’appuntamento CIE al consolato dal Regno Unito."
      : "Three clear steps to check AIRE, prepare documents, and attend your CIE appointment at the consulate from the UK.",
    step: [
      {
        "@type": "HowToStep",
        name: isIt ? "Controlla consolato e AIRE" : "Check consulate & AIRE",
        text: isIt
          ? "Verifica quale consolato copre il tuo indirizzo nel Regno Unito e controlla che l’iscrizione AIRE (indirizzo compreso) sia corretta tramite FAST IT."
          : "Confirm which Italian consulate covers your UK address and check that your AIRE record (including address) is correct via FAST IT.",
      },
      {
        "@type": "HowToStep",
        name: isIt ? "Prepara i documenti" : "Prepare documents",
        text: isIt
          ? "Raccogli documento italiano, prova di indirizzo UK, foto biometriche, eventuali certificati per cambi di nome e i moduli richiesti dal tuo consolato."
          : "Gather your Italian ID document, UK proof of address, biometric photos, any certificates for name changes, and the forms required by your consulate.",
      },
      {
        "@type": "HowToStep",
        name: isIt ? "Prenota e partecipa" : "Book & attend",
        text: isIt
          ? "Prenota tramite Prenot@Mi, presenta originali e copie all’appuntamento e segui le istruzioni per il pagamento e la consegna della CIE."
          : "Book via Prenot@Mi, bring originals and copies to the appointment, and follow instructions for payment and CIE delivery.",
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
        name: isIt ? "Community" : "Community",
        item: `${BASE_URL}/${locale}/community`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isIt ? "Guide burocrazia" : "Bureaucracy guides",
        item: `${BASE_URL}/${locale}/community?category=bureaucracy-guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isIt
          ? "Carta d’Identità Elettronica (CIE) nel Regno Unito (2025)"
          : "Italian Electronic ID Card (CIE) in the UK (2025)",
        item: `${BASE_URL}/${locale}/community/bureaucracy-guides/italian-cie-id-card-uk`,
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[56vh] md:min-h-[62vh] isolate border-b border-black/5">
        <Image
          src="/images/cie-hero-3840x1280.png"
          alt={
            isIt
              ? "Carta d’Identità Elettronica italiana (CIE) su una scrivania con documenti UK e foto biometriche"
              : "Italian Electronic ID Card (CIE) on a desk with UK documents and biometric photos"
          }
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="py-16 md:py-20 lg:py-24">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                <span className="inline-flex items-center rounded-full bg-emerald-600/90 px-3 py-1 font-semibold">
                  {copy.heroKicker}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 ring-1 ring-white/20">
                  {isIt ? "Aggiornato " : "Updated "} {lastUpdatedLabel}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 ring-1 ring-white/20">
                  ~{readMinutes} {isIt ? "min lettura" : "min read"}
                </span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                {copy.heroTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-white/90">
                {copy.heroIntro}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#checklist"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/90"
                >
                  {copy.heroPrimaryCta}
                </a>
                <a
                  href="#uses"
                  className="inline-flex items-center rounded-xl bg-black/30 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-black/45"
                >
                  {copy.heroSecondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-10 bg-gradient-to-b from-transparent to-[#F9F6F1]" />
      </section>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 pb-20">
        {/* Intro card */}
        <section className="relative z-20 -mt-10 md:-mt-12">
          <div className="rounded-2xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5 shadow-md p-5 md:p-6">
            <p className="leading-relaxed">
              {isIt ? (
                <>
                  Questa pagina si concentra su{" "}
                  <strong>
                    requisiti, documenti e funzionamento dell’appuntamento CIE
                  </strong>{" "}
                  per chi vive nel Regno Unito. È una{" "}
                  <strong>risorsa informativa</strong> e non sostituisce le
                  istruzioni ufficiali del consolato.
                </>
              ) : (
                <>
                  This page focuses on{" "}
                  <strong>
                    requirements, documents and how the CIE appointment works
                  </strong>{" "}
                  for people living in the UK. It’s{" "}
                  <strong>informational only</strong> and doesn’t replace
                  official consulate instructions.
                </>
              )}
            </p>
            <p className="mt-3 text-sm text-gray-700">
              {isIt ? (
                <>
                  Hai bisogno di aiuto pratico per controllare i documenti o
                  trovare un appuntamento? Offriamo un{" "}
                  <Link
                    href={p(locale, "/services/passport")}
                    className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  >
                    servizio di supporto CIE/passaporto
                  </Link>{" "}
                  con prezzi chiari in anticipo.
                </>
              ) : (
                <>
                  Need hands-on help reviewing your documents or finding an
                  appointment? We offer an{" "}
                  <Link
                    href={p(locale, "/services/passport")}
                    className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  >
                    optional CIE/passport support service
                  </Link>{" "}
                  with clear, upfront pricing.
                </>
              )}
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav
          aria-label={copy.onThisPage}
          className="mt-8 mb-4 rounded-xl bg-white/80 backdrop-blur-sm ring-1 ring-black/5 p-4 text-sm"
        >
          <div className="font-semibold text-gray-800 mb-2">
            {copy.onThisPage}
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="hover:underline text-emerald-800" href="#what-where">
                {copy.secWhatWhereTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#who">
                {copy.secWhoTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#compare">
                {copy.secCompareTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#checklist">
                {copy.secChecklistTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#minors">
                {copy.secMinorsTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#booking">
                {copy.secBookingTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#uses">
                {copy.secUsesTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#issues">
                {copy.secIssuesTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#links">
                {copy.secLinksTitle}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#faqs">
                {copy.secFaqTitle}
              </a>
            </li>
          </ul>
        </nav>

        {/* ===== WHAT / WHERE ===== */}
        <section id="what-where" className="mt-10 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secWhatWhereTitle}
          </h2>
          <p className="leading-relaxed">{copy.whatWhereIntro}</p>

          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 md:col-span-2">
              <h3 className="font-semibold text-gray-900">
                {copy.consulateCardTitle}
              </h3>
              <p className="mt-2 text-gray-700">{copy.consulateCardText}</p>
            </div>
            <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 text-sm text-amber-900">
              <p className="font-semibold">{copy.aireCalloutTitle}</p>
              <p className="mt-1">
                {copy.aireCalloutBody}{" "}
                {isIt ? "Se ti serve una mano:" : "If you need support:"}
              </p>
              <p className="mt-2">
                •{" "}
                <Link
                  href={p(locale, "/community/aire-uk")}
                  className="underline underline-offset-4"
                >
                  {copy.aireCalloutLink1}
                </Link>
                <br />
                •{" "}
                <Link
                  href={p(
                    locale,
                    "/community/bureaucracy-guides/keep-aire-up-to-date-uk"
                  )}
                  className="underline underline-offset-4"
                >
                  {copy.aireCalloutLink2}
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHO CAN APPLY ===== */}
        <section id="who" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secWhoTitle}
          </h2>
          <p className="mb-3">{copy.whoListIntro}</p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-[15px]">
            <li>{copy.whoLi1}</li>
            <li>{copy.whoLi2}</li>
            <li>{copy.whoLi3}</li>
          </ul>
        </section>

        {/* ===== CIE VS PASSPORT ===== */}
        <section id="compare" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secCompareTitle}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>{copy.compareFeature}</th>
                  <th>{copy.compareCie}</th>
                  <th>{copy.comparePassport}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>{isIt ? "Uso principale" : "Main use"}</td>
                  <td>
                    {isIt
                      ? "Documento di identità in Italia/UE; alcuni viaggi in Europa."
                      : "ID in Italy/EU; some European travel."}
                  </td>
                  <td>
                    {isIt
                      ? "Viaggi internazionali e documentazione principale per l’estero."
                      : "International travel and main document abroad."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>{isIt ? "Servizi digitali" : "Digital services"}</td>
                  <td>
                    {isIt
                      ? "Sì, tramite CIE ID per molti portali della PA."
                      : "Yes, via CIE ID for many public-service portals."}
                  </td>
                  <td>{isIt ? "No." : "No."}</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>{isIt ? "Biometria" : "Biometrics"}</td>
                  <td>
                    {isIt
                      ? "Impronte e foto normalmente richieste (con eccezioni per i più piccoli)."
                      : "Fingerprints and photo usually required (with exceptions for young children)."}
                  </td>
                  <td>
                    {isIt
                      ? "Impronte e foto sempre richieste."
                      : "Fingerprints and photo always required."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>{isIt ? "Validità" : "Validity"}</td>
                  <td>
                    {isIt
                      ? "Adulti 10 anni; minori 5 anni; <3 anni: 3 anni."
                      : "Adults 10 years; minors 5 years; under-3s: 3 years."}
                  </td>
                  <td>
                    {isIt
                      ? "Adulti 10 anni; minori 5 anni."
                      : "Adults 10 years; minors 5 years."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>{isIt ? "Richiesta dal Regno Unito" : "Apply from the UK"}</td>
                  <td>
                    {isIt
                      ? "Presso il consolato competente, con AIRE aggiornata."
                      : "At the competent consulate, with AIRE up to date."}
                  </td>
                  <td>
                    {isIt
                      ? "Presso il consolato competente, con AIRE aggiornata."
                      : "At the competent consulate, with AIRE up to date."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== CHECKLIST (ADULTS) ===== */}
        <section id="checklist" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secChecklistTitle}
          </h2>
          <p className="mb-4">{copy.checklistIntro}</p>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">
                    {isIt ? "Documento" : "Item"}
                  </th>
                  <th>{isIt ? "Dettagli" : "Notes"}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Documento italiano" : "Italian ID / passport"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Passaporto o carta d’identità italiana attuale. In caso di documento scaduto o deteriorato, controlla le indicazioni del consolato."
                      : "Your current Italian passport or ID card. If it’s expired or damaged, check your consulate’s guidance."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>{isIt ? "Stato AIRE" : "AIRE status"}</strong>
                  </td>
                  <td>
                    {isIt
                      ? "Iscrizione AIRE aggiornata presso il consolato competente con indirizzo UK corretto (verificabile su FAST IT)."
                      : "AIRE registration updated at the correct consulate, with your UK address correctly recorded (check via FAST IT)."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Prova di indirizzo UK" : "UK proof of address"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Documento recente a tuo nome (o chiaramente collegato), ad esempio estratto conto bancario, bolletta o Council Tax, di solito negli ultimi mesi."
                      : "Recent document in your name (or clearly linked), for example bank statement, utility bill or council tax, usually dated within the last few months."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Foto biometriche" : "Biometric photos"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Normalmente 2 foto 35×45 mm, fondo chiaro, espressione neutra, senza riflessi sugli occhiali. Chiedi esplicitamente “foto biometriche per CIE/passaporto italiano”."
                      : "Typically 2 photos 35×45 mm, light background, neutral expression, no glare on glasses. Ask explicitly for “Italian CIE/passport biometric photos”. "}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Moduli consolari" : "Consular forms"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Moduli di domanda e informativa scaricati dal sito del consolato (stampati e firmati)."
                      : "Application and information forms downloaded from your consulate’s website, printed and signed."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>{isIt ? "Tariffa" : "Fee"}</strong>
                  </td>
                  <td>
                    {isIt
                      ? "Importo aggiornato secondo il tariffario consolare trimestrale, da pagare in GBP. Il metodo (carta, contanti, postal order) dipende dal consolato."
                      : "Amount set in the quarterly consular tariff table, payable in GBP. The method (card, cash, postal order) depends on your consulate."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Prova dell’appuntamento" : "Appointment proof"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Stampa o schermata della prenotazione su Prenot@Mi e di eventuali email di conferma."
                      : "Print-out or screenshot of your Prenot@Mi booking and any confirmation emails."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            {isIt ? (
              <>
                <strong>Cambi di cognome/nome</strong> (matrimonio, divorzio,
                deed poll) richiedono spesso certificati originali e che le
                variazioni siano già trascritte in Italia/AIRE. In caso di
                documento smarrito o rubato, il consolato può richiedere anche
                la denuncia alla polizia inglese e documenti aggiuntivi.
              </>
            ) : (
              <>
                <strong>Name or surname changes</strong> (marriage, divorce,
                deed poll) often require original certificates and for the
                change to be registered in Italy/AIRE first. If a document is
                lost or stolen, the consulate may also ask for a UK police
                report and extra ID.
              </>
            )}
          </p>

          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-sm text-sky-900">
            <p className="font-semibold">{copy.checklistCalloutTitle}</p>
            <p className="mt-1">
              {copy.checklistCalloutBody}{" "}
              <Link
                href={p(
                  locale,
                  "/community/proof-of-address-without-bills-2025"
                )}
                className="underline underline-offset-4"
              >
                {isIt
                  ? "Prova di indirizzo senza bollette (2025)"
                  : "Proof of address without bills (2025)"}
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ===== MINORS ===== */}
        <section id="minors" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secMinorsTitle}
          </h2>
          <p className="mb-4">{copy.minorsIntro}</p>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">
                    {isIt ? "Elemento" : "Item"}
                  </th>
                  <th>{isIt ? "Dettagli" : "Details"}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Consenso dei genitori" : "Parental consent"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Di solito entrambi i genitori devono firmare e/o presentarsi. Alcuni consolati accettano dichiarazioni notarili o rese in consolato se uno dei genitori non può essere presente."
                      : "Usually both parents must sign and/or attend. Some consulates accept notarised consent or consular declarations if one parent cannot be present."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Certificato di nascita" : "Birth certificate"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Estratto di nascita in forma estesa con i nomi dei genitori, soprattutto per prime emissioni o se i dati non risultano ancora completamente registrati in Italia."
                      : "Long-form birth certificate with parents’ names, especially for first issuance or where details are not fully registered in Italy."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt
                        ? "AIRE e trascrizioni"
                        : "AIRE & vital registrations"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Genitore/i italiano/i e figlio dovrebbero essere registrati correttamente all’AIRE, con nascita (e matrimonio/divorzio, se rilevanti) trascritti in Italia."
                      : "Italian parent(s) and child should be properly registered with AIRE, with birth (and marriage/divorce where relevant) transcribed in Italy."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>{isIt ? "Foto" : "Photos"}</strong>
                  </td>
                  <td>
                    {isIt
                      ? "2 foto biometriche (stesse specifiche degli adulti). Per neonati e bimbi piccoli, scegli un fotografo abituato alle foto per documenti."
                      : "2 biometric photos (same specs as adults). For babies and young children, use a photographer familiar with passport-style photos."}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Costo & validità" : "Fees & validity"}
                    </strong>
                  </td>
                  <td>
                    {isIt
                      ? "Importi diversi per fasce di età; la validità è di solito più breve rispetto agli adulti (3 o 5 anni). Controlla la tabella del consolato."
                      : "Fees differ by age group; validity is usually shorter than for adults (3 or 5 years). Check your consulate’s table."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            {isIt
              ? "Se i genitori sono separati o ci sono disposizioni di affidamento particolari, leggi con attenzione le istruzioni del consolato e considera tempi aggiuntivi per eventuali documenti di tribunale o consensi extra."
              : "If parents are separated or there are particular custody arrangements, read your consulate’s guidance carefully and allow extra time for any court or consent documents."}
          </p>
        </section>

        {/* ===== BOOKING & APPOINTMENT DAY ===== */}
        <section id="booking" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secBookingTitle}
          </h2>
          <p className="leading-relaxed">{copy.bookingIntro}</p>

          <ol className="mt-3 list-decimal list-inside space-y-1 text-sm text-gray-800">
            <li>{copy.bookingLi1}</li>
            <li>{copy.bookingLi2}</li>
            <li>{copy.bookingLi3}</li>
            <li>{copy.bookingLi4}</li>
          </ol>

          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800"
              >
                Prenot@Mi —{" "}
                {isIt ? "portale di prenotazione" : "booking portal"}
              </a>
            </li>
            <li>
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800"
              >
                FAST IT —{" "}
                {isIt
                  ? "AIRE & servizi consolari online"
                  : "AIRE & consular online services"}
              </a>
            </li>
          </ul>

          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/80 p-4 text-sm text-sky-900">
            <p className="font-semibold">
              {isIt
                ? "Slot sempre esauriti? Leggi la guida completa su Prenot@Mi"
                : "Slots always gone? Read the full Prenot@Mi guide"}
            </p>
            <p className="mt-1">
              {isIt ? "La nostra guida lunga " : "Our long-form "}
              <Link
                href={p(locale, "/community/prenotami-uk-guide")}
                className="underline underline-offset-4"
              >
                Prenot@Mi &amp; appuntamenti consolari nel Regno Unito (2025)
              </Link>{" "}
              {isIt
                ? "spiega i pattern di rilascio degli slot, come evitare blocchi dell’account e aspettative realistiche quando i calendari sembrano vuoti."
                : "explains slot-release patterns, how to avoid account blocks, and realistic expectations when calendars look empty."}
            </p>
          </div>

          {/* Appointment day breakdown */}
          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {copy.bookingDayBefore}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt
                    ? "Controlla di avere tutti gli originali e le copie nello stesso raccoglitore."
                    : "Check you have all originals and copies together in one folder."}
                </li>
                <li>
                  {isIt
                    ? "Porta il metodo di pagamento richiesto dal consolato."
                    : "Bring the payment method requested by your consulate."}
                </li>
                <li>
                  {isIt
                    ? "Arriva in anticipo: i controlli di sicurezza possono richiedere tempo."
                    : "Arrive early — security checks can take time."}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {copy.bookingDayDuring}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt
                    ? "Ingresso con controlli di sicurezza e registrazione in reception."
                    : "Entry with security checks and registration at reception."}
                </li>
                <li>
                  {isIt
                    ? "Verifica dei documenti allo sportello: se manca qualcosa, potrebbe servire un nuovo appuntamento."
                    : "Documents checked at the desk; missing items can mean a new appointment."}
                </li>
                <li>
                  {isIt
                    ? "Rilevazione impronte e foto (di solito per età 12+)."
                    : "Fingerprints and photo taken (usually age 12+)."}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {copy.bookingDayAfter}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt
                    ? "La CIE viene inviata per posta/corriere o resa disponibile per il ritiro, secondo le modalità del consolato."
                    : "The CIE is sent by post/courier or made available for collection, depending on the consulate."}
                </li>
                <li>
                  {isIt
                    ? "Conserva ricevute e numeri di tracking finché non hai la CIE in mano."
                    : "Keep receipts and tracking numbers until you have the card in hand."}
                </li>
                <li>
                  {isIt
                    ? "Controlla subito tutti i dati e segnala eventuali errori."
                    : "Check all personal details immediately and report any errors."}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== USES (CIE ID & MORE) ===== */}
        <section id="uses" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secUsesTitle}
          </h2>
          <p className="leading-relaxed">{copy.usesIntro}</p>

          <ul className="mt-3 list-disc list-inside space-y-1 text-sm md:text-[15px]">
            <li>{copy.usesBul1}</li>
            <li>{copy.usesBul2}</li>
            <li>{copy.usesBul3}</li>
          </ul>

          <p className="mt-4 text-sm">
            {isIt ? (
              <>
                Per usare la CIE online ti serve di solito uno smartphone con{" "}
                <strong>NFC</strong> e l’app{" "}
                <a
                  href="https://www.cartaidentita.interno.gov.it/cittadini/servizi-digitali/app-cie-id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-emerald-800"
                >
                  CIE ID
                </a>
                . Segui le istruzioni ufficiali per l’attivazione.
              </>
            ) : (
              <>
                To use the CIE online you usually need an{" "}
                <strong>NFC-enabled smartphone</strong> and the{" "}
                <a
                  href="https://www.cartaidentita.interno.gov.it/cittadini/servizi-digitali/app-cie-id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-emerald-800"
                >
                  CIE ID app
                </a>
                . Follow the official activation steps on the site.
              </>
            )}
          </p>
        </section>

        {/* ===== COMMON ISSUES ===== */}
        <section id="issues" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secIssuesTitle}
          </h2>
          <p className="mb-3 text-sm text-gray-800">{copy.issuesIntro}</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
            <li>
              <strong>{isIt ? "AIRE non aggiornata" : "AIRE not updated"}</strong>{" "}
              →{" "}
              {isIt
                ? "Aggiorna sempre prima tramite FAST IT e attendi conferma dal consolato prima di prenotare."
                : "Update via FAST IT first and wait for confirmation from the consulate before booking."}
            </li>
            <li>
              <strong>
                {isIt ? "Consolato sbagliato" : "Wrong jurisdiction"}
              </strong>{" "}
              →{" "}
              {isIt
                ? "Presenta domanda solo presso il consolato competente per il tuo indirizzo registrato."
                : "Apply only at the consulate responsible for your registered address."}
            </li>
            <li>
              <strong>
                {isIt ? "Foto non conformi" : "Photo specs wrong"}
              </strong>{" "}
              →{" "}
              {isIt
                ? "Chiedi espressamente foto biometriche 35×45 mm per documento italiano."
                : "Ask explicitly for 35×45 mm Italian biometric document photos."}
            </li>
            <li>
              <strong>
                {isIt ? "Consenso per minori incompleto" : "Minor consent issues"}
              </strong>{" "}
              →{" "}
              {isIt
                ? "Controlla le regole del tuo consolato: spesso servono firme di entrambi i genitori o atti notarili."
                : "Check your consulate’s rules: signatures from both parents or notarised documents are often needed."}
            </li>
            <li>
              <strong>
                {isIt
                  ? "Cambi di nome non registrati"
                  : "Name changes not registered"}
              </strong>{" "}
              →{" "}
              {isIt
                ? "Trascrivi prima matrimonio/divorzio/deed poll in Italia, poi richiedi la CIE con i dati aggiornati."
                : "Have marriage/divorce/deed-poll changes registered in Italy first, then apply for the CIE with updated details."}
            </li>
          </ol>
        </section>

        {/* ===== LINKS & RELATED GUIDES ===== */}
        <section id="links" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secLinksTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {copy.linksOfficialTitle}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>
                  <a
                    href="https://www.esteri.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "Ministero degli Affari Esteri (esteri.it)"
                      : "Italian Ministry of Foreign Affairs (esteri.it)"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://serviziconsolarionline.esteri.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-800"
                  >
                    FAST IT — AIRE &amp;{" "}
                    {isIt ? "servizi consolari online" : "online consular services"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://prenotami.esteri.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-800"
                  >
                    Prenot@Mi —{" "}
                    {isIt ? "portale di prenotazione" : "booking portal"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cartaidentita.interno.gov.it/cittadini/servizi-digitali/app-cie-id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-800"
                  >
                    {isIt ? "App ufficiale CIE ID" : "Official CIE ID app page"}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {copy.linksGuidesTitle}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>
                  <Link
                    href={p(
                      locale,
                      "/community/bureaucracy-guides/italian-passport-uk-docs-prep"
                    )}
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "Passaporto italiano nel Regno Unito (2025): documenti & preparazione"
                      : "Italian passport in the UK (2025): documents & preparation"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={p(locale, "/community/aire-uk")}
                    className="underline text-emerald-800"
                  >
                    {copy.aireCalloutLink1}
                  </Link>
                </li>
                <li>
                  <Link
                    href={p(
                      locale,
                      "/community/proof-of-address-without-bills-2025"
                    )}
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "Prova di indirizzo senza bollette (2025)"
                      : "Proof of address without bills (2025)"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={p(locale, "/community/prenotami-uk-guide")}
                    className="underline text-emerald-800"
                  >
                    Prenot@Mi &amp;{" "}
                    {isIt
                      ? "appuntamenti consolari Regno Unito (2025)"
                      : "Italian consular appointments UK (2025)"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== FAQS ===== */}
        <section id="faqs" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {copy.secFaqTitle}
          </h2>

          {/* Q1 */}
          <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Posso avere sia CIE che passaporto?"
                : "Can I have both CIE and passport?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt
                ? "Sì. Molte persone mantengono entrambi: la CIE è comoda come documento di identità in Europa e per l’accesso digitale; il passaporto resta il documento principale per i viaggi internazionali."
                : "Yes. Many people keep both: the CIE is convenient as an ID in Europe and for digital login; the passport remains your main document for wider international travel."}
            </p>
          </details>

          {/* Q2 */}
          <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt ? "La sola CIE basta per viaggiare?" : "Is CIE enough for travel?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt
                ? "Per molti viaggi in Italia e in alcuni Paesi UE/Schengen può bastare, ma devi sempre verificare le regole di ingresso del Paese e della compagnia aerea. Per la maggior parte dei Paesi extra UE serve il passaporto."
                : "For many trips to Italy and some EU/Schengen countries it may be enough, but you must always check the airline and destination rules. For most non-EU destinations, a passport is required."}
            </p>
          </details>

          {/* Q3 */}
          <details className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Quanto tempo ci mette la CIE dal Regno Unito?"
                : "How long does the CIE take from the UK?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt
                ? "Dipende dal consolato e dal metodo di consegna. In molti casi servono alcune settimane dal giorno dell’appuntamento; se ci sono verifiche aggiuntive o picchi di richieste, i tempi possono allungarsi."
                : "It depends on the consulate and delivery method. In many cases it takes a few weeks from the appointment date; if additional checks are needed or demand is high, it can take longer."}
            </p>
          </details>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-gray-800">{copy.ctaSupportText}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={p(locale, "/services/passport")}
                className="inline-flex items-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-800"
              >
                {copy.ctaSupportBtn}
              </Link>
              <Link
                href={p(locale, "/contact")}
                className="inline-flex items-center rounded-xl border border-emerald-700/60 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
              >
                {copy.ctaContactBtn}
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-600">{copy.ctaDisclaimer}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
