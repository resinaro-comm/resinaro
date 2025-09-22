// src/app/community/life-in-uk/right-to-rent-tenancy-basics-england/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "Right to Rent & Tenancy Basics in England (2025): Documents, Deposits, Repairs & Notices",
  description:
    "Essential renting guide for Italians/EU nationals in England: Right to Rent checks, deposits and protection, tenancy types, contract clauses, repairs, and how to avoid scams.",
  alternates: {
    canonical: "/community/life-in-uk/right-to-rent-tenancy-basics-england",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can a landlord refuse me because I have pre-settled/settled status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — landlords must follow Right to Rent checks. Provide your share code as evidence.",
        },
      },
      {
        "@type": "Question",
        name: "How big can the deposit be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually up to 5 weeks’ rent if annual rent is £50,000 or less.",
        },
      },
      {
        "@type": "Question",
        name: "What if repairs aren’t done?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Write to the landlord/agent; escalate to the council’s private housing team if ignored. Shelter can also advise.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Right to Rent & Tenancy Basics in England (2025)
        </h1>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
          <p>
            Finding a home in the UK can be confusing. This guide covers your{" "}
            <strong>Right to Rent</strong> documents,{" "}
            <strong>tenancy types</strong>, <strong>deposits</strong>,{" "}
            <strong>repairs</strong>, and <strong>how to avoid scams</strong> —
            written for Italians/EU nationals, but useful for everyone.
          </p>
          <p className="mt-3">
            Need help reviewing a tenancy agreement before you sign?{" "}
            <Link
              href="/services/housing"
              className="underline text-green-900 hover:text-green-800"
            >
              Housing Guidance →
            </Link>
          </p>
        </div>

        {/* Right to Rent */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Right to Rent — documents landlords can ask for
          </h2>
          <p className="mb-3">
            GOV.UK:{" "}
            <a
              href="https://www.gov.uk/check-tenant-right-to-rent-documents"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              Check tenant right to rent documents
            </a>
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">If you’re…</th>
                  <th className="px-4 py-3 font-semibold">
                    Evidence commonly accepted
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">British/Irish citizen</td>
                  <td className="px-4 py-3">
                    Passport (current/expired) or Irish passport card
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">EU/EEA citizen with status</td>
                  <td className="px-4 py-3">
                    Share code (from{" "}
                    <a
                      href="https://www.gov.uk/view-prove-immigration-status"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-green-900"
                    >
                      View and Prove
                    </a>
                    ) + passport/ID
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Non-EU with visa</td>
                  <td className="px-4 py-3">BRP/BRC + share code</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pending application</td>
                  <td className="px-4 py-3">
                    Landlord’s Checking Service result (Home Office)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            Landlords <strong>must</strong> check your right to rent; it’s not
            discrimination if they follow the official process.
          </p>
        </section>

        {/* Tenancy types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Tenancy types (England)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Typical Use</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">AST</td>
                  <td className="px-4 py-3">Most private rentals</td>
                  <td className="px-4 py-3">
                    You have statutory rights; deposit must be protected
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Lodger / Live-in landlord</td>
                  <td className="px-4 py-3">
                    Renting a room in landlord’s home
                  </td>
                  <td className="px-4 py-3">Fewer rights than AST</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Licence</td>
                  <td className="px-4 py-3">Hostels/temporary</td>
                  <td className="px-4 py-3">Limited rights; read carefully</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deposits */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Deposits & Protection
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Maximum deposit: usually <strong>5 weeks’ rent</strong> (if rent ≤
              £50k/year).
            </li>
            <li>
              Must be protected in a{" "}
              <strong>government-approved scheme</strong> within 30 days:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  <a
                    href="https://www.depositprotection.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-900"
                  >
                    Deposit Protection Service (DPS)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mydeposits.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-900"
                  >
                    MyDeposits
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tenancydepositscheme.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-green-900"
                  >
                    TDS
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Repairs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Repairs & Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Landlord:</strong> structure, heating, hot water,
              sanitation, electrics, gas safety certificates.
            </li>
            <li>
              <strong>Tenant:</strong> reasonable care, replace bulbs, report
              issues, keep clean.
            </li>
            <li>Report repairs in writing and keep dated photos.</li>
            <li>
              Urgent issues (heating, leaks) → flag as{" "}
              <strong>emergency repairs</strong>.
            </li>
          </ul>
          <p className="mt-3">
            <a
              href="https://england.shelter.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              Shelter (England)
            </a>{" "}
            |{" "}
            <a
              href="https://www.citizensadvice.org.uk/housing/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              Citizens Advice
            </a>
          </p>
        </section>

        {/* Red Flags */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Red flags & avoiding scams
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Asked to pay deposit before viewing → walk away.</li>
            <li>No tenancy agreement or refusal to protect deposit.</li>
            <li>Rent demanded in cash only.</li>
            <li>Landlord/agent avoids Right to Rent checks entirely.</li>
          </ul>
        </section>

        {/* Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Checklist before signing
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>View property (ideally in person)</li>
            <li>Verify Right to Rent process</li>
            <li>Confirm deposit protection scheme</li>
            <li>Read break clauses, notice periods, fees</li>
            <li>Record inventory with photos</li>
            <li>Get gas/electrical safety certificates</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can a landlord refuse me because I have pre-settled/settled status?
            </summary>
            <p className="mt-2">
              No — landlords must follow Right to Rent. Provide your share code.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How big can the deposit be?
            </summary>
            <p className="mt-2">Usually 5 weeks’ rent (if annual rent ≤ £50k).</p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What if repairs aren’t done?
            </summary>
            <p className="mt-2">
              Write to landlord/agent; escalate to council’s housing team.
              Shelter can also advise.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want a line-by-line check of your agreement + deposit protection?
            </p>
            <Link
              href="/services/housing"
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
