// src/app/community/starter-uk-kitchen-italian/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Tiny UK Kitchen, Big Italian Flavour — Landing-style community guide
 * Design notes (deliberately different from the moka post):
 * - Warm amber/saffron accent instead of emerald
 * - Full-bleed hero with curved/wave separator
 * - Sticky Table of Contents on desktop (no JS)
 * - Alternating “content + blueprint” sections
 * - Timeline + blueprint SVGs (light theme)
 * - Card variety (soft shadows, rounded-3xl)
 * - Server component only (no "use client")
 * - Clean forms (no env warnings shown)
 * - SEO JSON-LD: Article, HowTo, FAQ, ItemList, Breadcrumb, Speakable
 */

export const metadata: Metadata = {
  title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
  description:
    "Turn a small UK rental into a reliable Italian cooking station. Smart tools, space-saving layouts, airtight storage, beginner→pro upgrades, 15-minute recipes, cleaning & safety, and money-saving buys.",
  alternates: { canonical: "/community/starter-uk-kitchen-italian" },
  openGraph: {
    title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "A high-conversion blueprint for small UK rentals: the essential tools, pantry heroes, airtight storage, layout hacks, quick recipes, and upgrade paths that actually matter.",
    type: "article",
  },
};

// Dates for meta chips
const PUBLISHED = "2025-10-07";
const UPDATED = "2025-10-19";

