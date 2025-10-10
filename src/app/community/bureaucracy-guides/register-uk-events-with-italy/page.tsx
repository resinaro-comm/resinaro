// src/app/community/bureaucracy-guides/register-uk-events-with-italy/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Registering UK Birth/Marriage/Divorce in Italy (2025): Documents, Apostille & Consular Transcriptions",
  description:
    "How to register vital events (birth, marriage, divorce) in Italian records from the UK. Required certificates, apostille/legalisation, translations, and consular submission — step by step.",
  alternates: {
    canonical: "/community/bureaucracy-guides/register-uk-events-with-italy",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I always need an apostille?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many consulates require it for UK certificates — always confirm with your consulate before translating.",
        },
      },
      {
        "@type": "Question",
        name: "How long does transcription take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It varies between weeks and months, depending on your Italian comune and consulate workload.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register events by post?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many consulates accept postal submissions for Stato Civile, but always follow their guidance.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Registering UK Birth/Marriage/Divorce in Italy (2025): Documents,
            Apostille & Consular Transcriptions
          </h1>
          <p className="mt-3 text-white/90">
            How to register UK vital events with your Italian consulate and get
            them transcribed into Italian civil records (Stato Civile).
          </p>
          {/* Hero image prompt (for your design workflow):
            Photorealistic flat-lay: UK long-form birth certificate, marriage certificate,
            and a neatly stamped apostille; translation pages beside; clean desk,
            natural daylight, editorial, 3840×1600.
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/register-events-hero-3840x1280.png"
            alt="UK birth, marriage and divorce certificates with Italian consular documents for vital event registration"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Registering UK vital events with Italian authorities — certificates, apostille, and consular transcription process.
          </figcaption>
        </figure>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p>
            If you’re an Italian citizen in the UK, you should{" "}
            <strong>register vital events</strong> (birth, marriage, divorce)
            with your <strong>Italian consulate</strong> so they’re
            transcribed into Italian records (<strong>Stato Civile</strong>).
            This keeps your AIRE file consistent and prevents delays for
            passports or family services.
          </p>
          <p className="mt-3">
            Need help checking what needs apostille or translation?{" "}
            <Link
              href="/services"
              className="underline text-green-900 hover:text-green-800"
            >
              View Resinaro Services →
            </Link>
          </p>
        </div>

        {/* Documents Table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What you’ll typically need
          </h2>
          <p className="mb-3">
            Requirements vary by consulate and event type — always confirm.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Event</th>
                  <th className="px-4 py-3 font-semibold">Certificate Type</th>
                  <th className="px-4 py-3 font-semibold">Legalisation</th>
                  <th className="px-4 py-3 font-semibold">Translation</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Birth</td>
                  <td className="px-4 py-3">
                    UK long-form birth certificate (with parents)
                  </td>
                  <td className="px-4 py-3">Often apostille required</td>
                  <td className="px-4 py-3">Often translation required</td>
                  <td className="px-4 py-3">
                    Submit via consulate; rules vary
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Marriage</td>
                  <td className="px-4 py-3">UK marriage certificate</td>
                  <td className="px-4 py-3">Often apostille required</td>
                  <td className="px-4 py-3">Often translation required</td>
                  <td className="px-4 py-3">
                    Bring prior marriage records if abroad
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Divorce</td>
                  <td className="px-4 py-3">UK final order / decree</td>
                  <td className="px-4 py-3">Often apostille required</td>
                  <td className="px-4 py-3">Often translation required</td>
                  <td className="px-4 py-3">
                    Some divorces need extra recognition steps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Apostille service (UK):{" "}
            <a
              href="https://www.gov.uk/get-document-legalised"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              gov.uk/get-document-legalised
            </a>
          </p>
        </section>

        {/* General Process */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            General process (typical)
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Order the correct certificate.</li>
            <li>Get apostille/legalisation in the UK if required.</li>
            <li>Prepare a certified Italian translation.</li>
            <li>Submit to your consulate’s Stato Civile office.</li>
            <li>
              Consulate sends to your <strong>comune</strong> in Italy for
              transcription.
            </li>
            <li>Wait for confirmation or check via FAST IT/email.</li>
          </ol>
          <p className="mt-3 text-sm text-gray-700">
            Timescales vary from weeks to months, depending on the comune and
            consulate workload.
          </p>
        </section>

        {/* Checklist */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Sample checklist (birth registration)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>UK long-form birth certificate (with parents’ names)</li>
            <li>Apostille (if requested by your consulate)</li>
            <li>Italian translation (per consular rules)</li>
            <li>Copies of parents’ IDs and AIRE confirmation</li>
            <li>Consulate submission form (if applicable)</li>
            <li>Proof of address (if asked)</li>
          </ul>
        </section>

        {/* Pitfalls */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Common pitfalls (and fixes)
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Wrong certificate type → order the{" "}
              <strong>long-form</strong> birth certificate.
            </li>
            <li>
              Missing apostille → many consulates require it; get it before
              translating.
            </li>
            <li>
              Translation not compliant → use certified/sworn translators as
              required.
            </li>
            <li>
              Unclear surnames after marriage → provide marriage certificate
              and update AIRE.
            </li>
          </ol>
        </section>

        {/* Links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Useful links
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              UK Apostille:{" "}
              <a
                href="https://www.gov.uk/get-document-legalised"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                gov.uk/get-document-legalised
              </a>
            </li>
            <li>
              FAST IT:{" "}
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
              Italian MFA:{" "}
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
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I always need an apostille?
            </summary>
            <p className="mt-2">
              Many consulates require it for UK certificates — always check your
              consulate before spending on translations.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How long does transcription take?
            </summary>
            <p className="mt-2">
              It varies from weeks to months. Delays often occur at the comune
              stage.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can I register events by post?
            </summary>
            <p className="mt-2">
              Many consulates accept postal submissions for Stato Civile, but
              always follow your consulate’s instructions.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want us to review your pack before you send it to the consulate?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              View Resinaro Services →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
