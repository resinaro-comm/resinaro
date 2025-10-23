import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import BenefitsForm from "@/components/BenefitsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits Guidance | Resinaro — UK Benefits & Entitlements Help",
  description:
    "Expert, practical guidance on UK benefits and entitlements for Italians and migrants in the UK. Eligibility checks, application support, evidence bundles and appeals support.",
  alternates: { canonical: "/services/benefits-guidance" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Am I eligible for UK benefits as an Italian resident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligibility depends on immigration status, residence history and the specific benefit. Resinaro provides a tailored check and explains which benefits you may be entitled to and how to apply."
      }
    },
    {
      "@type": "Question",
      "name": "Will claiming benefits affect my immigration status?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some benefits can affect certain immigration routes. We will flag any potential immigration implications during the assessment and advise when legal advice is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What if my claim is refused?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help review refusal reasons, prepare administrative review or appeal evidence and signpost to specialist regulated advisers if the case is complex."
      }
    },
    {
      "@type": "Question",
      "name": "Is this service confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle personal information sensitively and only share it where necessary to deliver the service or to protect someone from harm. See our Privacy Policy and Safeguarding Policy for full details."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Benefits Guidance & Application Support",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
  "email": "resinaro@proton.me"
  },
  "serviceType": "Benefits advice, application support and appeals",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description":
    "Tailored guidance on UK benefits and entitlements for migrants: eligibility checks, evidence preparation, application support and assistance with reviews and appeals."
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Benefits Guidance</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Practical, expert help to understand and apply for UK benefits and entitlements. We guide you through eligibility checks, application steps and next actions.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: information */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">
                Navigating the UK benefits system can be complex. Resinaro helps you identify what you may be entitled to, prepare the correct evidence, complete claims accurately and follow up on decisions. We explain implications for residency and signpost to specialist legal advisers when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who should use this service</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>People unsure which benefits they are eligible for.</li>
                <li>New arrivals who need help with Universal Credit registration or local council support.</li>
                <li>People who have received a refusal and need help with review or appeal.</li>
                <li>Those who need help gathering evidence for disability or means-tested claims.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Common benefits we advise on</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Universal Credit and legacy benefits (where still applicable).</li>
                <li>Housing Benefit and Council Tax Support.</li>
                <li>Personal Independence Payment (PIP) and Disability Living Allowance (DLA) for young people.</li>
                <li>Child Benefit and Child Tax Credit related guidance.</li>
                <li>Jobseeker&apos;s Allowance and support for returning to work.</li>
                <li>Local welfare assistance and crisis support schemes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Eligibility & immigration considerations</h2>
              <p className="text-gray-700 mb-2">
                Eligibility often depends on residence history and immigration status. In certain circumstances claiming some benefits may affect entitlement for specific immigration routes. We will flag any potential immigration effects during the initial check and recommend regulated legal advice when required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Documents you should prepare</h2>
              <p className="text-gray-700 mb-2">Typical documents that speed up the process include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Passport or national identity document.</li>
                <li>Proof of address such as tenancy agreement, council tax bill or recent utility bill.</li>
                <li>Pay slips, P60 or employer letters showing income and work history.</li>
                <li>Bank statements covering the relevant period.</li>
                <li>Medical evidence or letters for disability related claims.</li>
                <li>Any correspondence from the DWP, local authority or other agencies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How we work: step by step</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Initial assessment:</strong> A tailored eligibility check and list of required documents.</li>
                <li><strong>Evidence preparation:</strong> We help assemble and format evidence and draft supporting statements where needed.</li>
                <li><strong>Application support:</strong> Help to complete online forms or prepare paper applications and cover letters.</li>
                <li><strong>Decision follow up:</strong> Review of decisions, assistance with administrative review or appeals and signposting to regulated adviser if required.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Urgent or crisis support</h2>
              <p className="text-gray-700 mb-2">
                If you face immediate financial hardship we will prioritise signposting to emergency support, local food banks, crisis funds and local authority homelessness or hardship teams.
              </p>
              <p className="text-sm italic text-green-800">If you are at immediate risk, contact your local council or emergency services as appropriate.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Confidentiality and data handling</h2>
              <p className="text-gray-700">
                We treat personal information as confidential. Documents are stored securely and only accessed by staff who need them to deliver the service. You may request deletion or access to your data after the case is closed. See our Privacy Policy for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Trusted resources</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><a href="https://www.gov.uk/browse/benefits" target="_blank" rel="noopener noreferrer" className="underline text-green-800">GOV.UK benefits overview</a></li>
                <li><a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Citizens Advice</a></li>
                <li><a href="https://help.turn2us.org.uk/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Turn2us — financial help and benefits calculator</a></li>
                <li><a href="https://www.gov.uk/appeal-benefit-decision" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Appeal a benefit decision (GOV.UK)</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Outcomes we aim to deliver</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Clear eligibility assessment and a personal next-step plan.</li>
                <li>Completed application forms and evidence bundles ready for submission.</li>
                <li>Support to follow up decisions and prepare reviews or appeals.</li>
                <li>Rapid signposting to emergency support when required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro explained my options clearly and helped me complete my Universal Credit claim. The follow up saved me weeks of worry.&quot; — Marco
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
                &quot;They helped me gather evidence for a PIP claim and liaised with the charity that supported my application.&quot; — Sofia
              </blockquote>
            </section>
          </div>

          {/* Right: form and CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request Benefits Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Use the short form to describe your situation and upload any letters or documents. We will respond with a tailored plan and next steps.
              </p>

              <BenefitsForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Immediate support</h3>
              <p className="text-sm mb-3">
                If you require immediate financial help or face severe hardship email <a href="mailto:resinaro@proton.me" className="underline text-amber-300">resinaro@proton.me</a> with &quot;URGENT&quot; in the subject and include the best time to call.
              </p>
              <Link href={p(locale, "/contact")} className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white">Contact us</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have any DWP or council letters to hand.</li>
                <li>Gather pay slips, bank statements, tenancy or landlord correspondence.</li>
                <li>Note your immigration or settled status details if relevant.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How long does a benefit decision usually take?</summary>
            <div className="mt-2 text-gray-700">
              Processing times vary by benefit and workload at the decision-making body. Some decisions are quick while others can take several weeks. We will advise expected timescales for the specific claim during the assessment.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Will claiming benefits affect my right to rent or work?</summary>
            <div className="mt-2 text-gray-700">
              Claiming most benefits does not in itself affect the right to rent or to work. However, immigration status and certain means-tested benefits can interact in specific cases. We will review your immigration circumstances as part of the assessment.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can you help with benefits for self-employed people?</summary>
            <div className="mt-2 text-gray-700">
              Yes. We advise on evidence for income-based claims, calculations for self-employed earnings and documentation that the DWP or local authority may require.
            </div>
          </details>
        </section>
      </div>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
