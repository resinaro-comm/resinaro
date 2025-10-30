// =====================================================================================
// File: src/app/[locale]/blog/do-you-need-italian-for-citizenship-by-descent/page.tsx
// -------------------------------------------------------------------------------------
// Resinaro — Blog Article Page
//
// - Server component (no "use client").
// - Minimal, high-trust, Swiss-minimal presentation with a single centered reading column.
// - No sticky TOC, no progress bar, no extraneous JS. Only JSON-LD via next/script.
// - Strong typographic rhythm and clear section anchors.
// - Article JSON-LD + FAQ JSON-LD for rich results.
// - i18n-aware metadata (canonical + hreflang).
//
// Design Notes:
// - Brand tokens: Charcoal #121416, Porcelain #F5F1EA, Brass #C9A86F.
// - Column measure ~65ch via max-w-2xl with sensible leading and spacing.
// - H2s visually distinct with brass underline and offset.
//
// Accessibility:
// - Skip link for keyboard users.
// - Semantic landmarks: <main>, <article>, <section> with aria-labelledby.
// - Underlined links with adequate offset for clarity.
// =====================================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

// -------------------------------------------------------------------------------------
// Constants — tweak here if paths or copy change
// -------------------------------------------------------------------------------------
const SITE_URL = "https://www.resinaro.com";
const SLUG = "do-you-need-italian-for-citizenship-by-descent";
const TITLE = "Do You Need to Speak Italian for Citizenship by Descent? (2025)";
const DESCRIPTION =
  "B1 Italian isn’t required for citizenship by descent (jure sanguinis). Learn who the B1 rule applies to and why you’re exempt — plus why learning Italian still helps.";
const PUBLISHED = "2025-08-14";
const MODIFIED = "2025-08-14";
const OG_IMAGE = "/images/og/resinaro-og.png";

