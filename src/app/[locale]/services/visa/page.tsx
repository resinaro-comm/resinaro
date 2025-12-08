import VisaForm from "@/components/VisaForm";
import type { Metadata } from "next";
import Image from "next/image";

/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title: "Visa Help (UK) – Guide £35 or 1:1 £70 | Resinaro",
  description:
    "Visa & biometric appointment help for Italians in the UK. £35 step-by-step guide or £70 1:1 support with account, form and booking. Admin support only; no legal advice; official fees separate.",
  alternates: {
    canonical: "/services/visa-booking",
    languages: {
      en: "/en/services/visa-booking",
      it: "/it/services/visa-booking",
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
    title: "Visa Help (UK) – Guide £35 or 1:1 £70 | Resinaro",
    description:
      "Clear visa help for Italians in the UK: £35 step-by-step guide or £70 1:1 support with account setup, forms and booking. We are not immigration advisers.",
    url: "https://www.resinaro.com/services/visa-booking",
    siteName: "Resinaro",
    images: [
      {
        url: "/images/service-visa.png",
        width: 1200,
        height: 630,
        alt: "Visa appointment and document help by Resinaro",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Help (UK) – Guide £35 or 1:1 £70 | Resinaro",
    description:
      "Visa & biometric appointment help for Italians in the UK. Two options: £35 guide or £70 1:1 admin support. No guarantees or legal advice.",
    images: ["/images/service-visa.png"],
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
      name: "Do you guarantee a visa decision or appointment date?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Decisions and appointment availability are controlled only by the official authority (e.g., UKVI, TLScontact, VFS, consulates). We help you prepare and navigate portals to reduce avoidable admin errors, but we cannot guarantee outcomes or appointment dates.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this visa help service for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mainly Italians in the UK (and their close family members) who need help understanding which visa route to select, preparing documents and using official portals such as UKVI, TLScontact or VFS for work, study, family or visit visas.",
      },
    },
    {
      "@type": "Question",
      name: "Is this immigration or legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Resinaro provides administrative support only: explaining forms, portals and document organisation based on public information and what you tell us. We are not solicitors or regulated immigration advisers and we do not give legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "What are the £35 and £70 options?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The £35 option is a step-by-step written guide with a tailored document checklist you can follow by yourself. The £70 option includes everything in the guide plus 1:1 support to set up the account, go through the online form with you and help with booking appointments where portals allow. Official visa fees are separate and paid directly to the authority.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Appointment & Document Support (Guide or 1:1)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType:
    "Visa/biometrics appointment booking and document preparation admin support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Visa and biometric appointment help for Italians in the UK. £35 step-by-step written guide or £70 1:1 support with account setup, forms and appointment booking. No legal advice and no guarantees of outcome.",
  offers: [
    {
      "@type": "Offer",
      name: "Visa step-by-step guide",
      priceCurrency: "GBP",
      price: "35",
      availability: "https://schema.org/InStock",
      description:
        "Route check and personalised step-by-step written guide with tailored document checklist to follow on your own. Admin support only; official fees separate.",
    },
    {
      "@type": "Offer",
      name: "Visa 1:1 account & application support",
      priceCurrency: "GBP",
      price: "70",
      availability: "https://schema.org/InStock",
      description:
        "Everything in the £35 guide plus 1:1 support to set up the account, go through the online form with you and help with appointment booking. Admin support only; official fees separate.",
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
      name: "Services",
      item: "https://www.resinaro.com/services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Visa help (guide & 1:1)",
      item: "https://www.resinaro.com/services/visa-booking",
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
      ? "Aiuto per appuntamenti visti e documenti per italiani nel Regno Unito"
      : "Visa appointment and document support for Italians in the UK",
    heroH1: it
      ? "Aiuto visto – guida da £35 o supporto 1:1 da £70"
      : "Visa help – £35 guide or £70 1:1 support",
    heroSub: it ? (
      <>
        Ti aiutiamo a capire il <strong>percorso visto giusto</strong>, i{" "}
        <strong>documenti</strong> e i portali (UKVI, TLS, VFS, consolati). Puoi
        scegliere tra una{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          guida passo-passo da £35
        </span>{" "}
        oppure un{" "}
        <strong>
          supporto 1:1 da £70 per account, modulo online e appuntamento
        </strong>
        . <strong>Non siamo avvocati d’immigrazione</strong> e non diamo
        consulenza legale.
      </>
    ) : (
      <>
        We help you understand the <strong>right visa route</strong>,{" "}
        <strong>documents</strong> and portals (UKVI, TLS, VFS, consulates).
        Choose between a{" "}
        <span className="underline underline-offset-4 decoration-emerald-700">
          £35 step-by-step guide
        </span>{" "}
        or{" "}
        <strong>£70 1:1 support with account, online form and booking</strong>.
        <strong> We are not immigration lawyers</strong> and we don’t give legal
        advice.
      </>
    ),
    heroCta: it ? "Inizia l’aiuto visto" : "Start visa help",
    heroSecondaryCta: it ? "Vedi il modulo" : "View the form",
    heroTrustLine: it
      ? "Italiano e inglese · Solo supporto amministrativo · Processo privato e sicuro"
      : "Italian & English · Admin support only · Safe, private process",

    heroTierTitle: it ? "Due livelli di supporto" : "Two levels of support",
    heroTierItems: it
      ? [
          "£35 – guida scritta passo-passo con checklist personalizzata",
          "£70 – tutto quello della guida + supporto 1:1 per account, modulo e appuntamento",
          "In entrambi i casi: niente consulenza legale, nessuna garanzia su esito o date.",
        ]
      : [
          "£35 – written step-by-step guide with tailored checklist",
          "£70 – everything in the guide plus 1:1 help with account, form and appointment",
          "Both options: no legal advice, no guarantee of outcome or dates.",
        ],

    whoH: it ? "È per te se…" : "This is for you if…",
    whoList: it
      ? [
          "Sei in Regno Unito e ti serve un visto (lavoro, studio, famiglia, visita, ecc.).",
          "Ti blocchi davanti ai portali UKVI, TLS, VFS o non capisci bene la procedura.",
          "Hai paura di sbagliare modulo, percorso o documenti da caricare.",
          "Vuoi che qualcuno ti organizzi i passi in modo calmo e chiaro.",
        ]
      : [
          "You’re in the UK and need a visa (work, study, family, visit, etc.).",
          "You feel stuck or confused with UKVI, TLS, VFS or consulate portals.",
          "You’re worried about choosing the wrong route or missing documents.",
          "You want someone to organise the steps calmly and clearly for you.",
        ],
    whoNotH: it ? "Non è per te se…" : "It’s not for you if…",
    whoNotList: it
      ? [
          "Ti serve una consulenza legale completa o una rappresentanza formale.",
          "Sei in una situazione estremamente complessa (ricorsi, overstayer, protezione internazionale): in quel caso serve un avvocato/consulente regolamentato.",
        ]
      : [
          "You need full legal advice or formal immigration representation.",
          "You are in a very complex situation (appeals, overstayer, protection claims) – you need a regulated adviser or solicitor instead.",
        ],

    whatH: it ? "Cosa facciamo per te" : "What you get with this service",
    what1Title: it
      ? "Verifica percorso e requisiti di base"
      : "Route check and basic requirements",
    what1Body: it
      ? "Analizziamo brevemente la tua situazione e il motivo del visto per orientarti verso il percorso più probabile, usando solo informazioni pubbliche e quello che ci racconti."
      : "We look at your situation and reason for the visa to point you towards the most likely route, using only public information and what you tell us.",
    what2Title: it
      ? "Checklist documenti e istruzioni chiare"
      : "Document checklist and clear instructions",
    what2Body: it
      ? "Ricevi una lista documenti personalizzata con note pratiche su come prepararli e istruzioni passo-passo su cosa cliccare e in che ordine."
      : "You get a tailored document checklist with practical notes and a step-by-step explanation of what to click and in which order.",
    what3Title: it
      ? "Portali, pagamento e appuntamenti"
      : "Portals, payment and appointments",
    what3Body: it
      ? "Con il pacchetto 1:1 ti affianchiamo su account, modulo online e prenotazione appuntamento (quando il portale lo permette), riducendo errori tecnici."
      : "With the 1:1 option we sit beside you (online) for account, form and booking steps, reducing technical mistakes where the portal allows it.",

    howH: it ? "Come funziona (3 passi)" : "How it works (3 steps)",
    how1Title: it ? "1. Ci racconti il tuo caso" : "1. You tell us your situation",
    how1Body: it
      ? "Compili il modulo qui sotto (o ci scrivi) con il tipo di visto, la tua situazione e la tempistica ideale."
      : "You fill out the form below (or email us) with your visa type, situation and ideal timeline.",
    how2Title: it ? "2. Prepariamo la guida" : "2. We prepare your guide",
    how2Body: it
      ? "Ti mandiamo una guida passo-passo con checklist documenti e, se hai scelto il 1:1, fissiamo una sessione per fare insieme portali e modulo."
      : "We send a step-by-step guide with a document checklist and, if you chose 1:1, we schedule a session to go through portals and the form together.",
    how3Title: it ? "3. Compili e invii con più calma" : "3. You submit with more calm",
    how3Body: it
      ? "Segui la guida (e/o la sessione 1:1) per completare il percorso in modo più ordinato. La decisione finale resta sempre all’autorità competente."
      : "You follow the guide (and/or the 1:1 session) to complete things more calmly and organised. The final decision is always with the authority.",

    pricingH: it ? "Prezzi chiari (supporto amministrativo)" : "Clear pricing (admin support only)",
    pricingGuideTitle: it ? "£35 – guida passo-passo" : "£35 – step-by-step guide",
    pricingGuideBody: it
      ? "Verifica percorso, checklist personalizzata, istruzioni scritte passo-passo con link ai portali. Perfetta se te la cavi da solo ma vuoi ordine."
      : "Route check, tailored checklist, written step-by-step instructions with links to official portals. Best if you can do it yourself but want structure.",
    pricingFullTitle: it
      ? "£70 – supporto 1:1 completo"
      : "£70 – 1:1 full support",
    pricingFullBody: it
      ? "Tutto ciò che include la guida da £35, più sessione 1:1 per account, modulo online e appuntamento (quando possibile). Ideale se vuoi qualcuno “accanto”."
      : "Everything in the £35 guide plus a 1:1 session for account setup, online form and appointment booking (where possible). Ideal if you want someone “next to you”.",
    pricingNote: it
      ? "Le tariffe governative/consolari, il servizio di corriere o priorità e tutte le fee ufficiali si pagano sempre direttamente al fornitore."
      : "Government/consulate fees, courier or priority services and all official charges are always paid directly to the authority.",
    pricingSub: it
      ? "Si tratta solo di supporto amministrativo. Non possiamo garantire l’esito del visto né le tempistiche di decisione."
      : "This is admin support only. We cannot guarantee your visa outcome or decision timelines.",

    formH: it ? "Inizia l’aiuto visto" : "Start visa help",
    formP: it
      ? "Compila il modulo con calma. Puoi indicare se vuoi la guida da £35, il 1:1 da £70 o se non sei ancora sicuro."
      : "Fill in the form calmly. You can indicate if you prefer the £35 guide, the £70 1:1 support, or if you’re not sure yet.",
    formSupport: it ? (
      <>
        Domande prima di procedere? Scrivici a{" "}
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
        Questions before starting? Email{" "}
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

    docsH: it
      ? "Cosa potresti dover preparare (promemoria veloce)"
      : "What you may need to prepare (quick heads-up)",
    docsForTitle: it ? "Spesso richiedono:" : "Often required:",
    docsList: it
      ? [
          "Passaporto attuale o documento di identità.",
          "Prove di reddito o risparmi (estratti conto, buste paga, ecc.).",
          "Prova di indirizzo o legami con il Regno Unito/Italia.",
          "Lettere di datore di lavoro, università o sponsor (se rilevante).",
        ]
      : [
          "Your current passport or ID document.",
          "Proof of funds or income (bank statements, payslips, etc.).",
          "Proof of address or ties to the UK/Italy.",
          "Letters from employer, university or sponsor (if relevant).",
        ],
    docsNote: it ? (
      <>
        Ogni percorso è diverso. Useremo il modulo per capire la tua situazione e
        ti daremo una lista più precisa. In caso di dubbi grossi, è meglio anche
        sentire un consulente regolamentato.
      </>
    ) : (
      <>
        Every route is different. We’ll use the form to understand your situation
        and send a more precise list. For very complex cases, it’s wise to also
        speak to a regulated adviser.
      </>
    ),

    expectationsH: it
      ? "Aspettative oneste (da leggere)"
      : "Honest expectations (please read)",
    expectationsP1: it ? (
      <>
        Non siamo avvocati né consulenti d’immigrazione regolamentati. Possiamo
        aiutarti solo con <strong>supporto amministrativo</strong> (portali,
        moduli, documenti) basato sulle informazioni pubbliche e su quello che
        ci scrivi. <strong>Non possiamo garantire</strong> che il visto venga
        concesso o in quanto tempo.
      </>
    ) : (
      <>
        We are not lawyers or regulated immigration advisers. We can only offer{" "}
        <strong>admin support</strong> (portals, forms, documents) based on
        public information and what you tell us. We{" "}
        <strong>cannot guarantee</strong> your visa will be granted or how long
        a decision will take.
      </>
    ),
    expectationsP2: it ? (
      <>
        Tu rimani sempre responsabile delle informazioni inserite nei moduli e
        nelle dichiarazioni. Se hai una situazione limite o urgente, ti
        consiglieremo di contattare un professionista regolamentato.
      </>
    ) : (
      <>
        You remain responsible for the information entered into forms and any
        declarations. If you are in an extreme or urgent situation, we’ll
        encourage you to speak to a regulated professional.
      </>
    ),

    otherH: it ? "Altri percorsi utili" : "Other helpful services",
    otherPassport: it
      ? "Appuntamenti passaporto italiano (Prenot@Mi 12+)"
      : "Italian passport appointments (Prenot@Mi 12+)",
    otherTranslation: it
      ? "Traduzioni di documenti per visti e consolati"
      : "Document translations for visas and consulates",
    otherContact: it ? "Contatta direttamente Resinaro" : "Contact Resinaro directly",
    allServices: it ? "Tutti i servizi" : "All services",
  };
}

/* ================================ PAGE ================================= */

export default function VisaServicePage({
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
            src="/images/service-visa.png"
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
                    ? "Supporto visto per italiani nel Regno Unito"
                    : "Visa support for Italians in the UK"}
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

              {/* Hero right – tiers summary */}
              <div className="md:w-[280px]">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
                    {copy.heroTierTitle}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[12px] text-emerald-900">
                    {copy.heroTierItems.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[3px] inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-800">
                          ✓
                        </span>
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

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-white/70 p-4">
              <h3 className="text-sm font-semibold text-emerald-950">
                {copy.pricingGuideTitle}
              </h3>
              <p className="mt-1 text-sm text-emerald-900/90">
                {copy.pricingGuideBody}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-300 bg-emerald-700 text-emerald-50 p-4">
              <h3 className="text-sm font-semibold">
                {copy.pricingFullTitle}
              </h3>
              <p className="mt-1 text-sm text-emerald-50/90">
                {copy.pricingFullBody}
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-emerald-900/80">
            {copy.pricingNote}
          </p>
          <p className="mt-1 text-center text-xs text-emerald-900/80">
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
          <VisaForm />
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
              href={p("/services/passport")}
            >
              {copy.otherPassport}
            </a>
            <a
              className="inline-flex items-center rounded-full border border-emerald-800/20 px-4 py-1.5 text-emerald-900 hover:bg-emerald-50"
              href={p("/services/translation")}
            >
              {copy.otherTranslation}
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
