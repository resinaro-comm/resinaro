import TranslationForm from "../../../components/TranslationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Translation Services | Italian ↔ English — Resinaro",
  description:
    "Professional, certified translations between Italian and English for legal, academic and personal documents. Vetted translators, quality assurance and fast turnaround options.",
  alternates: { canonical: "/services/translations" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does certified translation mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A certified translation is a translation accompanied by a signed statement from the translator or translation provider confirming that the translation is a true and accurate translation of the original. For official processes, check the receiving authority for exact requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can Resinaro translate legal and court documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle legal, academic and personal documents. For certain court or government processes, the receiving authority may require additional certification or a sworn translation. We will advise on the correct format when you contact us."
      }
    },
    {
      "@type": "Question",
      "name": "What are typical turnaround times?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard turnaround for most documents is 2 to 5 business days. Express options are available for urgent documents. Exact timing depends on length and complexity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept scanned copies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept scanned or photographed documents provided the originals are legible. For certain certificates, we may request certified scans or sight of the original at appointment."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Certified Translation Services (Italian ↔ English)",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
  "email": "resinaro@proton.me"
  },
  "serviceType": "Certified translation and document localisation",
  "areaServed": {"@type": "Country", "name": "United Kingdom"},
  "description": "Certified translations between Italian and English for passports, birth certificates, legal documents, academic transcripts and business paperwork. Options: in-house vetted translators or fast outsourced partner delivery.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "GBP",
      "minPrice": "30",
      "maxPrice": "250"
    }
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <section className="max-w-4xl mx-auto text-center pt-12 mb-8">
        <h1 className="text-4xl font-bold mb-3">Certified Translation Services</h1>
        <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
          Professional translations between Italian and English for legal, academic and personal documents. Vetted linguists, robust quality assurance and flexible delivery options.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* Left: Details */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Service options</h2>
            <p className="text-gray-700 mb-3">
              Resinaro offers two principal pathways so clients can choose the right balance of speed, cost and control:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>In-house vetted translators:</strong> Translations completed by linguists vetted by Resinaro. These translators pass our qualification checks and quality assurance procedures. This option suits complex legal or academic cases where traceability and quality are essential.
              </li>
              <li>
                <strong>Partner network / outsourced slots:</strong> For high volume or urgent requirements we use trusted partner agencies and freelancer networks. Outsourced slots allow faster turnaround while maintaining a documented quality review.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Typical use cases</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-medium">Legal & official</h3>
                <p className="text-sm mt-1">Birth, marriage and death certificates, court documents, powers of attorney and notarised translations where required by an authority.</p>
              </div>
              <div>
                <h3 className="font-medium">Academic & professional</h3>
                <p className="text-sm mt-1">Transcripts, degree certificates, professional qualifications and employer verification documents.</p>
              </div>
              <div>
                <h3 className="font-medium">Immigration & consular</h3>
                <p className="text-sm mt-1">Documents for visa applications, AIRE updates and consular submissions requiring a certified translation or translator declaration.</p>
              </div>
              <div>
                <h3 className="font-medium">Business & personal</h3>
                <p className="text-sm mt-1">Contracts, letters, estate documents and other personal records where a reliable translation is required.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Quality assurance and credentials</h2>
            <p className="text-gray-700 mb-3">
              Quality is the priority. Resinaro uses a multi-stage quality assurance workflow for every translation:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Translator assignment based on subject matter expertise and verified credentials.</li>
              <li>Initial translation by a professional linguist.</li>
              <li>Independent review by a second linguist for accuracy and formatting.</li>
              <li>Final sign-off that includes a signed declaration confirming fidelity to the original (used for certified translations).</li>
            </ol>
            <p className="text-sm italic text-green-800 mt-2">
              Translators in our vetted network typically hold recognised qualifications and professional memberships. Resinaro keeps records of qualifications and reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Turnaround, pricing guidance and availability</h2>
            <p className="text-gray-700 mb-3">
              Delivery depends on length, complexity and required certification. Below are typical guidance bands:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Short documents (1 page):</strong> Standard 1–3 business days. Typical fee from £30.</li>
              <li><strong>Standard packs (2–5 pages):</strong> Standard 2–5 business days. Typical fees £40–£120.</li>
              <li><strong>Complex or certified packs (legal, notarised):</strong> 3–7 business days plus certification handling. Typical fees £80–£250 depending on requirements.</li>
              <li><strong>Express delivery:</strong> Same day or 24-hour options available subject to slot availability and an expedited fee.</li>
            </ul>

            <p className="text-sm italic text-green-800 mt-2">
              These price bands are indicative. Exact quotes are provided after document review. Concessions or discounted community slots may be available on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Process: how to order</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Enquiry:</strong> Use the booking form or email resinaro@proton.me with scanned documents.</li>
              <li><strong>Assessment & quote:</strong> We review the files and confirm scope, turnaround and cost.</li>
              <li><strong>Acceptance:</strong> Client accepts the quote and provides any additional authorisations.</li>
              <li><strong>Translation & QA:</strong> Work is completed and independently reviewed.</li>
              <li><strong>Delivery:</strong> Final files and a signed certification letter are delivered by email or by post on request.</li>
            </ol>
            <p className="text-sm text-gray-600 mt-2">
              For urgent cases mark the booking as urgent and include preferred delivery windows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Outsourcing and partner model</h2>
            <p className="text-gray-700 mb-3">
              Resinaro operates a trusted partner network to expand capacity and reduce turnaround for urgent needs. Partners are contractually obliged to follow our quality assurance procedures and data handling policies. Clients may select preferred delivery mode: Resinaro-vetted or partner-assisted.
            </p>
            <p className="text-sm italic text-green-800">
              This model allows the organisation to scale services rapidly while maintaining a quality guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Accessibility and confidentiality</h2>
            <p className="text-gray-700">
              We accept scanned documents, photographed copies and email uploads. All documents are handled securely and retained only as necessary to complete the assignment. Clients may request deletion of files after completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Testimonials and results</h2>
            <blockquote className="border-l-4 pl-4 italic text-gray-700">
              &quot;Accurate, quick and with a clear certification letter. Perfect for my visa appointment.&quot; — Elena
            </blockquote>
            <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-3">
              &quot;Professional translators and great customer communication. Highly recommended.&quot; — Samuele
            </blockquote>
          </section>
        </div>

        {/* Right: Booking CTA and form */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Request a translation</h2>
            <p className="text-sm text-gray-700 mb-4">
              Upload your documents and tell us your required format and deadline. We will respond with a quote and availability.
            </p>

            <TranslationForm />
          </div>

          <div className="bg-green-900 text-white rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Immediate slots</h3>
            <p className="text-sm mb-3">
              We maintain a limited number of immediate slots for urgent documents. If you need same-day or 24-hour delivery select &quot;urgent&quot; in the form and provide preferred contact times.
            </p>
            <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white">Contact about urgent slots</a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
            <h4 className="font-semibold mb-2">Before you submit</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Scan or photograph all pages clearly in good light.</li>
              <li>Specify whether a signed certification letter is required.</li>
              <li>Provide any reference numbers or consulate instructions if applicable.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQ block */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Is a certified translation legally binding?</summary>
          <div className="mt-2 text-gray-700">
            A certified translation provides a formal statement from the translator or provider confirming the fidelity of the translation to the original. Some authorities require additional notarisation or a sworn translation. Resinaro will advise on the correct format for your receiving authority.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">How does Resinaro protect my documents?</summary>
          <div className="mt-2 text-gray-700">
            Documents are stored securely on encrypted systems and access is limited to the translator and quality reviewer. Files are deleted or archived according to the agreed retention policy.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">What payment methods do you accept?</summary>
          <div className="mt-2 text-gray-700">
            Payment methods are provided with the quote and typically include card payments and bank transfer. For complex orders we can provide an invoice on request.
          </div>
        </details>
      </section>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
