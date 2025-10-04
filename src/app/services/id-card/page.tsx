import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Italian ID Card (CIE) Assistance | Resinaro",
  description:
    "Help obtaining or renewing the Italian Electronic ID Card (CIE) from the UK: documents, booking, fingerprints and booking support at consulates.",
  alternates: { canonical: "/services/id-card-cie-assistance" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I apply for a CIE from the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Italian citizens resident in the UK usually apply via their local consulate. If your AIRE registration is up to date we can help you with booking, documents and finger-print requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be registered with AIRE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most consulates require correct AIRE registration to process CIE applications from abroad. We can advise how to check and update your AIRE status before you book."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the CIE process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Processing and delivery times vary by consulate and chosen delivery option. Booking the appointment, biometric collection and card production can take several weeks in many jurisdictions."
      }
    },
    {
      "@type": "Question",
      "name": "Is the CIE enough for travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Carta d'Identit\u00E0 Elettronica (CIE) is widely accepted within the EU for identification and some travel, but clients should verify travel rules with airlines and destination authorities. For broader international travel a passport remains the primary document."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Italian ID Card (CIE) Assistance",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
    "email": "help@resinaro.com"
  },
  "serviceType": "Consular assistance, appointment booking and document preparation",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description": "Assistance to apply for or renew the Italian Electronic ID Card (CIE) from the UK: document checks, booking support, biometric guidance and consulate liaison."
};

export default function Page() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Italian CIE (ID Card) Assistance</h1>
          <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
            Help obtaining or renewing your Italian Electronic ID Card (Carta d&apos;Identit\u00E0 Elettronica) from the UK — documentation, booking and biometric guidance.
          </p>
          <div className="max-w-lg mx-auto mt-6 mb-4">
            <img 
              src="/images/servies-idcard.png" 
              alt="Italian electronic ID card (CIE)" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: details */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">
                The CIE is Italy&apos;s electronic identity card and may be required for identification and some digital public services. From the UK, applications are usually handled at the Italian consulate that covers your address. Resinaro supports the full process from document checks to booking and post-appointment follow up.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who we help</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Italian citizens resident in the UK who need a new or replacement CIE.</li>
                <li>People applying for a CIE for minors (we explain consent and parental requirements).</li>
                <li>Clients who need help verifying AIRE status, preparing documents or booking an appointment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we do</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Check eligibility and AIRE registration guidance.</li>
                <li>Provide a consulate-specific document checklist and photo guidance for biometric requirements.</li>
                <li>Assist with booking the appointment using official channels (Prenot@Mi or consulate portals) and share booking tips.</li>
                <li>Advice on collection, delivery options and expected timelines after biometric enrolment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Documents typically required</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Italian passport or expired passport (where accepted).</li>
                <li>Proof of UK address: council tax, tenancy agreement, utility bill or bank statement.</li>
                <li>Proof of AIRE registration or guidance to update AIRE where needed.</li>
                <li>Biometric photo(s) where the consulate requires pre-prepared photos.</li>
                <li>Parental ID and consent documents for minors.</li>
              </ul>
              <p className="text-sm italic text-green-800 mt-2">
                Requirements vary by consulate; we provide a tailored checklist for your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Process & timeline</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Initial check:</strong> We review your case and confirm the consulate and documents required (1–2 business days).</li>
                <li><strong>Booking:</strong> We assist with booking an appointment and explain what to bring on the day.</li>
                <li><strong>Appointment support:</strong> We provide guidance for biometric collection and any supplementary steps.</li>
                <li><strong>Follow up:</strong> We advise on delivery options and how to track the card after production; timelines depend on the consulate and can range from a few weeks to longer in busy periods.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Consulate notes & booking systems</h2>
              <p className="text-gray-700">
                Many consulates use the Prenot@Mi platform for bookings. If your consulate uses a different portal we will guide you through it. We also advise on the best times to check for cancellations and appointment windows.
              </p>
              <p className="text-sm italic text-green-800 mt-2">
                Helpful links: <a href="https://prenotami.esteri.it/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Prenot@Mi</a>, <a href="https://serviziconsolarionline.esteri.it/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">FAST IT (AIRE & consular services)</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Fees, concessions and refunds</h2>
              <p className="text-gray-700 mb-2">
                Service fees are shown at the booking stage and reflect the time spent preparing documents and liaising with the consulate. Concessionary rates are available for those in financial hardship; please enquire before booking.
              </p>
              <p className="text-gray-700">
                If we fail to deliver the agreed service due to our error we will offer an appropriate refund or a credit toward other Resinaro services. Refund requests should be emailed to help@resinaro.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Data protection & confidentiality</h2>
              <p className="text-gray-700">
                Documents and personal data you provide are used only to deliver the service. Files are stored securely and access is restricted. You may request deletion of your data after completion. See our Privacy Policy for full details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Common issues and how we solve them</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>AIRE not updated:</strong> We provide guidance and a checklist to update AIRE before booking.</li>
                <li><strong>Photo or document non-compliance:</strong> We give clear photo specs and sample checks to avoid rejections.</li>
                <li><strong>Wrong consulate jurisdiction:</strong> We confirm jurisdiction and advise correct filing to avoid delays.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro guided me through the Prenot@Mi booking and ensured I had the correct documents. The appointment went smoothly.&quot; — Elisa
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
                &quot;Clear checklist and fast support. They helped update my AIRE and book an appointment in the right consulate.&quot; — Marco
              </blockquote>
            </section>
          </div>

          {/* Right: form & CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Book CIE Assistance</h2>
              <p className="text-sm text-gray-700 mb-4">
                Use the form to tell us which consulate covers you, upload any available documents and choose a preferred timeline. We will respond with a tailored checklist and next steps.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Need urgent help?</h3>
              <p className="text-sm mb-3">
                Email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> and include &quot;CIE URGENT&quot; in the subject for time-sensitive requests.
              </p>
              <div className="flex gap-3">
                <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
                <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you book</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Confirm your AIRE registration and consulate jurisdiction.</li>
                <li>Have passport and proof of UK address ready.</li>
                <li>Take biometric photos in good light or use our local photographic guidance.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What is the difference between CIE and passport?</summary>
            <div className="mt-2 text-gray-700">
              The CIE is an Italian electronic ID card primarily used for identification within Italy and the EU and for some digital services. A passport is required for most international travel. Keep both documents up to date where appropriate.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can you help with minors?</summary>
            <div className="mt-2 text-gray-700">
              Yes. Minors often require parental consent and additional documents. We provide a checklist and guidance specific to children and young people.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How will I receive my CIE?</summary>
            <div className="mt-2 text-gray-700">
              Delivery options vary by consulate: collection in person, postal delivery or courier. We explain the options and typical timelines for your consulate.
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
