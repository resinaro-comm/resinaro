import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPID Digital Identity | Resinaro — SPID Setup & Troubleshooting (UK)",
  description:
    "Assistance with SPID (Sistema Pubblico di Identità Digitale) registration and troubleshooting from the UK: identity provider selection, document checks, video-ID guidance and recovery.",
  alternates: { canonical: "/services/spid-digital-identity" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SPID and why do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "SPID is Italy\u2019s public digital identity system. It allows secure access to many Italian government services online (consular services, tax portals, INPS, and others). Having SPID simplifies consular processes and accessing digital public services."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get SPID from the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Italian citizens resident in the UK can register for SPID using an approved identity provider. Some providers offer remote video identification, while others may require an in-person check. Resinaro helps you choose the right provider and prepares the documents."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for SPID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Typical requirements include a passport or national ID, proof of UK address, and an email address. Some providers require a live video identity check or a certified ID verification step. Requirements vary by identity provider."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I lose access to my SPID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If you lose access, you can follow the chosen identity provider\u2019s account recovery process. We can guide you through recovery steps and advise on re-issuing SPID or switching providers if necessary."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SPID Registration & Troubleshooting",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
    "email": "help@resinaro.com"
  },
  "serviceType": "Digital identity assistance (SPID)",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description":
    "Assistance to register, verify and recover SPID from the UK: identity provider selection, document checks, video-ID guidance and troubleshooting.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "30.00"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">SPID Digital Identity</h1>
          <p className="text-lg text-green-800 italic max-w-3xl mx-auto">
            Help registering and troubleshooting SPID (Sistema Pubblico di Identit&agrave; Digitale) from the UK — provider selection, identity checks and recovery support.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Why SPID matters</h2>
              <p className="text-gray-700">
                SPID gives secure access to Italian online public services (consular portals, tax services, INPS, municipal services and more). For Italians abroad, SPID often simplifies consular interactions and is increasingly requested for remote authentication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who should get SPID</h2>
              <p className="text-gray-700">
                Italian citizens and residents who need to access Italian digital services, manage consular requests, or use CIE ID alternatives. SPID is especially useful for those handling tax, pensions, consular bookings and digital document access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provider comparison and recommendation based on your needs (remote video-ID vs in-person checks).</li>
                <li>Document checklist and guidance on passport/ID and proof of address formats.</li>
                <li>Step-by-step walk-through of the provider registration flow and video-ID tips.</li>
                <li>Troubleshooting and recovery support if you lose access or your SPID is blocked.</li>
                <li>Help linking SPID to consular and public service accounts where required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Identity providers & options</h2>
              <p className="text-gray-700 mb-2">
                Several accredited identity providers offer SPID. Providers differ by verification method, supported languages and processing times. We help you choose between providers that offer:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remote video identity checks (fast, convenient).</li>
                <li>In-person verification via certified offices or partners.</li>
                <li>Assisted registration for users who need help with technology or language.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Step-by-step SPID process</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Choose provider:</strong> We recommend a provider and explain trade-offs.</li>
                <li><strong>Prepare documents:</strong> Passport/ID, proof of address and an email address.</li>
                <li><strong>Complete identity check:</strong> Video-ID or in-person check depending on provider.</li>
                <li><strong>Activate SPID:</strong> Set up credentials and test login to a public service.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Common issues & fixes</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Verification failure:</strong> Usually due to poor lighting or mismatched document data — we provide precise photo/video guidance.</li>
                <li><strong>Address mismatch:</strong> We explain acceptable proof of address and how to obtain or substitute documents.</li>
                <li><strong>Lost credentials:</strong> We guide you through provider-specific recovery steps and re-registration if necessary.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Privacy & data handling</h2>
              <p className="text-gray-700">
                Identity checks involve sensitive data. We only use personal data with explicit consent to assist registration and do not share it beyond what is necessary for the process. Providers may retain copies as required by law; we will explain provider privacy terms before you proceed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Languages & accessibility</h2>
              <p className="text-gray-700">
                We provide support in Italian and English and can assist users who need help with the technology, captions or an interpreter for the video-ID step where possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Fees, concessions & refunds</h2>
              <p className="text-gray-700 mb-2">
                Typical Resinaro support fee is shown at booking. Many identity providers are free but some premium verification methods may charge a fee. Concessionary rates are available for those in financial hardship; contact help@resinaro.com before booking to request a concession.
              </p>
              <p className="text-gray-700">
                If we fail to deliver agreed assistance due to our error we will offer a refund or credit. Refund requests are emailed to help@resinaro.com and reviewed within 10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Trusted links & resources</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><a href="https://www.spid.gov.it/en/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Official SPID information (spid.gov.it)</a></li>
                <li><a href="https://www.agid.gov.it/en" target="_blank" rel="noopener noreferrer" className="underline text-green-800">AgID (Italian Digital Agency)</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                &quot;Resinaro guided me through a video-ID SPID registration and saved hours of confusion. Highly recommended.&quot; — Elena
              </blockquote>
            </section>
          </div>

          {/* Right: form & CTAs */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request SPID Support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Use the short form to tell us which SPID provider you prefer (if any), attach a photo of your ID and state if you need language or accessibility help. We will respond with a tailored plan and next steps.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Trouble accessing services?</h3>
              <p className="text-sm mb-3">
                Email <a href="mailto:help@resinaro.com" className="underline text-amber-300">help@resinaro.com</a> with &quot;SPID HELP&quot; in the subject for priority triage. Include best contact times and a short description.
              </p>
              <div className="flex gap-3">
                <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
                <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Have a clear photo of your passport or national ID.</li>
                <li>Prepare a proof of UK address (bank statement, utility bill or tenancy).</li>
                <li>Note any previous SPID provider details if you already have SPID credentials.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How long does SPID registration take?</summary>
            <div className="mt-2 text-gray-700">
              Registration time varies by provider: remote video-ID providers can complete the process within minutes to a few hours; others may take several days. Resinaro helps you pick the fastest option that fits your needs.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Is SPID the same as CIE ID?</summary>
            <div className="mt-2 text-gray-700">
              SPID and CIE ID are different authentication options. CIE ID uses the electronic ID card and NFC-capable devices; SPID is a username/password + OTP system managed by identity providers. Which one is better depends on the service and your device access.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">I have no proof of UK address. Can I still get SPID?</summary>
            <div className="mt-2 text-gray-700">
              Some providers accept alternative proofs or have specific routes for citizens abroad. We will assess your documents and advise the best provider or next steps.
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
