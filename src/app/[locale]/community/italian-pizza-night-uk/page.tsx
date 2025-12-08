// src/app/[locale]/community/italian-pizza-night-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Pizza Night at Home in the UK: Flour, Trays, Stones & Ovens to Recreate Italy",
  description:
    "Turn a tiny UK kitchen into an Italian-style pizzeria: 00 flour vs bread flour, easy dough, pizza trays vs stones vs steels, small pizza ovens and a realistic Italian pizza kit with Amazon UK links.",
  alternates: { canonical: "/community/italian-pizza-night-uk" },
  openGraph: {
    title:
      "Pizza Night at Home in the UK: Flour, Trays, Stones & Ovens to Recreate Italy",
    description:
      "A practical guide to Italian-style pizza at home in the UK: flours, dough, toppings, trays, stones, steels, small pizza ovens and a shoppable starter kit.",
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
      ? "Tavolo in cucina piccola con pizza fatta in casa, farina e pietra refrattaria"
      : "Small kitchen table with homemade pizza, flour and a pizza stone",
    heroBadge: it ? "Pizza night • UK" : "Pizza night • UK homes",
    heroTitleA: it
      ? "Pizza italiana a casa nel Regno Unito"
      : "Pizza Night at Home in the UK",
    heroTitleB: it
      ? "Farine, teglie, pietre & forni"
      : "Flour, trays, stones & ovens",
    heroLead: it
      ? "Come trasformare un forno UK normale in una pizzeria di casa: quale farina usare, come gestire l’impasto e quali teglie/pietre comprare (senza riempire la cucina)."
      : "How to turn a normal UK oven into a home pizzeria: which flour to use, how to handle the dough and which trays/stones to buy without filling your tiny kitchen.",
    ctaCopy: it
      ? "Scarica la checklist “Pizza Night” (PDF) + una email al mese per italiani nel Regno Unito."
      : "Get the Pizza Night checklist (PDF) + one email a month for Italians in the UK.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. Unsubscribe any time.",
    ctaBtn: it ? "Scarica la checklist" : "Get the checklist",
    pub: it ? "Pubblicato: 8 Dic 2025" : "Published: 8 Dec 2025",
    upd: it ? "Aggiornato: 8 Dic 2025" : "Updated: 8 Dec 2025",
    read: it ? "~12 min lettura" : "~12 min read",

    // USPs
    usp1H: it ? "Funziona con forni UK normali" : "Works with normal UK ovens",
    usp1P: it
      ? "Niente attrezzatura da ristorante: partiamo da teglie e pietre per il forno che hai già in casa."
      : "No restaurant gear: we start from trays and stones that work in the oven you already have.",
    usp2H: it ? "Scelte chiare di farina" : "Clear flour choices",
    usp2P: it
      ? "Caputo, 00 generica, farina forte UK: spieghiamo cosa cambia davvero e quando vale la pena spendere."
      : "Caputo, generic 00 and strong UK bread flour: what actually changes and when it’s worth paying extra.",
    usp3H: it ? "Kit acquistabile" : "Shoppable kit",
    usp3P: it
      ? "Link Amazon UK per farine, pietre, teglie e piccoli forni — alcuni link sono affiliati."
      : "Amazon UK links for flour, stones, trays and small pizza ovens — some links are affiliate.",

    // Summary
    summaryH: it
      ? "Riassunto rapido — come avvicinarti alla pizza italiana in un forno UK"
      : "Quick summary — how to get close to Italian pizza in a UK oven",
    summaryCards: it
      ? [
          {
            tag: "1) Farina giusta, idratazione semplice",
            body:
              "Scegli una buona 00 o una farina forte UK, resta su un impasto semplice (60–65% di acqua) e impara un’unica ricetta base.",
          },
          {
            tag: "2) Superficie calda",
            body:
              "Cottura su pietra/acciaio o teglia pre-riscaldata cambia il gioco molto più di mille ingredienti extra.",
          },
          {
            tag: "3) Margherita prima, creatività dopo",
            body:
              "Per le prime volte ripeti sempre la stessa margherita: vedere i miglioramenti ti motiva a continuare.",
          },
        ]
      : [
          {
            tag: "1) Right flour, simple hydration",
            body:
              "Pick a good 00 or a strong UK bread flour, stick to a simple dough (around 60–65% water) and master one base recipe first.",
          },
          {
            tag: "2) Hot baking surface",
            body:
              "A preheated stone/steel or heavy tray will improve your pizza more than any fancy topping.",
          },
          {
            tag: "3) Margherita first, experiments later",
            body:
              "Repeat the same margherita for the first few times; seeing it improve keeps you motivated.",
          },
        ],
    miniCtaP: it
      ? "Vuoi una checklist stampabile con farine, teglie e tempi di cottura da tenere sul frigo?"
      : "Want a printable checklist with flours, trays and baking times for your fridge?",
    miniCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",

    // Flour section
    flourH: it ? "Farina & impasto: 00, manitoba e farine UK" : "Flour & dough: 00, strong flour and UK options",
    flourSub: it
      ? "La farina non deve essere perfetta, ma adatta al tipo di pizza (teglia, tonda, alta idratazione)."
      : "Your flour doesn’t have to be perfect — just suitable for the style of pizza you’re baking (tray, round, higher hydration).",
    flourHeaders: it
      ? ["Tipo di farina", "Quando usarla", "Note & link"]
      : ["Flour type", "When to use it", "Notes & links"],
    flourRows: it
      ? [
          [
            'Farina 00 per pizza (forza media)',
            "Per pizza tonda classica, lunghe lievitazioni in frigo (24–48h).",
            'Cerca “00 pizza flour” — <a href="https://www.amazon.co.uk/s?k=caputo+00+pizza+flour&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">Caputo & simili</a>.',
          ],
          [
            "Farina forte / manitoba",
            "Per impasti più idratati o quando vuoi più elasticità.",
            'Utile in mix con 00 — <a href="https://www.amazon.co.uk/s?k=strong+bread+flour&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">strong bread flour UK</a>.',
          ],
          [
            "Farina forte supermercato UK",
            "Per pizza in teglia e impasti semplici a 24h.",
            "Spesso è sufficiente, soprattutto per iniziare.",
          ],
        ]
      : [
          [
            "00 pizza flour (medium strength)",
            "For classic round pizza, 24–48h cold proof in the fridge.",
            'Search “00 pizza flour” — <a href="https://www.amazon.co.uk/s?k=caputo+00+pizza+flour&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">Caputo & similar</a>.',
          ],
          [
            "Strong / Manitoba flour",
            "For wetter doughs or when you want extra elasticity.",
            'Great mixed with 00 — <a href="https://www.amazon.co.uk/s?k=strong+bread+flour&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">UK strong bread flour</a>.',
          ],
          [
            "Own-brand strong bread flour",
            "For tray pizza and simple 24h dough.",
            "Often more than enough when you’re starting out.",
          ],
        ],

    // Glossary
    glossaryH: it ? "Glossario: cosa significa 00? E cos’è l’EVOO?" : "Glossary: what does 00 mean? And what is EVOO?",
    g00Title: it ? "Che cos’è la farina 00?" : "What is 00 flour?",
    g00Body: it
      ? "In Italia “00” indica il grado di raffinazione della farina, non la forza. Di solito è molto fine e bianca. Per la pizza serve una 00 con buona forza (spesso indicata come “per pizza” o con W intorno a 260–300)."
      : "In Italy “00” refers to how finely the flour is milled, not how strong it is. It’s very white and fine. For pizza you want a 00 that’s specifically labelled for pizza or has a medium–strong “W” strength (around 260–300).",
    gevooTitle: it ? "Che cos’è l’EVOO?" : "What is EVOO?",
    gevooBody: it
      ? "EVOO = Extra Virgin Olive Oil, olio extra vergine d’oliva. È un olio ottenuto solo con metodi meccanici, con acidità molto bassa e sapore più intenso. Si usa per condire a crudo la pizza dopo la cottura o per il classico filo d’olio su bordo e cornicione."
      : "EVOO = Extra Virgin Olive Oil. It’s olive oil made only by mechanical means, with very low acidity and a more intense flavour. Use it to finish pizza after baking or for that classic drizzle over the crust and edges.",

    // Sauce & toppings
    sauceH: it ? "Salsa, mozzarella & condimenti (versione UK)" : "Sauce, mozzarella & toppings (UK version)",
    sauceSub: it
      ? "Meglio pochi ingredienti buoni, dosati leggeri, che montagne di condimento che bagnano tutto."
      : "Better a few good ingredients used lightly than mountains of toppings that soak the base.",
    sauceHeaders: it
      ? ["Elemento", "Cosa cercare", "Note veloci"]
      : ["Element", "What to look for", "Quick notes"],
    sauceRows: it
      ? [
          [
            "Pomodori / passata",
            "Passata 100% o pelati ben scolati.",
            'Marchi tipo Mutti — vedi <a href="/community/italian-pantry-essentials-uk" class="text-rose-900 underline">guida dispensa</a>.',
          ],
          [
            "Mozzarella",
            "Fior di latte ben sgocciolata o mozzarella da pizza.",
            "Strizza o asciuga su carta prima di metterla sulla pizza.",
          ],
          [
            "Formaggi extra",
            "Grana/Parmigiano grattugiato fine.",
            "Metti poco, alla fine, come tocco di sapore.",
          ],
          [
            "Olio",
            "Buon EVOO da finitura.",
            "Un filo a crudo dopo la cottura cambia tutto.",
          ],
          [
            "Condimenti",
            "Origano, basilico, peperoncino.",
            "Il basilico meglio aggiungerlo fuori dal forno.",
          ],
        ]
      : [
          [
            "Tomatoes / passata",
            "100% passata or well-drained tinned tomatoes.",
            'Brands like Mutti — see <a href="/community/italian-pantry-essentials-uk" class="text-rose-900 underline">pantry guide</a>.',
          ],
          [
            "Mozzarella",
            "Well-drained fior di latte or pizza mozzarella.",
            "Squeeze or dry on kitchen paper before putting on pizza.",
          ],
          [
            "Extra cheese",
            "Finely grated Parmigiano or Grana.",
            "Use lightly at the end for extra flavour.",
          ],
          [
            "Oil",
            "Good finishing EVOO.",
            "A drizzle after baking changes everything.",
          ],
          [
            "Seasoning",
            "Oregano, basil, chilli flakes.",
            "Add basil after baking so it doesn’t burn.",
          ],
        ],

    // Surfaces
    surfaceH: it ? "Teglia, pietra, acciaio o forno pizza?" : "Tray, stone, steel or pizza oven?",
    surfaceSub: it
      ? "La superficie di cottura decide quanto la base sarà croccante. Qui la scala realistica da affitto UK."
      : "Your baking surface decides how crisp your base can get. Here’s a realistic ladder for UK rentals.",
    surfaceHeaders: it
      ? ["Opzione", "Pro & contro", "Per chi è ideale"]
      : ["Option", "Pros & cons", "Best for"],
    surfaceRows: it
      ? [
          [
            "Teglia forno pesante",
            "È già in casa, si scalda decentemente se la pre-riscaldi.",
            "Prime prove, budget minimo.",
          ],
          [
            "Pietra refrattaria",
            "Migliora molto la base, trattiene calore.",
            'Cerca “pizza stone” — <a href="https://www.amazon.co.uk/s?k=pizza+stone+oven&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">vedi pietre</a>.',
          ],
          [
            "Acciaio per pizza",
            "Si scalda e rilascia calore più velocemente della pietra.",
            'Più costoso ma potente — <a href="https://www.amazon.co.uk/s?k=pizza+steel&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">pizza steel</a>.',
          ],
          [
            "Forno pizza piccolo",
            "Temperature molto più alte, bordi più gonfi.",
            'Modelli elettrici/da balcone — <a href="https://www.amazon.co.uk/s?k=outdoor+pizza+oven&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">confronta</a>.',
          ],
        ]
      : [
          [
            "Heavy oven tray",
            "You already own it, gets decent heat if preheated.",
            "First tries, tiny budget.",
          ],
          [
            "Pizza stone",
            "Big upgrade for the base, holds heat well.",
            'Search “pizza stone” — <a href="https://www.amazon.co.uk/s?k=pizza+stone+oven&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">see stones</a>.',
          ],
          [
            "Pizza steel",
            "Heats and releases faster than stone.",
            'More expensive but powerful — <a href="https://www.amazon.co.uk/s?k=pizza+steel&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">pizza steel</a>.',
          ],
          [
            "Compact pizza oven",
            "Higher temperatures, puffier crusts.",
            'Electric/balcony models — <a href="https://www.amazon.co.uk/s?k=outdoor+pizza+oven&tag=resinaroamzn-21" class="text-rose-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>.',
          ],
        ],

    // Tiny oven strategy
    ovenH: it ? "Strategia forno piccolo UK" : "Tiny UK oven strategy",
    ovenPoints: it
      ? [
          "Metti pietra/teglia nella parte più alta del forno e preriscalda al massimo per almeno 30 minuti.",
          "Usa il grill negli ultimi 1–2 minuti per colorare il cornicione (attento a non bruciare).",
          "Cuoci una pizza alla volta; apri lo sportello il meno possibile.",
          "Se la base cuoce troppo piano, stendi l’impasto leggermente più sottile e riduci i condimenti.",
        ]
      : [
          "Place your stone/tray on the top rack and preheat at max temperature for at least 30 minutes.",
          "Use the grill/broiler for the last 1–2 minutes to colour the crust (watch closely).",
          "Bake one pizza at a time; open the door as little as possible.",
          "If the base is pale or soggy, stretch the dough slightly thinner and reduce toppings.",
        ],

    // How-to routine
    howToH: it
      ? "Routine pizza 24 ore (realistica per chi lavora)"
      : "24-hour pizza routine (realistic if you work)",
    howIntro: it
      ? "Un flusso semplice per pizza del venerdì sera, senza dover impastare all’ultimo."
      : "A simple flow for Friday pizza night without panicking after work.",
    howSteps: it
      ? [
          [
            "Sera prima (10–15 minuti)",
            "Impasta farina, acqua, lievito e sale; qualche piega veloce; metti in frigo a lievitare lentamente.",
          ],
          [
            "Pomeriggio (al rientro)",
            "Togli l’impasto dal frigo, dividi in palline, mettile coperte a temperatura ambiente.",
          ],
          [
            "Preriscaldamento forno",
            "Accendi il forno al massimo con pietra/teglia dentro, almeno 30 minuti prima di infornare.",
          ],
          [
            "Stesura & condimento",
            "Allarga l’impasto con le mani, aggiungi poca salsa, mozzarella ben scolata e un filo d’olio.",
          ],
          [
            "Cottura",
            "Inforna su pietra/teglia rovente, completa con grill se serve; finisci con EVOO e basilico.",
          ],
        ]
      : [
          [
            "Evening before (10–15 minutes)",
            "Mix flour, water, yeast and salt; do a few folds; pop into the fridge for a slow rise.",
          ],
          [
            "After work (afternoon/evening)",
            "Take dough out of the fridge, divide into balls and rest covered at room temperature.",
          ],
          [
            "Oven preheat",
            "Turn oven to max with stone/tray inside at least 30 minutes before baking.",
          ],
          [
            "Shape & top",
            "Stretch the dough gently by hand, add a light layer of sauce, well-drained mozzarella and a drizzle of oil.",
          ],
          [
            "Bake",
            "Bake on the hot stone/tray, finish with the grill if needed, then drizzle EVOO and add basil.",
          ],
        ],

    // Kit
    kitH: it ? "Kit Pizza Night (versione UK, Amazon)" : "Pizza Night Kit (UK Amazon)",
    kitSub: it
      ? "Un set compatto di cose che userai davvero. Alcuni link sono affiliati e possono generarci una piccola commissione, senza costi extra per te."
      : "A compact set of things you’ll actually use. Some links are affiliate and may earn us a small commission at no extra cost to you.",
    kitDoughH: it ? "1) Impasto & preparazione" : "1) Dough & prep",
    kitDoughList: it
      ? [
          "Farina 00 per pizza o farina forte UK (2–5kg).",
          "Lievito secco attivo o di birra.",
          "Bilancia digitale per pesare farine e idratazione.",
          "Raschia-impasto in plastica o metallo.",
          "Contenitore per lievitazione con coperchio.",
        ]
      : [
          "00 pizza flour or UK strong bread flour (2–5kg).",
          "Active dry yeast or instant yeast.",
          "Digital scale for flour and hydration.",
          "Plastic or metal dough scraper.",
          "Lidded container for bulk fermentation.",
        ],
    kitDoughLinks: it
      ? [
          [
            "Farine per pizza — Caputo & co.",
            "https://www.amazon.co.uk/s?k=caputo+00+pizza+flour&tag=resinaroamzn-21",
          ],
          [
            "Lievito secco per pizza",
            "https://www.amazon.co.uk/s?k=dried+yeast+pizza&tag=resinaroamzn-21",
          ],
          [
            "Raschia-impasto",
            "https://www.amazon.co.uk/s?k=dough+scraper&tag=resinaroamzn-21",
          ],
        ]
      : [
          [
            "00 pizza flours (Caputo etc.)",
            "https://www.amazon.co.uk/s?k=caputo+00+pizza+flour&tag=resinaroamzn-21",
          ],
          [
            "Dried yeast for pizza",
            "https://www.amazon.co.uk/s?k=dried+yeast+pizza&tag=resinaroamzn-21",
          ],
          [
            "Dough scraper",
            "https://www.amazon.co.uk/s?k=dough+scraper&tag=resinaroamzn-21",
          ],
        ],
    kitBakeH: it ? "2) Cottura & strumenti" : "2) Baking & tools",
    kitBakeList: it
      ? [
          "Pietra o acciaio per pizza adatti al tuo forno.",
          "Pala per pizza (o teglia piatta per iniziare).",
          "Rotella taglia-pizza.",
          "Griglia di raffreddamento per la pizza appena sfornata.",
        ]
      : [
          "Pizza stone or steel that fits your oven.",
          "Pizza peel (or upside-down tray to start).",
          "Pizza cutter wheel.",
          "Cooling rack for pizzas straight out of the oven.",
        ],
    kitBakeLinks: it
      ? [
          [
            "Pietre per pizza",
            "https://www.amazon.co.uk/s?k=pizza+stone+oven&tag=resinaroamzn-21",
          ],
          [
            "Pizza steel",
            "https://www.amazon.co.uk/s?k=pizza+steel&tag=resinaroamzn-21",
          ],
          [
            "Pala per pizza",
            "https://www.amazon.co.uk/s?k=pizza+peel&tag=resinaroamzn-21",
          ],
        ]
      : [
          [
            "Pizza stones",
            "https://www.amazon.co.uk/s?k=pizza+stone+oven&tag=resinaroamzn-21",
          ],
          [
            "Pizza steel",
            "https://www.amazon.co.uk/s?k=pizza+steel&tag=resinaroamzn-21",
          ],
          [
            "Pizza peel",
            "https://www.amazon.co.uk/s?k=pizza+peel&tag=resinaroamzn-21",
          ],
        ],
    kitTopH: it ? "3) Condimenti & finiture" : "3) Toppings & finishing",
    kitTopList: it
      ? [
          "Passata di buona qualità o pelati italiani.",
          "Mozzarella ben scolata.",
          "EVOO per condire a crudo.",
          "Origano, basilico, peperoncino.",
        ]
      : [
          "Good quality passata or Italian tinned tomatoes.",
          "Well-drained mozzarella.",
          "EVOO to finish.",
          "Oregano, basil, chilli flakes.",
        ],
    whatYouGetH: it ? "Cosa ti dà questo kit" : "What this kit gives you",
    whatYouGetList: it
      ? [
          "Base solida per pizza settimanale senza stress.",
          "Miglioramento chiaro a ogni tentativo (stessa ricetta, risultati sempre più vicini alla pizzeria).",
          "Investimenti mirati invece di gadget inutili.",
        ]
      : [
          "A solid base for weekly pizza without stress.",
          "Visible improvement each time (same recipe, better and better results).",
          "Targeted investments instead of random gadgets.",
        ],
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide per la community."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these community guides free.",

    // FAQ
    faqH: it ? "FAQ — pizza italiana nel forno UK" : "FAQ — Italian-style pizza in a UK oven",
    faqs: it
      ? [
          [
            "Mi serve per forza la farina Caputo 00?",
            "No. È ottima, ma una buona farina forte del supermercato UK può darti già risultati molto vicini, soprattutto in teglia. La cosa importante è imparare a gestire acqua, lievito e tempi.",
          ],
          [
            "Il mio forno arriva solo a 230–240°C, ha senso provare?",
            "Sì. Pre-riscalda bene pietra/teglia e usa il grill alla fine. Non sarà una napoletana da 90 secondi, ma puoi ottenere pizze molto migliori di quelle pronte.",
          ],
          [
            "Che differenza c’è tra pietra e acciaio?",
            "La pietra si scalda più lentamente ma è più economica. L’acciaio è più caro ma trasferisce calore più velocemente, quindi può darti basi più croccanti.",
          ],
          [
            "Come faccio a non bagnare la pizza con la mozzarella?",
            "Taglia la mozzarella un po’ prima, strizzala con le mani e asciugala su carta da cucina. Mettila sulla pizza poco prima di infornare e non esagerare con la quantità.",
          ],
        ]
      : [
          [
            "Do I really need Caputo 00 flour?",
            "No. It’s great, but a good UK strong bread flour can already give you very decent results, especially for tray pizza. The key is handling water, yeast and time properly.",
          ],
          [
            "My oven only goes to 230–240°C — is it still worth it?",
            "Yes. Preheat your stone/tray well and use the grill at the end. It won’t be a 90-second Neapolitan, but you can still beat most supermarket pizzas.",
          ],
          [
            "What’s the difference between stone and steel?",
            "Stone heats slower but is often cheaper. Steel is more expensive but transfers heat faster, so it can give you crispier bases.",
          ],
          [
            "How do I stop mozzarella from soaking the pizza?",
            "Slice it early, squeeze it gently and rest it on kitchen paper. Add it just before baking and avoid using too much.",
          ],
        ],

    // Related & footer
    relatedH: it ? "Articoli correlati" : "Related reads",
    affNoteEnd: it
      ? "Alcuni link in questa guida possono generarci una piccola commissione, senza costi extra per te."
      : "Some links in this guide may earn us a small commission at no extra cost to you.",
    footerCtaH: it
      ? "Scarica la checklist Pizza Night (PDF)"
      : "Download the Pizza Night checklist (PDF)",
    footerCtaP: it
      ? "Una pagina stampabile con farine consigliate, tempi di lievitazione e scaletta forno."
      : "A printable one-pager with suggested flours, proofing times and oven timings.",
    footerCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla pizza" : "Ask a pizza question",
    exploreServices: it ? "Scopri i servizi Resinaro →" : "Explore Resinaro services →",
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
      "Pizza Night at Home in the UK: Flour, Trays, Stones & Ovens to Recreate Italy",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://resinaro.co.uk/community/italian-pizza-night-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Pizza", "Italian UK"],
    description:
      "How to build an Italian-style pizza night at home in the UK: flours, dough, toppings, trays, stones, steels and small pizza ovens.",
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
            ? "Pizza italiana a casa nel Regno Unito"
            : "Pizza Night at Home in the UK",
        item:
          "https://resinaro.co.uk/community/italian-pizza-night-uk",
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
        ? "Routine pizza 24 ore in forno UK"
        : "24-hour pizza night routine in a UK oven",
    totalTime: "P1D",
    step: (copy.howSteps as string[][]).map(([name, text]) => ({
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
      cssSelector: ["#summary", "#flour", "#surfaces"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/community/italian-pizza-night-hero.jpg"
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
              <span className="block text-rose-200">{copy.heroTitleB}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {copy.heroLead}
            </p>
          </div>

          {/* CTA card */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/75 p-4 backdrop-blur-md shadow-lg">
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
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-rose-400 sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 whitespace-nowrap rounded-xl bg-rose-600 px-5 font-semibold text-white shadow hover:bg-rose-700"
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

      {/* USPs */}
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
              <h3 className="text-sm font-semibold text-rose-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section
        id="summary"
        className="mx-auto mt-14 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.summaryH}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {(copy.summaryCards as { tag: string; body: string }[]).map(
                (c) => (
                  <div
                    key={c.tag}
                    className="rounded-2xl border border-rose-200 bg-rose-50 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-800">
                      {c.tag}
                    </p>
                    <p className="mt-1 text-sm text-gray-800">{c.body}</p>
                  </div>
                ),
              )}
            </div>

            {/* mini CTA */}
            <div className="mt-6 rounded-2xl border border-rose-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-rose-900">{copy.miniCtaP}</p>
                <form
                  method="POST"
                  action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
                  className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="h-11 w-full rounded-xl border border-rose-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-rose-400"
                  />
                  <button
                    type="submit"
                    className="h-11 rounded-xl bg-rose-600 px-5 font-semibold text-white hover:bg-rose-700"
                  >
                    {copy.miniCtaBtn}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Tiny oven strategy */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.ovenH}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
              {(copy.ovenPoints as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flour & glossary */}
      <section
        id="flour"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Flour table */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {copy.flourH}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {copy.flourSub}
                </p>
              </div>
              <Link
                href="#surfaces"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-4 text-sm font-semibold text-rose-800 hover:bg-rose-100"
              >
                {locale === "it"
                  ? "Vai alle teglie & pietre →"
                  : "Jump to trays & stones →"}
              </Link>
            </div>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {(copy.flourHeaders as string[]).map((h) => (
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
                  {(copy.flourRows as string[][]).map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 ? "bg-white" : "bg-gray-50"}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="p-3 text-gray-800"
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Glossary card */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-rose-900">
                {copy.glossaryH}
              </h3>
              <div className="mt-3 space-y-3 text-sm text-gray-800">
                <div>
                  <p className="font-semibold">{copy.g00Title}</p>
                  <p className="mt-1">{copy.g00Body}</p>
                </div>
                <div className="border-t border-rose-200 pt-3">
                  <p className="font-semibold">{copy.gevooTitle}</p>
                  <p className="mt-1">{copy.gevooBody}</p>
                  <p className="mt-2 text-xs text-rose-900/80">
                    {locale === "it" ? (
                      <>
                        Vuoi saperne di più sull’olio? Vedi la guida{" "}
                        <Link
                          href="/community/italian-olive-oil-uk"
                          className="underline"
                        >
                          olio extra vergine d’oliva in UK
                        </Link>
                        .
                      </>
                    ) : (
                      <>
                        Want to go deeper on oil? See the guide{" "}
                        <Link
                          href="/community/italian-olive-oil-uk"
                          className="underline"
                        >
                          Italian olive oil in the UK
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Small cross-link */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-800">
                {locale === "it"
                  ? "Se è la tua prima cucina in UK"
                  : "If this is your first UK kitchen"}
              </p>
              <p className="mt-1 text-sm text-gray-800">
                {locale === "it"
                  ? "Per strumenti base, contenitori ermetici e layout a un ripiano, dai un’occhiata alla guida “Cucina UK piccola, grande sapore italiano”."
                  : "For starter tools, airtight storage and a one-shelf layout, check out “Tiny UK Kitchen, Big Italian Flavour”."}
              </p>
              <Link
                href="/community/starter-uk-kitchen-italian"
                className="mt-2 inline-flex h-9 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 text-xs font-semibold text-rose-900 hover:bg-rose-100"
              >
                Tiny UK Kitchen, Big Italian Flavour →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sauce & toppings */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.sauceH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.sauceSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.sauceHeaders as string[]).map((h) => (
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
                {(copy.sauceRows as string[][]).map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 text-gray-800"
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Surfaces & 24h routine */}
      <section
        id="surfaces"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Surfaces table */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.surfaceH}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {copy.surfaceSub}
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {(copy.surfaceHeaders as string[]).map((h) => (
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
                  {(copy.surfaceRows as string[][]).map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 ? "bg-white" : "bg-gray-50"}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="p-3 text-gray-800"
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 24h routine */}
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.howToH}
            </h3>
            <p className="mt-1 text-sm text-gray-800">
              {copy.howIntro}
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-800">
              {(copy.howSteps as string[][]).map(([bold, text]) => (
                <li key={bold}>
                  <strong>{bold}</strong> {text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Kit (affiliate) */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8 shadow-sm">
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
              href="#summary"
              className="text-sm font-semibold text-rose-900 underline underline-offset-4"
            >
              {locale === "it" ? "Torna al riassunto ↑" : "Back to summary ↑"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Dough & prep */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.kitDoughH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.kitDoughList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-3 space-y-1 text-sm">
                {(copy.kitDoughLinks as [string, string][]).map(
                  ([label, url]) => (
                    <div key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="text-rose-900 underline underline-offset-4 hover:text-rose-700"
                      >
                        {label}
                      </a>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Baking & tools */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.kitBakeH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.kitBakeList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-3 space-y-1 text-sm">
                {(copy.kitBakeLinks as [string, string][]).map(
                  ([label, url]) => (
                    <div key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="text-rose-900 underline underline-offset-4 hover:text-rose-700"
                      >
                        {label}
                      </a>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Toppings & what you get */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitTopH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.kitTopList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-rose-900">
                  {copy.whatYouGetH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.whatYouGetList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="mt-2 text-[11px] text-rose-900/80">
                  {copy.affiliateNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              <div className="mt-2 text-sm text-gray-700">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Related + footer CTA */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.relatedH}
            </h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link
                  href="/community/italian-pantry-essentials-uk"
                  className="text-rose-900 underline underline-offset-4 hover:text-rose-700"
                >
                  {locale === "it"
                    ? "Dispensa italiana essenziale (UK): 21 prodotti che puoi trovare su Amazon"
                    : "Italian Pantry Essentials in the UK: 21 Products You Can Get on Amazon"}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/italian-olive-oil-uk"
                  className="text-rose-900 underline underline-offset-4 hover:text-rose-700"
                >
                  {locale === "it"
                    ? "Olio extra vergine d’oliva in UK: guida pratica"
                    : "Italian Extra Virgin Olive Oil in the UK: Practical Guide"}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/starter-uk-kitchen-italian"
                  className="text-rose-900 underline underline-offset-4 hover:text-rose-700"
                >
                  Tiny UK Kitchen, Big Italian Flavour
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {copy.affNoteEnd}
            </p>
          </div>

          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8 shadow-sm">
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
                className="h-11 w-full rounded-xl border border-rose-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-rose-400 sm:max-w-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-rose-600 px-6 font-semibold text-white hover:bg-rose-700"
              >
                {copy.footerCtaBtn}
              </button>
            </form>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-rose-200 bg-white px-4 text-sm font-semibold text-rose-900 hover:bg-rose-50"
              >
                {copy.askQ}
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {copy.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
