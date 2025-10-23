// src/app/community/life-in-uk/exchange-italian-driving-licence-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Exchange Italian Driving Licence for a UK Licence (2025): DVLA Steps, Documents & Timelines",
  description:
    "Clear steps for exchanging an Italian (EU) driving licence to a UK photocard licence: eligibility, D1 form, documents, fees, timelines, and common errors — with GOV.UK links.",
  alternates: {
    canonical: "/community/life-in-uk/exchange-italian-driving-licence-uk",
  },
};

export default function Page() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/italian-licence-exchange-hero-3840x1280.png"
            alt="Italian driving licence being exchanged for UK photocard licence with DVLA D1 form"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Exchanging your Italian driving licence for a UK photocard — DVLA process and required documents.
          </figcaption>
        </figure>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Exchange Italian Driving Licence for a UK Licence (2025): DVLA Steps,
          Documents & Timelines
        </h1>

        <p className="mb-6">
          If you’re resident in the UK and hold an{" "}
          <strong>Italian (EU) driving licence</strong>, you can usually{" "}
          <strong>exchange it</strong> for a <strong>UK photocard</strong>{" "}
          without re-taking a test (subject to DVLA rules).
        </p>

        <p className="mb-8">
          Want help checking your documents and completing the D1 pack
          correctly?{" "}
          <Link
            href="/services"
            className="underline text-green-900 hover:text-green-800"
          >
            View Resinaro Services →
          </Link>
        </p>

        {/* Eligibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Eligibility & Where to Start
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Official guidance:{" "}
              <a
                href="https://www.gov.uk/exchange-foreign-driving-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                GOV.UK – Exchange a foreign driving licence
              </a>
            </li>
            <li>You must be resident in the UK and your licence must be valid.</li>
            <li>
              DVLA will require original documents and a fee (see GOV.UK for
              current amount).
            </li>
          </ul>
        </section>

        {/* Documents Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Documents & D1 Form
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Item</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">D1 form</td>
                  <td className="px-4 py-3">
                    Order online or get from Post Office branches.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Identity</td>
                  <td className="px-4 py-3">Italian passport or other accepted ID.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Proof of UK address</td>
                  <td className="px-4 py-3">
                    Recent (bank, utility, council tax).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Original Italian licence</td>
                  <td className="px-4 py-3">
                    Photocard + counterpart if applicable.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Photos</td>
                  <td className="px-4 py-3">Recent passport-style photo if required.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Fee</td>
                  <td className="px-4 py-3">Pay DVLA fee (check GOV.UK).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            DVLA may request additional information or checks.
          </p>
        </section>

        {/* Typical Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Typical Steps</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Read GOV.UK guidance to confirm eligibility and current fee.</li>
            <li>Complete D1 carefully (black ink, BLOCK CAPITALS).</li>
            <li>Gather supporting documents and fee.</li>
            <li>Post to DVLA (keep copies and tracking).</li>
            <li>
              Wait for your UK photocard; your Italian licence is normally
              retained by DVLA.
            </li>
          </ol>
        </section>

        {/* Timelines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Timelines & Driving While You Wait
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Topic</th>
                  <th className="px-4 py-3 font-semibold">Typical Expectation</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Processing time</td>
                  <td className="px-4 py-3">
                    Usually several weeks; check GOV.UK for updates.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Driving while waiting</td>
                  <td className="px-4 py-3">
                    Generally allowed if you meet GOV.UK conditions and hold a
                    valid EU licence.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Returning original</td>
                  <td className="px-4 py-3">
                    DVLA usually keeps the EU licence after issuing the UK
                    photocard.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Insurance Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Insurance & Practical Tips
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Inform your car insurer if your licence type changes.</li>
            <li>
              Keep address and name consistent across documents to avoid DVLA
              rejections.
            </li>
            <li>
              If your Italian licence is lost/expired, see GOV.UK for
              replacement or alternative proofs.
            </li>
          </ul>
        </section>

        {/* Useful Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Useful Links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="https://www.gov.uk/exchange-foreign-driving-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                GOV.UK – Exchange a foreign driving licence
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.uk/driving-nongb-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                GOV.UK – Driving in Great Britain on a foreign licence
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.uk/government/organisations/driver-and-vehicle-licensing-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                DVLA service updates
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need to take a UK test?
            </summary>
            <p className="mt-2">
              EU licence holders typically do not need to retest when exchanging.
              Always confirm on GOV.UK.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How much is the fee?
            </summary>
            <p className="mt-2">
              Fees vary — check the current DVLA fee on GOV.UK.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can I keep my Italian licence?
            </summary>
            <p className="mt-2">
              Normally no — DVLA usually retains the EU licence when issuing the
              UK photocard.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want help completing the D1 form and assembling the documents
              properly?
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
    </main>
  );
}
