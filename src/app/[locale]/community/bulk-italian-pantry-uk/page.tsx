// src/app/community/bulk-italian-pantry-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

/**
 * Save Money: Bulk Italian Pantry Buys in the UK
 * Landing-style community guide with:
 * - Full-bleed hero (cool teal accent to differentiate from other guides)
 * - Desktop sticky ToC (pure CSS)
 * - Alternating content blocks, pricing cards, tables
 * - Timeline & blueprint SVGs (no client JS)
 * - Strong conversion CTAs with clean newsletter form
 * - Server component only (no "use client")
 * - Rich JSON-LD: Article, HowTo, FAQ, ItemList, Breadcrumb, Speakable
 */

export const metadata: Metadata = {
  title: "Save Money: Bulk Italian Pantry Buys in the UK",
  description:
    "Cut weekly costs with a 3-month Italian pantry plan: what to bulk, what not to, per-meal cost breakdowns, storage & shelf life, and discount tactics for UK rentals.",
  alternates: { canonical: "/community/bulk-italian-pantry-uk" },
  openGraph: {
    title: "Save Money: Bulk Italian Pantry Buys in the UK",
    description:
      "A repeatable 12-week pantry system: bulk items worth it, household sizing tables, per-meal costs, storage & shelf life, and discounts that actually work.",
    type: "article",
  },
};

