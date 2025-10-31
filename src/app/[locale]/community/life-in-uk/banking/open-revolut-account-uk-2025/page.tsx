// src/app/community/life-in-uk/banking/open-revolut-account-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Open a Revolut Account in the UK (2025) — Quick Guide",
  description:
    "Step-by-step guide to opening a Revolut account in the UK for migrants: requirements, verification, payroll, fees, and troubleshooting (2025).",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/life-in-uk/banking/open-revolut-account-uk-2025",
  },
};

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/life-in-uk/banking/open-revolut-account-uk-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a Revolut account without a UK address?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Revolut often accepts a wide range of proof-of-address documents, including some digital documents. However, acceptance can vary — Revolut may request additional evidence if verification fails.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Revolut for salary payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Revolut provides UK account details (sort code & account number) for standard accounts which employers can use for payroll deposits.",
        },
      },
      {
        "@type": "Question",
        name: "Is my money protected in Revolut?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Revolut operates under FCA rules; protections differ by product and account type. For certain accounts and balances, FSCS protection may not apply—check Revolut’s own pages for the latest coverage details.",
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
    headline: "Open a Revolut Account in the UK (2025) — Quick Guide",
    description:
      "Step-by-step guide to opening a Revolut account in the UK for migrants: requirements, verification, payroll, fees, and troubleshooting (2025).",
    image: ["https://www.resinaro.com/images/revolut-hero.jpg"],
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
      {/* Hero (no image dependency) */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            How to Open a Revolut Account in the UK (2025) — Step-by-step
          </h1>
          <p className="mt-3 text-white/90">
            Fast, app-based UK accounts for migrants — what you need, how to
            verify, payroll info, fees, and troubleshooting tips so you can be
            ready to receive money and pay bills on day one.
          </p>
          {/* Hero image prompt — for design workflow:
              "Photorealistic smartphone showing the Revolut app on screen
              resting on a simple desk with a UK proof-of-address letter next to it;
              soft editorial light, shallow depth of field, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/revolut-cover.png"
            alt="Revolut banking app on smartphone with UK account details and verification documents"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Opening a Revolut account in the UK — fast digital banking with instant account setup for migrants.
          </figcaption>
        </figure>

        {/* Intro card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            <strong>Revolut</strong> offers an instant, app-first UK account
            that’s often the quickest option for migrants arriving in the UK.
            You’ll usually get a UK sort code and account number immediately
            after verification — useful for salary, bills and renting. This
            guide covers eligibility, documents, verification steps, fees and
            common problems in 2025.
          </p>

          <p className="mt-3">
            Need help with documents or proof-of-address?{" "}
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
            <li>Valid passport or BRP (biometric residence permit)</li>
            <li>UK mobile number (for SMS verification)</li>
            <li>Proof of address (see options below)</li>
            <li>Good quality selfie for identity checks</li>
            <li>Stable internet and the Revolut app installed</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Step-by-step</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Download the Revolut app</strong> — iOS App Store or Google
              Play.
            </li>
            <li>
              <strong>Register</strong> with your email and UK mobile number.
              Revolut may send an SMS code to confirm the number.
            </li>
            <li>
              <strong>Choose account type</strong> — standard/free account is
              enough for most migrants; paid tiers offer extras.
            </li>
            <li>
              <strong>Verify identity</strong> by photographing your passport
              (or BRP) and taking a live selfie. Follow the app prompts.
            </li>
            <li>
              <strong>Proof of address</strong> — upload a recent document if
              requested (examples below). Revolut sometimes accepts digital
              documents.
            </li>
            <li>
              <strong>Receive UK account details</strong> — you’ll usually get
              account number and sort code once verification completes.
            </li>
            <li>
              <strong>Top-up & test</strong> — add a small amount and try a
              test payment to confirm everything works.
            </li>
          </ol>
        </section>

        {/* Proof of address details */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Proof of address — what Revolut accepts (typical)
          </h2>
          <p className="mb-3">
            Revolut’s checks vary. If asked, try to upload any of the below (recent
            — usually within 3 months unless specified):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Council tax bill</li>
            <li>Bank statement (with postcode visible)</li>
            <li>Utility bill (gas, electric, water) — paper or acceptable PDF</li>
            <li>Tenancy agreement or rent statement</li>
            <li>Official government correspondence (HMRC, DWP)</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            If you don’t have a UK address yet, explain this in the app — Revolut
            sometimes accepts alternative evidence but may request extra checks.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Revolut vs Monzo vs Starling vs Traditional banks
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Feature</th>
                  <th>Revolut</th>
                  <th>Monzo</th>
                  <th>Starling</th>
                  <th>Traditional Bank</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Account setup speed</td>
                  <td>Very fast (app-first)</td>
                  <td>Fast</td>
                  <td>Fast</td>
                  <td>Slower, may need branch visit</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>UK sort code/account</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Overdraft/credit</td>
                  <td>Limited</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>FSCS protection</td>
                  <td>Varies by product — check Revolut</td>
                  <td>FSCS protected</td>
                  <td>FSCS protected</td>
                  <td>FSCS protected</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Best for</td>
                  <td>Quick accounts, international payments</td>
                  <td>Everyday banking</td>
                  <td>Business & personal everyday</td>
                  <td>Full banking services</td>
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
              <strong>Identity check failed</strong> → Retake the passport photo
              in good light, ensure the whole document is visible and not
              cropped, and remove reflections.
            </li>
            <li>
              <strong>Proof-of-address rejected</strong> → Upload a different
              document (bank statement or council tax) and ensure the full
              address is visible.
            </li>
            <li>
              <strong>App won&apos;t accept mobile number</strong> → Make sure you
              choose the UK country code (+44) and remove leading zero from your
              number.
            </li>
            <li>
              <strong>Can&apos;t receive salary</strong> → Confirm your employer has
              the correct account number & sort code shown in the Revolut app.
            </li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Revolut (official):{" "}
              <a
                href="https://www.revolut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                revolut.com
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
              Will Revolut accept my EU passport or BRP?
            </summary>
            <p className="mt-2">
              Revolut accepts passports (EU/other) and BRPs for identity checks.
              If your document is rejected, check lighting and focus and try
              again — or try a different document if you have one.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need to be a UK resident to open Revolut?
            </summary>
            <p className="mt-2">
              You need to provide a UK phone number and usually proof of address
              if requested. Revolut’s eligibility rules can change — check the
              app’s help pages for the most up-to-date info.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How long does verification take?
            </summary>
            <p className="mt-2">
              Often minutes, but in some cases identity checks can take hours or
              require manual review — try again after a short wait or contact
              Revolut support via the app if delayed.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help preparing documents, proof of address, or AIRE checks
              before you verify with Revolut?
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
