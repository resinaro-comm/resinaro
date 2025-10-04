// app/community/moka-coffee-kit/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka, and Everyday Espresso at Home",
  description:
    "A complete, UK-friendly guide to real Italian moka coffee: what a moka (caffettiera) is, pot sizes, grind, water, heat, crema tips, spare guarnizioni (gaskets), induction hacks, milk frothing, cleaning, troubleshooting, and deposit-safe kitchen habits.",
  alternates: { canonical: "/community/moka-coffee-kit" },
  openGraph: {
    title: "The No-Machine Italian Coffee Kit (UK Edition)",
    description:
      "Everything you need for moka coffee in a UK kitchen: pot sizes, the right grind, spare gaskets, induction plates, and milk frothing for cappuccino vibes.",
    type: "article",
  },
};

export default function Page() {
  // --- Structured Data: Article + FAQ + HowTo (SEO) ---
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The No-Machine Italian Coffee Kit (UK Edition)",
    description:
      "A practical guide for Italians and Italy-lovers in the UK: brew moka like at home, choose the right size, grind and heat, care for seals, and get light, silky foam without an espresso machine.",
    datePublished: "2025-10-04",
    author: { "@type": "Organization", name: "Resinaro" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a moka (caffettiera)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The moka—also called caffettiera—brews coffee by pushing hot water through ground coffee using steam pressure (~1–2 bar). It’s the classic Italian home method for a rich, concentrated cup without a full espresso machine.",
        },
      },
      {
        "@type": "Question",
        name: "What grind do I need for moka?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use a moka-specific grind: finer than filter, coarser than espresso. Too fine tastes bitter/burnt; too coarse tastes weak/under-extracted.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a moka on induction hobs in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—use an induction-compatible moka or a small induction adapter plate. Alternatively, heat water in a kettle first and use low-to-medium heat on the plate.",
        },
      },
      {
        "@type": "Question",
        name: "How do I avoid bitter coffee?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pre-heat water in a kettle, keep the heat low, remove the moka from heat at the first ‘gurgle’, and avoid tamping the coffee. Clean the moka regularly without harsh detergents.",
        },
      },
      {
        "@type": "Question",
        name: "What spare parts should I keep?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Guarnizioni (rubber gaskets) and a spare metal filtro (filter plate). Replace the gasket when it hardens, cracks, or leaks around the rim.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make Classic Italian Moka Coffee (UK Kitchen)",
    totalTime: "PT5M",
    supply: [
      { "@type": "HowToSupply", name: "Moka pot (Bialetti or similar)" },
      { "@type": "HowToSupply", name: "Moka-ground coffee (Lavazza/Illy)" },
      { "@type": "HowToSupply", name: "Fresh water (pre-heated)" },
    ],
    tool: [{ "@type": "HowToTool", name: "Hob (gas/electric/induction with adapter)" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Fill base with hot water",
        text: "Fill to just below the safety valve using pre-heated (hot) water to reduce bitterness.",
      },
      {
        "@type": "HowToStep",
        name: "Add coffee (no tamping)",
        text: "Fill the basket level to the top; do not tamp. Brush off loose grounds from the rim.",
      },
      {
        "@type": "HowToStep",
        name: "Assemble and heat gently",
        text:
          "Screw the top on carefully (use a tea towel). Set over low-to-medium heat. Keep the lid open to watch the flow.",
      },
      {
        "@type": "HowToStep",
        name: "Stop at the first gurgle",
        text:
          "Once coffee flows honey-like and you hear the first ‘gorgoglio’, remove from heat to avoid over-extraction.",
      },
      {
        "@type": "HowToStep",
        name: "Serve and enjoy",
        text:
          "Stir the upper chamber gently to even the extraction, then pour. Add warm milk or foam if you like.",
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/mokapot.png" // Replace with a dedicated moka hero when ready
            alt="Classic aluminum caffettiera (moka) on a UK hob next to a warm mug and milk frother"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">LIFESTYLE</span>
            <h1 className="text-2xl md:text-4xl font-bold">The No-Machine Italian Coffee Kit (UK Edition)</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <span>Published: October 4, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>

        {/* Intro: Why moka, why now */}
        <section className="bg-white border rounded-xl p-6 shadow-sm mb-8">
          <p className="mb-3">
            If you grew up with a <strong>caffettiera</strong> on the stove—or you fell in love with Italian coffee after
            years in Milano, Roma or Bologna—you don’t need a machine to feel at home in the UK. The <strong>moka</strong>{" "}
            gives you that concentrated, aromatic cup that says “buongiorno” louder than any alarm clock. This guide is the
            UK edition: <em>how to choose, brew, fix</em> and <em>upgrade</em> using what’s easy to buy here, including
            induction tips and deposit-safe kitchen habits.
          </p>
          <p className="text-sm text-gray-700">
            We’ll talk sizes (<em>3 tazze</em> vs <em>6 tazze</em>), <em>macinatura moka</em> (grind), water, heat, crema
            myths, spare <em>guarnizioni</em> (gaskets), milk frothing, and cleaning—plus quick affiliate links to
            commonly used items (at no extra cost to you).
          </p>
        </section>

        {/* Contents */}
        <nav aria-label="Contents" className="mb-6">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#what-is-moka">What is a moka (caffettiera)?</a></li>
            <li><a className="underline text-green-900" href="#choose-size">Choose your moka size</a></li>
            <li><a className="underline text-green-900" href="#grind">Grind & beans (macinatura moka)</a></li>
            <li><a className="underline text-green-900" href="#water-heat">Water, heat & extraction</a></li>
            <li><a className="underline text-green-900" href="#method">90-second method (step-by-step)</a></li>
            <li><a className="underline text-green-900" href="#induction">Induction hobs (UK rentals)</a></li>
            <li><a className="underline text-green-900" href="#care">Care: gaskets, filters, cleaning</a></li>
            <li><a className="underline text-green-900" href="#milk">Milk: cappuccino vibes (no machine)</a></li>
            <li><a className="underline text-green-900" href="#troubleshoot">Troubleshooting (taste & leaks)</a></li>
            <li><a className="underline text-green-900" href="#kit">Your UK moka kit (quick picks)</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ (Italian terms & tips)</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* What is moka */}
        <section id="what-is-moka" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">What is a moka (caffettiera)?</h2>
          <p className="mb-3 text-sm">
            The <strong>moka</strong>, or <strong>caffettiera</strong>, is the iconic Italian stovetop brewer created to
            make concentrated coffee at home. It uses gentle steam pressure (~1–2 bar) to push hot water through a bed of
            coffee. The result is richer than filter coffee and less intense than café espresso—which is why it pairs
            beautifully with a <em>goccio</em> of warm milk in the morning.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Body (base)</strong>: holds water; fill to just below the safety valve.</li>
            <li><strong>Filtro (basket)</strong>: where the coffee grounds go (level, not tamped).</li>
            <li><strong>Guarnizione (gasket)</strong> + <strong>piattello</strong>: rubber seal and metal filter plate.</li>
            <li><strong>Upper chamber</strong>: collects brewed coffee; stir before pouring for even taste.</li>
          </ul>
        </section>

        {/* Choose size */}
        <section id="choose-size" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Choose your moka size (tazze)</h2>
          <p className="text-sm mb-3">
            Sizes are measured in Italian “cups” (<em>tazze</em>). A 3-cup moka makes ~120–150 ml total (two small cups or
            one generous mug with milk). A 6-cup is great for flatmates or guests.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Daily driver (3-cup)</h3>
              <p className="mb-2">
                Ideal for 1–2 people; quick heat-up; perfect for weekday mornings.
              </p>
              <p>
                Try the classic:{" "}
                <a
                  className="underline text-green-800"
                  rel="nofollow sponsored"
                  href="https://www.amazon.co.uk/s?k=bialetti+3+cup+moka&tag=resinaroamzn-21"
                >
                  Bialetti 3-cup options
                </a>{" "}
                · Keep <em>guarnizioni</em> handy:{" "}
                <a
                  className="underline text-green-800"
                  rel="nofollow sponsored"
                  href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21"
                >
                  gasket sets
                </a>
                .
              </p>
            </div>
            <div className="border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Guests & weekends (6-cup)</h3>
              <p className="mb-2">More volume, still simple to use; nice for brunch or study sessions.</p>
              <p>
                See{" "}
                <a
                  className="underline text-green-800"
                  rel="nofollow sponsored"
                  href="https://www.amazon.co.uk/s?k=bialetti+6+cup+moka&tag=resinaroamzn-21"
                >
                  6-cup picks
                </a>
                . If you often make coffee for one, consider owning both sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Grind & beans */}
        <section id="grind" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Grind & beans (macinatura moka)</h2>
          <p className="text-sm mb-3">
            The <strong>grind</strong> is everything. For moka, think: finer than filter, coarser than espresso. In UK
            supermarkets and online you’ll find ready-ground specifically labelled “moka”.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Everyday classic:{" "}
              <a
                className="underline text-green-800"
                rel="nofollow sponsored"
                href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+moka&tag=resinaroamzn-21"
              >
                Lavazza Qualità Rossa (moka grind)
              </a>
              .
            </li>
            <li>
              Smoother profile:{" "}
              <a
                className="underline text-green-800"
                rel="nofollow sponsored"
                href="https://www.amazon.co.uk/s?k=illy+classico+moka&tag=resinaroamzn-21"
              >
                Illy Classico (moka grind)
              </a>
              .
            </li>
            <li>
              Decaf for evenings:{" "}
              <a
                className="underline text-green-800"
                rel="nofollow sponsored"
                href="https://www.amazon.co.uk/s?k=decaf+moka+coffee&tag=resinaroamzn-21"
              >
                decaf moka options
              </a>
              .
            </li>
            <li>
              Want to grind fresh? Look for “moka” setting on a burr grinder or dial slightly coarser than espresso.
            </li>
          </ul>
          <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
            <strong>Signs your grind is off:</strong> bitter/ashy = too fine or overheated; sour/weak = too coarse or
            under-extracted. Adjust grind <em>and</em> heat.
          </div>
        </section>

        {/* Water & heat */}
        <section id="water-heat" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Water, heat & extraction</h2>
          <p className="text-sm mb-3">
            UK tap water varies. If your kettle leaves heavy limescale, try filtered water for cleaner flavour. And heat
            gently—moka loves patience.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Fill to valve:</strong> Keep water just below the safety valve—never cover it.</li>
            <li>
              <strong>Pre-heat water:</strong> Use hot water from the kettle in the base; this cuts time on the hob and avoids
              “cooked” flavours.
            </li>
            <li><strong>Low-to-medium heat:</strong> A slow, steady flow tastes best.</li>
            <li><strong>Stop at first gurgle:</strong> Remove from heat as soon as the flow thins and sputters.</li>
          </ul>
        </section>

        {/* Method */}
        <section id="method" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">90-second method (step-by-step)</h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>Pre-heat:</strong> Boil the kettle. Fill the base up to the valve.</li>
            <li><strong>Basket:</strong> Add moka grind to the basket—level to the rim, no tamp.</li>
            <li><strong>Assemble:</strong> Wipe loose grounds off the rim. Carefully screw closed using a cloth.</li>
            <li><strong>Heat:</strong> Lid open, low-medium heat. Watch for smooth, honey-like flow.</li>
            <li><strong>Stop:</strong> At the first gurgle, remove from heat. Stir the top chamber gently, then pour.</li>
            <li><strong>Serve:</strong> Enjoy neat or with warm milk. Sweeten to taste.</li>
          </ol>
          <p className="text-xs text-gray-600 mt-2">Safety: never brew with a blocked spout or a damaged valve.</p>
        </section>

        {/* Induction */}
        <section id="induction" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Induction hobs (UK rentals): 3 ways</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Buy induction-ready moka</strong>: Some models have a ferromagnetic base.
            </li>
            <li>
              <strong>Use an adapter plate</strong>: A small{" "}
              <a
                className="underline text-green-800"
                rel="nofollow sponsored"
                href="https://www.amazon.co.uk/s?k=induction+adapter+plate+coffee+maker&tag=resinaroamzn-21"
              >
                induction adapter plate
              </a>{" "}
              under your moka.
            </li>
            <li>
              <strong>Kettle pre-heat + brief hob time</strong>: Pre-heat water, assemble, then heat gently just to extract.
            </li>
          </ul>
        </section>

        {/* Care */}
        <section id="care" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Care: guarnizioni, filters & cleaning</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Spare parts</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Guarnizioni (gaskets)</strong>: replace if cracked/hard or if coffee leaks around the rim.{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21"
                  >
                    gasket sets
                  </a>
                  .
                </li>
                <li>
                  <strong>Filtro (filter plate)</strong>: keep a spare; replace if warped or clogged.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Cleaning routine</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rinse with warm water; avoid strong detergents that strip coffee oils completely.</li>
                <li>Dry fully with a towel; leave open to air-dry to prevent smells.</li>
                <li>Occasional deep clean: soak metal parts in warm water + a tiny drop of mild soap; rinse thoroughly.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Do not put classic aluminum moka in the dishwasher; it can dull the finish and affect taste.
          </p>
        </section>

        {/* Milk frothing */}
        <section id="milk" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Milk: cappuccino vibes (no machine)</h2>
          <p className="text-sm mb-3">
            You don’t need a steam wand to get café-style foam. A small frother and a saucepan work wonders.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Handheld frother:</strong>{" "}
              <a
                className="underline text-green-800"
                rel="nofollow sponsored"
                href="https://www.amazon.co.uk/s?k=handheld+milk+frother&tag=resinaroamzn-21"
              >
                simple frothers
              </a>{" "}
              make microfoam quickly. Heat milk to ~60–65°C (hot but not boiling), then froth 10–20 seconds.
            </li>
            <li>
              <strong>Small jug/pot:</strong> warm milk on low heat; swirl to polish the foam.
            </li>
            <li>
              <strong>Oat/soy/almond:</strong> pick “barista” versions; they foam more consistently.
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshoot" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Troubleshooting (taste & leaks)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Taste issues</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Bitter/ashy:</strong> grind too fine, heat too high, or left too long on heat.</li>
                <li><strong>Watery/weak:</strong> grind too coarse, not enough coffee, or heat too low to extract.</li>
                <li><strong>Metallic note:</strong> new moka—brew a few “seasoning” cycles; avoid harsh soaps.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">Leaks & sputters</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check the <strong>guarnizione</strong>: replace if stiff/cracked.</li>
                <li>Ensure rim is clean; no grounds on the thread; screw firmly but not brutal.</li>
                <li>Confirm the safety valve is clean and moves freely.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kit picks */}
        <section id="kit" className="bg-white border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Your UK moka kit (quick, compact picks)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Brewing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Moka (3-cup daily driver):{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=bialetti+3+cup+moka&tag=resinaroamzn-21"
                  >
                    options
                  </a>
                </li>
                <li>
                  Moka (6-cup weekends/guests):{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=bialetti+6+cup+moka&tag=resinaroamzn-21"
                  >
                    options
                  </a>
                </li>
                <li>
                  Induction adapter plate:{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=induction+adapter+plate+coffee+maker&tag=resinaroamzn-21"
                  >
                    see picks
                  </a>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Coffee & care</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Moka grind coffee:{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+moka&tag=resinaroamzn-21"
                  >
                    Lavazza
                  </a>{" "}
                  ·{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=illy+classico+moka&tag=resinaroamzn-21"
                  >
                    Illy
                  </a>
                </li>
                <li>
                  Spare gaskets/filters:{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21"
                  >
                    sets
                  </a>
                </li>
                <li>
                  Handheld milk frother:{" "}
                  <a
                    className="underline text-green-800"
                    rel="nofollow sponsored"
                    href="https://www.amazon.co.uk/s?k=handheld+milk+frother&tag=resinaroamzn-21"
                  >
                    simple frothers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-600">
            Affiliate note: some links may earn us a small commission at no extra cost to you—helps keep community guides
            free.
          </div>
        </section>

        {/* FAQ with Italian terms */}
        <section id="faq" className="bg-white border rounded-xl p-6 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">FAQ (Italian terms & UK realities)</h2>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Moka vs Brikka vs espresso machine?</summary>
            <div className="mt-2 text-sm">
              <p className="mb-2">
                <strong>Moka</strong>: stovetop classic; smooth, concentrated coffee with minimal gear.{" "}
                <strong>Brikka</strong>: moka variant with a valve designed to build slightly more pressure; some cups show
                a light “crema”. <strong>Espresso machine</strong>: higher pressure (9+ bar), denser crema, more gear and
                maintenance.
              </p>
              <p>
                For UK rentals and small kitchens, moka is the best balance of price, flavour and portability.
              </p>
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Why shouldn’t I tamp moka coffee?</summary>
            <div className="mt-2 text-sm">
              Tamping increases resistance; with moka’s lower pressure, this can choke the flow, overheat the base, and
              make bitter coffee. Keep the bed level and loose.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">How do I get “crema” with moka?</summary>
            <div className="mt-2 text-sm">
              Moka isn’t espresso; a thick crema isn’t guaranteed. A <strong>Brikka</strong> or very fresh coffee may
              produce a light foam. Focus on flavour and texture—gentle heat and a correct grind are your best friends.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">What about limescale in UK water?</summary>
            <div className="mt-2 text-sm">
              In hard-water areas, consider filtered water for better taste and slower buildup. Descale your kettle
              periodically; keep the moka clean and fully dry between uses.
            </div>
          </details>

          <details className="mb-3 bg-neutral-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer">Can I put my moka in the dishwasher?</summary>
            <div className="mt-2 text-sm">
              Avoid dishwashers with classic aluminum moka—they can dull and affect taste. Hand-rinse, towel-dry, and
              air-dry open.
            </div>
          </details>
        </section>

        {/* Related */}
        <section id="related" className="mt-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/italian-essentials">
                New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/buying-in-bulk-uk-italian-staples">
                Save Money in the UK: Buy Italian Staples in Bulk
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/starter-uk-kitchen-italian">
                Tiny UK Kitchen, Big Italian Flavour: Starter Kit
              </Link>
            </li>
          </ul>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Some links may earn us a small commission, at no extra cost to you. It helps us keep Guides like this free for
          the community.
        </p>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      </div>
    </main>
  );
}
