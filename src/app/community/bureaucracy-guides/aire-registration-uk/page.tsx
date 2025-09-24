// src/app/community/bureaucracy-guides/aire-registration-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "AIRE Registration from the UK (2025): FAST IT Steps, Proofs & Common Errors",
  description:
    "How to register with AIRE from the UK using FAST IT. Step-by-step, required documents, address proofs, family updates, and how to fix the most common errors.",
  alternates: {
    canonical: "/community/bureaucracy-guides/aire-registration-uk",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need AIRE to renew a passport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Consulates usually require your AIRE record to be correct and up to date before issuing or renewing a passport.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register my child on FAST IT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can add family members and upload supporting documents such as long-form birth certificates.",
        },
      },
      {
        "@type": "Question",
        name: "I moved house — what now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Submit an AIRE variation with new address proof. Keep it updated to avoid problems with consular services.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      <div className="container mx-auto max-w-5xl px-6">
        {/* HERO IMAGE */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          {/* Use the responsive Image component. Width/height match the 3:1 source (3840x1280). */}
          <Image
            src="/images/aire-registration-hero-3840x1280.png"
            alt="Editorial desk with laptop showing a consular form, Italian passport and UK proof-of-address on a neat desk — professional AIRE registration setup."
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-auto object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Preparing documents for AIRE registration — scan proofs at 300 DPI, keep names and addresses consistent.
          </figcaption>
        </figure>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          AIRE Registration from the UK: FAST IT Steps, Proofs & Common Errors
          (2025)
        </h1>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
          <p>
            If you live in the UK, you should be registered in{" "}
            <strong>AIRE</strong> (Anagrafe degli Italiani Residenti all’Estero)
            at the consulate responsible for your area. Registration is free and
            done via <strong>FAST IT</strong>.
          </p>
          <p className="mt-3">
            If you’d like help checking documents or submitting correctly the
            first time, we can assist:{" "}
            <Link
              href="/services/bureaucracy"
              className="underline text-green-900 hover:text-green-800"
            >
              Bureaucracy Help →
            </Link>
          </p>
        </div>

        {/* What you need */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What you need before you start
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Item</th>
                  <th className="px-4 py-3 font-semibold">Examples/Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Italian ID</td>
                  <td className="px-4 py-3">Italian passport or carta d’identità</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">UK proof of address</td>
                  <td className="px-4 py-3">
                    Council tax bill, tenancy agreement, bank statement, utility
                    bill (recent)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Proof of residence status</td>
                  <td className="px-4 py-3">
                    Pre-settled/settled status share code, BRP, or similar
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Civil status documents</td>
                  <td className="px-4 py-3">
                    Marriage/divorce/birth certificates to align family data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Step-by-step */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Step-by-Step on FAST IT
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Create/Login</strong> to FAST IT:{" "}
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
              Select your consulate and choose <strong>AIRE</strong> /{" "}
              <strong>Registration/Variation</strong>.
            </li>
            <li>
              <strong>Upload proofs</strong> of address (PDF/JPG) with consistent
              name & address.
            </li>
            <li>
              <strong>Check family data</strong> (spouse/children). If missing,
              upload certificates.
            </li>
            <li>
              <strong>Submit</strong> and note the protocol number.
            </li>
            <li>
              Watch for consulate emails requesting more documents or
              clarifications.
            </li>
          </ol>
          <p className="mt-3 text-sm text-gray-700">
            Tip: scan documents at good quality (300 DPI), in colour, uncropped.
            Combine multiple pages into one PDF where useful.
          </p>
        </section>

        {/* Processing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Processing & Follow-Up
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Topic</th>
                  <th className="px-4 py-3 font-semibold">Expectation</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Timing</td>
                  <td className="px-4 py-3">
                    A few weeks to a few months depending on workload
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Address changes</td>
                  <td className="px-4 py-3">
                    Use FAST IT “variation” to update quickly
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Family changes</td>
                  <td className="px-4 py-3">
                    Register marriage, divorce, or child’s birth to keep your
                    record consistent
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequent Errors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Frequent Errors (and Fixes)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Problem</th>
                  <th className="px-4 py-3 font-semibold">Fix</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">
                    Name/address mismatch vs proof
                  </td>
                  <td className="px-4 py-3">
                    Ensure names match your AIRE record. Update data accordingly.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Poor scans</td>
                  <td className="px-4 py-3">
                    Re-scan at 300 DPI, all edges visible and readable.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Wrong consulate</td>
                  <td className="px-4 py-3">
                    Submit only to the consulate covering your UK address.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Unregistered marriage or birth</td>
                  <td className="px-4 py-3">
                    Upload official certificates; translations/legalisations may
                    be required.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Useful Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Useful Links</h2>
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
              Italian MFA:{" "}
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
              UK GOV – Proving immigration status:{" "}
              <a
                href="https://www.gov.uk/view-prove-immigration-status"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/view-prove-immigration-status
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need AIRE to renew a passport?
            </summary>
            <p className="mt-2">
              Yes. Consulates usually require your AIRE record to be correct and
              up to date.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I register my child on FAST IT?
            </summary>
            <p className="mt-2">
              Yes. You can add family members and upload supporting documents.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              I moved house — what now?
            </summary>
            <p className="mt-2">
              Submit an AIRE variation with new address proof. Keep it updated to
              avoid problems with consular services.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help gathering the right proofs and submitting correctly?
            </p>
            <Link
              href="/services/bureaucracy"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get AIRE Help →
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
