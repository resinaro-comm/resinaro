// src/app/community/buying-in-bulk-uk-italian-staples/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Save Money in the UK: Buy Italian Staples in Bulk (Smart Storage, Real Prices, Zero Waste Tips)",
  description:
    "A practical guide to bulk-buying Italian pantry essentials in the UK—what to buy, how to store it in small flats, and how to split costs with friends. Includes price targets, shelf life, and affiliate product ideas.",
  alternates: { canonical: "/community/buying-in-bulk-uk-italian-staples" },
  openGraph: {
    title:
      "Save Money in the UK: Buy Italian Staples in Bulk (Italian Pantry Guide)",
    description:
      "Bulk-buy Italian essentials without wasting food: pasta, rice, passata, EVOO, tuna, coffee, beans and storage tips for small kitchens.",
    url: "https://www.resinaro.com/community/buying-in-bulk-uk-italian-staples",
    type: "article",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Italian items are worth buying in bulk in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dry pasta, rice (Carnaroli/Arborio), passata/tinned tomatoes, tuna in olive oil, dried beans, coffee, and olive oil in tins offer reliable savings when bought in multi-packs or large formats.",
        },
      },
      {
        "@type": "Question",
        name: "How do I store bulk items in a small flat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Decant into airtight containers or zip bags, keep away from heat and light, and label with open dates. For oil, choose tins and pour into a small dark bottle for daily use.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to buy passata or tomatoes in multi-packs?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—unopened bottles/cans keep for many months. After opening, refrigerate and use promptly; or choose 200–400 g formats if you cook for one.",
        },
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 mb-6 overflow-hidden rounded-xl">
          <Image
            src="/images/bulkessentials.png"
            alt="Italian Staples in Bulk"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700 text-white shadow-sm">
              LIFESTYLE
            </div>
          </div>
        </div>

        {/* Title */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
            Save Money in the UK: Buy Italian Staples in Bulk
          </h1>
          {/* Publication info */}
          <div className="flex items-center text-sm text-gray-600 mb-4 mt-2">
            <span>Published: October 4, 2025</span>
            <span className="mx-2">•</span>
            <span>By Resinaro Team</span>
          </div>
          <p className="mt-3 text-lg text-gray-700">
            New city, new prices—same appetite. If you miss Italy&apos;s cupboard
            comfort but live with a tight budget or a tiny kitchen, this guide
            is for you. Below you&apos;ll find{" "}
            <strong>bulk items that actually save money</strong>,{" "}
            <strong>realistic storage tips for small flats</strong>, and{" "}
            <strong>links</strong> to formats that work for solos, couples or
            house-shares. Think of this as advice from a friend who&apos;s already
            moved, tested brands, and learned where not to waste a pound.
          </p>
        </header>

        {/* On-page nav */}
        <nav
          aria-label="On-page"
          className="mb-8 bg-white border border-gray-200 rounded-lg p-4 text-sm"
        >
          <ul className="flex flex-wrap gap-4">
            <li>
              <a className="underline text-green-900" href="#what-to-buy">
                What to buy in bulk
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#storage">
                Storage tips for small kitchens
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#price-targets">
                Price targets (is it a good deal?)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#mini-meal-ideas">
                10-minute meal ideas
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#split-costs">
                Split with friends
              </a>
            </li>
          </ul>
        </nav>

        {/* WHAT TO BUY */}
        <section id="what-to-buy" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            What to buy in bulk (smart formats that won&apos;t spoil)
          </h2>

          {/* Pasta */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              1) Bronze-cut pasta: 6–12 pack
            </h3>
            <p className="mt-1">
              Pasta is the inflation-proof friend that always shows up. Buying a
              <strong> 6–12 pack</strong> of quality bronze-cut shapes saves
              money and lifts your weekday food from &quot;fine&quot; to &quot;proper&quot;.
            </p>
            <p className="text-sm mt-2">
              Short shape:{" "}
              <a
                href="https://www.amazon.co.uk/s?k=rummo+rigatoni+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Rummo rigatoni multi-pack
              </a>{" "}
              · Long shape:{" "}
              <a
                href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                De Cecco spaghetti multi-pack
              </a>
            </p>
          </article>

          {/* Rice */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              2) Carnaroli/Arborio rice: 2–5 kg
            </h3>
            <p className="mt-1">
              Buy once, stir often. Large bags reduce price per portion and keep
              for months in an airtight tub.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=carnaroli+rice+5kg&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Carnaroli 5 kg
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=arborio+rice+5kg&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Arborio 5 kg
              </a>
            </p>
          </article>

          {/* Tomatoes / Passata */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              3) Passata / tinned tomatoes: cases & smaller bottles
            </h3>
            <p className="mt-1">
              Multi-packs are cheaper; for solo cooks, choose{" "}
              <strong>smaller bottles (200–400 g)</strong> so none goes to
              waste.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=mutti+passata+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Mutti passata multi-pack
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=san+marzano+tomatoes+case&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                San Marzano case (treat)
              </a>
            </p>
          </article>

          {/* EVOO */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              4) Extra-virgin olive oil: 3–5 L tin + small dark bottle
            </h3>
            <p className="mt-1">
              Tins give the best €/L. Decant into a <strong>dark 250–500 ml</strong>{" "}
              bottle for everyday use and store the tin cool and away from
              light.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+tin+5l&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                3–5 L EVOO tins
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=dark+olive+oil+bottle+with+pourer&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Dark pourer bottle
              </a>
            </p>
          </article>

          {/* Tuna */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              5) Tuna in olive oil: 6–12 tins
            </h3>
            <p className="mt-1">
              Shelf-stable protein that tastes like home and rescues late-night
              dinners.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=rio+mare+tuna+olive+oil+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Rio Mare multi-pack
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=asdomar+tuna+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                ASdoMAR multi-pack
              </a>
            </p>
          </article>

          {/* Coffee */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              6) Coffee for moka: 6-pack tins or 1 kg bags
            </h3>
            <p className="mt-1">
              If you brew with a moka, stick to moka grind for balanced flavour.
              Bulk saves 15–30% vs single tins.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=illy+classico+moka+pack&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Illy Classico (moka) multi-pack
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+6+pack+moka&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Lavazza Rossa (moka) 6-pack
              </a>
            </p>
          </article>

          {/* Beans / Lentils */}
          <article className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-green-800">
              7) Cannellini/borlotti & lentils: trays or 500 g x 6
            </h3>
            <p className="mt-1">
              Rotate between tins (ready in 2 minutes) and dry (cheaper per
              portion). Batch-cook, then freeze in flat bags if you&apos;ve got a
              freezer corner.
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.amazon.co.uk/s?k=cannellini+beans+pack+of+12&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Cannellini tray
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=borlotti+beans+pack+of+12&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Borlotti tray
              </a>{" "}
              ·{" "}
              <a
                href="https://www.amazon.co.uk/s?k=italian+lentils+500g+pack+of+6&tag=resinaroamzn-21"
                rel="nofollow sponsored"
                className="text-green-700 underline"
              >
                Dry lentils 500 g x 6
              </a>
            </p>
          </article>
        </section>

        {/* STORAGE */}
        <section id="storage" className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            Storage tips for small kitchens (no pantry? no problem)
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Decant & label:</strong> Use airtight tubs or zip bags;
              add the open date. Keeps pasta crisp and rice dry.
            </li>
            <li>
              <strong>Hide in plain sight:</strong> Slide flat storage boxes
              under the bed/sofa; use wardrobe top shelves for sealed goods.
            </li>
            <li>
              <strong>Oil strategy:</strong> Keep tins cool and dark. Pour 1–2
              weeks&apos; worth into a <em>dark glass bottle</em> and store the tin
              away from light.
            </li>
            <li>
              <strong>Single-serve tomatoes:</strong> If you cook for one,
              smaller bottles stop waste—and cost less than binning half a jar.
            </li>
            <li>
              <strong>Clip & seal:</strong> Cheap bag clips make a bigger
              difference than you think.
            </li>
          </ul>
          <p className="text-sm mt-3">
            Handy gear:{" "}
            <a
              href="https://www.amazon.co.uk/s?k=airtight+food+storage+containers+set&tag=resinaroamzn-21"
              rel="nofollow sponsored"
              className="text-green-700 underline"
            >
              airtight container sets
            </a>{" "}
            ·{" "}
            <a
              href="https://www.amazon.co.uk/s?k=bag+clips+food&tag=resinaroamzn-21"
              rel="nofollow sponsored"
              className="text-green-700 underline"
            >
              bag clips
            </a>{" "}
            ·{" "}
            <a
              href="https://www.amazon.co.uk/s?k=dark+glass+bottle+olive+oil+pourer&tag=resinaroamzn-21"
              rel="nofollow sponsored"
              className="text-green-700 underline"
            >
              dark oil bottle
            </a>
          </p>
        </section>

        {/* PRICE TARGETS */}
        <section id="price-targets" className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900">
            How to know if it&apos;s a good deal (quick price targets)
          </h2>
          <p className="mt-2">
            Prices move, so think in <strong>per-kg</strong> or{" "}
            <strong>per-litre</strong> terms:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 mt-4">
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>Pasta (bronze-cut)</strong>: aim ≤ £2.00/kg on multi-packs.
            </li>
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>Carnaroli/Arborio</strong>: ≤ £3.50/kg on 5 kg bags.
            </li>
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>Passata/tomatoes</strong>: ≤ £1.20 per 400 g can or
              equivalent.
            </li>
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>EVOO (tin)</strong>: £6–£9/L depending on origin/IGP.
            </li>
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>Tuna in olive oil</strong>: ~£1.10–£1.60 per 80–100 g tin
              in 6–12 packs.
            </li>
            <li className="p-3 bg-neutral-50 rounded border">
              <strong>Coffee (moka)</strong>: compare by 100 g; multi-pack tins
              usually save 15–30%.
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            Tip: add items to a wish-list and watch during sales; subscribe &
            save can help if you truly use it monthly—otherwise skip.
          </p>
        </section>

        {/* MINI MEAL IDEAS */}
        <section id="mini-meal-ideas" className="mt-10">
          <h2 className="text-2xl font-bold text-green-900">
            10–15 minute meals from your bulk stash
          </h2>
          <div className="space-y-4 mt-3">
            <div>
              <h3 className="font-semibold">Rigatoni al tonno</h3>
              <p>
                Warm EVOO + garlic, add a spoon of passata and chilli. Toss with
                rigatoni and tuna. Finish with good oil.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Carnaroli &quot;quick risotto&quot;</h3>
              <p>
                Toast rice in EVOO, add hot water/stock gradually, finish with
                herbs and lemon zest. Pantry luxury, no fuss.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Pasta e fagioli (fast)</h3>
              <p>
                Cannellini + passata + rosemary + pasta shapes in one pot. Salt,
                pepper, and a thread of EVOO at the end.
              </p>
            </div>
          </div>
        </section>

        {/* SPLIT COSTS */}
        <section id="split-costs" className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-900">
            Save even more: split bulk with friends
          </h2>
          <p className="mt-2">
            Make a small WhatsApp group with housemates or neighbours. Bulk
            packs become cheaper and you won&apos;t drown in tins. Keep a shared note
            with who took what and the per-unit price.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Buy one EVOO tin; split into labelled bottles.</li>
            <li>Share a 12-pack of tomatoes; each person takes 3–4.</li>
            <li>Rotate: one person orders this month, another next month.</li>
          </ul>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/italian-essentials">
                New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
              </Link>
            </li>
          </ul>
        </section>

        {/* Affiliate disclaimer */}
        <footer className="mt-12 border-t border-gray-200 pt-4 text-xs text-gray-500 italic">
          Some links may earn us a small commission at no extra cost to you.
          Your support keeps community guides like this free. Grazie. 💚
        </footer>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}