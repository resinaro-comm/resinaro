// src/app/[locale]/community/aire-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "AIRE from the UK (2025): Registration & FAST IT Guide",
  description:
    "2025 guide for Italians in the UK: how to register or update AIRE via FAST IT, transcribe UK records, fix errors, and understand what AIRE does (and doesn’t) change.",
  alternates: { canonical: "/community/aire-uk" },
  openGraph: {
    title: "AIRE from the UK (2025): Registration & FAST IT Guide",
    description:
      "Step-by-step guide to AIRE from the UK: registration, address updates, family changes, UK certificates, FAST IT errors and realistic timelines.",
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
      ? "Schermo con FAST IT aperto e documenti italiani e britannici sul tavolo"
      : "Laptop showing FAST IT with Italian and UK documents on a desk",
    heroBadge: it ? "AIRE • FAST IT • Consolati UK" : "AIRE • FAST IT • UK Consulates",
    heroTitleA: it
      ? "AIRE dal Regno Unito"
      : "AIRE from the UK",
    heroTitleB: it ? "(2025): iscrizione, aggiornamenti & problemi" : "(2025): registration, updates & issues",
    heroLead: it
      ? "Una guida unica per capire se devi iscriverti ad AIRE, come farlo da FAST IT, come aggiornare indirizzo/famiglia e cosa fare quando il sistema si blocca."
      : "One clear guide to understand if you need AIRE, how to register from the UK, update address/family via FAST IT, and what to do when the system blocks you.",
    ctaCopy: it
      ? "Se vuoi, possiamo controllare la tua situazione AIRE/FAST IT, suggerire l’ordine dei passi e segnalare errori prima che blocchino passaporto o CIE."
      : "If you’d like, we can review your AIRE/FAST IT situation, suggest the right order of steps, and flag issues before they block your passport or CIE.",
    ctaSub: it
      ? "Servizio privato e indipendente. Non siamo un consolato."
      : "Private, independent support. We are not a consulate.",
    ctaBtnPrimary: it ? "Chiedi un check AIRE" : "Request an AIRE check",
    ctaBtnSecondary: it ? "Vedi servizi burocrazia" : "View bureaucracy services",
    pub: it ? "Pubblicato: 16 Nov 2025" : "Published: 16 Nov 2025",
    upd: it ? "Aggiornato: 16 Nov 2025" : "Updated: 16 Nov 2025",
    read: it ? "~16 min lettura" : "~16 min read",

    // USPs
    usp1H: it ? "Fatta per chi vive davvero in UK" : "Built for people actually in the UK",
    usp1P: it
      ? "Affitti condivisi, contratti corti, datori di lavoro UK: esempi reali, non teoria da manuale."
      : "House shares, short lets, UK employers: real scenarios, not abstract rules.",
    usp2H: it ? "Allineata alle fonti ufficiali" : "Aligned with official sources",
    usp2P: it
      ? "Si appoggia a Ministero degli Affari Esteri, FAST IT e pagine dei consolati. Con link diretti."
      : "Based on the Italian MFA, FAST IT and consular pages, with direct links.",
    usp3H: it ? "Pensata per il dopo: passaporto, CIE, figli" : "Designed for what comes after",
    usp3P: it
      ? "L’obiettivo non è solo “spuntare AIRE”, ma sbloccare passaporto, CIE, trascrizioni e documenti per la famiglia."
      : "The goal isn’t just “tick AIRE”, but unlocking passports, CIE, transcriptions and family paperwork.",

    // TLDR
    tldrH: it
      ? "Riassunto rapido — tre flussi AIRE tipici dal Regno Unito"
      : "TL;DR — three typical AIRE flows from the UK",
    tldr1: it ? "1) Appena arrivato in UK" : "1) Just arrived in the UK",
    tldr1P: it
      ? "Hai trasferito la residenza in UK e vivi qui “stabilmente”? In genere devi iscriverti ad AIRE tramite FAST IT."
      : "Have you moved your residence to the UK and live here “stably”? You generally need to register with AIRE using FAST IT.",
    tldr2: it ? "2) Già iscritto ma tutto è cambiato" : "2) Already in AIRE but life changed",
    tldr2P: it
      ? "Hai cambiato casa, partner, figli o Paese dentro la circoscrizione? Devi aggiornare indirizzo, stato civile e famiglia."
      : "Changed home, partner, children or country within the jurisdiction? You should update address, marital status and dependants.",
    tldr3: it ? "3) Atti UK da trascrivere in Italia" : "3) UK records to be transcribed in Italy",
    tldr3P: it
      ? "Nascite, matrimoni o divorzi avvenuti nel Regno Unito vanno trascritti nei registri italiani tramite il consolato."
      : "Births, marriages or divorces that happened in the UK should be transcribed in Italian records via the consulate.",
    miniCtaP: it
      ? "Vuoi la checklist AIRE/FAST IT (PDF) con i documenti base e l’ordine dei passi?"
      : "Want the AIRE/FAST IT checklist (PDF) with core documents and the right order of steps?",
    miniCtaBtn: it ? "Inviami il PDF" : "Send me the PDF",

    // Key takeaways
    take1H: it ? "AIRE non è una tassa extra" : "AIRE is not an extra tax",
    take1P: it
      ? "È un registro anagrafico, non un’imposta. Non decide da solo dove paghi le tasse (valgono convenzioni e norme fiscali)."
      : "It’s a population registry, not a tax. It doesn’t by itself decide where you pay tax (treaties and tax rules do).",
    take2H: it ? "Molti problemi nascono da indirizzi incoerenti" : "Most problems come from mismatched addresses",
    take2P: it
      ? "Se indirizzo in AIRE, contratto UK e prenotazioni non combaciano, i consolati spesso chiedono chiarimenti o bloccano pratiche."
      : "If your AIRE address, UK tenancy and bookings don’t match, consulates often ask questions or pause your applications.",
    take3H: it ? "Sistemare AIRE sblocca passaporto, CIE e figli" : "Fixing AIRE unlocks passports, CIE and kids’ documents",
    take3P: it
      ? "Molti “problemi passaporto” sono in realtà “problemi AIRE”. Mettere ordine qui evita anni di frustrazione."
      : "Many “passport issues” are really “AIRE issues”. Cleaning this up avoids years of frustration.",

    // Who needs AIRE table
    needH: it ? "Devo davvero iscrivermi ad AIRE?" : "Do I actually need to register with AIRE?",
    needSub: it
      ? "Qui non diamo pareri legali o fiscali: riassumiamo solo le logiche tipiche per gli italiani all’estero."
      : "This isn’t legal or tax advice: it summarises typical AIRE scenarios for Italians abroad.",
    needHeaders: it
      ? ["Situazione", "Tendenza AIRE", "Cosa fare in pratica"]
      : ["Situation", "AIRE tendency", "What to do in practice"],
    needRows: it
      ? [
          [
            "Ti sei trasferito stabilmente in UK (residenza principale qui)",
            "In genere SÌ: iscrizione AIRE dal momento in cui non sei più residente in Italia.",
            "Verifica tempistiche sul sito del tuo comune italiano e valuta AIRE entro i tempi indicati.",
          ],
          [
            "Vai/torni spesso ma resti residente in Italia",
            "In genere NO: se residenza rimane ufficialmente in Italia, potresti non dover iscriverti.",
            "Controlla sempre col tuo comune/CAF/professionista fiscale se hai dubbi.",
          ],
          [
            "Vivi in UK da anni, ma non ti sei mai iscritto",
            "Probabile SÌ: molte pratiche consolari ti chiederanno di sistemare AIRE prima.",
            "Valuta di regolarizzare AIRE; prepara documenti UK che dimostrino residenza nel tempo.",
          ],
        ]
      : [
          [
            "You moved your main residence to the UK",
            "Generally YES: AIRE registration once you’re no longer resident in Italy.",
            "Check your Italian town hall’s guidance and consider registering within the suggested timeframe.",
          ],
          [
            "You visit the UK but your official residence is still in Italy",
            "Generally NO: if you remain officially resident in Italy, AIRE may not apply.",
            "Always confirm with your comune / a tax advisor if in doubt.",
          ],
          [
            "You’ve lived in the UK for years, never registered",
            "Likely YES: consular services will often ask you to regularise AIRE first.",
            "Consider regularising AIRE; collect UK documents proving residence over time.",
          ],
        ],
    needNote: it
      ? "Dubbi su tasse, INPS o sanità? Qui non diamo consulenza fiscale/legale: confrontati sempre con professionisti o fonti ufficiali."
      : "Unsure about tax, INPS or healthcare? This guide is not legal/tax advice: always check with professionals or official sources.",

    // Flows
    flowsH: it ? "Tre flussi AIRE dal Regno Unito" : "Three AIRE flows from the UK",
    flowsSub: it
      ? "Non tutti devono fare tutto: identifica il flusso che ti rappresenta di più."
      : "You may not need all three: pick the flow that matches you best.",
    flows: it
      ? [
          {
            tag: "Flusso 1",
            h: "Nuova iscrizione AIRE",
            p: "Per chi si trasferisce dall’Italia al Regno Unito.",
            bullets: [
              "Uscita effettiva dall’Italia verso il Regno Unito",
              "Residenza abituale in UK, non solo viaggio breve",
              "Ti serve per accedere ai servizi consolari ordinari",
            ],
          },
          {
            tag: "Flusso 2",
            h: "Aggiornare ciò che non è più vero",
            p: "Per chi è già iscritto ma ha cambiato indirizzo, famiglia, Paese.",
            bullets: [
              "Nuovo indirizzo UK o nuovo Paese nella stessa circoscrizione",
              "Matrimonio/divorzio/separazione",
              "Nascita di figli da aggiungere al nucleo",
            ],
          },
          {
            tag: "Flusso 3",
            h: "Trascrivere eventi di vita in UK",
            p: "Per chi ha certificati britannici da riconoscere in Italia.",
            bullets: [
              "Nascita, matrimonio, unione civile, divorzio avvenuti in UK",
              "Richiesta di certificati completi + apostille",
              "Eventuale traduzione da allegare alla pratica",
            ],
          },
        ]
      : [
          {
            tag: "Flow 1",
            h: "New AIRE registration",
            p: "For those moving their main residence from Italy to the UK.",
            bullets: [
              "Actual move from Italy to the UK",
              "Habitual residence in the UK, not just a short stay",
              "Needed for standard consular services later on",
            ],
          },
          {
            tag: "Flow 2",
            h: "Updating what’s no longer true",
            p: "For people already in AIRE but with changes to address, family or country.",
            bullets: [
              "New UK address or new country within the same consular area",
              "Marriage/divorce/separation",
              "Birth of children to add to your household record",
            ],
          },
          {
            tag: "Flow 3",
            h: "Transcribing UK life events",
            p: "For UK certificates that must be recognised in Italy.",
            bullets: [
              "Birth, marriage, civil partnership, divorce in the UK",
              "Full UK certificates + apostille",
              "Translations where required by the consulate",
            ],
          },
        ],

    // How-to registration
    methodH: it
      ? "Nuova iscrizione AIRE via FAST IT — 6 passi"
      : "New AIRE registration via FAST IT — 6 steps",
    troubleshootLink: it ? "Vai ai problemi frequenti ↓" : "Jump to common issues ↓",
    methodSteps: it
      ? [
          ["Crea o accedi al tuo account FAST IT.", "Assicurati che i dati anagrafici combacino con passaporto/CIE."],
          ["Compila la domanda di iscrizione AIRE.", "Inserisci indirizzo completo in UK, dati familiari e contatti."],
          ["Carica i documenti richiesti.", "Di solito: passaporto o CIE, prova di residenza UK, eventuali certificati di famiglia."],
          ["Controlla la qualità dei file.", "PDF leggibili, foto chiare; dimensione entro i limiti indicati dal portale."],
          ["Invia la domanda e salva il riepilogo.", "Scarica copia della richiesta inviata per riferimento futuro."],
          ["Aspetta la verifica del consolato e del comune.", "I tempi variano; monitora FAST IT ed eventuali richieste di integrazione."],
        ]
      : [
          ["Create or log into your FAST IT account.", "Make sure personal data matches your passport/CIE."],
          ["Fill in the AIRE registration form.", "Enter full UK address, family details and contact info."],
          ["Upload the requested documents.", "Usually: passport or CIE, UK proof of residence, and family certificates where needed."],
          ["Check file quality.", "Readable PDFs, clear photos; respect portal file-size limits."],
          ["Submit and save the summary.", "Download a copy of your submitted application for future reference."],
          ["Wait for consulate and town hall checks.", "Timelines vary; watch FAST IT and respond to any extra document requests."],
        ],
    safetyNote: it
      ? "Leggi sempre con attenzione le istruzioni del tuo consolato e del tuo comune di iscrizione: possono richiedere documenti leggermente diversi."
      : "Always read your consulate’s and town hall’s instructions carefully: they may ask for slightly different documents.",
    fridgeCta: it
      ? "Preferisci una checklist stampabile con i documenti e gli step principali?"
      : "Prefer a printable checklist with core documents and steps?",
    fridgeBtn: it ? "Scarica checklist AIRE" : "Download AIRE checklist",

    // FAST IT issues matrix
    issuesH: it ? "Problemi frequenti con FAST IT (e cosa puoi fare)" : "Common FAST IT issues (and what you can do)",
    issuesHeaders: it
      ? ["Messaggio / sintomo", "Possibile causa", "Mossa pratica"]
      : ["Message / symptom", "Likely cause", "Practical move"],
    issuesRows: it
      ? [
          [
            "Errore di form o campi rossi",
            "Dati non coerenti con anagrafe o campi obbligatori mancanti.",
            "Ricontrolla date, nomi, luoghi di nascita; compila tutti i campi richiesti.",
          ],
          [
            "Upload rifiutato / file troppo grande",
            "PDF troppo pesanti, formati non accettati, foto sfocate.",
            "Comprimi i PDF, scansiona in bianco e nero, usa formati indicati (es. PDF, JPG).",
          ],
          [
            "Domanda ferma da mesi senza news",
            "Carico di lavoro elevato o documenti non chiari in valutazione.",
            "Verifica stato su FAST IT, controlla spam email, valuta un contatto cortese al consolato.",
          ],
          [
            "Domanda respinta per indirizzo",
            "Prova di residenza non convincente o indirizzo incoerente con altri sistemi.",
            "Raccogli prove più solide (council tax, contratto, buste paga) e allinea tutti gli indirizzi.",
          ],
        ]
      : [
          [
            "Form error / red fields",
            "Data inconsistent with records or required fields missing.",
            "Double-check dates, names, places of birth; complete all mandatory fields.",
          ],
          [
            "Upload rejected / file too large",
            "PDFs too heavy, unsupported formats, blurry photos.",
            "Compress PDFs, scan in black & white, use accepted formats (e.g. PDF, JPG).",
          ],
          [
            "Application stuck for months",
            "Heavy workload or unclear documents under review.",
            "Check FAST IT status, monitor spam folder, consider a polite follow-up to the consulate.",
          ],
          [
            "Application refused due to address",
            "Proof of residence not convincing or address inconsistent with other systems.",
            "Gather stronger proofs (council tax, tenancy, payslips) and align all your addresses.",
          ],
        ],
    issuesTip: it
      ? "Se FAST IT rifiuta sempre gli stessi documenti, spesso il problema non è il portale ma il tipo di prova che stai caricando."
      : "If FAST IT keeps rejecting the same document, the issue is usually the type of proof you’re uploading, not just the portal.",

    // Edge cases (life situations)
    edgeH: it ? "Casi particolari AIRE che vediamo spesso" : "AIRE edge cases we see a lot",
    edgeHeaders: it
      ? ["Scenario", "Rischio tipico", "Strategia sensata"]
      : ["Scenario", "Typical risk", "Sensible strategy"],
    edgeRows: it
      ? [
          [
            "Affitti in stanza / house share senza bollette a tuo nome",
            "Prove di residenza deboli; il consolato può non riconoscere solo una lettera del proprietario.",
            "Combina più prove: busta paga, bank statement, lettera di lavoro, contratto di affitto anche se parziale.",
          ],
          [
            "Coppia mista (italiano + partner non-italiano) con figli",
            "Confusione su chi è riportato in AIRE e sui cognomi dei figli.",
            "Verifica come sono registrati i figli in Italia e in UK; organizza trascrizioni prima di passaporti/CIE.",
          ],
          [
            "Chi rientra spesso in Italia ma lavora full-time in UK",
            "Paura di “perdere” servizi in Italia o fare errori fiscali.",
            "Separa il tema AIRE dal tema fiscale: chiedi a un professionista prima di prendere decisioni basate su paura.",
          ],
          [
            "Chi ha cambiato più Paesi all’estero",
            "Anagrafe frammentata, registrazioni incomplete, consolato non allineato.",
            "Metti in fila i Paesi dove hai vissuto e in quali periodi; sistema un pezzo alla volta con documenti.",
          ],
        ]
      : [
          [
            "Room rental / house share without bills in your name",
            "Weak proof of residence; consulate may not accept a single landlord letter.",
            "Combine multiple proofs: payslips, bank statement, employer letter, even partial tenancy documents.",
          ],
          [
            "Mixed couple (Italian + non-Italian partner) with children",
            "Confusion over who appears in AIRE and children’s surnames.",
            "Check how the children are registered in Italy and the UK; handle transcriptions before passports/CIE.",
          ],
          [
            "Frequently back in Italy but working full-time in the UK",
            "Fear of “losing” Italian services or making tax mistakes.",
            "Separate AIRE from tax: talk to a professional before making decisions driven by fear.",
          ],
          [
            "Moved between several countries abroad",
            "Fragmented records, partial registrations, misaligned consulate.",
            "List countries and dates; regularise one step at a time with documents for each period.",
          ],
        ],

    // Service kit
    kitH: it ? "Supporto AIRE & FAST IT con Resinaro" : "AIRE & FAST IT support with Resinaro",
    kitSub: it
      ? "Per chi vuole arrivare al passaporto/CIE con le anagrafi già in ordine e senza sorprese."
      : "For people who want to get to passport/CIE with records already in order and fewer surprises.",
    backToHow: it ? "Torna alla procedura ↑" : "Back to process ↑",
    kitCols: it
      ? {
          leftH: "Cosa possiamo fare insieme",
          leftItems: [
            "Check completo della situazione AIRE/FAST IT e dei documenti UK disponibili",
            "Indicazioni sull’ordine dei passi (AIRE, trascrizioni, passaporto, CIE)",
            "Suggerimenti pratici su quali prove di residenza usare",
            "Aiuto nel leggere e capire richieste di integrazione del consolato",
            "Promemoria e mini-roadmap condivisa per non perdere pezzi",
          ],
          rightH: "Cosa rimane sempre a tuo nome",
          rightItems: [
            "Caricare documenti autentici e veritieri",
            "Firmare le dichiarazioni richieste dalle autorità",
            "Seguire le istruzioni ufficiali aggiornate",
            "Decidere, se serve, con supporto professionale su aspetti fiscali/legali",
          ],
        }
      : {
          leftH: "What we can do together",
          leftItems: [
            "Full review of your AIRE/FAST IT situation and available UK documents",
            "Guidance on the order of steps (AIRE, transcriptions, passport, CIE)",
            "Practical suggestions on which proof of residence to use",
            "Help reading and understanding consulate requests for extra documents",
            "Reminders and a shared mini-roadmap so nothing gets lost",
          ],
          rightH: "What always stays with you",
          rightItems: [
            "Uploading genuine, truthful documents",
            "Signing the declarations required by authorities",
            "Following the latest official instructions",
            "Choosing, if needed, professional advice for tax/legal questions",
          ],
        },
    oneToOne: it
      ? "Hai una storia AIRE complicata e vuoi solo sapere da dove ricominciare?"
      : "Have a messy AIRE history and just want to know where to restart?",
    getFreeAdvice: it ? "Scrivici il tuo caso" : "Tell us your case",
    exploreServices: it ? "Vedi servizi burocrazia" : "See bureaucracy services",
    serviceNote: it
      ? "Resinaro è un servizio di supporto privato: non sostituisce consolati, comuni o professionisti fiscali/legali."
      : "Resinaro is a private support service: it does not replace consulates, town halls or tax/legal professionals.",

    // FAQ
    faqH: it ? "FAQ AIRE dal Regno Unito" : "AIRE FAQ from the UK",
    faqs: it
      ? [
          [
            "AIRE significa che non posso più avere medico o servizi in Italia?",
            "AIRE è un registro anagrafico, non sanitario. L’iscrizione può avere effetti pratici su alcune prestazioni, ma il quadro dipende da leggi nazionali, regioni e accordi. Chiedi sempre chiarimenti alle ASL/INPS o a un patronato.",
          ],
          [
            "Se mi iscrivo ad AIRE, dove pago le tasse?",
            "AIRE da sola non decide dove sei fiscalmente residente. Contano giorni sul territorio, legami personali/economici, convenzioni contro le doppie imposizioni. Per questo servono professionisti fiscali, non solo blog.",
          ],
          [
            "Quanto tempo ci mette AIRE a essere registrata?",
            "Dipende da consolato e comune. Alcune pratiche si chiudono in poche settimane, altre richiedono mesi se mancano documenti o se il carico di lavoro è alto.",
          ],
          [
            "Posso fare passaporto mentre aspetto l’iscrizione AIRE?",
            "Spesso l’iscrizione/aggiornamento AIRE è il primo filtro. Alcuni consolati permettono percorsi paralleli, ma è comune che venga data priorità ad avere l’anagrafe in ordine.",
          ],
        ]
      : [
          [
            "Does AIRE mean I lose my doctor or services in Italy?",
            "AIRE is a population registry, not a health register. It can have knock-on effects on some services, but the rules depend on national law, regions and agreements. Always confirm with ASL/INPS or a patronato.",
          ],
          [
            "If I join AIRE, where do I pay tax?",
            "AIRE alone doesn’t decide tax residence. Days in each country, personal and economic ties, and double-tax treaties matter. That’s tax-professional territory, not blog territory.",
          ],
          [
            "How long does AIRE registration take?",
            "It depends on the consulate and town hall. Some cases close in weeks, others in months if documents are missing or workloads are high.",
          ],
          [
            "Can I get a passport while AIRE is still pending?",
            "Often AIRE registration/update is the first filter. Some consulates may work in parallel, but it’s common that they want the registry in order first.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Guide correlate" : "Related guides",
    relatedItems: it
      ? [
          {
            href: "/community/passport-id-uk",
            label: "Passaporto e CIE italiana nel Regno Unito (2025): guida completa",
          },
          {
            href: "/community/bureaucracy-guides/aire-registration-uk",
            label: "Iscrizione AIRE passo-passo dal Regno Unito",
          },
          {
            href: "/community/bureaucracy-guides/uk-birth-transcription",
            label: "Trascrivere una nascita avvenuta nel Regno Unito in Italia",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Prova di indirizzo UK senza bollette a tuo nome",
          },
        ]
      : [
          {
            href: "/community/passport-id-uk",
            label: "Italian Passport & CIE in the UK (2025): complete guide",
          },
          {
            href: "/community/bureaucracy-guides/aire-registration-uk",
            label: "Step-by-step AIRE registration from the UK",
          },
          {
            href: "/community/bureaucracy-guides/uk-birth-transcription",
            label: "Transcribing a UK birth certificate in Italy",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Proof of UK address without bills in your name",
          },
        ],
    printableH: it
      ? "Checklist AIRE & FAST IT stampabile"
      : "Printable AIRE & FAST IT checklist",
    printableP: it
      ? "Una pagina da tenere accanto ai documenti, con campi da spuntare per iscrizione, aggiornamento e trascrizioni."
      : "A one-page checklist to keep with your documents, covering registration, updates and transcriptions.",
    printableBtn: it ? "Mandami il PDF" : "Send me the PDF",
    askQ: it
      ? "Caso particolare? Raccontacelo in poche righe."
      : "Got a specific situation? Describe it in a few lines.",
    contactBtn: it ? "Scrivi a Resinaro" : "Write to Resinaro",
    affNoteEnd: it
      ? "Nota: questa guida è informativa. Fai sempre riferimento a consolati, comuni e professionisti per decisioni legali o fiscali."
      : "Note: this guide is informational. Always refer to consulates, town halls and professionals for legal or tax decisions.",
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
    headline: "AIRE from the UK (2025): Registration & FAST IT Guide",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.resinaro.com/community/aire-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Bureaucracy", "AIRE", "FAST IT", "Consular"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "it" ? "Community" : "Community",
        item: "https://www.resinaro.com/community",
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "AIRE dal Regno Unito (2025)"
            : "AIRE from the UK (2025)",
        item: "https://www.resinaro.com/community/aire-uk",
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
        ? "Come fare una nuova iscrizione AIRE dal Regno Unito"
        : "How to complete a new AIRE registration from the UK",
    totalTime: "PT20M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Passaporto o CIE italiana" : "Italian passport or CIE",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Prova di residenza nel Regno Unito" : "Proof of residence in the UK",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: locale === "it" ? "Account FAST IT" : "FAST IT account",
      },
    ],
    step:
      locale === "it"
        ? [
            {
              "@type": "HowToStep",
              name: "Accedi a FAST IT",
              text: "Crea o usa il tuo account con dati coerenti con passaporto/CIE.",
            },
            {
              "@type": "HowToStep",
              name: "Compila la domanda AIRE",
              text: "Inserisci indirizzo UK completo e dati famiglia.",
            },
            {
              "@type": "HowToStep",
              name: "Carica i documenti",
              text: "Carica prove leggibili di identità e residenza.",
            },
            {
              "@type": "HowToStep",
              name: "Invia e conserva ricevuta",
              text: "Conferma l’invio e scarica il riepilogo.",
            },
          ]
        : [
            {
              "@type": "HowToStep",
              name: "Log into FAST IT",
              text: "Create or use an account with data matching your passport/CIE.",
            },
            {
              "@type": "HowToStep",
              name: "Fill the AIRE form",
              text: "Enter full UK address and family details.",
            },
            {
              "@type": "HowToStep",
              name: "Upload documents",
              text: "Upload clear proofs of identity and residence.",
            },
            {
              "@type": "HowToStep",
              name: "Submit and keep the receipt",
              text: "Confirm submission and download the summary.",
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
              name: "AIRE decide dove pago le tasse?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No: AIRE è un registro anagrafico. La residenza fiscale dipende da altre norme e va chiarita con professionisti o autorità competenti.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto dura l’iscrizione AIRE?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Rimane attiva finché non comunichi il rientro in Italia o un nuovo trasferimento. Va aggiornata quando cambiano indirizzo o situazione familiare.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "Does AIRE decide where I pay tax?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No: AIRE is a population registry. Tax residence depends on other rules and should be clarified with professionals or authorities.",
              },
            },
            {
              "@type": "Question",
              name: "How long does AIRE last?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It stays active until you report your return to Italy or a new move. You should update it when address or family situation changes.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/aire-fastit-hero.jpg"
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
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">{copy.heroLead}</p>
          </div>

          {/* CTA card */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/75 p-4 backdrop-blur-md shadow-lg">
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
                  href="/services"
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

      {/* ===== Do I need AIRE? table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.needH}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.needSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.needHeaders.map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.needRows.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
                    {row.map((c, j) => (
                      <td key={j} className="p-3 text-gray-800 align-top">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-600">{copy.needNote}</p>
        </div>
      </section>

      {/* ===== Flows cards ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.flowsH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.flowsSub}</p>
            </div>
            <Link
              href={howToAnchor}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {locale === "it" ? "Vai alla procedura AIRE →" : "Jump to AIRE how-to →"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.flows.map((x) => (
              <div key={x.h} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {x.tag}
                </p>
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
        </div>
      </section>

      {/* ===== How-To + FAST IT issues ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* How-To */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{copy.methodH}</h2>
              <Link
                href="#fastit-issues"
                className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
              >
                {copy.troubleshootLink}
              </Link>
            </div>
            <ol className="mt-4 list-decimal pl-6 text-gray-800">
              {copy.methodSteps.map(([bold, rest]: string[]) => (
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
                <Link
                  href={kitAnchor}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {copy.fridgeBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* FAST IT issues */}
          <div
            id="fastit-issues"
            className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">{copy.issuesH}</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {copy.issuesHeaders.map((h) => (
                      <th key={h} className="p-3 text-left font-semibold text-gray-900">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.issuesRows.map((row, i) => (
                    <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
                      {row.map((c, j) => (
                        <td key={j} className="p-3 text-gray-800 align-top">
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

      {/* ===== Edge cases ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.edgeH}</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.edgeHeaders.map((h) => (
                    <th key={h} className="p-3 text-left font-semibold text-gray-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.edgeRows.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
                    {row.map((c, j) => (
                      <td key={j} className="p-3 text-gray-800 align-top">
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

      {/* ===== Service kit / conversion ===== */}
      <section id={kitAnchor.slice(1)} className="mx-auto mt-16 max-w-7xl px-6">
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
                    {copy.getFreeAdvice}
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                  >
                    {copy.exploreServices}
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
              {copy.relatedItems.map((item: { href: string; label: string }) => (
                <li key={item.href}>
                  <Link
                    className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-600">{copy.affNoteEnd}</p>
          </div>

          {/* Printable checklist + contact */}
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
                {copy.contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
