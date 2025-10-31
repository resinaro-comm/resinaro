// src/app/[locale]/community/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// ---------- SEO ----------
export const metadata: Metadata = {
  title: "Community Knowledge Hub | Resinaro",
  description:
    "Practical, judgement-free guides for Italians and migrants in the UK — paperwork, housing, health, and everyday life.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Community Knowledge Hub | Resinaro",
    description:
      "Practical, judgement-free guides for Italians and migrants in the UK.",
    url: "https://www.resinaro.com/community",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// ---------- Data ----------
type Post = {
  title: string;
  description: string;
  slug: string; // expected to start with "/community/..."
  category: string;
  image?: string;
  minutes?: number; // read time
  tags?: string[];
  updatedAt?: string; // ISO date
  featured?: boolean;
  itTitle?: string; // Italian preview title
  itDescription?: string; // Italian preview intro
};

// Your existing list (kept) + optional fields for nicer UI
const posts: Post[] = [
  // Mini-guides
  {
    title: "The No-Machine Italian Coffee Kit (UK Edition)",
    description:
      "Everything you need for moka coffee in a UK kitchen: pot sizes, the right grind, spare gaskets, and a tiny milk frother for cappuccino vibes.",
    slug: "/community/moka-coffee-kit",
    category: "lifestyle",
    image: "/images/mokapot.png",
    minutes: 8,
    tags: ["moka", "kitchen"],
    updatedAt: "2025-10-04",
    featured: true,
    itTitle: "Kit caffè italiano senza macchina (Edizione UK)",
    itDescription:
      "Tutto il necessario per il caffè moka in una cucina UK: misure della moka, macinatura giusta, guarnizioni di ricambio e un mini montalatte effetto cappuccino.",
  },
  {
    title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "Compact tools and pantry picks for Italian cooking in a shared flat or studio. One pan, one pot, airtight storage and pantry heroes.",
    slug: "/community/starter-uk-kitchen-italian",
    category: "lifestyle",
    image: "/images/starterkitchen.png",
    minutes: 12,
    tags: ["kitchen", "budget"],
    updatedAt: "2025-10-07",
    itTitle: "Piccola cucina UK, grande sapore italiano: starter kit",
    itDescription:
      "Strumenti compatti e scelte dispensa per cucinare all’italiana in stanza o monolocale. Una padella, una pentola, contenitori ermetici e ingredienti jolly.",
  },
  {
    title: "Save Money: Bulk Italian Pantry Buys in the UK",
    description:
      "Cut weekly costs by buying Italian staples in bulk: pasta, tomatoes, olive oil, beans and coffee — what to bulk, what not to.",
    slug: "/community/bulk-italian-pantry-uk",
    category: "lifestyle",
    image: "/images/bulkessentials.png",
    minutes: 7,
    tags: ["bulk", "pantry", "saving"],
    itTitle: "Risparmia: scorte italiane in UK (acquisti in stock)",
    itDescription:
      "Riduci i costi settimanali facendo scorta di basi italiane: pasta, pomodori, olio, legumi e caffè — cosa conviene e cosa no.",
  },
  {
    title: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
    description:
      "Simple buys that cut drafts and keep you warm in UK rentals: door seals, thermal curtains, hot-water bottles and low-watt heaters.",
    slug: "/community/warmth-energy-savers-uk",
    category: "lifestyle",
    image: "/images/warmth-energy-hero-3840x1280.png",
    minutes: 9,
    tags: ["housing", "winter"],
    itTitle: "Stai al caldo, spendi meno: scelte comfort a risparmio energia",
    itDescription:
      "Acquisti semplici che bloccano gli spifferi e tengono caldo negli affitti UK: guarnizioni, tende termiche, borse dell’acqua calda e stufette a basso consumo.",
  },
  {
    title: "Work & Study: Compact UK Desk Setup That Feels Pro",
    description:
      "Laptop stand, keyboard, lighting and cable basics that turn a rented room into a focused workspace.",
    slug: "/community/uk-desk-setup-newcomers",
    category: "lifestyle",
    image: "/images/desk-hero.jpg",
    minutes: 8,
    tags: ["work", "study", "setup"],
    itTitle: "Lavoro & studio: postazione compatta che sembra pro",
    itDescription:
      "Supporto laptop, tastiera, luci e gestione cavi per trasformare una stanza in affitto in uno spazio di lavoro concentrato.",
  },
  {
    title: "Quick Trip to Italy: Light Travel Kit from the UK",
    description:
      "EU carry-on bag sizes, packing cubes, UK→EU adapters, document wallets and security tips for quick trips home.",
    slug: "/community/travel-to-italy-kit",
    category: "travel",
    image: "/images/quicktrip.png",
    minutes: 10,
    tags: ["travel", "airlines"],
    itTitle: "Viaggio lampo in Italia: kit leggero dal Regno Unito",
    itDescription:
      "Misure bagaglio a mano UE, packing cubes, adattatori UK→EU, porta-documenti e consigli di sicurezza per rientri veloci.",
  },
  {
    title: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals",
    description:
      "Apartment-friendly cleaning and small fixes: microfibre set, mop, command hooks, WD-40, and moisture control.",
    slug: "/community/move-in-cleaning-kit-uk",
    category: "housing",
    image: "/images/cleaning.png",
    minutes: 11,
    tags: ["deposit", "cleaning"],
    itTitle: "Giorno del trasloco: kit pulizie & piccole riparazioni (affitti UK)",
    itDescription:
      "Pulizie e micro‑riparazioni a prova di appartamento: microfibre, mocio, ganci adesivi, WD‑40 e controllo umidità.",
  },
  {
    title: "Raising Bilingual Kids: Italian at Home Starter Pack",
    description:
      "Games, books and tools to keep Italian alive in the UK: picture dictionaries, story time, labels and music.",
    slug: "/community/kids-italian-at-home",
    category: "family",
    image: "/images/raising-bilingual-kids.jpg",
    minutes: 9,
    tags: ["family", "language"],
    itTitle: "Bimbi bilingui: starter pack per l’italiano in casa",
    itDescription:
      "Giochi, libri e strumenti per tenere vivo l’italiano nel Regno Unito: dizionari illustrati, letture, etichette e musica.",
  },
  {
    title: "Home Pharmacy Basics (UK): Be Ready, Spend Less",
    description:
      "Simple, non-prescription items many households keep on hand in the UK: thermometer, plasters, electrolytes and more.",
    slug: "/community/home-pharmacy-uk",
    category: "health",
    image: "/images/home-pharmacy-basics.png",
    minutes: 7,
    tags: ["health", "first aid"],
    itTitle: "Farmacia di casa (UK): pronti spendendo meno",
    itDescription:
      "Prodotti base senza ricetta che molte famiglie tengono a portata: termometro, cerotti, sali reidratanti e altro.",
  },
  {
    title: "Plugs, Adapters & Power: Italy ↔ UK Without the Sparks",
    description:
      "Grounded EU→UK and UK→EU adapters, multi-port chargers, and safe surge-protected extensions for renters.",
    slug: "/community/power-adapters-uk-italy",
    category: "housing",
    image: "/images/desk-chargers-adapter.jpg",
    minutes: 8,
    tags: ["power", "adapters"],
    itTitle: "Prese, adattatori & corrente: Italia ↔ UK senza scintille",
    itDescription:
      "Adattatori EU→UK e UK→EU con terra, caricabatterie multi‑porta e ciabatte sicure con protezione da sovratensioni.",
  },

  // Full length
  {
    title:
      "Save Money in the UK: Buy Italian Staples in Bulk (Smart Storage, Real Prices, Zero Waste Tips)",
    description:
      "A practical guide to bulk-buying Italian pantry essentials in the UK—what to buy, how to store it in small flats, and how to split costs with friends. Includes price targets, shelf life, and storage solutions.",
    slug: "/community/buying-in-bulk-uk-italian-staples",
    category: "lifestyle",
    image: "/images/bulkessentials.png",
    minutes: 18,
    tags: ["bulk", "pantry", "saving"],
    itTitle:
      "Risparmia nel Regno Unito: scorte italiane all’ingrosso (spazio furbo, prezzi reali, zero sprechi)",
    itDescription:
      "Guida pratica agli acquisti in stock di basi italiane in UK — cosa comprare, come sistemare in spazi piccoli e come dividere i costi con gli amici. Prezzi obiettivo, durata e soluzioni di stoccaggio.",
  },
  {
    title: "New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)",
    description:
      "Essential Italian pantry staples for UK living — shelf-stable ingredients, no fridge required. Perfect for shared kitchens, temporary accommodation or small flats.",
    slug: "/community/italian-essentials",
    category: "lifestyle",
    image: "/images/italian-essentials.png",
    minutes: 14,
    tags: ["pantry", "newcomers"],
    itTitle:
      "Nuovo nel Regno Unito? 12 essenziali di dispensa italiana (senza frigo)",
    itDescription:
      "Basi di dispensa per vivere in UK — ingredienti a lunga conservazione, senza frigorifero. Perfetti per cucine condivise, alloggi temporanei o mini‑appartamenti.",
  },
  {
    title: "Open a Revolut Account in the UK (2025) — Quick Guide",
    description:
      "Step-by-step guide to opening a Revolut account in the UK for migrants: verification, proof-of-address, payroll, fees and troubleshooting (2025).",
    slug: "/community/life-in-uk/banking/open-revolut-account-uk-2025",
    category: "banking",
    image: "/images/revolut-cover.png",
    minutes: 9,
    tags: ["banking"],
    itTitle: "Aprire un conto Revolut in UK (2025) — guida rapida",
    itDescription:
      "Passaggi per aprire Revolut dal Regno Unito: verifica, prova d’indirizzo, stipendio, costi e risoluzione problemi (2025).",
  },
  {
    title: "Open a Monzo Account in the UK (2025) — Guide for Migrants",
    description:
      "How to sign up for Monzo from the UK: ID & liveness checks, receiving your debit card, proof-of-address options and common signup issues.",
    slug: "/community/life-in-uk/banking/open-monzo-account-uk-2025",
    category: "banking",
    image: "/images/monzo-account-uk-hero-3840x1280.png",
    minutes: 9,
    tags: ["banking"],
    itTitle: "Aprire un conto Monzo in UK (2025) — guida per migranti",
    itDescription:
      "Iscrizione a Monzo dal Regno Unito: controlli ID & liveness, consegna carta, alternative per la prova d’indirizzo e problemi comuni.",
  },
  {
    title: "Open a Starling Account in the UK (2025) — Guide for Migrants",
    description:
      "Starling Bank walkthrough for migrants: setup, FSCS protection, card delivery, business options and troubleshooting (2025).",
    slug: "/community/life-in-uk/banking/open-starling-account-uk-2025",
    category: "banking",
    image: "/images/open-starling-bank.png",
    minutes: 9,
    tags: ["banking"],
    itTitle: "Aprire un conto Starling in UK (2025) — guida per migranti",
    itDescription:
      "Percorso Starling Bank per migranti: configurazione, protezione FSCS, consegna carta, opzioni business e troubleshooting (2025).",
  },
  {
    title: "Finding Affordable Housing in London (2025): Guide for New Arrivals",
    description:
      "Practical advice for finding safe, affordable housing in London: where to search, referencing, deposit protection, avoiding scams and emergency help.",
    slug: "/community/life-in-uk/finding-affordable-housing-london-2025",
    category: "housing",
    image: "/images/housing-london-hero.png",
    minutes: 16,
    tags: ["housing", "london"],
    itTitle: "Casa accessibile a Londra (2025): guida per nuovi arrivati",
    itDescription:
      "Consigli pratici per trovare casa sicura e accessibile a Londra: dove cercare, referenze, deposito e tutela, truffe da evitare e aiuti d’emergenza.",
  },
  {
    title: "Navigating NHS Healthcare as an Italian in the UK (2025)",
    description:
      "How Italians and EU nationals can register with a GP, get an NHS number, access interpreters, urgent care, prescriptions and GHIC guidance.",
    slug: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025",
    category: "health",
    image: "/images/nhs-healthcare-italians-uk-hero-3840x1280.png",
    minutes: 15,
    tags: ["health", "NHS"],
    itTitle: "Sanità NHS per italiani nel Regno Unito (2025)",
    itDescription:
      "Come registrarsi dal GP, ottenere l’NHS number, interpreti, cure urgenti, ricette e tessera GHIC.",
  },
  {
    title:
      "Italian Passport in the UK (2025): Documents, Preparation & What to Expect",
    description:
      "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.",
    slug: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
    category: "bureaucracy-guides",
    image: "/images/italian-passport-uk-hero-3840x1280.png",
    minutes: 17,
    tags: ["passport", "consulate"],
    itTitle:
      "Passaporto italiano nel Regno Unito (2025): documenti, preparazione e cosa aspettarsi",
    itDescription:
      "Checklist chiara e aggiornata per rinnovare o richiedere il passaporto italiano in UK. Documenti, minori, costi, consigli di prenotazione e opzioni di aiuto.",
  },
  {
    title:
      "Italian Electronic ID Card (CIE) in the UK (2025): Eligibility, Documents, Booking & Uses",
    description:
      "Complete guide to the Italian CIE from the UK: who can apply, required documents, how to book, fingerprints, minors, fees, and how to use the CIE for digital services (SPID/CIE ID).",
    slug: "/community/bureaucracy-guides/italian-cie-id-card-uk",
    category: "bureaucracy-guides",
    image: "/images/cie-hero-3840x1280.png",
    minutes: 18,
    tags: ["CIE", "AIRE", "SPID"],
    itTitle:
      "Carta d’identità elettronica italiana (CIE) nel Regno Unito (2025): requisiti, documenti, prenotazione & usi",
    itDescription:
      "Guida completa alla CIE dal Regno Unito: chi può richiederla, documenti necessari, appuntamento, impronte, minori, costi e uso per SPID/CIE ID.",
  },
  {
    title:
      "Registering UK Birth/Marriage/Divorce in Italy (2025): Documents, Apostille & Consular Transcriptions",
    description: "",
    slug: "/community/bureaucracy-guides/register-uk-events-with-italy",
    category: "bureaucracy-guides",
    image: "/images/register-events-hero-3840x1280.png",
    minutes: 12,
    tags: ["apostille", "consulate"],
    itTitle:
      "Trascrivere nascita/matrimonio/divorzio UK in Italia (2025): documenti, apostille & trascrizioni consolari",
    itDescription: "",
  },
  {
    title:
      "Exchange Italian Driving Licence for a UK Licence (2025): DVLA Steps, Documents & Timelines",
    description: "",
    slug: "/community/life-in-uk/exchange-italian-driving-licence-uk",
    category: "life-in-uk",
    image: "/images/italian-licence-exchange-hero-3840x1280.png",
    minutes: 10,
    tags: ["DVLA"],
    itTitle:
      "Convertire patente italiana in patente UK (2025): passaggi DVLA, documenti & tempi",
    itDescription: "",
  },
  {
    title:
      "National Insurance Number (NIN) for Italians in the UK: Apply, Replace & Timelines (2025)",
    description: "",
    slug: "/community/life-in-uk/national-insurance-number-uk-italians",
    category: "life-in-uk",
    image: "/images/nationalinsurance.png",
    minutes: 9,
    tags: ["NIN", "work"],
    itTitle:
      "National Insurance Number (NIN) per italiani nel Regno Unito: domanda, recupero & tempi (2025)",
    itDescription: "",
  },
  {
    title:
      "Loneliness to Belonging (2025): A 30-Day Community Plan for Migrants in the UK",
    description: "",
    slug: "/community/mental-health/loneliness-belonging-uk-30-day-plan",
    category: "mental-health",
    image: "/images/loneliness-belonging-uk-30day-hero-3840x1280.png",
    minutes: 13,
    tags: ["community", "mental health"],
    itTitle:
      "Dalla solitudine all’appartenenza (2025): piano di 30 giorni per migranti nel Regno Unito",
    itDescription: "",
  },
  {
    title:
      "NHS Mental Health Support in the UK (2025): How to Access Help, Self-Referral & What to Expect",
    description: "",
    slug: "/community/mental-health/nhs-mental-health-access-uk",
    category: "mental-health",
    image: "/images/nhs-mental-health-access-hero-3840x1280.png",
    minutes: 15,
    tags: ["NHS", "mental health"],
    itTitle:
      "Supporto salute mentale NHS nel Regno Unito (2025): come accedere, auto‑invio & cosa aspettarsi",
    itDescription: "",
  },
  {
    title:
      "AIRE Updates from the UK (2025): Change Address, Marriage, Birth, Name — FAST IT Guide",
    description: "",
    slug: "/community/bureaucracy-guides/keep-aire-up-to-date-uk",
    category: "bureaucracy-guides",
    image: "/images/aire-updates-hero-3840x1280.png",
    minutes: 12,
    tags: ["AIRE", "FAST IT"],
    itTitle:
      "Aggiornare l’AIRE dal Regno Unito (2025): cambio indirizzo, matrimonio, nascita, nome — guida FAST IT",
    itDescription: "",
  },
  {
    title:
      "AIRE Registration from the UK (2025): FAST IT Steps, Proofs & Common Errors",
    description: "",
    slug: "/community/bureaucracy-guides/aire-registration-uk",
    category: "bureaucracy-guides",
    image: "/images/aire-registration-hero-3840x1280.png",
    minutes: 14,
    tags: ["AIRE", "FAST IT"],
    itTitle:
      "Iscrizione AIRE dal Regno Unito (2025): passaggi FAST IT, prove & errori comuni",
    itDescription: "",
  },

  // New long-form 2025 guides
  {
    title:
      "UK Renting for Italians (2025): Right to Rent, Referencing, Deposits & Templates",
    description:
      "Step-by-step renting guide in easy English: Right to Rent (EU), passing referencing without UK credit history, deposits and protection, viewing checklists, and scam warnings.",
    slug: "/community/uk-renting-for-italians-2025",
    category: "housing",
    image: "/images/housing-london-hero-3840x1280.png",
    minutes: 22,
    tags: ["housing", "renting", "tenancy"],
    updatedAt: "2025-10-10",
    itTitle:
      "Affittare in UK per italiani (2025): Right to Rent, referenze, depositi & modelli",
    itDescription:
      "Guida passo‑passo in inglese semplice: Right to Rent (UE), superare le referenze senza storico UK, depositi e tutela, checklist visite e truffe.",
  },
  {
    title:
      "UK Tax Code for Italians (2025): Fix Emergency Tax (1257L, BR, 0T, W1/M1) + Templates",
    description:
      "Decode UK tax codes and fix common issues fast: 1257L, BR, 0T, W1/M1, starter forms, HMRC contact routes, and payroll templates.",
    slug: "/community/uk-tax-code-for-italians-2025",
    category: "work",
    image: "/images/resinaro-general.png",
    minutes: 18,
    tags: ["tax", "payslip", "HMRC"],
    updatedAt: "2025-10-10",
    itTitle:
      "Codice fiscale UK per italiani (2025): correggere Emergency Tax (1257L, BR, 0T, W1/M1) + modelli",
    itDescription:
      "Decifra i codici fiscali UK e risolvi in fretta: 1257L, BR, 0T, W1/M1, moduli iniziali, contatti HMRC e modelli payroll.",
  },
  {
    title:
      "Proof of Address Without Bills (2025): 12 Accepted Docs + Copy-Paste Templates",
    description:
      "No bills yet? Build a fast proof-of-address bundle with tenancy, employer/GP letters, bank welcome letter, C/O wording and scripts for banks/GP/DVLA.",
    slug: "/community/proof-of-address-without-bills-2025",
    category: "life-in-uk",
    image: "/images/resinaro-general.png",
    minutes: 20,
    tags: ["identity", "address", "DVLA"],
    updatedAt: "2025-10-10",
    itTitle:
      "Prova di indirizzo senza bollette (2025): 12 documenti accettati + modelli",
    itDescription:
      "Niente bollette? Costruisci un pacchetto rapido: contratto, lettere datore/GP, lettera banca, dicitura C/O e script per banca/GP/DVLA.",
  },
  {
    title:
      "Rejected by UK Banks? Open an Account Without Credit History (Italians, 2025)",
    description:
      "Pass KYC without a UK credit file: documents that work, C/O wording, branch scripts, and which banks to try first.",
    slug: "/community/open-uk-bank-account-no-credit-italians-2025",
    category: "banking",
    image: "/images/uk-bank-kyc-italians-hero.png",
    minutes: 19,
    tags: ["banking", "KYC", "credit"],
    updatedAt: "2025-10-10",
    itTitle:
      "Rifiutato dalle banche UK? Apri un conto senza storia di credito (italiani, 2025)",
    itDescription:
      "Passa il KYC senza credit file UK: documenti che funzionano, dicitura C/O, script in filiale e banche da provare per prime.",
  },
  {
    title:
      "First Payslip Explained (UK, 2025): Tax Code, NI Letter, YTD and Templates",
    description:
      "Understand your first UK payslip: tax code meanings, NI letter, gross→net, YTD, and how to fix common problems with templates.",
    slug: "/community/first-payslip-italians-uk-2025",
    category: "work",
    image: "/images/fisrt-payslip-uk-italian.jpg",
    minutes: 16,
    tags: ["work", "payslip", "tax"],
    updatedAt: "2025-10-10",
    itTitle:
      "Primo cedolino spiegato (UK, 2025): tax code, lettera NI, YTD e modelli",
    itDescription:
      "Capisci il primo payslip UK: significato dei codici, lettera NI, lordo→netto, YTD e come risolvere problemi comuni con modelli pronti.",
  },
  {
    title:
      "Council Tax for Italians (2025): Bands, Discounts & Moving-In Steps",
    description:
      "What Council Tax is, how to find your band, set discounts (single-person/student), moving-in checklist and payment setup.",
    slug: "/community/council-tax-italians-2025",
    category: "housing",
    image: "/images/housing-london-hero-3840x1280.png",
    minutes: 17,
    tags: ["council tax", "housing"],
    updatedAt: "2025-10-10",
    itTitle:
      "Council Tax per italiani (2025): fasce, sconti & passi di ingresso",
    itDescription:
      "Cos’è il Council Tax, come trovare la fascia, impostare sconti (single/student), checklist di ingresso e pagamento.",
  },
  {
    title:
      "National Insurance Number (NIN) for Italians (2025): Apply, Replace & Timelines",
    description:
      "Exactly how to apply or recover a UK NIN in 2025: documents, online steps, phone script, timelines and follow-ups.",
    slug: "/community/national-insurance-number-italians-uk-2025",
    category: "work",
    image: "/images/national-insurance-number-uk-hero-3840x1280.png",
    minutes: 15,
    tags: ["NIN", "work"],
    updatedAt: "2025-10-10",
    itTitle:
      "National Insurance Number (NIN) per italiani (2025): domanda, recupero & tempi",
    itDescription:
      "Come richiedere o recuperare il NIN nel 2025: documenti, passaggi online, script telefonico, tempi e follow‑up.",
  },

  // Newly added 2025 guides
  {
    title:
      "EU Settlement Scheme (EUSS) for Italians (2025): Share Codes, Update Passport, Travel & Fixes",
    description:
      "Easy 2025 guide for Italians: create the right share code, update a new passport in your EUSS record, fix sign-in issues and understand travel checks.",
    slug: "/community/euss-italians-2025-share-codes-update-passport",
    category: "life-in-uk",
    image: "/images/italian-passport-uk-hero-3840x1280.png",
    minutes: 20,
    tags: ["EUSS", "work", "rent"],
    updatedAt: "2025-10-10",
    itTitle:
      "EU Settlement Scheme (EUSS) per italiani (2025): share code, aggiornare passaporto, viaggi & soluzioni",
    itDescription:
      "Guida semplice: crea il giusto share code, aggiorna il passaporto nel tuo record EUSS, risolvi problemi di accesso e capisci i controlli di viaggio.",
  },
  {
    title:
      "Utilities Setup (2025): Energy, Water, Council Tax & Broadband — Day-1 Checklist",
    description:
      "Move-in playbook: find your energy/water suppliers, submit opening readings, register Council Tax, pick broadband, and handle previous-tenant debt letters.",
    slug: "/community/utilities-setup-uk-2025",
    category: "housing",
    image: "/images/utilities-setup-hero.png",
    minutes: 20,
    tags: ["utilities", "council tax", "broadband"],
    updatedAt: "2025-10-10",
    itTitle:
      "Utenze (2025): energia, acqua, Council Tax & broadband — checklist giorno 1",
    itDescription:
      "Playbook di ingresso: identifica i fornitori, invia le letture iniziali, registra il Council Tax, scegli il broadband e gestisci lettere di debito del precedente inquilino.",
  },
  {
    title:
      "Oyster vs Contactless vs Travelcards (2025): Caps, Zones & Which to Use",
    description:
      "Definitive London transport explainer: daily/weekly caps, zones, Hopper fare and the best option by use-case—plus setup and tips.",
    slug: "/community/oyster-vs-contactless-travelcards-2025",
    category: "travel",
    image: "/images/travel-cards-in-uk.png",
    minutes: 18,
    tags: ["transport", "London"],
    updatedAt: "2025-10-10",
    itTitle:
      "Oyster vs contactless vs travelcard (2025): tetti, zone & quale usare",
    itDescription:
      "Spiegazione definitiva del trasporto londinese: tetti giornalieri/settimanali, zone, Hopper fare e opzione migliore per caso d’uso — con setup e consigli.",
  },
  {
    title:
      "UK Mobile for Newcomers (2025): Best SIM & eSIM, PAYG vs Monthly, EU Roaming",
    description:
      "Simple guide to UK mobile: SIM vs eSIM, PAYG vs monthly, no-credit-check options, porting and troubleshooting with copy-paste scripts.",
    slug: "/community/uk-sim-esim-newcomers-2025",
    category: "life-in-uk",
    image: "/images/mobile-sim-esim.png",
    minutes: 18,
    tags: ["mobile", "SIM", "eSIM"],
    updatedAt: "2025-10-10",
    itTitle:
      "Mobile UK per chi arriva (2025): miglior SIM & eSIM, PAYG vs abbonamento, roaming UE",
    itDescription:
      "Guida semplice al mobile UK: SIM vs eSIM, ricaricabile vs mensile, opzioni senza controllo credito, portabilità e troubleshooting con script copia‑incolla.",
  },

  // Blog articles
  {
    title: "Do I Have Military Obligations if I Apply for Italian Citizenship?",
    description:
      "Worried about military service as a new or dual Italian citizen? Here’s what the law says, why conscription was abolished, and what a reinstatement would mean for residents abroad.",
    slug: "/blog/do-i-have-military-obligations-italian-citizenship",
    category: "bureaucracy-guides",
    image: "/images/military-service-resinaro.png",
    minutes: 3,
    tags: ["citizenship", "law"],
    updatedAt: "2025-09-03",
    itTitle:
      "Ho obblighi militari se richiedo la cittadinanza italiana?",
    itDescription:
      "Ti preoccupa la leva come nuovo o doppio cittadino italiano? Ecco cosa dice la legge, perché la coscrizione è stata abolita e cosa significherebbe un eventuale ritorno per chi vive all’estero.",
  },
  {
    title: "Do You Need to Speak Italian for Citizenship by Descent? (2025)",
    description:
      "B1 Italian isn’t required for citizenship by descent (jure sanguinis). Learn who the B1 rule applies to and why you’re exempt — plus why learning Italian still helps.",
    slug: "/blog/do-you-need-italian-for-citizenship-by-descent",
    category: "bureaucracy-guides",
    image: "/images/speak-italian-citizenship.png",
    minutes: 4,
    tags: ["citizenship", "B1"],
    updatedAt: "2025-08-14",
    itTitle:
      "Serve parlare italiano per la cittadinanza per discendenza? (2025)",
    itDescription:
      "Il livello B1 non è richiesto per la cittadinanza per discendenza (iure sanguinis). Scopri a chi si applica la regola del B1 e perché tu sei esente — e perché imparare l’italiano aiuta comunque.",
  },
  {
    title: "Top 7 Benefits of Having Italian Citizenship in 2025",
    description:
      "From EU freedom of movement to healthcare, education, and multigenerational rights—discover the top 7 advantages of holding Italian citizenship in 2025.",
    slug: "/blog/top-7-benefits-of-italian-citizenship-2025",
    category: "bureaucracy-guides",
    image: "/images/seven-principles.png",
    minutes: 4,
    tags: ["citizenship", "EU"],
    updatedAt: "2025-07-05",
    itTitle:
      "I 7 principali vantaggi della cittadinanza italiana nel 2025",
    itDescription:
      "Dalla libertà di movimento nell’UE a sanità, istruzione e diritti multigenerazionali — scopri i 7 benefici principali dell’avere la cittadinanza italiana nel 2025.",
  },
];

// ---------- Helpers ----------
function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
function toBlogJSONLD(list: Post[], locale: "en" | "it") {
  const base = "https://www.resinaro.com";
  const isIt = locale === "it";
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Resinaro Community Knowledge Hub",
    url: `${base}/${locale}/community`,
    blogPost: list.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: isIt && p.itTitle ? p.itTitle : p.title,
      description: isIt && p.itDescription ? p.itDescription : p.description,
      url: `${base}/${locale}${p.slug}`,
      image: p.image ? `${base}${p.image}` : `${base}/og-default.png`,
      dateModified: p.updatedAt || undefined,
      author: { "@type": "Organization", name: "Resinaro" },
    })),
  };
}

