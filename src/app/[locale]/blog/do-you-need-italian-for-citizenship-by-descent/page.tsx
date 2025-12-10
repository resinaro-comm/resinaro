// =====================================================================================
// File: src/app/[locale]/blog/do-you-need-italian-for-citizenship-by-descent/page.tsx
// -------------------------------------------------------------------------------------
// Resinaro — Blog Article Page with Hero Image (EN + IT)
//
// - Server component (no "use client").
// - Minimal, high-trust layout with a centered reading column.
// - 16:9 hero image card above the article header.
// - Article JSON-LD + FAQ JSON-LD for rich results.
// - i18n-aware metadata (canonical + hreflang) for EN/IT.
// - Embedded £50 “Citizenship Route & Language Strategy Mini-Review” box
//   powered by Stripe via <CitizenshipLanguageCheckBox />.
// =====================================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { CitizenshipLanguageCheckBox } from "@/components/CitizenshipLanguageCheckBox";

// -------------------------------------------------------------------------------------
// Constants — tweak here if paths or copy change
// -------------------------------------------------------------------------------------
const SITE_URL = "https://www.resinaro.com";
const SLUG = "do-you-need-italian-for-citizenship-by-descent";

const TITLE_EN = "Do You Need to Speak Italian for Citizenship by Descent? (2025)";
const DESCRIPTION_EN =
  "B1 Italian isn’t required for citizenship by descent (jure sanguinis). Learn who the B1 rule applies to and why you’re exempt — plus why learning Italian still helps.";

const TITLE_IT =
  "Devi parlare italiano per la cittadinanza per discendenza? (2025)";
const DESCRIPTION_IT =
  "Il livello B1 di italiano non è richiesto per la cittadinanza per discendenza (jure sanguinis). Scopri a chi si applica la regola del B1, perché sei esente e perché imparare l’italiano è comunque utile.";

const PUBLISHED = "2025-08-14";
const MODIFIED = "2025-08-14";

// 16:9 hero image for this article (place file in /public/images/blog/)
const HERO_IMAGE = "/images/blog/italian-language-citizenship-hero.jpg";

// Use the same hero asset for OG/Twitter for now
const OG_IMAGE = HERO_IMAGE;

// -------------------------------------------------------------------------------------
// Metadata — built per-locale to set canonical + hreflang correctly
// -------------------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "it" | string };
}): Promise<Metadata> {
  const { locale = "en" } = params;
  const isIt = locale === "it";
  const canonicalPath = `/${locale}/blog/${SLUG}`;
  const title = isIt ? TITLE_IT : TITLE_EN;
  const description = isIt ? DESCRIPTION_IT : DESCRIPTION_EN;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `/en/blog/${SLUG}`,
        it: `/it/blog/${SLUG}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${canonicalPath}`,
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: isIt
            ? "Spazio di lavoro tranquillo a casa con laptop, quaderno e passaporti sfocati mentre qualcuno si informa sulla cittadinanza italiana."
            : "Calm home workspace with laptop, notebook and blurred passports while someone researches Italian citizenship.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

// -------------------------------------------------------------------------------------
// JSON-LD builders (Article + FAQ)
// -------------------------------------------------------------------------------------
function articleJsonLd(locale: string) {
  const isIt = locale === "it";
  const headline = isIt ? TITLE_IT : TITLE_EN;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: isIt ? "it-IT" : "en-GB",
    author: { "@type": "Organization", name: "Resinaro Team" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: `${SITE_URL}${OG_IMAGE}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${locale}/blog/${SLUG}`,
    },
  };
}

