import AireForm from "../../../../src/components/AireForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRE Registration Help (UK) — Fast, Friendly Support | Resinaro",
  description:
    "Simple help to register or update AIRE from the UK. £35 for one or a couple, £50 for 3+ in a household. We guide the steps and review documents. Independent admin support; no guarantees.",
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
          "AIRE is the register of Italian citizens living abroad. Keeping it updated helps with consular services (passport/CIE), voting rights and correct consular jurisdiction.",
      },
    },
    {
      "@type": "Question",
      name: "Do you register me directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide admin support and document checks for your AIRE submission. The final decision and processing are done by the consulate via its portal or in person.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We can share a checklist within a few business days. Consulate processing times vary by office and can take several weeks.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIRE Registration & Updates",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Consular registration assistance",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Step-by-step help to register or update AIRE: document checks, portal guidance and friendly support. £35 for one/couple; £50 for families of 3+.",
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
          <Image
            src="/images/aire-registration.png"
            alt="AIRE registration — Italian consular records update"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Overlay intro with pricing + disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              AIRE Registration & Updates — Friendly Help
            </h1>
            <p className="mt-2 text-green-800">
              We make AIRE simple for UK residents: we share a clear checklist, guide the portal steps
              and help you avoid common mistakes. <strong>£35</strong> for one person or a couple,
              <strong> £50</strong> for a household of 3+. We’re an independent admin support service —
              not the Consulate and not legal advisers — so <strong>no guarantees</strong> of processing
              times or outcomes. Prefer email? Write to{" "}
              <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h3 className="font-semibold">Pricing</h3>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li><strong>£35</strong> — single person or a couple</li>
                  <li><strong>£50</strong> — family / group of 3+</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Price is per household booking. Consulate decisions and timing are outside our control.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h3 className="font-semibold">Important</h3>
                <p className="text-sm text-gray-800">
                  We assist with admin and documents only. You pay any official fees to the authority,
                  if applicable. We’re not liable for authority outcomes or delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form near the top for mobile */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pt-6 md:pt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Start your AIRE request</h2>
          <p className="text-sm text-gray-700 mb-4">
            A calm, friendly form. You can also upload documents later — we’ll follow up by email.
          </p>
          <AireForm />
        </div>
      </section>

      {/* Helpful info — short & scannable */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-8 md:py-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">Why AIRE matters</h2>
            <p className="text-gray-700 mt-2">
              AIRE links you to the correct consulate, helps with passport/CIE services and ensures
              you receive official communications. We keep the process simple and tailored to your consulate.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What we do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Confirm your consulate and the correct submission route</li>
              <li>Provide a consulate-specific checklist and templates</li>
              <li>Review your documents and guide the portal steps</li>
              <li>Share tips to avoid common delays</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Urgent?</h3>
            <p className="text-sm">
              Email <a className="underline text-amber-300" href="mailto:resinaro@proton.me?subject=AIRE%20Urgent">resinaro@proton.me</a>{" "}
              with subject <strong>“AIRE Urgent”</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
            <h4 className="font-semibold mb-2">Before you start</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Have your ID and UK address evidence to hand (if available)</li>
              <li>Add family members if updating a whole household</li>
              <li>If unsure, email us first — we’re happy to help</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">FAQs</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Can I update AIRE online?</summary>
          <div className="mt-2 text-gray-700">
            Many consulates use FAST IT for updates; where it’s not available, we guide you through the correct route.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Is this legal advice?</summary>
          <div className="mt-2 text-gray-700">
            No — we provide administrative support and document guidance only. Decisions and timelines are set by the consulate.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
