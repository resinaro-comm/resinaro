// src/app/community/life-in-uk/national-insurance-number-uk-italians/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "National Insurance Number (NIN) for Italians in the UK: Apply, Replace & Timelines (2025)",
  description:
    "Learn how to apply for or recover your UK National Insurance number: documents, timelines, replacement letters, and common mistakes — plus official links.",
  alternates: {
    canonical: "/community/life-in-uk/national-insurance-number-uk-italians",
  },
};

export default function Page() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          National Insurance Number (NIN) for Italians in the UK (2025): Apply,
          Replace & Timelines
        </h1>

        <p className="mb-6">
          A <strong>National Insurance number</strong> (NIN) is your personal
          reference for tax and social security in the UK. You’ll be asked for
          it by employers, HMRC, and sometimes for benefits and driving licence
          processes.
        </p>

        <p className="mb-8">
          If you want step-by-step help preparing your application or recovering
          your number, we can assist:{" "}
          <Link
            href="/services/nin-support"
            className="underline text-green-900 hover:text-green-800"
          >
            NIN Support →
          </Link>
        </p>

        {/* When You Need It */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            When you need it (and when you don’t)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Situation</th>
                  <th className="px-4 py-3 font-semibold">Do you need NIN?</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Starting a new job</td>
                  <td className="px-4 py-3">Yes, your employer will request it.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Self-employment registration</td>
                  <td className="px-4 py-3">Yes, strongly recommended.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Opening a bank account</td>
                  <td className="px-4 py-3">
                    Often not required, but some banks may ask.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">NHS access</td>
                  <td className="px-4 py-3">Usually not required.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            How to Apply (Online or by Phone)
          </h2>
          <p className="mb-3">
            The process may be updated — always check the official GOV.UK page:
          </p>
          <p className="mb-4">
            <a
              href="https://www.gov.uk/apply-national-insurance-number"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              Apply for a National Insurance number (GOV.UK)
            </a>
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Check eligibility (must be in the UK and have the right to work).</li>
            <li>Complete the online application (or phone if directed).</li>
            <li>
              Upload/present documents if asked (passport/ID, immigration
              status, proof of UK address).
            </li>
            <li>
              You may receive a letter confirming your application or requesting
              more info.
            </li>
            <li>
              Your NIN letter is posted to your address once assigned.
            </li>
          </ol>
        </section>

        {/* Documents */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Documents You May Need
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Document</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Passport / ID</td>
                  <td className="px-4 py-3">
                    Italian passport or carta d’identità.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Immigration status</td>
                  <td className="px-4 py-3">
                    eVisa share code (EU Settlement Scheme) or BRP.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">UK address proof</td>
                  <td className="px-4 py-3">
                    Bank statement, tenancy agreement, or utility bill.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Employment info</td>
                  <td className="px-4 py-3">
                    Contract/offer or employer’s details (sometimes requested).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Timelines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Timelines & Recovery
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Scenario</th>
                  <th className="px-4 py-3 font-semibold">Expectation</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">New application</td>
                  <td className="px-4 py-3">
                    A few weeks to receive your NIN letter (varies).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Already working</td>
                  <td className="px-4 py-3">
                    You can usually start work while waiting; employer uses a
                    temporary marker.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">NIN letter lost</td>
                  <td className="px-4 py-3">
                    Find your NIN on payslips, P60, or HMRC app; or request a
                    confirmation letter from HMRC.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Name/address change</td>
                  <td className="px-4 py-3">
                    Update with HMRC to keep records consistent.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              HMRC – Lost NIN:{" "}
              <a
                href="https://www.gov.uk/lost-national-insurance-number"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/lost-national-insurance-number
              </a>
            </li>
            <li>
              HMRC app:{" "}
              <a
                href="https://www.gov.uk/guidance/sign-in-to-your-personal-tax-account"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/guidance/sign-in-to-your-personal-tax-account
              </a>
            </li>
          </ul>
        </section>

        {/* Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Common Mistakes (and fixes)
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Applying from outside the UK → generally not possible.</li>
            <li>
              Wrong address → ensure reliable post delivery; the letter is
              physical.
            </li>
            <li>
              No proof of status → have your share code ready under EU Settlement
              Scheme.
            </li>
            <li>
              Ignoring HMRC letters → respond quickly to requests for more
              information.
            </li>
          </ol>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I work before I get my NIN?
            </summary>
            <p className="mt-2">
              Often yes — your employer can use a temporary reference while your
              application is processed.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do students need a NIN?
            </summary>
            <p className="mt-2">
              If you plan to work (even part-time), yes — apply once in the UK.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Does NIN expire?
            </summary>
            <p className="mt-2">No, it’s for life.</p>
          </details>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want us to check your documents and walk you through the
              application?
            </p>
            <Link
              href="/services/nin-support"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              NIN Support →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
