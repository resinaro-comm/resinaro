// src/app/[locale]/community/italian-pasta-brands-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Italian Pasta in the UK (2025): Best Brands, Shapes & Amazon Picks",
  description:
    "How to choose real Italian-style pasta in the UK: bronze-cut vs smooth, the 4 shapes you actually need, De Cecco / Rummo / Barilla vs supermarket brands, gluten-free & wholewheat options, plus Amazon UK multipacks and bulk buys.",
  alternates: { canonical: "/community/italian-pasta-brands-uk" },
  openGraph: {
    title: "Italian Pasta in the UK (2025): Best Brands, Shapes & Amazon Picks",
    description:
      "A practical guide to Italian pasta in the UK: which brands and shapes to buy, how to cook it properly, and where to find good deals on Amazon UK.",
    type: "article",
  },
};

const PUBLISHED = "2025-12-07";
const UPDATED = "2025-12-07";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Primo piano di piatti di pasta italiana e pacchi di pasta su un tavolo di cucina in UK"
      : "Close-up of Italian pasta plates and pasta packs on a UK kitchen table",
    heroBadge: it
      ? "Dispensa • Pasta • UK"
      : "Pantry • Pasta • UK",
    heroTitleA: it
      ? "Pasta italiana in UK"
      : "Italian Pasta in the UK",
    heroTitleB: it
      ? "Marche, formati & acquisti furbi"
      : "Brands, Shapes & Smart Buys",
    heroLead: it
      ? "Come scegliere una buona pasta in UK senza impazzire tra scaffali e offerte: cosa guardare in etichetta, quali formati tenere in una cucina piccola e quali marche conviene prendere su Amazon."
      : "How to choose good pasta in the UK without going mad at the supermarket: what to look for on the label, which shapes to keep in a small kitchen, and which brands are worth getting from Amazon.",
    ctaCopy: it
      ? "Scarica la scheda riassuntiva sulla pasta (PDF) + una mail al mese con consigli pratici per italiani nel Regno Unito."
      : "Download the printable pasta cheat sheet (PDF) + one monthly email with practical Italian-in-the-UK tips.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. You can unsubscribe any time.",
    ctaBtn: it ? "Scarica la scheda pasta" : "Get the pasta cheat sheet",
    pub: it ? "Pubblicato: 7 Dic 2025" : "Published: 7 Dec 2025",
    upd: it ? "Aggiornato: 7 Dic 2025" : "Updated: 7 Dec 2025",
    read: it ? "~10 min lettura" : "~10 min read",

    // USPs
    usp1H: it ? "Marche trovabili in UK" : "Brands you can find in the UK",
    usp1P: it
      ? "Parliamo di cose realistiche: De Cecco, Rummo, Barilla, marche dei supermercati e opzioni Amazon UK."
      : "We focus on realistic options: De Cecco, Rummo, Barilla, supermarket brands and Amazon UK picks.",
    usp2H: it ? "Pensato per cucine piccole" : "Designed for tiny kitchens",
    usp2P: it
      ? "Quattro formati base che ti coprono dal sugo veloce alla pasta e ceci, senza riempire tutti i pensili."
      : "Four core shapes that cover everything from quick sauces to pasta e ceci, without filling every cupboard.",
    usp3H: it ? "Guida pratica, non da chef" : "Practical, not cheffy",
    usp3P: it
      ? "Cose concrete: quanto tempo cuoce davvero, perché alcune marche non scuociono e quando ha senso spendere un po’ di più."
      : "Concrete stuff: real cooking times, which brands don’t turn to mush, and when it’s worth paying a bit more.",

    // Summary / TL;DR
    tldrH: it
      ? "Riassunto — come organizzare la pasta in una cucina UK"
      : "TL;DR — how to organise pasta in a UK kitchen",
    tldr: it
      ? [
          {
            label: "1) Scegli 3–4 formati base",
            body:
              "Uno lungo (spaghetti), uno corto rigato (rigatoni o penne), uno “a spirale” (fusilli) e uno piccolo da minestra (ditalini). Già così copri l’80% dei piatti.",
          },
          {
            label: "2) Dai priorità alla qualità, non a 12 formati diversi",
            body:
              "Meglio 3 pacchi di buona pasta che 10 pacchi random. Una buona semola e la trafilatura al bronzo tengono la cottura e aggrappano il sugo.",
          },
          {
            label: "3) Usa Amazon per i casi/un po’ di scorta",
            body:
              "Un cartone di pasta migliore + contenitori ermetici = meno viaggi al supermercato, meno sprechi e pasti italiani anche a fine mese.",
          },
        ]
      : [
          {
            label: "1) Pick 3–4 core shapes",
            body:
              "One long (spaghetti), one short ridged (rigatoni or penne), one spiral (fusilli) and one tiny soup shape (ditalini). That’s 80% of meals covered.",
          },
          {
            label: "2) Prioritise quality over 12 random shapes",
            body:
              "Three packs of good pasta beat ten packs of anything. Good semolina and bronze-cut texture keep it al dente and help sauces cling.",
          },
          {
            label: "3) Use Amazon for cases & a small stash",
            body:
              "A case of better pasta + airtight containers = fewer panic shops, less waste and Italian dinners even at the end of the month.",
          },
        ],
    miniCtaP: it
      ? "Vuoi una scheda stampabile con i formati consigliati, i tempi indicativi e le marche suggerite?"
      : "Want a fridge-friendly cheat sheet with shapes, cook times and brand suggestions?",
    miniCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",

    // Pasta basics
    basicsH: it
      ? "Le basi: cosa rende buona una pasta (anche in UK)"
      : "Pasta basics: what makes good pasta (even in the UK)",
    basicsSub: it
      ? "Se capisci queste tre cose (semola, trafilatura, cottura), scegliere sugli scaffali diventa molto più semplice."
      : "If you understand these three things (semolina, bronze-cut, cooking time), choosing on the shelf gets much easier.",
    basicsHeaders: it
      ? ["Elemento", "Cosa vuol dire", "Perché ti interessa"]
      : ["Thing to check", "What it means", "Why it matters"],
    basicsRows: it
      ? [
          [
            "Semola di grano duro",
            "La farina usata per fare la pasta secca.",
            "Più è buona la semola, più la pasta tiene la cottura e rimane saporita.",
          ],
          [
            "Proteine ~13%",
            "Sull’etichetta vedi “proteine per 100 g”. Intorno al 13% è un buon segno.",
            "Di solito indica una pasta più “strutturata”, che non si spezza e non diventa pappa.",
          ],
          [
            "Trafilatura al bronzo",
            "Passa in trafile metalliche ruvide invece che lisce.",
            "La superficie è più porosa: il sugo si attacca meglio e il piatto sembra subito più “da casa”.",
          ],
          [
            "Tempo di cottura realistico",
            "Non solo il numero sulla scatola: guarda se la pasta ha margine prima di scuocere.",
            "Rummo & co. reggono anche se sbagli 1–2 minuti; le paste troppo economiche no.",
          ],
        ]
      : [
          [
            "Durum wheat semolina",
            "The flour used to make dried pasta.",
            "Better semolina = better bite and flavour even after cooking.",
          ],
          [
            "Protein around 13%",
            "On the label you’ll see “protein per 100g”. Around 13% is a good sign.",
            "Often means a sturdier pasta that doesn’t break or turn mushy.",
          ],
          [
            "Bronze-cut (“trafilata al bronzo”)",
            "Pasta is extruded through rough bronze dies instead of smooth Teflon.",
            "The surface is rougher so sauce clings and the dish feels more “proper Italian”.",
          ],
          [
            "Real cooking window",
            "Not just the printed time: how long before it goes soft.",
            "Brands like Rummo cope with 1–2 extra minutes; the very cheap ones don’t.",
          ],
        ],

    // Shapes
    shapesH: it
      ? "I 4 formati di pasta che ti servono davvero in UK"
      : "The 4 pasta shapes you actually need in the UK",
    shapesSub: it
      ? "Se vivi in affitto, condividi la cucina o hai poco spazio, partire con questi è sufficiente."
      : "If you’re renting, sharing or short on space, starting with these is enough.",
    shapesHeaders: it
      ? ["Formato", "Per cosa è perfetto", "Note pratiche"]
      : ["Shape", "Best for", "Practical notes"],
    shapesRows: it
      ? [
          [
            "Spaghetti",
            "Pomodoro, aglio e olio, tonno, vongole (quando capita).",
            "Un classico. Più sensato puntare a una buona marca che avere 5 tipi di pasta lunga.",
          ],
          [
            "Rigatoni / Penne rigate",
            "Ragù, sughi densi, verdure al forno, sughi con panna.",
            "Le righe trattengono il sugo, reggono bene porzioni grandi.",
          ],
          [
            "Fusilli",
            "Pasta fredda, teglie al forno, sughi “tutto dentro il frigo”.",
            "Perfetti per “svuota frigo” e per i pasti da portare al lavoro.",
          ],
          [
            "Ditalini / pasta piccola",
            "Pasta e ceci, minestroni, zuppe.",
            "Un sacchetto piccolo basta: occupa pochissimo spazio, salva tante cene d’inverno.",
          ],
        ]
      : [
          [
            "Spaghetti",
            "Tomato, aglio e olio, tuna, the occasional vongole.",
            "Don’t overthink: one good spaghetti brand beats five different long shapes.",
          ],
          [
            "Rigatoni / penne rigate",
            "Ragù, thick sauces, baked dishes, creamy sauces.",
            "Ridges hold sauce; great when you cook for 2–4 people.",
          ],
          [
            "Fusilli",
            "Pasta salads, oven bakes, “everything in the fridge” sauces.",
            "Ideal for meal prep and next-day lunch boxes.",
          ],
          [
            "Ditalini / small soup pasta",
            "Pasta e ceci, minestrone, brothy soups.",
            "One small bag is enough, takes almost no space and saves many winter dinners.",
          ],
        ],

    // Brands & Amazon
    brandsH: it
      ? "Marche in UK: cosa prendere al super e cosa su Amazon"
      : "Brands in the UK: supermarket vs Amazon picks",
    brandsSub: it
      ? "La domanda vera non è “qual è la pasta perfetta?”, ma “cosa ha senso comprare con il budget e lo spazio che ho?”."
      : "The real question isn’t “what’s the perfect pasta?” but “what makes sense with my budget and shelf space?”.",
    brandsCols: it
      ? ["Tipo", "Esempi", "Quando ha senso"]
      : ["Type", "Examples", "When it makes sense"],
    brandsRows: it
      ? [
          [
            "Marche italiane premium",
            "De Cecco, Rummo, Voiello.",
            "Quando vuoi un po’ più di gusto e margine di cottura. Ideale per i piatti “comfort” della settimana.",
          ],
          [
            "Marche italiane “mainstream”",
            "Barilla, Divella.",
            "Ottimo compromesso se le trovi in offerta o in multipack.",
          ],
          [
            "Marca supermercato UK",
            "Tesco, Sainsbury’s, Aldi, Lidl, ecc.",
            "Per piatti veloci o quando il budget è stretto. Scegli la linea “finest” o equivalente quando puoi.",
          ],
          [
            "Opzioni speciali",
            "Gluten free, integrale, legumi (ceci, lenticchie).",
            "Quando hai esigenze alimentari specifiche o vuoi variare proteine/fibre.",
          ],
        ]
      : [
          [
            "Premium Italian brands",
            "De Cecco, Rummo, Voiello.",
            "When you want better flavour and a more forgiving cooking window. Great for weekly comfort dinners.",
          ],
          [
            "Mainstream Italian brands",
            "Barilla, Divella.",
            "Solid middle ground, especially if on offer or in multipacks.",
          ],
          [
            "UK supermarket brands",
            "Tesco, Sainsbury’s, Aldi, Lidl, etc.",
            "For quick meals or tight weeks. If possible, go for “finest”/premium ranges.",
          ],
          [
            "Special options",
            "Gluten-free, wholewheat, legume-based (chickpea, lentil).",
            "For specific dietary needs or to add fibre and protein.",
          ],
        ],
    affiliateNote: it
      ? "Nota affiliate: alcuni link qui sotto sono affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links below are Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // Affiliate bullets
    affPremiumH: it ? "Pacchi e multipack premium (Amazon UK)" : "Premium multipacks (Amazon UK)",
    affGfH: it ? "Senza glutine & integrale" : "Gluten-free & wholewheat picks",
    affBulkH: it ? "Scorta furba & contenitori" : "Smart bulk & storage",

    // Cooking how-to
    howToH: it
      ? "Come cuocere la pasta in una cucina UK (senza impazzire)"
      : "How to cook pasta properly in a UK kitchen",
    howToIntro: it
      ? "Niente dogmi, solo un metodo base che funziona con quasi tutte le marche."
      : "No dogma, just a basic method that works with most brands.",
    howToSteps: it
      ? [
          [
            "1) Usa abbastanza acqua salata",
            "Circa 1 litro ogni 100 g di pasta. Il sale deve rendere l’acqua “come il mare leggero”.",
          ],
          [
            "2) Mescola i primi 30 secondi",
            "Soprattutto su piastre a induzione o ceramica, per evitare che la pasta si incolli sul fondo.",
          ],
          [
            "3) Assaggia 2 minuti prima del tempo indicato",
            "Sforzati di assaggiare: è l’unico modo per capire come si comporta quella marca.",
          ],
          [
            "4) Tieni un po’ di acqua di cottura",
            "Una tazzina basta. Emulsiona il sugo e salva se hai scolato un filo troppo.",
          ],
          [
            "5) Finisci la cottura in padella",
            "Ultimo minuto in padella con il condimento: fa la differenza tra “ok” e “wow, sembra casa”.",
          ],
        ]
      : [
          [
            "1) Use enough salted water",
            "Roughly 1 litre per 100 g of pasta. Salt until it tastes like light sea water.",
          ],
          [
            "2) Stir for the first 30 seconds",
            "Especially on induction or ceramic hobs, so pasta doesn’t weld to the bottom.",
          ],
          [
            "3) Taste 2 minutes before the packet time",
            "Train yourself to taste: it’s the only way to learn how that brand behaves.",
          ],
          [
            "4) Save some cooking water",
            "A small mug is enough. It emulsifies the sauce and rescues slightly over-drained pasta.",
          ],
          [
            "5) Finish in the pan",
            "Last minute in the pan with the sauce: the difference between “fine” and “this tastes like home”.",
          ],
        ],
    howToNote: it
      ? "Nota: molti italiani in UK cucinano su piastre a induzione. Tieni sempre d’occhio il bollore: meglio un leggero sobbollire continuo che un “vulcano” che trabocca."
      : "Note: lots of Italians in the UK cook on induction. Aim for a steady simmer, not a volcano trying to escape the pot.",

    // GF & wholewheat
    gfSectionH: it
      ? "Pasta senza glutine & integrale che non delude"
      : "Gluten-free & wholewheat pasta that doesn’t disappoint",
    gfCards: it
      ? [
          {
            title: "Gluten free che sa di pasta",
            body:
              "Cerca miscele con riso/mais e buona tenuta in cottura. Alcune marche italiane fanno ottime versioni GF che non diventano colla.",
          },
          {
            title: "Integrale senza mattoni",
            body:
              "La pasta integrale buona rimane elastica e non sabbiosa. Perfetta con verdure, legumi e condimenti più “rustici”.",
          },
          {
            title: "Legumi & alternative",
            body:
              "Pasta di ceci o lenticchie riempie molto: usane un po’ meno del solito e condisci con sughi semplici.",
          },
        ]
      : [
          {
            title: "Gluten-free that still feels like pasta",
            body:
              "Look for blends with rice/maize and decent cooking tolerance. Some Italian brands make excellent GF lines that don’t turn to glue.",
          },
          {
            title: "Wholewheat without the brick effect",
            body:
              "Good wholewheat stays springy, not sandy. Great with veg, beans and more rustic sauces.",
          },
          {
            title: "Legume-based & alternatives",
            body:
              "Chickpea or lentil pasta is very filling: use a bit less than usual and keep sauces simple.",
          },
        ],

    // Storage
    storageH: it
      ? "Come fare scorta di pasta senza invadere la cucina"
      : "How to stock up on pasta without losing your kitchen",
    storagePoints: it
      ? [
          "Compra le casse quando hai trovato 1–2 marche che ti piacciono davvero.",
          "Tieni solo 2–3 pacchi “in servizio” in cucina; il resto in uno scatolone lontano da luce e calore.",
          "Usa contenitori alti per spaghetti/linguine e più bassi per i formati corti.",
          "Scrivi il formato e il tempo di cottura sul contenitore con un pennarello cancellabile.",
        ]
      : [
          "Buy cases only once you know 1–2 brands you actually like.",
          "Keep just 2–3 packs “in play” in the kitchen; store the rest in a cool, dark box.",
          "Use tall containers for spaghetti/linguine and shorter ones for short shapes.",
          "Write the shape and cooking time on the tub with a wipeable marker.",
        ],

    // FAQ
    faqH: it ? "FAQ — Pasta italiana in UK" : "FAQ — Italian pasta in the UK",
    faqs: it
      ? [
          [
            "Devo comprare solo marche italiane famose?",
            "No. Se il budget lo permette, avere una o due marche italiane “di fiducia” aiuta per i piatti comfort. Ma va benissimo usare anche marche UK, soprattutto per pasta al forno o insalate di pasta.",
          ],
          [
            "Posso mescolare formati diversi rimasti a metà?",
            "Sì, basta che abbiano tempi simili. Metti prima in pentola quello che cuoce di più e aggiungi l’altro un paio di minuti dopo.",
          ],
          [
            "È vero che la pasta va sempre cotta al dente?",
            "Dipende dal piatto e dai denti delle persone in casa. Tieni una pasta che regge la cottura (Rummo, De Cecco, ecc.) così puoi adattare senza rischiare la pappa.",
          ],
          [
            "Come faccio a non sprecare?",
            "Pesare le porzioni con una bilancia per i primi tempi aiuta molto (80–100 g a testa). E pianifica una sera “svuota dispensa” ogni tanto.",
          ],
        ]
      : [
          [
            "Do I need to buy only famous Italian brands?",
            "No. If you can, keeping one or two trusted Italian brands for comfort meals is nice. But UK brands are totally fine, especially for bakes and pasta salads.",
          ],
          [
            "Can I mix leftover shapes in one pot?",
            "Yes, as long as their cook times are close. Add the longer-cooking one first, then the other a couple of minutes later.",
          ],
          [
            "Does pasta always have to be al dente?",
            "It depends on the dish and who’s eating. The key is choosing pasta that doesn’t collapse so you can adjust without ending up with mush.",
          ],
          [
            "How do I stop wasting pasta?",
            "Weigh portions for a while (80–100 g per person). Plan the occasional “cupboard clear-out” pasta night with whatever is open.",
          ],
        ],

    // Related
    relatedH: it ? "Articoli correlati" : "Related reads",
    relatedNote: it
      ? "Alcuni link possono generarci una piccola commissione senza costi extra per te. Aiuta a mantenere gratuita la community."
      : "Some links may earn us a small commission at no extra cost to you. It helps keep the community free.",
    printableH: it
      ? "Scarica la scheda pasta (PDF)"
      : "Download the pasta cheat sheet (PDF)",
    printableP: it
      ? "Una pagina con i 4 formati base, tempi indicativi, consigli di cottura e spazio per segnare le marche che preferisci."
      : "A one-page sheet with 4 core shapes, indicative cook times, cooking tips and space to note your favourite brands.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla pasta" : "Ask a pasta question",
    foodGuide: it
      ? "Guida cucina italiana in UK →"
      : "Tiny UK Kitchen, Big Italian Flavour →",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  // JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Italian Pasta in the UK (2025): Best Brands, Shapes & Amazon Picks",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://resinaro.co.uk/community/italian-pasta-brands-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Pantry", "Italian UK"],
    image: [
      "https://resinaro.co.uk/images/community/italian-pasta-brands-uk-hero.jpg",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Community",
        item: "https://resinaro.co.uk/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Pasta italiana in UK"
            : "Italian Pasta in the UK",
        item:
          "https://resinaro.co.uk/community/italian-pasta-brands-uk",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come cuocere la pasta in una cucina UK"
        : "How to cook pasta properly in a UK kitchen",
    totalTime: "PT20M",
    step: (copy.howToSteps as [string, string][])
      .map(([title, text]: [string, string]) => ({
        "@type": "HowToStep",
        name: title,
        text,
      })),
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

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#summary", "#how-to"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/community/italian-pasta-brands-uk-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
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

          {/* CTA */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-800">
                  {copy.ctaCopy}
                </p>
                <p className="text-xs text-gray-600">
                  {copy.ctaSub}
                </p>
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
      <section className="mx-auto mt-8 max-w-7xl px-6">
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
              <p className="mt-1 text-sm text-gray-700">
                {x.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Summary ===== */}
      <section
        id="summary"
        className="mx-auto mt-14 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.tldrH}
            </h2>
            <div className="mt-4 space-y-4">
              {(copy.tldr as { label: string; body: string }[]).map(
                (item) => (
                  <p key={item.label} className="text-sm text-gray-800">
                    <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-900">
                      {item.label}
                    </span>{" "}
                    {item.body}
                  </p>
                ),
              )}
            </div>

            {/* Mini CTA */}
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">
                {copy.miniCtaP}
              </p>
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

          {/* Basics highlight cards */}
          <div className="space-y-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                {locale === "it"
                  ? "Cos’è la semola di grano duro?"
                  : "What is durum wheat semolina?"}
              </p>
              <p className="mt-1 text-sm text-gray-800">
                {locale === "it"
                  ? "È la farina grossolana di grano duro con cui si fa la pasta secca. Una buona semola contiene abbastanza proteine e dà una pasta che tiene la cottura, rimane elastica e ha sapore anche con condimenti semplici."
                  : "It’s the coarse flour from durum wheat used for dried pasta. Good semolina has enough protein and gives pasta that holds its shape, stays springy and tastes good even with simple sauces."}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                {locale === "it"
                  ? "Che cosa vuol dire “trafilata al bronzo”?"
                  : "What does “bronze-cut” mean?"}
              </p>
              <p className="mt-1 text-sm text-gray-800">
                {locale === "it"
                  ? "La pasta passa in trafile di bronzo che la rendono leggermente ruvida in superficie. Questo fa sì che il sugo si aggrappi meglio: una piccola differenza di consistenza che cambia molto la sensazione nel piatto."
                  : "The pasta is pushed through bronze dies, which make the surface slightly rough. Sauces cling better to that rough surface—small texture change, big difference on the plate."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Basics table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.basicsH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.basicsSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.basicsHeaders.map((h) => (
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
                {(copy.basicsRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 align-top text-gray-800"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Shapes table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.shapesH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {copy.shapesSub}
              </p>
            </div>
            <Link
              href="#how-to"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {locale === "it"
                ? "Vai alla cottura →"
                : "Jump to cooking tips →"}
            </Link>
          </div>

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
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 align-top text-gray-800"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Suggerimento: se vivi da solo, punta su rigatoni o penne rigate e fusilli. Li usi in mille modi e si conservano bene anche se non cucini ogni giorno."
              : "Tip: if you mostly cook for one, focus on rigatoni/penne and fusilli. They’re versatile and forgiving even if you don’t cook daily."}
          </p>
        </div>
      </section>

      {/* ===== Brands & Amazon ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.brandsH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.brandsSub}
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.brandsCols.map((h) => (
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
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 align-top text-gray-800"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-gray-600">
            {copy.affiliateNote}
          </p>

          {/* Affiliate link blocks */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Premium packs */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-emerald-900">
                {copy.affPremiumH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                <li>
                  {locale === "it"
                    ? "De Cecco spaghetti / linguine — "
                    : "De Cecco spaghetti / linguine — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti+case&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "vedi casse" : "see cases"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Rummo rigatoni / penne rigate — "
                    : "Rummo rigatoni / penne rigate — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=rummo+rigatoni+bulk&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "multipack" : "multipacks"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Box misti di pasta italiana — "
                    : "Mixed Italian pasta boxes — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=italian+pasta+selection+box&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "idee regalo" : "gift-style boxes"}
                  </a>
                </li>
              </ul>
            </div>

            {/* GF & wholewheat */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.affGfH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                <li>
                  {locale === "it"
                    ? "Rummo senza glutine — "
                    : "Rummo gluten-free — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "vedi formati" : "see shapes"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Pasta integrale italiana — "
                    : "Italian wholewheat pasta — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=wholewheat+italian+pasta&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "confronta" : "compare options"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Pasta di ceci / lenticchie — "
                    : "Chickpea / lentil pasta — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=chickpea+pasta&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "scopri" : "browse"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Bulk & storage */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.affBulkH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                <li>
                  {locale === "it"
                    ? "Casse di pasta mista — "
                    : "Mixed pasta cases — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=italian+pasta+case&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "ordina una volta" : "one-shot order"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Set di contenitori alti per spaghetti — "
                    : "Tall containers for spaghetti — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=spaghetti+storage+container&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "vedi set" : "see sets"}
                  </a>
                </li>
                <li>
                  {locale === "it"
                    ? "Pentola per pasta + scolapasta — "
                    : "Pasta pot + colander — "}
                  <a
                    href="https://www.amazon.co.uk/s?k=pasta+pot+with+strainer+lid&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="text-emerald-900 underline underline-offset-4"
                  >
                    {locale === "it" ? "combo utili" : "useful combos"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GF & wholewheat ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.gfSectionH}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {(copy.gfCards as { title: string; body: string }[]).map(
              (card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-800">
                    {card.body}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===== Storage ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.storageH}
          </h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-2">
            {(copy.storagePoints as string[]).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== How-to cook ===== */}
      <section
        id="how-to"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.howToH}
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              {copy.howToIntro}
            </p>
            <ol className="mt-4 list-decimal pl-6 text-sm text-gray-800 space-y-1.5">
              {(copy.howToSteps as string[][]).map(([title, text]) => (
                <li key={title}>
                  <strong>{title}</strong>{" "}
                  {text}
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm text-emerald-900">
                {copy.howToNote}
              </p>
            </div>
          </div>

          {/* Simple “pasta timeline” visual */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <svg
              viewBox="0 0 600 220"
              className="h-56 w-full"
            >
              <defs>
                <linearGradient
                  id="pastaGrid"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0"
                    stopColor="#A7F3D0"
                    stopOpacity="0.25"
                  />
                  <stop
                    offset="1"
                    stopColor="#A7F3D0"
                    stopOpacity="0.05"
                  />
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="600"
                height="220"
                fill="url(#pastaGrid)"
              />
              {[70, 230, 390, 550].map((x, i) => (
                <g key={x}>
                  <circle
                    cx={x}
                    cy={90}
                    r={16}
                    className="fill-white stroke-emerald-400"
                  />
                  <text
                    x={x}
                    y={95}
                    textAnchor="middle"
                    className="fill-emerald-900"
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {i + 1}
                  </text>
                  <text
                    x={x}
                    y={130}
                    textAnchor="middle"
                    className="fill-gray-800"
                    style={{ fontSize: 11 }}
                  >
                    {locale === "it"
                      ? [
                          "Acqua & sale",
                          "Mescola",
                          "Assaggia",
                          "Manteca",
                        ][i]
                      : [
                          "Water & salt",
                          "Stir",
                          "Taste",
                          "Toss in pan",
                        ][i]}
                  </text>
                  {i < 3 && (
                    <line
                      x1={x + 16}
                      y1={90}
                      x2={x + 110}
                      y2={90}
                      className="stroke-emerald-500"
                      strokeWidth={2}
                    />
                  )}
                </g>
              ))}
            </svg>
            <p className="mt-2 text-xs text-gray-600">
              {locale === "it"
                ? "Basta ricordare questi passaggi base: il resto è solo pratica."
                : "Remember these basic steps; the rest is just repetition."}
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
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
              <div className="mt-2 text-sm text-gray-700">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Related + footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6 mb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
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
                    ? "Dispensa italiana essenziale (UK): 21 prodotti che trovi su Amazon"
                    : "Italian Pantry Essentials in the UK: 21 Products You Can Get on Amazon"}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/starter-uk-kitchen-italian"
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                >
                  {copy.foodGuide}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/extra-virgin-olive-oil-uk-guide"
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                >
                  {locale === "it"
                    ? "Guida all’olio extra vergine d’oliva in UK"
                    : "Italian Extra Virgin Olive Oil in the UK: Guide & Amazon Picks"}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {copy.relatedNote}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              {copy.printableH}
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              {copy.printableP}
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
                {copy.printableBtn}
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
                href="/community/starter-uk-kitchen-italian"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {copy.foodGuide}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
