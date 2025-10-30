// src/app/[locale]/volunteer/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { p } from "@/lib/localePath";
import VolunteerFormClient from "@/components/VolunteerFormClient";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    metaTitle: it ? "Volontaria/o con Resinaro" : "Volunteer with Resinaro",
    metaDesc: it
      ? "Unisciti a Resinaro come volontaria/o. Esperienza pratica, CV più forte, competenze di marketing e comunicazione, visibilità sui media — supportando i migranti nel Regno Unito."
      : "Join Resinaro as a volunteer. Gain hands-on experience, build your CV, learn marketing and communications, and benefit from media exposure while supporting migrants in the UK.",
    h1: it ? "Fai volontariato con Resinaro" : "Volunteer with Resinaro",
    introP: it
      ? "Resinaro è costruito dalla community, per la community. I volontari aiutano le persone a orientarsi nella vita nel Regno Unito — dal supporto linguistico all’organizzazione eventi e alla comunicazione digitale. Unisciti per contribuire con le tue competenze e crescere professionalmente."
      : "Resinaro is built by the community, for the community. Volunteers help people navigate life in the UK — from language support to event organisation and digital outreach. Join us to contribute your skills and gain professional experience.",

    whyH2: it ? "Perché fare volontariato con Resinaro" : "Why volunteer with Resinaro",
    whyP: it
      ? "In Resinaro i volontari sono partner. Valorizziamo il tuo tempo, investiamo nel tuo sviluppo e ti aiutiamo a trasformare l’esperienza in risultati di carriera concreti."
      : "Resinaro recruits volunteers as partners. We value your time, invest in your development and help you leverage volunteer experience into tangible career outcomes.",
    why1H: it ? "Progetti reali, impatto reale" : "Real projects, real impact",
    why1P: it
      ? "Lavori su attività concrete: eventi, traduzioni, campagne e contenuti digitali che aiutano persone reali ora."
      : "Work on concrete tasks such as event delivery, translation projects, campaigns and digital content that benefit real people now.",
    why2H: it ? "Dai forza al tuo CV" : "Boost your CV",
    why2P: it
      ? "Sviluppi leadership, comunicazione e project management che i datori di lavoro riconoscono. Forniamo descrizioni ruolo e risultati da citare nelle candidature."
      : "Gain leadership, communication and project management experience that employers recognise. We provide role descriptions and outcomes you can reference on applications.",
    why3H: it ? "Mentoring & formazione" : "Mentoring & training",
    why3P: it
      ? "Mentoring da volontari esperti e staff, più sessioni di formazione specifiche per crescere rapidamente."
      : "Access mentoring from experienced volunteers and staff, and role-specific training sessions to grow skills quickly.",

    careerH2: it ? "Come il volontariato aiuta la tua carriera" : "How volunteering helps your career",
    careerList: it
      ? [
          "Esperienza pratica: responsabilità su compiti reali con supervisione.",
          "Leadership & teamwork: guida piccoli progetti e collabora con team diversi.",
          "Competenze digitali: contenuti, social media, SEO di base e analytics.",
          "Comunicazione: public-facing comms, stakeholder e engagement.",
          "Portfolio & referenze: esempi tangibili e referenze dai project lead.",
        ]
      : [
          "Hands-on experience: take responsibility for real tasks under supportive supervision.",
          "Leadership & teamwork: lead small projects and collaborate with diverse teams.",
          "Digital skills: content creation, social media, basic SEO and analytics.",
          "Communications: public-facing comms, stakeholder management and engagement.",
          "Portfolio & references: tangible work examples and professional references.",
        ],

    learnH2: it ? "Percorsi di apprendimento & visibilità" : "Learning pathways & media exposure",
    learnIntro: it
      ? "Chi supporta contenuti, marketing o eventi può accedere a un percorso di crescita con visibilità pubblica e risultati dimostrabili."
      : "Volunteers who support content, marketing or events can access a growth path leading to public exposure and demonstrable outcomes.",
    learn1H: it ? "Contenuti & marketing" : "Content & marketing",
    learn1P: it
      ? "Impara a pianificare e scrivere post, produrre short video per YouTube, programmare social e leggere analytics. Mentoring su strategia e strumenti pratici."
      : "Learn to plan and write posts, produce short YouTube videos, schedule social posts and read basic analytics. Mentoring on strategy and practical tools.",
    learn2H: it ? "YouTube & social media" : "YouTube & social media",
    learn2P: it
      ? "Supporta i canali per fare esperienza on-camera, montaggio e portfolio. I contributi selezionati sono accreditati su video e post."
      : "Support our channels to gain on-camera experience, editing skills and portfolio pieces. Selected contributors are credited on videos and posts.",
    learn2Follow: it ? "Segui i nostri canali:" : "Follow our channels:",

    rolesH2: it ? "Ruoli, tempo e prossimi passi" : "Roles, time commitment and next steps",
    roles1H: it ? "Ruoli tipici" : "Typical roles",
    roles1List: it
      ? ["Supporto linguistico e interpretariato", "Traduzioni e preparazione documenti", "Eventi e outreach", "Contenuti digitali e social"]
      : ["Language support and interpretation", "Translations and document preparation", "Events and community outreach", "Digital content and social media"],
    roles2H: it ? "Impegno richiesto" : "Time commitment",
    roles2P: it
      ? "Molti volontari dedicano tra 2 e 8 ore a settimana. Disponibili opportunità brevi, su progetto o una tantum. Indica disponibilità nel form: ti abbineremo a task adatti."
      : "Most volunteers commit between 2 and 8 hours per week. Short-term, project-based and one-off opportunities are available. Tell us your availability on the form and we’ll match you to suitable tasks.",
    roles3H: it ? "Cosa ci aspettiamo" : "What we expect",
    roles3P: it
      ? "Professionalità, affidabilità e voglia di imparare. Offriamo onboarding e descrizioni chiare del ruolo, così saprai cosa significa successo."
      : "Professional conduct, reliability and a willingness to learn. We provide onboarding and clear role descriptions so you will know what success looks like.",

    ctaH: it ? "Pronto/a per il passo successivo?" : "Ready to take the next step?",
    ctaP: it
      ? "Invia il form qui sopra e ti abbineremo ai ruoli adatti. Vuoi parlarne prima? Prenota una breve call."
      : "Submit the form above and we will match you to appropriate roles. If you want to discuss opportunities before applying, book a short call.",
    contactUs: it ? "Contattaci" : "Contact us",
    exploreServices: it ? "Esplora i servizi" : "Explore services",

    consentP: it
      ? "Inviando questo form acconsenti a che Resinaro conservi i tuoi dati di contatto per comunicazioni sul volontariato. Dettagli completi nella"
      : "By submitting this form you consent to Resinaro storing your contact details so that we can contact you about volunteering. For full details see our",
    privacy: it ? "Privacy Policy" : "Privacy Policy",

    followYouTube: "YouTube",
    followX: "X",
    followIG: "Instagram",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    alternates: { canonical: "/volunteer" },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDesc,
      url: "https://www.resinaro.com/volunteer",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

