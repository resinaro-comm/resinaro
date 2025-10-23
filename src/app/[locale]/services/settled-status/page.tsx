import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settled Status Support | EU Settlement Scheme Help — Resinaro",
  description:
    "Practical support for EU Settlement Scheme (EUSS) applications, status checks and appeals. Help for Italians and other migrants to secure their right to live and work in the UK.",
  alternates: { canonical: "/services/settled-status-support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who should apply for settled or pre-settled status?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "People who lived in the UK before the end of the EU Settlement Scheme deadline, and family members of qualifying people, should check eligibility. If in doubt, contact us for a personalised check.",
      },
    },
    {
      "@type": "Question",
      name: "Can Resinaro submit the EUSS application for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide guided support including document preparation, form review and step-by-step assistance. We do not replace the applicant on the Home Office form but we can help complete and check the application and advise on evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my application is refused?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "If an application is refused, applicants may have administrative review or appeal rights depending on the reason for refusal. We assist with next steps, evidence review and signposting to legal advice where necessary.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Timings vary. Simple status checks and guidance can be provided within a few business days. Home Office decisions typically take several weeks; timescales are set by the Home Office and may change.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Settled Status Support (EU Settlement Scheme)",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Immigration status support and document preparation",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Support with EU Settlement Scheme applications, status checks, appeals advice and evidence preparation for Italians and other migrants in the UK.",
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-4xl mx-auto pt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Settled Status Support</h1>
          <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
            Help with EU Settlement Scheme applications, status checks and appeals. We support you at every stage to protect your right to live and work in the UK.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column: details */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">
                The EU Settlement Scheme enables qualifying EU, EEA and Swiss citizens and their family members to secure immigration status in the United Kingdom. Resinaro helps applicants understand eligibility, prepare evidence and complete the application process with confidence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who this is for</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>People who lived in the UK prior to the EUSS deadline and their family members.</li>
                <li>People unsure if they have settled status or who have lost access to confirmation emails.</li>
                <li>Applicants who received a refusal or an adverse decision and need help with review or appeal options.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we do</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Eligibility checks and personalised advice.</li>
                <li>Review of identity and residence evidence and guidance to improve application strength.</li>
                <li>Step-by-step support to complete and check the Home Office application.</li>
                <li>Assistance with retrieving lost confirmation or accessing the digital status service.</li>
                <li>Advice on administrative review and appeal steps if an application is refused, and signposting to legal advice where necessary.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Documents & evidence</h2>
              <p className="text-gray-700 mb-2">Typical documents that demonstrate residence and identity include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Passport or national identity document.</li>
                <li>Pay slips, employer letters, P60 or P45 showing UK employment.</li>
                <li>Tenancy agreements, council tax, utility bills or bank statements.</li>
                <li>School or college enrolment letters for dependants.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                If you lack conventional documents, we can advise on alternative evidence and cover letters to explain circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Process & timelines</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Initial check:</strong> We assess eligibility and required evidence within 1–3 business days.
                </li>
                <li>
                  <strong>Preparation:</strong> We help assemble and verify documents and prepare the application details.
                </li>
                <li>
                  <strong>Submission support:</strong> We guide you through submission and confirm required follow up steps.
                </li>
                <li>
                  <strong>Follow up & outcomes:</strong> Home Office response times vary. We will advise on next steps, including review or appeal where relevant.
                </li>
              </ol>
              <p className="text-sm italic text-green-800 mt-2">
                These timelines are guidance only. Final decision times are set by the Home Office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Appeals, reviews and complaints</h2>
              <p className="text-gray-700 mb-2">
                If an application is refused we will explain the reason for the decision and the remedies available. This may include requesting an administrative review or pursuing an appeal. We provide evidence review, drafting assistance and can signpost to specialist immigration solicitors for complex cases.
              </p>
              <p className="text-sm text-gray-600">
                Where a complaint about our service is required, see our Complaints procedure or email resinaro@proton.me.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data protection & confidentiality</h2>
              <p className="text-gray-700">
                We handle personal data responsibly. Documents and personal details are stored securely and used only for the purpose of delivering the service. You may request deletion or access to your data after case closure. See our Privacy Policy for full details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Fees, concessions and refunds</h2>
              <p className="text-gray-700 mb-2">
                Resinaro provides fee-based support for document checks and application assistance. Contact resinaro@proton.me for a quote. We offer concessionary support in cases of financial hardship; please enquire before booking.
              </p>
              <p className="text-gray-700">
                If we fail to deliver the agreed service due to our error we will consider a refund or credit. Refund requests should be emailed to resinaro@proton.me.
              </p>
            </section>
          </div>

          {/* Right column: form & CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request Settled Status Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Use the form to provide basic details and upload supporting documents. We will respond with a tailored plan and quote.
              </p>
              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent enquiries</h3>
              <p className="text-sm mb-3">
                If you are at risk of losing access to work or services, email <a href="mailto:resinaro@proton.me" className="underline text-amber-300">resinaro@proton.me</a> and include &quot;Urgent&quot; in the subject line. We will prioritise triage where possible.
              </p>
              <div className="flex gap-3">
                <Link href={p(locale, "/contact")} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</Link>
                <Link href={p(locale, "/services")} className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you book</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have your passport or ID ready.</li>
                <li>Gather any UK residence evidence you have (payslips, tenancy, bills).</li>
                <li>Include copies of any Home Office correspondence in the upload area.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQs block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">I applied but I cannot find my confirmation. What should I do?</summary>
            <div className="mt-2 text-gray-700">
              Contact us and supply any reference numbers or screenshots you have. We can help check the digital status service and advise on retracing the application or making a new claim where appropriate.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can I apply on behalf of a family member?</summary>
            <div className="mt-2 text-gray-700">
              You may assist family members with their application but the Home Office requires the applicant to confirm identity themselves in many cases. We can advise on the correct approach and supporting letters.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Do you provide legal representation?</summary>
            <div className="mt-2 text-gray-700">
              Resinaro offers practical support, evidence checks and assistance with applications. For formal legal representation or complex appeals we will signpost to regulated immigration advisers or solicitors.
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
