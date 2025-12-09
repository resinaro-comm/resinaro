// src/app/[locale]/community/proof-of-address-without-bills-2025/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { p, type Locale } from "@/lib/localePath";
import AddressProofChecklist from "@/components/community/address-proof/AddressProofChecklist";
import AddressProofBuilder from "@/components/community/address-proof/AddressProofBuilder";
import AddressProofLetterGenerator from "@/components/community/address-proof/AddressProofLetterGenerator";
import AddressProofExpiryTracker from "@/components/community/address-proof/AddressProofExpiryTracker";
import AddressProofAffiliateKits from "@/components/community/address-proof/AddressProofAffiliateKits";

const DESCRIPTION_EN =
  "Proof of address without bills in the UK (2025): how migrants and Italians can use 12 accepted documents, C/O wording, employer/GP letters and a practical bundle to unlock bank accounts, NIN, GP, DVLA and consulate appointments.";

const DESCRIPTION_IT =
  "Prova di indirizzo nel Regno Unito senza bollette (2025): come italiani e nuovi arrivati possono usare 12 documenti accettati, indirizzo C/O, lettere di datore di lavoro/GP e un pacchetto pratico per sbloccare banca, NIN, GP, DVLA e consolato.";

// Static metadata (English defaults) + language alternates
export const metadata: Metadata = {
  title:
    "Proof of Address Without Bills UK (2025) — 12 Docs, Scripts & Bundle",
  description: DESCRIPTION_EN,
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/proof-of-address-without-bills-2025",
    languages: {
      "en-GB": "/en/community/proof-of-address-without-bills-2025",
      "it-IT": "/it/community/proof-of-address-without-bills-2025",
    },
  },
  openGraph: {
    title:
      "Proof of Address Without Bills UK (2025) — 12 Docs, Scripts & Bundle",
    description: DESCRIPTION_EN,
    url: "https://www.resinaro.com/en/community/proof-of-address-without-bills-2025",
    type: "article",
    images: ["/images/proof-of-address-uk-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Proof of Address Without Bills UK (2025) — 12 Docs, Scripts & Bundle",
    description: DESCRIPTION_EN,
    images: ["/images/proof-of-address-uk-hero.png"],
  },
};

