import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRE Registration Help | Resinaro — Update Italian Consular Records",
  description:
    "Assistance to register or update AIRE (Anagrafe degli Italiani Residenti all'Estero) from the UK. Step-by-step help, document checks and consulate guidance.",
  alternates: { canonical: "/services/aire-registration" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AIRE and why should I register?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AIRE is the register of Italian citizens living abroad. Registration ensures access to consular services, voting rights, and correct consular jurisdiction for documents such as the CIE and passport."
      }
    },
    {
      "@type": "Question",
      name: "Can Resinaro register me for AIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Resinaro provides guidance and document checks to help you complete AIRE registration. The final submission is normally made via the consular portal or in-person at the consulate; we will guide you through the required steps."
      }
    },
    {
      "@type": "Question",
      name: "What documents do I need to update my AIRE record?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Typical documents include passport or national ID, proof of UK address (utility bill, council tax, tenancy or bank statement) and any supporting documentation such as marriage certificates if you are updating family details."
      }
    },
    {
      "@type": "Question",
      name: "How long does an AIRE update take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Initial guidance and a checklist can be provided within a few business days. Processing times with the consulate vary by office; some updates are processed quickly while others may take several weeks."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIRE Registration & Updates",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "help@resinaro.com"
  },
  serviceType: "Consular registration assistance",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Practical help to register or update AIRE from the UK: document checks, consulate guidance, and step-by-step support for Italian citizens abroad."
};

export default function Page() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-4xl mx-auto pt-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">AIRE Registration & Updates</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Assistance to register or update your AIRE record so you can access consular services and official updates while living in the UK.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Why AIRE matters</h2>
              <p className="text-gray-700">
                AIRE (Anagrafe degli Italiani Residenti all&apos;Estero) registers Italian citizens living abroad with their local consulate. Keeping AIRE up to date ensures you receive consular communications, can access services such as passport and CIE renewals, and are assigned to the correct consulate for your address.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who should use this service</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Italian citizens who have recently moved to the UK and need to register with AIRE.</li>
                <li>People who changed address, name, marital status or family details and need to update consular records.</li>
                <li>Clients preparing to apply for consular services that require AIRE to be correct, such as CIE, passport renewals or citizenship matters.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we do</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Confirm the consulate that covers your UK address and the correct submission route.</li>
                <li>Provide a consulate-specific checklist and document templates where needed.</li>
                <li>Review your documents and guide you through the online submission or in-person appointment steps.</li>
                <li>Advise on common problems, such as mismatched names or missing proof of address.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Documents typically required</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Italian passport or national identity card.</li>
                <li>Proof of UK address: tenancy agreement, council tax bill, recent utility bill or bank statement.</li>
                <li>Marriage certificate or birth certificate for family updates (translated if required).</li>
                <li>Any previous consular correspondence or reference numbers if available.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                Requirements vary by consulate. We prepare a tailored checklist for your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Process & timelines</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Initial review:</strong> We check documents and confirm the consulate within 1–3 business days.</li>
                <li><strong>Checklist & guidance:</strong> We provide step-by-step instructions and any required templates.</li>
                <li><strong>Submission support:</strong> We assist with online portal submission or prepare documents for an in-person appointment.</li>
                <li><strong>Follow up:</strong> We advise on expected processing times and help with follow up if additional information is requested by the consulate.</li>
              </ol>
              <p className="text-sm italic text-green-800 mt-2">
                External processing times are set by individual consulates and may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Common issues we solve</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mismatched personal data between documents.</li>
                <li>Missing proof of address or insufficient evidence.</li>
                <li>Unclear consulate jurisdiction for your UK address.</li>
                <li>Difficulty using official consular portals; we provide guided steps and screenshots.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Fees, concessions and refunds</h2>
              <p className="text-gray-700 mb-2">
                Our standard AIRE assistance package is quoted at booking depending on the complexity of the update. Concessionary rates are available for those in financial hardship; please enquire before booking.
              </p>
              <p className="text-gray-700">
                If Resinaro fails to deliver an agreed service due to our error we will consider a refund or credit. Refund requests should be sent to help@resinaro.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data protection & confidentiality</h2>
              <p className="text-gray-700">
                We handle personal data securely and only use it to deliver the service. Documents are stored securely and access is limited to those delivering support. You may request deletion of your information after your case is closed; see our Privacy Policy for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Helpful links</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <a href="https://serviziconsolarionline.esteri.it/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">
                    FAST IT — Consular online services (AIRE)
                  </a>
                </li>
                <li>
                  <a href="https://prenotami.esteri.it/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">
                    Prenot@Mi — consular booking platform
                  </a>
                </li>
                <li>
                  <a href="/community/bureaucracy-guides/aire-registration-uk" className="underline text-green-800">
                    Resinaro: AIRE registration guide (localised tips)
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Right: form and CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request AIRE Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Use the form to tell us your current UK address, consulate area if known, and upload any available documents. We will respond with a tailored checklist and next steps.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent consular issues</h3>
              <p className="text-sm mb-3">
                If you have a time-sensitive consular issue (for example an imminent travel or legal deadline) email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> with &quot;AIRE URGENT&quot; in the subject. We will prioritise triage where possible.
              </p>
              <div className="flex gap-3">
                <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
                <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have your passport or national ID ready.</li>
                <li>Gather proof of UK address (tenancy, council tax, utility or bank statement).</li>
                <li>If updating family details, have birth or marriage certificates available.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What happens if I do not register with AIRE?</summary>
            <div className="mt-2 text-gray-700">
              Not registering may complicate consular communications and access to services. It can also affect the consulate assigned to process your requests for documents and certificates. We recommend registering to ensure correct administrative handling.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can I update my AIRE record online?</summary>
            <div className="mt-2 text-gray-700">
              Many consulates provide online channels for AIRE updates via FAST IT or their own portals. Where online submission is not available we will advise the correct documentary route and any need for an in-person appointment.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Do you handle citizenship registrations through AIRE?</summary>
            <div className="mt-2 text-gray-700">
              Resinaro assists with document preparation and guidance related to consular matters, including documentation that supports citizenship processes. For formal legal representation in citizenship cases we will signpost to qualified legal professionals where required.
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
