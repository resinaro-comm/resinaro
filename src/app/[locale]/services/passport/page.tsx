import PassportForm from "@/components/PassportForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Italian Passport Help (UK) | Resinaro",
  description:
    "We help you book Prenot@Mi passport appointments (12+/adults) and guide Under-12 postal packs. Simple, friendly, and clear — with human help by email when you need it.",
  alternates: { canonical: "/services/passport" },
  openGraph: {
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Friendly help to book Prenot@Mi appointments (12+/adults) and prepare Under-12 postal packs. We are not the Consulate; availability and issuance are their decision.",
    url: "https://www.resinaro.com/services/passport",
    images: [{ url: "/images/service-passport.png", width: 1200, height: 630, alt: "Italian passport help by Resinaro" }],
    siteName: "Resinaro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Book Prenot@Mi (12+/adults) and Under-12 postal help. Clear steps, no false promises. Email resinaro@proton.me for tailored advice.",
    images: ["/images/service-passport.png"],
  },
};

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
          "No. Appointment availability and passport issuance are decided only by the Consulate. Resinaro provides booking assistance and postal-pack guidance; outcomes and timelines are outside our control.",
      },
    },
    {
      "@type": "Question",
      name: "What does Resinaro actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Two things: (1) help monitor and book passport appointments on Prenot@Mi for 12+/adults; (2) guide parents through the Under-12 postal application with a fool-proof checklist.",
      },
    },
    {
      "@type": "Question",
      name: "Can I email documents instead of uploading?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can email documents to resinaro@proton.me. The form also has an “I’ll email later” option if that’s easier.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian Passport Appointment Help",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Prenot@Mi appointment support and Under-12 postal guidance",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Clear, friendly support for booking Italian passport appointments and preparing Under-12 postal packs. No guarantees of availability or issuance.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Services", item: "https://www.resinaro.com/services" },
    { "@type": "ListItem", position: 2, name: "Passport", item: "https://www.resinaro.com/services/passport" },
  ],
};

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: "en" | "it") {
  const it = locale === "it";
  return {
    // Hero / Intro
    heroAlt: it ? "Supporto per passaporto italiano" : "Italian passport support",
    h1: it ? "Assistenza Passaporto Italiano (Regno Unito)" : "Italian Passport Help (UK)",
    introP1: it
      ? <>Ti aiutiamo con la <strong>prenotazione Prenot@Mi (12+/adulti)</strong> e con i <strong>pacchetti postali Under-12</strong>. Se hai dubbi, scrivi a <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a> prima di pagare — ti guideremo.</>
      : <>We help with <strong>Prenot@Mi booking (12+/adults)</strong> and <strong>Under-12 postal packs</strong>. If you’re unsure, email <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a> before paying — we’ll guide you.</>,

    // Pricing box
    pricingH: it ? "Prezzi" : "Pricing",
    pricingL1: it ? <><strong>£35</strong> a persona per l’assistenza passaporti.</> : <><strong>£35</strong> per person for passport assistance.</>,
    pricingL2: it
      ? <> <strong>+£20</strong> se vuoi che <strong>creiamo e gestiamo</strong> noi il tuo account Prenot@Mi (opzionale). Puoi crearne uno gratuitamente e condividere l’accesso, se preferisci.</>
      : <> <strong>+£20</strong> if you want us to <strong>create &amp; manage</strong> your Prenot@Mi account (optional). You can create one yourself for free and share login if you prefer.</>,
    pricingNote: it
      ? "I prezzi riguardano solo l’aiuto di Resinaro, non le tariffe consolari o la spedizione."
      : "Prices are for Resinaro’s help only, not consular fees or postage.",

    // Important box
    importantH: it ? "Importante" : "Important",
    importantP1: it
      ? <>Non siamo il Consolato. La disponibilità degli appuntamenti e le decisioni sul passaporto spettano a loro. <strong>Non garantiamo</strong> date o esiti. Evita di prenotare viaggi finché il passaporto non è emesso.</>
      : <>We are <strong>not</strong> the Consulate. Appointment supply and passport decisions are theirs. We don’t guarantee dates or outcomes. We recommend not booking travel until your passport is issued.</>,
    importantP2: it
      ? <>Preferisci l’email? Invia le informazioni a <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.</>
      : <>Prefer email? Send info to <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.</>,

    // Form section
    formH: it ? "Prenota assistenza passaporto" : "Book passport support",
    formP: it ? "Una procedura guidata semplice. Un passo alla volta ✨" : "A tiny, friendly wizard. One small step at a time ✨",

    // What we do
    doH: it ? "Cosa facciamo" : "What we do",
    do12H: it ? "Prenot@Mi (12+/adulti)" : "Prenot@Mi booking (12+/adults)",
    do12P: it
      ? "Monitoriamo e tentiamo le prenotazioni, aiutiamo a configurare l’account se vuoi, e prepariamo la tua checklist. La disponibilità è gestita dal Consolato."
      : "We monitor and attempt bookings, help set up the account if you want, and prepare your checklist. Availability is controlled by the Consulate.",
    doU12H: it ? "Guida postale Under-12" : "Under-12 postal guidance",
    doU12P: it
      ? "Ti forniamo una lista infallibile del pacchetto e rivediamo i documenti prima della spedizione al Consolato (nessun appuntamento in presenza per Under-12)."
      : "We give you a fool-proof pack list and review uploads before you post to the Consulate (no in-person appointment required for U12).",

    // Quick docs
    docsH: it ? "Documenti rapidi (promemoria)" : "Quick docs (heads-up)",
    docs12H: it ? "Per Prenot@Mi" : "For Prenot@Mi",
    docs12L1: it ? "Documento d’identità valido (passaporto/CIE)" : "Valid photo ID (passport/ID card)",
    docs12L2: it ? "Prova di indirizzo nel Regno Unito (≤ 3 mesi)" : "Proof of UK address (≤3 months)",
    docs12L3: it ? "AIRE aggiornato" : "AIRE up to date",
    docs12Note: it
      ? <>Dubbi sui requisiti? Scrivici prima: <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.</>
      : <>Unsure you qualify? Email us first: <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.</>,
    docsU12H: it ? "Per Under-12 (posta)" : "For Under-12 (postal)",
    docsU12L1: it ? "Modulo U12 + documenti d’identità di entrambi i genitori (no patente)" : "U12 form + both parents’ IDs (no driving licences)",
    docsU12L2: it ? "Consenso dei genitori + 2 foto (una controfirmata)" : "Parents’ consent + 2 photos (one countersigned)",
    docsU12L3: it ? "Prova di indirizzo + busta di ritorno Special Delivery" : "Proof of address + Special Delivery return envelope",
    docsU12Note: it
      ? "Primo passaporto e trascrizione di nascita non possono essere inviati insieme (regola dal 28 maggio 2025)."
      : "First passport + birth registration can’t be sent together (rule from 28 May 2025).",

    // Tailored advice
    adviceH: it ? "Serve un consiglio su misura?" : "Need tailored advice?",
    adviceP: it
      ? <>Se hai dubbi su requisiti o percorso, scrivi a <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a> prima di pagare. Puoi anche inviare i documenti via email se preferisci.</>
      : <>If you’re unsure about eligibility or which path to use, email <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a> before paying. You can also submit documents by email if that’s easier.</>,

    // Sidebar
    urgentH: it ? "Urgenza?" : "Urgent?",
    urgentP: it
      ? <>Invia un’email a <a className="underline text-amber-300" href="mailto:resinaro@proton.me">resinaro@proton.me</a> con oggetto <strong>“Urgent”</strong>. Ti indicheremo il percorso corretto. (L’urgenza è valutata dal Consolato.)</>
      : <>Email <a className="underline text-amber-300" href="mailto:resinaro@proton.me">resinaro@proton.me</a> with subject <strong>“Urgent”</strong>. We’ll advise the correct route. (Urgency is assessed by the Consulate.)</>,
    moreLinksH: it ? "Altri servizi" : "More services",
    allServices: it ? "Tutti i servizi" : "All services",
    contact: it ? "Contatta Resinaro" : "Contact Resinaro",
  };
}

