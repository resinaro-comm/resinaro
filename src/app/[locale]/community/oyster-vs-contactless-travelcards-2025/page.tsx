// app/community/oyster-vs-contactless-travelcards-2025/page.tsx
import Link from "next/link";
import Image from "next/image";
import { p, type Locale } from "@/lib/localePath";

/**
 * Oyster vs Contactless vs Travelcards (2025): Caps, Zones & “Which One Should I Use?”
 *
 * Audience:
 *   - Italians and newcomers in London with average English who want the cheapest, simplest way to pay for public transport.
 *   - Students, au pairs, hospitality workers with irregular shifts, commuters, visitors, families.
 *
 * Tone & style:
 *   - Premium but friendly. Short sentences. Easy English with occasional Italian notes.
 *   - Same layout conventions as other Resinaro community posts: hero, TOC, crisp sections, tables, scripts, JSON-LD.
 *
 * What makes this definitive:
 *   - Decision tree + “personas” that mirror real use (Mon–Fri commuter, split-zone worker, weekend-only explorer, night bus user).
 *   - Clear caps tables (daily & weekly), zone examples, and pitfalls.
 *   - Step-by-step “how to” for Oyster, contactless, and Travelcards.
 *   - Refund/chargeback tips, railcard stacking notes (where relevant), receipts for expense claims.
 *   - Copy-paste messages for bank declines, card freezes, and charge disputes.
 *   - Accessibility: Italian phrase cards for common staff interactions.
 *
 * SEO:
 *   - High intent keywords: Oyster vs contactless, travelcard price 2025, daily cap London, weekly cap, which zones, Hopper fare.
 *   - Schema: FAQ + HowTo (choose a payment method; set up contactless; buy a Travelcard).
 */