function faqJsonLd(locale: string) {
  const isIt = locale === "it";

  if (!isIt) {
    // English FAQ
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you need to speak Italian for citizenship by descent (jure sanguinis)?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Applicants for Italian citizenship by descent (jure sanguinis) are exempt from the B1 language requirement. The B1 requirement applies to naturalization pathways, not descent.",
          },
        },
        {
          "@type": "Question",
          name: "What is the B1 Italian language requirement?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "B1 refers to an intermediate level on the CEFR scale. It indicates the ability to hold conversations, understand everyday media, and write simple texts in Italian. Italy introduced this requirement in 2018 for certain citizenship applicants.",
          },
        },
        {
          "@type": "Question",
          name: "Who needs to meet the B1 requirement?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The B1 requirement applies to naturalization routes such as non-Italian spouses of Italian citizens, long-term residents in Italy applying for citizenship, and other foreign nationals not qualifying through descent.",
          },
        },
        {
          "@type": "Question",
          name: "Should you still learn Italian if applying by descent?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "While not required, learning Italian is highly beneficial: it strengthens cultural connection, eases travel and residency, helps with bureaucracy, and supports integration if you plan to live in Italy.",
          },
        },
      ],
    };
  }

  // Italian FAQ
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "Devi parlare italiano per ottenere la cittadinanza per discendenza (jure sanguinis)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Chi richiede la cittadinanza italiana per discendenza (jure sanguinis) è esente dal requisito linguistico B1. Il B1 si applica ai percorsi di naturalizzazione, non alla discendenza.",
        },
      },
      {
        "@type": "Question",
        name: "Che cos’è il requisito di lingua italiana livello B1?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Il B1 è un livello intermedio del quadro europeo QCER. Indica la capacità di sostenere conversazioni, capire media quotidiani e scrivere testi semplici in italiano. L’Italia ha introdotto questo requisito nel 2018 per alcuni richiedenti la cittadinanza.",
        },
      },
      {
        "@type": "Question",
        name: "Chi deve rispettare il requisito B1?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Il requisito B1 si applica ai percorsi di naturalizzazione, ad esempio ai coniugi stranieri di cittadini italiani, ai residenti di lungo periodo che chiedono la cittadinanza e ad altri stranieri che non rientrano nella discendenza.",
        },
      },
      {
        "@type": "Question",
        name:
          "Ha senso studiare italiano anche se fai domanda per discendenza?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Anche se non è obbligatorio, studiare italiano è molto utile: rafforza il legame con la cultura, facilita viaggi e residenza, aiuta con la burocrazia e supporta l’integrazione se decidi di vivere in Italia.",
        },
      },
    ],
  };
}

// -------------------------------------------------------------------------------------
// Micro helper: reading time (static content; keep it simple and SSR-only)
// -------------------------------------------------------------------------------------
function estimateReadingTime(words: number) {
  const WPM = 220; // conservative average for legal-ish content
  const minutes = Math.max(1, Math.round(words / WPM));
  return `${minutes} min read`;
}

// A rough word count for the article body (approx; not critical for accuracy)
const APPROX_WORDS = 750;
const READING_TIME = estimateReadingTime(APPROX_WORDS);