// -------------------------------------------------------------------------------------
// Metadata — built per-locale to set canonical + hreflang correctly
// -------------------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "it" | string };
}): Promise<Metadata> {
  const { locale = "en" } = params;
  const canonicalPath = `/${locale}/blog/${SLUG}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description: DESCRIPTION,
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
      title: TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Resinaro – Italian Citizenship Guidance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [OG_IMAGE],
    },
  };
}

// -------------------------------------------------------------------------------------
// JSON-LD builders (Article + FAQ)
// -------------------------------------------------------------------------------------
function articleJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
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

function faqJsonLd() {
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
  const { locale = "en" } = params;

  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#121416] focus:px-3 focus:py-2 focus:text-[#F5F1EA]"
      >
        Skip to content
      </a>

      {/* JSON-LD: Article + FAQ */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(locale)) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      {/* Main: single refined reading column */}
      <main id="content" role="main" className="mx-auto max-w-2xl px-5 py-14">
        <article className="prose lg:prose-lg prose-neutral prose-a:underline prose-a:underline-offset-2 prose-a:decoration-[#C9A86F] prose-headings:text-[#121416] prose-h1:mb-3 prose-h1:tracking-tight prose-p:my-5 prose-p:leading-8 prose-ul:my-5 prose-li:my-2 prose-strong:text-[#121416]">

          {/* ------------------------------------------------------------- */}
          {/* HERO */}
          {/* ------------------------------------------------------------- */}
          <header className="not-prose mb-8">
            <h1 className="text-4xl font-semibold leading-tight text-[#121416]">
              Will You Need to Speak Italian for Citizenship by Descent?
            </h1>

            {/* Dek: short framing paragraph to avoid the “wall of text” start */}
            <p className="mt-3 text-[1.05rem] leading-8 text-neutral-800">
              Quick clarity on the B1 Italian rule: who it applies to, who’s exempt for{" "}
              <em>jure sanguinis</em>, and why learning Italian can still be a smart move.
            </p>

            {/* Meta row: byline • date • read time */}
            <p className="mt-3 text-[0.8rem] uppercase tracking-wide text-neutral-500">
              <span className="font-semibold">Resinaro Team</span>
              <span className="mx-2">•</span>
              <time dateTime={PUBLISHED}>August 14, 2025</time>
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
              The Truth About the B1 Requirement
            </h2>

            <p className="text-[1.05rem] leading-8 text-neutral-800">
              If you’re an Italian-American (or have Italian ancestry) and you’re exploring the
              rewarding path of Italian citizenship by descent (<em>jure sanguinis</em>), you may have
              come across conflicting information about language requirements. One of the most common
              questions is: “Do I need to speak Italian to get citizenship by descent?” Let’s clear
              things up. Here’s the truth about the B1 Italian language requirement and whether it
              applies to you.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="b1-requirement" className="scroll-mt-24">
            <h2
              id="b1-requirement"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              First, What Is the B1 Requirement?
            </h2>

            <p>
              The B1 Italian language requirement refers to a minimum level of Italian language
              proficiency—specifically, B1 level on the CEFR scale (Common European Framework of
              Reference for Languages). This is considered an intermediate level, where you can hold
              conversations, understand everyday media, and write simple texts in Italian. This
              requirement was introduced in 2018 and applies to certain categories of citizenship
              applicants—but not all.
            </p>
          </section>

          {/* Key Takeaways — single tasteful card to break the wall of text */}
          <div className="not-prose relative my-8 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#C9A86F]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Key takeaways
            </p>
            <ul className="list-disc pl-5 text-[0.975rem] leading-7">
              <li>
                B1 Italian is <strong>not</strong> required for citizenship by descent (<em>jure sanguinis</em>).
              </li>
              <li>
                The B1 rule applies to <strong>naturalization</strong> paths (spouses, long-term residents).
              </li>
              <li>
                Learning Italian still improves daily life, bureaucracy, and cultural connection.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <section aria-labelledby="need-italian" className="scroll-mt-24">
            <h2
              id="need-italian"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              So, Do You Need to Speak Italian for Citizenship by Descent?
            </h2>

            <p>
              <strong>No</strong>, you do not need to speak Italian—or prove any level of Italian
              proficiency—if you’re applying for citizenship by descent (<em>jure sanguinis</em>).
              Applicants for Italian citizenship by descent are <strong>exempt</strong> from the B1
              language requirement.
            </p>

            <p>The B1 language requirement does NOT apply to you if:</p>

            <ul>
              <li>You are claiming citizenship through your Italian ancestors.</li>
              <li>You have the required documentation to prove unbroken lineage and eligibility.</li>
              <li>
                You’re applying through an Italian consulate, a 1948 court case, or directly in Italy
                (via a Municipality).
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="who-needs-b1" className="scroll-mt-24">
            <h2
              id="who-needs-b1"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              Who <em>Does</em> Need to Meet the B1 Requirement?
            </h2>

            <p>
              The B1 requirement applies to people seeking citizenship through naturalization, including:
            </p>

            <ul>
              <li>Non-Italian spouses of Italian citizens</li>
              <li>Long-term residents in Italy applying for citizenship</li>
              <li>Other foreign nationals not qualifying through descent</li>
            </ul>

            <p>
              In these cases, proof of a B1-level Italian certificate from a recognized institution
              (like CELI or CILS) is mandatory.
            </p>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="learn-italian" className="scroll-mt-24">
            <h2
              id="learn-italian"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              Should You Learn Italian Anyway?
            </h2>

            <p>Even if it’s not required, learning Italian offers major benefits:</p>

            <ul>
              <li>
                <strong>Cultural Connection:</strong> Deepen your bond with your heritage.
              </li>
              <li>
                <strong>Ease of Travel and Residency:</strong> Live and move around Italy with confidence.
              </li>
              <li>
                <strong>Bureaucratic Navigation:</strong> Understand documents, appointments, and legal terms.
              </li>
              <li>
                <strong>Integration:</strong> Make friends, join local communities, and fully enjoy{" "}
                <em>la dolce vita</em>!
              </li>
            </ul>

            <p>
              If you’re pursuing Italian citizenship by descent, you can breathe easy—there’s no language test
              standing in your way. However, learning Italian can enrich your experience as a future citizen of
              Italy. And if your journey eventually includes moving to Italy or marrying an Italian citizen,
              language skills will become a valuable (and possibly required) asset.
            </p>
          </section>

          {/* Section 6 */}
          <section aria-labelledby="get-started" className="scroll-mt-24">
            <h2
              id="get-started"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              Ready to Start Your Citizenship Journey?
            </h2>

            <p>
              If you’re ready to start your journey toward Italian citizenship in 2025, it’s important to
              understand the application process. Common paths include citizenship by descent, marriage, or
              residency. Each path has specific requirements and paperwork, so expert guidance can make a big
              difference.
            </p>

            <p>
              Exploring the path to Italian citizenship can be exciting. If you’re considering applying for
              Italian citizenship or want help evaluating your eligibility, feel free to reach out for a
              consultation or join our social media for more tips and updates on dual citizenship, Italian
              culture, and navigating Italian bureaucracy in 2025.
            </p>

            {/* CTA block: primary action + secondary email link */}
            <div className="not-prose mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-xl border border-[#121416] px-4 py-2 text-sm font-medium text-[#121416] transition hover:bg-[#121416] hover:text-[#F5F1EA]"
              >
                Book a consultation
              </Link>
              <a
                href="mailto:resinaro@proton.me"
                className="text-sm underline decoration-[#C9A86F] underline-offset-2"
              >
                resinaro@proton.me
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
