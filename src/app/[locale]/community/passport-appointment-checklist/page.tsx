// src/app/[locale]/community/passport-appointment-checklist/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { p } from "@/lib/localePath";

type Locale = "en" | "it";

export const metadata: Metadata = {
  title: "Italian Passport Appointment Checklist UK (2025)",
  description:
    "Exactly what to bring to your Italian passport appointment in the UK: documents, photos, payment tips, timing and how to avoid wasted trips.",
  alternates: { canonical: "/community/passport-appointment-checklist" },
  openGraph: {
    title: "Italian Passport Appointment Checklist UK (2025)",
    description:
      "Step-by-step checklist for what to bring to your Italian passport appointment in the UK, plus real timelines and support options.",
    type: "article",
  },
};

const PUBLISHED = "2025-12-05";
const UPDATED = "2025-12-05";

/* ----------------------------- i18n strings ---------------------------- */
function t(locale: Locale) {
  const it = locale === "it";

  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Persona che consegna il passaporto italiano allo sportello del consolato nel Regno Unito"
      : "Person handing in an Italian passport at the consulate desk in the UK",
    heroBadge: it
      ? "Passaporto • Giorno dell’appuntamento"
      : "Passport • Appointment day",
    heroTitleA: it ? "Cosa portare al consolato" : "What to bring to the consulate",
    heroTitleB: it
      ? "per il rinnovo del passaporto (UK, 2025)"
      : "for your passport appointment (UK, 2025)",
    heroLead: it
      ? "Hai già l’appuntamento Prenot@Mi: ora l’importante è non dimenticare documenti, foto e pagamento per non dover tornare un’altra volta."
      : "You’ve already booked on Prenot@Mi: now the goal is not to forget documents, photos or payment and risk another long trip.",
    ctaCopy: it
      ? "Se vuoi, possiamo controllare insieme la tua checklist prima del giorno X — così riduci al minimo il rischio di sorprese allo sportello."
      : "If you’d like, we can review your checklist with you before the big day — so you minimise nasty surprises at the desk.",
    ctaSub: it
      ? "Supporto privato di Resinaro. Non siamo il consolato e non abbiamo canali “segreti”."
      : "Private support from Resinaro. We’re not the consulate and we don’t have any “secret channels”.",
    ctaBtnPrimary: it ? "Chiedi un controllo documenti" : "Get a document check",
    ctaBtnSecondary: it ? "Vedi servizi passaporto" : "View passport services",
    pub: it ? "Pubblicato: 5 Dic 2025" : "Published: 5 Dec 2025",
    upd: it ? "Aggiornato: 5 Dic 2025" : "Updated: 5 Dec 2025",
    read: it ? "~8 min lettura" : "~8 min read",

    // TL;DR
    tldrH: it
      ? "Riassunto rapido — se hai poco tempo"
      : "TL;DR — if you only have 30 seconds",
    tldr1Bold: it
      ? "1) Tre cose che quasi tutti devono portare:"
      : "1) Three things almost everyone must bring:",
    tldr1P: it
      ? "passaporto italiano vecchio, 2 fototessere conformi agli standard e modulo di domanda compilato come richiesto dal consolato."
      : "your old Italian passport, 2 consulate-compliant passport photos and the application form filled in exactly as your consulate asks.",
    tldr2Bold: it ? "2) Pagamento:" : "2) Payment:",
    tldr2P: it
      ? "la tariffa consolato cambia ogni pochi mesi, ma di solito è intorno a £90–£100 per un passaporto adulto. Verifica sempre il tariffario ufficiale il giorno prima."
      : "the consular fee changes every few months, but is usually around £90–£100 for an adult passport. Always check the official fee table the day before.",
    tldr3Bold: it
      ? "3) Tempi il giorno dell’appuntamento:"
      : "3) Timing on the appointment day:",
    tldr3P: it
      ? "in molti casi resti in zona 1–2 ore: paghi, consegni i documenti e torni più tardi quando ti chiamano per ritirare il nuovo passaporto."
      : "in many cases you’ll be around for 1–2 hours: you pay, hand in documents, then come back when they call you to collect the new passport.",

    miniCtaP: it
      ? "Vuoi una checklist stampabile in PDF da tenere nel portafoglio o sul frigo?"
      : "Want a printable passport-day checklist (PDF) for your wallet or fridge?",
    miniCtaBtn: it ? "Mandami la checklist" : "Send me the checklist",

    // Key takeaways
    take1H: it
      ? "Ogni consolato ha la sua lista ufficiale"
      : "Each consulate has its own official list",
    take1P: it
      ? "Questa guida è un riassunto pratico. Per sicurezza fai sempre riferimento alla pagina passaporti del tuo consolato."
      : "This guide is practical, not official. Always double-check your consulate’s passport page before travelling.",
    take2H: it
      ? "Piccoli dettagli possono bloccare la pratica"
      : "Small details can block your case",
    take2P: it
      ? "Foto non conformi, documenti scaduti o prove di indirizzo vecchie sono tra i motivi più comuni di rinvio."
      : "Wrong-style photos, expired documents or outdated proof of address are some of the most common reasons for delays.",
    take3H: it
      ? "Meglio preparare una busta dedicata"
      : "Put everything in one dedicated folder",
    take3P: it
      ? "Tieni tutti i documenti in un’unica busta/porta-documenti: il giorno dell’appuntamento farai meno confusione allo sportello."
      : "Keep everything in a single folder or wallet: on the day it makes the interaction at the desk much calmer.",

    // Checklist table
    checkH: it
      ? "Checklist essenziale per l’appuntamento passaporto"
      : "Essential checklist for your passport appointment",
    checkSub: it
      ? "Questa è la lista di base che vediamo ripetersi nella maggior parte dei casi. Controlla sempre le istruzioni ufficiali del tuo consolato per aggiunte o eccezioni."
      : "This is the core list we see again and again. Always check your consulate’s passport page for additions or exceptions.",
    checkHeaders: it
      ? ["Elemento", "Perché è importante", "Consiglio pratico"]
      : ["Item", "Why it matters", "Practical tip"],
    checkRows: it
      ? [
          [
            "Passaporto italiano vecchio (se esiste)",
            "Permette al consolato di verificare identità, storia del documento e numeri di serie.",
            "Porta anche eventuali passaporti scaduti: meglio uno in più che uno in meno.",
          ],
          [
            "Due fototessere recenti",
            "Le foto devono rispettare gli standard italiani, non solo UK.",
            "Fai le foto in cabina o studio che conosce le regole italiane; niente cappelli, occhiali scuri o sfondi colorati.",
          ],
          [
            "Modulo di domanda passaporto compilato",
            "Riduce il tempo allo sportello e il rischio di errori sui dati anagrafici.",
            "Compila il modulo con calma a casa, copiando i dati da AIRE/FAST IT e dai documenti.",
          ],
          [
            "Documento di identità valido (se richiesto)",
            "Talvolta il consolato chiede anche un documento aggiuntivo per sicurezza.",
            "Controlla data di scadenza: se vicino alla scadenza, valuta di portare anche un secondo documento.",
          ],
          [
            "Mezzo di pagamento accettato dal tuo consolato",
            "Senza pagamento la pratica di solito non può essere completata.",
            "Alcuni consolati accettano solo carta, altri solo cash in sterline: verifica la pagina ufficiale il giorno prima.",
          ],
          [
            "Stampa dell’email / conferma Prenot@Mi",
            "Dimostra che sei nel giorno, ora e servizio giusto.",
            "Porta una stampa cartacea e tieni anche una copia sul telefono.",
          ],
          [
            "Prova di indirizzo aggiornato nel Regno Unito",
            "Serve in molte sedi per confermare la tua competenza territoriale.",
            "Porta almeno uno tra: estratto conto, bolletta, lettera ufficiale recente con indirizzo completo.",
          ],
        ]
      : [
          [
            "Old Italian passport (if you have one)",
            "Allows the consulate to confirm your identity, document history and serial numbers.",
            "Bring any expired Italian passports too: better one extra than one missing.",
          ],
          [
            "Two recent passport photos",
            "Photos must follow Italian standards, not just generic UK booth rules.",
            "Use a booth or studio familiar with Italian requirements; no hats, dark glasses or coloured backgrounds.",
          ],
          [
            "Completed passport application form",
            "Reduces desk time and lowers the risk of mistakes in your personal data.",
            "Fill it out calmly at home, copying details from AIRE/FAST IT and your documents.",
          ],
          [
            "Valid ID document (if requested)",
            "Some consulates ask for an extra ID document for security.",
            "Check the expiry date; if it’s close to expiring, consider bringing a second ID.",
          ],
          [
            "Payment method your consulate accepts",
            "Without payment they usually cannot complete your request.",
            "Some offices accept card only, others only cash in GBP: check the official page the day before.",
          ],
          [
            "Printed email / Prenot@Mi confirmation",
            "Shows you’re on the right day, time and service.",
            "Bring a paper printout and keep a copy on your phone too.",
          ],
          [
            "Updated UK proof of address",
            "Often required to confirm you’re in the right consular district.",
            "Bring at least one: bank statement, utility bill, or official letter with full address.",
          ],
        ],
    checkNote: it
      ? "La base è sempre: passaporto vecchio, 2 foto, modulo compilato, pagamento e conferma appuntamento. Il resto dipende molto dal tuo consolato e dalla tua situazione familiare."
      : "The base is always: old passport, 2 photos, filled-in form, payment and appointment confirmation. The rest depends on your consulate and your family situation.",

    // Payment & timing
    paymentH: it
      ? "Quanto pagherai e quanto tempo ci vorrà quel giorno"
      : "How much you’ll pay and how long you’ll be there",
    paymentP1: it
      ? "Le tariffe consolari per il passaporto cambiano ogni pochi mesi in base al tasso di cambio. In pratica, per un passaporto adulto ci si trova spesso nella fascia £90–£100."
      : "Consular passport fees change every few months based on exchange rates. In practice, for an adult passport you’ll often be in the £90–£100 range.",
    paymentP2: it
      ? "Di solito paghi direttamente il giorno dell’appuntamento, con il metodo indicato dal consolato. Una volta pagato e consegnati i documenti, molti utenti restano in zona 1–2 ore: poi vengono richiamati allo sportello per ritirare il passaporto nuovo."
      : "You usually pay on the day of the appointment using the payment method your consulate specifies. After payment and document delivery, many people stay nearby for 1–2 hours and are then called back to collect their new passport.",
    paymentP3: it
      ? "Se arrivi senza il mezzo di pagamento giusto o la cifra corretta, rischi di dover tornare un’altra volta solo per completare il pagamento."
      : "If you arrive without the right payment method or enough funds, you may have to come back another day just to complete the payment.",

    // Comparison table
    tableH: it
      ? "Tempistiche indicative: da soli, con agenzie a caso o con Resinaro"
      : "Indicative timelines: DIY, random agencies vs Resinaro",
    tableSub: it
      ? "Numeri basati su casi reali che abbiamo visto nel Regno Unito. Non sono promesse, ma medie orientative: il consolato decide sempre tempi e disponibilità."
      : "Numbers based on real cases we’ve seen from people in the UK. These are not promises, just rough averages: the consulate always decides timing and availability.",
    tableHeaders: it
      ? ["Chi ti aiuta", "Quando di solito cerchi l’appuntamento", "Tempo tipico fino all’appuntamento", "Note"]
      : [
          "Who’s helping",
          "How you search for appointments",
          "Typical wait for an appointment",
          "Notes",
        ],
    tableRows: it
      ? [
          [
            "Fai tutto da solo",
            "Controlli Prenot@Mi a caso, quando ti ricordi.",
            "Da pochi giorni fino a molti mesi.",
            "Funziona se hai tempo, pazienza e leggi bene le istruzioni; tanti finiscono per bloccarsi o rinviare.",
          ],
          [
            "Agenzie generiche",
            "Promettono “miracoli” ma non spiegano bene cosa fanno.",
            "Molto variabile; alcuni utenti ci raccontano attese di 3–5 mesi o più.",
            "Attenzione a chi vende appuntamenti “garantiti” o usa pratiche fuori dalle regole del portale.",
          ],
          [
            "Supporto Resinaro",
            "Usiamo solo il tuo account e le regole del consolato, con tentativi mirati.",
            "Quando il consolato rilascia slot, spesso riusciamo a trovare appuntamenti in pochi giorni o poche settimane.",
            "Non saltiamo nessuna fila e non promettiamo risultati impossibili: ti aiutiamo a usare meglio gli strumenti pubblici.",
          ],
        ]
      : [
          [
            "DIY only",
            "You check Prenot@Mi randomly, whenever you remember.",
            "Anywhere from a few days to many months.",
            "Works if you have time, patience and read instructions carefully; lots of people get stuck or keep postponing.",
          ],
          [
            "Random “agency” services",
            "They promise miracles but rarely explain how they work.",
            "Very mixed; some clients tell us they waited 3–5+ months.",
            "Be cautious with anyone selling “guaranteed” appointments or using shady methods against portal rules.",
          ],
          [
            "Resinaro support",
            "We use only your own account and your consulate’s rules, with targeted attempts.",
            "When your consulate is releasing slots, we often see appointments secured within a few days to a few weeks.",
            "We don’t jump any queues or promise the impossible: we help you use public tools more effectively.",
          ],
        ],
    tableNote: it
      ? "Importante: il consolato rimane sempre l’unica autorità che rilascia il passaporto. Nessun servizio esterno può garantire risultati o “posti riservati”."
      : "Important: the consulate is always the only authority that issues passports. No external service can guarantee results or “reserved” slots.",

    // Service CTA
    serviceH: it
      ? "Vuoi che qualcuno controlli la tua situazione prima del giorno dell’appuntamento?"
      : "Want someone to sanity-check your situation before appointment day?",
    serviceP: it
      ? "Con Resinaro puoi avere un controllo rapido della checklist, dei dati AIRE/FAST IT e delle istruzioni del tuo consolato, prima di metterti in viaggio."
      : "With Resinaro you can get a quick review of your checklist, AIRE/FAST IT details and your consulate’s instructions before you travel.",
    serviceBtn1: it ? "Raccontaci il tuo caso" : "Tell us your situation",
    serviceBtn2: it ? "Vedi assistenza passaporto" : "See passport support",

    // FAQ
    faqH: it
      ? "Domande frequenti sul giorno dell’appuntamento"
      : "Frequently asked questions about appointment day",
    faqs: it
      ? [
          [
            "Posso andare al consolato senza appuntamento Prenot@Mi?",
            "Per il passaporto, nella maggior parte dei casi serve un appuntamento Prenot@Mi confermato. Alcune urgenze documentate seguono canali diversi, spiegati sul sito del tuo consolato.",
          ],
          [
            "Cosa succede se dimentico un documento?",
            "Dipende dal singolo consolato e da cosa manca. In molti casi ti chiederanno di tornare con tutto il necessario: per questo preparare una checklist è così importante.",
          ],
          [
            "Devo per forza pagare il giorno dell’appuntamento?",
            "Quasi sempre sì, ma il metodo (cash, carta, importo preciso) cambia da sede a sede. Controlla sempre le istruzioni del tuo consolato.",
          ],
          [
            "Resinaro può garantire un appuntamento più veloce?",
            "No. Possiamo però aiutarti a evitare errori, a usare meglio Prenot@Mi e a prepararti in modo che, quando arriva il tuo turno, non perdi l’occasione.",
          ],
        ]
      : [
          [
            "Can I go to the consulate without a Prenot@Mi appointment?",
            "For passports, in most cases you need a confirmed Prenot@Mi booking. Some genuine emergencies use different routes explained on your consulate’s website.",
          ],
          [
            "What if I forget a document?",
            "It depends on the consulate and what’s missing. Often they’ll ask you to come back with everything: that’s why a proper checklist is so important.",
          ],
          [
            "Do I always pay on the day?",
            "Almost always yes, but the method (cash, card, exact amount) changes by location. Always follow your consulate’s specific instructions.",
          ],
          [
            "Can Resinaro guarantee a faster appointment?",
            "No. We can’t guarantee results. We can help you avoid mistakes, use Prenot@Mi more intelligently and arrive fully prepared so you don’t waste your slot.",
          ],
        ],

    // Related
    relatedH: it ? "Guide correlate" : "Related guides",
    relatedItems: it
      ? [
          {
            href: "/community/prenotami-uk-guide",
            label:
              "Prenot@Mi & appuntamenti consolari UK (2025): guida completa",
          },
          {
            href: "/community/passport-id-uk",
            label:
              "Passaporto e Carta d’Identità italiana nel Regno Unito (2025)",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Prova di indirizzo UK senza bollette a tuo nome",
          },
        ]
      : [
          {
            href: "/community/prenotami-uk-guide",
            label:
              "Prenot@Mi & Italian consular appointments UK (2025): guide",
          },
          {
            href: "/community/passport-id-uk",
            label: "Italian Passport & ID Card in the UK (2025): full guide",
          },
          {
            href: "/community/bureaucracy-guides/address-proof-uk",
            label: "Proof of UK address without bills in your name",
          },
        ],
    affNoteEnd: it
      ? "Nota: questa guida è informativa e non sostituisce le istruzioni ufficiali del consolato o delle autorità italiane."
      : "Note: this guide is informational and does not replace official guidance from consulates or Italian authorities.",
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  const baseUrl = "https://www.resinaro.com";
  const localePrefix = locale === "it" ? "/it" : "/en";
  const pagePath = `${localePrefix}/community/passport-appointment-checklist`;

  // ---------- Structured Data ----------
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Italian Passport Appointment Checklist UK (2025)",
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: { "@type": "Organization", name: "Resinaro" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${pagePath}`,
    },
    inLanguage: copy.inLang,
    articleSection: ["Bureaucracy", "Consular", "Passport"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Community",
        item: `${baseUrl}${localePrefix}/community`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          locale === "it"
            ? "Checklist appuntamento passaporto UK (2025)"
            : "Passport appointment checklist UK (2025)",
        item: `${baseUrl}${pagePath}`,
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come preparare cosa portare al consolato per il passaporto dal Regno Unito"
        : "How to prepare what to bring to your passport appointment from the UK",
    totalTime: "PT20M",
    supply: [
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Passaporto italiano vecchio" : "Old Italian passport",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it" ? "Fototessere" : "Passport photos",
      },
      {
        "@type": "HowToSupply",
        name: locale === "it"
          ? "Modulo di domanda compilato"
          : "Completed application form",
      },
    ],
    step:
      locale === "it"
        ? [
            {
              "@type": "HowToStep",
              name: "Controlla la lista ufficiale del tuo consolato",
              text: "Vai alla pagina passaporti del tuo consolato e segnati esattamente i documenti richiesti.",
            },
            {
              "@type": "HowToStep",
              name: "Prepara il passaporto vecchio, le foto e il modulo",
              text: "Metti passaporto vecchio, 2 fototessere recenti e modulo di domanda compilato in una busta dedicata.",
            },
            {
              "@type": "HowToStep",
              name: "Verifica il metodo di pagamento",
              text: "Controlla se il consolato vuole cash o carta e la valuta (di solito GBP).",
            },
            {
              "@type": "HowToStep",
              name: "Stampa la conferma Prenot@Mi",
              text: "Porta con te la stampa con data, ora e tipo di servizio.",
            },
          ]
        : [
            {
              "@type": "HowToStep",
              name: "Check your consulate’s official list",
              text: "Open your consulate’s passport page and write down the exact documents required.",
            },
            {
              "@type": "HowToStep",
              name: "Prepare old passport, photos and form",
              text: "Put your old passport, two recent photos and the completed application form into one folder.",
            },
            {
              "@type": "HowToStep",
              name: "Confirm payment method",
              text: "Check if your consulate wants cash or card and in which currency (usually GBP).",
            },
            {
              "@type": "HowToStep",
              name: "Print your Prenot@Mi confirmation",
              text: "Bring a printout with date, time and service.",
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
              name: "Cosa devo portare al consolato per il rinnovo del passaporto?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In genere: passaporto italiano vecchio, 2 fototessere recenti, modulo di domanda compilato, eventuale documento di identità aggiuntivo, prova di indirizzo e mezzo di pagamento richiesto dal consolato.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto pago per il passaporto?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La tariffa cambia ogni pochi mesi, ma di solito è intorno a £90–£100 per un passaporto adulto. Controlla sempre il tariffario ufficiale del tuo consolato prima di partire.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "What should I bring to my passport appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Typically: your old Italian passport, 2 recent passport photos, the completed application form, possibly an extra ID document, proof of UK address and an accepted payment method.",
              },
            },
            {
              "@type": "Question",
              name: "How much does the passport cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The consular fee changes every few months, but it is usually around £90–£100 for an adult passport. Always check your consulate’s official fee table before travelling.",
              },
            },
          ],
  };

  const checklistAnchor = "#checklist";

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

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/passport/passport-counter-hero.jpg"
            alt={copy.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/5" />
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
                  href={p(locale, "/contact")}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                >
                  {copy.ctaBtnPrimary}
                </Link>
                <Link
                  href={p(locale, "/services/passport")}
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

      {/* ===== TLDR & Key Takeaways ===== */}
      <section className="mx-auto mt-10 md:mt-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-lg font-semibold text-emerald-800">{copy.tldrH}</p>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-gray-800">
                <strong>{copy.tldr1Bold}</strong> {copy.tldr1P}
              </p>
              <p className="text-sm text-gray-800">
                <strong>{copy.tldr2Bold}</strong> {copy.tldr2P}
              </p>
              <p className="text-sm text-gray-800">
                <strong>{copy.tldr3Bold}</strong> {copy.tldr3P}
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

      {/* ===== Checklist ===== */}
      <section
        id={checklistAnchor.slice(1)}
        className="mx-auto mt-16 max-w-7xl px-6"
      >
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{copy.checkH}</h2>
              <p className="mt-1 text-sm text-gray-700">{copy.checkSub}</p>
            </div>
            <Link
              href={p(locale, "/community/prenotami-uk-guide")}
              className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
            >
              {locale === "it"
                ? "Vai alla guida Prenot@Mi →"
                : "Go to Prenot@Mi guide →"}
            </Link>
          </div>

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
                      <td key={j} className="p-3 text-gray-800 align-top">
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

      {/* ===== Payment & timing ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.paymentH}</h2>
          <p className="mt-2 text-sm text-gray-800">{copy.paymentP1}</p>
          <p className="mt-2 text-sm text-gray-800">{copy.paymentP2}</p>
          <p className="mt-2 text-sm text-gray-800">{copy.paymentP3}</p>
        </div>
      </section>

      {/* ===== Comparison table ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.tableH}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.tableSub}</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {copy.tableHeaders.map((h: string) => (
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
                {copy.tableRows.map((row: string[], i: number) => (
                  <tr
                    key={i}
                    className={i % 2 ? "bg-white" : "bg-gray-50"}
                  >
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
          <p className="mt-2 text-xs text-gray-600">{copy.tableNote}</p>
        </div>
      </section>

      {/* ===== Service CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_.9fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.serviceH}
              </h2>
              <p className="mt-2 text-sm text-gray-800">{copy.serviceP}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={p(locale, "/contact")}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {copy.serviceBtn1}
                </Link>
                <Link
                  href={p(locale, "/services/passport")}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                >
                  {copy.serviceBtn2}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-xs text-emerald-900/90 shadow-sm">
              <p>
                {locale === "it"
                  ? "Resinaro non può offrire appuntamenti “garantiti” e non salta mai le regole dei consolati. Usiamo solo i tuoi account e i canali ufficiali, aiutandoti a mettere ordine e a prepararti bene."
                  : "Resinaro cannot offer “guaranteed” appointments and never bypasses consulate rules. We only use your own accounts and official channels, helping you organise everything and arrive well prepared."}
              </p>
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

      {/* ===== Related ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{copy.relatedH}</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
            {copy.relatedItems.map((item: { href: string; label: string }) => (
              <li key={item.href}>
                <Link
                  className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
                  href={p(locale, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-600">{copy.affNoteEnd}</p>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
