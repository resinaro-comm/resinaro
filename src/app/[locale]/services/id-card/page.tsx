// src/app/[locale]/services/id-card-cie-assistance/page.tsx
import CieForm from "@/components/CieForm";
import type { Metadata } from "next";
import Image from "next/image";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    // Metadata
    metaTitle: it
      ? "Carta d’Identità Elettronica (CIE) — Prenotazioni & Documenti | Resinaro"
      : "Italian CIE (ID Card) Help — Booking & Documents | Resinaro",
    metaDescription: it
      ? "Assistenza amichevole per richiedere o rinnovare la Carta d’Identità Elettronica (CIE) dall’UK. £35 supporto amministrativo. Tasse consolari/governative separate. Nessuna garanzia."
      : "Friendly help to apply for or renew the Italian Electronic ID Card (CIE) from the UK. £35 admin support. Consulate/government fees paid separately. No guarantees.",

    // Hero
    heroAlt: it
      ? "Carta d’Identità Elettronica (CIE) — supporto per richiedenti nel Regno Unito"
      : "Italian Electronic ID Card (CIE) — support for UK applicants",

    // Intro card
    h1: it
      ? "CIE (Carta d’Identità) — Prenotazione & Documenti (£35)"
      : "Italian CIE (ID Card) — Booking & Document Help (£35)",
    introP1_a: it
      ? "Rendiamo semplice il percorso CIE: prepariamo i documenti, spieghiamo le biometrie e prenotiamo lo slot al consolato corretto. Il nostro compenso è "
      : "We make the CIE process simple: prepare documents, understand biometrics, and book the correct consulate slot. Our fee is ",
    introP1_bold: "£35",
    introP1_b: it
      ? " per il solo supporto amministrativo. "
      : " for admin support only. ",
    introP1_c_em: it
      ? "Le tasse consolari/governative sono separate"
      : "Consulate/government fees are separate",
    introP1_d: it
      ? " e si pagano all’autorità competente. Non siamo il Consolato; "
      : " and paid to the authority. We are not the Consulate; ",
    introP1_e_bold: it ? "nessuna garanzia" : "no guarantees",
    introP1_f: it
      ? " di disponibilità o esito. Preferisci email? Contatta "
      : " of availability or outcome. Prefer email? Contact ",
    email: "resinaro@proton.me",

    // Two info boxes
    box1_h: it ? "Cosa ottieni" : "What you get",
    box1_l1: it ? "Idoneità & guida AIRE" : "Eligibility & AIRE guidance",
    box1_l2: it ? "Checklist specifica per consolato + consigli foto/biometrie" : "Consulate-specific checklist + photo/biometrics tips",
    box1_l3: it ? "Aiuto prenotazione sui portali ufficiali" : "Booking help on official portals",

    box2_h: it ? "Importante" : "Important",
    box2_p: it
      ? "Siamo un servizio amministrativo indipendente — non consulenti legali e non affiliati ai consolati. Decisioni e disponibilità non dipendono da noi."
      : "We’re an independent admin support service — not legal advisers and not affiliated with consulates. Decisions and availability are outside our control.",

    // Form card
    form_h2: it ? "Inizia qui — modulo CIE rapido" : "Start here — quick CIE form",
    form_p_a: it
      ? "Un modulo sereno e amichevole. Un passo alla volta — va benissimo anche via email: "
      : "A calm, friendly form. One step at a time — email is fine if you prefer: ",

    // Main info cards
    whatWeDo_h2: it ? "Cosa facciamo" : "What we do",
    whatWeDo_l1: it
      ? "Verifichiamo idoneità e stato AIRE; spieghiamo come risolvere eventuali problemi"
      : "Check eligibility and AIRE status; show how to fix issues",
    whatWeDo_l2: it
      ? "Forniamo una checklist specifica per consolato e guida su immagini/biometrie"
      : "Give a consulate-specific checklist and image/biometric guidance",
    whatWeDo_l3: it
      ? "Assistiamo con la prenotazione via Prenot@Mi o portale competente"
      : "Assist with booking via Prenot@Mi or the relevant portal",
    whatWeDo_l4: it
      ? "Spieghiamo ritiro/spedizione e tempistiche tipiche"
      : "Explain collection/delivery options and typical timelines",

    need_h2: it ? "Cosa potresti dover avere" : "What you may need",
    need_col1_h3: it ? "Documenti comuni" : "Common items",
    need_col1_l1: it
      ? "Passaporto italiano (anche scaduto, dove accettato)"
      : "Italian passport (or expired, where accepted)",
    need_col1_l2: it ? "Prova di indirizzo UK (≤3 mesi)" : "Proof of UK address (≤3 months)",
    need_col1_l3: it ? "Conferma o aggiornamento AIRE" : "AIRE confirmation or update",
    need_col2_h3: it ? "Se applicabile" : "If applicable",
    need_col2_l1: it ? "Foto biometriche (specifiche consolari)" : "Biometric photos (consulate spec)",
    need_col2_l2: it ? "Documento e consenso dei genitori per minori" : "Parental ID & consent for minors",
    need_note: it
      ? "I requisiti variano per consolato — adatteremo la checklist e suggeriremo alternative se manca qualcosa."
      : "Requirements vary by consulate — we’ll tailor your checklist and suggest alternatives if something’s missing.",

    // Aside
    urgent_h: it ? "Urgente?" : "Urgent?",
    urgent_p_a: it ? "Email " : "Email ",
    urgent_subject: it ? "CIE%20Urgente" : "CIE%20Urgent",
    urgent_strong: it ? "“CIE Urgente”" : "“CIE Urgent”",

    before_h4: it ? "Prima di iniziare" : "Before you start",
    before_l1: it
      ? "Conferma stato AIRE e consolato competente"
      : "Confirm AIRE status and your consulate jurisdiction",
    before_l2: it ? "Tieni a portata documento e prova di indirizzo UK" : "Have ID and proof of UK address to hand",
    before_l3: it ? "Controlla le indicazioni per le foto biometriche" : "Check photo guidance for biometrics",

    // FAQs (on-page)
    faqs_h2: it ? "Domande frequenti" : "FAQs",
    faqs_q1: it ? "Qual è la differenza tra CIE e passaporto?" : "What’s the difference between CIE and passport?",
    faqs_a1: it
      ? "La CIE è una carta d’identità elettronica usata per l’identificazione in Italia/UE e per alcuni viaggi. Il passaporto è di solito richiesto per la maggior parte dei viaggi internazionali."
      : "CIE is an electronic ID card used for identification in Italy/EU and some travel. A passport is usually required for most international travel.",
    faqs_q2: it ? "Aiutate anche per i minori?" : "Do you help with minors?",
    faqs_a2: it
      ? "Sì — per i minori servono spesso consenso dei genitori e documenti specifici. Forniamo una checklist chiara."
      : "Yes — minors often need parental consent and specific documents. We provide a clear checklist.",

    // JSON-LD (FAQ schema at top)
    ld_faq: [
      {
        q: it ? "Posso fare domanda di CIE dal Regno Unito?" : "Can I apply for a CIE from the UK?",
        a: it
          ? "Di solito sì. I cittadini italiani residenti nel Regno Unito presentano domanda tramite il proprio consolato. Se l’AIRE è aggiornato, possiamo guidarti su prenotazione, documenti e biometrie."
          : "Usually yes. Italian citizens resident in the UK typically apply via their local consulate. If your AIRE is up to date, we can guide booking, documents and biometrics.",
      },
      {
        q: it ? "Serve l’AIRE?" : "Do I need AIRE?",
        a: it
          ? "La maggior parte dei consolati richiede una corretta iscrizione AIRE per le domande CIE dall’estero. Ti mostriamo come verificare/aggiornare AIRE prima di prenotare."
          : "Most consulates require correct AIRE registration to process CIE applications from abroad. We’ll show you how to check/update AIRE before you book.",
      },
      {
        q: it ? "Quanto tempo ci vuole?" : "How long does it take?",
        a: it
          ? "Le tempistiche variano per consolato e metodo di consegna. Prenotazione, biometrie e produzione possono richiedere diverse settimane, talvolta di più nei periodi di punta."
          : "Timelines vary by consulate and delivery method. Booking, biometrics and card production can take several weeks, sometimes longer in busy periods.",
      },
      {
        q: it ? "La CIE basta per viaggiare?" : "Is CIE enough for travel?",
        a: it
          ? "La CIE è ampiamente accettata nell’UE come documento d’identità e per alcuni viaggi. Controlla sempre regole di compagnia aerea e destinazione. Per viaggi internazionali più ampi, di solito serve il passaporto."
          : "CIE is widely accepted in the EU for ID and some travel. Always check airline and destination rules. For broader international travel, a passport is usually required.",
      },
    ],

    // JSON-LD (Service)
    ld_service_name: it ? "Assistenza CIE (Carta d’Identità Elettronica) Italia" : "Italian CIE (ID Card) Assistance",
    ld_service_type: it
      ? "Assistenza consolare, prenotazioni e preparazione documenti"
      : "Consular assistance, appointment booking and document preparation",
    ld_service_desc: it
      ? "Supporto calmo e passo-passo per ottenere o rinnovare la CIE dall’UK: controlli documentali, aiuto prenotazione, guida biometrie e follow-up. £35 compenso amministrativo; tasse consolari ufficiali a parte. Nessuna garanzia."
      : "Calm, step-by-step help to obtain or renew the Italian Electronic ID Card (CIE) from the UK: document checks, booking support, biometric guidance and follow-up. £35 admin fee; official consulate fees separate. No guarantees.",
    inLanguage: it ? "it-IT" : "en-GB",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical: "/services/id-card-cie-assistance" },
  };
}

