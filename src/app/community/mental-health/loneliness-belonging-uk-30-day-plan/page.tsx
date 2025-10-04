// src/app/community/mental-health/loneliness-belonging-uk-30-day-plan/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Loneliness to Belonging (2025): A 30-Day Community Plan for Migrants in the UK",
  description:
    "Practical 30-day plan to beat loneliness in the UK: low-cost meetups, volunteering, language practice, sport, and rituals that build real community — plus safety and inclusion tips.",
  alternates: {
    canonical: "/community/mental-health/loneliness-belonging-uk-30-day-plan",
  },
};

export default function Page() {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/loneliness-belonging-uk-30day-hero-3840x1280.png"
            alt="Diverse group of people socializing in a welcoming UK community center with friendly atmosphere"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Building belonging in the UK — from loneliness to community in 30 days through meaningful connections.
          </figcaption>
        </figure>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Loneliness to Belonging in the UK: A 30-Day Community Plan
        </h1>

        <p className="mb-6">
          Feeling alone after moving is normal — and fixable. This{" "}
          <strong>30-day plan</strong> builds real connections without spending
          much money.
        </p>

        <p className="mb-8">
          Join our workshops and peer groups:{" "}
          <Link
            href="/services/community"
            className="underline text-green-900 hover:text-green-800"
          >
            Community Integration →
          </Link>
        </p>

        {/* Ground Rules */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Ground Rules (work even if you’re shy)
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Aim for 2 small social actions per week.</li>
            <li>Prefer recurring activities over one-offs.</li>
            <li>
              Keep one ritual daily (walk + café, library visit, sports).
            </li>
            <li>Track wins in a notes app — tiny wins count.</li>
          </ul>
        </section>

        {/* 30 Day Plan Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Your 30-Day Plan (simple, consistent)
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Week</th>
                  <th className="px-4 py-3 font-semibold">Focus</th>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Low-pressure starts</td>
                  <td className="px-4 py-3">
                    Café chat with staff; library card; WhatsApp old friend
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Language & movement</td>
                  <td className="px-4 py-3">
                    ESOL/Italian/English exchange; park jog/walk; message a
                    meetup
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Volunteering</td>
                  <td className="px-4 py-3">
                    Sign up for 1 event; bring snacks; chat with 3 new people
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">Routine & invite</td>
                  <td className="px-4 py-3">
                    Repeat best activity; invite 1 person for coffee; join 1
                    group chat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Where to Find People */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Where to Find People (low-cost)
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Libraries & community centres: noticeboards, clubs.</li>
            <li>Meetup/Eventbrite: language exchange, board games, walks.</li>
            <li>Sports: park runs, five-a-side, yoga community classes.</li>
            <li>Volunteering: food banks, mutual aid, charity shops.</li>
            <li>Faith & cultural groups: open events, talks, choirs.</li>
          </ul>
        </section>

        {/* Conversation Starters */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Conversation Starters (that aren’t awkward)
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              “I’m new here — what do you usually do in this group?”
            </li>
            <li>“Do you know if this runs every week?”</li>
            <li>“Any tips for good cafés nearby?”</li>
            <li>Compliment something specific (book, jersey, shoes).</li>
          </ul>
        </section>

        {/* Inclusion & Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Inclusion & Safety
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Choose well-lit public spaces to start.</li>
            <li>Tell a friend where you’re going.</li>
            <li>Trust your instincts; leave if it feels off.</li>
            <li>Avoid sharing private info early in online groups.</li>
          </ul>
        </section>

        {/* Free Supports */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Free Supports if You’re Struggling
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
              I’m introverted — how do I make this work?
            </summary>
            <p className="mt-2">
              Start with quiet spaces (library, small classes), set time limits
              (30–45 mins), and leave on a high note.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              I went to an event and said nothing — was it a waste?
            </summary>
            <p className="mt-2">
              No — showing up is a win. Next time say one sentence to one
              person.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What if I don’t click with anyone?
            </summary>
            <p className="mt-2">
              It’s normal. Treat it like finding a gym — try a few before you
              decide.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want a gentle accountability partner for 4 weeks?
            </p>
            <Link
              href="/services/community"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              Join a group →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