/* ----------------------------- i18n strings ---------------------------- */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    lang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Prova di indirizzo nel Regno Unito senza bollette — guida passo passo"
      : "Proof of address without bills in the UK — step-by-step premium guide",
    heroChip: it ? "IDENTITÀ • SETUP" : "IDENTITY • SETUP",
    heroTitle: it
      ? "Prova di indirizzo senza bollette (2025)"
      : "Proof of Address Without Bills UK (2025)",
    heroSubtitle: it
      ? "Anche senza bollette puoi costruire un pacchetto di prove d’indirizzo accettato da banca, GP, council, DVLA e consolato — con modelli pronti e strategie pensate per chi è appena arrivato."
      : "Even with zero bills you can build a proof-of-address bundle accepted by banks, GP, councils, DVLA and the consulate — with ready-made templates and strategies for newcomers.",
    heroMeta: it
      ? "Guida per italiani e nuovi arrivati nel Regno Unito"
      : "Written for Italians and newcomers in the UK",

    // Meta bar
    metaBarItems: it
      ? [
          "Categoria: Banca & burocrazia",
          "Aggiornato 2025",
          "Lettura 18–25 minuti",
        ]
      : [
          "Category: Banking & bureaucracy",
          "Updated for 2025",
          "18–25 min read",
        ],

    // Quick cards
    quickCards: it
      ? [
          {
            href: "#before-checklist",
            title: "Prima di iniziare",
            sub: "Mini checklist di base",
          },
          {
            href: "#accepted-docs",
            title: "Documenti accettati",
            sub: "12 opzioni reali",
          },
          {
            href: "#step-by-step",
            title: "Piano step-by-step",
            sub: "4 passi chiari",
          },
          {
            href: "#tools",
            title: "Strumenti interattivi",
            sub: "Planner, lettere, scadenze",
          },
        ]
      : [
          {
            href: "#before-checklist",
            title: "Before you start",
            sub: "Basic readiness check",
          },
          {
            href: "#accepted-docs",
            title: "Accepted documents",
            sub: "12 real-world options",
          },
          {
            href: "#step-by-step",
            title: "Step-by-step plan",
            sub: "4 clear stages",
          },
          {
            href: "#tools",
            title: "Interactive tools",
            sub: "Planner, letters, expiry",
          },
        ],

    // Intro / why
    whyTitle: it
      ? "Niente bollette a tuo nome? Hai comunque opzioni. Ecco il piano."
      : "Zero bills yet? You still have options. Here’s the playbook.",
    whyP1: it
      ? "Ti sei appena trasferito. Devi aprire un conto, registrarti dal GP o sistemare il council — ma il tuo nome non è ancora su nessuna bolletta. Questa guida ti mostra modi concreti, già accettati, per dimostrare l’indirizzo senza aspettare mesi. Copia, incolla, invia."
      : "You just moved. You need to open a bank account, register with a GP, or sort the council—but your name isn’t on any bill yet. This guide shows exact, accepted ways to prove your address without waiting. Copy, paste, submit.",
    whyBullets: it
      ? [
          "12 documenti accettati con note e limiti.",
          "Formule C/O che non vengono rifiutate al primo controllo.",
          "Un evidence bundle chiaro + regole per i nomi dei file.",
        ]
      : [
          "12 accepted documents with caveats.",
          "C/O wording that doesn’t get rejected.",
          "Evidence bundle + file-naming hygiene.",
        ],

    // Accepted docs table
    acceptedTitle: it
      ? "I 12 documenti accettati (tabella rapida)"
      : "The 12 accepted documents (quick comparison)",
    acceptedIntro: it
      ? "Non tutti i servizi accettano le stesse prove. Scegli i due più veloci per il tuo obiettivo."
      : "Not every service accepts the same proof. Pick the fastest two below for your case.",
    acceptedRows: it
      ? [
          {
            i: "1",
            name: "Contratto di affitto (con il tuo nome)",
            best: "Banche, council, DVLA, HR",
            how: "Chiedi ad agenzia/proprietario di inserire il tuo nome legale e la data di inizio",
            caveat:
              "Scansiona tutte le pagine; nome e CAP devono coincidere con il resto",
          },
          {
            i: "2",
            name: "Lettera di conferma da landlord/agenzia",
            best: "Banche, GP",
            how: "Usa il nostro modello su carta intestata o PDF ufficiale",
            caveat:
              "Servono data e recapiti di contatto chiari (telefono/email)",
          },
          {
            i: "3",
            name: "Lettera del datore di lavoro (carta intestata)",
            best: "Banche, council (supporto)",
            how: "HR stampa/invia un PDF che conferma indirizzo UK",
            caveat:
              "Inserire nome completo, ruolo, indirizzo e data di emissione",
          },
          {
            i: "4",
            name: "Lettera di università/college",
            best: "Banche, GP, council",
            how: "Student services rilascia prova di iscrizione + indirizzo",
            caveat:
              "Aiuta indicare status full-time o le date di iscrizione",
          },
          {
            i: "5",
            name: "Lettera di registrazione GP / documento NHS",
            best: "Banche, council",
            how: "Registrati da un GP; chiedi stampa di conferma con indirizzo",
            caveat:
              "Controlla che tutte le righe dell’indirizzo siano corrette",
          },
          {
            i: "6",
            name: "Lettera del council (Council Tax o generica)",
            best: "Banche, altra burocrazia",
            how: "Registrati al council; scarica/ricevi la prima lettera",
            caveat:
              "Nome + indirizzo devono combaciare con gli altri documenti",
          },
          {
            i: "7",
            name: "Welcome letter/estratto conto della banca",
            best: "Controlli successivi banca, altri servizi",
            how: "Chiedi alla banca di inviare una lettera al tuo indirizzo (loop)",
            caveat: "Vedi ‘welcome letter loop’ nella sezione modelli",
          },
          {
            i: "8",
            name: "Contratto mobile/broadband",
            best: "Documento di supporto per banche, GP",
            how: "Attiva SIM/broadband al tuo indirizzo con il tuo nome",
            caveat:
              "Alcuni enti accettano solo certi provider — verifica prima",
          },
          {
            i: "9",
            name: "Lettera ufficiale HMRC/governo",
            best: "Quasi ovunque",
            how: "Conserva ogni lettera ufficiale inviata al tuo indirizzo UK",
            caveat:
              "Assicurati che formato di nome/indirizzo sia coerente",
          },
          {
            i: "10",
            name: "Polizza assicurativa",
            best: "Documento di supporto (non sempre)",
            how: "Polizza auto/casa/contenuti a tuo nome a quell’indirizzo",
            caveat:
              "Controlla prima se il servizio in questione la accetta",
          },
          {
            i: "11",
            name: "Lettera della scuola (figli a carico)",
            best: "Council, GP (contesto famiglia)",
            how: "Chiedi conferma indirizzo alla scuola",
            caveat:
              "Spesso è considerata prova di supporto, non primaria",
          },
          {
            i: "12",
            name: "C/O + nota dell’ospitante + lettera indirizzata a te",
            best: "Alcune banche, GP",
            how: "Testo C/O corretto + nota dell’ospitante; fatti spedire una lettera a tuo nome",
            caveat:
              "Non tutti i servizi accettano il C/O — va confermato prima",
          },
        ]
      : [
          {
            i: "1",
            name: "Tenancy agreement (your name)",
            best: "Banks, councils, DVLA, HR",
            how: "Ask agent/landlord to add your legal name and start date",
            caveat:
              "Scan all pages; match name spelling and postcode",
          },
          {
            i: "2",
            name: "Landlord/agent confirmation letter",
            best: "Banks, GP",
            how: "Use our template on agency headed paper or PDF",
            caveat: "Needs contact details and date",
          },
          {
            i: "3",
            name: "Employer letter (headed paper)",
            best: "Banks, councils (supporting)",
            how: "HR prints/PDFs a simple address confirmation",
            caveat:
              "Include your full name, job title, address",
          },
          {
            i: "4",
            name: "University/college letter",
            best: "Banks, GP, councils",
            how: "Student services issues proof of enrolment + address",
            caveat:
              "Full-time status or enrolment dates help",
          },
          {
            i: "5",
            name: "GP registration letter / NHS doc",
            best: "Banks, councils",
            how: "Register with a GP; request confirmation printout",
            caveat: "Ensure address lines are exact",
          },
          {
            i: "6",
            name: "Council letter (CTAX or generic)",
            best: "Banks, other admin",
            how: "Register with council; download/receive first letter",
            caveat:
              "Name + address must match other docs",
          },
          {
            i: "7",
            name: "Bank welcome/statement letter",
            best: "Banks (later checks), other services",
            how: "Ask bank to send a letter to your address (loop)",
            caveat: "See ‘welcome letter loop’",
          },
          {
            i: "8",
            name: "Mobile/broadband contract confirmation",
            best: "Supporting doc for banks, GP",
            how: "Order SIM/broadband to your address with your name",
            caveat:
              "Some services accept only certain providers",
          },
          {
            i: "9",
            name: "HMRC/official government letter",
            best: "Almost everywhere",
            how: "Keep any official letter to your UK address",
            caveat:
              "Ensure your name/address format is consistent",
          },
          {
            i: "10",
            name: "Insurance policy schedule",
            best: "Supporting doc (not everywhere)",
            how: "Car/home/contents cover in your name at address",
            caveat: "Check if accepted before using",
          },
          {
            i: "11",
            name: "School letter (dependants)",
            best: "Council, GP (family context)",
            how: "Request address confirmation letter from school",
            caveat:
              "Often supporting, not primary",
          },
          {
            i: "12",
            name: "C/O host note + posted letter in your name",
            best: "Some banks, GP",
            how: "Correct C/O wording + host note; get letter posted to you",
            caveat: "Not all services accept C/O",
          },
        ],
    acceptedNote: it
      ? "Le liste di documenti accettati cambiano nel tempo — controlla sempre l’elenco aggiornato nel sito/app del servizio che stai usando."
      : "Acceptance lists evolve—confirm the exact list in the app/portal you’re using.",

    // Fastest routes
    fastestTitle: it
   ? "Vie veloci per obiettivo (Banca • GP • DVLA • Council)"
   : "Fastest routes by goal (Bank • GP • DVLA • Council)",
    fastestCards: it
      ? [
          {
            h: "Aprire/aggiornare un conto bancario",
            items: [
              "Usa contratto di affitto O welcome letter della banca (vedi loop più sotto).",
              "Se non hai affitto, chiedi ad HR una lettera con indirizzo su carta intestata.",
              "Con C/O: nome sul campanello + lettera spedita a tuo nome.",
              "Mantieni identiche tutte le righe dell’indirizzo fra le app.",
            ],
            note:
              "Molte banche digitali aprono subito e chiedono la prova più avanti: preparala ora per evitare blocchi.",
          },
          {
            h: "Registrarsi dal GP / ottenere NHS number",
            items: [
              "Porta contratto di affitto o lettera del datore di lavoro + documento d’identità in reception.",
              "Se usi C/O: porta anche la nota dell’ospitante e mostra il tuo nome sulla cassetta.",
              "Chiedi una stampa di conferma registrazione con indirizzo.",
              "Riusa quella lettera come prova di supporto altrove.",
            ],
            note:
              "Alcuni studi accettano moduli online; puoi comunque chiedere una conferma stampata o PDF.",
          },
          {
            h: "Aggiornare dati DVLA",
            items: [
              "Usa contratto di affitto, lettera del council o lettera della banca con indirizzo corretto.",
              "Il formato del postcode deve essere perfetto.",
              "Salva conferme e screenshot dell’invio.",
            ],
            note: "",
          },
          {
            h: "Council Tax / sconti",
            items: [
              "Registrati presto usando i dati del contratto di affitto.",
              "Richiedi sconti single-person/student se ne hai diritto.",
              "Salva in PDF la prima lettera del council: rafforza le richieste agli altri enti.",
            ],
            note: "",
          },
        ]
      : [
          {
            h: "Open/upgrade a bank account",
            items: [
              "Use tenancy OR bank welcome letter (loop below).",
              "If no tenancy, ask HR for an address letter on headed paper.",
              "For C/O: mailbox label with your name + a posted letter addressed to you.",
              "Keep identical address lines across all apps.",
            ],
            note:
              "Many digital banks onboard first, then ask for proof later. Prepare now to avoid freezes.",
          },
          {
            h: "Register with a GP / NHS number",
            items: [
              "Take tenancy or employer letter + ID to reception.",
              "If C/O: bring host note and show mailbox label.",
              "Request a registration confirmation printout with your address.",
              "Reuse that letter as supporting proof elsewhere.",
            ],
            note:
              "Some practices accept online forms; you can still request a printed confirmation.",
          },
          {
            h: "DVLA updates",
            items: [
              "Use tenancy, council letter, or a bank letter with exact address.",
              "Postcode format must be perfect.",
              "Keep submission confirmations/screenshots.",
            ],
            note: "",
          },
          {
            h: "Council Tax setup / discounts",
            items: [
              "Register early with tenancy details.",
              "Apply for single-person/student discounts if eligible.",
              "Save the first council letter PDF; it strengthens other submissions.",
            ],
            note: "",
          },
        ],

    // C/O
    coTitle: it
  ? "Indirizzo C/O fatto bene (ospite, cassetta, testo)"
  : "C/O address done right (host, mailbox, wording)",
    coIntro: it
      ? "Il C/O ti permette di ricevere posta a casa di qualcun altro mentre ti sistemi. Alcuni servizi lo accettano se il testo è corretto."
      : "C/O lets you receive post at someone else’s place while you settle. Some services accept it with the right wording.",
    coWordingTitle: it ? "Formato del testo" : "Wording format",
    coWordingList: it
      ? [
          "Riga 1: C/O <COGNOME OSPITANTE>",
          "Riga 2: Numero civico + via",
          "Città + Postcode",
          "Sulle lettere usa sempre il tuo nome legale come destinatario.",
        ]
      : [
          "Line 1: C/O <HOST SURNAME>",
          "Line 2: House number + Street",
          "Town/City + Postcode",
          "Use your legal name as addressee on mailed letters.",
        ],
    coMailboxTitle: it
      ? "Cassetta della posta & permesso dell’ospite"
      : "Mailbox & host permission",
    coMailboxList: it
      ? [
          "Scrivi il tuo nome sulla cassetta o sul campanello.",
          "Tieni una breve dichiarazione firmata dall’ospitante (modello sotto).",
          "Aggiorna all’indirizzo “tuo” appena ti trasferisci.",
        ]
      : [
          "Label the mailbox with your name.",
          "Keep a signed host note (template below).",
          "Update to your own address once you move.",
        ],
    coNote: it
      ? "Non tutti i servizi accettano il C/O — controlla sempre prima. Usalo come ponte verso una prova di affitto completa."
      : "Not every service accepts C/O—check first. Use it as a bridge to full tenancy proof.",

    // Templates
    templatesTitle: it
  ? "Modelli da copiare (lettere, email, script)"
  : "Templates you can copy (letters, emails, scripts)",
    templateAHeading: it
      ? "A) Lettera del datore di lavoro (carta intestata)"
      : "A) Employer letter (headed paper)",
    templateAIntro: it
      ? "Chiedi a HR di usare questo testo su carta intestata o come PDF firmato (in inglese)."
      : "Ask HR to put this on letterhead or as a signed PDF.",
    templateBHeading: it
      ? "B) Lettera di conferma da landlord/agenzia"
      : "B) Landlord/Agent confirmation letter",
    templateCHeading: it
      ? "C) Richiesta conferma registrazione al GP"
      : "C) GP registration confirmation request",
    templateDHeading: it
      ? "D) Nota di permesso C/O dell’ospitante"
      : "D) C/O host permission note",
    templateEHeading: it
      ? "E) Messaggio per la banca — welcome letter loop"
      : "E) Bank “welcome letter loop” message",
    templateENote: it
      ? "Se non possono spedire, chiedi un estratto conto PDF con indirizzo e data."
      : "If posting isn’t possible, ask for a PDF statement with address to be mailed.",
    templateFHeading: it
      ? "F) Risposta gentile dopo un rifiuto"
      : "F) Rejection fix — polite reply",

    // Evidence bundle
    bundleTitle: it
  ? "Il tuo “evidence bundle” (una cartella, niente panico)"
  : "Your “evidence bundle” (one folder, zero panic)",

    bundleMustH: it ? "Essenziali" : "Must-haves",
    bundleMustItems: it
      ? [
          "Contratto di affitto (PDF) o lettera del datore di lavoro",
          "Lettera ufficiale (council o GP)",
          "Welcome letter/estratto conto della banca",
        ]
      : [
          "Tenancy (PDF) or employer letter",
          "Official letter (council or GP)",
          "Bank welcome/statement letter",
        ],
    bundleExtraH: it ? "Extra utili" : "Extras",
    bundleExtraItems: it
      ? [
          "Conferma SIM/broadband",
          "Lettera dell’università",
          "Nota ospitante + foto della cassetta (C/O)",
        ]
      : [
          "SIM/broadband confirmation",
          "University letter",
          "Host note + mailbox photo (C/O)",
        ],
    bundleNamingH: it ? "Nomi file" : "Naming",
    bundleNamingItems: it
      ? [
          "cognome_documento_YYYY-MM.pdf",
          "Scansioni nitide (senza riflessi; pagina intera)",
          "Tieni un semplice “sent_log.txt” con date e servizi contattati",
        ]
      : [
          "surname_doc_YYYY-MM.pdf",
          "Clear scans (no glare; full page)",
          "Keep a simple “sent_log.txt”",
        ],

    // Naming & scanning
    namingTitle: it
  ? "Nomi dei file, scansioni & igiene dei dati"
  : "File naming, scanning & metadata hygiene",

    scanRulesH: it ? "Regole per scansioni" : "Scan quality rules",
    scanRules: it
      ? [
          "Luce naturale o lampada forte; niente ombre.",
          "Pagina piatta; niente fogli arrotolati.",
          "Mostra tutti gli angoli; non coprire il testo.",
          "Esporta in PDF quando possibile.",
        ]
      : [
          "Daylight or bright lamp; no shadows.",
          "Flat surface; no curled pages.",
          "Show all corners; don’t cover text.",
          "Export as PDF if possible.",
        ],
    namingRulesH: it ? "Nomi file & metadata" : "Naming & metadata",
    namingRules: it
      ? [
          "rossi_tenancy_2025-02-05.pdf",
          "Date e struttura cartelle coerenti.",
          "Rimuovi EXIF se è un problema di privacy.",
        ]
      : [
          "rossi_tenancy_2025-02-05.pdf",
          "Consistent dates and folder structure.",
          "Strip EXIF if privacy-sensitive.",
        ],

    // Rejections
    fixTitle: it
  ? "Motivi classici di rifiuto (e come sistemarli al volo)"
  : "Top rejection reasons (and instant fixes)",

    fixCards: it
      ? [
          {
            h: "Formato dell’indirizzo diverso",
            pts: [
              "Postcode o righe non coincidono.",
              "Fix: copia le righe esatte dal contratto di affitto e reinvia.",
            ],
          },
          {
            h: "Ortografia diversa del nome",
            pts: [
              "Accenti in un documento, assenti in un altro.",
              "Fix: scegli un formato unico (con o senza accenti) e usalo dappertutto.",
            ],
          },
          {
            h: "Lettera troppo vecchia/senza data",
            pts: [
              "Alcuni portali vogliono documenti “recenti”.",
              "Fix: chiedi una lettera emessa nel mese corrente.",
            ],
          },
        ]
      : [
          {
            h: "Address format mismatch",
            pts: [
              "Postcode or line breaks differ.",
              "Fix: copy exact lines from tenancy; resubmit.",
            ],
          },
          {
            h: "Name spelling differences",
            pts: [
              "Accents in one doc, not in others.",
              "Fix: choose one format and use it everywhere.",
            ],
          },
          {
            h: "Outdated/undated letter",
            pts: [
              "Some portals require fresh dates.",
              "Fix: request a letter issued this month.",
            ],
          },
        ],

    // FAQ content (UI) – extended in JSON-LD below
    faqTitle: it ? "Domande frequenti" : "FAQ",
    faqEntries: it
      ? [
          {
            q: "Uno screenshot dell’estratto conto basta?",
            a: "Gli screenshot sono deboli. Chiedi alla banca una lettera spedita per posta o un PDF ufficiale con indirizzo.",
          },
          {
            q: "Stanza in condivisione e nessuna bolletta a mio nome — e adesso?",
            a: "Prova con contratto intestato a te, lettera del landlord/agenzia, lettera del datore di lavoro, lettera del GP o welcome-letter loop della banca.",
          },
          {
            q: "Una lettera solo digitale viene accettata?",
            a: "A volte sì. Le lettere spedite per posta hanno più peso. Se non sei sicuro, chiedi prima al servizio.",
          },
          {
            q: "Il mio GP non vuole stampare una lettera — alternative?",
            a: "Chiedi un PDF di conferma registrazione o un summary stampato; abbina il tutto a contratto/lettera del datore di lavoro.",
          },
        ]
      : [
          {
            q: "Does a bank statement screenshot count?",
            a: "Screenshots are weak. Ask the bank for a posted letter or a formal PDF statement with address.",
          },
          {
            q: "Flat share and no bills in my name—what now?",
            a: "Try tenancy in your name, a landlord/agent letter, employer letter, GP letter, or the bank welcome-letter loop.",
          },
          {
            q: "Will a digital-only letter be accepted?",
            a: "Sometimes. Posted letters carry more weight. If unsure, ask the service first.",
          },
          {
            q: "My GP won’t print a letter—alternative?",
            a: "Request a PDF registration confirmation or summary printout; pair with tenancy/employer letter.",
          },
        ],

    // Related guides
    relatedTitle: it ? "Guide Resinaro correlate" : "Related Resinaro guides",
    relatedLinks: it
      ? [
          {
            href: "/community/open-uk-bank-account-no-credit-italians-2025",
            label:
              "Rifiutato dalle banche UK? Sistema il KYC e apri il conto (Inglese semplice)",
          },
          {
            href: "/community/council-tax-italians-2025",
            label:
              "Council Tax per italiani — band, sconti e passi quando ti trasferisci (2025)",
          },
          {
            href: "/community/uk-renting-for-italians-2025",
            label:
              "Affittare nel Regno Unito — Right to Rent, referenze e depositi",
          },
        ]
      : [
          {
            href: "/community/open-uk-bank-account-no-credit-italians-2025",
            label:
              "Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)",
          },
          {
            href: "/community/council-tax-italians-2025",
            label:
              "Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)",
          },
          {
            href: "/community/uk-renting-for-italians-2025",
            label:
              "UK Renting for Italians — Right to Rent, Referencing & Deposits",
          },
        ],

    // Main CTA
    ctaTitle: it
      ? "Vuoi che prepariamo noi il tuo evidence bundle oggi?"
      : "Want us to assemble your proof-of-address bundle today?",
    ctaBody: it
      ? "Analizziamo la tua situazione, prepariamo le lettere giuste e ti restituiamo uno ZIP ordinato con nomi file e piano di invio passo-passo."
      : "We review your situation, craft the right letters, and return a polished ZIP with filenames and a step-by-step submission plan.",
    ctaPrimary: it
      ? "Proof-of-Address Bundle (+£20)"
      : "Proof-of-Address Bundle (+£20)",
    ctaSecondary: it
      ? "Vedi servizi Resinaro →"
      : "View Resinaro Services →",

    // Disclaimer
    disclaimer: it
      ? "Queste sono informazioni generali, non consulenza legale. Le liste di documenti accettati cambiano — segui sempre le istruzioni più recenti nel sito/app del servizio. Alcuni link possono generare una piccola commissione senza costi extra per te; aiuta a mantenere le guide gratuite e aggiornate."
      : "This is general information, not legal advice. Acceptance lists change—always follow the latest instructions in the service’s app or site. Some links may earn a small commission at no extra cost to you; it helps keep guides free and updated.",

    // Right rail
    tocTitle: it ? "In questa pagina" : "On this page",
    tocLinks: it
      ? [
          { href: "#before-checklist", label: "Prima di iniziare" },
          { href: "#accepted-docs", label: "12 documenti accettati" },
          { href: "#step-by-step", label: "Piano step-by-step" },
          {
            href: "#tricky-situations",
            label: "Situazioni complicate (C/O, stanze, amici)",
          },
          { href: "#tools", label: "Strumenti interattivi" },
          { href: "#bundle", label: "Evidence bundle" },
          { href: "#naming", label: "Scansioni & nomi file" },
          { href: "#fix", label: "Come correggere i rifiuti" },
          { href: "#kits", label: "Kit opzionali (Amazon)" },
          { href: "#faq", label: "FAQ" },
        ]
      : [
          { href: "#before-checklist", label: "Before you start" },
          { href: "#accepted-docs", label: "12 accepted documents" },
          { href: "#step-by-step", label: "Step-by-step plan" },
          {
            href: "#tricky-situations",
            label: "Tricky situations (C/O, house shares)",
          },
          { href: "#tools", label: "Interactive tools" },
          { href: "#bundle", label: "Evidence bundle" },
          { href: "#naming", label: "Scan & naming hygiene" },
          { href: "#fix", label: "Rejection fixes" },
          { href: "#kits", label: "Optional kits (Amazon)" },
          { href: "#faq", label: "FAQ" },
        ],
    tocButton: it ? "Ottieni il bundle" : "Get the bundle",
  };
}

