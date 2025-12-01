// src/app/[locale]/community/passport-id-uk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

const baseMetadata: Metadata = {
  title: "Italian Passport & ID Card in the UK (2025): Complete Guide",
  description:
    "Step-by-step 2025 guide to Italian passports and CIE in the UK: AIRE, consulates, documents, minors, costs, timelines, common pitfalls and how Resinaro can help with booking and file checks.",
  alternates: { canonical: "/community/passport-id-uk" },
  openGraph: {
    title: "Italian Passport & ID Card in the UK (2025): Complete Guide",
    description:
      "Everything you need for Italian passports and ID cards (CIE) from the UK: AIRE, consulates, documents, minors, costs, timelines, and practical booking tips.",
    type: "article",
    images: [
      {
        url: "/images/passport-cie-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Italian passport and ID card (CIE) on a desk with UK documents and a laptop open on Prenot@Mi",
      },
    ],
  },
};

const PUBLISHED = "2025-11-15";
const UPDATED = "2025-11-15";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";

  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Passaporto italiano e carta d’identità (CIE) appoggiati su un tavolo con documenti UK e laptop aperto su Prenot@Mi"
      : "Italian passport and ID card (CIE) on a desk with UK documents and a laptop open on Prenot@Mi",
    heroBadge: it ? "Passaporto • CIE • Consolati UK" : "Passport • CIE • UK Consulates",
    heroTitleA: it
      ? "Passaporto e Carta d’Identità italiana"
      : "Italian Passport & ID Card",
    heroTitleB: it ? "nel Regno Unito (2025)" : "in the UK (2025)",
    heroLead: it
      ? "Tutto in un’unica guida: AIRE, documenti, consoli competenti, minori, tempi reali e cosa fare se non trovi appuntamento."
      : "Everything in one place: AIRE, documents, consular jurisdiction, minors, real timelines, and what to do when you can’t find an appointment.",
    ctaCopy: it
      ? "Se vuoi, possiamo monitorare Prenot@Mi, aiutarti con FAST IT e controllare i tuoi documenti prima dell’appuntamento."
      : "If you’d like, we can monitor Prenot@Mi, help with FAST IT, and check your documents before the appointment.",
    ctaSub: it
      ? "Servizio privato, trasparente. Non siamo il consolato."
      : "Private, transparent support. We are not the consulate.",
    ctaBtnPrimary: it ? "Richiedi aiuto passaporto" : "Get passport help",
    ctaBtnSecondary: it ? "Vedi tutti i servizi" : "View all services",
    pub: it ? "Pubblicato: 15 Nov 2025" : "Published: 15 Nov 2025",
    upd: it ? "Aggiornato: 15 Nov 2025" : "Updated: 15 Nov 2025",
    read: it ? "~18 min lettura" : "~18 min read",

    // USPs
    usp1H: it ? "Basata su casi reali" : "Built from real cases",
    usp1P: it
      ? "Esperienza su appuntamenti a Londra, Manchester ed Edimburgo: cosa chiedono davvero allo sportello."
      : "Grounded in real appointments in London, Manchester and Edinburgh—what they actually ask at the counter.",
    usp2H: it ? "Allineata alle regole ufficiali" : "Aligned with official rules",
    usp2P: it
      ? "Si appoggia a FAST IT, Prenot@Mi e linee guida dei consolati italiani. Con link diretti alle fonti."
      : "Built on FAST IT, Prenot@Mi and official consulate guidelines, with direct links to sources.",
    usp3H: it ? "Pensata per chi vive in UK" : "Designed for Italians in the UK",
    usp3P: it
      ? "Indirizzi UK, prova di residenza, EUSS, nomi doppi, minori nati nel Regno Unito: tutto nello stesso flusso."
      : "UK addresses, proof of residence, EUSS, double surnames, minors born in the UK: all in a single flow.",

    // TL;DR
    tldrH: it
      ? "Riassunto rapido — tre mosse prima di pensare all’appuntamento"
      : "TL;DR — three moves before you worry about appointments",
    tldr1: it ? "1) Sistema l’AIRE" : "1) Fix your AIRE first",
    tldr1P: it
      ? "Controlla di essere registrato al consolato giusto (via FAST IT) e che indirizzo e famiglia siano aggiornati."
      : "Check that you’re registered with the right consulate (via FAST IT) and that your address and family data are up to date.",
    tldr2: it ? "2) Allinea gli indirizzi" : "2) Align all addresses",
    tldr2P: it
      ? "Indirizzo in AIRE, nei documenti UK e in prenotazione devono combaciare. Questo evita rifiuti allo sportello."
      : "Your AIRE address, UK proof of address and booking details should match. This avoids rejections at the desk.",
    tldr3: it ? "3) Prepara tutto prima di Prenot@Mi" : "3) Prepare everything before Prenot@Mi",
    tldr3P: it
      ? "Foto, documenti di stato civile, vecchio passaporto/CIE, prove per i minori: prepara il fascicolo prima di cercare slot."
      : "Photos, civil status documents, old passport/CIE, minors’ proofs: build the whole file before you start hunting for slots.",
    miniCtaP: it
      ? "Vuoi la checklist stampabile pre-appuntamento + aggiornamenti solo quando servono?"
      : "Want the printable pre-appointment checklist + occasional updates only when they matter?",
    miniCtaBtn: it ? "Inviami la checklist" : "Send me the checklist",

    // Key takeaways cards
    take1H: it ? "Senza AIRE aggiornato si blocca tutto" : "Nothing moves without updated AIRE",
    take1P: it
      ? "Per quasi tutti i consolati UK, l’AIRE corretta è il prerequisito per passaporto e CIE. Se non è in ordine, lavoriamo prima su quello."
      : "For most UK consulates, correct AIRE is the prerequisite for passport and CIE. If it’s not right, that’s the first thing to fix.",
    take2H: it ? "Bimbi, nomi doppi, divorzi: servono prove extra" : "Kids, double surnames, divorce need extra proof",
    take2P: it
      ? "Certificati di nascita/matrimonio/divorzio, traduzioni e trascrizioni consolari vanno preparati in anticipo."
      : "Birth/marriage/divorce certificates, translations and consular transcriptions need to be ready beforehand.",
    take3H: it ? "Ogni consolato ha piccole differenze" : "Consulates differ in small but crucial ways",
    take3P: it
      ? "Londra, Manchester ed Edimburgo applicano regole simili ma non identiche su tempi, corrieri, pagamenti e moduli."
      : "London, Manchester and Edinburgh apply similar but not identical rules for timelines, couriers, payments and forms.",

    // Jurisdiction table
    jurisH: it ? "Quale consolato è competente per te?" : "Which consulate is responsible for you?",
    jurisSub: it
      ? "Regola d’oro: conta dove risulti residente in AIRE, non solo dove vivi oggi."
      : "Golden rule: the consulate is determined by the AIRE record, not just where you’re currently staying.",
    jurisHeaders: it
      ? ["Consolato", "Copertura indicativa", "Piattaforme", "Note pratiche"]
      : ["Consulate", "Indicative coverage", "Platforms", "Practical notes"],
    jurisRows: it
      ? [
          [
            "Consolato Generale d’Italia a Londra",
            "In genere Inghilterra del sud/centro e Galles",
            "FAST IT, Prenot@Mi",
            "Domanda alta, tempi variabili; controlla indirizzo AIRE prima di tutto.",
          ],
          [
            "Consolato Generale d’Italia a Manchester",
            "Nord Inghilterra e parte delle Midlands",
            "FAST IT, Prenot@Mi",
            "Più vicino per chi vive a Manchester, Leeds, Liverpool, Sheffield ecc.",
          ],
          [
            "Consolato d’Italia a Edimburgo",
            "Scozia e Irlanda del Nord",
            "FAST IT, Prenot@Mi",
            "Attenzione a viaggi e costi di alloggio per l’appuntamento.",
          ],
        ]
      : [
          [
            "Consulate General of Italy in London",
            "Typically southern/central England & Wales",
            "FAST IT, Prenot@Mi",
            "High demand, variable wait times; fix your AIRE address first.",
          ],
          [
            "Consulate General of Italy in Manchester",
            "Northern England and parts of the Midlands",
            "FAST IT, Prenot@Mi",
            "Closest option for Manchester, Leeds, Liverpool, Sheffield and surroundings.",
          ],
          [
            "Consulate of Italy in Edinburgh",
            "Scotland and Northern Ireland",
            "FAST IT, Prenot@Mi",
            "Factor in travel and accommodation costs for the appointment.",
          ],
        ],
    jurisTip: it
      ? "Conferma sempre la circoscrizione sul sito ufficiale del consolato: le aree coperte possono cambiare."
      : "Always confirm jurisdiction on your consulate’s official site—coverage areas can change.",

    // Passport vs CIE comparison
    compH: it ? "Passaporto vs Carta d’Identità elettronica (CIE)" : "Passport vs Electronic ID card (CIE)",
    compSub: it
      ? "Capire cosa ti serve davvero ti evita code e appuntamenti duplicati."
      : "Understanding what you actually need prevents duplicate appointments and wasted trips.",
    compCards: it
      ? [
          {
            h: "Passaporto italiano",
            p: "Documento di viaggio principale fuori UE e prova di cittadinanza a lungo termine.",
            bullets: [
              "Necessario per viaggiare in molti Paesi extra-UE",
              "Obbligatorio per la maggior parte dei visti",
              "Valido anche come ID nei Paesi UE/Schengen",
            ],
          },
          {
            h: "Carta d’Identità elettronica (CIE)",
            p: "ID moderno, comodo per viaggi in molti Paesi UE e per SPID/CIE ID.",
            bullets: [
              "Spesso sufficiente per viaggiare in UE/Schengen",
              "Utile per SPID/CIE ID e servizi online",
              "Non sostituisce il passaporto per visti extra-UE",
            ],
          },
          {
            h: "Emergenze & alternative",
            p: "In alcune situazioni (viaggi urgenti) il consolato può rilasciare documenti provvisori.",
            bullets: [
              "Documenti di viaggio temporanei solo in vero caso di emergenza",
              "Perdita/furto: serve denuncia di polizia",
              "Non contare su questa opzione per pigrizia o ritardo",
            ],
          },
        ]
      : [
          {
            h: "Italian passport",
            p: "Your main travel document outside the EU and long-term proof of citizenship.",
            bullets: [
              "Required for many non-EU trips",
              "Needed for most visas",
              "Also valid as ID within EU/Schengen",
            ],
          },
          {
            h: "Electronic ID card (CIE)",
            p: "Modern ID card, handy for EU travel and digital identity (SPID/CIE ID).",
            bullets: [
              "Often enough for EU/Schengen travel",
              "Useful for SPID/CIE ID and online services",
              "Does not replace your passport for non-EU visas",
            ],
          },
          {
            h: "Emergencies & alternatives",
            p: "In some genuine emergencies, the consulate may issue temporary travel documents.",
            bullets: [
              "Emergency documents only for real urgent needs",
              "Loss/theft: police report required",
              "Do not rely on this as a shortcut for late renewals",
            ],
          },
        ],

    // How-to
    methodH: it
      ? "Passaporto adulto dal Regno Unito — flusso in 6 passi"
      : "Adult passport from the UK — 6-step flow",
    troubleshootLink: it ? "Vai ai casi particolari ↓" : "Jump to edge cases ↓",
    methodSteps: it
      ? [
          ["Verifica AIRE.", "Accedi a FAST IT e controlla consolato, indirizzo e composizione familiare."],
          ["Raccogli i documenti.", "Vecchio passaporto/CIE, foto biometriche, prova di indirizzo UK, eventuali certificati di stato civile."],
          ["Crea/controlla l’account Prenot@Mi.", "Una sola registrazione, email personale, dati coerenti con AIRE."],
          ["Prenota l’appuntamento.", "Monitora nuovi slot; evita login compulsivi da molti IP o dispositivi."],
          ["Prepara il giorno X.", "Stampa conferma, ordina i documenti, organizza viaggio e tempi d’ingresso."],
          ["Dopo l’appuntamento.", "Controlla tempi di consegna (ritiro/corriere) e aggiorna eventuali altri servizi (banca, lavoro, EUSS)."],
        ]
      : [
          ["Check AIRE.", "Log into FAST IT and confirm consulate, address and family composition."],
          ["Gather documents.", "Old passport/CIE, biometric photos, UK proof of address, civil-status certificates if needed."],
          ["Create/check your Prenot@Mi account.", "One account only, personal email, data aligned with AIRE."],
          ["Book the appointment.", "Monitor for new slots; avoid compulsive logins from many IPs/devices."],
          ["Prepare for the day.", "Print confirmation, organise documents, plan travel and arrival time."],
          ["After the appointment.", "Track delivery (pickup/courier) and update other services (bank, employer, EUSS)."],
        ],
    safetyNote: it
      ? "Le regole possono cambiare rapidamente: verifica sempre le istruzioni sul sito del tuo consolato prima di procedere."
      : "Rules can change quickly: always double-check the instructions on your consulate’s website before proceeding.",
    fridgeCta: it
      ? "Preferisci una checklist da stampare e tenere vicino ai documenti?"
      : "Want a printable checklist to keep with your documents?",
    fridgeBtn: it ? "Scarica checklist completa" : "Download full checklist",

    // Edge-case matrix
    matrixH: it ? "Casi particolari frequenti (e come gestirli)" : "Common edge cases (and how to handle them)",
    matrixHeaders: it
      ? ["Scenario", "Cosa significa", "Cosa fare", "Quando chiedere aiuto"]
      : ["Scenario", "What it means", "What to do", "When to ask for help"],
    matrixRows: it
      ? [
          [
            "AIRE non aggiornato",
            "Risulti ancora iscritto in un’altra circoscrizione o vecchio indirizzo.",
            "Aggiorna via FAST IT prima di pensare all’appuntamento.",
            "Se FAST IT dà errori o non riesci a caricare le prove.",
          ],
          [
            "Nome cambiato (matrimonio/divorzio)",
            "Nome sui documenti UK diverso da quello in AIRE/passaporto.",
            "Prepara certificato + eventuale traduzione e richiedi trascrizione.",
            "Se non sei sicuro di quali atti servano o dove richiederli.",
          ],
          [
            "Figlio nato in UK",
            "Il minore potrebbe non essere ancora registrato in AIRE.",
            "Trascrivi nascita e registra il minore prima di chiedere passaporto/CIE.",
            "Se mancano apostille/traduzioni o non sai in che ordine fare i passi.",
          ],
          [
            "Passaporto perso/rubato",
            "Devi dimostrare identità e spiegare l’evento.",
            "Denuncia alla polizia UK + eventuali copie del vecchio documento.",
            "Se hai perso tutto e non hai copie digitali.",
          ],
        ]
      : [
          [
            "AIRE not updated",
            "You’re still registered with an old consulate or address.",
            "Update via FAST IT before worrying about appointments.",
            "If FAST IT errors out or you can’t upload proofs.",
          ],
          [
            "Name change (marriage/divorce)",
            "Your UK documents show a different name than AIRE/passport.",
            "Prepare certificates + translations and request transcription.",
            "If you’re unsure which certificates are needed or where to get them.",
          ],
          [
            "Child born in the UK",
            "The minor might not yet be registered in AIRE.",
            "Transcribe the birth and register the child before passport/CIE.",
            "If you’re missing apostilles/translations or unsure of the order.",
          ],
          [
            "Lost/stolen passport",
            "You must prove identity and explain what happened.",
            "UK police report + any copies/scans of the old passport.",
            "If you’ve lost everything and have no digital copies.",
          ],
        ],
    matrixTip: it
      ? "Se ti ritrovi in più di uno di questi casi contemporaneamente, conviene pianificare il flusso con calma prima di fissare l’appuntamento."
      : "If more than one of these applies to you, it’s worth planning the sequence calmly before booking an appointment.",

    // AIRE / FAST IT
    aireH: it ? "AIRE & FAST IT: la base di tutto" : "AIRE & FAST IT: the foundation",
    aireSub: it
      ? "Per quasi tutte le pratiche consolare (passaporto, CIE, atti) dal Regno Unito serve che l’AIRE sia corretta."
      : "For almost all consular procedures from the UK (passport, CIE, records), AIRE needs to be correct first.",
    aireCards: it
      ? [
          {
            tag: "Step 1",
            h: "Iscrizione AIRE dal Regno Unito",
            p: "Per chi è appena arrivato o non si è mai iscritto.",
            bullets: [
              "Richiesta via FAST IT con prove di residenza",
              "Attenzione ai nomi e alle date sui documenti",
              "Tempi variabili: preventiva prima di scadenze importanti",
            ],
          },
          {
            tag: "Step 2",
            h: "Aggiornare indirizzo, stato civile, figli",
            p: "Per chi si è spostato di casa o ha cambiato famiglia.",
            bullets: [
              "Comunica nuovo indirizzo, matrimonio/divorzio, nascite",
              "Allega prove (contratti, certificati, atti UK)",
              "Verifica che l’AIRE rifletta la situazione reale",
            ],
          },
          {
            tag: "Step 3",
            h: "Trascrizioni di atti UK in Italia",
            p: "Nascite/matrimoni/divorzi avvenuti nel Regno Unito.",
            bullets: [
              "Richiedi certificati UK completi + apostille",
              "Organizza traduzione dove richiesta",
              "Invia tramite consolato per la trascrizione",
            ],
          },
        ]
      : [
          {
            tag: "Step 1",
            h: "AIRE registration from the UK",
            p: "For those who recently moved or never registered.",
            bullets: [
              "Apply via FAST IT with proof of residence",
              "Double-check names and dates on all documents",
              "Processing times vary—start well before deadlines",
            ],
          },
          {
            tag: "Step 2",
            h: "Update address, marital status, children",
            p: "For people who moved or whose family situation changed.",
            bullets: [
              "Report new address, marriage/divorce, births",
              "Attach proofs (tenancy, certificates, UK records)",
              "Make sure AIRE matches your real situation",
            ],
          },
          {
            tag: "Step 3",
            h: "Transcribing UK records in Italy",
            p: "Births/marriages/divorces that happened in the UK.",
            bullets: [
              "Get full UK certificates + apostille",
              "Arrange translations where required",
              "Submit via the consulate for transcription",
            ],
          },
        ],
    aireHelp: it
      ? "Se FAST IT ti blocca o non sai in che ordine fare i passi, possiamo guardare il quadro completo e proporre un piano."
      : "If FAST IT keeps blocking you or you’re unsure about the order, we can review your situation and suggest a clear plan.",
    aireBtn: it ? "Chiedi un check AIRE" : "Request an AIRE check",

    // Fees & timing
    feeH: it ? "Panoramica su costi e tempi indicativi" : "Indicative fees & timelines",
    feeSub: it
      ? "Le tariffe consolari cambiano periodicamente con il tasso di cambio. Controlla sempre il foglio aggiornato sul sito del consolato."
      : "Consular fees change periodically with exchange rates. Always check your consulate’s latest fee table.",
    feeHeaders: it
      ? ["Procedura", "Costo indicativo", "Tempi tipici", "Note"]
      : ["Procedure", "Indicative cost", "Typical timing", "Notes"],
    feeRows: it
      ? [
          [
            "Passaporto adulto",
            "Circa 100–130 € in GBP (variabile)",
            "Stesso giorno o poche settimane, a seconda di consolato e periodo",
            "Pagabile in sterline; verifica modalità (contanti/carta/postal order).",
          ],
          [
            "Passaporto minore",
            "Leggermente inferiore, secondo fascia di età",
            "Spesso tempi simili all’adulto; entrambi i genitori di solito coinvolti",
            "Controlla moduli di consenso e presenza genitori.",
          ],
          [
            "CIE adulto",
            "Intorno a 20–30 € in GBP (variabile)",
            "Emissione non sempre immediata; possibile invio per posta",
            "Perfetta come ID quotidiano e per SPID/CIE ID.",
          ],
          [
            "CIE minore",
            "Simile all’adulto, a seconda dell’età",
            "Richiede attenzione su firma/autorizzazione dei genitori",
            "Verifica validità ridotta per i minori.",
          ],
        ]
      : [
          [
            "Adult passport",
            "Around €100–130 in GBP (varies)",
            "Same day or a few weeks depending on consulate and season",
            "Payable in GBP; check method (cash/card/postal order).",
          ],
          [
            "Minor’s passport",
            "Slightly lower, depending on age band",
            "Often similar timeline to adults; both parents usually involved",
            "Check consent forms and parent presence rules.",
          ],
          [
            "Adult CIE",
            "Around €20–30 in GBP (varies)",
            "Not always issued on the day; may be mailed",
            "Great everyday ID and for SPID/CIE ID.",
          ],
          [
            "Minor’s CIE",
            "Similar to adults, age dependent",
            "Pay attention to parent signatures/consent",
            "Validity may be shorter for minors.",
          ],
        ],
    feeNote: it
      ? "Questi intervalli servono solo per orientarti: le cifre reali dipendono dal trimestre consolare e dai tassi di cambio."
      : "These ranges are for orientation only: actual figures depend on consular quarters and exchange rates.",

    // Service “kit”
    kitH: it ? "Il tuo \"kit\" passaporto & CIE con Resinaro" : "Your passport & CIE support \"kit\" with Resinaro",
    kitSub: it
      ? "Un aiuto pratico per preparare il fascicolo, evitare errori comuni e aumentare le probabilità che l’appuntamento vada liscio."
      : "Practical support to build your file, avoid common mistakes and increase the odds of a smooth appointment.",
    backToHow: it ? "Torna ai passi ↑" : "Back to steps ↑",
    kitCols: it
      ? {
          leftH: "Cosa facciamo con te",
          leftItems: [
            "Analisi della tua situazione (AIRE, famiglia, documenti UK)",
            "Checklist personalizzata per passaporto e/o CIE",
            "Suggerimenti su traduzioni, apostille e trascrizioni mancanti",
            "Monitoraggio Prenot@Mi secondo la finestra temporale concordata",
            "Revisione del fascicolo prima dell’appuntamento",
          ],
          rightH: "Cosa rimane sempre a te",
          rightItems: [
            "Fornire documenti veri, corretti e non falsificati",
            "Presentarti di persona al consolato (quando richiesto)",
            "Seguire le regole e gli avvisi pubblicati dal consolato",
            "Comunicare eventuali cambi di indirizzo/stato civile nel tempo",
          ],
        }
      : {
          leftH: "What we do with you",
          leftItems: [
            "Review your situation (AIRE, family, UK documents)",
            "Custom checklist for passport and/or CIE",
            "Guidance on missing translations, apostilles and transcriptions",
            "Prenot@Mi monitoring within an agreed time window",
            "File review before your appointment",
          ],
          rightH: "What always stays with you",
          rightItems: [
            "Providing genuine, correct documents",
            "Showing up in person to the consulate (when required)",
            "Following the rules and notices published by the consulate",
            "Updating your address/marital status over time",
          ],
        },
    oneToOne: it
      ? "Vuoi capire in che ordine fare AIRE, trascrizioni, passaporto e CIE?"
      : "Need help choosing the right order for AIRE, transcriptions, passport and CIE?",
    getFreeAdvice: it ? "Chiedi un parere gratuito" : "Get a free opinion",
    exploreServices: it ? "Vedi il servizio passaporto" : "View passport service",
    serviceNote: it
      ? "Nota importante: Resinaro è un servizio di supporto privato e indipendente. Non siamo un consolato né possiamo garantire appuntamenti in date specifiche."
      : "Important note: Resinaro is a private, independent support service. We are not a consulate and cannot guarantee appointments on specific dates.",

    // FAQ
    faqH: it ? "FAQ — domande che riceviamo più spesso" : "FAQ — questions we hear most often",
    faqs: it
      ? [
          [
            "Posso rinnovare il passaporto senza AIRE aggiornato?",
            "In pratica, no: i consolati UK si aspettano che l’AIRE sia corretta prima di procedere. In alcuni casi ti permettono di avviare tutto insieme, ma di solito il primo collo di bottiglia è proprio AIRE.",
          ],
          [
            "Posso rinnovare per posta dal Regno Unito?",
            "Di norma i passaporti biometrici richiedono la presenza fisica per le impronte (salvo eccezioni limitate per alcune fasce di minori o condizioni specifiche). Controlla sempre la pagina ufficiale del tuo consolato.",
          ],
          [
            "Quanto prima devo iniziare a cercare appuntamento?",
            "Se il passaporto è fondamentale per viaggi o visti, è prudente iniziare a preparare documenti e monitorare con mesi di anticipo. In certi periodi gli slot spariscono in pochi minuti.",
          ],
          [
            "Cosa succede se non posso più andare all’appuntamento?",
            "Segui le istruzioni del consolato per cancellare/riprenotare. Evita di mancare senza avviso: in alcune circostanze possono bloccare l’account o limitare nuove prenotazioni per un periodo.",
          ],
        ]
      : [
          [
            "Can I renew my passport without updated AIRE?",
            "In practice, no: UK consulates expect AIRE to be correct first. In some cases they may let you move things in parallel, but the first bottleneck is usually AIRE.",
          ],
          [
            "Can I renew by post from the UK?",
            "Biometric passports generally require you to attend in person for fingerprints (with some limited exceptions for certain minors or specific conditions). Always check your consulate’s page.",
          ],
          [
            "How early should I start looking for an appointment?",
            "If you rely on your passport for travel or visas, it’s wise to prepare documents and start monitoring months in advance. At some times, slots disappear within minutes.",
          ],
          [
            "What if I can’t attend the appointment any more?",
            "Follow the consulate’s instructions to cancel/reschedule. Avoid no-shows: in some circumstances they may block your account or limit new bookings for a while.",
          ],
        ],

    // Related + footer CTA
    relatedH: it ? "Guide correlate" : "Related guides",
    relatedItems: it
      ? [
          {
            href: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
            label: "Passaporto italiano nel Regno Unito (2025): documenti & preparazione",
          },
          {
            href: "/community/bureaucracy-guides/italian-cie-uk-docs-prep",
            label: "Carta d’identità elettronica italiana (CIE) nel Regno Unito (2025)",
          },
          {
            href: "/community/bureaucracy-guides/aire-registration-uk",
            label: "Iscrizione AIRE dal Regno Unito (2025): guida FAST IT",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Prova di indirizzo senza bollette (2025): 12 documenti accettati",
          },
        ]
      : [
          {
            href: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
            label: "Italian Passport in the UK (2025): documents & preparation",
          },
          {
            href: "/community/bureaucracy-guides/italian-cie-uk-docs-prep",
            label: "Italian Electronic ID Card (CIE) in the UK (2025)",
          },
          {
            href: "/community/bureaucracy-guides/aire-registration-uk",
            label: "AIRE Registration from the UK (2025): FAST IT guide",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Proof of address without bills (2025): 12 accepted documents",
          },
        ],
    printableH: it
      ? "Checklist pre-appuntamento passaporto/CIE (stampabile)"
      : "Printable pre-appointment passport/CIE checklist",
    printableP: it
      ? "Una pagina con documenti, ordine dei passi e spazio per spuntare tutto prima di partire per il consolato."
      : "One page with documents, order of steps and space to tick things off before you travel to the consulate.",
    printableBtn: it ? "Mandami il PDF" : "Send me the PDF",
    askQ: it
      ? "Raccontaci il tuo caso (in poche righe): ti indichiamo la guida o il servizio giusto."
      : "Tell us your situation in a few lines and we’ll suggest the right guide or service.",
    contactBtn: it ? "Scrivi a Resinaro" : "Write to Resinaro",
    affNoteEnd: it
      ? "Nota: questa guida è informativa e non sostituisce le istruzioni ufficiali del Ministero degli Affari Esteri e del tuo consolato."
      : "Note: this guide is informational and does not replace the official instructions from the Italian MFA or your consulate.",
  };
}