/* ------------------------------ JSON-LD ------------------------------- */
function buildFaqJsonLd(locale: Locale) {
  const c = t(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.ld_faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function buildServiceJsonLd(locale: Locale) {
  const c = t(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.ld_service_name,
    provider: {
      "@type": "Organization",
      name: "Resinaro",
      url: "https://www.resinaro.com",
      email: "resinaro@proton.me",
    },
    serviceType: c.ld_service_type,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description: c.ld_service_desc,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "35",
      availability: "https://schema.org/InStock",
    },
    inLanguage: c.inLanguage,
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const c = t(locale);

  const faqJsonLd = buildFaqJsonLd(locale);
  const serviceJsonLd = buildServiceJsonLd(locale);

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/cie-hero-3840x1280.png"
            alt={c.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Overlay intro with disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {c.h1}
            </h1>
            <p className="mt-2 text-green-800">
              {c.introP1_a}
              <strong>{c.introP1_bold}</strong>
              {c.introP1_b}
              <em>{c.introP1_c_em}</em>
              {c.introP1_d}
              <strong>{c.introP1_e_bold}</strong>
              {c.introP1_f}
              <a className="underline" href={`mailto:${c.email}`}>{c.email}</a>.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">{c.box1_h}</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li>{c.box1_l1}</li>
                  <li>{c.box1_l2}</li>
                  <li>{c.box1_l3}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h3 className="font-semibold">{c.box2_h}</h3>
                <p className="text-sm text-gray-800">
                  {c.box2_p}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form near the top for mobile */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pt-6 md:pt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">{c.form_h2}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {c.form_p_a}
            <a className="underline" href={`mailto:${c.email}`}>{c.email}</a>.
          </p>
          <CieForm />
        </div>
      </section>

      {/* Helpful info — short & scannable */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{c.whatWeDo_h2}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>{c.whatWeDo_l1}</li>
              <li>{c.whatWeDo_l2}</li>
              <li>{c.whatWeDo_l3}</li>
              <li>{c.whatWeDo_l4}</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{c.need_h2}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">{c.need_col1_h3}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>{c.need_col1_l1}</li>
                  <li>{c.need_col1_l2}</li>
                  <li>{c.need_col1_l3}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{c.need_col2_h3}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>{c.need_col2_l1}</li>
                  <li>{c.need_col2_l2}</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {c.need_note}
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">{c.urgent_h}</h3>
            <p className="text-sm">
              {c.urgent_p_a}
              <a
                className="underline text-amber-300"
                href={`mailto:${c.email}?subject=${c.urgent_subject}`}
              >
                {c.email}
              </a>{" "}
              {locale === "it" ? "con oggetto " : "with subject "}
              <strong>{c.urgent_strong}</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">{c.before_h4}</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>{c.before_l1}</li>
              <li>{c.before_l2}</li>
              <li>{c.before_l3}</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQs (short) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">{c.faqs_h2}</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">{c.faqs_q1}</summary>
          <div className="mt-2 text-gray-700">
            {c.faqs_a1}
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">{c.faqs_q2}</summary>
          <div className="mt-2 text-gray-700">
            {c.faqs_a2}
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </main>
  );
}
