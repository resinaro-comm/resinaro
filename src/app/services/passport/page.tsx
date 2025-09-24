import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passport & Consular Services | Resinaro",
  description:
    "Fast, transparent support for booking Italian passport appointments and consular services in the UK. Help with first applications, renewals and urgent cases.",
  alternates: { canonical: "/services/passport-consular" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Resinaro guarantee a passport appointment date?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We cannot guarantee consulate appointment availability. We monitor appointment windows, advise on fast-track options when available and help prepare a complete application to reduce the chance of rejection.",
      },
    },
    {
      "@type": "Question",
      name: "What if my passport is lost or stolen?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide step-by-step guidance for lost or stolen passports and can assist with urgent applications and local police reporting where necessary.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle minors and first-time applicants?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We support first-time applications for minors and adults. Some consulates require parental consent and additional documents for minors; we will advise on the exact requirements.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Passport & Consular Services",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "help@resinaro.com",
  },
  serviceType: "Passport appointment booking and consular support",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Support for booking Italian passport appointments in the UK, help with first-time applications, renewals, and urgent lost or stolen passport cases. Typical fees range from £40 to £60 depending on complexity.",
};

export default function PassportServicePage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Passport & Consular Services</h1>
        <p className="italic text-lg text-green-800 mb-6">
          Fast, transparent support for booking Italian passport appointments and related consular services in the UK.
        </p>
      </section>

      <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left column: details */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              Resinaro helps Italians and other migrants to navigate consular processes in the UK. We focus on preparing complete applications, finding appointment slots where possible, and supporting urgent or complex cases with clear guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">What is included</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Help identifying the correct consulate and booking options for your area.</li>
              <li>Document checks and a tailored checklist for your case.</li>
              <li>Support with first-time applications and renewals, including biometric photo guidance.</li>
              <li>Advice and steps for urgent, lost or stolen passport cases.</li>
              <li>Clear guidance on timelines and what to expect at the appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Documents you will need</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proof of UK address (tenancy agreement, council tax, utility bill or bank statement).</li>
              <li>Current passport if renewing, or birth certificate for first-time adult applicants where required.</li>
              <li>Two biometric passport photos that meet consulate specifications.</li>
              <li>Parental consent documentation for minors where applicable.</li>
            </ul>
            <p className="text-sm italic text-green-800 mt-2">
              If you are missing a specific document we will advise on acceptable alternatives or simple routes to obtain them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Typical process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Enquiry & booking:</strong> Use the booking form to describe the case and upload available documents.
              </li>
              <li>
                <strong>Document check:</strong> We review materials and confirm what is required for submission.
              </li>
              <li>
                <strong>Appointment & submission support:</strong> We advise on booking options and help prepare the application pack.
              </li>
              <li>
                <strong>Follow up:</strong> We provide a summary of next steps and assist with follow up where appropriate.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Timelines & availability</h2>
            <p className="text-gray-700 mb-2">
              Consulate appointment availability is managed by the consulate and can vary widely. We will advise on current waiting times and on expedited options where available.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Initial document review: typically within 2 business days.</li>
              <li>Appointment booking attempts: dependent on consulate availability.</li>
              <li>Support and follow up: we will assist with reasonable follow up for up to 4 weeks after the booking as part of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Fees, concessions and refunds</h2>
            <p className="text-gray-700 mb-2">
              Typical service fees range from <strong>£40</strong> to <strong>£60</strong> depending on complexity and urgency. Concessions are available on request for people facing financial hardship. Contact help@resinaro.com before booking to discuss a concession.
            </p>
            <p className="text-gray-700">
              Refunds: If we fail to deliver the service agreed due to our error, we will offer a full refund or a credit for other Resinaro services. Send refund requests to help@resinaro.com with your booking reference; we will respond within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data protection & confidentiality</h2>
            <p className="text-gray-700">
              Documents and personal data you provide are used only to deliver the agreed service and are stored securely. You can request removal of your personal data after the case is closed. See our Privacy Policy for full details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Outcomes we deliver</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Prepared application packs ready for consulate submission.</li>
              <li>Assistance locating appointment options and practical advice to improve success rates.</li>
              <li>Clear written guidance to take to consulate appointments and for employers where needed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
            <div className="space-y-3 text-gray-700">
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Resinaro helped me navigate the consulate booking system and prepared my application so I felt confident at my appointment.&quot; — Silvia
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Practical, timely and professional support when my passport was lost. They helped me understand the immediate steps and assisted with the application.&quot; — Andrea
              </blockquote>
            </div>
          </section>
        </div>

        {/* Right column: form and CTAs */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Book passport support</h2>
            <p className="text-sm text-gray-700 mb-4">
              Complete the form and we will contact you to confirm next steps and any fee details.
            </p>

            <ServiceForm />
          </div>

          <div className="bg-green-900 text-white rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Urgent cases</h3>
            <p className="text-sm mb-4">
              For urgent or time-sensitive passport issues email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> and include &quot;Urgent&quot; in the subject line.
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
              <li>Bring any consulate correspondence you have.</li>
              <li>Minors may need parental consent and additional documents.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQ section */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">How do I replace a lost passport?</summary>
          <div className="mt-2 text-gray-700">
            Report the loss to local police if required, collect any reference or report numbers, and contact the consulate for replacement procedures. We can guide you through the required evidence and help prepare the documentation.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Can you book appointments for me directly?</summary>
          <div className="mt-2 text-gray-700">
            We use official consulate booking systems and monitoring tools to find available slots and advise on where to apply. Where direct booking is possible we will assist, but appointment availability remains managed by the consulate.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Are fees refundable?</summary>
          <div className="mt-2 text-gray-700">
            Refunds are provided if Resinaro fails to deliver the agreed service due to our error. Refund requests should be emailed to help@resinaro.com with the booking reference and reason.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