/* --------- Localised metadata (SEO for en/it, OG image) --------- */
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = params.locale;
  const it = locale === "it";
  const copy = t(locale);

  const title = it
    ? "Passaporto e Carta d’Identità italiana nel Regno Unito (2025): Guida completa"
    : "Italian Passport & ID Card in the UK (2025): Complete Guide";

  const description = it
    ? "Guida 2025 passo-passo a passaporto italiano e CIE nel Regno Unito: AIRE, consolati, documenti, minori, costi, tempi, errori comuni e come Resinaro può aiutarti con appuntamenti e controlli fascicolo."
    : "Step-by-step 2025 guide to Italian passports and CIE in the UK: AIRE, consulates, documents, minors, costs, timelines, common pitfalls and how Resinaro can help with booking and file checks.";

  return {
    ...baseMetadata,
    title,
    description,
    openGraph: {
      ...(baseMetadata.openGraph || {}),
      title,
      description,
      images: [
        {
          url: "/images/passport-cie-hero.jpg",
          width: 1200,
          height: 630,
          alt: copy.heroAlt,
        },
      ],
    },
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
      locale === "it"
        ? "Passaporto e Carta d’Identità italiana nel Regno Unito (2025): Guida completa"
        : "Italian Passport & ID Card in the UK (2025): Complete Guide",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.resinaro.com/community/passport-id-uk",
    },
    inLanguage: copy.inLang,
    articleSection: ["Bureaucracy", "Passport", "CIE", "AIRE"],
    image: ["https://www.resinaro.com/images/passport-cie-hero.jpg"],
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
            ? "Passaporto e CIE nel Regno Unito (2025)"
            : "Italian Passport & ID Card in the UK (2025)",
        item: "https://www.resinaro.com/community/passport-id-uk",
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
        ? "Come rinnovare il passaporto italiano dal Regno Unito (adulto)"
        : "How to renew your Italian passport from the UK (adult)",
    totalTime: "PT30M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Vecchio passaporto / CIE" : "Old passport / CIE",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Foto biometriche" : "Biometric photos",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Prova di indirizzo UK" : "UK proof of address",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name:
          locale === "it"
            ? "Computer con accesso a FAST IT / Prenot@Mi"
            : "Computer with FAST IT / Prenot@Mi access",
      },
    ],
    step:
      locale === "it"
        ? [
            {
              "@type": "HowToStep",
              name: "Controlla AIRE su FAST IT",
              text: "Accedi a FAST IT e verifica che consolato, indirizzo e famiglia siano aggiornati.",
            },
            {
              "@type": "HowToStep",
              name: "Prepara tutti i documenti",
              text: "Raccogli vecchio passaporto/CIE, foto biometriche, prova di indirizzo UK e certificati di stato civile se necessari.",
            },
            {
              "@type": "HowToStep",
              name: "Verifica o crea l’account Prenot@Mi",
              text: "Assicurati che i dati siano coerenti con FAST IT e non creare doppioni.",
            },
            {
              "@type": "HowToStep",
              name: "Prenota l’appuntamento",
              text: "Monitora gli slot disponibili e prenota non appena trovi una data adatta.",
            },
            {
              "@type": "HowToStep",
              name: "Presentati al consolato",
              text: "Porta tutti i documenti in originale e le eventuali fotocopie richieste. Segui le indicazioni del personale.",
            },
          ]
        : [
            {
              "@type": "HowToStep",
              name: "Check AIRE via FAST IT",
              text: "Log into FAST IT and confirm that your consulate, address and family details are correct.",
            },
            {
              "@type": "HowToStep",
              name: "Prepare all documents",
              text: "Gather your old passport/CIE, biometric photos, UK proof of address and any needed civil-status certificates.",
            },
            {
              "@type": "HowToStep",
              name: "Verify or create your Prenot@Mi account",
              text: "Ensure details match FAST IT and avoid duplicate accounts.",
            },
            {
              "@type": "HowToStep",
              name: "Book the appointment",
              text: "Monitor available slots and book as soon as a suitable date appears.",
            },
            {
              "@type": "HowToStep",
              name: "Attend the consulate",
              text: "Bring all original documents and required copies. Follow staff instructions during the appointment.",
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
              name: "Posso rinnovare il passaporto senza AIRE aggiornato?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In linea di massima no: l’AIRE corretta è un prerequisito per il rinnovo dal Regno Unito. Controlla sempre le indicazioni del tuo consolato.",
              },
            },
            {
              "@type": "Question",
              name: "Posso rinnovare per posta?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "I passaporti biometrici richiedono quasi sempre presenza fisica per le impronte. Verifica eccezioni e dettagli sul sito del consolato.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto durano i tempi di rilascio?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dipende dal consolato, dal periodo e dal carico di lavoro. Alcune pratiche vengono chiuse in giornata, altre richiedono settimane.",
              },
            },
            {
              "@type": "Question",
              name: "Cosa succede se perdo il passaporto in UK?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Serve una denuncia alla polizia locale, documenti di identità alternativi se disponibili e contattare il consolato per indicazioni su rilascio di un nuovo documento o temporaneo.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "Can I renew my passport without updated AIRE?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Generally no: a correct AIRE record is required for renewal from the UK. Always check your consulate’s guidance.",
              },
            },
            {
              "@type": "Question",
              name: "Can I renew by post?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Biometric passports almost always require your physical presence for fingerprints. Check the consulate’s website for any exceptions.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to get a passport?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the consulate, time of year and workload. Some cases are completed the same day, others take weeks.",
              },
            },
            {
              "@type": "Question",
              name: "What if I lose my passport in the UK?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You’ll usually need a police report, any alternative ID you have and to contact the consulate for guidance on a new passport or temporary travel document.",
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
            src="/images/passport-cie-hero.jpg"
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
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/40 bg-white/75 p-4 backdrop-blur-md shadow-lg">
            <div className="grid items-center gap-3 md:grid-cols-[1.3fr_auto]">
              <div>
                <p className="text-sm text-gray-900">{copy.ctaCopy}</p>
                <p className="text-xs text-gray-600">{copy.ctaSub}</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                <Link
                  href="/services/passport"
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

        {/* Soft fade */}
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

      {/* ===== Jurisdiction table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.jurisH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.jurisSub}</p>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.jurisHeaders.map((h: string) => (
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
                {copy.jurisRows.map((row: string[], i: number) => (
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

          <p className="mt-3 text-xs text-gray-600">{copy.jurisTip}</p>
        </div>
      </section>

      {/* ===== Passport vs CIE comparison ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.compH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.compSub}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.compCards.map(
              (x: { h: string; p: string; bullets: string[] }) => (
                <div
                  key={x.h}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {x.h}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{x.p}</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-800">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===== How-To + edge cases ===== */}
      <section id="how-to" className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* How-To */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{copy.methodH}</h2>
              <Link
                href="#edge-cases"
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

            {/* Internal links to deeper guides */}
            <p className="mt-4 text-xs text-gray-700">
              {locale === "it" ? (
                <>
                  Per esempi concreti di{" "}
                  <Link
                    href="/community/bureaucracy-guides/address-proof-uk"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    prova di indirizzo accettata nel Regno Unito
                  </Link>
                  , vedi la nostra guida dedicata. Se vuoi capire meglio quando ti conviene davvero
                  richiedere anche la CIE, puoi leggere la guida{" "}
                  <Link
                    href="/community/bureaucracy-guides/italian-cie-uk-docs-prep"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    Carta d’identità elettronica italiana (CIE) nel Regno Unito
                  </Link>
                  .
                </>
              ) : (
                <>
                  For concrete examples of{" "}
                  <Link
                    href="/community/bureaucracy-guides/address-proof-uk"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    accepted UK proof of address
                  </Link>
                  , check our dedicated guide. If you want a deeper dive into when it actually makes
                  sense to request a CIE as well, read{" "}
                  <Link
                    href="/community/bureaucracy-guides/italian-cie-uk-docs-prep"
                    className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                  >
                    Italian Electronic ID Card (CIE) in the UK
                  </Link>
                  .
                </>
              )}
            </p>

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

          {/* Edge-case matrix */}
          <div
            id="edge-cases"
            className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {copy.matrixH}
            </h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {copy.matrixHeaders.map((h: string) => (
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
                  {copy.matrixRows.map((row: string[], i: number) => (
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
            <p className="mt-2 text-xs text-gray-600">{copy.matrixTip}</p>
          </div>
        </div>
      </section>

      {/* ===== AIRE & FAST IT ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.aireH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.aireSub}</p>
            </div>
            <Link
              href="/community/bureaucracy-guides/aire-registration-uk"
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {locale === "it"
                ? "Vai alla guida AIRE completa →"
                : "Open full AIRE guide →"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {copy.aireCards.map(
              (x: { tag: string; h: string; p: string; bullets: string[] }) => (
                <div
                  key={x.h}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
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
              ),
            )}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-emerald-900">{copy.aireHelp}</p>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                {copy.aireBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Fees & timings ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.feeH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.feeSub}</p>
            </div>
            <Link
              href="https://www.esteri.it/it/servizi-consolari-e-visti/servizi_per_il_cittadino_italiano/tariffe_consolari/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {locale === "it"
                ? "Vedi tariffe consolari ufficiali →"
                : "View official consular fees →"}
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.feeHeaders.map((h: string) => (
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
                {copy.feeRows.map((row: string[], i: number) => (
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

          <p className="mt-2 text-xs text-gray-600">{copy.feeNote}</p>
        </div>
      </section>

      {/* ===== Service “kit” / conversion ===== */}
      <section id="kit" className="mx-auto mt-16 max-w-7xl px-6">
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
                    href="/services/passport"
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

          {/* Printable checklist + contact CTA */}
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
