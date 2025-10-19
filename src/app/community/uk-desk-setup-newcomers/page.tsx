// src/app/community/uk-desk-setup-newcomers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/**
 * Work & Study: Compact UK Desk Setup That Feels Pro
 * - Full-bleed hero with teal/blue accent (distinct from other guides)
 * - Human-first copy, helpful visuals (inline SVG blueprint), varied blocks
 * - Clean newsletter CTA (no env warning text), server component
 * - JSON-LD (FAQ + HowTo + Article) for richer snippets
 */

export const metadata: Metadata = {
  title: "Work & Study: Compact UK Desk Setup That Feels Pro",
  description:
    "A practical, landlord-friendly guide to building a focused workspace in a UK rental: posture, lighting, noise control, power safety, and budget tiers—plus links to affordable tools.",
  alternates: { canonical: "/community/uk-desk-setup-newcomers" },
  openGraph: {
    title: "Work & Study: Compact UK Desk Setup That Feels Pro",
    description:
      "Landlord-friendly workspace: posture, lighting, noise control, power safety, budgets, checklists and UK adapters.",
    type: "article",
  },
};

// Meta dates
const PUBLISHED = "2025-10-10";
const UPDATED = "2025-10-19";

export default function Page() {
  // ===== JSON-LD =====
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does Resinaro care about desk setups?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Because a stable, comfortable workspace helps migrants settle faster—whether you are job-hunting, studying for qualifications, or taking remote consulate calls. A calm desk is a force multiplier for everything else on our site: benefits forms, AIRE updates, consulate bookings.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the minimum to fix posture without buying a new desk or chair?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Raise your laptop to eye level with a stand or books, use an external keyboard/mouse so elbows stay ~90°, and add a seat cushion for hip support. Warm desk lighting reduces eye strain in dim UK rooms.",
        },
      },
      {
        "@type": "Question",
        name: "How can I make this rental-safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Stick to reversible tools: freestanding or clamp lights, adhesive cable clips, surge-protected extensions, and foldable desks. Avoid drilling or anything that marks walls unless you have written permission.",
        },
      },
      {
        "@type": "Question",
        name: "What about power and adapters from Italy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use UK Type-G plugs and BS1363 surge-protected extensions. If you brought EU devices, use a grounded EU→UK adapter and check total wattage. Keep cables tidy to avoid trip hazards in small rooms.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up a focused UK rental workspace in 20 minutes",
    totalTime: "PT20M",
    step: [
      { "@type": "HowToStep", name: "Raise screen", text: "Use a laptop stand (or books) so the top of the screen is roughly at eye level." },
      { "@type": "HowToStep", name: "Neutral arms", text: "Plug in a keyboard and mouse; keep elbows ~90° with forearms parallel to the desk." },
      { "@type": "HowToStep", name: "Warm light", text: "Add a desk lamp with a warm bulb (2700–3000K) angled away from your eyes." },
      { "@type": "HowToStep", name: "Power & safety", text: "Use a surge-protected extension; tidy cables with adhesive clips so they don’t snag." },
      { "@type": "HowToStep", name: "Noise zone", text: "Put on noise-isolating headphones; place your mic away from the laptop fan." },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Work & Study: Compact UK Desk Setup That Feels Pro",
    description:
      "Landlord-friendly workspace for UK rentals: posture, lighting, noise control, power safety, budgets, checklists and UK adapters.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://resinaro.co.uk/community/uk-desk-setup-newcomers" },
    inLanguage: "en-GB",
  };

  return (
    <main className="bg-[#F4F6F8] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* ===== HERO (full-bleed, teal/blue accent) ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/desk-hero.jpg" // swap to your home-office hero
            alt="Compact UK rental desk with laptop raised, warm lamp and tidy cables"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              WORK • renter-friendly
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              Compact UK Desk Setup
              <span className="block text-teal-200">That Actually Feels Pro</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              Interviews, coursework, consulate calls—your desk is mission control. Build it fast, keep it safe for
              rentals, and make it feel calm.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">Get the 20-minute desk checklist (PDF) + monthly UK-study tips.</p>
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
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-teal-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-teal-600 px-5 font-semibold text-white shadow hover:bg-teal-700"
                >
                  Get the PDF
                </button>
              </form>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 10 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~9 min read</span>
          </div>
        </div>

        {/* Wave separator */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F4F6F8]" />
          </svg>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto mt-8 max-w-7xl px-6 md:mt-12">
        {/* Human intro chips */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: "Posture wins", p: "Eye-level screen + neutral arms = less pain, more focus." },
            { h: "Calmer nights", p: "Warm lamp pool, tidy cables, fewer distractions." },
            { h: "Zero-drill", p: "Clamp or freestanding tools, adhesive cable clips." },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-teal-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>

        {/* Why it matters (human angle) */}
        <section className="mt-8 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            If you’ve just landed, your “office” might be a fold-out table between a suitcase and a cold window. We’ve
            been there. A desk that treats your back kindly and your eyes gently turns chaos into progress—applications
            get sent, classes feel doable, interviews feel less scary.
          </p>
          <p className="text-gray-700">
            Below: a quickstart you can do today, essentials that punch above their weight, three budgets, a renter-friendly
            layout blueprint, and a power guide that keeps sparks out of your week.
          </p>
        </section>

        {/* Quickstart */}
        <section id="quickstart" className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_.85fr]">
            <div>
              <h2 className="text-2xl font-bold text-teal-900">Quickstart: feel better in 20 minutes</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Raise the screen:</strong> Stand or books until the top bezel hits eye height.</li>
                <li><strong>Neutral arms:</strong> External keyboard/mouse so elbows sit ~90°, wrists neutral.</li>
                <li><strong>Warm pool of light:</strong> 2700–3000K lamp aimed at the desk, not your eyes.</li>
                <li><strong>Cable sanity:</strong> Surge-protected extension on the floor; adhesive clips along the edge.</li>
                <li><strong>Noise box:</strong> Closed-back or isolating headphones; mic away from laptop fan.</li>
              </ol>
              <p className="mt-3 text-xs text-gray-600">All renter-safe: no drilling, no marks, easily reversible.</p>
            </div>

            {/* Blueprint SVG */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4">
              <svg viewBox="0 0 520 280" className="h-60 w-full">
                <defs>
                  <pattern id="g" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M16 0H0M0 16V0" className="stroke-teal-200" strokeWidth=".5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="520" height="280" fill="url(#g)" />
                <rect x="36" y="40" width="448" height="180" className="fill-white stroke-teal-300" />
                <rect x="56" y="60" width="130" height="50" className="fill-teal-100 stroke-teal-300" />
                <text x="64" y="88" className="fill-teal-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Eye-level screen
                </text>
                <rect x="210" y="60" width="130" height="50" className="fill-teal-100 stroke-teal-300" />
                <text x="218" y="88" className="fill-teal-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Warm lamp pool
                </text>
                <rect x="364" y="60" width="100" height="50" className="fill-teal-100 stroke-teal-300" />
                <text x="372" y="88" className="fill-teal-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Quiet zone
                </text>
                <rect x="56" y="140" width="170" height="60" className="fill-teal-100 stroke-teal-300" />
                <text x="64" y="172" className="fill-teal-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  90° elbows + mouse
                </text>
                <rect x="250" y="140" width="214" height="60" className="fill-teal-100 stroke-teal-300" />
                <text x="258" y="172" className="fill-teal-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  Cable clips + surge extension
                </text>
              </svg>
              <p className="mt-2 text-xs text-teal-900">Blueprint: posture, light, sound and cables—fast wins first.</p>
            </div>
          </div>
        </section>

        {/* Essentials with links */}
        <section id="essentials" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Core essentials (lean, effective)</h2>
          <p className="mt-1 text-sm text-gray-700">Clear disclosures; some links may earn us a small commission at no extra cost to you.</p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Adjustable laptop stand",
                copy: "Posture saver; eye-level screen without a new desk.",
                href: "https://www.amazon.co.uk/s?k=adjustable+laptop+stand&tag=resinaroamzn-21",
              },
              {
                title: "Keyboard & mouse combo",
                copy: "Neutral elbows; shoulders relax; typing comfort goes up.",
                href: "https://www.amazon.co.uk/s?k=wireless+keyboard+and+mouse&tag=resinaroamzn-21",
              },
              {
                title: "Warm desk lamp (2700–3000K)",
                copy: "Gentle pool of light for late study in dim UK rooms.",
                href: "https://www.amazon.co.uk/s?k=desk+lamp+warm+light&tag=resinaroamzn-21",
              },
              {
                title: "Noise-isolating headphones",
                copy: "Calls feel calmer; roommates hear less of your meetings.",
                href: "https://www.amazon.co.uk/s?k=noise+isolating+headphones&tag=resinaroamzn-21",
              },
              {
                title: "Surge-protected extension",
                copy: "BS1363, flat on the floor; no daisy-chaining.",
                href: "https://www.amazon.co.uk/s?k=surge+protected+extension+lead&tag=resinaroamzn-21",
              },
              {
                title: "Adhesive cable clips",
                copy: "Tidy edges; fewer snags; renter-friendly.",
                href: "https://www.amazon.co.uk/s?k=adhesive+cable+clips&tag=resinaroamzn-21",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{card.copy}</p>
                <a
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-xl border border-teal-200 bg-white px-4 text-sm font-semibold text-teal-900 hover:bg-teal-50"
                  rel="nofollow sponsored noopener"
                  target="_blank"
                  href={card.href}
                >
                  See options →
                </a>
              </div>
            ))}
          </div>

          {/* Posture/Light/Sound quick cards */}
          <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-teal-900">Posture basics</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Top of screen ≈ eye level; distance 50–70 cm.</li>
                <li>Elbows ~90°, wrists neutral, shoulders relaxed.</li>
                <li>Seat cushion beats “new chair” for price/comfort.</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-teal-900">Lighting that helps</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Warm 2700–3000K; avoid cold blue at night.</li>
                <li>Lamp opposite mouse hand to reduce shadow.</li>
                <li>Dim room + bright desk pool = less eye fatigue.</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-teal-900">Sound & calls</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Face soft surfaces (curtains/wardrobe) to cut echo.</li>
                <li>Mic away from laptop fan; test before interviews.</li>
                <li>Noise-isolating over ANC if budget is tight.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget tiers */}
        <section id="budgets" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Three budgets that make sense</h2>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">£0–£50: “Fix the pain”</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Books as a stand; cheapest keyboard/mouse combo.</li>
                <li>Warm bulb for your lamp; adhesive cable clips.</li>
                <li>Towel roll as lumbar; small seat cushion.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">£50–£150: “Core upgrade”</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Adjustable stand + wireless combo + clamp/compact lamp.</li>
                <li>Noise-isolating wired headphones for calls.</li>
                <li>Surge-protected extension + tidy kit.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">£200–£400: “Pro on a budget”</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Narrow 80–100 cm desk (foldable or wall-friendly).</li>
                <li>Better lamp with dimmer; mic on tiny stand/arm.</li>
                <li>Closed-back headphones; vertical laptop stand.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Layout & noise */}
        <section id="layout" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Small-space layout & noise playbook</h2>
          <div className="mt-4 grid gap-6 text-sm md:grid-cols-2">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-teal-900">Corner layout (shared house)</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Desk on the shorter wall; chair back to the bed for call framing.</li>
                <li>Curtains/wardrobe behind webcam to soften sound.</li>
                <li>Lamp opposite mouse hand; window to the side, not behind.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-teal-900">Window layout (tiny rooms)</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Desk perpendicular to window—daylight without glare.</li>
                <li>Narrow 40–50 cm deep desk; keep floor clear for airflow.</li>
                <li>Headphones within reach; mic away from draughty window.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Power & safety */}
        <section id="power" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Power, adapters & safety (UK rentals)</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
            <li><strong>BS1363 surge-protected extensions:</strong> Flat on the floor; avoid daisy-chaining.</li>
            <li><strong>Grounded EU→UK adapter:</strong> For Italian gear; check total wattage loads.</li>
            <li><strong>Cable routing:</strong> Along edges with adhesive clips; avoid walk paths.</li>
            <li><strong>Moisture & heaters:</strong> Keep cables clear of radiators/hot-water bottles.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">Interview tip: plug laptop into a surge-protected extension to avoid battery dips mid-call.</p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">5-minute checklist before interviews/classes</h2>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6">
            <li>Screen at eye height; camera clean; frame uncluttered.</li>
            <li>Warm lamp on; blinds angled to kill glare.</li>
            <li>Headphones connected; mic test; notifications off.</li>
            <li>On power; extension reachable; phone silent.</li>
            <li>Water near you; documents open; door closed.</li>
          </ul>
        </section>

        {/* Related & outro */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Related Resinaro guides</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link className="text-teal-900 underline underline-offset-4 hover:text-teal-700" href="/community/power-adapters-uk-italy">
                  Plugs, Adapters & Power: Italy ↔ UK Without the Sparks
                </Link>
              </li>
              <li>
                <Link className="text-teal-900 underline underline-offset-4 hover:text-teal-700" href="/community/warmth-energy-savers-uk">
                  Stay Warm, Spend Less: Energy-Saving Comfort Picks
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Some links may earn a small commission at no extra cost to you. It helps keep community guides free.
            </p>
          </div>

          <div className="rounded-3xl border border-teal-200 bg-teal-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Have a weird room layout?</h3>
            <p className="mt-1 text-sm text-gray-700">Tell us your constraints and we’ll reply with a 3-step plan.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-teal-200 bg-white px-4 text-sm font-semibold text-teal-900 hover:bg-teal-50"
              >
                Ask a question →
              </Link>
              <Link
                href="/directory"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Find a desk locally →
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
