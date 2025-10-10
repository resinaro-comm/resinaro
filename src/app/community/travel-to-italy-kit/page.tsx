// app/community/travel-to-italy-kit/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Quick Trip to Italy: Light Travel Kit from the UK",
  description:
    "Carry-on only, renter-proof packing: exact EU cabin sizes, what to pack (and skip), UK→EU power, documents, security, gifts you can bring, and a 10-minute checklist.",
  alternates: { canonical: "/community/travel-to-italy-kit" },
};

export default function Page() {
  // SEO: FAQ + HowTo
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is this guide on Resinaro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Because many community members fly back and forth for consular appointments, renewals, and family visits. A smooth carry-on setup saves money, avoids airport stress, and keeps documents safe—exactly the practical help Resinaro exists to provide."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need anything special for power in Italy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Italy uses 220–240V with Type-C/L sockets. Bring a grounded UK→EU adapter and avoid low-quality travel adapters. Keep high-draw devices (hair dryers) to UK plugs unless the adapter is rated for them."
        }
      },
      {
        "@type": "Question",
        "name": "Carry-on only—what liquids can I take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Stick to travel sizes (≤100ml) in a clear resealable bag. Put meds in original packaging with your name; keep a small spare supply in case of delays."
        }
      },
      {
        "@type": "Question",
        "name": "What about documents for consular visits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Use a flat A4 wallet for originals + a second wallet for photocopies and passport photos. Keep digital scans on your phone and a cloud backup. Bring proof of AIRE when relevant."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Pack for a weekend Italy trip with only a personal-item backpack",
    "totalTime": "PT10M",
    "step": [
      { "@type": "HowToStep", "name": "Documents", "text": "Passport/ID, booking QR codes, travel insurance, payment cards, emergency contacts, consular address." },
      { "@type": "HowToStep", "name": "Tech & power", "text": "Phone + cable, compact charger, UK→EU adapter, optional power bank (in cabin only)." },
      { "@type": "HowToStep", "name": "Clothes", "text": "2 tops, 1 bottom, underwear x3, socks x3, light layer; add scarf/hat in winter." },
      { "@type": "HowToStep", "name": "Wash kit", "text": "≤100ml toiletries in a clear bag; meds in original packaging." },
      { "@type": "HowToStep", "name": "Extras", "text": "Packing cubes, foldable tote for the return, small gifts within customs rules." }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/quicktrip.png" // Replace with a realistic travel hero when ready
            alt="Carry-on travel kit for UK ↔ Italy"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">TRAVEL</span>
            <h1 className="text-2xl md:text-4xl font-bold">Quick Trip to Italy: Light Travel Kit from the UK</h1>
          </div>
        </div>

        {/* Why this matters */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Why this guide (and how it saves you money)</h2>
          <p className="mb-3">
            If you’re visiting family, doing a consular appointment, or squeezing in a weekend in Italy, the cheapest ticket is often “personal item only”.
            This guide shows you exactly how to fit everything into one EU-compatible bag, avoid surprise fees at the gate, and keep your documents safe.
            It’s built from real community questions we answer every week at Resinaro.
          </p>
          <p className="text-sm text-gray-700">
            We’ve included practical picks that respect small budgets and airline rules. Nothing fancy—only items that survive security,
            protect your documents, and keep you moving.
          </p>
        </section>

        {/* TOC */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#sizes">Airline sizes that actually fit</a></li>
            <li><a className="underline text-green-900" href="#kit">The compact travel kit</a></li>
            <li><a className="underline text-green-900" href="#docs">Documents & consular folder</a></li>
            <li><a className="underline text-green-900" href="#security">Security & liquids</a></li>
            <li><a className="underline text-green-900" href="#power">Power in Italy (adapters)</a></li>
            <li><a className="underline text-green-900" href="#clothes">Packing lists (seasonal)</a></li>
            <li><a className="underline text-green-900" href="#gifts">Gifts & what you can bring</a></li>
            <li><a className="underline text-green-900" href="#checklist">10-minute pre-flight checklist</a></li>
          </ul>
        </nav>

        {/* Airline sizes */}
        <section id="sizes" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Airline “personal item” sizes that actually fit</h2>
          <p className="mb-3">
            Most UK↔Italy low-cost fares now include a small under-seat bag only. A safe target that fits the strictest policies is around{" "}
            <strong>40×20×25cm</strong> (personal item). A few carriers allow a slightly bigger cabin bag when you pay for priority.
            Always check your exact fare, but if you buy once and forget the rest:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Pick a <strong>structured 40×20×25cm backpack</strong> to keep shape at the gate.</li>
            <li>Use <strong>packing cubes</strong>: compress clothes and prove it fits in one motion.</li>
            <li>Carry a <strong>foldable tote</strong> inside for the return (gifts/food)—use it after boarding.</li>
          </ul>
          <p className="text-sm mt-3">
            EU-sized cabin backpack (
            <a
              href="https://www.amazon.co.uk/s?k=cabin+bag+40x20x25&tag=resinaroamzn-21"
              className="underline text-green-800"
              rel="nofollow sponsored"
            >
              airline sizes
            </a>
            )
          </p>
        </section>

        {/* The compact kit with links */}
        <section id="kit" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">The compact travel kit (carry-on only)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900">Space & order</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Packing cubes (
                  <a href="https://www.amazon.co.uk/s?k=packing+cubes&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">sets</a>
                  ) for tops/bottoms/underwear.
                </li>
                <li>
                  Foldable tote (
                  <a href="https://www.amazon.co.uk/s?k=packable+tote&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">lightweight</a>
                  ) for the return trip.
                </li>
                <li>
                  Digital luggage scale (
                  <a href="https://www.amazon.co.uk/s?k=digital+luggage+scale&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">avoid fees</a>
                  )—especially if you add gifts/food.
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900">Docs & tech</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  RFID document wallet (
                  <a href="https://www.amazon.co.uk/s?k=rfid+passport+wallet&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">wallets</a>
                  ) + A4 folder for consular papers.
                </li>
                <li>
                  UK→EU grounded adapter (
                  <a href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter+grounded&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">grounded adapters</a>
                  )—buy once, keep packed.
                </li>
                <li>Power bank (cabin only), short charging cable, headphones.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="docs" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Documents & consular folder (zero panic at the desk)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Passport/ID + printed boarding pass (apps can fail at gates).</li>
            <li>A4 wallet: appointment confirmation, AIRE proof if relevant, photocopies, passport photos, payment proof.</li>
            <li>Digital scans in cloud/phone. Label files clearly (e.g., <em>surname_docname_YYYY.pdf</em>).</li>
            <li>Emergency sheet: contact, insurer, EHIC/GHIC (if you have one), card blocks, local consulate address.</li>
          </ul>
          <p className="mt-3 text-sm">
            Need help with documents?{" "}
            <Link href="/services" className="underline text-green-900">View Resinaro Services →</Link>.
          </p>
        </section>

        {/* Security & liquids */}
        <section id="security" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Security & liquids: move fast at the checkpoint</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Toiletries ≤100ml in a clear bag at the top of your backpack.</li>
              <li>Medications in original packaging with name; keep a spare day’s dose in another pocket.</li>
              <li>Laptop/tablet easy to remove unless your airport uses upgraded scanners—follow on-site signs.</li>
              <li>Power bank in cabin only; never in checked baggage.</li>
            </ul>
          </div>
        </section>

        {/* Power in Italy */}
        <section id="power" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Power in Italy: UK→EU done right</h2>
          <p className="mb-2">
            Italy uses 220–240V with Type-C/L sockets. UK devices are fine with a proper adapter. For laptops/phones, a <strong>grounded adapter</strong> is best.
          </p>
          <p className="text-sm">
            UK→EU Type-C adapter (
            <a href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter+grounded&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">
              grounded adapters
            </a>
            )
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Hair dryers/straighteners draw high wattage—check adapter ratings or use local devices.
          </p>
        </section>

        {/* Clothes (seasonal) */}
        <section id="clothes" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">What to wear: quick seasonal lists</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Spring/Autumn</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Light jacket, scarf, 2 tops, 1 bottom</li>
                <li>Comfy shoes for cobbles</li>
                <li>Compact umbrella</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Summer</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Breathable shirts, 1 shorts/skirt</li>
                <li>Hat/sunglasses, light layer for evenings</li>
                <li>Respectful outfit for churches (shoulders covered)</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Winter</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Warm layer + compact puffer</li>
                <li>Gloves, beanie, thermal socks</li>
                <li>Weatherproof shoes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gifts & food */}
        <section id="gifts" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Gifts & what you can bring back</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Dry goods (biscuits, coffee, pasta) are simplest for hand luggage.</li>
            <li>Liquids over 100ml must be checked—or buy after security.</li>
            <li>Wine/olive oil: buy airside to skip liquid limits; protect glass on the return leg.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            Always follow airline, airport, and customs rules for food/liquids.
          </p>
        </section>

        {/* 10-minute checklist */}
        <section id="checklist" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">10-minute pre-flight checklist</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Passport/ID + boarding pass (paper + app). Wallet + backup card.</li>
            <li>RFID wallet + A4 folder (appointments, AIRE proof, photos, copies).</li>
            <li>Phone, cable, grounded UK→EU adapter, headphones, power bank.</li>
            <li>Liquids bag on top, meds in name-labelled packs.</li>
            <li>Weigh bag; confirm size (40×20×25cm personal item).</li>
            <li>Foldable tote inside the backpack for the journey home.</li>
          </ul>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/power-adapters-uk-italy">
                Plugs, Adapters & Power: Italy ↔ UK Without the Sparks
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/services">
                View Resinaro Services →
              </Link>
            </li>
          </ul>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Some links may earn us a small commission at no extra cost to you. It helps keep community guides like this free and updated.
        </p>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      </div>
    </main>
  );
}
