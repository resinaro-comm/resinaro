/* --------------------------------------------------------------------------
   Italian Passport Appointment Help (12+ / Adults, UK) — Resinaro
   This page is ONLY for Prenot@Mi passport appointments (12+ / adults).
   Under-12 postal passports and waiting-list support should live on
   separate pages (e.g. /services/passport-under-12, /services/passport-waiting-list).
---------------------------------------------------------------------------*/

import PassportForm from "@/components/PassportForm";
import type { Metadata } from "next";
import Image from "next/image";
import CarouselBinder from "@/components/CarouselBinder";
import HeroProofPreview from "@/components/HeroProofPreview";
import {
  appointmentProofCases,
  type AppointmentProofCase,
} from "@/content/appointmentProofCases";

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
          "We help Italians in the UK with 12+ / adult passport appointments by: (1) checking, setting up or creating your Prenot@Mi account if needed, (2) monitoring the right section for your consulate, and (3) trying to secure a booking when slots appear. We then email you the confirmation and a simple checklist.",
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

/* ======================== PROOF HELPERS (BY DATE) ===================== */

/**
 * Sort appointments so that:
 * - Upcoming/today’s appointments come first
 * - Then recent past ones
 * - Within each group, closest dates to today appear first
 */
function getProofCasesClosestToToday(limit: number): AppointmentProofCase[] {
  if (!appointmentProofCases.length) return [];

  const today = new Date();
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();

  const sorted = [...appointmentProofCases].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
      return 0;
    }

    const aTime = new Date(
      aDate.getFullYear(),
      aDate.getMonth(),
      aDate.getDate()
    ).getTime();
    const bTime = new Date(
      bDate.getFullYear(),
      bDate.getMonth(),
      bDate.getDate()
    ).getTime();

    const aFutureOrToday = aTime >= todayMidnight;
    const bFutureOrToday = bTime >= todayMidnight;

    if (aFutureOrToday !== bFutureOrToday) {
      return aFutureOrToday ? -1 : 1;
    }

    const aDiff = Math.abs(aTime - todayMidnight);
    const bDiff = Math.abs(bTime - todayMidnight);
    return aDiff - bDiff;
  });

  return sorted.slice(0, limit);
}

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
        Ti aiutiamo a ottenere un{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          appuntamento
        </span>{" "}
        passaporto <strong>su Prenot@Mi</strong> per{" "}
        <strong>12+ / adulti nel Regno Unito</strong>. Monitoriamo noi gli
        slot, con aspettative oneste. <strong>Non siamo il Consolato.</strong>
      </>
    ) : (
      <>
        We help you get an Italian passport{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          appointment
        </span>{" "}
        <strong>on Prenot@Mi</strong> for <strong>12+ / adults in the UK</strong>
        . We do the monitoring and clicking, with honest expectations.{" "}
        <strong>We are not the Consulate.</strong>
      </>
    ),
    heroExperience: it ? (
      <>
        Dal 2023 abbiamo già prenotato{" "}
        <strong>200+ appuntamenti passaporto reali</strong> su Prenot@Mi per
        italiani seguiti da Londra, Manchester ed Edimburgo.{" "}
        <span className="whitespace-nowrap">Non è una cosa nuova per noi.</span>
      </>
    ) : (
      <>
        Since 2023 we’ve booked{" "}
        <strong>200+ real Prenot@Mi passport appointments</strong> for Italians
        across London, Manchester and Edinburgh.{" "}
        <span className="whitespace-nowrap">This isn’t new to us.</span>
      </>
    ),
    heroCta: it ? "Inizia l’aiuto per appuntamento" : "Start appointment support",
    heroSecondaryCta: it ? "Vedi il modulo" : "View the form",
    heroTrustLine: it
      ? "Persone reali nel Regno Unito · Italiano e inglese · Processo sicuro e privato"
      : "Real humans in the UK · Italian & English · Safe, private process",

    miniProofLabel: it
      ? "Appuntamenti Prenot@Mi che abbiamo davvero prenotato"
      : "Real Prenot@Mi appointments we’ve booked",
    miniProofCaption: it
      ? "Dati dei clienti nascosti per sicurezza. Le schermate sono sicure da mostrare."
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
      ? "Controlliamo, configuriamo o creiamo il tuo account Prenot@Mi se non esiste ancora, nella sezione giusta per il Consolato competente."
      : "We check, set up or create your Prenot@Mi account if you don’t have one yet, in the correct section for your consulate.",
    what2Title: it
      ? "Monitoraggio e tentativi di prenotazione"
      : "Monitoring & booking attempts",
    what2Body: it
      ? "Creiamo il tuo account Prenot@Mi se non ne hai uno, oppure usiamo il tuo account esistente per monitorare gli slot nella sezione corretta e fare i tentativi di prenotazione quando compaiono posti."
      : "We create your Prenot@Mi account if you don’t have one yet, or use your existing account, then monitor the correct section and attempt to book when slots appear.",
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
      ? "Creiamo il tuo account Prenot@Mi se non ne hai uno, oppure usiamo il tuo account esistente per monitorare gli slot nella sezione corretta e fare i tentativi di prenotazione quando compaiono posti."
      : "We create your Prenot@Mi account if you don’t have one yet, or use your existing account, then monitor the correct section and attempt to book when slots appear.",
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

    paySupportH: it
      ? "Se in questo momento non hai tutti i soldi"
      : "If you don’t have all the money right now",
    paySupportP: it ? (
      <>
        Il consolato di solito permette di pagare il costo del passaporto online
        dopo l’appuntamento, entro una scadenza breve. Se il budget è stretto o
        non hai tutti i soldi il giorno stesso, offriamo anche un’opzione
        facoltativa{" "}
        <strong>“Paga in 4 con Resinaro”</strong> usando soluzioni come Clearpay
        (Pay in 4) o Klarna (Pay in 3), dove disponibili:
      </>
    ) : (
      <>
        The consulate usually lets you pay the passport fee online after the
        appointment, within a short deadline. If you don’t have all the money
        on the day and cash-flow is tight, we also offer an optional{" "}
        <strong>“Pay in 4 with Resinaro” add-on</strong> using providers like
        Clearpay (Pay in 4) or Klarna (Pay in 3), where available:
      </>
    ),
    paySupportList: it
      ? [
          "L’importo totale è £115 per coprire il costo del passaporto.",
          "Paghi a rate (Paga in 4 con Clearpay o Paga in 3 con Klarna, dove disponibili).",
          "Al momento della richiesta ti basta pagare solo la prima rata (ad esempio £115/4); noi riceviamo comunque subito l’intero importo di £115.",
          "Con quei soldi paghiamo noi il passaporto per te oppure ti inviamo fino a circa £100 così puoi pagare il consolato (la tariffa di solito è intorno alle £100 e può variare di qualche sterlina).",
        ]
      : [
          "The total we charge is £115 to cover the passport fee.",
          "You pay in instalments (Pay in 4 with Clearpay or Pay in 3 with Klarna, where available).",
          "At checkout you only need to pay the first instalment (for example £115/4); we still receive the full £115 straight away.",
          "With that money we either pay the passport fee for you or send you up to around £100 so you can pay the consulate yourself (the fee is usually around £100 and can move by a few pounds).",
        ],
    paySupportDisclaimer: it ? (
      <>
        Importante: il costo e il rilascio del passaporto dipendono sempre solo
        dal consolato. Soluzioni come Clearpay/Klarna dipendono dai loro termini
        e dalla tua idoneità.
      </>
    ) : (
      <>
        Important: the passport fee and the decision always belong only to the
        consulate. Services like Clearpay/Klarna depend on their terms and your
        eligibility.
      </>
    ),

    galleryH: it
      ? "Appuntamenti passaporto recenti prenotati (date vicine a oggi)"
      : "Recent passport appointments we’ve booked (closest to today)",
    galleryP: it
      ? "Appuntamenti reali di clienti nel Regno Unito. Aggiorniamo spesso questa sezione per mostrare date intorno a questa settimana e alla prossima. I dati personali sono oscurati; il passaporto è rilasciato solo dal consolato."
      : "These are real appointments from clients in the UK. We update this gallery so you can see bookings around this week and next. Personal data is blurred; passports are always issued by the consulate.",
    galleryMore: it ? (
      <>
        Su Prenot@Mi abbiamo prenotato molte più pratiche dei{" "}
        <strong>10+ esempi</strong> mostrati qui. Per privacy mostriamo solo{" "}
        <strong>uno screenshot per giorno</strong> e{" "}
        <strong>oscuriamo gli orari</strong>, così il consolato non può
        incrociare nomi e orari né penalizzare i clienti che usano un servizio
        di supporto.
      </>
    ) : (
      <>
        On Prenot@Mi we’ve booked far more cases than the{" "}
        <strong>10+ examples</strong> shown here. For privacy we only display{" "}
        <strong>one screenshot per day</strong> and{" "}
        <strong>blur appointment times</strong>, so consulates can’t match names
        to exact times or penalise clients for using a support service.
      </>
    ),

    docsH: it
      ? "Cosa ti servirà il giorno dell’appuntamento"
      : "What you’ll need on the day of the appointment",
    docsForTitle: it
      ? "Il giorno dell’appuntamento ti serviranno di solito:"
      : "On the day of the appointment you’ll usually need:",
    docsList: it
      ? [
          "Due fototessere recenti e valide per il nuovo passaporto.",
          "Il tuo vecchio passaporto italiano, anche se scaduto — portalo con te.",
          "I soldi per pagare il costo del passaporto (di solito intorno alle £100; controlla sempre l’importo esatto sul sito del tuo consolato).",
          "Il modulo di domanda stampato e già compilato, scaricato dal sito del consolato (per esempio Consolato di Manchester).",
        ]
      : [
          "Two recent, valid passport photos for the new passport.",
          "Your old Italian passport, even if expired — bring it with you.",
          "Money to pay the passport fee (usually around £100; always check the exact amount on your consulate’s website).",
          "The printed and completed application form downloaded from your consulate’s website (for example Consolato di Manchester).",
        ],
    docsNote: it ? (
      <>
        In molti consolati nel Regno Unito (per esempio Manchester) il
        passaporto viene di solito rilasciato lo stesso giorno una volta pagata
        la tassa — spesso entro circa 2 ore dall’appuntamento. Se non hai i
        soldi il giorno stesso, il consolato di norma ti permette di pagare
        online dopo l’appuntamento entro una breve scadenza (spesso intorno a
        10 giorni dalla data). Controlla sempre le regole precise nell’email di
        conferma e sul sito ufficiale del tuo consolato.
      </>
    ) : (
      <>
        At many UK consulates (for example Manchester) the passport is usually
        issued on the same day once the fee is paid — often within about 2
        hours of your appointment. If you don’t have the money with you on the
        day, the consulate normally lets you pay online afterwards within a
        short deadline (often around 10 days from the appointment). Always
        double-check the exact rules in your confirmation email and on your
        consulate’s official website.
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
    otherContact: it ? "Contatta direttamente Resinaro" : "Contact Resinaro directly",
    allServices: it ? "Tutti i servizi" : "All services",

    formH: it ? "Prenota il tuo appuntamento" : "Book your appointment",
    formP: it
      ? "Compila il modulo qui sotto con i tuoi dettagli. Puoi anche inviarci i documenti via email se preferisci."
      : "Fill in the form below with your details. You can also email us documents if you prefer.",
    formSupport: it
      ? "Hai domande? Scrivi a resinaro@proton.me"
      : "Questions? Email resinaro@proton.me",
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

  const recentProofCases = getProofCasesClosestToToday(10);

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
                    ? "Servizio per italiani nel Regno Unito"
                    : "Service for Italians in the UK"}
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">
                  {copy.heroH1}
                </h1>
                <p className="mt-3 text-sm text-emerald-900 sm:text-[15px]">
                  {copy.heroSub}
                </p>
                <p className="mt-2 text-xs text-emerald-900 sm:text-[13px]">
                  {copy.heroExperience}
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

              {/* Hero proof preview with click-to-expand gallery */}
              <div className="md:w-[280px] mt-2 md:mt-0">
                <HeroProofPreview
                  cases={recentProofCases}
                  locale={locale}
                  label={copy.miniProofLabel}
                  caption={copy.miniProofCaption}
                />
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

      {/* ======================== PROOF GALLERY (CAROUSEL) ================= */}
      {recentProofCases.length > 0 && (
        <section className="mx-auto max-w-5xl px-3 pb-8 sm:px-6 md:px-8 md:pb-10">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-center text-emerald-950">
              {copy.galleryH}
            </h2>
            <p className="mx-auto max-w-2xl text-center text-xs sm:text-sm text-gray-600">
              {copy.galleryP}
            </p>
            <p className="mx-auto max-w-2xl text-center text-[11px] sm:text-xs text-gray-500">
              {copy.galleryMore}
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
                  {recentProofCases.map((item, idx) => (
                    <ProofCarouselSlide
                      key={item.id}
                      id={`ap-${idx + 1}`}
                      item={item}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            </div>
            <CarouselBinder />
          </div>
        </section>
      )}

      {/* ===================== HONEST EXPECTATIONS ========================= */}
      <section className="mx-auto max-w-5xl px-3 pb-8 sm:px-6 md:px-8 md:pb-10">
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

      {/* ============ ON THE DAY OF YOUR APPOINTMENT (DOCS + PAY SUPPORT) == */}
      <section className="mx-auto max-w-5xl px-3 pb-6 sm:px-6 md:px-8 md:pb-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-emerald-950">
            {copy.docsH}
          </h2>
          <div className="mt-3 grid gap-6 md:grid-cols-[1.2fr_1fr]">
            {/* Left: what you need on the day */}
            <div>
              <h3 className="text-sm font-semibold text-emerald-950">
                {copy.docsForTitle}
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-emerald-900">
                {copy.docsList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-emerald-900/90">
                {copy.docsNote}
              </p>
            </div>

            {/* Right: if you don’t have the money */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
              <h3 className="text-sm font-semibold text-emerald-950">
                {copy.paySupportH}
              </h3>
              <p className="mt-1 text-xs sm:text-[13px] text-emerald-900/90">
                {copy.paySupportP}
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-[13px] text-emerald-900/90 space-y-1.5">
                {copy.paySupportList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 text-[11px] text-emerald-900/70">
                {copy.paySupportDisclaimer}
              </p>
            </div>
          </div>
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

/* ========= PROOF CAROUSEL SLIDE (BOTTOM GALLERY, ARROW NAV) =========== */

function ProofCarouselSlide({
  id,
  item,
  locale,
}: {
  id: string;
  item: AppointmentProofCase;
  locale: "en" | "it";
}) {
  const caption = item.caption[locale];
  const privacy =
    locale === "it"
      ? "Dati personali oscurati. Il passaporto è sempre rilasciato solo dal consolato."
      : "Personal data is blurred. The passport is always issued only by the consulate.";

  return (
    <figure
      id={id}
      className="relative w-full shrink-0 snap-center bg-neutral-100"
    >
      <div className="h-[64vw] max-h-[520px] sm:h-[46vw] sm:max-h-[520px]">
        <Image
          src={item.image}
          alt={item.alt[locale]}
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
        {caption}{" "}
        <span className="block text-[11px] text-neutral-500 mt-1">
          {privacy}
        </span>
      </figcaption>
    </figure>
  );
}
