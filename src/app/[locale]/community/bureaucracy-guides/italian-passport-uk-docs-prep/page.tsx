// src/app/[locale]/community/bureaucracy-guides/italian-passport-uk-docs-prep/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

const DESCRIPTION_EN =
  "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.";

const DESCRIPTION_IT =
  "Checklist chiara e aggiornata per rinnovare o richiedere il passaporto italiano in UK. Documenti, minori, costi reali, consigli di prenotazione e opzioni di aiuto.";

const HERO_IMAGE = "/images/italian-passport-uk-hero-3840x1280.png";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;
  const isIt = locale === "it";

  const title = isIt
    ? "Passaporto italiano nel Regno Unito (2025): documenti, preparazione e cosa aspettarsi"
    : "Italian Passport in the UK (2025): Documents, Preparation & What to Expect";

  const description = isIt ? DESCRIPTION_IT : DESCRIPTION_EN;

  const baseUrl = "https://www.resinaro.com";
  const path = `/${locale}/community/bureaucracy-guides/italian-passport-uk-docs-prep`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      type: "article",
      images: [HERO_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [HERO_IMAGE],
    },
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const isIt = locale === "it";

  const readMinutes = 17;
  const lastUpdatedIso = "2025-11-16";
  const lastUpdatedLabel = isIt ? "novembre 2025" : "Nov 2025";

  const heroTitle = isIt
    ? "Passaporto italiano nel Regno Unito (2025): documenti, preparazione e cosa aspettarsi"
    : "Italian Passport in the UK (2025): Documents, Preparation & What to Expect";

  const heroSubtitle = isIt
    ? "Preparati una volta sola ed evita visite ripetute. Usa le checklist e il walkthrough qui sotto per arrivare pront* all’appuntamento consolare."
    : "Prepare once, avoid repeat visits. Use the checklists and walkthrough below to get your consular appointment right the first time.";

  const badgeFree = isIt ? "Guida gratuita della community" : "Free community guide";
  const updatedChip = isIt ? "Aggiornato" : "Updated";
  const minReadLabel = isIt ? "min di lettura" : "min read";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isIt
      ? [
          {
            "@type": "Question",
            name: "Posso rinnovare il passaporto per posta?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No — i passaporti italiani sono biometrici e di solito richiedono un appuntamento di persona per rilevare le impronte (con poche eccezioni per alcuni minori).",
            },
          },
          {
            "@type": "Question",
            name: "Devo essere iscritto all’AIRE per rinnovare?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Sì, in genere si richiede che tu sia correttamente iscritto all’AIRE presso il consolato competente prima di prenotare.",
            },
          },
          {
            "@type": "Question",
            name: "Ho perso il vecchio passaporto — cosa faccio?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Fai una denuncia alla polizia locale e portala all’appuntamento. Porta anche eventuali copie o scansioni del vecchio passaporto, se le hai.",
            },
          },
          {
            "@type": "Question",
            name: "Con quanto anticipo dovrei prenotare?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Gli slot possono essere pochi. Prepara prima i documenti, poi prenota appena puoi e tieni d’occhio eventuali cancellazioni dell’ultimo minuto.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "Can I renew my passport by post?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No—Italian passports are biometric and usually require an in-person appointment to take fingerprints (with limited exceptions for some minors).",
            },
          },
          {
            "@type": "Question",
            name: "Do I need AIRE to renew?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, you are expected to be correctly registered with AIRE at your consulate before booking.",
            },
          },
          {
            "@type": "Question",
            name: "My old passport is lost—what now?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "File a police report and bring it to your appointment. Bring any copy/scan of your previous passport if available.",
            },
          },
          {
            "@type": "Question",
            name: "How early should I book?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Slots can be scarce. Prepare your documents first, then book as soon as you can and watch for last-minute cancellations.",
            },
          },
        ],
  };

  const description = isIt ? DESCRIPTION_IT : DESCRIPTION_EN;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: heroTitle,
    description,
    image: `https://www.resinaro.com${HERO_IMAGE}`,
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
        url: "https://www.resinaro.com/icon.svg",
      },
    },
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.resinaro.com/${locale}/community/bureaucracy-guides/italian-passport-uk-docs-prep`,
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isIt
      ? "Come preparare i documenti per un appuntamento passaporto in UK"
      : "Prepare documents for an Italian passport appointment in the UK",
    description: isIt
      ? "Tre passi chiari per preparare i documenti, prenotare e presentarti ad un appuntamento per il passaporto italiano dal Regno Unito."
      : "Three clear steps to prepare documents, book, and attend an Italian passport appointment from the UK.",
    step: isIt
      ? [
          {
            "@type": "HowToStep",
            name: "Controlla consolato e AIRE",
            text:
              "Verifica quale consolato italiano copre il tuo indirizzo nel Regno Unito e che la tua iscrizione AIRE sia corretta.",
          },
          {
            "@type": "HowToStep",
            name: "Raccogli i documenti",
            text:
              "Raccogli documento italiano, prova di indirizzo, foto biometriche, dati AIRE e certificati per eventuali cambi di nome o di stato familiare.",
          },
          {
            "@type": "HowToStep",
            name: "Prenota e presentati",
            text:
              "Prenota tramite Prenot@Mi, porta gli originali all’appuntamento e segui le istruzioni del consolato per pagamento e consegna del passaporto.",
          },
        ]
      : [
          {
            "@type": "HowToStep",
            name: "Check consulate & AIRE",
            text:
              "Confirm which Italian consulate covers your UK address and that your AIRE record is correctly registered there.",
          },
          {
            "@type": "HowToStep",
            name: "Assemble documents",
            text:
              "Gather ID, proof of address, biometric photos, AIRE details and any supporting certificates for name or family changes.",
          },
          {
            "@type": "HowToStep",
            name: "Book & attend",
            text:
              "Book via Prenot@Mi, bring originals to the appointment, and follow consulate instructions for payment and passport delivery.",
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
        name: "Community",
        item: `https://www.resinaro.com/${locale}/community`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isIt ? "Guide burocratiche" : "Bureaucracy guides",
        item: `https://www.resinaro.com/${locale}/community?category=bureaucracy-guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: heroTitle,
        item: `https://www.resinaro.com/${locale}/community/bureaucracy-guides/italian-passport-uk-docs-prep`,
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
          src={HERO_IMAGE}
          alt={
            isIt
              ? "Documenti per la domanda di passaporto italiano su una scrivania, con prova di indirizzo UK e foto biometriche"
              : "Italian passport application documents on a desk with UK proof of address and biometric photos"
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
                  {badgeFree}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 ring-1 ring-white/20">
                  {updatedChip} {lastUpdatedLabel}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 ring-1 ring-white/20">
                  ~{readMinutes} {minReadLabel}
                </span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                {heroTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-white/90">
                {heroSubtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#checklist"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/90"
                >
                  {isIt
                    ? "Apri la checklist documenti"
                    : "Open document checklist"}
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center rounded-xl bg-black/30 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-black/45"
                >
                  {isIt
                    ? "Consigli di prenotazione (Prenot@Mi)"
                    : "Booking tips (Prenot@Mi)"}
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
                  Questa pagina è dedicata a{" "}
                  <strong>
                    documenti, preparazione e basi del giorno
                    dell’appuntamento
                  </strong>{" "}
                  per cittadinɜ italianɜ che vivono nel Regno Unito. È{" "}
                  <strong>solo informativa</strong> e non sostituisce mai le
                  istruzioni ufficiali del consolato.
                </>
              ) : (
                <>
                  This page focuses on{" "}
                  <strong>documents, preparation and appointment-day basics</strong>{" "}
                  for Italian citizens living in the UK. It’s{" "}
                  <strong>informational only</strong> and doesn’t replace
                  official consulate instructions.
                </>
              )}
            </p>
            <p className="mt-3 text-sm text-gray-700">
              {isIt ? (
                <>
                  Hai bisogno di aiuto pratico per controllare il fascicolo o
                  trovare un appuntamento? Offriamo un{" "}
                  <Link
                    href={p(locale, "/services/passport")}
                    className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  >
                    servizio passaporto dedicato
                  </Link>{" "}
                  con prezzi chiari in anticipo.
                </>
              ) : (
                <>
                  Need hands-on help reviewing your file or finding an
                  appointment? We offer an optional{" "}
                  <Link
                    href={p(locale, "/services/passport")}
                    className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  >
                    passport support service
                  </Link>{" "}
                  with clear, upfront pricing.
                </>
              )}
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav
          aria-label={isIt ? "Indice della pagina" : "On this page"}
          className="mt-8 mb-4 rounded-xl bg-white/80 backdrop-blur-sm ring-1 ring-black/5 p-4 text-sm"
        >
          <div className="font-semibold text-gray-800 mb-2">
            {isIt ? "In questa pagina" : "On this page"}
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="hover:underline text-emerald-800" href="#who">
                {isIt
                  ? "1. Dove fare domanda (consolati UK & AIRE)"
                  : "1. Where to apply (UK consulates & AIRE)"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#checklist">
                {isIt
                  ? "2. Checklist documenti adulti"
                  : "2. Adult document checklist"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#minors">
                {isIt ? "3. Minori (under 18)" : "3. Minors (under 18)"}
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-emerald-800"
                href="#scenarios"
              >
                {isIt
                  ? "4. Casi tipici (rinnovo, primo passaporto, smarrimento)"
                  : "4. Renewals, first passports & lost passports"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#costs">
                {isIt
                  ? "5. Costi & tempi di lavorazione"
                  : "5. Costs & processing"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#booking">
                {isIt
                  ? "6. Consigli di prenotazione Prenot@Mi"
                  : "6. Prenot@Mi booking tips"}
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-emerald-800"
                href="#appointment-day"
              >
                {isIt
                  ? "7. Giorno dell’appuntamento"
                  : "7. Appointment day"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#pitfalls">
                {isIt
                  ? "8. Errori frequenti"
                  : "8. Common pitfalls"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#links">
                {isIt
                  ? "9. Link utili & altre guide"
                  : "9. Useful links & further guides"}
              </a>
            </li>
            <li>
              <a className="hover:underline text-emerald-800" href="#faqs">
                {isIt ? "10. FAQ" : "10. FAQs"}
              </a>
            </li>
          </ul>
        </nav>

        {/* ===== WHO / JURISDICTION ===== */}
        <section id="who" className="mt-10 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "1. Dove dovresti fare domanda nel Regno Unito?"
              : "1. Where should you apply in the UK?"}
          </h2>
          <p className="leading-relaxed">
            {isIt ? (
              <>
                Fai domanda per il passaporto italiano (nuova emissione o
                rinnovo) presso il{" "}
                <strong>consolato italiano competente per la zona UK</strong>{" "}
                in cui vivi e in cui sei{" "}
                <strong>iscritto all’AIRE</strong>. In linea molto generale:
              </>
            ) : (
              <>
                You apply for (or renew) an Italian passport at the{" "}
                <strong>Italian consulate responsible for the UK area</strong>{" "}
                where you live and where you are{" "}
                <strong>registered with AIRE</strong>. In broad terms:
              </>
            )}
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <p className="font-semibold text-gray-900">
                {isIt ? "Londra" : "London"}
              </p>
              <p className="text-sm text-gray-700">
                {isIt
                  ? "Consolato d’Italia a Londra — la maggior parte di Inghilterra & Galles."
                  : "Consulate of Italy in London — most of England & Wales."}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <p className="font-semibold text-gray-900">
                {isIt ? "Manchester" : "Manchester"}
              </p>
              <p className="text-sm text-gray-700">
                {isIt
                  ? "Consolato d’Italia a Manchester — Nord dell’Inghilterra & parte delle Midlands."
                  : "Consulate of Italy in Manchester — North of England & some Midlands."}
              </p>
            </div>
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <p className="font-semibold text-gray-900">
                {isIt ? "Edimburgo" : "Edinburgh"}
              </p>
              <p className="text-sm text-gray-700">
                {isIt
                  ? "Consolato Generale a Edimburgo — Scozia & Irlanda del Nord."
                  : "Consulate General in Edinburgh — Scotland & Northern Ireland."}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            {isIt ? (
              <>
                Controlla sempre il{" "}
                <strong>sito ufficiale del tuo consolato</strong> per mappe
                aggiornate delle circoscrizioni e istruzioni AIRE: possono
                cambiare nel tempo.
              </>
            ) : (
              <>
                Always double-check your{" "}
                <strong>official consulate website</strong> for detailed
                coverage maps and AIRE instructions; they change from time to
                time.
              </>
            )}
          </p>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-900">
            <p className="font-semibold">
              {isIt ? "Prima AIRE, poi passaporto" : "AIRE first, passport second"}
            </p>
            <p className="mt-1">
              {isIt ? (
                <>
                  Quasi tutti i consolati si aspettano che la tua{" "}
                  <strong>
                    iscrizione AIRE e il tuo indirizzo siano aggiornati
                  </strong>{" "}
                  prima di prenotare uno slot passaporto. Se non sei sicurə che
                  l’AIRE sia corretta, sistema quello per primo.
                </>
              ) : (
                <>
                  Almost all consulates expect your{" "}
                  <strong>AIRE registration and address to be fully updated</strong>{" "}
                  before you book a passport slot. If you’re not sure your AIRE
                  is correct, fix that first.
                </>
              )}
            </p>
            <p className="mt-2">
              {isIt ? "Vedi anche: " : "See also: "}
              <Link
                href={p(locale, "/community/aire-uk")}
                className="underline underline-offset-4"
              >
                {isIt
                  ? "AIRE dal Regno Unito (2025)"
                  : "AIRE from the UK (2025)"}
              </Link>{" "}
              {isIt ? "e " : "and "}
              <Link
                href={p(
                  locale,
                  "/community/bureaucracy-guides/keep-aire-up-to-date-uk"
                )}
                className="underline underline-offset-4"
              >
                {isIt
                  ? "Aggiornare l’AIRE dal Regno Unito"
                  : "AIRE updates from the UK"}
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ===== CHECKLIST (ADULTS) ===== */}
        <section id="checklist" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "2. Checklist documenti adulti"
              : "2. Adult document checklist"}
          </h2>
          <p className="mb-4">
            {isIt ? (
              <>
                Usa questa tabella per preparare il fascicolo{" "}
                <strong>prima ancora di provare a prenotare</strong>. I
                requisiti cambiano leggermente da consolato a consolato, quindi
                confronta sempre con la lista ufficiale.
              </>
            ) : (
              <>
                Use this table to assemble your file{" "}
                <strong>before you even try to book</strong>. Requirements vary
                slightly by consulate, so always compare with their official
                list.
              </>
            )}
          </p>

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
                      {isIt ? "Documento italiano valido" : "Valid Italian ID"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Vecchio passaporto (se rinnovo) o carta d’identità
                        italiana. In caso di smarrimento o furto porta{" "}
                        <strong>
                          denuncia di polizia + eventuale copia/scan
                        </strong>{" "}
                        del vecchio documento.
                      </>
                    ) : (
                      <>
                        Old passport (if renewing) or Italian ID card. If lost
                        or stolen, bring a{" "}
                        <strong>
                          police report + any copy/scan
                        </strong>{" "}
                        of the old document.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>AIRE</strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Iscrizione presso il consolato competente tramite{" "}
                        <strong>FAST IT</strong>, con il tuo indirizzo UK
                        aggiornato correttamente.
                      </>
                    ) : (
                      <>
                        Registered at the correct consulate via{" "}
                        <strong>FAST IT</strong>, with your current UK address
                        showing correctly.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Prova di indirizzo UK" : "UK proof of address"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Documento recente a tuo nome (o chiaramente collegato),
                        di solito{" "}
                        <strong>
                          estratto conto bancario, bolletta o council tax
                        </strong>{" "}
                        datato negli ultimi mesi. L’indirizzo deve coincidere
                        con quello in AIRE.
                      </>
                    ) : (
                      <>
                        Recent document in your name (or clearly linked), usually{" "}
                        <strong>bank statement, utility bill or council tax</strong>{" "}
                        dated within the last few months. Address should match
                        your AIRE record.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Foto biometriche" : "Biometric photos"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        In genere <strong>2 foto, 35×45&nbsp;mm</strong>,
                        espressione neutra, sfondo chiaro, niente riflessi
                        sugli occhiali. Chiedi esplicitamente{" "}
                        <strong>“foto biometriche passaporto italiano”</strong>.
                      </>
                    ) : (
                      <>
                        Normally <strong>2 photos, 35×45&nbsp;mm</strong>, neutral
                        expression, light background, no glare on glasses. Ask the
                        photographer explicitly for “Italian passport biometric
                        photos”.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Modulo/i consolari" : "Consular form(s)"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Moduli stampati e firmati dal sito del tuo consolato
                        (domanda, consensi, conferma dati, ecc.).
                      </>
                    ) : (
                      <>
                        Printed and signed forms from your consulate’s website
                        (application, consent, data confirmation, etc.).
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Tariffa consolare" : "Consular fee"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Pagabile in sterline secondo il{" "}
                        <strong>tariffario consolare trimestrale</strong>. Alcuni
                        consolati richiedono carta, altri vaglia o contanti —
                        leggi bene le istruzioni.
                      </>
                    ) : (
                      <>
                        Payable in GBP according to the{" "}
                        <strong>quarterly consular tariff</strong>. Some consulates
                        ask for card, others for postal order or cash — check
                        instructions carefully.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Prova dell’appuntamento" : "Appointment proof"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Stampa o screenshot della tua{" "}
                        <strong>prenotazione Prenot@Mi</strong>, più eventuali
                        email di conferma.
                      </>
                    ) : (
                      <>
                        Print or screenshot of your{" "}
                        <strong>Prenot@Mi booking</strong>, plus any email
                        confirmations.
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            {isIt ? (
              <>
                <strong>Se il cognome è cambiato</strong> (matrimonio, divorzio,
                deed poll), porta i certificati originali e verifica che il
                cambio sia stato registrato in Italia/AIRE. Per{" "}
                <strong>passaporti smarriti/rubati</strong>, porta la denuncia
                UK e qualsiasi copia del vecchio documento tu riesca a trovare.
              </>
            ) : (
              <>
                <strong>If your surname has changed</strong> (marriage, divorce,
                deed poll), bring original certificates and make sure the change
                has been registered in Italy/AIRE. For{" "}
                <strong>lost/stolen passports</strong>, bring the UK police
                report and any copy of the old document you can find.
              </>
            )}
          </p>

          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-sm text-sky-900">
            <p className="font-semibold">
              {isIt
                ? "Problemi con prova di indirizzo o AIRE?"
                : "Struggling with proof of address or AIRE?"}
            </p>
            <p className="mt-1">
              {isIt ? (
                <>
                  Se ti sei appena trasferitə e non hai ancora bollette, la
                  nostra guida{" "}
                  <Link
                    href={p(
                      locale,
                      "/community/proof-of-address-without-bills-2025"
                    )}
                    className="underline underline-offset-4"
                  >
                    prova di indirizzo senza bollette (2025)
                  </Link>{" "}
                  spiega documenti alternativi e modelli pronti.
                </>
              ) : (
                <>
                  If you’ve just moved and don’t have bills yet, our guide on{" "}
                  <Link
                    href={p(
                      locale,
                      "/community/proof-of-address-without-bills-2025"
                    )}
                    className="underline underline-offset-4"
                  >
                    proof of address without bills (2025)
                  </Link>{" "}
                  walks through alternative documents and templates.
                </>
              )}
            </p>
          </div>
        </section>

        {/* ===== MINORS ===== */}
        <section id="minors" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt ? "3. Minori (under 18)" : "3. Minors (under 18)"}
          </h2>
          <p className="mb-4">
            {isIt ? (
              <>
                Le regole sono più rigide per i minori. Organizzati per tempo —
                soprattutto se uno dei genitori non può essere presente.
              </>
            ) : (
              <>
                Italian rules are stricter for minors. Plan ahead — especially if
                one parent cannot attend.
              </>
            )}
          </p>

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
                    {isIt ? (
                      <>
                        Di solito{" "}
                        <strong>entrambi i genitori</strong> firmano e/o
                        partecipano. Alcuni consolati accettano consensi
                        notarili o dichiarazioni consolari se un genitore non
                        può essere presente.
                      </>
                    ) : (
                      <>
                        Usually <strong>both parents</strong> sign and/or attend.
                        Some consulates accept notarised consent or consular
                        declarations if one parent cannot be present.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Certificato di nascita" : "Birth certificate"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Certificato di nascita in formato “long form” con i nomi
                        dei genitori, soprattutto per prime emissioni o se i
                        dati non sono ancora registrati completamente in Italia.
                      </>
                    ) : (
                      <>
                        Long-form birth certificate with parents’ names,
                        especially for first issuance or if data hasn’t been
                        fully registered in Italy.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "AIRE & registrazioni" : "AIRE & registrations"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Il/i genitore/i italianə e il minore devono essere
                        correttamente iscritti AIRE e i principali eventi (nascita,
                        matrimonio, ecc.) trascritti in Italia.
                      </>
                    ) : (
                      <>
                        The Italian parent(s) and child should be correctly
                        registered with AIRE and their vital events (birth,
                        marriage, etc.) transcribed in Italy.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>{isIt ? "Foto" : "Photos"}</strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        2 foto biometriche (stesse specifiche degli adulti). Per
                        neonati e bimbi piccoli, scegli un fotografo abituato a
                        fare foto per passaporti.
                      </>
                    ) : (
                      <>
                        2 biometric photos (same specs as adults). For babies,
                        use a photographer familiar with passport-style photos.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Tariffe & validità" : "Fees & validity"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Le tariffe dipendono dall’età e dal trimestre. La
                        validità è di solito più corta rispetto agli adulti (es.
                        3 o 5 anni). Controlla la tabella del tuo consolato.
                      </>
                    ) : (
                      <>
                        Fees depend on age and quarter. Validity is typically
                        shorter than adults (e.g. 3 or 5 years). Check your
                        consulate’s table.
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            {isIt ? (
              <>
                Se i genitori sono separati o ci sono questioni di affidamento,
                leggi con attenzione le istruzioni del consolato e prevedi{" "}
                <strong>più tempo</strong> per eventuali documenti di tribunale
                o consensi aggiuntivi.
              </>
            ) : (
              <>
                If parents are separated or there are custody issues, check the
                consulate’s guidance carefully and allow{" "}
                <strong>extra time</strong> for any required court or consent
                documents.
              </>
            )}
          </p>
        </section>

        {/* ===== SCENARIOS ===== */}
        <section id="scenarios" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt ? "4. Casi tipici" : "4. Common scenarios"}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 text-sm">
              <h3 className="font-semibold text-gray-900">
                {isIt
                  ? "A. Rinnovo di un passaporto esistente"
                  : "A. Renewing an existing passport"}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
                <li>
                  {isIt
                    ? "Il vecchio passaporto è ancora disponibile e non troppo scaduto."
                    : "Old passport still available and not yet expired, or recently expired."}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Assicurati che{" "}
                      <strong>
                        indirizzo AIRE e dati familiari siano corretti
                      </strong>{" "}
                      prima di prenotare.
                    </>
                  ) : (
                    <>
                      Ensure your AIRE address and family data are fully correct
                      before booking.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Porta il vecchio passaporto — di solito viene annullato e
                      restituito.
                    </>
                  ) : (
                    <>
                      Bring the old passport — it’s usually cancelled and
                      returned to you.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Verifica che nome/cognome coincidano tra AIRE, passaporto
                      e prova di indirizzo.
                    </>
                  ) : (
                    <>
                      Check name/surname match across AIRE, passport and proof
                      of address.
                    </>
                  )}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 text-sm">
              <h3 className="font-semibold text-gray-900">
                {isIt
                  ? "B. Primo passaporto adulto emesso nel Regno Unito"
                  : "B. First adult passport issued in the UK"}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
                <li>
                  {isIt ? (
                    <>Assicurati che la tua cittadinanza italiana sia stata riconosciuta.</>
                  ) : (
                    <>Make sure your Italian citizenship is fully recognised.</>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Controlla che{" "}
                      <strong>nascita e matrimonio/divorzio</strong> siano
                      trascritti in Italia.
                    </>
                  ) : (
                    <>
                      Check that your{" "}
                      <strong>birth and any marriage/divorce</strong> are
                      transcribed in Italy.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Aspettati che il consolato sia più rigido su documenti e
                      tempi rispetto a un semplice rinnovo.
                    </>
                  ) : (
                    <>
                      Expect the consulate to be stricter with documents and
                      timelines than for simple renewals.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Porta documenti aggiuntivi se hai ottenuto la cittadinanza
                      da poco (es. jure sanguinis o naturalizzazione).
                    </>
                  ) : (
                    <>
                      Bring extra ID and originals if you obtained citizenship
                      recently (e.g. jure sanguinis or naturalisation).
                    </>
                  )}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 text-sm">
              <h3 className="font-semibold text-gray-900">
                {isIt
                  ? "C. Passaporto smarrito/rubato & viaggio urgente"
                  : "C. Lost / stolen passport & urgent travel"}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
                <li>
                  {isIt ? (
                    <>
                      Fai una <strong>denuncia alla polizia</strong> appena ti
                      accorgi dello smarrimento.
                    </>
                  ) : (
                    <>
                      File a <strong>police report</strong> as soon as you
                      notice the loss.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Raccogli qualsiasi copia del vecchio passaporto, più ID
                      extra e prova di indirizzo.
                    </>
                  ) : (
                    <>
                      Gather any copy of the old passport, plus extra ID and
                      proof of address.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Contatta il consolato per istruzioni; in alcuni casi può
                      essere possibile un{" "}
                      <strong>documento di viaggio provvisorio</strong>.
                    </>
                  ) : (
                    <>
                      Contact your consulate for guidance; in some cases an{" "}
                      <strong>emergency travel document</strong> may be possible.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Non prenotare viaggi non rimborsabili contando su una
                      soluzione in giornata — il consolato non può garantirla.
                    </>
                  ) : (
                    <>
                      Do not book non-refundable travel expecting a same-day
                      solution — consulates cannot guarantee this.
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== COSTS & PROCESSING ===== */}
        <section id="costs" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "5. Costi & tempi di lavorazione in sintesi"
              : "5. Costs & processing at a glance"}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm md:text-[15px]">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">
                    {isIt ? "Elemento" : "Item"}
                  </th>
                  <th>
                    {isIt ? "Aspettativa tipica" : "Typical expectation"}
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>{isIt ? "Tariffa" : "Fee"}</strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Aggiornata trimestralmente in base al cambio. Adulti e
                        minori pagano importi diversi. Controlla sempre il{" "}
                        <strong>tariffario consolare più recente</strong> prima
                        dell’appuntamento.
                      </>
                    ) : (
                      <>
                        Updated quarterly based on FX. Adults and minors pay
                        different amounts. Always check the{" "}
                        <strong>latest consular tariff table</strong> before your
                        appointment.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Tempo di emissione" : "Processing time"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Molti consolati emettono il passaporto in giornata o in
                        pochi giorni tramite corriere/posta. Se è necessario il
                        centro stampa centrale o controlli aggiuntivi, i tempi
                        si allungano.
                      </>
                    ) : (
                      <>
                        Many consulates issue passports on the same day or within
                        a few days by courier/post. If central printing or
                        additional checks are needed, it can take longer.
                      </>
                    )}
                  </td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>
                    <strong>
                      {isIt ? "Tempi di prenotazione" : "Booking delays"}
                    </strong>
                  </td>
                  <td>
                    {isIt ? (
                      <>
                        Il vero collo di bottiglia è quasi sempre{" "}
                        <strong>trovare uno slot</strong>, non stampare il
                        passaporto. Prepara i documenti prima, poi monitora
                        cancellazioni e nuovi appuntamenti rilasciati.
                      </>
                    ) : (
                      <>
                        The real bottleneck is usually{" "}
                        <strong>finding a slot</strong>, not printing the passport.
                        Prepare documents first, then monitor cancellations and
                        newly released appointments.
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-sm">
            <p className="font-semibold text-emerald-900">
              {isIt
                ? "Vuoi un secondo paio d’occhi sui documenti?"
                : "Want a second pair of eyes on your documents?"}
            </p>
            <p className="mt-1 text-emerald-900/90">
              {isIt ? (
                <>
                  Possiamo aiutarti a{" "}
                  <strong>
                    controllare il fascicolo per lacune o incongruenze
                  </strong>{" "}
                  e a cercare il{" "}
                  <strong>primo appuntamento praticabile</strong> presso il tuo
                  consolato.
                </>
              ) : (
                <>
                  We can help you{" "}
                  <strong>review your file for gaps or inconsistencies</strong>{" "}
                  and look for the <strong>earliest viable appointment</strong> at
                  your consulate.
                </>
              )}
            </p>
            <Link
              href={p(locale, "/services/passport")}
              className="mt-3 inline-flex items-center rounded-xl bg-emerald-700 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-800"
            >
              {isIt ? "Servizio passaporto →" : "Passport support service →"}
            </Link>
          </div>
        </section>

        {/* ===== BOOKING (PRENOT@MI) ===== */}
        <section id="booking" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "6. Prenotare l’appuntamento (Prenot@Mi)"
              : "6. Booking the appointment (Prenot@Mi)"}
          </h2>
          <p className="leading-relaxed">
            {isIt ? (
              <>
                La maggior parte dei consolati usa ora{" "}
                <strong>Prenot@Mi</strong>, la piattaforma di prenotazione del
                MAECI. Dovrai:
              </>
            ) : (
              <>
                Most consulates now use <strong>Prenot@Mi</strong>, the Italian
                MFA booking platform. You’ll need to:
              </>
            )}
          </p>
          <ol className="mt-3 list-decimal list-inside space-y-1 text-sm text-gray-800">
            <li>
              {isIt
                ? "Creare un account personale con i tuoi dati e la tua email."
                : "Create a personal account with your details and email."}
            </li>
            <li>
              {isIt ? (
                <>
                  Selezionare il tuo consolato e il servizio{" "}
                  <span className="italic">“passaporto”</span>.
                </>
              ) : (
                <>
                  Select your consulate and the &ldquo;passport&rdquo; service.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  Scegliere una data/ora e confermare la prenotazione; alcune
                  sedi richiedono una conferma via email.
                </>
              ) : (
                <>
                  Choose a date/time and confirm the booking; some posts require
                  confirmation by email.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  Salvare uno screenshot o una stampa della schermata di
                  prenotazione e delle email di conferma.
                </>
              ) : (
                <>
                  Save a screenshot or print of the booking page and any email
                  confirmations.
                </>
              )}
            </li>
          </ol>

          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800"
              >
                {isIt
                  ? "Prenot@Mi — portale prenotazioni"
                  : "Prenot@Mi — booking portal"}
              </a>
            </li>
            <li>
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800"
              >
                {isIt
                  ? "FAST IT — AIRE & servizi consolari online"
                  : "FAST IT — AIRE & consular online services"}
              </a>
            </li>
          </ul>

          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/80 p-4 text-sm text-sky-900">
            <p className="font-semibold">
              {isIt
                ? "Slot sempre esauriti? Leggi la guida lunga"
                : "Slots always gone? Read the in-depth survival guide"}
            </p>
            <p className="mt-1">
              {isIt ? (
                <>
                  La nostra guida estesa{" "}
                  <Link
                    href={p(locale, "/community/prenotami-uk-guide")}
                    className="underline underline-offset-4"
                  >
                    Prenot@Mi & appuntamenti consolari Regno Unito (2025)
                  </Link>{" "}
                  spiega i pattern tipici di rilascio slot, come evitare account
                  bloccati e aspettative realistiche quando il calendario
                  sembra vuoto.
                </>
              ) : (
                <>
                  Our long-form{" "}
                  <Link
                    href={p(locale, "/community/prenotami-uk-guide")}
                    className="underline underline-offset-4"
                  >
                    Prenot@Mi &amp; Italian consular appointments UK (2025)
                  </Link>{" "}
                  explains common slot-release patterns, how to avoid blocked
                  accounts, and realistic expectations when calendars look empty.
                </>
              )}
            </p>
          </div>
        </section>

        {/* ===== APPOINTMENT DAY ===== */}
        <section id="appointment-day" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "7. Cosa succede il giorno dell’appuntamento?"
              : "7. What happens on appointment day?"}
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {isIt ? "Prima di uscire di casa" : "Before you leave home"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt
                    ? "Controlla di avere tutti gli originali + copie in una cartellina."
                    : "Check you have all originals + copies in one folder."}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Porta il metodo di pagamento richiesto dal tuo consolato.
                    </>
                  ) : (
                    <>Bring payment method as requested by your consulate.</>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Arriva in anticipo — i controlli di sicurezza possono
                      richiedere tempo.
                    </>
                  ) : (
                    <>Arrive early — security queues can take time.</>
                  )}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {isIt ? "In consolato" : "At the consulate"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt
                    ? "Controllo di sicurezza e registrazione alla reception."
                    : "Security check and registration at reception."}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Controllo dei documenti allo sportello; se manca qualcosa
                      potrebbero fissare un nuovo appuntamento.
                    </>
                  ) : (
                    <>
                      Desk check of your documents; missing items can mean a new
                      appointment.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Rilevazione di impronte e foto per il passaporto
                      biometrico (di solito dai 12 anni in su).
                    </>
                  ) : (
                    <>
                      Fingerprints and photo taken for biometric passport
                      (usually age 12+).
                    </>
                  )}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">
                {isIt ? "Dopo l’appuntamento" : "After the appointment"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {isIt ? (
                    <>
                      Puoi ricevere il passaporto in giornata o successivamente
                      per posta/corriere.
                    </>
                  ) : (
                    <>
                      You may receive the passport the same day or by post/courier
                      later.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Conserva ricevute e numeri di tracking finché non hai il
                      passaporto in mano.
                    </>
                  ) : (
                    <>
                      Keep receipts and tracking numbers until you have the
                      passport in hand.
                    </>
                  )}
                </li>
                <li>
                  {isIt ? (
                    <>
                      Controlla che tutti i dati personali siano corretti e
                      segnala subito eventuali errori.
                    </>
                  ) : (
                    <>
                      Check all personal details and report errors immediately.
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== PITFALLS ===== */}
        <section id="pitfalls" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "8. Errori frequenti (e come evitarli)"
              : "8. Common pitfalls (and how to avoid them)"}
          </h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
            <li>
              {isIt ? (
                <>
                  <strong>AIRE non aggiornata</strong> → aggiorna tramite FAST
                  IT e attendi conferma prima di provare a prenotare.
                </>
              ) : (
                <>
                  <strong>AIRE not updated</strong> → Update via FAST IT and wait
                  for confirmation before you try to book.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  <strong>Foto non conformi</strong> → chiedi esplicitamente{" "}
                  <span className="whitespace-nowrap">35×45 mm</span> foto
                  biometriche passaporto italiano.
                </>
              ) : (
                <>
                  <strong>Photo specs wrong</strong> → Ask specifically for
                  35×45 mm Italian passport biometrics.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  <strong>Consolato sbagliato</strong> → fai domanda solo al
                  consolato competente per il tuo indirizzo registrato.
                </>
              ) : (
                <>
                  <strong>Wrong consulate</strong> → Apply only at the consulate
                  for your registered address.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  <strong>Indirizzo non coerente</strong> → la prova di
                  indirizzo deve combaciare con quanto hanno AIRE e consolato.
                </>
              ) : (
                <>
                  <strong>Address mismatch</strong> → Proof of address should
                  match what AIRE &amp; the consulate have on file.
                </>
              )}
            </li>
            <li>
              {isIt ? (
                <>
                  <strong>Cambi di nome non registrati</strong> → registra
                  matrimonio, divorzio o cambi nome in Italia prima di
                  rinnovare.
                </>
              ) : (
                <>
                  <strong>Name changes not registered</strong> → Register
                  marriage, divorce or deed-poll changes in Italy before
                  renewing.
                </>
              )}
            </li>
          </ol>
        </section>

        {/* ===== LINKS & RELATED GUIDES ===== */}
        <section id="links" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt
              ? "9. Link ufficiali utili & guide correlate"
              : "9. Useful official links & related guides"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 text-sm">
              <h3 className="font-semibold text-gray-900">
                {isIt ? "Link ufficiali" : "Official links"}
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
                    {isIt
                      ? "FAST IT — AIRE & servizi consolari online"
                      : "FAST IT — AIRE &amp; online consular services"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://prenotami.esteri.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "Prenot@Mi — portale prenotazioni"
                      : "Prenot@Mi — booking portal"}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 text-sm">
              <h3 className="font-semibold text-gray-900">
                {isIt ? "Altre guide Resinaro" : "More Resinaro guides"}
              </h3>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>
                  <Link
                    href={p(locale, "/community/aire-uk")}
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "AIRE dal Regno Unito (iscrizione & FAST IT)"
                      : "AIRE from the UK (registration & FAST IT)"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={p(
                      locale,
                      "/community/bureaucracy-guides/italian-cie-id-card-uk"
                    )}
                    className="underline text-emerald-800"
                  >
                    {isIt
                      ? "Carta d’identità elettronica italiana (CIE) in UK (2025)"
                      : "Italian Electronic ID Card (CIE) in the UK (2025)"}
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
                    {isIt
                      ? "Prenot@Mi & appuntamenti consolari Regno Unito (2025)"
                      : "Prenot@Mi &amp; Italian consular appointments UK (2025)"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== FAQS ===== */}
        <section id="faqs" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            {isIt ? "10. FAQ" : "10. FAQs"}
          </h2>

          <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Posso rinnovare il passaporto per posta?"
                : "Can I renew my passport by post?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt ? (
                <>
                  No — i passaporti italiani sono biometrici e di norma
                  richiedono un{" "}
                  <strong>appuntamento di persona</strong> per rilevare
                  impronte e foto dal vivo. Alcuni minori più piccoli possono
                  essere esentati dalle impronte, ma si seguono comunque le
                  istruzioni del consolato.
                </>
              ) : (
                <>
                  No — Italian passports are biometric and normally require an{" "}
                  <strong>in-person appointment</strong> to capture fingerprints
                  and a live photo. Some younger minors may be exempt from
                  fingerprints, but you still follow consulate instructions.
                </>
              )}
            </p>
          </details>

          <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Devo essere iscritto all’AIRE per rinnovare?"
                : "Do I need AIRE to renew?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt ? (
                <>
                  Sì, di solito ci si aspetta che tu sia correttamente iscritto{" "}
                  <strong>all’AIRE</strong> presso il consolato competente per
                  il tuo indirizzo UK. Se lo status o l’indirizzo non sono
                  corretti, sistema prima quello tramite FAST IT.
                </>
              ) : (
                <>
                  Yes, you’re expected to be correctly registered with{" "}
                  <strong>AIRE</strong> at the consulate that covers your UK
                  address. If your status or address is wrong, fix that first via
                  FAST IT.
                </>
              )}
            </p>
          </details>

          <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Ho perso il vecchio passaporto — e adesso?"
                : "My old passport is lost — what now?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt ? (
                <>
                  Denuncia lo smarrimento/furto alla{" "}
                  <strong>polizia locale</strong> e porta la denuncia
                  all’appuntamento. Raccogli documenti di identità aggiuntivi e
                  qualsiasi copia del vecchio passaporto (foto, scan, allegato
                  email) per aiutare il consolato a confermare i tuoi dati.
                </>
              ) : (
                <>
                  Report the loss/theft to the <strong>local police</strong> and
                  bring the report to your appointment. Gather extra ID and any
                  copy of the old passport (photo, scan, email attachment) to
                  help the consulate confirm your details.
                </>
              )}
            </p>
          </details>

          <details className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <summary className="cursor-pointer font-semibold">
              {isIt
                ? "Con quanto anticipo dovrei prenotare?"
                : "How early should I book?"}
            </summary>
            <p className="mt-2 text-gray-700">
              {isIt ? (
                <>
                  Il prima possibile, una volta pronti i documenti. La
                  disponibilità slot cambia di continuo e le cancellazioni
                  possono apparire in qualsiasi momento. Se hai date di viaggio
                  fisse, punta a{" "}
                  <strong>mesi di anticipo, non settimane</strong> e evita
                  prenotazioni non rimborsabili finché non hai un appuntamento
                  confermato.
                </>
              ) : (
                <>
                  As early as possible once your documents are ready. Slot
                  availability changes constantly and cancellations can appear at
                  any time. If you have fixed travel dates, aim for{" "}
                  <strong>months ahead, not weeks</strong>, and avoid
                  non-refundable bookings until you have a confirmed appointment.
                </>
              )}
            </p>
          </details>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-gray-800">
              {isIt ? (
                <>
                  Vuoi un aiuto personalizzato per controllare documenti, stato
                  AIRE o opzioni di prenotazione?
                </>
              ) : (
                <>
                  Want personalised help checking your documents, AIRE status or
                  booking options?
                </>
              )}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={p(locale, "/services/passport")}
                className="inline-flex items-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-800"
              >
                {isIt
                  ? "Richiedi supporto passaporto →"
                  : "Get passport support →"}
              </Link>
              <Link
                href={p(locale, "/contact")}
                className="inline-flex items-center rounded-xl border border-emerald-700/60 px-5 py-2.5 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
              >
                {isIt
                  ? "Parla con il team Resinaro"
                  : "Talk to the Resinaro team"}
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-600">
              {isIt ? (
                <>
                  Siamo un servizio indipendente, non un consolato. Ti aiutiamo a
                  prepararti e capire il percorso; le decisioni finali restano
                  sempre alle autorità italiane.
                </>
              ) : (
                <>
                  We’re an independent service, not a consulate. We help you
                  prepare and understand the process; final decisions always rest
                  with the Italian authorities.
                </>
              )}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
