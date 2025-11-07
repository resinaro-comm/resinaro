// app/[locale]/education/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// Revalidate occasionally to keep content fresh in case we tweak copy
export const revalidate = 21600; // 6h

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title:
    "Education for Italians in the UK — UCAS, Visas, Diplomas, Loans, Scholarships | Resinaro",
  description:
    "Complete guide for Italian students in the UK: UCAS applications, colleges vs universities, recognition of Italian diplomas (ENIC/Ecctis), student visas, IELTS/TOEFL/PTE, student loans and fees, scholarships, Erasmus/Turing exchanges, and Italian language/Saturday schools.",
  alternates: { canonical: "/education" },
  openGraph: {
    title:
      "Education for Italians in the UK — UCAS, Visas, Diplomas, Loans, Scholarships | Resinaro",
    description:
      "Step-by-step advice for Italian students: UCAS, recognition of diplomas, student visas, English tests, student loans, scholarships, exchanges, Italian language schools.",
    url: "https://www.resinaro.com/education",
    siteName: "Resinaro",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://www.resinaro.com/images/og-education.png",
        width: 1200,
        height: 630,
        alt: "Resinaro — Education guide for Italians in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Education for Italians in the UK — UCAS, Visas, Diplomas, Loans, Scholarships | Resinaro",
    description:
      "The essentials for Italian students applying to UK colleges and universities.",
    images: ["https://www.resinaro.com/images/og-education.png"],
  },
};

