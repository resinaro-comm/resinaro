import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Insurance (NIN) Support | Resinaro",
  description: "Step-by-step help with National Insurance Number applications and replacements for Italians and migrants in the UK.",
  alternates: { canonical: "/services/nin-support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to receive a NIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary. Initial HMRC verification can take a few days to several weeks. We help prepare documents and follow up to reduce avoidable delays."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an appointment to apply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most applicants start the process by applying online or by phone with HMRC. We support you with the application and will contact HMRC where appropriate."
      }
    },
    {
      "@type": "Question",
      "name": "What if I do not have proof of address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We advise on acceptable alternatives such as council tax letters, benefit letters or NHS correspondence. We can help obtain or prepare a cover letter explaining your circumstances."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "National Insurance Number (NIN) Support",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
    "email": "help@resinaro.com"
  },
  "serviceType": "Document support and liaison with HMRC",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "description": "Practical support to apply for a new National Insurance Number or recover a lost/forgotten number. We help prepare documents, contact HMRC and explain timelines.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "GBP",
    "price": "20.00"
  }
};

export default function NINSupportPage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">National Insurance (NIN) Support</h1>
        <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
          Practical, step-by-step help for National Insurance Number applications and replacements.
        </p>
      </section>

      <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left column: Details */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              We support Italians and other migrants to obtain or recover a National Insurance Number (NIN). Our service reduces uncertainty and saves time by making sure applications are complete and by liaising with HMRC where needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">What is included</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Review of your documents and a checklist tailored to your case.</li>
              <li>Assistance drafting or completing the HMRC application or replacement request.</li>
              <li>Contacting HMRC on your behalf where appropriate and following up.</li>
              <li>Written summary of next steps and expected timelines.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Documents you will need</h2>
            <p className="text-gray-700 mb-2">Gather where possible before booking so we can work efficiently:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Passport or national identity document.</li>
              <li>Proof of UK address: council tax, utilities, bank statement or NHS letter.</li>
              <li>Employment details if you already have an offer or appointment.</li>
            </ul>
            <p className="text-sm italic text-green-800 mt-2">
              If you do not have standard address proof we will advise on acceptable alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How we work: simple process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Book:</strong> Use the form to tell us about your need and availability.
              </li>
              <li>
                <strong>Prepare:</strong> We review documents and confirm the application approach.
              </li>
              <li>
                <strong>Submit & follow up:</strong> We help complete the application and contact HMRC as required until the matter is resolved.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Expected timelines</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Initial review and guidance: within 2 business days of booking.</li>
              <li>Application processing by HMRC: typically several days to a few weeks; this is set by HMRC and outside our direct control.</li>
              <li>Follow up attempts: we will make reasonable follow up calls or emails for up to 4 weeks after submission as part of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Who is this for</h2>
            <p className="text-gray-700">
              This service is for people who need a first National Insurance Number, people who have lost their number and require recovery, and people who need help understanding HMRC correspondence about the NIN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Price, concessions and refunds</h2>
            <p className="text-gray-700 mb-2">
              The standard service fee is <strong>£20</strong>. Concessionary rates are available on request for people in financial hardship. Contact help@resinaro.com to ask about concessions before booking.
            </p>
            <p className="text-gray-700">
              Refunds: If we cannot provide the agreed service due to our error, we will offer a full refund or a credit toward other Resinaro services. Refund requests should be emailed to help@resinaro.com and will be reviewed within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data protection and confidentiality</h2>
            <p className="text-gray-700">
              We treat personal data with care. Documents you provide are used only to deliver the service and are stored securely. You may ask us to remove your data after the completion of the case. See our Privacy Policy for full details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Outcomes we deliver</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Complete HMRC application or recovery request prepared and submitted.</li>
              <li>Clear instructions for next steps and documentation for employers.</li>
              <li>Follow up record and written summary of communications with HMRC where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
            <div className="space-y-3 text-gray-700">
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Resinaro made the NIN process straightforward. They explained what I needed and helped me follow up with HMRC.&quot; — Martina
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Quick, professional and supportive. I got my number with minimal stress.&quot; — Roberto
              </blockquote>
            </div>
          </section>
        </div>

        {/* Right column: form and CTA */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Book NIN Support</h2>
            <p className="text-sm text-gray-700 mb-4">
              Complete the form and we will contact you to confirm the booking and next steps.
            </p>

            {/* ServiceForm is expected to be a client component */}
            <ServiceForm />
          </div>

          <div className="bg-green-900 text-white rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Need urgent help?</h3>
            <p className="text-sm mb-4">
              Email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> and mark the message &quot;Urgent&quot; if the matter is time sensitive.
            </p>
            <div className="flex gap-3">
              <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
              <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
            <h4 className="font-semibold mb-2">Before you book</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Have your ID and address proof ready.</li>
              <li>Expect an introductory call or email to confirm details.</li>
              <li>Bring any HMRC correspondence if you have it.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQs section (interactive details) */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">What is a National Insurance Number?</summary>
          <div className="mt-2 text-gray-700">
            A National Insurance Number is a unique identifier used by HMRC for National Insurance and tax records.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Can you guarantee a NIN will be issued?</summary>
          <div className="mt-2 text-gray-700">
            We cannot guarantee HMRC outcomes. We will however prepare applications and follow up on your behalf to maximise the chance of a timely positive outcome.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">How do I request a concession or refund?</summary>
          <div className="mt-2 text-gray-700">
            Email help@resinaro.com to request a concession before booking. For refunds, contact help@resinaro.com and include your booking reference and reason.
          </div>
        </details>
      </section>

      {/* JSON-LD for FAQ and Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
