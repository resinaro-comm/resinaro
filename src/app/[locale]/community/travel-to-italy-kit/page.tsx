// src/app/community/travel-to-italy-kit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import Image from "next/image";

/**
 * Quick Trip to Italy: Light Travel Kit from the UK
 * - Full-bleed hero with subtle gradient for headline legibility
 * - Human-first copy, airline sizes table, seasonal packing grids, power guide
 * - Clean newsletter / checklist CTA (no "enable env" text), server component
 * - JSON-LD (Article + FAQ + HowTo) for rich snippets
 */

export const metadata: Metadata = {
  title: "Quick Trip to Italy: Light Travel Kit from the UK",
  description:
    "Carry-on only, renter-proof packing: exact EU cabin sizes, what to pack (and skip), UK→EU power, documents, security, gifts you can bring, and a 10-minute checklist.",
  alternates: { canonical: "/community/travel-to-italy-kit" },
  openGraph: {
    title: "Quick Trip to Italy: Light Travel Kit from the UK",
    description:
      "Carry-on only. Airline sizes that actually fit, power adapters that actually work, and a 10-minute pre-flight checklist.",
    type: "article",
  },
};

const PUBLISHED = "2025-10-11";
const UPDATED = "2025-10-19";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // ===== JSON-LD =====
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is this guide on Resinaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Because many community members fly back and forth for consular appointments, renewals, and family visits. A smooth carry-on setup saves money, avoids airport stress, and keeps documents safe—exactly the practical help Resinaro exists to provide.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need anything special for power in Italy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Italy uses 220–240V with Type-C/L sockets. Bring a grounded UK→EU adapter and avoid low-quality travel adapters. Keep high-draw devices (hair dryers) to UK plugs unless the adapter is rated for them.",
        },
      },
      {
        "@type": "Question",
        name: "Carry-on only—what liquids can I take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Stick to travel sizes (≤100ml) in a clear resealable bag. Put meds in original packaging with your name; keep a small spare supply in case of delays.",
        },
      },
      {
        "@type": "Question",
        name: "What about documents for consular visits?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use a flat A4 wallet for originals + a second wallet for photocopies and passport photos. Keep digital scans on your phone and a cloud backup. Bring proof of AIRE when relevant.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Pack for a weekend Italy trip with only a personal-item backpack",
    totalTime: "PT10M",
    step: [
      { "@type": "HowToStep", name: "Documents", text: "Passport/ID, booking QR codes, travel insurance, payment cards, emergency contacts, consular address." },
      { "@type": "HowToStep", name: "Tech & power", text: "Phone + cable, compact charger, UK→EU adapter, optional power bank (in cabin only)." },
      { "@type": "HowToStep", name: "Clothes", text: "2 tops, 1 bottom, underwear x3, socks x3, light layer; add scarf/hat in winter." },
      { "@type": "HowToStep", name: "Wash kit", text: "≤100ml toiletries in a clear bag; meds in original packaging." },
      { "@type": "HowToStep", name: "Extras", text: "Packing cubes, foldable tote for the return, small gifts within customs rules." },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quick Trip to Italy: Light Travel Kit from the UK",
    description:
      "Carry-on only, renter-proof packing: exact EU cabin sizes, what to pack (and skip), UK→EU power, documents, security, gifts you can bring, and a 10-minute checklist.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://resinaro.co.uk/community/travel-to-italy-kit" },
    inLanguage: "en-GB",
  };

  return (
    <main className="bg-[#F4F6F8] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* ===== HERO (full-bleed, travel vibe) ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/quicktrip-hero.jpg" // swap to a real airport/hand-luggage hero
            alt="Carry-on backpack at a UK airport gate, evening light"
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
              TRAVEL • carry-on only
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              Quick Trip to Italy
              <span className="block text-emerald-200">The Light Travel Kit from the UK</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              One bag. No drama at the gate. Power that works, documents that pass, and a checklist that saves your morning.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">Get the 10-minute pre-flight checklist (PDF) + Italy-trip tips.</p>
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

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>Published: 11 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>Updated: 19 Oct 2025</span>
            <span className="opacity-60">•</span>
            <span>~8 min read</span>
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
        {/* Reason why (human angle) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: "Gate-proof sizes", p: "Pick one bag that fits the strictest airline and stop worrying." },
            { h: "Docs, calm brain", p: "A4 wallet for originals + copies; digital backups labelled clearly." },
            { h: "Power that works", p: "Grounded UK→EU adapter; skip cheap bricks that fail in hotels." },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-emerald-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>

        {/* Why this matters */}
        <section className="mt-8 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            Flying back for a quick appointment or a weekend with family shouldn’t feel like a logistics exam.
            This kit removes the guesswork: airline sizes that actually pass at the gate, a power setup that
            doesn’t spark, and a documents flow that keeps stress out of your day.
          </p>
          <p className="text-gray-700">
            Below: a carry-on strategy that works across UK↔Italy routes, the compact kit, seasonal packing, power,
            gifts you can bring, and a 10-minute checklist. Realistic budget links included.
          </p>
        </section>

        {/* Airline sizes table */}
        <section id="sizes" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Airline “personal item” sizes that actually fit</h2>
          <p className="mt-1 text-sm text-gray-700">
            Under-seat **personal item** target that fits most strict carriers: <strong>40×20×25 cm</strong>.
            Upgrade to “priority” on some airlines to add a second larger cabin bag.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>Airline (typical)</th>
                  <th>Personal item (cm)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Ryanair / Wizz</td>
                  <td>40 × 20 × 25</td>
                  <td>Strict sizers at gate; priority adds 55 × 40 × 20</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>EasyJet</td>
                  <td>45 × 36 × 20</td>
                  <td>Slightly larger personal item; “Up Front” adds cabin bag</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>BA / legacy</td>
                  <td>40–45 × 30–36 × 20</td>
                  <td>Cabin allowance varies by fare; check your ticket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            Buy once:{" "}
            <a
              href="https://www.amazon.co.uk/s?k=cabin+bag+40x20x25&tag=resinaroamzn-21"
              className="underline text-emerald-800"
              rel="nofollow sponsored"
            >
              EU-sized 40×20×25 cm backpack
            </a>{" "}
            +{" "}
            <a
              href="https://www.amazon.co.uk/s?k=packing+cubes&tag=resinaroamzn-21"
              className="underline text-emerald-800"
              rel="nofollow sponsored"
            >
              packing cubes
            </a>{" "}
            + slim{" "}
            <a
              href="https://www.amazon.co.uk/s?k=packable+tote&tag=resinaroamzn-21"
              className="underline text-emerald-800"
              rel="nofollow sponsored"
            >
              foldable tote
            </a>
            .
          </p>
        </section>

        {/* Compact kit */}
        <section id="kit" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">The compact travel kit (carry-on only)</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-emerald-900">Space & order</h3>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>
                  Packing cubes —{" "}
                  <a href="https://www.amazon.co.uk/s?k=packing+cubes&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-emerald-800">
                    sets
                  </a>
                </li>
                <li>
                  Foldable tote —{" "}
                  <a href="https://www.amazon.co.uk/s?k=packable+tote&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-emerald-800">
                    lightweight
                  </a>
                </li>
                <li>
                  Digital luggage scale —{" "}
                  <a href="https://www.amazon.co.uk/s?k=digital+luggage+scale&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-emerald-800">
                    avoid fees
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-emerald-900">Docs & tech</h3>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>
                  RFID passport wallet + A4 folder —{" "}
                  <a href="https://www.amazon.co.uk/s?k=rfid+passport+wallet&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-emerald-800">
                    wallets
                  </a>
                </li>
                <li>
                  Grounded UK→EU adapter —{" "}
                  <a href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter+grounded&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-emerald-800">
                    adapters
                  </a>
                </li>
                <li>Power bank (cabin only), short cable, headphones.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="docs" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Documents & consular folder (zero panic at the desk)</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
            <li>Passport/ID + printed boarding pass (apps can fail at gates).</li>
            <li>A4 wallet: appointment confirmation, AIRE proof if needed, photocopies, passport photos, payment proof.</li>
            <li>Cloud + phone scans; filename style <em>surname_docname_YYYY.pdf</em>.</li>
            <li>Emergency card: contact, insurer, GHIC/EHIC, card blocks, consulate address.</li>
          </ul>
          <p className="mt-3 text-sm">
            Need help with documents?{" "}
            <Link className="text-emerald-900 underline underline-offset-4" href={p(locale, "/services")}>
              View Resinaro Services →
            </Link>
          </p>
        </section>

        {/* Security & liquids */}
        <section id="security" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Security & liquids: move fast at the checkpoint</h2>
          <div className="mt-2 rounded-xl border border-gray-200 p-5 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Toiletries ≤100 ml in a clear bag at the top of your backpack.</li>
              <li>Meds in original packaging + spare day’s dose in a second pocket.</li>
              <li>Laptop/tablet easy to remove unless your airport signs say otherwise.</li>
              <li>Power bank in cabin only; never in checked baggage.</li>
            </ul>
          </div>
        </section>

        {/* Power in Italy */}
        <section id="power" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Power in Italy: UK→EU done right</h2>
          <p className="mt-1 text-sm text-gray-700">
            Italy uses 220–240 V and Type-C/L sockets. For laptops/phones, a **grounded** adapter is safest.
          </p>
          <p className="mt-2 text-sm">
            Buy once:{" "}
            <a
              href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter+grounded&tag=resinaroamzn-21"
              className="underline text-emerald-800"
              rel="nofollow sponsored"
            >
              grounded UK→EU adapter
            </a>
            .
          </p>
          <p className="mt-2 text-xs text-gray-600">
            High-draw items (hair dryers/straighteners) can exceed cheap adapters—use local devices or ensure correct rating.
          </p>
        </section>

        {/* Seasonal clothes */}
        <section id="clothes" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">What to wear: quick seasonal lists</h2>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-emerald-900">Spring/Autumn</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Light jacket, scarf, 2 tops, 1 bottom</li>
                <li>Comfy shoes for cobbles</li>
                <li>Compact umbrella</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-emerald-900">Summer</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Breathable shirts, 1 shorts/skirt</li>
                <li>Hat/sunglasses, evening light layer</li>
                <li>Shoulders covered for churches</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-emerald-900">Winter</h3>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Warm layer + compact puffer</li>
                <li>Gloves, beanie, thermal socks</li>
                <li>Weatherproof shoes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gifts & food */}
        <section id="gifts" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Gifts & what you can bring back</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
            <li>Dry goods (biscuits, coffee, pasta) are easiest for hand luggage.</li>
            <li>Liquids over 100 ml must be checked—or buy after security.</li>
            <li>Wine/olive oil: buy airside to skip limits; protect glass on return.</li>
          </ul>
          <p className="mt-2 text-xs text-gray-600">Always follow airline, airport, and customs rules for food/liquids.</p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">10-minute pre-flight checklist</h2>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6">
            <li>Passport/ID + boarding pass (paper + app). Wallet + backup card.</li>
            <li>RFID wallet + A4 folder (appointments, AIRE proof, photos, copies).</li>
            <li>Phone, cable, grounded UK→EU adapter, headphones, power bank.</li>
            <li>Liquids bag on top; meds in name-labelled packs.</li>
            <li>Weigh bag; confirm size (40×20×25 cm personal item).</li>
            <li>Foldable tote inside the backpack for the journey home.</li>
          </ul>

          {/* Mini CTA */}
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-800">
                Want the checklist as a printable PDF?
              </p>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="flex w-full max-w-md gap-2 sm:w-auto"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-10 flex-1 rounded-xl border border-emerald-200 bg-white px-3 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="submit"
                  className="h-10 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Email me the PDF
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Related Resinaro guides</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700" href={p(locale, "/community/power-adapters-uk-italy")}>
                  Plugs, Adapters & Power: Italy ↔ UK Without the Sparks
                </Link>
              </li>
              <li>
                <Link className="text-emerald-900 underline underline-offset-4 hover:text-emerald-700" href={p(locale, "/services")}>
                  View Resinaro Services →
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Some links may earn a small commission at no extra cost to you. It helps keep community guides free.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Question about your airline or bag?</h3>
            <p className="mt-1 text-sm text-gray-700">Tell us your route and fare type—we’ll sanity-check your bag choice.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              >
                Ask a question →
              </Link>
              <Link
                href="/directory"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Find travel shops →
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
