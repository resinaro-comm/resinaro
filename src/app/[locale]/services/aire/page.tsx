// src/app/[locale]/services/aire-registration/page.tsx

import AireForm from "@/components/AireForm";
import Image from "next/image";
import type { Metadata } from "next";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    // Metadata
    title: it
      ? "Assistenza Iscrizione AIRE (Regno Unito) — Supporto Rapido e Amichevole | Resinaro"
      : "AIRE Registration Help (UK) — Fast, Friendly Support | Resinaro",
    description: it
      ? "Aiuto semplice per iscrivere o aggiornare l’AIRE dal Regno Unito. Supporto in italiano e inglese per FAST IT e altri canali consolari. £35 per singolo/coppia, £50 per famiglie 3+. Non siamo il Consolato."
      : "Simple help to register or update AIRE from the UK. Support in Italian and English for FAST IT and consular routes. £35 for one or a couple, £50 for families of 3+. We are not the Consulate.",
    ogDesc: it
      ? "Checklist chiara, controlli documentali e guida al portale per l’AIRE dal Regno Unito. Supporto indipendente, nessuna garanzia di tempi o esiti."
      : "Clear checklist, document checks and portal guidance for AIRE from the UK. Independent support, no guarantees of timings or outcomes.",

    // Hero + intro card
    h1: it
      ? "Iscrizione e aggiornamenti AIRE — aiuto per chi vive nel Regno Unito"
      : "AIRE registration & updates — help for people living in the UK",
    heroAlt: it
      ? "Iscrizione AIRE e aggiornamento registri consolari italiani"
      : "AIRE registration and Italian consular records update",
    introP1: it
      ? "Ti aiutiamo a gestire AIRE dal Regno Unito con una checklist chiara, guida passo-passo su FAST IT (o altri canali) e controlli dei documenti. "
      : "We help you manage AIRE from the UK with a clear checklist, step-by-step guidance on FAST IT (or other routes) and document checks. ",
    introPrice: it
      ? "£35 per una persona o una coppia, £50 per un nucleo familiare di 3+."
      : "£35 for one person or a couple, £50 for a household of 3+.",
    introDisclaimer: it
      ? "Siamo un servizio di supporto amministrativo indipendente, non il Consolato e non consulenti legali. Non possiamo garantire tempi o esiti. Preferisci email? Scrivi a "
      : "We’re an independent admin support service, not the Consulate and not legal advisers. We cannot guarantee timings or outcomes. Prefer email? Write to ",
    email: "resinaro@proton.me",

    // Pricing + important boxes
    pricingH: it ? "Prezzi" : "Pricing",
    pricingL1: it
      ? "£35 — singolo o coppia (stesso nucleo familiare)"
      : "£35 — single person or a couple (same household)",
    pricingL2: it
      ? "£50 — famiglia / gruppo di 3+ persone"
      : "£50 — family / group of 3+ people",
    pricingNote: it
      ? "Il prezzo è per nucleo familiare per una pratica AIRE (iscrizione o aggiornamento). Le decisioni e i tempi consolari non dipendono da noi."
      : "Price is per household for one AIRE case (registration or update). Consulate decisions and timings are outside our control.",
    importantH: it ? "Importante" : "Important",
    importantP: it
      ? "Forniamo supporto amministrativo e sui documenti. Eventuali tasse ufficiali si pagano direttamente al Consolato o all’autorità competente. Non possiamo cambiare le decisioni del Consolato né accelerare la lavorazione."
      : "We provide administrative and document support only. Any official fees are paid directly to the Consulate or relevant authority. We cannot change consular decisions or speed up processing.",

    // Form card
    formH2: it ? "Inizia la tua richiesta AIRE" : "Start your AIRE request",
    formP: it
      ? "Compila il modulo per raccontarci la tua situazione. Puoi anche inviare i documenti più tardi via email: ti ricontatteremo con i prossimi passi."
      : "Fill in the form to tell us your situation. You can also send documents later by email — we’ll reply with clear next steps.",

    // Info cards
    whyH2: it ? "Perché l’AIRE è importante" : "Why AIRE matters",
    whyP: it
      ? "AIRE collega il tuo indirizzo estero al Consolato competente (Londra, Manchester, Edimburgo o altro), semplifica passaporto/CIE, garantisce comunicazioni ufficiali corrette e ti aiuta per il voto dall’estero."
      : "AIRE links your overseas address to the correct consulate (London, Manchester, Edinburgh or others), simplifies passport/CIE services, ensures official communications reach you and helps with voting from abroad.",
    whatH2: it ? "Cosa facciamo per te" : "What we do for you",
    whatL1: it
      ? "Confermiamo il consolato competente e il canale corretto (FAST IT o altre procedure)"
      : "Confirm the correct consulate and submission route (FAST IT or other processes)",
    whatL2: it
      ? "Prepariamo una checklist specifica per il tuo consolato e modelli utili"
      : "Prepare a consulate-specific checklist and helpful templates",
    whatL3: it
      ? "Revisioniamo i documenti principali e ti guidiamo passo-passo sul portale"
      : "Review your key documents and guide you step-by-step on the portal",
    whatL4: it
      ? "Condividiamo consigli pratici per evitare errori e ritardi frequenti"
      : "Share practical tips to avoid common mistakes and delays",

    // Aside
    urgentH: it ? "Urgenza o situazione complicata?" : "Urgent or complex case?",
    urgentP1: it ? "Email " : "Email ",
    urgentSubject: it ? "AIRE%20Urgente" : "AIRE%20Urgent",
    urgentStrong: it ? "“AIRE Urgente”" : "“AIRE Urgent”",
    beforeH: it ? "Prima di iniziare" : "Before you start",
    beforeL1: it
      ? "Tieni a portata un documento d’identità valido e una prova di indirizzo nel Regno Unito (se disponibile)"
      : "Have a valid ID and a UK proof of address ready, if you have one",
    beforeL2: it
      ? "Pensa se stai aggiornando solo te stesso/a o l’intero nucleo familiare"
      : "Think about whether you’re updating only yourself or the whole household",
    beforeL3: it
      ? "Se non sei sicuro dei requisiti, scrivici prima: meglio chiarire che rifare tutto"
      : "If you’re unsure about the requirements, email us first — it’s better to clarify than redo everything later",

    // FAQs heading + items
    faqsH2: it ? "Domande frequenti" : "FAQs",
    faq1Q: it ? "Posso fare tutto online con FAST IT?" : "Can I do everything online with FAST IT?",
    faq1A: it
      ? "Molti consolati usano FAST IT per iscrizioni e aggiornamenti AIRE. Dove FAST IT non è disponibile o non copre il tuo caso, ti indichiamo il canale corretto (email, posta o appuntamento)."
      : "Many consulates use FAST IT for AIRE registrations and updates. Where FAST IT is not available or doesn’t cover your case, we point you to the correct route (email, post or appointment).",
    faq2Q: it ? "È consulenza legale o fiscale?" : "Is this legal or tax advice?",
    faq2A: it
      ? "No. Offriamo solo supporto amministrativo e guida sui documenti. Le decisioni e le tempistiche sono definite dal Consolato e dalla legge italiana; se serve consulenza legale ti consigliamo di rivolgerti a un professionista."
      : "No. We provide administrative and document support only. Decisions and timelines are set by the Consulate and Italian law; if you need legal advice we suggest speaking to a qualified professional.",
    faq3Q: it ? "Quanto tempo ci vuole in media?" : "How long does it usually take?",
    faq3A: it
      ? "Possiamo preparare la checklist e le indicazioni in pochi giorni lavorativi. I tempi di lavorazione dell’AIRE dipendono dal Consolato e possono richiedere diverse settimane o più, a seconda del carico di lavoro."
      : "We can prepare your checklist and guidance within a few business days. AIRE processing times depend on the Consulate and can take several weeks or more, depending on workload.",

    // JSON-LD (FAQ)
    faqLdQA: [
      {
        q: it
          ? "Che cos’è l’AIRE e perché dovrei iscrivermi?"
          : "What is AIRE and why should I register?",
        a: it
          ? "AIRE è il registro dei cittadini italiani residenti all’estero. Tenerlo aggiornato aiuta con i servizi consolari (passaporto/CIE), il diritto di voto e la corretta competenza consolare."
          : "AIRE is the register of Italian citizens living abroad. Keeping it updated helps with consular services (passport/CIE), voting rights and correct consular jurisdiction.",
      },
      {
        q: it
          ? "Mi registrate voi direttamente sui sistemi consolari?"
          : "Do you register me directly on consular systems?",
        a: it
          ? "No. Ti aiutiamo a preparare i documenti e a usare il portale o il canale corretto. L’iscrizione e l’approvazione finale sono sempre a cura del Consolato."
          : "No. We help you prepare documents and use the correct portal or route. The actual registration and approval are always done by the Consulate.",
      },
      {
        q: it ? "Quanto tempo ci vuole per l’AIRE?" : "How long does AIRE take?",
        a: it
          ? "I tempi variano molto tra i consolati. Noi possiamo aiutarti a presentare una pratica chiara; i tempi di lavorazione e la decisione finale dipendono solo dal Consolato."
          : "Timings vary a lot between consulates. We can help you submit a clear application, but processing time and final decision are entirely up to the Consulate.",
      },
    ],

    // JSON-LD (Service)
    serviceName: it
      ? "Assistenza Iscrizione e Aggiornamenti AIRE"
      : "AIRE Registration and Updates Support",
    serviceType: it
      ? "Supporto amministrativo per registrazione consolare"
      : "Administrative support for consular registration",
    serviceDesc: it
      ? "Supporto passo-passo per iscrizione o aggiornamento AIRE dal Regno Unito: checklist personalizzata, controlli documentali e guida a FAST IT o altri canali. £35 per singolo/coppia; £50 per famiglie 3+."
      : "Step-by-step support to register or update AIRE from the UK: tailored checklist, document checks and guidance on FAST IT or other routes. £35 for one/couple; £50 for families of 3+.",
    inLanguage: it ? "it-IT" : "en-GB",

    // Other routes block
    otherH: it ? "Altri percorsi utili" : "Other helpful routes",
    otherPassport: it
      ? "Aiuto appuntamenti passaporto (Prenot@Mi, 12+)"
      : "Passport appointment help (Prenot@Mi, 12+)",
    otherNin: it
      ? "Supporto per National Insurance Number (NIN)"
      : "National Insurance (NIN) support",
    otherContact: it
      ? "Contatta direttamente Resinaro"
      : "Contact Resinaro directly",
    allServices: it ? "Tutti i servizi" : "All services",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const copy = t(locale);

  const canonicalPath = "/services/aire-registration";

  return {
    title: copy.title,
    description: copy.description,
    metadataBase: new URL("https://www.resinaro.com"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/en/services/aire-registration",
        it: "/it/services/aire-registration",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.ogDesc,
      type: "website",
      url: `https://www.resinaro.com${canonicalPath}`,
      siteName: "Resinaro",
      images: [
        {
          url: "/images/aire-registration.png",
          width: 1200,
          height: 630,
          alt: copy.heroAlt,
        },
      ],
      locale: locale === "it" ? "it_IT" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.ogDesc,
      images: ["/images/aire-registration.png"],
      creator: "@resinaro",
    },
  };
}