export default function PassportServicePage({
  params,
}: {
  params: { locale: "en" | "it" };
}) {
  const { locale } = params;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero (decorative image; content follows) */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/service-passport.png"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Intro + quick pricing + disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {copy.h1}
            </h1>
            <p className="mt-2 text-green-800">
              {copy.introP1}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h2 className="font-semibold">{copy.pricingH}</h2>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li>{copy.pricingL1}</li>
                  <li>{copy.pricingL2}</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-2">
                  {copy.pricingNote}
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h2 className="font-semibold">{copy.importantH}</h2>
                <p className="text-sm text-gray-800">
                  {copy.importantP1}
                </p>
                <p className="text-[12px] text-gray-600 mt-1">
                  {copy.importantP2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM FIRST for mobile (SEO: keep concise heading + form above fold) */}
      <section id="book" className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold">{copy.formH}</h2>
          <p className="text-sm text-gray-700 mb-3">
            {copy.formP}
          </p>
          <PassportForm />
        </div>
      </section>

      {/* Helpful info (kept short to avoid overwhelm) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10 md:pb-16 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.doH}</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold">{copy.do12H}</h3>
                <p className="text-sm text-gray-700 mt-1">
                  {copy.do12P}
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold">{copy.doU12H}</h3>
                <p className="text-sm text-gray-700 mt-1">
                  {copy.doU12P}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.docsH}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">{copy.docs12H}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>{copy.docs12L1}</li>
                  <li>{copy.docs12L2}</li>
                  <li>{copy.docs12L3}</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-1">
                  {copy.docs12Note}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{copy.docsU12H}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>{copy.docsU12L1}</li>
                  <li>{copy.docsU12L2}</li>
                  <li>{copy.docsU12L3}</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-1">
                  {copy.docsU12Note}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.adviceH}</h2>
            <p className="text-gray-800">
              {copy.adviceP}
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">{copy.urgentH}</h3>
            <p className="text-sm">
              {copy.urgentP}
            </p>
          </div>

          <nav aria-label="Helpful links" className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm text-sm">
            <h4 className="font-semibold mb-2">{copy.moreLinksH}</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li><a className="underline" href={p("/services")}>{copy.allServices}</a></li>
              <li><a className="underline" href={p("/contact")}>{copy.contact}</a></li>
            </ul>
          </nav>
        </aside>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
