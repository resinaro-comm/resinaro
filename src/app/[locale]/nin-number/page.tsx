// app/[locale]/nin-number/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

export const revalidate = 21600; // 6h

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title:
    "National Insurance Number (NIN) for Italians in the UK — How to Apply, Documents, Timelines, Fixes | Resinaro",
  description:
    "Advanced guide to the UK National Insurance number (NIN) for Italians: eligibility, documents, right-to-work, step-by-step online application, timelines, what to do while waiting, lost NIN, name/address changes, and official GOV.UK links.",
  alternates: { canonical: "/nin-number" },
  openGraph: {
    title:
      "National Insurance Number (NIN) — Complete Guide for Italians in the UK | Resinaro",
    description:
      "Apply for your NIN with confidence: requirements, identity evidence, interview/biometrics, how to start a job while waiting, and common mistakes to avoid.",
    url: "https://www.resinaro.com/nin-number",
    siteName: "Resinaro",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://www.resinaro.com/images/og-nin.png",
        width: 1200,
        height: 630,
        alt: "Resinaro — National Insurance Number guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NIN (National Insurance Number) — Guide for Italians in the UK | Resinaro",
    description:
      "Eligibility, docs, step-by-step application, right to work, timelines, and fixes with official links.",
    images: ["https://www.resinaro.com/images/og-nin.png"],
  },
};

