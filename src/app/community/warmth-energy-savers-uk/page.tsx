// src/app/community/warmth-energy-savers-uk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/**
 * Stay Warm, Spend Less: Energy-Saving Comfort Picks
 * - Full-bleed hero with amber accent (distinct from other guides)
 * - Strong conversion CTA (no env warning text)
 * - Section variety: benefits row, 30-min plan, product cards, checklists,
 *   comparison grid, cost-per-hour table, habits, FAQ, related
 * - No sticky nav (per request). Clean, premium feel using spacing + typographic contrast
 * - Server component (no "use client") + JSON-LD for Article/FAQ/HowTo
 */

export const metadata: Metadata = {
  title: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
  description:
    "Real-world, landlord-friendly ways to feel warmer in UK rentals: draft sealing, thermal curtains, hot-water bottles and low-watt personal heaters. Includes a 30-minute setup plan, room checklist, and cost-per-hour examples.",
  alternates: { canonical: "/community/warmth-energy-savers-uk" },
  openGraph: {
    title: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
    description:
      "Landlord-friendly warmth: 30-minute setup, smart comfort buys, cost-per-hour, room checklists, and safety tips for UK rentals.",
    type: "article",
  },
};

// Dates for meta display / JSON-LD
const PUBLISHED = "2025-10-04";
const UPDATED = "2025-10-19";

