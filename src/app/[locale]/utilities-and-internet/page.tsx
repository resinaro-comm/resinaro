// app/[locale]/utilities-and-internet/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 21600; // 6h

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title:
    "Utilities & Internet in the UK — Energy, Water, Broadband, Mobile for Italians | Resinaro",
  description:
    "Practical UK setup guide for Italians: how to set up or switch gas, electricity, water, broadband & mobile. Price caps, deposits, prepayment, credit checks, official Ofgem/Ofcom links, moving home checklists, and support schemes.",
  alternates: { canonical: "/utilities-and-internet" },
  openGraph: {
    title:
      "Utilities & Internet in the UK — Energy, Water, Broadband, Mobile | Resinaro",
    description:
      "Step-by-step setup, switching rules, credit checks, deposits, coverage checks, contracts and exit fees—plus official links and FAQs.",
    url: "https://www.resinaro.com/utilities-and-internet",
    siteName: "Resinaro",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://www.resinaro.com/images/og-utilities.png",
        width: 1200,
        height: 630,
        alt: "Resinaro — Utilities & Internet guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Utilities & Internet in the UK — Energy, Water, Broadband, Mobile | Resinaro",
    description:
      "A clear, official-link guide for Italians moving to or living in the UK.",
    images: ["https://www.resinaro.com/images/og-utilities.png"],
  },
};