export const metadata = {
  title:
    "Oyster vs Contactless vs Travelcards (2025): Caps, Zones & “Which One Should I Use?”",
  description:
    "The definitive 2025 guide for London transport: Oyster vs contactless vs Travelcards. Daily/weekly caps by zones, Hopper fare, best option by use-case, and step-by-step setup. Made for Italians & newcomers (Easy English).",
  alternates: { canonical: "/community/oyster-vs-contactless-travelcards-2025" },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // =========================================================
  // JSON-LD: FAQ
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Oyster or contactless cheaper in London?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Prices are usually the same for pay-as-you-go. Both get daily and weekly caps. Choose contactless for simplicity with your bank card/phone, or Oyster if you need to load cash or kids/visitor cards.",
        },
      },
      {
        "@type": "Question",
        name: "What is the daily cap and the weekly cap?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A cap is the maximum you’ll pay in a day or week for pay-as-you-go travel within chosen zones. After you reach the cap, additional journeys in that period are free.",
        },
      },
      {
        "@type": "Question",
        name: "When is a Travelcard better than pay-as-you-go?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you travel many times every day across the same zones (like a Mon–Fri commuter), a 7-Day or Monthly Travelcard can be best. For mixed or light use, pay-as-you-go with caps is usually cheaper.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Hopper fare?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Hopper fare lets you take unlimited bus and tram journeys within a set time (starting from your first tap) for a single fare. It works with Oyster and contactless.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Apple Pay/Google Pay instead of Oyster?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Your phone or watch acts like a contactless card. Tap in and out with the same device each time to get caps. Make sure your bank allows London transit charges.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to touch out on buses?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Bus and tram journeys are flat fare—tap in only. On Tube/Overground/DLR/Elizabeth line, always tap in and out.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (choose payment; set up contactless; buy a Travelcard)
  // =========================================================
  const howToJsonLdChoose = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Choose the best London payment method in 3 steps",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        name: "Estimate your week",
        text:
          "Count how many days you commute and which zones you cross. Note weekend trips.",
      },
      {
        "@type": "HowToStep",
        name: "Check caps",
        text:
          "Compare daily/weekly caps for your zones. If your trips vary, pay-as-you-go with caps is flexible.",
      },
      {
        "@type": "HowToStep",
        name: "Decide",
        text:
          "Mon–Fri heavy use in fixed zones → Travelcard; Flexible or light use → contactless/Oyster with caps.",
      },
    ],
  };

  const howToJsonLdContactless = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up contactless for London transport",
    totalTime: "PT3M",
    step: [
      { "@type": "HowToStep", name: "Check your bank", text: "Ensure your card supports contactless and international transactions." },
      { "@type": "HowToStep", name: "Add to phone/watch", text: "Optional: add to Apple Pay/Google Pay for faster taps." },
      { "@type": "HowToStep", name: "Use same card each time", text: "Tap in and out with the same card/device to get capped fares." },
    ],
  };

  const howToJsonLdTravelcard = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Buy and use a Travelcard",
    totalTime: "PT6M",
    step: [
      { "@type": "HowToStep", name: "Pick zones", text: "Choose the zones you need (e.g., 1–2 or 2–3)." },
      { "@type": "HowToStep", name: "Choose duration", text: "7-Day, Monthly, or Annual." },
      { "@type": "HowToStep", name: "Buy on Oyster", text: "Load the Travelcard onto an Oyster or buy a paper Travelcard at stations." },
      { "@type": "HowToStep", name: "Carry photo if needed", text: "Some discounted/travel passes require a photocard; follow the station’s instructions." },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/oyster-contactless-hero.png"
            alt="Oyster vs Contactless vs Travelcards — which one to use in 2025"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              TRANSPORT
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Oyster vs Contactless vs Travelcards (2025): Caps, Zones & “Which One Should I Use?”
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Why this guide (and how it saves you money)</h2>
          <p className="mb-3">
            London fares are confusing when you’re new. This page explains—in Easy English—how Oyster, contactless, and
            Travelcards actually charge you, how caps protect you from overspending, and how to pick the cheapest option for your life.
            We also include scripts if your bank declines a tap, plus little things Italians ask us every week.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Daily & weekly caps with zone examples (so you can compare fast).</li>
            <li>Pay-as-you-go vs 7-Day/Monthly Travelcards, explained without jargon.</li>
            <li>Decision tree and real persona scenarios you can copy.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#concepts">1) Quick concepts: caps, zones, peak, Hopper</a></li>
            <li><a className="underline text-green-900" href="#compare">2) Compare: Oyster vs Contactless vs Travelcards</a></li>
            <li><a className="underline text-green-900" href="#caps-table">3) Daily & weekly caps by zone examples</a></li>
            <li><a className="underline text-green-900" href="#decision">4) Decision tree: which one should I use?</a></li>
            <li><a className="underline text-green-900" href="#personas">5) Real-life examples (personas)</a></li>
            <li><a className="underline text-green-900" href="#setup">6) Setup: contactless, Oyster, Travelcards (step-by-step)</a></li>
            <li><a className="underline text-green-900" href="#bank-issues">7) Bank declines & card problems (scripts)</a></li>
            <li><a className="underline text-green-900" href="#refunds">8) Refunds, incomplete journeys, receipts</a></li>
            <li><a className="underline text-green-900" href="#visitors">9) Visitors, kids, discounts & railcards</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ (onsite)</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) CONCEPTS
        ========================================================= */}
        <section id="concepts" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">1) Quick concepts: caps, zones, peak/off-peak, Hopper</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Caps (daily & weekly)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Daily cap:</strong> maximum you pay in one day for pay-as-you-go within your zones.</li>
                <li><strong>Weekly cap:</strong> from Monday to Sunday using the same contactless card/device.</li>
                <li>Oyster pay-as-you-go gets daily caps; weekly caps apply differently—see tables below.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Zones & peak</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>London is divided into zones (1–9). Most people use 1–2 or 2–3.</li>
                <li>Peak times cost more on Tube/rail; off-peak is cheaper.</li>
                <li>Caps account for peak/off-peak automatically—keep tapping the same card.</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm mt-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Hopper fare (bus & tram)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unlimited bus/tram within a set time from first tap for one fare.</li>
                <li>Works on Oyster and contactless—great for short hops.</li>
                <li>No need to tap out on buses/trams.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Touch in & out</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tube/Overground/DLR/Elizabeth line: tap in and out.</li>
                <li>Tap with the <em>same card/device</em> to avoid overcharge.</li>
                <li>Keep a card just for travel if your wallet has many contactless cards (avoid “card clash”).</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            All prices are examples—always follow the latest TfL info at stations or official websites. Concepts stay the same; caps change over time.
          </p>
        </section>

        {/* =========================================================
            2) COMPARE TABLE
        ========================================================= */}
        <section id="compare" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">2) Compare: Oyster vs Contactless vs Travelcards</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Feature</th>
                  <th className="text-left p-3 border-b">Contactless (bank card/phone)</th>
                  <th className="text-left p-3 border-b">Oyster (pay-as-you-go)</th>
                  <th className="text-left p-3 border-b">Travelcards (7-Day/Monthly/Annual)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    f: "Price per journey",
                    c: "Same as Oyster pay-as-you-go for most routes",
                    o: "Same as contactless pay-as-you-go",
                    t: "Prepaid: unlimited within zones for duration",
                  },
                  {
                    f: "Daily cap",
                    c: "Yes, auto (same card/device)",
                    o: "Yes",
                    t: "N/A (unlimited within zones)",
                  },
                  {
                    f: "Weekly cap",
                    c: "Yes (Mon–Sun if you use the same card/device all week)",
                    o: "Varies by product; check station if you rely on weekly cap",
                    t: "N/A (unlimited within zones)",
                  },
                  {
                    f: "Setup",
                    c: "None—just tap; add to phone/watch if you like",
                    o: "Buy card (£ deposit) and top up",
                    t: "Load on Oyster or buy paper Travelcard",
                  },
                  {
                    f: "Best for",
                    c: "Most people; flexible use; tourists with compatible bank cards",
                    o: "Cash top-ups, kids/discount products, visitors without UK cards",
                    t: "Heavy, predictable travel across the same zones (commuters)",
                  },
                  {
                    f: "Receipts/records",
                    c: "View in your bank & TfL account (register the card)",
                    o: "View in TfL Oyster account or at machines",
                    t: "One fixed price; show card/photocard when asked",
                  },
                  {
                    f: "Risks",
                    c: "Bank decline → gate won’t open; keep backup",
                    o: "Must top up before travel; keep card safe",
                    t: "Overpay if you travel less than expected",
                  },
                ].map((row) => (
                  <tr className="border-b" key={row.f}>
                    <td className="p-3 font-semibold">{row.f}</td>
                    <td className="p-3">{row.c}</td>
                    <td className="p-3">{row.o}</td>
                    <td className="p-3">{row.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Contactless weekly caps reset on Monday. If you travel Thu–Sun, your week may not reach the cap—compare with a 7-Day Travelcard if you need Mon–Sun unlimited.
          </p>
        </section>

        {/* =========================================================
            3) CAPS TABLES (EXAMPLES)
        ========================================================= */}
        <section id="caps-table" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">3) Daily & weekly caps by zone (example values)</h2>
          <p className="mb-3">
            These example caps help you compare. Your exact prices may change during the year—always verify on the day you travel.
            The logic stays: more zones → higher caps. If you combine Tube + bus + Overground within the same zones, you still get capped.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Zones</th>
                  <th className="text-left p-3 border-b">Daily cap (example)</th>
                  <th className="text-left p-3 border-b">Weekly cap (example)</th>
                  <th className="text-left p-3 border-b">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    z: "Zones 1–2",
                    d: "£X.XX / day (example)",
                    w: "£XX.XX / week (Mon–Sun)",
                    b: "Central living/working",
                  },
                  {
                    z: "Zones 1–3",
                    d: "£X.XX / day",
                    w: "£XX.XX / week",
                    b: "Central + near suburbs",
                  },
                  {
                    z: "Zones 1–4",
                    d: "£X.XX / day",
                    w: "£XX.XX / week",
                    b: "Longer commutes",
                  },
                  {
                    z: "Bus & tram only",
                    d: "£X.XX / day",
                    w: "£XX.XX / week",
                    b: "If you rarely use Tube; Hopper helps",
                  },
                ].map((row) => (
                  <tr className="border-b" key={row.z}>
                    <td className="p-3 font-semibold">{row.z}</td>
                    <td className="p-3">{row.d}</td>
                    <td className="p-3">{row.w}</td>
                    <td className="p-3">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            If exact numbers matter for your budget, check official caps for your zones. We keep this guide evergreen by focusing on how to choose.
          </p>
        </section>

        {/* =========================================================
            4) DECISION TREE
        ========================================================= */}
        <section id="decision" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">4) Decision tree: which one should I use?</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Do you commute Mon–Fri across the same zones?</strong> Yes → Compare 7-Day Travelcard cost to the weekly cap. If Travelcard ≤ your weekly cap and you
                always travel those days, Travelcard can be good. No → go to 2.
              </li>
              <li>
                <strong>Is your week unpredictable (shifts, remote days, weekends)?</strong> Use contactless or Oyster pay-as-you-go and let the daily/weekly caps protect you.
              </li>
              <li>
                <strong>Do you mostly use buses?</strong> Pay-as-you-go is great (Hopper). Travelcard is overkill unless you ride many buses every day.
              </li>
              <li>
                <strong>Do you need receipts in your bank statement?</strong> Contactless is easiest. You can still download Oyster statements from your TfL account.
              </li>
              <li>
                <strong>Do you want to top up with cash?</strong> Oyster card is better—top up at machines or shops.
              </li>
            </ol>
          </div>
        </section>

        {/* =========================================================
            5) PERSONAS
        ========================================================= */}
        <section id="personas" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">5) Real-life examples (copy one)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">A) Hospitality shifts (zones 2–1)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Irregular days; some late nights; sometimes bus home.</li>
                <li><strong>Best:</strong> Contactless or Oyster pay-as-you-go for caps + Hopper on night buses.</li>
                <li>Tip: keep the same card for the whole week to benefit from weekly cap (contactless).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">B) Office Mon–Fri (zones 3–1)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Predictable weekday commute; some weekend trips.</li>
                <li><strong>Best:</strong> Compare 7-Day Travelcard (3–1) vs weekly cap. If you rarely skip days, Travelcard may win.</li>
                <li>Tip: if you WFH 1–2 days/week, caps may be cheaper than Travelcard.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">C) Weekend explorer (mostly Zone 1–2)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Few journeys during the week; many at weekends.</li>
                <li><strong>Best:</strong> Contactless/Oyster pay-as-you-go with daily caps. No need for Travelcard.</li>
                <li>Tip: plan two or three big days; the cap protects you from surprises.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">D) Bus-only student</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mostly buses and trams to campus or work.</li>
                <li><strong>Best:</strong> Pay-as-you-go; Hopper helps with changes. Consider student discounts if eligible.</li>
                <li>Tip: register your Oyster/contactless in a TfL account to review history.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) SETUP: CONTACTLESS, OYSTER, TRAVELCARDS
        ========================================================= */}
        <section id="setup" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">6) Setup (step-by-step)</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {/* Contactless */}
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Contactless</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Check your bank allows contactless & overseas charges.</li>
                <li>Add card to phone/watch (optional but fast).</li>
                <li>Tap in and out with the same card/device every time.</li>
                <li>Register the card in a TfL account to see journeys.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-2">
                If your bank declines, use our scripts below. Keep a backup card or Oyster.
              </p>
            </div>

            {/* Oyster */}
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Oyster pay-as-you-go</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Buy an Oyster at a station or shop (deposit may apply).</li>
                <li>Top up with cash or card at machines or Ticket Stops.</li>
                <li>Tap in/out like contactless; you get caps.</li>
                <li>Register the card online to protect balance & view history.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-2">
                Good for kids/discounts/cash budgets. Keep the card safe; note the serial number.
              </p>
            </div>

            {/* Travelcards */}
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-1">Travelcards (7-Day/Monthly/Annual)</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Pick your zones (e.g., 2–3) and duration.</li>
                <li>Load onto Oyster or buy a paper Travelcard at stations.</li>
                <li>Use freely within zones for the period; add out-of-zone tickets when needed.</li>
                <li>Keep receipt/photocard if required for discounts.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-2">
                Choose Travelcards only if you travel a lot every day. Otherwise, caps are more flexible.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            7) BANK ISSUES & CARD PROBLEMS
        ========================================================= */}
        <section id="bank-issues" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">7) Bank declines & card problems (copy-paste scripts)</h2>
          <p className="mb-3">
            Sometimes your bank blocks a small transit charge, especially on a new card or foreign card. Use these messages to resolve fast.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">A) Bank support chat (declined at gate)</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, my card was declined on London Transport (contactless). 
