/* --------------------------------------------------------------------------
   Italian Passport Appointment Help (12+ / Adults, UK) — Resinaro
   This page is ONLY for Prenot@Mi passport appointments (12+ / adults).
   Under-12 postal passports and waiting-list support should live on
   separate pages (e.g. /services/passport-under-12, /services/passport-waiting-list).
---------------------------------------------------------------------------*/

import PassportForm from "@/components/PassportForm";
import CarouselBinder from "@/components/CarouselBinder";
import type { Metadata } from "next";
import Image from "next/image";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title: "Italian Passport Appointment Help (UK, Prenot@Mi 12+) | Resinaro",
  description:
    "Help getting Italian passport appointments via Prenot@Mi (12+ / adults) for Italians in the UK. We monitor and try to book your slot, with clear expectations and human support.",
  alternates: {
    canonical: "/services/passport",
    languages: {
      en: "/en/services/passport",
      it: "/it/services/passport",
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
    title: "Italian Passport Appointment Help (UK, Prenot@Mi 12+) | Resinaro",
    description:
      "We help Italians in the UK get passport appointments on Prenot@Mi (12+ / adults). Real bookings, honest expectations. We are not the Consulate.",
    url: "https://www.resinaro.com/services/passport",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-passport.png",
        width: 1200,
        height: 630,
        alt: "Italian passport help by Resinaro",
      },
      {
        url: "/proof/2026-02-manchester-appointment-01.webp",
        width: 1600,
        height: 1000,
        alt: "Recent appointment booked — Manchester",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Passport Appointment Help (UK, Prenot@Mi 12+) | Resinaro",
    description:
      "Help getting Italian passport appointments (12+ / adults) via Prenot@Mi in the UK. No false promises, just clear support and real humans.",
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
      name: "Do you guarantee an appointment or passport?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Appointment availability and passport issuance are decided only by the Italian Consulate. Resinaro provides monitoring and booking assistance on Prenot@Mi for 12+ / adults; outcomes and timelines are outside our control.",
      },
    },
    {
      "@type": "Question",
      name: "What does Resinaro actually do for passport appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We help Italians in the UK with 12+ / adult passport appointments by: (1) checking or setting up your Prenot@Mi account, (2) monitoring the right section for your consulate, and (3) trying to secure a booking when slots appear. We then email you the confirmation and a simple checklist.",
      },
    },
    {
      "@type": "Question",
      name: "Can I email documents instead of uploading them in the form?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can email documents to resinaro@proton.me. The form also has an “I’ll email later” option if that’s easier for you.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian Passport Appointment Help (Prenot@Mi 12+ / Adults)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Prenot@Mi passport appointment booking support (12+ / adults)",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Friendly support for booking Italian passport appointments on Prenot@Mi (12+ / adults) for Italians living in the UK. No guarantees of availability or issuance.",
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
      name: "Passport appointments (12+)",
      item: "https://www.resinaro.com/services/passport",
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

const imageObjectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ImageObject",
      contentUrl:
        "https://www.resinaro.com/proof/2026-02-manchester-appointment-01.webp",
      name: "Booked passport appointment — Manchester — February 2026",
      width: 1600,
      height: 1000,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_1.webp",
      name: "Italian passport appointment confirmed via Prenot@Mi",
      width: 1284,
      height: 1336,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_3.webp",
      name: "Italian passport appointment booked successfully",
      width: 1216,
      height: 1968,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_4.webp",
      name: "Recent passport appointment booked successfully",
      width: 1134,
      height: 598,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_5.webp",
      name: "Passport appointment booked successfully",
      width: 1242,
      height: 1574,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_6.webp",
      name: "Passport appointment booked successfully",
      width: 1184,
      height: 733,
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://www.resinaro.com/proof/proof_7.webp",
      name: "Recent passport appointment booked successfully",
      width: 1284,
      height: 904,
    },
  ],
};

/* ============================= i18n strings ============================ */

