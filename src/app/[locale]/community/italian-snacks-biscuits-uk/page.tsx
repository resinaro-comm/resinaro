// src/app/[locale]/community/italian-snacks-biscuits-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Italian Biscuits & Comfort Snacks in the UK (2025): Amazon Picks & Taste-of-Home Box",
  description:
    "Find Italian biscuits, spreads and savoury snacks in the UK: Mulino Bianco-style biscuits, Pan di Stelle, taralli, grissini and more with Amazon UK links and a comfort “taste-of-home” box idea.",
  alternates: { canonical: "/community/italian-snacks-biscuits-uk" },
  openGraph: {
    title:
      "Italian Biscuits & Comfort Snacks in the UK (2025): Amazon Picks & Taste-of-Home Box",
    description:
      "Italian biscuits, spreads and savoury snacks you can get in the UK, plus how to build a small comfort shelf in a tiny UK kitchen. Amazon UK links and snack kit ideas.",
    type: "article",
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
      ? "Scaffale di cucina con biscotti italiani, snack e creme spalmabili in una piccola cucina UK"
      : "Kitchen shelf with Italian biscuits, snacks and spreads in a small UK kitchen",
    heroBadge: it
      ? "Comfort food • Snack italiani"
      : "Comfort food • Italian snacks",
    heroTitleA: it
      ? "Biscotti & snack di conforto italiani"
      : "Italian Biscuits & Comfort Snacks",
    heroTitleB: it ? "Edizione UK 2025" : "UK Edition 2025",
    heroLead: it
      ? "Mulino Bianco, taralli, creme al pistacchio e snack da aperitivo — una guida sensata per trovare in UK i sapori di casa e costruire una piccola “taste-of-home box”."
      : "Mulino Bianco-style biscuits, taralli, pistachio spreads and aperitivo snacks — a realistic guide to finding a taste of home in the UK and building a small “taste-of-home box”.",
    ctaCopy: it
      ? "Scarica la checklist snack di conforto (PDF) + una mail al mese con consigli per italiani nel Regno Unito."
      : "Get the comfort snack checklist (PDF) + one email a month with Italian-in-the-UK tips.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. Opt out any time.",
    ctaBtn: it ? "Scarica la checklist" : "Get the checklist",
    pub: it ? "Pubblicato: 8 Dic 2025" : "Published: 8 Dec 2025",
    upd: it ? "Aggiornato: 8 Dic 2025" : "Updated: 8 Dec 2025",
    read: it ? "~10 min lettura" : "~10 min read",

    // USPs
    usp1H: it ? "Marchi italiani dove ha senso" : "Italian brands where it counts",
    usp1P: it
      ? "Ti indichiamo biscotti e snack italiani (o molto simili) che si trovano su Amazon UK, senza impazzire fra mille prodotti a caso."
      : "We highlight Italian biscuits and snacks (or very close dupes) available on Amazon UK, without making you scroll through endless random products.",
    usp2H: it ? "Pensato per cucine piccole" : "Tiny-kitchen friendly",
    usp2P: it
      ? "Una sola scatola “gusto di casa” + pochi prodotti chiave. Comfort sì, dispensa invasa no."
      : "One small “taste-of-home” box + a few key products. Comfort yes, exploding cupboards no.",
    usp3H: it ? "Link chiari, budget consapevole" : "Clear links, budget-aware",
    usp3P: it
      ? "Qualche link affiliato Amazon UK, note trasparenti su quando conviene il multipack e quando è meglio il supermercato sotto casa."
      : "A few Amazon UK affiliate links, with honest notes on when multipacks make sense and when the local supermarket is enough.",

    // TL;DR
    tldrH: it
      ? "Riassunto — come farti una “taste-of-home box” sensata"
      : "TL;DR — build a sane “taste-of-home box”",
    tldr1: it ? "1) Una scatola, non un armadio" : "1) One box, not a whole cupboard",
    tldr1P: it
      ? "Scegli una scatola dedicata ai prodotti “gusto di casa”: biscotti, creme e snack che ti tirano su. Così non invadono la dispensa condivisa."
      : "Pick one dedicated box for your “taste of home”: biscuits, spreads and snacks that cheer you up. They don’t take over the shared cupboard.",
    tldr2: it ? "2) 2 famiglie di biscotti" : "2) 2 biscuit families, max",
    tldr2P: it
      ? "Una linea da colazione (tipo frollini da inzuppo) e una più “treat” (Pan di Stelle, pistacchio, ecc.). Bastano per coprire colazione + voglia di dolce."
      : "One breakfast-style biscuit line and one more ‘treat’ style (chocolate, pistachio etc.). Enough to cover breakfast and sweet cravings.",
    tldr3: it ? "3) Multipack solo se li finisci" : "3) Multipacks only if you’ll finish them",
    tldr3P: it
      ? "Usa i multipack Amazon per ciò che mangi davvero ogni settimana. Per gli sfizi rari, meglio una confezione singola dal supermercato o negozio italiano."
      : "Use Amazon multipacks only for what you eat every week. For rare treats, a single pack from a local supermarket or Italian shop is better.",
    miniCtaP: it
      ? "Vuoi una checklist stampabile della “taste-of-home box” da attaccare all’anta?"
      : "Want a fridge/cupboard-friendly checklist for your taste-of-home box?",
    miniCtaBtn: it ? "Inviami il PDF snack" : "Email me the snack PDF",

    // Key takeaways
    take1H: it ? "Comfort sì, ma con budget" : "Comfort, but budget-aware",
    take1P: it
      ? "Basta un piccolo budget mensile e 2–3 prodotti fissi per sentirsi meno lontani da casa, senza trasformare gli snack in una spesa enorme."
      : "A small monthly budget and 2–3 regular products are enough to feel less far from home without turning snacks into a huge expense.",
    take2H: it ? "Occhio a date & multipack" : "Watch dates & multipacks",
    take2P: it
      ? "Prima di un multipack, chiediti se riuscirai davvero a finirlo. Meglio meno prodotti, ma sempre freschi."
      : "Before buying a multipack, ask if you’ll really finish it. Fewer products that stay fresh beat a mountain of stale biscuits.",
    take3H: it ? "Scaffale conforto, non nascondiglio" : "Comfort shelf, not a black hole",
    take3P: it
      ? "Tieni biscotti e creme in vista (contenitori trasparenti): se li vedi, li usi e non finiscono dimenticati in fondo all’armadio."
      : "Keep biscuits and spreads visible in clear tubs: if you see them, you eat them before they go off.",

    // Sweet biscuits section
    sweetH: it
      ? "Biscotti da colazione & merenda"
      : "Breakfast & afternoon biscuits",
    sweetSub: it
      ? "La base del comfort: frollini, biscotti al cioccolato e opzioni per l’inzuppo con tè o caffè."
      : "The comfort base: dunking biscuits, chocolatey treats and everyday options for tea or coffee.",
    sweetHeaders: it
      ? ["Categoria", "Esempio", "Momento migliore"]
      : ["Category", "Example", "Best moment"],
    sweetRows: it
      ? [
          [
            "Frollini da colazione",
            "Tipo Mulino Bianco / frollini semplici",
            "Colazione veloce con latte o tè",
          ],
          [
            "Biscotti al cioccolato",
            "Stile Pan di Stelle / gocce di cioccolato",
            "Dopo cena o studio tardivo",
          ],
          [
            "Biscotti integrali",
            "Frollini integrali o ai cereali",
            "Break di metà mattina meno pesante",
          ],
          [
            "Biscotti per l’inzuppo",
            "Savoiardi / biscotti lunghi",
            "Tiramisù casalingo o caffè lungo",
          ],
        ]
      : [
          [
            "Breakfast-style biscuits",
            "Italian-style plain frollini",
            "Quick breakfast with milk or tea",
          ],
          [
            "Chocolate biscuits",
            "Pan di Stelle-style / choc chip",
            "After dinner or late-night study",
          ],
          [
            "Wholegrain biscuits",
            "Cereal / digestive-style biscuits",
            "Lighter mid-morning break",
          ],
          [
            "Dunking biscuits",
            "Ladyfingers / long biscuits",
            "Homemade tiramisù or long coffee",
          ],
        ],

    // Spreads & creamy stuff
    spreadsH: it
      ? "Creme spalmabili, cacao & pistacchio"
      : "Spreads: chocolate, hazelnut & pistachio",
    spreadsSub: it
      ? "Una piccola selezione basta: una crema “sempre in casa” e una più speciale per quando serve un premio."
      : "A tiny line-up is enough: one everyday spread and one ‘treat’ jar for rough days.",
    spreadsHeaders: it
      ? ["Tipo", "Esempio", "Come usarla"]
      : ["Type", "Example", "How to use"],
    spreadsRows: it
      ? [
          [
            "Crema cacao & nocciole",
            "Stile Nutella / marche italiane",
            "Pane tostato, crêpes, cucchiaino extra in giornate pesanti",
          ],
          [
            "Crema al pistacchio",
            "Pistacchio dolce spalmabile",
            "Su fette biscottate, pancake o ripieno per cornetti",
          ],
          [
            "Creme proteiche",
            "Versioni con più proteine",
            "Per chi vuole qualcosa di dolce senza esagerare con lo zucchero",
          ],
          [
            "Confetture di frutta",
            "Albicocca, ciliegia, frutti di bosco",
            "Crostata veloce o colazione con yogurt",
          ],
        ]
      : [
          [
            "Chocolate hazelnut spread",
            "Nutella-style / Italian brands",
            "Toast, crêpes, spoonful on rough days",
          ],
          [
            "Pistachio cream",
            "Sweet pistachio spread",
            "On fette biscottate, pancakes or as a croissant filling",
          ],
          [
            "Protein-style spreads",
            "Higher-protein chocolate/hazelnut",
            "For a sweet moment without going heavy on sugar",
          ],
          [
            "Fruit jams",
            "Apricot, cherry, berries",
            "Quick crostata or breakfast with yoghurt",
          ],
        ],

    // Savoury snacks / aperitivo
    savouryH: it
      ? "Snack salati: taralli, grissini & co."
      : "Savoury snacks: taralli, grissini & more",
    savourySub: it
      ? "Per aperitivi a casa, serate film o quando ti manca il bar sotto casa."
      : "For at-home aperitivo, movie nights or when you miss the bar back home.",
    savouryHeaders: it
      ? ["Prodotto", "Dettagli da cercare", "Abbinamento veloce"]
      : ["Product", "What to look for", "Quick pairing"],
    savouryRows: it
      ? [
          [
            "Taralli",
            "All’olio d’oliva, non troppo secchi",
            "Olive, formaggi, vino o birra",
          ],
          [
            "Grissini",
            "Sottili, croccanti, confezioni richiudibili",
            "Prosciutto, formaggio spalmabile, pesto",
          ],
          [
            "Cracker tipo schiacciata",
            "Con olio d’oliva e rosmarino",
            "Tagliere veloce con salumi e formaggi",
          ],
          [
            "Mix di frutta secca",
            "Poco salata, mix mediterraneo",
            "Aperitivo last-minute o snack da scrivania",
          ],
        ]
      : [
          [
            "Taralli",
            "With olive oil, not too dry",
            "Olives, cheese, a glass of wine or beer",
          ],
          [
            "Grissini (breadsticks)",
            "Thin, crisp, resealable packs",
            "Prosciutto, soft cheese, pesto dip",
          ],
          [
            "Flatbread-style crackers",
            "Olive oil and rosemary if possible",
            "Fast board with cured meats and cheese",
          ],
          [
            "Nut mixes",
            "Lightly salted, Mediterranean style",
            "Last-minute aperitivo or desk snack",
          ],
        ],

    // How-to / taste-of-home box
    howToH: it
      ? "Come montare la tua “taste-of-home box” in una sera"
      : "How to build your taste-of-home box in one evening",
    howToIntro: it
      ? "Non serve riempire il carrello. Bastano 3 mini-categorie per avere un angolo di Italia a casa, anche in una stanza in affitto."
      : "You don’t need to fill an entire trolley. Three mini-categories are enough to have a little corner of Italy at home, even in a rental room.",
    howToSteps: it
      ? [
          [
            "Fase 1 — dolce da colazione",
            "Scegli una famiglia di biscotti da colazione + una confettura o crema cacao & nocciole.",
          ],
          [
            "Fase 2 — snack da studio/pausa",
            "Aggiungi una scatola di biscotti “treat” (cioccolato o pistacchio) e una crema speciale.",
          ],
          [
            "Fase 3 — aperitivo salato",
            "Completa con un paio di snack salati (taralli, grissini) che funzionano sia da soli sia con un tagliere veloce.",
          ],
        ]
      : [
          [
            "Phase 1 — breakfast sweetness",
            "Pick one breakfast-style biscuit family + one jam or chocolate-hazelnut spread.",
          ],
          [
            "Phase 2 — study/coffee snacks",
            "Add one “treat” biscuit box (chocolate or pistachio) and a special spread you really love.",
          ],
          [
            "Phase 3 — savoury aperitivo",
            "Finish with one or two savoury snacks (taralli, grissini) that work solo or with a quick board.",
          ],
        ],
    howToNote: it
      ? "Suggerimento: se vivi con altre persone, metti il tuo nome sulla scatola e concorda chiaramente che è il tuo angolo di comfort."
      : "Tip: if you live with others, label the box with your name and agree clearly that it’s your little comfort corner.",

    // Storage / tiny kitchen
    storageH: it ? "Mini cucina UK, angolo conforto ordinato" : "Tiny UK kitchen, tidy comfort corner",
    storagePoints: it
      ? [
          "Usa un contenitore o cassetta dedicata solo a snack e biscotti “speciali”.",
          "Metti davanti ciò che scade prima; tieni i multipack chiusi più indietro.",
          "Evita confezioni enormi se hai poco spazio: meglio 2 scatole piccole finite che una gigante aperta per mesi.",
          "Se la cucina è condivisa, tieni la scatola nella tua stanza per evitare fraintendimenti.",
        ]
      : [
          "Use one dedicated bin or box just for ‘special’ snacks and biscuits.",
          "Keep the closest expiry dates at the front; unopened multipacks can live further back.",
          "Skip huge catering-size packs in tiny kitchens: two small boxes you finish are better than one giant open pack for months.",
          "If the kitchen is shared, keep the box in your room to avoid awkward misunderstandings.",
        ],

    // Kits (affiliate)
    kitH: it
      ? "Kit snack italiani (versione UK, link Amazon)"
      : "Italian snack kits (UK version, Amazon links)",
    kitSub: it
      ? "Piccoli kit realistici per studenti, lavoratori e famiglie. Alcuni link sono affiliati Amazon e possono generarci una piccola commissione, senza costi extra per te."
      : "Realistic snack kits for students, workers and families. Some links are Amazon affiliate and may earn us a small commission at no extra cost to you.",
    backToHow: it ? "Torna alla guida ↑" : "Back to how-to ↑",

    kitSweetH: it ? "1) Kit colazione & merenda dolce" : "1) Breakfast & sweet break kit",
    kitSweetList: it
      ? [
          "Confezione multipla di biscotti da colazione (stile Mulino Bianco / frollini).",
          "Biscotti al cioccolato o “stelline” per dopo cena.",
          "Una crema cacao & nocciole “sempre in casa”.",
        ]
      : [
          "Multipack of breakfast-style biscuits (Italian-style frollini).",
          "Chocolate biscuit box or ‘star’ biscuits for after dinner.",
          "One chocolate-hazelnut spread you always keep at home.",
        ],

    kitSavH: it ? "2) Kit aperitivo salato a casa" : "2) At-home savoury aperitivo kit",
    kitSavList: it
      ? [
          "Confezione di taralli all’olio d’oliva.",
          "Confezione di grissini sottili.",
          "Mix di frutta secca o olive in barattolo.",
        ]
      : [
          "Pack of olive-oil taralli.",
          "Thin, crisp grissini.",
          "Nut mix or jarred olives.",
        ],

    kitGiftH: it ? "3) Box regalo “ti penso da lontano”" : "3) ‘Thinking of you’ gift box",
    kitGiftList: it
      ? [
          "Selezione di biscotti iconici (tipo Pan di Stelle / Gocciole).",
          "Crema al pistacchio o nocciola premium.",
          "Un biglietto con istruzioni simpatiche per un aperitivo o merenda all’italiana.",
        ]
      : [
          "Selection of iconic-style biscuits (Pan di Stelle / choc-chip style).",
          "Premium pistachio or hazelnut cream.",
          "A note with simple instructions for an at-home Italian aperitivo or coffee break.",
        ],

    whatYouGetH: it ? "Cosa ottieni con questi kit" : "What these kits give you",
    whatYouGetList: it
      ? [
          "Piccoli rituali di conforto che non esplodono il budget.",
          "Meno acquisti impulsivi di snack a caso al supermercato.",
          "Un angolo fisico che ti ricorda casa quando la nostalgia si fa sentire.",
          "Idee semplici per fare un aperitivo o una merenda italiana con amici in UK.",
        ]
      : [
          "Small comfort rituals that don’t blow the budget.",
          "Fewer random, impulsive snack buys at the supermarket.",
          "A physical corner that reminds you of home on difficult days.",
          "Simple ways to host an Italian-style aperitivo or coffee break with friends in the UK.",
        ],
    oneToOne: it
      ? "Vuoi una mano a scegliere prodotti adatti al tuo budget o a montare un aperitivo italiano nel tuo appartamento in UK?"
      : "Want help choosing products for your budget or planning an Italian-style aperitivo in your UK flat?",
    getFreeAdvice: it ? "Chiedi un consiglio gratuito" : "Get free advice",
    exploreServices: it ? "Scopri i servizi Resinaro" : "Explore Resinaro services",
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // FAQ
    faqH: it ? "FAQ — biscotti & snack italiani in UK" : "FAQ — Italian biscuits & snacks in the UK",
    faqs: it
      ? [
          [
            "Conviene davvero comprare biscotti italiani su Amazon?",
            "Dipende. Se hai un prodotto che mangi spesso (es. frollini per la colazione) i multipack Amazon spesso convengono, soprattutto se li dividi con coinquilini. Per gli sfizi rari, meglio pacchi singoli in negozio.",
          ],
          [
            "E se cerco di stare attento alla salute?",
            "La “taste-of-home box” non deve essere enorme. Puoi limitarti a un prodotto dolce, una crema e un mix di frutta secca, tenendo il resto della settimana su snack più semplici (frutta, yogurt, ecc.).",
          ],
          [
            "Sono studente: con quanto al mese posso farmi un angolo conforto?",
            "Anche 10–15 £ al mese bastano: un multipack di biscotti da colazione, una crema spalmabile e un pacco di taralli o grissini.",
          ],
          [
            "Meglio negozi italiani o Amazon?",
            "Entrambi: Amazon è comodo per multipack e prodotti che conosci già; i negozi italiani sono perfetti per scoprirne di nuovi, comprare poco alla volta e chiacchierare in italiano.",
          ],
        ]
      : [
          [
            "Is it really worth buying Italian biscuits from Amazon UK?",
            "It depends. If you have one or two things you eat every week (like breakfast biscuits), Amazon multipacks can be good value, especially if you split them with flatmates. For rare treats, a single pack in a local shop is usually enough.",
          ],
          [
            "What if I’m trying to be healthy?",
            "Your taste-of-home box doesn’t need to be huge. You can stick to one sweet product, one spread and a nut mix, and keep the rest of your snacks simple (fruit, yoghurt, etc.).",
          ],
          [
            "I’m a student: what’s a realistic monthly budget for this?",
            "Even £10–15 a month can work: one multipack of breakfast biscuits, one spread, and one savoury snack like taralli or grissini.",
          ],
          [
            "Italian shops or Amazon — which is better?",
            "Both: Amazon is convenient for multipacks and brands you already know. Italian shops are great for discovering new products, buying small quantities and speaking Italian for five minutes.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    printableH: it
      ? "Scarica la checklist snack di conforto (PDF)"
      : "Download the comfort snack checklist (PDF)",
    printableP: it
      ? "Una pagina con biscotti, snack salati e creme spalmabili divisi per categorie, con spazio per segnare cosa tieni sempre in casa."
      : "A one-page checklist with biscuits, savoury snacks and spreads grouped by category, with space to tick what you always keep at home.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it
      ? "Fai una domanda sulla dispensa/snack"
      : "Ask a snack/pantry question",
    pantryGuide: it
      ? "Guida dispensa italiana in UK →"
      : "Italian Pantry Essentials in the UK →",
    starterKitchenGuide: it
      ? "Cucina UK piccola, grande sapore italiano →"
      : "Tiny UK Kitchen, Big Italian Flavour →",
    aperitivoGuide: it
      ? "Aperitivo a casa: board & bicchieri →"
      : "Aperitivo at Home: Boards & Glasses →",
    affNoteEnd: it
      ? "Nota affiliate: alcuni link possono generarci una piccola commissione senza costi extra per te. Aiuta a mantenere gratuita la community."
      : "Affiliate note: some links may earn us a small commission at no extra cost to you. It helps keep the community free.",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  const boxAnchor = "#taste-of-home-box";
  const kitsAnchor = "#snack-kits";

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Italian Biscuits & Comfort Snacks in the UK (2025): Amazon Picks & Taste-of-Home Box",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://resinaro.co.uk/community/italian-snacks-biscuits-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Snacks", "Italian UK"],
    image: [
      "https://resinaro.co.uk/public/images/community/italian-snacks-hero.jpg",
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
            ? "Biscotti & snack italiani (UK)"
            : "Italian biscuits & snacks (UK)",
        item:
          "https://resinaro.co.uk/community/italian-snacks-biscuits-uk",
      },
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

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come creare una taste-of-home box di snack italiani in UK"
        : "How to build an Italian taste-of-home snack box in the UK",
    totalTime: "PT20M",
    step: (copy.howToSteps as string[][]).map(([name, text]) => ({
      "@type": "HowToStep",
      name,
      text,
    })),
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#summary", "#taste-of-home-box"],
    },
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableJsonLd),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/community/italian-snacks-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-36 sm:pt-32 md:pt-40 md:pb-44">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-emerald-200">
                {copy.heroTitleB}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
              {copy.heroLead}
            </p>
          </div>

          {/* CTA card */}
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
                action={
                  process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"
                }
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

      {/* ===== Summary & key takeaways ===== */}
      <section
        id="summary"
        className="mx-auto mt-14 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
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
              <p className="text-sm text-emerald-900">
                {copy.miniCtaP}
              </p>
              <form
                method="POST"
                action={
                  process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"
                }
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
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {locale === "it"
                    ? "Punto chiave"
                    : "Key takeaway"}
                </p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Sweet biscuits table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.sweetH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {copy.sweetSub}
              </p>
            </div>
            <Link
              href={boxAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {locale === "it"
                ? "Vai alla taste-of-home box →"
                : "Jump to taste-of-home box →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.sweetHeaders as string[]).map((h) => (
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
                {(copy.sweetRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 text-gray-800"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example affiliate links */}
          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Esempio: cerca ‘biscotti italiani colazione’ o marchi come ‘Mulino Bianco biscuits’ su Amazon UK."
              : "Example: search for ‘Italian breakfast biscuits’ or brands like ‘Mulino Bianco biscuits’ on Amazon UK."}
          </p>
        </div>
      </section>

      {/* ===== Spreads & creamy stuff ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.spreadsH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.spreadsSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.spreadsHeaders as string[]).map(
                    (h) => (
                      <th
                        key={h}
                        className="p-3 text-left font-semibold text-gray-900"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {(copy.spreadsRows as string[][]).map(
                  (row, i) => (
                    <tr
                      key={row[0]}
                      className={
                        i % 2 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      {row.map((c, j) => (
                        <td
                          key={j}
                          className="p-3 text-gray-800"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Suggerimento: i barattoli più piccoli costano un po’ di più al kg ma ti evitano sprechi se vivi da solo."
              : "Tip: smaller jars may cost more per kilo but save waste if you live alone."}
          </p>
        </div>
      </section>

      {/* ===== Savoury snacks ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.savouryH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.savourySub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.savouryHeaders as string[]).map(
                    (h) => (
                      <th
                        key={h}
                        className="p-3 text-left font-semibold text-gray-900"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {(copy.savouryRows as string[][]).map(
                  (row, i) => (
                    <tr
                      key={row[0]}
                      className={
                        i % 2 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      {row.map((c, j) => (
                        <td
                          key={j}
                          className="p-3 text-gray-800"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== How-To: taste-of-home box ===== */}
      <section
        id="taste-of-home-box"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.howToH}
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              {copy.howToIntro}
            </p>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              {(copy.howToSteps as string[][]).map(
                ([bold, rest]) => (
                  <li className="mb-3" key={bold}>
                    <strong>{bold}</strong> {rest}
                  </li>
                ),
              )}
            </ol>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">
                {copy.howToNote}
              </p>
            </div>
          </div>

          {/* Storage tips */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.storageH}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
              {(copy.storagePoints as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">
                {locale === "it"
                  ? "Vuoi idee per abbinare questi snack ad un aperitivo fatto bene?"
                  : "Want ideas to plug these snacks into a proper at-home aperitivo?"}
              </p>
              <Link
                href="/community/aperitivo-at-home-uk"
                className="mt-2 inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                {locale === "it"
                  ? "Vedi la guida aperitivo a casa"
                  : "See the aperitivo-at-home guide"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kits (affiliate) ===== */}
      <section
        id="snack-kits"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.kitH}
              </h2>
              <p className="mt-1 text-sm text-gray-700">
                {copy.kitSub}
              </p>
            </div>
            <Link
              href={boxAnchor}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {copy.backToHow}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              {/* Sweet kit */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitSweetH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitSweetList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=italian+breakfast+biscuits&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Vedi biscotti colazione italiani su Amazon UK"
                      : "See Italian-style breakfast biscuits on Amazon UK"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=pan+di+stelle+biscuits&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Stile Pan di Stelle"
                      : "Pan di Stelle style"}
                  </a>
                </div>
              </div>

              {/* Savoury kit */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitSavH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitSavList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=taralli+italian&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it" ? "Taralli" : "Taralli"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=grissini+italian&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it" ? "Grissini" : "Grissini"}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Gift kit */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitGiftH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitGiftList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=italian+gift+box+snacks&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Vedi box regalo snack italiani"
                      : "See Italian snack gift boxes"}
                  </a>
                </div>
              </div>

              {/* What you get + CTA */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-emerald-900">
                  {copy.whatYouGetH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.whatYouGetList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                  <p className="text-sm text-emerald-900">
                    {copy.oneToOne}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      {copy.getFreeAdvice}
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                    >
                      {copy.exploreServices}
                    </Link>
                  </div>
                  <p className="mt-2 text-[11px] text-emerald-900/80">
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

      {/* ===== Related + Footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.relatedH}
            </h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/italian-pantry-essentials-uk"
                >
                  {copy.pantryGuide}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/starter-uk-kitchen-italian"
                >
                  {copy.starterKitchenGuide}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/aperitivo-at-home-uk"
                >
                  {copy.aperitivoGuide}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {copy.affNoteEnd}
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
              action={
                process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"
              }
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
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
