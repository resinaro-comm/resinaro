// app/community/uk-desk-setup-newcomers/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Work & Study: Compact UK Desk Setup That Feels Pro",
  description:
    "A practical, landlord-friendly guide to building a focused workspace in a UK rental: posture, lighting, noise control, power safety, and budget tiers—plus links to affordable tools.",
  alternates: { canonical: "/community/uk-desk-setup-newcomers" },
};

export default function Page() {
  // FAQ & HowTo JSON-LD for richer SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does Resinaro care about desk setups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Because a stable, comfortable workspace helps migrants settle faster—whether you are job-hunting, studying for qualifications, or taking remote consulate calls. A calm desk is a force multiplier for everything else on our site: benefits forms, AIRE updates, consulate bookings."
        }
      },
      {
        "@type": "Question",
        "name": "What’s the minimum to fix posture without buying a new desk or chair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Raise your laptop to eye level with a stand or books, use an external keyboard/mouse so elbows stay ~90°, and add a seat cushion for hip support. Warm desk lighting reduces eye strain in dim UK rooms."
        }
      },
      {
        "@type": "Question",
        "name": "How can I make this rental-safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Stick to reversible tools: freestanding or clamp lights, adhesive cable clips, surge-protected extensions, and foldable desks. Avoid drilling or anything that marks walls unless you have written permission."
        }
      },
      {
        "@type": "Question",
        "name": "What about power and adapters from Italy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Use UK Type-G plugs and BS1363 surge-protected extensions. If you brought EU devices, use a grounded EU→UK adapter and check total wattage. Keep cables tidy to avoid trip hazards in small rooms."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Set up a focused UK rental workspace in 20 minutes",
    "totalTime": "PT20M",
    "step": [
      { "@type": "HowToStep", "name": "Raise screen", "text": "Use a laptop stand (or books) so the top of the screen is roughly at eye level." },
      { "@type": "HowToStep", "name": "Neutral arms", "text": "Plug in a keyboard and mouse; keep elbows ~90° with forearms parallel to the desk." },
      { "@type": "HowToStep", "name": "Warm light", "text": "Add a desk lamp with a warm bulb (2700–3000K) angled away from your eyes." },
      { "@type": "HowToStep", "name": "Power & safety", "text": "Use a surge-protected extension; tidy cables with adhesive clips so they don’t snag." },
      { "@type": "HowToStep", "name": "Noise zone", "text": "Put on noise-isolating headphones; place your mic away from the laptop fan." }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/Logo.jpg" // Swap for a cosy, realistic home-office hero when ready
            alt="Compact desk setup for UK rentals"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">WORK</div>
            <h1 className="text-2xl md:text-4xl font-bold">Work & Study: Compact UK Desk Setup That Feels Pro</h1>
          </div>
        </div>

        {/* Why this matters for Resinaro users */}
        <section className="mb-8">
          <div className="bg-white border rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Why this guide — and why now</h2>
            <p className="mb-3">
              If you’ve just landed in the UK (or moved rooms again), your “desk” might be a tiny table next to a cold window. Yet life happens here:
              job interviews on Zoom, coursework, benefits applications, consular emails. At Resinaro we see the pattern—people get more done,
              feel less overwhelmed, and save money on cafés once their space works for them.
            </p>
            <p className="text-sm text-gray-700">
              Below is a no-nonsense blueprint for renters and shared houses: posture that doesn’t wreck your back, lighting that makes late-night
              forms easier, noise control for calls, safe power, and three budget paths. All picks are reversible and landlord-friendly.
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#quickstart">20-minute quickstart</a></li>
            <li><a className="underline text-green-900" href="#essentials">Core essentials (with links)</a></li>
            <li><a className="underline text-green-900" href="#budgets">Three budgets that make sense</a></li>
            <li><a className="underline text-green-900" href="#layout">Small-space layout & noise</a></li>
            <li><a className="underline text-green-900" href="#power">Power, adapters & safety</a></li>
            <li><a className="underline text-green-900" href="#checklist">Printable checklist</a></li>
          </ul>
        </nav>

        {/* Quickstart */}
        <section id="quickstart" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Quickstart: feel better in 20 minutes</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li><strong>Raise the screen:</strong> Laptop stand or a stack of books until the top bezel is at eye height.</li>
            <li><strong>Neutral arms:</strong> External keyboard & mouse so elbows sit ~90° and shoulders relax.</li>
            <li><strong>Warm pool of light:</strong> Desk lamp with a warm bulb (2700–3000K) angled to the desk, not eyes.</li>
            <li><strong>Cable sanity:</strong> Surge-protected extension on the floor; run cables along the desk edge with adhesive clips.</li>
            <li><strong>Noise box:</strong> Noise-isolating headphones. For calls, face a wall or curtain to reduce echo.</li>
          </ol>
          <p className="mt-3 text-xs text-gray-600">Keep it reversible: no drilling, no marks, all renter-safe.</p>
        </section>

        {/* Essentials with affiliate links (preserve your tags) */}
        <section id="essentials" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Core essentials (lean, effective)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Adjustable laptop stand — posture saver (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=adjustable+laptop+stand&tag=resinaroamzn-21">popular models</a>
              )
            </li>
            <li>
              External keyboard + mouse (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=wireless+keyboard+and+mouse&tag=resinaroamzn-21">combos</a>
              )
            </li>
            <li>
              Warm desk lamp for eye comfort (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=desk+lamp+warm+light&tag=resinaroamzn-21">options</a>
              )
            </li>
            <li>
              Noise-isolating headphones (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=noise+isolating+headphones&tag=resinaroamzn-21">see picks</a>
              )
            </li>
            <li>
              Cable tidy + extension with surge protection (
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=surge+protected+extension+lead&tag=resinaroamzn-21">safe options</a>
              )
            </li>
          </ul>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Posture basics</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Top of screen ≈ eye level; viewing distance ~50–70cm.</li>
                <li>Elbows ~90°, wrists neutral, shoulders relaxed.</li>
                <li>Seat cushion before “new chair”—cheaper, huge comfort boost.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Lighting that helps</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Warm 2700–3000K bulb; avoid cold blue at night.</li>
                <li>Place lamp opposite your mouse hand to reduce shadow.</li>
                <li>Dim room light + bright desk pool = less eye fatigue.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Sound & calls</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Face soft surfaces (curtains/wardrobe) to cut echo.</li>
                <li>Mic away from laptop fan; test levels before interviews.</li>
                <li>Noise-isolating over ANC if your budget is tight.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget tiers */}
        <section id="budgets" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Three budgets that make sense</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold">£0–£50: “Fix the pain”</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Books as a stand, external keyboard/mouse (budget combo).</li>
                <li>Warm bulb for existing lamp; adhesive cable clips.</li>
                <li>Seat cushion; towel rolled as lumbar support.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold">£50–£150: “Core upgrade”</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Adjustable stand + wireless combo + clamp/compact lamp.</li>
                <li>Noise-isolating wired headphones for calls.</li>
                <li>Surge-protected extension + tidy kit.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold">£200–£400: “Pro on a budget”</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Foldable or narrow desk (80–100cm) that fits rentals.</li>
                <li>Better lamp with dimmer; mic on small stand/arm.</li>
                <li>Closed-back headphones; vertical laptop stand to save space.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Layout & noise */}
        <section id="layout" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Small-space layout & noise playbook</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold">Corner layout (shared house)</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Desk along the shorter wall; chair back to the bed for “call framing”.</li>
                <li>Curtains or wardrobe behind the webcam to soften sound.</li>
                <li>Lamp opposite mouse hand; window to your side, not behind you.</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-semibold">Window layout (tiny rooms)</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Desk perpendicular to the window—daylight without glare.</li>
                <li>Use a narrow 40–50cm deep desk; keep floor clear for airflow.</li>
                <li>Headphones always accessible; mic away from draughty window.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Power & safety */}
        <section id="power" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Power, adapters & safety (UK rentals)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Use BS1363 surge-protected extensions.</strong> Place them flat; don’t daisy-chain.</li>
            <li><strong>Grounded EU→UK adapter</strong> if you brought Italian gear; check total wattage loads.</li>
            <li><strong>Cable routing:</strong> along desk edges with adhesive clips; avoid crossing walk paths.</li>
            <li><strong>Moisture & heaters:</strong> keep cables clear of radiators and hot-water bottles.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">Interview tip: plug your laptop directly into a surge-protected extension to avoid battery drain mid-call.</p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">5-minute checklist before interviews/classes</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Top of screen at eye height; camera clean; frame free of clutter.</li>
            <li>Lamp on, warm tone; blinds angled to kill glare.</li>
            <li>Headphones connected; mic test; notifications off.</li>
            <li>Laptop on power; extension reachable; phone on silent.</li>
            <li>Water within reach; documents open; door closed.</li>
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
              <Link className="underline text-green-900" href="/community/italian-essentials">
                New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
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
