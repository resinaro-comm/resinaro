// src/app/terms/page.tsx
import TermsAcceptance from "@/components/TermsAcceptance";

export const metadata = {
  title: "Terms of Service | Resinaro",
  description:
  "Resinaro Terms of Service — short summary and full legal terms. Read the TL;DR or the full text. Contact resinaro@proton.me for questions.",
  alternates: { canonical: "/terms" },
};

const sections = [
  { id: "intro", title: "Introduction", summary: "Short summary of what these Terms cover and their legal effect." },
  { id: "services", title: "Our Services", summary: "What Resinaro does and how we handle referrals to third parties." },
  { id: "eligibility", title: "Eligibility and your commitments", summary: "What we ask from users to enable safe, lawful use of services." },
  { id: "fees", title: "Fees, payment and billing", summary: "How fees are shown and how payments are processed." },
  { id: "refunds", title: "Cancellations and refunds", summary: "When refunds are available and how we handle errors." },
  { id: "safeguarding", title: "Safeguarding & duty of care", summary: "Our commitment to user safety and reporting processes." },
  { id: "privacy", title: "Confidentiality & data protection", summary: "How we process personal data and where to read the Privacy Policy." },
  { id: "liability", title: "Limitation of liability", summary: "The limits of our liability and important legal exceptions." },
  { id: "complaints", title: "Complaints & disputes", summary: "How to complain and our typical response times." },
  { id: "changes", title: "Changes to these Terms", summary: "How we will communicate updates and require re-acceptance when needed." },
  { id: "governing-law", title: "Governing law", summary: "Which law applies and where disputes are resolved." },
  { id: "contact", title: "Contact", summary: "How to contact us for questions about these Terms." },
];