export default function Page() {
  // ====== JSON-LD (FAQ + HowTo + Article) ======
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s the quickest way to feel warmer in a drafty UK flat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Seal the biggest drafts first (front door, window gaps) with removable self-adhesive seals, add a door sweep or draught snake, close unused rooms, and layer thermal curtains at night. Warm the body directly with a hot-water bottle or heated pad before relying on space heating.",
        },
      },
      {
        "@type": "Question",
        name: "Are low-watt personal heaters cheaper to run?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "They can be when you heat a very small zone (desk, sofa) instead of the whole room. Estimate running cost with: watts ÷ 1000 × tariff per kWh. Example: 200W × £0.28/kWh ≈ £0.056/hour (5.6p).",
        },
      },
      {
        "@type": "Question",
        name: "Can I install these without annoying my landlord?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—choose removable products: peel-and-stick weatherstrip, clip-in curtain rails, command hooks for thermal liners, and draft snakes. Avoid permanent drilling unless you have permission.",
        },
      },
      {
        "@type": "Question",
        name: "Are there safety tips for hot-water bottles and heaters?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use hot (not boiling) water, check bottle condition yearly, and avoid direct skin contact for long periods. Keep heaters away from bedding/curtains, never cover or leave unattended, and use on a stable surface with tip-over protection if available.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Warmth in 30 Minutes: Landlord-Friendly Setup",
    description: "A quick, reversible setup to cut drafts and feel warmer fast in a UK rental.",
    totalTime: "PT30M",
    step: [
      {
        "@type": "HowToStep",
        name: "Front door",
        text:
          "Apply self-adhesive weatherstrip along the frame; add a draft snake or door sweep at the bottom.",
      },
      {
        "@type": "HowToStep",
        name: "Windows",
        text:
          "Seal obvious gaps with peel-and-stick foam; close trickle vents at night if safe; hang thermal curtains or clip-on liners.",
      },
      { "@type": "HowToStep", name: "Zoning", text: "Close doors to unused rooms to reduce the volume you heat." },
      {
        "@type": "HowToStep",
        name: "Personal warmth",
        text:
          "Pre-warm your seat/bed with a hot-water bottle or heat pad; use a low-watt personal heater in your desk/sofa zone.",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
    description:
      "Landlord-friendly warmth for UK rentals: 30-minute quick win, comfort picks, room checklist, cost-per-hour, and safety.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/warmth-energy-savers-uk",
    },
    inLanguage: "en-GB",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* ===== HERO (full-bleed with amber accent) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* Background image (swap to a cosy interior hero when ready) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/warmth-hero.jpg" // replace with your cosy hero image
            alt="Warm, cosy UK living room with thermal curtains and a throw on the sofa"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              HOME • landlord-friendly
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              Stay Warm, Spend Less
              <span className="block text-amber-200">Energy-Saving Comfort Picks</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              Drafts, single glazing, radiators under windows—classic UK rental. Here’s a fast, reversible setup and a few
              comfort buys that heat <em>you</em>, not the whole street.
            </p>
          </div>

          {/* CTA block */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">
                  Get the 30-minute warmth checklist (PDF) + monthly UK-rental comfort tips.
                </p>
                <p className="text-xs text-gray-700">Zero spam. Unsubscribe anytime.</p>
              </div>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="flex w-full flex-col gap-2 sm:flex-row md:justify-end"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-amber-600 px-5 font-semibold text-white shadow hover:bg-amber-700"
                >
                  Get the PDF
                </button>
              </form>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 4 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~8 min read</span>
          </div>
        </div>

        {/* Clean wave separator into the warm background */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto mt-8 max-w-7xl px-6 md:mt-12">
        {/* Benefit chips row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: "Reversible", p: "Peel-and-stick seals, clip-on liners—no drilling needed." },
            { h: "Small-zone heat", p: "Warm your hands/feet/sofa zone instead of the whole flat." },
            { h: "Budget-first", p: "Fix drafts before spending on higher wattage devices." },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-amber-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>

        {/* Intro copy */}
        <div className="mt-8 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            You don’t need major works to feel warmer. Start with the biggest leaks, then layer textiles and personal heat.
            Below is a 30-minute plan, proven picks, room checklists, and clear running-cost examples.
          </p>
        </div>

        {/* 30-minute plan */}
        <section id="quick-win" className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_.85fr]">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">Warmth in 30 Minutes (Landlord-Friendly)</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm">
                <li>
                  <strong>Front door:</strong> Add adhesive weatherstrip where you see daylight. Draft snake or door sweep at
                  the bottom.
                </li>
                <li>
                  <strong>Windows:</strong> Foam seal the worst gaps. At night, close trickle vents (if safe) and pull thermal
                  curtains/clip-on liners.
                </li>
                <li>
                  <strong>Zoning:</strong> Shut doors to unused rooms—smaller air volume is easier to keep warm.
                </li>
                <li>
                  <strong>Personal warmth:</strong> Pre-warm bed/chair with a hot-water bottle or heat pad; keep a fleece throw
                  by the sofa.
                </li>
              </ol>
              <p className="mt-3 text-xs text-gray-600">
                All steps are reversible when removed slowly; test a small area first to protect paint/frames.
              </p>
            </div>

            {/* Simple blueprint-style SVG (no JS) */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <svg viewBox="0 0 520 280" className="h-60 w-full">
                <defs>
                  <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M16 0H0M0 16V0" className="stroke-amber-200" strokeWidth=".5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="520" height="280" fill="url(#grid)" />
                <rect x="40" y="40" width="440" height="180" className="fill-white stroke-amber-300" />
                <rect x="60" y="60" width="140" height="60" className="fill-amber-100 stroke-amber-300" />
                <text x="70" y="85" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Door seal
                </text>
                <rect x="240" y="60" width="180" height="60" className="fill-amber-100 stroke-amber-300" />
                <text x="250" y="85" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Window foam + liners
                </text>
                <rect x="60" y="150" width="120" height="50" className="fill-amber-100 stroke-amber-300" />
                <text x="68" y="178" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Zone door closed
                </text>
                <rect x="240" y="150" width="120" height="50" className="fill-amber-100 stroke-amber-300" />
                <text x="248" y="178" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Hot-water bottle
                </text>
              </svg>
              <p className="mt-2 text-xs text-amber-900">
                Blueprint: seal entry, treat windows, close off spare rooms, pre-warm where you sit/sleep.
              </p>
            </div>
          </div>
        </section>

        {/* Comfort picks */}
        <section id="picks" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Comfort picks that punch above their weight</h2>
          <p className="mt-1 text-sm text-gray-700">
            Clear disclosures; affiliate links may earn us a small commission at no extra cost to you.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Self-adhesive draft excluder seals",
                copy:
                  "Removable, paint-safe when peeled slowly. Treat door frames and window sashes first.",
                href: "https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21",
              },
              {
                title: "Thermal blackout curtains / clip-on liners",
                copy:
                  "Reduce radiant loss at night. Aim for full frame coverage with light overlap to the floor.",
                href: "https://www.amazon.co.uk/s?k=thermal+blackout+curtains&tag=resinaroamzn-21",
              },
              {
                title: "Hot-water bottle or microwave heat pad",
                copy:
                  "Warm the body directly. Use hot—not boiling—water; check bottle yearly for wear.",
                href: "https://www.amazon.co.uk/s?k=hot+water+bottle&tag=resinaroamzn-21",
              },
              {
                title: "Low-watt personal heater (desk/sofa zone)",
                copy:
                  "Heat a 0.5–1.5 m radius instead of the room. Safer when tip-over protection is included.",
                href: "https://www.amazon.co.uk/s?k=low+watt+desk+heater&tag=resinaroamzn-21",
              },
              {
                title: "Door sweep / draught snake",
                copy:
                  "Blocks that icy floor-level jet under doors. Choose removable sweep or fabric snake.",
                href: "https://www.amazon.co.uk/s?k=door+draught+excluder+sweep&tag=resinaroamzn-21",
              },
              {
                title: "Thick socks + fleece throw",
                copy:
                  "Textiles trap warm air around you. Keep within arm’s reach of your coldest seat.",
                href: "https://www.amazon.co.uk/s?k=fleece+throw+blanket&tag=resinaroamzn-21",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{card.copy}</p>
                <a
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50"
                  rel="nofollow sponsored noopener"
                  target="_blank"
                  href={card.href}
                >
                  See options →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Room-by-room checklist */}
        <section id="room-checklist" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Room-by-Room Checklist</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">Entry & Living</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Door seal + draught snake; letterbox brushes where relevant.</li>
                <li>Thermal curtains that fully cover the frame (ideally to the floor).</li>
                <li>Personal heater by desk/sofa; close spare rooms to reduce volume.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">Bedroom</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Pre-warm bed with hot-water bottle 10–15 minutes before sleep.</li>
                <li>Move bed off external walls if you can; avoid overhanging windows.</li>
                <li>Fleece layer/topper to reduce cold-sheet shock.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison grid */}
        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Drafts vs. Personal Heating — what to do first</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-900">Fix drafts first</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                <li>Less heat leaking means everything else works better.</li>
                <li>Seals, sweeps, curtains — the comfort jump is immediate.</li>
                <li>Usually the cheapest upgrade with the best ROI.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">Then add personal heat</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Hot-water bottle/heat pad to pre-warm you or the seat/bed.</li>
                <li>Low-watt heater for a very small zone while working/reading.</li>
                <li>Use short sessions; never leave heaters unattended.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost-per-hour guide */}
        <section id="costs" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">What does it cost to run a small heater?</h2>
          <p className="mt-1 text-sm text-gray-700">
            Formula with your tariff: <strong>watts ÷ 1000 × price per kWh = cost per hour</strong>. Example uses{" "}
            <em>£0.28/kWh</em> for illustration—check your bill or smart meter.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>Heater</th>
                  <th>Watts</th>
                  <th>Example cost/hour</th>
                  <th>Best use</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Personal desk heater</td>
                  <td>200W</td>
                  <td>£0.06</td>
                  <td>Hands/feet while working</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Compact ceramic</td>
                  <td>500W</td>
                  <td>£0.14</td>
                  <td>Small zone by sofa</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Typical fan heater</td>
                  <td>1000W</td>
                  <td>£0.28</td>
                  <td>Short bursts only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Numbers are illustrative; focus on draft-proofing first, then use the smallest wattage that does the job.
          </p>
        </section>

        {/* Habits */}
        <section id="habits" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Warm habits that cost £0</h2>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6">
            <li>Open curtains for daytime sun; close thermal curtains before dusk.</li>
            <li>Cook a one-pot dinner in the evening—ambient warmth lingers.</li>
            <li>Keep slippers + a throw next to your coldest seat so you actually use them.</li>
            <li>Close internal doors to limit airflow paths that steal heat.</li>
          </ul>
        </section>

        {/* Safety & mini-FAQ */}
        <section id="faq" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Safety essentials (quick read)</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">Hot-water bottles</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Use hot, not boiling water. Replace the bottle if cracked or sticky.</li>
                <li>Wrap in a cover; avoid direct skin contact for long periods.</li>
                <li>Empty fully after use; store with the stopper removed to dry.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">Heaters</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Keep clear of bedding/curtains; never cover grilles.</li>
                <li>Use on stable surfaces; prefer models with tip-over protection.</li>
                <li>Do not leave running unattended or while sleeping.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related & outro */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Related reads</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/move-in-cleaning-kit-uk">
                  Move-In Day: Cleaning & Fix-It Kit for UK Rentals
                </Link>
              </li>
              <li>
                <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/warm-winter-foods-uk">
                  Cheap & Warming: Italian-style Winter Foods
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Some links may earn a small commission at no extra cost to you. It helps keep community guides free.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Need tailored tips for your flat?</h3>
            <p className="mt-1 text-sm text-gray-700">
              Send a quick note about your draft hotspots and we’ll reply with a 3-step plan.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50"
              >
                Ask a question →
              </Link>
              <Link
                href="/directory"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Find local hardware →
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