// -------------------------------------------------------------------------------------
// Page Component
// -------------------------------------------------------------------------------------
export default function Page({ params }: { params: { locale: string } }) {
  const rawLocale = params?.locale || "en";
  const normalizedLocale: "en" | "it" = rawLocale === "it" ? "it" : "en";

  const heroAlt =
    normalizedLocale === "it"
      ? "Spazio di lavoro tranquillo a casa con laptop, quaderno e passaporti sfocati mentre qualcuno si informa sulla cittadinanza italiana."
      : "Calm home workspace with laptop, notebook and blurred passports while someone researches Italian citizenship.";

  const heroCaption =
    normalizedLocale === "it"
      ? "Un momento tranquillo per capire se il B1 di italiano è davvero obbligatorio: niente esami di diritto, solo capire qual è il percorso giusto."
      : "A calm moment checking whether B1 Italian is actually required — not a legal exam, just understanding your route.";

  const dateLabel =
    normalizedLocale === "it" ? "14 agosto 2025" : "August 14, 2025";

  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#121416] focus:px-3 focus:py-2 focus:text-[#F5F1EA]"
      >
        {normalizedLocale === "it" ? "Vai al contenuto principale" : "Skip to content"}
      </a>

      {/* JSON-LD: Article + FAQ */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(normalizedLocale)),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(normalizedLocale)),
        }}
      />

      {/* Main: single refined reading column */}
      <main id="content" role="main" className="mx-auto max-w-2xl px-5 py-14">
        <article className="prose lg:prose-lg prose-neutral prose-a:underline prose-a:underline-offset-2 prose-a:decoration-[#C9A86F] prose-headings:text-[#121416] prose-h1:mb-3 prose-h1:tracking-tight prose-p:my-5 prose-p:leading-8 prose-ul:my-5 prose-li:my-2 prose-strong:text-[#121416]">
          {/* ------------------------------------------------------------- */}
          {/* HERO IMAGE + HEADER */}
          {/* ------------------------------------------------------------- */}
          <header className="not-prose mb-9">
            {/* 16:9 hero image card */}
            <figure className="mb-6 overflow-hidden rounded-3xl border border-neutral-200 bg-[#F5F1EA] shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={HERO_IMAGE}
                  alt={heroAlt}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-neutral-600">
                {heroCaption}
              </figcaption>
            </figure>

            <h1 className="text-4xl font-semibold leading-tight text-[#121416]">
              {normalizedLocale === "it"
                ? "Devi parlare italiano per la cittadinanza per discendenza?"
                : "Will You Need to Speak Italian for Citizenship by Descent?"}
            </h1>

            {/* Dek: short framing paragraph */}
            <p className="mt-3 text-[1.05rem] leading-8 text-neutral-800">
              {normalizedLocale === "it" ? (
                <>
                  Chiarezza veloce sulla regola del B1: a chi si applica, chi è esente
                  nel <em>jure sanguinis</em> e perché studiare italiano può comunque
                  essere una buona idea — più una mini-revisione mirata da £50 se vuoi
                  che qualcuno controlli il tuo percorso con mente fresca.
                </>
              ) : (
                <>
                  Quick clarity on the B1 Italian rule: who it applies to, who’s exempt
                  for <em>jure sanguinis</em>, and why learning Italian can still be a
                  smart move — plus a focused £50 mini-review if you want someone to
                  sanity-check your route.
                </>
              )}
            </p>

            {/* Meta row: byline • date • read time */}
            <p className="mt-3 text-[0.8rem] uppercase tracking-wide text-neutral-500">
              <span className="font-semibold">Resinaro Team</span>
              <span className="mx-2">•</span>
              <time dateTime={PUBLISHED}>{dateLabel}</time>
              <span className="mx-2">•</span>
              <span aria-label="Estimated reading time">{READING_TIME}</span>
            </p>

            {/* Brass hairline */}
            <div className="mt-6 h-px w-full rounded bg-gradient-to-r from-[#C9A86F] via-[#C9A86F]/40 to-transparent" />
          </header>

          {/* ------------------------------------------------------------- */}
          {/* BODY */}
          {/* ------------------------------------------------------------- */}

          {/* Section 1 */}
          <section aria-labelledby="the-truth" className="scroll-mt-24">
            <h2
              id="the-truth"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "La verità sul requisito B1"
                : "The Truth About the B1 Requirement"}
            </h2>

            <p className="text-[1.05rem] leading-8 text-neutral-800">
              {normalizedLocale === "it" ? (
                <>
                  Se sei italo-discendente o hai origini italiane e stai esplorando il
                  percorso, spesso entusiasmante ma confuso, della cittadinanza italiana
                  per discendenza (<em>jure sanguinis</em>), è probabile che ti sia
                  imbattuto in informazioni contrastanti sui requisiti linguistici. Una
                  delle domande più frequenti è: «Devo parlare italiano per ottenere la
                  cittadinanza per discendenza?». Facciamo chiarezza: vediamo davvero che
                  cos’è il requisito linguistico B1 e se riguarda anche te.
                </>
              ) : (
                <>
                  If you’re an Italian-American (or have Italian ancestry) and you’re
                  exploring the rewarding path of Italian citizenship by descent (
                  <em>jure sanguinis</em>), you may have come across conflicting
                  information about language requirements. One of the most common
                  questions is: “Do I need to speak Italian to get citizenship by
                  descent?” Let’s clear things up. Here’s the truth about the B1 Italian
                  language requirement and whether it applies to you.
                </>
              )}
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="b1-requirement" className="scroll-mt-24">
            <h2
              id="b1-requirement"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "Prima di tutto: che cos’è il requisito B1?"
                : "First, What Is the B1 Requirement?"}
            </h2>

            <p>
              {normalizedLocale === "it" ? (
                <>
                  Il requisito di lingua italiana livello B1 indica un livello minimo di
                  conoscenza della lingua – in particolare il livello B1 del quadro
                  europeo QCER (Quadro comune europeo di riferimento per le lingue). È
                  considerato un livello intermedio: puoi sostenere conversazioni,
                  capire i media di tutti i giorni e scrivere testi semplici in italiano.
                  Questo requisito è stato introdotto nel 2018 e si applica solo ad
                  alcune categorie di richiedenti la cittadinanza, non a tutti.
                </>
              ) : (
                <>
                  The B1 Italian language requirement refers to a minimum level of
                  Italian language proficiency—specifically, B1 level on the CEFR scale
                  (Common European Framework of Reference for Languages). This is
                  considered an intermediate level, where you can hold conversations,
                  understand everyday media, and write simple texts in Italian. This
                  requirement was introduced in 2018 and applies to certain categories of
                  citizenship applicants—but not all.
                </>
              )}
            </p>
          </section>

          {/* Key Takeaways — single tasteful card */}
          <div className="not-prose relative my-8 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#C9A86F]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {normalizedLocale === "it" ? "In sintesi" : "Key takeaways"}
            </p>
            <ul className="list-disc pl-5 text-[0.975rem] leading-7">
              <li>
                {normalizedLocale === "it" ? (
                  <>
                    Il B1 di italiano <strong>non</strong> è richiesto per la
                    cittadinanza per discendenza (<em>jure sanguinis</em>).
                  </>
                ) : (
                  <>
                    B1 Italian is <strong>not</strong> required for citizenship by
                    descent (<em>jure sanguinis</em>).
                  </>
                )}
              </li>
              <li>
                {normalizedLocale === "it" ? (
                  <>
                    La regola del B1 vale per i percorsi di{" "}
                    <strong>naturalizzazione</strong> (coniugi, residenti di lungo
                    periodo).
                  </>
                ) : (
                  <>
                    The B1 rule applies to <strong>naturalization</strong> paths
                    (spouses, long-term residents).
                  </>
                )}
              </li>
              <li>
                {normalizedLocale === "it" ? (
                  <>
                    Studiare italiano migliora comunque la vita quotidiana, la
                    burocrazia e il legame con la cultura.
                  </>
                ) : (
                  <>
                    Learning Italian still improves daily life, bureaucracy, and
                    cultural connection.
                  </>
                )}
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <section aria-labelledby="need-italian" className="scroll-mt-24">
            <h2
              id="need-italian"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "Quindi… devi parlare italiano per la cittadinanza per discendenza?"
                : "So, Do You Need to Speak Italian for Citizenship by Descent?"}
            </h2>

            <p>
              {normalizedLocale === "it" ? (
                <>
                  <strong>No</strong>, non devi parlare italiano – né dimostrare alcun
                  livello di competenza linguistica – se fai domanda per la cittadinanza
                  per discendenza (<em>jure sanguinis</em>). Chi richiede la cittadinanza
                  italiana per discendenza è <strong>esente</strong> dal requisito
                  linguistico B1.
                </>
              ) : (
                <>
                  <strong>No</strong>, you do not need to speak Italian—or prove any
                  level of Italian proficiency—if you’re applying for citizenship by
                  descent (<em>jure sanguinis</em>). Applicants for Italian citizenship
                  by descent are <strong>exempt</strong> from the B1 language
                  requirement.
                </>
              )}
            </p>

            <p>
              {normalizedLocale === "it"
                ? "Il requisito B1 NON si applica se:"
                : "The B1 language requirement does NOT apply to you if:"}
            </p>

            <ul>
              {normalizedLocale === "it" ? (
                <>
                  <li>
                    stai chiedendo la cittadinanza attraverso i tuoi antenati italiani;
                  </li>
                  <li>
                    hai i documenti necessari per dimostrare una linea di discendenza
                    continua e i requisiti di legge;
                  </li>
                  <li>
                    presenti la domanda tramite un consolato italiano, un ricorso 1948
                    o direttamente in Italia (presso un Comune).
                  </li>
                </>
              ) : (
                <>
                  <li>You are claiming citizenship through your Italian ancestors.</li>
                  <li>
                    You have the required documentation to prove unbroken lineage and
                    eligibility.
                  </li>
                  <li>
                    You’re applying through an Italian consulate, a 1948 court case, or
                    directly in Italy (via a Municipality).
                  </li>
                </>
              )}
            </ul>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="who-needs-b1" className="scroll-mt-24">
            <h2
              id="who-needs-b1"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "Chi invece deve rispettare il requisito B1?"
                : "Who *Does* Need to Meet the B1 Requirement?"}
            </h2>

            <p>
              {normalizedLocale === "it"
                ? "Il requisito B1 si applica a chi chiede la cittadinanza tramite naturalizzazione, ad esempio:"
                : "The B1 requirement applies to people seeking citizenship through naturalization, including:"}
            </p>

            <ul>
              {normalizedLocale === "it" ? (
                <>
                  <li>coniugi non italiani di cittadini italiani;</li>
                  <li>residenti di lungo periodo in Italia che chiedono la cittadinanza;</li>
                  <li>
                    altri cittadini stranieri che non rientrano nei requisiti di
                    discendenza.
                  </li>
                </>
              ) : (
                <>
                  <li>Non-Italian spouses of Italian citizens</li>
                  <li>Long-term residents in Italy applying for citizenship</li>
                  <li>Other foreign nationals not qualifying through descent</li>
                </>
              )}
            </ul>

            <p>
              {normalizedLocale === "it"
                ? "In questi casi è obbligatorio presentare un certificato di italiano livello B1 rilasciato da un ente riconosciuto (CELI, CILS, ecc.)."
                : "In these cases, proof of a B1-level Italian certificate from a recognized institution (like CELI or CILS) is mandatory."}
            </p>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="learn-italian" className="scroll-mt-24">
            <h2
              id="learn-italian"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "Ha senso studiare italiano comunque?"
                : "Should You Learn Italian Anyway?"}
            </h2>

            <p>
              {normalizedLocale === "it"
                ? "Anche se non è obbligatorio, imparare l’italiano offre diversi vantaggi:"
                : "Even if it’s not required, learning Italian offers major benefits:"}
            </p>

            <ul>
              {normalizedLocale === "it" ? (
                <>
                  <li>
                    <strong>Connessione culturale:</strong> rafforzi il legame con le
                    tue radici.
                  </li>
                  <li>
                    <strong>Vita e viaggi più semplici:</strong> ti muovi in Italia con
                    più sicurezza.
                  </li>
                  <li>
                    <strong>Burocrazia più gestibile:</strong> capisci documenti,
                    appuntamenti e termini legali.
                  </li>
                  <li>
                    <strong>Integrazione:</strong> è più facile fare amicizia, entrare
                    nelle comunità locali e goderti davvero <em>la dolce vita</em>.
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <strong>Cultural Connection:</strong> Deepen your bond with your
                    heritage.
                  </li>
                  <li>
                    <strong>Ease of Travel and Residency:</strong> Live and move around
                    Italy with confidence.
                  </li>
                  <li>
                    <strong>Bureaucratic Navigation:</strong> Understand documents,
                    appointments, and legal terms.
                  </li>
                  <li>
                    <strong>Integration:</strong> Make friends, join local communities,
                    and fully enjoy <em>la dolce vita</em>!
                  </li>
                </>
              )}
            </ul>

            <p>
              {normalizedLocale === "it" ? (
                <>
                  Se stai seguendo la strada della cittadinanza per discendenza puoi
                  tirare un sospiro di sollievo: non c’è nessun esame di lingua a
                  bloccarti. Ma l’italiano può comunque rendere più ricca l’esperienza da
                  futuro cittadino italiano. E se un domani ti trasferirai in Italia o
                  sposerai un cittadino italiano, parlare la lingua diventerà un’abilità
                  preziosa (e in certi casi un requisito vero e proprio).
                </>
              ) : (
                <>
                  If you’re pursuing Italian citizenship by descent, you can breathe
                  easy—there’s no language test standing in your way. However, learning
                  Italian can enrich your experience as a future citizen of Italy. And if
                  your journey eventually includes moving to Italy or marrying an Italian
                  citizen, language skills will become a valuable (and possibly required)
                  asset.
                </>
              )}
            </p>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="get-started" className="scroll-mt-24">
            <h2
              id="get-started"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              {normalizedLocale === "it"
                ? "Pronto a iniziare il percorso di cittadinanza?"
                : "Ready to Start Your Citizenship Journey?"}
            </h2>

            <p>
              {normalizedLocale === "it" ? (
                <>
                  Se vuoi avviare seriamente il tuo percorso verso la cittadinanza
                  italiana nel 2025, è importante capire bene la procedura. I percorsi
                  principali sono la cittadinanza per discendenza, per matrimonio o per
                  residenza. Ogni strada ha requisiti e documenti specifici: farsi
                  affiancare da qualcuno che conosce bene la pratica può fare una grande
                  differenza.
                </>
              ) : (
                <>
                  If you’re ready to start your journey toward Italian citizenship in
                  2025, it’s important to understand the application process. Common
                  paths include citizenship by descent, marriage, or residency. Each path
                  has specific requirements and paperwork, so expert guidance can make a
                  big difference.
                </>
              )}
            </p>

            <p>
              {normalizedLocale === "it" ? (
                <>
                  Se vuoi che qualcuno controlli la tua situazione prima di spendere
                  centinaia di sterline in certificati, traduzioni o avvocati, puoi ora
                  prenotare direttamente da questa pagina una{" "}
                  <strong>
                    mini-revisione «Citizenship Route &amp; Language Strategy»
                    da £50
                  </strong>
                  . Oppure, se preferisci un confronto più ampio, puoi sempre prenotare
                  una consulenza più lunga con noi.
                </>
              ) : (
                <>
                  If you want someone to sanity-check your situation before you spend
                  hundreds on certificates, translations or lawyers, you can now book a
                  focused{" "}
                  <strong>
                    £50 Citizenship Route &amp; Language Strategy Mini-Review
                  </strong>{" "}
                  directly on this page. Or, if you prefer a longer conversation, you
                  can still book a broader consultation with us.
                </>
              )}
            </p>

            {/* CTA block: primary action + secondary email link */}
            <div className="not-prose mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${normalizedLocale}/contact`}
                className="inline-flex items-center rounded-xl border border-[#121416] px-4 py-2 text-sm font-medium text-[#121416] transition hover:bg-[#121416] hover:text-[#F5F1EA]"
              >
                {normalizedLocale === "it"
                  ? "Prenota una consulenza completa"
                  : "Book a full consultation"}
              </Link>
              <a
                href="mailto:resinaro@proton.me"
                className="text-sm underline decoration-[#C9A86F] underline-offset-2"
              >
                resinaro@proton.me
              </a>
            </div>
          </section>

          {/* Monetisation box — £50 mini-review with on-page Stripe payment */}
          <CitizenshipLanguageCheckBox locale={normalizedLocale} />
        </article>
      </main>
    </>
  );
}
