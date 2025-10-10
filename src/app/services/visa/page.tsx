import VisaForm from "../../../components/VisaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Appointment Support | Resinaro",
  description:
    "Simple, affordable help (£35) for Italians in the UK to book visa/biometrics appointments and prepare documents. We guide you step-by-step and reduce mistakes.",
  alternates: { canonical: "/services/visa-booking" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you guarantee a visa decision or appointment date?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Decisions and appointment availability are controlled by the relevant authority (e.g. UKVI, TLScontact, VFS). We help you locate and book available slots and prepare a complete application to reduce errors.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this service for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Italians living in or travelling to the UK who need help booking a visa/biometrics appointment or preparing documents (e.g. work, study, family, visit visas). We also support non-EU family members connected to Italian citizens applying for Schengen/Italy visas.",
      },
    },
    {
      "@type": "Question",
      name: "Is this legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. We provide administrative support and document guidance only. We are not solicitors or immigration advisers and do not offer legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "What if I’m missing a document?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We’ll identify what’s missing and suggest acceptable alternatives when possible, plus simple steps to obtain what’s required before your appointment.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The booking & document-check service is a flat fee of £35 per application. Government/consulate fees are separate and paid directly to the authority.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Appointment Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
  email: "resinaro@proton.me",
  },
  serviceType:
    "Visa/biometrics appointment booking and document preparation support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Affordable help (£35) for Italians in the UK to book visa/biometric appointments and prepare documents for UK visas and Italy/Schengen applications for eligible family members.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "35",
    availability: "https://schema.org/InStock",
  },
};

export default function VisaServicePage() {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Visa Appointment Support</h1>
        <p className="italic text-lg text-green-800 mb-6">
          Straightforward help for Italians to book visa/biometrics appointments
          and prepare documents in the UK — flat fee <strong>£35</strong>.
        </p>
        <div className="max-w-lg mx-auto mb-8">
          <img
            src="/images/service-visa.png"
            alt="Visa appointment support"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left column: details */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              Resinaro helps you navigate visa systems with clear steps, correct
              documents and stress-free booking. We focus on UK visa journeys
              (work, study, family, visit) and, where relevant, Italy/Schengen
              applications for eligible non-EU family members of Italian
              citizens. We reduce common mistakes and save you time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">What’s included (£35)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Assessment of your situation and the correct application path.</li>
              <li>Tailored document checklist with specific evidence wording.</li>
              <li>Account setup and guidance on official portals (UKVI, TLS, VFS).</li>
              <li>Appointment search & booking support at your nearest centre.</li>
              <li>Pre-submission review to catch common errors before you pay.</li>
              <li>Email summary with next steps and what to bring on the day.</li>
            </ul>
            <p className="text-sm italic text-green-800 mt-2">
              Government/consulate fees, courier, priority or biometrics fees
              are separate and paid directly to the authority/provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Documents you may need</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Valid passport (with required blank pages and validity).</li>
              <li>Proof of UK address (council tax, utility bill, bank statement).</li>
              <li>
                Purpose evidence (e.g. job offer/CoS, CAS for students, family
                relationship proof, travel plan for visits).
              </li>
              <li>Financial evidence (bank statements, payslips, sponsor letter).</li>
              <li>Passport photos & any required forms/consent for minors.</li>
            </ul>
            <p className="text-sm italic text-green-800 mt-2">
              We’ll identify exactly what applies to your route and flag
              acceptable alternatives if something is missing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Typical process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Enquiry:</strong> Submit the form with your situation and
                target visa type.
              </li>
              <li>
                <strong>Checklist:</strong> Receive a tailored list and portal setup help.
              </li>
              <li>
                <strong>Booking:</strong> We assist in finding and booking a biometrics slot.
              </li>
              <li>
                <strong>Pre-submit check:</strong> Final review to reduce mistakes.
              </li>
              <li>
                <strong>On-the-day:</strong> You get a one-page brief of what to bring and do.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Timelines & availability</h2>
            <p className="text-gray-700 mb-2">
              Appointment availability is managed by the official provider and
              can vary by city and season. We’ll advise current patterns and any
              priority options where available.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Initial response: usually within 1–2 business days.</li>
              <li>Booking attempts: ongoing until an offered slot is secured.</li>
              <li>Support window: reasonable follow-up for 4 weeks post-booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Fees, concessions & refunds</h2>
            <p className="text-gray-700 mb-2">
              The service fee is a flat <strong>£35</strong> per application. If
              you’re facing financial hardship, email{" "}
              <a href="mailto:resinaro@proton.me" className="underline">
                resinaro@proton.me
              </a>{" "}
              and we’ll try to help.
            </p>
            <p className="text-gray-700">
              <strong>Refunds:</strong> If we fail to deliver the agreed admin
              support due to our error, we’ll refund you or credit another
              Resinaro service. Email your booking reference and details; we
              reply within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Compliance & disclaimer</h2>
            <p className="text-gray-700">
              We are not affiliated with UKVI, TLScontact, VFS or any consulate.
              We provide administrative assistance and document guidance only —
              not legal advice and not representation. Decisions rest with the
              relevant authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Results you can expect</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Clear, personalised checklist and portal setup.</li>
              <li>Faster, cleaner submission with fewer avoidable errors.</li>
              <li>Appointment secured as soon as a slot is available.</li>
            </ul>
          </section>
        </div>

        {/* Right column: form and CTAs */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Book visa support (£35)</h2>
            <p className="text-sm text-gray-700 mb-4">
              Complete the form and we’ll confirm next steps and any required
              documents. You’ll only pay our fee once we accept your booking.
            </p>

            <VisaForm />
          </div>

          <div className="bg-green-900 text-white rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Urgent case?</h3>
            <p className="text-sm mb-4">
              Email{" "}
              <a
                href="mailto:resinaro@proton.me?subject=Urgent%20visa%20support"
                className="underline text-amber-300"
              >
                resinaro@proton.me
              </a>{" "}
              with subject “Urgent visa support” and your location.
            </p>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center"
              >
                Contact
              </a>
              <a
                href="/services"
                className="border border-white px-4 py-2 rounded-lg w-full text-center"
              >
                All services
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
            <h4 className="font-semibold mb-2">Before you book</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Know your visa route (work, study, family, visit, etc.).</li>
              <li>Have ID and proof of UK address to hand.</li>
              <li>Gather any sponsor/employer/education letters if relevant.</li>
              <li>Minors may need parental consent and extra documents.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQ section */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">
          Frequently asked questions
        </h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">
            Can you complete the forms for me?
          </summary>
          <div className="mt-2 text-gray-700">
            We guide you step-by-step and check your entries. Where systems
            allow, we can assist screen-share to reduce errors before
            submission.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">
            Do you help with Italy/Schengen visas for my non-EU family?
          </summary>
          <div className="mt-2 text-gray-700">
            Yes—where eligible, we advise documents and booking at TLS/VFS for
            Italy applications and prepare a simple pack for the appointment.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">
            What happens if no appointments are available?
          </summary>
          <div className="mt-2 text-gray-700">
            We’ll monitor and attempt booking when slots open, advise on
            alternative centres where possible, and share timing patterns to
            improve your chances.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </main>
  );
}
