// src/app/[locale]/guide/manchester-passport-appointment/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

interface PageProps {
  params: { locale: Locale };
}

const messages: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    checklistTitle: string;
    checklistItems: string[];
    simpleSummaryTitle: string;
    simpleSummaryBody: string;
    whoTitle: string;
    whoBody: string;
    bringTitle: string;
    bringIntro: string;
    bringList: string[];
    bringSummary: string;
    flowTitle: string;
    steps: { title: string; body: string }[];
    paymentTitle: string;
    paymentParagraphs: string[];
    servicePromoTitle: string;
    servicePromoBody: string;
    servicePromoCtaPrimary: string;
    servicePromoCtaSecondary: string;
    comparisonTitle: string;
    comparisonIntro: string;
    comparisonTableCaption: string;
    comparisonHeaders: [string, string, string];
    comparisonRows: { route: string; how: string; time: string }[];
    comparisonFootnote: string;
    bookingsTitle: string;
    bookingsBody: string;
    bookingsImageAlt: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    legalNote: string;
  }
> = {
  en: {
    metaTitle: "Manchester Italian Passport Appointment Day Guide (2025)",
    metaDescription:
      "Already have a passport appointment at the Italian Consulate in Manchester? Resinaro’s guide explains what to bring, what happens on the day, fees, timings and how we can help you prepare.",
    heroKicker: "Resinaro guide • Not the official consulate",
    heroTitle: "Your Manchester Italian Passport Appointment: What Happens on the Day",
    heroSubtitle:
      "Already have your appointment at the Italian Consulate in Manchester? Here’s exactly what to bring, what will happen step by step, and how our team can support you before you go.",
    heroImageAlt:
      "People preparing passport documents near the Italian Consulate in Manchester",
    checklistTitle: "Before you leave home",
    checklistItems: [
      "Appointment confirmation email saved on your phone (and printed if you like).",
      "Documents ready: old passport, 2 passport photos, completed application form and proof of address.",
      "A British debit card for payment at the consulate counter.",
    ],
    simpleSummaryTitle: "In simple terms",
    simpleSummaryBody:
      "All you really need to remember is: old passport + 2 passport photos + the application form filled out + a British debit card. We’ll tell you if your case needs anything extra.",
    whoTitle: "Who this guide is for",
    whoBody:
      "This page is for Italian citizens who already have a confirmed passport appointment at the Consulate of Italy in Manchester (58 Spring Gardens, M2 1EW) and want to know exactly what happens on the day.",
    bringTitle: "What to bring to your appointment",
    bringIntro:
      "For a standard adult renewal at the consulate in Manchester, you will usually need:",
    bringList: [
      "Your old Italian passport, if you still have it.",
      "Two identical, recent passport photos that meet ICAO standards.",
      "The passport application form (Form 1 / MOD1) completed in full.",
      "Proof of address from the last 3 months (for example council tax, utility bill or bank statement).",
      "A valid ID document if you have one (for example an Italian ID card or another passport).",
      "Any extra documents the consulate has specifically asked you for (for example name change, minor children, lost passport).",
      "A British debit card to pay the consular fee at the counter.",
    ],
    bringSummary:
      "If that feels like a lot, focus on the essentials: old passport, 2 photos, the form filled in and a British debit card. The rest depends on your situation, and we can help you check it before the day.",
    flowTitle: "Step-by-step: what happens on the day",
    steps: [
      {
        title: "1. Arrival and access to the building",
        body: "Arrive 10–15 minutes before your appointment at 58 Spring Gardens, M2 1EW. Show your appointment confirmation at the entrance and follow the signs to the consulate floor.",
      },
      {
        title: "2. Ticket and initial checks",
        body: "You take a ticket or are called by name. Staff check your identity, AIRE registration and basic details, and make sure your documents are complete.",
      },
      {
        title: "3. Fingerprints and signature",
        body: "If you are 12 or over, they collect your fingerprints and digital signature for the biometric passport.",
      },
      {
        title: "4. Payment at the counter",
        body: "You pay the passport fee at the consulate desk. Payment is taken at the appointment by British debit card only — international debit cards, credit cards and American Express are not accepted.",
      },
      {
        title: "5. Waiting time",
        body: "In most straightforward cases, once everything has been checked and paid, you sit in the waiting area while your passport is printed.",
      },
      {
        title: "6. Collection of the passport",
        body: "Normally, when the application is complete and your details are up to date, the passport is issued on the same day. You are called back to the desk to collect it. In some cases the consulate may ask you to return on another day or send the passport to you by post instead.",
      },
    ],
    paymentTitle: "Fees, payment and how long it takes",
    paymentParagraphs: [
      "Passport fees are set in euros but paid in pounds. The exact amount changes every three months with the EUR/GBP exchange rate, so you should always check the latest consular tariffs before your appointment.",
      "As a rough guide, in late 2025 the total cost of an adult passport in the UK is around £100. If an urgency surcharge applies, this is added on top.",
      "At the Manchester consulate the passport fee is paid at the counter on the day of your appointment, using a British debit card only.",
      "When your documents are complete and your AIRE and civil status are already correctly registered, the consulate usually issues the passport on the day of the appointment. If extra checks or updates are needed, they may ask you to come back or they may post the passport to you later.",
    ],
    servicePromoTitle: "We can book the appointment for you",
    servicePromoBody:
      "If you are still struggling to find a slot on Prenot@Mi, Resinaro can take care of the booking. We create or configure your Prenot@Mi account with your details, monitor openings for the Manchester consulate and secure an appointment for you, then guide you through what to bring on the day. We are an independent support service — we are not the consulate and we do not have special priority — but we know the system well and do the work so you don’t have to.",
    servicePromoCtaPrimary: "Let Resinaro find me an appointment",
    servicePromoCtaSecondary: "Learn more about our passport service",
    comparisonTitle: "Why many people choose the Manchester route with Resinaro",
    comparisonIntro:
      "There is more than one way to apply for an Italian passport from the UK. Some routes involve giving biometrics at an honorary office or sending applications by post and then waiting while the main consulate prints and posts the passport back to you. Other people use generic agencies that focus on selling a service but do not always explain clearly how long the passport itself will take.",
    comparisonTableCaption:
      "Typical timelines once your application has been accepted (we cannot guarantee exact times — they are always decided by the consular authorities).",
    comparisonHeaders: [
      "Route",
      "How it works",
      "Typical time to have passport in hand",
    ],
    comparisonRows: [
      {
        route: "In-person appointment in Manchester with Resinaro preparation",
        how: "We help you set up Prenot@Mi, secure an appointment at the Manchester consulate and check your documents in advance. You attend in person and pay on the day.",
        time: "In many straightforward adult cases, the passport is usually issued on the same day as the appointment. In more complex cases the consulate may ask you to return or they may send it later by post.",
      },
      {
        route: "In-person or postal applications via other offices or honorary consuls",
        how: "You give biometrics or send documents through another office. Your file is then forwarded to the main consulate, which prints and posts the passport.",
        time: "Official guidance for some postal and honorary routes mentions processing times of around 10 weeks, and in practice some people wait several months before the passport arrives.",
      },
      {
        route: "Doing everything alone with no support",
        how: "You manage Prenot@Mi, document preparation and consular communication by yourself.",
        time: "Many people are successful, but it is easy to lose months if documents are incomplete or appointments are missed or booked for the wrong service.",
      },
    ],
    comparisonFootnote:
      "Resinaro cannot speed up consular processing or guarantee a specific result. What we do is secure appointments, explain the process clearly and help you avoid avoidable delays.",
    bookingsTitle: "Recent Manchester passport appointments booked by Resinaro",
    bookingsBody:
      "Here are a few anonymised examples of real appointments we have booked through Prenot@Mi for our clients. We blur personal details in all screenshots.",
    bookingsImageAlt:
      "Screenshot of a confirmed Italian passport appointment in Manchester on Prenot@Mi",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Can someone from Resinaro come into the consulate with me?",
        a: "No. Access rules are set by the consulate. In general only the applicant can enter, with parents for minors or in specific cases for people who need assistance. Our role is to prepare you before the day.",
      },
      {
        q: "Can you guarantee that I will get an appointment or a same-day passport?",
        a: "No. Appointments and passport issue are always decided by the consulate. We increase your chances by handling the technical side of Prenot@Mi for you, watching availability closely and making sure your documents are in order before you go.",
      },
      {
        q: "Is Resinaro part of the consulate?",
        a: "No. Resinaro is an independent support service for Italians in the UK. We use the same public systems available to everyone and we are transparent about what we can and cannot do.",
      },
    ],
    ctaTitle: "Ready to make your appointment day easier?",
    ctaBody:
      "If you still need an appointment, or you already have one and want someone to check your documents, our team can help.",
    ctaPrimary: "Talk to us about my passport",
    ctaSecondary: "See all our services",
    legalNote:
      "Information on this page is based on publicly available guidance from Italian consular authorities and may change. Always check the official consulate website for the latest rules and fees.",
  },
  it: {
    metaTitle: "Guida al giorno dell’appuntamento per il passaporto a Manchester (2025)",
    metaDescription:
      "Hai già un appuntamento per il passaporto al Consolato d’Italia a Manchester? La guida di Resinaro ti spiega cosa portare, come si svolge la giornata, costi, tempi e come possiamo aiutarti a prepararti.",
    heroKicker: "Guida Resinaro • Non è il consolato ufficiale",
    heroTitle:
      "Appuntamento per il passaporto a Manchester: cosa succede il giorno della visita",
    heroSubtitle:
      "Hai già un appuntamento al Consolato d’Italia a Manchester? Qui trovi cosa portare, come si svolge la giornata e in che modo il nostro team può aiutarti a prepararti.",
    heroImageAlt:
      "Persone in attesa al Consolato d’Italia a Manchester per il passaporto",
    checklistTitle: "Prima di uscire di casa",
    checklistItems: [
      "Salva l’email di conferma dell’appuntamento sul telefono (e stampala se preferisci).",
      "Prepara i documenti: vecchio passaporto, 2 fototessere, modulo di richiesta compilato e prova di indirizzo.",
      "Porta con te una carta di debito britannica per il pagamento allo sportello consolare.",
    ],
    simpleSummaryTitle: "In parole semplici",
    simpleSummaryBody:
      "Quello che devi ricordare davvero è: vecchio passaporto + 2 fototessere + modulo compilato + carta di debito britannica. Se nel tuo caso serve qualcos’altro te lo segnaliamo noi prima del giorno dell’appuntamento.",
    whoTitle: "A chi è rivolta questa guida",
    whoBody:
      "Questa pagina è pensata per i cittadini italiani che hanno già un appuntamento per il passaporto presso il Consolato d’Italia a Manchester (58 Spring Gardens, M2 1EW) e vogliono sapere esattamente cosa li aspetta il giorno della visita.",
    bringTitle: "Cosa portare all’appuntamento",
    bringIntro:
      "Per un normale rinnovo di passaporto per maggiorenni presso il Consolato di Manchester di solito servono:",
    bringList: [
      "Il tuo vecchio passaporto italiano, se lo possiedi ancora.",
      "Due fototessere identiche e recenti, conformi agli standard ICAO.",
      "Il modulo di richiesta passaporto (Formulario n. 1 / MOD1) compilato in ogni sua parte.",
      "Una prova di indirizzo degli ultimi 3 mesi (ad esempio council tax, bolletta o estratto conto).",
      "Un documento di identità valido se lo possiedi (ad esempio carta d’identità italiana o un altro passaporto).",
      "Eventuali documenti aggiuntivi richiesti dal Consolato per il tuo caso (cambio nome, figli minori, passaporto smarrito ecc.).",
      "Una carta di debito britannica per pagare la tariffa consolare allo sportello.",
    ],
    bringSummary:
      "Se l’elenco ti sembra lungo, concentrati sugli essenziali: vecchio passaporto, 2 foto, modulo compilato e carta di debito britannica. Il resto dipende dalla tua situazione e possiamo aiutarti a verificarlo prima dell’appuntamento.",
    flowTitle: "Passo dopo passo: cosa succede il giorno della visita",
    steps: [
      {
        title: "1. Arrivo e accesso all’edificio",
        body: "Arriva 10–15 minuti prima dell’orario fissato in 58 Spring Gardens, M2 1EW. Mostra la conferma dell’appuntamento all’ingresso e segui le indicazioni per il piano del Consolato.",
      },
      {
        title: "2. Numero e primi controlli",
        body: "Prendi un numero o vieni chiamato per nome. Il personale verifica la tua identità, l’iscrizione AIRE e i dati anagrafici, e controlla che la documentazione sia completa.",
      },
      {
        title: "3. Impronte digitali e firma",
        body: "Se hai 12 anni o più ti vengono rilevate le impronte digitali e la firma per il passaporto biometrico.",
      },
      {
        title: "4. Pagamento allo sportello",
        body: "Paghi il costo del passaporto allo sportello consolare. Il pagamento avviene il giorno dell’appuntamento esclusivamente con carte di debito britanniche: non sono accettate carte di credito, American Express o carte emesse fuori dal Regno Unito.",
      },
      {
        title: "5. Attesa",
        body: "Nella maggior parte dei casi semplici, dopo il controllo dei documenti e il pagamento ti viene chiesto di attendere nella sala d’attesa mentre il passaporto viene stampato.",
      },
      {
        title: "6. Consegna del passaporto",
        body: "Di norma, quando la domanda è completa e i tuoi dati AIRE e di stato civile sono aggiornati, il passaporto viene rilasciato lo stesso giorno dell’appuntamento. Vieni richiamato allo sportello per il ritiro. In alcuni casi il Consolato può chiederti di tornare in un’altra data o spedire il passaporto al tuo domicilio.",
      },
    ],
    paymentTitle: "Costi, pagamento e tempi di rilascio",
    paymentParagraphs: [
      "Le tariffe dei passaporti sono fissate in euro ma vengono pagate in sterline. L’importo esatto cambia ogni tre mesi in base al tasso di cambio euro/sterlina, quindi è sempre bene verificare le tariffe consolari aggiornate prima dell’appuntamento.",
      "Come riferimento, alla fine del 2025 il costo complessivo di un passaporto per maggiorenni nel Regno Unito è intorno alle 100 sterline. Eventuali diritti di urgenza, se applicabili, si aggiungono a questa cifra.",
      "Presso il Consolato di Manchester il pagamento del passaporto avviene allo sportello il giorno dell’appuntamento, con carta di debito britannica.",
      "Quando la documentazione è completa e la tua posizione AIRE e di stato civile è già correttamente registrata, il Consolato solitamente rilascia il passaporto il giorno stesso dell’appuntamento. Se sono necessari ulteriori controlli o aggiornamenti, può essere fissato un ritiro successivo oppure il passaporto può essere spedito per posta.",
    ],
    servicePromoTitle: "Ti aiutiamo a trovare l’appuntamento su Prenot@Mi",
    servicePromoBody:
      "Se fai fatica a trovare un appuntamento su Prenot@Mi, Resinaro può occuparsi della procedura al posto tuo. Creiamo o configuriamo il tuo account Prenot@Mi con i tuoi dati, monitoriamo le aperture per il Consolato di Manchester e prenotiamo un appuntamento per te, poi ti guidiamo su cosa portare il giorno della visita. Siamo un servizio di supporto indipendente — non siamo il Consolato e non abbiamo corsie preferenziali — ma conosciamo bene il sistema e facciamo il lavoro pratico al posto tuo.",
    servicePromoCtaPrimary: "Fammi trovare un appuntamento",
    servicePromoCtaSecondary: "Scopri il nostro servizio passaporti",
    comparisonTitle: "Perché molti scelgono il percorso Manchester con Resinaro",
    comparisonIntro:
      "Esistono diversi modi per richiedere un passaporto italiano dal Regno Unito. Alcune soluzioni prevedono la raccolta delle impronte presso uffici onorari o l’invio della domanda per posta, con successiva stampa e spedizione del passaporto dal consolato principale. Altre volte ci si affida ad agenzie generiche che puntano soprattutto a vendere il servizio e non spiegano sempre con chiarezza in quanto tempo arriverà il passaporto.",
    comparisonTableCaption:
      "Tempi indicativi una volta che la domanda è stata accettata (non possiamo garantire tempi esatti: dipendono sempre dalle autorità consolari).",
    comparisonHeaders: [
      "Percorso",
      "Come funziona",
      "Tempi indicativi per avere il passaporto",
    ],
    comparisonRows: [
      {
        route: "Appuntamento in presenza a Manchester con preparazione Resinaro",
        how: "Ti aiutiamo a configurare Prenot@Mi, a trovare un appuntamento al Consolato di Manchester e a controllare la documentazione in anticipo. Tu ti presenti di persona e paghi il giorno della visita.",
        time: "In molti casi semplici per maggiorenni il passaporto viene di solito rilasciato lo stesso giorno dell’appuntamento. Nei casi più complessi il Consolato può chiederti di tornare oppure può spedirti il passaporto successivamente.",
      },
      {
        route: "Domande in presenza o per posta tramite altri uffici o consolati onorari",
        how: "Consegni le impronte o spedisci i documenti tramite un altro ufficio. La pratica viene poi inoltrata al consolato principale, che stampa e spedisce il passaporto.",
        time: "Le indicazioni ufficiali per alcuni percorsi postali o tramite consolati onorari parlano di tempi di lavorazione intorno alle 10 settimane e, nella pratica, alcune persone attendono diversi mesi prima di ricevere il passaporto.",
      },
      {
        route: "Fare tutto da soli senza supporto",
        how: "Gestisci da solo Prenot@Mi, la preparazione dei documenti e i contatti con il consolato.",
        time: "Molti ci riescono, ma è facile perdere mesi se la documentazione non è completa o se gli appuntamenti vengono mancati o prenotati per il servizio sbagliato.",
      },
    ],
    comparisonFootnote:
      "Resinaro non può accelerare i tempi del Consolato né garantire un risultato specifico. Possiamo però trovare gli appuntamenti, spiegarti il processo in modo trasparente e aiutarti a evitare ritardi evitabili.",
    bookingsTitle: "Appuntamenti per il passaporto a Manchester prenotati da Resinaro",
    bookingsBody:
      "Qui sotto trovi alcuni esempi anonimizzati di appuntamenti reali che abbiamo prenotato tramite Prenot@Mi per i nostri clienti. Nei nostri screenshot oscuriamo sempre i dati personali.",
    bookingsImageAlt:
      "Screenshot di un appuntamento confermato per passaporto a Manchester su Prenot@Mi",
    faqTitle: "Domande frequenti",
    faq: [
      {
        q: "Qualcuno di Resinaro può entrare con me al Consolato?",
        a: "No. Le regole di accesso sono stabilite dal Consolato. In genere entra solo il richiedente, con i genitori nel caso di minori o accompagnatori in situazioni particolari. Il nostro compito è prepararti prima del giorno della visita.",
      },
      {
        q: "Potete garantire che avrò un appuntamento o il passaporto in giornata?",
        a: "No. Gli appuntamenti e il rilascio del passaporto sono sempre decisioni del Consolato. Noi aumentiamo le tue possibilità occupandoci della parte tecnica di Prenot@Mi, monitorando le disponibilità e verificando che la documentazione sia in ordine prima dell’appuntamento.",
      },
      {
        q: "Resinaro fa parte del Consolato?",
        a: "No. Resinaro è un servizio di supporto indipendente per gli italiani nel Regno Unito. Utilizziamo gli stessi sistemi pubblici disponibili a tutti e siamo trasparenti su ciò che possiamo e non possiamo fare.",
      },
    ],
    ctaTitle: "Vuoi rendere più semplice il giorno dell’appuntamento?",
    ctaBody:
      "Se ti manca ancora un appuntamento, oppure ce l’hai già e vuoi un controllo della documentazione, il nostro team può aiutarti.",
    ctaPrimary: "Parla con noi del tuo passaporto",
    ctaSecondary: "Scopri tutti i nostri servizi",
    legalNote:
      "Le informazioni presenti in questa pagina si basano su indicazioni pubbliche delle autorità consolari italiane e possono cambiare. Controlla sempre il sito ufficiale del Consolato per le regole e le tariffe aggiornate.",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const t = messages[locale];

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: "/guide/manchester-passport-appointment",
      languages: {
        "en-GB": "/en/guide/manchester-passport-appointment",
        "it-IT": "/it/guide/manchester-passport-appointment",
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      type: "article",
    },
  };
}

