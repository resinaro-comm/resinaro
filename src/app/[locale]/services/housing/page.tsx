import Link from "next/link";
import type { Metadata } from "next";
import HousingForm from "@/components/HousingForm";


/* =============================== METADATA =============================== */

export const metadata: Metadata = {
  title:
    "Housing & Tenant Support (UK) | Resinaro — Safe Renting, Deposits & Council Help",
  description:
    "Housing guidance for migrants in the UK: rental scam checks, tenant action plans for repairs/deposits/eviction and council housing navigation. Support in Italian and English.",
  alternates: {
    canonical: "/services/housing-guidance",
    languages: {
      en: "/en/services/housing-guidance",
      it: "/it/services/housing-guidance",
    },
  },
  openGraph: {
    title:
      "Housing & Tenant Support (UK) | Resinaro — Safe Renting, Deposits & Council Help",
    description:
      "AI-assisted housing guidance for migrants in the UK: rental scam checks, tenant action plans, deposit and repairs issues, and council housing navigation.",
    url: "https://www.resinaro.com/services/housing-guidance",
    siteName: "Resinaro",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Housing & Tenant Support (UK) | Resinaro — Safe Renting, Deposits & Council Help",
    description:
      "Support for safe renting, tenant issues and council housing in the UK. Specialised in Italians and migrants, with AI-assisted tools and human review.",
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
      name: "What is the Rental Scam & Listing Check?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You send us a room or flat advert (links and screenshots). We run structured checks, use tools to spot warning signs and send you a short risk report with a simple rating (Safe / Needs Caution / High Risk), questions to ask and what to avoid before paying any money.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Tenant Action Plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A Tenant Action Plan is a personalised pack for issues like repairs, deposit disputes or eviction worries. It usually includes a timeline of events, a rights summary in plain language, step-by-step actions for the next 30 days and draft letters or emails you can send to your landlord, agent or council.",
      },
    },
    {
      "@type": "Question",
      name: "Can Resinaro help with council housing or homelessness applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. For more complex situations we offer a Council Housing & Homelessness Navigation service. We help you understand council duties, prepare a clear written statement, gather evidence and structure your case, and we signpost specialist charities or legal aid where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Is this legal advice? Can you guarantee outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Resinaro is not a law firm and does not provide formal legal or immigration advice. We cannot guarantee decisions made by landlords, agents or councils. We provide practical guidance, plain-language explanations and strong documents to help you present your case more clearly and safely.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Housing Guidance & Tenant Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType:
    "Housing guidance for migrants in the UK: rental scam checks, tenant rights and council application support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Layered housing support for migrants in the UK, including AI-assisted rental scam checks, tenant action plans and council housing navigation packs, all reviewed by a human specialist.",
  offers: [
    {
      "@type": "Offer",
      name: "Rental Scam & Listing Check",
      priceCurrency: "GBP",
      price: "35.00",
      description:
        "Fast risk report on 1–3 rental listings, including a simple risk rating and questions to ask before paying any deposit.",
    },
    {
      "@type": "Offer",
      name: "Tenant Action Plan",
      priceCurrency: "GBP",
      price: "35.00",
      description:
        "Personalised action plan and draft letters for repairs, deposit disputes or eviction worries, based on your situation and documents.",
    },
    {
      "@type": "Offer",
      name: "Council Housing & Homelessness Navigation",
      priceCurrency: "GBP",
      price: "35.00",
      description:
        "Guidance and structured case pack to present your situation to a UK council for housing or homelessness assistance.",
    },
  ],
};

/* ============================= i18n STRINGS ============================ */

