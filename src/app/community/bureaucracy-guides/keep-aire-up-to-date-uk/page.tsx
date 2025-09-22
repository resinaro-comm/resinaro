// src/app/community/bureaucracy-guides/keep-aire-up-to-date-uk/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "AIRE Updates from the UK (2025): Change Address, Marriage, Birth, Name — FAST IT Guide",
  description:
    "Step-by-step guide to updating AIRE from the UK: change of address, marriage, birth of a child, name changes. What to submit in FAST IT, required documents, and typical timelines.",
  alternates: {
    canonical: "/community/bureaucracy-guides/keep-aire-up-to-date-uk",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need apostille for every UK certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always, but many consulates require it. Always confirm with your consulate before translating or posting documents.",
        },
      },
      {
        "@type": "Question",
        name: "How long do AIRE updates take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Address updates usually take weeks. Stato Civile transcriptions for events like marriage or birth can take weeks to months, depending on your comune in Italy.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register events entirely online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often you submit online through FAST IT, but you may still need to send originals or certified copies by post/email to the consulate. Always follow their instructions.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Keep Your AIRE Up to Date (2025): Address, Marriage, Birth, Name
          Changes from the UK
        </h1>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
          <p>
            If you’re an Italian citizen resident in the UK, keeping your{" "}
            <strong>AIRE</strong> current is essential. Many consular services
            (passport, CIE, Stato Civile) depend on your AIRE being correct and
            assigned to the <strong>right consulate</strong>.
          </p>
          <p className="mt-3">
            Unsure what to upload or how to fix a rejected request?{" "}
            <Link
              href="/services/bureaucracy"
              className="underline text-green-900 hover:text-green-800"
            >
              Bureaucracy Help →
            </Link>
          </p>
        </div>

        {/* Updates Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What can you update in FAST IT?
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Update</th>
                  <th className="px-4 py-3 font-semibold">Typical Evidence</th>
                  <th className="px-4 py-3 font-semibold">Where to do it</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Change of Address</td>
                  <td className="px-4 py-3">Recent proof of UK address</td>
                  <td className="px-4 py-3">
                    FAST IT → “Communication of change of address”
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Marriage</td>
                  <td className="px-4 py-3">
                    UK marriage certificate (+ apostille/translation if
                    required)
                  </td>
                  <td className="px-4 py-3">
                    FAST IT + Stato Civile (check consulate rules)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Birth of a Child</td>
                  <td className="px-4 py-3">
                    UK long-form birth certificate, apostille, translation (if
                    required)
                  </td>
                  <td className="px-4 py-3">FAST IT + Stato Civile</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Name Change</td>
                  <td className="px-4 py-3">
                    Legal certificate of name change/deed poll, apostille and
                    translation if required
                  </td>
                  <td className="px-4 py-3">FAST IT + Stato Civile</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            FAST IT:{" "}
            <a
              href="https://serviziconsolarionline.esteri.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              serviziconsolarionline.esteri.it
            </a>{" "}
            | MFA:{" "}
            <a
              href="https://www.esteri.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              esteri.it
            </a>
          </p>
        </section>

        {/* Step-by-Step Change of Address */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Step-by-Step: Change of Address (Typical)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Log into FAST IT → “Anagrafe consolare/AIRE”.</li>
            <li>
              Select <strong>Change of Address</strong> and upload recent proof
              of UK address.
            </li>
            <li>
              Confirm your <strong>household composition</strong>.
            </li>
            <li>Submit and note the ticket number.</li>
            <li>Track in FAST IT (processing may take weeks).</li>
          </ol>
        </section>

        {/* Step-by-Step Other Events */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Step-by-Step: Marriage/Birth/Name Updates (Overview)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Prepare the UK certificate (birth/marriage/divorce/name).</li>
            <li>
              Obtain apostille if your consulate requires it:{" "}
              <a
                href="https://www.gov.uk/get-document-legalised"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/get-document-legalised
              </a>
            </li>
            <li>
              Arrange a certified/sworn translation into Italian if required.
            </li>
            <li>Submit via FAST IT and/or Stato Civile (check rules).</li>
            <li>
              Wait for transcription at your <strong>comune</strong> in Italy
              (weeks–months).
            </li>
          </ol>
          <p className="mt-3 text-sm text-gray-700">
            Tip: Translate <strong>after apostille</strong> if both are
            required, so the apostille text is included in the translation.
          </p>
        </section>

        {/* Common Errors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Common Errors (and Fixes)
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Wrong certificate type → for births, use{" "}
              <strong>long-form</strong> with parents’ names.
            </li>
            <li>No apostille → many consulates require it.</li>
            <li>
              Translation not compliant → use certified/sworn translators.
            </li>
            <li>
              Wrong consulate → you must be registered with the correct
              jurisdiction.
            </li>
            <li>
              Expired proofs → upload recent (&lt;= 3 months) address
              documents.
            </li>
          </ul>
        </section>

        {/* Useful Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Useful Links
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              FAST IT:{" "}
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                serviziconsolarionline.esteri.it
              </a>
            </li>
            <li>
              MFA (IT):{" "}
              <a
                href="https://www.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                esteri.it
              </a>
            </li>
            <li>
              UK Apostille:{" "}
              <a
                href="https://www.gov.uk/get-document-legalised"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/get-document-legalised
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need apostille for every UK certificate?
            </summary>
            <p className="mt-2">
              Not always, but many consulates require it — check your consulate.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How long do updates take?
            </summary>
            <p className="mt-2">
              Address updates: weeks. Stato Civile transcriptions: weeks–months,
              depending on the comune.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can I register events entirely online?
            </summary>
            <p className="mt-2">
              Often you submit online + post/email originals to the consulate.
              Always follow instructions.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want us to review your FAST IT submission pack before you send it?
            </p>
            <Link
              href="/services/bureaucracy"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get Help →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