// ---------- PAGE ----------
export default function EducationPage() {
  // Helper to build outbound links consistently
  const A = (props: { href: string; children: React.ReactNode }) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
    >
      {props.children}
    </a>
  );

  // JSON-LD blocks (Article + FAQ + Breadcrumbs + Organization)
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Education for Italians in the UK — UCAS, Visas, Diplomas, Loans, Scholarships",
    description:
      "A practical guide for Italian students about UK universities and colleges, UCAS applications, recognition of diplomas, visas, student finance, English tests, and exchanges.",
    mainEntityOfPage: "https://www.resinaro.com/education",
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/images/logo.png",
      },
    },
    inLanguage: "en-GB",
    about: [
      { "@type": "Thing", name: "UCAS" },
      { "@type": "Thing", name: "Student visas UK" },
      { "@type": "Thing", name: "IELTS" },
      { "@type": "Thing", name: "Student Finance England" },
      { "@type": "Thing", name: "Ecctis ENIC" },
      { "@type": "Thing", name: "Turing Scheme" },
      { "@type": "Thing", name: "Erasmus+" },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Resinaro",
        item: "https://www.resinaro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Education",
        item: "https://www.resinaro.com/education",
      },
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    sameAs: [
      "https://www.instagram.com/resinarouk/",
      "https://www.youtube.com/@resinaroUK",
      "https://www.tiktok.com/@resinaro.uk",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["English", "Italian"],
        email: "resinaro@proton.me",
      },
    ],
    logo: "https://www.resinaro.com/images/logo.png",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do Italians need a visa to study in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, unless you already have lawful UK status that allows study (e.g., settled/pre-settled status). Most Italian nationals coming to study need a Student visa. Always follow official guidance on GOV.UK.",
        },
      },
      {
        "@type": "Question",
        name: "Is UCAS mandatory for UK university applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "UCAS is the main application platform for undergraduate degrees at UK universities. Some courses or providers may use direct applications (especially for postgraduate or certain colleges). Check each provider’s official page.",
        },
      },
      {
        "@type": "Question",
        name: "How do I prove my Italian diploma in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Universities make their own decisions on equivalency. Many request a Statement of Comparability from UK ENIC (managed by Ecctis). Always read your chosen university’s entry requirements and contact admissions.",
        },
      },
      {
        "@type": "Question",
        name: "Are EU (Italian) students eligible for UK student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Eligibility depends on your immigration status and residence history. Rules differ across England, Scotland, Wales and Northern Ireland. Check Student Finance (SFE/SFNI/SFW/SAAS) and UKCISA for fee status and funding rules.",
        },
      },
      {
        "@type": "Question",
        name: "Which English tests are accepted by UK universities for visas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For visas, you typically need a Secure English Language Test (SELT) from an approved list (e.g., IELTS for UKVI, PTE Academic UKVI). Universities may accept additional tests for admissions. Always check both the university’s requirements and GOV.UK.",
        },
      },
      {
        "@type": "Question",
        name: "Can Italians still use Erasmus+ to come to the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The UK no longer participates in Erasmus+. Exchanges may still occur via specific inter-institutional agreements or alternative schemes. Check your Italian university’s international office and the host UK provider. For UK-funded outward mobility, see the Turing Scheme.",
        },
      },
    ],
  };

  // Official links
  const links = {
    ucas: "https://www.ucas.com",
    ucasApply: "https://www.ucas.com/undergraduate/applying-to-university",
    ucasKeyDates:
      "https://www.ucas.com/undergraduate/applying-to-university/ucas-undergraduate-when-apply",
    govStudentVisa: "https://www.gov.uk/student-visa",
    govChildStudentVisa: "https://www.gov.uk/child-student-visa",
    selts:
      "https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt",
    ieltsUkvi:
      "https://www.ielts.org/for-test-takers/ielts-for-uk-visa-and-immigration-ukvi",
    toefl: "https://www.ets.org/toefl",
    pte: "https://www.pearsonpte.com/",
    cambridgeEng: "https://www.cambridgeenglish.org/",
    ukcisa: "https://www.ukcisa.org.uk/",
    sfe: "https://www.gov.uk/student-finance",
    sfw: "https://www.studentfinancewales.co.uk/",
    saas: "https://www.saas.gov.uk/",
    sfni: "https://www.studentfinanceni.co.uk/",
    slc: "https://www.gov.uk/government/organisations/student-loans-company",
    ecctis:
      "https://www.ecctis.com/recognition/Quals/UK_Enic.aspx",
    enic: "https://enic.org.uk/",
    erasmus: "https://erasmus-plus.ec.europa.eu/",
    turing: "https://www.turing-scheme.org.uk/",
    britishCouncil: "https://www.britishcouncil.org/",
    dante: "https://ladante-in-cambridge.org/",
    embassyEdu:
      "https://amblondra.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/istruzione/",
    consulateLondonEdu:
      "https://conslondra.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/scuola/",
  };

  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ---------- HERO (light, legible black text) ---------- */}
      <section className="relative overflow-hidden">
        {/* Soft image with white veil for readability */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/landscape-image.png')] bg-cover bg-center"
          style={{
            backgroundImage:
              "image-set(url('/images/landscape-image.avif') type('image/avif'), url('/images/landscape-image.webp') type('image/webp'), url('/images/landscape-image.png') type('image/png'))",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-white/85 backdrop-blur-[1px]" />
        {/* thin tricolour line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 grid h-1 w-40 grid-cols-3 rounded-b">
          <div className="bg-[#0B5D3B]" />
          <div className="bg-white" />
          <div className="bg-[#B22222]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950">
            Education for Italians in the UK
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-green-900/90">
            Applying to UK universities and colleges, UCAS, recognition of
            diplomas, scholarships, student visas, English language tests,
            student loans, Erasmus/Exchange, Italian language schools and
            Saturday schools.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-green-900/80">
            <span>Independent</span>
            <span aria-hidden>•</span>
            <span>Links to official sources</span>
            <span aria-hidden>•</span>
            <span>Last updated {new Date().toLocaleDateString("en-GB")}</span>
          </div>
        </div>
      </section>

      {/* ---------- TOP NOTICE / DISCLAIMER ---------- */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <div className="rounded-2xl border border-emerald-900/15 bg-white p-4 text-sm shadow-sm">
          <p className="text-green-900/90">
            <strong>Heads-up:</strong> This guide is informational. Rules, fees
            and eligibility can change. Always verify with official sources
            linked below. <strong>Resinaro is not liable</strong> for decisions
            made based on this page; see the full disclaimer at the end.
          </p>
        </div>
      </section>

      {/* ---------- QUICK NAV (top chips instead of side nav) ---------- */}
      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border bg-white/90 p-3">
          <div className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-gray-700">
            Quick navigation
          </div>
          <nav className="flex snap-x gap-2 overflow-x-auto pb-1">
            {[
              ["ucas", "UCAS"],
              ["colleges", "Colleges vs Universities"],
              ["diplomas", "Diplomas (ENIC/Ecctis)"],
              ["visas", "Student Visas"],
              ["english", "English Tests"],
              ["loans", "Fees & Loans"],
              ["scholarships", "Scholarships"],
              ["exchange", "Erasmus+/Turing"],
              ["italian-schools", "Italian Schools"],
              ["faqs", "FAQs"],
              ["disclaimer", "Disclaimer"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="snap-start whitespace-nowrap rounded-full border px-3 py-1.5 text-sm text-green-900 hover:bg-emerald-50"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <article className="prose prose-emerald max-w-none prose-headings:text-green-950 prose-p:text-green-900/90 prose-li:marker:text-emerald-700">
          {/* UCAS */}
          <section id="ucas" aria-labelledby="ucas-title">
            <h2 id="ucas-title">Apply to UK Universities (UCAS)</h2>
            <p>
              For most undergraduate degrees in the UK you apply through{" "}
              <A href={links.ucas}>UCAS</A>. You can search courses, compare
              entry requirements and submit your single online application to
              multiple universities. Key resources:
            </p>
            <ul>
              <li>
                UCAS overview & application steps:{" "}
                <A href={links.ucasApply}>ucas.com — Apply</A>
              </li>
              <li>
                Deadlines and key dates:{" "}
                <A href={links.ucasKeyDates}>UCAS key dates</A>
              </li>
            </ul>
            <h3 className="!mt-6">Typical UCAS steps</h3>
            <ol>
              <li>
                Research courses and entry requirements (A-levels, IB,
                maturità, or foundation pathways).
              </li>
              <li>
                Create a UCAS account, write your personal statement, and get a
                reference.
              </li>
              <li>
                Submit by the relevant deadline (Oxbridge/medicine earlier).
                Monitor offers via UCAS Hub.
              </li>
              <li>
                Meet conditions (grades, English language) and complete any
                visa/finance steps.
              </li>
            </ol>
            <p className="!mt-4">
              <strong>Postgraduate?</strong> Many Master’s/PhD applications are
              direct to the university (some use aggregators). Always check the
              admissions page for each programme.
            </p>
          </section>

          {/* Colleges */}
          <section id="colleges" aria-labelledby="colleges-title">
            <h2 id="colleges-title">Colleges vs Universities</h2>
            <p>
              In the UK, <strong>universities</strong> award degrees.{" "}
              <strong>Further Education (FE) colleges</strong> typically offer
              Level 2–3 qualifications (e.g., GCSEs/A-levels),
              access/foundation courses, or Higher National qualifications that
              can lead into university. Many international students choose a{" "}
              <em>foundation year</em> if they need subject refresh or English
              support before a degree.
            </p>
            <p className="!mt-2">
              Admissions decisions are made by each provider. If you need a
              pathway, look for university-owned foundation programmes or
              reputable college partners clearly linked from the university
              site.
            </p>
          </section>

          {/* Diplomas / ENIC */}
          <section id="diplomas" aria-labelledby="diplomas-title">
            <h2 id="diplomas-title">
              Recognition of Italian Diplomas (ENIC/Ecctis)
            </h2>
            <p>
              UK universities decide whether your Italian qualifications meet
              their entry thresholds. Many will accept common qualifications
              directly; some may ask for an equivalency assessment such as the{" "}
              <strong>Statement of Comparability</strong> from{" "}
              <A href={links.ecctis}>UK ENIC (Ecctis)</A>. Read the
              university’s international entry criteria first, then contact
              admissions if unsure.
            </p>
            <ul>
              <li>
                UK ENIC (Ecctis):{" "}
                <A href={links.ecctis}>ecctis.com — UK ENIC</A>
              </li>
              <li>
                ENIC network: <A href={links.enic}>enic.org.uk</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> Keep certified translations of transcripts
              where needed. Universities will specify if
              translation/verification is required.
            </p>
          </section>

          {/* Visas */}
          <section id="visas" aria-labelledby="visas-title">
            <h2 id="visas-title">Student Visas (UKVI)</h2>
            <p>
              Unless you already have a UK immigration status that permits
              study, most Italian nationals will need a{" "}
              <strong>Student visa</strong>. Always follow official guidance:
            </p>
            <ul>
              <li>
                UK Student visa:{" "}
                <A href={links.govStudentVisa}>gov.uk/student-visa</A>
              </li>
              <li>
                Child Student visa (for under-18s in schools/colleges):{" "}
                <A href={links.govChildStudentVisa}>
                  gov.uk/child-student-visa
                </A>
              </li>
              <li>
                English requirement and approved tests (SELT):{" "}
                <A href={links.selts}>GOV.UK SELT guidance</A>
              </li>
            </ul>
            <p className="!mt-2">
              Visa steps usually include a Confirmation of Acceptance for
              Studies (CAS) from your university, proof of funds, English, and
              immigration health surcharge. Check the latest official
              requirements and processing times on GOV.UK.
            </p>
          </section>

          {/* English tests */}
          <section id="english" aria-labelledby="english-title">
            <h2 id="english-title">English Language Tests (SELT & University)</h2>
            <p>
              There are two layers: <strong>admissions</strong> (what the
              university accepts) and <strong>immigration</strong> (what the
              visa requires). For visas you normally need a{" "}
              <em>Secure English Language Test</em> (SELT) from an approved
              provider (e.g., IELTS for UKVI, PTE Academic UKVI). Some
              universities accept wider tests for admissions, or waive English
              if you completed a prior qualification in English—always read both
              pages.
            </p>
            <ul>
              <li>
                UKVI approved tests (SELT info):{" "}
                <A href={links.selts}>GOV.UK SELT guidance</A>
              </li>
              <li>
                IELTS (incl. UKVI routes):{" "}
                <A href={links.ieltsUkvi}>ielts.org — IELTS for UKVI</A>
              </li>
              <li>
                TOEFL: <A href={links.toefl}>ets.org/toefl</A>
              </li>
              <li>
                PTE Academic: <A href={links.pte}>pearsonpte.com</A>
              </li>
              <li>
                Cambridge English:{" "}
                <A href={links.cambridgeEng}>cambridgeenglish.org</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> If you need a visa, double-check the exact
              test and test centre must be a UKVI version (e.g., “IELTS for
              UKVI”). For admissions, see the course page for accepted scores
              and validity windows.
            </p>
          </section>

          {/* Loans & fees */}
          <section id="loans" aria-labelledby="loans-title">
            <h2 id="loans-title">Fees, Loans & Funding</h2>
            <p>
              Tuition fees and loan eligibility vary by your
              residence/immigration status and the UK nation (England,
              Scotland, Wales, Northern Ireland). EU/Italian students may
              qualify in limited circumstances (e.g., certain residence
              categories). For current rules, use official sources:
            </p>
            <ul>
              <li>
                Student Finance England (SFE):{" "}
                <A href={links.sfe}>gov.uk/student-finance</A>
              </li>
              <li>
                Student Finance Wales (SFW):{" "}
                <A href={links.sfw}>studentfinancewales.co.uk</A>
              </li>
              <li>
                SAAS (Scotland): <A href={links.saas}>saas.gov.uk</A>
              </li>
              <li>
                Student Finance Northern Ireland (SFNI):{" "}
                <A href={links.sfni}>studentfinanceni.co.uk</A>
              </li>
              <li>
                Student Loans Company (SLC):{" "}
                <A href={links.slc}>gov.uk — SLC</A>
              </li>
              <li>
                Fee status & funding guidance (EU):{" "}
                <A href={links.ukcisa}>ukcisa.org.uk</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Important:</strong> UKCISA explains “home” vs
              “international” fee status, eligibility categories (e.g.,
              settled/pre-settled status, long residence), and documentation.
              Universities make the final fee status assessment.
            </p>
          </section>

          {/* Scholarships */}
          <section id="scholarships" aria-labelledby="scholarships-title">
            <h2 id="scholarships-title">Scholarships & Bursaries</h2>
            <p>
              Scholarships in the UK are typically offered by individual
              universities or colleges, departments, or external bodies. Always
              start with the official scholarship page of your chosen provider,
              and note the deadlines. Helpful directions:
            </p>
            <ul>
              <li>
                University scholarship pages (search: “
                <em>[university] scholarships</em>”).
              </li>
              <li>
                UKCISA overview on funding:{" "}
                <A href={links.ukcisa}>ukcisa.org.uk</A>
              </li>
              <li>
                British Council student resources:{" "}
                <A href={links.britishCouncil}>britishcouncil.org</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> Check departmental awards, fee discounts for
              early applicants, and hardship funds. Read criteria
              carefully—some awards depend on subject, nationality, or fee
              status.
            </p>
          </section>

          {/* Exchanges */}
          <section id="exchange" aria-labelledby="exchange-title">
            <h2 id="exchange-title">Erasmus+/Exchange & Turing</h2>
            <p>
              The UK no longer participates in Erasmus+. However, exchanges may
              still run via specific agreements or alternative funding. Always
              confirm with both institutions:
            </p>
            <ul>
              <li>
                Erasmus+ official: <A href={links.erasmus}>erasmus-plus.ec.europa.eu</A>
              </li>
              <li>
                Turing Scheme (UK outward mobility):{" "}
                <A href={links.turing}>turing-scheme.org.uk</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Advice:</strong> Speak to your Italian university’s
              international office and the UK host’s exchange team to confirm
              availability, visa implications, and costs.
            </p>
          </section>

          {/* Italian language & Saturday schools */}
          <section id="italian-schools" aria-labelledby="italian-schools-title">
            <h2 id="italian-schools-title">Italian Language & Saturday Schools</h2>
            <p>
              For continuing Italian language education or community schooling
              for children, look for recognised Italian cultural associations
              and Saturday schools. Useful starting points:
            </p>
            <ul>
              <li>
                Italian Embassy in London — Education pages:{" "}
                <A href={links.embassyEdu}>amblondra.esteri.it</A>
              </li>
              <li>
                Consulate of Italy in London — School/education info:{" "}
                <A href={links.consulateLondonEdu}>conslondra.esteri.it</A>
              </li>
              <li>
                Società Dante Alighieri (UK chapters):{" "}
                <A href={links.dante}>ladante-in-cambridge.org</A> (search for
                local branches in your city)
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> Also check your local council’s community
              listings and Italian community groups for updated Saturday school
              details (opening times, fees, age ranges).
            </p>
          </section>

          {/* FAQs (matches JSON-LD) */}
          <section id="faqs" aria-labelledby="faqs-title">
            <h2 id="faqs-title">Frequently Asked Questions</h2>
            <details className="group rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Do Italians need a visa to study in the UK?
              </summary>
              <div className="mt-2 text-green-900/90">
                Yes, unless you have a UK status that permits study (e.g.,
                settled/pre-settled). Most Italian nationals will need the{" "}
                <A href={links.govStudentVisa}>Student visa</A>. Always check
                GOV.UK for exact requirements.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is UCAS mandatory for applications?
              </summary>
              <div className="mt-2 text-green-900/90">
                For <strong>undergraduate</strong> degrees, UCAS is the main
                route. Some providers use direct applications for{" "}
                <strong>postgraduate</strong> or specific short
                courses—verify on the official programme page.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                How are Italian diplomas recognised?
              </summary>
              <div className="mt-2 text-green-900/90">
                Universities decide case-by-case. If requested, obtain a{" "}
                <A href={links.ecctis}>
                  UK ENIC (Ecctis) Statement of Comparability
                </A>
                . Follow the uni’s instructions for
                translations/certifications.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can Italian/EU students get UK student loans?
              </summary>
              <div className="mt-2 text-green-900/90">
                It depends on immigration status and residency. Use{" "}
                <A href={links.ukcisa}>UKCISA</A> and your national funding body
                (<A href={links.sfe}>SFE</A>/<A href={links.sfw}>SFW</A>/
                <A href={links.saas}>SAAS</A>/<A href={links.sfni}>SFNI</A>) to
                check the latest eligibility.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Which English test should I take?
              </summary>
              <div className="mt-2 text-green-900/90">
                If a visa is needed, take a <em>SELT</em> from an approved list
                (e.g., <A href={links.ieltsUkvi}>IELTS for UKVI</A>,{" "}
                <A href={links.pte}>PTE Academic UKVI</A>). For admissions,
                check the course page—some accept{" "}
                <A href={links.toefl}>TOEFL</A> or{" "}
                <A href={links.cambridgeEng}>Cambridge</A>.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What about Erasmus+ and exchanges?
              </summary>
              <div className="mt-2 text-green-900/90">
                The UK no longer participates in Erasmus+. Mobility may happen
                through specific agreements or alternative schemes. Check with
                your sending/receiving institutions and see the{" "}
                <A href={links.turing}>Turing Scheme</A>.
              </div>
            </details>
          </section>

          {/* CTA */}
          <section className="mt-10">
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
              <h3 className="text-xl font-semibold">Need a hand?</h3>
              <p className="mt-1 text-green-900/80">
                We can’t give immigration advice, but we can point you to the
                right official pages and support you with practical checklists.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  Contact Resinaro
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50"
                >
                  Browse our directory
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mt-10">
            <h2>Disclaimer</h2>
            <p>
              The information on this page is provided “as is” for general
              guidance. It does not constitute legal, immigration, financial or
              educational advice. Policies and eligibility rules change and
              differ by institution and UK nation. Always follow the latest
              requirements on <A href="https://www.gov.uk/">GOV.UK</A>,{" "}
              <A href={links.ucas}>UCAS</A>, your university or college, and any
              other official body linked on this page.{" "}
              <strong>Resinaro is not liable</strong> for decisions or outcomes
              arising from use of this guide.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
