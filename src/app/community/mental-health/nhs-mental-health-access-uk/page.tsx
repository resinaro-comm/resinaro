// src/app/community/mental-health/nhs-mental-health-access-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "NHS Mental Health Support in the UK (2025): How to Access Help, Self-Referral & What to Expect",
  description:
    "A clear guide to NHS mental health support for migrants: GP registration, self-referral to Talking Therapies, urgent help, interpreters, and what to expect at each step.",
  alternates: {
    canonical: "/community/mental-health/nhs-mental-health-access-uk",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Talking Therapies only for depression/anxiety?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Talking Therapies can also help with panic, trauma, OCD, health anxiety, and worry.",
        },
      },
      {
        "@type": "Question",
        name: "Can I ask for a female/male therapist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can state your preference when booking.",
        },
      },
      {
        "@type": "Question",
        name: "Will therapy affect my immigration status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, clinical care is confidential and will not affect your immigration status.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/nhs-mental-health-access-hero-3840x1280.png"
            alt="NHS mental health services with supportive counselor and patient in welcoming healthcare setting"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Accessing NHS mental health support — talking therapies, crisis support, and professional care for all residents.
          </figcaption>
        </figure>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          NHS Mental Health Support in the UK (2025): How to Access Help,
          Self-Referral & What to Expect
        </h1>

        {/* Crisis Info */}
        <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8">
          <p>
            <strong>If you’re in immediate danger:</strong> Call{" "}
            <strong>999</strong> (or <strong>112</strong>) now.
          </p>
          <p>
            <strong>If you need to talk now:</strong> Samaritans{" "}
            <strong>116 123</strong> (24/7). Shout text <strong>85258</strong>{" "}
            (24/7).
          </p>
          <p>
            <strong>Find your local urgent NHS mental health helpline:</strong>{" "}
            <a
              href="https://www.nhs.uk/urgentmentalhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              nhs.uk/urgentmentalhealth
            </a>
          </p>
        </div>

        <p className="mb-8">
          Many migrants feel lost navigating UK mental health care. This guide
          explains <strong>how to access support quickly</strong>, with or
          without a GP.
        </p>

        {/* Quick Ways */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Quick Ways to Get Help
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>NHS Talking Therapies (self-referral):</strong> anxiety,
              low mood, panic, PTSD, OCD.
            </li>
            <li>
              <strong>GP:</strong> assessment, medication review, referrals.
            </li>
            <li>
              <strong>Urgent helplines / crisis lines:</strong> immediate
              support, safety planning.
            </li>
            <li>
              <strong>Community & charities:</strong> peer groups, counselling,
              multilingual support.
            </li>
          </ul>
        </section>

        {/* Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What Each Route Is For (at a glance)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Use cases</th>
                  <th className="px-4 py-3 font-semibold">Access</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">NHS Talking Therapies</td>
                  <td className="px-4 py-3">Anxiety, depression, stress</td>
                  <td className="px-4 py-3">Self-referral form</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">GP</td>
                  <td className="px-4 py-3">Assessment, meds, referrals</td>
                  <td className="px-4 py-3">Register + book appointment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Urgent helpline</td>
                  <td className="px-4 py-3">Suicidal thoughts, crisis</td>
                  <td className="px-4 py-3">24/7 phone</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">A&E / 999</td>
                  <td className="px-4 py-3">Immediate danger</td>
                  <td className="px-4 py-3">Emergency services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Step-by-Step: Self-Refer to NHS Talking Therapies
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Find your local service (search “NHS Talking Therapies + your
              area”).
            </li>
            <li>Complete the form (basic details, preferred language).</li>
            <li>Telephone triage (brief questions; choose times).</li>
            <li>First appointment (assessment; agree a plan).</li>
            <li>
              Treatment (guided self-help, CBT, groups, culturally aware
              options).
            </li>
          </ol>
          <p className="mt-3 text-sm text-gray-700">
            <strong>Language support:</strong> Ask for interpreting or therapy
            in Italian if available; some services offer bilingual practitioners
            or interpreters.
          </p>
        </section>

        {/* GP section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            If You Don’t Have a GP Yet
          </h2>
          <p className="mb-2">
            You can still access Talking Therapies via self-referral.
          </p>
          <p>
            Register with a GP here:{" "}
            <a
              href="https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-900"
            >
              NHS GP registration
            </a>
          </p>
        </section>

        {/* Good care */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            What “Good Care” Looks Like
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clear explanation of options.</li>
            <li>Agreed goals (sleep, panic, mood).</li>
            <li>Regular check-ins, tools for between sessions.</li>
            <li>Respect for culture and language.</li>
          </ul>
        </section>

        {/* Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Useful Links
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              NHS urgent helpline:{" "}
              <a
                href="https://www.nhs.uk/urgentmentalhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                nhs.uk/urgentmentalhealth
              </a>
            </li>
            <li>
              Find a GP:{" "}
              <a
                href="https://www.nhs.uk/nhs-services/gps/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                nhs.uk/gps
              </a>
            </li>
            <li>
              Samaritans:{" "}
              <a
                href="https://www.samaritans.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                samaritans.org
              </a>{" "}
              — 116 123
            </li>
            <li>
              Shout text:{" "}
              <a
                href="https://giveusashout.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                giveusashout.org
              </a>{" "}
              — text 85258
            </li>
            <li>
              Mind (info):{" "}
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
              Is Talking Therapies only for depression/anxiety?
            </summary>
            <p className="mt-2">
              It also helps with panic, trauma, OCD, health anxiety, worry.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I ask for a female/male therapist?
            </summary>
            <p className="mt-2">
              Yes — you can state your preference when booking.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Will therapy affect my immigration status?
            </summary>
            <p className="mt-2">
              No — clinical care is confidential and will not affect your
              immigration status.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want help filling self-referral forms or preparing for your first
              call?
            </p>
            <Link
              href="/services/mental-health"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Mental Health Support →
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
