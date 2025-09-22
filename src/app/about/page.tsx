import type { Metadata } from "next";
import Script from "next/script";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Resinaro | Fair, transparent support for Italians & migrants in the UK",
  description:
    "Resinaro helps migrants with passports, ID cards, NIN, AIRE, housing guidance and mental health signposting — clear pricing and community-first values.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Resinaro",
    description:
      "Professional migrant support with fair pricing, transparency and real outcomes.",
    url: "/about",
    images: ["/images/about/hero-bluehour.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Resinaro",
    description:
      "Fair, transparent migrant support in the UK — passports, NIN, AIRE, housing, mental health signposting.",
    images: ["/images/about/hero-bluehour.png"],
  },
};

export default function Page() {
  // JSON-LD: Organization + Social
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://resinaro.com/",
    "logo": "https://resinaro.com/icon.svg",
    "sameAs": [
      "https://www.youtube.com/@resinaroUK",
      "https://www.instagram.com/resinaro",
      "https://x.com/resinaro",
      "https://facebook.com/resinaro"
    ],
    "description":
      "Resinaro provides fair, transparent support for Italians and migrants in the UK.",
    "foundingDate": "2025-01-01",
    "areaServed": "GB",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "help@resinaro.com",
      "contactType": "customer support",
      "availableLanguage": ["it", "en"]
    }
  };

  // JSON-LD: Breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://resinaro.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://resinaro.com/about"
      }
    ]
  };

  // JSON-LD: FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Resinaro provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We help with Italian passports, ID card (CIE) appointments, National Insurance numbers, AIRE registration, housing guidance, and mental health signposting."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only help Italians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. We support Italians and all migrants living in the UK. Our community is inclusive and open to everyone."
        }
      },
      {
        "@type": "Question",
        "name": "Are your prices transparent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. We publish clear rates with no hidden fees and explain what’s included before you commit."
        }
      }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Structured data */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <HeroBanner
        src="/images/about/hero-bluehour.png"
        alt="Blue-hour panorama: Florence Duomo and Colosseum blending into Tower Bridge, London Eye and Big Ben, connected by a modern bridge over a calm river."
        title="About Resinaro"
        subtitle="Professional migrant support with community values — fair pricing, transparency, and real outcomes."
        priority
      />

      <section className="mx-auto max-w-4xl px-6 sm:px-8 py-10 sm:py-14">
        <p className="text-lg mb-8">
          Resinaro is a support business with the values of a community
          organisation. We help Italians — and all people — navigate life in the UK with
          transparency, fairness, and care. Our services feel like a charity, but with the
          structure and efficiency of a professional business.
        </p>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Our Mission: Support Made Simple</h2>
          <p>
            We make UK systems easier to navigate — passports, CIE, NIN, AIRE, housing and
            mental health signposting. You get professional guidance with a community-first
            approach and clear next steps.
          </p>
          <p className="mt-2">
            <Link href="/services" className="text-green-800 underline hover:text-green-900">
              See all Services
            </Link>
          </p>
        </section>

        {/* Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Our Story</h2>
          <p>
            We founded Resinaro after seeing too many people struggle with bureaucracy —
            and too many agencies charging unfair fees. We started by helping friends and
            family and have grown into a trusted support network across the UK.
          </p>
          <ul className="list-disc list-inside mb-4 mt-2">
            <li>Clear pricing, no hidden costs.</li>
            <li>Friendly support, not cold transactions.</li>
            <li>Community-first mindset with professional execution.</li>
          </ul>
        </section>

        {/* SEO Table 1: What we help with */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">What We Help With</h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Service</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Turnaround</th>
                  <th className="px-4 py-3 text-left font-semibold">What You Get</th>
                  <th className="px-4 py-3 text-left font-semibold">Starting Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3">Passport & Consular</td>
                  <td className="px-4 py-3">1–3 weeks (consulate slots vary)</td>
                  <td className="px-4 py-3">Appointment booking, document check, step-by-step preparation</td>
                  <td className="px-4 py-3">Fair, clear pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">ID Card (CIE)</td>
                  <td className="px-4 py-3">1–2 weeks</td>
                  <td className="px-4 py-3">Appointment booking, checklist, follow-up guidance</td>
                  <td className="px-4 py-3">Fair, clear pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">National Insurance (NIN)</td>
                  <td className="px-4 py-3">2–4 weeks</td>
                  <td className="px-4 py-3">Application support, HMRC guidance, document prep</td>
                  <td className="px-4 py-3">Fair, clear pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">AIRE Registration</td>
                  <td className="px-4 py-3">2–6 weeks (municipality dependent)</td>
                  <td className="px-4 py-3">SPID/AIRE help, document review, submission routine</td>
                  <td className="px-4 py-3">Fair, clear pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Housing Guidance</td>
                  <td className="px-4 py-3">3–10 days</td>
                  <td className="px-4 py-3">Search strategy, scam checks, rights & tenancy basics</td>
                  <td className="px-4 py-3">Fair, clear pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Mental Health Signposting</td>
                  <td className="px-4 py-3">Same week</td>
                  <td className="px-4 py-3">NHS pathways, charities & multilingual resources</td>
                  <td className="px-4 py-3">Free (donations not requested)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO Table 2: Resinaro vs Typical Agency */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Why People Choose Resinaro</h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Resinaro</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3">Transparent pricing</td>
                  <td className="px-4 py-3">✅ Clear, upfront</td>
                  <td className="px-4 py-3">❓ Varies</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Community-first approach</td>
                  <td className="px-4 py-3">✅ Inclusive, supportive</td>
                  <td className="px-4 py-3">❓ Transactional</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Mental health signposting</td>
                  <td className="px-4 py-3">✅ Included</td>
                  <td className="px-4 py-3">❓ Not always</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Clear documentation checklists</td>
                  <td className="px-4 py-3">✅ Step-by-step</td>
                  <td className="px-4 py-3">❓ Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">UK + Italian admin experience</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">❓ Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ (visible content matches JSON-LD) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="mb-3 bg-white rounded-lg border border-neutral-200 p-4">
            <summary className="font-semibold cursor-pointer">What services does Resinaro provide?</summary>
            <p className="mt-2 text-sm">
              We help with Italian passports, ID card (CIE) appointments, National Insurance numbers, AIRE registration,
              housing guidance, and mental health signposting.
            </p>
          </details>
          <details className="mb-3 bg-white rounded-lg border border-neutral-200 p-4">
            <summary className="font-semibold cursor-pointer">Do you only help Italians?</summary>
            <p className="mt-2 text-sm">
              No. We support Italians and all migrants living in the UK. Our community is inclusive and open to everyone.
            </p>
          </details>
          <details className="bg-white rounded-lg border border-neutral-200 p-4">
            <summary className="font-semibold cursor-pointer">Are your prices transparent?</summary>
            <p className="mt-2 text-sm">
              Yes. We publish clear rates with no hidden fees and explain what’s included before you commit.
            </p>
          </details>
        </section>

        {/* Contact */}
        <div className="mt-8 text-center">
          <span className="block text-lg">
            Contact us at{" "}
            <a href="mailto:help@resinaro.com" className="underline text-green-800 hover:text-green-900">
              help@resinaro.com
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}
