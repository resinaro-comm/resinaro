// app/community/move-in-cleaning-kit-uk/page.tsx
import Image from "next/image";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

// ——— Meta ———
export const metadata = {
  title: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals (Deposit-Safe Guide)",
  description:
    "Room-by-room move-in checklist, deposit-safe cleaning methods, damp & condensation fixes, wall-safe mounting, toolkit essentials, and renter-friendly upgrades—plus quick affiliate picks.",
  alternates: { canonical: "/community/move-in-cleaning-kit-uk" },
  openGraph: {
    title: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals",
    description:
      "Exact steps for the first 24 hours, damp control, wall-safe mounting, and a mini toolkit that protects your deposit.",
    type: "article",
  },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // ——— JSON-LD (Article + FAQ + HowTo) ———
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals (Deposit-Safe Guide)",
    author: { "@type": "Organization", name: "Resinaro" },
    datePublished: "2025-10-07",
    description:
      "A deposit-safe, room-by-room guide for cleaning and small fixes in UK rentals: products, methods, damp control, and landlord-friendly upgrades.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I clean first on move-in day?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Start with high-touch points (handles, switches, taps), then bathroom and kitchen, then floors. Photograph pre-existing issues before cleaning to protect your deposit.",
        },
      },
      {
        "@type": "Question",
        name: "How do I deal with UK rental damp and condensation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Vent daily, heat rooms evenly, use moisture absorbers in wardrobes, and wipe condensation from windows. Report leaks or structural issues; use mould-safe cleaner only for small surface spots.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hang things without drilling?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—use Command strips/hooks, clean with isopropyl alcohol first, match the correct weight rating, and follow cure times. Keep packaging to simplify removal before move-out.",
        },
      },
      {
        "@type": "Question",
        name: "Which products are safe for deposits and typical UK finishes?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Neutral pH sprays for paintwork, non-abrasive bathroom descalers, microfibre cloths, and a flat mop with washable pads. Avoid harsh abrasives on glass, chrome, or laminate.",
        },
      },
      {
        "@type": "Question",
        name: "What should be in a first-week renter’s toolkit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "WD-40, adjustable spanner, small screwdriver set, picture-hanging strips, door-draft excluder, felt pads, moisture absorbers, basic plasters, batteries, and a plug-in socket tester.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Deposit-Safe Move-In Cleaning & Setup",
    totalTime: "PT4H",
    supply: [
      { "@type": "HowToSupply", name: "Microfibre cloths (bulk pack)" },
      { "@type": "HowToSupply", name: "Neutral multi-surface spray" },
      { "@type": "HowToSupply", name: "Bathroom descaler (non-abrasive)" },
      { "@type": "HowToSupply", name: "Flat mop + washable pads" },
      { "@type": "HowToSupply", name: "Command hooks/strips" },
      { "@type": "HowToSupply", name: "WD-40" },
      { "@type": "HowToSupply", name: "Moisture absorbers" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Photograph and log issues",
        text:
          "Walk every room. Time-stamped photos of damage, mould, missing items—save to a shared folder before cleaning.",
      },
      {
        "@type": "HowToStep",
        name: "Clean high-touch points",
        text:
          "Disinfect handles, switches, taps, toilet flush, fridge seal, cupboard pulls and remotes with neutral spray + microfibre.",
      },
      {
        "@type": "HowToStep",
        name: "Bathrooms then kitchen",
        text:
          "Descale taps/showerheads; degrease hob and backsplash; wipe cupboards; finish floors with a flat mop.",
      },
      {
        "@type": "HowToStep",
        name: "Tackle damp & airflow",
        text:
          "Open trickle vents, run extractors, wipe window condensation, deploy moisture absorbers in wardrobes.",
      },
      {
        "@type": "HowToStep",
        name: "Deposit-safe mounting",
        text:
          "Use Command strips for art/small shelves; match weight rating; follow cure time; keep receipts for move-out.",
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* ——— HERO (full-bleed, no overlap) ——— */}
      <section className="relative w-full h-[68vh] min-h-[520px] overflow-hidden">
        <Image
          // swap to your final hero asset (you mentioned a container image exists)
          src="/images/cleaning.pngopen"
          alt="Move-in day in a UK rental: microfibres, flat mop, hooks and moisture absorbers laid out by the doorway"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto max-w-6xl px-6 pb-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide bg-emerald-700/85 px-3 py-1 rounded-full">
                HOUSING • DEPOSIT-SAFE
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Move-In Day: Cleaning &amp; Fix-It Kit for UK Rentals
              </h1>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                Shoot evidence, clean the right things first, tame damp, hang without drilling—protect your deposit from day one.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#first-24"
                  className="inline-flex items-center rounded-full bg-white text-emerald-900 font-semibold px-5 py-2.5 shadow-sm hover:bg-emerald-50 transition"
                >
                  Start the 24-hour checklist ↓
                </a>
                <a
                  href="#toolkit"
                  className="inline-flex items-center rounded-full border border-white/70 text-white font-semibold px-5 py-2.5 hover:bg-white/10 transition"
                >
                  See the mini toolkit
                </a>
              </div>
              <p className="mt-4 text-[12px] text-white/80">
                Published: 7 Oct 2025 • Updated regularly by the Resinaro team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Value props (moved DOWN; no negative margin = no clipping) ——— */}
      <section className="container mx-auto max-w-6xl px-6 mt-10 md:mt-14">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white shadow-sm border p-5">
            <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Deposit-minded</p>
            <p className="text-sm mt-1">
              Steps and products chosen to avoid paint damage, floor scratches, and landlord drama.
            </p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border p-5">
            <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Renter-friendly</p>
            <p className="text-sm mt-1">
              Reversible fixes only—no drilling unless you have written permission and the right anchors.
            </p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border p-5">
            <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Time-boxed</p>
            <p className="text-sm mt-1">A realistic four-hour plan you can actually finish on day one.</p>
          </div>
        </div>
      </section>

      {/* ——— Content ——— */}
      <div className="container mx-auto max-w-6xl px-6 py-10 md:py-14">
        {/* Intro */}
        <section className="bg-white border rounded-3xl shadow-sm p-6 md:p-9 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
            Why this guide (and how it helps future-you)
          </h2>
          <p className="mb-3">
            UK rentals can be… quirky. A little damp here, a sticky door there, paint that marks if you look at it wrong.
            We built this from hundreds of community questions: what to clean first, what to buy (and avoid), how to document
            everything, and how to hang things without risking your deposit.
          </p>
          <p className="text-sm text-gray-700">
            Hit the quick picks, then the 24-hour checklist. After that, jump into room-by-room methods, damp fixes, wall-safe
            mounting, and a move-out plan you’ll thank yourself for later.
          </p>
        </section>

        {/* Quick picks */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border rounded-3xl p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Cleaning & organising essentials</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Microfibre cloth bundle —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=microfibre+cloth+pack&tag=resinaroamzn-21">
                  bulk packs
                </a>
              </li>
              <li>
                Flat mop + extra pads —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=flat+mop+microfibre&tag=resinaroamzn-21">
                  compare
                </a>
              </li>
              <li>Neutral multi-surface spray & non-abrasive descaler</li>
              <li>
                Command hooks/strips —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=command+strips&tag=resinaroamzn-21">
                  sizes
                </a>
              </li>
              <li>
                Moisture absorbers —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=wardrobe+moisture+absorber&tag=resinaroamzn-21">
                  damp traps
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white border rounded-3xl p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Quick-fix & toolkit basics</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                WD-40 + mini screwdriver set —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=basic+tool+set+home&tag=resinaroamzn-21">
                  starter kits
                </a>
              </li>
              <li>Felt pads for chairs/sofa feet (save the floors)</li>
              <li>
                Door draft excluder —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21">
                  options
                </a>
              </li>
              <li>
                Plug-in socket tester —{" "}
                <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=socket+tester&tag=resinaroamzn-21">
                  check wiring
                </a>
              </li>
              <li>AA/AAA batteries + small torch</li>
            </ul>
          </div>
        </section>

        {/* Contents (non-sticky chips) */}
        <nav aria-label="Contents" className="mb-10">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#first-24">24-hour checklist</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#rooms">Room-by-room</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#damp">Damp & condensation</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#walls">Wall-safe mounting</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#odours">Odour & hygiene</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#toolkit">Mini toolkit</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#moveout">Move-out strategy</a></li>
            <li><a className="rounded-full bg-emerald-100/70 px-3 py-1 text-emerald-900 hover:bg-emerald-200 transition" href="#faq">FAQ</a></li>
          </ul>
        </nav>

        {/* 24-hour checklist */}
        <section id="first-24" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Your first 24 hours (deposit-safe)</h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm md:text-[15px]">
            <li><strong>Photograph everything:</strong> chips in paint, stains, loose carpet, damp patches, cracked tiles, scratched worktops, missing bulbs. Time-stamp; save to cloud.</li>
            <li><strong>High-touch clean sweep:</strong> handles, switches, taps, toilet flush, fridge seal, cupboard pulls, remotes—neutral spray + microfibre.</li>
            <li><strong>Bathroom first:</strong> non-abrasive descaler on taps/showerhead; check extractor (tissue test). Replace grotty curtain if needed.</li>
            <li><strong>Kitchen next:</strong> degrease hob/backsplash; wipe cupboards; sink & plughole; run a hot dishwasher clean if present.</li>
            <li><strong>Floors:</strong> vacuum edges and skirting; flat-mop with lightly damp pad (no soaking laminate).</li>
            <li><strong>Damp control:</strong> open trickle vents, 10–15 min window crack, wipe condensation, moisture absorbers in wardrobes/under sinks.</li>
            <li><strong>Comfort boost:</strong> draft excluder on the worst door gap; felt pads on chairs; one entry hook for keys/bags.</li>
          </ol>
          <div className="mt-5">
            <a href="#toolkit" className="inline-flex items-center rounded-full bg-emerald-700 text-white font-semibold px-5 py-2.5 hover:bg-emerald-800 transition">
              Jump to mini toolkit
            </a>
          </div>
        </section>

        {/* Room by room */}
        <section id="rooms" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Room-by-room plan (fast methods)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Bathroom (30–45 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Descale taps/showerhead; buff chrome dry for shine.</li>
                <li>Toilet: cleaner under rim; wipe seat/hinges and flush handle.</li>
                <li>Shower screen: non-abrasive cleaner + squeegee.</li>
                <li>Extractor: clean grill; report failed fans.</li>
                <li>Sealant mould: tiny surface spots → cleaner; behind silicone/spreading → document & report.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Kitchen (45–60 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Degrease hob/controls; avoid scouring glass/steel.</li>
                <li>Sink & drain: limescale remover on taps; hair/food catcher installed.</li>
                <li>Fridge: wipe seal/shelves; baking soda cup for odours.</li>
                <li>Inside cupboards: vacuum crumbs; wipe neutral cleaner.</li>
                <li>Finish floors: barely damp mop on laminate.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Bedroom & living (30–45 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dust top-down: lights, shelves, skirting.</li>
                <li>Windows: glass cleaner or diluted vinegar; wipe frames/sills.</li>
                <li>Wardrobe: moisture absorber; 5–10 cm gap from external walls.</li>
                <li>Felt pads under furniture—cheap deposit insurance.</li>
                <li>Curtains: shake outside; wash if label allows.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Hallway & entry (15–20 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sturdy Command hook for coats/bags.</li>
                <li>Shoe tray or mat to trap grit.</li>
                <li>Draft excluder on door bottom; keep airflow gap if no trickle vent.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Damp */}
        <section id="damp" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Damp, mould & condensation (UK reality)</h2>
          <p className="text-sm mb-3">
            You can’t fix structural problems—but you can manage daily moisture, protect clothes, and document issues so they actually get addressed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Daily habits</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ventilate 10–15 min (cross-breeze after showers/cooking).</li>
                <li>Run extractors; leave bathroom door ajar post-shower.</li>
                <li>Wipe window condensation each morning.</li>
                <li>Moisture absorbers in wardrobes/under sinks.</li>
                <li>Even, low-medium heating to avoid cold corners.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Escalate when…</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Black mould spreading beyond small spots—document & notify landlord.</li>
                <li>Leaks, wet patches after rain, persistent musty smell—report.</li>
                <li>Broken/noisy extractor—request repair; it affects health and damp.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Use mould-specific cleaners only for minor surface spots and ventilate well. Wear gloves/mask if needed. Never sand or scrape painted mould—report instead.
          </p>
        </section>

        {/* Wall-safe mounting */}
        <section id="walls" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Wall-safe mounting</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Command 101</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clean with isopropyl alcohol; let dry fully.</li>
                <li>Match the correct <strong>weight rating</strong> (don’t mix sizes).</li>
                <li>Press 30–60 s; follow <strong>cure time</strong> before hanging.</li>
                <li>Removal: pull tab <em>straight down</em> slowly.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">If you must drill</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Get <strong>written permission</strong>; ask wall type.</li>
                <li>Use the right anchors; avoid wiring routes.</li>
                <li>Fill/paint neatly at move-out with the agreed paint code.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600">Deposit tip: keep packaging/receipts; note where strips/hooks are so removal is fast later.</p>
        </section>

        {/* Odours */}
        <section id="odours" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Odour & hygiene quick wins</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Fridge:</strong> wipe seal/shelves; open baking-soda cup for 24–48 h; then swap to a small closed container.</li>
            <li><strong>Drains:</strong> clean strainer; install hair catcher; flush with very hot water (don’t mix chemicals).</li>
            <li><strong>Carpets/rugs:</strong> bicarbonate of soda 30 min → vacuum slowly.</li>
            <li><strong>Bins:</strong> rinse, spray, dry; use liners and lid filters if smells return.</li>
          </ul>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Renter’s mini-toolkit (shoebox size)</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900">Basics</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>WD-40 (hinges/locks)</li>
                <li>Mini screwdriver set + Allen keys</li>
                <li>Adjustable spanner</li>
                <li>Measuring tape</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900">Protection</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Felt pads (chairs/sofa)</li>
                <li>Door draft excluder</li>
                <li>Moisture absorbers</li>
                <li>Rubber gloves + microfibres</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900">Power & safety</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Plug-in socket tester</li>
                <li>AA/AAA batteries</li>
                <li>Small torch</li>
                <li>Spare light bulbs (check fitting)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm">
            <p>
              <strong>Quick affiliate picks:</strong>{" "}
              <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=basic+tool+set+home&tag=resinaroamzn-21">starter toolkit</a>{" "}
              · <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=command+strips&tag=resinaroamzn-21">Command strips/hooks</a>{" "}
              · <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=wardrobe+moisture+absorber&tag=resinaroamzn-21">moisture absorbers</a>{" "}
              · <a className="underline text-emerald-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21">draft excluder</a>.
            </p>
          </div>
        </section>

        {/* Move-out strategy */}
        <section id="moveout" className="bg-white border rounded-3xl p-6 md:p-9 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">Move-out strategy (start now)</h2>
          <p className="text-sm mb-3">
            The best way to keep your deposit is to plan from day one. Create a “before/after” folder now; add receipts
            for strips, pads and any landlord-approved paint. Future-you will thank you.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">What to save</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Move-in photos by room; add updates when you report issues.</li>
                <li>Receipts/packaging for deposit-safe products (proof).</li>
                <li>Landlord approvals and comms in one email thread.</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-900 mb-1">Two-week countdown</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remove strips/hooks carefully (pull straight down).</li>
                <li>Fill tiny pinholes if drilled with permission; use agreed paint.</li>
                <li>Deep-clean kitchen/bathroom; descale taps; mop corners/skirting.</li>
                <li>Final “after” photos mirroring move-in angles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mt-2">
          <h2 className="text-xl font-bold text-emerald-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-emerald-900" href={p(locale, "/community/warmth-energy-savers-uk")}>
                Stay Warm, Spend Less: Energy-Saving Comfort Picks
              </Link>
            </li>
            <li>
              <Link className="underline text-emerald-900" href={p(locale, "/community/power-adapters-uk-italy")}>
                Plugs, Adapters &amp; Power: Italy ↔ UK Without the Sparks
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10 bg-white border rounded-3xl p-6 md:p-9 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Frequently asked questions</h2>

          <details className="mb-3 bg-neutral-50 rounded-xl p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Which cleaners are safest for painted walls?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Lightly damp microfibre + neutral cleaner (diluted). Test behind furniture first. Magic erasers can burnish matte paint—use sparingly.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-xl p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">How do I clean grout without damage?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Soft brush + non-abrasive bathroom cleaner. Rinse and dry. For stubborn areas, repeat gently over days rather than one harsh scrub.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-xl p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Extractor fan is weak—what now?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Clean grill; tissue test for draw. If still poor or noisy, report—good ventilation matters for damp and health.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-xl p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Can I steam-clean laminate floors?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Avoid steam—it can swell joints. Use a flat mop with a slightly damp pad and mild cleaner.
            </div>
          </details>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Some links may earn us a small commission at no extra cost to you. It helps keep guides like this free and updated for the community.
        </p>
      </div>

      {/* ——— JSON-LD ——— */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
