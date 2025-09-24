// src/app/governance/page.tsx
export const metadata = {
  title: "Resinaro Governance | Fair, Transparent Migrant Support in the UK",
  description:
    "Resinaro is built on values of fairness, transparency, and inclusivity. We provide migrant support services in the UK that feel like a community, not a business.",
  keywords: [
    "Resinaro governance",
    "migrant support UK",
    "Italian community UK",
    "fair migrant services",
    "transparent pricing",
    "inclusive migrant support",
  ],
  alternates: { canonical: "/governance" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resinaro",
  url: "https://www.resinaro.com",
  logo: "https://www.resinaro.com/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "help@resinaro.com",
      url: "https://www.resinaro.com/contact",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Resinaro set prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Resinaro sets prices to cover administrative costs and direct support. There are no hidden fees and clients receive a clear breakdown before paying.",
      },
    },
    {
      "@type": "Question",
      name: "How can I raise a complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Clients can raise a concern using the Contact page or by emailing help@resinaro.com. We publish our complaints process and aim to respond within 10 working days.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find your transparency report?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our transparency report, including finances and impact metrics, is available as a downloadable PDF on this page. See the 'Policies & Documents' section.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.resinaro.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.resinaro.com/about" },
    { "@type": "ListItem", position: 3, name: "Governance", item: "https://www.resinaro.com/governance" },
  ],
};

