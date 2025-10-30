// src/app/[locale]/community/starter-uk-kitchen-italian/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Tiny UK Kitchen, Big Italian Flavour — Landing-style community guide
 * Design notes (deliberately different from the moka post):
 * - Warm amber/saffron accent instead of emerald
 * - Full-bleed hero with curved/wave separator
 * - Sticky Table of Contents on desktop (no JS)
 * - Alternating “content + blueprint” sections
 * - Timeline + blueprint SVGs (light theme)
 * - Card variety (soft shadows, rounded-3xl)
 * - Server component only (no "use client")
 * - Clean forms (no env warnings shown)
 * - SEO JSON-LD: Article, HowTo, FAQ, ItemList, Breadcrumb, Speakable
 */

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
  description:
    "Turn a small UK rental into a reliable Italian cooking station. Smart tools, space-saving layouts, airtight storage, beginner→pro upgrades, 15-minute recipes, cleaning & safety, and money-saving buys.",
  alternates: { canonical: "/community/starter-uk-kitchen-italian" },
  openGraph: {
    title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "A high-conversion blueprint for small UK rentals: the essential tools, pantry heroes, airtight storage, layout hacks, quick recipes, and upgrade paths that actually matter.",
    type: "article",
  },
};

// Dates for meta chips
const PUBLISHED = "2025-10-07";
const UPDATED = "2025-10-19";

