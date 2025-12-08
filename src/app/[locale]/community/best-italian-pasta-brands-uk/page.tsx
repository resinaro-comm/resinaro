// src/app/[locale]/community/best-italian-pasta-brands-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Best Italian Pasta Brands in the UK (2025): De Cecco, Rummo & Budget Alternatives",
  description:
    "De Cecco, Rummo, supermarket own-brand and gluten-free options you can actually get in the UK. Bronze-cut vs regular, 2–3 shapes to keep, bulk buys on Amazon, and how not to overcook pasta in UK water.",
  alternates: { canonical: "/community/best-italian-pasta-brands-uk" },
  openGraph: {
    title:
      "Best Italian Pasta Brands in the UK (2025): De Cecco, Rummo & Budget Alternatives",
    description:
      "Which Italian pasta brands are worth it in the UK? De Cecco, Rummo, gluten-free options and budget own-brands, plus Amazon-friendly bulk buys and small-kitchen tips.",
    type: "article",
  },
};

const PUBLISHED = "2025-12-10";
const UPDATED = "2025-12-10";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Primo piano di pacchi di pasta italiana su un bancone di cucina"
      : "Close-up of Italian pasta packets on a kitchen counter",
    heroBadge: it ? "Dispensa • Pasta" : "Pantry • Pasta",
    heroTitleA: it
      ? "Le migliori marche di pasta italiana"
      : "Best Italian Pasta Brands",
    heroTitleB: it ? "Edizione UK 2025" : "UK Edition 2025",
    heroLead: it
      ? "De Cecco, Rummo, marche del supermercato e opzioni senza glutine che trovi davvero in UK — con pochi formati scelti bene e qualche acquisto furbo su Amazon."
      : "De Cecco, Rummo, supermarket brands and gluten-free options you can actually buy in the UK — plus a few smart Amazon picks and just 2–3 shapes you really need.",
    ctaCopy: it
      ? "Scarica la tabella tempi di cottura pasta (PDF) + una mail al mese con consigli per italiani nel Regno Unito."
      : "Get the printable pasta cooking times cheat-sheet (PDF) + one email a month with Italian-in-the-UK tips.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. Opt out any time.",
    ctaBtn: it ? "Scarica la tabella" : "Get the cheat-sheet",
    pub: it ? "Pubblicato: 10 Dic 2025" : "Published: 10 Dec 2025",
    upd: it ? "Aggiornato: 10 Dic 2025" : "Updated: 10 Dec 2025",
    read: it ? "~10 min lettura" : "~10 min read",

    // USPs
    usp1H: it ? "Marchi trovabili in UK" : "Brands you can find in the UK",
    usp1P: it
      ? "De Cecco, Rummo, alternative senza glutine e marche base dei supermercati — tutte reperibili su Amazon UK o in catene principali."
      : "De Cecco, Rummo, gluten-free picks and solid supermarket brands — all available on Amazon UK or major UK chains.",
    usp2H: it ? "Pensato per cucine piccole" : "Small-kitchen friendly",
    usp2P: it
      ? "Scegli solo 2–3 formati e un paio di casse: meno caos negli armadietti, più piatti ripetibili."
      : "Stick to 2–3 shapes and a couple of bulk buys: less cupboard chaos, more repeatable meals.",
    usp3H: it ? "Onesto su qualità vs prezzo" : "Honest about quality vs price",
    usp3P: it
      ? "Ti diciamo quando ha senso pagare di più (bronzo, tenuta di cottura) e quando va benissimo la marca base."
      : "We show when it’s worth paying extra (bronze-cut, cooking tolerance) and when supermarket own-brand is totally fine.",

    // Summary / TLDR
    tldrH: it
      ? "TL;DR — come scegliere la pasta in UK senza impazzire"
      : "TL;DR — how to choose pasta in the UK without overthinking",
    tldr1: it ? "1) Scegli 2–3 formati chiave" : "1) Pick 2–3 core shapes",
    tldr1P: it
      ? "Uno lungo (spaghetti), uno corto (rigatoni/penne) e, se vuoi, uno piccolo per minestre. Il resto è bonus."
      : "One long (spaghetti), one short (rigatoni/penne) and maybe one tiny shape for soups. Everything else is bonus.",
    tldr2: it ? "2) Usa il bronzo dove conta" : "2) Use bronze-cut where it matters",
    tldr2P: it
      ? "Per piatti in bianco, cacio e pepe, sughi brevi e cremosi, De Cecco/Rummo aiutano la pasta a trattenere il condimento."
      : "For cacio e pepe, simple tomato sauces and creamy “white” pasta, De Cecco/Rummo bronze-cut helps sauce cling properly.",
    tldr3: it ? "3) Fai scorte sensate" : "3) Stock up smart",
    tldr3P: it
      ? "Compra casse miste quando sono in offerta, ma solo di formati che usi davvero ogni settimana."
      : "Buy mixed cases when on offer, but only of shapes you cook every single week.",
    miniCtaP: it
      ? "Vuoi una tabella A4 da frigo con tempi di cottura, sale e porzioni per 1–4 persone?"
      : "Want a fridge-door A4 chart with cooking times, salt and portions for 1–4 people?",
    miniCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",

    // Section: Bronze-cut vs regular
    bronzeH: it
      ? "Bronzo vs liscia: cosa cambia davvero (specie in acqua UK)"
      : "Bronze-cut vs smooth: what actually changes (especially in UK water)",
    bronzeSub: it
      ? "Non è solo marketing: il tipo di trafilatura e il tempo di essiccazione cambiano come la pasta assorbe il sugo."
      : "It’s not just marketing: the die and drying method change how pasta grips sauce and handles UK water.",
    bronzeList: it
      ? [
          "<strong>Trafilata al bronzo:</strong> superficie ruvida, colore più opaco, tiene il sugo e regge meglio la cottura.",
          "<strong>Trafilatura liscia/industriale:</strong> superficie più lucida, tende a scivolare, ma spesso costa meno.",
          "<strong>Tempo di essiccazione:</strong> più lento = struttura migliore, meno rischio di pasta collosa.",
          "<strong>In acqua dura UK:</strong> le marche serie ti perdonano 1–2 minuti di distrazione in più.",
        ]
      : [
          "<strong>Bronze-cut:</strong> rough, matte surface that hugs sauce and tolerates a slightly longer cook.",
          "<strong>Smooth/industrial:</strong> shinier surface, sauce slips more easily, but often much cheaper.",
          "<strong>Drying time:</strong> slower drying = better structure, less mushy/sticky pasta.",
          "<strong>In hard UK water:</strong> good Italian brands forgive 1–2 minutes of overcooking.",
        ],

    // Section: Best brands table
    brandsH: it
      ? "Le migliori marche di pasta (che trovi su Amazon UK)"
      : "Best pasta brands you can get on Amazon UK",
    brandsSub: it
      ? "Non serve provarle tutte. Qui sotto: poche marche affidabili, con quando usarle."
      : "You don’t need to try everything. Here are a few reliable brands and when they shine.",
    brandsHeaders: it
      ? ["Marca", "Perché sceglierla", "Perfetta per"]
      : ["Brand", "Why pick it", "Best for"],
    brandsRows: it
      ? [
          [
            "De Cecco",
            "Trafilata al bronzo, buona tenuta di cottura, molto costante.",
            "Spaghetti al pomodoro, carbonara, cacio e pepe, piatti semplici.",
          ],
          [
            "Rummo",
            "Ottima tenuta, anche se sbagli di un minuto. Linea senza glutine fra le migliori.",
            "Cotture un po’ più lunghe, paste al forno, senza glutine per ospiti.",
          ],
          [
            "Supermercato UK (premium)",
            "Linea “finest” o simile: spesso prodotta in Italia.",
            "Pasta di tutti i giorni quando vuoi risparmiare un po’.",
          ],
          [
            "Marche base UK",
            "Molto economiche, più delicate in cottura.",
            "Insalate di pasta, pasti veloci con tanti condimenti.",
          ],
        ]
      : [
          [
            "De Cecco",
            "Bronze-cut, very consistent, holds its shape and sauce well.",
            "Spaghetti al pomodoro, carbonara, cacio e pepe, simple sauces.",
          ],
          [
            "Rummo",
            "Excellent bite, even if you miss the timer by a minute. Great GF range.",
            "Baked dishes, slow sauces, reliable gluten-free swaps.",
          ],
          [
            "UK supermarket premium lines",
            "“Finest”/“Extra special”-type ranges, often made in Italy.",
            "Everyday meals when you want decent texture without full Italian prices.",
          ],
          [
            "Basic UK own-brand",
            "Very cheap, but easier to overcook and break.",
            "Pasta salads, heavy sauces, batch cooking on a tight budget.",
          ],
        ],

    // Section: Shapes & portions
    shapesH: it
      ? "Quanti formati ti servono davvero?"
      : "How many pasta shapes do you actually need?",
    shapesSub: it
      ? "Cucina piccola = meno formati, ma scelti bene. Pensa per persone e ricette ricorrenti."
      : "Tiny kitchen = fewer shapes, chosen well. Think in people and weekly recipes.",
    shapesHeaders: it
      ? ["Tipo di casa", "Formati consigliati", "Note pratiche"]
      : ["Household", "Suggested shapes", "Practical notes"],
    shapesRows: it
      ? [
          [
            "1 persona / stanza",
            "Spaghetti + mezze maniche",
            "Ci fai piatti in bianco, al sugo, e anche paste fredde.",
          ],
          [
            "Coppia",
            "Spaghetti + rigatoni + formato piccolo (tubetti)",
            "Puoi alternare primi veloci, piatti al forno, minestre.",
          ],
          [
            "Famiglia",
            "Spaghetti + penne/rigatoni + farfalle + formato per zuppe",
            "Più persone, più formati utili per non annoiarsi.",
          ],
        ]
      : [
          [
            "1 person / flatshare",
            "Spaghetti + short tube (mezze maniche/penne)",
            "Covers white sauces, tomato, quick skillet meals and pasta salads.",
          ],
          [
            "Couple",
            "Spaghetti + rigatoni + tiny soup shape",
            "Lets you rotate quick dinners, bakes and brothy soups.",
          ],
          [
            "Family",
            "Spaghetti + penne or rigatoni + farfalle + soup shape",
            "More mouths = more variety without buying 10 different packets.",
          ],
        ],

    // Section: GF & wholewheat
    gfH: it
      ? "Senza glutine & integrale: cosa funziona davvero"
      : "Gluten-free & wholewheat: what actually works",
    gfSub: it
      ? "Non tutte le paste senza glutine reggono bene i tempi e i sughi. Qui puntiamo a consistenza e sapore, non solo etichetta."
      : "Not all gluten-free pastas survive cooking and sauce. Here we care about texture and flavour, not just the label.",
    gfPoints: it
      ? [
          "<strong>Rummo senza glutine:</strong> una delle poche che tiene il morso e non diventa gomma.",
          "<strong>Mais + riso:</strong> combo più comune; cerca tempi di cottura chiari sull’etichetta.",
          "<strong>Integrale:</strong> buona per piatti con verdure e legumi, ma cuocila un filo meno del tempo indicato.",
        ]
      : [
          "<strong>Rummo gluten-free:</strong> one of the few that really holds a bite instead of turning rubbery.",
          "<strong>Corn + rice blends:</strong> very common; look for clear cooking times on the packet.",
          "<strong>Wholewheat:</strong> great with veg- and bean-heavy sauces; pull it 1 minute before the stated time.",
        ],

    // Section: Bulk buys & links
    bulkH: it
      ? "Scorte furbe di pasta (link Amazon UK)"
      : "Smart bulk pasta buys (Amazon UK links)",
    bulkIntro: it
      ? "Se mangi pasta 2–3 volte a settimana, alcune casse hanno davvero senso. Ricorda: compra solo formati che ami già."
      : "If you eat pasta 2–3 times a week, some bulk buys are genuinely worth it. Just stick to shapes you already love.",
    bulkList: it
      ? [
          "Casse di spaghetti De Cecco o Rummo (12x) per i piatti base della settimana.",
          "Mix di formati corti (rigatoni, penne, fusilli) per paste al forno e insalate.",
          "Confezioni da 6–12 di pasta senza glutine se hai ospiti regolari o celiaci in casa.",
        ]
      : [
          "12-pack cases of De Cecco or Rummo spaghetti for your weekly baseline meals.",
          "Mixed boxes of short shapes (rigatoni, penne, fusilli) for bakes and salads.",
          "6–12 packs of gluten-free pasta if you host coeliacs or eat GF regularly.",
        ],
    affiliateNote: it
      ? "Nota affiliate: alcuni link sono affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links are Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // Section: Cooking tips
    cookH: it
      ? "Come non rovinare la pasta in acqua UK"
      : "How not to ruin pasta in UK water",
    cookPoints: it
      ? [
          "Sala l’acqua: deve sapere di mare (circa 10–12 g di sale per litro).",
          "Usa una pentola grande: troppa pasta in poca acqua = amido colloso.",
          "Mescola bene nei primi 30 secondi per evitare che si attacchi.",
          "Assaggia 1–2 minuti prima del tempo indicato: ogni cucina è diversa.",
        ]
      : [
          "Salt the water properly: it should taste like the sea (roughly 10–12 g per litre).",
          "Use a big enough pot: too much pasta in too little water gets gummy.",
          "Stir well in the first 30 seconds so it doesn’t stick.",
          "Start tasting 1–2 minutes before the packet time: every hob is different.",
        ],

    // FAQ
    faqH: it ? "FAQ — pasta italiana in UK" : "FAQ — Italian pasta in the UK",
    faqs: it
      ? [
          [
            "Vale davvero la pena comprare De Cecco o Rummo?",
            "Se mangi pasta spesso e ti piace al dente, sì: la differenza in tenuta e sapore si sente, soprattutto con condimenti semplici.",
          ],
          [
            "Posso mischiare marche diverse nella stessa pentola?",
            "Meglio di no: tempi di cottura e consistenza sono diversi. Se devi, usa marche simili e assaggia spesso.",
          ],
          [
            "Perché la pasta mi viene sempre scotta in UK?",
            "Acqua dura, pentole piccole e poca attenzione al timer. Usa pentola grande, assaggia prima del tempo e scegli marche che reggono.",
          ],
          [
            "Come conservo le scorte?",
            "Trasferisci i pacchi aperti in contenitori ermetici etichettati. Tieni le casse chiuse in un luogo asciutto e al riparo dalla luce.",
          ],
        ]
      : [
          [
            "Is it really worth paying extra for De Cecco or Rummo?",
            "If you eat pasta often and care about al dente, yes. You’ll notice better bite and flavour, especially with simple sauces.",
          ],
          [
            "Can I mix different brands in one pot?",
            "Better not: cooking times and textures differ. If you must, choose similar brands and taste-test constantly.",
          ],
          [
            "Why does my pasta turn mushy in the UK?",
            "Hard water, small pots and ignoring the timer. Use a bigger pot, taste early, and choose brands that tolerate a bit more cooking.",
          ],
          [
            "How should I store bulk pasta?",
            "Move open packs into airtight containers and label them. Keep full cases somewhere dry, cool and out of direct light.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    relatedNote: it
      ? "Alcuni link possono generarci una piccola commissione senza costi extra per te. Aiuta a mantenere gratuita la community."
      : "Some links may earn us a small commission at no extra cost to you. It helps keep the community free.",
    footerCtaH: it
      ? "Ottieni la tabella tempi di cottura pasta"
      : "Get the pasta cooking times chart",
    footerCtaP: it
      ? "Una pagina con tempi per formati comuni, quantità di sale e porzioni per 1–4 persone."
      : "One page with times for common shapes, salt amounts and portions for 1–4 people.",
    footerCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla pasta" : "Ask a pasta question",
    londonGuide: it
      ? "Italiani a Londra: dove comprare cibo →"
      : "Italians in London: where to buy food →",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  // Anchors
  const bulkAnchor = "#bulk-buys";

  // JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Best Italian Pasta Brands in the UK (2025): De Cecco, Rummo & Budget Alternatives",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://resinaro.co.uk/community/best-italian-pasta-brands-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Pantry", "Italian UK"],
    image: [
      "https://resinaro.co.uk/public/images/community/italian-pasta-brands-hero.jpg",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (copy.faqs as string[][]).map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "it"
      ? "Marche di pasta consigliate per il Regno Unito"
      : "Recommended pasta brands for the UK",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "De Cecco" },
      { "@type": "ListItem", position: 2, name: "Rummo" },
      {
        "@type": "ListItem",
        position: 3,
        name: locale === "it"
          ? "Linee premium supermercati UK"
          : "UK supermarket premium ranges",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: locale === "it"
          ? "Marche base supermercati UK"
          : "Basic UK supermarket own-brand",
      },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#summary", "#brands"],
    },
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/community/italian-pasta-brands-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-emerald-200">
                {copy.heroTitleB}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {copy.heroLead}
            </p>
          </div>

          {/* CTA card */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-800">{copy.ctaCopy}</p>
                <p className="text-xs text-gray-600">{copy.ctaSub}</p>
              </div>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="flex w-full flex-col gap-2 sm:flex-row md:justify-end"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-emerald-600 px-5 font-semibold text-white shadow hover:bg-emerald-700"
                >
                  {copy.ctaBtn}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>{copy.pub}</span>
            <span className="opacity-60">•</span>
            <span>{copy.upd}</span>
            <span className="opacity-60">•</span>
            <span>{copy.read}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F9F6F1] to-transparent" />
      </section>

      {/* ===== USPs ===== */}
      <section className="mx-auto mt-10 max-w-7xl px-6 md:mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: copy.usp1H, p: copy.usp1P },
            { h: copy.usp2H, p: copy.usp2P },
            { h: copy.usp3H, p: copy.usp3P },
          ].map((x) => (
            <div
              key={x.h}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-emerald-800">
                {x.h}
              </h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Summary & key takeaways ===== */}
      <section
        id="summary"
        className="mx-auto mt-14 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-lg font-semibold text-emerald-800">
              {copy.tldrH}
            </p>
            <div className="mt-4 space-y-5">
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  {copy.tldr1}
                </span>{" "}
                {copy.tldr1P}
              </p>
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  {copy.tldr2}
                </span>{" "}
                {copy.tldr2P}
              </p>
              <p>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                  {copy.tldr3}
                </span>{" "}
                {copy.tldr3P}
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">{copy.miniCtaP}</p>
              <form
                method="POST"
                action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                className="mt-3 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:max-w-sm"
                />
                <button
                  type="submit"
                  className="h-11 rounded-2xl bg-emerald-600 px-5 font-semibold text-white hover:bg-emerald-700"
                >
                  {copy.miniCtaBtn}
                </button>
              </form>
            </div>
          </div>

          {/* Bronze vs regular */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              {copy.bronzeH}
            </h2>
            <p className="mt-1 text-sm text-gray-700">{copy.bronzeSub}</p>
            <ul
              className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-1.5"
              dangerouslySetInnerHTML={{
                __html: (copy.bronzeList as string[])
                  .map((x) => `<li>${x}</li>`)
                  .join(""),
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== Brands table ===== */}
      <section
        id="brands"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.brandsH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {copy.brandsSub}
              </p>
            </div>
            <Link
              href={bulkAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {locale === "it"
                ? "Vai alle scorte su Amazon →"
                : "Jump to Amazon bulk buys →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.brandsHeaders.map((h) => (
                    <th
                      key={h}
                      className="p-3 text-left font-semibold text-gray-900"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(copy.brandsRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 align-top text-gray-800"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Inline affiliate links for the big brands */}
          <div className="mt-4 text-sm text-gray-800">
            <p>
              {locale === "it" ? "Link utili: " : "Useful links: "}
              <a
                href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                De Cecco spaghetti
              </a>
              {" · "}
              <a
                href="https://www.amazon.co.uk/s?k=rummo+rigatoni&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                Rummo rigatoni
              </a>
              {" · "}
              <a
                href="https://www.amazon.co.uk/s?k=italian+bronze+cut+pasta+mixed+case&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                {locale === "it"
                  ? "Casse miste trafilate al bronzo"
                  : "Mixed bronze-cut cases"}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Shapes table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.shapesH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.shapesSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.shapesHeaders.map((h) => (
                    <th
                      key={h}
                      className="p-3 text-left font-semibold text-gray-900"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(copy.shapesRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 align-top text-gray-800"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Suggerimento: se vivi in stanza, scegli 2 formati e compra solo quelli in cassa."
              : "Tip: in a flatshare, pick just 2 shapes and only buy bulk for those."}
          </p>
        </div>
      </section>

      {/* ===== GF & cooking tips ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* GF & wholewheat */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.gfH}
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              {copy.gfSub}
            </p>
            <ul
              className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-1.5"
              dangerouslySetInnerHTML={{
                __html: (copy.gfPoints as string[])
                  .map((x) => `<li>${x}</li>`)
                  .join(""),
              }}
            />
            <div className="mt-3 text-sm">
              <a
                href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                {locale === "it"
                  ? "Vedi pasta Rummo senza glutine su Amazon UK"
                  : "See Rummo gluten-free pasta on Amazon UK"}
              </a>
            </div>
          </div>

          {/* Cooking tips */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              {copy.cookH}
            </h2>
            <ul
              className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5"
              dangerouslySetInnerHTML={{
                __html: (copy.cookPoints as string[])
                  .map((x) => `<li>${x}</li>`)
                  .join(""),
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== Bulk buys (affiliate focus) ===== */}
      <section
        id="bulk-buys"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.bulkH}
              </h2>
              <p className="mt-1 text-sm text-gray-700">
                {copy.bulkIntro}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3 text-sm text-gray-800">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {locale === "it" ? "Casse di spaghetti" : "Spaghetti cases"}
              </h3>
              <p className="mt-1">
                {copy.bulkList[0]}
              </p>
              <a
                href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti+case&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-2 inline-flex text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                {locale === "it"
                  ? "Vedi casse di spaghetti"
                  : "See spaghetti cases"}
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {locale === "it"
                  ? "Mix formati corti"
                  : "Mixed short-shape boxes"}
              </h3>
              <p className="mt-1">{copy.bulkList[1]}</p>
              <a
                href="https://www.amazon.co.uk/s?k=italian+mixed+pasta+case&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-2 inline-flex text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                {locale === "it"
                  ? "Confronta mix di formati"
                  : "Compare mixed cases"}
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {locale === "it"
                  ? "Scorte senza glutine"
                  : "Gluten-free stock-ups"}
              </h3>
              <p className="mt-1">{copy.bulkList[2]}</p>
              <a
                href="https://www.amazon.co.uk/s?k=gluten+free+italian+pasta+case&tag=resinaroamzn-21"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-2 inline-flex text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
              >
                {locale === "it"
                  ? "Vedi casse senza glutine"
                  : "See GF pasta cases"}
              </a>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-emerald-900/80">
            {copy.affiliateNote}
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.faqH}
          </h2>
          {(copy.faqs as string[][]).map(([q, a]) => (
            <details
              key={q}
              className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">
                {q}
              </summary>
              <div className="mt-2 text-sm text-gray-700">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Related + footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.relatedH}
            </h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  href="/community/italian-pantry-essentials-uk"
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                >
                  {locale === "it"
                    ? "Dispensa italiana essenziale in UK"
                    : "Italian Pantry Essentials in the UK"}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/italian-olive-oil-uk"
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                >
                  {locale === "it"
                    ? "Olio EVO in UK: come scegliere"
                    : "Choosing Italian Extra Virgin Olive Oil in the UK"}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/pizza-flour-00-uk"
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                >
                  {locale === "it"
                    ? "Farine 00 per pizza (Versione UK)"
                    : "Best Italian-Style Pizza Flours (UK Edition)"}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {copy.relatedNote}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              {copy.footerCtaH}
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              {copy.footerCtaP}
            </p>
            <form
              method="POST"
              action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
              className="mt-4 flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:max-w-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-700"
              >
                {copy.footerCtaBtn}
              </button>
            </form>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                {copy.askQ}
              </Link>
              <Link
                href="/directories/restaurants/london"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {copy.londonGuide}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
