import VisaForm from "../../../components/VisaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Help (UK) — Booking & Documents | Resinaro",
  description:
    "Friendly visa appointment & document support for Italians in the UK. Flat fee £35 (admin only). Official visa fees paid to the provider. No guarantees.",
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
          "No. Decisions and appointment availability are controlled by the relevant authority (e.g., UKVI, TLScontact, VFS). We help you locate and book slots and prepare a clean application to reduce errors.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this service for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Italians in the UK who need help booking a visa/biometrics appointment or preparing documents (work, study, family, visit). We also support non-EU family members connected to Italian citizens with Italy/Schengen applications, where eligible.",
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
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our admin support is a flat fee of £35 per application. Government/consulate/provider fees are separate and paid directly on the official portal.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Appointment & Document Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Visa/biometrics appointment booking and document preparation support",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Clear, friendly help for booking visa/biometric appointments and preparing documents. £35 admin fee; official visa fees paid to the provider. No guarantees.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "35",
    availability: "https://schema.org/InStock",
  },
};

export default function VisaServicePage() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <img
            src="/images/service-visa.png"
            alt="Visa appointment and document support for Italians in the UK"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay intro + price disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Visa Appointment & Document Help (£35)
            </h1>
            <p className="mt-2 text-green-800">
              We make booking and paperwork simple. You pay <strong>£35</strong> for our admin support only.{" "}
              <em>Official visa fees are separate</em> and paid to the provider (UKVI/TLS/VFS) after we guide you.{" "}
              No guarantees of availability or outcome.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">What you get</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li>Route check & tailored document list</li>
                  <li>Portal setup (UKVI/TLS/VFS) + booking support</li>
                  <li>Pre-submit review to reduce mistakes</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h3 className="font-semibold">Important</h3>
                <p className="text-sm text-gray-800">
                  We are <strong>not</strong> UKVI/TLS/VFS and do not provide legal advice. Prefer email? Send docs to{" "}
                  <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form near the top for mobile */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pt-6 md:pt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Start here — quick form</h2>
          <p className="text-sm text-gray-700 mb-4">
            A calm, friendly form. One step at a time — and email is always an option if you prefer.
          </p>
          <VisaForm />
        </div>
      </section>

      {/* Helpful info (short & scannable) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What’s included</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Assessment of your situation and the correct application path</li>
              <li>Tailored checklist with specific evidence wording</li>
              <li>Account setup and guidance on official portals</li>
              <li>Appointment search & booking support at your nearest centre</li>
              <li>Pre-submission review to catch common errors</li>
              <li>Email summary with next steps and what to bring</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Government/consulate fees, courier, priority or biometrics fees are separate and paid to the provider.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What you may need</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">Common items</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>Valid passport</li>
                  <li>Proof of UK address (≤3 months)</li>
                  <li>Financial evidence</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Route specific</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>Work: job offer/CoS</li>
                  <li>Study: CAS/offer letter</li>
                  <li>Family/visit: relationship & travel plan</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              We’ll confirm the exact list and suggest alternatives if something is missing.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Urgent?</h3>
            <p className="text-sm">
              Email <a className="underline text-amber-300" href="mailto:resinaro@proton.me?subject=Urgent%20visa%20support">resinaro@proton.me</a>{" "}
              with subject <strong>“Urgent visa support”</strong> and your location.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">Before you start</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Know your target visa (work, study, family, visit, etc.)</li>
              <li>Have ID and proof of UK address to hand</li>
              <li>Gather any sponsor/employer/education letters</li>
              <li>Minors may need consent & extra documents</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQ (short) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">FAQs</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Can you complete the forms for me?</summary>
          <div className="mt-2 text-gray-700">
            We guide you step-by-step and check entries. Where portals allow, we’ll assist via screen-share to reduce errors before payment.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">What if no appointments are available?</summary>
          <div className="mt-2 text-gray-700">
            We monitor and attempt booking when slots open, advise on alternative centres where possible, and share timing patterns to improve your chances.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
