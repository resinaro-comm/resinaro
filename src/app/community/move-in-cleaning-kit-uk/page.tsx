// app/community/move-in-cleaning-kit-uk/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals (Deposit-Safe Guide)",
  description:
    "Room-by-room move-in checklist, deposit-safe cleaning methods, damp & condensation fixes, wall-safe mounting, toolkit essentials, and renter-friendly upgrades—plus quick affiliate picks.",
  alternates: { canonical: "/community/move-in-cleaning-kit-uk" },
};

export default function Page() {
  // ---- Structured data (SEO): FAQ + HowTo + Article ----
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
            "Start with high-touch points (handles, switches, taps), then bathroom and kitchen surfaces, then floors. Photograph pre-existing issues before cleaning to protect your deposit.",
        },
      },
      {
        "@type": "Question",
        name: "How do I deal with UK rental damp and condensation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Vent daily, heat rooms evenly, use moisture absorbers in wardrobes, and wipe condensation from windows. Report leaks or structural issues to the landlord. Use mould-safe cleaner on small spots and document everything.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hang things without drilling?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—use Command strips/hooks sized for the item’s weight, clean the wall with isopropyl alcohol first, and follow cure times. Keep packaging and note placement for easy removal before move-out.",
        },
      },
      {
        "@type": "Question",
        name: "Which products are safe for deposits and typical UK finishes?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Neutral pH multi-surface sprays for paintwork, non-abrasive bathroom cleaners for enamel/acrylic, microfibre cloths, and a flat mop with washable pads. Avoid harsh abrasives on glass, chrome, or laminate.",
        },
      },
      {
        "@type": "Question",
        name: "What should be in a first-week renter’s toolkit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "WD-40, adjustable spanner, small screwdriver set, picture-hanging strips, door-draft excluder, felt pads for furniture, moisture absorbers, basic plasters, batteries, and a plug-in tester.",
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
          "Walk through each room with your phone. Photograph and time-stamp any damage, wear, mould, or missing items before cleaning. Save in a shared folder.",
      },
      {
        "@type": "HowToStep",
        name: "Clean high-touch points",
        text:
          "Disinfect handles, switches, taps, toilet flush, fridge door seal, and remote controls using a neutral spray and microfibre.",
      },
      {
        "@type": "HowToStep",
        name: "Bathrooms then kitchen",
        text:
          "Descale taps/showerheads, scrub grout lightly, then degrease hob, backsplash, and cupboard fronts. Finish with floors using a flat mop.",
      },
      {
        "@type": "HowToStep",
        name: "Tackle damp & airflow",
        text:
          "Open trickle vents, run extractor fans, wipe condensation on windows, and deploy moisture absorbers in wardrobes.",
      },
      {
        "@type": "HowToStep",
        name: "Deposit-safe mounting",
        text:
          "Use Command strips for art and small shelves. Follow weight ratings and cure times. Keep receipts for move-out.",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals",
    author: { "@type": "Organization", name: "Resinaro" },
    datePublished: "2025-10-07",
    description:
      "A deposit-safe, room-by-room guide for cleaning and small fixes in UK rentals: products, methods, damp control, and landlord-friendly upgrades.",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/cleaning.png" // Swap for a dedicated hero later
            alt="Move-in day UK rental cleaning kit on a hallway floor: mop, microfibre cloths, hooks, moisture absorbers"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">HOUSING</span>
            <h1 className="text-2xl md:text-4xl font-bold">Move-In Day: Cleaning &amp; Fix-It Kit for UK Rentals</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Published: October 7, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>

        {/* Why this guide exists */}
        <section className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <p className="mb-3">
            If you’ve just arrived in the UK—or you’ve moved across town—you quickly learn the reality of British rentals:
            a little damp, a little dust, sometimes a lot of previous-tenant “character”. This is the guide we wish we’d
            had: <strong>exactly</strong> what to clean first, <strong>deposit-safe</strong> ways to fix small issues, and the
            <strong> minimal kit</strong> that saves time, money, and your walls.
          </p>
          <p className="text-sm text-gray-700">
            We wrote this for newcomers, students, professionals, families—anyone who wants a quick win on day one. Use
            the fast picks below, then jump into the room-by-room plan, damp fixes, and move-out strategy to protect your
            deposit.
          </p>
        </section>

        {/* Fast picks (keep affiliate-safe formatting) */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border p-5 rounded-lg shadow-sm">
            <h2 className="font-semibold text-green-900 mb-2">Cleaning & organising essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Microfibre cloth bundle —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=microfibre+cloth+pack&tag=resinaroamzn-21">
                  bulk packs
                </a>
              </li>
              <li>
                Flat mop + extra pads —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=flat+mop+microfibre&tag=resinaroamzn-21">
                  compare
                </a>
              </li>
              <li>
                Command hooks/strips (no drilling) —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=command+strips&tag=resinaroamzn-21">
                  sizes
                </a>
              </li>
              <li>
                Moisture absorbers for wardrobes —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=wardrobe+moisture+absorber&tag=resinaroamzn-21">
                  damp traps
                </a>
              </li>
              <li>
                Lint roller + sticky hair catcher (drains) —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=drain+hair+catcher&tag=resinaroamzn-21">
                  options
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white border p-5 rounded-lg shadow-sm">
            <h2 className="font-semibold text-green-900 mb-2">Quick fix & toolkit basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                WD-40 + mini screwdriver set —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=basic+tool+set+home&tag=resinaroamzn-21">
                  starter kits
                </a>
              </li>
              <li>
                Felt pads for chairs/sofa feet —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=furniture+felt+pads&tag=resinaroamzn-21">
                  protect floors
                </a>
              </li>
              <li>
                Door draft excluder roll (self-adhesive) —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21">
                  see options
                </a>
              </li>
              <li>
                Plug-in socket tester (basic safety) —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=socket+tester&tag=resinaroamzn-21">
                  testers
                </a>
              </li>
              <li>
                Alkaline batteries (AA/AAA) + torch —{" "}
                <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=aa+aaa+batteries+pack&tag=resinaroamzn-21">
                  bulk pack
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Contents */}
        <nav aria-label="Contents" className="mb-6">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#first-24">Your first 24 hours</a></li>
            <li><a className="underline text-green-900" href="#rooms">Room-by-room plan</a></li>
            <li><a className="underline text-green-900" href="#damp">Damp, mould & condensation</a></li>
            <li><a className="underline text-green-900" href="#walls">Wall-safe mounting</a></li>
            <li><a className="underline text-green-900" href="#odours">Odour & hygiene quick wins</a></li>
            <li><a className="underline text-green-900" href="#toolkit">Renter’s toolkit (mini)</a></li>
            <li><a className="underline text-green-900" href="#moveout">Move-out strategy (plan early)</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ</a></li>
          </ul>
        </nav>

        {/* First 24 hours */}
        <section id="first-24" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Your first 24 hours (deposit-safe checklist)</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Photograph everything</strong>: chips in paint, stains, loose carpet edges, damp patches, cracked tiles, scratched
              worktops, mould spots, missing bulbs. Time-stamp and save to cloud with room labels.
            </li>
            <li>
              <strong>High-touch clean sweep</strong>: handles, switches, bannisters, taps, toilet flush, fridge seal, cupboard pulls,
              remote controls—neutral spray, microfibre cloth.
            </li>
            <li>
              <strong>Bathroom first</strong>: non-abrasive descaler on taps/showerhead, wipe around sealant, check extractor fan works
              (hold tissue to grill). Replace manky shower curtain if needed.
            </li>
            <li>
              <strong>Kitchen next</strong>: degrease hob and backsplash; inside of cupboards (crumbs); sink + plughole; run a hot wash
              in the empty dishwasher with cleaner if present.
            </li>
            <li>
              <strong>Floors</strong>: vacuum corners and skirting, then flat-mop with a light detergent. Avoid soaking laminate.
            </li>
            <li>
              <strong>Damp control</strong>: open trickle vents, crack a window 10–15 min, wipe window condensation, place moisture
              absorbers in wardrobes/under sinks.
            </li>
            <li>
              <strong>Comfort boost</strong>: draft excluder on the worst gap, felt pads under chairs, one Command hook near the door
              for keys/bags.
            </li>
          </ol>
        </section>

        {/* Room by room */}
        <section id="rooms" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Room-by-room plan (fast methods that work)</h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Bathroom (30–45 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Spray descaler on taps/showerhead; rinse and buff with a dry microfibre for chrome shine.</li>
                <li>Toilet: apply cleaner under rim; while it sits, wipe seat/hinges and flush handle.</li>
                <li>Shower screen/tiles: non-abrasive cleaner + squeegee to prevent water spots.</li>
                <li>Check extractor fan; clean grill with a dry brush. Report noisy or non-working units.</li>
                <li>Mould at sealant? Light surface spots: mould-safe cleaner + ventilate. Black, widespread or behind silicone: document and report.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Kitchen (45–60 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hob/oven panel: degreaser + lint-free cloth; avoid harsh scouring on glass/steel.</li>
                <li>Sink: limescale remover on taps; flush plughole with hot water; fit a hair/food catcher.</li>
                <li>Fridge seal: wipe; remove crumbs from shelves. If odours persist, place baking soda/open coffee grounds in a cup (temporary).</li>
                <li>Inside cupboards: vacuum crumbs; wipe with neutral spray.</li>
                <li>Finish with floors: light detergent, barely damp pad on laminate.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Bedroom & living (30–45 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dust top-down: lights, shelves, skirting. Use a dry microfibre or duster.</li>
                <li>Windows: glass cleaner or diluted vinegar; wipe frames and sills (watch flaking paint).</li>
                <li>Wardrobe: deploy moisture absorber; leave space between wall and back panel for airflow.</li>
                <li>Felt pads under furniture to prevent floor scratches (deposit saver).</li>
                <li>Curtains: shake outside/open window; consider washing if labelled safe.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Hallway & entry (15–20 min)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>One sturdy Command hook at entry for coats/bags.</li>
                <li>Shoe tray or mat to trap grit (protects floors).</li>
                <li>Draft excluder on door bottom if you feel cold air; leave 5–10 mm for airflow if no trickle vent.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Damp, mould & condensation */}
        <section id="damp" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Damp, mould & condensation (UK reality check)</h2>
          <p className="text-sm mb-3">
            The UK climate plus older housing means many rentals collect moisture. You can’t fix structural issues—but you
            <em> can</em> manage daily moisture, protect clothes, and document problems.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Do this daily</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ventilate: open a window 10–15 min (cross-breeze is best) after showers/cooking.</li>
                <li>Run extractor fans; leave bathroom door ajar after showers.</li>
                <li>Wipe window condensation each morning (microfibre + small squeegee).</li>
                <li>Use moisture absorbers in wardrobes and under sinks.</li>
                <li>Heat evenly at low-medium settings to avoid cold corners where moisture condenses.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">When to escalate</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Visible black mould spreading beyond small spots—document and notify landlord.</li>
                <li>Leaks, wet patches after rain, or persistent musty smell—report ASAP.</li>
                <li>Extractor fan broken/noisy—request repair; it affects damp and your health.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Note: Use mould-specific cleaners on minor surface spots and ventilate well. Wear gloves/mask if needed. Never
            sand or scrape painted mould—report instead.
          </p>
        </section>

        {/* Wall-safe mounting */}
        <section id="walls" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Wall-safe mounting (art, mirrors, rails)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Command 101</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clean paint with isopropyl alcohol (not household cleaners). Let dry fully.</li>
                <li>Use the correct <strong>weight-rated</strong> strip/hook. Don’t stack mismatched strips.</li>
                <li>Press firmly 30–60 seconds; follow the <strong>cure time</strong> (often 1 hour) before hanging.</li>
                <li>Removal: pull tab <em>straight down</em> slowly to release without ripping paint.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">When you must drill</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Get <strong>written permission</strong> first. Ask about wall type (plasterboard vs. masonry).</li>
                <li>Use appropriate anchors; avoid wiring routes. Photograph before/after.</li>
                <li>Fill and paint neatly at move-out with landlord-approved paint code.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Deposit tip: keep packaging and receipts for strips/hooks; note where you placed them so you can remove and
            clean residue in minutes before checkout.
          </p>
        </section>

        {/* Odours & hygiene */}
        <section id="odours" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Odour & hygiene quick wins (15-minute fixes)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Fridge funk:</strong> wipe seal + trays, then leave a small open box of baking soda for 24–48h. Replace with a
              closed container after.
            </li>
            <li>
              <strong>Drains:</strong> clean strainer, fit a hair catcher, flush with very hot water. Avoid mixing chemicals.
            </li>
            <li>
              <strong>Carpets/rugs:</strong> sprinkle bicarbonate of soda, leave 30 min, vacuum thoroughly.
            </li>
            <li>
              <strong>Bins:</strong> rinse, spray, dry; use liners and lid filters if smells persist.
            </li>
          </ul>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Renter’s mini-toolkit (fits in a shoebox)</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Basics</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>WD-40 (squeaky hinges, sticky locks)</li>
                <li>Mini screwdriver set + Allen keys</li>
                <li>Adjustable spanner</li>
                <li>Measuring tape</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Protection</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Felt pads (chairs, sofa)</li>
                <li>Door draft excluder</li>
                <li>Moisture absorbers</li>
                <li>Rubber gloves + microfibres</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Power & safety</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Plug-in socket tester</li>
                <li>AA/AAA batteries (remotes, alarms)</li>
                <li>Small torch</li>
                <li>Spare light bulbs (check fitting type)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
            <p>
              <strong>Quick affiliate picks:</strong>{" "}
              <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=basic+tool+set+home&tag=resinaroamzn-21">
                starter toolkit
              </a>{" "}
              ·{" "}
              <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=command+strips&tag=resinaroamzn-21">
                Command strips/hooks
              </a>{" "}
              ·{" "}
              <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=wardrobe+moisture+absorber&tag=resinaroamzn-21">
                moisture absorbers
              </a>{" "}
              ·{" "}
              <a className="underline text-green-800" rel="nofollow sponsored" href="https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21">
                draft excluder
              </a>
              .
            </p>
          </div>
        </section>

        {/* Move-out strategy */}
        <section id="moveout" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Move-out strategy (start on move-in day)</h2>
          <p className="text-sm mb-3">
            The best way to keep your deposit is to plan from day one. Create a “before/after” folder now; add receipts for
            strips, felt pads, and any landlord-approved paint. Future-you will thank you.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">What to save</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Photos of each room on move-in day (labelled). Add new photos if you report issues.</li>
                <li>Receipts/packaging for Command strips, pads, cleaning items—proves deposit-safe choices.</li>
                <li>Any landlord communications or approvals (keep in one email thread).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Two-week countdown (later)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remove all strips/hooks carefully (pull straight down).</li>
                <li>Fill tiny pinholes if you drilled with permission; paint only with agreed paint.</li>
                <li>Deep-clean kitchen/bathroom; descale taps; mop skirtings and corners.</li>
                <li>Final photos mirroring move-in angles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/warmth-energy-savers-uk">
                Stay Warm, Spend Less: Energy-Saving Comfort Picks
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/power-adapters-uk-italy">
                Plugs, Adapters & Power: Italy ↔ UK Without the Sparks
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ (onsite) */}
        <section id="faq" className="mt-10 bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Frequently asked questions</h2>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Which cleaners are safest for painted walls?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Use a lightly damp microfibre and a neutral cleaner diluted per label. Test behind furniture first. Avoid
              magic erasers on matte paint—they can burnish or lighten patches.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">How do I clean grout without damaging it?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Use a soft brush and a non-abrasive bathroom cleaner. Rinse and dry. For tough build-up, repeat over days
              rather than scrubbing hard once.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">The extractor fan is weak—what now?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Clean the grill, then test with a tissue to see if it draws. If still weak or noisy, report to the landlord—
              proper ventilation is essential for damp prevention.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Can I steam-clean laminate floors?</summary>
            <div className="mt-2 text-sm text-gray-700">
              Avoid steam on laminate—it can cause swelling at joints. Use a flat mop with a slightly damp pad and a mild
              cleaner.
            </div>
          </details>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Some links may earn us a small commission at no extra cost to you. It helps keep guides like this free and
          updated for the community.
        </p>

        {/* JSON-LD scripts */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </main>
  );
}
