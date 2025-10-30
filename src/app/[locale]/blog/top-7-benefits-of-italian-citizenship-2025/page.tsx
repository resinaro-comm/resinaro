// ============================================================================
// File: src/app/[locale]/blog/top-7-benefits-of-italian-citizenship-2025/page.tsx
// ----------------------------------------------------------------------------
// Resinaro — Blog Article Page
//
// - Server component (no "use client").
// - Single refined reading column; no TOC/progress bar.
// - Swiss-minimal typography with brass accents.
// - Article + FAQ JSON-LD for rich results.
// - i18n-aware metadata (canonical + hreflang).
//
// Brand tokens:
// - Charcoal #121416 (text)
// - Porcelain #F5F1EA (light bg)
// - Brass    #C9A86F (accent/underline)
// ============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

// ---- Constants --------------------------------------------------------------
const SITE_URL = "https://www.resinaro.com";
const SLUG = "top-7-benefits-of-italian-citizenship-2025";
const TITLE = "Top 7 Benefits of Having Italian Citizenship in 2025";
const DESCRIPTION =
  "From EU freedom of movement to healthcare, education, and multigenerational rights—discover the top 7 advantages of holding Italian citizenship in 2025.";
const PUBLISHED = "2025-07-05";
const MODIFIED = "2025-07-05";
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
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: "Resinaro – Italian Citizenship Guidance" },
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
        name: "What are the main benefits of Italian citizenship in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Key advantages include EU freedom of movement for living, working, and studying; powerful visa-free travel; access to Italy’s public healthcare and education; multigenerational citizenship rights; simpler property/investment routes; voting and civic participation; and a deeper cultural connection.",
        },
      },
      {
        "@type": "Question",
        name: "Does Italian citizenship allow living and working anywhere in the EU?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. As an Italian (EU) citizen, you can live, work, and study in any of the 27 EU member states without needing additional visas or work permits.",
        },
      },
      {
        "@type": "Question",
        name: "Can Italian citizenship be passed down to children?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Italian citizenship by descent (jure sanguinis) typically passes to children—and often to future generations—preserving the family’s connection to Italy.",
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
const APPROX_WORDS = 900;
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
              Top 7 Benefits of Having Italian Citizenship in 2025
            </h1>

            {/* Dek */}
            <p className="mt-3 text-[1.05rem] leading-8 text-neutral-800">
              Thinking about applying for Italian citizenship in 2025? Here’s a clear, friendly run-through
              of the biggest advantages—from EU freedom of movement to healthcare, education, and
              multigenerational rights.
            </p>

            {/* Meta */}
            <p className="mt-3 text-[0.8rem] uppercase tracking-wide text-neutral-500">
              <span className="font-semibold">Resinaro Team</span>
              <span className="mx-2">•</span>
              <time dateTime={PUBLISHED}>July 5, 2025</time>
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
              Top 7 Benefits of Having Italian Citizenship in 2025
            </h2>
            <p>
              Are you considering applying for Italian citizenship in 2025? Whether you’re reconnecting
              with your heritage or looking for new opportunities, becoming an Italian citizen offers many
              advantages. In this article, we explore the top 7 benefits of having Italian citizenship in
              2025—from travel freedom to healthcare access.
            </p>
          </section>

          {/* Key Takeaways */}
          <div className="not-prose relative my-8 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#C9A86F]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Key takeaways
            </p>
            <ul className="list-disc pl-5 text-[0.975rem] leading-7">
              <li>Live, work, and study across the entire EU with no extra permits.</li>
              <li>Visa-free or visa-on-arrival access to 190+ countries.</li>
              <li>Access to Italy’s public healthcare and education systems.</li>
              <li>Citizenship can pass to children—and often future generations.</li>
              <li>Property purchase and investment in Italy are simpler for citizens.</li>
              <li>Voting rights in Italy and the European Parliament.</li>
              <li>A deeper, lasting connection to Italian culture and community.</li>
            </ul>
          </div>

          {/* 1 */}
          <section aria-labelledby="benefit-1" className="scroll-mt-24">
            <h2
              id="benefit-1"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              1. Freedom to Live and Work Anywhere in the European Union
            </h2>
            <p>
              One of the biggest benefits of Italian citizenship is the right to live, work, and study
              freely in all 27 European Union countries. This EU citizenship allows you to move seamlessly
              across borders without needing visas or work permits. If you want to work in Germany, study
              in Spain, or retire in Portugal, your Italian passport opens those doors.
            </p>
          </section>

          {/* 2 */}
          <section aria-labelledby="benefit-2" className="scroll-mt-24">
            <h2
              id="benefit-2"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              2. Visa-Free Travel to Over 190 Countries Worldwide
            </h2>
            <p>
              The Italian passport is one of the strongest travel documents in the world in 2025. It
              grants visa-free or visa-on-arrival access to more than 190 countries, including the United
              States, Canada, Japan, and much of South America. This makes Italian citizenship ideal for
              frequent travelers, business professionals, and digital nomads.
            </p>
          </section>

          {/* 3 */}
          <section aria-labelledby="benefit-3" className="scroll-mt-24">
            <h2
              id="benefit-3"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              3. Access to Italy’s Public Healthcare and Education System
            </h2>
            <p>
              Italian citizens benefit from Italy’s high-quality and affordable public healthcare system.
              Plus, if you or your family members want to study in Italy or elsewhere in the EU, you may
              qualify for lower tuition fees or scholarships. Access to healthcare and education are
              valuable benefits for families and students.
            </p>
          </section>

          {/* 4 */}
          <section aria-labelledby="benefit-4" className="scroll-mt-24">
            <h2
              id="benefit-4"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              4. Citizenship Passed Down to Future Generations
            </h2>
            <p>
              One unique advantage of Italian citizenship by descent (<em>jure sanguinis</em>) is that it
              can be passed down through multiple generations. If you become an Italian citizen, your
              children—and often grandchildren—can inherit citizenship too, preserving your family’s
              connection to Italy indefinitely.
            </p>
          </section>

          {/* 5 */}
          <section aria-labelledby="benefit-5" className="scroll-mt-24">
            <h2
              id="benefit-5"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              5. Easier Property Ownership and Investment Opportunities in Italy
            </h2>
            <p>
              Italian citizenship simplifies property purchases and investments in Italy. Citizens face
              fewer restrictions and can take advantage of tax incentives and grants for property
              restoration, especially in small towns. If you’re interested in investing in Italian real
              estate, citizenship can provide significant benefits.
            </p>
          </section>

          {/* 6 */}
          <section aria-labelledby="benefit-6" className="scroll-mt-24">
            <h2
              id="benefit-6"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              6. Voting Rights and Civic Participation in Italy and the EU
            </h2>
            <p>
              With Italian citizenship, you gain the right to vote in Italian national, regional, and
              local elections, as well as European Parliament elections. This gives you a say in the
              country’s political future—even if you live abroad.
            </p>
          </section>

          {/* 7 */}
          <section aria-labelledby="benefit-7" className="scroll-mt-24">
            <h2
              id="benefit-7"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              7. Stronger Connection to Italian Culture and Heritage
            </h2>
            <p>
              Beyond legal benefits, Italian citizenship offers a meaningful link to your family’s
              heritage. It allows you to fully embrace Italian culture, traditions, language, and
              community—whether through visits, festivals, or living in Italy.
            </p>
          </section>

          {/* HOW TO APPLY */}
          <section aria-labelledby="apply" className="scroll-mt-24">
            <h2
              id="apply"
              className="text-xl font-semibold underline underline-offset-6 decoration-[#C9A86F] decoration-2"
            >
              How to Apply for Italian Citizenship in 2025
            </h2>
            <p>
              If you’re ready to start your journey toward Italian citizenship in 2025, it’s important to
              understand the application process. Common paths include citizenship by descent, marriage, or
              residency. Each path has specific requirements and paperwork, so expert guidance can make a
              big difference.
            </p>
            <p>
              Exploring the path to Italian citizenship can be exciting. If you’re considering applying or
              want help evaluating your eligibility, feel free to reach out for a consultation or join our
              social media for more tips and updates on dual citizenship, Italian culture, and navigating
              Italian bureaucracy in 2025.
            </p>

            {/* CTA */}
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
