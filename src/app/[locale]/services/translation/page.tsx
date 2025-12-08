// src/app/[locale]/services/translation/page.tsx

/* --------------------------------------------------------------------------
   Certified Translation Service (Italian ↔ English) — Resinaro
   Focused on consular / citizenship / immigration docs from the UK.
---------------------------------------------------------------------------*/

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import TranslationForm from "@/components/TranslationForm";
import { p, type Locale } from "@/lib/localePath";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title:
    "Certified Translation (Italian ↔ English, UK) from £18 | Resinaro",
  description:
    "Affordable certified translations between Italian and English from £18 per document, with 48-hour UK postage included. Ideal for consular, citizenship and immigration documents.",
  alternates: {
    canonical: "/services/translation",
    languages: {
      en: "/en/services/translation",
      it: "/it/services/translation",
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
      "Certified Translation (Italian ↔ English, UK) from £18 | Resinaro",
    description:
      "Certified Italian ↔ English translations from £18 per document, with 48-hour UK postage included. Perfect for citizenship by marriage, AIRE, passports and visa files.",
    url: "https://www.resinaro.com/services/translation",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-passport.png",
        width: 1200,
        height: 630,
        alt: "Certified Italian–English translation service by Resinaro",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Certified Translation (Italian ↔ English, UK) from £18 | Resinaro",
    description:
      "Low-cost, certified Italian ↔ English translations from £18, including 48-hour UK postage. Real humans, no hidden fees.",
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
      name: "How much does a certified translation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "For most standard certificates, our pricing is £18 for 1 page, £24 for 2 pages, £26 for 3 pages and £30 for 4 pages. This includes a certified translation and 48-hour UK postage. Complex or longer files may cost more, but we always confirm the price before you pay.",
      },
    },
    {
      "@type": "Question",
      name: "Is 48-hour UK postage included in the translation price?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. For typical consular and citizenship documents, 48-hour UK postage is included in the fee. We send the certified translation by post after you approve the PDF version. There is no extra postage charge for standard UK delivery.",
      },
    },
    {
      "@type": "Question",
      name:
        "Can you translate my UK marriage certificate with apostille for Italian citizenship by marriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. A common example is a UK marriage certificate (already apostilled) that needs an Italian translation for citizenship by marriage. We can translate it, certify it and post the hard copy to you in the UK.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a sworn/legal translation?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide certified translations with a signed declaration in Italian or English confirming that the translation is true and accurate. Some authorities may require an additional sworn or notarised procedure. We will flag this when you share who the translation is for.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept scans or photos of documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Clear scans or high-quality photos are usually enough to prepare the translation. If a consulate or authority requires the translator to see the original, we will tell you before work starts.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Certified Translation (Italian ↔ English, UK)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Certified Italian–English translation for consular and immigration use",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Low-cost, certified Italian ↔ English translations for citizenship, consular, AIRE, visa and passport files. Transparent pricing and 48-hour UK postage included for standard cases.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      minPrice: 18,
      maxPrice: 200,
    },
  },
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
      name: "Certified translation",
      item: "https://www.resinaro.com/services/translation",
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

