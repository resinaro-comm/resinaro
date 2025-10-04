// app/community/starter-uk-kitchen-italian/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
  description:
    "Turn a small UK rental kitchen into a reliable Italian cooking station. Smart tools, space-saving layouts, airtight storage, beginner-to-pro upgrades, 15-minute recipes, cleaning & safety, and money-saving buys.",
  alternates: { canonical: "/community/starter-uk-kitchen-italian" },
};

export default function Page() {
  // --- SEO: FAQ + HowTo + ItemList (rich snippets) ---
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Resinaro writing about kitchens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Because settling in the UK isn’t just paperwork. A tiny, workable kitchen helps new arrivals eat well, save money, and feel at home. This guide is the counterpart to our consular help—practical, stress-reducing advice you can use today."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cook good Italian food without buying everything?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Start with one pan, one pot, a decent knife, and airtight storage. Add tools only when your cooking needs demand them. We show an Essentials → Core → Plus pathway that fits any budget."
        }
      },
      {
        "@type": "Question",
        "name": "What if I’m sharing a kitchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Use a labelled box system and stackable airtight containers. Keep your kit portable (folding colander, roll-up mat). Choose a non-stick pan with a lid and an induction-friendly pot so you’re covered in most rentals."
        }
      },
      {
        "@type": "Question",
        "name": "How do I keep costs down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Buy multi-use tools, choose bronze-cut pasta on sale, use passata multipacks, and store properly so nothing spoils. This guide links to budget and reliable picks—no fluff."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Set up a compact Italian cooking station in a UK rental",
    "totalTime": "PT30M",
    "step": [
      { "@type": "HowToStep", "name": "Claim a shelf", "text": "Pick one cupboard shelf you can fully control. Add two labelled bins: ‘Pantry’ and ‘Tools’." },
      { "@type": "HowToStep", "name": "Assemble the essentials", "text": "Non-stick sauté pan (20–24 cm) with lid, 5–6 L pot, knife + board, colander, microplane, tongs, wooden spoon." },
      { "@type": "HowToStep", "name": "Stock pantry heroes", "text": "Bronze-cut pasta (long + short), passata, EVOO for finishing, dried oregano/rosemary, beans, tuna in oil, sea salt." },
      { "@type": "HowToStep", "name": "Add airtight storage", "text": "Use stackable containers for pasta, flour, coffee, and snacks. Label with open dates." },
      { "@type": "HowToStep", "name": "Cook a first meal", "text": "15-minute pomodoro or tuna-cannellini: simple, morale-boosting, and budget friendly." }
    ]
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Italian Kitchen Starter Items",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "20–24 cm non-stick sauté pan" },
      { "@type": "ListItem", "position": 2, "name": "6 L pasta/stock pot (induction-friendly)" },
      { "@type": "ListItem", "position": 3, "name": "Chef’s knife + chopping board" },
      { "@type": "ListItem", "position": 4, "name": "Colander (collapsible) + microplane" },
      { "@type": "ListItem", "position": 5, "name": "Airtight food storage set (stackable)" }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/starterkitchen.png" // replace when your hero image is ready
            alt="Compact Italian kitchen setup for UK rentals"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">KITCHEN</span>
            <h1 className="text-2xl md:text-4xl font-bold">Tiny UK Kitchen, Big Italian Flavour: Starter Kit</h1>
          </div>
        </div>

        {/* Intro */}
        <section className="bg-white border rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span>Published: October 7, 2025</span>
            <span className="mx-2">•</span>
            <span>By Resinaro Team</span>
          </div>

          <p className="mb-3">
            New place, tiny hob, mystery oven, two forks—still hungry for proper pasta? This is the guide we wish we had
            when we arrived in the UK: a practical, budget-aware setup that turns a rented corner into a reliable Italian
            cooking station. No kitchen islands. No 20-gadget lists. Just the tools and pantry heroes that do real work.
          </p>
          <p className="text-sm text-gray-700">
            Why on Resinaro? Because food is part of settling in. A warm bowl of pasta after a long day of paperwork can
            reset your mood and your budget. Below: starter gear, smart layouts, what to buy first, what to skip, and
            three ultra-fast meals that always deliver.
          </p>
        </section>

        {/* Table of contents */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#path">Starter Path: Essentials → Core → Plus</a></li>
            <li><a className="underline text-green-900" href="#tools">Tools that punch above their weight</a></li>
            <li><a className="underline text-green-900" href="#storage">Airtight storage & small-space layout</a></li>
            <li><a className="underline text-green-900" href="#pantry">Pantry heroes (and what to skip)</a></li>
            <li><a className="underline text-green-900" href="#recipes">Three 15-minute recipes, step-by-step</a></li>
            <li><a className="underline text-green-900" href="#budget">Budget, bulk & substitutions</a></li>
            <li><a className="underline text-green-900" href="#clean">Cleaning, care & safety (UK rentals)</a></li>
            <li><a className="underline text-green-900" href="#allergy">Dietary & allergy notes</a></li>
            <li><a className="underline text-green-900" href="#faq">Quick FAQ</a></li>
          </ul>
        </nav>

        {/* Starter Path */}
        <section id="path" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Starter Path: Essentials → Core → Plus</h2>
          <p className="mb-4">
            Buy once, cry never. Start with Essential five, cook a week, then see what you’re missing. Only then move to Core and Plus.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essentials */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Essentials (week 1)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  20–24 cm non-stick sauté pan with lid —{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=24cm+non+stick+saute+pan&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    compare
                  </a>
                </li>
                <li>
                  5–6 L induction-friendly pot —{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=stock+pot+6l&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    options
                  </a>
                </li>
                <li>
                  Chef’s knife + board set —{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=chef+knife+and+chopping+board+set&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    budget picks
                  </a>
                </li>
                <li>
                  Collapsible colander + microplane —{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=collapsible+colander&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    colanders
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    microplanes
                  </a>
                </li>
                <li>
                  Airtight storage set (stackable) —{" "}
                  <a
                    href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21"
                    className="underline text-green-800" rel="nofollow sponsored"
                  >
                    sets
                  </a>
                </li>
              </ul>
            </div>

            {/* Core */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Core (month 1)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Heatproof tongs & wooden spoon</li>
                <li>Small paring knife + peeler</li>
                <li>Digital scale & measuring jug</li>
                <li>Oven tray + reusable baking sheet</li>
                <li>Clip-on thermometer (sauces & frying)</li>
              </ul>
            </div>

            {/* Plus */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Plus (when you cook weekly)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Cast-aluminium casserole (holds heat, lighter than cast iron)</li>
                <li>Stick blender (soups, sauces, pesto)</li>
                <li>Salad spinner (doubles as colander/bowl)</li>
                <li>Mini food processor (pesto, pangrattato)</li>
                <li>Glass containers (leftovers; microwave-safe)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools that punch above their weight */}
        <section id="tools" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Tools that punch above their weight</h2>
          <p className="mb-3">
            In a tiny kitchen, every item must earn its space. These are the small upgrades that dramatically improve results:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Microplane:</strong> turns hard cheese, lemon zest, and garlic into flavour without bulk. (See{" "}
              <a href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">microplanes</a>)
            </li>
            <li>
              <strong>Digital scale:</strong> consistent pasta and risotto portions; zero waste.
            </li>
            <li>
              <strong>Clip-on thermometer:</strong> control for frying, sugar syrup, and dairy sauces—no guesswork.
            </li>
            <li>
              <strong>Reusable baking sheet:</strong> roasts veg, crisped pangrattato, garlic confit—no scrubbing.
            </li>
            <li>
              <strong>Stick blender:</strong> silky tomato soup + blitzed passata in seconds; easy to store.
            </li>
          </ul>
        </section>

        {/* Storage & Layout */}
        <section id="storage" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Airtight storage & small-space layout</h2>
          <p className="mb-4">
            The fastest way to cook more (and waste less) is a clear, grab-and-go layout. Here’s a proven pattern:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">The “One Shelf, Two Bins” method</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Bin A: Pantry Heroes</strong> — pasta, passata, beans, tuna, salt, herbs.</li>
                <li><strong>Bin B: Tools</strong> — tongs, microplane, thermometer, baking sheet.</li>
                <li>Label bins with your name if sharing a kitchen.</li>
                <li>Use clear containers so you can see quantities at a glance.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Container strategy</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Tall container for spaghetti/linguine; short/wide for rigatoni.</li>
                <li>Dedicated tub for coffee; another for biscuits/snacks.</li>
                <li>Date labels on opened packs; rotate older items forward.</li>
                <li>
                  Airtight set ideas —{" "}
                  <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">compare</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pantry heroes */}
        <section id="pantry" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Pantry heroes (and what to skip)</h2>
          <p className="mb-4">
            Simple, affordable, and flexible. With these in your cupboard, dinner is always 15 minutes away.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Always stock</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Bronze-cut pasta (long + short)</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">De Cecco</a>{" "}
                  ·{" "}
                  <a href="https://www.amazon.co.uk/s?k=rummo+rigatoni&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">Rummo</a>{" "}
                  · GF:{" "}
                  <a href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">Rummo GF</a>
                </li>
                <li>
                  <strong>Passata / tinned tomatoes</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=mutti+passata&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">Mutti</a>; treat:{" "}
                  <a href="https://www.amazon.co.uk/s?k=san+marzano+dop+tinned+tomatoes&tag=resinaroamzn-21" rel="nofollow sponsored" className="underline text-green-800">San Marzano DOP</a>
                </li>
                <li>
                  <strong>EVOO (finishing)</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=sicilian+igp+olive+oil&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">Sicilian IGP</a>
                </li>
                <li>
                  <strong>Dried oregano & rosemary</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=italian+oregano+dried&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">oregano</a>{" "}
                  ·{" "}
                  <a href="https://www.amazon.co.uk/s?k=dried+rosemary&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">rosemary</a>
                </li>
                <li>
                  <strong>Cannellini / borlotti beans</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=cannellini+beans+tinned&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">cannellini</a>{" "}
                  ·{" "}
                  <a href="https://www.amazon.co.uk/s?k=borlotti+beans+tinned&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">borlotti</a>
                </li>
                <li>
                  <strong>Tuna in olive oil</strong> —{" "}
                  <a href="https://www.amazon.co.uk/s?k=rio+mare+tuna+olive+oil&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">Rio Mare</a>{" "}
                  ·{" "}
                  <a href="https://www.amazon.co.uk/s?k=asdomar+tuna&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">ASdoMAR</a>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Often not worth it (tiny kitchens)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Huge spice sets (most lose aroma before you use them)</li>
                <li>Many single-use gadgets (bulky, hard to clean)</li>
                <li>Giant bottles of opened oil (rancidity risk if light/warm)</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                Tip: buy small, high-quality items you finish quickly; store backups in opaque bins away from heat.
              </p>
            </div>
          </div>
        </section>

        {/* Recipes */}
        <section id="recipes" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Three 15-minute recipes (one pan, one pot)</h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {/* Pomodoro */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Spaghetti al Pomodoro</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Start boiling salted water (like the sea).</li>
                <li>In pan: warm EVOO + halved garlic clove, low heat.</li>
                <li>Add passata + pinch of sugar/salt. Simmer 8–10 min.</li>
                <li>Cook spaghetti; transfer to pan with a splash of pasta water.</li>
                <li>Toss; finish with EVOO, black pepper, oregano.</li>
              </ol>
              <p className="mt-2 text-gray-700">
                Upgrade: microplane a little lemon zest for brightness.
              </p>
            </div>

            {/* Tuna & beans */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Tuna & Cannellini Skillet</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Pan: EVOO + garlic; add cannellini with a splash of passata.</li>
                <li>Season with oregano and sea salt; warm through.</li>
                <li>Off heat: fold in tuna and lemon zest.</li>
                <li>Serve with bread or toss with short pasta.</li>
              </ol>
              <p className="mt-2 text-gray-700">
                Optional heat: dried chilli flakes with the garlic.
              </p>
            </div>

            {/* Zucchini & pangrattato */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Courgette + Pangrattato Pasta</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Toast breadcrumbs in pan with EVOO + rosemary; set aside.</li>
                <li>Sauté sliced courgette in same pan till golden.</li>
                <li>Toss with pasta + pasta water to make it glossy.</li>
                <li>Finish with EVOO, lemon zest, toasted crumbs.</li>
              </ol>
              <p className="mt-2 text-gray-700">
                Swap courgette for peas or mushrooms if cheaper.
              </p>
            </div>
          </div>
        </section>

        {/* Budget & Bulk */}
        <section id="budget" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Budget moves, bulk buys & UK substitutions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Where to spend</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Good passata/tomatoes—flavour multiplier.</li>
                <li>Finishing EVOO—peppery, green, alive.</li>
                <li>Pasta—bronze cut grips sauce, fewer fails.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Where to save</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Dried herbs and salt—own-brand is fine.</li>
                <li>Beans—buy multipacks when on deal.</li>
                <li>Storage—mix pricier airtight for staples with budget tubs for snacks.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Bulk-friendly links</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Pasta cases —{" "}
                  <a href="https://www.amazon.co.uk/s?k=de+cecco+case&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">shop cases</a>
                </li>
                <li>
                  Passata multipacks —{" "}
                  <a href="https://www.amazon.co.uk/s?k=mutti+passata+6+pack&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">Mutti 6–12 packs</a>
                </li>
                <li>
                  Beans 12-pack —{" "}
                  <a href="https://www.amazon.co.uk/s?k=cannellini+beans+12+pack&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">compare</a>
                </li>
                <li>
                  EVOO tins (3L) —{" "}
                  <a href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21" className="underline text-green-800" rel="nofollow sponsored">cool, dark storage</a>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">UK substitutions that work</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Shallots instead of unavailable small onions—sweeter, quick to cook.</li>
                <li>Own-brand chopped tomatoes with a dash of passata to smooth texture.</li>
                <li>Cheddar + microplane in a pinch for melt; for sharp finish, use less but finer zest.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cleaning, care, safety */}
        <section id="clean" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Cleaning, care & safety (UK rentals)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Care that extends tool life</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Non-stick pan: soft sponge only, avoid aerosol sprays, low–medium heat.</li>
                <li>Knives: wash/dry immediately; hone weekly; store in a guard or sheath.</li>
                <li>Wooden boards/spoons: handwash; oil monthly to prevent cracks.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Rental safety basics</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Extension leads: use surge protection; keep away from sinks/hobs.</li>
                <li>Induction hobs: only flat, magnetic-base cookware; avoid warping.</li>
                <li>Ventilation: open a window or run extractor when frying or boiling for long.</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            If something feels unsafe (sparks, damaged outlets), stop and inform your landlord/agent. Document issues with photos.
          </p>
        </section>

        {/* Dietary & allergy notes */}
        <section id="allergy" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Dietary & allergy notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Vegetarian/Vegan:</strong> plant pesto, beans for protein, EVOO finish for richness.</li>
            <li><strong>Gluten-free:</strong> choose GF pasta; risotto rice is naturally GF.</li>
            <li><strong>Allergens:</strong> check pesto (nuts/dairy) and tuna (fish). Always read labels.</li>
          </ul>
        </section>

        {/* Quick FAQ */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Quick FAQ</h2>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer">Do I need a full knife set?</summary>
            <p className="mt-2 text-sm">
              No. One balanced chef’s knife + a small paring knife cover 95% of tasks in small kitchens.
            </p>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer">Gas vs. induction vs. ceramic—what changes?</summary>
            <p className="mt-2 text-sm">
              Induction is fastest—use magnetic-base pans. Ceramic heats slower—be patient. Gas is responsive—watch open flames with pan handles.
            </p>
          </details>
          <details className="mb-3">
            <summary className="font-semibold cursor-pointer">What’s the best first ‘upgrade’?</summary>
            <p className="mt-2 text-sm">
              A microplane or a stick blender. Both multiply flavour/texture without taking space.
            </p>
          </details>
        </section>

        {/* Related Articles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/italian-essentials">
                New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/bulk-italian-pantry-uk">
                Save Money: Bulk Italian Pantry Buys in the UK
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/moka-coffee-kit">
                The No-Machine Italian Coffee Kit (UK Edition)
              </Link>
            </li>
          </ul>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Some links may earn us a small commission at no extra cost to you. It helps us keep community guides like this free and updated.
        </p>

        {/* JSON-LD scripts */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      </div>
    </main>
  );
}
