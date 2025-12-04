// src/app/[locale]/services/nin-support/page.tsx

import NinForm from "@/components/NinForm";
import type { Metadata } from "next";
import Image from "next/image";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title: "National Insurance (NIN) Support for Italians in the UK | Resinaro",
  description:
    "Practical, friendly support in Italian and English to apply for or recover a UK National Insurance Number (NIN). We help you prepare documents and understand HMRC letters.",
  alternates: {
    canonical: "/services/nin-support",
    languages: {
      en: "/en/services/nin-support",
      it: "/it/services/nin-support",
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
    title: "National Insurance (NIN) Support for Italians in the UK | Resinaro",
    description:
      "Step-by-step help for Italians and migrants in the UK who need a National Insurance Number (NIN) or need to recover their number. We are not HMRC.",
    url: "https://www.resinaro.com/services/nin-support",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-nin.png",
        width: 1200,
        height: 630,
        alt: "National Insurance Number help by Resinaro",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "National Insurance (NIN) Support for Italians in the UK | Resinaro",
    description:
      "Clear, practical help to apply for or recover a UK National Insurance Number (NIN). We explain HMRC letters and processes in simple Italian and English.",
    images: ["/images/service-nin.png"],
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
      name: "Can you guarantee I will get a National Insurance Number?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Only HMRC can decide whether to issue or confirm a National Insurance Number. Resinaro helps you understand the process, prepare documents and respond to HMRC, but we cannot change official decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start work before I receive my NIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "In many cases you can start work while waiting for your National Insurance Number, as long as you can prove your right to work in the UK. Your employer will usually ask for your NIN as soon as you receive it. We can help you understand what to tell your employer.",
      },
    },
    {
      "@type": "Question",
      name: "What does Resinaro actually do for NIN support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We help you understand which NIN route applies to you, prepare a checklist of documents, support you to complete an application or recovery request, and explain HMRC letters in simple language. We also suggest how and when to contact HMRC, but we do not replace HMRC.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "National Insurance Number (NIN) Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Support for UK National Insurance Number (NIN) processes",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Friendly, practical support for Italians and migrants in the UK to apply for or recover a National Insurance Number (NIN). We prepare checklists, support applications and explain HMRC letters.",
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
      name: "National Insurance (NIN) support",
      item: "https://www.resinaro.com/services/nin-support",
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

/* ============================= i18n strings ============================ */

function t(locale: "en" | "it") {
  const it = locale === "it";

  return {
    heroAlt: it
      ? "Aiuto per il National Insurance Number nel Regno Unito"
      : "Help with National Insurance Number in the UK",
    heroH1: it
      ? "Supporto per il National Insurance Number (NIN)"
      : "National Insurance (NIN) support in the UK",
    heroSub: it ? (
      <>
        Aiuto pratico e{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          spiegazioni semplici
        </span>{" "}
        per chi deve richiedere o recuperare il{" "}
        <strong>National Insurance Number</strong> nel Regno Unito. Parliamo{" "}
        <strong>italiano e inglese</strong>.{" "}
        <strong>Non siamo HMRC.</strong>
      </>
    ) : (
      <>
        Practical help and{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          clear explanations
        </span>{" "}
        if you need to apply for or recover a{" "}
        <strong>UK National Insurance Number</strong>. Support in{" "}
        <strong>Italian and English</strong>.{" "}
        <strong>We are not HMRC.</strong>
      </>
    ),
    heroCta: it ? "Inizia il supporto NIN" : "Start NIN support",
    heroSecondaryCta: it ? "Vedi il modulo" : "View the form",
    heroTrustLine: it
      ? "Persone reali nel Regno Unito · Italiano e inglese · Niente promesse false"
      : "Real humans in the UK · Italian & English · No false promises",

    whoH: it ? "È per te se…" : "This is for you if…",
    whoList: it
      ? [
          "Ti sei trasferito/a nel Regno Unito e devi richiedere il primo NIN.",
          "Hai perso o non ricordi il tuo NIN e non sai come recuperarlo.",
          "Ricevi lettere o email da HMRC sul NIN e non le capisci bene.",
          "Preferisci qualcuno che ti spieghi la procedura in italiano e ti aiuti a non sbagliare.",
        ]
      : [
          "You moved to the UK and need your first National Insurance Number.",
          "You’ve lost or forgotten your NIN and don’t know how to recover it.",
          "You’re receiving letters or emails from HMRC about your NIN and you don’t fully understand them.",
          "You prefer someone to explain the process in Italian and help you avoid mistakes.",
        ],
    whoNotH: it ? "Non è per te se…" : "It’s not for you if…",
    whoNotList: it
      ? [
          "Cerchi consulenza legale fiscale o in materia di immigrazione (non la forniamo).",
          "Vuoi che qualcuno prenda decisioni al posto di HMRC o garantisca tempi e risultati.",
        ]
      : [
          "You’re looking for formal tax or immigration legal advice (we don’t provide this).",
          "You want someone to make decisions instead of HMRC or guarantee outcomes and timelines.",
        ],

    whatH: it ? "Cosa facciamo per te" : "What you get with this service",
    what1Title: it ? "Capire la tua situazione" : "Understand your situation",
    what1Body: it
      ? "Facciamo una breve analisi della tua situazione (lavoro, documenti, lettere ricevute) e identifichiamo il percorso NIN più adatto."
      : "We review your situation (work, documents, letters received) and identify the NIN route that fits you best.",
    what2Title: it
      ? "Checklist e domanda / recupero"
      : "Checklist and application / recovery",
    what2Body: it
      ? "Prepariamo con te una checklist dei documenti, ti aiutiamo a compilare la domanda o la richiesta di recupero e ti spieghiamo cosa inviare."
      : "We prepare a tailored checklist, help you complete the NIN application or recovery request, and explain what to submit.",
    what3Title: it
      ? "Leggere le risposte di HMRC"
      : "Read HMRC responses",
    what3Body: it
      ? "Ti aiutiamo a capire le lettere o email di HMRC legate al NIN e ti suggeriamo i prossimi passi in modo chiaro."
      : "We help you understand HMRC letters or emails about your NIN and suggest clear next steps.",

    howH: it ? "Come funziona (in 3 passi)" : "How it works (in 3 steps)",
    how1Title: it ? "1. Ci scrivi tramite modulo" : "1. You contact us via the form",
    how1Body: it
      ? "Compili il modulo qui sotto con i tuoi dati base, cosa ti serve e, se puoi, alleghi eventuali lettere di HMRC."
      : "You fill in the form below with basic details, what you need, and any HMRC letters you have.",
    how2Title: it ? "2. Analisi e checklist" : "2. Review and checklist",
    how2Body: it
      ? "Esaminiamo le informazioni, prepariamo una checklist chiara e ti guidiamo nella compilazione della domanda o richiesta di recupero."
      : "We review your information, prepare a clear checklist and guide you through the application or recovery request.",
    how3Title: it ? "3. Invii e segui la pratica" : "3. You submit and follow the case",
    how3Body: it
      ? "Invii la domanda a HMRC e, quando arrivano le risposte, ti aiutiamo a leggerle e a capire i prossimi passi."
      : "You submit to HMRC and, when responses arrive, we help you read them and understand the next steps.",

    pricingH: it
      ? "Prezzo per il supporto NIN"
      : "Pricing for NIN support",
    pricingMain: it ? (
      <>
        <strong>£20</strong> — una pratica NIN, che include analisi iniziale,
        checklist personalizzata, supporto per una domanda o richiesta di
        recupero e spiegazione della prima risposta di HMRC.
      </>
    ) : (
      <>
        <strong>£20</strong> — one NIN support case, including intake review,
        personalised checklist, support for one application or recovery request,
        and explanation of the first HMRC response.
      </>
    ),
    pricingNote: it
      ? "Il prezzo riguarda solo l’aiuto di Resinaro. Non include eventuali contributi, tasse o costi richiesti da HMRC o da altri enti."
      : "Price is for Resinaro’s support only. It does not include any contributions, fees or costs requested by HMRC or other bodies.",
    pricingSub: it
      ? "Se hai difficoltà economiche, puoi scriverci prima a resinaro@proton.me per chiedere se sono disponibili tariffe agevolate."
      : "If you are in financial difficulty, you can email resinaro@proton.me before booking to ask about reduced rates.",

    formH: it ? "Inizia il supporto NIN" : "Start NIN support",
    formP: it
      ? "Ti rispondiamo con i prossimi passi e come inviare i documenti in modo sicuro. Puoi anche scegliere di inviarli via email più tardi."
      : "We’ll reply with next steps and how to send documents securely. You can also choose to email documents later.",
    formSupport: it ? (
      <>
        Domande prima di procedere? Scrivici a{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ) : (
      <>
        Questions before starting? Email{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ),

    docsH: it
      ? "Documenti utili per il NIN (promemoria veloce)"
      : "Helpful documents for NIN (quick checklist)",
    docsForTitle: it
      ? "Di solito è utile avere:"
      : "It usually helps to have:",
    docsList: it
      ? [
          "Passaporto o documento di identità.",
          "Prova di indirizzo nel Regno Unito (es. estratto conto, bolletta, council tax, lettera NHS).",
          "Dettagli del datore di lavoro o prove che stai cercando lavoro.",
          "Lettere o email di HMRC relative al tuo NIN (se le hai).",
        ]
      : [
          "Passport or identity document.",
          "Proof of UK address (e.g. bank statement, utility bill, council tax, NHS letter).",
          "Employer details or evidence you are looking for work.",
          "Any HMRC letters or emails related to your NIN.",
        ],
    docsNote: it ? (
      <>
        Se ti manca qualcosa, non ti preoccupare: durante il supporto vedremo
        insieme quali alternative sono possibili e come spiegarlo a HMRC.
      </>
    ) : (
      <>
        If you are missing some of these, don’t worry: during the support we’ll
        discuss possible alternatives and how to explain your situation to HMRC.
      </>
    ),

    expectationsH: it
      ? "Aspettative oneste (leggi per favore)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        <strong>Non siamo HMRC</strong> e non possiamo rilasciare un NIN o
        cambiare decisioni ufficiali. Possiamo aiutarti a presentare una
        richiesta chiara e completa, ma{" "}
        <strong>non possiamo garantire tempi o risultati</strong>.
      </>
    ) : (
      <>
        <strong>We are not HMRC</strong> and we cannot issue a NIN or change
        official decisions. We can help you submit a clear, complete request,
        but we <strong>cannot guarantee timelines or outcomes</strong>.
      </>
    ),
    expectationsP2: it ? (
      <>
        Per le informazioni ufficiali più aggiornate, fai sempre riferimento a{" "}
        <a
          className="underline"
          href="https://www.gov.uk/apply-national-insurance-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        . Il nostro ruolo è aiutarti a capire e applicare quelle regole al tuo
        caso concreto.
      </>
    ) : (
      <>
        For the most up-to-date official information, always refer to{" "}
        <a
          className="underline"
          href="https://www.gov.uk/apply-national-insurance-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        . Our role is to help you understand and apply those rules to your real
        situation.
      </>
    ),

    otherH: it ? "Altri percorsi utili" : "Other helpful routes",
    otherGov: it
      ? "Istruzioni ufficiali su GOV.UK per il NIN"
      : "Official GOV.UK NIN guidance",
    otherContact: it
      ? "Contatta direttamente Resinaro"
      : "Contact Resinaro directly",
    allServices: it ? "Tutti i servizi" : "All services",
  };
}

/* ================================ PAGE ================================= */

export default function NinSupportPage({
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
            src="/images/service-nin.png"
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
                    ? "Supporto per italiani nel Regno Unito"
                    : "Support for Italians in the UK"}
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">
                  {copy.heroH1}
                </h1>
                <p className="mt-3 text-sm text-emerald-900 sm:text-[15px]">
                  {copy.heroSub}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-50 shadow-sm shadow-emerald-700/40 hover:bg-emerald-800 transition-colors"
                  >
                    {copy.heroCta}
                  </a>
                  <a
                    href="#book"
                    className="text-sm font-medium text-emerald-900 underline underline-offset-4"
                  >
                    {copy.heroSecondaryCta}
                  </a>
                </div>

                <p className="mt-3 text-xs text-emerald-800">
                  {copy.heroTrustLine}
                </p>
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
      <section className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8">
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
          <p className="mt-2 text-center text-sm text-emerald-950">
            {copy.pricingMain}
          </p>
          <p className="mt-2 text-center text-xs text-emerald-900/80">
            {copy.pricingNote}
          </p>
          <p className="mt-2 text-center text-xs text-emerald-900/80">
            {copy.pricingSub}
          </p>
        </div>
      </section>

      {/* ================================ FORM ============================== */}
      <section
        id="book"
        className="mx-auto max-w-5xl px-3 py-6 sm:px-6 md:px-8 md:py-8"
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold text-emerald-950">
              {copy.formH}
            </h2>
            <p className="mt-1 text-sm text-emerald-900">{copy.formP}</p>
          </div>
          <NinForm />
          <p className="mt-4 text-center text-xs text-emerald-900">
            {copy.formSupport}
          </p>
        </div>
      </section>

      {/* ===================== DOCS + HONEST EXPECTATIONS ================== */}
      <section className="mx-auto grid max-w-5xl gap-6 px-3 pb-8 sm:px-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.docsH}
          </h2>
          <h3 className="mt-2 text-sm font-semibold text-emerald-950">
            {copy.docsForTitle}
          </h3>
          <ul className="mt-2 list-disc list-inside text-sm text-emerald-900">
            {copy.docsList.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-emerald-900/90">{copy.docsNote}</p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.expectationsH}
          </h2>
          <p className="mt-2 text-sm text-emerald-950">{copy.expectationsP1}</p>
          <p className="mt-2 text-xs text-emerald-900/90">
            {copy.expectationsP2}
          </p>
        </div>
      </section>

      {/* ============================= OTHER ROUTES ======================== */}
      <section className="mx-auto max-w-5xl px-3 pb-12 sm:px-6 md:px-8 md:pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm shadow-sm md:p-6">
          <h2 className="mb-3 text-center text-base font-semibold text-emerald-950">
            {copy.otherH}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href="https://www.gov.uk/apply-national-insurance-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.otherGov}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={p("/contact")}
            >
              {copy.otherContact}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={p("/services")}
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
    </main>
  );
}

/* ============================ SMALL COMPONENTS ========================== */

function FeatureCard({
  title,
  body,
}: {
  title: React.ReactNode;
  body: React.ReactNode;
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
  title: React.ReactNode;
  body: React.ReactNode;
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