export default function Page() {
  // ===== JSON-LD (SEO) =====
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "A rental-friendly Italian kitchen kit for the UK: compact tools, airtight storage, layout patterns, quick recipes, care & safety, and smart buying tips.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/starter-uk-kitchen-italian",
    },
    inLanguage: "en-GB",
    articleSection: ["Lifestyle", "Food", "Italian UK"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: "https://resinaro.co.uk/community" },
      { "@type": "ListItem", position: 2, name: "Tiny UK Kitchen, Big Italian Flavour", item: "https://resinaro.co.uk/community/starter-uk-kitchen-italian" },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#summary", "#recipes"] },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Resinaro writing about kitchens?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Settling in the UK isn’t only paperwork. A tiny, workable kitchen helps you eat well, save money, and feel at home. This guide is the practical counterpart to our consular and housing help.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cook good Italian food without buying everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Start with one pan, one pot, a decent knife, and airtight storage. Upgrade only when your habits demand it. We show an Essentials → Core → Plus path for any budget.",
        },
      },
      {
        "@type": "Question",
        name: "What if I’m sharing a kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use a labelled box system and stackable airtight containers. Keep your kit portable (folding colander, roll-up mat). Pick induction-friendly cookware for compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "How do I keep costs down?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Prioritise multi-use tools, buy bronze-cut pasta on sale, use passata multipacks, and store properly so nothing spoils. We link to reliable, budget-friendly picks—no fluff.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up a compact Italian cooking station in a UK rental",
    totalTime: "PT30M",
    step: [
      { "@type": "HowToStep", name: "Claim a shelf", text: "Pick one cupboard shelf you can fully control. Add two labelled bins: ‘Pantry’ and ‘Tools’." },
      { "@type": "HowToStep", name: "Assemble the essentials", text: "Non-stick sauté pan (20–24 cm) with lid, 5–6 L pot, knife + board, colander, microplane, tongs, wooden spoon." },
      { "@type": "HowToStep", name: "Stock pantry heroes", text: "Bronze-cut pasta (long + short), passata, EVOO for finishing, dried oregano/rosemary, beans, tuna in oil, sea salt." },
      { "@type": "HowToStep", name: "Add airtight storage", text: "Use stackable containers for pasta, flour, coffee, and snacks. Label with open dates." },
      { "@type": "HowToStep", name: "Cook a first meal", text: "15-minute pomodoro or tuna-cannellini: simple, morale-boosting, and budget friendly." },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Italian Kitchen Starter Items",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "20–24 cm non-stick sauté pan" },
      { "@type": "ListItem", position: 2, name: "6 L pasta/stock pot (induction-friendly)" },
      { "@type": "ListItem", position: 3, name: "Chef’s knife + chopping board" },
      { "@type": "ListItem", position: 4, name: "Colander (collapsible) + microplane" },
      { "@type": "ListItem", position: 5, name: "Airtight food storage set (stackable)" },
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

      {/* ===== HERO (full-bleed, warm amber accent, curved separator) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/starterkitchen.png"
            alt="Full-width hero image: compact Italian kitchen setup in a UK rental"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* warm overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              Rental-friendly • Small space • Italian staples
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              Tiny UK Kitchen, Big Italian Flavour
              <span className="block text-amber-200">Starter Kit</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              A calm, reliable system for small rentals: the tools that matter, airtight storage, layouts that save time, and quick wins you’ll cook on repeat.
            </p>
          </div>

          {/* CTA block */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-800">
                  Download the printable starter checklist (PDF) + monthly Italian-in-the-UK tips.
                </p>
                <p className="text-xs text-gray-600">Zero spam. Unsubscribe anytime.</p>
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

          {/* Meta chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 7 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~11 min read</span>
          </div>
        </div>

        {/* Curved / wave separator */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 -z-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== Layout: sticky ToC + content ===== */}
      <section className="mx-auto mt-6 max-w-7xl px-6 md:mt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sticky Table of Contents (desktop) */}
          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <nav aria-label="Contents" className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Contents</p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["#summary","Why this works"],
                  ["#path","Starter path"],
                  ["#tools","Tiny-kitchen power tools"],
                  ["#storage","Airtight storage & layout"],
                  ["#blueprint","1-Shelf kitchen blueprint"],
                  ["#pantry","Pantry heroes"],
                  ["#recipes","15-minute recipes"],
                  ["#budget","Budget & bulk"],
                  ["#clean","Care & safety"],
                  ["#allergy","Dietary notes"],
                  ["#faq","FAQ"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href={href as string}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main column */}
          <div className="space-y-10">
            {/* USPs row (moved down so not clipped) */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {h:"Built for rentals",p:"Induction, tiny counters, mystery ovens—this pattern works anyway."},
                {h:"Cook more, waste less",p:"Airtight storage + layout you can maintain on busy days."},
                {h:"Upgrade path",p:"Essentials → Core → Plus. Spend only when it truly helps."},
              ].map((x)=>(
                <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-amber-800">{x.h}</h3>
                  <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                </div>
              ))}
            </div>

            {/* Summary block */}
            <section id="summary" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Why this works (and keeps working)</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    tag:"Habit first",
                    body:"One shelf + two labelled bins reduces decision fatigue. When you see everything, you cook more.",
                  },
                  {
                    tag:"Multi-use tools",
                    body:"One pan, one pot, one knife—then add only what unlocks new meals. Less clutter, faster setup.",
                  },
                  {
                    tag:"Airtight storage",
                    body:"You save money by not wasting staples. Clear tubs = instant inventory and fewer duplicates.",
                  },
                ].map((c)=>(
                  <div key={c.tag} className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{c.tag}</p>
                    <p className="mt-1 text-sm text-gray-800">{c.body}</p>
                  </div>
                ))}
              </div>

              {/* Mini CTA */}
              <div className="mt-6 rounded-2xl border border-amber-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-amber-900">Want a printable checklist for your cupboard door?</p>
                  <form
                    method="POST"
                    action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                    className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400"
                    />
                    <button type="submit" className="h-11 rounded-xl bg-amber-600 px-5 font-semibold text-white hover:bg-amber-700">
                      Email me the PDF
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Starter path — alternating rows */}
            <section id="path" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Starter Path: Essentials → Core → Plus</h2>
                  <p className="mt-1 text-sm text-gray-700">Buy once, cry never. Start small, then only add what you actually use.</p>
                </div>
                <a href="#tools" className="text-sm font-semibold text-amber-900 underline underline-offset-4">Power tools →</a>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Essentials */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">Week 1</span>
                  <h3 className="text-lg font-semibold text-gray-900">Essentials</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>20–24 cm non-stick sauté pan with lid —{" "}
                      <a href="https://www.amazon.co.uk/s?k=24cm+non+stick+saute+pan&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>
                    </li>
                    <li>5–6 L induction-friendly pot —{" "}
                      <a href="https://www.amazon.co.uk/s?k=stock+pot+6l&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">options</a>
                    </li>
                    <li>Chef’s knife + board set —{" "}
                      <a href="https://www.amazon.co.uk/s?k=chef+knife+and+chopping+board+set&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">budget picks</a>
                    </li>
                    <li>Collapsible colander + microplane —{" "}
                      <a href="https://www.amazon.co.uk/s?k=collapsible+colander&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">colanders</a>{" "}
                      ·{" "}
                      <a href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">microplanes</a>
                    </li>
                    <li>Airtight storage set (stackable) —{" "}
                      <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">sets</a>
                    </li>
                  </ul>
                </div>

                {/* Core */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">Month 1</span>
                  <h3 className="text-lg font-semibold text-gray-900">Core</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Heatproof tongs & wooden spoon</li>
                    <li>Small paring knife + peeler</li>
                    <li>Digital scale & measuring jug</li>
                    <li>Oven tray + reusable baking sheet</li>
                    <li>Clip-on thermometer (sauces & shallow frying)</li>
                  </ul>
                </div>

                {/* Plus */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">When ready</span>
                  <h3 className="text-lg font-semibold text-gray-900">Plus</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Cast-aluminium casserole (holds heat, lighter than cast iron)</li>
                    <li>Stick blender (soups, sauces, pesto)</li>
                    <li>Salad spinner (doubles as colander/bowl)</li>
                    <li>Mini food processor (pesto, pangrattato)</li>
                    <li>Glass containers (leftovers; microwave-safe)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tiny-kitchen power tools */}
            <section id="tools" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Tools that punch above their weight</h2>
              <p className="mt-1 text-sm text-gray-700">In a tiny kitchen, every item must earn its space.</p>

              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Microplane</h3>
                  <p className="mt-1 text-sm text-gray-800">
                    Turns Parmigiano, lemon zest and garlic into flavour confetti without bulk.{" "}
                    <a href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">See microplanes</a>.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Digital scale</h3>
                  <p className="mt-1 text-sm text-gray-800">Accurate portions = fewer fails and no waste. Essential for pasta and risotto.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Clip-on thermometer</h3>
                  <p className="mt-1 text-sm text-gray-800">Oil temperature under control for crisp veg, arancini, or quick sauces.</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Reusable baking sheet</h3>
                  <p className="mt-1 text-sm text-gray-800">Roast veg, confit garlic, or crisp pangrattato—no scrubbing, less foil.</p>
                </div>
              </div>
            </section>

            {/* Airtight storage & small-space layout */}
            <section id="storage" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Airtight storage & small-space layout</h2>
                  <p className="mt-1 text-sm text-gray-700">The fastest way to cook more and waste less: clear, grab-and-go patterns.</p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">One shelf, two bins</p>
                      <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                        <li><strong>Bin A:</strong> pasta, passata, beans, tuna, salt, herbs.</li>
                        <li><strong>Bin B:</strong> tongs, microplane, thermometer, baking sheet.</li>
                        <li>Label bins with your name if sharing.</li>
                        <li>Clear tubs = instant inventory, fewer duplicates.</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">Container strategy</p>
                      <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                        <li>Tall for spaghetti/linguine; short/wide for rigatoni.</li>
                        <li>Dedicated tub for coffee; another for snacks.</li>
                        <li>Date labels on opens; rotate older items forward.</li>
                        <li>
                          Airtight sets —{" "}
                          <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Blueprint SVG */}
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <svg viewBox="0 0 600 280" className="h-64 w-full">
                    <defs>
                      <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#fde68a" stopOpacity="0.35" />
                        <stop offset="1" stopColor="#fde68a" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="600" height="280" fill="url(#grid)" />
                    {/* Shelf */}
                    <rect x="40" y="60" width="520" height="20" rx="10" className="fill-amber-300" />
                    {/* Bins */}
                    <rect x="50" y="90" width="230" height="130" rx="16" className="fill-white stroke-amber-400" />
                    <rect x="320" y="90" width="230" height="130" rx="16" className="fill-white stroke-amber-400" />
                    <text x="165" y="115" textAnchor="middle" className="fill-amber-900" style={{ fontWeight: 700 }}>BIN A</text>
                    <text x="435" y="115" textAnchor="middle" className="fill-amber-900" style={{ fontWeight: 700 }}>BIN B</text>
                    <text x="165" y="140" textAnchor="middle" className="fill-gray-800" style={{ fontSize: 12 }}>Pantry Heroes</text>
                    <text x="435" y="140" textAnchor="middle" className="fill-gray-800" style={{ fontSize: 12 }}>Tools</text>
                    {/* Tall container */}
                    <rect x="80" y="160" width="40" height="50" rx="6" className="fill-white stroke-amber-400" />
                    <text x="100" y="220" textAnchor="middle" className="fill-gray-700" style={{ fontSize: 10 }}>Spaghetti</text>
                    {/* Short/wide */}
                    <rect x="130" y="175" width="70" height="35" rx="6" className="fill-white stroke-amber-400" />
                    <text x="165" y="220" textAnchor="middle" className="fill-gray-700" style={{ fontSize: 10 }}>Rigatoni</text>
                    {/* Labels */}
                    <line x1="265" y1="90" x2="265" y2="220" className="stroke-amber-300" />
                    <line x1="305" y1="90" x2="305" y2="220" className="stroke-amber-300" />
                  </svg>
                </div>
              </div>
            </section>

            {/* 1-Shelf kitchen blueprint (timeline of setup) */}
            <section id="blueprint" className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
                {/* Timeline SVG */}
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <svg viewBox="0 0 600 260" className="h-60 w-full">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M0 0 L10 5 L0 10 Z" className="fill-amber-500" />
                      </marker>
                    </defs>
                    {[
                      {x:40,t:"Claim shelf"},
                      {x:160,t:"2 bins"},
                      {x:280,t:"Essentials"},
                      {x:400,t:"Airtight set"},
                      {x:520,t:"Cook 15-min"},
                    ].map((p,i)=>(
                      <g key={p.x}>
                        <circle cx={p.x} cy={130} r={14} className="fill-white stroke-amber-400" />
                        <text x={p.x} y={135} textAnchor="middle" className="fill-amber-900" style={{fontWeight:700,fontSize:12}}>{i+1}</text>
                        <text x={p.x} y={170} textAnchor="middle" className="fill-gray-800" style={{fontSize:12}}>{p.t}</text>
                        {i<4 && <line x1={p.x+14} y1={130} x2={p.x+90} y2={130} className="stroke-amber-500" strokeWidth="2" markerEnd="url(#arrow)" />}
                      </g>
                    ))}
                  </svg>
                </div>
                {/* Copy */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">The 1-Shelf Kitchen Blueprint</h2>
                  <p className="mt-2 text-sm text-gray-800">
                    This gets you cooking tonight, not after a weekend of shopping. Claim one shelf, sort items into two bins, set
                    the essentials by the hob, and add airtight storage for the most-used staples. Then cook a win—the momentum keeps you going.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-gray-800">
                    <li>Keep a <em>“clean landing zone”</em> near the hob: the pan, salt, oil, tongs.</li>
                    <li>Put knives and board vertical in a slim rack to save counter depth.</li>
                    <li>Stack containers two high max; higher stacks tumble when you’re tired.</li>
                  </ul>
                  <div className="mt-5">
                    <a href="#recipes" className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-white px-5 text-sm font-semibold text-amber-900 hover:bg-amber-50">
                      Jump to the 15-minute recipes ↓
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Pantry heroes (and what to skip) */}
            <section id="pantry" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Pantry heroes (and what to skip)</h2>
              <p className="mt-1 text-sm text-gray-700">Simple, affordable, flexible. With these in your cupboard, dinner is 15 minutes away.</p>

              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Always stock</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>
                      <strong>Bronze-cut pasta (long + short)</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">De Cecco</a>{" "}
                      ·{" "}
                      <a href="https://www.amazon.co.uk/s?k=rummo+rigatoni&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Rummo</a>{" "}
                      · GF:{" "}
                      <a href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Rummo GF</a>
                    </li>
                    <li>
                      <strong>Passata / tinned tomatoes</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=mutti+passata&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Mutti</a>; treat:{" "}
                      <a href="https://www.amazon.co.uk/s?k=san+marzano+dop+tinned+tomatoes&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">San Marzano DOP</a>
                    </li>
                    <li><strong>EVOO (finishing)</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=sicilian+igp+olive+oil&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Sicilian IGP</a>
                    </li>
                    <li><strong>Dried oregano & rosemary</strong> — own-brand fine</li>
                    <li><strong>Cannellini/borlotti beans</strong> — easy protein</li>
                    <li><strong>Tuna in olive oil</strong> — Rio Mare / ASdoMAR</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Often not worth it (tiny kitchens)</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Huge spice sets (aroma fades before you use them)</li>
                    <li>Multiple single-use gadgets (bulky, hard to clean)</li>
                    <li>Giant bottles of opened oil (rancidity risk if warm/bright shelves)</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-700">Buy small, high-quality items you finish quickly; store backups away from heat and light.</p>
                </div>
              </div>
            </section>

            {/* Recipes */}
            <section id="recipes" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Three 15-minute recipes (one pan, one pot)</h2>
                  <p className="mt-1 text-sm text-gray-700">Cook a first win tonight—confidence fuels the habit.</p>
                </div>
                <a href="#budget" className="text-sm font-semibold text-amber-900 underline underline-offset-4">Budget moves →</a>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 text-sm">
                {/* Pomodoro */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Spaghetti al Pomodoro</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    <li>Start boiling salted water (like the sea).</li>
                    <li>Pan: warm EVOO + halved garlic clove (low).</li>
                    <li>Add passata + pinch of sugar/salt. Simmer 8–10 min.</li>
                    <li>Cook spaghetti; transfer to pan with splash of pasta water.</li>
                    <li>Toss; finish with EVOO, black pepper, oregano.</li>
                  </ol>
                  <p className="mt-2 text-gray-700">Upgrade: microplane a little lemon zest for brightness.</p>
                </div>

                {/* Tuna & beans */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Tuna & Cannellini Skillet</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    <li>EVOO + garlic; add cannellini with a splash of passata.</li>
                    <li>Season with oregano & sea salt; warm through.</li>
                    <li>Off heat: fold in tuna and lemon zest.</li>
                    <li>Serve with bread or toss with short pasta.</li>
                  </ol>
                  <p className="mt-2 text-gray-700">Optional: chilli flakes bloomed with the garlic.</p>
                </div>

                {/* Courgette + pangrattato */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Courgette + Pangrattato Pasta</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    <li>Toast breadcrumbs in EVOO + rosemary; set aside.</li>
                    <li>Sauté sliced courgette till golden.</li>
                    <li>Toss with pasta + pasta water for gloss.</li>
                    <li>Finish with EVOO, lemon zest, toasted crumbs.</li>
                  </ol>
                  <p className="mt-2 text-gray-800">Swap courgette for peas or mushrooms if cheaper.</p>
                </div>
              </div>
            </section>

            {/* Budget & bulk */}
            <section id="budget" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Budget moves, bulk buys & UK substitutions</h2>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Where to spend</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Good passata/tomatoes—flavour multiplier.</li>
                    <li>Finishing EVOO—peppery, green, alive.</li>
                    <li>Pasta—bronze-cut grips sauce; fewer fails.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Where to save</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Dried herbs & sea salt—own-brand is fine.</li>
                    <li>Beans—buy multipacks on deal.</li>
                    <li>Storage—mix premium airtight for staples with budget tubs for snacks.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Bulk-friendly links</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Pasta cases —{" "}
                      <a href="https://www.amazon.co.uk/s?k=de+cecco+case&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">shop cases</a>
                    </li>
                    <li>Passata multipacks —{" "}
                      <a href="https://www.amazon.co.uk/s?k=mutti+passata+6+pack&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Mutti 6–12 packs</a>
                    </li>
                    <li>Beans 12-pack —{" "}
                      <a href="https://www.amazon.co.uk/s?k=cannellini+beans+12+pack&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>
                    </li>
                    <li>EVOO tins (3L) —{" "}
                      <a href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">cool, dark storage</a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">UK substitutions that work</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Shallots for unavailable small onions—sweeter, quick to cook.</li>
                    <li>Own-brand chopped tomatoes + a dash of passata.</li>
                    <li>Cheddar microplaned for melt; for sharp finish, use less but finer zest.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Care & safety */}
            <section id="clean" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">Care that extends tool life</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Non-stick pan: soft sponge only, avoid aerosol sprays, low–medium heat.</li>
                    <li>Knives: wash/dry immediately; hone weekly; store in a guard or sheath.</li>
                    <li>Wooden boards/spoons: handwash; oil monthly to prevent cracks.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">Rental safety basics</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Extension leads: surge protection; keep away from sinks/hobs.</li>
                    <li>Induction hobs: only flat, magnetic-base cookware; avoid warping.</li>
                    <li>Ventilation: open a window or run extractor when frying/boiling long.</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-600">If something feels unsafe (sparks, damaged outlets), stop and inform your landlord/agent. Document issues with photos.</p>
                </div>
              </div>
            </section>

            {/* Dietary & allergy notes */}
            <section id="allergy" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Dietary & allergy notes</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                <li><strong>Vegetarian/Vegan:</strong> plant pesto, beans for protein, EVOO finish for richness.</li>
                <li><strong>Gluten-free:</strong> pick GF pasta; risotto rice is naturally GF.</li>
                <li><strong>Allergens:</strong> check pesto (nuts/dairy) and tuna (fish). Always read labels.</li>
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quick FAQ</h2>
              {[
                ["Do I need a full knife set?","No. One balanced chef’s knife + a small paring knife cover 95% of tasks in small kitchens."],
                ["Gas vs. induction vs. ceramic—what changes?","Induction is fastest (use magnetic-base pans). Ceramic heats slower (be patient). Gas is responsive—watch open flames with handles."],
                ["What’s the best first upgrade?","A microplane or a stick blender. Both multiply flavour/texture without stealing space."],
              ].map(([q,a])=>(
                <details key={q as string} className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">{q}</summary>
                  <div className="mt-2 text-sm text-gray-700">{a}</div>
                </details>
              ))}
            </section>

            {/* Related reads & footer CTA */}
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Related reads</h2>
                <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/italian-essentials">
                      New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/bulk-italian-pantry-uk">
                      Save Money: Bulk Italian Pantry Buys in the UK
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/moka-coffee-kit">
                      The No-Machine Italian Coffee Kit (UK Edition)
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-600">
                  Some links may earn us a small commission at no extra cost to you. It helps keep community guides free.
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Get the printable starter checklist</h3>
                <p className="mt-1 text-sm text-gray-700">
                  One page with essentials, layout, airtight storage, and a 15-minute menu plan.
                </p>
                <form method="POST" action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"} className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <input type="email" name="email" required placeholder="you@email.com" className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:max-w-sm" />
                  <button type="submit" className="h-11 rounded-xl bg-amber-600 px-6 font-semibold text-white hover:bg-amber-700">Email me the PDF</button>
                </form>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50">Ask a kitchen question</Link>
                  <Link href="/directory" className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50">Find Italian shops near you →</Link>
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