function t(locale: "en" | "it") {
  const it = locale === "it";

  return {
    tagLine: it
      ? "Servizio per italiani e migranti nel Regno Unito"
      : "Service for Italians and migrants in the UK",
    heroH1: it
      ? "Supporto casa & affitti nel Regno Unito"
      : "Housing guidance & tenant support in the UK",
    heroSub: it ? (
      <>
        Controlli sugli annunci, piani d&apos;azione per problemi di affitto e
        supporto per richieste al council.{" "}
        <strong>In italiano e inglese</strong>, con strumenti AI interni ma
        sempre controllo umano.
      </>
    ) : (
      <>
        Rental scam checks, tenant action plans for repairs/deposits/eviction
        and council housing navigation.{" "}
        <strong>Italian &amp; English support</strong> with internal AI tools,
        always reviewed by a real person.
      </>
    ),
    heroLine2: it ? (
      <>
        Pensato per chi non conosce bene le regole UK e vuole{" "}
        <strong>evitare truffe, perdere la caparra o restare senza casa.</strong>
      </>
    ) : (
      <>
        Built for people who don&apos;t know the UK rules well and want to{" "}
        <strong>avoid scams, losing their deposit or ending up without a home.</strong>
      </>
    ),
    languageHint: it
      ? "Puoi scriverci in italiano 🇮🇹 o inglese 🇬🇧."
      : "You can write to us in Italian 🇮🇹 or English 🇬🇧.",

    chooseHelpH: it
      ? "Scegli il tipo di aiuto che ti serve"
      : "Choose the type of help you need",

    offer1Title: it
      ? "1. Controllo truffe & annunci in affitto"
      : "1. Rental Scam & Listing Check",
    offer1Intro: it
      ? "Ideale se stai cercando una stanza/casa e vuoi capire se un annuncio è sicuro prima di mandare soldi."
      : "Best if you are searching for a room or flat and want to know if a listing looks safe before sending money.",
    offer1Bullets: it
      ? [
          "Ci mandi 1–3 annunci (link e screenshot, anche da WhatsApp/Facebook/SpareRoom).",
          "Facciamo controlli strutturati: prezzo troppo basso, foto riutilizzate, agente non registrato, richieste di pagamento strane.",
          "Ricevi un report breve con giudizio (OK / Attenzione / Alto rischio), domande da fare e cosa NON fare prima di pagare.",
        ]
      : [
          "You send 1–3 adverts (links and screenshots, including WhatsApp/Facebook/SpareRoom).",
          "We run structured checks: price too low, reused photos, unregistered agent, suspicious payment requests.",
          "You receive a short risk report (Safe / Needs Caution / High Risk) with questions to ask and what NOT to do before paying.",
        ],
    offer1Note: it
      ? "Perfetto prima di pagare una caparra o bloccare una stanza a distanza."
      : "Ideal before paying any holding deposit or trying to secure a room from abroad.",

    offer2Title: it
      ? "2. Tenant Action Plan (riparazioni, caparra, sfratto)"
      : "2. Tenant Action Plan (repairs, deposits, eviction)",
    offer2Intro: it
      ? "Per chi ha già un contratto in UK e problemi con riparazioni, muffa, caparra o minacce di sfratto."
      : "Best if you already rent in the UK and have problems with repairs, mould, deposit disputes or eviction threats.",
    offer2Bullets: it
      ? [
          "Trasformiamo la tua storia e i tuoi documenti in una timeline chiara.",
          "Ricevi un piano d’azione personalizzato per i prossimi 30 giorni, con passi concreti e priorità.",
          "Prepariamo fino a 2–3 lettere/email che puoi mandare a proprietario, agenzia o council.",
        ]
      : [
          "We turn your story and documents into a clear timeline of events.",
          "You get a personalised action plan for the next 30 days with concrete steps and priorities.",
          "We draft up to 2–3 letters/emails you can send to your landlord, agent or council.",
        ],
    offer2Note: it
      ? "Non sostituiamo un avvocato, ma ti aiutiamo a organizzare il caso e comunicare in modo chiaro e fermo."
      : "We don’t replace a lawyer, but we help you organise your case and communicate clearly and firmly.",

    offer3Title: it
      ? "3. Council Housing & Homelessness Navigation"
      : "3. Council Housing & Homelessness Navigation",
    offer3Intro: it
      ? "Per situazioni serie: rischio di rimanere senza casa, bambini coinvolti, violenza, o necessità di assistenza dal council."
      : "Best for serious situations: risk of homelessness, children involved, domestic abuse, or needing help from the council.",
    offer3Bullets: it
      ? [
          "Spieghiamo in linguaggio semplice cosa può (e cosa non può) fare il council nel tuo caso.",
          "Ti aiutiamo a costruire un “case pack”: dichiarazione scritta, elenco prove e punti chiave da evidenziare.",
          "Ti indirizziamo a charity specializzate e, dove possibile, a servizi di legal aid.",
        ]
      : [
          "We explain in simple language what the council can and cannot do in your situation.",
          "We help you build a ‘case pack’: written statement, evidence list and key points to highlight.",
          "We signpost specialist charities and, where possible, legal aid services.",
        ],
    offer3Note: it
      ? "Per casi particolarmente complessi potremmo suggerire una sessione di follow-up o l’invio a servizi locali continuativi."
      : "For especially complex cases we may suggest a follow-up session or directing you to local ongoing services.",

    howH: it
      ? "Come funziona il servizio (AI + umano)"
      : "How our AI + human support works",
    howSteps: it
      ? [
          "Compili il modulo housing (in italiano o inglese) e carichi eventuali documenti/annunci.",
          "Usiamo strumenti AI interni per strutturare le informazioni, evidenziare i rischi e preparare bozza di piano e lettere.",
          "Una persona reale controlla tutto, lo adatta al tuo caso e ti invia il pacchetto finale via email.",
        ]
      : [
          "You fill in the housing form (in Italian or English) and upload any documents/listings.",
          "We use internal AI tools to structure your information, highlight risks and draft an initial plan and letters.",
          "A real person reviews everything, adapts it to your case and sends you the final pack by email.",
        ],
    howNote: it
      ? "Non inviamo mai documenti generati solo da AI: ogni report e lettera viene controllata da un umano prima di arrivare a te."
      : "We never send AI-only documents: every report and letter is checked by a human before it reaches you.",

    whoH: it ? "Per chi è pensato questo servizio" : "Who this service is for",
    whoList: it
      ? [
          "Italiani e altri migranti che affittano o stanno cercando casa nel Regno Unito.",
          "Chi non è sicuro se proprietario, agenzia o annuncio siano affidabili.",
          "Inquilini con problemi di muffa, riparazioni, condizioni non sicure o caparra trattenuta.",
          "Famiglie o singoli con serio rischio di rimanere senza casa e bisogno di aiuto dal council.",
        ]
      : [
          "Italians and other migrants renting or looking to rent in the UK.",
          "Anyone unsure whether a landlord, agent or listing can be trusted.",
          "Tenants dealing with mould, disrepair, unsafe conditions or withheld deposits.",
          "Families or individuals facing serious housing difficulties and needing help with the council.",
        ],

    prepareH: it ? "Cosa preparare prima di contattarci" : "What you should prepare",
    prepareList: it
      ? [
          "Passaporto o documento d’identità.",
          "Prova di indirizzo nel Regno Unito se disponibile (estratto conto, contratto d’affitto, council tax).",
          "Buste paga o prova di reddito se rilevante per l’affitto o per il council.",
          "Link e screenshot degli annunci da verificare, oppure email/messaggi di proprietario o agenzia.",
          "Qualsiasi lettera del council o di altri enti riguardo la tua situazione abitativa.",
        ]
      : [
          "Passport or national ID.",
          "Proof of UK address where available (bank statement, tenancy agreement, council tax letter).",
          "Payslips or proof of income if relevant to affordability or council assessments.",
          "Links and screenshots for listings you want checked, or emails/messages from your landlord/agent.",
          "Any letters from the council or other agencies about your housing situation.",
        ],

    cantDoH: it
      ? "Cosa NON possiamo fare (e cosa facciamo invece)"
      : "What we can’t do (and what we do instead)",
    cantDoList: it
      ? [
          "Non siamo uno studio legale o un consulente immigration: non rappresentiamo in tribunale né diamo pareri legali formali.",
          "Non possiamo garantire decisioni di proprietari, agenzie o council.",
          "Possiamo però aiutarti a capire le opzioni, ordinare le prove e comunicare in modo chiaro e fermo con lettere, email e piani d’azione.",
          "Quando serve rappresentanza legale, ti indirizziamo a Citizens Advice, Shelter, law centre o servizi di legal aid.",
        ]
      : [
          "We are not a law firm or immigration adviser: we don’t represent you in court or give formal legal advice.",
          "We cannot guarantee decisions made by landlords, agents or councils.",
          "We can help you understand options, organise evidence and communicate clearly and firmly with letters, emails and action plans.",
          "Where legal representation is needed, we signpost to Citizens Advice, Shelter, law centres and legal aid services.",
        ],

    storiesH: it ? "Storie reali" : "Client stories",
    story1: it
      ? '“Resinaro ha controllato un annuncio a Londra e mi ha evitato una truffa molto credibile. Ora uso la loro checklist per ogni annuncio nuovo.” — Alessio'
      : '“Resinaro checked a listing in London and saved me from a very convincing scam. Now I use their checklist for every new advert.” — Alessio',
    story2: it
      ? '“Mi hanno aiutata a scrivere tutto per il council — timeline, prove, lettera chiara. L’housing officer finalmente ha capito la nostra situazione.” — Giulia'
      : '“They helped me write everything for the council — timeline, evidence and a clear letter. The housing officer finally understood our situation.” — Giulia',

    resourcesH: it ? "Risorse e link affidabili" : "Resources & trusted links",
    resourcesGov: it
      ? "GOV.UK — housing e servizi locali"
      : "GOV.UK — housing and local services",
    resourcesCA: it
      ? "Citizens Advice — housing"
      : "Citizens Advice — housing",
    resourcesShelter: it ? "Shelter — charity casa" : "Shelter — housing charity",
    resourcesDeposit: it
      ? "Schemi di protezione deposito (deposit protection)"
      : "Deposit protection schemes",

    asideFormH: it ? "Richiedi aiuto housing" : "Request housing support",
    asideFormP1: it
      ? "Dicci in breve di cosa hai bisogno: controllo annunci, problema da inquilino o caso council/senza casa. Puoi scrivere in italiano o inglese."
      : "Tell us briefly what you need help with: listing check, tenant issue, or council/homelessness problem. You can write in Italian or English.",
    asideFormP2: it
      ? "Nel modulo indica quale servizio ti sembra più adatto (“Listing Check”, “Tenant Action Plan” o “Council Navigation”). Ti confermeremo via email se è la scelta giusta prima di iniziare."
      : 'In the form, mention which service fits you best (“Listing Check”, “Tenant Action Plan” or “Council Navigation”). We’ll confirm by email if it’s the right match before starting.',

    urgentH: it ? "Problemi urgenti di casa" : "Urgent housing issues",
    urgentP: it ? (
      <>
        Se rischi di perdere la casa o sei già senza alloggio, scrivi a{" "}
        <a
          href="mailto:resinaro@proton.me"
          className="underline text-amber-300"
        >
          resinaro@proton.me
        </a>{" "}
        con oggetto <strong>“URGENT”</strong> e indica quando possiamo
        contattarti. Daremo priorità al triage e ti indicheremo subito i
        servizi di emergenza.
      </>
    ) : (
      <>
        If you face imminent loss of your home or homelessness, email{" "}
        <a
          href="mailto:resinaro@proton.me"
          className="underline text-amber-300"
        >
          resinaro@proton.me
        </a>{" "}
        with subject <strong>“URGENT”</strong> and include the best time to
        contact you. We’ll prioritise triage and signpost emergency services.
      </>
    ),
    urgentCta: it ? "Contattaci" : "Contact us",

    beforeH: it
      ? "Prima di inviarci il modulo, se puoi"
      : "Before you contact us (if you can)",
    beforeList: it
      ? [
          "Prepara i link o screenshot degli annunci da controllare.",
          "Se li hai, tieni a portata di mano email o numeri di telefono di proprietario/agenzia.",
          "Segnala eventuali scadenze: data di sfratto, appuntamenti col council, udienze.",
          "Indica se in casa ci sono minori, persone con disabilità o rischi per la sicurezza.",
        ]
      : [
          "Have URLs or screenshots for any listings ready.",
          "If you have them, keep landlord/agent contact details handy.",
          "Mention any deadlines: eviction date, council appointments, hearings.",
          "Tell us if there are children, disabled people or safety risks in the household.",
        ],

    faqH: it ? "Domande frequenti" : "Frequently asked questions",
    faq1Q: it
      ? "In quanto tempo riceverò il report o il piano d’azione?"
      : "How fast will I receive my report or action plan?",
    faq1A: it
      ? "Per la maggior parte dei controlli annunci cerchiamo di rispondere entro 1–2 giorni lavorativi. I Tenant Action Plan e i pacchetti per il council possono richiedere più tempo, a seconda della complessità e dei documenti. Se hai una scadenza chiara (sfratto, appuntamento col council, ecc.), scrivila nel modulo così possiamo dare priorità dove possibile."
      : "For most Rental Scam & Listing Checks we aim to respond within 1–2 business days. Tenant Action Plans and council case packs can take a little longer depending on complexity and how many documents you send. If you have a clear deadline (eviction, council appointment, etc.), mention it in the form so we can prioritise where possible.",
    faq2Q: it
      ? "Potete parlare direttamente con il mio proprietario o il council?"
      : "Can you talk to my landlord or council for me?",
    faq2A: it
      ? "Di solito prepariamo lettere ed email che puoi mandare tu direttamente: così resti tu in controllo e non c’è confusione su chi ti rappresenta. In alcuni casi possiamo aiutarti a preparare cosa dire al telefono o a un appuntamento. Di norma non agiamo come tuoi rappresentanti in procedimenti legali."
      : "In most cases we prepare letters and emails for you to send yourself, so you stay in control and there is no confusion about who represents you. In some situations we can help you prepare what to say on the phone or in a meeting. We don’t usually act as your representative in legal proceedings.",
    faq3Q: it
      ? "È solo per italiani?"
      : "Is this service only for Italians?",
    faq3A: it
      ? "No. Siamo specializzati nel supporto a italiani e italofoni nel Regno Unito, ma possiamo lavorare anche con altri migranti che si trovano meglio con il nostro stile di supporto. Comunichiamo in italiano e inglese."
      : "No. We specialise in supporting Italians and Italian speakers in the UK, but we also work with other migrants who feel comfortable with our style of support. We can communicate in Italian and English.",
    faq4Q: it
      ? "Offrite anche aiuto gratuito?"
      : "Do you offer free help?",
    faq4A: it
      ? "Creiamo spesso guide e checklist gratuite su casa e diritti degli inquilini, e indichiamo sempre servizi gratuiti come Citizens Advice, Shelter e i team housing dei council. Per i casi complessi chiediamo un contributo, così possiamo dedicare abbastanza tempo alla tua situazione."
      : "We regularly create free guides and checklists on housing and tenant rights, and we always signpost to free services such as Citizens Advice, Shelter and local council housing teams. For complex casework we charge a fee so we can dedicate enough time to your situation.",
  };
}