// ---------- PAGE ----------
export default function NinNumberPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // Outbound link helper
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

  // Official links (centralised)
  const links = {
    applyNIN: "https://www.gov.uk/apply-national-insurance-number",
    niOverview: "https://www.gov.uk/national-insurance",
    lostNIN: "https://www.gov.uk/lost-national-insurance-number",
    updateHMRCDetails:
      "https://www.gov.uk/tell-hmrc-change-of-details/individuals",
    rightToWork: "https://www.gov.uk/prove-right-to-work",
    biometricResidencePermit: "https://www.gov.uk/biometric-residence-permits",
    workingWithoutNIN:
      "https://www.gov.uk/apply-national-insurance-number/if-you-already-have-a-job",
    hmrcSelfAssessment: "https://www.gov.uk/self-assessment-tax-returns",
    ukcisa: "https://www.ukcisa.org.uk/Information--Advice/Working/Working-after-studies",
    fcaScams: "https://www.fca.org.uk/scamsmart",
    dataProtectionNI:
      "https://ico.org.uk/your-data-matters/identity-documents-and-data/",
  };

  // ---------- JSON-LD ----------
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "National Insurance Number (NIN) for Italians in the UK — How to Apply",
    description:
      "Eligibility, documents, right-to-work, step-by-step application, timelines, lost NIN, and changes — with GOV.UK links.",
    mainEntityOfPage: "https://www.resinaro.com/nin-number",
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
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Apply for a UK National Insurance number",
    description:
      "Steps to apply for a UK NIN online via GOV.UK, including eligibility, documents and what happens next.",
    step: [
      {
        "@type": "HowToStep",
        name: "Check if you need a NIN",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "You usually need a NIN if you plan to work, claim benefits, or study with work placement. Some visas get a NIN automatically on the BRP.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Gather identity & status documents",
        itemListElement: [
          {
            "@type": "HowToTip",
            text:
              "Valid passport/ID card, immigration status (e.g., BRP, digital status), UK address and contact details.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Apply online on GOV.UK",
        url: links.applyNIN,
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "Complete the online form. Upload scans/photos if requested. Keep your reference number.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Identity checks",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "You may be asked for further evidence or an interview/biometrics. Respond promptly.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Receive your NIN",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "You’ll get a letter confirming your NIN. Keep it safe and share with your employer when requested.",
          },
        ],
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I start work without a NIN?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, you can usually start work while waiting for your NIN if you can prove your right to work. Give your employer the NIN when it arrives.",
        },
      },
      {
        "@type": "Question",
        name: "Do I already have a NIN on my BRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some visas include the NIN printed on the back of the Biometric Residence Permit. If present, you don't need to apply again.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a NIN application take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Timeframes vary depending on checks and volume. You’ll receive instructions if an interview or extra evidence is required. Always consult the latest GOV.UK guidance.",
        },
      },
      {
        "@type": "Question",
        name: "What if I lost my NIN?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use GOV.UK’s lost NI service to recover it. Don’t reapply for a new number; it stays the same for life.",
        },
      },
      {
        "@type": "Question",
        name: "Can students apply for a NIN?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. If you intend to work or have a placement, you can apply. Ensure you can prove your right to work if starting a job.",
        },
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resinaro", item: "https://www.resinaro.com/" },
      { "@type": "ListItem", position: 2, name: "NIN (National Insurance Number)", item: "https://www.resinaro.com/nin-number" },
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
    logo: "https://www.resinaro.com/images/logo.png",
  };

  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />

      {/* ---------- HERO (high-contrast, brand hairline) ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/images/landscape-image.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-white/88 backdrop-blur-[1px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 grid h-1 w-40 grid-cols-3 rounded-b">
          <div className="bg-[#0B5D3B]" />
          <div className="bg-white" />
          <div className="bg-[#B22222]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950">
            National Insurance Number (NIN) — for Italians in the UK
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-green-900/85">
            Who needs a NIN, exact documents, step-by-step application on GOV.UK, identity checks, timelines, starting a job while waiting, fixing problems, and lost/changed details.
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

      {/* ---------- DISCLAIMER BANNER ---------- */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <div className="rounded-2xl border border-emerald-900/15 bg-white p-4 text-sm shadow-sm">
          <p className="text-green-900/90">
            <strong>Heads-up:</strong> This guide is informational only — not immigration, tax or legal advice. Rules and processes change; always verify on{" "}
            <A href={links.applyNIN}>GOV.UK</A>. <strong>Resinaro is not liable</strong> for decisions based on this page.
          </p>
        </div>
      </section>

      {/* ---------- QUICK NAV (chips) ---------- */}
      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border bg-white/90 p-3">
          <div className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-gray-700">Quick navigation</div>
          <nav className="flex snap-x gap-2 overflow-x-auto pb-1">
            {[
              ["overview", "Overview"],
              ["eligibility", "Who needs a NIN"],
              ["documents", "Documents"],
              ["steps", "Apply step-by-step"],
              ["timelines", "Timelines"],
              ["start-work", "Start work while waiting"],
              ["problems", "Problems & fixes"],
              ["students", "Students & newcomers"],
              ["lost", "Lost / changes"],
              ["official", "Official links"],
              ["faqs", "FAQs"],
              ["disclaimer", "Disclaimer"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="snap-start whitespace-nowrap rounded-full border px-3 py-1.5 text-sm text-green-900 hover:bg-emerald-50">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <article className="prose prose-emerald max-w-none prose-headings:text-green-950 prose-p:text-green-900/90 prose-li:marker:text-emerald-700">
          {/* Overview */}
          <section id="overview" aria-labelledby="overview-title">
            <h2 id="overview-title">What is a National Insurance number?</h2>
            <p>
              Your National Insurance number (NIN) is a personal identifier used by HMRC and DWP to record contributions and taxes. It stays with you for life. You typically need it if you plan to work, claim certain benefits or have a work placement as a student. Learn the basics at <A href={links.niOverview}>GOV.UK — National Insurance</A>.
            </p>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-sm font-semibold">Fast facts</div>
              <ul className="mt-1">
                <li>The official application is on <A href={links.applyNIN}>GOV.UK</A> — it’s free.</li>
                <li>Some visas print a NIN on your <A href={links.biometricResidencePermit}>BRP</A>. If you have one already, don’t reapply.</li>
                <li>You can usually <strong>start work</strong> while waiting if you can <A href={links.rightToWork}>prove right to work</A>.</li>
              </ul>
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility" aria-labelledby="eligibility-title">
            <h2 id="eligibility-title">Do you need a NIN?</h2>
            <ul>
              <li><strong>Working or paid internship?</strong> Yes — your employer will ask for it (they can use a temporary process while you wait).</li>
              <li><strong>Have a BRP with NIN printed?</strong> No new application is needed.</li>
              <li><strong>Self-employed?</strong> You’ll still use your NIN for HMRC. See <A href={links.hmrcSelfAssessment}>Self Assessment</A>.</li>
            </ul>
          </section>

          {/* Documents */}
          <section id="documents" aria-labelledby="documents-title">
            <h2 id="documents-title">Documents & identity evidence</h2>
            <p>Requirements vary case-by-case. Prepare the strongest set you have:</p>
            <ul>
              <li>Passport or Italian ID card (valid).</li>
              <li>Immigration status: BRP or digital status details.</li>
              <li>UK address and contact details (email/phone). A tenancy/utility/bank letter may be requested in some cases.</li>
              <li>Employment details or job offer if you already have one (not always required).</li>
            </ul>
            <p className="!mt-2 text-[14px] text-green-900/80">
              Privacy tip: Only upload documents through <A href={links.applyNIN}>official GOV.UK</A> services. See the ICO’s guidance on ID security: <A href={links.dataProtectionNI}>ico.org.uk</A>.
            </p>
          </section>

          {/* Steps */}
          <section id="steps" aria-labelledby="steps-title">
            <h2 id="steps-title">Apply step-by-step (online)</h2>
            <ol>
              <li>
                Go to <A href={links.applyNIN}>GOV.UK — Apply for a National Insurance number</A> and read eligibility notes.
              </li>
              <li>
                Complete the online form. Create an account if prompted and save your reference.
              </li>
              <li>
                Upload identity/immigration evidence if asked. Some applicants are invited to provide biometrics or attend an interview.
              </li>
              <li>
                Wait for the decision letter. Keep your address current so post arrives safely.
              </li>
              <li>
                Give your NIN to your employer/payroll and keep the letter in a safe place.
              </li>
            </ol>
            <div className="mt-4 rounded-xl border bg-emerald-50/60 p-4">
              <div className="text-sm font-semibold">Common mistakes to avoid</div>
              <ul className="mt-1">
                <li>Applying through non-official websites that charge fees.</li>
                <li>Submitting unclear photos/scans — ensure full page, readable edges, no glare.</li>
                <li>Forgetting to update your address; letters may be lost.</li>
              </ul>
            </div>
          </section>

          {/* Timelines */}
          <section id="timelines" aria-labelledby="timelines-title">
            <h2 id="timelines-title">How long does it take?</h2>
            <p>
              Processing times vary depending on your case and demand (e.g., whether extra checks or an interview are required). Watch for emails/letters and respond quickly if more evidence is requested. Always rely on current notes on <A href={links.applyNIN}>GOV.UK</A>.
            </p>
          </section>

          {/* Start work */}
          <section id="start-work" aria-labelledby="start-work-title">
            <h2 id="start-work-title">Can I start work while waiting?</h2>
            <p>
              Usually yes — if you can <A href={links.rightToWork}>prove your right to work</A>. Your employer can use a temporary process and update payroll when your NIN arrives. Official guidance: <A href={links.workingWithoutNIN}>GOV.UK — If you already have a job</A>.
            </p>
            <ul>
              <li>Keep payslips and your application reference safe.</li>
              <li>Provide your NIN to HR/payroll as soon as you receive it.</li>
            </ul>
          </section>

          {/* Problems */}
          <section id="problems" aria-labelledby="problems-title">
            <h2 id="problems-title">Problems & how to fix them</h2>
            <ul>
              <li><strong>Invite to interview/biometrics:</strong> Bring originals and arrive early. If you can’t attend, follow rescheduling instructions in the letter.</li>
              <li><strong>Delays:</strong> Check spam folder, keep address/phone accurate, respond to document requests quickly.</li>
              <li><strong>Scam websites:</strong> The application is free on GOV.UK. If in doubt, see <A href={links.fcaScams}>FCA ScamSmart</A>.</li>
            </ul>
          </section>

          {/* Students & newcomers */}
          <section id="students" aria-labelledby="students-title">
            <h2 id="students-title">Students, newcomers & Italian specifics</h2>
            <ul>
              <li><strong>Students:</strong> You can apply if you plan to work or have a placement. Check your university’s guidance and <A href={links.ukcisa}>UKCISA</A> for working rules.</li>
              <li><strong>Italian Codice Fiscale:</strong> This is separate and not a substitute for a UK NIN.</li>
              <li><strong>Address history:</strong> If you’ve just arrived, provide your current UK address and any requested evidence; some cases accept limited address history.</li>
            </ul>
          </section>

          {/* Lost / changes */}
          <section id="lost" aria-labelledby="lost-title">
            <h2 id="lost-title">Lost NIN or changing your details</h2>
            <ul>
              <li><A href={links.lostNIN}>Find a lost National Insurance number</A> — request confirmation from HMRC.</li>
              <li><A href={links.updateHMRCDetails}>Tell HMRC about changes</A> — name, address or marital status.</li>
              <li>Your NIN does <strong>not</strong> change; don’t reapply for a new number.</li>
            </ul>
          </section>

          {/* Official links */}
          <section id="official" aria-labelledby="official-title">
            <h2 id="official-title">Official links & further reading</h2>
            <ul>
              <li><A href={links.applyNIN}>Apply for a National Insurance number — GOV.UK</A></li>
              <li><A href={links.niOverview}>National Insurance — Overview</A></li>
              <li><A href={links.rightToWork}>Prove your right to work — GOV.UK</A></li>
              <li><A href={links.biometricResidencePermit}>Biometric Residence Permit (BRP)</A></li>
              <li><A href={links.lostNIN}>Lost NIN — GOV.UK</A></li>
              <li><A href={links.hmrcSelfAssessment}>Self Assessment tax returns</A></li>
            </ul>
          </section>

          {/* FAQs (matches JSON-LD) */}
          <section id="faqs" aria-labelledby="faqs-title">
            <h2 id="faqs-title">Frequently Asked Questions</h2>

            <details className="group rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can I start work without a NIN?
              </summary>
              <div className="mt-2 text-green-900/90">
                Generally yes, if you can <A href={links.rightToWork}>prove right to work</A>. Give HR your NIN when it arrives.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                My BRP shows a NIN — do I still need to apply?
              </summary>
              <div className="mt-2 text-green-900/90">
                No. If your BRP includes a NIN, use that number. Keep the card and letter safe.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                How long will it take to receive my NIN?
              </summary>
              <div className="mt-2 text-green-900/90">
                It varies depending on checks and volume. Follow any instructions from GOV.UK and watch for letters/emails.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                I lost my NIN — what should I do?
              </summary>
              <div className="mt-2 text-green-900/90">
                Use <A href={links.lostNIN}>GOV.UK’s lost NI service</A> to retrieve it. Do not reapply for a new number.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is there a fee to apply?
              </summary>
              <div className="mt-2 text-green-900/90">
                No — the official application on <A href={links.applyNIN}>GOV.UK</A> is free.
              </div>
            </details>
          </section>

          {/* Internal CTAs */}
          <section className="mt-10">
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
              <h3 className="text-xl font-semibold">Need practical help?</h3>
              <p className="mt-1 text-green-900/80">
                We can’t give immigration advice, but we can help you prepare documents and stay on the official path.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Link href={p(locale, "/contact")} className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800">
                  Contact Resinaro
                </Link>
                <Link href={p(locale, "/tax-and-money")} className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50">
                  Read Tax & Money guide
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mt-10">
            <h2>Disclaimer</h2>
            <p>
              The information on this page is provided “as is” for general guidance. It does not constitute immigration, tax, financial or legal advice. Rules, documents and processing can change. Always follow the latest instructions on{" "}
              <A href={links.applyNIN}>GOV.UK</A> and other official sources linked above. <strong>Resinaro is not liable</strong> for decisions or outcomes arising from use of this guide.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
