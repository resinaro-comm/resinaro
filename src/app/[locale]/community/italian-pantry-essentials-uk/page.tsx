// src/app/[locale]/community/italian-pantry-essentials-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Italian Pantry Essentials in the UK (2025): 21 Products You Can Get on Amazon",
  description:
    "Build a real Italian pantry in a tiny UK kitchen: pasta, tomatoes, oils, flours, snacks and storage solutions you can get on Amazon UK, plus a printable checklist.",
  alternates: { canonical: "/community/italian-pantry-essentials-uk" },
  openGraph: {
    title:
      "Italian Pantry Essentials in the UK (2025): 21 Products You Can Get on Amazon",
    description:
      "21 Italian pantry staples you can actually find in the UK, with Amazon UK links, small-kitchen storage tips and a printable checklist.",
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
      ? "Dispensa da cucina con ingredienti italiani ordinati in barattoli e scatole"
      : "Kitchen pantry shelf with neatly stacked Italian ingredients in jars and boxes",
    heroBadge: it ? "Dispensa • Cucine UK" : "Pantry • UK Kitchens",
    heroTitleA: it ? "Dispensa italiana essenziale" : "Italian Pantry Essentials",
    heroTitleB: it ? "Edizione UK 2025" : "UK Edition 2025",
    heroLead: it
      ? "Pasta giusta, conserve di pomodoro, olio buono e piccoli trucchi per far entrare tutto in una cucina UK—anche se vivi in affitto o in stanza."
      : "The right pasta, tomato jars, olive oil and a few smart tricks to fit everything into a tiny UK kitchen—even in rentals and flatshares.",
    ctaCopy: it
      ? "Scarica la checklist dispensa italiana (PDF) + una mail al mese con consigli per italiani nel Regno Unito."
      : "Get the printable Italian pantry checklist (PDF) + one email a month with Italian-in-the-UK tips.",
    ctaSub: it
      ? "Zero spam. Puoi disiscriverti quando vuoi."
      : "Zero spam. Opt out any time.",
    ctaBtn: it ? "Scarica la checklist" : "Get the checklist",
    pub: it ? "Pubblicato: 7 Dic 2025" : "Published: 7 Dec 2025",
    upd: it ? "Aggiornato: 7 Dic 2025" : "Updated: 7 Dec 2025",
    read: it ? "~11 min lettura" : "~11 min read",

    // USPs
    usp1H: it ? "Trovabile in UK" : "UK-available ingredients",
    usp1P: it
      ? "Tutti i prodotti si trovano su Amazon UK o nei supermercati principali, senza cacce infinite a negozi specialistici."
      : "Everything here is available on Amazon UK or in major supermarkets—no endless hunting for specialist shops.",
    usp2H: it ? "Pensata per cucine piccole" : "Built for small kitchens",
    usp2P: it
      ? "Poche categorie chiave, contenitori impilabili e nessun acquisto inutile che ruba spazio."
      : "A few key categories, stackable containers and no pointless space-hogging extras.",
    usp3H: it ? "Kit acquistabile" : "Shoppable kit",
    usp3P: it
      ? "Link chiari, note trasparenti: alcuni link sono affiliati e ci aiutano a tenere gratuita la community."
      : "Clear links, transparent notes: some links are affiliate and help keep the community guides free.",

    // TL;DR
    tldrH: it
      ? "Riassunto — tre mosse per farti una dispensa italiana in UK"
      : "TL;DR — three moves to build an Italian pantry in the UK",
    tldr1: it ? "1) Parti dalla base" : "1) Start with the base",
    tldr1P: it
      ? "Scegli 2–3 formati di pasta, un riso da risotto e passata/pelati buoni. Con questi puoi già cucinare metà delle ricette italiane."
      : "Pick 2–3 pasta shapes, one risotto rice and good passata/pelati. With these you can cook half of Italian home food.",
    tldr2: it ? "2) Aggiungi i \"flavour bomb\"" : "2) Add the flavour bombs",
    tldr2P: it
      ? "Olio extra vergine, aglio, origano, peperoncino, brodo e legumi in scatola trasformano ingredienti base in piatti seri."
      : "Extra virgin olive oil, garlic, oregano, chilli, stock and tinned beans turn basic carbs into real meals.",
    tldr3: it ? "3) Organizza lo scaffale conforto" : "3) Build a comfort shelf",
    tldr3P: it
      ? "Biscotti, creme spalmabili, tisane. Piccole cose che fanno sembrare meno lontana casa."
      : "Biscuits, spreads, herbal teas—small things that make the UK feel less far from home.",
    miniCtaP: it
      ? "Vuoi la versione stampabile per il frigo con 21 voci già raggruppate?"
      : "Want a fridge-friendly printable with all 21 items grouped for you?",
    miniCtaBtn: it ? "Scarica PDF dispensa" : "Get pantry PDF",

    // Key takeaways
    take1H: it ? "Compra per categorie, non per ricette" : "Shop by category, not by recipe",
    take1P: it
      ? "Se crei blocchi (pasta, pomodori, condimenti, basi per dolci) eviti doppioni inutili e sprechi."
      : "If you think in blocks—pasta, tomatoes, condiments, baking—you avoid random duplicates and waste.",
    take2H: it ? "Pochi prodotti ma buoni" : "Fewer items, better quality",
    take2P: it
      ? "Meglio 2 marche affidabili di passata che 6 bottiglie qualsiasi: cambi gusto, non riempi il cestino."
      : "Two reliable brands of passata beat six random jars: you change flavour, not fill the bin.",
    take3H: it ? "I contenitori valgono quanto il cibo" : "Containers matter as much as food",
    take3P: it
      ? "Barattoli impilabili e etichette ti fanno usare davvero quello che compri, invece di dimenticarlo in fondo al mobile."
      : "Stackable containers and labels mean you actually use what you buy instead of losing it at the back of the cupboard.",

    // Base staples table
    baseH: it
      ? "Base dispensa: pasta, riso e brodi"
      : "Pantry base: pasta, rice & stocks",
    baseSub: it
      ? "Parti da qui: con questi ingredienti prepari primi veloci e zuppe in stile italiano."
      : "Start here: with these ingredients you can cook quick Italian-style pastas and soups.",
    baseHeaders: it
      ? ["Categoria", "Esempio", "Per cosa è perfetto"]
      : ["Category", "Example", "Best for"],
    baseRows: it
      ? [
          ["Pasta di grano duro", "Spaghetti, penne, rigatoni", "Pasta al pomodoro, carbonara, aglio e olio"],
          ["Pasta corta veloce", "Fusilli, farfalle", "Insalate di pasta, piatti in teglia"],
          ["Riso da risotto", "Arborio o Carnaroli", "Risotti cremosi (zucca, funghi, zafferano)"],
          ["Cubi o polvere di brodo", "Vegetale o manzo", "Zuppe, risotti, minestroni veloci"],
        ]
      : [
          ["Durum wheat pasta", "Spaghetti, penne, rigatoni", "Everyday tomato sauces, carbonara, aglio e olio"],
          ["Quick short pasta", "Fusilli, farfalle", "Pasta salads, tray bakes"],
          ["Risotto rice", "Arborio or Carnaroli", "Creamy risotti (mushroom, pumpkin, saffron)"],
          ["Stock cubes / powder", "Veg or beef", "Soups, risottos, quick broths"],
        ],

    // Tomatoes & legumes
    tomoH: it
      ? "Pomodori & legumi: il cuore dei piatti poveri"
      : "Tomatoes & legumes: the heart of budget meals",
    tomoSub: it
      ? "Barattoli intelligenti = cene pronte anche a fine mese."
      : "Smart cans mean real dinners even at the end of the month.",
    tomoHeaders: it
      ? ["Prodotto", "Dettagli da cercare", "Idee veloci"]
      : ["Product", "What to look for", "Quick ideas"],
    tomoRows: it
      ? [
          ["Passata di pomodoro", "Solo pomodoro, niente zucchero", "Pasta al pomodoro, parmigiana, ragù veloce"],
          ["Pelati in scatola", "Pomodori interi, poca acqua", "Sugo lungo per pizza, spezzatini, polpette"],
          ["Ceci", "Lattine senza troppa aggiunta di sale", "Pasta e ceci, hummus, insalate"],
          ["Cannellini / borlotti", "Leggi origine e consistenza", "Zuppe, minestre, contorni in padella"],
        ]
      : [
          ["Passata (sieved tomatoes)", "100% tomato, no added sugar", "Pasta al pomodoro, parmigiana, quick ragù"],
          ["Tinned peeled tomatoes", "Whole fruit, low added liquid", "Slow sauces, pizza, stews, meatballs"],
          ["Chickpeas", "Cans with moderate salt", "Pasta e ceci, hummus, salads"],
          ["Cannellini / borlotti beans", "Check origin & firmness", "Soups, minestrone, skillet sides"],
        ],

    // Oils, flours, flavour
    flavourH: it
      ? "Oli, farine e \"flavour bomb\""
      : "Oils, flours & flavour bombs",
    flavourSub: it
      ? "Quello che trasforma pasta bianca e pane in cucina vera."
      : "What turns plain pasta and bread into real cooking.",
    flavourHeaders: it
      ? ["Categoria", "Esempio", "Perché serve"]
      : ["Category", "Example", "Why it matters"],
    flavourRows: it
      ? [
          ["Olio extra vergine d'oliva", "Bottiglia scura, origine chiara", "Condire a crudo, soffritti, bruschette"],
          ["Olio di semi", "Girasole o vegetale", "Fritture, torte salate, quando non vuoi sprecare EVO"],
          ["Farina 00", "Per pizza e dolci", "Pasta fresca, piadine, torte"],
          ["Farina forte / per pane", "W alto", "Pane, focaccia, lievitati"],
          ["Aglio, cipolla, peperoncino", "Fresco o in polvere", "Base per il 90% dei sughi italiani"],
          ["Origano, rosmarino, alloro", "Essiccati", "Patate al forno, sughi, arrosti"],
        ]
      : [
          ["Extra virgin olive oil", "Dark bottle, clear origin", "Finishing, soffritto, bruschetta"],
          ["Neutral oil", "Sunflower or veg oil", "Frying, baking, when EVO would be wasted"],
          ["00 flour", "For pizza & cakes", "Fresh pasta, flatbreads, desserts"],
          ["Strong bread flour", "High protein", "Bread, focaccia, yeasted doughs"],
          ["Garlic, onion, chilli", "Fresh or powder", "Base for 90% of Italian sauces"],
          ["Oregano, rosemary, bay", "Dried", "Roast potatoes, sauces, stews"],
        ],

    // How-to
    howToH: it
      ? "Come montare la tua dispensa italiana in una sera"
      : "How to build your Italian pantry in one evening",
    howToIntro: it
      ? "Non devi comprare tutto subito. Ecco un piano in tre mini-ordini (o tre weekend) che non spaventa il conto corrente."
      : "You don’t need to buy everything at once. Here’s a three-mini-order plan that won’t terrify your bank account.",
    howToSteps: it
      ? [
          [
            "Fase 1 — base pasta & pomodoro",
            "Scegli 2 formati di pasta, un riso da risotto, passata, pelati e un olio extra vergine onesto.",
          ],
          [
            "Fase 2 — flavour bomb & legumi",
            "Aggiungi aglio, spezie, brodo, ceci e cannellini. Già così puoi fare zuppe e piatti unici completi.",
          ],
          [
            "Fase 3 — scorte comfort & contenitori",
            "Biscotti, creme spalmabili, tisane + barattoli impilabili e etichette per mettere ordine.",
          ],
        ]
      : [
          [
            "Phase 1 — pasta & tomato base",
            "Pick 2 pasta shapes, one risotto rice, passata, pelati and a decent extra virgin olive oil.",
          ],
          [
            "Phase 2 — flavour bombs & beans",
            "Add garlic, herbs, stock, chickpeas and cannellini. Now you can cook full soups and one-pan meals.",
          ],
          [
            "Phase 3 — comfort shelf & containers",
            "Biscuits, spreads, herbal teas + stackable containers and labels to keep it all under control.",
          ],
        ],
    howToNote: it
      ? "Suggerimento: ordina con coinquilini o partner e dividete le confezioni grandi per risparmiare."
      : "Tip: place one shared order with flatmates/partner and split bigger packs to save money.",

    // Storage
    storageH: it
      ? "Mini cucina UK, massima resa"
      : "Tiny UK kitchen, big pantry energy",
    storagePoints: it
      ? [
          "Usa contenitori impilabili trasparenti per pasta, riso e farine: vedi quanto ti resta a colpo d’occhio.",
          "Un’unica mensola per \"base\" (pasta/riso/pomodoro) e una per \"sapore\" (olio, spezie, brodo).",
          "Tieni un piccolo box \"gusto di casa\" con biscotti, creme e snack italiani da aprire solo nei giorni NO.",
          "Se hai pochissimo spazio, preferisci prodotti concentrati (passata, brodo in polvere) a bottiglie enormi d’acqua o sughi già pronti.",
        ]
      : [
          "Use clear, stackable containers for pasta, rice and flours so you can see levels at a glance.",
          "Keep one shelf for “base” (pasta/rice/tomatoes) and one for “flavour” (oil, spices, stock).",
          "Have a small “taste of home” box with Italian biscuits, spreads and snacks reserved for rough days.",
          "If space is tight, favour concentrated products (passata, stock powder) over huge bottles of ready-made sauces.",
        ],

    // Kit
    kitH: it ? "Il tuo kit dispensa italiana (versione UK)" : "Your Italian pantry starter kit (UK version)",
    kitSub: it
      ? "Compatto, sensato, adatto a cucine in affitto. Alcuni link sono affiliati e potrebbero generarci una piccola commissione, senza costi extra per te."
      : "Compact, realistic and rental-friendly. Some links are affiliate and may earn us a small commission at no extra cost to you.",
    backToHow: it ? "Torna alla guida ↑" : "Back to How-To ↑",
    kitBaseH: it ? "1) Base pasta & cereali" : "1) Pasta & grains base",
    kitBaseList: it
      ? [
          "Pack misto di pasta di grano duro (formati diversi per cambiare piatti senza riempire il mobile).",
          "Riso Arborio o Carnaroli per risotti e minestre.",
          "Una confezione grande di cubetti o polvere di brodo vegetale.",
        ]
      : [
          "Mixed pack of durum-wheat pasta (a few shapes so you can vary dishes without filling the cupboard).",
          "Arborio or Carnaroli rice for risotti and hearty soups.",
          "Large tub or pack of vegetable stock cubes/powder.",
        ],
    kitTomoH: it ? "2) Pomodori & legumi" : "2) Tomatoes & beans",
    kitTomoList: it
      ? [
          "Bottiglie di passata di pomodoro 100% (niente zucchero).",
          "Confezione multipla di pelati interi.",
          "Set di lattine di ceci e cannellini.",
        ]
      : [
          "Glass bottles of 100% passata (no added sugar).",
          "Multi-pack of whole peeled tomatoes.",
          "Set of chickpea and cannellini tins.",
        ],
    kitFlavorH: it ? "3) Condimenti, snack & contenitori" : "3) Flavour, comfort & containers",
    kitFlavorList: it
      ? [
          "Una lattina/bottiglia di olio extra vergine d'oliva affidabile.",
          "Mix di erbe secche (origano, rosmarino, alloro) + peperoncino.",
          "Pack di biscotti all’italiana o frollini per la colazione.",
          "Set di contenitori impilabili trasparenti con etichette.",
        ]
      : [
          "Tin/bottle of reliable extra virgin olive oil.",
          "Mixed dried herbs (oregano, rosemary, bay) + chilli flakes.",
          "Pack of Italian-style breakfast biscuits.",
          "Set of clear stackable containers with labels.",
        ],
    whatYouGetH: it ? "Cosa ottieni con questo kit" : "What this kit gives you",
    whatYouGetList: it
      ? [
          "Primi e zuppe italiani pronti anche a fine mese.",
          "Zero prodotti \"morti\" dimenticati in fondo al mobile.",
          "Spazio usato meglio in una cucina piccola.",
          "Un piccolo rituale conforto (biscotti/tisane) quando la nostalgia si fa sentire.",
        ]
      : [
          "Real Italian-style meals even at the end of the month.",
          "Fewer “dead” products forgotten at the back of the cupboard.",
          "Better use of space in a tiny UK kitchen.",
          "A small comfort ritual (biscuits/tea) for homesick days.",
        ],
    oneToOne: it
      ? "Vuoi consigli su misura per la tua cucina o per il primo ordine grosso di dispensa?"
      : "Want personalised advice on your kitchen or first big pantry order?",
    getFreeAdvice: it ? "Chiedi un consiglio gratuito" : "Get free advice",
    exploreServices: it ? "Scopri i servizi Resinaro" : "Explore Resinaro services",
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // FAQ
    faqH: it ? "FAQ — dispensa italiana, versione Regno Unito" : "FAQ — Italian pantry, UK edition",
    faqs: it
      ? [
          [
            "Non ho spazio: quanti tipi di pasta mi servono davvero?",
            "Per la maggior parte delle persone bastano 2–3 formati: uno lungo (spaghetti), uno corto (penne/rigatoni) e, se vuoi, uno piccolo per minestre. Il resto è bonus.",
          ],
          [
            "Vale la pena comprare tutto bio/importato?",
            "No. Scegli la qualità soprattutto su olio, pomodori e caffè. Per pasta, riso e legumi vanno benissimo anche marche UK affidabili.",
          ],
          [
            "Come faccio a non buttare via cibo?",
            "Compra quantità realistiche, usa contenitori trasparenti, metti davanti ciò che scade prima e pianifica 1–2 cene a settimana \"svuota dispensa\".",
          ],
          [
            "Posso fare una dispensa italiana anche se vivo con persone non italiane?",
            "Sì: molti ingredienti (olio, pasta, pomodori, legumi) sono neutri e utili a tutti. Potete dividere costi e spazio, ognuno con il proprio angolo \"gusto di casa\".",
          ],
        ]
      : [
          [
            "I have almost no space. How many pasta types do I really need?",
            "For most households, 2–3 shapes are enough: one long (spaghetti), one short (penne/rigatoni) and maybe a tiny one for soups. Everything else is bonus.",
          ],
          [
            "Do I need everything organic or imported from Italy?",
            "No. Prioritise quality for olive oil, tomatoes and coffee. For pasta, rice and beans, good UK-available brands are usually fine.",
          ],
          [
            "How do I stop wasting food?",
            "Buy realistic quantities, use clear containers, keep older things at the front and plan 1–2 “cupboard clear-out” dinners each week.",
          ],
          [
            "Can I build an Italian pantry if I live with non-Italians?",
            "Yes: most staples (oil, pasta, tomatoes, beans) are universal. Share the basics and keep a small labelled box for your personal “taste of home” items.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    printableH: it
      ? "Scarica la checklist dispensa italiana (PDF)"
      : "Download the Italian pantry checklist (PDF)",
    printableP: it
      ? "Una pagina con le 21 voci essenziali, raggruppate per categoria, con spazio per segnare cosa hai già in casa."
      : "A one-page checklist with 21 essentials grouped by category and a column to tick what you already have at home.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla dispensa" : "Ask a pantry question",
    londonGuide: it ? "Italiani a Londra: guida cibo →" : "Italians in London: Food Guide →",
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
  const kitAnchor = "#pantry-kit";

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Italian Pantry Essentials in the UK (2025): 21 Products You Can Get on Amazon",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/italian-pantry-essentials-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Pantry", "Italian UK"],
    image: [
      "https://resinaro.co.uk/public/images/community/italian-pantry-hero.jpg",
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
            ? "Dispensa italiana essenziale (UK)"
            : "Italian Pantry Essentials (UK)",
        item: "https://resinaro.co.uk/community/italian-pantry-essentials-uk",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come costruire una dispensa italiana in una cucina UK"
        : "How to build an Italian pantry in a UK kitchen",
    totalTime: "PT30M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Pasta di grano duro" : "Durum wheat pasta",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Passata e pelati" : "Passata and tinned tomatoes",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Legumi in scatola" : "Tinned beans",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: locale === "it"
          ? "Piccola cucina o mobile dispensa"
          : "Small kitchen cupboard or pantry shelf",
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
            src="/images/community/italian-pantry-hero.jpg"
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
              <span className="block text-emerald-200">{copy.heroTitleB}</span>
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
              <h3 className="text-sm font-semibold text-emerald-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Summary & key takeaways ===== */}
      <section id="summary" className="mx-auto mt-14 max-w-7xl px-6">
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

      {/* ===== Base staples table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.baseH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">{copy.baseSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {locale === "it"
                ? "Vedi il piano in 3 fasi →"
                : "See the 3-phase plan →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.baseHeaders.map((h) => (
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
                {(copy.baseRows as string[][]).map((row, i) => (
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
              ? "Suggerimento: se cucini spesso per una sola persona, preferisci formati più piccoli per ridurre gli avanzi."
              : "Tip: if you mostly cook for one, favour smaller pasta shapes to reduce leftovers."}
          </p>
        </div>
      </section>

      {/* ===== Tomatoes & legumes table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.tomoH}</h2>
          <p className="mt-1 text-sm text-gray-600">{copy.tomoSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.tomoHeaders.map((h) => (
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
                {(copy.tomoRows as string[][]).map((row, i) => (
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

      {/* ===== Oils, flours & flavour ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.flavourH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{copy.flavourSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.flavourHeaders.map((h) => (
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
                {(copy.flavourRows as string[][]).map((row, i) => (
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

      {/* ===== How-To ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.howToH}</h2>
            <p className="mt-2 text-sm text-gray-700">{copy.howToIntro}</p>
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

          {/* Storage tips */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.storageH}
            </h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-2">
              {(copy.storagePoints as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">
                {locale === "it"
                  ? "Vuoi vedere un esempio pratico di cucina piccola organizzata? Dai un’occhiata alla guida:"
                  : "Want a practical example of a tiny-but-organised kitchen? Have a look at:"}
              </p>
              <Link
                href="/community/starter-uk-kitchen-italian"
                className="mt-2 inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                {locale === "it"
                  ? "Tiny UK Kitchen, Big Italian Flavour"
                  : "Tiny UK Kitchen, Big Italian Flavour"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kit (affiliate) ===== */}
      <section id="pantry-kit" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.kitH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.kitSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {copy.backToHow}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              {/* Base */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitBaseH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.kitBaseList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  {/* Example affiliate links – update to specific products if you like */}
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=italian+durum+wheat+pasta&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Vedi pack di pasta di grano duro su Amazon UK"
                      : "See durum wheat pasta packs on Amazon UK"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=arborio+rice&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Riso Arborio/Carnaroli"
                      : "Arborio/Carnaroli rice"}
                  </a>
                </div>
              </div>

              {/* Tomatoes & beans */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitTomoH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.kitTomoList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=passata+italian&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Passata di pomodoro (bottiglie vetro)"
                      : "Italian-style passata (glass bottles)"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=canned+italian+tomatoes&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Pelati interi in scatola"
                      : "Whole tinned tomatoes"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=chickpeas+can&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it" ? "Ceci in scatola" : "Tinned chickpeas"}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Flavour & containers */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitFlavorH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.kitFlavorList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+italian&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Olio extra vergine d'oliva"
                      : "Extra virgin olive oil"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=stackable+glass+containers+kitchen&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Contenitori impilabili trasparenti"
                      : "Stackable clear containers"}
                  </a>
                </div>
              </div>

              {/* What you get + Resinaro CTA */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-emerald-900">
                  {copy.whatYouGetH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                  {(copy.whatYouGetList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                  <p className="text-sm text-emerald-900">{copy.oneToOne}</p>
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
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/moka-coffee-kit"
                >
                  {locale === "it"
                    ? "Kit caffè moka (Edizione UK)"
                    : "The No-Machine Italian Coffee Kit (UK Edition)"}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/buying-in-bulk-uk-italian-staples"
                >
                  {locale === "it"
                    ? "Risparmiare: comprare scorte italiane in bulk (UK)"
                    : "Save Money: Buy Italian Staples in Bulk (UK)"}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/starter-uk-kitchen-italian"
                >
                  Tiny UK Kitchen, Big Italian Flavour
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.affNoteEnd}</p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              {copy.printableH}
            </h3>
            <p className="mt-1 text-sm text-gray-700">{copy.printableP}</p>
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