/* ================================ PAGE ================================= */

export default function HousingGuidancePage({
  params,
}: {
  params: { locale: "en" | "it" };
}) {
  const { locale } = params;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        {/* Hero */}
        <header className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">
            {copy.tagLine}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 mt-2 text-emerald-950">
            {copy.heroH1}
          </h1>
          <p className="text-base sm:text-lg text-green-800 italic max-w-3xl mx-auto">
            {copy.heroSub}
          </p>
          <p className="text-sm text-green-900 mt-2 max-w-3xl mx-auto">
            {copy.heroLine2}
          </p>
          <p className="text-xs text-gray-700 mt-2">{copy.languageHint}</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: core content */}
          <div className="space-y-8">
            {/* Choose help */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                {copy.chooseHelpH}
              </h2>
              <div className="grid gap-4">
                {/* Offer 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h3 className="text-xl font-semibold mb-1">
                    {copy.offer1Title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {copy.offer1Intro}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {copy.offer1Bullets.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    {copy.offer1Note}
                  </p>
                </div>

                {/* Offer 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h3 className="text-xl font-semibold mb-1">
                    {copy.offer2Title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {copy.offer2Intro}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {copy.offer2Bullets.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    {copy.offer2Note}
                  </p>
                </div>

                {/* Offer 3 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h3 className="text-xl font-semibold mb-1">
                    {copy.offer3Title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {copy.offer3Intro}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {copy.offer3Bullets.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    {copy.offer3Note}
                  </p>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">{copy.howH}</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
                {copy.howSteps.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
              <p className="text-sm text-gray-600 mt-2">{copy.howNote}</p>
            </section>

            {/* Who it's for */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">{copy.whoH}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {copy.whoList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* What to prepare */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {copy.prepareH}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {copy.prepareList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* What we can't do */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {copy.cantDoH}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {copy.cantDoList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Client stories */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">{copy.storiesH}</h2>
              <blockquote className="border-l-4 border-green-900 pl-4 italic text-gray-700">
                {copy.story1}
              </blockquote>
              <blockquote className="border-l-4 border-green-900 pl-4 italic text-gray-700 mt-3">
                {copy.story2}
              </blockquote>
            </section>

            {/* Resources */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {copy.resourcesH}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.gov.uk/browse/housing-local-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-800"
                  >
                    {copy.resourcesGov}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.citizensadvice.org.uk/housing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-800"
                  >
                    {copy.resourcesCA}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.shelter.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-800"
                  >
                    {copy.resourcesShelter}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.depositprotection.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-800"
                  >
                    {copy.resourcesDeposit}
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Right: form + CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">{copy.asideFormH}</h2>
              <p className="text-sm text-gray-700 mb-2">{copy.asideFormP1}</p>
              <p className="text-sm text-gray-700 mb-4">{copy.asideFormP2}</p>
                <HousingForm locale={locale} />

            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">
                {copy.urgentH}
              </h3>
              <p className="text-sm mb-3">{copy.urgentP}</p>
              <Link
                href={p("/contact")}
                className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white"
              >
                {copy.urgentCta}
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">{copy.beforeH}</h4>
              <ul className="list-disc list-inside space-y-2">
                {copy.beforeList.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">
            {copy.faqH}
          </h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">
              {copy.faq1Q}
            </summary>
            <div className="mt-2 text-gray-700 text-sm">{copy.faq1A}</div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">
              {copy.faq2Q}
            </summary>
            <div className="mt-2 text-gray-700 text-sm">{copy.faq2A}</div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">
              {copy.faq3Q}
            </summary>
            <div className="mt-2 text-gray-700 text-sm">{copy.faq3A}</div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">
              {copy.faq4Q}
            </summary>
            <div className="mt-2 text-gray-700 text-sm">{copy.faq4A}</div>
          </details>
        </section>
      </div>

      {/* Structured data */}
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
