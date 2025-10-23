import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import HousingForm from "@/components/HousingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Guidance | Resinaro — Tenant Support & Safe Renting (UK)",
  description:
    "Practical housing guidance for migrants in the UK: find affordable housing, avoid scams, understand tenant rights, apply for council housing and resolve landlord disputes.",
  alternates: { canonical: "/services/housing-guidance" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I spot a rental scam?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Do not transfer money before you have seen the property and verified ownership. Be cautious of listings with unusually low rent, pressure to act immediately, or requests to pay via informal methods. Resinaro can help verify listings and advise safe next steps."
      }
    },
    {
      "@type": "Question",
      name: "What rights do tenants have if the landlord will not make repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Landlords must keep properties safe and in good repair. If they fail to act you can document the issue, report it to the local council environmental health team, and pursue formal remedies. We assist with documentation and next steps."
      }
    },
    {
      "@type": "Question",
      name: "Can Resinaro help with council housing applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We provide eligibility checks, help prepare supporting evidence and advise how to present your case to the council for priority or emergency assistance."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide emergency housing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Resinaro offers signposting to local homelessness services and crisis support. In urgent cases we will prioritise triage and connect you to the appropriate local authority or charity services."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Housing Guidance & Tenant Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me"
  },
  serviceType: "Housing advice, tenant rights and council application support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Tailored housing guidance for migrants: safe search advice, scam checks, tenancy support, deposit protection guidance and council housing assistance.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "35.00"
  }
};

export default function HousingGuidancePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        {/* Hero */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Housing Guidance & Tenant Support</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Practical, impartial support to find safe and affordable housing across the UK and resolve tenancy issues with confidence.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: core content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Why this service matters</h2>
              <p className="text-gray-700">
                Moving or settling into a new place is one of the biggest challenges migrants face. Errors when renting can be costly. Resinaro provides step-by-step help from search to signing so that you are protected and informed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we provide</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Targeted search strategy for London and other UK regions to find value-for-money options.</li>
                <li>Listing verification and landlord/agent checks to prevent scams.</li>
                <li>Tenancy agreement review with clear explanation of clauses and risks.</li>
                <li>Advice on deposit protection schemes and how to reclaim deposits.</li>
                <li>Support preparing evidence for council housing and homelessness assistance.</li>
                <li>Drafting letters and formal requests to landlords or councils where needed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How we help you avoid scams</h2>
              <p className="text-gray-700 mb-2">
                We teach practical checks and provide an on-demand verification service. For any suspicious listing send us the link and screenshots; we will check ownership, agent registration and whether the listing appears on other sites.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Verify photos, ownership records and agent identity.</li>
                <li>Detect duplicate or re-posted adverts used by fraudsters.</li>
                <li>Recommend safe payment methods and confirm deposit protection before transfer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Tenant rights & common actions</h2>
              <p className="text-gray-700 mb-2">
                Tenants have clear legal protections. We explain rights and the evidence needed to escalate issues, from repairs to unlawful eviction attempts.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>How to report disrepair to the landlord and the council.</li>
                <li>How to check whether a deposit is protected and how to reclaim it.</li>
                <li>What to do if a landlord attempts to evict without a court order.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Council housing & emergency routes</h2>
              <p className="text-gray-700 mb-2">
                We guide you through council applications, explain priority criteria and help prepare evidence for emergency or urgent housing needs. We also connect you with local charities and crisis funds where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What you should prepare</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Passport or national ID.</li>
                <li>Proof of UK address where available (bank statement, tenancy, council tax).</li>
                <li>Pay slips or proof of income if relevant.</li>
                <li>Screenshots and links for listings you want verified.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Process & turnaround</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Initial intake:</strong> Short form and listing details.</li>
                <li><strong>Verification & plan:</strong> We return a checklist and risk assessment (usually 1–3 business days).</li>
                <li><strong>Assistance:</strong> Tenancy checks, letters, council application support and follow up.</li>
              </ol>
              <p className="text-sm italic text-green-800 mt-2">
                Timings vary by task. Listing checks are usually quick; council or legal processes follow external timetables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro checked a listing and saved me from a convincing scam. Their checklist is now my go-to.&quot; — Alessio
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
                &quot;They helped me prepare the evidence for a council application and followed up with the housing officer.&quot; — Giulia
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Resources & trusted links</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><a href="https://www.gov.uk/browse/housing-local-services" target="_blank" rel="noopener noreferrer" className="underline text-green-800">GOV.UK — housing and local services</a></li>
                <li><a href="https://www.citizensadvice.org.uk/housing/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Citizens Advice — housing</a></li>
                <li><a href="https://www.depositprotection.com/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Deposit protection schemes</a></li>
              </ul>
            </section>
          </div>

          {/* Right: form + CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request Housing Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Complete the short form and include a link or screenshots of the listing if relevant. We will respond with a risk assessment and practical next steps.
              </p>

              <HousingForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent housing issues</h3>
              <p className="text-sm mb-3">
                If you face an imminent loss of home or homelessness, email <a href="mailto:resinaro@proton.me" className="underline text-amber-300">resinaro@proton.me</a> with &quot;URGENT&quot; in the subject and include the best time to contact you. We will prioritise triage and signpost emergency services.
              </p>
              <Link href={p(locale, "/contact")} className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white">Contact us</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have listing URLs or screenshots ready.</li>
                <li>Include landlord or agent contact details if available.</li>
                <li>Mention any deadlines or immediate safety concerns.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How do I check if a deposit is protected?</summary>
            <div className="mt-2 text-gray-700">
              Ask the landlord or agent for the deposit protection certificate and scheme details. We can help verify the scheme and advise on reclaiming the deposit if it is not protected.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can a landlord evict me without a court order?</summary>
            <div className="mt-2 text-gray-700">
              No. Landlords must follow legal eviction procedures and usually need a court order. If informal eviction is attempted we will advise immediate steps to protect your tenancy.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What should I do about repairs the landlord will not fix?</summary>
            <div className="mt-2 text-gray-700">
              Document the issue with photos and written requests. We can draft formal requests and advise on contacting environmental health or escalating to legal advice where needed.
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
