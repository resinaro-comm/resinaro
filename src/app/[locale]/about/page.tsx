// src/app/[locale]/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n";

export const metadata: Metadata = {
  title:
    "About Resinaro | Italian passport, AIRE & consulate support from the UK",
  description:
    "Resinaro helps Italians and their families in the UK with Italian passports, Prenot@Mi consulate appointments, AIRE, CIE and citizenship planning — clear pricing, real proof of results and calm, practical guidance.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Resinaro",
    description:
      "Specialist support for Italians in the UK — Italian passports, consulate appointments, AIRE, CIE, translations and citizenship strategy, with transparent pricing and real outcomes.",
    url: "/about",
    images: ["/images/about/resinaro-about-consular-support-hero-1200x630.jpg"],


    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Resinaro",
    description:
      "Italian consular and citizenship support from the UK — passports, Prenot@Mi, AIRE, CIE, translations and route checks, with fair, transparent pricing.",
    images: ["/images/about/resinaro-about-consular-support-hero-1200x630.jpg"],

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

  // ---------- Localised copy ----------
  const copy = {
    heroTitle: it ? "Chi è Resinaro" : "About Resinaro",
    heroTagline: it
      ? "Un piccolo team di italiani nel Regno Unito che ti aiuta con passaporti, appuntamenti consolari, AIRE, CIE e cittadinanza – con prezzi chiari e zero giudizi."
      : "A small team of Italians in the UK helping you with Italian passports, consulate appointments, AIRE, CIE and citizenship – with clear pricing and zero judgement.",
    heroBadgeMain: it ? "Italiani nel Regno Unito" : "Italians in the UK",
    heroBadgeSub: it
      ? "Creato da italiani all’estero"
      : "Built by Italians abroad",
    heroNoteTitle: it ? "Non siamo il consolato" : "We’re not the consulate",
    heroNoteBody: it
      ? "Non possiamo “saltare la fila” o decidere al posto dei consolati o dell’Home Office. Possiamo però preparare il tuo caso in modo ordinato, con i documenti giusti, così da ridurre errori, rifiuti e costi inutili."
      : "We can’t “skip the queue” or decide on behalf of consulates or the Home Office. What we can do is prepare your case properly, with the right documents, so you avoid mistakes, refusals and unnecessary extra costs.",
    ctaServices: it ? "Vedi i servizi" : "View services",
    ctaContact: it ? "Scrivici" : "Contact us",

    whyTitle: it
      ? "Perché esistiamo (e perché ci teniamo)"
      : "Why we exist (and why we care)",
    whyBody: it
      ? "Ogni pratica consolare o di cittadinanza sbagliata significa soldi e tempo persi: traduzioni da rifare, certificati pagati due volte, viaggi da riprenotare. Resinaro è nato dopo aver aiutato amici e familiari a evitare questi errori con passaporti, AIRE, CIE e pratiche di cittadinanza."
      : "Every consular or citizenship mistake costs time and money: translations redone, certificates ordered twice, flights rebooked. Resinaro started after helping friends and family avoid these errors with passports, AIRE, CIE and citizenship cases.",
    whyBullet1: it
      ? "Trasformiamo richieste confuse in checklist chiare, passo per passo."
      : "We turn messy requirements into clear, step-by-step checklists.",
    whyBullet2: it
      ? "Ti diciamo in anticipo cosa è realistico e dove vale la pena spendere (soprattutto quando decide il consolato)."
      : "We tell you up front what’s realistic and where it’s worth spending money (especially when the consulate is in charge).",
    whyBullet3: it
      ? "Riduciamo il rischio di pagare due volte per la stessa pratica o perdere appuntamenti importanti."
      : "We reduce the risk of paying twice for the same application or missing important appointments.",

    whoTitle: it ? "Per chi è Resinaro" : "Who Resinaro is for",
    whoLead: it
      ? "Se ti riconosci in una di queste situazioni, sei nel posto giusto:"
      : "If any of these feel like you, you’re in the right place:",
    whoPoints: it
      ? [
          "Famiglie italiane che devono incastrare scuola, lavoro e appuntamenti consolari senza perdere giorni di ferie o voli.",
          "Studenti e lavoratori che hanno bisogno di passaporto, CIE o iscrizione AIRE e vogliono evitare errori costosi.",
          "Persone con radici italiane (mezzi italiani, italiani-per-amore) che vogliono chiarire se hanno diritto alla cittadinanza.",
        ]
      : [
          "Italian families juggling school, work and consular appointments without wasting annual leave or flights.",
          "Students and workers who need a passport, CIE or AIRE registration and want to avoid expensive mistakes.",
          "People with Italian roots (half-Italian, Italian-by-love) who want clarity on whether they qualify for citizenship.",
        ],
    whoNotTitle: it ? "Cosa non facciamo" : "What we don’t do",
    whoNotPoints: it
      ? [
          "Non vendiamo appuntamenti consolari “magici”.",
          "Non promettiamo risultati che dipendono da enti pubblici.",
          "Non usiamo linguaggio legale per spaventarti in servizi più costosi.",
        ]
      : [
          "We don’t sell “magic” consular appointments.",
          "We don’t promise outcomes that depend on public authorities.",
          "We don’t hide behind legal jargon to upsell you.",
        ],

    whatTitle: it ? "In cosa possiamo aiutarti" : "What we help with",
    whatIntro: it
      ? "Questa è una panoramica veloce dei servizi più richiesti. I dettagli completi, con prezzi e tempistiche aggiornati, sono nella pagina Servizi."
      : "This is a quick overview of the most requested services. Full details, with up-to-date pricing and timelines, live on the Services page.",

    howTitle: it ? "Come lavoriamo" : "How we work",
    step1Title: it ? "1. Raccontaci la situazione" : "1. Tell us what’s going on",
    step1Body: it
      ? "Ci mandi un messaggio o compili il form di contatto con città, scadenze e una foto (anche dal telefono) dei documenti che hai."
      : "You send us a message or fill in the contact form with your city, deadlines and phone photos of any documents you already have.",
    step1Hint: it
      ? "Non serve essere “in ordine” prima di scriverci."
      : "You don’t need everything perfectly organised first.",
    step2Title: it ? "2. Facciamo ordine insieme" : "2. We bring order to it",
    step2Body: it
      ? "Rivediamo il caso, prepariamo una checklist, ti diamo tempi realistici e un preventivo chiaro se serve un servizio a pagamento."
      : "We review your case, build a checklist, give realistic timings and a clear quote if a paid service makes sense.",
    step2Hint: it
      ? "Se non siamo il servizio giusto, lo diciamo e ti indirizziamo."
      : "If we’re not the right fit, we say so and signpost you.",
    step3Title: it ? "3. Passi concreti e follow-up" : "3. Concrete steps & follow-up",
    step3Body: it
      ? "Ti accompagniamo nelle prenotazioni o nelle domande, e restiamo disponibili per chiarimenti per un periodo definito."
      : "We guide you through bookings or applications, and stay available for clarifications for a defined follow-up period.",
    step3Hint: it
      ? "Con un riepilogo scritto che puoi sempre ritrovare."
      : "With a written summary you can come back to.",

    valuesTitle: it ? "I valori che ci guidano" : "The values behind Resinaro",
    values: it
      ? [
          {
            label: "Chiarezza",
            text: "Il tuo tempo e i tuoi soldi contano: spieghiamo in modo semplice e pratico cosa serve davvero.",
          },
          {
            label: "Correttezza",
            text: "Prezzi pubblici e ambito chiaro. Nessuna “spesa amministrativa” a sorpresa.",
          },
          {
            label: "Cura",
            text: "Non sei un ticket. Ricordiamo il contesto e lo storico della tua situazione.",
          },
          {
            label: "Privacy",
            text: "Raccogliamo il minimo indispensabile, lo conserviamo in modo sicuro e lo cancelliamo su richiesta.",
          },
        ]
      : [
          {
            label: "Clarity",
            text: "Your time and money matter: we explain exactly what is required, in plain language.",
          },
          {
            label: "Fairness",
            text: "Pricing is public and scoped. No surprise “admin fees”.",
          },
          {
            label: "Care",
            text: "You’re more than a ticket number. We keep context and history in mind.",
          },
          {
            label: "Privacy",
            text: "We collect the bare minimum, store it securely and delete on request.",
          },
        ],

    inclusionTitle: it ? "Chi può usare Resinaro" : "Who we welcome",
    inclusionBody: it
      ? "Resinaro è pensato prima di tutto per italiani e famiglie con legami con l’Italia che vivono nel Regno Unito: cittadini italiani, doppi cittadini, italo-qualcosa, partner e figli. Quando c’è di mezzo un consolato italiano, cerchiamo di aiutare anche altre persone dove ha senso."
      : "Resinaro is built first for Italians and families with Italian ties living in the UK: Italian citizens, dual citizens, Italian-something, partners and kids. Whenever there’s an Italian consulate involved, we try to help others too where it makes sense.",
    inclusionPoints: it
      ? [
          "Supporto in italiano e in inglese semplice.",
          "Guide gratuite per orientarti anche se non puoi ancora investire in un servizio a pagamento.",
        ]
      : [
          "Support in Italian and clear, simple English.",
          "Free guides so you can get oriented even before investing in paid support.",
        ],

    glossaryTitle: it ? "Glossario (linguaggio semplice)" : "Glossary (plain language)",
    faqsTitle: it ? "Domande frequenti" : "Common questions",

    faqContactLead: it
      ? "Per domande specifiche sul tuo caso, "
      : "For questions about your specific situation, ",
    faqContactLink: it ? "scrivici qui" : "contact us here",

    accessTitle: it
      ? "Accessibilità & protezione dati"
      : "Accessibility & data protection",
    accessBody1: it
      ? "Il sito è costruito con HTML semantico, componenti navigabili da tastiera e combinazioni di colori ad alto contrasto. Continueremo a migliorare accessibilità e compatibilità con lettori di schermo."
      : "The site uses semantic HTML, keyboard-navigable components and high-contrast colour combinations. We’re still improving accessibility and screen-reader compatibility over time.",
    accessBody2: it
      ? "Conserviamo solo i dati strettamente necessari per erogare il servizio richiesto. Puoi chiederci in qualsiasi momento di correggere o cancellare i tuoi dati."
      : "We only keep the data we genuinely need to deliver the service you ask for. You can ask us at any time to correct or delete your data.",
    accessSeePolicy: it
      ? "Leggi l’Informativa Privacy completa"
      : "Read the full Privacy Policy",
  };

  // ---------- Config / assets ----------
 const heroSrc = "/images/about/resinaro-about-consular-support-hero-1200x630.jpg";


  const stats = it
    ? [
        {
          kpi: "4.000+",
          label: "Richieste risposte",
          hint: "Community + email dal 2023",
        },
        {
          kpi: "72%",
          label: "Casi sbloccati",
          hint: "Passaporti, AIRE, CIE e appuntamenti",
        },
        {
          kpi: "48h",
          label: "Risposta tipica",
          hint: "Lun–Ven, 10:00–18:00",
        },
        { kpi: "£0", label: "Costi nascosti", hint: "Mai. Le odiamo anche noi." },
      ]
    : [
        {
          kpi: "4,000+",
          label: "Queries answered",
          hint: "Community + email since 2023",
        },
        {
          kpi: "72%",
          label: "Cases unlocked",
          hint: "Passports, AIRE, CIE & appointments",
        },
        {
          kpi: "48h",
          label: "Typical reply",
          hint: "Mon–Fri, 10:00–18:00",
        },
        {
          kpi: "£0",
          label: "Hidden fees",
          hint: "Ever. We hate them too.",
        },
      ];

  const serviceOverview = [
    {
      icon: "🛂",
      title: it
        ? "Passaporti & appuntamenti consolari"
        : "Passports & consulate appointments",
      body: it
        ? "Rinnovi passaporto, slot Prenot@Mi (es. Manchester), preparazione documenti e checklist per il giorno dell’appuntamento, così non devi ripagare tasse o viaggi per un errore banale."
        : "Passport renewals, Prenot@Mi slots (e.g. Manchester), document prep and checklists for appointment day, so you don’t have to repay fees or rebook travel because of a simple mistake.",
      meta: it ? "Da £55 • tipicamente 1–3 settimane" : "From £55 • typically 1–3 weeks",
    },
    {
      icon: "💳",
      title: it ? "CIE, AIRE & stato civile" : "CIE, AIRE & civil status",
      body: it
        ? "Iscrizioni/aggiornamenti AIRE, supporto CIE, correzioni dati anagrafici e spiegazione dei portali FAST-IT in modo umano, per evitare fascicoli bloccati per mesi."
        : "AIRE registrations/updates, CIE support, civil-status corrections and FAST-IT explained in human language, to avoid files sitting stuck for months.",
      meta: it ? "Da £55 • 1–6 settimane" : "From £55 • 1–6 weeks",
    },
    {
      icon: "📜",
      title: it
        ? "Cittadinanza & traduzioni"
        : "Citizenship & translations",
      body: it
        ? "Controllo percorso di cittadinanza per discendenza, revisione documenti chiave e traduzioni ufficiali mirate a ciò che il consolato guarda davvero."
        : "Citizenship-by-descent route checks, review of key documents and targeted official translations focused on what the consulate actually checks.",
      meta: it
        ? "Da £75 • pacchetti su misura"
        : "From £75 • tailored packages",
    },
  ];

  const miniStories = it
    ? [
        {
          title: "Famiglia a Leeds",
          text: "Due genitori e due figli con AIRE bloccata e passaporti in scadenza. Checklist completa, FAST-IT sistemato e appuntamenti a Manchester confermati in poche settimane – senza dover ripagare voli o foto passaporto.",
        },
        {
          title: "Copywriter a Manchester",
          text: "Doveva rinnovare il passaporto prima di un viaggio di lavoro. Abbiamo preparato i documenti, trovato uno slot Prenot@Mi e verificato le traduzioni: pratica accettata al primo colpo.",
        },
      ]
    : [
        {
          title: "Family in Leeds",
          text: "Two parents and two kids with stuck AIRE and expiring passports. We untangled FAST-IT, built a full checklist and confirmed Manchester slots within weeks – without paying for new flights or extra passport photos.",
        },
        {
          title: "Freelancer in Manchester",
          text: "Needed a passport renewal before an important work trip. We prepared documents, secured a Prenot@Mi slot and checked translations: application accepted first time.",
        },
      ];

  const glossaryItems = it
    ? [
        {
          term: "AIRE",
          def: "Anagrafe degli Italiani Residenti all’Estero: l’anagrafe degli italiani all’estero. Va tenuta aggiornata per accedere ai servizi consolari.",
        },
        {
          term: "CIE",
          def: "Carta d’Identità Elettronica. Documento di identità italiano in formato tessera, spesso usato per servizi digitali.",
        },
        {
          term: "SPID",
          def: "Identità digitale per i servizi pubblici italiani. In pratica: login sicuro per i portali della Pubblica Amministrazione.",
        },
        {
          term: "NIN",
          def: "National Insurance Number (UK). Serve per lavorare e pagare i contributi/tasse nel Regno Unito.",
        },
        {
          term: "FAST-IT",
          def: "Portale online dei servizi consolari italiani (es. AIRE). Non sempre “fast”, ma ti guidiamo noi.",
        },
        {
          term: "GHIC",
          def: "UK Global Health Insurance Card per accedere a cure necessarie nei Paesi UE.",
        },
      ]
    : [
        {
          term: "AIRE",
          def: "Registry of Italians living abroad. You need it up to date to use many consular services.",
        },
        {
          term: "CIE",
          def: "Italian electronic ID card. Often needed for ID checks and some online services.",
        },
        {
          term: "SPID",
          def: "Digital identity login for Italian public services. Think “secure login” for government portals.",
        },
        {
          term: "NIN",
          def: "National Insurance Number (UK). Needed to work and pay contributions/tax.",
        },
        {
          term: "FAST-IT",
          def: "Italian consular online portal (e.g. for AIRE). Not always fast in practice — we walk you through it.",
        },
        {
          term: "GHIC",
          def: "UK Global Health Insurance Card for medically necessary treatment in the EU.",
        },
      ];

  const inlineFaqs = it
    ? [
        {
          q: "Quali servizi offre Resinaro?",
          a: "Supporto pratico su passaporti italiani, appuntamenti consolare/Prenot@Mi, CIE, AIRE, controlli di percorso di cittadinanza e traduzioni ufficiali collegate a pratiche consolari.",
        },
        {
          q: "Aiutate solo gli italiani?",
          a: "Lavoriamo soprattutto con cittadini italiani e famiglie con legami con l’Italia che vivono nel Regno Unito. Quando c’è di mezzo un consolato italiano, proviamo ad aiutare anche altre persone dove ha senso.",
        },
        {
          q: "I prezzi sono trasparenti?",
          a: "Sì. Pubblicheremo sempre prezzi chiari e spiegheremo cosa è incluso prima che tu decida.",
        },
        {
          q: "Posso usare solo le guide gratuite?",
          a: "Certo. Le guide sono pensate per aiutarti anche se non puoi (ancora) permetterti un servizio a pagamento.",
        },
        {
          q: "Quanto è veloce “veloce”?",
          a: "Di solito rispondiamo entro 48 ore lavorative. Se il collo di bottiglia è il consolato o un ente pubblico, te lo diciamo chiaramente.",
        },
      ]
    : [
        {
          q: "What services does Resinaro provide?",
          a: "Hands-on support with Italian passports, consulate / Prenot@Mi appointments, CIE, AIRE, citizenship-by-descent route checks and official translations linked to consular cases.",
        },
        {
          q: "Do you only help Italians?",
          a: "We mainly work with Italian citizens and families with Italian ties living in the UK. Whenever an Italian consulate is involved, we try to help others too where it makes sense.",
        },
        {
          q: "Are your prices transparent?",
          a: "Yes. We publish clear prices and explain what’s included before you decide.",
        },
        {
          q: "Can I just use the free guides?",
          a: "Absolutely. The guides are designed to help even if you’re not ready to invest in paid support yet.",
        },
        {
          q: "How fast is “fast”?",
          a: "We usually reply within 48 business hours. If the bottleneck is the consulate or another public body, we’ll say so clearly.",
        },
      ];

  // ---------- JSON-LD ----------
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
      "Resinaro provides specialist support for Italians and their families in the UK with Italian passports, consulate appointments, AIRE, CIE, translations and citizenship planning.",
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
            ? "Aiutiamo con passaporti italiani, appuntamenti consolare/Prenot@Mi, CIE, iscrizione e aggiornamenti AIRE, controlli di percorso di cittadinanza per discendenza e traduzioni ufficiali collegate a pratiche consolari."
            : "We help with Italian passports, consulate / Prenot@Mi appointments, CIE, AIRE registration and updates, citizenship-by-descent route checks and official translations connected to consular applications.",
        },
      },
      {
        "@type": "Question",
        name: it ? "Aiutate solo gli italiani?" : "Do you only help Italians?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Lavoriamo soprattutto con italiani e famiglie con legami con l’Italia che vivono nel Regno Unito. Quando una pratica coinvolge un consolato italiano, possiamo valutare caso per caso anche richieste da altre persone."
            : "We mainly support Italians and families with Italian ties living in the UK. When a case involves an Italian consulate, we can sometimes help others on a case-by-case basis.",
        },
      },
      {
        "@type": "Question",
        name: it ? "I prezzi sono trasparenti?" : "Are your prices transparent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Sì. Pubbliciamo tariffe chiare senza costi nascosti e spieghiamo sempre cosa è incluso prima di confermare un servizio."
            : "Yes. We publish clear rates with no hidden fees and always explain what’s included before confirming a service.",
        },
      },
      {
        "@type": "Question",
        name: it
          ? "Siete un ente no profit o un’azienda?"
          : "Are you a charity or a business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Siamo una social business: valori di comunità e consegna professionale. Alcune risorse sono gratuite; i servizi a pagamento sono prezzati in modo trasparente per mantenere sostenibile il progetto."
            : "We are a social business: community values with professional delivery. Some resources are free; paid services are transparently priced to keep the project sustainable.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: it
      ? "Come ottenere supporto da Resinaro"
      : "How to get support from Resinaro",
    description: it
      ? "Un percorso semplice in tre passi per ricevere aiuto con pratiche consolari italiane e amministrazione UK collegata."
      : "A simple three-step way to get help with Italian consular tasks and related UK admin.",
    step: [
      {
        "@type": "HowToStep",
        name: it ? "Raccontaci la situazione" : "Tell us what’s going on",
        text: it
          ? "Compila un breve modulo o scrivi a resinaro@proton.me indicando città, documenti e scadenze."
          : "Fill out a short form or email resinaro@proton.me with your location, documents and deadlines.",
      },
      {
        "@type": "HowToStep",
        name: it ? "Revisione e conferma" : "We review and confirm",
        text: it
          ? "Ricevi una checklist, tempistiche realistiche e un preventivo se il servizio è a pagamento."
          : "You receive a checklist, realistic timeline and a quote if a paid service is needed.",
      },
      {
        "@type": "HowToStep",
        name: it ? "Consegna e follow-up" : "Delivery & follow-up",
        text: it
          ? "Ti aiutiamo a preparare domanda/appuntamento e offriamo un periodo di supporto successivo."
          : "We help prepare the application/appointment and offer a defined follow-up period.",
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

  // ---------- UI ----------
  return (
    <main className="bg-[#F6F3EA] text-slate-900">
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

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[260px] w-full overflow-hidden md:h-[340px]">
          <Image
            src={heroSrc}
            alt={
              it
                ? "Skyline del Regno Unito con colori caldi e tricolore italiano in sovrimpressione"
                : "UK skyline with warm colours and Italian tricolore overlay"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>

        <div className="relative -mt-16 pb-10 md:-mt-24 md:pb-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl bg-white/95 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur md:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-900 ring-1 ring-emerald-200">
                    <span>🇮🇹 {copy.heroBadgeMain}</span>
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    <span>{copy.heroBadgeSub}</span>
                  </div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl lg:text-5xl">
                    {copy.heroTitle}
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
                    {copy.heroTagline}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link
                      href={`${prefix}/services`}
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900"
                    >
                      {copy.ctaServices}
                      <span className="ml-1" aria-hidden>
                        →
                      </span>
                    </Link>
                    <Link
                      href={`${prefix}/contact`}
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-emerald-900 ring-1 ring-slate-200 transition hover:ring-emerald-600"
                    >
                      {copy.ctaContact}
                    </Link>
                  </div>
                </div>

                <aside className="w-full max-w-sm rounded-2xl bg-emerald-950/90 p-4 text-xs text-emerald-50 shadow-md lg:w-80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                    {copy.heroNoteTitle}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed">
                    {copy.heroNoteBody}
                  </p>
                  <p className="mt-3 text-[11px] text-emerald-100">
                    {it
                      ? "Quando un canale gratuito è la scelta migliore, ti mandiamo lì per primi."
                      : "When an official free route is the best option, we’ll always send you there first."}
                  </p>
                </aside>
              </div>

              {/* Stats */}
              <div className="mt-6 grid gap-3 rounded-2xl bg-[#FFFCF5] p-4 text-xs sm:grid-cols-2 md:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.kpi}
                    className="rounded-xl border border-emerald-50 bg-white/70 p-3"
                  >
                    <div className="text-xl font-extrabold text-emerald-900 md:text-2xl">
                      {s.kpi}
                    </div>
                    <div className="text-[12px] font-medium text-slate-800">
                      {s.label}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      {s.hint}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST + WHO WE ARE */}
      <section className="pb-10 pt-4 md:pb-14 md:pt-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
            <article className="rounded-3xl bg-[#FFFCF5] p-6 text-sm shadow-sm ring-1 ring-slate-200 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
                {copy.whyTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-800">
                {copy.whyBody}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{copy.whyBullet1}</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{copy.whyBullet2}</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{copy.whyBullet3}</span>
                </li>
              </ul>
            </article>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-6 text-sm shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-emerald-950">
                  {copy.whoTitle}
                </h3>
                <p className="mt-2 text-slate-800">{copy.whoLead}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {copy.whoPoints.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-emerald-900 p-6 text-sm text-emerald-50 shadow-sm">
                <h3 className="text-lg font-semibold">{copy.whoNotTitle}</h3>
                <ul className="mt-3 space-y-2 text-[13px]">
                  {copy.whoNotPoints.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] text-emerald-100">
                  {it
                    ? "Se qualcuno ti promette risultati garantiti con consolati o visti, fai attenzione. Noi preferiamo essere onesti."
                    : "If someone guarantees outcomes with consulates or visas, be careful. We prefer to be honest about limits."}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
                  {copy.whatTitle}
                </h2>
                <p className="mt-2 text-sm text-slate-700">{copy.whatIntro}</p>
              </div>
              <Link
                href={`${prefix}/services`}
                className="inline-flex h-9 items-center justify-center rounded-xl bg-emerald-800 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-900"
              >
                {copy.ctaServices}
                <span className="ml-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {serviceOverview.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-2xl bg-[#FFFCF5] p-4 text-sm ring-1 ring-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg">
                      {s.icon}
                    </span>
                    <h3 className="text-sm font-semibold text-emerald-950">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-slate-800">
                    {s.body}
                  </p>
                  <p className="mt-3 text-xs font-medium text-emerald-800">
                    {s.meta}
                  </p>
                </article>
              ))}
            </div>

            {/* Mini stories */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {miniStories.map((story) => (
                <div
                  key={story.title}
                  className="rounded-2xl bg-white p-4 text-sm ring-1 ring-emerald-50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    {story.title}
                  </p>
                  <p className="mt-2 text-slate-800">{story.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
            {copy.howTitle}
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "1",
                title: copy.step1Title,
                text: copy.step1Body,
                hint: copy.step1Hint,
              },
              {
                step: "2",
                title: copy.step2Title,
                text: copy.step2Body,
                hint: copy.step2Hint,
              },
              {
                step: "3",
                title: copy.step3Title,
                text: copy.step3Body,
                hint: copy.step3Hint,
              },
            ].map((s) => (
              <article
                key={s.step}
                className="rounded-3xl bg-white p-5 text-sm shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-sm font-semibold text-white">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-semibold text-emerald-950">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-800">{s.text}</p>
                <p className="mt-3 text-xs text-slate-500">{s.hint}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES + INCLUSION */}
      <section className="border-y border-slate-200 bg-[#FFFCF5] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <section>
              <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
                {copy.valuesTitle}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-800">
                {copy.values.map((v) => (
                  <li key={v.label} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <div>
                      <p className="font-semibold">
                        {v.label}
                        {":"}
                      </p>
                      <p className="text-sm text-slate-800">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
                {copy.inclusionTitle}
              </h2>
              <p className="mt-4 text-sm text-slate-800">
                {copy.inclusionBody}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                {copy.inclusionPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* GLOSSARY */}
      <section className="pb-10 pt-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
            {copy.glossaryTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {glossaryItems.map((g) => (
              <article
                key={g.term}
                className="rounded-3xl bg-white p-5 text-sm shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-sm font-semibold text-emerald-950">
                  {g.term}
                </h3>
                <p className="mt-2 text-sm text-slate-800">{g.def}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE FAQS + CTA */}
      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
            {copy.faqsTitle}
          </h2>
          <div className="mt-4 space-y-3">
            {inlineFaqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-slate-200"
              >
                <summary className="cursor-pointer list-none font-semibold text-emerald-950">
                  <span className="flex items-center justify-between gap-3">
                    <span>{f.q}</span>
                    <span className="text-xs text-slate-400 group-open:hidden">
                      +
                    </span>
                    <span className="hidden text-xs text-slate-400 group-open:inline">
                      –
                    </span>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-800">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl bg-[#FFFCF5] p-4 text-sm ring-1 ring-emerald-100 md:p-5">
            <p className="text-slate-800">
              {copy.faqContactLead}
              <Link
                href={`${prefix}/contact`}
                className="font-semibold text-emerald-900 underline underline-offset-2"
              >
                {copy.faqContactLink}
              </Link>
              .
            </p>
            <Link
              href={`${prefix}/community/prenotami-uk-guide`}
              className="inline-flex h-9 items-center justify-center rounded-xl bg-white px-3 text-xs font-semibold text-emerald-900 ring-1 ring-slate-200 transition hover:ring-emerald-700"
            >
              {it ? "Apri la guida Prenot@Mi" : "Open the Prenot@Mi guide"}
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY & DATA */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-white p-6 text-sm shadow-sm ring-1 ring-slate-200 md:p-8">
            <h3 className="text-xl font-semibold text-emerald-950">
              {copy.accessTitle}
            </h3>
            <p className="mt-3 text-sm text-slate-800">{copy.accessBody1}</p>
            <p className="mt-3 text-sm text-slate-800">{copy.accessBody2}</p>
            <p className="mt-3 text-sm text-emerald-900">
              <Link
                href={`${prefix}/privacy-policy`}
                className="font-semibold underline underline-offset-2"
              >
                {copy.accessSeePolicy}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
