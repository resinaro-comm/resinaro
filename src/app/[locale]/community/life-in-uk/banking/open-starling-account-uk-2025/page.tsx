// src/app/community/banking/open-starling-account-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Open a Starling Account in the UK (2025) — Guide for Migrants",
  description:
    "Step-by-step guide to opening a Starling Bank account in the UK for migrants: verification, FSCS protection, debit card, proof-of-address and common signup issues (2025).",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/life-in-uk/banking/open-starling-account-uk-2025",
  },
};

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/banking/open-starling-account-uk-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a Starling account as a recent arrival to the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Starling accepts passports and BRPs for ID checks and usually requires proof of UK address. If you lack standard address proof, follow Starling’s in-app guidance or contact support.",
        },
      },
      {
        "@type": "Question",
        name: "Is my money protected in Starling?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Starling customers' eligible deposits are protected by the Financial Services Compensation Scheme (FSCS) up to the current limit (typically £85,000) where applicable.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get a Starling debit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Card delivery usually takes a few working days after address verification. Delivery times can vary by area; Starling provides tracking where available.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Open a Starling Account in the UK (2025) — Guide for Migrants",
    description:
      "Step-by-step guide to opening a Starling Bank account in the UK for migrants: verification, FSCS protection, debit card, proof-of-address and common signup issues (2025).",
    image: ["https://www.resinaro.com/images/starling-hero.jpg"],
    author: {
      "@type": "Person",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/logo.png",
      },
    },
    datePublished: "2025-09-24",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            How to Open a Starling Account in the UK (2025) — Step-by-step
          </h1>
          <p className="mt-3 text-white/90">
            Starling is a full-featured mobile bank with FSCS protection,
            intuitive budgeting, and no monthly fees — a reliable option for
            migrants who want a trusted UK account.
          </p>
          {/* Hero image prompt (for design workflow):
              "Editorial photo: Starling app on smartphone and Starling debit card,
               tidy desk, natural soft light, shallow depth of field, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/open-starling-bank.png"
            alt="Starling Bank mobile app on smartphone with debit card showing online banking setup for migrants"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Opening a Starling Bank account in the UK — mobile banking app setup and account verification process.
          </figcaption>
        </figure>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            This guide explains Starling’s signup flow, required documents, FSCS
            protection, how to receive and activate your debit card, and quick
            fixes for common issues. It’s written for migrants in 2025.
          </p>
          <p className="mt-3">
            Want help preparing documents or proof-of-address?{" "}
            <Link
              href="/services"
              className="underline text-green-900 hover:text-green-800"
            >
              View Resinaro Services →
            </Link>
          </p>
        </div>

        {/* Quick checklist */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Quick checklist (before you start)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Valid passport or Biometric Residence Permit (BRP)</li>
            <li>UK mobile number for SMS verification</li>
            <li>Proof of UK address (if requested)</li>
            <li>Good quality selfie or selfie video for liveness</li>
            <li>Starling app installed (App Store / Google Play)</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Step-by-step</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Download the Starling app</strong> — from App Store or
              Google Play.
            </li>
            <li>
              <strong>Start registration</strong> with your email and UK mobile
              number. Confirm the SMS code.
            </li>
            <li>
              <strong>Identity check</strong> — upload a clear photo of your
              passport or BRP and follow the in-app selfie/liveness steps.
            </li>
            <li>
              <strong>Address verification</strong> — upload proof if requested
              (see list below). Starling may accept digital documents.
            </li>
            <li>
              <strong>Receive card & account details</strong> — you’ll get UK
              sort code & account number and a physical debit card by post.
            </li>
            <li>
              <strong>Activate & use</strong> — activate your card in-app and
              set up direct debits or payroll with the provided account details.
            </li>
          </ol>
        </section>

        {/* Proof of address */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Proof of address — typical documents
          </h2>
          <p className="mb-3">
            If Starling requests proof of address, try documents dated within
            the last 3 months unless they specify otherwise:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Recent bank statement showing name & postcode</li>
            <li>Council tax bill</li>
            <li>Utility bill (electricity, gas, water)</li>
            <li>Tenancy agreement or rent confirmation</li>
            <li>Official letters from HMRC or DWP</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            If you don’t yet have a UK address, follow the in-app support flow —
            Starling sometimes provides alternatives for new arrivals.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Starling vs Monzo vs Revolut vs Traditional banks
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Feature</th>
                  <th>Starling</th>
                  <th>Monzo</th>
                  <th>Revolut</th>
                  <th>Traditional Bank</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>FSCS protection</td>
                  <td>Yes (eligible deposits)</td>
                  <td>Yes (eligible deposits)</td>
                  <td>Varies by product</td>
                  <td>Yes</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>App & features</td>
                  <td>Strong (business & personal tools)</td>
                  <td>Excellent budgeting tools</td>
                  <td>Great for multi-currency</td>
                  <td>Feature set varies</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Account setup speed</td>
                  <td>Fast</td>
                  <td>Fast</td>
                  <td>Very fast</td>
                  <td>Slower</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Business accounts</td>
                  <td>Yes (full business features)</td>
                  <td>Limited / available</td>
                  <td>Business options</td>
                  <td>Available</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Best for</td>
                  <td>Everyday & business banking</td>
                  <td>Everyday & budgeting</td>
                  <td>International payments</td>
                  <td>Full-service customers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common issues */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Common issues (and fixes)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>ID check failed</strong> → Retry in natural light, ensure
              document edges are visible and there’s no glare. Try a backup
              document if available.
            </li>
            <li>
              <strong>Card not delivered</strong> → Verify your address in-app
              and contact Starling support with delivery details.
            </li>
            <li>
              <strong>Address proof rejected</strong> → Upload a different
              document and ensure name & address are clear and dated.
            </li>
            <li>
              <strong>Can’t receive payroll</strong> → Double-check the sort
              code/account number in the app and give the exact details to your
              employer.
            </li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Starling Bank (official):{" "}
              <a
                href="https://www.starlingbank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                starlingbank.com
              </a>
            </li>
            <li>
              Monzo:{" "}
              <a
                href="https://monzo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                monzo.com
              </a>
            </li>
            <li>
              Revolut:{" "}
              <a
                href="https://revolut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                revolut.com
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs interactive */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Is Starling safe to use?
            </summary>
            <p className="mt-2">
              Yes — Starling is regulated in the UK and eligible deposits are
              protected by FSCS for qualifying products. For full details, see
              Starling’s help pages.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I open a business account with Starling?
            </summary>
            <p className="mt-2">
              Starling offers business accounts with additional features—check
              Starling’s business product pages for eligibility and documents.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How long does verification take?
            </summary>
            <p className="mt-2">
              Many checks finish in minutes, but manual reviews or address
              verification can add a few days. Contact support via the app if it
              takes longer than expected.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help preparing documents or proof-of-address before applying?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              View Resinaro Services →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
