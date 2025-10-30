// src/app/[locale]/community/moka-coffee-kit/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/** Landing-style community post (light theme)
 * - Full-bleed hero with image + layered CTA
 * - White cards on #F9F6F1, emerald accents
 * - Article + HowTo + FAQ + Breadcrumb + Speakable JSON-LD
 * - Server component only (no "use client")
 */

type Locale = "en" | "it";

export const metadata: Metadata = {
  title:
    "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
  description:
    "Definitive UK guide to moka coffee: size charts, grind tuning, induction setups, care schedules, troubleshooting, cost per cup, eco impact, and a complete kit—designed like a high-converting landing page.",
  alternates: { canonical: "/community/moka-coffee-kit" },
  openGraph: {
    title:
      "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
    description:
      "Everything for moka coffee in a UK kitchen: pot size tables, grind tuning matrix, induction setup, care schedule, troubleshooting, cost analysis, eco impact, and a shoppable kit.",
    type: "article",
  },
};

const PUBLISHED = "2025-10-04";
const UPDATED = "2025-10-19";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Immagine a tutta larghezza: moka italiana che scalda su un piano cottura nel Regno Unito"
      : "Full-width hero image: Italian moka pot brewing on a UK hob",
    heroBadge: it ? "Moka • Brikka • Cucine UK" : "Moka • Brikka • UK Kitchens",
    heroTitleA: it ? "Il kit caffè all’italiana" : "The No-Machine Italian Coffee Kit",
    heroTitleB: it ? "Edizione UK" : "UK Edition",
    heroLead:
      it
        ? "Scegli la misura giusta, azzecca il macinato, configura l’induzione e prepara a casa un caffè da bar—senza macchina."
        : "Pick the right pot size, nail the grind, set up induction properly, and make a café-level cup—without an espresso machine.",
    ctaCopy:
      it
        ? "Scarica la checklist moka UK (PDF) + consigli mensili per italiani nel Regno Unito."
        : "Get the complete UK moka kit checklist (PDF) + monthly Italian-in-the-UK tips.",
    ctaSub: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Opt out any time.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    pub: it ? "Pubblicato: 4 Ott 2025" : "Published: 4 Oct 2025",
    upd: it ? "Aggiornato: 19 Ott 2025" : "Updated: 19 Oct 2025",
    read: it ? "~12 min lettura" : "~12 min read",

    // USPs
    usp1H: it ? "Testato nelle cucine UK" : "Proven in UK kitchens",
    usp1P:
      it
        ? "Induzione, acqua dura, spazi piccoli—questa guida nasce per affitti e case condivise."
        : "Induction, hard water, tiny counters—this playbook is built for rentals and flatshares.",
    usp2H: it ? "Nessuna macchina" : "No machine needed",
    usp2P:
      it
        ? "Una moka + macinatura corretta + calore dolce = la tazza quotidiana che continuerai a fare."
        : "A moka + correct grind + gentle heat = the daily cup you actually keep making.",
    usp3H: it ? "Kit acquistabile" : "Shoppable kit",
    usp3P:
      it
        ? "Scegli misura, ricambi e adattatori precisi. Informazioni trasparenti. Zero fronzoli."
        : "Pick the exact size, spare parts, and adapters. Clear disclosures. No fluff.",

    // TLDR
    tldrH: it ? "Riassunto — tre mosse per migliorare la moka" : "TL;DR — three moves to upgrade your moka",
    tldr1: it ? "1) Calore intelligente" : "1) Heat smart",
    tldr1P:
      it
        ? "Pre-riscalda l’acqua nel bollitore, poi fiamma bassa-media. Ferma al primo gorgoglio."
        : "Pre-heat water in the kettle, then brew on low-to-medium. Stop at the first gurgle.",
    tldr2: it ? "2) Macinatura giusta" : "2) Mind the grind",
    tldr2P:
      it
        ? "La moka è tra filtro ed espresso. Mai pressare. Regola un clic alla volta."
        : "Moka grind sits between filter and espresso. Never tamp. Adjust one notch at a time.",
    tldr3: it ? "3) Ricambi pronti" : "3) Keep spares",
    tldr3P:
      it
        ? "Una guarnizione fresca + filtro pulito evitano perdite e sputi."
        : "A fresh gasket + clean filter plate prevent leaks and sputters.",
    miniCtaP:
      it
        ? "Scarica la checklist stampabile + link ai negozi UK:"
        : "Download the printable checklist + UK shop links:",
    miniCtaBtn: it ? "Scarica checklist" : "Get checklist",

    // Takeaways
    take1H: it ? "La misura conta più di quanto pensi" : "Size matters more than you think",
    take1P:
      it
        ? "3 tazze per la mattina; 6 tazze per gli ospiti. Se alterni 1 e 2 persone, possiedi entrambe."
        : "3-cup for weekday mornings; 6-cup for guests. If you brew for one and two, own both.",
    take2H: it ? "Ferma al primo gorgoglio" : "Stop at the first gurgle",
    take2P:
      it
        ? "Andare oltre cuoce il caffè. Togli dal fuoco appena il flusso si assottiglia e sputa."
        : "Overrunning cooks the coffee. Remove from heat as soon as the flow thins and sputters.",
    take3H: it ? "Cambia la guarnizione ogni 6–12 mesi" : "Swap the gasket every 6–12 months",
    take3P:
      it
        ? "Perdite, crepe o gomma rigida? Cambia. Tieni un ricambio in casa."
        : "If you see leaks, cracks or a stiff seal—change it. Keep one spare at home.",

    // Size table
    sizeH: it ? "Tabella misure moka (tazze → ml & porzioni)" : "Moka size chart (tazze → ml & servings)",
    sizeSub: it ? "Intervalli tipici; i modelli variano." : "Typical ranges; models vary.",
    sizeJump: it ? "Vai al Kit →" : "Jump to the Kit →",
    sizeHeaders: it
      ? ["Misura (tazze)", "Ml (totale) circa", "Porzioni nette", "Con latte", "Uso ideale"]
      : ["Size (tazze)", "Approx ml (total)", "Neat servings", "With milk", "Best use"],
    sizeRows: it
      ? [
          ["1", "60–70", "1 corta", "—", "Sorsi tipo espresso"],
          ["3", "120–150", "1–2", "1 mug", "Uso quotidiano (1–2 persone)"],
          ["6", "240–300", "2–3", "2 mug", "Weekend / ospiti"],
          ["9", "360–450", "3–4", "3 mug", "Cene"],
        ]
      : [
          ["1", "60–70", "1 short", "—", "Solo espresso-like sips"],
          ["3", "120–150", "1–2", "1 mug", "Daily driver (1–2 people)"],
          ["6", "240–300", "2–3", "2 mugs", "Weekends / guests"],
          ["9", "360–450", "3–4", "3 mugs", "Dinner parties"],
        ],
    sizeTip:
      it
        ? "Suggerimento: una moka 3 tazze estrae ~120–150 ml totali. Per un latte lungo, aggiungi latte caldo."
        : "Tip: a 3-cup moka yields ~120–150 ml total. For a long latte, add warm milk.",

    // Flow + do/avoid
    flowH: it ? "Flusso liscio, come miele → ferma al primo gorgoglio" : "Smooth, honey-like flow → stop at the first gurgle",
    flowP:
      it
        ? "Il surriscaldamento cuoce il caffè. Pre-riscalda in bollitore, usa calore più basso e togli appena il flusso si assottiglia e sputa. Mescola la camera superiore."
        : "Overheating cooks the coffee. Pre-heat water in the kettle, brew on lower power, and remove as soon as the stream thins and spits. Stir the top chamber for an even cup.",
    do: it ? "Fai così" : "Do",
    avoid: it ? "Evita" : "Avoid",
    doList: it
      ? ["Pre-riscalda in bollitore", "Fuoco basso-medio", "Pulisci bordi & filetti", "Mescola prima di versare"]
      : ["Pre-heat water in kettle", "Low-to-medium hob", "Clean rims & threads", "Stir before pouring"],
    avoidList: it
      ? ["Pressare il cestello", "Coprire la valvola", "Fiamma alta per fare in fretta", "Detergenti aggressivi ogni giorno"]
      : ["Tamping the basket", "Covering the safety valve", "Blasting heat to rush", "Harsh detergents daily"],
    seeMethod: it ? "Vedi il metodo da 90 secondi ↓" : "See the 90-second method ↓",

    // Comparison
    compMokaH: it ? "Moka (fornello)" : "Moka (stovetop)",
    compMokaP:
      it
        ? "Economica, duratura, rituale piacevole. Miglior gusto per sterlina nelle cucine UK."
        : "Affordable, durable, ritual-friendly. Best taste per pound in UK kitchens.",
    compMokaBul: it
      ? ["Moka £20–£45, pochi centesimi a tazza", "Compatta, facile da riporre", "Ottima con latte caldo"]
      : ["£20–£45 pot, pennies per cup", "Compact, easy to store", "Great with warm milk"],
    compCapsH: it ? "Capsule / pod" : "Capsule / pod",
    compCapsP:
      it
        ? "Veloce e ordinata, ma costo per tazza più alto e più rifiuti da gestire."
        : "Fast and tidy, but higher cost per cup and more waste to manage.",
    compCapsBul: it
      ? ["Macchina £40–£150", "£0.30–£0.45 a capsula", "Riciclo dipende dal brand"]
      : ["£40–£150 machine", "£0.30–£0.45 per capsule", "Recycling varies by brand"],
    compEspH: it ? "Macchina espresso" : "Espresso machine",
    compEspP:
      it
        ? "Workflow da bar e crema. Alto costo iniziale, ingombro maggiore, più manutenzione."
        : "Café-style workflow and crema. High upfront, larger footprint, more maintenance.",
    compEspBul: it
      ? ["Macchina da £200+", "Macinino consigliato", "Curva di apprendimento (dial-in)"]
      : ["£200+ machine", "Burr grinder recommended", "Dial-in learning curve"],

    // How-to + matrix
    methodH: it ? "Metodo da 90 secondi" : "90-second method",
    troubleshootLink: it ? "Risoluzione problemi ↓" : "Troubleshooting ↓",
    methodSteps: it
      ? [
          ["Pre-riscalda.", "Bollitore, poi riempi la base fin sotto la valvola."],
          ["Cestello.", "Macinato moka a filo. Non pressare. Pulisci i bordi."],
          ["Assembla.", "Chiudi bene con un panno. Coperchio aperto."],
          ["Calore.", "Basso-medio. Cerca un flusso liscio tipo miele."],
          ["Stop.", "Al primo gorgoglio togli. Mescola la camera superiore. Versa."],
        ]
      : [
          ["Pre-heat.", "Boil the kettle, then fill the moka base to just under the safety valve."],
          ["Basket.", "Add moka grind level to rim. No tamping. Clean stray grounds off the rim."],
          ["Assemble.", "Close firmly using a cloth. Lid open to watch the flow."],
          ["Heat.", "Low-to-medium. Aim for a smooth honey-like stream."],
          ["Stop.", "At the first gurgle, remove from heat. Stir the top chamber. Pour."],
        ],
    safetyNote:
      it
        ? "Sicurezza: mai estrarre con beccuccio ostruito o valvola danneggiata. Sostituisci la guarnizione se crepata o rigida."
        : "Safety: never brew with a blocked spout or damaged valve. Replace the gasket if cracked or stiff.",
    fridgeCta:
      it
        ? "Preferisci una versione stampabile per il frigo? Prendi il PDF passo-passo."
        : "Prefer a printable version for your fridge? Grab the step-by-step PDF.",
    fridgeBtn: it ? "Prendi Kit & PDF" : "Get the Kit & PDF",

    matrixH: it ? "Matrice di regolazione macinatura" : "Grind tuning matrix",
    matrixHeaders: it ? ["Sintomo", "Causa probabile", "Fix rapido", "Prossimo step"] : ["Symptom", "Likely cause", "Quick fix", "Next step"],
    matrixRows: it
      ? [
          ["Amaro / bruciato", "Troppo fine o troppo caldo", "Più grosso di un clic", "Pre-riscalda; abbassa calore"],
          ["Acido / debole", "Troppo grosso o troppo freddo", "Più fine di un clic", "Alza leggermente il calore"],
          ["Sapore metallico", "Moka nuova o detergente forte", "Fai 2–3 estrazioni di rodaggio", "Evita detergenti aggressivi"],
          ["Sputa presto", "Calore alto / letto strozzato", "Abbassa calore; non pressare", "Controlla guarnizione & valvola"],
        ]
      : [
          ["Bitter / ashy", "Too fine or overheated", "Coarsen one notch", "Pre-heat water; lower heat"],
          ["Sour / weak", "Too coarse or too cool", "Finer one notch", "Slightly higher heat"],
          ["Metallic note", "New pot or harsh soap", "Season 2–3 throwaway brews", "Avoid strong detergents"],
          ["Sputter early", "Heat too high / choked bed", "Lower heat; never tamp", "Check gasket & valve"],
        ],
    matrixTip:
      it
        ? "Regola il macinato a piccoli passi. Tieni dose e livello acqua costanti durante i test."
        : "Adjust grind in tiny steps. Keep dose and water level consistent while testing.",

    // Induction
    inductionH: it ? "Setup a induzione (affitti UK)" : "Induction setups (UK rentals)",
    inductionSub: it ? "Tre opzioni. Scegli quella adatta al tuo piano e alla tua pazienza." : "Three options. Pick the one that matches your hob and patience.",
    careLink: it ? "Programma cura →" : "Care schedule →",
    optA: it ? "Opzione A" : "Option A",
    optB: it ? "Opzione B" : "Option B",
    optC: it ? "Opzione C" : "Option C",
    optAH: it ? "Moka compatibile induzione" : "Induction-ready moka",
    optAP:
      it
        ? "Moka con base ferromagnetica. Semplice, affidabile, niente accessori extra."
        : "A moka with a ferromagnetic base. Simple, reliable, minimal extra gear.",
    optABul: it ? ["Setup più veloce", "Riscaldamento più costante"] : ["Fastest setup", "Most consistent heating"],
    optBH: it ? "Piastra adattatrice" : "Adapter plate",
    optBP:
      it
        ? "Un piccolo disco ferromagnetico sotto la moka che già possiedi."
        : "A small ferromagnetic disc under any moka you already own.",
    optBBul: it ? ["Riusa la tua moka", "Un filo più lenta a scaldare"] : ["Re-use existing moka", "Slightly slower to heat"],
    optCH: it ? "Bollitore + breve fornello" : "Kettle + brief hob",
    optCP:
      it
        ? "Pre-riscalda in bollitore, assembla, poi breve passaggio su fornello per l’estrazione."
        : "Pre-heat in kettle, assemble, then short gentle hob time just to extract.",
    optCBul: it ? ["Gusto più pulito", "Un po’ macchinoso all’inizio"] : ["Cleanest flavour", "A tad fiddly at first"],
    chooseHelp:
      it
        ? "Serve aiuto a scegliere? Dicci piano e bollitore. Ti consigliamo un setup."
        : "Need help choosing? Tell us your hob & kettle. We’ll recommend a setup.",
    askResinaro: it ? "Chiedi a Resinaro →" : "Ask Resinaro →",

    // Troubleshooting
    troubleH: it ? "Risoluzione problemi (gusto & perdite)" : "Troubleshooting (taste & leaks)",
    jumpKit: it ? "Vai al Kit ↓" : "Jump to Kit ↓",
    troubleHeaders: it ? ["Problema", "Controlli", "Soluzione"] : ["Issue", "Checks", "Fix"],
    troubleRows: it
      ? [
          ["Perdite sul bordo", "Età guarnizione; polvere sul filetto", "Cambia guarnizione; pulisci; stringi in modo uniforme"],
          ["Nessun flusso / strozzata", "Macinato troppo fine; letto pressato", "Più grosso; non pressare; pulisci filtro"],
          ["Sputi violenti", "Calore troppo alto; base asciutta", "Abbassa calore; riempi fino a valvola; pre-riscalda"],
          ["Gusto bruciato", "Estrazione surriscaldata", "Pre-riscalda; ferma al gorgoglio; abbassa calore"],
        ]
      : [
          ["Leaking at rim", "Gasket age; grounds on thread", "Replace gasket; clean rim; tighten evenly"],
          ["No flow / choking", "Grind too fine; tamped bed", "Coarser grind; never tamp; clean filter"],
          ["Explosive sputter", "Heat too high; dry base", "Lower heat; fill to valve; pre-heat water"],
          ["Burnt taste", "Overheated extraction", "Pre-heat water; stop at gurgle; lower heat"],
        ],
    troubleNote:
      it
        ? "Se le perdite continuano dopo la guarnizione nuova: controlla piccole deformazioni sul bordo e verifica che la valvola si muova."
        : "If leaks persist after a new gasket: check for hairline warps on the rim and confirm the safety valve moves.",

    // Care
    careH: it ? "Cura & programma ricambi" : "Care & replacement schedule",
    careSub:
      it
        ? "Tieni pulito e asciutto. Conserva aperta. Sostituisci la guarnizione prima che fallisca."
        : "Keep it clean and dry. Store open to avoid stale smells. Replace the gasket before it fails.",
    careHeaders: it ? ["Parte / Attività", "Frequenza", "Note"] : ["Part / Task", "Frequency", "Notes"],
    careRows: it
      ? [
          ["Risciacquo & asciugatura", "Ogni estrazione", "Evita detergenti forti; asciuga; conserva aperta"],
          ["Pulizia profonda", "Mensile", "Sapone delicato se serve, poi risciacqua bene"],
          ["Guarnizione (gasket)", "6–12 mesi", "Sostituisci prima se rigida, crepata o perde"],
          ["Filtro", "12–24 mesi", "Sostituisci se deformato o ostruito"],
          ["Valvola di sicurezza", "Trimestrale", "Deve muoversi libera; niente residui"],
        ]
      : [
          ["Rinse & dry", "Every brew", "Avoid harsh detergents; towel-dry; store open"],
          ["Deep clean", "Monthly", "Mild soap if needed, then rinse thoroughly"],
          ["Gasket (guarnizione)", "6–12 months", "Replace sooner if stiff, cracked or leaking"],
          ["Filter plate", "12–24 months", "Replace if warped or clogged"],
          ["Safety valve check", "Quarterly", "Ensure it moves freely; no residues"],
        ],
    keepSpare:
      it
        ? "Non aspettare la perdita: tieni una guarnizione + piastrina filtro di scorta nel cassetto."
        : "Don’t wait for a leak: keep one spare gasket + filter plate in the drawer.",

    readersSay: it ? "Cosa dicono i lettori" : "What readers say",
    r1Q:
      it
        ? "«Ho sempre pensato che la moka fosse amara. Il trucco del ‘fermare al primo gorgoglio’ ha cambiato tutto.»"
        : "“Always thought moka was bitter. The ‘stop at first gurgle’ tip changed everything.”",
    r1By: it ? "— Giulia • Manchester" : "— Giulia • Manchester",
    r2Q:
      it
        ? "«Piastra a induzione + pre-riscaldo. Di nuovo gusto da colazione dalla nonna.»"
        : "“Induction plate + pre-heat. Tastes like breakfast at nonna’s again.”",
    r2By: it ? "— Marco • London" : "— Marco • London",
    r3Q:
      it
        ? "«Sostituivo la guarnizione troppo tardi. Ora ne tengo una di scorta—niente più perdite.»"
        : "“Kept replacing gaskets too late. Now I keep a spare—no more leaks.”",
    r3By: it ? "— Francesca • Leeds" : "— Francesca • Leeds",
    readersCta:
      it
        ? "Vuoi una revisione del tuo setup? Invia una foto—consiglio gratuito in 24 ore."
        : "Want your setup reviewed? Send a photo—free advice in 24h.",
    readersBtn: it ? "Chiedi ora" : "Ask now",

    // Cost & Eco
    costH: it ? "Costo per tazza & impatto ambientale" : "Cost per cup & eco impact",
    costSub: it
      ? "Intervalli realistici per il Regno Unito; chicchi, dose e prezzi energia variano."
      : "Realistic UK ranges; your beans, dose and energy prices will vary.",
    seeKit: it ? "Vedi il Kit →" : "See the Kit →",
    costHeaders: it ? ["Metodo", "Costo attrezzatura", "Costo caffè/tazza*", "Rifiuti", "Note"] : ["Method", "Gear cost", "Coffee cost/cup*", "Waste", "Notes"],
    costRows: it
      ? [
          ["Moka", "£20–£45", "£0.12–£0.25", "Fondi (compostabili)", "Bassi consumi; molto durevole"],
          ["Capsule/pod", "£40–£150", "£0.30–£0.45", "Capsule (riciclo variabile)", "Veloce; più caro a tazza"],
          ["Macchina espresso", "£200+", "£0.12–£0.30", "Fondi", "Alto costo iniziale; tempo per dial-in"],
        ]
      : [
          ["Moka", "£20–£45", "£0.12–£0.25", "Grounds (compostable)", "Low power; very durable"],
          ["Capsule/pod", "£40–£150", "£0.30–£0.45", "Pods (recycling varies)", "Fast; pricier per cup"],
          ["Espresso machine", "£200+", "£0.12–£0.30", "Grounds", "High upfront; dial-in time"],
        ],
    costNote:
      it
        ? "*Stime illustrative per il Regno Unito; mantieni costanti dose e macinatura quando confronti."
        : "*Illustrative estimates for the UK; aim for consistency in dose and grind when comparing.",

    // Kit
    kitH: it ? "Il tuo kit moka UK completo" : "Your complete UK moka kit",
    kitSub:
      it
        ? "Compatto, pratico, adatto ai depositi cauzionali. Informazioni trasparenti; alcuni link potrebbero generarci una piccola commissione."
        : "Compact, practical, deposit-safe. Clear disclosures; some links may earn us a small commission.",
    backToHow: it ? "Torna al Metodo ↑" : "Back to How-To ↑",
    brewEss: it ? "Essenziali per l’estrazione" : "Brewing essentials",
    coffeeCare: it ? "Caffè & manutenzione" : "Coffee & care",
    whatYouGet: it ? "Cosa ottieni" : "What you get",
    whatYouGetList: it
      ? [
          "Misura giusta per la tua casa",
          "Gusto prevedibile con regolazione macinatura",
          "Routine compatibile con induzione",
          "Estrazioni senza perdite con guarnizioni fresche",
          "Checklist stampabile + link UK",
        ]
      : [
          "Correct pot size for your household",
          "Predictable flavour with grind tuning",
          "Induction-friendly routine",
          "Leak-free brewing with fresh gaskets",
          "Printable checklist + UK shopping links",
        ],
    oneToOne:
      it
        ? "Vuoi assistenza 1-a-1 per la tua moka (foto + micro-correzioni)?"
        : "Want 1-to-1 help setting up your moka (photo review + tweaks)?",
    getFreeAdvice: it ? "Chiedi un consiglio gratuito" : "Get free advice",
    exploreServices: it ? "Esplora i servizi" : "Explore services",
    affiliateNote:
      it
        ? "Nota affiliate: alcuni link potrebbero generare una piccola commissione senza costi extra per te."
        : "Affiliate note: links may earn us a small commission at no extra cost to you.",

    // FAQ
    faqH: it ? "FAQ (termini italiani & realtà UK)" : "FAQ (Italian terms & UK realities)",
    faqs: it
      ? [
          [
            "Moka vs Brikka vs macchina espresso?",
            "Moka: classico da fornello; caffè concentrato e morbido con attrezzatura minima. Brikka: variante con valvola (pressione un po’ più alta, talvolta leggera schiuma). Macchina espresso: 9+ bar, crema più densa, più attrezzatura e manutenzione. Per affitti UK e spazi ridotti, la moka è il miglior equilibrio tra prezzo, gusto e portabilità.",
          ],
          ["Perché non dovrei pressare il caffè della moka?", "La pressione aumenta la resistenza; la bassa pressione della moka può strozzare il flusso—surriscaldando la base e rendendo la tazza amara. Mantieni il letto raso e morbido."],
          ["E il calcare dell’acqua UK?", "In zone dure, l’acqua filtrata migliora il gusto e rallenta i depositi. Decalcifica il bollitore; asciuga bene la moka."],
          ["Lavastoviglie sì o no?", "Evita la lavastoviglie con la classica moka in alluminio—opacizza e rovina l’aroma. Sciacquo a mano, asciuga, conserva aperta."],
          ["Quanto durano le guarnizioni?", "In genere 6–12 mesi con uso quotidiano. Sostituisci prima se noti perdite, crepe o gomma rigida."],
        ]
      : [
          [
            "Moka vs Brikka vs espresso machine?",
            "Moka: stovetop classic; smooth, concentrated coffee with minimal gear. Brikka: moka variant with a valve (slightly higher pressure, sometimes light foam). Espresso machine: 9+ bar, denser crema, more gear and maintenance. For UK rentals and tight counters, moka is the best balance of price, flavour and portability.",
          ],
          ["Why shouldn’t I tamp moka coffee?", "Tamping increases resistance; moka’s lower pressure can choke the flow—overheating the base and making the cup bitter. Keep the bed level and loose."],
          ["What about limescale in UK water?", "In hard-water areas, filtered water improves taste and slows buildup. Descale your kettle; dry the pot fully."],
          ["Dishwasher safe?", "Avoid dishwashers with classic aluminium moka—finish dulls and flavours suffer. Hand-rinse, towel-dry, store open."],
          ["How long do gaskets last?", "Typically 6–12 months with daily use. Replace sooner if you notice leaks, cracks or a stiff feel."],
        ],

    // Related + Footer CTA
    relatedH: it ? "Articoli correlati" : "Related reads",
    printableH: it ? "Checklist moka UK stampabile" : "Get the printable UK moka checklist",
    printableP:
      it
        ? "Una pagina con misure, macinatura, calore e cura. Include link UK e note per induzione."
        : "One page with sizes, grind, heat and care. Includes UK shopping links and induction notes.",
    printableBtn: it ? "Inviami il PDF" : "Email me the PDF",
    askQ: it ? "Fai una domanda sulla moka" : "Ask a moka question",
    londonGuide: it ? "Italiani a Londra: guida cibo →" : "Italians in London: Food Guide →",
    affNoteEnd:
      it
        ? "Nota affiliate: alcuni link possono generarci una piccola commissione senza costi extra. Aiuta a mantenere gratis le guide."
        : "Affiliate note: some links may earn us a small commission at no extra cost to you. It helps keep community guides free.",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The No-Machine Italian Coffee Kit (UK Edition) — Moka, Brikka & Everyday Espresso at Home",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/moka-coffee-kit",
    },
    inLanguage: copy.inLang,
    articleSection: ["Lifestyle", "Coffee", "Italian UK"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "it" ? "Community" : "Community",
        item: "https://resinaro.co.uk/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Kit Caffè Moka (Edizione UK)"
            : "Moka Coffee Kit (UK Edition)",
        item: "https://resinaro.co.uk/community/moka-coffee-kit",
      },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#summary", "#how-to"] },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come fare la moka classica (cucina UK)"
        : "How to Make Classic Italian Moka Coffee (UK Kitchen)",
    totalTime: "PT5M",
    supply: [
      { "@type": "HowToSupply", name: locale === "it" ? "Moka (Bialetti o simile)" : "Moka pot (Bialetti or similar)" },
      { "@type": "HowToSupply", name: locale === "it" ? "Caffè macinato moka" : "Moka-ground coffee" },
      { "@type": "HowToSupply", name: locale === "it" ? "Acqua fresca (pre-riscaldata)" : "Fresh water (pre-heated)" },
    ],
    tool: [{ "@type": "HowToTool", name: locale === "it" ? "Piano cottura (gas/elettrico/induzione)" : "Hob (gas/electric/induction)" }],
    step: (locale === "it"
      ? [
          { "@type": "HowToStep", name: "Riempi la base con acqua calda", text: "Fino sotto la valvola; pre-riscaldare riduce l’amaro." },
          { "@type": "HowToStep", name: "Aggiungi il caffè (senza pressare)", text: "Livella al bordo e pulisci i granelli." },
          { "@type": "HowToStep", name: "Assembla & scalda dolce", text: "Chiudi bene con un panno; coperchio aperto; fuoco basso-medio." },
          { "@type": "HowToStep", name: "Ferma al primo gorgoglio", text: "Togli dal fuoco; mescola la camera superiore, poi versa." },
        ]
      : [
          { "@type": "HowToStep", name: "Fill base with hot water", text: "Fill to just below the safety valve; pre-heating reduces bitterness." },
          { "@type": "HowToStep", name: "Add coffee (no tamping)", text: "Level the basket to the rim and brush away loose grounds." },
          { "@type": "HowToStep", name: "Assemble & heat gently", text: "Close firmly with a cloth; lid open; low-to-medium heat." },
          { "@type": "HowToStep", name: "Stop at first gurgle", text: "Remove from heat; stir top chamber, then pour." },
        ]),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (locale === "it"
      ? [
          {
            "@type": "Question",
            name: "Che macinatura per la moka?",
            acceptedAnswer: { "@type": "Answer", text: "Usa macinatura moka: più fine del filtro, più grossa dell’espresso. Amaro/bruciato = troppo fine o troppo caldo. Acido/debole = troppo grosso o troppo freddo." },
          },
          {
            "@type": "Question",
            name: "La moka funziona a induzione?",
            acceptedAnswer: { "@type": "Answer", text: "Sì: usa una moka compatibile induzione o una piccola piastra adattatrice ferromagnetica. Pre-riscalda l’acqua nel bollitore per accorciare i tempi." },
          },
          {
            "@type": "Question",
            name: "Come evito l’amaro?",
            acceptedAnswer: { "@type": "Answer", text: "Acqua calda in base, calore basso-medio, stop al primo gorgoglio, mai pressare, pulizia regolare (no detergenti aggressivi)." },
          },
          {
            "@type": "Question",
            name: "Quali ricambi servono?",
            acceptedAnswer: { "@type": "Answer", text: "Guarnizioni e piastrina filtro. Cambia la guarnizione quando si indurisce, crepa o perde dal bordo." },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "What grind for moka?",
            acceptedAnswer: { "@type": "Answer", text: "Use moka-specific grind: finer than filter, coarser than espresso. Bitter/ashy = too fine or too hot. Sour/weak = too coarse or too cool." },
          },
          {
            "@type": "Question",
            name: "Can moka work on induction?",
            acceptedAnswer: { "@type": "Answer", text: "Yes: use an induction-ready moka or a small ferromagnetic adapter plate. Pre-heat water in a kettle to shorten hob time." },
          },
          {
            "@type": "Question",
            name: "How do I avoid bitter moka?",
            acceptedAnswer: { "@type": "Answer", text: "Hot water in the base, low-to-medium heat, stop at first gurgle, never tamp, and keep the pot clean (avoid harsh detergents)." },
          },
          {
            "@type": "Question",
            name: "What spare parts do I need?",
            acceptedAnswer: { "@type": "Answer", text: "Guarnizioni (gaskets) and a spare filter plate. Replace the gasket when it hardens, cracks, or leaks around the rim." },
          },
        ]),
  };

  const howToAnchor = "#how-to";
  const kitAnchor = "#kit";

  // ---------- Page ----------
  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ===== HERO (full-bleed image, layered CTA) ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/mokapot.png"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />
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

        {/* Soft fade to page background */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F9F6F1] to-transparent" />
      </section>

      {/* ===== USPs row ===== */}
      <section className="mx-auto mt-10 md:mt-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: copy.usp1H, p: copy.usp1P },
            { h: copy.usp2H, p: copy.usp2P },
            { h: copy.usp3H, p: copy.usp3P },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
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
                {copy.tldr1P}{" "}
                {locale === "en" && "This alone fixes most bitter cups."}
                {locale === "it" && "Solo questo risolve gran parte dell’amaro."}
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
              <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {locale === "it" ? "Punto chiave" : "Key takeaway"}
                </p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Size table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.sizeH}</h2>
              <p className="mt-1 text-sm text-gray-600">{copy.sizeSub}</p>
            </div>
            <Link
              href={kitAnchor}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {copy.sizeJump}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.sizeHeaders.map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.sizeRows.map((row: string[], i: number) => (
                  <tr key={row[0]} className={i % 2 ? "bg-white" : "bg-gray-50"}>
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

          <p className="mt-3 text-xs text-gray-600">{copy.sizeTip}</p>
        </div>
      </section>

      {/* ===== Flow infographic + Do/Avoid ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-2xl border border-emerald-200 bg-white p-4">
              <svg viewBox="0 0 720 180" className="h-48 w-full">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-emerald-500" />
                  </marker>
                </defs>
                {[
                  { x: 20, w: 160, title: locale === "it" ? "Acqua calda" : "Hot water", body: locale === "it" ? "Fino sotto valvola" : "Fill under valve" },
                  { x: 200, w: 160, title: locale === "it" ? "Letto caffè" : "Coffee bed", body: locale === "it" ? "Moka grind, non pressare" : "Moka grind, no tamp" },
                  { x: 380, w: 160, title: locale === "it" ? "Calore dolce" : "Gentle heat", body: locale === "it" ? "Coperchio aperto" : "Lid open, watch flow" },
                  { x: 560, w: 140, title: locale === "it" ? "Primo gorgoglio" : "First gurgle", body: locale === "it" ? "Togli, mescola, versa" : "Remove, stir, pour" },
                ].map((b, i) => (
                  <g key={i}>
                    <rect x={b.x} y={30} width={b.w} height={120} rx="16" className="fill-white" />
                    <rect x={b.x} y={30} width={b.w} height={120} rx="16" className="fill-none stroke-emerald-300" />
                    <text x={b.x + b.w / 2} y={70} textAnchor="middle" className="fill-emerald-800" style={{ fontWeight: 700 }}>
                      {b.title}
                    </text>
                    <text x={b.x + b.w / 2} y={100} textAnchor="middle" className="fill-gray-700" style={{ fontSize: 12 }}>
                      {b.body}
                    </text>
                    {i < 3 && (
                      <line
                        x1={b.x + b.w + 8}
                        y1={90}
                        x2={b.x + b.w + 52}
                        y2={90}
                        className="stroke-emerald-500"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.flowH}</h2>
              <p className="mt-2 text-sm text-gray-700">{copy.flowP}</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">{copy.do}</p>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                    {copy.doList.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-700">{copy.avoid}</p>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-800">
                    {copy.avoidList.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href={howToAnchor}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                >
                  {copy.seeMethod}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Comparison ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { h: copy.compMokaH, p: copy.compMokaP, bullets: copy.compMokaBul },
            { h: copy.compCapsH, p: copy.compCapsP, bullets: copy.compCapsBul },
            { h: copy.compEspH, p: copy.compEspP, bullets: copy.compEspBul },
          ].map((c) => (
            <div key={c.h} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{c.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{c.p}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-800">
                {c.bullets.map((b: string) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== How-To + Grind matrix ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{copy.methodH}</h2>
              <Link href="#troubleshoot" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
                {copy.troubleshootLink}
              </Link>
            </div>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              {copy.methodSteps.map(([bold, rest]) => (
                <li className="mb-3" key={bold}>
                  <strong>{bold}</strong> {rest}
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">{copy.safetyNote}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-emerald-900">{copy.fridgeCta}</p>
                <Link href={kitAnchor} className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
                  {copy.fridgeBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* Grind matrix */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{copy.matrixH}</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {copy.matrixHeaders.map((h) => (
                      <th key={h} className="p-3 text-left font-semibold text-gray-900">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.matrixRows.map((row: string[], i: number) => (
                    <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
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
            <p className="mt-2 text-xs text-gray-600">{copy.matrixTip}</p>
          </div>
        </div>
      </section>

      {/* ===== Induction ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.inductionH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.inductionSub}</p>
            </div>
            <Link href="#care" className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
              {copy.careLink}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { tag: copy.optA, h: copy.optAH, p: copy.optAP, bullets: copy.optABul },
              { tag: copy.optB, h: copy.optBH, p: copy.optBP, bullets: copy.optBBul },
              { tag: copy.optC, h: copy.optCH, p: copy.optCP, bullets: copy.optCBul },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">{x.tag}</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{x.h}</h3>
                <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  {x.bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-emerald-900">{copy.chooseHelp}</p>
              <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                {copy.askResinaro}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Troubleshooting ===== */}
      <section id="troubleshoot" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{copy.troubleH}</h2>
            <Link href={kitAnchor} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
              {copy.jumpKit}
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.troubleHeaders.map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.troubleRows.map((row: string[], i: number) => (
                  <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
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
          <p className="mt-2 text-xs text-gray-600">{copy.troubleNote}</p>
        </div>
      </section>

      {/* ===== Care & Testimonials ===== */}
      <section id="care" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.careH}</h2>
            <p className="mt-1 text-sm text-gray-700">{copy.careSub}</p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {copy.careHeaders.map((h) => (
                      <th key={h} className="p-3 text-left font-semibold text-gray-900">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.careRows.map((row: string[], i: number) => (
                    <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
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
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-900">{copy.keepSpare}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{copy.readersSay}</h3>
            <div className="mt-4 space-y-4">
              {[
                [copy.r1Q, copy.r1By],
                [copy.r2Q, copy.r2By],
                [copy.r3Q, copy.r3By],
              ].map(([q, by]) => (
                <div key={String(q)} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-900">{q as string}</p>
                  <p className="mt-2 text-xs text-gray-600">{by as string}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-emerald-900">{copy.readersCta}</p>
                <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
                  {copy.readersBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Cost & Eco ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.costH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.costSub}</p>
            </div>
            <Link href={kitAnchor} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
              {copy.seeKit}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.costHeaders.map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.costRows.map((row: string[], i: number) => (
                  <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
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
          <p className="mt-2 text-xs text-gray-600">{copy.costNote}</p>
        </div>
      </section>

      {/* ===== Kit (conversion) ===== */}
      <section id="kit" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.kitH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.kitSub}</p>
            </div>
            <Link href={howToAnchor} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
              {copy.backToHow}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{copy.brewEss}</h3>
                {/* Keep your original affiliate links exactly as-is */}
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=bialetti+3+cup+moka&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Moka 3-cup (daily driver)
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=bialetti+6+cup+moka&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Moka 6-cup (weekends/guests)
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=induction+adapter+plate+coffee+maker&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Induction adapter plate
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{copy.coffeeCare}</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=lavazza+qualita+rossa+moka&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Lavazza (moka grind)
                    </a>{" "}
                    ·{" "}
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=illy+classico+moka&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Illy (moka grind)
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=moka+gasket+replacement&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Spare gaskets & filter plate
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href="https://www.amazon.co.uk/s?k=handheld+milk+frother&tag=resinaroamzn-21"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      Handheld milk frother
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-emerald-900">{copy.whatYouGet}</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  {copy.whatYouGetList.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <p className="text-sm text-emerald-900">{copy.oneToOne}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
                    {copy.getFreeAdvice}
                  </Link>
                  <Link href="/services" className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
                    {copy.exploreServices}
                  </Link>
                </div>
                <p className="mt-2 text-[11px] text-emerald-900/80">{copy.affiliateNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.faqH}</h2>
          {copy.faqs.map((faq, i) => {
            const [q, a] = faq;
            return (
              <details key={q} className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">{q}</summary>
                <div className="mt-2 text-sm text-gray-700">{a}</div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ===== Related + Footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.relatedH}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              {/* Keep the original related links intact */}
              <li>
                <Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/italian-essentials">
                  New in the UK? 12 Italian Cupboard Essentials
                </Link>
              </li>
              <li>
                <Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/buying-in-bulk-uk-italian-staples">
                  Save Money: Buy Italian Staples in Bulk (UK)
                </Link>
              </li>
              <li>
                <Link className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900" href="/community/starter-uk-kitchen-italian">
                  Tiny UK Kitchen, Big Italian Flavour
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {locale === "it"
                ? "Nota affiliate: alcuni link possono generarci una piccola commissione senza costi extra. Aiuta a mantenere gratuite le guide."
                : "Affiliate note: some links may earn us a small commission at no extra cost to you. It helps keep community guides free."}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{copy.printableH}</h3>
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
              <button type="submit" className="h-11 rounded-xl bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-700">
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
