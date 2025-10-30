// src/app/[locale]/community/warmth-energy-savers-uk/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    // Meta
    metaTitle: it
      ? "Stare al Caldo, Spendere Meno: Scelte per Risparmiare Energia"
      : "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
    metaDesc: it
      ? "Soluzioni pratiche e compatibili con i proprietari per stare più al caldo negli affitti nel Regno Unito: sigillare gli spifferi, tende termiche, borse dell’acqua calda e micro-riscaldatori. Include un piano da 30 minuti, checklist stanza per stanza e costi orari."
      : "Real-world, landlord-friendly ways to feel warmer in UK rentals: draft sealing, thermal curtains, hot-water bottles and low-watt personal heaters. Includes a 30-minute setup plan, room checklist, and cost-per-hour examples.",
    ogDesc: it
      ? "Calore amico dell’affitto: setup in 30 minuti, acquisti intelligenti, costi orari, checklist stanza per stanza e consigli di sicurezza (UK)."
      : "Landlord-friendly warmth: 30-minute setup, smart comfort buys, cost-per-hour, room checklists, and safety tips for UK rentals.",

    // Hero
    chip: it ? "CASA • adatto agli affitti" : "HOME • landlord-friendly",
    h1Top: it ? "Stare al Caldo, Spendere Meno" : "Stay Warm, Spend Less",
    h1Sub: it ? "Scelte di comfort che risparmiano energia" : "Energy-Saving Comfort Picks",
    heroP: it
      ? "Spifferi, vetri singoli, termosifoni sotto le finestre—classico affitto UK. Ecco un setup rapido e reversibile e alcuni acquisti comfort che scaldano te, non la strada."
      : "Drafts, single glazing, radiators under windows—classic UK rental. Here’s a fast, reversible setup and a few comfort buys that heat you, not the whole street.",
    ctaLead: it
      ? "Scarica la checklist “caldo in 30 minuti” (PDF) + consigli mensili per affitti nel Regno Unito."
      : "Get the 30-minute warmth checklist (PDF) + monthly UK-rental comfort tips.",
    ctaNote: it ? "Zero spam. Disiscrizione in qualsiasi momento." : "Zero spam. Unsubscribe anytime.",
    ctaBtn: it ? "Scarica il PDF" : "Get the PDF",
    metaPub: it ? "Pubblicato: 4 Ott 2025" : "Published: 4 Oct 2025",
    metaUpd: it ? "Aggiornato: 19 Ott 2025" : "Updated: 19 Oct 2025",
    metaRead: it ? "~8 min di lettura" : "~8 min read",

    // Benefits row
    b1h: it ? "Reversibile" : "Reversible",
    b1p: it ? "Guarnizioni adesive, liner clip-on—niente trapano." : "Peel-and-stick seals, clip-on liners—no drilling needed.",
    b2h: it ? "Calore di zona" : "Small-zone heat",
    b2p: it ? "Scalda mani/piedi/divano invece della stanza intera." : "Warm your hands/feet/sofa zone instead of the whole flat.",
    b3h: it ? "Prima il budget" : "Budget-first",
    b3p: it ? "Sistema gli spifferi prima di dispositivi più potenti." : "Fix drafts before spending on higher wattage devices.",

    // Intro
    introP: it
      ? "Non servono lavori importanti per stare più al caldo. Parti dalle perdite più grandi, poi aggiungi tessili e calore personale. Sotto trovi un piano da 30 minuti, scelte collaudate, checklist per stanza e esempi chiari di costo orario."
      : "You don’t need major works to feel warmer. Start with the biggest leaks, then layer textiles and personal heat. Below is a 30-minute plan, proven picks, room checklists, and clear running-cost examples.",

    // 30-minute plan
    planH2: it ? "Caldo in 30 minuti (compatibile con l’affitto)" : "Warmth in 30 Minutes (Landlord-Friendly)",
    plan1: it
      ? "Porta d’ingresso: aggiungi guarnizioni adesive dove filtra luce. Para-spifferi o soglia alla base."
      : "Front door: Add adhesive weatherstrip where you see daylight. Draft snake or door sweep at the bottom.",
    plan2: it
      ? "Finestre: schiuma per gli spazi peggiori. Di notte chiudi le prese d’aria (se sicuro) e tira tende termiche/liner clip-on."
      : "Windows: Foam seal the worst gaps. At night, close trickle vents (if safe) and pull thermal curtains/clip-on liners.",
    plan3: it
      ? "Zonizzazione: chiudi le porte delle stanze inutilizzate—meno volume d’aria è più facile da scaldare."
      : "Zoning: Shut doors to unused rooms—smaller air volume is easier to keep warm.",
    plan4: it
      ? "Calore personale: pre-riscalda letto/sedia con borsa dell’acqua calda o cuscino termico; tieni un plaid a portata."
      : "Personal warmth: Pre-warm bed/chair with a hot-water bottle or heat pad; keep a fleece throw by the sofa.",
    planNote: it
      ? "Tutti i passi sono reversibili rimuovendo lentamente; prova prima in una piccola area per proteggere vernice/infissi."
      : "All steps are reversible when removed slowly; test a small area first to protect paint/frames.",
    blueprintCaption: it
      ? "Schema: sigilla l’ingresso, tratta le finestre, chiudi stanze inutilizzate, pre-riscalda dove siedi/dormi."
      : "Blueprint: seal entry, treat windows, close off spare rooms, pre-warm where you sit/sleep.",

    // Comfort picks
    picksH2: it ? "Scelte comfort che rendono più del previsto" : "Comfort picks that punch above their weight",
    picksP: it
      ? "Trasparenza: alcuni link affiliati possono generare una piccola commissione senza costi per te."
      : "Clear disclosures; affiliate links may earn us a small commission at no extra cost to you.",
    pick1T: it ? "Guarnizioni adesive anti-spiffero" : "Self-adhesive draft excluder seals",
    pick1C: it ? "Removibili e delicate su vernici se staccate lentamente. Parti da telai porte/finestre." : "Removable, paint-safe when peeled slowly. Treat door frames and window sashes first.",
    pick2T: it ? "Tende termiche / liner clip-on" : "Thermal blackout curtains / clip-on liners",
    pick2C: it ? "Riduci la dispersione notturna. Copri l’intero telaio con leggera sovrapposizione fino al pavimento." : "Reduce radiant loss at night. Aim for full frame coverage with light overlap to the floor.",
    pick3T: it ? "Borsa dell’acqua calda o cuscino termico" : "Hot-water bottle or microwave heat pad",
    pick3C: it ? "Scalda direttamente il corpo. Usa acqua calda non bollente; controlla la borsa ogni anno." : "Warm the body directly. Use hot—not boiling—water; check bottle yearly for wear.",
    pick4T: it ? "Micro-riscaldatore personale (scrivania/divano)" : "Low-watt personal heater (desk/sofa zone)",
    pick4C: it ? "Scalda un raggio di 0,5–1,5 m invece della stanza. Meglio con protezione anti-ribaltamento." : "Heat a 0.5–1.5 m radius instead of the room. Safer when tip-over protection is included.",
    pick5T: it ? "Soglia para-spifferi / salsicciotto" : "Door sweep / draught snake",
    pick5C: it ? "Blocca il getto gelido a livello pavimento. Scegli soglia removibile o salsicciotto in tessuto." : "Blocks that icy floor-level jet under doors. Choose removable sweep or fabric snake.",
    pick6T: it ? "Calze spesse + plaid in pile" : "Thick socks + fleece throw",
    pick6C: it ? "I tessuti intrappolano aria calda. Tienili a portata vicino al punto più freddo." : "Textiles trap warm air around you. Keep within arm’s reach of your coldest seat.",
    seeOptions: it ? "Vedi opzioni →" : "See options →",

    // Room-by-room
    roomH2: it ? "Checklist stanza per stanza" : "Room-by-Room Checklist",
    entryH3: it ? "Ingresso & Soggiorno" : "Entry & Living",
    entryLi1: it ? "Guarnizione porta + para-spifferi; spazzole per buca lettere dove serve." : "Door seal + draught snake; letterbox brushes where relevant.",
    entryLi2: it ? "Tende termiche che coprano l’intero telaio (idealmente fino al pavimento)." : "Thermal curtains that fully cover the frame (ideally to the floor).",
    entryLi3: it ? "Riscaldatore personale a scrivania/divano; chiudi stanze inutilizzate per ridurre il volume." : "Personal heater by desk/sofa; close spare rooms to reduce volume.",
    bedH3: it ? "Camera da letto" : "Bedroom",
    bedLi1: it ? "Pre-riscalda il letto con borsa dell’acqua calda 10–15 minuti prima di dormire." : "Pre-warm bed with hot-water bottle 10–15 minutes before sleep.",
    bedLi2: it ? "Allontana il letto dalle pareti esterne se puoi; evita sporgenze verso la finestra." : "Move bed off external walls if you can; avoid overhanging windows.",
    bedLi3: it ? "Strato/topper in pile per ridurre lo shock del lenzuolo freddo." : "Fleece layer/topper to reduce cold-sheet shock.",

    // Comparison
    cmpH2: it ? "Spifferi vs. calore personale — da cosa partire" : "Drafts vs. Personal Heating — what to do first",
    cmpFixH: it ? "Prima sistema gli spifferi" : "Fix drafts first",
    cmpFixL1: it ? "Meno dispersioni = tutto il resto funziona meglio." : "Less heat leaking means everything else works better.",
    cmpFixL2: it ? "Guarnizioni, soglie, tende — il comfort sale subito." : "Seals, sweeps, curtains — the comfort jump is immediate.",
    cmpFixL3: it ? "Di solito l’upgrade più economico col ROI migliore." : "Usually the cheapest upgrade with the best ROI.",
    cmpHeatH: it ? "Poi aggiungi calore personale" : "Then add personal heat",
    cmpHeatL1: it ? "Borsa dell’acqua/cuscino termico per pre-riscaldare te o sedia/letto." : "Hot-water bottle/heat pad to pre-warm you or the seat/bed.",
    cmpHeatL2: it ? "Micro-riscaldatore per una zona piccola mentre lavori/leggi." : "Low-watt heater for a very small zone while working/reading.",
    cmpHeatL3: it ? "Sessioni brevi; mai lasciare i riscaldatori incustoditi." : "Use short sessions; never leave heaters unattended.",

    // Costs
    costsH2: it ? "Quanto costa far funzionare un piccolo riscaldatore?" : "What does it cost to run a small heater?",
    costsP: it
      ? "Formula con la tua tariffa: watt ÷ 1000 × prezzo per kWh = costo orario. Esempio con £0.28/kWh—controlla bolletta o smart meter."
      : "Formula with your tariff: watts ÷ 1000 × price per kWh = cost per hour. Example uses £0.28/kWh for illustration—check your bill or smart meter.",
    tblHeater: it ? "Riscaldatore" : "Heater",
    tblWatts: it ? "Watt" : "Watts",
    tblCost: it ? "Costo/ora (esempio)" : "Example cost/hour",
    tblBest: it ? "Uso ideale" : "Best use",
    row1H: it ? "Riscaldatore da scrivania" : "Personal desk heater",
    row1W: "200W",
    row1C: it ? "£0.06" : "£0.06",
    row1B: it ? "Mani/piedi mentre lavori" : "Hands/feet while working",
    row2H: it ? "Ceramico compatto" : "Compact ceramic",
    row2W: "500W",
    row2C: it ? "£0.14" : "£0.14",
    row2B: it ? "Piccola zona sul divano" : "Small zone by sofa",
    row3H: it ? "Termoventilatore tipico" : "Typical fan heater",
    row3W: "1000W",
    row3C: it ? "£0.28" : "£0.28",
    row3B: it ? "Solo brevi sessioni" : "Short bursts only",
    costsNote: it
      ? "Numeri illustrativi; prima tappare gli spifferi, poi usare il wattaggio minimo che basta."
      : "Numbers are illustrative; focus on draft-proofing first, then use the smallest wattage that does the job.",

    // Habits
    habitsH2: it ? "Abitudini calde che costano £0" : "Warm habits that cost £0",
    habitsL1: it ? "Apri le tende col sole; chiudi le termiche prima del tramonto." : "Open curtains for daytime sun; close thermal curtains before dusk.",
    habitsL2: it ? "Cucina un piatto unico la sera—il calore resta nell’ambiente." : "Cook a one-pot dinner in the evening—ambient warmth lingers.",
    habitsL3: it ? "Tieni pantofole + plaid vicino al posto più freddo, così li usi davvero." : "Keep slippers + a throw next to your coldest seat so you actually use them.",
    habitsL4: it ? "Chiudi le porte interne per limitare i flussi che rubano calore." : "Close internal doors to limit airflow paths that steal heat.",

    // Safety
    safetyH2: it ? "Sicurezza essenziale (lettura rapida)" : "Safety essentials (quick read)",
    hotH3: it ? "Borse dell’acqua calda" : "Hot-water bottles",
    hotL1: it ? "Usa acqua calda non bollente. Sostituisci la borsa se screpolata o appiccicosa." : "Use hot, not boiling water. Replace the bottle if cracked or sticky.",
    hotL2: it ? "Usa una cover; evita il contatto diretto prolungato con la pelle." : "Wrap in a cover; avoid direct skin contact for long periods.",
    hotL3: it ? "Svuota del tutto dopo l’uso; conserva con tappo rimosso per asciugare." : "Empty fully after use; store with the stopper removed to dry.",
    heatH3: it ? "Riscaldatori" : "Heaters",
    heatL1: it ? "Lontano da coperte/tende; non coprire le griglie." : "Keep clear of bedding/curtains; never cover grilles.",
    heatL2: it ? "Usa superfici stabili; preferisci modelli con anti-ribaltamento." : "Use on stable surfaces; prefer models with tip-over protection.",
    heatL3: it ? "Non lasciare in funzione incustoditi o durante il sonno." : "Do not leave running unattended or while sleeping.",

    // Related + outro
    relatedH2: it ? "Articoli correlati" : "Related reads",
    related1: it ? "Giorno del Trasloco: kit pulizia & riparazioni per affitti UK" : "Move-In Day: Cleaning & Fix-It Kit for UK Rentals",
    related2: it ? "Economico & Riscaldante: cibi invernali all’italiana" : "Cheap & Warming: Italian-style Winter Foods",
    outroNote: it
      ? "Alcuni link possono generare una piccola commissione senza costi per te. Aiuta a mantenere gratuite le guide."
      : "Some links may earn a small commission at no extra cost to you. It helps keep community guides free.",
    needH3: it ? "Hai bisogno di consigli per il tuo appartamento?" : "Need tailored tips for your flat?",
    needP: it
      ? "Scrivici due righe sui punti con più spifferi e ti rispondiamo con un piano in 3 passi."
      : "Send a quick note about your draft hotspots and we’ll reply with a 3-step plan.",
    askQ: it ? "Fai una domanda →" : "Ask a question →",
    findLocal: it ? "Trova negozi di ferramenta →" : "Find local hardware →",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    alternates: { canonical: "/community/warmth-energy-savers-uk" },
    openGraph: {
      title: copy.metaTitle,
      description: copy.ogDesc,
      type: "article",
    },
  };
}

