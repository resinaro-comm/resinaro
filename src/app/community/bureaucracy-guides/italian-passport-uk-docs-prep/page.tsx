import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Italian Passport in the UK (2025): Documents, Preparation & What to Expect",
  description:
    "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.",
  alternates: {
    canonical: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I renew my passport by post?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No—Italian passports are biometric and usually require an in-person appointment to take fingerprints (exceptions for certain minors).",
        },
      },
      {
        "@type": "Question",
        name: "Do I need AIRE to renew?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, you are expected to be correctly registered with AIRE at your consulate before booking.",
        },
      },
      {
        "@type": "Question",
        name: "My old passport is lost—what now?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "File a police report and bring it. Bring any copy/scan of your previous passport if available.",
        },
      },
      {
        "@type": "Question",
        name: "How early should I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Slots can be scarce; prepare your documents first, then book as soon as you can. Cancellations appear unpredictably.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      {/* Hero (no image dependency) */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Italian Passport in the UK (2025): Documents, Preparation & What to Expect
          </h1>
          <p className="mt-3 text-white/90">
            Prepare once, avoid repeat visits. Use the checklists and tables below to get it right the first time.
          </p>
          {/* Hero image prompt (for your design workflow) */}
          {/* Prompt: Photorealistic indoor admin scene, Italian passport booklet on a walnut desk with a UK utility bill,
              biometric photos, and a printed appointment confirmation. Soft daylight, neutral tones, premium editorial style. 3840×1600. */}
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/italian-passport-uk-hero-3840x1280.png"
            alt="Italian passport application documents on a desk with UK proof of address and biometric photos"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Preparing documents for Italian passport renewal in the UK — organize all documents before your appointment.
          </figcaption>
        </figure>

        {/* Intro note */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            This guide focuses on <strong>preparation and documents</strong> so your appointment goes smoothly. If you’d
            like us to help with booking or reviewing your file, we offer a simple, transparent service:&nbsp;
            <Link href="/services/passport" className="underline text-green-900 hover:text-green-800">
              Passport &amp; Consular Services
            </Link>.
          </p>
        </div>

        {/* Who can apply */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Who can apply in the UK?</h2>
          <p>
            You should apply for (or renew) your Italian passport at the <strong>Italian consulate that covers your UK area</strong> and where you are <strong>registered with AIRE</strong>. Generally:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>London Consulate</strong> — England &amp; Wales
            </li>
            <li>
              <strong>Manchester Consulate</strong> — North &amp; some Midlands
            </li>
            <li>
              <strong>Edinburgh Consulate</strong> — Scotland &amp; Northern Ireland
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            Confirm your consular jurisdiction on your consulate’s page.
          </p>
        </section>

        {/* Required Documents (Adults) */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Required Documents (Adults)</h2>
          <p className="mb-3">Use this checklist to assemble your file <strong>before</strong> you try to book.</p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Item</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Valid ID</strong></td>
                  <td>Old passport (if renewing) or Italian ID. Lost/stolen: police report.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>AIRE</strong></td>
                  <td>Registered at the correct consulate via <strong>FAST IT</strong>.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>UK proof of address</strong></td>
                  <td>Recent bill, bank statement, or council tax (match AIRE record).</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Biometric photos</strong></td>
                  <td>2 photos, <strong>35×45&nbsp;mm</strong>, neutral expression, light background.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Consular fee</strong></td>
                  <td>Pay in GBP at the consulate (check local rules).</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Appointment confirmation</strong></td>
                  <td>Print/screenshot of your <strong>Prenot@Mi</strong> booking.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3">
            <strong>If your surname has changed</strong> (marriage/divorce), bring proof (marriage certificate, deed poll, etc.).<br />
            <strong>If your passport is lost/stolen</strong>, bring the UK police report + any copy of your old passport.
          </p>
        </section>

        {/* Minors */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Minors (Under 18)</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Item</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Both parents’ consent</strong></td>
                  <td>Usually both attend/sign. Some consulates accept notarised consent if one cannot attend.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Child’s birth certificate</strong></td>
                  <td>Long-form with parents’ names (first issuance).</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>AIRE</strong></td>
                  <td>Parent(s) correctly registered; child registered too.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Photos</strong></td>
                  <td>2 biometric photos (same specs as adults).</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Fees</strong></td>
                  <td>Reduced for minors (check current quarter).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Costs & Processing */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Costs & Processing at a Glance</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Item</th>
                  <th>Typical expectation</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Fee</strong></td>
                  <td>Updated quarterly (FX). Adults ~€116 equiv.; minors less. Pay in GBP.</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Processing time</strong></td>
                  <td>Often same day or a few days by courier (varies by consulate).</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Booking delays</strong></td>
                  <td>Slots limited; prepare docs first and watch for cancellations.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-white border border-green-200 rounded-xl p-5 shadow-sm">
            <p className="mb-2">
              We can help you <strong>review your documents</strong> and <strong>book the earliest viable appointment</strong>.
            </p>
            <Link
              href="/services/passport"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get Passport Help →
            </Link>
          </div>
        </section>

        {/* Booking Platform */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Booking Platform (Prenot@Mi)</h2>
          <p>
            You’ll normally book via <strong>Prenot@Mi</strong> (Italian MFA platform). Create an account and select your consulate:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Prenot@Mi
              </a>
            </li>
            <li>
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                FAST IT (Servizi Consolari Online — AIRE, etc.)
              </a>
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            <strong>Tip:</strong> keep your <strong>AIRE data</strong> and <strong>address</strong> in FAST IT fully up to date—many applications will not proceed otherwise.
          </p>
        </section>

        {/* Pitfalls */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Common Pitfalls (and how to avoid them)</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>AIRE not updated</strong> → Update via <strong>FAST IT</strong> before trying to book.</li>
            <li><strong>Photo specs wrong</strong> → Ask for <strong>35×45&nbsp;mm biometric photos</strong>.</li>
            <li><strong>Wrong jurisdiction</strong> → Apply only at your consulate.</li>
            <li><strong>Address mismatch</strong> → Proof of address must match AIRE.</li>
            <li><strong>Name changes not reflected</strong> → Bring official documents and update AIRE first.</li>
          </ol>
        </section>

        {/* Useful Links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful Links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a href="https://www.esteri.it/" target="_blank" rel="noopener noreferrer" className="underline text-green-900">
                Italian MFA (esteri.it)
              </a>
            </li>
            <li>
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                FAST IT (AIRE &amp; services)
              </a>
            </li>
            <li>
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Booking (Prenot@Mi)
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">Can I renew my passport by post?</summary>
            <p className="mt-2">
              No—Italian passports are biometric and usually require an <strong>in-person</strong> appointment to take fingerprints (exceptions for some minors).
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">Do I need AIRE to renew?</summary>
            <p className="mt-2">
              Yes, you’re expected to be correctly registered with <strong>AIRE</strong> at your consulate before booking.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">My old passport is lost—what now?</summary>
            <p className="mt-2">
              File a <strong>police report</strong> and bring it. Bring any copy/scan of your previous passport if available.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">How early should I book?</summary>
            <p className="mt-2">
              Slots can be scarce; prepare your documents first, then book as soon as you can. Cancellations appear unpredictably.
            </p>
          </details>
        </section>

        {/* Final CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help assembling your file or getting an appointment?
            </p>
            <Link
              href="/services/passport"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Passport &amp; Consular Services →
            </Link>
          </div>
        </section>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}