/* ------------------------------ JSON-LD ------------------------------- */
function buildFaqJsonLd(locale: Locale) {
  const copy = t(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqLdQA.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function buildServiceJsonLd(locale: Locale) {
  const copy = t(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.serviceName,
    provider: {
      "@type": "Organization",
      name: "Resinaro",
      url: "https://www.resinaro.com",
      email: "resinaro@proton.me",
    },
    serviceType: copy.serviceType,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description: copy.serviceDesc,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      // Represent the price range in a simple way
      price: "35-50",
      availability: "https://schema.org/InStock",
    },
    inLanguage: copy.inLanguage,
  };
}

function buildBreadcrumbJsonLd() {
  return {
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
        name: "AIRE registration support",
        item: "https://www.resinaro.com/services/aire-registration",
      },
    ],
  };
}

/* -------------------------------- Page --------------------------------- */
export default function AireRegistrationPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const copy = t(locale);

  const faqJsonLd = buildFaqJsonLd(locale);
  const serviceJsonLd = buildServiceJsonLd(locale);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();

  const pLocale = (path: string) => `/${locale}${path}`;

  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* ================================ HERO ================================ */}
      <section className="relative w-full pb-10 pt-4 sm:pt-6 md:pt-8">
        {/* Background image */}
        <div className="relative h-[230px] w-full overflow-hidden sm:h-[300px] md:h-[380px] lg:h-[420px]">
          <Image
            src="/images/aire-registration.png"
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
          <div className="rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-7 md:p-9">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">
              {locale === "it"
                ? "Servizio per italiani nel Regno Unito"
                : "Service for Italians in the UK"}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">
              {copy.h1}
            </h1>
            <p className="mt-2 text-sm text-emerald-900 sm:text-[15px]">
              {copy.introP1}
              <strong>{copy.introPrice}</strong>{" "}
              {copy.introDisclaimer}
              <a className="underline" href={`mailto:${copy.email}`}>
                {copy.email}
              </a>
              .
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
                <h3 className="text-sm font-semibold text-emerald-950">
                  {copy.pricingH}
                </h3>
                <ul className="mt-1 list-disc list-inside text-xs sm:text-sm text-emerald-900">
                  <li>{copy.pricingL1}</li>
                  <li>{copy.pricingL2}</li>
                </ul>
                <p className="mt-2 text-[11px] leading-snug text-emerald-900/80">
                  {copy.pricingNote}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                <h3 className="text-sm font-semibold text-emerald-950">
                  {copy.importantH}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-emerald-900">
                  {copy.importantP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================ FORM ============================== */}
      <section className="mx-auto max-w-5xl px-3 py-6 sm:px-6 md:px-8 md:py-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold text-emerald-950">
              {copy.formH2}
            </h2>
            <p className="mt-1 text-sm text-emerald-900">{copy.formP}</p>
          </div>
          <AireForm />
        </div>
      </section>

      {/* ============================= INFO CARDS =========================== */}
      <section className="mx-auto grid max-w-5xl gap-6 px-3 pb-8 sm:px-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-12">
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-lg font-semibold text-emerald-950 sm:text-xl">
              {copy.whyH2}
            </h2>
            <p className="mt-2 text-sm text-emerald-900">{copy.whyP}</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-lg font-semibold text-emerald-950 sm:text-xl">
              {copy.whatH2}
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-emerald-900">
              <li>{copy.whatL1}</li>
              <li>{copy.whatL2}</li>
              <li>{copy.whatL3}</li>
              <li>{copy.whatL4}</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-emerald-900 p-5 text-emerald-50 md:p-6">
            <h3 className="text-base font-semibold sm:text-lg">
              {copy.urgentH}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-emerald-50/95">
              {copy.urgentP1}
              <a
                className="underline text-amber-300"
                href={`mailto:${copy.email}?subject=${copy.urgentSubject}`}
              >
                {copy.email}
              </a>{" "}
              {locale === "it" ? "con oggetto " : "with subject "}{" "}
              <strong>{copy.urgentStrong}</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-emerald-900 shadow-sm md:p-6">
            <h4 className="mb-2 text-sm font-semibold text-emerald-950 sm:text-base">
              {copy.beforeH}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm">
              <li>{copy.beforeL1}</li>
              <li>{copy.beforeL2}</li>
              <li>{copy.beforeL3}</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* ================================ FAQS ============================== */}
      <section className="mx-auto max-w-5xl px-3 pb-10 sm:px-6 md:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-emerald-950">
          {copy.faqsH2}
        </h2>

        <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-emerald-950 sm:text-[15px]">
            {copy.faq1Q}
          </summary>
          <div className="mt-2 text-sm text-emerald-900">{copy.faq1A}</div>
        </details>

        <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-emerald-950 sm:text-[15px]">
            {copy.faq2Q}
          </summary>
          <div className="mt-2 text-sm text-emerald-900">{copy.faq2A}</div>
        </details>

        <details className="mb-3 rounded-xl border border-gray-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-emerald-950 sm:text-[15px]">
            {copy.faq3Q}
          </summary>
          <div className="mt-2 text-sm text-emerald-900">{copy.faq3A}</div>
        </details>
      </section>

      {/* ============================ OTHER ROUTES ========================== */}
      <section className="mx-auto max-w-5xl px-3 pb-12 sm:px-6 md:px-8 md:pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm shadow-sm md:p-6">
          <h2 className="mb-3 text-center text-base font-semibold text-emerald-950">
            {copy.otherH}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={pLocale("/services/passport")}
            >
              {copy.otherPassport}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={pLocale("/services/nin-support")}
            >
              {copy.otherNin}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={pLocale("/contact")}
            >
              {copy.otherContact}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={pLocale("/services")}
            >
              {copy.allServices}
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
    </main>
  );
}
