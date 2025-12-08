// src/app/[locale]/community/italian-olive-oil-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "Best Italian Extra Virgin Olive Oils in the UK (2025): 9 Bottles You Can Trust",
  description:
    "A practical 2025 guide to Italian extra virgin olive oil (EVOO) you can actually find in the UK: everyday bottles, special-occasion oils and bulk tins on Amazon UK, plus how to read labels, store oil and avoid wasting money.",
  alternates: { canonical: "/community/italian-olive-oil-uk" },
  openGraph: {
    title: "Best Italian Extra Virgin Olive Oils in the UK (2025): 9 Bottles You Can Trust",
    description:
      "Everyday and special-occasion Italian extra virgin olive oils (EVOO) you can buy in the UK, with Amazon UK links, label tips, storage advice and a simple 2-bottle strategy.",
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
      ? "Bottiglia di olio extravergine d’oliva italiano su un tavolo di cucina in UK"
      : "Bottle of Italian extra virgin olive oil on a UK kitchen table",
    heroBadge: it
      ? "Dispensa • Olio extravergine • UK"
      : "Pantry • Extra virgin olive oil • UK",
    heroTitleA: it
      ? "Olio extravergine italiano in UK"
      : "Italian Extra Virgin Olive Oil in the UK",
    heroTitleB: it ? "9 bottiglie di cui fidarti" : "9 Bottles You Can Trust",
    heroLead: it
      ? "Come scegliere un olio buono (senza spendere follie) in UK: una bottiglia “tutti i giorni”, una da finitura, più alcune opzioni in latta per chi cucina tanto."
      : "How to pick good Italian olive oil in the UK without wasting money: one everyday bottle, one finishing bottle, plus a few bulk-tin options if you cook a lot.",
    ctaCopy: it
      ? "Scarica la mini-scheda olio extravergine (PDF) + una mail al mese con consigli per italiani nel Regno Unito."
      : "Get the Italian olive oil cheat sheet (PDF) + one email a month with Italian-in-the-UK tips.",
    ctaSub: it
      ? "Zero spam. Disiscrizione in qualsiasi momento."
      : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica la scheda olio" : "Get the oil cheat sheet",
    pub: it ? "Pubblicato: 8 Dic 2025" : "Published: 8 Dec 2025",
    upd: it ? "Aggiornato: 8 Dic 2025" : "Updated: 8 Dec 2025",
    read: it ? "~10 min lettura" : "~10 min read",

    // USPs
    usps: it
      ? [
          {
            h: "Solo prodotti trovabili in UK",
            p: "Oli che puoi acquistare su Amazon UK o in pochi clic online — niente marche introvabili.",
          },
          {
            h: "Capire le etichette",
            p: "Spieghiamo cosa significa davvero ‘EVOO’, spremuto a freddo, DOP, IGP e blend.",
          },
          {
            h: "Strategia 2 bottiglie",
            p: "Una bottiglia ‘ok’ per cucinare e una più buona per finire i piatti — massima resa, zero sprechi.",
          },
        ]
      : [
          {
            h: "UK-available only",
            p: "Oils you can actually buy on Amazon UK or from major UK sellers — no impossible-to-find brands.",
          },
          {
            h: "Label decoding",
            p: "We break down what EVOO, cold-pressed, DOP, IGP and blends really mean in practice.",
          },
          {
            h: "2-bottle strategy",
            p: "One solid everyday bottle for cooking and one better bottle for finishing — max flavour, less waste.",
          },
        ],

    // TL;DR
    tldrH: it
      ? "Riassunto — come gestire l’olio in una cucina UK"
      : "TL;DR — a simple olive oil plan for UK kitchens",
    tldr1: it ? "1) Una bottiglia ‘tutti i giorni’" : "1) One everyday bottle",
    tldr1P: it
      ? "Scegli un extravergine onesto in bottiglia scura da usare per soffritti, verdure e forno. Non deve essere perfetto, deve essere affidabile."
      : "Pick a decent extra virgin olive oil in a dark bottle for frying, roasting and everyday cooking. It doesn’t need to be fancy, just reliable.",
    tldr2: it ? "2) Una bottiglia ‘da finitura’" : "2) One finishing bottle",
    tldr2P: it
      ? "Un EVOO più profumato e pepato per condire a crudo: insalate, pane, minestre, pasta finita in padella."
      : "Choose a more fragrant, peppery EVOO to drizzle raw over salads, bread, soups and finished pasta.",
    tldr3: it ? "3) Proteggi l’olio da luce & calore" : "3) Protect oil from light & heat",
    tldr3P: it
      ? "Conservalo al buio, lontano dai fornelli, richiudi sempre bene: un olio buono va trattato come vino."
      : "Store it in the dark, away from the hob, close the cap tightly: treat good oil like wine, not like cheap vegetable oil.",
    miniCtaP: it
      ? "Vuoi una scheda stampabile con la strategia a 2 bottiglie, consigli di conservazione e lista marche?"
      : "Want a printable one-pager with the 2-bottle strategy, storage tips and brand list?",
    miniCtaBtn: it ? "Inviami la scheda olio" : "Email me the cheat sheet",

    // EVOO explainer
    evooH: it ? "Che cos’è davvero l’EVOO?" : "What does EVOO actually mean?",
    evooP: it
      ? "EVOO è la sigla di Extra Virgin Olive Oil, cioè olio extravergine d’oliva. È la categoria più alta di olio d’oliva e, in pratica, quella che ha senso usare se vuoi gusto e salute."
      : "EVOO stands for Extra Virgin Olive Oil. It’s the highest common grade of olive oil and the one that makes sense to use if you care about flavour and health.",
    evooList: it
      ? [
          "È ottenuto solo da olive, senza miscele con altri oli vegetali.",
          "Ha acidità libera molto bassa (massimo 0,8%): significa olive sane e lavorazione corretta.",
          "Si ottiene con metodi meccanici (niente solventi) e di solito è “spremuto a freddo”.",
          "Se un’etichetta non dice ‘extra vergine’, probabilmente è un olio più raffinato e meno saporito.",
        ]
      : [
          "It’s made only from olives — no blends with other vegetable oils.",
          "It has very low free acidity (max 0.8%), which signals healthy olives and good processing.",
          "It’s produced by mechanical means only (no solvents) and usually labelled as “cold-pressed”.",
          "If a bottle doesn’t clearly say “extra virgin”, it’s probably a more refined, flatter-tasting oil.",
        ],

    // Quality signals table
    qualityH: it
      ? "Come riconoscere un buon extravergine (anche online)"
      : "How to spot good extra virgin olive oil (even online)",
    qualitySub: it
      ? "Non serve essere sommelier: bastano pochi segnali sull’etichetta e 2–3 prove in cucina."
      : "You don’t need to be an oil sommelier: a few label clues and a couple of kitchen tests are enough.",
    qualityHeaders: it
      ? ["Segnale", "Cosa cercare", "Perché conta"]
      : ["Signal", "What to look for", "Why it matters"],
    qualityRows: it
      ? [
          [
            "Bottiglia o latta",
            "Vetro scuro o latta di metallo, niente plastica trasparente",
            "Protegge da luce e calore, rallenta l’irrancidimento.",
          ],
          [
            "Origine",
            "“100% olio italiano” oppure area DOP/IGP chiara",
            "Più tracciabilità = più controllo su qualità e gusto.",
          ],
          [
            "Data",
            "Data di scadenza +, meglio ancora, annata di raccolta",
            "Olio troppo vecchio perde profumo e diventa piatto.",
          ],
          [
            "Gusto",
            "Leggero pizzicore in gola e un filo di amaro",
            "Segno di polifenoli: è normale, significa olio vivo.",
          ],
        ]
      : [
          [
            "Bottle or tin",
            "Dark glass or metal tin, not clear plastic",
            "Shields oil from light and heat, slows rancidity.",
          ],
          [
            "Origin",
            "“100% Italian” or a clear DOP/IGP region",
            "Traceable origin usually means better quality control.",
          ],
          [
            "Dates",
            "Best-before date and, ideally, harvest year",
            "Very old oil loses aroma and tastes flat.",
          ],
          [
            "Taste",
            "A little peppery tickle and slight bitterness",
            "That’s polyphenols: it’s normal and a good sign.",
          ],
        ],

    // Usage table (everyday vs finishing vs bulk)
    usageH: it
      ? "Che olio usare per cosa (fornello, forno, finitura)"
      : "Which olive oil to use where (hob, oven, finishing)",
    usageSub: it
      ? "Invece di 6 bottiglie mezze vuote, tienine 2–3 con un ruolo chiaro."
      : "Instead of 6 half-used bottles, keep 2–3 with a clear job.",
    usageHeaders: it
      ? ["Tipo di olio", "Dove brilla", "Esempi veloci"]
      : ["Oil type", "Best use", "Quick examples"],
    usageRows: it
      ? [
          [
            "EVOO ‘tutti i giorni’",
            "Soffritti, verdure in padella, forno, marinature",
            "Verdure al forno, pasta al pomodoro, ceci in padella.",
          ],
          [
            "EVOO ‘da finitura’",
            "A crudo su piatti caldi e freddi",
            "Bruschette, insalate, minestroni, carne/pesce alla griglia.",
          ],
          [
            "Latta grande (3–5L)",
            "Se cucini spesso per più persone",
            "Spezzatino, teglie di verdure, pasta quotidiana.",
          ],
          [
            "Olio neutro (semi)",
            "Fritture profonde, torte dolci",
            "Patatine fritte, dolci da forno quando non vuoi sprecare EVOO.",
          ],
        ]
      : [
          [
            "Everyday EVOO",
            "Sautéing, roasting, pan-cooking, marinades",
            "Roast veg, tomato pasta, chickpeas in the pan.",
          ],
          [
            "Finishing EVOO",
            "Drizzling over hot and cold dishes",
            "Bruschetta, salads, soups, grilled meat/fish.",
          ],
          [
            "Big tins (3–5L)",
            "If you cook often for several people",
            "Stews, oven trays, everyday pasta.",
          ],
          [
            "Neutral oil",
            "Deep frying, sweet baking",
            "Chips, cakes when you don’t want to use EVOO.",
          ],
        ],

    // How-to section
    howToH: it
      ? "Strategia a 2 bottiglie: il minimo che funziona in UK"
      : "The 2-bottle strategy: the minimum that actually works",
    howToIntro: it
      ? "Se vivi in affitto, condividi la cucina o hai poco spazio, questa combinazione copre il 90% di ciò che cucini."
      : "If you rent, share a kitchen or have limited space, this combo covers 90% of what you cook.",
    howToSteps: it
      ? [
          [
            "Passo 1 — scegli l’olio ‘base’",
            "Prendi un extravergine italiano o blend mediterraneo in bottiglia scura da 750ml–1L, non il più economico ma tra i primi 3–4 della lista.",
          ],
          [
            "Passo 2 — scegli l’olio ‘da finitura’",
            "Aggiungi una bottiglia più piccola ma più profumata (DOP/IGP o singola regione) da usare solo a crudo.",
          ],
          [
            "Passo 3 — organizza dove lo tieni",
            "Tieni entrambe le bottiglie in un mobile vicino ma non sopra i fornelli. Se compri una latta, travasa in bottiglie scure più piccole.",
          ],
        ]
      : [
          [
            "Step 1 — pick your base oil",
            "Choose a simple Italian or Mediterranean-blend EVOO in a dark 750ml–1L bottle that isn’t the very cheapest, but still good value.",
          ],
          [
            "Step 2 — pick your finishing oil",
            "Add a smaller, more aromatic bottle (DOP/IGP or single-region) that you only use raw.",
          ],
          [
            "Step 3 — decide where it lives",
            "Keep both bottles in a cupboard near the hob but not above it. If you buy a big tin, decant into smaller dark bottles.",
          ],
        ],
    howToNote: it
      ? "Suggerimento: se condividi la cucina, etichetta la tua bottiglia di finitura con il nome. È più economica di molte salse ‘gourmet’ ma rende tutto più buono."
      : "Tip: if you share a kitchen, label your finishing bottle with your name. It’s cheaper than most ‘gourmet sauces’ but upgrades everything.",

    // Kit / affiliate
    kitH: it
      ? "Il tuo mini kit olio extravergine (versione UK)"
      : "Your Italian olive oil mini kit (UK version)",
    kitSub: it
      ? "Link indicativi per aiutarti a scegliere. Alcuni link sono affiliati Amazon e possono generarci una piccola commissione, senza costi extra per te."
      : "Indicative links to help you choose. Some links are Amazon affiliate and may earn us a small commission at no extra cost to you.",
    kitEverydayH: it ? "1) EVOO ‘tutti i giorni’" : "1) Everyday EVOO",
    kitEverydayList: it
      ? [
          "Bottiglia 750ml–1L in vetro scuro o latta.",
          "Blend italiano o mediterraneo, gusto medio (non troppo amaro).",
          "Perfetto per pasta, verdure e piatti di tutti i giorni.",
        ]
      : [
          "750ml–1L dark glass bottle or tin.",
          "Italian or Mediterranean blend, medium flavour (not too intense).",
          "Perfect for pasta, veg and everyday cooking.",
        ],
    kitFinishH: it ? "2) EVOO ‘da finitura’" : "2) Finishing EVOO",
    kitFinishList: it
      ? [
          "Bottiglia più piccola (500ml o meno) ma di qualità più alta.",
          "Origine chiara (es. Sicilia, Puglia, Toscana) o DOP/IGP.",
          "Usala solo a crudo per pane, insalate, minestre.",
        ]
      : [
          "Smaller bottle (500ml or less) but higher quality.",
          "Clear origin (e.g. Sicily, Puglia, Tuscany) or DOP/IGP label.",
          "Use only raw on bread, salads, soups.",
        ],
    kitBulkH: it ? "3) Latta grande (se cucini tanto)" : "3) Big tin (if you cook a lot)",
    kitBulkList: it
      ? [
          "Latta da 3–5L in metallo, da tenere in dispensa fresca e buia.",
          "Decanta in 1–2 bottiglie più piccole in vetro scuro.",
          "Conviene solo se cucini spesso o condividi gli acquisti.",
        ]
      : [
          "3–5L metal tin kept in a cool, dark cupboard.",
          "Decant into 1–2 smaller dark glass bottles.",
          "Makes sense only if you cook a lot or share purchases.",
        ],
    whatYouGetH: it ? "Cosa ottieni con questo kit" : "What this kit gives you",
    whatYouGetList: it
      ? [
          "Un olio sempre pronto per cucinare senza sensi di colpa.",
          "Un olio speciale che trasforma pane, insalate e zuppe.",
          "Meno sprechi: compri con criterio, conservi meglio.",
        ]
      : [
          "One oil that’s always fine to cook with.",
          "One special oil that makes bread, salads and soups taste Italian.",
          "Less waste: you buy on purpose and store properly.",
        ],
    affiliateNote: it
      ? "Nota affiliate: alcuni link possono essere affiliati Amazon. Non paghi di più; ci aiutano a tenere gratuite le guide."
      : "Affiliate note: some links may be Amazon affiliate links. You don’t pay more; they help keep these guides free.",

    // Storage & rancidity
    storageH: it
      ? "Come conservare l’olio (e riconoscere quando è andato)"
      : "How to store olive oil (and spot when it’s gone bad)",
    storagePoints: it
      ? [
          "Lontano da fornelli, forno e termosifoni: calore = nemico.",
          "In dispensa o mobile chiuso, non sul davanzale alla luce.",
          "Bottiglia sempre chiusa bene: ossigeno accelera l’ossidazione.",
          "Se l’olio sa di cartone, cera o è completamente piatto, probabilmente è irrancidito.",
        ]
      : [
          "Keep away from hob, oven and radiators: heat is the enemy.",
          "Store in a cupboard or pantry, not on a sunny windowsill.",
          "Close the cap properly: oxygen speeds up oxidation.",
          "If oil smells like wax, cardboard or tastes totally flat, it’s likely rancid.",
        ],

    // FAQ
    faqH: it ? "FAQ — olio extravergine, versione Regno Unito" : "FAQ — Italian olive oil, UK edition",
    faqs: it
      ? [
          [
            "Serve davvero comprare solo olio italiano?",
            "No. Ci sono ottimi extravergini anche da Spagna e Grecia. Ma se vuoi “gusto casa” e più coerenza, partire da oli 100% italiani ha senso.",
          ],
          [
            "Posso friggere con l’olio extravergine?",
            "Sì, se non lo porti a fumare. Però per fritture profonde conviene spesso usare un buon olio di semi e tenere l’extravergine per soffritti e finitura.",
          ],
          [
            "Quanto dura una bottiglia una volta aperta?",
            "Meglio finirla entro 3–6 mesi. Dopo 12 mesi aperta, anche se è ancora “ok”, di solito ha perso i profumi migliori.",
          ],
          [
            "L’olio dell’offerta al supermercato va bene?",
            "Per cucinare ogni giorno spesso sì. Per finire piatti a crudo, un olio un po’ più carattere fa la differenza.",
          ],
        ]
      : [
          [
            "Does it have to be Italian to be good?",
            "No. There are excellent oils from Spain and Greece too. But if you want a familiar Italian profile and more consistency, 100% Italian is a good starting point.",
          ],
          [
            "Can I fry with extra virgin olive oil?",
            "Yes, as long as you don’t let it smoke. But for deep frying, a good neutral oil is often more practical, and you keep EVOO for sautéing and finishing.",
          ],
          [
            "How long does a bottle last after opening?",
            "Ideally finish it within 3–6 months. After 12 months open, even if it’s still ‘ok’, aroma is usually much weaker.",
          ],
          [
            "Is the cheap supermarket EVOO OK?",
            "For basic cooking, often yes. For drizzling on finished dishes, a slightly better bottle with more character makes a big difference.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    relatedNote: it
      ? "Alcuni link possono generarci una piccola commissione senza costi extra per te. Aiuta a mantenere gratuita la community."
      : "Some links may earn us a small commission at no extra cost to you. It helps keep the community guides free.",
    printableH: it
      ? "Scarica la scheda olio extravergine (PDF)"
      : "Download the Italian olive oil cheat sheet (PDF)",
    printableP: it
      ? "Una pagina con la strategia a 2 bottiglie, consigli di conservazione, note su etichette e spazio per segnare le tue marche preferite."
      : "A one-page overview of the 2-bottle strategy, storage tips, label notes and space to write down your favourite brands.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sull’olio" : "Ask an olive oil question",
    pantryGuide: it
      ? "Guida dispensa italiana (UK) →"
      : "Italian Pantry Essentials (UK) →",
    kitchenGuide: it
      ? "Tiny UK Kitchen, Big Italian Flavour →"
      : "Tiny UK Kitchen, Big Italian Flavour →",
    aperitivoGuide: it
      ? "Aperitivo a casa: snack & calici →"
      : "Aperitivo at Home: Snacks & Glasses →",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  const howToAnchor = "#how-to";
  const kitAnchor = "#evoo-kit";

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Best Italian Extra Virgin Olive Oils in the UK (2025): 9 Bottles You Can Trust",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/italian-olive-oil-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Food", "Pantry", "Italian UK"],
    image: [
      "https://resinaro.co.uk/public/images/community/italian-olive-oil-hero.jpg",
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
            ? "Olio extravergine italiano in UK"
            : "Italian Olive Oil in the UK",
        item: "https://resinaro.co.uk/community/italian-olive-oil-uk",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come scegliere olio extravergine italiano in UK con la strategia a 2 bottiglie"
        : "How to choose Italian extra virgin olive oil in the UK with a 2-bottle strategy",
    totalTime: "PT10M",
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
      cssSelector: ["#summary", "#what-is-evoo"],
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
            src="/images/community/italian-olive-oil-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-36 sm:pt-32 md:pt-40 md:pb-44">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.heroBadge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl drop-shadow">
              {copy.heroTitleA}
              <span className="block text-emerald-200">{copy.heroTitleB}</span>
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
          {copy.usps.map((x: { h: string; p: string }) => (
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

      {/* ===== Summary & EVOO basics ===== */}
      <section
        id="summary"
        className="mx-auto mt-14 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          {/* TL;DR + mini CTA */}
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

          {/* EVOO explainer */}
          <section
            id="what-is-evoo"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-emerald-900">
              {copy.evooH}
            </h2>
            <p className="mt-2 text-sm text-emerald-950">{copy.evooP}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-emerald-950">
              {(copy.evooList as string[]).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {/* ===== Quality signals table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.qualityH}
              </h2>
              <p className="mt-1 text-sm text-gray-600">{copy.qualitySub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {locale === "it"
                ? "Vedi la strategia a 2 bottiglie →"
                : "See the 2-bottle strategy →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.qualityHeaders as string[]).map((h) => (
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
                {(copy.qualityRows as string[][]).map((row, i) => (
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
              ? "Non esiste l’olio perfetto per tutti: prova 1–2 bottiglie diverse e tieni quella che ti piace davvero."
              : "There’s no single perfect oil for everyone: test 1–2 different bottles and keep the one you genuinely enjoy."}
          </p>
        </div>
      </section>

      {/* ===== Usage table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.usageH}</h2>
          <p className="mt-1 text-sm text-gray-600">{copy.usageSub}</p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {(copy.usageHeaders as string[]).map((h) => (
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
                {(copy.usageRows as string[][]).map((row, i) => (
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

      {/* ===== How-To (2-bottle strategy) ===== */}
      <section
        id="how-to"
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.howToH}</h2>
            <p className="mt-2 text-sm text-gray-700">{copy.howToIntro}</p>
            <ol className="mt-4 list-decimal pl-6 text-gray-800 text-sm space-y-2">
              {(copy.howToSteps as string[][]).map(([bold, rest]) => (
                <li key={bold}>
                  <strong>{bold}</strong> {rest}
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm text-emerald-900">{copy.howToNote}</p>
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
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-900">
              {locale === "it"
                ? "Se compri una latta grande, segna la data di apertura e prova a finirla entro 6–9 mesi."
                : "If you buy a big tin, note the opening date and aim to finish it within 6–9 months."}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVOO Kit (affiliate) ===== */}
      <section
        id={kitAnchor.slice(1)}
        className="mx-auto mt-16 max-w-7xl px-6"
      >
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
              {locale === "it" ? "Torna alla strategia ↑" : "Back to strategy ↑"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Everyday EVOO */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.kitEverydayH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.kitEverydayList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-3 text-sm">
                <a
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="https://www.amazon.co.uk/s?k=italian+extra+virgin+olive+oil&tag=resinaroamzn-21"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                >
                  {locale === "it"
                    ? "Vedi oli extravergine italiani ‘tutti i giorni’"
                    : "See everyday Italian EVOO options"}
                </a>
              </div>
            </div>

            {/* Finishing EVOO */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.kitFinishH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.kitFinishList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-3 text-sm">
                <a
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="https://www.amazon.co.uk/s?k=sicilian+extra+virgin+olive+oil&tag=resinaroamzn-21"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                >
                  {locale === "it"
                    ? "Oli di Sicilia / Puglia / Toscana"
                    : "Sicilian / Puglian / Tuscan EVOO"}
                </a>
              </div>
            </div>

            {/* Bulk tins */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.kitBulkH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.kitBulkList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-3 text-sm">
                <a
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href="https://www.amazon.co.uk/s?k=extra+virgin+olive+oil+3l+tin&tag=resinaroamzn-21"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                >
                  {locale === "it"
                    ? "Confronta latte di olio extravergine 3–5L"
                    : "Compare 3–5L EVOO tins"}
                </a>
              </div>
            </div>
          </div>

          {/* What you get + Resinaro note */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                {copy.whatYouGetH}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-800 space-y-1.5">
                {(copy.whatYouGetList as string[]).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <p className="text-sm text-emerald-900">{copy.affiliateNote}</p>
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
          {/* Related reads */}
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
                  {copy.kitchenGuide}
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
            <p className="mt-4 text-xs text-gray-600">{copy.relatedNote}</p>
          </div>

          {/* Printable cheat sheet CTA */}
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
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