function t(locale: Locale) {
  const it = locale === "it";

  return {
    heroAlt: it
      ? "Servizio di traduzione certificata italiano–inglese"
      : "Certified Italian–English translation service",
    heroH1: it
      ? "Traduzioni certificate (Italiano ↔ Inglese) da £18"
      : "Certified translations (Italian ↔ English) from £18",
    heroSub: it ? (
      <>
        Traduzioni{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          certificate
        </span>{" "}
        tra <strong>italiano e inglese</strong> per certificati UK e italiani,
        soprattutto per{" "}
        <strong>cittadinanza, consolato e immigrazione</strong>. Prezzi
        chiari, niente sorprese,{" "}
        <strong>spedizione UK 48 ore inclusa</strong> per la maggior parte dei
        casi.
      </>
    ) : (
      <>
        <span className="underline underline-offset-4 decoration-emerald-700">
          Certified translations
        </span>{" "}
        between <strong>Italian and English</strong> for UK and Italian
        certificates, especially for{" "}
        <strong>citizenship, consular and immigration</strong> paperwork. Clear
        prices, no surprises, and{" "}
        <strong>48-hour UK postage included</strong> for most cases.
      </>
    ),
    heroCta: it ? "Prenota una traduzione" : "Book a translation",
    heroSecondaryCta: it ? "Vedi come funziona" : "See how the service works",
    heroTrustLine: it
      ? "Prezzi chiari · Conosciamo bene consolati e cittadini UK/IT · Nessun costo nascosto"
      : "Clear pricing · Familiar with Italian consulates & UK docs · No hidden fees",

    heroSideTitle: it
      ? "Perfetto per questi documenti"
      : "Perfect for these documents",
    heroSideList: it
      ? [
          "Certificati di matrimonio UK (con apostille) per cittadinanza per matrimonio",
          "Certificati di nascita, morte, casellari e atti di stato civile",
          "Documenti per AIRE, passaporto, CIE e visti",
        ]
      : [
          "UK marriage certificates (with apostille) for citizenship by marriage",
          "Birth, death, criminal record and civil status certificates",
          "Documents for AIRE, passports, ID cards (CIE) and visas",
        ],

    whoH: it ? "Questo servizio fa per te se…" : "This service is for you if…",
    whoList: it
      ? [
          "Devi tradurre certificati UK in italiano per cittadinanza, consolato o visto.",
          "Ti serve una traduzione chiara, certificata ma a costo onesto, senza sorprese.",
          "Preferisci qualcuno che conosce già i percorsi tipo cittadinanza per matrimonio o AIRE.",
        ]
      : [
          "You need UK certificates translated into Italian for citizenship, consular or visa use.",
          "You want a clear, certified translation at an honest price with no weird extras.",
          "You’d like someone who already understands routes like citizenship by marriage or AIRE.",
        ],
    whoNotH: it ? "Non è ideale se…" : "It’s not the right fit if…",
    whoNotList: it
      ? [
          "Ti serve un giuramento/notarizzazione complessa in un tribunale specifico (ti indichiamo il percorso, ma non lo gestiamo noi).",
          "Cerchi traduzioni in combinazioni linguistiche diverse da italiano ↔ inglese.",
        ]
      : [
          "You need a complex sworn/notarised procedure at a specific court (we can signpost but not handle it directly).",
          "You need language pairs other than Italian ↔ English.",
        ],

    whatH: it ? "Cosa include la traduzione" : "What you get with this service",
    what1Title: it ? "Traduzione accurata e leggibile" : "Accurate, readable translation",
    what1Body: it
      ? "Traduzione chiara e fedele del certificato, con attenzione a nomi, date e riferimenti consolare."
      : "Clear, faithful translation of your certificate with careful attention to names, dates and consular wording.",
    what2Title: it ? "Dichiarazione firmata (certificata)" : "Signed translator declaration",
    what2Body: it
      ? "Allegata alla traduzione ricevi una dichiarazione firmata (in italiano o inglese) che conferma che la traduzione è completa e accurata."
      : "You receive a signed declaration (in Italian or English) confirming that the translation is complete and accurate.",
    what3Title: it ? "PDF + spedizione UK 48 ore inclusa" : "PDF + 48-hour UK post included",
    what3Body: it
      ? "Prima una copia PDF via email per controllo, poi spediamo l’originale cartaceo in UK con consegna 48 ore inclusa nel prezzo."
      : "First a PDF copy by email for you to check, then we post the physical certified translation within the UK with 48-hour delivery included in the price.",

    howH: it ? "Come funziona (3 passi)" : "How it works (3 steps)",
    how1Title: it ? "1. Scegli le pagine e paghi" : "1. Choose pages & pay",
    how1Body: it
      ? "Con il modulo qui sotto scegli quante pagine (1, 2, 3 o 4) ti servono e paghi in modo sicuro via Stripe: 1 pagina £18, 2 pagine £24, 3 pagine £26, 4 pagine £30."
      : "Use the form below to choose how many pages you need translated (1, 2, 3 or 4) and pay securely via Stripe: 1 page £18, 2 pages £24, 3 pages £26, 4 pages £30.",
    how2Title: it ? "2. Ti scriviamo per i documenti" : "2. We email you for the documents",
    how2Body: it
      ? "Dopo il pagamento ti contattiamo via email per chiederti le scansioni/foto dei certificati e per chi è la traduzione (consolato, tribunale, ecc.)."
      : "After payment we email you asking for scans/photos of the certificates and who the translation is for (consulate, court, etc.).",
    how3Title: it ? "3. Traduzione, PDF e posta" : "3. Translation, PDF and post",
    how3Body: it
      ? "Traduciamo, ti inviamo il PDF per controllo e poi spediamo la versione firmata in cartaceo (48 ore UK incluse nel prezzo)."
      : "We translate, send you a PDF to check, then post the signed hard copy (48-hour UK delivery included in the price).",

    pricingH: it ? "Prezzi trasparenti (più comuni)" : "Transparent pricing (most common)",
    pricingIntro: it
      ? "Per la maggior parte dei certificati standard (A4, testo normale) puoi prenotare direttamente qui:"
      : "For most standard certificates (A4, normal text) you can book directly here:",
    pricingBand1: it ? "1 pagina: £18 tutto incluso" : "1 page: £18 all-in",
    pricingBand2: it ? "2 pagine: £24 tutto incluso" : "2 pages: £24 all-in",
    pricingBand3: it ? "3 pagine: £26 tutto incluso" : "3 pages: £26 all-in",
    pricingBand4: it ? "4 pagine: £30 tutto incluso" : "4 pages: £30 all-in",
    pricingNote: it
      ? "Il prezzo include traduzione, dichiarazione firmata e spedizione UK 48 ore. Per documenti più lunghi (5+ pagine) o molto complessi, ti faremo un preventivo separato prima di chiederti qualsiasi pagamento."
      : "Price includes translation, signed declaration and 48-hour UK postage. For longer documents (5+ pages) or very complex files, we’ll send a separate quote before asking you to pay anything.",
    pricingExampleTitle: it
      ? "Esempio pratico (cittadinanza per matrimonio)"
      : "Practical example (citizenship by marriage)",
    pricingExampleBody: it
      ? "Hai un certificato di matrimonio UK con apostille già fatto e ti serve la traduzione in italiano per la cittadinanza per matrimonio? Di solito è 1 pagina: paghi £18 e ricevi PDF + versione cartacea con spedizione UK 48 ore inclusa."
      : "You have a UK marriage certificate with apostille and need an Italian translation for citizenship by marriage? That’s usually 1 page: you pay £18 and receive both a PDF and the paper copy, with 48-hour UK postage included.",

    formH: it
      ? "Prenota una traduzione certificata"
      : "Book a certified translation",
    formP: it
      ? "Inserisci email e numero di telefono/WhatsApp, scegli quante pagine ti servono e paga in modo sicuro. Dopo il pagamento ti scriviamo noi per chiederti i documenti da tradurre e i dettagli del consolato/autorità."
      : "Add your email and phone/WhatsApp number, choose how many pages you need translated and pay securely. After payment we’ll email you to collect the documents and consulate/authority details.",
    formSupport: it ? (
      <>
        Dubbi prima di pagare? Scrivici a{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        o su{" "}
        <a
          className="underline"
          href="https://wa.me/447424208127"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </>
    ) : (
      <>
        Questions before paying? Email{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>{" "}
        or message us on{" "}
        <a
          className="underline"
          href="https://wa.me/447424208127"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </>
    ),

    docsH: it ? "Cosa ti chiederemo dopo il pagamento" : "What we’ll ask for after payment",
    docsForTitle: it ? "In quasi tutti i casi:" : "In almost all cases:",
    docsList: it
      ? [
          "Scansione o foto chiara di tutte le pagine rilevanti (fronte/retro se c’è testo).",
          "Indicazione di chi riceverà la traduzione (consolato, tribunale, Home Office, ecc.).",
          "Eventuali istruzioni specifiche ricevute dall’autorità (es. modello di dichiarazione, lingua).",
        ]
      : [
          "Clear scan or photo of all relevant pages (front and back if there is text).",
          "Who the translation is for (consulate, court, Home Office, etc.).",
          "Any specific instructions you received from that authority (e.g. wording, language of declaration).",
        ],
    docsNote: it ? (
      <>
        Se non sei sicuro dei requisiti, potrai inviarci lo screenshot o il PDF
        delle istruzioni ufficiali e li leggiamo insieme prima di procedere.
      </>
    ) : (
      <>
        If you’re not sure about the requirements, you can send us a screenshot
        or PDF of the official instructions and we’ll read them with you before
        we proceed.
      </>
    ),

    expectationsH: it
      ? "Aspettative oneste (da leggere)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        Le nostre traduzioni sono certificate con dichiarazione firmata, ma{" "}
        <strong>non possiamo controllare</strong> decisioni e preferenze di
        consolati, tribunali o altre autorità. A volte possono chiedere passaggi
        extra (giuramento, notarizzazione, ecc.).
      </>
    ) : (
      <>
        Our translations come with a signed declaration, but{" "}
        <strong>we cannot control</strong> how consulates, courts or other
        authorities interpret requirements. Sometimes they may ask you for extra
        steps (sworn or notarised procedures, etc.).
      </>
    ),
    expectationsP2: it ? (
      <>
        Ti diremo sempre in anticipo se pensiamo che serva un passaggio
        aggiuntivo che noi non facciamo direttamente, così puoi decidere in
        modo informato prima di spendere soldi.
      </>
    ) : (
      <>
        We’ll always tell you upfront if we think there is an extra step we
        don’t directly handle, so you can decide with full information before
        spending money.
      </>
    ),

    otherH: it ? "Altri percorsi utili" : "Other helpful routes",
    otherCitMarriage: it
      ? "Guida: cittadinanza per matrimonio dal Regno Unito"
      : "Guide: citizenship by marriage from the UK",
    otherCitDescent: it
      ? "Supporto cittadinanza per discendenza"
      : "Citizenship by descent support",
    otherPassport: it
      ? "Appuntamenti passaporto (Prenot@Mi 12+)"
      : "Passport appointments (Prenot@Mi 12+)",
    otherServices: it ? "Tutti i servizi Resinaro" : "All Resinaro services",
  };
}

/* ================================ PAGE ================================= */

export default function TranslationServicePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const copy = t(locale);
  const path = (to: string) => p(locale, to);

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
                    ? "Servizio di traduzione per chi vive in UK"
                    : "Translation service for people in the UK"}
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">
                  {copy.heroH1}
                </h1>
                <p className="mt-3 text-sm text-emerald-900 sm:text-[15px]">
                  {copy.heroSub}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="#request"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-50 shadow-sm shadow-emerald-700/40 transition-colors hover:bg-emerald-800"
                  >
                    {copy.heroCta}
                  </a>
                  <a
                    href="#how"
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
      <section
        id="how"
        className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8"
      >
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
            {copy.pricingIntro}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-emerald-200 bg-white p-4 text-center">
              <p className="text-xs font-semibold text-emerald-700">1 page</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-950">
                £18
              </p>
              <p className="mt-1 text-xs text-emerald-900">
                {copy.pricingBand1}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-800 bg-emerald-900 p-4 text-center text-emerald-50">
              <p className="text-xs font-semibold text-emerald-100">2 pages</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-50">
                £24
              </p>
              <p className="mt-1 text-xs text-emerald-100">
                {copy.pricingBand2}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-white p-4 text-center">
              <p className="text-xs font-semibold text-emerald-700">3 pages</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-950">
                £26
              </p>
              <p className="mt-1 text-xs text-emerald-900">
                {copy.pricingBand3}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-white p-4 text-center">
              <p className="text-xs font-semibold text-emerald-700">4 pages</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-950">
                £30
              </p>
              <p className="mt-1 text-xs text-emerald-900">
                {copy.pricingBand4}
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-emerald-900/80">
            {copy.pricingNote}
          </p>

          <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-4 text-sm text-emerald-900">
            <h3 className="text-sm font-semibold text-emerald-950">
              {copy.pricingExampleTitle}
            </h3>
            <p className="mt-1 text-xs sm:text-sm">
              {copy.pricingExampleBody}
            </p>
          </div>
        </div>
      </section>

      {/* ================================ FORM ============================== */}
      <section
        id="request"
        className="mx-auto max-w-5xl px-3 py-6 sm:px-6 md:px-8 md:py-8"
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold text-emerald-950">
              {copy.formH}
            </h2>
            <p className="mt-1 text-sm text-emerald-900">{copy.formP}</p>
          </div>
          <TranslationForm />
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
              href={path("/community/citizenship-by-marriage-uk")}
            >
              {copy.otherCitMarriage}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={path("/services/citizenship-by-descent")}
            >
              {copy.otherCitDescent}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={path("/services/passport")}
            >
              {copy.otherPassport}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={path("/services")}
            >
              {copy.otherServices}
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd),
        }}
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