export default function Terms() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-green-900">Terms of Service</h1>
          <div className="mt-2 text-sm text-gray-600">Last updated: 24 September 2025 · Version: 2025.09</div>
        </header>

        {/* TL;DR + acceptance */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <div className="md:flex md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">Quick summary (TL;DR)</h2>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                  <li>Use Resinaro services lawfully and provide accurate information.</li>
                  <li>Fees are shown before booking. Payments processed by trusted providers; card data is not stored by Resinaro.</li>
                  <li>We provide guidance but cannot guarantee outcomes from third parties (for example consulate decisions).</li>
                  <li>You must accept these Terms to use paid services; acceptance is recorded locally and can be managed via the cookie settings.</li>
                </ul>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="/assets/resinaro-terms-summary.pdf"
                    className="inline-block bg-white border rounded px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Download one-page summary (PDF)
                  </a>

                  <a
                    href="/cookies"
                    className="inline-block text-sm underline text-green-800"
                  >
                    Manage cookies
                  </a>
                </div>
              </div>

              <div className="w-full md:w-72 mt-4 md:mt-0">
                <TermsAcceptance />
              </div>
            </div>
          </div>
        </section>

        {/* Main content grid: TOC left, content right */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* TOC */}
          <aside className="md:col-span-1 sticky top-28 self-start">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">On this page</h3>
              <nav className="text-sm text-gray-700 space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block hover:text-green-900 hover:underline"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-4 text-xs text-gray-500">
                <div>Need help choosing a service?</div>
                <a href="/contact" className="underline text-green-800">Contact us</a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Render each section with a short visible summary and expandable details */}
            {/* 1. Introduction */}
            <article id="intro" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">1. Introduction</h2>
              <p className="text-gray-700 mb-2">
                These Terms set out the legal relationship between you and Resinaro. By using Resinaro&apos;s website or services you accept these Terms.
                If you do not accept these Terms, please do not use the Services.
              </p>

              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  These Terms of Service govern your access to and use of Resinaro&apos;s website and services (the Services).
                  By using the Services you accept and agree to these Terms. They form a binding agreement between you and Resinaro
                  in relation to the Services described on this site.
                </div>
              </details>
            </article>

            {/* 2. Services */}
            <article id="services" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">2. Our Services</h2>
              <p className="text-gray-700 mb-2">
                Resinaro provides practical guidance and assistance to migrants in the UK across consular, identity, housing and benefits topics.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Services are delivered professionally and confidentially. Where Resinaro introduces third parties (for example legal advisers,
                  translators, or identity providers), such introductions are only introductions: Resinaro does not control third party standards
                  and is not responsible for their performance.
                </div>
              </details>
            </article>

            {/* 3. Eligibility */}
            <article id="eligibility" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">3. Eligibility and your commitments</h2>
              <p className="text-gray-700 mb-2">Short summary: provide accurate information and use services lawfully.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  You represent that you are able to enter into a contract and that any information you provide is accurate and up to date.
                  You agree to provide all information reasonably required to deliver the requested service and to use the Services for lawful purposes only.
                </div>
              </details>
            </article>

            {/* 4. Fees */}
            <article id="fees" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">4. Fees, payment and billing</h2>
              <p className="text-gray-700 mb-2">Short summary: fees are clear at booking; payments processed by trusted providers.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  When a fee applies we will make the fee clear before you confirm booking. Payment is required in advance unless otherwise agreed in writing.
                  We use reputable third party payment processors to handle card payments; Resinaro does not store full payment card details.
                </div>
              </details>
            </article>

            {/* 5. Refunds */}
            <article id="refunds" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">5. Cancellations and refunds</h2>
              <p className="text-gray-700 mb-2">Short summary: refunds depend on service and work completed.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  If a Service is fully delivered or work has started, refunds may be reduced to reflect work already completed. If Resinaro fails to deliver an agreed service due to our error,
                  we will offer a remedy which may include a refund or a credit toward other Services. Specific refund terms will be set out at the point of sale or in the booking confirmation.
                </div>
              </details>
            </article>

            {/* 6. Safeguarding */}
            <article id="safeguarding" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">6. Safeguarding & duty of care</h2>
              <p className="text-gray-700 mb-2">Short summary: we prioritise safety and will act on safeguarding concerns.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Resinaro is committed to the safety and welfare of service users. If any member of our team believes someone may be at risk of harm, abuse or exploitation we may make a safeguarding referral to relevant statutory agencies in line with applicable guidance.
                  We will take reasonable steps to protect personal data in these circumstances while prioritising safety. To report a safeguarding concern contact resinaro@proton.me.
                </div>
              </details>
            </article>

            {/* 7. Privacy */}
            <article id="privacy" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">7. Confidentiality & data protection</h2>
              <p className="text-gray-700 mb-2">Short summary: personal information is handled per our Privacy Policy.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  We treat personal information as confidential and process personal data in accordance with our Privacy Policy.
                  By using the Services you consent to the collection, storage and use of your personal data as described in the Privacy Policy.
                </div>
              </details>
            </article>

            {/* 8. Liability */}
            <article id="liability" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">8. Limitation of liability</h2>
              <p className="text-gray-700 mb-2">Short summary: guidance is provided but outcomes depending on third parties cannot be guaranteed.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Resinaro provides guidance and support but cannot guarantee outcomes which depend on third parties, including government departments and consular offices.
                  To the fullest extent permitted by law, Resinaro will not be liable for indirect, special or consequential losses arising from your use of the Services.
                  Nothing in these Terms excludes liability for death or personal injury caused by our negligence or for fraud.
                </div>
              </details>
            </article>

            {/* 9. Complaints */}
            <article id="complaints" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">9. Complaints & disputes</h2>
              <p className="text-gray-700 mb-2">Short summary: contact resinaro@proton.me — acknowledgement target: 3 business days.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  If you are unhappy with a part of our service contact resinaro@proton.me. We aim to acknowledge complaints within three business days and to resolve them promptly.
                  Where a dispute cannot be resolved informally the matter may be referred to mediation or the courts as set out in these Terms.
                </div>
              </details>
            </article>

            {/* 10. Changes */}
            <article id="changes" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">10. Changes to these Terms</h2>
              <p className="text-gray-700 mb-2">Short summary: we will post updates on this page; continued use after changes equals acceptance.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  We may update these Terms from time to time. We will post the revised Terms on this page and update the last updated date accordingly.
                  Where we make material changes we will attempt to notify users; in some cases re-acceptance may be required.
                </div>
              </details>
            </article>

            {/* 11. Governing law */}
            <article id="governing-law" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">11. Governing law</h2>
              <p className="text-gray-700 mb-2">Short summary: governed by the law of England and Wales.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">Read full text</summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of England and Wales. Any dispute arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales, save where mandatory laws require otherwise.
                </div>
              </details>
            </article>

            {/* 12. Contact */}
            <article id="contact" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">12. Contact</h2>
              <p className="text-gray-700">
                For questions about these Terms or our Services contact:
              </p>
              <div className="mt-3 text-gray-700">
                <div><strong>Email:</strong> <a href="mailto:resinaro@proton.me" className="text-green-800 underline">resinaro@proton.me</a></div>
              </div>
            </article>

            <div className="text-sm text-gray-500 mt-4">
              <p>
                These Terms do not affect your statutory rights. If any provision of these Terms is found unlawful or unenforceable, that provision will be limited or removed to the minimum extent necessary and the remainder of the Terms will remain in full force.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
