// app/community/bulk-italian-pantry-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Save Money: Bulk Italian Pantry Buys in the UK",
  description:
    "Cut weekly costs with a 3-month Italian pantry plan: what to bulk, what not to, per-meal cost breakdowns, storage & shelf life, and discount tactics that work in UK rentals.",
  alternates: { canonical: "/community/bulk-italian-pantry-uk" },
};

export default function Page() {
  // --- Structured Data (FAQ + HowTo) ---
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long do bulk items like pasta, beans and passata last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Dried pasta: 1–2 years unopened. Tinned beans/tomatoes: typically 1–3 years (check best-before). Passata: 12–18 months unopened. Olive oil: best within 12 months of pressing; store tins in a cool, dark place. Coffee: sealed tins 12–24 months; once opened, use within 2–4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Is bulk buying worth it in a small flat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes—if you prioritise long-life items (pasta, passata, tins, whole beans/ground coffee in sealed tins, 3L olive oil tins) and organise storage. Avoid bulking fragile items like jarred pesto or spices you rarely use."
        }
      },
      {
        "@type": "Question",
        "name": "What’s the quickest way to see real savings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Buy pasta by the case, passata/polpa in 6–12 packs, a 3L olive oil tin, and beans in 12-packs; stack Subscribe & Save, multi-buy promotions, and warehouse deals. Aim for 15–30% below regular shelf price."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build a 3-Month Italian Pantry on a Budget (UK)",
    "description": "A step-by-step plan to bulk buy the right Italian staples, store them well, and cut per-meal costs.",
    "totalTime": "P1D",
    "step": [
      { "@type": "HowToStep", "name": "Choose bulk-friendly items", "text": "Prioritise pasta cases, passata/polpa 6–12 packs, cannellini/borlotti multipacks, 3L olive oil tins, and moka coffee multipacks." },
      { "@type": "HowToStep", "name": "Calculate household sizing", "text": "Use 80–100g pasta per adult serving; 1 jar passata ≈ 4 portions; 1×400g tin beans ≈ 2–3 portions. Multiply for 12 weeks." },
      { "@type": "HowToStep", "name": "Stack discounts", "text": "Combine multi-buy offers, Subscribe & Save, and time-limited vouchers. Target 15–30% off." },
      { "@type": "HowToStep", "name": "Store correctly", "text": "Keep tins/bags in the darkest, coolest cupboard you have (not next to the oven). Decant open oil into smaller brown bottles; label open dates." },
      { "@type": "HowToStep", "name": "Cook from the stash", "text": "Batch cook sauces/beans; rotate stock with FIFO (first in, first out). Track what you actually use each week and adjust next order." }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/bulkessentials.png"
            alt="Bulk Italian Pantry"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">SAVINGS</div>
            <h1 className="text-2xl md:text-4xl font-bold">Save Money: Bulk Italian Pantry Buys in the UK</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <span>Published: October 4, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>

        {/* Intro */}
        <p className="mb-6">
          Bulk = fewer trips + lower unit prices. But the real win is <em>strategy</em>—knowing exactly what to stock,
          how much your household will use in 3 months, and how to store it so nothing goes to waste. Below is a
          battle-tested plan that works in small UK rentals and shared flats.
        </p>

        {/* TOC */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a href="#what-to-bulk" className="underline text-green-900">What to bulk (and avoid)</a></li>
            <li><a href="#household-sizing" className="underline text-green-900">Household sizing table</a></li>
            <li><a href="#costs" className="underline text-green-900">Per-meal cost breakdown</a></li>
            <li><a href="#storage" className="underline text-green-900">Storage & shelf life</a></li>
            <li><a href="#plan" className="underline text-green-900">3-month pantry plan</a></li>
            <li><a href="#tactics" className="underline text-green-900">Discount tactics</a></li>
            <li><a href="#qa" className="underline text-green-900">FAQs</a></li>
          </ul>
        </nav>

        {/* Your original “bulk-friendly / don't bulk” section (kept + expanded context) */}
        <section id="what-to-bulk" className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold text-green-900 mb-2">Bulk-friendly</h2>
            <p className="text-sm mb-2">Long shelf life, stable quality, easy to rotate:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pasta cases (De Cecco/Rummo) — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=de+cecco+case&tag=resinaroamzn-21">shop cases</a></li>
              <li>Passata / polpa 6–12 packs — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=mutti+passata+6+pack&tag=resinaroamzn-21">Mutti multipacks</a></li>
              <li>Cannellini/borlotti multipacks — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=cannellini+beans+12+pack&tag=resinaroamzn-21">beans 12-pack</a></li>
              <li>Olive oil 3L tins (cool, dark storage) — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21">EVOO tins</a></li>
              <li>Ground coffee 6–12 tins — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=illy+moka+coffee+6+pack&tag=resinaroamzn-21">Illy multipacks</a></li>
            </ul>
          </div>

          <div className="bg-white border p-5 rounded-lg">
            <h2 className="font-semibold text-green-900 mb-2">Don’t bulk these</h2>
            <p className="text-sm mb-2">Quality drops fast or waste risk is high:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Jarred pesto (quality dips after opening)</li>
              <li>Spices you rarely use (lose aroma fast)</li>
              <li>Open EVOO bottles (go rancid with light/air)</li>
            </ul>
          </div>
        </section>

        {/* Storage helpers (kept) */}
        <h2 className="text-xl font-semibold text-green-900 mt-8 mb-2">Storage helpers</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Airtight container set — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=airtight+container+set&tag=resinaroamzn-21">compare</a></li>
          <li>Stackable can risers — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=can+organiser+rack&tag=resinaroamzn-21">organisers</a></li>
          <li>Cool-dark cupboard labels — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=pantry+labels&tag=resinaroamzn-21">labels</a></li>
        </ul>

        {/* NEW: Household sizing */}
        <section id="household-sizing" className="mt-10 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">How much should you buy? (12-week guide)</h2>
          <p className="mb-3 text-sm">
            Use this as a starting point and tweak after your first cycle. Assumes ~3 pasta meals/week,
            2 bean-based meals/week, and coffee for daily moka drinkers.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>Household</th>
                  <th>Pasta</th>
                  <th>Passata/Polpa</th>
                  <th>Beans (400g tins)</th>
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
            Rule of thumb: pasta ~90g per adult serving; 1 jar passata ~4 portions; 1 tin beans = 2–3 portions.
          </p>
        </section>

        {/* NEW: Per-meal cost breakdown */}
        <section id="costs" className="mt-10 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">What does dinner actually cost?</h2>
          <p className="mb-4 text-sm">
            Using typical bulk prices (illustrative): pasta £1.40/500g, passata £1.10/jar, beans £0.65/tin,
            EVOO £8/L (3L tin ~£24), tuna in olive oil £1.60/can, herbs/salt negligible per portion.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded p-4">
              <h3 className="font-semibold text-green-900 mb-1">Spaghetti al pomodoro</h3>
              <ul className="list-disc pl-5">
                <li>100g pasta ≈ £0.28</li>
                <li>¼ jar passata ≈ £0.28</li>
                <li>EVOO 1 tbsp ≈ £0.08</li>
              </ul>
              <p className="mt-2 font-semibold">~ £0.64 per person</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold text-green-900 mb-1">Pasta e fagioli (fast)</h3>
              <ul className="list-disc pl-5">
                <li>80g pasta ≈ £0.22</li>
                <li>½ tin beans ≈ £0.33</li>
                <li>¼ jar passata ≈ £0.28</li>
                <li>EVOO 1 tbsp ≈ £0.08</li>
              </ul>
              <p className="mt-2 font-semibold">~ £0.91 per person</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold text-green-900 mb-1">Tuna & cannellini bowl</h3>
              <ul className="list-disc pl-5">
                <li>½ tin beans ≈ £0.33</li>
                <li>½ can tuna ≈ £0.80</li>
                <li>EVOO + herbs ≈ £0.10</li>
              </ul>
              <p className="mt-2 font-semibold">~ £1.23 per person</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            Prices vary by brand/offer; use this to sanity-check savings from bulk orders.
          </p>
        </section>

        {/* NEW: Storage & shelf life */}
        <section id="storage" className="mt-10 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Storage & shelf life (small-flat friendly)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
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
                  <td>If fridge space is tight, plan dishes to use a whole jar day-of.</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Tinned beans</td>
                  <td>1–3 years</td>
                  <td>2–3 days in fridge</td>
                  <td>Decant leftovers into covered container.</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>Olive oil (3L tin)</td>
                  <td>Best within 12 months</td>
                  <td>Use within 2–3 months of decant</td>
                  <td>Decant into small dark bottles; store tin cool/dark.</td>
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
            <p className="font-semibold">Quality checks you can trust:</p>
            <ul className="list-disc pl-5">
              <li><strong>EVOO rancid?</strong> Smells like wax/crayons; flavour is flat or waxy → don’t use.</li>
              <li><strong>Coffee stale?</strong> Aroma is muted, crema thin, taste papery → open a fresh tin.</li>
              <li><strong>Tomato quality:</strong> Sweet/bright is good; metallic/bitter suggests poor brand or age.</li>
            </ul>
          </div>
        </section>

        {/* NEW: 3-Month Pantry Plan */}
        <section id="plan" className="mt-10 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Your 3-Month Pantry Plan (repeatable)</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li><strong>Order once:</strong> 1 pasta case (mix shapes), 12× passata/polpa, 12× beans, 1×3L EVOO, coffee 6–12 tins.</li>
            <li><strong>Decant & label:</strong> Move pasta to airtight tubs; write open dates on EVOO/coffee.</li>
            <li><strong>Batch once/week:</strong> Make 1L tomato base and a 2-tin bean pot; freeze portions if you have space or plan meals to finish jars.</li>
            <li><strong>Rotate stock:</strong> FIFO: place new cases behind open ones.</li>
            <li><strong>Track 4 weeks:</strong> Note what you really use; adjust the next cycle to hit zero waste.</li>
          </ol>
        </section>

        {/* NEW: Discount tactics */}
        <section id="tactics" className="mt-10 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Discount tactics that actually move the needle</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Subscribe & Save (pause anytime):</strong> Add cases/multipacks, take the % discount, then move delivery or pause after the first drop.</li>
            <li><strong>Multi-buy mix & match:</strong> Combine shapes/brands within the same offer to avoid monotony.</li>
            <li><strong>Warehouse/Open-box:</strong> Often fine for tins/boxes; inspect on arrival, return free if damaged.</li>
            <li><strong>Unit pricing:</strong> Always divide price by kg or per jar/tin—bulk isn’t always cheaper.</li>
            <li><strong>Group orders:</strong> Split a pasta case or EVOO tin with friends/flatmates to unlock bulk prices without storage pain.</li>
          </ul>
        </section>

        {/* Your original “Related” (kept) */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/buying-in-bulk-uk-italian-staples">
                Save Money in the UK: Buy Italian Staples in Bulk (Detailed Guide)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/starter-uk-kitchen-italian">
                Tiny UK Kitchen, Big Italian Flavour: Starter Kit
              </Link>
            </li>
          </ul>
        </section>

        {/* Affiliate note */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Affiliate note: we may earn a small commission at no extra cost to you. Thanks for supporting community guides.
        </p>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      </div>
    </main>
  );
}