export default function ManchesterPassportAppointmentGuidePage({
  params,
}: PageProps) {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const t = messages[locale];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 lg:py-16">
      <article className="space-y-12 lg:space-y-16">
        {/* Hero */}
        <header className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span
              className="h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span>{t.heroKicker}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.heroTitle}
              </h1>
              <p className="text-base text-slate-600">{t.heroSubtitle}</p>
            </div>

            <div className="relative h-52 overflow-hidden rounded-3xl border bg-slate-100 sm:h-60 lg:h-64">
              <Image
                src="/images/resinaro/manchester-passport-hero.jpg"
                alt={t.heroImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>

        {/* Service promo: we book the appointments */}
        <section className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-5 sm:px-6 sm:py-6">
          <h2 className="text-lg font-semibold text-emerald-900">
            {t.servicePromoTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
            {t.servicePromoBody}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/passport-appointments"
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              {t.servicePromoCtaPrimary}
            </Link>
            <Link
              href="/services/passports"
              className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition hover:bg-emerald-50"
            >
              {t.servicePromoCtaSecondary}
            </Link>
          </div>
        </section>

        {/* Quick checklist */}
        <section className="space-y-4">
          <div className="rounded-2xl border bg-slate-50 px-4 py-4 text-sm sm:px-6">
            <h2 className="text-base font-semibold text-slate-900">
              {t.checklistTitle}
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {t.checklistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-4 text-sm sm:px-6">
            <h3 className="mb-1 text-sm font-semibold text-slate-900">
              {t.simpleSummaryTitle}
            </h3>
            <p className="text-slate-700">{t.simpleSummaryBody}</p>
          </div>
        </section>

        {/* Who it's for + what to bring */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              {t.whoTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {t.whoBody}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              {t.bringTitle}
            </h2>
            <p className="text-sm text-slate-700">{t.bringIntro}</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.bringList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-3 rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-700 sm:px-5">
              <p className="font-semibold mb-1">
                {t.simpleSummaryTitle}
              </p>
              <p>{t.bringSummary}</p>
            </div>
          </div>
        </section>

        {/* Step-by-step flow */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.flowTitle}
          </h2>
          <div className="space-y-4">
            {t.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border bg-white px-4 py-3 text-sm sm:px-5"
              >
                <h3 className="font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-slate-700">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees & timings */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.paymentTitle}
          </h2>
          <div className="space-y-2 text-sm text-slate-700">
            {t.paymentParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {/* Comparison: why Manchester + Resinaro */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.comparisonTitle}
          </h2>
          <p className="text-sm text-slate-700">{t.comparisonIntro}</p>

          <div className="overflow-hidden rounded-2xl border bg-white">
            <div className="border-b px-4 py-3 text-xs text-slate-500 sm:px-5">
              {t.comparisonTableCaption}
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-t text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    {t.comparisonHeaders.map((header) => (
                      <th
                        key={header}
                        className="border-b px-4 py-3 font-semibold text-slate-900 sm:px-5"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparisonRows.map((row) => (
                    <tr key={row.route} className="align-top">
                      <td className="border-b px-4 py-3 font-medium text-slate-900 sm:px-5">
                        {row.route}
                      </td>
                      <td className="border-b px-4 py-3 text-slate-700 sm:px-5">
                        {row.how}
                      </td>
                      <td className="border-b px-4 py-3 text-slate-700 sm:px-5">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 text-xs text-slate-500 sm:px-5">
              {t.comparisonFootnote}
            </div>
          </div>
        </section>

        {/* Recent bookings screenshots */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.bookingsTitle}
          </h2>
          <p className="text-sm text-slate-700">{t.bookingsBody}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border bg-slate-50">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/resinaro/bookings/manchester-passport-1.png"
                  alt={t.bookingsImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-600">
                3× adult passport appointments booked in one morning slot.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border bg-slate-50">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/resinaro/bookings/manchester-passport-2.png"
                  alt={t.bookingsImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-600">
                Family group booking for parents + children with staggered times.
              </figcaption>
            </figure>
          </div>

          <p className="text-xs text-slate-500">
            Replace these example images with your latest anonymised screenshots
            from Prenot@Mi.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.faqTitle}
          </h2>
          <dl className="space-y-4">
            {t.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border bg-white px-4 py-3 text-sm sm:px-5"
              >
                <dt className="font-semibold text-slate-900">{item.q}</dt>
                <dd className="mt-1 text-slate-700">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-2xl border bg-slate-50 px-4 py-5 sm:px-6 sm:py-6">
          <h2 className="text-lg font-semibold text-slate-900">
            {t.ctaTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-700">{t.ctaBody}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/passport-appointments"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* Legal note */}
        <p className="text-xs leading-relaxed text-slate-500">
          {t.legalNote}
        </p>
      </article>
    </main>
  );
}
