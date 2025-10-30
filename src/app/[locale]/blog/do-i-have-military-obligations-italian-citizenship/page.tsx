// ============================================================================
// File: src/app/[locale]/blog/do-i-have-military-obligations-italian-citizenship/page.tsx
// ----------------------------------------------------------------------------
// Resinaro — Blog Article Page
//
// - Server component (no "use client").
// - Single elegant reading column; Swiss-minimal styling with brass accents.
// - Article + FAQ JSON-LD for rich results.
// - i18n-aware metadata (canonical + hreflang).
//
// Brand tokens:
// - Charcoal #121416 (text) | Porcelain #F5F1EA (light) | Brass #C9A86F (accent)
// ============================================================================

import type { Metadata } from "next";
import Script from "next/script";

// ---- Constants --------------------------------------------------------------
const SITE_URL = "https://www.resinaro.com";
const SLUG = "do-i-have-military-obligations-italian-citizenship";
const TITLE = "Do I Have Military Obligations if I Apply for Italian Citizenship?";
const DESCRIPTION =
  "Worried about military service as a new or dual Italian citizen? Here’s what the law says, why conscription was abolished, and what a reinstatement would mean for residents abroad.";
const PUBLISHED = "2025-09-03";
const MODIFIED = "2025-09-03";
const OG_IMAGE = "/images/og/resinaro-og.png";

// ---- Metadata (per-locale canonical & hreflang) -----------------------------
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
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Resinaro – Italian Citizenship Guidance" }],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [OG_IMAGE],
    },
  };
}

// ---- JSON-LD builders -------------------------------------------------------
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
        name: "Do I have to do military service if I become an Italian citizen?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Italy abolished compulsory military service and operates a voluntary model. New citizens, including those by descent or naturalization, are not required to serve.",
        },
      },
      {
        "@type": "Question",
        name: "When did Italy end conscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A reform law of May 8, 2001 (D. Lgs. 215/2001) transitioned Italy to an all-volunteer force. Mandatory conscription effectively ended on January 1, 2005; the voluntary model has been fully in place since January 1, 2007.",
        },
      },
      {
        "@type": "Question",
        name: "Does dual citizenship create special military obligations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Dual citizens do not have additional military obligations simply because they hold Italian citizenship.",
        },
      },
      {
        "@type": "Question",
        name: "What would happen if conscription were ever reinstated?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In theory, a national emergency could change requirements, but any obligations would most likely apply to residents in Italy. As things stand, there are no practical implications for citizens living abroad.",
        },
      },
    ],
  };
}

// ---- Micro helper: reading time (approx) -----------------------------------
function estimateReadingTime(words: number) {
  const WPM = 220;
  const minutes = Math.max(1, Math.round(words / WPM));
  return `${minutes} min read`;
}
const APPROX_WORDS = 700;
const READING_TIME = estimateReadingTime(APPROX_WORDS);

