import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bureaucracy Help | Resinaro — AIRE, SPID, Benefits & More",
  description:
    "Cut through the red tape — Resinaro provides practical help with AIRE, SPID setup, UK benefits, consular paperwork and other administrative tasks for Italians and migrants in the UK.",
  alternates: { canonical: "/services/bureaucracy-help" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AIRE and do I need to register?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AIRE is the register of Italians living abroad. If you are an Italian resident in the UK you should check whether you are required to register. We provide guidance to check and update AIRE and explain how it affects consular services.",
      },
    },
    {
      "@type": "Question",
      name: "Can Resinaro set up SPID for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We guide you through SPID setup and the required documents and checks. Depending on the identity provider, certain steps may need to be performed by the applicant in person or via a video check; we assist throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you act as a legal representative for benefit claims?",
      acceptedAnswer: {
        "@type": "Answer",
        "text":
          "Resinaro provides practical guidance and help to prepare benefit applications and supporting documents. We do not provide formal legal representation. For complex cases we can signpost to regulated advice or local welfare services.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to update AIRE or set up SPID?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Timelines vary by consulate and identity provider. Initial document checks and a guidance plan are typically provided within 1 to 3 business days. Full processing times depend on external services.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bureaucracy Help — AIRE, SPID, Benefits and Administrative Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "help@resinaro.com",
  },
  serviceType: "Document preparation, consular liaison and administrative support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Practical help with AIRE registration, SPID setup, UK benefit applications, consular paperwork and general administrative tasks for Italians and migrants in the UK.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "30.00",
  },
};

export default function BureaucracyHelpPage() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Bureaucracy Help</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Cut through the red tape — Resinaro helps with AIRE, SPID, UK benefits and other official admin so you can get on with life.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column: detailed content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">
                Administrative processes can be confusing and time consuming. Resinaro provides clear, practical assistance to prepare documents, check eligibility, complete forms and liaise with public agencies where appropriate. The goal is to reduce delays and give you confidence that applications are correct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Core services</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AIRE registration checks and support to update consular records.</li>
                <li>SPID guidance and step-by-step assistance with identity verification.</li>
                <li>Help preparing UK benefit applications and signposting to local welfare support.</li>
                <li>Consular paperwork support: passport, CIE, citizenship and registries.</li>
                <li>Document checks, translations guidance and form completion support.</li>
                <li>Tailored letters and evidence bundles for councils, HMRC and other authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Why use Resinaro</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Practical experience with common consular and UK administrative processes.</li>
                <li>Clear checklists and step-by-step guidance to reduce errors and rework.</li>
                <li>Confidential handling of documents and secure communications.</li>
                <li>Community-focused support with concession options where needed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Typical process</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Enquiry:</strong> Complete the short form or email details and any documents.</li>
                <li><strong>Assessment:</strong> We review and provide a tailored checklist and next steps.</li>
                <li><strong>Support:</strong> We help complete forms, prepare evidence and advise on submission.</li>
                <li><strong>Follow up:</strong> We offer follow up support and signposting until the issue is resolved or referred to specialists.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Documents commonly required</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Passport or national ID.</li>
                <li>Proof of UK address (utility bill, tenancy agreement, council tax or bank statement).</li>
                <li>Any official letters or forms related to the request (Home Office, HMRC, council).</li>
                <li>Where relevant, birth or marriage certificates and translations if required.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                Where originals are needed we will explain how to present them or when certified copies are required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Timelines & expectations</h2>
              <p className="text-gray-700 mb-2">
                Initial document review and a guidance plan are typically delivered within 1 to 3 business days. External processing times (consulates, Home Office, HMRC, councils) vary and are outside our direct control. We aim to follow up and keep you informed.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Document review & checklist: 1–3 business days.</li>
                <li>Support for SPID/AIRE steps: varies by provider and consulate.</li>
                <li>Benefit application assistance: guidance provided quickly; processing times follow the relevant agency schedules.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Concessions, pricing and refunds</h2>
              <p className="text-gray-700 mb-2">
                Standard service fee is <strong>£30</strong>. Concessionary rates are available for people in financial hardship. Contact help@resinaro.com before booking to request a concessionary assessment.
              </p>
              <p className="text-gray-700">
                Refunds: If Resinaro fails to deliver the agreed service due to our error we will offer a full refund or a service credit. Refund requests should be emailed to help@resinaro.com and will be reviewed within 10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data protection & confidentiality</h2>
              <p className="text-gray-700">
                We handle documents securely and limit access to staff or volunteers who need them to deliver the service. We follow UK data protection principles. You may request deletion or access to your data after the case is closed. See our Privacy Policy for full details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Outcomes we deliver</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Complete checklist and evidence bundle ready for submission.</li>
                <li>Correctly completed forms and guidance on where and how to submit them.</li>
                <li>Follow-up notes and draft letters to agencies when required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro helped me update AIRE and set up SPID. The checklist was clear and the support saved me time.&quot; — Francesca
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
                &quot;They explained benefit options and helped me prepare the documents for my application.&quot; — Paolo
              </blockquote>
            </section>
          </div>

          {/* Right column: form and CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request Bureaucracy Help</h2>
              <p className="text-sm text-gray-700 mb-4">
                Complete the form with a short description of your need and upload any available documents. We will respond with a tailored plan and quote where applicable.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent administrative issues</h3>
              <p className="text-sm mb-3">
                If you have a time-sensitive issue affecting work, benefits or housing, email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> with &quot;URGENT&quot; in the subject and include preferred contact times.
              </p>
              <div className="flex gap-3">
                <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
                <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Gather any official letters or correspondence related to your issue.</li>
                <li>Have your passport or ID and proof of address ready.</li>
                <li>If asking about SPID or AIRE, note the consulate jurisdiction and any reference numbers.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ section */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What is SPID and why might I need it?</summary>
            <div className="mt-2 text-gray-700">
              SPID is a digital identity system used to access Italian public services online. It is often required for consular services, tax portals and some administrative processes. We guide you through the providers and identity verification options.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How do I update my AIRE registration?</summary>
            <div className="mt-2 text-gray-700">
              AIRE updates are performed via official consular channels. We can help you prepare the required documents and walk you through the consulate portal or form submission process.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can Resinaro fill forms for me?</summary>
            <div className="mt-2 text-gray-700">
              We can complete forms on your behalf with your explicit instruction and uploaded documents, but certain identity verification steps may need to be completed by the applicant directly. We will explain any steps that require your input.
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