function t(locale: "en" | "it") {
  const it = locale === "it";

  return {
    heroAlt: it
      ? "Aiuto per appuntamento passaporto italiano su Prenot@Mi"
      : "Help getting an Italian passport appointment on Prenot@Mi",
    heroH1: it
      ? "Aiuto per appuntamenti passaporto (Prenot@Mi, 12+)"
      : "Italian passport appointment help (Prenot@Mi, 12+)",
    heroSub: it ? (
      <>
        Ti aiutiamo a ottenere un appuntamento passaporto{" "}
        <strong>su Prenot@Mi</strong> per{" "}
        <strong>12+ / adulti nel Regno Unito</strong>. Monitoriamo noi gli
        slot, con aspettative oneste.{" "}
        <strong>Non siamo il Consolato.</strong>
      </>
    ) : (
      <>
        We help you get an Italian passport appointment{" "}
        <strong>on Prenot@Mi</strong> for{" "}
        <strong>12+ / adults in the UK</strong>. We do the monitoring and
        clicking, with honest expectations.{" "}
        <strong>We are not the Consulate.</strong>
      </>
    ),
    heroCta: it
      ? "Inizia l’aiuto per appuntamento"
      : "Start appointment support",
    heroSecondaryCta: it
      ? "Vedi il modulo"
      : "View the form",
    heroTrustLine: it
      ? "Persone reali nel Regno Unito · Italiano e inglese · Processo sicuro e privato"
      : "Real humans in the UK · Italian & English · Safe, private process",

    miniProofLabel: it
      ? "Appuntamenti reali Prenot@Mi prenotati da noi"
      : "Real Prenot@Mi appointments we’ve booked",
    miniProofCaption: it
      ? "Dettagli dei clienti nascosti per sicurezza. Le schermate sono sicure da mostrare."
      : "Client details are hidden for safety. Screenshots are safe to show.",

    whoH: it ? "È per te se…" : "This is for you if…",
    whoList: it
      ? [
          "Sei iscritto all’AIRE nel Regno Unito (o in fase di iscrizione).",
          "Hai bisogno di rinnovare o fare il primo passaporto adulto (12+).",
          "Sei bloccato a fare refresh su Prenot@Mi o hai paura di sbagliare.",
          "Vuoi che qualcuno monitori gli slot e provi a prenotarli per te.",
        ]
      : [
          "You’re registered with AIRE in the UK (or in the process).",
          "You need a renewal or first adult passport (12+).",
          "You’re stuck refreshing Prenot@Mi or scared of doing it wrong.",
          "You’d like someone to monitor slots and try to book them for you.",
        ],
    whoNotH: it ? "Non è per te se…" : "It’s not for you if…",
    whoNotList: it
      ? [
          "Ti serve un passaporto Under-12 per tuo/a figlio/a (serve un percorso postale diverso).",
          "Cerchi una garanzia assoluta dal Consolato per l’appuntamento o il passaporto.",
        ]
      : [
          "You need an Under-12 passport for your child (that’s a different postal route).",
          "You want a guaranteed appointment or passport decision from the Consulate.",
        ],

    whatH: it ? "Cosa facciamo per te" : "What you get with this service",
    what1Title: it ? "Controllo dell’account Prenot@Mi" : "Check / set up your Prenot@Mi",
    what1Body: it
      ? "Controlliamo o ti aiutiamo a configurare il tuo account Prenot@Mi nella sezione giusta per il Consolato competente."
      : "We check or help you set up your Prenot@Mi account in the correct section for your consulate.",
    what2Title: it
      ? "Monitoraggio e tentativi di prenotazione"
      : "Monitoring & booking attempts",
    what2Body: it
      ? "Monitoriamo gli slot, facciamo noi i tentativi e proviamo a bloccare una data/ora per te quando si libera un posto."
      : "We monitor for new slots, do the clicking, and try to secure a date/time for you when availability appears.",
    what3Title: it
      ? "Conferma appuntamento + checklist"
      : "Appointment confirmation + checklist",
    what3Body: it
      ? "Quando riusciamo a prenotare, ti inviamo i dettagli e una checklist semplice per il giorno dell’appuntamento."
      : "When we manage to book, we send you the details and a simple checklist for the appointment day.",

    howH: it ? "Come funziona (in 3 passi)" : "How it works (in 3 steps)",
    how1Title: it ? "1. Ci mandi i tuoi dati" : "1. You share your details",
    how1Body: it
      ? "Compili il modulo qui sotto (o ci scrivi) con i tuoi dati di base, il Consolato e eventuali scadenze."
      : "You fill in the form below (or email us) with your basic details, consulate, and any timelines.",
    how2Title: it ? "2. Monitoriamo Prenot@Mi" : "2. We monitor Prenot@Mi",
    how2Body: it
      ? "Usiamo il tuo account Prenot@Mi per monitorare gli slot nella sezione corretta e fare i tentativi di prenotazione."
      : "We use your Prenot@Mi account to monitor the correct section and attempt to book when slots appear.",
    how3Title: it ? "3. Ti confermiamo l’appuntamento" : "3. We confirm your booking",
    how3Body: it
      ? "Quando l’appuntamento è confermato, ti inviamo email con data/ora e checklist. Se non compaiono slot, ti spieghiamo le alternative."
      : "When we secure a booking, we email you the date/time and checklist. If there are truly no slots, we explain your options.",

    pricingH: it ? "Prezzo (12+ / adulti, Regno Unito)" : "Pricing (12+ / adults, UK consulates)",
    pricingMain: it ? (
      <>
        <strong>£40</strong> — Prenotazione{" "}
        <strong>data e ora dell’appuntamento</strong> su Prenot@Mi.
      </>
    ) : (
      <>
        <strong>£40</strong> — Appointment{" "}
        <strong>date &amp; time booked</strong> on Prenot@Mi.
      </>
    ),
    pricingNote: it
      ? "Il prezzo riguarda solo l’aiuto di Resinaro. Le tasse consolari, i bollettini o la spedizione non sono inclusi."
      : "Price is for Resinaro’s support only. Consular fees, payment slips and postage are not included.",
    pricingSub: it
      ? "Se non vediamo slot per un periodo prolungato, ti proponiamo le opzioni (incluso il nostro servizio dedicato alle liste d’attesa)."
      : "If no slots appear for a meaningful period, we’ll talk through options with you (including our dedicated waiting-list service).",

    formH: it
      ? "Inizia l’aiuto per l’appuntamento passaporto"
      : "Start passport appointment support",
    formP: it
      ? "Ti guidiamo passo passo. Puoi anche scegliere di inviare i documenti via email più tardi."
      : "We guide you step by step. You can also choose to send documents by email later.",
    formSupport: it ? (
      <>
        Domande prima di pagare? Scrivici a{" "}
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

    galleryH: it
      ? "Altri appuntamenti passaporto prenotati"
      : "More passport appointments we’ve booked",
    galleryP: it
      ? "Schermate reali da Prenot@Mi. Nascondiamo nome, mail e numeri di prenotazione per la sicurezza dei clienti."
      : "Real screenshots from Prenot@Mi. We hide names, emails and booking numbers for client safety.",

    docsH: it
      ? "Cosa ti servirà per l’appuntamento (promemoria veloce)"
      : "What you’ll need for the appointment (quick heads-up)",
    docsForTitle: it ? "Per la maggior parte dei casi 12+ / adulti:" : "For most 12+ / adult cases:",
    docsList: it
      ? [
          "Documento d’identità valido (passaporto italiano o carta d’identità).",
          "Prova di indirizzo nel Regno Unito degli ultimi 3 mesi.",
          "Iscrizione AIRE aggiornata (o prova che la stai sistemando).",
        ]
      : [
          "Valid Italian ID (passport or ID card).",
          "Recent UK proof of address (last 3 months).",
          "AIRE registration up to date (or proof you’re fixing it).",
        ],
    docsNote: it ? (
      <>
        Non sei sicuro di avere i requisiti o hai un caso particolare? Scrivici
        prima:{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ) : (
      <>
        Not sure you qualify or have a complicated case? Email us first:{" "}
        <a className="underline" href="mailto:resinaro@proton.me">
          resinaro@proton.me
        </a>
        .
      </>
    ),

    expectationsH: it
      ? "Aspettative oneste (leggi per favore)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        Non siamo il Consolato e non possiamo creare slot che non esistono.{" "}
        <strong>Non possiamo garantire</strong> un appuntamento o il rilascio
        del passaporto. Possiamo solo monitorare correttamente e fare del nostro
        meglio per prenotare quando si libera qualcosa.
      </>
    ) : (
      <>
        We are <strong>not</strong> the Consulate and we can’t create slots that
        don’t exist. We <strong>cannot guarantee</strong> an appointment or
        passport. We can only monitor correctly and do our best to book when
        there is availability.
      </>
    ),
    expectationsP2: it ? (
      <>
        Per sicurezza, consigliamo di <strong>non prenotare viaggi</strong> finché
        il passaporto non è stato rilasciato. Se hai una vera urgenza, scrivi
        nell’oggetto dell’email <strong>“Urgent”</strong> e ti indicheremo il
        percorso corretto secondo le regole del Consolato.
      </>
    ) : (
      <>
        For your safety, we recommend{" "}
        <strong>not booking travel</strong> until your passport has actually
        been issued. If you have a genuine emergency, email us with subject{" "}
        <strong>“Urgent”</strong> and we’ll explain the official routes the
        Consulate uses for urgent cases.
      </>
    ),

    otherH: it ? "Altri percorsi utili" : "Other helpful routes",
    otherUnder12: it
      ? "Passaporti Under-12 (per i bambini, percorso postale)"
      : "Under-12 passports (postal route for children)",
    otherWaitlist: it
      ? "Servizio liste d’attesa Prenot@Mi (quando non ci sono slot)"
      : "Prenot@Mi waiting-list service (when there are no slots)",
    otherContact: it
      ? "Contatta direttamente Resinaro"
      : "Contact Resinaro directly",
    allServices: it ? "Tutti i servizi" : "All services",
  };
}

/* ================================ PAGE ================================= */

export default function PassportServicePage({
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
        <div className="-mt-16 max-w-5xl px-3 sm:px-6 md:px-8 lg:-mt-20 lg:px-0 mx-auto relative">
          <div className="rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-md md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="md:flex-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">
                  {locale === "it"
                    ? "Servizio per italiani nel Regno Unito"
                    : "Service for Italians in the UK"}
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

              {/* Mini proof strip */}
              <div className="md:w-[270px]">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
                    {copy.miniProofLabel}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    <div className="overflow-hidden rounded-lg bg-neutral-100">
                      <Image
                        src="/proof/2026-02-manchester-appointment-01.webp"
                        alt="Passport appointment proof"
                        width={360}
                        height={220}
                        className="h-20 w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-neutral-100">
                      <Image
                        src="/proof/proof_1.webp"
                        alt="Passport appointment proof"
                        width={360}
                        height={220}
                        className="h-20 w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-neutral-100">
                      <Image
                        src="/proof/proof_4.webp"
                        alt="Passport appointment proof"
                        width={360}
                        height={220}
                        className="h-20 w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-neutral-100">
                      <Image
                        src="/proof/proof_7.webp"
                        alt="Passport appointment proof"
                        width={360}
                        height={220}
                        className="h-20 w-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-emerald-900/80">
                    {copy.miniProofCaption}
                  </p>
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
          <PassportForm />
          <p className="mt-4 text-center text-xs text-emerald-900">
            {copy.formSupport}
          </p>
        </div>
      </section>

      {/* ======================== BIG PROOF GALLERY ======================== */}
      <section className="mx-auto max-w-5xl px-3 pb-8 sm:px-6 md:px-8 md:pb-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-center text-emerald-950">
            {copy.galleryH}
          </h2>
          <p className="mx-auto max-w-2xl text-center text-xs sm:text-sm text-gray-600">
            {copy.galleryP}
          </p>

          <div
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            data-carousel
          >
            <div className="relative mx-auto w-full max-w-[900px]">
              <div
                className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
                id="appointments-track"
                data-track
              >
                {/* Each figure is a snap-slide. Keep structure for CarouselBinder. */}
                <CarouselSlide
                  id="a1"
                  src="/proof/2026-02-manchester-appointment-01.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a2"
                  src="/proof/proof_1.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a3"
                  src="/proof/proof_3.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a4"
                  src="/proof/proof_4.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a5"
                  src="/proof/proof_5.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a6"
                  src="/proof/proof_6.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
                <CarouselSlide
                  id="a7"
                  src="/proof/proof_7.webp"
                  alt="Passport appointment booked"
                  locale={locale}
                />
              </div>
            </div>
          </div>
          <CarouselBinder />
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
              href={p("/services/passport-under-12")}
            >
              {copy.otherUnder12}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={p("/services/passport-waiting-list")}
            >
              {copy.otherWaitlist}
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageObjectsJsonLd),
        }}
      />
    </main>
  );
}

/* ============================ SMALL COMPONENTS ========================== */

function FeatureCard({ title, body }: { title: React.ReactNode; body: React.ReactNode }) {
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

function CarouselSlide({
  id,
  src,
  alt,
  locale,
}: {
  id: string;
  src: string;
  alt: string;
  locale: "en" | "it";
}) {
  const caption =
    locale === "it"
      ? "Appuntamento passaporto prenotato"
      : "Passport appointment booked";

  return (
    <figure
      id={id}
      className="relative w-full shrink-0 snap-center bg-neutral-100"
    >
      <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>
      <button
        type="button"
        data-prev
        aria-label={locale === "it" ? "Precedente" : "Previous"}
        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-white/95 shadow"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        data-next
        aria-label={locale === "it" ? "Successiva" : "Next"}
        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-white/95 shadow"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            d="M9 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <figcaption className="px-4 py-3 text-center text-xs sm:text-sm text-neutral-700">
        {caption}
      </figcaption>
    </figure>
  );
}
