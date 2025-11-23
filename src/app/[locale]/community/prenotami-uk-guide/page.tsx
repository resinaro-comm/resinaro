// src/app/[locale]/community/prenotami-uk-guide/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "Prenot@Mi & Italian Consular Appointments UK (2025) Guide",
  description:
    "2025 survival guide for Italians in the UK using Prenot@Mi: how to book consular appointments, avoid blocked accounts, prepare documents and understand realistic timelines.",
  alternates: { canonical: "/community/prenotami-uk-guide" },
  openGraph: {
    title: "Prenot@Mi & Italian Consular Appointments UK (2025) Guide",
    description:
      "Step-by-step Prenot@Mi guide for Italians in the UK: consulate coverage, booking patterns, common errors, appointment-day checklists and when to ask for help.",
    type: "article",
  },
};

const PUBLISHED = "2025-11-16";
const UPDATED = "2025-11-16";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";

  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Schermo con Prenot@Mi aperto e passaporto italiano accanto, in una casa nel Regno Unito"
      : "Laptop with Prenot@Mi open next to an Italian passport in a UK flat",
    heroBadge: it ? "Prenot@Mi • Consolati UK" : "Prenot@Mi • UK Consulates",
    heroTitleA: it
      ? "Prenot@Mi & appuntamenti consolari"
      : "Prenot@Mi & consular appointments",
    heroTitleB: it
      ? "Regno Unito (2025): guida di sopravvivenza"
      : "UK (2025): survival guide",
    heroLead: it
      ? "Come capire a quale consolato appartieni, leggere Prenot@Mi senza impazzire, evitare account bloccati e prepararti al giorno dell’appuntamento."
      : "Learn which consulate is yours, how to read Prenot@Mi without panic, avoid blocked accounts and prepare properly for appointment day.",
    ctaCopy: it
      ? "Se vuoi, possiamo aiutarti a capire dove sei in coda, cosa puoi fare da solo e quando ha senso chiedere supporto per Prenot@Mi."
      : "If you’d like, we can help you understand where you are in the queue, what you can do alone and when it makes sense to get support with Prenot@Mi.",
    ctaSub: it
      ? "Servizio privato di supporto. Non siamo il consolato e non abbiamo canali “segreti”."
      : "Private support service. We’re not the consulate and we don’t have “secret channels”.",
    ctaBtnPrimary: it ? "Chiedi aiuto su Prenot@Mi" : "Get Prenot@Mi help",
    ctaBtnSecondary: it ? "Vedi i servizi passaporto" : "View passport services",
    pub: it ? "Pubblicato: 16 Nov 2025" : "Published: 16 Nov 2025",
    upd: it ? "Aggiornato: 16 Nov 2025" : "Updated: 16 Nov 2025",
    read: it ? "~14 min lettura" : "~14 min read",

    // USPs
    usp1H: it ? "Pensata da utenti reali" : "Written from real cases",
    usp1P: it
      ? "Basata su centinaia di casi visti da Resinaro: errori ricorrenti, tempi reali, cosa chiedono davvero agli sportelli."
      : "Based on hundreds of Resinaro cases: recurring mistakes, real timelines and what staff actually ask at the desk.",
    usp2H: it ? "Collegata ad AIRE & passaporto" : "Connected to AIRE & passports",
    usp2P: it
      ? "Prenot@Mi non è un mondo a parte: qui lo colleghiamo a AIRE, FAST IT, passaporti, CIE e trascrizioni."
      : "Prenot@Mi isn’t an island: we connect it to AIRE, FAST IT, passports, CIE and transcriptions.",
    usp3H: it ? "Niente promesse impossibili" : "No impossible promises",
    usp3P: it
      ? "Non garantiamo miracoli, ma chiarezza: cosa puoi aspettarti, cosa puoi controllare e cosa no."
      : "No miracles promised, just clarity: what you can expect, what you control and what you don’t.",

    // TLDR
    tldrH: it
      ? "Riassunto rapido — tre situazioni Prenot@Mi tipiche"
      : "TL;DR — three typical Prenot@Mi situations",
    tldr1: it ? "1) Primo accesso, zero appuntamenti" : "1) First login, no appointments visible",
    tldr1P: it
      ? "Hai appena creato l’account o ti colleghi dopo anni. Vedi solo “nessuna disponibilità”: è normale, ma puoi sistemare profilo e dati in anticipo."
      : "You’ve just created the account or logged in after years. You only see “no availability”: common, but you can fix profile and data ahead of time.",
    tldr2: it
      ? "2) Account attivo, nessuno slot da mesi"
      : "2) Active account, no slots for months",
    tldr2P: it
      ? "È la situazione più stressante: qui contano i ritmi tipici del consolato, l’orario in cui controlli e come eviti mosse che bloccano l’account."
      : "This is the most stressful stage: consulate rhythms, when you check and avoiding moves that block your account all matter.",
    tldr3: it
      ? "3) Appuntamento trovato: ora non puoi sbagliare"
      : "3) Appointment booked: now don’t blow it",
    tldr3P: it
      ? "Una volta trovato lo slot, il vero lavoro è preparare documenti, copie, pagamenti e risposte alle domande tipiche allo sportello."
      : "Once you’ve got a slot, the real work is preparing documents, copies, payments and answers for the usual desk questions.",
    miniCtaP: it
      ? "Vuoi una checklist Prenot@Mi (PDF) con i passi da seguire prima, durante e dopo l’appuntamento?"
      : "Want a Prenot@Mi checklist (PDF) with what to do before, during and after the appointment?",
    miniCtaBtn: it ? "Mandami la checklist" : "Send me the checklist",

    // Key takeaways
    take1H: it
      ? "Prenot@Mi non è una lotteria pura"
      : "Prenot@Mi is not pure lottery",
    take1P: it
      ? "Ci sono momenti della settimana/anno con più movimento. Non hai controllo totale, ma puoi giocarti meglio i tentativi."
      : "There are days and seasons with more movement. You don’t have full control, but you can make smarter attempts.",
    take2H: it
      ? "Un account bloccato complica tutto"
      : "A blocked account makes everything worse",
    take2P: it
      ? "Accessi da mille dispositivi, condivisione credenziali, tentativi strani: spesso sono questi a far scattare blocchi di sicurezza."
      : "Logins from many devices, sharing credentials, unusual patterns: these often trigger security blocks.",
    take3H: it
      ? "Il giorno dell’appuntamento vale oro"
      : "Appointment day is precious",
    take3P: it
      ? "Arrivare preparati significa evitare rinvii di mesi. Meglio mezz’ora di checklist oggi che rifare tutto tra un anno."
      : "Turning up prepared avoids delays of months. Better 30 minutes of checklist now than starting again next year.",

    // **Service strip (pricing + payments + proof)**
    serviceStripH: it
      ? "Quando ha senso farsi aiutare da Resinaro"
      : "When it makes sense to get help from Resinaro",
    serviceStripP: it
      ? "Se vuoi diminuire il caos, possiamo occuparci noi dei tentativi su Prenot@Mi e della lista d’attesa dove esiste, mentre tu ti concentri sui documenti."
      : "If you want less chaos, we can handle the Prenot@Mi attempts and waiting list (where available) while you focus on documents.",
    serviceStripList: it
      ? [
          "Prenotazione di data/ora su Prenot@Mi (quando il consolato rilascia slot).",
          "Inserimento in lista d’attesa e monitoraggio, se previsto dal consolato.",
          "Controllo veloce dei requisiti base prima che tu paghi.",
        ]
      : [
          "Appointment date/time booking on Prenot@Mi (when your consulate releases slots).",
          "Waiting list enrolment and monitoring, where your consulate offers it.",
          "Quick eligibility check before you pay.",
        ],
    serviceStripPriceTitle: it ? "Quanto costa" : "What it costs",
    serviceStripPriceBullets: it
      ? [
          "Indicativamente £40 per la prenotazione di data/ora.",
          "Indicativamente £30 per l’inserimento in lista d’attesa + monitoraggio.",
        ]
      : [
          "Indicatively £40 for appointment date & time booking.",
          "Indicatively £30 for waiting list enrolment + monitoring.",
        ],
    serviceStripPriceNote: it
      ? "Prezzi riferiti all’assistenza Resinaro, separati da tariffe consolari o costi di spedizione."
      : "These are Resinaro support fees, separate from consular fees or postage.",
    serviceStripPaymentsTitle: it
      ? "Pagamenti disponibili"
      : "Payment options",
    serviceStripPaymentsText: it
      ? "Paghi online in modo sicuro (Stripe) con più di 10 metodi: carte principali, Apple/Google Pay e opzioni a rate come Klarna Pay in 3 o Clearpay Pay in 4 (se disponibili nel tuo account)."
      : "You pay securely online (Stripe) with 10+ methods: major cards, Apple/Google Pay and instalment options like Klarna Pay in 3 or Clearpay Pay in 4 (where available to you).",
    serviceStripCtaPrimary: it
      ? "Vedi assistenza passaporto & Prenot@Mi"
      : "See passport & Prenot@Mi help",
    serviceStripCtaSecondary: it
      ? "Raccontaci il tuo caso"
      : "Tell us your situation",

    // Consulate coverage table
    consH: it
      ? "Quale consolato italiano copre la mia zona nel Regno Unito?"
      : "Which Italian consulate covers my area in the UK?",
    consSub: it
      ? "Tabella orientativa: fai sempre riferimento alle mappe ufficiali di competenza territoriale dei consolati."
      : "Indicative table: always check consulates’ official territorial competence maps.",
    consHeaders: it
      ? ["Dove vivi in UK", "Consolato di riferimento", "Note tipiche"]
      : ["Where you live in the UK", "Consulate", "Typical notes"],
    consRows: it
      ? [
          [
            "Londra e buona parte dell’Inghilterra sud-est",
            "Consolato Generale d’Italia a Londra",
            "Volumi altissimi; Prenot@Mi spesso molto pieno; controlla orari di rilascio slot.",
          ],
          [
            "Nord Inghilterra & Galles (alcune aree)",
            "Consolato d’Italia a Manchester",
            "Copre molte città universitarie; attenzione a dove cade il tuo CAP/postcode.",
          ],
          [
            "Scozia e Irlanda del Nord",
            "Consolato Generale d’Italia a Edimburgo",
            "Richieste da zone remote: valuta bene tempi di viaggio per il giorno dell’appuntamento.",
          ],
        ]
      : [
          [
            "London and much of South-East England",
            "Consulate General of Italy in London",
            "Very high volume; Prenot@Mi often packed; watch patterns for new slots.",
          ],
          [
            "Northern England & parts of Wales",
            "Italian Consulate in Manchester",
            "Covers many university cities; postcode can change which consulate you use.",
          ],
          [
            "Scotland and Northern Ireland",
            "Consulate General of Italy in Edinburgh",
            "Remote areas mean long travel times: plan carefully for appointment day.",
          ],
        ],
    consNote: it
      ? "Verifica sempre sul sito del tuo consolato se il tuo comune/postcode rientra nella loro competenza: può cambiare nel tempo."
      : "Always double-check on your consulate’s website if your town/postcode is within their area: it can change over time.",

    // Flows
    flowsH: it ? "Tre scenari Prenot@Mi che vediamo continuamente" : "Three Prenot@Mi scenarios we see all the time",
    flowsSub: it
      ? "Trova il tuo scenario: la strategia cambia a seconda di dove sei nel percorso."
      : "Find your scenario: the strategy changes depending on where you are.",
    flows: it
      ? [
          {
            tag: "Scenario A",
            h: "Devo creare account e capire cosa succede",
            p: "Non hai mai usato Prenot@Mi o non ricordi se hai un account.",
            bullets: [
              "Capire se esiste già un account con la tua email",
              "Creare profilo coerente con AIRE/FAST IT",
              "Verificare che dati e documenti combacino prima di cercare slot",
            ],
          },
          {
            tag: "Scenario B",
            h: "Account ok, ma non vedo appuntamenti",
            p: "Vedi solo “nessuna disponibilità” da settimane o mesi.",
            bullets: [
              "Capire quando il consolato rilascia gli slot di solito",
              "Evitare refresh compulsivi che non aiutano",
              "Mettere in ordine AIRE/FAST IT per non perdere l’occasione quando appare uno slot",
            ],
          },
          {
            tag: "Scenario C",
            h: "Ho un appuntamento e devo arrivare pronto",
            p: "Hai finalmente una data per passaporto/CIE/altro servizio.",
            bullets: [
              "Lista dei documenti obbligatori + copie",
              "Foto conformi agli standard chiesti dal consolato",
              "Piano B se manca qualcosa (autocertificazioni, deleghe, ecc.)",
            ],
          },
        ]
      : [
          {
            tag: "Scenario A",
            h: "Need to create an account and understand the system",
            p: "You’ve never used Prenot@Mi or don’t remember if you have an account.",
            bullets: [
              "Check if an account already exists with your email",
              "Create a profile consistent with AIRE/FAST IT",
              "Make sure data and documents align before hunting for slots",
            ],
          },
          {
            tag: "Scenario B",
            h: "Account works, but no appointments appear",
            p: "You see only “no availability” for weeks or months.",
            bullets: [
              "Learn when your consulate typically releases slots",
              "Avoid compulsive refreshing that doesn’t help",
              "Put AIRE/FAST IT in order so you don’t waste the slot when it appears",
            ],
          },
          {
            tag: "Scenario C",
            h: "Appointment booked: now prepare properly",
            p: "You finally have a date for passport/CIE/another service.",
            bullets: [
              "List of required documents + copies",
              "Photos that pass the consulate’s standards",
              "Backup plan if something is missing (self-declarations, authorisations, etc.)",
            ],
          },
        ],

    // How-to: booking process
    methodH: it
      ? "Da zero ad appuntamento Prenot@Mi — 7 passi essenziali"
      : "From zero to Prenot@Mi appointment — 7 key steps",
    troubleshootLink: it ? "Vai ai problemi comuni ↓" : "Jump to problems ↓",
    methodSteps: it
      ? [
          [
            "1) Controlla AIRE/FAST IT.",
            "Se l’anagrafe non è in ordine, il consolato può rifiutare la pratica anche con appuntamento.",
          ],
          [
            "2) Crea o recupera l’account Prenot@Mi.",
            "Non aprire 3 account diversi: usa un’unica email stabile e password sicura.",
          ],
          [
            "3) Compila bene i dati di profilo.",
            "Nomi, indirizzo, contatti e servizio selezionato devono combaciare con i documenti.",
          ],
          [
            "4) Studia le istruzioni del tuo consolato.",
            "Ogni sede ha regole leggermente diverse: leggi la pagina specifica per il tuo servizio (passaporto, CIE, visti…).",
          ],
          [
            "5) Osserva i ritmi di rilascio slot.",
            "Per qualche settimana, prendi nota di giorni/orari in cui compaiono cambiamenti.",
          ],
          [
            "6) Tieni pronti documenti e foto.",
            "Così, quando trovi uno slot, puoi confermare senza dover rimandare per mancanza di file.",
          ],
          [
            "7) Prenota e salva conferma.",
            "Scarica o stampa la ricevuta con data, ora e servizio: ti servirà il giorno dell’appuntamento.",
          ],
        ]
      : [
          [
            "1) Check AIRE/FAST IT.",
            "If your records are messy, the consulate can still refuse your case even with an appointment.",
          ],
          [
            "2) Create or recover your Prenot@Mi account.",
            "Don’t open 3 different accounts: use one stable email and a safe password.",
          ],
          [
            "3) Complete your profile carefully.",
            "Names, address, contacts and selected service must match your documents.",
          ],
          [
            "4) Read your consulate’s instructions.",
            "Each office has slightly different rules: read the page for your specific service (passport, CIE, visas…).",
          ],
          [
            "5) Watch the slot-release patterns.",
            "For a few weeks, note days/times when something changes in availability.",
          ],
          [
            "6) Prepare documents and photos.",
            "So when a slot appears you can confirm, instead of delaying because files aren’t ready.",
          ],
          [
            "7) Book and save the confirmation.",
            "Download or print the receipt with date, time and service; you’ll need it on appointment day.",
          ],
        ],
    safetyNote: it
      ? "Segui sempre le istruzioni ufficiali del tuo consolato. Questa guida è solo un supporto per orientarti meglio nel sistema Prenot@Mi."
      : "Always follow your consulate’s official instructions. This guide is just a support to help you navigate Prenot@Mi.",

    fridgeCta: it
      ? "Vuoi una versione stampabile di questi passi + spazio per annotare i tuoi tentativi?"
      : "Want a printable version of these steps + space to track your attempts?",
    fridgeBtn: it ? "Scarica la checklist" : "Download the checklist",

    // Problems matrix
    issuesH: it
      ? "Problemi frequenti Prenot@Mi (e mosse realistiche)"
      : "Common Prenot@Mi issues (and realistic moves)",
    issuesHeaders: it
      ? ["Cosa vedi", "Possibile motivo", "Cosa puoi fare"]
      : ["What you see", "Likely reason", "What you can do"],
    issuesRows: it
      ? [
          [
            "“Nessuna disponibilità” per settimane",
            "Domanda altissima; il consolato rilascia pochi slot alla volta.",
            "Osserva orari/ giorni di apertura; prepara documenti in anticipo per confermare al volo.",
          ],
          [
            "Errori di login o account bloccato",
            "Tentativi multipli da dispositivi/luoghi diversi o credenziali condivise.",
            "Riduci gli accessi, usa sempre gli stessi device; segui la procedura ufficiale di sblocco.",
          ],
          [
            "Servizio scelto male (es. visti invece di passaporto)",
            "Hai prenotato “la cosa sbagliata” sperando sistemino allo sportello.",
            "In generale, non funziona: meglio cancellare e rifare con il servizio corretto indicato dal consolato.",
          ],
          [
            "Messaggi generici senza spiegazioni",
            "Sistema vecchio, testi poco chiari; non sempre indica il vero problema.",
            "Rileggi istruzioni del consolato, confronta con forum/gruppi e, se serve, chiedi supporto mirato.",
          ],
        ]
      : [
          [
            "“No availability” for weeks",
            "Very high demand; consulate releases small batches of slots.",
            "Watch opening patterns; keep paperwork ready so you can confirm instantly.",
          ],
          [
            "Login errors or blocked account",
            "Multiple attempts from different devices/locations or shared credentials.",
            "Limit logins, stick to a couple of devices; follow the official unlock/recovery process.",
          ],
          [
            "Wrong service selected (e.g. visas instead of passport)",
            "You booked “something” hoping they’ll fix it at the desk.",
            "Usually doesn’t work: better cancel and book the exact service stated on the consulate website.",
          ],
          [
            "Generic error messages",
            "Old system, unclear wording; often doesn’t point to the real issue.",
            "Re-read consulate instructions, compare with community experiences and, if needed, get targeted support.",
          ],
        ],
    issuesTip: it
      ? "Quando Prenot@Mi sembra impazzito, chiediti sempre: “Potrebbe essere AIRE/FAST IT o i miei documenti il vero collo di bottiglia?”."
      : "When Prenot@Mi seems broken, ask: “Could AIRE/FAST IT or my documents be the real bottleneck?”",

    // Appointment-day checklist
    checkH: it ? "Giorno dell’appuntamento: checklist essenziale" : "Appointment day: essential checklist",
    checkSub: it
      ? "Ogni consolato ha la sua lista ufficiale. Qui trovi una sintesi pratica di cosa di solito fa la differenza."
      : "Each consulate has its official list. This is a practical summary of what usually makes or breaks the day.",
    checkHeaders: it
      ? ["Elemento", "Perché conta", "Se manca di solito succede…"]
      : ["Item", "Why it matters", "If missing, they often…"],
    checkRows: it
      ? [
          [
            "Documento di identità valido (passaporto/CIE)",
            "Serve per identificarti e, a volte, per verificare dati AIRE.",
            "Possono rimandare o limitare cosa possono fare quel giorno.",
          ],
          [
            "Fototessere conformi agli standard",
            "Non tutte le cabine UK seguono gli standard italiani.",
            "Possono rifiutare le foto e chiederti di rifarle, rimandando la pratica.",
          ],
          [
            "Prove di residenza in UK aggiornate",
            "Molti servizi richiedono che tu dimostri dove vivi realmente.",
            "Possono chiedere integrazioni o non proseguire con la richiesta.",
          ],
          [
            "Stampe delle email/conferme Prenot@Mi",
            "Aiuta a dimostrare la correttezza del servizio, data e ora.",
            "Fanno più domande, perdete tempo a cercare i dati nel sistema.",
          ],
          [
            "Mezzi di pagamento accettati",
            "Non tutti accettano cash/card allo stesso modo.",
            "Potresti dover tornare un’altra volta solo per pagare.",
          ],
        ]
      : [
          [
            "Valid ID document (passport/CIE)",
            "Needed to identify you and sometimes confirm AIRE details.",
            "May postpone or limit what they can do that day.",
          ],
          [
            "Photos that meet consulate standards",
            "Not all UK booths follow Italian photo rules.",
            "Can reject photos and ask you to redo them, delaying your case.",
          ],
          [
            "Updated proof of UK residence",
            "Many services require proof of where you actually live.",
            "May ask for extra documents or stop the process.",
          ],
          [
            "Printed emails/Prenot@Mi confirmations",
            "Helps show the correct service, date and time.",
            "They ask more questions and waste time digging in the system.",
          ],
          [
            "Accepted payment method ready",
            "Not all accept cash/card in the same way.",
            "You might need to come back another day just to pay.",
          ],
        ],
    checkNote: it
      ? "Prima di partire, controlla sempre l’ultima versione della checklist ufficiale sul sito del tuo consolato."
      : "Before travelling, always check the latest official checklist on your consulate’s website.",

    // Service kit
    kitH: it ? "Supporto Prenot@Mi & appuntamenti consolari con Resinaro" : "Prenot@Mi & consular appointment support with Resinaro",
    kitSub: it
      ? "Per chi non vuole “puntare a caso” il sistema, ma arrivare preparato e con un piano chiaro."
      : "For people who don’t want to gamble with the system, but arrive prepared and with a clear plan.",
    backToHow: it ? "Torna ai passi Prenot@Mi ↑" : "Back to Prenot@Mi steps ↑",
    kitCols: it
      ? {
          leftH: "Cosa possiamo fare insieme",
          leftItems: [
            "Mappare la tua situazione (AIRE, FAST IT, tipo di servizio, tempi)",
            "Suggerire finestre di tentativo più sensate in base al consolato",
            "Preparare documenti, prove di residenza e foto prima che trovi lo slot",
            "Rivedere insieme email di conferma e richieste del consolato",
            "Darti una checklist personalizzata per il giorno dell’appuntamento",
          ],
          rightH: "Cosa rimane sempre sotto il tuo controllo",
          rightItems: [
            "Accedere a Prenot@Mi solo con i tuoi dati",
            "Decidere quali informazioni condividere con supporti esterni",
            "Firmare dichiarazioni/atti davanti all’autorità competente",
            "Scegliere se affidarti a consulenti fiscali/legali per gli aspetti più delicati",
          ],
        }
      : {
          leftH: "What we can do together",
          leftItems: [
            "Map your situation (AIRE, FAST IT, service type, timelines)",
            "Suggest smarter attempt windows based on your consulate",
            "Prepare documents, residence proofs and photos before a slot appears",
            "Review confirmation emails and consulate requests with you",
            "Give you a personalised checklist for appointment day",
          ],
          rightH: "What always stays under your control",
          rightItems: [
            "Accessing Prenot@Mi only with your own credentials",
            "Choosing which information to share with third-party support",
            "Signing any declarations/acts in front of the competent authority",
            "Deciding if/when to hire tax/legal professionals for sensitive topics",
          ],
        },
    oneToOne: it
      ? "Vuoi che qualcuno metta ordine nella tua situazione e ti dica, nero su bianco, quali sono i prossimi 3 passi?"
      : "Want someone to put your situation in order and tell you, clearly, your next 3 steps?",
    getHelpBtn: it ? "Raccontaci il tuo caso" : "Tell us your case",
    seeServicesBtn: it ? "Vedi tutti i servizi" : "See all services",
    serviceNote: it
      ? "Resinaro non può promettere appuntamenti “garantiti” o “saltare la fila”. Possiamo però aiutarti a usare meglio gli strumenti pubblici già esistenti."
      : "Resinaro cannot promise “guaranteed appointments” or “queue jumping”. We can help you use public tools more effectively.",

    // FAQ
    faqH: it ? "FAQ Prenot@Mi & consolati dal Regno Unito" : "Prenot@Mi & consulate FAQ from the UK",
    faqs: it
      ? [
          [
            "È legale farsi aiutare con Prenot@Mi?",
            "Sì, puoi farti aiutare a capire il sistema o a preparare documenti. Quello che non è accettabile è vendere appuntamenti ottenuti violando le regole o i termini d’uso del portale.",
          ],
          [
            "Posso usare qualunque consolato in UK?",
            "No, in genere devi rivolgerti al consolato competente per il tuo indirizzo AIRE/residenza. I consolati lo spiegano chiaramente sui loro siti.",
          ],
          [
            "E se ho urgenza (lutti, salute, motivi seri)?",
            "Molti consolati prevedono percorsi diversi per comprovate urgenze. Di solito non passano da Prenot@Mi standard: verifica le indicazioni specifiche del tuo consolato.",
          ],
          [
            "Posso avere due appuntamenti per sicurezza?",
            "In genere no: occupare slot che non userai danneggia tutti. Segui sempre le regole indicate dal consolato sul numero di appuntamenti possibili.",
          ],
        ]
      : [
          [
            "Is it legal to get help with Prenot@Mi?",
            "Yes, you can get help understanding the system or preparing documents. What’s not acceptable is selling appointments obtained by breaking the rules or the portal’s terms of use.",
          ],
          [
            "Can I use any Italian consulate in the UK?",
            "Usually no: you must use the consulate that covers your registered address (AIRE/residence). Consulates explain this clearly on their websites.",
          ],
          [
            "What if I have a genuine emergency?",
            "Many consulates have separate routes for proven emergencies (bereavement, health, serious reasons). These often don’t go through standard Prenot@Mi bookings; check your consulate’s guidance.",
          ],
          [
            "Can I hold two appointments just in case?",
            "Generally no: blocking slots you won’t use harms everyone. Follow consulate rules on how many bookings you can have.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Guide correlate" : "Related guides",
    relatedItems: it
      ? [
          {
            href: "/community/passport-id-uk",
            label: "Passaporto e Carta d’Identità italiana nel Regno Unito (2025): guida completa",
          },
          {
            href: "/community/aire-uk",
            label: "AIRE dal Regno Unito (2025): iscrizione, aggiornamenti e FAST IT",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Prova di indirizzo UK senza bollette a tuo nome",
          },
        ]
      : [
          {
            href: "/community/passport-id-uk",
            label: "Italian Passport & ID Card in the UK (2025): complete guide",
          },
          {
            href: "/community/aire-uk",
            label: "AIRE from the UK (2025): registration, updates and FAST IT",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Proof of UK address without bills in your name",
          },
        ],
    printableH: it
      ? "Checklist Prenot@Mi stampabile"
      : "Printable Prenot@Mi checklist",
    printableP: it
      ? "Una pagina con i passi chiave, spazio per annotare tentativi, date e note sui documenti."
      : "A one-page sheet with key steps, space to log attempts, dates and document notes.",
    printableBtn: it ? "Inviami il PDF" : "Send me the PDF",
    askQ: it
      ? "Hai un caso particolare (figli, urgenze, doppia cittadinanza)?"
      : "Got a specific situation (children, emergencies, dual citizenship)?",
    contactBtn: it ? "Scrivi a Resinaro" : "Write to Resinaro",
    affNoteEnd: it
      ? "Nota: questa guida è informativa e non sostituisce le comunicazioni ufficiali dei consolati o delle autorità italiane."
      : "Note: this guide is informational and does not replace official communications from consulates or Italian authorities.",
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
    headline: "Prenot@Mi & Italian Consular Appointments UK (2025) Guide",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.resinaro.com/community/prenotami-uk-guide",
    },
    inLanguage: copy.inLang,
    articleSection: ["Bureaucracy", "Consular", "Prenotami"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Community",
        item: "https://www.resinaro.com/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Prenot@Mi & appuntamenti UK (2025)"
            : "Prenot@Mi & consular appointments UK (2025)",
        item: "https://www.resinaro.com/community/prenotami-uk-guide",
      },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#summary", "#how-to"],
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come prenotare un appuntamento consolare con Prenot@Mi dal Regno Unito"
        : "How to book an Italian consular appointment with Prenot@Mi from the UK",
    totalTime: "PT30M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Documento di identità italiano" : "Italian ID document",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Dati AIRE/FAST IT aggiornati" : "Updated AIRE/FAST IT data",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Prenot@Mi portal",
      },
    ],
    step:
      locale === "it"
        ? [
            {
              "@type": "HowToStep",
              name: "Accedi o registra l’account Prenot@Mi",
              text: "Usa una sola email stabile; compila i dati come su AIRE/FAST IT.",
            },
            {
              "@type": "HowToStep",
              name: "Seleziona il consolato competente e il servizio",
              text: "Segui le indicazioni territoriali del consolato; scegli il servizio corretto (es. passaporto).",
            },
            {
              "@type": "HowToStep",
              name: "Cerca uno slot disponibile",
              text: "Controlla nei momenti indicati dal consolato; non esagerare con i tentativi.",
            },
            {
              "@type": "HowToStep",
              name: "Conferma e salva la prenotazione",
              text: "Scarica o stampa la conferma con data, ora e luogo dell’appuntamento.",
            },
          ]
        : [
            {
              "@type": "HowToStep",
              name: "Log into or create your Prenot@Mi account",
              text: "Use one stable email; match data to your AIRE/FAST IT records.",
            },
            {
              "@type": "HowToStep",
              name: "Choose the right consulate and service",
              text: "Follow consulate territorial rules; pick the correct service (e.g. passport).",
            },
            {
              "@type": "HowToStep",
              name: "Look for an available slot",
              text: "Check at times suggested by the consulate; avoid excessive retries.",
            },
            {
              "@type": "HowToStep",
              name: "Confirm and save the booking",
              text: "Download or print the confirmation with date, time and location.",
            },
          ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      locale === "it"
        ? [
            {
              "@type": "Question",
              name: "Posso farmi aiutare con Prenot@Mi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Puoi farti aiutare a capire il portale e a preparare documenti, ma gli appuntamenti devono rispettare le regole e i termini di utilizzo del servizio.",
              },
            },
            {
              "@type": "Question",
              name: "Cosa succede se perdo l’appuntamento?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Di solito devi prenotare di nuovo e torni nella stessa situazione iniziale; controlla sempre le regole specifiche del tuo consolato.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "Can I get help with Prenot@Mi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can get help understanding the portal and preparing documents, but bookings must respect the rules and terms of use of the service.",
              },
            },
            {
              "@type": "Question",
              name: "What happens if I miss my appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You usually need to book again and return to the initial situation; always check your consulate’s specific rules.",
              },
            },
          ],
  };

  const howToAnchor = "#how-to";
  const kitAnchor = "#kit";

  // ---------- Page ----------
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/prenotami-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5" />
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
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/80 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1.3fr_auto]">
              <div>
                <p className="text-sm text-gray-900">{copy.ctaCopy}</p>
                <p className="text-xs text-gray-600">{copy.ctaSub}</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                >
                  {copy.ctaBtnPrimary}
                </Link>
                <Link
                  href="/services/passport"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-100 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                >
                  {copy.ctaBtnSecondary}
                </Link>
              </div>
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

        {/* Fade */}
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
            <p className="text-lg font-semibold text-emerald-800">{copy.tldrH}</p>
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

      {/* ===== Service strip: help + pricing + payments + proof images ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
            {/* Text + pricing + payments */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.serviceStripH}
              </h2>
              <p className="mt-2 text-sm text-gray-800">{copy.serviceStripP}</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {locale === "it" ? "Cosa facciamo" : "What we actually do"}
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.serviceStripList.map((x: string) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {copy.serviceStripPriceTitle}
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {copy.serviceStripPriceBullets.map((x: string) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[11px] text-gray-600">
                    {copy.serviceStripPriceNote}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-900">
                  {copy.serviceStripPaymentsTitle}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-emerald-900">
                  {copy.serviceStripPaymentsText}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/services/passport"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {copy.serviceStripCtaPrimary}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                >
                  {copy.serviceStripCtaSecondary}
                </Link>
              </div>
            </div>

            {/* Proof images from passport page */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">
                {locale === "it"
                  ? "Esempi recenti (Prenot@Mi Manchester)"
                  : "Recent real examples (Prenot@Mi Manchester)"}
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <figure className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src="/proof/2026-02-manchester-appointment-01.webp"
                      alt={
                        locale === "it"
                          ? "Appuntamento prenotato — Manchester — Febbraio 2026"
                          : "Booked appointment — Manchester — February 2026"
                      }
                      fill
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-2 text-[11px] text-neutral-700 text-center">
                    {locale === "it"
                      ? "Data e ora confermate (nascoste nello screenshot)."
                      : "Date & time confirmed (hidden in screenshot)."}
                  </figcaption>
                </figure>

                <figure className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src="/proof/wl-2025-11-10-01.webp"
                      alt={
                        locale === "it"
                          ? "Lista d’attesa confermata — Manchester — 10 Nov 2025"
                          : "Waiting list secured — Manchester — 10 Nov 2025"
                      }
                      fill
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-2 text-[11px] text-neutral-700 text-center">
                    {locale === "it"
                      ? "Accesso gestito con credenziali del cliente."
                      : "Access managed using the client’s own login details."}
                  </figcaption>
                </figure>
              </div>

              <figure className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                <div className="relative h-40 w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src="/proof/wl-2025-11-12-02.webp"
                    alt={
                      locale === "it"
                        ? "Lista d’attesa confermata — Manchester — 12 Nov 2025"
                        : "Waiting list secured — Manchester — 12 Nov 2025"
                    }
                    fill
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-[11px] text-neutral-700 text-center">
                  {locale === "it"
                    ? "Gli esempi sono reali; dati sensibili oscurati."
                    : "Real examples; sensitive data blurred for privacy."}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Consulate coverage table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.consH}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.consSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.consHeaders.map((h) => (
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
                {copy.consRows.map((row: string[], i: number) => (
                  <tr
                    key={i}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 text-gray-800 align-top"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-600">{copy.consNote}</p>
        </div>
      </section>

      {/* ===== Scenarios cards ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.flowsH}
              </h2>
              <p className="mt-1 text-sm text-gray-700">{copy.flowsSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {locale === "it"
                ? "Vai ai passi Prenot@Mi →"
                : "Jump to Prenot@Mi steps →"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.flows.map(
              (x: {
                tag: string;
                h: string;
                p: string;
                bullets: string[];
              }) => (
                <div
                  key={x.h}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    {x.tag}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">
                    {x.h}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== How-To + Problems ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* How-To */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.methodH}
              </h2>
              <Link
                href="#prenotami-problems"
                className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
              >
                {copy.troubleshootLink}
              </Link>
            </div>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              {copy.methodSteps.map(
                ([bold, rest]: string[], idx: number) => (
                  <li className="mb-3" key={idx}>
                    <strong>{bold}</strong> {rest}
                  </li>
                )
              )}
            </ol>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">{copy.safetyNote}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-emerald-900">{copy.fridgeCta}</p>
                <Link
                  href={kitAnchor}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {copy.fridgeBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* Problems matrix */}
          <div
            id="prenotami-problems"
            className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.issuesH}
            </h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {copy.issuesHeaders.map((h: string) => (
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
                  {copy.issuesRows.map((row: string[], i: number) => (
                    <tr
                      key={i}
                      className={i % 2 ? "bg-white" : "bg-gray-50"}
                    >
                      {row.map((c, j) => (
                        <td
                          key={j}
                          className="p-3 text-gray-800 align-top"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-600">{copy.issuesTip}</p>
          </div>
        </div>
      </section>

      {/* ===== Appointment-day checklist ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.checkH}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.checkSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.checkHeaders.map((h: string) => (
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
                {copy.checkRows.map((row: string[], i: number) => (
                  <tr
                    key={i}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 text-gray-800 align-top"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-600">{copy.checkNote}</p>
        </div>
      </section>

      {/* ===== Service kit / conversion ===== */}
      <section id={kitAnchor.slice(1)} className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.kitH}
              </h2>
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
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitCols.leftH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  {copy.kitCols.leftItems.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {copy.kitCols.rightH}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                  {copy.kitCols.rightItems.map((x: string) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-emerald-900">{copy.oneToOne}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    {copy.getHelpBtn}
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                  >
                    {copy.seeServicesBtn}
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                <p className="text-xs text-emerald-900/90">{copy.serviceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.faqH}</h2>
          {copy.faqs.map((faq) => {
            const [q, a] = faq as [string, string];
            return (
              <details
                key={q}
                className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">
                  {q}
                </summary>
                <div className="mt-2 text-sm text-gray-700">{a}</div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ===== Related + footer CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* Related guides */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{copy.relatedH}</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
              {copy.relatedItems.map(
                (item: { href: string; label: string }) => (
                  <li key={item.href}>
                    <Link
                      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.affNoteEnd}</p>
          </div>

          {/* Printable checklist + contact */}
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
                className="h-11 w-full rounded-xl border-emerald-200 border bg-white px-4 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400 sm:max-w-sm"
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
