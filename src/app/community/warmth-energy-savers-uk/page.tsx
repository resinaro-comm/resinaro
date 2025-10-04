// app/community/warmth-energy-savers-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
  description:
    "Real-world, landlord-friendly ways to feel warmer in UK rentals: draft sealing, thermal curtains, hot-water bottles and low-watt personal heaters. Includes a 30-minute setup plan, room checklist, and cost-per-hour examples.",
  alternates: { canonical: "/community/warmth-energy-savers-uk" },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s the quickest way to feel warmer in a drafty UK flat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Seal the biggest drafts first (front door, window gaps) with removable self-adhesive seals, add a door sweep or draught snake, close unused rooms, and layer thermal curtains at night. Warm the body directly with a hot-water bottle or heated pad before relying on space heating."
        }
      },
      {
        "@type": "Question",
        "name": "Are low-watt personal heaters cheaper to run?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "They can be when you heat a very small zone (desk, sofa) instead of the whole room. Estimate running cost with: watts ÷ 1000 × tariff per kWh. Example: 200W × £0.28/kWh ≈ £0.056/hour (5.6p)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I install these without annoying my landlord?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes—choose removable products: peel-and-stick weatherstrip, clip-in curtain rails, command hooks for thermal liners, and draft snakes. Avoid permanent drilling unless you have permission."
        }
      },
      {
        "@type": "Question",
        "name": "Are there safety tips for hot-water bottles and heaters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Use hot (not boiling) water, check bottle condition yearly, and avoid direct skin contact for long periods. Keep heaters away from bedding/curtains, never cover or leave unattended, and use on a stable surface with tip-over protection if available."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Warmth in 30 Minutes: Landlord-Friendly Setup",
    "description": "A quick, reversible setup to cut drafts and feel warmer fast in a UK rental.",
    "totalTime": "PT30M",
    "step": [
      { "@type": "HowToStep", "name": "Front door", "text": "Apply self-adhesive weatherstrip along the frame; add a draft snake or door sweep at the bottom." },
      { "@type": "HowToStep", "name": "Windows", "text": "Seal obvious gaps with peel-and-stick foam; close trickle vents at night if safe; hang thermal curtains or clip-on liners." },
      { "@type": "HowToStep", "name": "Zoning", "text": "Close doors to unused rooms to reduce the volume you need to heat." },
      { "@type": "HowToStep", "name": "Personal warmth", "text": "Pre-warm your seat/bed with a hot-water bottle or heat pad; use a low-watt personal heater for your desk area if needed." }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/Logo.jpg" // Placeholder – swap for a cosy, realistic interior hero when ready
            alt="Energy-Saving Comfort Items"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              HOME
            </div>
            <h1 className="text-2xl md:text-4xl font-bold">Stay Warm, Spend Less: Energy-Saving Comfort Picks</h1>
          </div>
        </div>

        {/* Publication info */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <span>Published: October 4, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>

        {/* Intro */}
        <p className="mb-4">
          UK rentals can be drafty—single glazing, gaps around doors, radiators under cold windows. The good news:
          you don’t need major works to feel warmer. Below is a friendly, landlord-safe playbook you can do in a lunch break,
          plus smart buys that warm <em>you</em> first, not the whole neighbourhood.
        </p>

        {/* TOC */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a href="#quick-win" className="underline text-green-900">30-minute quick win</a></li>
            <li><a href="#picks" className="underline text-green-900">Comfort picks (affiliate)</a></li>
            <li><a href="#room-checklist" className="underline text-green-900">Room-by-room checklist</a></li>
            <li><a href="#costs" className="underline text-green-900">Cost-per-hour guide</a></li>
            <li><a href="#habits" className="underline text-green-900">Warm habits that cost £0</a></li>
            <li><a href="#faq" className="underline text-green-900">FAQs & safety</a></li>
          </ul>
        </nav>

        {/* 30-minute setup */}
        <section id="quick-win" className="bg-white rounded-lg border shadow-sm p-5 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Warmth in 30 Minutes (Landlord-Friendly)</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li><strong>Front door:</strong> Apply self-adhesive weatherstrip where you see daylight; add a draft snake at the bottom.</li>
            <li><strong>Windows:</strong> Seal the worst gaps with peel-and-stick foam; at night, close trickle vents if safe and drop thermal curtains.</li>
            <li><strong>Zoning:</strong> Shut doors to rooms you aren’t using—smaller zone = easier to keep warm.</li>
            <li><strong>Personal warmth:</strong> Pre-warm your chair/bed with a hot-water bottle or heat pad; keep a fleece throw within reach.</li>
          </ol>
          <p className="mt-3 text-xs text-gray-600">All steps are reversible: no drilling, no residue when removed carefully.</p>
        </section>

        {/* Comfort picks (keep your original links) */}
        <section id="picks" className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-green-900 mb-3">Comfort picks that punch above their weight</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Self-adhesive draft excluder seals (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21">see options</a>
              )
            </li>
            <li>
              Thermal blackout curtains (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=thermal+blackout+curtains&tag=resinaroamzn-21">popular sizes</a>
              )
            </li>
            <li>
              Hot-water bottle / microwave heat pad (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=hot+water+bottle&tag=resinaroamzn-21">classic</a>
              )
            </li>
            <li>
              Low-watt personal heater (desk) (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=low+watt+desk+heater&tag=resinaroamzn-21">compare</a>
              )
            </li>
            <li>
              Thick socks + fleece throw (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=fleece+throw+blanket&tag=resinaroamzn-21">throws</a>
              )
            </li>
          </ul>

          <div className="mt-6 bg-white rounded-lg border p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">Why these work</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Seals & curtains:</strong> Cut drafts and radiant heat loss—biggest comfort boost per pound.</li>
              <li><strong>Personal heat:</strong> Warming your body or a small zone costs less than heating whole rooms.</li>
              <li><strong>Fabrics:</strong> Traps warm air around you; perfect for reading/TV/desk without cranking heating.</li>
            </ul>
          </div>
        </section>

        {/* Room-by-room */}
        <section id="room-checklist" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Room-by-Room Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold text-green-900">Entry & Living</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Door seal + draft snake; check letterbox brushes if you have one.</li>
                <li>Thermal curtains that fully cover the window frame (spill to floor if possible).</li>
                <li>Zone heating: personal heater by the desk/sofa; close spare rooms.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold text-green-900">Bedroom</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Pre-warm bed with hot-water bottle 15 minutes before sleep.</li>
                <li>Move bed away from external walls/window overhangs if possible.</li>
                <li>Use a fleece/topper layer to reduce “cold sheet shock”.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost-per-hour guide */}
        <section id="costs" className="bg-white rounded-lg border p-5 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">What does it cost to run a small heater?</h2>
          <p className="text-sm mb-3">
            Use this formula with your own tariff: <strong>watts ÷ 1000 × price per kWh = cost per hour</strong>.
            Example below uses <em>£0.28/kWh</em> as a simple illustration—check your energy bill or smart meter.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2"><th>Heater</th><th>Watts</th><th>Example cost/hour</th><th>Best use</th></tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2"><td>Personal desk heater</td><td>200W</td><td>£0.06</td><td>Hands/feet when working</td></tr>
                <tr className="[&>td]:px-3 [&>td]:py-2"><td>Compact ceramic</td><td>500W</td><td>£0.14</td><td>Small zone by sofa</td></tr>
                <tr className="[&>td]:px-3 [&>td]:py-2"><td>Typical fan heater</td><td>1000W</td><td>£0.28</td><td>Short bursts only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Numbers are illustrative; real costs depend on your tariff and usage. Always prioritise draft-proofing first.
          </p>
        </section>

        {/* Habits */}
        <section id="habits" className="bg-white rounded-lg border p-5 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Warm Habits That Cost £0</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Open curtains for daytime sun; close thermal curtains before dusk.</li>
            <li>Cook one-pot dinners in the evening—ambient warmth lingers.</li>
            <li>Keep slippers and a throw within reach of your “coldest spot”.</li>
            <li>Close internal doors to limit airflow paths that steal heat.</li>
          </ul>
        </section>

        {/* Tips section (kept + refined) */}
        <section className="mt-8 bg-white rounded-lg border shadow-sm p-5">
          <h2 className="text-xl font-semibold text-green-900 mb-3">Quick energy-saving tips</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Apply draft excluders in the evening; remove cleanly in spring if needed.</li>
            <li>Layer curtains: sheer for light by day, thermal blackout at night.</li>
            <li>Hot-water bottle under a blanket 10–15 minutes before bed warms sheets efficiently.</li>
            <li>Place personal heaters at foot level and sit close—heat rises naturally.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            Safety: use hot (not boiling) water; keep heaters clear of fabrics; never leave heaters running unattended.
          </p>
        </section>

        {/* Related Articles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/move-in-cleaning-kit-uk">
                Move-In Day: Cleaning & Fix-It Kit for UK Rentals
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
