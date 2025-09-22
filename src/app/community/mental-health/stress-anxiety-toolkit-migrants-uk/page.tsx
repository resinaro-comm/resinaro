// src/app/community/mental-health/stress-anxiety-toolkit-migrants-uk/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "Stress & Anxiety Toolkit for Migrants in the UK (2025): Rapid Tools, Routines & Sleep",
  description:
    "Practical tools for coping with stress and anxiety during moves, documents, and job hunts — breathing, grounding, routines, sleep upgrades, and micro-habits that work.",
  alternates: {
    canonical: "/community/mental-health/stress-anxiety-toolkit-migrants-uk",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "I can’t sleep before consulate/visa calls — help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare a call script, place papers on the table, then do 10 minutes grounding + a wind-down audio session.",
        },
      },
      {
        "@type": "Question",
        name: "Is coffee making my anxiety worse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Try reducing intake after midday. Hydrate first and switch to tea or herbal drinks after 2pm.",
        },
      },
      {
        "@type": "Question",
        name: "How do I stop spiralling during delays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use time-boxed worry: give yourself 10 minutes to plan actions, then switch tasks and move your body.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Stress & Anxiety Toolkit for Migrants in the UK: Rapid Tools, Routines
          & Sleep (2025)
        </h1>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
          <p>
            Moving country is exciting — and stressful. Here’s a{" "}
            <strong>practical toolkit</strong> you can use today to reduce
            anxiety while you deal with documents, housing, and work.
          </p>
          <p className="mt-3">
            For 1-to-1 planning and accountability, we can help:{" "}
            <Link
              href="/services/mental-health"
              className="underline text-green-900 hover:text-green-800"
            >
              Mental Health Support →
            </Link>
          </p>
        </div>

        {/* Reset techniques */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            5-Minute “Reset” Techniques
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Box breathing (4-4-4-4):</strong> inhale 4, hold 4, exhale
              4, hold 4.
            </li>
            <li>
              <strong>Grounding 5-4-3-2-1:</strong> items you see/hear/feel/
              smell/taste.
            </li>
            <li>
              <strong>Muscle release:</strong> tense → release major muscle
              groups.
            </li>
            <li>
              <strong>Name the thought:</strong> “This is a worry about…” → write
              1 line.
            </li>
          </ul>
        </section>

        {/* Triggers → responses */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Triggers → Responses (quick map)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Trigger</th>
                  <th className="px-4 py-3 font-semibold">Response</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">Long forms</td>
                  <td className="px-4 py-3">Break into 10-minute blocks</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Phone calls</td>
                  <td className="px-4 py-3">Script + call at set time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Waiting</td>
                  <td className="px-4 py-3">Brief walk, music, hydration</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Sleep spiral</td>
                  <td className="px-4 py-3">Breathing + audiobook</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Money fear</td>
                  <td className="px-4 py-3">15-min budget check</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Bureaucracy</td>
                  <td className="px-4 py-3">Checklist + deadline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Routine */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Routine That Actually Helps (daily)
          </h2>
          <h3 className="font-semibold">Morning (10–15 min)</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Sunlight at window</li>
            <li>Light stretch</li>
            <li>2 glasses water</li>
            <li>1 action from your checklist</li>
          </ul>
          <h3 className="font-semibold">Midday (5–10 min)</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Walk or stairs</li>
            <li>Swap caffeine for water</li>
            <li>3 deep breaths before emails</li>
          </ul>
          <h3 className="font-semibold">Evening (20–30 min)</h3>
          <ul className="list-disc list-inside">
            <li>Prepare tomorrow’s top 3</li>
            <li>Screens off 45 mins before bed</li>
            <li>Audiobook/podcast</li>
          </ul>
        </section>

        {/* Sleep Upgrades */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Sleep Upgrades that Don’t Cost Money
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Same wake time daily</li>
            <li>Cool, dark room; phone face-down</li>
            <li>Wind-down playlist; light read</li>
            <li>
              Keep notes by bed; write worries down and park them for morning
            </li>
          </ul>
        </section>

        {/* Documents system */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Documents Without Meltdown (micro-system)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Keep a <strong>single folder</strong> (cloud + paper).
            </li>
            <li>
              Use file names like <code>2025-03_passport_docs.pdf</code>.
            </li>
            <li>
              Add a <strong>checklist</strong> on first page; tick as you go.
            </li>
            <li>
              Set <strong>calendar reminders</strong> for deadlines.
            </li>
          </ol>
        </section>

        {/* Free supports */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Useful, Free Supports
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Samaritans (24/7): 116 123 —{" "}
              <a
                href="https://www.samaritans.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                samaritans.org
              </a>
            </li>
            <li>
              Shout text (24/7): 85258 —{" "}
              <a
                href="https://giveusashout.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                giveusashout.org
              </a>
            </li>
            <li>
              NHS mental health —{" "}
              <a
                href="https://www.nhs.uk/mental-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                nhs.uk/mental-health
              </a>
            </li>
            <li>
              Mind (info) —{" "}
              <a
                href="https://www.mind.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                mind.org.uk
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQs</h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              I can’t sleep before consulate/visa calls — help?
            </summary>
            <p className="mt-2">
              Prep a call script, place papers on the table, then do 10 mins
              grounding + wind-down audio.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Is coffee making my anxiety worse?
            </summary>
            <p className="mt-2">
              Try reducing after midday; hydrate first; switch to tea/herbal
              after 2pm.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I stop spiralling during delays?
            </summary>
            <p className="mt-2">
              Use time-boxed worry: 10 minutes to plan actions; then switch
              tasks and move your body.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want a personalised plan and weekly check-ins?
            </p>
            <Link
              href="/services/mental-health"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Talk to us →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
