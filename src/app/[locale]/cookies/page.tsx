import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

export const metadata = {
  title: "Cookies Policy — Resinaro",
  description:
    "Resinaro cookies policy: what cookies we use, why we use them, third-party cookies, how to manage them and your rights under data protection law.",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const pageUrl = "https://www.resinaro.com/cookies";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are cookies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cookies are small text files stored on your device that help a website remember information about your visit, improve performance and deliver features."
        }
      },
      {
        "@type": "Question",
        "name": "How do I change my cookie preferences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the cookie settings control on this site, change your browser settings, or follow the opt-out links supplied in this policy for third-party services such as Google Analytics and advertising networks."
        }
      },
      {
        "@type": "Question",
        "name": "Will cookies affect my privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential cookies are necessary for the website to function. Non-essential cookies relate to analytics or marketing and are only used with your consent where required by law."
        }
      }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "headline": "Cookies Policy — Resinaro",
    "description":
      "Resinaro cookies policy: what cookies we use, why we use them, third-party cookies, how to manage them and your rights under data protection law.",
    "author": { "@type": "Organization", "name": "Resinaro" },
    "publisher": {
      "@type": "Organization",
      "name": "Resinaro",
      "logo": { "@type": "ImageObject", "url": "https://www.resinaro.com/logo.png" }
    },
    "datePublished": "2025-01-01"
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Cookies Policy</h1>
          <p className="mt-3 text-white/90">
            Last updated: January 2025. This page explains the cookies we use, why we use them and how you can manage your preferences.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="leading-relaxed">
            Resinaro uses cookies and similar technologies to provide a secure, personalised and reliable service to our customers.
            We operate to the highest standards of compliance and transparency. This policy explains the categories of cookies we use, the legal basis for using them, how long they persist and how you can control them.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            For details about how we process personal data generally, see our{" "}
            <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Purpose & legal basis */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Purpose &amp; legal basis</h2>
          <p>
            We use cookies for four main purposes:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-2 space-y-2">
            <li><strong>Essential operation</strong> — cookies required to operate the site, keep your session secure and allow you to use features such as forms and account areas. These cookies are strictly necessary and do not require consent.</li>
            <li><strong>Performance and analytics</strong> — cookies that help us understand how visitors use our site so we can improve performance and user experience. Where required by law we rely on your consent or perform a legitimate interest assessment.</li>
            <li><strong>Functionality</strong> — cookies that remember preferences such as language or display settings so the site remembers your choices.</li>
            <li><strong>Marketing and advertising</strong> — cookies used by us or third parties to show relevant offers and measure campaign performance; these are only used with your consent where required.</li>
          </ol>
        </section>

        {/* Cookie table */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Cookies we commonly use</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Category</th>
                  <th>Cookie / Example</th>
                  <th>Purpose</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Essential</td>
                  <td>sessionid, csrf_token</td>
                  <td>Keep you logged in, protect against cross-site request forgery and enable core functionality.</td>
                  <td>Session or up to 24 hours</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Analytics</td>
                  <td>_ga, _gid, _gat, gaclient</td>
                  <td>Measure visits, pages viewed and performance to improve the site. Data is aggregated and pseudonymised.</td>
                  <td>From 24 hours to 2 years</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Functionality</td>
                  <td>language, theme, cookieconsent_status</td>
                  <td>Remember user preferences such as interface language and cookie consent choices.</td>
                  <td>30 days to 1 year</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Marketing</td>
                  <td>_fbp, fr, IDE, test_cookie</td>
                  <td>Deliver personalised adverts and measure campaign effectiveness (set by advertising networks).</td>
                  <td>30 days to 2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Note: Exact cookie names and retention periods may change. Where cookies are set by third parties we list the provider and a link to their cookie policy in the &quot;Third-party cookies&quot; section below.
          </p>
        </section>

        {/* Third-party cookies */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Third-party cookies and service providers</h2>
          <p>
            We use a small number of trusted third-party services to deliver analytics, payments and advertising. These providers set cookies on our site under their own privacy policies. Examples include:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>
              <strong>Google Analytics</strong> — analytics provider. See Google&apos;s cookie and privacy documentation on its website for details and opt-out options.
            </li>
            <li>
              <strong>Payment providers</strong> — providers such as Stripe or other partners may set cookies to enable secure payments and fraud prevention.
            </li>
            <li>
              <strong>Advertising networks</strong> — where we show personalised ads, partners may set cookies to measure performance. You can opt out using industry-standard tools such as the Network Advertising Initiative and your browser controls.
            </li>
          </ul>
        </section>

        {/* Retention and data handling */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Data retention and handling</h2>
          <p>
            We retain cookie-related data only for as long as it is needed to fulfil the purpose described above or to comply with legal obligations. Where cookies store identifiers that may be considered personal data, we treat that data in line with our Privacy Policy and with applicable data protection law.
          </p>
        </section>

        {/* How to manage cookies */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">How to manage and withdraw consent</h2>
          <p>
            You have choices about cookies:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>
              <strong>Cookie settings on this site</strong> — open the cookie settings control in the footer or use the <Link href="#cookie-settings" className="underline text-green-900">cookie preferences</Link> control to accept or decline non-essential cookies.
            </li>
            <li>
              <strong>Browser controls</strong> — modern browsers allow you to block or delete cookies. Check the help pages for your browser (Chrome, Edge, Firefox, Safari) for step-by-step instructions.
            </li>
            <li>
              <strong>Third-party opt-out</strong> — follow vendor opt-out links (for example Google Analytics opt-out browser add-on) or use industry opt-out mechanisms.
            </li>
          </ul>

        

        </section>

        {/* Security and business-level practices */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Security and responsible use</h2>
          <p>
            Resinaro treats customer privacy and data security as priority business obligations. We ensure that:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Third-party providers are selected on security, privacy and trust criteria.</li>
            <li>We limit cookie lifetimes to the minimum necessary for each purpose.</li>
            <li>Access to any data derived from cookies is strictly controlled and logged as part of our internal compliance controls.</li>
          </ul>
        </section>

        {/* Contact & complaints */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Contact and complaints</h2>
          <p>
            If you have questions about this policy, want to withdraw consent or raise a privacy concern please contact our Data Protection Officer at:
          </p>
          <p className="mt-2"><strong>Email:</strong> <a href="mailto:resinaro@proton.me" className="underline text-green-900">resinaro@proton.me</a></p>
          <p className="mt-3">
            You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data in accordance with applicable law.
          </p>
        </section>

        {/* Useful links */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://www.privacyguides.org/en/" target="_blank" rel="noopener noreferrer" className="underline text-green-900">Privacy resources</a> (helpful site for privacy guides).</li>
            <li><a href="https://support.google.com/analytics/answer/181881" target="_blank" rel="noopener noreferrer" className="underline text-green-900">Google Analytics Opt-out</a></li>
            <li><Link href={p(locale, "/privacy-policy")} className="underline text-green-900">Resinaro Privacy Policy</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help understanding how cookies affect your account or privacy? Our team can help you review settings and opt-outs.
            </p>
            <Link href={p(locale, "/contact")} className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800">
              Contact us →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
