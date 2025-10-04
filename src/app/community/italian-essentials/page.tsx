import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)",
  description:
    "Essential Italian pantry staples for UK living — shelf-stable ingredients, no fridge required. Perfect for shared kitchens, temporary accommodation or small flats.",
  alternates: {
    canonical: "/community/italian-essentials",
  },
};

export default function Page() {
  // Optional: basic Article + FAQ schema for richer snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)",
    description:
      "Shelf-stable Italian staples for life in the UK, plus 10–15 minute recipes, storage hacks, and budget tips for shared kitchens and temporary stays.",
    author: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.resinaro.com/community/italian-essentials" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I build a tasty Italian pantry in the UK without a fridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Focus on shelf-stable staples (pasta, passata, beans, tuna, EVOO) and add flavour with herbs and quality tomatoes. Use small-batch shopping for anything perishable.",
        },
      },
      {
        "@type": "Question",
        name: "What should I buy first on a student or tight budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Start with pasta (one long, one short), passata or tinned tomatoes, a decent finishing EVOO, dried oregano/rosemary, and tins of tuna or beans. These five unlock fast, comforting meals.",
        },
      },
      {
        "@type": "Question",
        name: "Where do I find Italian brands in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most UK supermarkets stock Italian staples; for specific brands or formats use Italian delis, international aisles, or trusted online listings linked in this guide.",
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
            src="/images/italian-essentials.png"
            alt="Italian Cupboard Essentials"
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
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
          New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
        </h1>

        {/* Publication info */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Published: October 4, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>

        {/* Intro / empathy + who it's for */}
        <p className="mb-3">
          New place, new sockets, tiny kitchen, zero storage—but your taste buds didn’t move continent. If you’re in a
          shared house, a studio, or you’re between flats, you can still eat{" "}
          <em>vero</em> Italian with a small, smart pantry. This guide is for everyone: Italians abroad, people who
          lived in Italy for years, and anyone who just misses those bright, simple flavours.
        </p>
        <p>
          Below you’ll find a compact list of shelf-stable staples (plus two small tools) that work without a fridge,
          UK-friendly shopping notes, quick 10–15 minute recipes, and budget tips. Think of it as a friendly starter
          kit you can build in a single online basket—then cook all week.
        </p>

        {/* Mini TOC */}
        <nav className="mt-6 mb-10 bg-white border border-gray-200 rounded-lg p-4 text-sm">
          <strong className="text-green-900">What’s inside:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><a className="underline text-green-800" href="#essentials">The 12 essentials</a> (no fridge needed)</li>
            <li><a className="underline text-green-800" href="#recipes">Three 10–15 minute meals</a></li>
            <li><a className="underline text-green-800" href="#budget">Budget & dietary notes</a></li>
            <li><a className="underline text-green-800" href="#uk-tips">UK shopping & storage tips</a></li>
            <li><a className="underline text-green-800" href="#faq">Quick FAQ</a></li>
          </ul>
        </nav>

        {/* Warm context paragraph */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
          <p>
            Real life note: you don’t need to be “properly Italian” to love this list. Maybe you studied in Bologna,
            worked in Milan, or just got hooked on nonna-level pomodoro while travelling. Food is memory—and this
            cupboard brings that memory back on weeknights.
          </p>
        </div>

        <div id="essentials" className="space-y-8 mt-10">
          {/* 1. Moka pot */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              1) A stovetop moka pot
            </h2>
            <p className="mb-3">
              Still the easiest way to get that morning kick without a machine. A 3-cup size works for one or two
              people; a 6-cup keeps the flatmates happy. Packs light, lasts forever, and turns a grey morning into home.
            </p>
            <p className="text-sm">
              Try a classic like the Bialetti 3-cup (<a href="https://www.amazon.co.uk/s?k=bialetti+3+cup+moka&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">search on Amazon</a>).
              Grab spare gaskets/filters too (<a href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">gasket set</a>) so it lasts for years.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Tip: Warm the water first and don’t pack the basket—your coffee will taste rounder, less bitter.
            </p>
          </section>

          {/* 2. Moka-ground coffee */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              2) Moka-ground coffee
            </h2>
            <p className="mb-3">
              Pick a grind made for the moka—your coffee will taste rounder and less bitter. If you’re sensitive to
              caffeine, try a decaf moka grind; flavour stays, jitters go.
            </p>
            <p className="text-sm">
              Everyday: Lavazza Qualità Rossa (<a href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+moka&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">see options</a>)<br />
              Smoother: Illy Classico moka grind (<a href="https://www.amazon.co.uk/s?k=illy+classico+moka&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">see options</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Storage: keep the tin closed and away from heat; no fridge needed, just cool and dark.
            </p>
          </section>

          {/* 3. Adapter */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              3) Grounded EU→UK adapter
            </h2>
            <p className="mb-3">
              If you brought Italian appliances, a grounded Type-G adapter keeps things safe and wobble-free. Useful for
              everything from a hand blender to your laptop charger.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=eu+to+uk+adapter+grounded&type=ss&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">grounded adapter</a>)
            </p>
          </section>

          {/* 4. Bronze-cut pasta */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              4) Bronze-cut pasta (one long, one short)
            </h2>
            <p className="mb-3">
              That rough surface clings to sauce. Keep one long shape (spaghetti/linguine) and one short
              (rigatoni/fusilli). This pairing covers 90% of weeknights.
            </p>
            <p className="text-sm">
              De Cecco, Rummo, Garofalo are reliable (<a href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">De Cecco</a> · <a href="https://www.amazon.co.uk/s?k=rummo+rigatoni&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Rummo</a>).<br />
              Gluten-free: (<a href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Rummo GF</a> · <a href="https://www.amazon.co.uk/s?k=garofalo+gluten+free+pasta&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Garofalo GF</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Pantry win: decant into jars if you can—less mess, fewer moths, nicer shelves.
            </p>
          </section>

          {/* 5. Tinned tomatoes */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              5) Tinned tomatoes or passata
            </h2>
            <p className="mb-3">
              The difference between “fine” and “wow” weeknights is decent tomatoes. They’re the backbone for sauces,
              stews, and quick beans.
            </p>
            <p className="text-sm">
              Mutti is a solid bet (<a href="https://www.amazon.co.uk/s?k=mutti+passata&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Mutti passata/polpa</a>); San Marzano DOP if you want to treat yourself (<a href="https://www.amazon.co.uk/s?k=san+marzano+dop+tinned+tomatoes&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">San Marzano</a>).
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Label check: “whole peeled” or “polpa” = cleaner flavour; passata = silkiest texture.
            </p>
          </section>

          {/* 6. EVOO */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              6) Extra-virgin olive oil (for finishing)
            </h2>
            <p className="mb-3">
              Cook with your usual oil, but finish with good EVOO—peppery, green, alive. A teaspoon at the end turns
              “basic” into “restaurant.”
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=sicilian+igp+olive+oil&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Sicilian IGP</a> · <a href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+cold+extracted&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">cold-extracted EVOO</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Storage: cool, dark place; close the cap quickly to protect flavour.
            </p>
          </section>

          {/* 7. Herbs */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              7) Sea salt + dried oregano/rosemary
            </h2>
            <p className="mb-3">
              Tiny price, big lift. Oregano wakes up pizza, salads and beans; rosemary loves roast potatoes and focaccia.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=italian+oregano+dried&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">dried oregano</a> · <a href="https://www.amazon.co.uk/s?k=dried+rosemary&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">dried rosemary</a> · <a href="https://www.amazon.co.uk/s?k=sea+salt+italian&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">sea salt</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              UK swap: if you can’t find coarse sea salt, buy kosher-style flakes; it seasons more gently than table salt.
            </p>
          </section>

          {/* 8. Tuna */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              8) Tuna in olive oil
            </h2>
            <p className="mb-3">
              A proper pantry protein for pasta, salads and panini. Texture and flavour beat brine most days. Pair with
              beans or tomatoes for an instant meal.
            </p>
            <p className="text-sm">
              Look for ASdoMAR or Rio Mare in olive oil (<a href="https://www.amazon.co.uk/s?k=rio+mare+tuna+olive+oil&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Rio Mare</a> · <a href="https://www.amazon.co.uk/s?k=asdomar+tuna&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">ASdoMAR</a>).
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Sustainability tip: check MSC or brand statements if that matters to you.
            </p>
          </section>

          {/* 9. Beans */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              9) Cannellini or borlotti beans
            </h2>
            <p className="mb-3">
              Creamy, comforting, and the fastest dinner imaginable. Rinse, warm, season, done. Great with tuna, EVOO,
              and a little oregano.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=cannellini+beans+tinned&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">cannellini</a> · <a href="https://www.amazon.co.uk/s?k=borlotti+beans+tinned&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">borlotti</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Pantry hack: mash half the tin to thicken sauces without cream.
            </p>
          </section>

          {/* 10. Risotto rice */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              10) Carnaroli/Arborio risotto rice
            </h2>
            <p className="mb-3">
              Rainy-evening insurance. Carnaroli holds its bite a touch better; Arborio is easier to find. Great with
              tinned tomatoes, or just EVOO and rosemary.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=carnaroli+rice&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Carnaroli</a> · <a href="https://www.amazon.co.uk/s?k=arborio+rice&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">Arborio</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              No-stock method: simmer rice in salted water like pasta; finish with passata and EVOO.
            </p>
          </section>

          {/* 11. Pesto */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              11) Pesto Genovese (jarred)
            </h2>
            <p className="mb-3">
              The midweek lifesaver. If you’re plant-based, look for a vegan version. Loosen with hot pasta water for a
              silky dressing.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=pesto+genovese+jar&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">pesto jars</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Label check: look for basil high on the ingredients list; avoid added sugar if you can.
            </p>
          </section>

          {/* 12. Biscotti */}
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-800">
              12) Biscotti or savoiardi
            </h2>
            <p className="mb-3">
              Coffee break, guests, or a five-minute dessert. With moka coffee, they’re an instant “I’m okay here”
              moment after a long day.
            </p>
            <p className="text-sm">
              (<a href="https://www.amazon.co.uk/s?k=almond+biscotti&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">almond biscotti</a> · <a href="https://www.amazon.co.uk/s?k=savoiardi+ladyfingers&tag=resinaroamzn-21" rel="nofollow sponsored" className="text-green-700 underline">savoiardi</a>)
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Zero-fridge dessert: dip savoiardi in moka, layer with passata-sweetened mascarpone alternative or coconut yogurt (shelf-stable packs exist), dust with cocoa.
            </p>
          </section>
        </div>

        {/* Quick recipes section */}
        <section id="recipes" className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Three 10–15 minute meals with just this list
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Spaghetti al pomodoro</h3>
              <p>
                Warm EVOO with a halved garlic clove, add passata, a pinch of salt, and simmer while spaghetti cooks.
                Toss together; finish with a thread of EVOO and black pepper. <span className="text-xs text-gray-600">Want heat? A pinch of chilli flakes.</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Tuna &amp; cannellini bowl</h3>
              <p>
                Heat EVOO and garlic, add cannellini, oregano, and a splash of passata. Off the heat, fold in tuna and
                lemon zest. Eat with bread or short pasta. <span className="text-xs text-gray-600">Make ahead: great cold for lunch.</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Pesto “rescue” pasta</h3>
              <p>
                Cook rigatoni; loosen a spoon of pesto with pasta water; toss. Finish with EVOO. (Vegan? Use a dairy-free
                pesto.) <span className="text-xs text-gray-600">Add beans for extra protein.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Budget and dietary notes section */}
        <section id="budget" className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-green-900 mb-4">
              Budget vs. premium (where to spend)
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Spend a little extra:</strong> EVOO for finishing, tomatoes/passata, and tuna in olive oil.
                These lift everything.
              </li>
              <li>
                <strong>Save comfortably:</strong> Dried herbs, salt, beans, and risotto rice often taste great at
                budget level.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-green-900 mb-4">
              Dietary notes
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Vegetarian/vegan:</strong> Choose vegan pesto, use beans for protein, finish with EVOO.
              </li>
              <li>
                <strong>Gluten-free:</strong> Pick a GF pasta; risotto rice is naturally GF.
              </li>
              <li>
                <strong>Allergens:</strong> Check labels (nuts in pesto/biscotti; fish in tuna; milk in some pestos).
              </li>
            </ul>
          </div>
        </section>

        {/* UK storage & shopping extras */}
        <section id="uk-tips" className="mt-10 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-green-900 mb-3">UK shopping & storage tips (small spaces, shared kitchens)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Buy smaller formats first:</strong> 500g pasta + 1–2 jars passata + 1 small EVOO lets you test brands without waste.</li>
            <li><strong>Decant and label:</strong> Jars keep pests out and make small shelves feel calmer; add cook times to lids.</li>
            <li><strong>Stagger deliveries:</strong> If you shop online, split orders (dry goods monthly; “treat” items when on offer).</li>
            <li><strong>Shared-kitchen diplomacy:</strong> Keep everything in one crate; easy to lift off the counter and it stays yours.</li>
          </ul>
        </section>

        {/* Quick FAQ inline (mirrors JSON-LD) */}
        <section id="faq" className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Quick FAQ</h2>
          <details className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-2">
            <summary className="font-semibold cursor-pointer">Can I build a tasty Italian pantry in the UK without a fridge?</summary>
            <p className="mt-2 text-gray-700">
              Absolutely. Pasta, tomatoes, beans, tuna and good EVOO unlock dozens of meals. Shop small, cook fresh when you can.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 mb-2">
            <summary className="font-semibold cursor-pointer">What should I buy first on a tight budget?</summary>
            <p className="mt-2 text-gray-700">
              One long pasta, one passata, oregano, EVOO for finishing, and two tins (tuna or beans). You’ll eat well all week.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Where do I find Italian brands?</summary>
            <p className="mt-2 text-gray-700">
              UK supermarkets carry a lot; for specifics, use the linked options above or visit Italian delis/market stalls.
            </p>
          </details>
        </section>

        {/* Affiliate disclaimer */}
        <div className="mt-12 border-t border-gray-200 pt-4 text-xs text-gray-500 italic">
          <p>
            Some links may earn us a small commission, at no extra cost to you. It helps us keep community guides like this free.
          </p>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}
