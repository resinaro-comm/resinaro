"use client";

export default function ServicesTrust() {
  return (
    <section aria-labelledby="trust-title" className="mt-16 md:mt-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          You’re not a case number — you’re part of our community
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Moving countries is emotional as well as practical. We get it. Resinaro was built by migrants,
          for migrants — with patient guidance, clear steps, and real people who reply in plain English (and Italian).
          No pressure, no “slot selling”, no hidden fees — just honest help.
        </p>

        <ul className="grid md:grid-cols-3 gap-3 mb-10">
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Transparent service fees</p>
            <p className="text-gray-700">Prices shown upfront. No cash-only surprises, no upselling.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Official routes only</p>
            <p className="text-gray-700">We never resell appointments. We guide you through the proper process.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="font-semibold text-gray-900">Kind, patient support</p>
            <p className="text-gray-700">Clear next steps after each chat. We stay with you until it’s done.</p>
          </li>
        </ul>

        {/* Table 1: Differentiator table */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-900 mb-3">Why people choose Resinaro</h3>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">Resinaro vs typical agencies</caption>
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th scope="col">What you care about</th>
                  <th scope="col">Resinaro</th>
                  <th scope="col">Typical “slot seller” agency</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Pricing & ethics</td>
                  <td>Clear, published fees. No appointment reselling, no hidden mark-ups.</td>
                  <td>Opaque fees; upselling; request cash or charge for public slots.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Appointments & paperwork</td>
                  <td>We guide via official systems and give a written checklist.</td>
                  <td>“We’ll handle it” with few details; little documentation left with you.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Communication</td>
                  <td>Plain English/Italian, patient, human. Updates as status changes.</td>
                  <td>Scripted, rushed, limited follow-up.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Mental health signposting</td>
                  <td>We point to NHS & community resources when needed.</td>
                  <td>Usually ignored — “not our service”.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Data protection</td>
                  <td>GDPR-aware. Secure file sharing. Only necessary info collected.</td>
                  <td>Risky email/file practices; unclear retention policies.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Aftercare</td>
                  <td>We don’t disappear. Follow-up if forms or evidence change.</td>
                  <td>“Service finished” once payment received.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Prep checklist */}
        <div>
          <h3 className="text-2xl font-semibold text-green-900 mb-3">Quick prep checklist (saves you time)</h3>
          <p className="text-gray-700 mb-3">
            Bring what you have — we’ll work with it. Missing something? Use the tips in the table.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">Documents to prepare and alternatives</caption>
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th scope="col">Document</th>
                  <th scope="col">Accepted examples</th>
                  <th scope="col">If you don’t have it</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>ID</td>
                  <td>Passport, Italian ID card (CIE), BRP.</td>
                  <td>Lost/stolen? File a police report and contact the consulate for replacement.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Proof of address</td>
                  <td>Bank statement, utility bill, council tax, tenancy, employer/GP letter.</td>
                  <td>Ask your bank for a downloadable PDF; NHS/GP letters often accepted.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>NI number evidence</td>
                  <td>HMRC NI letter or application reference.</td>
                  <td>We’ll help you apply and track the reference properly.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Photos</td>
                  <td>Biometric passport photos (UK spec).</td>
                  <td>Most photo shops & booths offer “UK passport” compliant sizing.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Civil status docs</td>
                  <td>Birth/marriage certificates where applicable.</td>
                  <td>We’ll explain how to request copies or register via AIRE.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-900"
          >
            Talk to a real person — we’ll guide you step by step
          </a>
        </div>
      </div>
    </section>
  );
}