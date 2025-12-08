// src/app/[locale]/community/aperitivo-at-home-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "Aperitivo at Home in the UK (2025): Boards, Glasses & Snacks Guide",
  description:
    "Recreate Italian aperitivo at home in a UK flat: boards, cheeses, salumi, glasses, drinks and snacks — plus a shoppable aperitivo kit and printable checklist.",
  alternates: { canonical: "/community/aperitivo-at-home-uk" },
  openGraph: {
    title:
      "Aperitivo at Home in the UK (2025): Boards, Glasses & Snacks Guide",
    description:
      "How to host a real Italian-style aperitivo in a UK flat: simple boards, glassware, drinks and snacks with UK-available products.",
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
      ? "Tavolino con tagliere di aperitivo, calici e snack in un salotto UK"
      : "Coffee table with aperitivo board, glasses and snacks in a UK living room",
    heroBadge: it ? "Cibo • Aperitivo" : "Food • Aperitivo",
    heroTitleA: it ? "Aperitivo a casa" : "Aperitivo at Home",
    heroTitleB: it ? "Versione UK 2025" : "UK Edition 2025",
    heroLead: it
      ? "Tagliere, due bicchieri giusti, qualche snack e subito il salotto inglese sembra un bar in Italia — anche se hai solo un tavolino Ikea."
      : "A simple board, the right glasses, a few snacks and suddenly your UK living room feels like an Italian bar — even if you only have an Ikea coffee table.",
    ctaCopy: it
      ? "Scarica la checklist aperitivo (PDF) con lista spesa e cose da preparare il giorno prima."
      : "Get the printable aperitivo checklist (PDF) with shopping list and day-before prep tips.",
    ctaSub: it
      ? "Una mail al mese per italiani nel Regno Unito, zero spam."
      : "One email a month for Italians in the UK, zero spam.",
    ctaBtn: it ? "Scarica checklist aperitivo" : "Get the aperitivo checklist",
    pub: it ? "Pubblicato: 7 Dic 2025" : "Published: 7 Dec 2025",
    upd: it ? "Aggiornato: 7 Dic 2025" : "Updated: 7 Dec 2025",
    read: it ? "~11 min lettura" : "~11 min read",

    // USPs
    usp1H: it ? "Vera atmosfera italiana, in un salotto UK" : "Real Italian vibe, in a UK flat",
    usp1P: it
      ? "Niente ricette complicate: solo combinazioni furbe di formaggi, salumi, pane, verdure e snack che trovi in UK."
      : "No chef skills needed: just smart combinations of cheese, cured meats, bread, veggies and snacks you can find in the UK.",
    usp2H: it ? "Pensato per case piccole e coinquilini" : "Designed for small flats & flatshares",
    usp2P: it
      ? "Soluzioni su tagliere, vassoi e bicchieri che funzionano anche se hai poco spazio e sedie diverse."
      : "Boards, trays and glasses that work even if space is tight and everyone sits on different chairs.",
    usp3H: it ? "Kit acquistabile e budget chiaro" : "Shoppable kit & clear budget",
    usp3P: it
      ? "Link a prodotti UK (alcuni affiliati) per taglieri, ciotoline e bicchieri: costruisci il tuo set una volta e usalo tutto l’anno."
      : "UK-friendly links (some affiliate) for boards, bowls and glasses: build your set once and reuse it all year.",

    // TL;DR
    tldrH: it
      ? "Riassunto — come fare aperitivo italiano in UK senza stress"
      : "TL;DR — how to do Italian aperitivo in the UK without stress",
    tldr1: it ? "1) Scegli un tipo di tagliere" : "1) Pick one board theme",
    tldr1P: it
      ? "Formaggi + pane, oppure salumi + sottaceti. Meno varianti ma fatte bene è meglio di mille cose a caso."
      : "Cheese + bread, or salumi + pickles. Fewer things done well beat a random mountain of snacks.",
    tldr2: it ? "2) Equilibra alcol e analcolico" : "2) Balance alcoholic & soft",
    tldr2P: it
      ? "Un vino o spritz, un analcolico serio (tipo bitter o soda con agrumi) e sempre acqua in tavola."
      : "One spritz or wine, one proper non-alcoholic option (bitter or soda with citrus) and always water on the table.",
    tldr3: it ? "3) Prepara in anticipo e goditela" : "3) Prep ahead, then enjoy",
    tldr3P: it
      ? "Taglia formaggi e verdure prima che arrivino gli ospiti; all’ultimo minuto pensi solo a ghiaccio, bevande e pane caldo."
      : "Slice cheese and prep veggies before guests arrive; last minute is just ice, drinks and warming the bread.",
    miniCtaP: it
      ? "Vuoi una checklist stampabile con lista spesa, cose da mettere in frigo e cosa tirare fuori all’ultimo?"
      : "Want a printable checklist with shopping list, fridge items and last-minute steps?",
    miniCtaBtn: it ? "Scarica PDF aperitivo" : "Get aperitivo PDF",

    // Key takeaways
    take1H: it ? "Pensa per colori, texture e temperature" : "Think in colours, textures & temperature",
    take1P: it
      ? "Un buon aperitivo ha qualcosa di croccante, qualcosa di cremoso, qualcosa di fresco e un tocco acido/sapido."
      : "A good aperitivo has something crunchy, something creamy, something fresh and a small salty/acid kick.",
    take2H: it ? "Temperatura ambiente è tua amica" : "Room temperature is your friend",
    take2P: it
      ? "Formaggi e salumi tirati fuori dal frigo 30 minuti prima hanno molto più sapore (e sembrano più \"da bar\")."
      : "Cheese and salumi taken out of the fridge 30 minutes before taste more like they do back home in Italy.",
    take3H: it ? "I bicchieri fanno metà dell’effetto wow" : "Glassware does half the 'wow'",
    take3P: it
      ? "Anche un bitter economico sembra speciale in un bel bicchiere con ghiaccio, fetta d’arancia e sottobicchiolo."
      : "Even a cheap bitter feels special in the right glass with ice, an orange slice and a small coaster.",

    // Boards table
    boardsH: it
      ? "Taglieri base: formaggi, salumi e carboidrati"
      : "Base boards: cheese, salumi & carbs",
    boardsSub: it
      ? "Parti da 3–5 cose ben scelte invece che riempire il tavolo: sarà più bello e spenderai meno."
      : "Start with 3–5 well-chosen items instead of covering the table: it’ll look better and cost less.",
    boardsHeaders: it
      ? ["Categoria", "Esempio", "Perché funziona"]
      : ["Category", "Example", "Why it works"],
    boardsRows: it
      ? [
          ["Formaggio morbido", "Brie, camembert, taleggio se lo trovi", "Cremoso, da spalmare sul pane o sui cracker"],
          ["Formaggio stagionato", "Parmigiano, grana, pecorino", "Si spezza in scaglie, dà sapidità e struttura al tagliere"],
          ["Salumi affettati", "Prosciutto crudo, salame, coppa", "Sapore deciso, fa subito aperitivo italiano"],
          ["Carbo base", "Pane a fette, focaccia, grissini, taralli", "Riempie, aiuta a non esagerare con l’alcol"],
          ["Elemento fresco", "Pomodorini, finocchi, carote, cetrioli", "Equilibra il salato e alleggerisce il piatto"],
        ]
      : [
          ["Soft cheese", "Brie, camembert, taleggio if you find it", "Creamy, great to spread on bread or crackers"],
          ["Aged cheese", "Parmigiano, grana, pecorino", "Breaks into shards and adds savoury depth"],
          ["Salumi slices", "Prosciutto, salami, coppa", "Instant Italian bar feeling with little effort"],
          ["Carb base", "Sliced bread, focaccia, breadsticks, taralli", "Fills people up and softens the alcohol impact"],
          ["Fresh element", "Cherry tomatoes, fennel, carrots, cucumber", "Light, crunchy contrast to all the salty food"],
        ],

    // Drinks & glassware table
    drinksH: it
      ? "Bevande & bicchieri: dall’Aperol allo spritz analcolico"
      : "Drinks & glassware: from Aperol to soft spritzes",
    drinksSub: it
      ? "Non ti serve un bar completo: bastano 1–2 opzioni alcoliche e una analcolica con i bicchieri giusti."
      : "You don’t need a full bar: 1–2 alcoholic options and one non-alcoholic, served in the right glasses, is plenty.",
    drinksHeaders: it
      ? ["Bevanda", "Bicchiere consigliato", "Nota pratica"]
      : ["Drink", "Recommended glass", "Practical note"],
    drinksRows: it
      ? [
          ["Spritz classico (Aperol/Campari)", "Calice da vino grande", "Ghiaccio, fetta d’arancia, guarda il colore: fa scena subito"],
          ["Vino bianco frizzante", "Flûte o calice medio", "Tieni una caraffa d’acqua vicino per alternare"],
          ["Spritz analcolico", "Calice da vino o tumbler", "Usa bitter analcolico + soda + agrumi, stessi rituali del vero spritz"],
          ["Analcolico semplice", "Tumbler", "Soda, succo di agrumi, fettina di limone e ghiaccio: sembra un cocktail"],
          ["Acqua", "Bicchieri semplici", "Sempre in tavola: aiuta tutti a stare meglio il giorno dopo"],
        ]
      : [
          ["Classic spritz (Aperol/Campari)", "Large wine glass", "Lots of ice and an orange slice — it looks special instantly"],
          ["Chilled white / prosecco", "Flute or medium wine glass", "Keep a jug of water nearby to balance things out"],
          ["Alcohol-free spritz", "Wine glass or tumbler", "Use a bitter-style soft drink + soda + citrus, same ritual as a real spritz"],
          ["Simple soft drink", "Tumbler", "Soda + citrus juice + lemon slice on ice looks like a proper cocktail"],
          ["Water", "Plain glasses", "Always on the table so everyone feels better the next morning"],
        ],

    // Snacks table
    snacksH: it
      ? "Ciotoline & snack: olive, frutta secca e piccole cose"
      : "Little bowls & snacks: olives, nuts & small bites",
    snacksSub: it
      ? "Le ciotole piccole trasformano cose normalissime in qualcosa da aperitivo."
      : "Small bowls turn very normal foods into proper aperitivo snacks.",
    snacksHeaders: it
      ? ["Snack", "Dove trovarlo in UK", "Idea veloce"]
      : ["Snack", "Where to find it in the UK", "Quick idea"],
    snacksRows: it
      ? [
          ["Olive verdi o nere", "Supermercati grandi, deli, Lidl/Aldi spesso hanno linee italiane", "Condisci con olio, scorza di limone, origano"],
          ["Frutta secca mista", "Corsia snack di qualsiasi supermercato", "Tostale 5 minuti in padella con un filo di olio e sale"],
          ["Taralli / grissini", "Sezione internazionale o Amazon", "Mettili in un bicchiere alto o in una ciotola stretta"],
          ["Pomodori secchi / sottoli", "Barattoli in vetro, corsia conserve", "Taglia e mescola con capperi e olio per un mini-condimento"],
          ["Patatine & snack da sacchetto", "Ovunque", "Servile in ciotole piccole invece che nel sacchetto: cambia tutto"],
        ]
      : [
          ["Green or black olives", "Large supermarkets, deli counters, Lidl/Aldi Italian ranges", "Dress with olive oil, lemon zest and oregano"],
          ["Mixed nuts", "Snack aisle of any supermarket", "Toast in a pan with a little oil and salt for a warmer taste"],
          ["Taralli / breadsticks", "Italian/import aisles or Amazon", "Serve standing up in a tall glass or narrow bowl"],
          ["Sun-dried tomatoes / antipasti jars", "Jars in the tinned veg/pickles aisle", "Chop and mix with capers and olive oil for a quick topping"],
          ["Crisps & bagged snacks", "Anywhere", "Pour into small bowls instead of leaving bags on the table — instant upgrade"],
        ],

    // How-to
    howToH: it
      ? "Come organizzare un aperitivo a casa in 30 minuti"
      : "How to set up aperitivo at home in 30 minutes",
    howToIntro: it
      ? "Ecco un piano realistico per chi lavora, ha poco spazio e invita amici in un normale appartamento UK."
      : "Here’s a realistic plan if you work, have limited space and invite friends to a normal UK flat.",
    howToSteps: it
      ? [
          [
            "Fase 1 — il giorno prima",
            "Decidi quante persone vengono, scegli un tipo di tagliere (più formaggi o più salumi) e compra pane, formaggi, salumi, olive e una bevanda alcolica + una analcolica.",
          ],
          [
            "Fase 2 — un’ora prima dell’arrivo",
            "Sistema il tavolino o il piano in cucina con una tovaglia o un runner, tira fuori taglieri, ciotoline e bicchieri; metti in fresco bevande e acqua.",
          ],
          [
            "Fase 3 — 30 minuti prima",
            "Taglia formaggi e verdure, riempi le ciotole con olive e snack, tosta leggermente il pane/focaccia se ti va. All’ultimo momento ti occupi solo di ghiaccio e spritz.",
          ],
        ]
      : [
          [
            "Phase 1 — the day before",
            "Decide how many people are coming, pick one board style (more cheese or more salumi) and buy bread, cheese, salumi, olives and one alcoholic + one soft drink.",
          ],
          [
            "Phase 2 — one hour before",
            "Clear your coffee table or kitchen counter, add a cloth or runner, lay out boards, bowls and glasses, and chill drinks and water.",
          ],
          [
            "Phase 3 — 30 minutes before",
            "Slice cheese and veggies, fill bowls with olives and snacks, lightly warm bread/focaccia if you like. Last minute is only ice and mixing spritzes.",
          ],
        ],
    howToNote: it
      ? "Suggerimento: se vivi in flatshare, avvisa i coinquilini e proponi loro di unirsi o usare un orario in cui il salotto è libero."
      : "Tip: if you live in a flatshare, warn flatmates and offer to include them or pick a time when the living room is usually free.",

    // Small spaces / hosting tips
    hostingH: it
      ? "Aperitivo in salotto piccolo: far entrare tutti"
      : "Hosting in a tiny UK living room",
    hostingPoints: it
      ? [
          "Usa un tavolino basso o il piano della cucina come “buffet” e fai sedere le persone dove capita (divano, sedie, tappeto).",
          "Non riempire il tavolo di tutto subito: esci gli snack in due ondate, così non sembrerà mai spoglio.",
          "Tieni un sacchetto “emergenza briciole” con strofinaccio e salviette a portata di mano per incidenti veloci.",
          "Se hai poco ghiaccio, usa bevande ben fredde dal frigo e tanta acqua: il ghiaccio diventa solo un extra scenografico.",
        ]
      : [
          "Use your coffee table or kitchen counter as the “buffet” and let people sit wherever (sofa, chairs, floor cushions).",
          "Don’t put everything out at once: bring snacks in two waves so the table always looks inviting.",
          "Keep a small “crumb emergency kit” with a cloth and wipes nearby to deal with quick spills.",
          "If you’re short on ice, rely on properly chilled drinks and plenty of water; ice becomes a nice extra instead of a must.",
        ],

    // Kit
    kitH: it
      ? "Il tuo kit aperitivo a casa (versione UK)"
      : "Your at-home aperitivo kit (UK version)",
    kitSub: it
      ? "Un set compatto di taglieri, bicchieri e ciotoline che puoi usare tutto l’anno. Alcuni link sono affiliati e potrebbero generarci una piccola commissione, senza costi extra per te."
      : "A compact set of boards, glasses and bowls you can reuse all year. Some links are affiliate and may earn us a small commission at no extra cost to you.",
    backToHow: it ? "Torna al piano in 3 fasi ↑" : "Back to 3-phase plan ↑",
    kitBaseH: it ? "1) Taglieri & ciotoline" : "1) Boards & small bowls",
    kitBaseList: it
      ? [
          "1–2 taglieri in legno o bambù di dimensioni diverse (uno grande, uno più stretto).",
          "Set di 4–6 ciotole piccole impilabili per olive, frutta secca, sottoli.",
          "Un vassoio o piatto grande per mettere pane, focaccia o taralli.",
        ]
      : [
          "1–2 wooden or bamboo serving boards in different sizes (one large, one narrow).",
          "Set of 4–6 stackable small bowls for olives, nuts and antipasti.",
          "One large tray or platter to hold bread, focaccia or taralli.",
        ],
    kitDrinksH: it ? "2) Bicchieri & ghiaccio" : "2) Glassware & ice",
    kitDrinksList: it
      ? [
          "Set di 4–6 calici da vino ampi (vanno bene sia per spritz che per vino).",
          "4–6 tumbler bassi per analcolici e acqua.",
          "Stampi per ghiaccio grandi o sacchetti per cubetti.",
        ]
      : [
          "Set of 4–6 large wine glasses (work for spritz and wine).",
          "4–6 short tumblers for soft drinks and water.",
          "Large ice cube trays or ice bags.",
        ],
    kitSnacksH: it ? "3) Piccoli extra che alzano il livello" : "3) Small extras that level things up",
    kitSnacksList: it
      ? [
          "Sottobicchieri semplici in sughero o tessuto.",
          "Tovagliolini di carta carini o di stoffa lavabile.",
          "Un portacandele basso o lucine per atmosfera “barino” senza spendere.",
        ]
      : [
          "Simple cork or fabric coasters.",
          "Nice paper napkins or washable fabric ones.",
          "A low candle holder or fairy lights for “bar-style” atmosphere.",
        ],
    whatYouGetH: it ? "Cosa ottieni con questo kit" : "What this kit gives you",
    whatYouGetList: it
      ? [
          "Un aperitivo che sembra “da locale” anche in un salotto minuscolo.",
          "Un set riutilizzabile per compleanni, cene e serate film.",
          "Meno ansia da preparazione: sai sempre dove mettere cosa.",
          "Un piccolo rituale italiano che puoi rifare ogni volta che ti manca casa.",
        ]
      : [
          "An aperitivo that looks “bar-level” even in a tiny living room.",
          "A reusable set for birthdays, dinners and movie nights.",
          "Less prep anxiety: you always know where everything goes.",
          "A small Italian ritual you can bring back whenever you feel homesick.",
        ],
    oneToOne: it
      ? "Vuoi consigli su misura per il tuo spazio o per organizzare un aperitivo per un’occasione speciale?"
      : "Want personalised tips for your space or for a special-occasion aperitivo?",
    getFreeAdvice: it ? "Chiedi un consiglio gratuito" : "Get free advice",
    exploreServices: it ? "Scopri i servizi Resinaro" : "Explore Resinaro services",
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // FAQ
    faqH: it
      ? "FAQ — aperitivo italiano a casa, versione Regno Unito"
      : "FAQ — Italian aperitivo at home, UK edition",
    faqs: it
      ? [
          [
            "Quanta roba devo comprare a testa per un aperitivo?",
            "Come regola base, considera 2–3 tipi di snack salati, 2–3 fette di pane/focaccia e 2 bicchieri di bevanda a testa. Se è solo aperitivo e non cena, non serve esagerare.",
          ],
          [
            "Come faccio un aperitivo bello se ho poco budget?",
            "Punta su pane, una crema da spalmare (anche fatta con formaggio fresco + erbe), una sola qualità di formaggio e tante verdure croccanti. Presentazione e ciotoline fanno il resto.",
          ],
          [
            "Posso fare un aperitivo carino anche senza alcol?",
            "Sì. Usa bicchieri da vino anche per analcolici, fai spritz senza alcol con bitter/soda e agrumi, e gioca su ghiaccio e guarnizioni. L’atmosfera non dipende dall’alcol.",
          ],
          [
            "E se qualcuno non mangia latticini o carne?",
            "Tieni sempre almeno un’opzione veg (verdure, hummus, olive, frutta secca) e un pane/crostino semplice. Etichetta mentalmente le ciotole e spiega cosa è cosa quando arrivano gli ospiti.",
          ],
        ]
      : [
          [
            "How much food do I need per person for aperitivo?",
            "As a rough guide, plan 2–3 salty snacks, 2–3 pieces of bread/focaccia and around 2 drinks per person. If it’s aperitivo-only and not dinner, you don’t need to overdo it.",
          ],
          [
            "How can I make a nice aperitivo on a tight budget?",
            "Focus on bread, one good spread (even just soft cheese with herbs), one cheese and plenty of crunchy veg. Presentation and small bowls do the rest.",
          ],
          [
            "Can I host a proper aperitivo without alcohol?",
            "Yes. Use wine glasses for soft drinks, make spritz-style mocktails with bitter sodas and citrus, and play with ice and garnishes. The atmosphere doesn’t depend on alcohol.",
          ],
          [
            "What if someone doesn’t eat dairy or meat?",
            "Always keep at least one vegan-friendly option (veg, hummus, olives, nuts) and simple bread/crostini. Mentally label bowls and explain what’s what when guests arrive.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    printableH: it
      ? "Scarica la checklist aperitivo (PDF)"
      : "Download the aperitivo checklist (PDF)",
    printableP: it
      ? "Una pagina con lista spesa base, cose da preparare prima e spazio per adattare il tuo menù."
      : "A one-page checklist with basic shopping list, prep-ahead notes and room to adapt your own menu.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sull’aperitivo" : "Ask an aperitivo question",
    pantryGuide: it
      ? "Dispensa italiana essenziale (UK) →"
      : "Italian Pantry Essentials (UK) →",
    coffeeGuide: it
      ? "Kit caffè moka (UK) →"
      : "No-Machine Italian Coffee Kit (UK) →",
    kitchenGuide: it
      ? "Tiny UK Kitchen, Big Italian Flavour →"
      : "Tiny UK Kitchen, Big Italian Flavour →",
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
  const kitAnchor = "#aperitivo-kit";

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Aperitivo at Home in the UK (2025): Boards, Glasses & Snacks Guide",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.resinaro.co.uk/community/aperitivo-at-home-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Aperitivo", "Italian UK"],
    image: [
      "https://www.resinaro.co.uk/public/images/community/aperitivo-at-home-hero.jpg",
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
        item: "https://www.resinaro.co.uk/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Aperitivo a casa (UK)"
            : "Aperitivo at Home (UK)",
        item:
          "https://www.resinaro.co.uk/community/aperitivo-at-home-uk",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come organizzare un aperitivo italiano in un appartamento UK"
        : "How to host Italian-style aperitivo in a UK flat",
    totalTime: "PT30M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Formaggi misti" : "Mixed cheeses",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Salumi affettati" : "Sliced salumi",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Olive & snack" : "Olives & snacks",
      },
      {
        "@type": "HowToSupply",
        name:
          locale === "it"
            ? "Bicchieri e ghiaccio"
            : "Glasses and ice",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name:
          locale === "it"
            ? "Taglieri e ciotole"
            : "Boards and bowls",
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
            src="/images/community/aperitivo-at-home-hero.jpg"
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
                  {locale === "it" ? "Punto chiave" : "Key takeaway"}
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

      {/* ===== Boards table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.boardsH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {copy.boardsSub}
              </p>
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
                  {copy.boardsHeaders.map((h) => (
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
                {(copy.boardsRows as string[][]).map((row, i) => (
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

          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Suggerimento: se hai paura di comprare troppo, pensa a 3 bocconi salati a persona e aggiungi frutta fresca se servono extra."
              : "Tip: worried about overbuying? Plan for roughly 3 savoury bites per person and top up with fresh fruit if needed."}
          </p>
        </div>
      </section>

      {/* ===== Drinks & glassware table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.drinksH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.drinksSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.drinksHeaders.map((h) => (
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
                {(copy.drinksRows as string[][]).map((row, i) => (
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
        </div>
      </section>

      {/* ===== Snacks table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            {copy.snacksH}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {copy.snacksSub}
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.snacksHeaders.map((h) => (
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
                {(copy.snacksRows as string[][]).map((row, i) => (
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
        </div>
      </section>

      {/* ===== How-To ===== */}
      <section
        id="how-to"
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
                )
              )}
            </ol>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">
                {copy.howToNote}
              </p>
            </div>
          </div>

          {/* Hosting tips */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.hostingH}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
              {(copy.hostingPoints as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">
                {locale === "it"
                  ? "Vuoi un’altra guida pratica per rendere la tua cucina più “italiana-friendly”? Guarda anche:"
                  : "Want another practical guide to make your kitchen more “Italian-friendly”? Check:"}
              </p>
              <Link
                href="/community/starter-uk-kitchen-italian"
                className="mt-2 inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                {copy.kitchenGuide}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Kit (affiliate) ===== */}
      <section
        id={kitAnchor.slice(1)}
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
              href={howToAnchor}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {copy.backToHow}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              {/* Boards & bowls */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitBaseH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitBaseList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=wooden+serving+board&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Vedi taglieri in legno su Amazon UK"
                      : "See wooden serving boards on Amazon UK"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=small+ceramic+bowls+set&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Set di ciotoline impilabili"
                      : "Set of stackable small bowls"}
                  </a>
                </div>
              </div>

              {/* Glassware & ice */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitDrinksH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitDrinksList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=large+wine+glasses+set&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Set di calici da vino ampi"
                      : "Set of large wine glasses"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=whisky+tumblers+set&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Tumbler bassi multiuso"
                      : "Short tumblers"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=large+ice+cube+tray&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Stampi per ghiaccio grandi"
                      : "Large ice cube trays"}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Small extras */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitSnacksH}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
                  {(copy.kitSnacksList as string[]).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm">
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=cork+coasters+set&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Set di sottobicchieri in sughero"
                      : "Cork coaster sets"}
                  </a>
                  <span> · </span>
                  <a
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href="https://www.amazon.co.uk/s?k=tea+light+candle+holders&tag=resinaroamzn-21"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    {locale === "it"
                      ? "Portacandele bassi"
                      : "Low candle holders"}
                  </a>
                </div>
              </div>

              {/* What you get + Resinaro CTA */}
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
                  href="/community/moka-coffee-kit"
                >
                  {copy.coffeeGuide}
                </Link>
              </li>
              <li>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="/community/starter-uk-kitchen-italian"
                >
                  {copy.kitchenGuide}
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
              <Link
                href="/directories/restaurants/london"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {locale === "it"
                  ? "Ristoranti italiani a Londra →"
                  : "Italian restaurants in London →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
