// src/app/community/moka-coffee-kit/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/** Landing-style community post (light theme)
 * - Full-bleed hero with image + layered CTA
 * - White cards on #F9F6F1, emerald accents
 * - Article + HowTo + FAQ + Breadcrumb + Speakable JSON-LD
 * - Server component only (no "use client")
 */

export const metadata: Metadata = {
  title:
    "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
  description:
    "Definitive UK guide to moka coffee: size charts, grind tuning, induction setups, care schedules, troubleshooting, cost per cup, eco impact, and a complete kit—designed like a high-converting landing page.",
  alternates: { canonical: "/community/moka-coffee-kit" },
  openGraph: {
    title:
      "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
    description:
      "Everything for moka coffee in a UK kitchen: pot size tables, grind tuning matrix, induction setup, care schedule, troubleshooting, cost analysis, eco impact, and a shoppable kit.",
    type: "article",
  },
};

const PUBLISHED = "2025-10-04";
const UPDATED = "2025-10-19";

export default function Page() {
  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/moka-coffee-kit",
    },
    inLanguage: "en-GB",
    articleSection: ["Lifestyle", "Coffee", "Italian UK"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: "https://resinaro.co.uk/community" },
      { "@type": "ListItem", position: 2, name: "Moka Coffee Kit (UK Edition)", item: "https://resinaro.co.uk/community/moka-coffee-kit" },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#summary", "#how-to"] },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make Classic Italian Moka Coffee (UK Kitchen)",
    totalTime: "PT5M",
    supply: [
      { "@type": "HowToSupply", name: "Moka pot (Bialetti or similar)" },
      { "@type": "HowToSupply", name: "Moka-ground coffee" },
      { "@type": "HowToSupply", name: "Fresh water (pre-heated)" },
    ],
    tool: [{ "@type": "HowToTool", name: "Hob (gas/electric/induction)" }],
    step: [
      { "@type": "HowToStep", name: "Fill base with hot water", text: "Fill to just below the safety valve; pre-heating reduces bitterness." },
      { "@type": "HowToStep", name: "Add coffee (no tamping)", text: "Level the basket to the rim and brush away loose grounds." },
      { "@type": "HowToStep", name: "Assemble & heat gently", text: "Close firmly with a cloth; lid open; low-to-medium heat." },
      { "@type": "HowToStep", name: "Stop at first gurgle", text: "Remove from heat; stir top chamber, then pour." },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What grind for moka?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use moka-specific grind: finer than filter, coarser than espresso. Bitter/ashy = too fine or too hot. Sour/weak = too coarse or too cool.",
        },
      },
      {
        "@type": "Question",
        name: "Can moka work on induction?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes: use an induction-ready moka or a small ferromagnetic adapter plate. Pre-heat water in a kettle to shorten hob time.",
        },
      },
      {
        "@type": "Question",
        name: "How do I avoid bitter moka?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hot water in the base, low-to-medium heat, stop at first gurgle, never tamp, and keep the pot clean (avoid harsh detergents).",
        },
      },
      {
        "@type": "Question",
        name: "What spare parts do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Guarnizioni (gaskets) and a spare filter plate. Replace the gasket when it hardens, cracks, or leaks around the rim.",
        },
      },
    ],
  };

  // ---------- Page ----------
  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ===== HERO (full-bleed image, layered CTA) ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/mokapot.png"
            alt="Full-width hero image: Italian moka pot brewing on a UK hob"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-36 sm:pt-32 md:pt-40 md:pb-44">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              Moka • Brikka • UK Kitchens
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              The No-Machine Italian Coffee Kit
              <span className="block text-emerald-200">UK Edition</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
              Pick the right pot size, nail the grind, set up induction properly, and make a café-level cup—without an espresso machine.
            </p>
          </div>

          {/* CTA card (clean, no env warning) */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-800">
                  Get the complete UK moka kit checklist (PDF) + monthly Italian-in-the-UK tips.
                </p>
                <p className="text-xs text-gray-600">Zero spam. Opt out any time.</p>
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
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-emerald-600 px-5 font-semibold text-white shadow hover:bg-emerald-700"
                >
                  Get the PDF
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 4 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~12 min read</span>
          </div>
        </div>

        {/* Soft fade to page background */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F9F6F1] to-transparent" />
      </section>

      {/* ===== USPs row — moved DOWN so it's never clipped ===== */}
      <section className="mx-auto mt-10 md:mt-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              h: "Proven in UK kitchens",
              p: "Induction, hard water, tiny counters—this playbook is built for rentals and flatshares.",
            },
            {
              h: "No machine needed",
              p: "A moka + correct grind + gentle heat = the daily cup you actually keep making.",
            },
            {
              h: "Shoppable kit",
              p: "Pick the exact size, spare parts, and adapters. Clear disclosures. No fluff.",
            },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-emerald-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Summary & key takeaways ===== */}
      <section id="summary" className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-lg font-semibold text-emerald-800">
              TL;DR — three moves to upgrade your moka
            </p>
            <div className="mt-4 space-y-5">
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  1) Heat smart
                </span>{" "}
                Pre-heat water in the kettle, then brew on low-to-medium. Stop at the first <em>gurgle</em>. This alone fixes most bitter cups.
              </p>
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  2) Mind the grind
                </span>{" "}
                Moka grind sits between filter and espresso. Never tamp. Adjust one notch at a time.
              </p>
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  3) Keep spares
                </span>{" "}
                A fresh <em>guarnizione</em> (gasket) + clean filter plate prevent leaks and sputters.
              </p>
            </div>

            {/* Mini CTA (notice removed) */}
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">Download the printable checklist + UK shop links:</p>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="mt-3 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:max-w-sm"
                />
                <button
                  type="submit"
                  className="h-11 rounded-2xl bg-emerald-600 px-5 font-semibold text-white hover:bg-emerald-700"
                >
                  Get checklist
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Size matters more than you think",
                body: "3-cup for weekday mornings; 6-cup for guests. If you brew for one and two, own both.",
              },
              {
                title: "Stop at the first gurgle",
                body: "Overrunning cooks the coffee. Remove from heat as soon as the flow thins and sputters.",
              },
              {
                title: "Swap the gasket every 6–12 months",
                body: "If you see leaks, cracks or a stiff seal—change it. Keep one spare at home.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Key takeaway</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Size table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Moka size chart (tazze → ml & servings)</h2>
              <p className="mt-1 text-sm text-gray-600">Typical ranges; models vary.</p>
            </div>
            <Link
              href="#kit"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              Jump to the Kit →
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {["Size (tazze)","Approx ml (total)","Neat servings","With milk","Best use"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1","60–70","1 short","—","Solo espresso-like sips"],
                  ["3","120–150","1–2","1 mug","Daily driver (1–2 people)"],
                  ["6","240–300","2–3","2 mugs","Weekends / guests"],
                  ["9","360–450","3–4","3 mugs","Dinner parties"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i%2? "bg-white":"bg-gray-50"}>
                    {row.map((c, j) => <td key={j} className="p-3 text-gray-800">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-gray-600">Tip: a 3-cup moka yields ~120–150 ml total. For a long latte, add warm milk.</p>
        </div>
      </section>

      {/* ===== Flow infographic + Do/Avoid ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-2xl border border-emerald-200 bg-white p-4">
              <svg viewBox="0 0 720 180" className="h-48 w-full">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-emerald-500" />
                  </marker>
                </defs>
                {[
                  { x: 20,  w: 160, title: "Hot water",    body: "Fill under valve" },
                  { x: 200, w: 160, title: "Coffee bed",  body: "Moka grind, no tamp" },
                  { x: 380, w: 160, title: "Gentle heat", body: "Lid open, watch flow" },
                  { x: 560, w: 140, title: "First gurgle",body: "Remove, stir, pour" },
                ].map((b, i) => (
                  <g key={i}>
                    <rect x={b.x} y={30} width={b.w} height={120} rx="16" className="fill-white" />
                    <rect x={b.x} y={30} width={b.w} height={120} rx="16" className="fill-none stroke-emerald-300" />
                    <text x={b.x + b.w/2} y={70} textAnchor="middle" className="fill-emerald-800" style={{fontWeight:700}}>{b.title}</text>
                    <text x={b.x + b.w/2} y={100} textAnchor="middle" className="fill-gray-700" style={{fontSize:12}}>{b.body}</text>
                    {i<3 && <line x1={b.x + b.w + 8} y1={90} x2={b.x + b.w + 52} y2={90} className="stroke-emerald-500" strokeWidth="2" markerEnd="url(#arrow)" />}
                  </g>
                ))}
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Smooth, honey-like flow → stop at the first gurgle</h2>
              <p className="mt-2 text-sm text-gray-700">
                Overheating cooks the coffee. Pre-heat water in the kettle, brew on lower power, and remove as soon as the stream thins and spits. Stir the top chamber for an even cup.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Do</p>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                    <li>Pre-heat water in kettle</li>
                    <li>Low-to-medium hob</li>
                    <li>Clean rims & threads</li>
                    <li>Stir before pouring</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-700">Avoid</p>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                    <li>Tamping the basket</li>
                    <li>Covering the safety valve</li>
                    <li>Blasting heat to rush</li>
                    <li>Harsh detergents daily</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <Link href="#how-to" className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                  See the 90-second method ↓
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Comparison ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              h: "Moka (stovetop)",
              p: "Affordable, durable, ritual-friendly. Best taste per pound in UK kitchens.",
              bullets: ["£20–£45 pot, pennies per cup","Compact, easy to store","Great with warm milk"],
            },
            {
              h: "Capsule / pod",
              p: "Fast and tidy, but higher cost per cup and more waste to manage.",
              bullets: ["£40–£150 machine","£0.30–£0.45 per capsule","Recycling varies by brand"],
            },
            {
              h: "Espresso machine",
              p: "Café-style workflow and crema. High upfront, larger footprint, more maintenance.",
              bullets: ["£200+ machine","Burr grinder recommended","Dial-in learning curve"],
            },
          ].map((c) => (
            <div key={c.h} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{c.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{c.p}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-800">
                {c.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== How-To + Grind matrix ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold text-gray-900">90-second method</h2>
              <Link href="#troubleshoot" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">Troubleshooting ↓</Link>
            </div>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              <li className="mb-3"><strong>Pre-heat.</strong> Boil the kettle, then fill the moka base to just under the safety valve.</li>
              <li className="mb-3"><strong>Basket.</strong> Add moka grind level to rim. No tamping. Clean stray grounds off the rim.</li>
              <li className="mb-3"><strong>Assemble.</strong> Close firmly using a cloth. Lid open to watch the flow.</li>
              <li className="mb-3"><strong>Heat.</strong> Low-to-medium. Aim for a smooth honey-like stream.</li>
              <li className="mb-3"><strong>Stop.</strong> At the first gurgle, remove from heat. Stir the top chamber. Pour.</li>
            </ol>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">Safety: never brew with a blocked spout or damaged valve. Replace the gasket if cracked or stiff.</p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-emerald-900">Prefer a printable version for your fridge? Grab the step-by-step PDF.</p>
                <Link href="#kit" className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
                  Get the Kit & PDF
                </Link>
              </div>
            </div>
          </div>

          {/* Grind matrix */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Grind tuning matrix</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {["Symptom","Likely cause","Quick fix","Next step"].map((h) => (
                      <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bitter / ashy","Too fine or overheated","Coarsen one notch","Pre-heat water; lower heat"],
                    ["Sour / weak","Too coarse or too cool","Finer one notch","Slightly higher heat"],
                    ["Metallic note","New pot or harsh soap","Season 2–3 throwaway brews","Avoid strong detergents"],
                    ["Sputter early","Heat too high / choked bed","Lower heat; never tamp","Check gasket & valve"],
                  ].map((row, i) => (
                    <tr key={i} className={i%2? "bg-white":"bg-gray-50"}>
                      {row.map((c, j) => <td key={j} className="p-3 text-gray-800">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-600">Adjust grind in tiny steps. Keep dose and water level consistent while testing.</p>
          </div>
        </div>
      </section>

      {/* ===== Induction ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Induction setups (UK rentals)</h2>
              <p className="mt-1 text-sm text-gray-700">Three options. Pick the one that matches your hob and patience.</p>
            </div>
            <Link href="#care" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">Care schedule →</Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                tag:"Option A", h:"Induction-ready moka",
                p:"A moka with a ferromagnetic base. Simple, reliable, minimal extra gear.",
                bullets:["Fastest setup","Most consistent heating"],
              },
              {
                tag:"Option B", h:"Adapter plate",
                p:"A small ferromagnetic disc under any moka you already own.",
                bullets:["Re-use existing moka","Slightly slower to heat"],
              },
              {
                tag:"Option C", h:"Kettle + brief hob",
                p:"Pre-heat in kettle, assemble, then short gentle hob time just to extract.",
                bullets:["Cleanest flavour","A tad fiddly at first"],
              },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">{x.tag}</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{x.h}</h3>
                <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  {x.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-emerald-900">Need help choosing? Tell us your hob & kettle. We’ll recommend a setup.</p>
              <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                Ask Resinaro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Troubleshooting ===== */}
      <section id="troubleshoot" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Troubleshooting (taste & leaks)</h2>
            <Link href="#kit" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">Jump to Kit ↓</Link>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {["Issue","Checks","Fix"].map((h)=>(
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Leaking at rim","Gasket age; grounds on thread","Replace gasket; clean rim; tighten evenly"],
                  ["No flow / choking","Grind too fine; tamped bed","Coarser grind; never tamp; clean filter"],
                  ["Explosive sputter","Heat too high; dry base","Lower heat; fill to valve; pre-heat water"],
                  ["Burnt taste","Overheated extraction","Pre-heat water; stop at gurgle; lower heat"],
                ].map((row,i)=>(
                  <tr key={i} className={i%2? "bg-white":"bg-gray-50"}>
                    {row.map((c,j)=><td key={j} className="p-3 text-gray-800">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-600">If leaks persist after a new gasket: check for hairline warps on the rim and confirm the safety valve moves.</p>
        </div>
      </section>

      {/* ===== Care & Testimonials ===== */}
      <section id="care" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Care & replacement schedule</h2>
            <p className="mt-1 text-sm text-gray-700">Keep it clean and dry. Store open to avoid stale smells. Replace the gasket before it fails.</p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {["Part / Task","Frequency","Notes"].map((h)=>(
                      <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Rinse & dry","Every brew","Avoid harsh detergents; towel-dry; store open"],
                    ["Deep clean","Monthly","Mild soap if needed, then rinse thoroughly"],
                    ["Gasket (guarnizione)","6–12 months","Replace sooner if stiff, cracked or leaking"],
                    ["Filter plate","12–24 months","Replace if warped or clogged"],
                    ["Safety valve check","Quarterly","Ensure it moves freely; no residues"],
                  ].map((row,i)=>(
                    <tr key={i} className={i%2? "bg-white":"bg-gray-50"}>
                      {row.map((c,j)=><td key={j} className="p-3 text-gray-800">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">Don’t wait for a leak: keep one spare gasket + filter plate in the drawer.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What readers say</h3>
            <div className="mt-4 space-y-4">
              {[
                ["“Always thought moka was bitter. The ‘stop at first gurgle’ tip changed everything.”","— Giulia • Manchester"],
                ["“Induction plate + pre-heat. Tastes like breakfast at nonna’s again.”","— Marco • London"],
                ["“Kept replacing gaskets too late. Now I keep a spare—no more leaks.”","— Francesca • Leeds"],
              ].map(([q,by])=>(
                <div key={q} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-900">{q}</p>
                  <p className="mt-2 text-xs text-gray-600">{by}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-emerald-900">Want your setup reviewed? Send a photo—free advice in 24h.</p>
                <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
                  Ask now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Cost & Eco ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Cost per cup & eco impact</h2>
              <p className="mt-1 text-sm text-gray-700">Realistic UK ranges; your beans, dose and energy prices will vary.</p>
            </div>
            <Link href="#kit" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">See the Kit →</Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {["Method","Gear cost","Coffee cost/cup*","Waste","Notes"].map((h)=>(
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Moka","£20–£45","£0.12–£0.25","Grounds (compostable)","Low power; very durable"],
                  ["Capsule/pod","£40–£150","£0.30–£0.45","Pods (recycling varies)","Fast; pricier per cup"],
                  ["Espresso machine","£200+","£0.12–£0.30","Grounds","High upfront; dial-in time"],
                ].map((row,i)=>(
                  <tr key={i} className={i%2? "bg-white":"bg-gray-50"}>
                    {row.map((c,j)=><td key={j} className="p-3 text-gray-800">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-600">*Illustrative estimates for the UK; aim for consistency in dose and grind when comparing.</p>
        </div>
      </section>

      {/* ===== Kit (conversion) ===== */}
      <section id="kit" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your complete UK moka kit</h2>
              <p className="mt-1 text-sm text-gray-700">Compact, practical, deposit-safe. Clear disclosures; some links may earn us a small commission.</p>
            </div>
            <Link href="#how-to" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">Back to How-To ↑</Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">Brewing essentials</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  <li><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=bialetti+3+cup+moka&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Moka 3-cup (daily driver)</a></li>
                  <li><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=bialetti+6+cup+moka&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Moka 6-cup (weekends/guests)</a></li>
                  <li><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=induction+adapter+plate+coffee+maker&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Induction adapter plate</a></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">Coffee & care</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  <li>
                    <a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+moka&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Lavazza (moka grind)</a>{" "}
                    ·{" "}
                    <a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=illy+classico+moka&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Illy (moka grind)</a>
                  </li>
                  <li><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Spare gaskets & filter plate</a></li>
                  <li><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="https://www.amazon.co.uk/s?k=handheld+milk+frother&tag=resinaroamzn-21" target="_blank" rel="nofollow sponsored noopener noreferrer">Handheld milk frother</a></li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-emerald-900">What you get</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  <li>Correct pot size for your household</li>
                  <li>Predictable flavour with grind tuning</li>
                  <li>Induction-friendly routine</li>
                  <li>Leak-free brewing with fresh gaskets</li>
                  <li>Printable checklist + UK shopping links</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <p className="text-sm text-emerald-900">Want 1-to-1 help setting up your moka (photo review + tweaks)?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
                    Get free advice
                  </Link>
                  <Link href="/services" className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                    Explore services
                  </Link>
                </div>
                <p className="mt-2 text-[11px] text-emerald-900/80">Affiliate note: links may earn us a small commission at no extra cost to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">FAQ (Italian terms & UK realities)</h2>
          {[
            ["Moka vs Brikka vs espresso machine?",
             "Moka: stovetop classic; smooth, concentrated coffee with minimal gear. Brikka: moka variant with a valve (slightly higher pressure, sometimes light foam). Espresso machine: 9+ bar, denser crema, more gear and maintenance. For UK rentals and tight counters, moka is the best balance of price, flavour and portability."],
            ["Why shouldn’t I tamp moka coffee?",
             "Tamping increases resistance; moka’s lower pressure can choke the flow—overheating the base and making the cup bitter. Keep the bed level and loose."],
            ["What about limescale in UK water?",
             "In hard-water areas, filtered water improves taste and slows buildup. Descale your kettle; dry the pot fully."],
            ["Dishwasher safe?",
             "Avoid dishwashers with classic aluminium moka—finish dulls and flavours suffer. Hand-rinse, towel-dry, store open."],
            ["How long do gaskets last?",
             "Typically 6–12 months with daily use. Replace sooner if you notice leaks, cracks or a stiff feel."],
          ].map(([q,a])=>(
            <details key={q as string} className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">{q}</summary>
              <div className="mt-2 text-sm text-gray-700">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Related + Footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Related reads</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li><Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/italian-essentials">New in the UK? 12 Italian Cupboard Essentials</Link></li>
              <li><Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/buying-in-bulk-uk-italian-staples">Save Money: Buy Italian Staples in Bulk (UK)</Link></li>
              <li><Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/starter-uk-kitchen-italian">Tiny UK Kitchen, Big Italian Flavour</Link></li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">Affiliate note: some links may earn us a small commission at no extra cost to you. It helps keep community guides free.</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Get the printable UK moka checklist</h3>
            <p className="mt-1 text-sm text-gray-700">One page with sizes, grind, heat and care. Includes UK shopping links and induction notes.</p>
            <form method="POST" action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"} className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input type="email" name="email" required placeholder="you@email.com" className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:max-w-sm" />
              <button type="submit" className="h-11 rounded-xl bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-700">Email me the PDF</button>
            </form>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">Ask a moka question</Link>
              <Link href="/directories/restaurants/london" className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50">Italians in London: Food Guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