/* ---------------------------- FAQ JSON-LD ------------------------------ */
function faqJsonLd(locale: Locale) {
  const it = locale === "it";
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: it ? "Quali ruoli sono disponibili?" : "What roles are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Cerchiamo volontari per supporto linguistico, traduzioni, amministrazione, outreach, eventi e attività digitali tra cui marketing e contenuti."
            : "We need volunteers for language support, translations, admin, outreach, events and digital work including marketing and content."
        }
      },
      {
        "@type": "Question",
        name: it ? "L’esperienza è utile per il CV?" : "Will I gain experience useful for my CV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Sì. Offriamo esperienza dimostrabile di progetto, leadership, comunicazione e competenze tecniche direttamente spendibili in ruoli professionali."
            : "Yes. Volunteers gain demonstrable project experience, leadership, communications and technical skills that are directly transferable to professional roles."
        }
      },
      {
        "@type": "Question",
        name: it ? "Fornite formazione?" : "Do you provide training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: it
            ? "Forniamo guida specifica per ruolo, mentoring e accesso a materiali. Alcuni ruoli includono affiancamento supervisionato e sessioni di feedback."
            : "We provide role-specific guidance, mentoring and access to learning materials. Certain roles include supervised shadowing and feedback sessions."
        }
      }
    ]
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  return (
    <main className="bg-[#F9F6F1] text-gray-900 min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-3xl pt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900">{copy.h1}</h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">{copy.introP}</p>
        </header>

        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <VolunteerFormClient />
        </div>

        {/* Benefits & Outcomes */}
        <section className="mt-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">{copy.whyH2}</h2>
            <p className="text-gray-700 mb-4">{copy.whyP}</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">{copy.why1H}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.why1P}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">{copy.why2H}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.why2P}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-green-900">{copy.why3H}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.why3P}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career & Skills */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">{copy.careerH2}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {copy.careerList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Learning & Media */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">{copy.learnH2}</h2>
            <p className="text-gray-700 mb-3">{copy.learnIntro}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">{copy.learn1H}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.learn1P}</p>
              </div>
              <div>
                <h3 className="font-semibold">{copy.learn2H}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.learn2P}</p>
                <p className="text-sm mt-2">
                  {copy.learn2Follow}{" "}
                  <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="underline text-green-900">
                    {copy.followYouTube}
                  </a>
                  {", "}
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="underline text-green-900">
                    {copy.followX}
                  </a>
                  {", "}
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="underline text-green-900">
                    {copy.followIG}
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles, expectations & commitment */}
        <section className="mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mb-3">{copy.rolesH2}</h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold">{copy.roles1H}</h3>
                <ul className="list-disc list-inside mt-2">
                  {copy.roles1List.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">{copy.roles2H}</h3>
                <p className="mt-2 text-sm">{copy.roles2P}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">{copy.roles3H}</h3>
              <p className="text-sm mt-2">{copy.roles3P}</p>
            </div>
          </div>
        </section>

        {/* High-level CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-3">{copy.ctaH}</h3>
            <p className="text-gray-700 mb-4">{copy.ctaP}</p>
            <div className="flex justify-center gap-3">
              <Link
                href={p(locale, "/contact")}
                className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-2 font-medium shadow hover:bg-green-800"
              >
                {copy.contactUs}
              </Link>
              <Link
                href={p(locale, "/services")}
                className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2"
              >
                {copy.exploreServices}
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 text-sm text-gray-600">
          <p>
            {copy.consentP}{" "}
            <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">
              {copy.privacy}
            </Link>.
          </p>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(locale)) }}
        />
      </div>
    </main>
  );
}
