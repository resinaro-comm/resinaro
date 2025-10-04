// src/app/community/banking/open-monzo-account-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Open a Monzo Account in the UK (2025) — Guide for Migrants",
  description:
    "Step-by-step guide to opening a Monzo account in the UK for migrants: requirements, verification, debit cards, FSCS protection, and troubleshooting (2025).",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/life-in-uk/banking/open-monzo-account-uk-2025",
  },
};

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/banking/open-monzo-account-uk-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a Monzo account with an EU passport or BRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — Monzo accepts passports (EU and non-EU) and BRPs for ID checks. If a document is rejected, try better lighting or a different document.",
        },
      },
      {
        "@type": "Question",
        name: "Does Monzo send a debit card to the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — Monzo sends a Mastercard debit card to the UK address you register when opening the account.",
        },
      },
      {
        "@type": "Question",
        name: "Is money in Monzo protected by FSCS?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Monzo provides FSCS protection for eligible deposits up to the standard limit (currently £85,000) where applicable. Check Monzo’s official help pages for the latest coverage details.",
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
    headline: "Open a Monzo Account in the UK (2025) — Guide for Migrants",
    description:
      "Step-by-step guide to opening a Monzo account in the UK for migrants: requirements, verification, debit cards, FSCS protection, and troubleshooting (2025).",
    image: ["https://www.resinaro.com/images/monzo-hero.jpg"],
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
            How to Open a Monzo Account in the UK (2025) — Step-by-step
          </h1>
          <p className="mt-3 text-white/90">
            Monzo is a popular app-first UK bank with simple sign-up, budgeting
            tools, and an easy debit card — often a top choice for migrants
            starting life in the UK.
          </p>
          {/* Hero image prompt (design workflow):
              "Editorial shot: smartphone showing Monzo app, Monzo debit card partially visible, neat desk, natural soft light, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/monzo-account-uk-hero-3840x1280.png"
            alt="Monzo banking app on smartphone with coral debit card on a modern desk setup"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Opening a Monzo account in the UK — digital banking made simple for migrants and residents.
          </figcaption>
        </figure>

        {/* Intro card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            This guide walks you through the Monzo sign-up flow, the documents
            you may need (ID & proof of address), how to receive your debit
            card, what to expect for payroll, and quick fixes for common signup
            problems in 2025.
          </p>
          <p className="mt-3">
            Want someone to check your documents before you apply?{" "}
            <Link
              href="/services/bureaucracy"
              className="underline text-green-900 hover:text-green-800"
            >
              Book bureaucracy help →
            </Link>
          </p>
        </div>

        {/* Quick checklist */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Quick checklist (before you start)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Passport or BRP (good, readable photos)</li>
            <li>UK mobile number for verification SMS</li>
            <li>Proof of UK address (if requested)</li>
            <li>Good selfie / short video for liveness checks</li>
            <li>Revolut/Monzo app installed and updated</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Step-by-step</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Download the Monzo app</strong> from the App Store or
              Google Play.
            </li>
            <li>
              <strong>Start registration</strong> with your email and UK mobile.
            </li>
            <li>
              <strong>ID check</strong> — Monzo typically asks for a short
              selfie video (liveness) and a photo of your passport or BRP.
            </li>
            <li>
              <strong>Address verification</strong> — if requested, upload a
              recent utility/bank/council tax statement or tenancy agreement.
            </li>
            <li>
              <strong>Receive card</strong> — Monzo posts a Mastercard debit
              card to your UK address; you’ll activate it in-app.
            </li>
            <li>
              <strong>Set up salary</strong> — provide your Monzo sort code and
              account number to your employer for payroll.
            </li>
          </ol>
        </section>

        {/* Proof of address details */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Proof of address — common documents
          </h2>
          <p className="mb-3">
            Monzo is flexible but rules can change. If asked, prefer documents
            dated within 3 months (or as requested):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bank statement with your name & postcode</li>
            <li>Council tax bill</li>
            <li>Utility bill (electricity, gas, water)</li>
            <li>Tenancy agreement or rent book</li>
            <li>Official government letters (HMRC, DWP)</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            If you lack UK address proof, Monzo sometimes offers alternatives —
            be honest in the app and follow their support flow.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Monzo vs Revolut vs Starling vs Traditional banks
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Feature</th>
                  <th>Monzo</th>
                  <th>Revolut</th>
                  <th>Starling</th>
                  <th>Traditional Bank</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>App & budgeting</td>
                  <td>Excellent (pots, budgets)</td>
                  <td>Good (multi-currency)</td>
                  <td>Good (business features)</td>
                  <td>Varies</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Account setup speed</td>
                  <td>Fast</td>
                  <td>Very fast</td>
                  <td>Fast</td>
                  <td>Slower</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Debit card</td>
                  <td>Yes — Mastercard</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>FSCS protection</td>
                  <td>FSCS for eligible deposits (check Monzo)</td>
                  <td>Varies by product</td>
                  <td>FSCS protected</td>
                  <td>FSCS protected</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Best for</td>
                  <td>Everyday banking & budgeting</td>
                  <td>International transfers & multi-currency</td>
                  <td>Business & personal banking</td>
                  <td>Full-service banking</td>
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
              <strong>Video selfie rejected</strong> → Retry in a well-lit area,
              follow the app frame guidance, and avoid hats/glasses during the
              check.
            </li>
            <li>
              <strong>Card not delivered</strong> → Confirm your postcode and
              address spelling in-app; contact Monzo support if it’s late.
            </li>
            <li>
              <strong>Cannot add salary</strong> → Give your employer the exact
              sort code/account number from the Monzo app (copy/paste avoids
              errors).
            </li>
            <li>
              <strong>Address proof flagged</strong> → Upload a different
              document (bank statement or council tax) and ensure the date is
              visible.
            </li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Monzo (official):{" "}
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
            <li>
              Starling Bank:{" "}
              <a
                href="https://starlingbank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                starlingbank.com
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs (interactive) */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need a UK address to open Monzo?
            </summary>
            <p className="mt-2">
              You usually need a UK address to receive a card. If you’re
              temporarily without one, Monzo may offer alternative checks —
              follow the app instructions or contact support.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How long until my Monzo card arrives?
            </summary>
            <p className="mt-2">
              Card delivery times vary by area but typically arrive within a few
              working days. Check tracking in the app if available.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can I open Monzo for joint or business use?
            </summary>
            <p className="mt-2">
              Monzo offers business accounts and some joint account features — see
              Monzo’s product pages for eligibility and differences.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want help preparing proof-of-address or checking documents before
              you apply?
            </p>
            <Link
              href="/services/bureaucracy"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get help with documents →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD scripts */}
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