Could you please allow small offline transit transactions for TfL? 
Card ending: <1234>. I am the cardholder. Thank you!`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                Some banks call this “offline transit” or “MCC 4111/4112 transport”. Ask them to allow it.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">B) If your phone wallet failed</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hi, my Apple/Google Pay tap failed at TfL. 
I’ve re-added the card. Please confirm my card is enabled for transit and contactless offline transactions.`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                Delete/reauthorise the card in your wallet; then try again. Keep a backup card/Oyster in case of issues.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">C) Expense claim email (for your employer)</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Transport receipts — <Your Name>

Hello,

Please find attached my TfL journey statement for the week and my bank statement line items.
I used contactless; fares are capped automatically. 

Regards,
<Your Name>`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                Register your card in a TfL account to download a journey PDF for HR/expenses.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">D) Dispute message (wrong charge/incomplete)</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello TfL,

I believe I was overcharged on <date>. I entered at <station A> and exited at <station B>, but the system shows an incomplete journey.
Please review and adjust. My card/Oyster number: <xxxx>. Thank you.`}
              </pre>
              <p className="text-xs text-gray-600 mt-2">
                You can fix incomplete journeys on machines or online. Keep station names and times handy.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            8) REFUNDS, INCOMPLETE, RECEIPTS
        ========================================================= */}
        <section id="refunds" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">8) Refunds, incomplete journeys, receipts</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Incomplete journeys</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Happens when you forget to tap out or gates were open.</li>
                  <li>Fix it on the TfL website or at a station machine (follow prompts).</li>
                  <li>Provide entry/exit stations and approximate time.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Refunds</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Valid for certain delays or overcharges; follow official guidance.</li>
                  <li>Refunds go back to the same card or Oyster balance.</li>
                  <li>Keep screenshots of your journey history for clarity.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              For expense claims, register your card in a TfL account to download statements. If HR requests VAT breakdown, clarify that TfL pay-as-you-go can show journey lines, not classic VAT receipts.
            </p>
          </div>
        </section>

        {/* =========================================================
            9) VISITORS, KIDS, DISCOUNTS
        ========================================================= */}
        <section id="visitors" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">9) Visitors, kids, discounts & railcards</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Visitors</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contactless is simplest if their bank allows it.</li>
                <li>Otherwise buy an Oyster and top up at machines.</li>
                <li>For short stays, avoid Travelcards unless you’ll travel heavily every day.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Kids & young people</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Special Oyster products offer discounts. Bring proof of age if requested.</li>
                <li>Children under a certain age may travel free with a paying adult—check signs.</li>
                <li>Set up the right card before busy days out.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Railcards (National Rail)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Some railcards can be linked to Oyster for discounts on off-peak fares.</li>
                <li>Contactless does not usually “know” about railcards for Tube—check specific rules.</li>
                <li>If you rely on railcard savings, Oyster may be better for you.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Always confirm eligibility and bring any documents staff might ask for (passport, student card, proof of age).
          </p>
        </section>

        {/* =========================================================
            FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">FAQ (onsite)</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Are caps different on Oyster and contactless?
              </summary>
              <p className="mt-2">
                Daily caps work on both. Contactless has a straightforward Monday–Sunday weekly cap when you use the same card/device all week.
                Oyster products vary—ask staff if you rely on weekly caps.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                If my bank card is declined, will I get a penalty?
              </summary>
              <p className="mt-2">
                Gates won’t open at entry if the card is declined. If decline happens at exit, you may see an incomplete journey.
                Fix it online or at machines; contact your bank with our script to avoid repeats.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I switch between Oyster and contactless during the week?
              </summary>
              <p className="mt-2">
                Yes, but weekly caps only apply to the card you used. If you switch mid-week, you might miss the weekly cap. Pick one card per week.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Is a paper Travelcard worth it for tourists?
              </summary>
              <p className="mt-2">
                It can be if you travel heavily every day across specific zones. For flexible tourism, contactless/Oyster pay-as-you-go is often cheaper due to caps.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            RELATED GUIDES
        ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/uk-renting-for-italians-2025")}>
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/proof-of-address-without-bills-2025")}>
                Proof of Address Without Bills (2025) — 12 Accepted Docs + Templates
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/open-uk-bank-account-no-credit-italians-2025")}>
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICE
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want a personal fare plan? We’ll do the math for your zones & week.
          </h2>
          <p className="text-sm mb-4">
            Send your home/office zones and typical days. We’ll pick the best option (caps vs Travelcard), set up your card, and send a one-page plan you can print.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/london-fare-optimizer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              London Fare Optimizer (+£15)
            </Link>
            <Link
              href="/community/proof-of-address-without-bills-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Next: Build Proof of Address
            </Link>
          </div>
        </section>

        {/* =========================================================
            DISCLOSURE
        ========================================================= */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This guide is general information, not official fare policy. Prices and caps change. Always follow station signage and official websites for live fares and rules.
        </p>

        {/* =========================================================
            APPENDICES — PRACTICAL VALUE + SEO DEPTH
        ========================================================= */}

        {/* Appendix A: Quick Italian phrase card */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix A — Italian ⇄ Easy English phrase card</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Ask staff for help</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Scusi, quale carta è meglio per me? Lavoro 4 giorni a settimana in zona 1–2."

Easy English:
"Hi, which card is best for me? I work 4 days a week in zones 1–2."`}
              </pre>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Explain a decline</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Italiano:
"Mi ha rifiutato il pagamento. Provo con un'altra carta."

Easy English:
"My payment was declined. I'll try another card."`}
              </pre>
            </div>
          </div>
        </section>

        {/* Appendix B: Advanced caps notes (zones mixing) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix B — Mixing zones & routes (advanced notes)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>If you travel into higher zones occasionally, caps adjust to the highest zone you reached.</li>
            <li>Out-of-station interchanges: follow signs—sometimes you must tap a pink reader to signal a route.</li>
            <li>Elizabeth line counts as rail/Tube for caps. Always tap in/out correctly.</li>
          </ul>
        </section>

        {/* Appendix C: Avoid card clash (wallet pro-tip) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix C — Avoid “card clash”</h2>
          <p className="text-sm mb-3">
            If your wallet has multiple contactless cards, the gate might read the wrong one. Keep the card you want to use
            in a separate pocket or use your phone/watch for consistent taps.
          </p>
        </section>

        {/* Appendix D: Receipts & statements for expenses */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix D — Receipts & statements for expense claims</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Register your card (Oyster or contactless) in a TfL account.</li>
            <li>Download a CSV/PDF of journeys for the date range.</li>
            <li>Attach your bank statement line items if HR wants matching amounts.</li>
          </ol>
          <p className="text-xs text-gray-600 mt-2">
            For privacy, redact unrelated transactions before you share the statement.
          </p>
        </section>

        {/* Appendix E: If you change bank or phone mid-week */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix E — Changing card/phone in the middle of the week</h2>
          <p className="text-sm mb-3">
            Weekly caps rely on the same card or device. If you switch, the cap resets. Finish the week on one card/device when possible.
          </p>
        </section>

        {/* Appendix F: Travelcards with occasional out-of-zone trips */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix F — Travelcard + out-of-zone add-ons</h2>
          <p className="text-sm mb-3">
            If you hold a 7-Day/Monthly Travelcard for zones 1–2 but occasionally go to zone 3+, buy an extension ticket for that day.
            Staff can help at stations. Keep the Travelcard for your base commute.
          </p>
        </section>

        {/* Appendix G: Accessibility & gates (practical) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix G — Accessibility & gates</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Look for wide gates if you have luggage or a buggy. They also have readers for tapping.</li>
            <li>Staff can help if your card fails—be ready to show another payment or an Oyster with balance.</li>
          </ul>
        </section>

        {/* Appendix H: Night buses & safety micro-tips */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix H — Night buses & quick safety tips</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Plan your route before you leave; save it offline.</li>
            <li>Keep your phone charged; carry a small power bank.</li>
            <li>Hopper fare still helps on night bus changes.</li>
          </ul>
        </section>

        {/* Appendix I: Italian explainer (super breve) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix I — Spiegazione super breve in italiano</h2>
          <p className="text-sm mb-3">
            Per la maggior parte delle persone, <strong>contactless</strong> (carta o telefono) è la scelta migliore: prezzi come l’Oyster, tetti giornalieri/settimanali,
            nessuna ricarica. Se preferisci <strong>contanti</strong> o hai sconti per giovani, usa <strong>Oyster</strong>. Se viaggi tanto tutti i giorni nelle stesse zone,
            valuta un <strong>Travelcard</strong> settimanale/mensile.
          </p>
        </section>

        {/* Appendix J: Printable one-page checklist */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix J — One-page checklist (copy)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Pick one main card for the week (avoid switching).</li>
            <li>Zones you cross? 1–2 or 2–3? Write them down.</li>
            <li>Compare weekly cap vs Travelcard price (if commuting daily).</li>
            <li>Register card in TfL account for statements/refunds.</li>
            <li>Keep a backup (Oyster or second card) in your pocket.</li>
          </ul>
        </section>

        {/* Appendix K: Company travel policies (reimbursed workers) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix K — If your company reimburses travel</h2>
          <p className="text-sm mb-3">
            Some employers prefer fixed Travelcards for predictable budgets; others accept pay-as-you-go statements. Clarify before you buy.
            For weekly caps on contactless, provide the TfL journey statement + bank lines for that week.
          </p>
        </section>

        {/* Appendix L: Lost or stolen cards */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix L — Lost/stolen cards (what to do)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Contactless bank card: freeze via your bank app; add a new card to your wallet.</li>
            <li>Oyster: if registered, you can protect the balance online and transfer to a new card.</li>
            <li>Paper Travelcard: treat like cash—ask staff for advice if lost.</li>
          </ul>
        </section>

        {/* Appendix M: Tourists—Day 1 quick start */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix M — Tourists: 60-second quick start</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Try contactless with your own bank card or phone wallet.</li>
            <li>If your bank doesn’t work, buy an Oyster and top up.</li>
            <li>Tap in/out on Tube; tap in only on buses; enjoy caps.</li>
          </ol>
        </section>

        {/* Appendix N: When a Travelcard clearly wins */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix N — When a Travelcard clearly wins</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>You commute Mon–Fri peak both ways, zones 1–2 or longer, and also travel on weekends.</li>
            <li>Your employer requires a fixed price product for monthly reimbursement.</li>
            <li>You like the simplicity of “tap without thinking” every day within your zones.</li>
          </ul>
        </section>

        {/* Appendix O: Students & au pairs (budget tips) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix O — Students & au pairs: keep costs low</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Plan days around the cap—group your trips to avoid many small peak rides.</li>
            <li>Use bus/tram with Hopper for short distances.</li>
            <li>Check if your institution offers any travel discounts or railcards.</li>
          </ul>
        </section>

        {/* Appendix P: Zone map mental model (no image version) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix P — Zone map mental model</h2>
          <p className="text-sm mb-3">
            Think of Zone 1 as the center ring. Each ring out adds cost. If you live in Zone 3 and commute to Zone 1, your baseline is <em>3–1</em>.
            Weekend plans that stay in Zone 2–1 don’t change your baseline cap much.
          </p>
        </section>

        {/* Appendix Q: Pink readers & routing signals */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix Q — Pink readers (tell the system your route)</h2>
          <p className="text-sm mb-3">
            Some interchanges ask you to touch a pink reader to show you didn’t go through Zone 1. This can affect your fare positively.
            Follow signs; it’s a quick tap, not an entry/exit.
          </p>
        </section>

        {/* Appendix R: If gates open without tapping (rare) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix R — If gates were open and you forgot to tap</h2>
          <p className="text-sm mb-3">
            You may be charged an incomplete journey. Fix it online or at a machine by selecting the correct entry/exit. Keep times and stations in mind.
          </p>
        </section>

        {/* Appendix S: Multi-modal days (Tube + Rail + Bus + Boat) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix S — Multi-modal days</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Caps cover Tube/Overground/DLR/Elizabeth line/bus/tram within zones.</li>
            <li>Some special services (boats/airport routes) may price differently—check before you travel.</li>
          </ul>
        </section>

        {/* Appendix T: Data & privacy with phone wallets */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix T — Privacy & phone wallets</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Use Face/Touch ID; enable “Express Travel” mode only if you’re comfortable with it.</li>
            <li>Turn on notifications to see journey charges immediately.</li>
          </ul>
        </section>

        {/* Appendix U: Common myths (busted) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix U — Common myths</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Myth:</strong> Oyster is always cheaper than contactless. <strong>Reality:</strong> same pay-as-you-go prices; caps are the key.</li>
            <li><strong>Myth:</strong> You must buy a Travelcard to get a weekly cap. <strong>Reality:</strong> contactless weekly caps can work automatically.</li>
            <li><strong>Myth:</strong> You tap out on buses. <strong>Reality:</strong> tap in only.</li>
          </ul>
        </section>

        {/* FINAL CTA */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">Still unsure? We’ll choose for you in 24 hours.</h2>
          <p className="text-sm mb-4">
            Tell us your zones and routine. We return a custom plan (caps vs Travelcard), a cost table, and instructions to set up your card or phone.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/london-fare-optimizer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Get My Fare Plan (+£15)
            </Link>
            <Link
              href="/community/travel-to-italy-kit"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Next: Quick Trip to Italy — Light Kit
            </Link>
          </div>
        </section>

        {/* JSON-LD SCRIPTS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLdChoose) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLdContactless) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLdTravelcard) }}
        />
      </div>
    </main>
  );
}
