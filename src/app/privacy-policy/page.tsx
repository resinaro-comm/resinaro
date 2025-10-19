// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Resinaro",
  description:
    "How Resinaro collects, uses, shares and protects personal information for visitors, customers, advertisers and directory partners in the UK.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "17 October 2025";

export default function PrivacyPolicy() {
  const sections = [
    { id: "intro", title: "1) Introduction & Who We Are" },
    { id: "scope", title: "2) Scope of this Policy" },
    { id: "definitions", title: "3) Key Definitions" },
    { id: "data-we-collect", title: "4) Data We Collect" },
    { id: "sources", title: "5) Where We Get Data From" },
    { id: "purposes", title: "6) Why We Use Your Data (Purposes)" },
    { id: "legal-bases", title: "7) Lawful Bases (UK GDPR)" },
    { id: "ads-sponsors", title: "8) Advertisers, Sponsors & Directory Leads" },
    { id: "cookies", title: "9) Cookies, Analytics & Similar Tech" },
    { id: "sharing", title: "10) Sharing with Service Providers" },
    { id: "intl", title: "11) International Transfers" },
    { id: "retention", title: "12) Retention" },
    { id: "security", title: "13) Security" },
    { id: "your-rights", title: "14) Your Rights (UK & EU)" },
    { id: "dsar", title: "15) How to Make a Request" },
    { id: "children", title: "16) Children" },
    { id: "automated", title: "17) Automated Decision-Making / Profiling" },
    { id: "third-parties", title: "18) Links to Third Parties" },
    { id: "business-listings", title: "19) Business Listings & Public Info" },
    { id: "ugcsafe", title: "20) User Content, Reviews & Moderation" },
    { id: "no-sell", title: "21) Do We Sell or Share Data?" },
    { id: "changes", title: "22) Changes to this Policy" },
    { id: "complaints", title: "23) Complaints & Supervisory Authority" },
    { id: "contact", title: "24) How to Contact Us" },
    { id: "legal-note", title: "25) Important Legal Notes" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Resinaro Privacy Policy",
    description:
      "Privacy notice covering visitors, customers, advertisers and directory partners using Resinaro in the UK.",
    dateModified: LAST_UPDATED,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      url: "https://resinaro.co.uk",
    },
    url: "https://resinaro.co.uk/privacy-policy",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex max-w-6xl gap-8 px-6 py-14">
        {/* TOC (sticky on desktop) */}
        <nav className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-2xl border bg-white/70 p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-emerald-800">On this page</p>
            <ul className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a className="text-gray-700 hover:text-emerald-800" href={`#${s.id}`}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content */}
        <article className="w-full">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-600">Last updated: {LAST_UPDATED}</p>
            <p className="mt-4 max-w-3xl text-gray-700">
              Resinaro (“<strong>Resinaro</strong>”, “we”, “us”) respects your privacy and is committed to protecting
              personal information. This policy explains what we collect, why, how we use and share it, and your rights.
              It applies to our website, forms, and services offered in the UK. It does not replace any contract we may
              have with you.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              <em>Heads-up:</em> This page is informational, not legal advice. Please also read our{" "}
              <Link href="/terms" className="underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="underline underline-offset-2">
                Cookies Policy
              </Link>
              .
            </p>
          </header>

          <Section id="intro" title="1) Introduction & Who We Are">
            <p>
              Resinaro operates community support and information services for Italians in the UK, including guides,
              directories, lead forms and partner promotions. For most activities, Resinaro is the{" "}
              <strong>data controller</strong>. For certain advertiser or directory lead-routing services we may act as a{" "}
              <strong>data processor</strong> on behalf of that business (see section 8).
            </p>
            <ul className="mt-3 list-disc pl-6 text-sm">
              <li>
                <strong>Controller:</strong> Resinaro, London, United Kingdom.
              </li>
              <li>
                <strong>Contact:</strong>{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>
              </li>
            </ul>
          </Section>

          <Section id="scope" title="2) Scope of this Policy">
            <p>This policy covers:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>Visitors to our website and readers of our content.</li>
              <li>People who enquire about or purchase our services.</li>
              <li>Advertisers, sponsors and businesses listed in our directories.</li>
              <li>Individuals who submit forms (e.g., “feature my business”, jobs, events).</li>
            </ul>
            <p className="mt-3">
              It does not cover third-party websites, apps or services we link to. See section 18.
            </p>
          </Section>

          <Section id="definitions" title="3) Key Definitions">
            <p>
              “<strong>Personal data</strong>” means information about an identified or identifiable person. “
              <strong>Processing</strong>” means any operation on personal data (collect, store, use, share…). “
              <strong>UK GDPR</strong>” is the UK General Data Protection Regulation and the Data Protection Act 2018.
            </p>
          </Section>

          <Section id="data-we-collect" title="4) Data We Collect">
            <ul className="list-disc pl-6">
              <li>
                <strong>Contact & account data</strong>: name, email, phone, preferred contact method, messages.
              </li>
              <li>
                <strong>Service data</strong>: details you provide for support (e.g., appointment preferences, document
                information necessary to prepare your request). We ask you to share only what is needed.
              </li>
              <li>
                <strong>Payment data</strong>: processed by our payment providers (e.g., Stripe/PayPal). We do not store
                full card numbers on our servers.
              </li>
              <li>
                <strong>Directory & advertiser data</strong>: business contact details, images, categories, service
                coverage, messaging and lead-routing choices.
              </li>
              <li>
                <strong>User content</strong>: reviews, Q&A submissions, event/job listings and attachments you upload.
              </li>
              <li>
                <strong>Technical data</strong>: device type, IP, pages viewed, referrer, cookies or similar IDs; see
                section 9.
              </li>
              <li>
                <strong>Public information</strong>: information available on public websites or registers relevant to a
                business listing (see section 19).
              </li>
            </ul>
            <p className="mt-3 text-sm text-amber-700">
              Sensitive (special category) information: we do not seek this intentionally. If your documents contain
              such data, we process it only where necessary to provide the requested service and with appropriate
              safeguards.
            </p>
          </Section>

          <Section id="sources" title="5) Where We Get Data From">
            <ul className="list-disc pl-6">
              <li>Directly from you (forms, email, WhatsApp, phone).</li>
              <li>From your device via cookies/analytics (see section 9).</li>
              <li>From publicly available sources about businesses for directory accuracy (section 19).</li>
              <li>From partners when you ask us to connect you (e.g., an advertiser receiving your lead).</li>
            </ul>
          </Section>

          <Section id="purposes" title="6) Why We Use Your Data (Purposes)">
            <ul className="list-disc pl-6">
              <li>To provide services you request and respond to enquiries.</li>
              <li>To operate directories, listings, jobs and events submissions.</li>
              <li>To route leads to advertisers or sponsors when you opt in.</li>
              <li>To run our website, prevent abuse and improve content.</li>
              <li>To process payments and manage accounting/tax records.</li>
              <li>To send service messages; and with consent, newsletters or marketing you can opt out of anytime.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </Section>

          <Section id="legal-bases" title="7) Lawful Bases (UK GDPR)">
            <ul className="list-disc pl-6">
              <li>
                <strong>Contract</strong>: where processing is necessary to deliver what you asked for.
              </li>
              <li>
                <strong>Consent</strong>: for optional marketing, cookies that aren’t strictly necessary, or when you ask
                us to share your enquiry with a partner.
              </li>
              <li>
                <strong>Legitimate interests</strong>: running a safe, useful website, preventing fraud, showing
                relevant directory results, measuring performance—balanced against your rights.
              </li>
              <li>
                <strong>Legal obligation</strong>: tax, accounting, fraud prevention and responding to lawful requests.
              </li>
            </ul>
          </Section>

          <Section id="ads-sponsors" title="8) Advertisers, Sponsors & Directory Leads">
            <p>
              We provide placements for businesses (sponsored or organic). If you submit a form requesting contact from
              a listed business or sponsor, we will share your enquiry with that business. In those cases:
            </p>
            <ul className="mt-3 list-disc pl-6">
              <li>
                Resinaro acts as{" "}
                <strong>independent controller</strong> for operating the website and capturing your enquiry, and
                generally as a <strong>processor</strong> when transmitting the enquiry to the chosen business.
              </li>
              <li>
                The recipient business becomes an <strong>independent controller</strong> of your data once it receives
                your enquiry and will process it under its own privacy policy.
              </li>
              <li>
                Sponsored/featured labels: we disclose paid placements. Payment does not affect how we process your
                personal data.
              </li>
              <li>
                We prohibit advertisers from adding you to marketing lists unless you have given them your consent.
              </li>
            </ul>
            <p className="mt-3 text-sm">
              If you believe a listing is inaccurate or you want us to stop routing your enquiry, contact{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
              .
            </p>
          </Section>

          <Section id="cookies" title="9) Cookies, Analytics & Similar Tech">
            <p>
              We use essential cookies for core functionality (security, forms) and, if enabled, optional analytics to
              understand aggregate usage. You can manage preferences in our{" "}
              <Link href="/cookies" className="underline underline-offset-2">
                Cookies Policy
              </Link>
              .
            </p>
            <ul className="mt-3 list-disc pl-6">
              <li>
                <strong>Essential</strong>: required to deliver pages and keep the site secure. These cannot be turned
                off.
              </li>
              <li>
                <strong>Analytics/Performance</strong>: page views, referrers, events (e.g., Vercel Analytics, GA4 or
                similar). We use aggregated reports; IPs may be processed transiently.
              </li>
              <li>
                <strong>Advertising/Attribution</strong>: only if we run campaigns or affiliates; we limit identifiers
                and respect your choices.
              </li>
            </ul>
          </Section>

          <Section id="sharing" title="10) Sharing with Service Providers">
            <p>
              We share data with trusted providers under contracts that restrict use to our instructions, including:
              hosting, analytics, email, payment processing, form handling, file storage, content delivery, and security
              services. Examples include (as relevant to our stack): hosting/CDN, analytics (e.g., Vercel Analytics),
              email, payment processors (e.g., Stripe/PayPal), form processors, and anti-abuse tools. We do not sell
              personal data.
            </p>
          </Section>

          <Section id="intl" title="11) International Transfers">
            <p>
              If we transfer data outside the UK/EEA, we rely on adequacy regulations or Standard Contractual Clauses
              with additional safeguards as required by UK GDPR.
            </p>
          </Section>

          <Section id="retention" title="12) Retention">
            <p>
              We retain data only as long as necessary for the purposes described or to comply with legal obligations.
              Documents you upload for one-off services are deleted once the service is complete unless we must keep a
              copy for legal reasons (e.g., tax records).
            </p>
          </Section>

          <Section id="security" title="13) Security">
            <ul className="list-disc pl-6">
              <li>Encryption in transit, access controls and least-privilege administration.</li>
              <li>Vendor due diligence and data processing agreements where appropriate.</li>
              <li>Regular backups and logging to detect abuse or fraud.</li>
            </ul>
            <p className="mt-3 text-sm">
              No system is 100% secure. If we become aware of a personal-data breach likely to result in a risk to your
              rights, we will notify the relevant authorities and, where required, affected individuals.
            </p>
          </Section>

          <Section id="your-rights" title="14) Your Rights (UK & EU)">
            <ul className="list-disc pl-6">
              <li>Access, rectification, erasure and restriction.</li>
              <li>Objection to processing based on legitimate interests.</li>
              <li>Portability (where applicable).</li>
              <li>Withdraw consent at any time (for activities based on consent).</li>
            </ul>
          </Section>

          <Section id="dsar" title="15) How to Make a Request">
            <p>
              Email{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>{" "}
              with the subject line “Data Request”. We may need to verify your identity. We aim to respond within one
              month. If your request is complex, we may extend by up to two months as permitted by law.
            </p>
          </Section>

          <Section id="children" title="16) Children">
            <p>
              Our services are designed for adults. We do not knowingly collect personal data from children under 16
              without appropriate consent. If you believe a child has provided us data, please contact us for deletion.
            </p>
          </Section>

          <Section id="automated" title="17) Automated Decision-Making / Profiling">
            <p>
              We do not make decisions with legal or similarly significant effects based solely on automated processing.
              We may use basic analytics to improve the site and measure interest in categories or cities.
            </p>
          </Section>

          <Section id="third-parties" title="18) Links to Third Parties">
            <p>
              Our content may link to third-party websites (e.g., Google Maps, booking portals, government pages). We do
              not control those sites or their privacy practices. Please review their policies before sharing data.
            </p>
          </Section>

          <Section id="business-listings" title="19) Business Listings & Public Info">
            <p>
              We publish business listings and city directories. To create accurate listings we may process information
              from public sources (official registers, business websites, publicly available profiles). If you represent
              a business and want to update or remove your listing, contact us at{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
              . We will verify ownership before making changes.
            </p>
          </Section>

          <Section id="ugcsafe" title="20) User Content, Reviews & Moderation">
            <p>
              Community submissions (reviews, Q&A, events, jobs) are provided by users. Users are responsible for the
              content they submit. We may moderate or remove content that violates our Terms (e.g., unlawful, abusive,
              defamatory, or privacy-invasive material) and we respond to valid takedown notices.
            </p>
          </Section>

          <Section id="no-sell" title="21) Do We Sell or Share Data?">
            <p>
              We do not sell personal data. We share data with service providers under contract and with businesses you
              explicitly ask us to contact, as described above.
            </p>
          </Section>

          <Section id="changes" title="22) Changes to this Policy">
            <p>
              We may update this policy to reflect changes to our services or the law. The “Last updated” date shows the
              current version. Significant changes will be highlighted on this page.
            </p>
          </Section>

          <Section id="complaints" title="23) Complaints & Supervisory Authority">
            <p>
              If you have concerns, please contact us first so we can try to resolve them. You also have the right to
              complain to the UK Information Commissioner’s Office (ICO):{" "}
              <Link
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                className="underline underline-offset-2"
              >
                ico.org.uk/make-a-complaint
              </Link>
              .
            </p>
          </Section>

          <Section id="contact" title="24) How to Contact Us">
            <p>
              Email:{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
              <br />
              Address: Resinaro, London, United Kingdom
            </p>
          </Section>

          <Section id="legal-note" title="25) Important Legal Notes">
            <ul className="list-disc pl-6 text-sm">
              <li>
                This policy does not create contractual rights. Any services are governed by our{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>
                .
              </li>
              <li>
                If any part of this policy conflicts with mandatory law, the law prevails to the extent of the conflict.
              </li>
              <li>
                If you are an advertiser or directory partner, our data processing terms apply to lead-routing and will
                form part of your commercial agreement with us.
              </li>
            </ul>
          </Section>

          <div className="mt-12 rounded-2xl border bg-white/60 p-6 text-sm text-gray-600">
            <p>
              <strong>Tip for businesses:</strong> If you need a signed data processing addendum (DPA) for your records,
              email us at{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

/* ---------- Small UI helper ---------- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24 rounded-2xl border bg-white/70 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-emerald-900">{title}</h2>
      <div className="prose prose-stone mt-3 max-w-none prose-a:text-emerald-800">
        {children}
      </div>
    </section>
  );
}
