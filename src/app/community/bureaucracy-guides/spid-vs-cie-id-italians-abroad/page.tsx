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
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
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

        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Registering UK Birth/Marriage/Divorce in Italy (2025): Documents,
          Apostille & Consular Transcriptions
        </h1>

        <p className="mb-6">
          If you’re an Italian citizen in the UK, you should{" "}
          <strong>register vital events</strong> (birth, marriage, divorce) with
          your <strong>Italian consulate</strong> so they’re transcribed into
          Italian records (<strong>Stato Civile</strong>). This keeps your AIRE
          file consistent and prevents delays for passports or family services.
        </p>

        <p className="mb-8">
          Need personalised help checking which documents need apostille or
          translation for your consulate?{" "}
          <Link
            href="/services/bureaucracy"
            className="underline text-green-900 hover:text-green-800"
          >
            Bureaucracy Help →
          </Link>
        </p>

        {/* Table: What you’ll typically need */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What you’ll typically need
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full border-collapse text-left">
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
                    Submit via your consulate; rules vary.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Marriage</td>
                  <td className="px-4 py-3">UK marriage certificate</td>
                  <td className="px-4 py-3">Often apostille required</td>
                  <td className="px-4 py-3">Often translation required</td>
                  <td className="px-4 py-3">
                    If married abroad previously, bring those records too.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Divorce</td>
                  <td className="px-4 py-3">UK final order / decree</td>
                  <td className="px-4 py-3">Often apostille required</td>
                  <td className="px-4 py-3">Often translation required</td>
                  <td className="px-4 py-3">
                    Some divorces need extra recognition steps.
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

        {/* General process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            General Process (Typical)
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
          <p className="mt-2 text-sm text-gray-700">
            Timescales vary from weeks to months depending on comune and
            consulate workload.
          </p>
        </section>

        {/* Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Sample Checklist (Birth Registration)
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

        {/* Common pitfalls */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Common Pitfalls (and Fixes)
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
              Translation not compliant → use certified/sworn translators per
              consulate rules.
            </li>
            <li>
              Unclear surnames after marriage → provide marriage certificate and
              update AIRE.
            </li>
          </ol>
        </section>

        {/* Useful links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Useful Links
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              UK Apostille/Legalisation:{" "}
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
              FAST IT (Consular Services Online):{" "}
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I always need an apostille?
            </summary>
            <p className="mt-2">
              Many consulates require it for UK certificates — check with your
              consulate before translating.
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
              always follow consular instructions.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want us to review your pack before you post it to the consulate?
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
    </main>
  );
}