/* ------------------------------ i18n copy ------------------------------ */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Immagine a tutta larghezza: cucina italiana compatta in un affitto UK"
      : "Full-width hero image: compact Italian kitchen setup in a UK rental",
    heroBadge: it
      ? "Adatta agli affitti • Spazi piccoli • Basi italiane"
      : "Rental-friendly • Small space • Italian staples",
    heroTitleA: it ? "Cucina UK piccola, grande sapore italiano" : "Tiny UK Kitchen, Big Italian Flavour",
    heroTitleB: it ? "Starter Kit" : "Starter Kit",
    heroLead: it
      ? "Un sistema sereno e affidabile per case piccole: strumenti che contano, contenitori ermetici, layout che fanno risparmiare tempo e vittorie rapide da ripetere."
      : "A calm, reliable system for small rentals: the tools that matter, airtight storage, layouts that save time, and quick wins you’ll cook on repeat.",
    ctaCopy: it
      ? "Scarica la checklist iniziale stampabile (PDF) + consigli mensili per italiani nel Regno Unito."
      : "Download the printable starter checklist (PDF) + monthly Italian-in-the-UK tips.",
    ctaSub: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    published: it ? "Pubblicato: 7 Ott 2025" : "Published: 7 Oct 2025",
    updated: it ? "Aggiornato: 19 Ott 2025" : "Updated: 19 Oct 2025",
    readtime: it ? "~11 min lettura" : "~11 min read",

    // ToC
    contents: it ? "Contenuti" : "Contents",
    toc: it
      ? [
          ["#summary", "Perché funziona"],
          ["#path", "Percorso iniziale"],
          ["#tools", "Strumenti potenti per piccoli spazi"],
          ["#storage", "Contenitori ermetici & layout"],
          ["#blueprint", "Blueprint a 1 ripiano"],
          ["#pantry", "Dispensa: eroi"],
          ["#recipes", "Ricette da 15 minuti"],
          ["#budget", "Budget & scorte"],
          ["#clean", "Cura & sicurezza"],
          ["#allergy", "Note alimentari"],
          ["#faq", "FAQ"],
        ]
      : [
          ["#summary", "Why this works"],
          ["#path", "Starter path"],
          ["#tools", "Tiny-kitchen power tools"],
          ["#storage", "Airtight storage & layout"],
          ["#blueprint", "1-Shelf kitchen blueprint"],
          ["#pantry", "Pantry heroes"],
          ["#recipes", "15-minute recipes"],
          ["#budget", "Budget & bulk"],
          ["#clean", "Care & safety"],
          ["#allergy", "Dietary notes"],
          ["#faq", "FAQ"],
        ],

    // USPs
    usps: it
      ? [
          { h: "Pensato per gli affitti", p: "Induzione, piani minuscoli, forni misteriosi—questo pattern funziona comunque." },
          { h: "Cucini di più, sprechi meno", p: "Contenitori ermetici + layout sostenibile anche nei giorni pieni." },
          { h: "Percorso di upgrade", p: "Essentials → Core → Plus. Spendi solo quando serve davvero." },
        ]
      : [
          { h: "Built for rentals", p: "Induction, tiny counters, mystery ovens—this pattern works anyway." },
          { h: "Cook more, waste less", p: "Airtight storage + layout you can maintain on busy days." },
          { h: "Upgrade path", p: "Essentials → Core → Plus. Spend only when it truly helps." },
        ],

    // Summary
    summaryH: it ? "Perché funziona (e continua a funzionare)" : "Why this works (and keeps working)",
    summaryCards: it
      ? [
          { tag: "Abitudine prima", body: "Un ripiano + due contenitori etichettati riducono le decisioni. Vedere tutto = cucinare di più." },
          { tag: "Strumenti multiuso", body: "Una padella, una pentola, un coltello—poi aggiungi solo ciò che apre nuovi piatti." },
          { tag: "Contenitori ermetici", body: "Risparmi denaro non sprecando. Tubi trasparenti = inventario istantaneo e meno doppioni." },
        ]
      : [
          { tag: "Habit first", body: "One shelf + two labelled bins reduces decision fatigue. When you see everything, you cook more." },
          { tag: "Multi-use tools", body: "One pan, one pot, one knife—then add only what unlocks new meals. Less clutter, faster setup." },
          { tag: "Airtight storage", body: "You save money by not wasting staples. Clear tubs = instant inventory and fewer duplicates." },
        ],
    miniCtaQ: it ? "Vuoi una checklist stampabile per l’anta della dispensa?" : "Want a printable checklist for your cupboard door?",
    miniCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",

    // Path
    pathH: it ? "Percorso iniziale: Essentials → Core → Plus" : "Starter Path: Essentials → Core → Plus",
    pathSub: it ? "Compra una volta, non piangere più. Parti piccolo e aggiungi solo ciò che usi davvero." : "Buy once, cry never. Start small, then only add what you actually use.",
    powerTools: it ? "Strumenti potenti →" : "Power tools →",
    week1: it ? "Settimana 1" : "Week 1",
    month1: it ? "Mese 1" : "Month 1",
    whenReady: it ? "Quando pronto" : "When ready",
    essentials: it ? "Essentials" : "Essentials",
    core: it ? "Core" : "Core",
    plus: it ? "Plus" : "Plus",

    // Tools section
    toolsH: it ? "Strumenti che rendono più di quanto occupano" : "Tools that punch above their weight",
    toolsSub: it ? "In una cucina piccola, ogni oggetto deve guadagnarsi lo spazio." : "In a tiny kitchen, every item must earn its space.",
    microplaneH: it ? "Microplane" : "Microplane",
    microplaneP: it
      ? "Trasforma Parmigiano, scorza di limone e aglio in coriandoli di sapore senza ingombro."
      : "Turns Parmigiano, lemon zest and garlic into flavour confetti without bulk.",
    scaleH: it ? "Bilancia digitale" : "Digital scale",
    scaleP: it
      ? "Porzioni precise = meno errori e zero sprechi. Essenziale per pasta e risotto."
      : "Accurate portions = fewer fails and no waste. Essential for pasta and risotto.",
    clipH: it ? "Termometro a clip" : "Clip-on thermometer",
    clipP: it
      ? "Temperatura dell’olio sotto controllo per verdure croccanti, arancini o salse rapide."
      : "Oil temperature under control for crisp veg, arancini, or quick sauces.",
    sheetH: it ? "Teglia riutilizzabile" : "Reusable baking sheet",
    sheetP: it
      ? "Arrostisci verdure, confit d’aglio o pangrattato croccante—meno strofinare, meno alluminio."
      : "Roast veg, confit garlic, or crisp pangrattato—no scrubbing, less foil.",

    // Storage
    storageH: it ? "Contenitori ermetici & layout per spazi piccoli" : "Airtight storage & small-space layout",
    storageSub: it ? "Il modo più rapido per cucinare di più e sprecare meno: schemi chiari, pronti all’uso." : "The fastest way to cook more and waste less: clear, grab-and-go patterns.",
    oneShelf: it ? "Un ripiano, due contenitori" : "One shelf, two bins",
    containerStrat: it ? "Strategia contenitori" : "Container strategy",
    binA: it ? "Contenitore A" : "BIN A",
    binB: it ? "Contenitore B" : "BIN B",
    pantryHeroes: it ? "Dispensa" : "Pantry Heroes",
    toolsLabel: it ? "Strumenti" : "Tools",
    storageListA: it
      ? [
          "<strong>Contenitore A:</strong> pasta, passata, legumi, tonno, sale, erbe.",
          "<strong>Contenitore B:</strong> pinze, microplane, termometro, teglia.",
          "Etichetta con il tuo nome se condividi.",
          "Tubi trasparenti = inventario istantaneo, meno doppioni.",
        ]
      : [
          "<strong>Bin A:</strong> pasta, passata, beans, tuna, salt, herbs.",
          "<strong>Bin B:</strong> tongs, microplane, thermometer, baking sheet.",
          "Label bins with your name if sharing.",
          "Clear tubs = instant inventory, fewer duplicates.",
        ],
    containerList: it
      ? [
          "Alti per spaghetti/linguine; bassi/larghi per rigatoni.",
          "Un tubo per il caffè; un altro per snack.",
          "Etichette con data d’apertura; ruota i più vecchi davanti.",
          'Set ermetici — <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" class="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">confronta</a>',
        ]
      : [
          "Tall for spaghetti/linguine; short/wide for rigatoni.",
          "Dedicated tub for coffee; another for snacks.",
          "Date labels on opens; rotate older items forward.",
          'Airtight sets — <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" class="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>',
        ],

    // Blueprint
    blueprintH: it ? "Il Blueprint della cucina a 1 ripiano" : "The 1-Shelf Kitchen Blueprint",
    blueprintP: it
      ? "Ti fa cucinare stasera, non dopo un weekend di shopping. Requisisci un ripiano, dividi in due contenitori, tieni gli essenziali vicino ai fornelli e aggiungi contenitori ermetici per le basi più usate. Poi cucina una vittoria: lo slancio ti porta avanti."
      : "This gets you cooking tonight, not after a weekend of shopping. Claim one shelf, sort items into two bins, set the essentials by the hob, and add airtight storage for the most-used staples. Then cook a win—the momentum keeps you going.",
    blueprintList: it
      ? [
          'Mantieni una <em>“zona di atterraggio pulita”</em> vicino ai fornelli: padella, sale, olio, pinze.',
          "Metti coltelli e tagliere verticali in un supporto sottile per salvare profondità.",
          "Impila al massimo due contenitori; pile più alte cadono quando sei stanco.",
        ]
      : [
          'Keep a <em>“clean landing zone”</em> near the hob: the pan, salt, oil, tongs.',
          "Put knives and board vertical in a slim rack to save counter depth.",
          "Stack containers two high max; higher stacks tumble when you’re tired.",
        ],
    jumpRecipes: it ? "Vai alle ricette da 15 minuti ↓" : "Jump to the 15-minute recipes ↓",
    timelineLabels: it
      ? ["Occupare ripiano", "2 contenitori", "Essenziali", "Set ermetico", "Cucina 15-min"]
      : ["Claim shelf", "2 bins", "Essentials", "Airtight set", "Cook 15-min"],

    // Pantry
    pantryH: it ? "Eroi di dispensa (e cosa evitare)" : "Pantry heroes (and what to skip)",
    pantrySub: it ? "Semplici, economici, flessibili. Con questi in dispensa, la cena è a 15 minuti." : "Simple, affordable, flexible. With these in your cupboard, dinner is 15 minutes away.",
    alwaysStock: it ? "Sempre in dispensa" : "Always stock",
    oftenNotWorth: it ? "Spesso non conviene (cucine piccole)" : "Often not worth it (tiny kitchens)",
    oftenNotWorthList: it
      ? [
          "Set di spezie enormi (perdono aroma prima di usarle).",
          "Gadget mono-uso multipli (ingombranti, difficili da pulire).",
          "Bottiglioni di olio aperti (rischio rancido se caldo/luminoso).",
        ]
      : [
          "Huge spice sets (aroma fades before you use them)",
          "Multiple single-use gadgets (bulky, hard to clean)",
          "Giant bottles of opened oil (rancidity risk if warm/bright shelves)",
        ],
    pantryNote: it
      ? "Compra piccolo e di qualità, finisci in fretta; conserva le scorte lontano da calore e luce."
      : "Buy small, high-quality items you finish quickly; store backups away from heat and light.",

    // Recipes
    recipesH: it ? "Tre ricette da 15 minuti (una padella, una pentola)" : "Three 15-minute recipes (one pan, one pot)",
    recipesSub: it ? "Cucina una prima vittoria stasera—la fiducia alimenta l’abitudine." : "Cook a first win tonight—confidence fuels the habit.",
    budgetMoves: it ? "Mosse budget →" : "Budget moves →",
    r1H: it ? "Spaghetti al Pomodoro" : "Spaghetti al Pomodoro",
    r1Steps: it
      ? [
          "Metti a bollire acqua salata (come il mare).",
          "Padella: scalda EVOO + mezzo spicchio d’aglio (basso).",
          "Aggiungi passata + pizzico di zucchero/sale. 8–10 min.",
          "Cuoci spaghetti; trasferisci in padella con acqua di cottura.",
          "Salta; finisci con EVOO, pepe, origano.",
        ]
      : [
          "Start boiling salted water (like the sea).",
          "Pan: warm EVOO + halved garlic clove (low).",
          "Add passata + pinch of sugar/salt. Simmer 8–10 min.",
          "Cook spaghetti; transfer to pan with splash of pasta water.",
          "Toss; finish with EVOO, black pepper, oregano.",
        ],
    r1Up: it ? "Upgrade: una microplane di scorza di limone per brillantezza." : "Upgrade: microplane a little lemon zest for brightness.",
    r2H: it ? "Padellata di tonno & cannellini" : "Tuna & Cannellini Skillet",
    r2Steps: it
      ? [
          "EVOO + aglio; aggiungi cannellini con un filo di passata.",
          "Condisci con origano & sale; scalda bene.",
          "Fuori fuoco: unisci tonno e scorza di limone.",
          "Servi con pane o mescola con pasta corta.",
        ]
      : [
          "EVOO + garlic; add cannellini with a splash of passata.",
          "Season with oregano & sea salt; warm through.",
          "Off heat: fold in tuna and lemon zest.",
          "Serve with bread or toss with short pasta.",
        ],
    r2Opt: it ? "Opzionale: peperoncino fatto sbocciare con l’aglio." : "Optional: chilli flakes bloomed with the garlic.",
    r3H: it ? "Pasta zucchine + pangrattato" : "Courgette + Pangrattato Pasta",
    r3Steps: it
      ? [
          "Tosta pangrattato in EVOO + rosmarino; metti da parte.",
          "Salta zucchine a fette finché dorate.",
          "Mescola con pasta + acqua di cottura per lucentezza.",
          "Finitura con EVOO, scorza di limone, pangrattato tostato.",
        ]
      : [
          "Toast breadcrumbs in EVOO + rosemary; set aside.",
          "Sauté sliced courgette till golden.",
          "Toss with pasta + pasta water for gloss.",
          "Finish with EVOO, lemon zest, toasted crumbs.",
        ],
    r3Swap: it ? "Sostituisci le zucchine con piselli o funghi se costano meno." : "Swap courgette for peas or mushrooms if cheaper.",

    // Budget
    budgetH: it ? "Mosse budget, scorte & sostituzioni UK" : "Budget moves, bulk buys & UK substitutions",
    whereSpend: it ? "Dove spendere" : "Where to spend",
    whereSave: it ? "Dove risparmiare" : "Where to save",
    spendList: it
      ? ["Passata/pomodori buoni—moltiplicatore di sapore.", "EVOO da finitura—pepato, verde, vivo.", "Pasta—trafila al bronzo aggrappa il sugo; meno fallimenti."]
      : ["Good passata/tomatoes—flavour multiplier.", "Finishing EVOO—peppery, green, alive.", "Pasta—bronze-cut grips sauce; fewer fails."],
    saveList: it
      ? ["Erbe secche & sale marino—va bene la marca base.", "Legumi—prendi multipack in offerta.", "Contenitori—mix top per basi + economici per snack."]
      : ["Dried herbs & sea salt—own-brand is fine.", "Beans—buy multipacks on deal.", "Storage—mix premium airtight for staples with budget tubs for snacks."],
    bulkH: it ? "Link adatti alle scorte" : "Bulk-friendly links",
    ukSubH: it ? "Sostituzioni UK che funzionano" : "UK substitutions that work",
    ukSubList: it
      ? [
          "Scalogni quando mancano cipolline—più dolci, cottura rapida.",
          "Pelati a marchio supermercato + un filo di passata.",
          "Cheddar grattugiato fine per sciogliere; per finale deciso, meno quantità ma più fine.",
        ]
      : [
          "Shallots for unavailable small onions—sweeter, quick to cook.",
          "Own-brand chopped tomatoes + a dash of passata.",
          "Cheddar microplaned for melt; for sharp finish, use less but finer zest.",
        ],

    // Care & safety
    careH: it ? "Cura che allunga la vita degli strumenti" : "Care that extends tool life",
    careList: it
      ? [
          "Padella antiaderente: solo spugna morbida, evita spray aerosol, calore basso–medio.",
          "Coltelli: lava/asciuga subito; affila ogni settimana; riponi in guaina.",
          "Taglieri/cucchiai in legno: lavaggio a mano; olio mensile contro le crepe.",
        ]
      : [
          "Non-stick pan: soft sponge only, avoid aerosol sprays, low–medium heat.",
          "Knives: wash/dry immediately; hone weekly; store in a guard or sheath.",
          "Wooden boards/spoons: handwash; oil monthly to prevent cracks.",
        ],
    safetyH: it ? "Basi di sicurezza in affitto" : "Rental safety basics",
    safetyList: it
      ? [
          "Prolunghe: protezione da sovratensioni; lontano da lavelli/fornelli.",
          "Induzione: solo fondo piatto e magnetico; evita deformazioni.",
          "Ventilazione: finestra aperta o cappa con cotture lunghe/fritture.",
        ]
      : [
          "Extension leads: surge protection; keep away from sinks/hobs.",
          "Induction hobs: only flat, magnetic-base cookware; avoid warping.",
          "Ventilation: open a window or run extractor when frying/boiling long.",
        ],
    safetyNote: it
      ? "Se qualcosa sembra non sicuro (scintille, prese danneggiate), fermati e informa il proprietario/agente. Documenta con foto."
      : "If something feels unsafe (sparks, damaged outlets), stop and inform your landlord/agent. Document issues with photos.",

    // Dietary
    dietaryH: it ? "Note alimentari & allergie" : "Dietary & allergy notes",
    dietaryList: it
      ? [
          "<strong>Vegetariano/Vegano:</strong> pesto veg, legumi per proteine, EVOO in finitura per ricchezza.",
          "<strong>Senza glutine:</strong> scegli pasta GF; il riso per risotto è naturalmente GF.",
          "<strong>Allergeni:</strong> controlla pesto (frutta secca/latticini) e tonno (pesce). Leggi sempre le etichette.",
        ]
      : [
          "<strong>Vegetarian/Vegan:</strong> plant pesto, beans for protein, EVOO finish for richness.",
          "<strong>Gluten-free:</strong> pick GF pasta; risotto rice is naturally GF.",
          "<strong>Allergens:</strong> check pesto (nuts/dairy) and tuna (fish). Always read labels.",
        ],

    // FAQ
    quickFaq: it ? "FAQ veloce" : "Quick FAQ",
    faqPairs: it
      ? [
          ["Mi serve un set completo di coltelli?", "No. Un coltello da chef bilanciato + un piccolo spelucchino coprono il 95% dei compiti in cucine piccole."],
          ["Gas vs induzione vs ceramica—cosa cambia?", "Induzione è la più veloce (padelle a base magnetica). Ceramica scalda lentamente (pazienza). Gas è reattivo—attenzione alle fiamme con i manici."],
          ["Il primo upgrade migliore?", "Una microplane o un frullatore a immersione. Entrambi moltiplicano sapore/texture senza rubare spazio."],
        ]
      : [
          ["Do I need a full knife set?", "No. One balanced chef’s knife + a small paring knife cover 95% of tasks in small kitchens."],
          ["Gas vs. induction vs. ceramic—what changes?", "Induction is fastest (use magnetic-base pans). Ceramic heats slower (be patient). Gas is responsive—watch open flames with handles."],
          ["What’s the best first upgrade?", "A microplane or a stick blender. Both multiply flavour/texture without stealing space."],
        ],

    // Related + CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    relatedNote: it
      ? "Alcuni link possono generarci una piccola commissione senza costi extra. Aiuta a mantenere gratuite le guide."
      : "Some links may earn us a small commission at no extra cost to you. It helps keep community guides free.",
    footerCtaH: it ? "Ottieni la checklist iniziale stampabile" : "Get the printable starter checklist",
    footerCtaP: it
      ? "Una pagina con essenziali, layout, contenitori ermetici e un piano menu da 15 minuti."
      : "One page with essentials, layout, airtight storage, and a 15-minute menu plan.",
    footerCtaBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla cucina" : "Ask a kitchen question",
    findShops: it ? "Trova negozi italiani vicino a te →" : "Find Italian shops near you →",
  };
}

