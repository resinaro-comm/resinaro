import Link from "next/link";
import Image from "next/image";

// --- SEO ---
export const metadata = {
  title: "Italian Passport in the UK (2025): Documents, Preparation & What to Expect",
  description:
    "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.",
  metadataBase: new URL("https://www.resinaro.com"),
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
    <main className="bg-[#F8F6F1] text-gray-800">
      {/* ===== FULL-BLEED HERO ===== */}
      <section className="relative w-full min-h-[56vh] md:min-h-[64vh] isolate">
        {/* Background image (bleed) */}
        <Image
          src="/images/italian-passport-uk-hero-3840x1280.png"
          alt="Italian passport application documents on a desk with UK proof of address and biometric photos"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Veil + gradient edge for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
        {/* Hero copy */}
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="py-16 md:py-24 lg:py-28">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/25 backdrop-blur-sm">
                Aggiornato · 2025
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                Italian Passport in the UK (2025): Documents, Preparation &amp; What to Expect
              </h1>
              <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
                Prepare once, avoid repeat visits. Use the checklists and tables below to get it right the first time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#required-adults"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/90"
                >
                  See document checklist
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center rounded-xl bg-black/30 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-black/40"
                >
                  Booking tips (Prenot@Mi)
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Soft fade into page background */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-8 bg-gradient-to-b from-transparent to-[#F8F6F1]" />
      </section>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 pb-20">
        {/* Intro card */}
        <div className="mx-auto -mt-8 md:-mt-10 lg:-mt-12 relative z-20">
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-md p-5 md:p-6">
            <p className="leading-relaxed">
              This guide focuses on <strong>preparation and documents</strong> so your appointment goes smoothly. If you’d
              like us to help with booking or reviewing your file, we offer a simple, transparent service:&nbsp;
              <Link href="/services" className="underline text-green-900 hover:text-green-800">
                View Resinaro Services →
              </Link>.
            </p>
          </div>
        </div>

        {/* Quick “On this page” anchor links */}
        <nav
          aria-label="On this page"
          className="mt-8 mb-4 rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-black/5 p-4 text-sm"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a className="hover:underline text-green-900" href="#who">Who can apply</a></li>
            <li><a className="hover:underline text-green-900" href="#required-adults">Required documents (Adults)</a></li>
            <li><a className="hover:underline text-green-900" href="#minors">Minors</a></li>
            <li><a className="hover:underline text-green-900" href="#costs">Costs &amp; processing</a></li>
            <li><a className="hover:underline text-green-900" href="#booking">Booking (Prenot@Mi)</a></li>
            <li><a className="hover:underline text-green-900" href="#pitfalls">Common pitfalls</a></li>
            <li><a className="hover:underline text-green-900" href="#links">Useful links</a></li>
            <li><a className="hover:underline text-green-900" href="#faqs">FAQs</a></li>
          </ul>
        </nav>

        {/* Who can apply */}
        <section id="who" className="mt-10 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Who can apply in the UK?</h2>
          <p>
            You should apply for (or renew) your Italian passport at the <strong>Italian consulate that covers your UK area</strong> and where you are <strong>registered with AIRE</strong>. Generally:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>London Consulate</strong> — England &amp; Wales</li>
            <li><strong>Manchester Consulate</strong> — North &amp; some Midlands</li>
            <li><strong>Edinburgh Consulate</strong> — Scotland &amp; Northern Ireland</li>
          </ul>
          <p className="mt-2 text-gray-700">Confirm your consular jurisdiction on your consulate’s page.</p>
        </section>

        {/* Required Documents (Adults) */}
        <section id="required-adults" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Required Documents (Adults)</h2>
          <p className="mb-4">Use this checklist to assemble your file <strong>before</strong> you try to book.</p>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">Item</th>
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

          <p className="mt-4 text-gray-700">
            <strong>If your surname has changed</strong> (marriage/divorce), bring proof (marriage certificate, deed poll, etc.).<br />
            <strong>If your passport is lost/stolen</strong>, bring the UK police report + any copy of your old passport.
          </p>
        </section>

        {/* Minors */}
        <section id="minors" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Minors (Under 18)</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">Item</th>
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
                  <td>(check current quarter on official sites).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Costs & Processing */}
        <section id="costs" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Costs &amp; Processing at a Glance</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th className="w-1/3">Item</th>
                  <th>Typical expectation</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td><strong>Fee</strong></td>
                  <td>Updated quarterly (FX). Pay in GBP.</td>
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

          <div className="mt-4 rounded-2xl border border-green-200 bg-white shadow-sm p-5">
            <p className="mb-2">We can help you <strong>review your documents</strong> and <strong>book the earliest viable appointment</strong>.</p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              View Resinaro Services →
            </Link>
          </div>
        </section>

        {/* Booking Platform */}
        <section id="booking" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Booking Platform (Prenot@Mi)</h2>
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
        <section id="pitfalls" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Common Pitfalls (and how to avoid them)</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>AIRE not updated</strong> → Update via <strong>FAST IT</strong> before trying to book.</li>
            <li><strong>Photo specs wrong</strong> → Ask for <strong>35×45&nbsp;mm biometric photos</strong>.</li>
            <li><strong>Wrong jurisdiction</strong> → Apply only at your consulate.</li>
            <li><strong>Address mismatch</strong> → Proof of address must match AIRE.</li>
            <li><strong>Name changes not reflected</strong> → Bring official documents and update AIRE first.</li>
          </ol>
        </section>

        {/* Useful Links */}
        <section id="links" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Useful Links</h2>
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
        <section id="faqs" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">FAQs</h2>

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
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-3">Need help assembling your file or getting an appointment?</p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              View Resinaro Services →
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
