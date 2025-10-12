import CieForm from "../../../../components/CieForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italian CIE (ID Card) Help — Booking & Documents | Resinaro",
  description:
    "Friendly help to apply for or renew the Italian Electronic ID Card (CIE) from the UK. £35 admin support. Consulate/government fees paid separately. No guarantees.",
  alternates: { canonical: "/services/id-card-cie-assistance" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I apply for a CIE from the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Usually yes. Italian citizens resident in the UK typically apply via their local consulate. If your AIRE is up to date, we can guide booking, documents and biometrics.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need AIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most consulates require correct AIRE registration to process CIE applications from abroad. We’ll show you how to check/update AIRE before you book.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Timelines vary by consulate and delivery method. Booking, biometrics and card production can take several weeks, sometimes longer in busy periods.",
      },
    },
    {
      "@type": "Question",
      name: "Is CIE enough for travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "CIE is widely accepted in the EU for ID and some travel. Always check airline and destination rules. For broader international travel, a passport is usually required.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian CIE (ID Card) Assistance",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Consular assistance, appointment booking and document preparation",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Calm, step-by-step help to obtain or renew the Italian Electronic ID Card (CIE) from the UK: document checks, booking support, biometric guidance and follow-up. £35 admin fee; official consulate fees separate. No guarantees.",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "35",
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <img
            src="/images/cie-hero-3840x1280.png"
            alt="Italian Electronic ID Card (CIE) — support for UK applicants"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay intro with disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Italian CIE (ID Card) — Booking & Document Help (£35)
            </h1>
            <p className="mt-2 text-green-800">
              We make the CIE process simple: prepare documents, understand biometrics, and book the correct consulate slot.
              Our fee is <strong>£35</strong> for admin support only.{" "}
              <em>Consulate/government fees are separate</em> and paid to the authority. We are not the Consulate;{" "}
              <strong>no guarantees</strong> of availability or outcome. Prefer email? Contact{" "}
              <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">What you get</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li>Eligibility & AIRE guidance</li>
                  <li>Consulate-specific checklist + photo/biometrics tips</li>
                  <li>Booking help on official portals</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h3 className="font-semibold">Important</h3>
                <p className="text-sm text-gray-800">
                  We’re an independent admin support service — not legal advisers and not affiliated with consulates. Decisions and availability are outside our control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form near the top for mobile */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pt-6 md:pt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Start here — quick CIE form</h2>
          <p className="text-sm text-gray-700 mb-4">
            A calm, friendly form. One step at a time — email is fine if you prefer:{" "}
            <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
          </p>
          <CieForm />
        </div>
      </section>

      {/* Helpful info — short & scannable */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What we do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Check eligibility and AIRE status; show how to fix issues</li>
              <li>Give a consulate-specific checklist and image/biometric guidance</li>
              <li>Assist with booking via Prenot@Mi or the relevant portal</li>
              <li>Explain collection/delivery options and typical timelines</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What you may need</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">Common items</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>Italian passport (or expired, where accepted)</li>
                  <li>Proof of UK address (≤3 months)</li>
                  <li>AIRE confirmation or update</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">If applicable</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>Biometric photos (consulate spec)</li>
                  <li>Parental ID & consent for minors</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Requirements vary by consulate — we’ll tailor your checklist and suggest alternatives if something’s missing.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Urgent?</h3>
            <p className="text-sm">
              Email <a className="underline text-amber-300" href="mailto:resinaro@proton.me?subject=CIE%20Urgent">resinaro@proton.me</a>{" "}
              with subject <strong>“CIE Urgent”</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">Before you start</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Confirm AIRE status and your consulate jurisdiction</li>
              <li>Have ID and proof of UK address to hand</li>
              <li>Check photo guidance for biometrics</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQs (short) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">FAQs</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">What’s the difference between CIE and passport?</summary>
          <div className="mt-2 text-gray-700">
            CIE is an electronic ID card used for identification in Italy/EU and some travel. A passport is usually required for most international travel.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Do you help with minors?</summary>
          <div className="mt-2 text-gray-700">
            Yes — minors often need parental consent and specific documents. We provide a clear checklist.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