/* -------------------------------- Page -------------------------------- */

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const copy = t(locale);
  const isItalian = locale === "it";
  const toolsLocale = locale === "it" ? "it" : "en";

  // JSON-LD: FAQ (extended in Part 2)
  // JSON-LD: HowTo (extended in Part 2)
  // JSON-LD: Article (extended in Part 2)

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
            {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            locale === "it"
              ? {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name:
                        "Posso provare il mio indirizzo UK senza bollette di utenze?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Sì. Chi è appena arrivato spesso usa alternative: contratto di affitto, lettere del datore di lavoro, lettere del GP/NHS, lettere del council, welcome letter della banca e altro. Questa guida mostra 12 documenti accettati e modelli pronti.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Cos’è un indirizzo C/O e viene accettato?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "C/O (care of) significa che ricevi posta a casa di un’altra persona in modo temporaneo. Alcune banche e servizi lo accettano se il testo è corretto e c’è il consenso dell’ospitante. Controlla sempre i requisiti precisi.",
                      },
                    },
                    {
                      "@type": "Question",
                      name:
                        "Qual è la prova più veloce per i controlli KYC della banca?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Un contratto di affitto a tuo nome o una welcome letter della banca inviata al tuo indirizzo sono spesso le più rapide. Alcune banche digitali aprono l’account e chiedono la prova solo in un secondo momento.",
                      },
                    },
                    {
                      "@type": "Question",
                      name:
                        "Posso usare una lettera del datore di lavoro o dell’università?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Sì. Molte istituzioni accettano lettere su carta intestata di datore di lavoro o università che confermano il tuo indirizzo UK. Devono includere nome, indirizzo e data.",
                      },
                    },
                    {
                      "@type": "Question",
                      name:
                        "Cosa succede se il mio nome ha accenti o caratteri speciali?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Usa lo stesso formato ovunque. Se un sistema non accetta gli accenti, toglili e mantieni quella versione su banca, council, GP, per evitare incongruenze.",
                      },
                    },
                    {
                      "@type": "Question",
                      name:
                        "Come preparo un “pacchetto di prove” per ridurre i rifiuti?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Crea un evidence bundle ordinato: contratto di affitto in PDF, lettere ufficiali (council/GP) e welcome letter della banca. Dai nomi chiari ai file e usa scansioni di qualità. Segui checklist e modelli della guida.",
                      },
                    },
                  ],
                }
              : {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Can I prove my UK address without utility bills?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes. Newcomers often use alternatives: tenancy agreements, employer letters, GP registration letters, council letters, bank welcome letters, and more. This guide shows 12 accepted documents and exact templates.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is a C/O address and is it accepted?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "C/O (care of) means you receive mail at someone else’s address temporarily. Some banks and services accept it with correct wording and a host permission note. Always verify the exact requirements.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which proof is fastest for bank KYC?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "A tenancy agreement in your name or a bank’s own welcome letter sent to your address are often fastest. Some digital banks accept initial onboarding without proof, then ask for it later.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I use a letter from my employer or university?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Yes. Many institutions accept employer or university letters on headed paper confirming your UK address. The letter must include your name, address, and date.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What if my name has accents or special characters?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Use the same format across all services. If a system rejects accents, remove them consistently (bank, council, GP) to avoid mismatches.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I bundle evidence to avoid rejections?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text:
                          "Create a tidy evidence bundle: tenancy PDF, official letters (council/GP), and a bank welcome letter. Name files clearly and use high-quality scans. Follow our checklist and templates.",
                      },
                    },
                  ],
                }
          ),
        }}
      />

      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            locale === "it"
              ? {
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  name:
                    "Creare un pacchetto di prova di indirizzo UK in 20 minuti (senza bollette)",
                  totalTime: "PT20M",
                  step: [
                    {
                      "@type": "HowToStep",
                      name: "Scegli il documento più veloce",
                      text:
                        "Parti dal contratto di affitto o da una welcome letter della banca. Se non li hai, usa i modelli di lettera del datore di lavoro/GP di questa guida.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Aggiungi un secondo documento di supporto",
                      text:
                        "Aggiungi, se possibile, una lettera del council, una lettera di registrazione GP/NHS o una lettera dell’università.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Usa il formato di indirizzo corretto",
                      text:
                        "Includi numero civico, via, città e postcode completo. Se usi C/O, segui la formula consigliata nella guida.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Scansiona bene e rinomina i file",
                      text:
                        "Usa buona luce e superficie piana. Dai nomi chiari ai file, tipo cognome_documento_YYYY-MM-DD.pdf.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Invia e tieni traccia",
                      text:
                        "Invia solo ciò che il servizio richiede. Tieni un piccolo log con date e conferme. In caso di rifiuto, usa i modelli di risposta.",
                    },
                  ],
                }
              : {
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  name:
                    "Build a UK proof-of-address bundle in 20 minutes (without utility bills)",
                  totalTime: "PT20M",
                  step: [
                    {
                      "@type": "HowToStep",
                      name: "Choose your fastest document",
                      text:
                        "Start with your tenancy agreement or a bank welcome letter. If not available, use an employer/GP letter template from this guide.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Add a second backup",
                      text:
                        "Add a council letter, NHS/GP registration letter, or university letter if possible.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Use correct address format",
                      text:
                        "Include house number, street, city, and full postcode. For C/O lines, follow the wording tips in this guide.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Scan clearly and name files",
                      text:
                        "Use bright light and flat surfaces. Name files with date and type, like surname_doc_YYYY-MM-DD.pdf.",
                    },
                    {
                      "@type": "HowToStep",
                      name: "Submit and track",
                      text:
                        "Send only what the service asks for. Keep a log of dates and confirmations. If rejected, use our fix templates.",
                    },
                  ],
                }
          ),
        }}
      />

      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              locale === "it"
                ? "Prova di indirizzo senza bollette UK (2025)"
                : "Proof of Address Without Bills UK (2025)",
            description: locale === "it" ? DESCRIPTION_IT : DESCRIPTION_EN,
            inLanguage: copy.lang,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                locale === "it"
                  ? "https://www.resinaro.com/it/community/proof-of-address-without-bills-2025"
                  : "https://www.resinaro.com/en/community/proof-of-address-without-bills-2025",
            },
          }),
        }}
      />


      {/* —— HERO —— */}
      <section className="relative w-full h-[62vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/proof-of-address-uk-hero.png"
          alt={copy.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide bg-emerald-700/85 px-3 py-1 rounded-full">
                {copy.heroChip}
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                {copy.heroTitle}
              </h1>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                {copy.heroSubtitle}
              </p>
              <p className="mt-4 text-[12px] text-white/80">
                {copy.heroMeta}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* —— Meta bar —— */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xs text-gray-600 flex flex-wrap gap-x-6 gap-y-2">
          {copy.metaBarItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          {/* —— MAIN —— */}
          <div>
            {/* Quick answers */}
            <section className="mb-8">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {copy.quickCards.map((c) => (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="group rounded-2xl bg-white border shadow-sm px-4 py-4 hover:border-emerald-300 transition"
                  >
                    <p className="font-semibold text-emerald-900">
                      {c.title} →
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">
                      {c.sub}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Why this guide */}
            <section className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {copy.whyTitle}
              </h2>
              <p className="mb-3">{copy.whyP1}</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {copy.whyBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-600">
                {isItalian
                  ? "Consiglio: meglio prepararsi prima (“meglio prepararsi prima che farsi bloccare dopo”). Anche se non ti serve oggi, avere prove d’indirizzo ti evita tanti rifiuti più avanti."
                  : "Tip: meglio prepararsi prima — even if no one is asking for proof today, building a small bundle now saves a lot of stress and rejections later."}
              </p>
            </section>

            {/* Before-you-start checklist */}
            <section
              id="before-checklist"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="md:w-2/5">
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                    {isItalian
                      ? "Prima di iniziare: sei pronto?"
                      : "Before you start: are you ready?"}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {isItalian
                      ? "In 30–60 secondi controlli le basi: documento, indirizzo, possibilità di ricevere posta. Quando tutto è spuntato, puoi costruire il bundle senza sorprese."
                      : "In 30–60 seconds you check the basics: ID, address, ability to receive post. Once everything is ticked, you can build your bundle without nasty surprises."}
                  </p>
                </div>
                <div className="md:w-3/5 mt-3 md:mt-0">
                  <AddressProofChecklist locale={toolsLocale} />
                </div>
              </div>
            </section>

            {/* 1) Accepted docs */}
            <section
              id="accepted-docs"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                {copy.acceptedTitle}
              </h2>
              <p className="mb-3">{copy.acceptedIntro}</p>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-[#F4EFE8]">
                    <tr className="[&>th]:text-left [&>th]:p-3 [&>th]:border-b">
                      <th>#</th>
                      <th>{locale === "it" ? "Documento" : "Document"}</th>
                      <th>
                        {locale === "it"
                          ? "Dove funziona meglio"
                          : "Where it works best"}
                      </th>
                      <th>
                        {locale === "it"
                          ? "Come ottenerlo in fretta"
                          : "How to get it fast"}
                      </th>
                      <th>
                        {locale === "it" ? "Note / limiti" : "Caveats"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:nth-child(even)]:bg-[#FBF9F6]">
                    {copy.acceptedRows.map((row) => (
                      <tr
                        key={row.i}
                        className="[&>td]:p-3 border-b align-top"
                      >
                        <td className="font-semibold">{row.i}</td>
                        <td>{row.name}</td>
                        <td>{row.best}</td>
                        <td>{row.how}</td>
                        <td>{row.caveat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                {copy.acceptedNote}
              </p>
            </section>

            {/* 2) Step-by-step plan */}
            <section
              id="step-by-step"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {isItalian
                  ? "Piano step-by-step: dal caos al bundle"
                  : "Step-by-step: from chaos to a clean bundle"}
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                {isItalian
                  ? "L’obiettivo non è trovare “un documento magico”, ma costruire un piccolo pacchetto coerente. Questi quattro passi funzionano bene per la maggior parte delle persone che arrivano in UK senza bollette."
                  : "The goal is not a single magic document, but a small, consistent bundle. These four steps work for most newcomers who arrive in the UK with zero bills."}
              </p>
              <div className="grid md:grid-cols-2 gap-5 text-sm">
                {/* Step 1 */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Passo 1 — Elenca quello che hai già"
                      : "Step 1 — List what you already have"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Controlla email, cassetta della posta e documenti di lavoro/studio."
                        : "Check your email, mailbox, and any work/study documents."}
                    </li>
                    <li>
                      {isItalian
                        ? "Metti da parte: eventuale contratto di affitto, lettere di datore di lavoro, università, GP/NHS, council."
                        : "Put aside any tenancy, employer letters, university letters, GP/NHS or council letters you already have."}
                    </li>
                    <li>
                      {isItalian
                        ? "Guarda la tabella sopra e segna mentalmente quali numeri (1–12) puoi già coprire."
                        : "Look at the table above and mentally tick which numbers (1–12) you already cover."}
                    </li>
                  </ul>
                  <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs text-emerald-900 italic">
                    {isItalian
                      ? "Consiglio Resinaro: avere già 1–2 documenti “forti” (affitto, council, banca) ti mette a metà dell’opera."
                      : "Resinaro tip: having 1–2 “strong” docs (tenancy, council, bank letter) means you’re already halfway there."}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Passo 2 — Richiedi nuovi documenti mirati"
                      : "Step 2 — Request targeted new documents"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Se ti manca un documento “forte”, parti da: contratto di affitto aggiornato, lettera del datore di lavoro, lettera del GP o del council."
                        : "If you’re missing a “strong” doc, start with: updated tenancy, employer letter, GP letter or council letter."}
                    </li>
                    <li>
                      {isItalian
                        ? "Usa i nostri modelli (più sotto) per chiedere lettere semplici ma complete."
                        : "Use the templates below to request simple but complete letters."}
                    </li>
                    <li>
                      {isItalian
                        ? "Evita email “disperate”: meglio un testo calmo, cortese e chiaro."
                        : "Avoid “desperate” emails; calm, polite and clear text works best."}
                    </li>
                  </ul>
                  <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs text-emerald-900 italic">
                    {isItalian
                      ? "Consiglio Resinaro: chiedi sempre che nella lettera ci siano nome completo, indirizzo UK completo e data di emissione."
                      : "Resinaro tip: always ask for your full name, full UK address and an issue date on the letter."}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Passo 3 — Organizza, scansiona, rinomina"
                      : "Step 3 — Organise, scan, rename"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Metti i documenti originali in una cartellina separata per non rovinarli."
                        : "Keep your original letters in a separate folder so they don’t get damaged."}
                    </li>
                    <li>
                      {isItalian
                        ? "Scansiona o fotografa ogni documento in modo leggibile (vedi regole più sotto)."
                        : "Scan or photograph each document clearly (see rules below)."}
                    </li>
                    <li>
                      {isItalian
                        ? "Usa nomi file coerenti: cognome_tipo_anno-mese (es. rossi_council_2025-03)."
                        : "Use consistent filenames: surname_type_year-month (e.g. rossi_council_2025-03)."}
                    </li>
                  </ul>
                  <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs text-emerald-900 italic">
                    {isItalian
                      ? "Consiglio Resinaro: un po’ di ordine ora ti evita di ricaricare gli stessi documenti su 10 portali diversi."
                      : "Resinaro tip: a little structure now saves you from uploading the same doc to 10 portals again and again."}
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Passo 4 — Presenta il bundle nel modo giusto"
                      : "Step 4 — Present your bundle the right way"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Per banca/fintech: segui sempre la lista ufficiale nell’app, non aggiungere file inutili."
                        : "For banks/fintech: follow the official list in the app; don’t add random extra files."}
                    </li>
                    <li>
                      {isItalian
                        ? "Per GP/council: porta almeno un documento forte + uno di supporto (es. affitto + lettera GP)."
                        : "For GP/council: aim for at least one strong doc + one supporting doc (e.g. tenancy + GP letter)."}
                    </li>
                    <li>
                      {isItalian
                        ? "Per consolato: controlla sempre la pagina ufficiale il giorno prima, poi crea un PDF unico con tutte le pagine necessarie."
                        : "For consulate: always re-check the official page the day before, then build one tidy PDF with the pages they ask for."}
                    </li>
                  </ul>
                  <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs text-emerald-900 italic">
                    {isItalian
                      ? "Consiglio Resinaro: se ti rifiutano, raramente è “colpa tua” al 100%. Usa i nostri modelli di risposta per capire cosa manca e riprovare con calma."
                      : "Resinaro tip: if you get rejected, it’s rarely 100% “your fault”. Use the reply templates below to understand what’s missing and calmly try again."}
                  </div>
                </div>
              </div>
            </section>

            {/* 3) Fastest routes by goal */}
            <section id="fastest-routes" className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {copy.fastestTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {copy.fastestCards.map((card) => (
                  <div
                    key={card.h}
                    className="bg-white border rounded-2xl p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-emerald-900 mb-2">
                      {card.h}
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      {card.items.map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ol>
                    {card.note ? (
                      <p className="text-xs text-gray-600 mt-2">
                        {card.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* 4) C/O setup */}
            <section
              id="co-setup"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                {copy.coTitle}
              </h2>
              <p className="mb-3">{copy.coIntro}</p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">
                    {copy.coWordingTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {copy.coWordingList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">
                    {copy.coMailboxTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {copy.coMailboxList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">{copy.coNote}</p>
            </section>

            {/* 5) Tricky situations */}
            <section
              id="tricky-situations"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {isItalian
                  ? "Situazioni complicate: stanze, C/O, amici, Airbnb"
                  : "Tricky situations: house shares, C/O, friends, Airbnb"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {/* House share / bills included */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Stanza con bollette incluse"
                      : "Room with bills included"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Chiedi un contratto o una lettera intestata a te (anche se le bollette sono a nome del landlord)."
                        : "Ask for a contract or headed letter in your name (even if bills stay in the landlord’s name)."}
                    </li>
                    <li>
                      {isItalian
                        ? "Abbina questa prova a una lettera del datore di lavoro o del GP per rafforzare il pacchetto."
                        : "Combine this with an employer or GP letter to strengthen your bundle."}
                    </li>
                    <li>
                      {isItalian
                        ? "Se l’agenzia non collabora, valuta di cambiare struttura appena possibile."
                        : "If the agency won’t cooperate at all, consider moving when you can."}
                    </li>
                  </ul>
                </div>

                {/* Staying with friends/family */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Ospitato da amici/famiglia (indirizzo C/O)"
                      : "Staying with friends/family (C/O address)"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Metti il tuo nome sulla cassetta o sul campanello, se possibile."
                        : "Put your name on the mailbox or buzzer if possible."}
                    </li>
                    <li>
                      {isItalian
                        ? "Usa la formula C/O indicata sopra + nota firmata dell’ospitante."
                        : "Use the C/O wording above plus a signed host note."}
                    </li>
                    <li>
                      {isItalian
                        ? "Fatti inviare almeno una lettera ufficiale a tuo nome (banca, GP, council) a quell’indirizzo."
                        : "Get at least one official letter in your name (bank, GP, council) sent to that address."}
                    </li>
                  </ul>
                </div>

                {/* Short-term stays */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Airbnb, ostello o alloggio temporaneo"
                      : "Airbnb, hostel or temporary stay"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Spesso non è accettato come prova di indirizzo principale."
                        : "Often not accepted as primary proof of address."}
                    </li>
                    <li>
                      {isItalian
                        ? "Usalo solo come fase di transizione mentre cerchi un affitto più stabile."
                        : "Treat it as a bridge while you secure a more stable tenancy."}
                    </li>
                    <li>
                      {isItalian
                        ? "Appena hai un indirizzo più fisso, aggiorna tutti i servizi principali (banca, datore di lavoro, GP)."
                        : "Once you have a more stable address, update your bank, employer, GP and council as soon as possible."}
                    </li>
                  </ul>
                </div>

                {/* Job started, no tenancy yet */}
                <div className="border rounded-xl p-4 bg-neutral-50/60">
                  <h3 className="font-semibold text-emerald-900 mb-1">
                    {isItalian
                      ? "Hai già iniziato a lavorare ma non hai ancora una casa"
                      : "Job already started but no fixed address yet"}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      {isItalian
                        ? "Chiedi subito una lettera di conferma indirizzo al datore di lavoro (vedi modello)."
                        : "Ask HR immediately for an address confirmation letter (see template)."}
                    </li>
                    <li>
                      {isItalian
                        ? "Se temporaneamente ospitato, usa C/O + lettera del datore di lavoro come combinazione."
                        : "If you’re temporarily hosted, combine C/O + employer letter."}
                    </li>
                    <li>
                      {isItalian
                        ? "Quando firmi un contratto di affitto, aggiorna tutti i sistemi e inizia a conservare le prime lettere del council/banca."
                        : "As soon as you sign a tenancy, update all systems and start keeping your first council/bank letters."}
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-600">
                    {isItalian
                      ? "Se ti trovi bloccato in una di queste situazioni, il team Resinaro può analizzare il tuo caso e suggerire il percorso più realistico."
                      : "If you feel stuck in one of these situations, the Resinaro team can look at your case and suggest the most realistic next steps."}
                  </p>
                </div>
              </div>
            </section>

            {/* 6) Templates */}
            <section id="templates" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {copy.templatesTitle}
              </h2>

              {/* A */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateAHeading}
                </h3>
                <p className="mb-2">{copy.templateAIntro}</p>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`<Company Name and Logo>
<Company Address>
<Phone/Email>
<Date>

To whom it may concern,

This letter confirms that <Full Name> (employee ID: <ID>) is employed at <Company Name>.
Their current UK address is:

<House Number and Street>
<Town/City>
<Postcode>

This information is correct to the best of our knowledge as of the date above.

Signed,
<Manager/HR Name>
<Title>
<Contact details>`}
                </pre>
              </div>

              {/* B */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateBHeading}
                </h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`<Agency Name and Logo>
<Agency Address>
<Phone/Email>
<Date>

Re: Proof of address for <Full Name>

We confirm that <Full Name> resides at:

<House Number and Street>
<Town/City>
<Postcode>

Tenancy start date: <DD/MM/YYYY>.

If you require further information, please contact us.

Kind regards,
<Agent Name>
<Title>`}
                </pre>
              </div>

              {/* C */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateCHeading}
                </h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`Subject: Confirmation of registration — <Your Name>

Hello,

I recently registered at your practice. Could you please provide a brief letter confirming my registration and current address:

<Your Full Name>
<House Number and Street>
<Town/City>
<Postcode>

This helps me complete other UK setup steps. Thank you very much.

Kind regards,
<Your Name>
<Phone / Email>`}
                </pre>
              </div>

              {/* D */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateDHeading}
                </h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`To whom it may concern,

I, <Host Full Name>, confirm that <Your Full Name> may receive mail at my address:

<House Number and Street>
<Town/City>
<Postcode>

They are temporarily staying with me. I understand that letters may be sent to them here.

Signed,
<Host Full Name>    <Date>
<Contact details>`}
                </pre>
              </div>

              {/* E */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateEHeading}
                </h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`Hello Support,

Could you please send a confirmation/welcome letter to my current address:

<Your Full Name>
C/O <Host Surname> (if relevant)
<House Number and Street>
<Town/City>
<Postcode>

This letter will be used to complete verification at other services. Many thanks!`}
                </pre>
                <p className="text-xs text-gray-600 mt-2">
                  {copy.templateENote}
                </p>
              </div>

              {/* F */}
              <div className="bg-white border rounded-2xl p-5 text-sm shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  {copy.templateFHeading}
                </h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
{`Subject: Address proof — resubmission with corrected details

Hello,

Thank you for your message. I have updated my proof of address with the exact format requested.
Please find attached:

• <Document name> (PDF) — full address with postcode and date
• <Optional second document> (PDF) — supporting letter

Could you please review this new submission? Thank you for your help.

Kind regards,
<Your Name>`}
                </pre>
              </div>
            </section>

            {/* 5) Evidence bundle */}
            <section
              id="bundle"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                {copy.bundleTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">
                    {copy.bundleMustH}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {copy.bundleMustItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">
                    {copy.bundleExtraH}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {copy.bundleExtraItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">
                    {copy.bundleNamingH}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {copy.bundleNamingItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 6) Interactive tools */}
            <section
              id="tools"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {isItalian
                  ? "Strumenti interattivi: planner, lettere, scadenze"
                  : "Interactive tools: planner, letters, expiry tracker"}
              </h2>
              <p className="text-sm text-gray-700 mb-5">
                {isItalian
                  ? "Questi strumenti restano solo nel tuo browser (niente salvataggi su server). Usali per capire quali prove puoi ottenere, generare bozze di lettere e tenere d’occhio le date."
                  : "These tools live only in your browser (nothing is stored on our servers). Use them to see which proofs you can get, generate letter drafts, and keep an eye on dates."}
              </p>

              <div className="space-y-8">
                {/* Proof builder */}
                <div className="border rounded-xl p-4 md:p-5 bg-neutral-50/60">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                    {isItalian
                      ? "Planner “proof bundle”"
                      : "Proof-of-address bundle planner"}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {isItalian
                      ? "Spunta i documenti che hai o che puoi ottenere nei prossimi 30 giorni. Il planner ti dà un piccolo riassunto del “livello di forza” del tuo pacchetto."
                      : "Tick the documents you have or can realistically get in the next 30 days. The planner gives you a short summary of how strong your bundle is."}
                  </p>
                  <AddressProofBuilder locale={toolsLocale} />
                </div>

                {/* Letter generator */}
                <div className="border rounded-xl p-4 md:p-5 bg-neutral-50/60">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                    {isItalian
                      ? "Generatore di lettere (EN + IT)"
                      : "Letter generator (EN + IT)"}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {isItalian
                      ? "Scegli il destinatario (datore di lavoro, landlord, GP, banca) e compila i campi base. Otterrai due bozze: una in inglese e una in italiano, da copiare e personalizzare."
                      : "Choose who you’re writing to (employer, landlord, GP, bank) and fill the basic fields. You’ll get two drafts: one in English and one in Italian, ready to copy and personalise."}
                  </p>
                  <AddressProofLetterGenerator locale={toolsLocale} />
                </div>

                {/* Expiry tracker */}
                <div className="border rounded-xl p-4 md:p-5 bg-neutral-50/60">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                    {isItalian
                      ? "Tracker scadenze documenti"
                      : "Document expiry tracker"}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {isItalian
                      ? "Alcune lettere “scadono” dopo 3 mesi per certe banche o enti. Usa questo piccolo tracker per segnarti date di emissione e capire cosa va aggiornato."
                      : "Some letters are considered “too old” after 3 months by some banks or authorities. Use this small tracker to log issue dates and see what might need refreshing."}
                  </p>
                  <AddressProofExpiryTracker locale={toolsLocale} />
                </div>
              </div>
            </section>

                        {/* 6) Naming & scans */}
            <section id="naming" className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {copy.namingTitle}
              </h2>
              <div className="bg-white border rounded-2xl p-5 text-sm shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">
                      {copy.scanRulesH}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {copy.scanRules.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">
                      {copy.namingRulesH}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {copy.namingRules.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-600">
                  {isItalian
                    ? "Molti rifiuti arrivano da scansioni tagliate, foto sfocate o file con nomi confusi. Tratta i tuoi documenti come se dovessero leggerli in 10 secondi sullo schermo."
                    : "Most rejections come from cropped scans, blurry photos or confusing filenames. Assume the person reviewing your docs has 10 seconds on a small screen."}
                </p>
              </div>
            </section>

            {/* 7) Rejections */}
            <section
              id="fix"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                {copy.fixTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {copy.fixCards.map((card) => (
                  <div
                    key={card.h}
                    className="bg-[#FBF9F6] border rounded-xl p-4"
                  >
                    <h3 className="font-semibold text-emerald-900">
                      {card.h}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {card.pts.map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-600">
                {isItalian
                  ? "Se ricevi un rifiuto, non prenderla sul personale. Spesso è solo un dettaglio tecnico (data, formato del postcode, documento troppo vecchio). Usa il modello di risposta qui sopra e chiedi cosa manca in modo calmo e specifico."
                  : "If you get a rejection, don’t take it personally. It is usually a technical detail (date, postcode format, document too old). Use the reply template above and calmly ask what’s missing."}
              </p>
            </section>

            {/* 8) Optional kits (Amazon) */}
<section id="kits" className="mb-10">
  <AddressProofAffiliateKits locale={toolsLocale} />
</section>


            {/* FAQ */}
            <section
              id="faq"
              className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                {copy.faqTitle}
              </h2>
              <div className="space-y-4 text-sm">
                {copy.faqEntries.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-neutral-50 rounded-lg p-4 border"
                  >
                    <summary className="cursor-pointer font-semibold text-emerald-900">
                      {f.q}
                    </summary>
                    <p className="mt-2 text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section id="related" className="mt-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
                {copy.relatedTitle}
              </h2>
              <ul className="list-disc pl-6 text-sm">
                {copy.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="underline text-emerald-900"
                      href={p(locale, link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="mt-10 bg-white border rounded-2xl shadow-sm p-6 md:p-7">
              <h2 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2">
                {copy.ctaTitle}
              </h2>
              <p className="text-sm mb-4">{copy.ctaBody}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/checkout/proof-of-address-bundle"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium text-sm md:text-[15px]"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  href={p(locale, "/services")}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-100 text-emerald-900 font-medium border text-sm md:text-[15px]"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
              <p className="mt-3 text-[11px] text-gray-500">
                {isItalian
                  ? "Di solito riusciamo a preparare il bundle entro 24–48 ore lavorative in base alla complessità del caso."
                  : "In most cases we can prepare your bundle within 24–48 working hours, depending on complexity."}
              </p>
            </section>

            {/* Disclosure */}
            <p className="mt-8 text-xs text-gray-500 italic">
              {copy.disclaimer}
            </p>
          </div>

          {/* —— RIGHT RAIL (sticky) —— */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <p className="text-xs font-semibold text-emerald-900 mb-2">
                  {copy.tocTitle}
                </p>
                <nav className="text-sm space-y-2">
                  {copy.tocLinks.map((item) => (
                    <a
                      key={item.href}
                      className="block hover:underline"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 border-t pt-4 space-y-3">
                  <Link
                    href="/checkout/proof-of-address-bundle"
                    className="inline-flex items-center px-3 py-2 rounded-lg bg-emerald-700 text-white text-sm font-medium w-full justify-center"
                  >
                    {copy.tocButton}
                  </Link>
                  <Link
                    href="#tools"
                    className="inline-flex items-center px-3 py-2 rounded-lg bg-neutral-50 text-emerald-900 text-xs font-medium border w-full justify-center"
                  >
                    {isItalian
                      ? "Vai agli strumenti interattivi"
                      : "Jump to interactive tools"}
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

