import PassportForm from "../../../components/PassportForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italian Passport Help (UK) | Resinaro",
  description:
    "We help you book Prenot@Mi passport appointments (12+/adults) and guide Under-12 postal packs. Simple, friendly, and clear — with human help by email when you need it.",
  alternates: { canonical: "/services/passport" },
  openGraph: {
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Friendly help to book Prenot@Mi appointments (12+/adults) and prepare Under-12 postal packs. We are not the Consulate; availability and issuance are their decision.",
    url: "https://www.resinaro.com/services/passport",
    images: [{ url: "/images/service-passport.png", width: 1200, height: 630, alt: "Italian passport help by Resinaro" }],
    siteName: "Resinaro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Passport Help (UK) | Resinaro",
    description:
      "Book Prenot@Mi (12+/adults) and Under-12 postal help. Clear steps, no false promises. Email resinaro@proton.me for tailored advice.",
    images: ["/images/service-passport.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you guarantee an appointment or passport?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Appointment availability and passport issuance are decided only by the Consulate. Resinaro provides booking assistance and postal-pack guidance; outcomes and timelines are outside our control.",
      },
    },
    {
      "@type": "Question",
      name: "What does Resinaro actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Two things: (1) help monitor and book passport appointments on Prenot@Mi for 12+/adults; (2) guide parents through the Under-12 postal application with a fool-proof checklist.",
      },
    },
    {
      "@type": "Question",
      name: "Can I email documents instead of uploading?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can email documents to resinaro@proton.me. The form also has an “I’ll email later” option if that’s easier.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Italian Passport Appointment Help",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    email: "resinaro@proton.me",
  },
  serviceType: "Prenot@Mi appointment support and Under-12 postal guidance",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Clear, friendly support for booking Italian passport appointments and preparing Under-12 postal packs. No guarantees of availability or issuance.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Services", item: "https://www.resinaro.com/services" },
    { "@type": "ListItem", position: 2, name: "Passport", item: "https://www.resinaro.com/services/passport" },
  ],
};

export default function PassportServicePage() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen">
      {/* Full-bleed hero (decorative image; content follows) */}
      <section className="relative w-full">
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <img
            src="/images/service-passport.png"
            alt="Italian passport support"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Intro + quick pricing + disclaimers */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 -mt-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-5 sm:p-7 md:p-9">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Italian Passport Help (UK)
            </h1>
            <p className="mt-2 text-green-800">
              We help with <strong>Prenot@Mi booking (12+/adults)</strong> and{" "}
              <strong>Under-12 postal packs</strong>. If you’re unsure, email{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>{" "}
              before paying — we’ll steer you.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <h2 className="font-semibold">Pricing</h2>
                <ul className="text-sm text-gray-800 list-disc list-inside mt-1">
                  <li><strong>£35</strong> per person for passport assistance.</li>
                  <li>
                    <strong>+£20</strong> if you want us to{" "}
                    <strong>create &amp; manage</strong> your Prenot@Mi account
                    (optional). You can create one yourself for free and share login
                    if you prefer.
                  </li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-2">
                  Prices are for Resinaro’s help only, not consular fees or postage.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h2 className="font-semibold">Important</h2>
                <p className="text-sm text-gray-800">
                  We are <strong>not</strong> the Consulate. Appointment supply and
                  passport decisions are theirs. We don’t guarantee dates or outcomes.
                  Don’t book travel until your passport is issued.
                </p>
                <p className="text-[12px] text-gray-600 mt-1">
                  Prefer email? Send info to{" "}
                  <a className="underline" href="mailto:resinaro@proton.me">
                    resinaro@proton.me
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM FIRST for mobile (SEO: keep concise heading + form above fold) */}
      <section id="book" className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Book passport support</h2>
          <p className="text-sm text-gray-700 mb-3">
            A tiny, friendly wizard. One small step at a time ✨
          </p>
          <PassportForm />
        </div>
      </section>

      {/* Helpful info (kept short to avoid overwhelm) */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-10 md:pb-16 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">What we do</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold">Prenot@Mi booking (12+/adults)</h3>
                <p className="text-sm text-gray-700 mt-1">
                  We monitor and attempt bookings, help set up the account if you
                  want, and prepare your checklist. Availability is controlled by the
                  Consulate.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold">Under-12 postal guidance</h3>
                <p className="text-sm text-gray-700 mt-1">
                  We give you a fool-proof pack list and review uploads before you
                  post to the Consulate (no in-person appointment required for U12).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">Quick docs (heads-up)</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm">For Prenot@Mi</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>Valid photo ID (passport/ID card)</li>
                  <li>Proof of UK address (≤3 months)</li>
                  <li>AIRE up to date</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-1">
                  Unsure you qualify? Email us first:{" "}
                  <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">For Under-12 (postal)</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-1">
                  <li>U12 form + both parents’ IDs (no driving licences)</li>
                  <li>Parents’ consent + 2 photos (one countersigned)</li>
                  <li>Proof of address + Special Delivery return envelope</li>
                </ul>
                <p className="text-[12px] text-gray-600 mt-1">
                  First passport + birth registration can’t be sent together (rule from 28 May 2025).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">Need tailored advice?</h2>
            <p className="text-gray-800">
              If you’re unsure about eligibility or which path to use, email{" "}
              <a className="underline" href="mailto:resinaro@proton.me">resinaro@proton.me</a>{" "}
              before paying. You can also submit documents by email if that’s easier.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-green-900 text-white rounded-2xl p-5">
            <h3 className="font-semibold text-lg">Urgent?</h3>
            <p className="text-sm">
              Email <a className="underline text-amber-300" href="mailto:resinaro@proton.me">resinaro@proton.me</a>{" "}
              with subject <strong>“Urgent”</strong>. We’ll advise the correct route.
              (Urgency is assessed by the Consulate.)
            </p>
          </div>

          <nav aria-label="Helpful links" className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm text-sm">
            <h4 className="font-semibold mb-2">More services</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li><a className="underline" href="/services">All services</a></li>
              <li><a className="underline" href="/contact">Contact Resinaro</a></li>
            </ul>
          </nav>
        </aside>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
