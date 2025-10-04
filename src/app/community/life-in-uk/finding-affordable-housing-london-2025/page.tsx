// src/app/community/housing/finding-affordable-housing-london-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Finding Affordable Housing in London (2025): Where to search, your rights & how to avoid scams",
  description:
    "Practical guide to finding affordable housing in London for migrants: search channels, tenancy rights, deposit protection, avoiding scams, council housing, and emergency support (2025).",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/housing/finding-affordable-housing-london-2025",
  },
};

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/life-in-uk/housing/finding-affordable-housing-london-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I prove my identity and address for renting in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Landlords and referencing agencies commonly ask for a passport or BRP for ID, and a recent utility bill, bank statement or tenancy agreement for address proof. If you lack UK proof-of-address, some landlords accept a letter from an employer or a tenancy reference; be honest and contact the landlord in advance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know a deposit is protected?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "In England and Wales, landlords must protect deposits in a government-approved Tenancy Deposit Scheme (TDS) and provide details within 30 days of receiving the deposit. Ask the landlord for the scheme name and reference and check the scheme’s website if you’re unsure.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I suspect a rental scam?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Never transfer money before viewing the property and meeting the landlord/agent. Verify the listing across multiple sites, ask for ID and proof of ownership, and report suspicious listings to the platform and to Action Fraud (if in the UK).",
        },
      },
      {
        "@type": "Question",
        name: "Can I apply for council housing as a recent arrival?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Eligibility for council housing depends on local rules and residency status. Some councils will require a period of local connection or proof of eligibility—check the website of your local borough for the exact rules.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline:
      "Finding Affordable Housing in London (2025): Where to search, your rights & how to avoid scams",
    description:
      "Practical guide to finding affordable housing in London for migrants: search channels, tenancy rights, deposit protection, avoiding scams, council housing, and emergency support (2025).",
    image: ["https://www.resinaro.com/images/housing-london-hero.jpg"],
    author: {
      "@type": "Person",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/logo.png",
      },
    },
    datePublished: "2025-09-24",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Finding Affordable Housing in London (2025): Guide for New Arrivals
          </h1>
          <p className="mt-3 text-white/90">
            Practical, step-by-step advice for searching, applying and protecting
            yourself in London&apos;s rental market — where to look, how to avoid scams,
            your tenant rights, and what to do in an emergency.
          </p>
          {/* Hero image prompt (design workflow):
               "Editorial photo: a rented flat keyring on a small table with a London skyline blurred in the background;
               warm natural light, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/housing-london-hero-3840x1280.png"
            alt="London housing search with rental listings and viewing appointments for affordable accommodation"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Finding affordable housing in London — search strategies, tenant rights, and avoiding rental scams.
          </figcaption>
        </figure>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            London is expensive, but affordable options exist if you know where to look and how to protect yourself.
            This guide covers searchable channels, how referencing works, tenancy deposit rules, common scams, council housing routes,
            and immediate support for homelessness or unsafe accommodation.
          </p>
          <p className="mt-3">
            Need help with references, proof-of-address or tenancy checks?{" "}
            <Link
              href="/services/housing"
              className="underline text-green-900 hover:text-green-800"
            >
              Book housing support →
            </Link>
          </p>
        </div>

        {/* Quick checklist */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Quick checklist (before you search)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Passport or BRP for ID</li>
            <li>Recent proof of address (bank statement, bill) if you have one</li>
            <li>References from previous landlords or employer (if available)</li>
            <li>Budget calculator (rent + bills) — aim for rent ≤ 35% of take-home pay</li>
            <li>Photos of yourself and a short introduction message for contacting landlords</li>
          </ul>
        </section>

        {/* Where to search */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Where to search</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Property portals</strong> — Rightmove and Zoopla for whole flats; SpareRoom for flatshares and lodgings.
            </li>
            <li>
              <strong>Local groups</strong> — Facebook community groups and local noticeboards often have sublets and private landlords.
            </li>
            <li>
              <strong>University & workplace boards</strong> — great for short-term rooms and shared housing near campuses.
            </li>
            <li>
              <strong>Charities & community partners</strong> — local migrant support groups sometimes hold housing lists or trusted landlord contacts.
            </li>
          </ul>
        </section>

        {/* How referencing & renting works */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">How referencing and tenancy setup works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>View the property</strong> — always view in person or via a live video call, ask to see ID and ownership proof.
            </li>
            <li>
              <strong>Apply & referencing</strong> — agencies often run credit/reference checks and ask for proof of income and ID.
            </li>
            <li>
              <strong>Deposit & holding fees</strong> — landlords may ask for a holding deposit (max one week’s rent) and then a security deposit (protected in a TDS).
            </li>
            <li>
              <strong>Sign tenancy</strong> — read the tenancy agreement carefully; check lengths, break clauses, notice periods and repairs responsibilities.
            </li>
            <li>
              <strong>Inventory & move-in</strong> — agree an inventory and condition report to avoid unfair deposit deductions later.
            </li>
          </ol>
        </section>

        {/* Tenancy deposit protection */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Deposit protection & your rights</h2>
          <p className="mb-3">
            In England & Wales landlords must place deposits into a government-approved Tenancy Deposit Scheme (TDS) and give you the details.
            Hold the tenancy agreement and TDS details safe — you’ll need them if a dispute occurs.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Tenant right</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3">
                  <td>Deposit protection</td>
                  <td>Deposit must be protected and details given to you.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3">
                  <td>Safe living standards</td>
                  <td>Landlord must repair hazards and ensure the property is safe to live in.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3">
                  <td>Notice & eviction</td>
                  <td>Landlords must follow legal eviction processes; unlawful eviction is illegal.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Avoiding scams */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Avoiding rental scams</h2>
          <p className="mb-3">
            Scammers often copy real listings or invent fake properties. Protect yourself with these rules:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Always view in person or via live video with the landlord/agent present.</li>
            <li>Never transfer large sums before a tenancy agreement is signed — prefer secure payment methods.</li>
            <li>Verify the listing across multiple portals and check the ownership (land registry/agency).</li>
            <li>Ask for the deposit protection scheme name and reference — if the landlord refuses, be wary.</li>
          </ul>
        </section>

        {/* Council housing & emergency support */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Council housing & emergency help</h2>
          <p className="mb-3">
            Council housing has long waiting lists and strict eligibility, but it’s worth applying if you meet local criteria.
            For immediate help, charities such as Shelter and Citizens Advice can advise on homelessness prevention and emergency accommodation routes.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Apply to your local council housing register (eligibility varies by borough)</li>
            <li>Contact Shelter or Citizens Advice for free housing advice and legal help</li>
            <li>If you’re sleeping rough or at immediate risk, contact local services or dial 999 in an emergency</li>
          </ul>
        </section>

        {/* Budgeting & bills */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Budgeting for rent & bills</h2>
          <p className="mb-3">
            Factor in rent, council tax (if applicable), utilities, TV licence and internet. Tip: use separate bank &apos;pots&apos; or accounts for bills to avoid missed payments.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Estimate monthly total: rent + council tax + utilities + internet + groceries + transport.</li>
            <li>Aim to keep rent under ~35% of your take-home pay where possible.</li>
            <li>Ask about bills included in rent (some rooms include bills which can reduce cost).</li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Rightmove:{" "}
              <a
                href="https://www.rightmove.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                rightmove.co.uk
              </a>
            </li>
            <li>
              Zoopla:{" "}
              <a
                href="https://www.zoopla.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                zoopla.co.uk
              </a>
            </li>
            <li>
              SpareRoom:{" "}
              <a
                href="https://www.spareroom.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                spareroom.co.uk
              </a>
            </li>
            <li>
              Shelter (housing charity):{" "}
              <a
                href="https://www.shelter.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                shelter.org.uk
              </a>
            </li>
            <li>
              Citizens Advice:{" "}
              <a
                href="https://www.citizensadvice.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                citizensadvice.org.uk
              </a>
            </li>
            <li>
              Tenancy Deposit Schemes (England & Wales) — check with the landlord for the scheme name.
            </li>
          </ul>
        </section>

        {/* FAQs interactive */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">What is a holding deposit?</summary>
            <p className="mt-2">
              A holding deposit is usually one week’s rent to reserve a property while references are checked. It should be refunded or put towards the tenancy deposit if the application proceeds. Keep proof of payment.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">What rights do tenants have for repairs?</summary>
            <p className="mt-2">
              Landlords are responsible for most repairs that affect health and safety (e.g., gas safety, heating, structural issues). Report issues in writing and keep copies of communications.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">Can I have a guarantor?</summary>
            <p className="mt-2">
              Many landlords ask for a UK-based guarantor (someone who agrees to pay if you don’t). If you don’t have a guarantor, ask landlords if they accept paid guarantor services or a larger deposit (legal limits apply).
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Struggling to find a safe, affordable place? Resinaro helps with document checks, references, and trusted partner introductions.
            </p>
            <Link
              href="/services/housing"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get housing support →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