export default function GovernancePage() {
  return (
    <main className="bg-[#F9F6F1] text-gray-900 min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-5xl pt-12">
        {/* HERO */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900">Governance, Transparency & Community</h1>
          <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
            Resinaro operates with clear governance, accountable leadership and open policies. This page explains who we are, how we make decisions, how we handle money, and how you can raise a concern.
          </p>
        </header>

        {/* Quick TOC / anchors */}
        <nav aria-label="Governance table of contents" className="mb-6">
          <ul className="flex flex-wrap gap-3 justify-center text-sm">
            <li><a className="underline text-green-900" href="#summary">Summary</a></li>
            <li><a className="underline text-green-900" href="#board">Board & Roles</a></li>
            <li><a className="underline text-green-900" href="#policies">Policies & Documents</a></li>
            <li><a className="underline text-green-900" href="#finance">Financial Transparency</a></li>
            <li><a className="underline text-green-900" href="#complaints">Complaints</a></li>
            <li><a className="underline text-green-900" href="#safeguarding">Safeguarding</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ</a></li>
          </ul>
        </nav>

        {/* SUMMARY */}
        <section id="summary" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-2">Governance summary</h2>
          <p className="text-gray-700 mb-3">
            Resinaro follows an accountable governance model designed to protect clients and volunteers, maintain financial discipline, and deliver services fairly. We publish clear policies, maintain a small oversight board and update stakeholders regularly on our activities and spending.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3">
              <strong className="text-green-900">Mission</strong>
              <p className="text-gray-600 mt-1">Practical, fair support for migrants, delivered with dignity and transparency.</p>
            </div>
            <div className="p-3">
              <strong className="text-green-900">Accountability</strong>
              <p className="text-gray-600 mt-1">Oversight board, published policies, and public transparency reports.</p>
            </div>
            <div className="p-3">
              <strong className="text-green-900">Accessibility</strong>
              <p className="text-gray-600 mt-1">Services available to Italians and all migrants; translated resources and community outreach.</p>
            </div>
          </div>
        </section>

        {/* BOARD & ROLES */}
        <section id="board" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Board, leadership & decision-making</h2>
          <p className="text-gray-700 mb-4">
            Our oversight body ensures decisions are made in the community interest. The board specializes in governance, finance and safeguarding. Operational work is carried out by a small leadership team and supported by volunteers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">Board & advisory roles</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li><strong>Chair:</strong> Independent lead for strategy and governance.</li>
                <li><strong>Finance Lead:</strong> Oversees budgets and compliance.</li>
                <li><strong>Safeguarding Officer:</strong> Responsible for protection policies.</li>
                <li><strong>Community Representative(s):</strong> Volunteers and service users inform decisions.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">How decisions are made</h3>
              <p className="text-gray-600 mt-2">
                Major policy and budget decisions are approved by the board after consultation with staff and community representatives. Operational decisions are delegated with clear accountability and published minutes on request.
              </p>
            </div>
          </div>
        </section>

        {/* POLICIES & DOCUMENTS */}
        <section id="policies" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Policies & downloadable documents</h2>
          <p className="text-gray-700 mb-4">
            We publish our core policies and a transparency report so users and partners can verify our approach.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a href="/privacy-policy" className="p-4 border rounded-lg hover:shadow-sm flex items-center justify-between">
              <span>Privacy Policy</span>
              <span className="text-gray-500">View</span>
            </a>

            <a href="/terms" className="p-4 border rounded-lg hover:shadow-sm flex items-center justify-between">
              <span>Terms of Service</span>
              <span className="text-gray-500">View</span>
            </a>

            <a href="/reports/transparency-2025.pdf" className="p-4 border rounded-lg hover:shadow-sm flex items-center justify-between" target="_blank" rel="noopener noreferrer">
              <span>Transparency Report (PDF)</span>
              <span className="text-gray-500">Download</span>
            </a>

            <a href="/reports/safeguarding-policy.pdf" className="p-4 border rounded-lg hover:shadow-sm flex items-center justify-between" target="_blank" rel="noopener noreferrer">
              <span>Safeguarding Policy</span>
              <span className="text-gray-500">Download</span>
            </a>
          </div>
        </section>

        {/* FINANCIAL TRANSPARENCY */}
        <section id="finance" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Financial transparency</h2>
          <p className="text-gray-700 mb-3">
            We publish an annual transparency report showing income, expenses and impact metrics. Our finances follow standard accounting practice and are reviewed by an independent advisor.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-800">How we use income</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Service delivery and staff costs.</li>
                <li>Community outreach and translation projects.</li>
                <li>Operational overheads kept deliberately low.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-800">Accountability</h3>
              <p className="text-gray-600 mt-2">Annual financial statements are included in the transparency report. Requests for more detail can be made through the contact page.</p>
            </div>
          </div>
        </section>

        {/* COMPLAINTS */}
        <section id="complaints" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Complaints and feedback</h2>
          <p className="text-gray-700 mb-3">
            We welcome feedback and take complaints seriously. Our complaints process is straightforward and free.
          </p>

          <ol className="list-decimal list-inside text-gray-600">
            <li>Raise the issue via Contact or email help@resinaro.com.</li>
            <li>We acknowledge receipt within 3 business days.</li>
            <li>We investigate and propose a resolution, typically within 10 business days.</li>
            <li>If unresolved, an independent reviewer will be appointed where appropriate.</li>
          </ol>
        </section>

        {/* SAFEGUARDING & DATA */}
        <section id="safeguarding" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Safeguarding & data protection</h2>
          <p className="text-gray-700 mb-3">
            Protecting vulnerable people and handling personal data carefully are central to our work. Our safeguarding and data policies are available to download above.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg text-sm">
              <strong className="text-gray-800">Safeguarding</strong>
              <p className="text-gray-600 mt-2">Designated safeguarding officer, reporting guidelines and mandatory checks for certain roles.</p>
            </div>

            <div className="p-4 border rounded-lg text-sm">
              <strong className="text-gray-800">Data protection</strong>
              <p className="text-gray-600 mt-2">We follow UK data protection standards. Contact help@resinaro.com to exercise your rights.</p>
            </div>
          </div>
        </section>

        {/* COMMUNITY TRUST / TESTIMONIALS */}
        <section id="trust" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Community trust</h2>
          <p className="text-gray-700 mb-4">Stories from people we support and partners help explain our impact.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <blockquote className="p-4 border rounded-lg text-gray-700 italic">
              &quot;Resinaro supported my family through a difficult application. They were clear and honest.&quot;
              <cite className="block mt-3 not-italic font-semibold text-green-900">— G. R.</cite>
            </blockquote>
            <blockquote className="p-4 border rounded-lg text-gray-700 italic">
              &quot;I volunteered with Resinaro and gained experience that helped me find paid work.&quot;
              <cite className="block mt-3 not-italic font-semibold text-green-900">— M. L.</cite>
            </blockquote>
            <blockquote className="p-4 border rounded-lg text-gray-700 italic">
              &quot;Transparent prices and clear expectations. Highly recommended.&quot;
              <cite className="block mt-3 not-italic font-semibold text-green-900">— F. D.</cite>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-900 mb-3">Frequently asked questions</h2>

          <details className="mb-3">
            <summary className="font-medium text-gray-800 cursor-pointer">Who can access Resinaro services?</summary>
            <div className="mt-2 text-gray-600 text-sm">
              Resinaro supports Italians and all migrants in the UK. Some services require documentation; staff will advise on eligibility.
            </div>
          </details>

          <details className="mb-3">
            <summary className="font-medium text-gray-800 cursor-pointer">Do you offer pro bono support?</summary>
            <div className="mt-2 text-gray-600 text-sm">
              We provide a limited number of pro bono slots for individuals in urgent need and partner with community groups to extend reach.
            </div>
          </details>

          <details className="mb-3">
            <summary className="font-medium text-gray-800 cursor-pointer">How do you handle conflicts of interest?</summary>
            <div className="mt-2 text-gray-600 text-sm">
              Conflicts of interest are declared to the board and managed in line with our governance policy. Contact us for the full policy.
            </div>
          </details>
        </section>

        {/* CTA */}
        <section className="bg-green-900 py-8 px-6 rounded-xl text-center text-white">
          <h3 className="text-xl font-semibold mb-2">Questions about governance or transparency?</h3>
          <p className="text-sm mb-4">Email help@resinaro.com or download our transparency report for detailed figures and policies.</p>
          <div className="flex justify-center gap-3">
            <a href="/reports/transparency-2025.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-green-900 px-5 py-2 rounded-md font-semibold">Download report</a>
            <a href="/contact" className="border-white border px-5 py-2 rounded-md hover:bg-white/10">Contact us</a>
          </div>
        </section>
      </div>

      {/* JSON-LD scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  );
}
