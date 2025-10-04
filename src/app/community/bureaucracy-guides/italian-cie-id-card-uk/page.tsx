import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Italian Electronic ID Card (CIE) in the UK (2025): Eligibility, Documents, Booking & Uses",
  description:
    "Complete guide to the Italian CIE from the UK: who can apply, required documents, how to book, fingerprints, minors, fees, and how to use the CIE for digital services (SPID/CIE ID).",
  alternates: {
    canonical: "/community/bureaucracy-guides/italian-cie-id-card-uk",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I have both CIE and passport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—many Italians keep both; each document serves different primary uses.",
        },
      },
      {
        "@type": "Question",
        name: "Is CIE enough for travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Often within the EU/Schengen, but you must check airline and destination rules. For wider travel you’ll need a passport.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the CIE take from the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Processing varies by consulate and delivery option; expect a few weeks in many cases.",
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
            Italian Electronic ID Card (CIE) in the UK (2025): Eligibility,
            Documents, Booking & Uses
          </h1>
          <p className="mt-3 text-white/90">
            What the CIE is, who can apply from the UK, the documents you’ll
            need, how to book, and how to use CIE ID for Italian digital
            services.
          </p>
          {/* Hero image prompt (for your design workflow)
             Prompt: Photorealistic close-up of an Italian Electronic ID Card (CIE) placed on a clean desk
             with a UK proof-of-address letter and a biometric photo strip; soft natural light, editorial style, 3840×1600.
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/cie-hero-3840x1280.png"
            alt="Italian Electronic ID Card (CIE) with UK documents and biometric photos on a professional desk"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Applying for the Italian Electronic ID Card (CIE) from the UK — digital identity for Italian services.
          </figcaption>
        </figure>

        {/* Intro card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            The <strong>Carta d’Identità Elettronica (CIE)</strong> is Italy’s
            electronic ID card. It’s widely accepted for identification in the
            EU and can be used to access digital public services via{" "}
            <strong>CIE ID</strong>. From the UK, you typically apply at your{" "}
            <strong>consular office</strong> if you’re correctly registered with{" "}
            <strong>AIRE</strong>.
          </p>
          <p className="mt-3">
            Need help ensuring your documents and AIRE are correct before
            booking?{" "}
            <Link
              href="/services/bureaucracy"
              className="underline text-green-900 hover:text-green-800"
            >
              Bureaucracy Help →
            </Link>
          </p>
        </div>

        {/* Who can apply */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Who can apply?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Italian citizens</strong> registered with{" "}
              <strong>AIRE</strong> at the consulate covering their UK address.
            </li>
            <li>
              Issued to <strong>adults and minors</strong>; minors generally
              require parental consent.
            </li>
            <li>
              Some consulates prioritise first-time applicants or specific
              categories—check your consulate’s page.
            </li>
          </ul>
        </section>

        {/* CIE vs Passport */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            CIE vs Passport (quick comparison)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Feature</th>
                  <th>CIE (Carta d’Identità Elettronica)</th>
                  <th>Passport</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Main use</td>
                  <td>ID in Italy/EU; some travel</td>
                  <td>International travel</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Digital services</td>
                  <td>Yes (CIE ID login)</td>
                  <td>No</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Biometrics</td>
                  <td>Typically required</td>
                  <td>Required</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Validity</td>
                  <td>Adults 10y; minors 5y; &lt;3y: 3y</td>
                  <td>Adults 10y; minors 5y</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Apply in UK</td>
                  <td>Consulate (AIRE required)</td>
                  <td>Consulate (AIRE required)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Required Docs */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Required documents (typical)
          </h2>
          <p className="mb-3">
            Requirements can vary by consulate—always double-check your local
            page.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Item</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Italian ID / passport</td>
                  <td>Bring current document</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>AIRE status</td>
                  <td>Must be up to date; correct consulate</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Proof of UK address</td>
                  <td>Council tax, bank, utility (recent)</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Biometric photos</td>
                  <td>2 × 35×45&nbsp;mm; light background</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Consent for minors</td>
                  <td>Usually both parents sign</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Fee</td>
                  <td>Pay in GBP; varies quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Booking & appointment */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Booking & appointment
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Most consulates use{" "}
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Prenot@Mi
              </a>{" "}
              for CIE bookings.
            </li>
            <li>Bring originals and required copies.</li>
            <li>Fingerprints are usually taken for adults.</li>
            <li>Delivery is typically by post or collection (varies).</li>
          </ul>
        </section>

        {/* Using CIE ID */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Using CIE for digital services (CIE ID)
          </h2>
          <p>
            The CIE enables secure login to Italian public services (an
            alternative to SPID). Install the{" "}
            <a
              href="https://www.cartaidentita.interno.gov.it/cittadini/servizi-digitali/app-cie-id/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              CIE ID app
            </a>{" "}
            and use an NFC-compatible smartphone.
          </p>
          <p className="mt-2">
            MFA portal:{" "}
            <a
              href="https://www.esteri.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              esteri.it
            </a>
          </p>
        </section>

        {/* Common issues */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Common issues (and fixes)
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>AIRE not updated</strong> → Update in{" "}
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                FAST IT
              </a>{" "}
              before booking.
            </li>
            <li>
              <strong>Wrong jurisdiction</strong> → Apply only at your
              consulate.
            </li>
            <li>
              <strong>Photo specs wrong</strong> → Ask for{" "}
              <strong>35×45&nbsp;mm biometric</strong> photos.
            </li>
            <li>
              <strong>Minor consent</strong> → Check local rules; some
              consulates require both parents or notarised consent.
            </li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Prenot@Mi (booking):{" "}
              <a
                href="https://prenotami.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                prenotami.esteri.it
              </a>
            </li>
            <li>
              FAST IT (AIRE & services):{" "}
              <a
                href="https://serviziconsolarionline.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                serviziconsolarionline.esteri.it
              </a>
            </li>
            <li>
              CIE ID app (official):{" "}
              <a
                href="https://www.cartaidentita.interno.gov.it/cittadini/servizi-digitali/app-cie-id/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                cartaidentita.interno.gov.it
              </a>
            </li>
            <li>
              MFA portal:{" "}
              <a
                href="https://www.esteri.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                esteri.it
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I have both CIE and passport?
            </summary>
            <p className="mt-2">
              Yes—many Italians carry both. The CIE is excellent for EU ID and
              digital services; the passport is required for broader travel.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Is CIE enough for travel?
            </summary>
            <p className="mt-2">
              Often within the EU/Schengen, but always check the airline and
              destination’s entry rules. For most international travel you need
              a passport.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How long does it take?
            </summary>
            <p className="mt-2">
              Processing time varies by consulate and delivery option; expect a
              few weeks in many cases.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want support reviewing your CIE pack and ensuring AIRE/address are
              correct?
            </p>
            <Link
              href="/services/bureaucracy"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Get Help →
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
