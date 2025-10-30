import VisaForm from "@/components/VisaForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Visa Help (UK) — Booking & Documents | Resinaro",
  description:
    "Friendly visa appointment & document support for Italians in the UK. Flat fee £35 (admin only). Official visa fees paid to the provider. No guarantees.",
  alternates: { canonical: "/services/visa-booking" },
};

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
          "No. Decisions and appointment availability are controlled by the relevant authority (e.g., UKVI, TLScontact, VFS). We help you locate and book slots and prepare a clean application to reduce errors.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this service for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Italians in the UK who need help booking a visa/biometrics appointment or preparing documents (work, study, family, visit). We also support non-EU family members connected to Italian citizens with Italy/Schengen applications, where eligible.",
      },
    },
    {
      "@type": "Question",
      name: "Is this legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. We provide administrative support and document guidance only. We are not solicitors or immigration advisers and do not offer legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our admin support is a flat fee of £35 per application. Government/consulate/provider fees are separate and paid directly on the official portal.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Appointment & Document Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Visa/biometrics appointment booking and document preparation support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Clear, friendly help for booking visa/biometric appointments and preparing documents. £35 admin fee; official visa fees paid to the provider. No guarantees.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "35",
    availability: "https://schema.org/InStock",
  },
};

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: "en" | "it") {
  const it = locale === "it";
  return {
    heroAlt: it
      ? "Supporto per appuntamenti visti e documenti per italiani nel Regno Unito"
      : "Visa appointment and document support for Italians in the UK",

    h1: it ? "Assistenza Visto — Appuntamenti & Documenti (£35)" : "Visa Appointment & Document Help (£35)",

    introP: it ? (
      <>
        Rendiamo semplice prenotazione e documenti. Paghi <strong>£35</strong> solo per il nostro supporto
        amministrativo. <em>Le tariffe ufficiali del visto</em> sono separate e si pagano al fornitore
        (UKVI/TLS/VFS) dopo la nostra guida. Nessuna garanzia su disponibilità o esito.
      </>
    ) : (
      <>
        We make booking and paperwork simple. You pay <strong>£35</strong> for our admin support only.{" "}
        <em>Official visa fees are separate</em> and paid to the provider (UKVI/TLS/VFS) after we guide you.{" "}
        No guarantees of availability or outcome.
      </>
    ),

    whatYouGetH: it ? "Cosa è incluso" : "What you get",
    whatYouGetList: it
      ? [
          "Verifica percorso & lista documenti personalizzata",
          "Setup portale (UKVI/TLS/VFS) + supporto prenotazione",
          "Revisione pre-invio per ridurre errori",
        ]
      : [
          "Route check & tailored document list",
          "Portal setup (UKVI/TLS/VFS) + booking support",
          "Pre-submit review to reduce mistakes",
        ],

    importantH: it ? "Importante" : "Important",
    importantP: it ? (
      <>
        Non siamo UKVI/TLS/VFS e <strong>non forniamo consulenza legale</strong>. Preferisci email? Invia i
        documenti a <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
      </>
    ) : (
      <>
        We are <strong>not</strong> UKVI/TLS/VFS and do not provide legal advice. Prefer email? Send docs to{" "}
        <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
      </>
    ),

    formH: it ? "Inizia qui — modulo rapido" : "Start here — quick form",
    formP: it
      ? "Un modulo calmo e chiaro. Un passo alla volta — e puoi sempre usare l’email se preferisci."
      : "A calm, friendly form. One step at a time — and email is always an option if you prefer.",

    includedH: it ? "Cosa comprende" : "What’s included",
    includedList: it
      ? [
          "Valutazione della tua situazione e percorso corretto",
          "Checklist personalizzata con diciture per le prove",
          "Creazione account e guida sui portali ufficiali",
          "Ricerca & prenotazione dell’appuntamento nel centro più vicino",
          "Revisione pre-invio per intercettare errori comuni",
          "Email riepilogo con prossimi passi e cosa portare",
        ]
      : [
          "Assessment of your situation and the correct application path",
          "Tailored checklist with specific evidence wording",
          "Account setup and guidance on official portals",
          "Appointment search & booking support at your nearest centre",
          "Pre-submission review to catch common errors",
          "Email summary with next steps and what to bring",
        ],
    includedNote: it
      ? "Tariffe governative/consolari, corriere, priorità o biometria sono separate e si pagano al fornitore."
      : "Government/consulate fees, courier, priority or biometrics fees are separate and paid to the provider.",

    needH: it ? "Cosa potresti dover preparare" : "What you may need",
    commonH: it ? "Documenti comuni" : "Common items",
    commonList: it
      ? ["Passaporto valido", "Prova di indirizzo nel Regno Unito (≤3 mesi)", "Prove finanziarie"]
      : ["Valid passport", "Proof of UK address (≤3 months)", "Financial evidence"],
    routeH: it ? "Specifici per percorso" : "Route specific",
    routeList: it
      ? ["Lavoro: offerta/CoS", "Studio: CAS/lettera di offerta", "Famiglia/visita: relazione & piano viaggio"]
      : ["Work: job offer/CoS", "Study: CAS/offer letter", "Family/visit: relationship & travel plan"],
    needNote: it
      ? "Confermeremo la lista esatta e suggeriremo alternative se manca qualcosa."
      : "We’ll confirm the exact list and suggest alternatives if something is missing.",

    urgentH: it ? "Urgenza?" : "Urgent?",
    urgentP: it ? (
      <>
        Invia un’email a{" "}
        <a className="underline text-amber-300" href="mailto:resinaro@proton.me?subject=Urgent%20visa%20support">
          resinaro@proton.me
        </a>{" "}
        con oggetto <strong>“Urgent visa support”</strong> e la tua località.
      </>
    ) : (
      <>
        Email{" "}
        <a className="underline text-amber-300" href="mailto:resinaro@proton.me?subject=Urgent%20visa%20support">
          resinaro@proton.me
        </a>{" "}
        with subject <strong>“Urgent visa support”</strong> and your location.
      </>
    ),

    beforeH: it ? "Prima di iniziare" : "Before you start",
    beforeList: it
      ? [
          "Individua il visto target (lavoro, studio, famiglia, visita, ecc.)",
          "Tieni a portata di mano documento d’identità e prova di indirizzo UK",
          "Raccogli eventuali lettere del datore di lavoro/ente formativo",
          "Per i minori potrebbero servire consensi & documenti aggiuntivi",
        ]
      : [
          "Know your target visa (work, study, family, visit, etc.)",
          "Have ID and proof of UK address to hand",
          "Gather any sponsor/employer/education letters",
          "Minors may need consent & extra documents",
        ],

    faqsH: it ? "FAQ" : "FAQs",
    faq1Q: it ? "Potete compilare i moduli al posto mio?" : "Can you complete the forms for me?",
    faq1A: it
      ? "Ti guidiamo passo-passo e verifichiamo gli inserimenti. Dove possibile, assistiamo via screen-share per ridurre errori prima del pagamento."
      : "We guide you step-by-step and check entries. Where portals allow, we’ll assist via screen-share to reduce errors before payment.",
    faq2Q: it ? "E se non ci sono appuntamenti disponibili?" : "What if no appointments are available?",
    faq2A: it
      ? "Monitoriamo e tentiamo la prenotazione quando si aprono slot, consigliamo centri alternativi dove possibile e condividiamo pattern di orari per aumentare le chances."
      : "We monitor and attempt booking when slots open, advise on alternative centres where possible, and share timing patterns to improve your chances.",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function VisaServicePage({
  params,
}: {
  params: { locale: "en" | "it" };
}) {
  const { locale } = params;
  const copy = t(locale);

  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/service-visa.png"
            alt={copy.heroAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Overlay intro + price disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {copy.h1}
            </h1>
            <p className="mt-2 text-green-800">
              {copy.introP}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">{copy.whatYouGetH}</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  {copy.whatYouGetList.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
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
          <h2 className="text-xl font-semibold mb-2">{copy.formH}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {copy.formP}
          </p>
          <VisaForm />
        </div>
      </section>

      {/* Helpful info (short & scannable) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.includedH}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              {copy.includedList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              {copy.includedNote}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.needH}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">{copy.commonH}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  {copy.commonList.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{copy.routeH}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  {copy.routeList.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {copy.needNote}
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

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">{copy.beforeH}</h4>
            <ul className="list-disc list-inside space-y-2">
              {copy.beforeList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQ (short) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">{copy.faqsH}</h2>

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