// ---------- PAGE ----------
export default function UtilitiesAndInternetPage() {
  // Re-usable external link
  const A = (props: { href: string; children: React.ReactNode }) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
    >
      {props.children}
    </a>
  );

  // Official links (grouped for maintenance)
  const links = {
    // Energy
    findEnergySupplier: "https://www.findmysupplier.energy/",
    moveInStepsOfgem:
      "https://www.ofgem.gov.uk/information-consumers/households/moving-house",
    priceCap: "https://www.ofgem.gov.uk/energy-price-cap",
    ofgemConsumer:
      "https://www.ofgem.gov.uk/information-consumers/energy-advice-households",
    priorityServices:
      "https://www.ofgem.gov.uk/information-consumers/energy-advice-households/priority-services-register",
    warmHomeDiscount: "https://www.gov.uk/the-warm-home-discount-scheme",
    coldWeatherPayment: "https://www.gov.uk/cold-weather-payment",
    smartMeters: "https://www.smartenergygb.org/en",
    epcFinder: "https://www.gov.uk/find-energy-certificate",
    grants: "https://www.gov.uk/improve-energy-efficiency",
    // Water
    waterUK: "https://www.water.org.uk/advice-for-customers/",
    findWaterSupplier:
      "https://www.ccwater.org.uk/households/find-your-supplier/",
    // Broadband & Mobile
    ofcomChecker:
      "https://checker.ofcom.org.uk/en-gb/broadband-coverage#pc=postcode",
    ofcomMobile:
      "https://checker.ofcom.org.uk/en-gb/mobile-coverage#pc=postcode",
    ofcomSpeedCode:
      "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/broadband-speeds/voluntary-codes-of-practice",
    ofcomContracts:
      "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/cancel-your-broadband-mobile-contract",
    pac: "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/switching/switching-mobile-provider-using-text",
    stac: "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/switching/switching-mobile-provider-keep-number",
    socialTariffs:
      "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/costs-and-billing/price-comparison/social-tariffs",
    autoCompensation:
      "https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/problems-and-complaints/compensation-for-broadband-and-phone-customers-when-service-goes-wrong",
    // Disputes
    energyOmbudsman: "https://www.ombudsman-services.org/sectors/energy",
    commsOmbudsman:
      "https://www.ombudsman-services.org/sectors/communications",
    // Council tax / proof of address (internal)
    councilTax: "/council-tax",
    proofOfAddress: "/proof-of-address",
  };

  // ---------- JSON-LD ----------
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Utilities & Internet in the UK — Energy, Water, Broadband, Mobile for Italians",
    description:
      "Real-world setup steps for energy, water, broadband and mobile. Official Ofgem/Ofcom resources, support schemes and switching rules.",
    mainEntityOfPage: "https://www.resinaro.com/utilities-and-internet",
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/images/logo.png",
      },
    },
    inLanguage: "en-GB",
  };

  const jsonLdHowToEnergy = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up gas/electricity when you move into a UK home",
    step: [
      {
        "@type": "HowToStep",
        name: "Find the current supplier",
        url: links.findEnergySupplier,
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "Use the official supplier finder with your address/postcode, or ask your landlord/agent.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Take opening meter readings",
        itemListElement: [
          {
            "@type": "HowToTip",
            text:
              "Photograph meters on move-in day (date/time visible). This prevents you paying for the previous occupant.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Contact the supplier",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "Provide name, move-in date, meter readings and billing address. Ask about tariff and any debt on the meter.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Choose a tariff or switch",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text:
              "You can remain on the deemed tariff or switch. Read Ofgem guidance on price caps and switching.",
          },
        ],
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I set up utilities without UK credit history?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, but suppliers may run a credit check or ask a deposit. Prepayment meters are another option in some properties.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check broadband availability at my address?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use Ofcom’s broadband checker to see available technologies (ADSL/FTTC/FTTP) and expected speeds.",
        },
      },
      {
        "@type": "Question",
        name: "What if my broadband install is delayed?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Providers signed up to Ofcom’s automatic compensation scheme must pay fixed amounts for delays, missed appointments or total loss of service.",
        },
      },
      {
        "@type": "Question",
        name: "Who supplies my water?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use Consumer Council for Water’s tool to find your regional water and sewerage company.",
        },
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resinaro", item: "https://www.resinaro.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Utilities & Internet",
        item: "https://www.resinaro.com/utilities-and-internet",
      },
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    sameAs: [
      "https://www.instagram.com/resinarouk/",
      "https://www.youtube.com/@resinaroUK",
      "https://www.tiktok.com/@resinaro.uk",
    ],
    logo: "https://www.resinaro.com/images/logo.png",
  };

  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowToEnergy) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />

      {/* ---------- HERO (light, readable, premium) ---------- */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/landscape-image.png')] bg-cover bg-center"
          style={{
            backgroundImage:
              "image-set(url('/images/landscape-image.avif') type('image/avif'), url('/images/landscape-image.webp') type('image/webp'), url('/images/landscape-image.png') type('image/png'))",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-white/88 backdrop-blur-[1px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 grid h-1 w-40 grid-cols-3 rounded-b">
          <div className="bg-[#0B5D3B]" />
          <div className="bg-white" />
          <div className="bg-[#B22222]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950">
            Utilities & Internet in the UK
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-green-900/85">
            Energy, water, broadband and mobile—exactly how to set up or switch, what suppliers check, deposits, price caps,
            support schemes, and your rights. Written for Italians in the UK, with official Ofgem/Ofcom links.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-green-900/80">
            <span>Independent</span>
            <span aria-hidden>•</span>
            <span>Official links included</span>
            <span aria-hidden>•</span>
            <span>Last updated {new Date().toLocaleDateString("en-GB")}</span>
          </div>
        </div>
      </section>

      {/* ---------- DISCLAIMER BANNER ---------- */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <div className="rounded-2xl border border-emerald-900/15 bg-white p-4 text-sm shadow-sm">
          <p className="text-green-900/90">
            <strong>Heads-up:</strong> Informational guide only — not financial, energy or legal advice. Policies and
            prices change; always verify on{" "}
            <A href={links.ofgemConsumer}>Ofgem</A>, <A href={links.ofcomContracts}>Ofcom</A> and your supplier’s
            official pages. <strong>Resinaro is not liable</strong> for decisions based on this page.
          </p>
        </div>
      </section>

      {/* ---------- TOP NAV (chips) ---------- */}
      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border bg-white/90 p-3">
          <div className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-gray-700">
            Quick navigation
          </div>
          <nav className="flex snap-x gap-2 overflow-x-auto pb-1">
            {[
              ["moving", "Moving-home checklist"],
              ["energy", "Gas & Electricity"],
              ["water", "Water & Sewerage"],
              ["broadband", "Broadband / Home internet"],
              ["mobile", "Mobile & SIM"],
              ["support", "Support schemes"],
              ["problems", "Problems & complaints"],
              ["faqs", "FAQs"],
              ["disclaimer", "Disclaimer"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="snap-start whitespace-nowrap rounded-full border px-3 py-1.5 text-sm text-green-900 hover:bg-emerald-50"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <article className="prose prose-emerald max-w-none prose-headings:text-green-950 prose-p:text-green-900/90 prose-li:marker:text-emerald-700">
          {/* Moving */}
          <section id="moving" aria-labelledby="moving-title">
            <h2 id="moving-title">Moving-home checklist (utilities & internet)</h2>
            <ol>
              <li>
                <strong>Energy:</strong> Find the current supplier with{" "}
                <A href={links.findEnergySupplier}>Find My Supplier</A>. Photograph meter readings on move-in and move-out
                days. Tell the supplier your move-in date and readings.
              </li>
              <li>
                <strong>Water:</strong> Identify your company via{" "}
                <A href={links.findWaterSupplier}>CCW’s tool</A>. Some regions bill a fixed amount (unmetered); others
                use a water meter—send an opening reading if present.
              </li>
              <li>
                <strong>Broadband:</strong> Check what’s available at your exact address with{" "}
                <A href={links.ofcomChecker}>Ofcom’s broadband checker</A>. Book installation early; FTTP/FTTC slots can
                be busy.
              </li>
              <li>
                <strong>Mobile:</strong> Test coverage with{" "}
                <A href={links.ofcomMobile}>Ofcom’s mobile checker</A>. Bring your number with a{" "}
                <A href={links.pac}>PAC</A> or switch without keeping it using a{" "}
                <A href={links.stac}>STAC</A>.
              </li>
              <li>
                <strong>Proof of address:</strong> Keep your first bill/email—useful for GP, bank and{" "}
                <Link href={links.councilTax} className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900">
                  council tax
                </Link>{" "}
                setup. See <Link href={links.proofOfAddress} className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900">
                  proof of address
                </Link>{" "}
                tips.
              </li>
            </ol>
            <div className="mt-4 rounded-xl border bg-emerald-50/60 p-4">
              <div className="text-sm font-semibold">Documents suppliers may ask</div>
              <ul className="mt-1">
                <li>Photo ID, UK address, move-in date/tenancy agreement.</li>
                <li>Bank details or a deposit (if limited credit history).</li>
              </ul>
            </div>
          </section>

          {/* Energy */}
          <section id="energy" aria-labelledby="energy-title">
            <h2 id="energy-title">Gas & electricity — setup, tariffs, price cap</h2>
            <p>
              On day one, you’ll be on a “deemed” contract with the current supplier. You can stay or switch later. Learn
              rules and consumer rights on <A href={links.ofgemConsumer}>Ofgem</A>.
            </p>
            <h3>First week actions</h3>
            <ul>
              <li>Take clear meter photos (include meter serials).</li>
              <li>Contact the supplier; put the account in your name; ask the tariff.</li>
              <li>
                Ask if there’s <strong>debt on a prepayment meter</strong>. If so, request help moving to your own account
                or alternative arrangements.
              </li>
            </ul>
            <h3>Understanding costs</h3>
            <ul>
              <li>
                The <A href={links.priceCap}>Energy Price Cap</A> limits the unit rate/standing charge on standard variable
                tariffs, not total bills.
              </li>
              <li>
                Fixed deals may be available. Compare unit rate (<em>p/kWh</em>) and standing charge (<em>p/day</em>).
              </li>
              <li>
                Submit regular readings or use <A href={links.smartMeters}>smart meters</A> for accurate bills.
              </li>
            </ul>
            <h3>Efficiency & grants</h3>
            <ul>
              <li>
                Check your home’s EPC: <A href={links.epcFinder}>Find an energy certificate</A>.
              </li>
              <li>
                Government improvement schemes: <A href={links.grants}>gov.uk/improve-energy-efficiency</A>.
              </li>
            </ul>
            <div className="mt-4 rounded-xl border bg-white p-4">
              <div className="text-sm font-semibold">If you’re vulnerable or need extra support</div>
              <ul className="mt-1">
                <li>
                  Join the <A href={links.priorityServices}>Priority Services Register</A> (free).
                </li>
                <li>
                  See <A href={links.warmHomeDiscount}>Warm Home Discount</A> and{" "}
                  <A href={links.coldWeatherPayment}>Cold Weather Payments</A> (eligibility applies).
                </li>
              </ul>
            </div>
          </section>

          {/* Water */}
          <section id="water" aria-labelledby="water-title">
            <h2 id="water-title">Water & sewerage — who supplies you and how billing works</h2>
            <p>
              Water is regional in the UK—you cannot switch in most areas. Find your supplier via{" "}
              <A href={links.findWaterSupplier}>CCW</A>. Customer advice: <A href={links.waterUK}>Water UK</A>.
            </p>
            <ul>
              <li>
                <strong>Unmetered</strong> homes pay based on property “rateable value”.
              </li>
              <li>
                <strong>Metered</strong> homes pay by usage—send readings or use an automatic meter.
              </li>
              <li>
                Notify the company when you move in/out. Ask about social tariffs or payment plans if needed.
              </li>
            </ul>
          </section>

          {/* Broadband */}
          <section id="broadband" aria-labelledby="broadband-title">
            <h2 id="broadband-title">Broadband / Home internet — availability, speed, contracts</h2>
            <p>
              Availability and speed depend on your address (ADSL, FTTC, FTTP). Check real options with{" "}
              <A href={links.ofcomChecker}>Ofcom’s address-level checker</A> before you sign.
            </p>
            <h3>Choosing a plan</h3>
            <ul>
              <li>
                Look for <strong>FTTP (full fibre)</strong> where possible for reliability/speed.
              </li>
              <li>
                If speeds are uncertain, providers signed up to the{" "}
                <A href={links.ofcomSpeedCode}>Voluntary Speed Code</A> should give a realistic speed estimate and exit
                options if they fail to deliver.
              </li>
              <li>Watch contract length (12/18/24 months), setup fees, and router returns.</li>
            </ul>
            <h3>Rights & compensation</h3>
            <ul>
              <li>
                Installation/repair delays or missed appointments? See{" "}
                <A href={links.autoCompensation}>automatic compensation</A>.
              </li>
              <li>
                Price rises and early exit rights: <A href={links.ofcomContracts}>Ofcom guidance</A>.
              </li>
            </ul>
          </section>

          {/* Mobile */}
          <section id="mobile" aria-labelledby="mobile-title">
            <h2 id="mobile-title">Mobile & SIM — coverage, switching, keeping your number</h2>
            <p>
              Coverage varies by network and neighbourhood. Check signal for the places you live and work with{" "}
              <A href={links.ofcomMobile}>Ofcom’s mobile checker</A>.
            </p>
            <ul>
              <li>
                Keep your number with a <A href={links.pac}>PAC</A> (text “PAC” to 65075).
              </li>
              <li>
                Leave without keeping the number using a <A href={links.stac}>STAC</A> (text “STAC” to 75075).
              </li>
              <li>
                Low-income? See <A href={links.socialTariffs}>social tariffs</A> for broadband/mobile.
              </li>
            </ul>
          </section>

          {/* Support */}
          <section id="support" aria-labelledby="support-title">
            <h2 id="support-title">Support schemes & helpful extras</h2>
            <ul>
              <li>
                <strong>Priority Services Register</strong> — free extra help from your energy network/supplier:{" "}
                <A href={links.priorityServices}>join here</A>.
              </li>
              <li>
                <strong>Warm Home Discount</strong> — one-off bill support if eligible:{" "}
                <A href={links.warmHomeDiscount}>gov.uk</A>.
              </li>
              <li>
                <strong>Social tariffs</strong> for broadband/mobile: <A href={links.socialTariffs}>Ofcom guide</A>.
              </li>
            </ul>
          </section>

          {/* Problems */}
          <section id="problems" aria-labelledby="problems-title">
            <h2 id="problems-title">Problems & complaints — free ombudsman help</h2>
            <p>
              First, complain to your supplier and follow their process. If unresolved after 8 weeks (or you have a deadlock
              letter), you can escalate to:
            </p>
            <ul>
              <li>
                <A href={links.energyOmbudsman}>Ombudsman Services: Energy</A>
              </li>
              <li>
                <A href={links.commsOmbudsman}>Ombudsman Services: Communications</A> (broadband/mobile)
              </li>
            </ul>
          </section>

          {/* FAQs */}
          <section id="faqs" aria-labelledby="faqs-title">
            <h2 id="faqs-title">Frequently Asked Questions</h2>

            <details className="group rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                I have no UK credit history—can I get energy or broadband?
              </summary>
              <div className="mt-2 text-green-900/90">
                Usually yes. Companies may run a credit check or ask for a deposit/advance payment. Prepayment meters are
                common in some rentals. Build history by paying bills on time and registering on the electoral roll when
                eligible.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Do I need to change water supplier when I move?
              </summary>
              <div className="mt-2 text-green-900/90">
                No. Water is regional; you notify the local company when you move. Use{" "}
                <A href={links.findWaterSupplier}>CCW’s tool</A> to find yours.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                The engineer missed my broadband appointment—can I get compensation?
              </summary>
              <div className="mt-2 text-green-900/90">
                If your provider is part of Ofcom’s scheme, you’re due an automatic fixed payment. See{" "}
                <A href={links.autoCompensation}>the rules</A>.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                My bill looks wrong—what should I do first?
              </summary>
              <div className="mt-2 text-green-900/90">
                Submit up-to-date meter readings/screenshots, check tariff and dates, and contact the supplier. If not
                resolved, escalate to the relevant <em>Ombudsman Services</em>.
              </div>
            </details>
          </section>

          {/* CTA */}
          <section className="mt-10">
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
              <h3 className="text-xl font-semibold">Need a friendly checklist?</h3>
              <p className="mt-1 text-green-900/80">
                We’ll send you a move-in utilities checklist with meter photo tips, supplier scripts and install timelines.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  Contact Resinaro
                </Link>
                <Link
                  href="/moving-to-uk-checklist"
                  className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50"
                >
                  Moving to the UK checklist
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mt-10">
            <h2>Disclaimer</h2>
            <p>
              This page is for general guidance only. It is not financial advice or a recommendation to choose any
              particular tariff or provider. Rules, fees and availability change frequently. Always confirm details on{" "}
              <A href={links.ofgemConsumer}>Ofgem</A>, <A href={links.ofcomContracts}>Ofcom</A>, your local water company
              and the supplier’s official site. <strong>Resinaro is not liable</strong> for outcomes based on this guide.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