// Meta dates
const PUBLISHED = "2025-10-04";
const UPDATED = "2025-10-19";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // ===== JSON-LD =====
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Save Money: Bulk Italian Pantry Buys in the UK",
    description:
      "A practical 3-month pantry plan for UK rentals: bulk staples, household sizing, per-meal costs, storage & shelf life, discount tactics.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/bulk-italian-pantry-uk",
    },
    inLanguage: "en-GB",
    articleSection: ["Savings", "Food", "Italian UK"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: "https://resinaro.co.uk/community" },
      { "@type": "ListItem", position: 2, name: "Bulk Italian Pantry UK", item: "https://resinaro.co.uk/community/bulk-italian-pantry-uk" },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#why-bulk", "#costs"],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do bulk items like pasta, beans and passata last?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dried pasta: 1–2 years unopened. Tinned beans/tomatoes: typically 1–3 years (check best-before). Passata: 12–18 months unopened. Olive oil: best within 12 months of pressing; store tins cool and dark. Coffee: sealed tins 12–24 months; once opened, use within 2–4 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Is bulk buying worth it in a small flat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—if you prioritise long-life items (pasta, passata, tins, coffee in sealed tins, 3L olive oil) and organise storage. Avoid bulking fragile items like jarred pesto or spices you rarely use.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the quickest way to see real savings?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Buy pasta by the case, passata/polpa in 6–12 packs, a 3L olive oil tin, and beans in 12-packs; stack Subscribe & Save, multi-buy promos, and warehouse deals. Aim for 15–30% below shelf price.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a 3-Month Italian Pantry on a Budget (UK)",
    description:
      "A step-by-step plan to bulk buy the right Italian staples, store them well, and cut per-meal costs.",
    totalTime: "P1D",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose bulk-friendly items",
        text:
          "Prioritise pasta cases, passata/polpa 6–12 packs, cannellini/borlotti multipacks, 3L olive oil tins, and moka coffee multipacks.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate household sizing",
        text:
          "Use 80–100g pasta per adult serving; 1 jar passata ≈ 4 portions; 1×400g tin beans ≈ 2–3 portions. Multiply for 12 weeks.",
      },
      {
        "@type": "HowToStep",
        name: "Stack discounts",
        text: "Combine multi-buy offers, Subscribe & Save, and time-limited vouchers. Target 15–30% off.",
      },
      {
        "@type": "HowToStep",
        name: "Store correctly",
        text:
          "Keep tins/bags in the darkest, coolest cupboard (not by the oven). Decant open oil into small brown bottles; label open dates.",
      },
      {
        "@type": "HowToStep",
        name: "Cook from the stash",
        text:
          "Batch cook sauces/beans; rotate stock FIFO (first in, first out). Track weekly use and adjust your next order.",
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bulk-friendly Italian Pantry Items",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pasta cases (De Cecco/Rummo)" },
      { "@type": "ListItem", position: 2, name: "Passata/polpa 6–12 packs" },
      { "@type": "ListItem", position: 3, name: "Cannellini/Borlotti 12-packs" },
      { "@type": "ListItem", position: 4, name: "Olive oil 3L tins" },
      { "@type": "ListItem", position: 5, name: "Coffee tins (moka grind) multipacks" },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* ===== HERO (full-bleed, teal accent) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bulkessentials.png"
            alt="Italian bulk pantry: pasta cases, passata, beans, EVOO tins in a UK cupboard"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              Save weekly • Buy once • Eat better
            </p>
            <h1 className="text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              Save Money:
              <span className="block text-teal-200">Bulk Italian Pantry Buys in the UK</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg" id="why-bulk">
              Bulk = fewer trips + lower unit prices. The real win is a system: know what to buy, how much your home uses in
              12 weeks, and how to store it so nothing goes to waste.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">
                  Get the printable 12-week pantry plan (PDF) + monthly Italian-in-the-UK savings tips.
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

          {/* Meta chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 4 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~10 min read</span>
          </div>
        </div>

        {/* Wave separator */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 -z-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== LAYOUT: sticky ToC + content ===== */}
      <section className="mx-auto mt-6 max-w-7xl px-6 md:mt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sticky ToC */}
          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <nav aria-label="Contents" className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">Contents</p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["#what-to-bulk","What to bulk (and avoid)"],
                  ["#helpers","Storage helpers"],
                  ["#household-sizing","Household sizing table"],
                  ["#costs","Per-meal cost breakdown"],
                  ["#storage","Storage & shelf life"],
                  ["#plan","3-month pantry plan"],
                  ["#tactics","Discount tactics"],
                  ["#qa","FAQs"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a className="text-teal-900 underline underline-offset-4 hover:text-teal-700" href={href as string}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main column */}
          <div className="space-y-10">
            {/* USPs row (placed low so not clipped) */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {h:"Real savings",p:"Aim 15–30% below shelf price using stackable discounts."},
                {h:"Small-flat friendly",p:"One cool, dark cupboard + airtight tubs = zero clutter."},
                {h:"Repeatable plan",p:"12-week cycle you can run every term with minimal admin."},
              ].map((x)=>(
                <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-teal-800">{x.h}</h3>
                  <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                </div>
              ))}
            </div>

            {/* What to bulk / avoid */}
            <section id="what-to-bulk" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
                  <h2 className="text-xl font-bold text-teal-900 mb-1">Bulk-friendly</h2>
                  <p className="text-sm text-gray-800 mb-3">Long shelf life, stable quality, easy to rotate:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Pasta cases (De Cecco/Rummo) —{" "}
                      <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=de+cecco+case&tag=resinaroamzn-21">
                        shop cases
                      </a>
                    </li>
                    <li>
                      Passata / polpa 6–12 packs —{" "}
                      <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=mutti+passata+6+pack&tag=resinaroamzn-21">
                        Mutti multipacks
                      </a>
                    </li>
                    <li>
                      Cannellini/borlotti 12-packs —{" "}
                      <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=cannellini+beans+12+pack&tag=resinaroamzn-21">
                        beans 12-pack
                      </a>
                    </li>
                    <li>
                      Olive oil 3L tins —{" "}
                      <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21">
                        EVOO tins
                      </a>
                    </li>
                    <li>
                      Coffee tins (moka grind) —{" "}
                      <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=illy+moka+coffee+6+pack&tag=resinaroamzn-21">
                        Illy multipacks
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Don’t bulk these</h2>
                  <p className="text-sm text-gray-800 mb-3">Quality drops fast or waste risk is high:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Jarred pesto (quality dips after opening)</li>
                    <li>Spices you rarely use (lose aroma fast)</li>
                    <li>Open EVOO bottles (go rancid with light/air)</li>
                  </ul>
                  <p className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
                    <strong>Tip:</strong> buy small “treat” items as needed, but keep bulk money in the workhorses (pasta, passata, beans, EVOO).
                  </p>
                </div>
              </div>
            </section>

            {/* Helpers */}
            <section id="helpers" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Storage helpers</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900">Airtight container set</h3>
                  <p className="mt-1 text-gray-700">
                    Label open dates. Keep pasta dry and visible so you rotate properly.{" "}
                    <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=airtight+container+set&tag=resinaroamzn-21">
                      compare
                    </a>
                  </p>
                </div>
                <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4">
                  <h3 className="font-semibold text-teal-900">Stackable can risers</h3>
                  <p className="mt-1 text-gray-800">
                    FIFO becomes effortless when you can see rows.{" "}
                    <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=can+organiser+rack&tag=resinaroamzn-21">
                      organisers
                    </a>
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900">Cool-dark labels</h3>
                  <p className="mt-1 text-gray-700">
                    Mark the best cupboard for tins/oil; declutter others.{" "}
                    <a rel="nofollow sponsored noopener" target="_blank" className="text-teal-900 underline" href="https://www.amazon.co.uk/s?k=pantry+labels&tag=resinaroamzn-21">
                      labels
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Household sizing */}
            <section id="household-sizing" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">How much should you buy? (12-week guide)</h2>
              <p className="mt-1 text-sm text-gray-700">
                Use this as a starting point and tweak after your first cycle. Assumes ~3 pasta meals/week, 2 bean meals/week, and daily moka.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr className="[&>th]:px-3 [&>th]:py-2">
                      <th>Household</th>
                      <th>Pasta</th>
                      <th>Passata/Polpa</th>
                      <th>Beans (400g)</th>
                      <th>EVOO</th>
                      <th>Moka Coffee</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr]:border-t">
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>1 adult</td>
                      <td>6–8 kg</td>
                      <td>8–10 jars</td>
                      <td>10–12</td>
                      <td>1×3L tin</td>
                      <td>4–6 tins</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Couple</td>
                      <td>10–14 kg</td>
                      <td>12–16 jars</td>
                      <td>18–24</td>
                      <td>1×3L tin</td>
                      <td>8–12 tins</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Family (2–4)</td>
                      <td>16–24 kg</td>
                      <td>18–24 jars</td>
                      <td>24–36</td>
                      <td>1–2×3L tins</td>
                      <td>12–18 tins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                Rule of thumb: pasta ~90g/adult; 1 jar passata ~4 portions; 1×400g beans = 2–3 portions.
              </p>
            </section>

            {/* Per-meal costs */}
            <section id="costs" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">What does dinner actually cost?</h2>
              <p className="mt-1 text-sm text-gray-700">
                Based on typical bulk prices (illustrative): pasta £1.40/500g, passata £1.10/jar, beans £0.65/tin, EVOO £8/L (3L ~£24), tuna £1.60/can.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900">Spaghetti al pomodoro</h3>
                  <ul className="mt-1 list-disc pl-5 text-gray-800">
                    <li>100g pasta ≈ £0.28</li>
                    <li>¼ jar passata ≈ £0.28</li>
                    <li>EVOO 1 tbsp ≈ £0.08</li>
                  </ul>
                  <p className="mt-2 font-semibold">~ £0.64 per person</p>
                </div>
                <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4">
                  <h3 className="font-semibold text-teal-900">Pasta e fagioli (fast)</h3>
                  <ul className="mt-1 list-disc pl-5 text-gray-800">
                    <li>80g pasta ≈ £0.22</li>
                    <li>½ tin beans ≈ £0.33</li>
                    <li>¼ jar passata ≈ £0.28</li>
                    <li>EVOO 1 tbsp ≈ £0.08</li>
                  </ul>
                  <p className="mt-2 font-semibold text-teal-900">~ £0.91 per person</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900">Tuna & cannellini bowl</h3>
                  <ul className="mt-1 list-disc pl-5 text-gray-800">
                    <li>½ tin beans ≈ £0.33</li>
                    <li>½ can tuna ≈ £0.80</li>
                    <li>EVOO + herbs ≈ £0.10</li>
                  </ul>
                  <p className="mt-2 font-semibold">~ £1.23 per person</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600">Prices vary by brand/offer; use this to sanity-check savings.</p>
            </section>

            {/* Storage & shelf life */}
            <section id="storage" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Storage & shelf life (small-flat friendly)</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr className="[&>th]:px-3 [&>th]:py-2">
                      <th>Item</th>
                      <th>Best unopened</th>
                      <th>After opening</th>
                      <th>Tips</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr]:border-t">
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Dried pasta</td>
                      <td>12–24 months</td>
                      <td>Keep sealed, dry</td>
                      <td>Decant into airtight tubs; label date.</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Passata / polpa</td>
                      <td>12–18 months</td>
                      <td>2–3 days in fridge</td>
                      <td>Plan dishes to use a full jar day-of if fridge space is tight.</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Tinned beans</td>
                      <td>1–3 years</td>
                      <td>2–3 days in fridge</td>
                      <td>Decant leftovers into a covered container.</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Olive oil (3L tin)</td>
                      <td>Best within 12 months</td>
                      <td>Use within 2–3 months of decant</td>
                      <td>Decant into small dark bottles; store the tin cool/dark.</td>
                    </tr>
                    <tr className="[&>td]:px-3 [&>td]:py-2">
                      <td>Moka coffee (tins)</td>
                      <td>12–24 months</td>
                      <td>2–4 weeks</td>
                      <td>Open one tin at a time; keep others sealed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm">
                <p className="font-semibold">Quality checks that save money:</p>
                <ul className="list-disc pl-5">
                  <li><strong>EVOO rancid?</strong> Smells like wax/crayons; flavour waxy → don’t use.</li>
                  <li><strong>Coffee stale?</strong> Aroma muted, taste papery → open a fresh tin.</li>
                  <li><strong>Tomatoes:</strong> Sweet/bright is good; metallic/bitter suggests poor brand or age.</li>
                </ul>
              </div>
            </section>

            {/* Plan */}
            <section id="plan" className="rounded-3xl border border-teal-200 bg-teal-50 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-teal-900">Your 3-Month Pantry Plan (repeatable)</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-gray-800">
                <li><strong>Order once:</strong> 1 pasta case (mix shapes), 12× passata/polpa, 12× beans, 1×3L EVOO, coffee 6–12 tins.</li>
                <li><strong>Decant & label:</strong> Move pasta to airtight tubs; write open dates on EVOO/coffee.</li>
                <li><strong>Batch weekly:</strong> Make 1L tomato base + a 2-tin bean pot; portion. If no freezer, plan meals to finish jars.</li>
                <li><strong>Rotate stock:</strong> FIFO—place new cases behind open ones.</li>
                <li><strong>Track 4 weeks:</strong> Adjust the next order to hit zero waste.</li>
              </ol>

              {/* Timeline SVG */}
              <div className="mt-6 rounded-2xl border border-teal-200 bg-white p-4">
                <svg viewBox="0 0 600 200" className="h-48 w-full">
                  <defs>
                    <marker id="arrowTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M0 0 L10 5 L0 10 Z" className="fill-teal-500" />
                    </marker>
                  </defs>
                  {[
                    {x:40,t:"Order"},
                    {x:180,t:"Decant"},
                    {x:320,t:"Batch"},
                    {x:460,t:"Rotate"},
                  ].map((p,i)=>(
                    <g key={p.x}>
                      <circle cx={p.x} cy={90} r={14} className="fill-white stroke-teal-400" />
                      <text x={p.x} y={95} textAnchor="middle" className="fill-teal-900" style={{fontWeight:700,fontSize:12}}>{i+1}</text>
                      <text x={p.x} y={130} textAnchor="middle" className="fill-gray-800" style={{fontSize:12}}>{p.t}</text>
                      {i<3 && <line x1={p.x+14} y1={90} x2={p.x+92} y2={90} className="stroke-teal-500" strokeWidth="2" markerEnd="url(#arrowTeal)" />}
                    </g>
                  ))}
                </svg>
              </div>
            </section>

            {/* Tactics */}
            <section id="tactics" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Discount tactics that actually move the needle</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-gray-800">
                <li><strong>Subscribe & Save:</strong> Add cases/multipacks, take the % discount, then move delivery or pause after the first drop.</li>
                <li><strong>Mix & match multi-buy:</strong> Combine shapes/brands within the same promo to avoid monotony.</li>
                <li><strong>Warehouse/Open-box:</strong> Often fine for tins/boxes; inspect on arrival, return free if damaged.</li>
                <li><strong>Unit pricing first:</strong> Divide price by kg or per jar/tin—bulk isn’t always cheaper.</li>
                <li><strong>Group orders:</strong> Split a pasta case or EVOO tin with friends/flatmates to unlock pricing without storage pain.</li>
              </ul>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm">
                  <h3 className="font-semibold text-gray-900">“Is it really a deal?” quick test</h3>
                  <ol className="mt-1 list-decimal pl-5 space-y-1">
                    <li>Check normal unit price on two retailers.</li>
                    <li>Apply discount math to the bulk listing.</li>
                    <li>Only buy if ≥15% below your normal local unit price.</li>
                  </ol>
                </div>
                <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4 text-sm">
                  <h3 className="font-semibold text-teal-900">Delivery storage trick</h3>
                  <p className="mt-1 text-gray-800">
                    Keep one “decant night”: open boxes, label dates, and store correctly. 15 minutes now saves £££ later.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="qa" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quick FAQ</h2>
              {[
                ["Where do I put a 3L oil tin?","Cool, dark cupboard—not above or next to the oven. Decant into small brown bottles for daily use."],
                ["Do I need a chest freezer?","No. This plan avoids freezer dependency; batch what fits your fridge and plan to finish jars same week."],
                ["What about gluten-free?","Bulk GF pasta is great if you like the brand (Rummo GF). Keep everything sealed and labelled as usual."],
              ].map(([q,a])=>(
                <details key={q as string} className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">{q}</summary>
                  <div className="mt-2 text-sm text-gray-700">{a}</div>
                </details>
              ))}
            </section>

            {/* Related + CTA */}
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Related reads</h2>
                <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
                  <li>
                    <Link className="text-teal-900 underline underline-offset-4 hover:text-teal-700" href="/community/starter-uk-kitchen-italian">
                      Tiny UK Kitchen, Big Italian Flavour: Starter Kit
                    </Link>
                  </li>
                  <li>
                    <Link className="text-teal-900 underline underline-offset-4 hover:text-teal-700" href="/community/moka-coffee-kit">
                      The No-Machine Italian Coffee Kit (UK Edition)
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-600">
                  Some links may earn a small commission at no extra cost to you. It helps keep community guides free.
                </p>
              </div>

              <div className="rounded-3xl border border-teal-200 bg-teal-50 p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Join the “Bulk Better” newsletter</h3>
                <p className="mt-1 text-sm text-gray-700">
                  One concise email per month: verified deals, unit-price wins, and zero-waste tips for small UK kitchens.
                </p>
                <form method="POST" action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"} className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="h-11 w-full rounded-xl border border-teal-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-teal-400 sm:max-w-sm"
                  />
                  <button type="submit" className="h-11 rounded-xl bg-teal-600 px-6 font-semibold text-white hover:bg-teal-700">
                    Subscribe
                  </button>
                </form>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href={p(locale, "/directory")} className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                    Find Italian shops near you →
                  </Link>
                  <Link href={p(locale, "/contact")} className="inline-flex h-10 items-center justify-center rounded-xl border border-teal-200 bg-white px-4 text-sm font-semibold text-teal-900 hover:bg-teal-50">
                    Ask a savings question
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