// ---- Page -------------------------------------------------------------------
export default function Page({ params }: { params: { locale: string } }) {
  const { locale = "en" } = params;

  return (
    <>
      {/* Accessibility: skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#121416] focus:px-3 focus:py-2 focus:text-[#F5F1EA]"
      >
        Skip to content
      </a>

      {/* JSON-LD (Article + FAQ) */}
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

      {/* Main reading column */}
      <main id="content" role="main" className="mx-auto max-w-2xl px-5 py-14">
        <article className="prose lg:prose-lg prose-neutral prose-a:underline prose-a:underline-offset-2 prose-a:decoration-[#C9A86F] prose-headings:text-[#121416] prose-h1:mb-3 prose-h1:tracking-tight prose-p:my-5 prose-p:leading-8 prose-ul:my-5 prose-li:my-2 prose-strong:text-[#121416]">

          {/* HERO */}
          <header className="not-prose mb-8">
            <h1 className="text-4xl font-semibold leading-tight text-[#121416]">
              Do I Have Military Obligations if I Apply for Italian Citizenship?
            </h1>

            {/* Dek */}
            <p className="mt-3 text-[1.05rem] leading-8 text-neutral-800">
              All you need to know about military service in Italy—why conscription ended, what it
              means for new and dual citizens, and how a theoretical reinstatement could affect residents.
            </p>

            {/* Meta */}
            <p className="mt-3 text-[0.8rem] uppercase tracking-wide text-neutral-500">
              <span className="font-semibold">Resinaro Team</span>
              <span className="mx-2">•</span>
              <time dateTime={PUBLISHED}>September 3, 2025</time>
              <span className="mx-2">•</span>
              <span aria-label="Estimated reading time">{READING_TIME}</span>
            </p>

            {/* Brass hairline */}
            <div className="mt-6 h-px w-full rounded bg-gradient-to-r from-[#C9A86F] via-[#C9A86F]/40 to-transparent" />
          </header>

          {/* INTRO */}
          <section aria-labelledby="intro" className="scroll-mt-24">
            <h2
              id="intro"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              All you need to know about Military Service in Italy
            </h2>
            <p>
              Many individuals who apply for Italian citizenship—whether by descent, marriage, or
              naturalization—ask: “Do I have to fulfill military service if I become an Italian
              citizen?” The short answer is <strong>no</strong>, but let’s explore the full context to
              give you peace of mind.
            </p>
          </section>

          {/* 1. Conscription */}
          <section aria-labelledby="conscription" className="scroll-mt-24">
            <h2
              id="conscription"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              1. Conscription in Italy: A thing of the past
            </h2>
            <p>Italy officially abolished compulsory military service decades ago:</p>
            <ul>
              <li>
                A law passed on <strong>May 8, 2001</strong> (<em>Art. 7 of D. Lgs. 8 maggio 2001 n. 215</em>)
                shifted military service to a completely voluntary model starting <strong>January 1, 2007</strong>.
              </li>
              <li>
                More precisely, mandatory conscription ended on <strong>January 1, 2005</strong>, when Italy
                transitioned to a professional volunteer military.
              </li>
            </ul>
          </section>

          {/* 2. New citizens / dual citizens */}
          <section aria-labelledby="new-citizens" className="scroll-mt-24">
            <h2
              id="new-citizens"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              2. What does this mean for new citizens—especially dual citizens?
            </h2>
            <ul>
              <li>
                Military service is <strong>not required</strong> for those who acquire Italian citizenship,
                regardless of whether it’s by descent or naturalization.
              </li>
              <li>
                This applies equally to <strong>dual citizens</strong>, who are not obligated to serve simply by
                virtue of gaining Italian citizenship.
              </li>
              <li>
                Clarifications commonly note that there are <strong>no military obligations</strong> at all for
                dual citizens, regardless of age or gender.
              </li>
            </ul>
          </section>

          {/* 3. Legal framework */}
          <section aria-labelledby="legal" className="scroll-mt-24">
            <h2
              id="legal"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              3. Legal and constitutional framework
            </h2>
            <ul>
              <li>
                Italy’s Constitution declares that defense of the homeland is a “sacred duty” (Article 52),
                but it emphasizes that national service is performed “within the limits and in the manner set
                by law”—allowing flexible reforms like the move to an all-volunteer force.
              </li>
              <li>
                No regional or special obligation is triggered simply by holding dual citizenship.
              </li>
            </ul>
          </section>

          {/* 4. If conscription returns */}
          <section aria-labelledby="reinstatement" className="scroll-mt-24">
            <h2
              id="reinstatement"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              4. What if conscription is reinstated?
            </h2>
            <ul>
              <li>
                While in theory conscription could be reintroduced in cases of war or national emergency (per
                the Constitution), any obligations would most likely apply to <strong>residents living in Italy</strong>.
              </li>
              <li>
                As things stand, there are <strong>no practical implications</strong> for non-resident citizens.
              </li>
            </ul>
          </section>

          {/* Final thoughts */}
          <section aria-labelledby="final-thoughts" className="scroll-mt-24">
            <h2
              id="final-thoughts"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              Final thoughts
            </h2>
            <p>
              If you’re applying—or planning to apply—for Italian citizenship, you can rest assured: you are
              <strong> not</strong> required to serve in the military. Conscription has been abolished, and
              volunteer service remains entirely optional.
            </p>

            {/* CTA */}
            <div className="not-prose mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-[#121416] px-4 py-2 text-sm font-medium text-[#121416] transition hover:bg-[#121416] hover:text-[#F5F1EA]"
              >
                DM us on Instagram @resinaroUK
              </a>
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