// Localized category labels
function catLabel(cat: string, isIt: boolean) {
  if (!isIt) return cat;
  switch (cat) {
    case "lifestyle":
      return "stile-di-vita";
    case "travel":
      return "viaggi";
    case "housing":
      return "casa";
    case "family":
      return "famiglia";
    case "health":
      return "salute";
    case "banking":
      return "banche";
    case "bureaucracy-guides":
      return "burocrazia";
    case "life-in-uk":
      return "vita-nel-regno-unito";
    case "mental-health":
      return "salute-mentale";
    case "work":
      return "lavoro";
    default:
      return cat;
  }
}

export default async function CommunityHub({
  params,
  searchParams,
}: {
  params: { locale: "en" | "it" };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = params.locale;
  const isIt = locale === "it";

  const qRaw = searchParams?.q;
  const q =
    (Array.isArray(qRaw) ? qRaw[0] : qRaw)?.toLowerCase().trim() || "";
  const category = (Array.isArray(searchParams?.category) ? searchParams?.category[0] : searchParams?.category) || "";
  const tag = (Array.isArray(searchParams?.tag) ? searchParams?.tag[0] : searchParams?.tag) || "";
  const sort = (Array.isArray(searchParams?.sort) ? searchParams?.sort[0] : searchParams?.sort) || "";

  // Filter
  let filtered = posts.slice();
  if (q)
    filtered = filtered.filter((p) => {
      const t = isIt && p.itTitle ? p.itTitle : p.title;
      const d = isIt && p.itDescription ? p.itDescription : p.description;
      return t.toLowerCase().includes(q) || d.toLowerCase().includes(q);
    });
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (tag) filtered = filtered.filter((p) => (p.tags || []).includes(tag));

  // Sort
  if (sort === "title")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "category")
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  else if (sort === "readtime")
    filtered.sort((a, b) => (a.minutes || 0) - (b.minutes || 0));
  else if (sort === "recent")
    filtered.sort(
      (a, b) =>
        new Date(b.updatedAt || "2000-01-01").getTime() -
        new Date(a.updatedAt || "2000-01-01").getTime()
    );

  const categories = unique(posts.map((p) => p.category)).sort();
  const tags = unique(posts.flatMap((p) => p.tags || [])).sort();

  const featured =
    filtered.find((p) => p.featured) ||
    filtered[0];

  const listWithoutFeatured = filtered.filter((p) => p !== featured);

  const jsonLd = toBlogJSONLD(filtered, locale);

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-16">
      {/* HERO */}
      <section className="relative border-b">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/images/community-background.png)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center drop-shadow-lg">
            {isIt ? "Hub di Conoscenza della Community" : "Community Knowledge Hub"}
          </h1>
          <p className="mt-3 text-center text-gray-800 max-w-3xl mx-auto drop-shadow">
            {isIt
              ? "Guide pratiche e senza giudizi per italiani e migranti nel Regno Unito. Passi concreti, checklist chiare, zero fuffa."
              : "Curated, hands-on guides written by and for Italians and migrants in the UK. Practical steps, clear checklists, zero fluff."}
          </p>
        </div>
      </section>

      {/* FILTER BAR (non-sticky) */}
      <form className="bg-[#F9F6F1] border-b" role="search">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-3 items-center">
          <input
            name="q"
            defaultValue={q}
            placeholder={isIt ? "Cerca guide…" : "Search guides…"}
            aria-label={isIt ? "Cerca nelle guide della community" : "Search community guides"}
            className="flex-1 min-w-[220px] rounded-lg border border-gray-300 px-4 py-2"
          />
          <select
            name="category"
            defaultValue={category}
            aria-label={isIt ? "Filtra per categoria" : "Filter by category"}
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">{isIt ? "Tutte le categorie" : "All categories"}</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {catLabel(c, isIt)}
              </option>
            ))}
          </select>

          <select
            name="tag"
            defaultValue={tag}
            aria-label={isIt ? "Filtra per tag" : "Filter by tag"}
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">{isIt ? "Tutti i tag" : "All tags"}</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            name="sort"
            defaultValue={sort}
            aria-label={isIt ? "Ordina risultati" : "Sort results"}
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">{isIt ? "Ordina" : "Sort"}</option>
            <option value="recent">{isIt ? "Aggiornati di recente" : "Recently updated"}</option>
            <option value="title">{isIt ? "Titolo A–Z" : "Title A–Z"}</option>
            <option value="category">{isIt ? "Categoria" : "Category"}</option>
            <option value="readtime">{isIt ? "Lettura più breve" : "Shortest read"}</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-green-800 text-white px-5 py-2 font-medium hover:bg-green-900"
          >
            {isIt ? "Applica" : "Apply"}
          </button>
          <Link
            href={`/${locale}/community`}
            className="text-sm underline text-gray-600 hover:text-green-900"
          >
            {isIt ? "Reimposta" : "Reset"}
          </Link>
        </div>
      </form>

      {/* COUNTS */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b py-4">
          <h2 className="text-xl md:text-2xl font-semibold text-green-900">
            {isIt ? (
              <>
                {filtered.length} {filtered.length === 1 ? "guida" : "guide"}
                {category ? ` in ${catLabel(category, true)}` : ""}
                {tag ? ` · ${tag}` : ""}
                {q ? ` · “${q}”` : ""}
              </>
            ) : (
              <>
                {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
                {category ? ` in ${category}` : ""}
                {tag ? ` · ${tag}` : ""}
                {q ? ` · “${q}”` : ""}
              </>
            )}
          </h2>
          <p className="text-sm text-gray-600">
            {isIt ? "Fresche, pratiche e gratuite." : "Fresh, practical and free."}
          </p>
        </div>
      </div>

      {/* FEATURED CARD */}
      {featured && (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <Link
            href={`/${locale}${featured.slug}`}
            className="block rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={featured.image || "/images/resinaro-general.png"}
                alt={featured.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8 text-white">
                <span className="inline-block text-[11px] bg-emerald-600/90 px-2 py-1 rounded">
                  {isIt ? "In evidenza" : "Featured"}
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  {isIt && featured.itTitle ? featured.itTitle : featured.title}
                </h3>
                <p className="mt-1 max-w-3xl text-sm md:text-base opacity-95 line-clamp-2">
                  {isIt && featured.itDescription ? featured.itDescription : featured.description}
                </p>
                <div className="mt-2 text-xs opacity-80">
                  {featured.minutes ? (isIt ? `${featured.minutes} min di lettura · ` : `${featured.minutes} min read · `) : ""}
                  {featured.updatedAt ? (isIt ? `Aggiornato ${featured.updatedAt}` : `Updated ${featured.updatedAt}`) : ""}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* GRID */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {listWithoutFeatured.length === 0 ? (
          <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
            {isIt
              ? "Nessun articolo corrisponde ai filtri. Prova a rimuovere qualche filtro."
              : "No posts match your filters. Try clearing some filters above."}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listWithoutFeatured.map((post, i) => (
              <Link
                key={post.slug}
                href={`/${locale}${post.slug}`}
                className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-44">
                  <Image
                    src={post.image || "/images/resinaro-general.png"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {catLabel(post.category, isIt)}
                    </span>
                    {post.updatedAt && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        {isIt ? `Aggiornato ${post.updatedAt}` : `Updated ${post.updatedAt}`}
                      </span>
                    )}
                    {post.minutes && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {isIt ? `${post.minutes} min` : `${post.minutes} min`}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-green-900 line-clamp-2">
                    {isIt && post.itTitle ? post.itTitle : post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                    {(isIt && post.itDescription ? post.itDescription : post.description) ||
                      (isIt ? "Leggi la guida completa →" : "Read the full guide →")}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-gray-50 border text-gray-600"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 text-sm font-medium text-green-800 group-hover:underline">
                    {isIt ? "Leggi di più →" : "Read more →"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Curated bundles */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-xl border bg-white p-5">
          <h3 className="text-lg font-semibold text-green-900">
            {isIt ? "Raccolte rapide" : "Quick bundles"}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={`/${locale}/community?tag=pantry`}
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              {isIt ? "Cucina italiana" : "Italian Kitchen"}
            </Link>
            <Link
              href={`/${locale}/community?category=housing`}
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              {isIt ? "Casa & Utenze" : "Housing & Utilities"}
            </Link>
            <Link
              href={`/${locale}/community?category=bureaucracy-guides`}
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              {isIt ? "Consolati & Documenti" : "Consular & Documents"}
            </Link>
            <Link
              href={`/${locale}/community?category=banking`}
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              {isIt ? "Banche & Denaro" : "Banking & Money"}
            </Link>
            <Link
              href={`/${locale}/community?category=health`}
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              {isIt ? "Salute & NHS" : "Health & NHS"}
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