// Dates for meta display / JSON-LD
const PUBLISHED = "2025-10-04";
const UPDATED = "2025-10-19";

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);
  const p = (path: string) => `/${locale}${path}`;

  // ====== JSON-LD (FAQ + HowTo + Article) ======
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          locale === "it"
            ? "Qual è il modo più rapido per sentirsi più al caldo in un appartamento UK con spifferi?"
            : "What’s the quickest way to feel warmer in a drafty UK flat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Sigilla prima gli spifferi maggiori (porta d’ingresso, fessure delle finestre) con guarnizioni adesive removibili, aggiungi una soglia/para-spifferi, chiudi le stanze inutilizzate e usa tende termiche di notte. Scalda il corpo direttamente con borsa dell’acqua calda o cuscino termico prima di ricorrere al riscaldamento ambientale."
              : "Seal the biggest drafts first (front door, window gaps) with removable self-adhesive seals, add a door sweep or draught snake, close unused rooms, and layer thermal curtains at night. Warm the body directly with a hot-water bottle or heated pad before relying on space heating.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "it"
            ? "I micro-riscaldatori a basso wattaggio costano meno da usare?"
            : "Are low-watt personal heaters cheaper to run?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Possono sì, quando scaldi una zona molto piccola (scrivania/divano) invece dell’intera stanza. Stima il costo: watt ÷ 1000 × tariffa per kWh. Esempio: 200W × £0,28/kWh ≈ £0,056/ora (5,6p)."
              : "They can be when you heat a very small zone (desk, sofa) instead of the whole room. Estimate running cost with: watts ÷ 1000 × tariff per kWh. Example: 200W × £0.28/kWh ≈ £0.056/hour (5.6p).",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "it"
            ? "Posso installare questi prodotti senza irritare il proprietario?"
            : "Can I install these without annoying my landlord?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Sì—scegli prodotti removibili: guarnizioni adesive, binari per tende a clip, ganci Command per liner termici e para-spifferi. Evita fori permanenti senza permesso."
              : "Yes—choose removable products: peel-and-stick weatherstrip, clip-in curtain rails, command hooks for thermal liners, and draft snakes. Avoid permanent drilling unless you have permission.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "it"
            ? "Consigli di sicurezza per borse dell’acqua calda e riscaldatori?"
            : "Are there safety tips for hot-water bottles and heaters?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "it"
              ? "Usa acqua calda non bollente, controlla lo stato della borsa ogni anno ed evita contatto diretto prolungato con la pelle. Tieni i riscaldatori lontani da tessuti/lenzuola, non coprirli né lasciarli incustoditi, e usali su superfici stabili con protezione anti-ribaltamento se disponibile."
              : "Use hot (not boiling) water, check bottle condition yearly, and avoid direct skin contact for long periods. Keep heaters away from bedding/curtains, never cover or leave unattended, and use on a stable surface with tip-over protection if available.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Calore in 30 minuti: setup compatibile con l’affitto"
        : "Warmth in 30 Minutes: Landlord-Friendly Setup",
    description:
      locale === "it"
        ? "Un setup rapido e reversibile per ridurre gli spifferi e sentirsi subito più al caldo in un affitto UK."
        : "A quick, reversible setup to cut drafts and feel warmer fast in a UK rental.",
    totalTime: "PT30M",
    step: [
      {
        "@type": "HowToStep",
        name: locale === "it" ? "Porta d’ingresso" : "Front door",
        text:
          locale === "it"
            ? "Applica guarnizioni adesive lungo il telaio; aggiungi para-spifferi o soglia alla base."
            : "Apply self-adhesive weatherstrip along the frame; add a draft snake or door sweep at the bottom.",
      },
      {
        "@type": "HowToStep",
        name: locale === "it" ? "Finestre" : "Windows",
        text:
          locale === "it"
            ? "Sigilla i vuoti evidenti con schiuma adesiva; chiudi le prese d’aria notturne se sicuro; monta tende termiche o liner a clip."
            : "Seal obvious gaps with peel-and-stick foam; close trickle vents at night if safe; hang thermal curtains or clip-on liners.",
      },
      {
        "@type": "HowToStep",
        name: locale === "it" ? "Zonizzazione" : "Zoning",
        text:
          locale === "it"
            ? "Chiudi le porte delle stanze non usate per ridurre il volume d’aria da scaldare."
            : "Close doors to unused rooms to reduce the volume you heat.",
      },
      {
        "@type": "HowToStep",
        name: locale === "it" ? "Calore personale" : "Personal warmth",
        text:
          locale === "it"
            ? "Pre-riscalda sedia/letto con borsa dell’acqua calda o cuscino termico; usa un micro-riscaldatore a basso watt nella tua zona di lavoro/relax."
            : "Pre-warm your seat/bed with a hot-water bottle or heat pad; use a low-watt personal heater in your desk/sofa zone.",
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t(locale).metaTitle,
    description:
      locale === "it"
        ? "Calore adatto agli affitti nel Regno Unito: vittoria rapida in 30 minuti, scelte comfort, checklist stanza per stanza, costi orari e sicurezza."
        : "Landlord-friendly warmth for UK rentals: 30-minute quick win, comfort picks, room checklist, cost-per-hour, and safety.",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://resinaro.co.uk/community/warmth-energy-savers-uk",
    },
    inLanguage: locale === "it" ? "it-IT" : "en-GB",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* ===== HERO (full-bleed with amber accent) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* Background image (swap to a cosy interior hero when ready) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/warmth-hero.jpg" // replace with your cosy hero image
            alt={locale === "it" ? "Soggiorno UK caldo e accogliente con tende termiche e plaid sul divano" : "Warm, cosy UK living room with thermal curtains and a throw on the sofa"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40 sm:pt-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/30">
              {copy.chip}
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white drop-shadow md:text-6xl">
              {copy.h1Top}
              <span className="block text-amber-200">{copy.h1Sub}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {copy.heroP}
            </p>
          </div>

          {/* CTA block */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-gray-900">
                  {copy.ctaLead}
                </p>
                <p className="text-xs text-gray-700">{copy.ctaNote}</p>
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

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/90">
            <span>{copy.metaPub}</span>
            <span className="opacity-60">•</span>
            <span>{copy.metaUpd}</span>
            <span className="opacity-60">•</span>
            <span>{copy.metaRead}</span>
          </div>
        </div>

        {/* Clean wave separator into the warm background */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg className="block h-20 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,0 720,32 C960,64 1200,96 1440,48 L1440,80 L0,80 Z" className="fill-[#F9F6F1]" />
          </svg>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto mt-8 max-w-7xl px-6 md:mt-12">
        {/* Benefit chips row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { h: copy.b1h, p: copy.b1p },
            { h: copy.b2h, p: copy.b2p },
            { h: copy.b3h, p: copy.b3p },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-amber-800">{x.h}</h3>
              <p className="mt-1 text-sm text-gray-700">{x.p}</p>
            </div>
          ))}
        </div>

        {/* Intro copy */}
        <div className="mt-8 max-w-3xl text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            {copy.introP}
          </p>
        </div>

        {/* 30-minute plan */}
        <section id="quick-win" className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_.85fr]">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">{copy.planH2}</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm">
                <li>
                  <strong>{locale === "it" ? "Porta d’ingresso:" : "Front door:"}</strong>{" "}
                  {copy.plan1}
                </li>
                <li>
                  <strong>{locale === "it" ? "Finestre:" : "Windows:"}</strong>{" "}
                  {copy.plan2}
                </li>
                <li>
                  <strong>{locale === "it" ? "Zonizzazione:" : "Zoning:"}</strong>{" "}
                  {copy.plan3}
                </li>
                <li>
                  <strong>{locale === "it" ? "Calore personale:" : "Personal warmth:"}</strong>{" "}
                  {copy.plan4}
                </li>
              </ol>
              <p className="mt-3 text-xs text-gray-600">
                {copy.planNote}
              </p>
            </div>

            {/* Simple blueprint-style SVG (no JS) */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <svg viewBox="0 0 520 280" className="h-60 w-full">
                <defs>
                  <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M16 0H0M0 16V0" className="stroke-amber-200" strokeWidth=".5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="520" height="280" fill="url(#grid)" />
                <rect x="40" y="40" width="440" height="180" className="fill-white stroke-amber-300" />
                <rect x="60" y="60" width="140" height="60" className="fill-amber-100 stroke-amber-300" />
                <text x="70" y="85" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  {locale === "it" ? "Guarnizione porta" : "Door seal"}
                </text>
                <rect x="240" y="60" width="180" height="60" className="fill-amber-100 stroke-amber-300" />
                <text x="250" y="85" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  {locale === "it" ? "Schiuma + liner finestra" : "Window foam + liners"}
                </text>
                <rect x="60" y="150" width="120" height="50" className="fill-amber-100 stroke-amber-300" />
                <text x="68" y="178" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  {locale === "it" ? "Porta zona chiusa" : "Zone door closed"}
                </text>
                <rect x="240" y="150" width="120" height="50" className="fill-amber-100 stroke-amber-300" />
                <text x="248" y="178" className="fill-amber-900" style={{ fontSize: 12, fontWeight: 700 }}>
                  {locale === "it" ? "Borsa acqua calda" : "Hot-water bottle"}
                </text>
              </svg>
              <p className="mt-2 text-xs text-amber-900">
                {copy.blueprintCaption}
              </p>
            </div>
          </div>
        </section>

        {/* Comfort picks */}
        <section id="picks" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.picksH2}</h2>
          <p className="mt-1 text-sm text-gray-700">
            {copy.picksP}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: copy.pick1T,
                copy: copy.pick1C,
                href: "https://www.amazon.co.uk/s?k=door+draft+excluder+seal&tag=resinaroamzn-21",
              },
              {
                title: copy.pick2T,
                copy: copy.pick2C,
                href: "https://www.amazon.co.uk/s?k=thermal+blackout+curtains&tag=resinaroamzn-21",
              },
              {
                title: copy.pick3T,
                copy: copy.pick3C,
                href: "https://www.amazon.co.uk/s?k=hot+water+bottle&tag=resinaroamzn-21",
              },
              {
                title: copy.pick4T,
                copy: copy.pick4C,
                href: "https://www.amazon.co.uk/s?k=low+watt+desk+heater&tag=resinaroamzn-21",
              },
              {
                title: copy.pick5T,
                copy: copy.pick5C,
                href: "https://www.amazon.co.uk/s?k=door+draught+excluder+sweep&tag=resinaroamzn-21",
              },
              {
                title: copy.pick6T,
                copy: copy.pick6C,
                href: "https://www.amazon.co.uk/s?k=fleece+throw+blanket&tag=resinaroamzn-21",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{card.copy}</p>
                <a
                  className="mt-3 inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50"
                  rel="nofollow sponsored noopener"
                  target="_blank"
                  href={card.href}
                >
                  {copy.seeOptions}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Room-by-room checklist */}
        <section id="room-checklist" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.roomH2}</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">{copy.entryH3}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.entryLi1}</li>
                <li>{copy.entryLi2}</li>
                <li>{copy.entryLi3}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">{copy.bedH3}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.bedLi1}</li>
                <li>{copy.bedLi2}</li>
                <li>{copy.bedLi3}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison grid */}
        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.cmpH2}</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-900">{copy.cmpFixH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800">
                <li>{copy.cmpFixL1}</li>
                <li>{copy.cmpFixL2}</li>
                <li>{copy.cmpFixL3}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{copy.cmpHeatH}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.cmpHeatL1}</li>
                <li>{copy.cmpHeatL2}</li>
                <li>{copy.cmpHeatL3}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost-per-hour guide */}
        <section id="costs" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.costsH2}</h2>
          <p className="mt-1 text-sm text-gray-700">
            {copy.costsP}{" "}
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-3 [&>th]:py-2">
                  <th>{copy.tblHeater}</th>
                  <th>{copy.tblWatts}</th>
                  <th>{copy.tblCost}</th>
                  <th>{copy.tblBest}</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t">
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row1H}</td>
                  <td>{copy.row1W}</td>
                  <td>{copy.row1C}</td>
                  <td>{copy.row1B}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row2H}</td>
                  <td>{copy.row2W}</td>
                  <td>{copy.row2C}</td>
                  <td>{copy.row2B}</td>
                </tr>
                <tr className="[&>td]:px-3 [&>td]:py-2">
                  <td>{copy.row3H}</td>
                  <td>{copy.row3W}</td>
                  <td>{copy.row3C}</td>
                  <td>{copy.row3B}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            {copy.costsNote}
          </p>
        </section>

        {/* Habits */}
        <section id="habits" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.habitsH2}</h2>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6">
            <li>{copy.habitsL1}</li>
            <li>{copy.habitsL2}</li>
            <li>{copy.habitsL3}</li>
            <li>{copy.habitsL4}</li>
          </ul>
        </section>

        {/* Safety & mini-FAQ */}
        <section id="faq" className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.safetyH2}</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">{copy.hotH3}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.hotL1}</li>
                <li>{copy.hotL2}</li>
                <li>{copy.hotL3}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-amber-900">{copy.heatH3}</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>{copy.heatL1}</li>
                <li>{copy.heatL2}</li>
                <li>{copy.heatL3}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related & outro */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{copy.relatedH2}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              <li>
                <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href={p("/community/move-in-cleaning-kit-uk")}>
                  {copy.related1}
                </Link>
              </li>
              <li>
                <Link className="text-amber-900 underline underline-offset-4 hover:text-amber-700" href={p("/community/warm-winter-foods-uk")}>
                  {copy.related2}
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              {copy.outroNote}
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{copy.needH3}</h3>
            <p className="mt-1 text-sm text-gray-700">
              {copy.needP}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={p("/contact")}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold text-amber-900 hover:bg-amber-50"
              >
                {copy.askQ}
              </Link>
              <Link
                href={p("/directory")}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {copy.findLocal}
              </Link>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </section>
    </main>
  );
}