/* --------------------------------- Page -------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  // ===== JSON-LD (SEO) =====
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "A rental-friendly Italian kitchen kit for the UK: compact tools, airtight storage, layout patterns, quick recipes, care & safety, and smart buying tips.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/starter-uk-kitchen-italian",
    },
    inLanguage: copy.inLang,
    articleSection: ["Lifestyle", "Food", "Italian UK"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Community", item: "https://resinaro.co.uk/community" },
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Cucina UK piccola, grande sapore italiano" : "Tiny UK Kitchen, Big Italian Flavour", item: "https://resinaro.co.uk/community/starter-uk-kitchen-italian" },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#summary", "#recipes"] },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "it" ? "Perché Resinaro parla di cucine?" : "Why is Resinaro writing about kitchens?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Ambientarsi nel Regno Unito non è solo burocrazia. Una cucina piccola ma funzionale aiuta a mangiare bene, risparmiare e sentirsi a casa. Questa guida è il contraltare pratico al nostro aiuto consolare e abitativo."
              : "Settling in the UK isn’t only paperwork. A tiny, workable kitchen helps you eat well, save money, and feel at home. This guide is the practical counterpart to our consular and housing help.",
        },
      },
      {
        "@type": "Question",
        name: locale === "it" ? "Posso cucinare bene senza comprare tutto?" : "Can I cook good Italian food without buying everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Sì. Parti con una padella, una pentola, un coltello decente e contenitori ermetici. Fai upgrade solo quando le abitudini lo richiedono. Mostriamo un percorso Essentials → Core → Plus per ogni budget."
              : "Yes. Start with one pan, one pot, a decent knife, and airtight storage. Upgrade only when your habits demand it. We show an Essentials → Core → Plus path for any budget.",
        },
      },
      {
        "@type": "Question",
        name: locale === "it" ? "E se condivido la cucina?" : "What if I’m sharing a kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Usa un sistema di scatole etichettate e contenitori impilabili ermetici. Mantieni il kit portatile (scolapasta pieghevole, tappetino arrotolabile). Scegli pentolame compatibile con induzione."
              : "Use a labelled box system and stackable airtight containers. Keep your kit portable (folding colander, roll-up mat). Pick induction-friendly cookware for compatibility.",
        },
      },
      {
        "@type": "Question",
        name: locale === "it" ? "Come tengo bassi i costi?" : "How do I keep costs down?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Dai priorità agli strumenti multiuso, compra pasta trafilata al bronzo in offerta, usa passata in multipack e conserva bene per non sprecare. Link a scelte affidabili e convenienti—zero fronzoli."
              : "Prioritise multi-use tools, buy bronze-cut pasta on sale, use passata multipacks, and store properly so nothing spoils. We link to reliable, budget-friendly picks—no fluff.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: locale === "it" ? "Allestisci una postazione compatta di cucina italiana in un affitto UK" : "Set up a compact Italian cooking station in a UK rental",
    totalTime: "PT30M",
    step: (locale === "it"
      ? [
          { "@type": "HowToStep", name: "Requisisci un ripiano", text: "Scegli un ripiano che controlli tu. Aggiungi due contenitori etichettati: ‘Dispensa’ e ‘Strumenti’." },
          { "@type": "HowToStep", name: "Metti insieme gli essenziali", text: "Padella antiaderente (20–24 cm) con coperchio, pentola 5–6 L, coltello + tagliere, scolapasta, microplane, pinze, cucchiaio di legno." },
          { "@type": "HowToStep", name: "Riempi la dispensa", text: "Pasta trafilata al bronzo (lunga + corta), passata, EVOO da finitura, origano/rosmarino, legumi, tonno in olio, sale marino." },
          { "@type": "HowToStep", name: "Aggiungi contenitori ermetici", text: "Usa contenitori impilabili per pasta, farina, caffè e snack. Etichetta con data di apertura." },
          { "@type": "HowToStep", name: "Cucina il primo piatto", text: "Pomodoro o tonno-cannellini in 15 minuti: semplice, salva-umore e amico del budget." },
        ]
      : [
          { "@type": "HowToStep", name: "Claim a shelf", text: "Pick one cupboard shelf you can fully control. Add two labelled bins: ‘Pantry’ and ‘Tools’." },
          { "@type": "HowToStep", name: "Assemble the essentials", text: "Non-stick sauté pan (20–24 cm) with lid, 5–6 L pot, knife + board, colander, microplane, tongs, wooden spoon." },
          { "@type": "HowToStep", name: "Stock pantry heroes", text: "Bronze-cut pasta (long + short), passata, EVOO for finishing, dried oregano/rosemary, beans, tuna in oil, sea salt." },
          { "@type": "HowToStep", name: "Add airtight storage", text: "Use stackable containers for pasta, flour, coffee, and snacks. Label with open dates." },
          { "@type": "HowToStep", name: "Cook a first meal", text: "15-minute pomodoro or tuna-cannellini: simple, morale-boosting, and budget friendly." },
        ]),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "it" ? "Elementi base per cucina italiana" : "Italian Kitchen Starter Items",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "it" ? "Padella antiaderente 20–24 cm" : "20–24 cm non-stick sauté pan" },
      { "@type": "ListItem", position: 2, name: locale === "it" ? "Pentola 6 L (compatibile induzione)" : "6 L pasta/stock pot (induction-friendly)" },
      { "@type": "ListItem", position: 3, name: locale === "it" ? "Coltello da chef + tagliere" : "Chef’s knife + chopping board" },
      { "@type": "ListItem", position: 4, name: locale === "it" ? "Scolapasta (pieghevole) + microplane" : "Colander (collapsible) + microplane" },
      { "@type": "ListItem", position: 5, name: locale === "it" ? "Set contenitori ermetici (impilabili)" : "Airtight food storage set (stackable)" },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* ===== HERO (full-bleed, warm amber accent, curved separator) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/starterkitchen.png"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* warm overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-amber-200">{copy.heroTitleB}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {copy.heroLead}
            </p>
          </div>

          {/* CTA block */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-800">
                  {copy.ctaCopy}
                </p>
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

          {/* Meta chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>{copy.published}</span>
            <span className="opacity-60">•</span>
            <span>{copy.updated}</span>
            <span className="opacity-60">•</span>
            <span>{copy.readtime}</span>
          </div>
        </div>

        {/* Curved / wave separator */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 -z-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== Layout: sticky ToC + content ===== */}
      <section className="mx-auto mt-6 max-w-7xl px-6 md:mt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sticky Table of Contents (desktop) */}
          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <nav aria-label="Contents" className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{copy.contents}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {copy.toc.map(([href, label]) => (
                  <li key={href as string}>
                    <a className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href={href as string}>
                      {label as string}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main column */}
          <div className="space-y-10">
            {/* USPs row (moved down so not clipped) */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {copy.usps.map((x) => (
                <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-amber-800">{x.h}</h3>
                  <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                </div>
              ))}
            </div>

            {/* Summary block */}
            <section id="summary" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.summaryH}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {copy.summaryCards.map((c) => (
                  <div key={c.tag} className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{c.tag}</p>
                    <p className="mt-1 text-sm text-gray-800">{c.body}</p>
                  </div>
                ))}
              </div>

              {/* Mini CTA */}
              <div className="mt-6 rounded-2xl border border-amber-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-amber-900">{copy.miniCtaQ}</p>
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
                      className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400"
                    />
                    <button type="submit" className="h-11 rounded-xl bg-amber-600 px-5 font-semibold text-white hover:bg-amber-700">
                      {copy.miniCtaBtn}
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Starter path — alternating rows */}
            <section id="path" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{copy.pathH}</h2>
                  <p className="mt-1 text-sm text-gray-700">{copy.pathSub}</p>
                </div>
                <a href="#tools" className="text-sm font-semibold text-amber-900 underline underline-offset-4">{copy.powerTools}</a>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Essentials */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{copy.week1}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{copy.essentials}</h3>
                  {/* Keep affiliate links EXACTLY as in the original */}
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>20–24 cm non-stick sauté pan with lid —{" "}
                      <a href="https://www.amazon.co.uk/s?k=24cm+non+stick+saute+pan&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>
                    </li>
                    <li>5–6 L induction-friendly pot —{" "}
                      <a href="https://www.amazon.co.uk/s?k=stock+pot+6l&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">options</a>
                    </li>
                    <li>Chef’s knife + board set —{" "}
                      <a href="https://www.amazon.co.uk/s?k=chef+knife+and+chopping+board+set&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">budget picks</a>
                    </li>
                    <li>Collapsible colander + microplane —{" "}
                      <a href="https://www.amazon.co.uk/s?k=collapsible+colander&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">colanders</a>{" "}
                      ·{" "}
                      <a href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">microplanes</a>
                    </li>
                    <li>Airtight storage set (stackable) —{" "}
                      <a href="https://www.amazon.co.uk/s?k=airtight+food+storage+set&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">sets</a>
                    </li>
                  </ul>
                </div>

                {/* Core */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{copy.month1}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{copy.core}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Heatproof tongs & wooden spoon</li>
                    <li>Small paring knife + peeler</li>
                    <li>Digital scale & measuring jug</li>
                    <li>Oven tray + reusable baking sheet</li>
                    <li>Clip-on thermometer (sauces & shallow frying)</li>
                  </ul>
                </div>

                {/* Plus */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{copy.whenReady}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{copy.plus}</h3>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                      <li>Cast-aluminium casserole (holds heat, lighter than cast iron)</li>
                      <li>Stick blender (soups, sauces, pesto)</li>
                      <li>Salad spinner (doubles as colander/bowl)</li>
                      <li>Mini food processor (pesto, pangrattato)</li>
                      <li>Glass containers (leftovers; microwave-safe)</li>
                    </ul>
                </div>
              </div>
            </section>

            {/* Tiny-kitchen power tools */}
            <section id="tools" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.toolsH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.toolsSub}</p>

              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.microplaneH}</h3>
                  <p className="mt-1 text-sm text-gray-800">
                    {copy.microplaneP}{" "}
                    <a href="https://www.amazon.co.uk/s?k=microplane+zester&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">See microplanes</a>.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.scaleH}</h3>
                  <p className="mt-1 text-sm text-gray-800">{copy.scaleP}</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.clipH}</h3>
                  <p className="mt-1 text-sm text-gray-800">{copy.clipP}</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.sheetH}</h3>
                  <p className="mt-1 text-sm text-gray-800">{copy.sheetP}</p>
                </div>
              </div>
            </section>

            {/* Airtight storage & small-space layout */}
            <section id="storage" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{copy.storageH}</h2>
                  <p className="mt-1 text-sm text-gray-700">{copy.storageSub}</p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{copy.oneShelf}</p>
                      <ul className="mt-1 list-disc pl-5 text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: `<li>${copy.storageListA[0]}</li><li>${copy.storageListA[1]}</li><li>${copy.storageListA[2]}</li><li>${copy.storageListA[3]}</li>` }} />
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">{copy.containerStrat}</p>
                      <ul className="mt-1 list-disc pl-5 text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: `<li>${copy.containerList[0]}</li><li>${copy.containerList[1]}</li><li>${copy.containerList[2]}</li><li>${copy.containerList[3]}</li>` }} />
                    </div>
                  </div>
                </div>

                {/* Blueprint SVG */}
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <svg viewBox="0 0 600 280" className="h-64 w-full">
                    <defs>
                      <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#fde68a" stopOpacity="0.35" />
                        <stop offset="1" stopColor="#fde68a" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="600" height="280" fill="url(#grid)" />
                    {/* Shelf */}
                    <rect x="40" y="60" width="520" height="20" rx="10" className="fill-amber-300" />
                    {/* Bins */}
                    <rect x="50" y="90" width="230" height="130" rx="16" className="fill-white stroke-amber-400" />
                    <rect x="320" y="90" width="230" height="130" rx="16" className="fill-white stroke-amber-400" />
                    <text x="165" y="115" textAnchor="middle" className="fill-amber-900" style={{ fontWeight: 700 }}>{copy.binA.toUpperCase()}</text>
                    <text x="435" y="115" textAnchor="middle" className="fill-amber-900" style={{ fontWeight: 700 }}>{copy.binB.toUpperCase()}</text>
                    <text x="165" y="140" textAnchor="middle" className="fill-gray-800" style={{ fontSize: 12 }}>{copy.pantryHeroes}</text>
                    <text x="435" y="140" textAnchor="middle" className="fill-gray-800" style={{ fontSize: 12 }}>{copy.toolsLabel}</text>
                    {/* Tall container */}
                    <rect x="80" y="160" width="40" height="50" rx="6" className="fill-white stroke-amber-400" />
                    <text x="100" y="220" textAnchor="middle" className="fill-gray-700" style={{ fontSize: 10 }}>{locale === "it" ? "Spaghetti" : "Spaghetti"}</text>
                    {/* Short/wide */}
                    <rect x="130" y="175" width="70" height="35" rx="6" className="fill-white stroke-amber-400" />
                    <text x="165" y="220" textAnchor="middle" className="fill-gray-700" style={{ fontSize: 10 }}>{locale === "it" ? "Rigatoni" : "Rigatoni"}</text>
                    {/* Labels */}
                    <line x1="265" y1="90" x2="265" y2="220" className="stroke-amber-300" />
                    <line x1="305" y1="90" x2="305" y2="220" className="stroke-amber-300" />
                  </svg>
                </div>
              </div>
            </section>

            {/* 1-Shelf kitchen blueprint (timeline of setup) */}
            <section id="blueprint" className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
                {/* Timeline SVG */}
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <svg viewBox="0 0 600 260" className="h-60 w-full">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M0 0 L10 5 L0 10 Z" className="fill-amber-500" />
                      </marker>
                    </defs>
                    {[40,160,280,400,520].map((x, i) => (
                      <g key={x}>
                        <circle cx={x} cy={130} r={14} className="fill-white stroke-amber-400" />
                        <text x={x} y={135} textAnchor="middle" className="fill-amber-900" style={{fontWeight:700,fontSize:12}}>{i+1}</text>
                        <text x={x} y={170} textAnchor="middle" className="fill-gray-800" style={{fontSize:12}}>
                          {copy.timelineLabels[i]}
                        </text>
                        {i<4 && <line x1={x+14} y1={130} x2={x+90} y2={130} className="stroke-amber-500" strokeWidth="2" markerEnd="url(#arrow)" />}
                      </g>
                    ))}
                  </svg>
                </div>
                {/* Copy */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{copy.blueprintH}</h2>
                  <p className="mt-2 text-sm text-gray-800">
                    {copy.blueprintP}
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: `<li>${copy.blueprintList[0]}</li><li>${copy.blueprintList[1]}</li><li>${copy.blueprintList[2]}</li>` }} />
                  <div className="mt-5">
                    <a href="#recipes" className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-200 bg-white px-5 text-sm font-semibold text-amber-900 hover:bg-amber-50">
                      {copy.jumpRecipes}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Pantry heroes (and what to skip) */}
            <section id="pantry" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.pantryH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.pantrySub}</p>

              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.alwaysStock}</h3>
                  {/* Keep affiliate links EXACTLY as original */}
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>
                      <strong>Bronze-cut pasta (long + short)</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=de+cecco+spaghetti&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">De Cecco</a>{" "}
                      ·{" "}
                      <a href="https://www.amazon.co.uk/s?k=rummo+rigatoni&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Rummo</a>{" "}
                      · GF:{" "}
                      <a href="https://www.amazon.co.uk/s?k=rummo+gluten+free+pasta&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Rummo GF</a>
                    </li>
                    <li>
                      <strong>Passata / tinned tomatoes</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=mutti+passata&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Mutti</a>; treat:{" "}
                      <a href="https://www.amazon.co.uk/s?k=san+marzano+dop+tinned+tomatoes&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">San Marzano DOP</a>
                    </li>
                    <li><strong>EVOO (finishing)</strong> —{" "}
                      <a href="https://www.amazon.co.uk/s?k=sicilian+igp+olive+oil&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Sicilian IGP</a>
                    </li>
                    <li><strong>{locale === "it" ? "Origano & rosmarino secchi" : "Dried oregano & rosemary"}</strong> — {locale === "it" ? "va bene la marca base" : "own-brand fine"}</li>
                    <li><strong>{locale === "it" ? "Fagioli cannellini/borlotti" : "Cannellini/borlotti beans"}</strong> — {locale === "it" ? "proteine facili" : "easy protein"}</li>
                    <li><strong>{locale === "it" ? "Tonno in olio d’oliva" : "Tuna in olive oil"}</strong> — Rio Mare / ASdoMAR</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.oftenNotWorth}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.oftenNotWorthList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                  <p className="mt-2 text-xs text-gray-700">{copy.pantryNote}</p>
                </div>
              </div>
            </section>

            {/* Recipes */}
            <section id="recipes" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{copy.recipesH}</h2>
                  <p className="mt-1 text-sm text-gray-700">{copy.recipesSub}</p>
                </div>
                <a href="#budget" className="text-sm font-semibold text-amber-900 underline underline-offset-4">{copy.budgetMoves}</a>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 text-sm">
                {/* Pomodoro */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.r1H}</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    {copy.r1Steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                  <p className="mt-2 text-gray-700">{copy.r1Up}</p>
                </div>

                {/* Tuna & beans */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.r2H}</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    {copy.r2Steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                  <p className="mt-2 text-gray-700">{copy.r2Opt}</p>
                </div>

                {/* Courgette + pangrattato */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.r3H}</h3>
                  <ol className="mt-2 list-decimal pl-5 space-y-1 text-gray-800">
                    {copy.r3Steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                  <p className="mt-2 text-gray-800">{copy.r3Swap}</p>
                </div>
              </div>
            </section>

            {/* Budget & bulk */}
            <section id="budget" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.budgetH}</h2>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.whereSpend}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.spendList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.whereSave}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.saveList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.bulkH}</h3>
                  {/* Keep links exactly as original */}
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    <li>Pasta cases —{" "}
                      <a href="https://www.amazon.co.uk/s?k=de+cecco+case&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">shop cases</a>
                    </li>
                    <li>Passata multipacks —{" "}
                      <a href="https://www.amazon.co.uk/s?k=mutti+passata+6+pack&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">Mutti 6–12 packs</a>
                    </li>
                    <li>Beans 12-pack —{" "}
                      <a href="https://www.amazon.co.uk/s?k=cannellini+beans+12+pack&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">compare</a>
                    </li>
                    <li>EVOO tins (3L) —{" "}
                      <a href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21" className="text-amber-900 underline" rel="nofollow sponsored noopener" target="_blank">cool, dark storage</a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.ukSubH}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.ukSubList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            {/* Care & safety */}
            <section id="clean" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-amber-900">{copy.careH}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.careList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-gray-900">{copy.safetyH}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.safetyList.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                  <p className="mt-2 text-xs text-gray-600">{copy.safetyNote}</p>
                </div>
              </div>
            </section>

            {/* Dietary & allergy notes */}
            <section id="allergy" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.dietaryH}</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: `<li>${copy.dietaryList[0]}</li><li>${copy.dietaryList[1]}</li><li>${copy.dietaryList[2]}</li>` }} />
            </section>

            {/* FAQ */}
            <section id="faq" className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{copy.quickFaq}</h2>
              {copy.faqPairs.map(([q,a])=>(
                <details key={q as string} className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">{q}</summary>
                  <div className="mt-2 text-sm text-gray-700">{a}</div>
                </details>
              ))}
            </section>

            {/* Related reads & footer CTA */}
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">{copy.relatedH}</h2>
                <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/italian-essentials">
                      New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/bulk-italian-pantry-uk">
                      Save Money: Bulk Italian Pantry Buys in the UK
                    </Link>
                  </li>
                  <li>
                    <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href="/community/moka-coffee-kit">
                      The No-Machine Italian Coffee Kit (UK Edition)
                    </Link>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-600">
                  {copy.relatedNote}
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{copy.footerCtaH}</h3>
                <p className="mt-1 text-sm text-gray-700">
                  {copy.footerCtaP}
                </p>
                <form method="POST" action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"} className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <input type="email" name="email" required placeholder="you@email.com" className="h-11 w-full rounded-xl border border-amber-200 bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400 sm:max-w-sm" />
                  <button type="submit" className="h-11 rounded-xl bg-amber-600 px-6 font-semibold text-white hover:bg-amber-700">{copy.footerCtaBtn}</button>
                </form>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50">{copy.askQ}</Link>
                  <Link href="/directory" className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50">{copy.findShops}</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
