// src/app/[locale]/community/italian-coffee-beans-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Italian Coffee in the UK (2025): Beans & Ground Coffee for Moka, Espresso & Filter",
  description:
    "Find real Italian coffee in the UK: beans and ground coffee for moka pots, espresso machines and filter coffee, plus Amazon UK picks, storage tips and a printable coffee cheat sheet.",
  alternates: { canonical: "/community/italian-coffee-beans-uk" },
  openGraph: {
    title:
      "Italian Coffee in the UK (2025): Beans & Ground Coffee for Moka, Espresso & Filter",
    description:
      "Everyday blends and treat coffees for moka, espresso machines and filter, with Amazon UK links, storage tips and a printable Italian coffee cheat sheet.",
    type: "article",
    images: ["/images/community/italian-coffee-beans-hero.jpg"],
  },
};

const PUBLISHED = "2025-12-08";
const UPDATED = "2025-12-08";

/* ----------------------------- i18n strings ---------------------------- */

function t(locale: Locale) {
  const it = locale === "it";
  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Tazzine di caffè e pacchi di caffè italiano su un bancone di cucina in UK"
      : "Coffee cups and Italian coffee bags on a small UK kitchen counter",
    heroBadge: it
      ? "Caffè • Dispensa • UK"
      : "Coffee • Pantry • UK",
    heroTitleA: it
      ? "Caffè italiano a casa"
      : "Italian Coffee at Home",
    heroTitleB: it
      ? "Edizione UK 2025"
      : "UK Edition 2025",
    heroLead: it
      ? "Vuoi un caffè “come in Italia” ma vivi in UK? Qui trovi chicchi e macinati adatti a moka, espresso e filtro, tutti acquistabili su Amazon UK o nei supermercati principali."
      : "Want coffee that actually tastes like home while living in the UK? This guide matches beans and ground coffee to moka pots, espresso machines and filter brewers—all available on Amazon UK or in big supermarkets.",
    ctaCopy: it
      ? "Scarica la cheat sheet del caffè (PDF) con dosi, macinatura e consigli per moka, espresso e filtro."
      : "Get the 1-page coffee cheat sheet (PDF) with doses, grind sizes and tips for moka, espresso and filter.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. Opt out any time.",
    ctaBtn: it
      ? "Scarica la cheat sheet"
      : "Get the cheat sheet",
    pub: it ? "Pubblicato: 8 Dic 2025" : "Published: 8 Dec 2025",
    upd: it ? "Aggiornato: 8 Dic 2025" : "Updated: 8 Dec 2025",
    read: it ? "~10 min lettura" : "~10 min read",

    // USPs
    usp1H: it ? "Marche trovabili in UK" : "Brands you can find in the UK",
    usp1P: it
      ? "Lavazza, Illy, Segafredo e miscele simili: niente cacce infinite, solo caffè che puoi effettivamente acquistare."
      : "Lavazza, Illy, Segafredo and similar blends—no wild goose chase, just coffee you can actually buy in the UK.",
    usp2H: it ? "Abbinato alla tua macchina" : "Matched to your setup",
    usp2P: it
      ? "Chicchi e macinati consigliati in base a quello che hai: moka, macchina espresso, filtro o french press."
      : "Beans and ground coffee recommendations based on what you actually own: moka, espresso machine, filter or French press.",
    usp3H: it ? "Adatto alle scorte" : "Bulk & subscription friendly",
    usp3P: it
      ? "Suggerimenti per formati da 1 kg o multipack: risparmi senza bere caffè vecchio."
      : "Tips for 1 kg bags and multipacks so you save money without drinking stale coffee.",

    // TL;DR
    tldrH: it
      ? "Riassunto — tre mosse per un caffè italiano decente in UK"
      : "TL;DR — three moves for decent Italian coffee in the UK",
    tldr1: it ? "1) Parti dalla moka (o filtro)" : "1) Start with moka (or filter)",
    tldr1P: it
      ? "Se non hai una macchina espresso seria, una moka sul fornello o una french press sono la soluzione più semplice e stabile."
      : "Unless you have a serious espresso machine, a moka on the hob or a French press is the easiest, most reliable way to get good coffee at home.",
    tldr2: it ? "2) Scegli 1 “quotidiana” + 1 “coccola”" : "2) Pick 1 everyday + 1 treat coffee",
    tldr2P: it
      ? "Una miscela quotidiana da 1 kg per tutti i giorni, più un caffè un po’ migliore per il weekend o gli ospiti."
      : "One 1 kg everyday blend for weekdays, plus a slightly nicer coffee for weekends or guests.",
    tldr3: it
      ? "3) Conserva bene (non in frigo aperto)"
      : "3) Store it properly (not open in the fridge)",
    tldr3P: it
      ? "Usa barattoli ermetici opachi, lontano dal fornello. Apri solo una confezione alla volta."
      : "Use airtight, opaque containers away from the hob. Only open one bag at a time.",
    miniCtaP: it
      ? "Vuoi una tabella stampabile con dosi, macinature e miscele consigliate?"
      : "Want a printable chart with brew ratios, grind sizes and recommended blends?",
    miniCtaBtn: it
      ? "Inviami la cheat sheet"
      : "Email me the cheat sheet",

    // Key takeaways
    take1H: it ? "Scegli in base al metodo" : "Choose based on brew method",
    take1P: it
      ? "Stessa marca, macinature diverse: un caffè perfetto in moka può risultare piatto in filtro e viceversa."
      : "Same brand, different grind: a coffee that shines in moka can taste flat in filter and vice versa.",
    take2H: it ? "Compra un po’ più grande (ma non enorme)" : "Buy slightly bigger (not massive)",
    take2P: it
      ? "Formati da 500 g–1 kg hanno spesso il miglior rapporto qualità/prezzo, se li finisci entro 4–6 settimane."
      : "500 g–1 kg bags often have the best value if you’ll finish them within 4–6 weeks.",
    take3H: it ? "La conservazione vale quanto la marca" : "Storage matters as much as the brand",
    take3P: it
      ? "Un buon caffè conservato male perde profumo in pochi giorni. Barattoli ermetici cambiano il gioco."
      : "A decent coffee stored badly loses aroma in days. Simple airtight jars change everything.",

    // Setup table
    setupH: it
      ? "Scegli il tuo setup caffè in una cucina UK"
      : "Choose your coffee setup in a UK kitchen",
    setupSub: it
      ? "Non devi comprare tutto. Scegli un setup principale e compra il caffè in base a quello."
      : "You don’t need every gadget. Pick one main setup and buy coffee to match it.",
    setupHeaders: it
      ? ["Setup", "Funziona meglio con", "Cosa comprare"]
      : ["Setup", "Works best with", "What to buy"],
    setupRows: it
      ? [
          [
            "Moka sul fornello",
            "Fiamma media e macinatura moka dedicata",
            "Miscele italiane classiche (Lavazza, Segafredo, Illy) con etichetta “moka” o “espresso” macinato fine.",
          ],
          [
            "Macchina espresso domestica",
            "Chicchi freschi + macinino o macinatura espresso di qualità",
            "Chicchi espresso 100% arabica o blend 70/30; valuta un macinino se vuoi più controllo.",
          ],
          [
            "Filtro / French press",
            "Macinatura media o grossa, acqua non troppo bollente",
            "Miscele più leggere (“breakfast blend” o “filter”) per evitare amaro eccessivo.",
          ],
          [
            "Capsule (Nespresso, compatibili)",
            "Macchina a capsule dedicata",
            "Capsule compatibili italiane (espresso, ristretto, deca) da comprare in multipack.",
          ],
        ]
      : [
          [
            "Moka on the hob",
            "Medium heat and moka-specific grind",
            "Classic Italian blends (Lavazza, Segafredo, Illy) labelled for moka or fine espresso grind.",
          ],
          [
            "Home espresso machine",
            "Fresh beans + grinder or good espresso grind",
            "Espresso beans (100% arabica or 70/30 blends); consider a grinder for more control.",
          ],
          [
            "Filter / French press",
            "Medium or coarse grind, not-boiling water",
            "Lighter blends (“breakfast” or “filter”) to avoid harsh bitterness.",
          ],
          [
            "Capsule machine",
            "Dedicated pod machine",
            "Italian-style compatible capsules (espresso, ristretto, decaf) bought in multipacks.",
          ],
        ],

    // Beans table
    beansH: it
      ? "Chicchi italiani per moka, espresso e filtro"
      : "Italian beans for moka, espresso & filter",
    beansSub: it
      ? "Punta a una miscela quotidiana + una miscela “coccola”. Qui alcune categorie utili."
      : "Aim for one everyday workhorse + one “treat” bag. Here are useful categories.",
    beansHeaders: it
      ? ["Uso", "Scelta quotidiana", "Scelta “coccola”"]
      : ["Use case", "Everyday pick", "Weekend / treat pick"],
    beansRows: it
      ? [
          [
            "Moka, caffè “da casa”",
            "Blend bilanciato con robusta per cremina e corpo",
            "100% arabica morbida, con note di nocciola e cioccolato.",
          ],
          [
            "Macchina espresso",
            "Blend espresso 60–80% arabica, tostatura media",
            "Monorigine o blend premium, con descrizione chiara del profilo aromatico.",
          ],
          [
            "Filtro / French press",
            "Blend leggero, tostatura chiara-media",
            "Chicchi con note di frutta secca e cacao, tostati per filtro.",
          ],
        ]
      : [
          [
            "Moka, everyday home coffee",
            "Balanced blend with a little robusta for crema and body",
            "Smooth 100% arabica with hazelnut/chocolate notes.",
          ],
          [
            "Espresso machine",
            "Espresso blend (60–80% arabica), medium roast",
            "Single-origin or premium blends with a clear flavour profile.",
          ],
          [
            "Filter / French press",
            "Lighter breakfast-style blend, medium roast",
            "Beans roasted specifically for filter with nutty/cocoa notes.",
          ],
        ],

    // Ground coffee & decaf table
    groundH: it
      ? "Caffè macinato & decaffeinato (quando i chicchi non servono)"
      : "Ground coffee & decaf (when beans are overkill)",
    groundSub: it
      ? "Se non hai un macinino, meglio un buon macinato che chicchi macinati male."
      : "If you don’t own a grinder, a good pre-ground coffee is better than badly ground beans.",
    groundHeaders: it
      ? ["Uso", "Scelta consigliata", "Note veloci"]
      : ["Use case", "Recommended choice", "Quick notes"],
    groundRows: it
      ? [
          [
            "Moka",
            "Caffè macinato “per moka/espresso” con descrizione di cremosa e intensa",
            "Controlla la data di scadenza e preferisci confezioni da 250–500 g.",
          ],
          [
            "Filtro / French press",
            "Caffè macinato “filter” o “ground coffee” non troppo fine",
            "Evita i macinati sottilissimi (rischio amaro e residui sul fondo).",
          ],
          [
            "Decaffeinato",
            "Blend deca italiano in chicchi o macinato",
            "Perfetto per la sera; puoi mischiare 50/50 con il caffè normale.",
          ],
          [
            "Scorta d’emergenza",
            "Caffè solubile di buona marca",
            "Non è un espresso, ma salva mattine e viaggi. Tienilo in un barattolo ermetico.",
          ],
        ]
      : [
          [
            "Moka",
            "Pre-ground labelled for “moka/espresso”, described as creamy and intense",
            "Check best-before dates and aim for 250–500 g packs.",
          ],
          [
            "Filter / French press",
            "Ground for “filter” or “ground coffee” that isn’t too fine",
            "Avoid ultra-fine grinds (bitterness and sludge risk).",
          ],
          [
            "Decaf",
            "Italian-style decaf blend in beans or ground",
            "Ideal for evenings; you can mix 50/50 with regular coffee.",
          ],
          [
            "Emergency stash",
            "Decent instant coffee",
            "Not an espresso, but saves mornings and travel days. Store in an airtight jar.",
          ],
        ],

    // How-to
    howToH: it
      ? "Come scegliere il caffè italiano in 5 minuti"
      : "How to choose Italian coffee in 5 minutes",
    howToIntro: it
      ? "Non serve studiare il lessico dei baristi. Bastano tre decisioni veloci."
      : "You don’t need to learn full barista jargon. Three quick decisions are enough.",
    howToSteps: it
      ? [
          [
            "1) Scegli il metodo principale",
            "Decidi se farai quasi sempre moka, filtro o espresso. Il resto è bonus.",
          ],
          [
            "2) Scegli formato & frequenza",
            "Se bevi 1–2 caffè al giorno, un sacco da 500 g dura 4–6 settimane; da 1 kg va bene se siete in due.",
          ],
          [
            "3) Prendi un quotidiano + un “coccola”",
            "Una miscela stabile e una più particolare da usare nel weekend. Così provi cose nuove senza rischiare la routine.",
          ],
        ]
      : [
          [
            "1) Pick your main brew method",
            "Decide whether you’ll mostly use moka, filter or espresso. Everything else is extra.",
          ],
          [
            "2) Choose bag size & pace",
            "If you drink 1–2 cups a day, 500 g lasts around 4–6 weeks; 1 kg is great for two people.",
          ],
          [
            "3) Buy one workhorse + one treat",
            "One reliable everyday blend and one more special bag for weekends, so you can experiment without ruining your routine.",
          ],
        ],
    howToNote: it
      ? "Suggerimento: fai foto alle confezioni che ti piacciono, così puoi riordinarle facilmente o confrontare i prezzi."
      : "Tip: take photos of bags you like so you can re-order them easily or compare prices later.",

    // Storage
    storageH: it
      ? "Conservazione: come non rovinare un buon caffè in una cucina UK"
      : "Storage: how not to ruin good coffee in a UK kitchen",
    storagePoints: it
      ? [
          "Evita ripiani sopra il forno o vicino ai fornelli: il calore rovina gli oli del caffè.",
          "Usa barattoli ermetici opachi o in vetro spesso; niente sacchetti semi-aperti con mollette improvvisate.",
          "Apri una sola confezione alla volta; il resto tienilo chiuso in un armadietto fresco e asciutto.",
          "Niente frigo o freezer aperti ogni giorno: condensa = caffè umido e stanco.",
        ]
      : [
          "Avoid shelves above the oven or next to the hob—heat kills coffee oils quickly.",
          "Use airtight, opaque jars or thick glass; don’t rely on half-open bags with random clips.",
          "Open one bag at a time; keep backups sealed in a cool, dry cupboard.",
          "Skip the daily-open fridge/freezer trick: condensation means damp, tired coffee.",
        ],

    // Kit (affiliate)
    kitH: it
      ? "Kit caffè italiano (versione UK, con link Amazon)"
      : "Italian coffee starter kit (UK version, Amazon-friendly)",
    kitSub: it
      ? "Compatto, sensato, adatto a cucine piccole. Alcuni link sono affiliati Amazon e potrebbero generarci una piccola commissione, senza costi extra per te."
      : "Compact, realistic and small-kitchen friendly. Some links are Amazon affiliate links and may earn us a small commission at no extra cost to you.",
    backToHow: it ? "Torna alla guida ↑" : "Back to How-To ↑",

    kitBeansH: it ? "1) Chicchi per moka & espresso" : "1) Beans for moka & espresso",
    kitBeansList: it
      ? [
          "1 sacco da 1 kg di miscela italiana per espresso/moka come “everyday blend”.",
          "1 sacco da 500 g di 100% arabica o monorigine come “coccola weekend”.",
          "Se hai un macinino, scegli sempre in chicchi; macini solo ciò che ti serve.",
        ]
      : [
          "One 1 kg bag of Italian espresso/moka-style beans as your everyday blend.",
          "One 500 g bag of 100% arabica or single-origin as your weekend treat.",
          "If you have a grinder, always buy beans and grind as needed.",
        ],
    kitGroundH: it
      ? "2) Macinato pronto & decaffeinato"
      : "2) Ready-ground coffee & decaf",
    kitGroundList: it
      ? [
          "2–3 pacchi da 250 g di macinato per moka (rotazione veloce).",
          "1 pacco di macinato per filtro/french press per ospiti e colazioni lunghe.",
          "1 miscela decaffeinata italiana (chicchi o macinato) da usare la sera.",
        ]
      : [
          "Two or three 250 g packs of moka-ground coffee (fast rotation).",
          "One pack of filter/French press grind for guests and slow breakfasts.",
          "One Italian-style decaf blend (beans or ground) for evening coffee.",
        ],
    kitExtrasH: it
      ? "3) Extra furbi: barattoli, bilancia, filtro acqua"
      : "3) Smart extras: jars, scale, water filter",
    kitExtrasList: it
      ? [
          "Set di barattoli ermetici medi (vetro con tappo o acciaio) solo per il caffè.",
          "Bilancia digitale per dosare (7–9 g per moka piccola, 14–18 g per doppio espresso).",
          "Caraffa filtrante o filtro rubinetto per acqua più costante.",
        ]
      : [
          "Medium airtight jars (glass with lid or steel) dedicated only to coffee.",
          "Digital scale for dosing (7–9 g for a small moka, 14–18 g for a double espresso).",
          "Water filter jug or tap filter for more consistent water.",
        ],
    whatYouGetH: it
      ? "Cosa ottieni con questo kit"
      : "What this kit gives you",
    whatYouGetList: it
      ? [
          "Un caffè affidabile ogni mattina, senza doverci pensare troppo.",
          "Meno sprechi: finisci i sacchetti prima che il caffè perda profumo.",
          "Abitudine semplice da mantenere anche se vivi con coinquilini.",
          "Piccoli momenti “Italia” a casa, anche con il cielo grigio UK.",
        ]
      : [
          "A reliable coffee routine every morning without overthinking it.",
          "Less waste: you finish bags before the coffee goes flat.",
          "A system that still works even in a shared kitchen.",
          "Little “Italy at home” moments even under a grey UK sky.",
        ],
    oneToOne: it
      ? "Vuoi consigli su misura per il tuo setup caffè o per un primo ordine grande?"
      : "Want personalised advice on your coffee setup or first big order?",
    getFreeAdvice: it ? "Chiedi un consiglio gratuito" : "Get free advice",
    exploreServices: it ? "Scopri i servizi Resinaro" : "Explore Resinaro services",
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a mantenere gratuite le guide."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // FAQ
    faqH: it
      ? "FAQ — caffè italiano, versione Regno Unito"
      : "FAQ — Italian coffee, UK edition",
    faqs: it
      ? [
          [
            "Quanti caffè posso fare con 1 kg di chicchi?",
            "Dipende dalla dose, ma in media 1 kg copre circa 120–140 espressi singoli o 70–90 moke da 2 tazze.",
          ],
          [
            "Devo per forza comprare tutto “made in Italy”?",
            "Non necessariamente. Alcune miscele torrefatte altrove sono ottime. Guarda tostatura, recensioni e data di scadenza più che la bandierina.",
          ],
          [
            "Meglio chicchi o macinato?",
            "Se hai un macinino e un po’ di voglia, i chicchi sono più versatili e profumati. Se sei sempre di fretta, prendi un buon macinato e concentrati sulla conservazione.",
          ],
          [
            "Posso tenere il caffè in frigo o freezer?",
            "Meglio di no se lo apri spesso: la condensa rovina il caffè. Molto meglio barattoli ermetici in dispensa.",
          ],
        ]
      : [
          [
            "Roughly how many coffees do I get from 1 kg of beans?",
            "It depends on your dose, but roughly 120–140 single espressos or 70–90 two-cup mokas per kilo.",
          ],
          [
            "Does it have to be roasted in Italy?",
            "Not always. Some beans roasted elsewhere still taste very Italian. Focus on roast level, reviews and freshness more than the flag.",
          ],
          [
            "Beans or ground coffee?",
            "If you own a grinder and don’t mind one extra step, beans are more flexible and aromatic. If you’re always rushing, good pre-ground + proper storage is totally fine.",
          ],
          [
            "Should I keep coffee in the fridge or freezer?",
            "Not if you open it every day: condensation hurts flavour. Airtight jars in a cool cupboard are much safer.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    printableH: it
      ? "Scarica la cheat sheet del caffè (PDF)"
      : "Download the Italian coffee cheat sheet (PDF)",
    printableP: it
      ? "Una pagina con misure, macinature, setup consigliati e spazio per segnare le miscele preferite."
      : "A one-page cheat sheet with brew ratios, grind sizes, recommended setups and space to note your favourite blends.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sul caffè" : "Ask a coffee question",
    londonGuide: it
      ? "Italiani a Londra: dove trovare bar & caffè →"
      : "Italians in London: where to find good coffee →",
    affNoteEnd: it
      ? "Nota affiliate: alcuni link possono generarci una piccola commissione senza costi extra per te. Aiuta a mantenere gratuita la community."
      : "Affiliate note: some links may earn us a small commission at no extra cost to you. It helps keep the community free.",
  };
}

/* -------------------------------- Page --------------------------------- */

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  const howToAnchor = "#how-to";
  const kitAnchor = "#coffee-kit";

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Italian Coffee in the UK (2025): Beans & Ground Coffee for Moka, Espresso & Filter",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/italian-coffee-beans-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Coffee", "Italian UK"],
    image: [
      "https://resinaro.co.uk/public/images/community/italian-coffee-beans-hero.jpg",
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
            ? "Caffè italiano in UK"
            : "Italian Coffee in the UK",
        item: "https://resinaro.co.uk/community/italian-coffee-beans-uk",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come scegliere il caffè italiano giusto in una cucina UK"
        : "How to choose the right Italian coffee in a UK kitchen",
    totalTime: "PT5M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Moka o filtro" : "Moka pot or filter brewer",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it"
          ? "Caffè in chicchi o macinato"
          : "Coffee beans or ground coffee",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name:
          locale === "it"
            ? "Bilancia o cucchiaino dosatore"
            : "Scale or dosing spoon",
      },
    ],
    step: (copy.howToSteps as string[][]).map(([name, text]) => ({
      "@type": "HowToStep",
      name,
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
            src="/images/community/italian-coffee-beans-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-36 sm:pt-32 md:pt-40 md:pb-44">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-amber-200">{copy.heroTitleB}</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
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
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-amber-600 px-5 font-semibold text-white shadow hover:bg-amber-700"
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
      <section className="mx-auto mt-10 md:mt-14 max-w-7xl px-6">
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
              <h3 className="text-sm font-semibold text-amber-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Summary & Key Takeaways ===== */}
      <section id="summary" className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-lg font-semibold text-amber-800">
              {copy.tldrH}
            </p>
            <div className="mt-4 space-y-5">
              <p>
                <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-900">
                  {copy.tldr1}
                </span>{" "}
                {copy.tldr1P}
              </p>
              <p>
                <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-900">
                  {copy.tldr2}
                </span>{" "}
                {copy.tldr2P}
              </p>
              <p>
                <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-900">
                  {copy.tldr3}
                </span>{" "}
                {copy.tldr3P}
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm text-amber-900">{copy.miniCtaP}</p>
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
                  className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:max-w-sm"
                />
                <button
                  type="submit"
                  className="h-11 rounded-2xl bg-amber-600 px-5 font-semibold text-white hover:bg-amber-700"
                >
                  {copy.miniCtaBtn}
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: copy.take1H, body: copy.take1P },
              { title: copy.take2H, body: copy.take2P },
              { title: copy.take3H, body: copy.take3P },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                  {locale === "it" ? "Punto chiave" : "Key takeaway"}
                </p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Setup table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.setupH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">{copy.setupSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 text-sm font-semibold text-amber-800 hover:bg-amber-100"
            >
              {locale === "it"
                ? "Vedi le 3 decisioni →"
                : "See the 3 decisions →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.setupHeaders.map((h) => (
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
                {(copy.setupRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td key={j} className="p-3 text-gray-800">
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
              ? "Suggerimento: se usi induzione, verifica la compatibilità della moka o usa un adattatore."
              : "Tip: if you’re on induction, make sure your moka is induction-safe or use an adapter plate."}
          </p>
        </div>
      </section>

      {/* ===== Beans table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.beansH}</h2>
          <p className="mt-1 text-sm text-gray-600">{copy.beansSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.beansHeaders.map((h) => (
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
                {(copy.beansRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td key={j} className="p-3 text-gray-800">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Ground & decaf table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.groundH}</h2>
          <p className="mt-1 text-sm text-gray-600">{copy.groundSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.groundHeaders.map((h) => (
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
                {(copy.groundRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td key={j} className="p-3 text-gray-800">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== How-To & Storage ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.howToH}</h2>
            <p className="mt-2 text-sm text-gray-700">
              {copy.howToIntro}
            </p>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              {(copy.howToSteps as string[][]).map(([bold, rest]) => (
                <li className="mb-3" key={bold}>
                  <strong>{bold}</strong> {rest}
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">{copy.howToNote}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.storageH}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
              {(copy.storagePoints as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-gray-800">
              {locale === "it"
                ? "Se vivi con coinquilini, tieni tutto il caffè in un solo box etichettato con il tuo nome. Meno discussioni, più espressi."
                : "If you share a kitchen, keep all your coffee gear in one labelled box. Fewer arguments, more espressos."}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kit (affiliate) ===== */}
      <section id="coffee-kit" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.kitH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.kitSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="text-sm font-semibold text-amber-900 underline underline-offset-4"
            >
              {copy.backToHow}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              {/* Beans */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitBeansH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitBeansList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=lavazza+coffee+beans+1kg&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Vedi chicchi tipo Lavazza 1 kg"
                      : "See 1 kg Lavazza-style beans"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=illy+coffee+beans&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Chicchi tipo Illy"
                      : "Illy-style beans"}
                  </a>
                </div>
              </div>

              {/* Ground & decaf */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitGroundH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitGroundList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=italian+ground+coffee+moka&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Macinato per moka"
                      : "Ground coffee for moka"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=italian+decaf+coffee&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Miscele decaffeinate"
                      : "Italian-style decaf blends"}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Extras */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitExtrasH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitExtrasList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=airtight+coffee+canister&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Barattoli ermetici per caffè"
                      : "Airtight coffee canisters"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                    href="https://www.amazon.co.uk/s?k=digital+kitchen+scale&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Bilance da cucina digitali"
                      : "Digital kitchen scales"}
                  </a>
                </div>
              </div>

              {/* What you get + CTA */}
              <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-amber-900">
                  {copy.whatYouGetH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.whatYouGetList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
                  <p className="text-sm text-amber-900">{copy.oneToOne}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white hover:bg-amber-700"
                    >
                      {copy.getFreeAdvice}
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-white px-5 text-sm font-semibold text-amber-900 hover:bg-amber-50"
                    >
                      {copy.exploreServices}
                    </Link>
                  </div>
                  <p className="mt-2 text-[11px] text-amber-900/80">
                    {copy.affiliateNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.faqH}</h2>
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

      {/* ===== Related + Footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.relatedH}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                  href="/community/moka-coffee-kit"
                >
                  {locale === "it"
                    ? "Kit caffè moka (Edizione UK)"
                    : "The No-Machine Italian Coffee Kit (UK Edition)"}
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                  href="/community/starter-uk-kitchen-italian"
                >
                  Tiny UK Kitchen, Big Italian Flavour
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-900 underline underline-offset-4 hover:text-amber-700"
                  href="/community/italian-pantry-essentials-uk"
                >
                  {locale === "it"
                    ? "Dispensa italiana essenziale in UK"
                    : "Italian Pantry Essentials in the UK"}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.affNoteEnd}</p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
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
                className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:max-w-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-amber-600 px-6 font-semibold text-white hover:bg-amber-700"
              >
                {copy.printableBtn}
              </button>
            </form>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50"
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
