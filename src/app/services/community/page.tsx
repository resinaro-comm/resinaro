import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing Guidance | Resinaro — Renting & Tenant Support (UK)",
  description:
    "Practical housing guidance for migrants in the UK: find affordable housing, avoid scams, understand tenant rights, and apply for council housing.",
  alternates: { canonical: "/services/housing-guidance" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can Resinaro help me find affordable housing in London?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide tailored advice, signposting to trusted partners, and a checklist to improve your search and application success in London and other UK areas."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if I suspect a rental scam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Do not transfer money until you have verified the property and the landlord. We can help verify listings, suggest safe viewing practices and advise on deposit protection."
      }
    },
    {
      "@type": "Question",
      "name": "Do tenants have rights if the landlord will not fix hazards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Landlords must keep properties safe and in good repair. We explain the formal complaint routes, local council enforcement and how to document issues."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with council housing applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide guidance through council housing application processes and help gather supporting documents and evidence where required."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Housing Guidance and Tenant Support",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
    "email": "help@resinaro.com"
  },
  "serviceType": "Housing advice, tenant rights and housing application support",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description": "Practical guidance to find affordable housing, avoid rental scams, resolve landlord issues, and apply for council housing. Support for tenants and new arrivals.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "25.00"
  }
};

export default function HousingGuidancePage() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Housing Guidance & Tenant Support</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Practical, impartial help to find safe, affordable housing in the UK and to resolve tenancy issues.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column: detailed content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">
                Searching for a home can be stressful and risky, especially when arriving from abroad. Resinaro provides guidance on where to search, how to avoid common traps, and what legal protections are available to tenants in the UK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Services we provide</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personalised property search advice and trusted listing sources.</li>
                <li>Verification of listings and basic landlord checks to reduce scam risk.</li>
                <li>Support with tenancy agreements, checking clauses and highlighting risks.</li>
                <li>Guidance on deposit protection schemes and how to reclaim a deposit.</li>
                <li>Assistance with council housing applications and emergency housing referrals.</li>
                <li>Advice on repairs, hazards, and making a formal complaint to the local council.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Where to look</h2>
              <p className="text-gray-700 mb-2">
                Use trusted platforms and local community channels. We recommend combining national portals with local groups for best results.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Major property portals for broad searches.</li>
                <li>Local community groups and specialised migrant housing channels.</li>
                <li>University or workplace noticeboards for short-term or shared housing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How to spot scams</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Never agree to pay before viewing the property in person or verifying ownership.</li>
                <li>Be wary of listings with unusually low rent or high pressure to act quickly.</li>
                <li>Check whether the landlord or agent is a registered company and ask for ID and proof of ownership.</li>
                <li>Use official deposit protection schemes and get a written tenancy agreement before paying a deposit.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                If in doubt, contact us and we will help verify the listing and suggest safe next steps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Tenant rights & common issues</h2>
              <p className="text-gray-700 mb-2">
                Tenants have legal protections. If a landlord will not repair hazards or tries to evict without following the correct process, there are formal routes to challenge them.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to a safe and habitable home: landlords must address serious disrepair.</li>
                <li>Deposit protection: landlords must place deposits in an approved scheme and provide details.</li>
                <li>Eviction notice rules: landlords must follow legal notice periods and court procedures.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                We help document issues and advise on reporting to the local council or seeking legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Council housing & emergency options</h2>
              <p className="text-gray-700 mb-2">
                If you may be eligible for council housing or homelessness assistance we can explain the application process, required evidence and how to present your case.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Eligibility checks and application support.</li>
                <li>Preparing evidence for priority needs or vulnerability assessments.</li>
                <li>Signposting to local homelessness services and night shelters where required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Process: how we work with you</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Initial call or form:</strong> Tell us about your needs and timeline.</li>
                <li><strong>Case review:</strong> We review documents, verify listings and produce a plan.</li>
                <li><strong>Support delivery:</strong> We assist with checks, application letters, and follow up.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What to bring</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Proof of identity.</li>
                <li>Proof of income or benefits if available.</li>
                <li>Any existing tenancy agreement or landlord correspondence.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro helped me find a safe room in London and checked the tenancy. I felt supported every step of the way.&quot; — Alessio
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
                &quot;They verified a suspicious listing and prevented me from losing money to a scam. Highly recommended.&quot; — Giulia
              </blockquote>
            </section>
          </div>

          {/* Right column: form and CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request Housing Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Complete the short form and provide a link to the listing if relevant. We will respond with practical next steps and a tailored plan.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent housing trouble</h3>
              <p className="text-sm mb-3">
                If you are homeless or at immediate risk of losing your home contact your local council housing team. If you need direct signposting email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a>.
              </p>
              <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white">Contact us</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have links or screenshots of the listing ready.</li>
                <li>Include any landlord or agent contact details.</li>
                <li>Mention any immediate safety concerns or deadlines.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ section */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How do I check if a deposit is protected?</summary>
            <div className="mt-2 text-gray-700">
              Ask the landlord or agent for the deposit protection scheme name and certificate. We can help you verify the scheme and advise on next steps if the deposit is not protected.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can a landlord evict me without a court order?</summary>
            <div className="mt-2 text-gray-700">
              Landlords must follow legal eviction procedures, which usually require a court order. If someone is trying to evict you informally we can advise on immediate steps and where to seek emergency help.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What if my landlord will not do repairs?</summary>
            <div className="mt-2 text-gray-700">
              Document the problem with photos and written requests. We explain how to contact the local council environmental health team and how to escalate the matter.
            </div>
          </details>
        </section>
      </div>

      {/* Structured data scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
