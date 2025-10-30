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
      ? "Assistenza Iscrizione AIRE (UK) — Supporto Rapido e Amichevole | Resinaro"
      : "AIRE Registration Help (UK) — Fast, Friendly Support | Resinaro",
    description: it
      ? "Aiuto semplice per registrare o aggiornare l’AIRE dal Regno Unito. £35 per una persona o una coppia, £50 per 3+ nello stesso nucleo. Ti guidiamo nei passaggi e controlliamo i documenti. Supporto amministrativo indipendente; nessuna garanzia."
      : "Simple help to register or update AIRE from the UK. £35 for one or a couple, £50 for 3+ in a household. We guide the steps and review documents. Independent admin support; no guarantees.",
    ogDesc: it
      ? "Passaggi chiari, checklist e controlli documentali per AIRE dal Regno Unito."
      : "Clear steps, checklist and document review for AIRE from the UK.",

    // Hero + intro card
    h1: it ? "Iscrizione e Aggiornamenti AIRE — Aiuto Amichevole" : "AIRE Registration & Updates — Friendly Help",
    heroAlt: it ? "Iscrizione AIRE — aggiornamento registri consolari italiani" : "AIRE registration — Italian consular records update",
    introP1: it
      ? "Rendiamo AIRE semplice per chi vive nel Regno Unito: condividiamo una checklist chiara, guidiamo i passaggi sul portale e ti aiutiamo a evitare gli errori più comuni. "
      : "We make AIRE simple for UK residents: we share a clear checklist, guide the portal steps and help you avoid common mistakes. ",
    introPrice: it
      ? "£35 per una persona o una coppia, £50 per un nucleo familiare di 3+."
      : "£35 for one person or a couple, £50 for a household of 3+.",
    introDisclaimer: it
      ? "Siamo un servizio di supporto amministrativo indipendente — non il Consolato e non consulenti legali — quindi nessuna garanzia su tempi o esiti. Preferisci email? Scrivi a "
      : "We’re an independent admin support service — not the Consulate and not legal advisers — so no guarantees of processing times or outcomes. Prefer email? Write to ",
    email: "resinaro@proton.me",

    // Pricing + important boxes
    pricingH: it ? "Prezzi" : "Pricing",
    pricingL1: it ? "£35 — singolo o coppia" : "£35 — single person or a couple",
    pricingL2: it ? "£50 — famiglia / gruppo di 3+" : "£50 — family / group of 3+",
    pricingNote: it
      ? "Il prezzo è per prenotazione per nucleo familiare. Decisioni e tempistiche consolari non dipendono da noi."
      : "Price is per household booking. Consulate decisions and timing are outside our control.",
    importantH: it ? "Importante" : "Important",
    importantP: it
      ? "Forniamo solo assistenza amministrativa e sui documenti. Eventuali tasse ufficiali si pagano all’autorità competente. Non siamo responsabili di esiti o ritardi dell’autorità."
      : "We assist with admin and documents only. You pay any official fees to the authority, if applicable. We’re not liable for authority outcomes or delays.",

    // Form card
    formH2: it ? "Inizia la tua richiesta AIRE" : "Start your AIRE request",
    formP: it
      ? "Un modulo sereno e amichevole. Puoi anche caricare i documenti più tardi — ti ricontatteremo via email."
      : "A calm, friendly form. You can also upload documents later — we’ll follow up by email.",

    // Info cards
    whyH2: it ? "Perché l’AIRE è importante" : "Why AIRE matters",
    whyP: it
      ? "AIRE ti collega al consolato competente, aiuta con passaporto/CIE e assicura comunicazioni ufficiali corrette. Manteniamo il percorso semplice e adattato al tuo consolato."
      : "AIRE links you to the correct consulate, helps with passport/CIE services and ensures you receive official communications. We keep the process simple and tailored to your consulate.",
    whatH2: it ? "Cosa facciamo" : "What we do",
    whatL1: it ? "Confermiamo il consolato competente e il canale corretto di presentazione" : "Confirm your consulate and the correct submission route",
    whatL2: it ? "Forniamo una checklist specifica per consolato e modelli" : "Provide a consulate-specific checklist and templates",
    whatL3: it ? "Revisioniamo i documenti e guidiamo i passaggi sul portale" : "Review your documents and guide the portal steps",
    whatL4: it ? "Condividiamo consigli per evitare ritardi comuni" : "Share tips to avoid common delays",

    // Aside
    urgentH: it ? "Urgente?" : "Urgent?",
    urgentP1: it ? "Email " : "Email ",
    urgentSubject: it ? "AIRE%20Urgente" : "AIRE%20Urgent",
    urgentStrong: it ? "“AIRE Urgente”" : "“AIRE Urgent”",
    beforeH: it ? "Prima di iniziare" : "Before you start",
    beforeL1: it
      ? "Tieni a portata documento d’identità e prova di indirizzo nel Regno Unito (se disponibile)"
      : "Have your ID and UK address evidence to hand (if available)",
    beforeL2: it ? "Aggiungi i familiari se stai aggiornando un intero nucleo" : "Add family members if updating a whole household",
    beforeL3: it ? "Se hai dubbi, scrivici prima — saremo felici di aiutare" : "If unsure, email us first — we’re happy to help",

    // FAQs heading + items
    faqsH2: it ? "Domande frequenti" : "FAQs",
    faq1Q: it ? "Posso aggiornare l’AIRE online?" : "Can I update AIRE online?",
    faq1A: it
      ? "Molti consolati usano FAST IT per gli aggiornamenti; dove non è disponibile, ti guidiamo sul canale corretto."
      : "Many consulates use FAST IT for updates; where it’s not available, we guide you through the correct route.",
    faq2Q: it ? "È consulenza legale?" : "Is this legal advice?",
    faq2A: it
      ? "No — offriamo solo supporto amministrativo e guida sui documenti. Decisioni e tempistiche sono definite dal consolato."
      : "No — we provide administrative support and document guidance only. Decisions and timelines are set by the consulate.",

    // JSON-LD (FAQ)
    faqLdQA: [
      {
        q: it ? "Che cos’è l’AIRE e perché dovrei iscrivermi?" : "What is AIRE and why should I register?",
        a: it
          ? "AIRE è il registro dei cittadini italiani residenti all’estero. Tenerlo aggiornato aiuta con i servizi consolari (passaporto/CIE), i diritti di voto e l’esatta competenza consolare."
          : "AIRE is the register of Italian citizens living abroad. Keeping it updated helps with consular services (passport/CIE), voting rights and correct consular jurisdiction.",
      },
      {
        q: it ? "Mi registrate voi direttamente?" : "Do you register me directly?",
        a: it
          ? "Forniamo supporto amministrativo e controlli documentali per la tua pratica AIRE. La decisione finale e la lavorazione sono del consolato tramite il suo portale o di persona."
          : "We provide admin support and document checks for your AIRE submission. The final decision and processing are done by the consulate via its portal or in person.",
      },
      {
        q: it ? "Quanto tempo ci vuole?" : "How long does it take?",
        a: it
          ? "Possiamo condividere una checklist entro pochi giorni lavorativi. I tempi di lavorazione del consolato variano per sede e possono richiedere diverse settimane."
          : "We can share a checklist within a few business days. Consulate processing times vary by office and can take several weeks.",
      },
    ],

    // JSON-LD (Service)
    serviceName: it ? "Assistenza Iscrizione & Aggiornamenti AIRE" : "AIRE Registration & Updates",
    serviceType: it ? "Assistenza per registrazione consolare" : "Consular registration assistance",
    serviceDesc: it
      ? "Aiuto passo-passo per iscrizione o aggiornamento AIRE: controlli documentali, guida al portale e supporto amichevole. £35 per singolo/coppia; £50 per famiglie 3+."
      : "Step-by-step help to register or update AIRE: document checks, portal guidance and friendly support. £35 for one/couple; £50 for families of 3+.",
    inLanguage: it ? "it-IT" : "en-GB",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: "/services/aire-registration" },
    openGraph: {
      title: copy.title,
      description: copy.ogDesc,
      type: "article",
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
      price: "35",
      availability: "https://schema.org/InStock",
    },
    inLanguage: copy.inLanguage,
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  const faqJsonLd = buildFaqJsonLd(locale);
  const serviceJsonLd = buildServiceJsonLd(locale);

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/aire-registration.png"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Overlay intro with pricing + disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {copy.h1}
            </h1>
            <p className="mt-2 text-green-800">
              {copy.introP1}
              <strong>{copy.introPrice}</strong>{" "}
              {copy.introDisclaimer}
              <a className="underline" href={`mailto:${copy.email}`}>{copy.email}</a>.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">{copy.pricingH}</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li><strong>£35</strong> — {copy.pricingL1.replace("£35 — ", "")}</li>
                  <li><strong>£50</strong> — {copy.pricingL2.replace("£50 — ", "")}</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  {copy.pricingNote}
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h3 className="font-semibold">{copy.importantH}</h3>
                <p className="text-sm text-gray-800">
                  {copy.importantP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form near the top for mobile */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pt-6 md:pt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">{copy.formH2}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {copy.formP}
          </p>
          <AireForm />
        </div>
      </section>

      {/* Helpful info — short & scannable */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.whyH2}</h2>
            <p className="text-gray-700 mt-2">
              {copy.whyP}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.whatH2}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>{copy.whatL1}</li>
              <li>{copy.whatL2}</li>
              <li>{copy.whatL3}</li>
              <li>{copy.whatL4}</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">{copy.urgentH}</h3>
            <p className="text-sm">
              {copy.urgentP1}
              <a
                className="underline text-amber-300"
                href={`mailto:${copy.email}?subject=${copy.urgentSubject}`}
              >
                {copy.email}
              </a>{" "}
              {locale === "it" ? "con oggetto " : "with subject "} <strong>{copy.urgentStrong}</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">{copy.beforeH}</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>{copy.beforeL1}</li>
              <li>{copy.beforeL2}</li>
              <li>{copy.beforeL3}</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">{copy.faqsH2}</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">{copy.faq1Q}</summary>
          <div className="mt-2 text-gray-700">
            {copy.faq1A}
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">{copy.faq2Q}</summary>
          <div className="mt-2 text-gray-700">
            {copy.faq2A}
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
