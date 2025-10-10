import ServiceForm from "../../../../components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Support | Resinaro",
  description:
    "Free, inclusive mental health guidance and signposting for Italians and migrants in the UK. Peer support, NHS navigation and crisis resources.",
  alternates: { canonical: "/services/mental-health-support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Resinaro a clinical mental health service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. Resinaro provides guidance, peer support and signposting to NHS and specialist services. We do not offer clinical diagnosis or long term therapy, but we can help you access them."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do in a mental health emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If someone is in immediate danger call 999. For urgent mental health support call NHS 111 and choose the mental health option, or contact Samaritans on 116 123 for confidential support in the UK."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need documents to receive support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No documents are required for our peer support and guidance services. For help with NHS referrals you may need ID or evidence for registration depending on the service."
      }
    },
    {
      "@type": "Question",
      "name": "Is the support confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. We treat information confidentially. We will share information only where required to protect someone from serious harm or where required by law. See our Safeguarding Policy for details."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mental Health Support & Signposting",
  "provider": {
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com",
  "email": "resinaro@proton.me"
  },
  "serviceType": "Peer support, guidance and NHS signposting",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description":
    "Free, inclusive mental health guidance and peer support for Italians and migrants in the UK. We help with NHS navigation, urgent signposting and community groups.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "0.00"
  }
};

export default function MentalHealthSupportPage() {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-4xl mx-auto pt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Mental Health Support</h1>
          <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
            Free, inclusive mental health guidance, peer support and NHS navigation for Italians and migrants living in the UK.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: content */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">What we offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Confidential, compassionate listening and peer support.</li>
                <li>Guidance on how to access NHS mental health services and referrals.</li>
                <li>Help with registration, finding local IAPT services and voluntary sector options.</li>
                <li>Online and in-person community support groups and wellbeing workshops.</li>
                <li>Practical resources to cope with stress, loneliness and anxiety.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Who this is for</h2>
              <p className="text-gray-700">
                Our service is for Italians and other migrants in the UK who need information, peer support or help connecting to NHS and specialist mental health services. We welcome people at any stage of their journey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How we work: simple steps</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Reach out:</strong> Use the form or email resinaro@proton.me to describe your need.</li>
                <li><strong>Triage & signposting:</strong> We assess the best next step and provide clear options.</li>
                <li><strong>Support & follow up:</strong> We offer short-term peer support, referral guidance and follow up to ensure the link to services.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Urgent support and crisis guidance</h2>
              <p className="text-gray-700 mb-2">
                If someone is at immediate risk of harm or life is at risk, call emergency services now.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <ul className="text-gray-700">
                  <li><strong>Emergency services (police/ambulance):</strong> <a href="tel:999" className="underline text-green-800">999</a></li>
                  <li><strong>NHS 111 (urgent health advice):</strong> <a href="https://111.nhs.uk/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">111.nhs.uk</a></li>
                  <li><strong>Samaritans:</strong> <a href="tel:116123" className="underline text-green-800">116 123</a> or <a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">samaritans.org</a></li>
                  <li><strong>Campaign Against Living Miserably (CALM):</strong> <a href="https://www.thecalmzone.net/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">thecalmzone.net</a></li>
                </ul>
              </div>

              <p className="text-sm italic text-green-800 mt-2">
                If you are unsure whether an issue is an emergency, call 111 and choose the mental health option for guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What we cannot provide</h2>
              <p className="text-gray-700">
                Resinaro does not provide long term clinical therapy, psychiatric diagnosis or prescribing. For clinical care we will signpost you to NHS services, local counsellors and regulated clinicians. For complex or legal matters we will advise referral to regulated professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Confidentiality, safeguarding and data</h2>
              <p className="text-gray-700 mb-2">
                We treat information confidentially. We will share personal information only when required to protect someone from serious harm or when required by law. Our safeguarding policy explains procedures for reporting and escalation.
              </p>
              <p className="text-sm italic text-green-800">Safeguarding policy available: <a href="/reports/safeguarding-policy.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Download PDF</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Languages & accessibility</h2>
              <p className="text-gray-700">
                We offer support in Italian and English and can provide translated resources or bilingual volunteers where possible. Let us know your language preference in the booking form.
              </p>
              <p className="text-sm italic text-green-800 mt-2">
                We are committed to accessibility. If you have special communication needs please tell us and we will adapt where possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Community groups & workshops</h2>
              <p className="text-gray-700">
                We run peer support groups and wellbeing workshops. These are free and run both online and in local community venues. Check the Community Hub or contact us to join the next session.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">References & trusted resources</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><a href="https://111.nhs.uk/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">NHS 111</a> — urgent health guidance and mental health signposting.</li>
                <li><a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Samaritans</a> — 24/7 listening support.</li>
                <li><a href="https://www.mind.org.uk/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Mind</a> — information on mental health conditions and services.</li>
                <li><a href="https://www.rethink.org/" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Rethink Mental Illness</a> — practical support and groups.</li>
              </ul>
            </section>
          </div>

          {/* Right: booking / form */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Request support</h2>
              <p className="text-sm text-gray-700 mb-4">
                Complete the short form and tell us briefly what you need. If this is urgent mark the message as urgent and include the best time to call.
              </p>

              <ServiceForm />
            </div>

            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-2">Urgent help</h3>
              <p className="text-sm mb-3">
                If you require immediate help call <a href="tel:999" className="underline text-amber-300">999</a> or NHS 111. For emotional support call Samaritans on <a href="tel:116123" className="underline text-amber-300">116 123</a>.
              </p>
              <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md font-semibold text-white">Contact us</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Before you contact us</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Share any immediate safety concerns first.</li>
                <li>Include language preference (Italian or English).</li>
                <li>Mention if you already have NHS or local mental health contacts.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQs block */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Will Resinaro notify my employer or family?</summary>
            <div className="mt-2 text-gray-700">
              We will not contact your employer or family without your consent unless we believe there is a serious risk to your safety or the safety of others and sharing is necessary to protect life.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can I get therapy through Resinaro?</summary>
            <div className="mt-2 text-gray-700">
              Resinaro does not deliver clinical therapy. We help you find NHS and voluntary sector therapy services and can provide short-term peer support while you wait for formal treatment.
            </div>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Is this service free?</summary>
            <div className="mt-2 text-gray-700">
              Yes. Our mental health guidance, peer support groups and signposting are offered free of charge. For specialist or paid services we will explain any costs before referral.
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
