// src/app/[locale]/community/citizenship-by-marriage-uk/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n";

/* =============================== METADATA =============================== */

const baseMetadata: Metadata = {
  title:
    "Italian Citizenship by Marriage from the UK (2025): Practical Guide",
  description:
    "Non-legal, practical overview of Italian citizenship by marriage (jure matrimonii) for people living in the United Kingdom: what it usually means, simplified requirements, UK-specific documents and how Resinaro can support you.",
  alternates: {
    canonical: "/community/citizenship-by-marriage-uk",
    languages: {
      en: "/en/community/citizenship-by-marriage-uk",
      it: "/it/community/citizenship-by-marriage-uk",
    },
  },
  openGraph: {
    title:
      "Italian Citizenship by Marriage from the UK (2025): Practical Guide",
    description:
      "Clear, non-legal overview of Italian citizenship by marriage (jure matrimonii) for people living in the UK: basic requirements, typical documents, timelines and common mistakes to avoid.",
    url: "/community/citizenship-by-marriage-uk",
    images: [
      {
        url: "/images/service-passport.png", // swap for dedicated image if/when you have it
        width: 1200,
        height: 630,
        alt: "Italian passport, wedding rings and documents on a desk in the UK",
      },
    ],
    type: "article",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const locale = params.locale ?? "en";
  if (locale === "it") {
    const title =
      "Cittadinanza italiana per matrimonio dal Regno Unito (2025): guida pratica";
    const description =
      "Panoramica pratica e non legale sulla cittadinanza italiana per matrimonio (jure matrimonii) per chi vive nel Regno Unito: cosa significa, requisiti semplificati, documenti tipici e come Resinaro può aiutarti a organizzarti.";

    return {
      ...baseMetadata,
      title,
      description,
      openGraph: {
        ...(baseMetadata.openGraph ?? {}),
        title,
        description,
      },
    };
  }
  return baseMetadata;
}

/* =============================== JSON-LD ================================ */

function getArticleJsonLd(locale: Locale) {
  const isIt = locale === "it";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isIt
      ? "Cittadinanza italiana per matrimonio dal Regno Unito (2025): guida pratica"
      : "Italian Citizenship by Marriage from the UK (2025): Practical Guide",
    description: isIt
      ? "Panoramica pratica e non legale sulla cittadinanza italiana per matrimonio per chi vive in UK. Non è consulenza legale: è un orientamento per capire meglio documenti, requisiti e passi successivi."
      : "Non-legal, practical overview of Italian citizenship by marriage for people living in the UK. Not legal advice – an orientation to understand documents, requirements and next practical steps.",
    inLanguage: isIt ? "it-IT" : "en-GB",
    author: {
      "@type": "Organization",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/android-chrome-192x192.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.resinaro.com/${locale}/community/citizenship-by-marriage-uk`,
    },
  };
}

/* =============================== COPY ================================== */

const copy = {
  en: {
    badge: "Italian citizenship · Jure matrimonii",
    audiencePill: "For people living in the UK",
    heroTitle: "Italian Citizenship by Marriage from the UK (2025): Practical Guide",
    heroIntro:
      "A clear, non-legal overview of Italian citizenship by marriage (jure matrimonii) for people who live in the United Kingdom. This guide explains in simple language what it usually means, the basic requirements, typical documents and how the process often works via Italian consulates in London, Manchester and Edinburgh.",
    heroSub:
      "It is not legal advice and it cannot replace official instructions or a lawyer. Use it as orientation, then always check the latest rules on the Ministry of Interior and consulate websites.",
    lastUpdated: "Last updated",
    readTime: "10 min read",

    supportTitle: "How Resinaro can support you",
    supportBody:
      "We don’t decide if you qualify and we can’t guarantee recognition. What we can do is help you stop guessing, understand the rules in plain language, and organise your documents before you spend more money.",
    guideLabel: "£35 · SELF-GUIDED WRITTEN GUIDE",
    guideBody:
      "Best if you want to understand the citizenship-by-marriage route from the UK by yourself, but you’re tired of conflicting posts and half answers.",
    guideBullets: [
      "Explains the standard jure matrimonii route in plain language, using official sources as reference.",
      "Summarises common requirements (time since marriage, residence, language, criminal record checks).",
      "Includes a structured checklist and practical tips specific to people living in the UK.",
      "Includes example emails (Italian + English) to ask consulates and other authorities for clarifications.",
    ],
    guideCta: "Ask for the £35 guide →",

    oneToOneLabel: "£170 · 1:1 PRACTICAL SUPPORT",
    oneToOneBody:
      "Best if you want someone in the UK who speaks Italian & English to look at your situation and give you a realistic, practical plan.",
    oneToOneBullets: [
      "We review your situation and documents at a practical level (not legal advice).",
      "We flag obvious gaps or risky assumptions before you spend hundreds of pounds.",
      "We prepare a simple step-by-step plan and a digital folder structure so you always know the next action.",
    ],
    oneToOneCta: "Get my situation checked (£170) →",
    disclaimer:
      "Resinaro is not a law firm and cannot give legal advice or guarantee citizenship. We focus on practical support with documents, organisation and communication.",

    soundsLikeTitle: "Does this sound like you?",
    soundsLikeIntro:
      "If you recognise yourself in at least one of these, you’re not alone:",
    soundsLikeItems: [
      "You’re married to (or in a civil partnership with) an Italian citizen and live in the UK.",
      "You’ve read different posts and each one says something slightly different about timelines and requirements.",
      "You’re scared of ordering the wrong certificates, translations or criminal record checks and wasting money.",
      "You keep delaying because you don’t know if you’re “doing it right” or if you even qualify.",
    ],

    section1Title: "1. What citizenship by marriage usually means",
    section1Body: [
      "Italian citizenship by marriage (jure matrimonii) is a path where a non-Italian spouse can apply for Italian citizenship after meeting certain conditions. It normally involves a formal application, strict document rules and a long waiting time with the Ministry of Interior.",
      "The goal of this guide is not to repeat the full law, but to translate the basics into practical language so you can understand what you’re getting into before spending money.",
      "The route is different from citizenship by descent: instead of proving an Italian line, you focus on your relationship with an Italian citizen and your personal record.",
    ],

    section2Title: "2. Basic requirements (simplified, non-legal)",
    section2Intro:
      "Requirements can change and some are interpreted differently depending on your situation. Always double-check the official rules. In very simplified form, many people need to think about:",
    section2Bullets: [
      "How long you have been married or in a registered civil partnership.",
      "Where you and your partner currently live (in Italy, in the UK or elsewhere).",
      "Whether you have a recognised level of Italian language (for example B1).",
      "Criminal record certificates from countries where you have lived for a certain time.",
      "Whether your marriage has been properly registered with the Italian authorities.",
    ],
    section2Note:
      "This is only an orientation summary. For a formal assessment, or for complicated situations, always rely on official sources or qualified legal advice.",

    section3Title: "3. What changes if you live in the UK",
    section3Body: [
      "If you live in the United Kingdom, your path is usually handled via the Italian consulate responsible for your area. Each consulate may publish its own page and instructions.",
      "On top of Italian rules, you typically need to manage UK-issued documents such as criminal record checks, residence evidence and sometimes translations or apostilles.",
      "Remember that old PDFs, screenshots or comments on social media can become outdated quickly. Always cross-check with the official consulate and Ministry websites before you spend money.",
    ],

    section4Title: "4. Typical documents in a marriage file (orientation only)",
    section4Intro:
      "Every case is different, but many citizenship-by-marriage applications involve some combination of documents like:",
    section4Bullets: [
      "Italian documents confirming your partner’s citizenship and the registration of your marriage.",
      "Your full birth certificate from your country of origin, in the correct format for international use.",
      "Criminal record certificates from the UK and other countries where you’ve lived for a significant period.",
      "Proof of language level, if required (for example B1 certification from an accepted provider).",
      "Translations and, where needed, apostilles on foreign documents.",
    ],
    section4Outro:
      "The important part is not just “having documents” but having them in the format, order and consistency asked for by the authorities. Small mismatches in names or dates can sometimes be handled, but they should not be a surprise at the counter.",

    section5Title: "5. How long citizenship by marriage can take",
    section5Body: [
      "This route is known for long timelines. Depending on the rules in force and the workload of the Ministry of Interior, procedures can often take several years.",
      "No agency, consultant or support service can control internal processing times. If someone promises a guaranteed decision by a specific date, be very cautious.",
      "Our approach at Resinaro is to focus on the part you can control: understanding the path, preparing your documents properly and keeping realistic expectations.",
    ],

    section6Title: "6. How Resinaro can help you stay organised",
    section6Body: [
      "We can’t speed up the Ministry or guarantee citizenship. What we can do is support you with the messy, practical side – especially when you live in the UK and need to mix Italian and UK procedures.",
      "Our written guide gives you a calm overview you can read at your own pace. The 1:1 support is for when you want someone to look at your situation and build a tailored plan with you.",
      "In both cases, we always base our information on official sources and are clear about the limits of what we can and cannot do.",
    ],

    faqTitle: "7. FAQ: Italian citizenship by marriage from the UK",
    faqItems: [
      {
        q: "Is this guide or service legal advice?",
        a: "No. Nothing on this page is legal advice and we are not a law firm. This is practical orientation to help you understand documents and organisation. For formal assessments or complex situations, always consult a qualified professional.",
      },
      {
        q: "Do you prepare or submit the online application for me?",
        a: "We focus on helping you understand the process, check your documents at a basic level and organise your file. We can’t act as your legal representative or guarantee how the authorities will assess your application.",
      },
      {
        q: "Can you speed up the Ministry of Interior or the consulate?",
        a: "No. Internal timelines are decided only by the Italian authorities. Anyone who guarantees a specific outcome or date is not being realistic.",
      },
      {
        q: "Can I start with the guide and later book the 1:1?",
        a: "Yes. Many people start with the £35 guide to understand the basics and then only book 1:1 support when they are ready to move forward or want a second pair of eyes on their file.",
      },
    ],

    bottomCtaTitle: "Want to talk through your situation with a human?",
    bottomCtaBody:
      "If you’re not sure whether to keep going, or you’re scared of wasting money on the wrong documents, you can send us a short message about your situation. We’ll reply with an honest suggestion: guide only, 1:1 support or sometimes a different route entirely.",
    bottomPrimary: "Talk to Resinaro about my case",
    bottomSecondary: "Ask for the £35 guide",
  },

  it: {
    badge: "Cittadinanza italiana · Jure matrimonii",
    audiencePill: "Per chi vive nel Regno Unito",
    heroTitle:
      "Cittadinanza italiana per matrimonio dal Regno Unito (2025): guida pratica",
    heroIntro:
      "Una panoramica chiara e non legale sulla cittadinanza italiana per matrimonio (jure matrimonii) per chi vive nel Regno Unito. Questa guida spiega in modo semplice cosa significa di solito, i requisiti di base, i documenti tipici e come funziona spesso la procedura tramite i consolati italiani di Londra, Manchester ed Edimburgo.",
    heroSub:
      "Non è una consulenza legale e non sostituisce le istruzioni ufficiali o un avvocato. Usala come orientamento iniziale, poi controlla sempre le regole aggiornate sui siti del Ministero dell’Interno e del tuo consolato.",
    lastUpdated: "Ultimo aggiornamento",
    readTime: "10 min di lettura",

    supportTitle: "Come Resinaro può supportarti",
    supportBody:
      "Non decidiamo noi se hai diritto alla cittadinanza e non possiamo garantirne il riconoscimento. Possiamo però aiutarti a smettere di andare a tentativi, capire le regole in linguaggio semplice e organizzare i documenti prima di spendere altri soldi.",
    guideLabel: "£35 · GUIDA SCRITTA FAI-DA-TE",
    guideBody:
      "Ideale se vuoi capire il percorso per cittadinanza per matrimonio dall’UK in autonomia, ma sei stanco/a di post contraddittori e risposte a metà.",
    guideBullets: [
      "Spiega il percorso standard jure matrimonii in linguaggio semplice, usando come riferimento le fonti ufficiali.",
      "Riassume i requisiti più comuni (anni di matrimonio, residenza, lingua, casellario).",
      "Include una checklist strutturata e consigli pratici pensati per chi vive nel Regno Unito.",
      "Contiene email di esempio (italiano + inglese) per chiedere chiarimenti a consolati e altre autorità.",
    ],
    guideCta: "Richiedi la guida da £35 →",

    oneToOneLabel: "£170 · SUPPORTO PRATICO 1:1",
    oneToOneBody:
      "Ideale se vuoi che qualcuno in UK che parla italiano e inglese guardi il tuo caso e ti aiuti a costruire un piano realistico e concreto.",
    oneToOneBullets: [
      "Rivediamo la tua situazione e i documenti a livello pratico (non è parere legale).",
      "Segnaliamo lacune evidenti o assunzioni rischiose prima che tu spenda centinaia di sterline.",
      "Prepariamo un piano passo-per-passo e una struttura di cartelle digitali così sai sempre qual è il prossimo passo.",
    ],
    oneToOneCta: "Fai controllare la mia situazione (£170) →",
    disclaimer:
      "Resinaro non è uno studio legale e non può dare pareri legali o garantire la cittadinanza. Ci concentriamo su supporto pratico, documenti, organizzazione e comunicazione.",

    soundsLikeTitle: "Ti riconosci in qualcuno di questi punti?",
    soundsLikeIntro:
      "Se almeno una di queste frasi ti descrive, non sei l’unico/a:",
    soundsLikeItems: [
      "Sei sposato/a o in unione civile con un cittadino italiano e vivi nel Regno Unito.",
      "Hai letto spiegazioni diverse e ognuna dice qualcosa di leggermente diverso su tempi e requisiti.",
      "Hai paura di ordinare certificati, traduzioni o casellari sbagliati e buttare via soldi.",
      "Rimandi da mesi perché non sai se stai “facendo bene” o se rientri davvero nei requisiti.",
    ],

    section1Title: "1. Cosa significa di solito cittadinanza per matrimonio",
    section1Body: [
      "La cittadinanza italiana per matrimonio (jure matrimonii) è un percorso in cui il coniuge non italiano può richiedere la cittadinanza dopo aver rispettato alcune condizioni. Di solito prevede una domanda formale, regole rigide sui documenti e tempi lunghi al Ministero dell’Interno.",
      "L’obiettivo di questa guida non è ripetere tutta la legge, ma tradurre i concetti base in linguaggio pratico, per aiutarti a capire in cosa ti stai impegnando prima di spendere soldi.",
      "È un percorso diverso dalla cittadinanza per discendenza: invece di dimostrare una linea italiana, ti concentri sul rapporto con il cittadino italiano e sulla tua storia personale.",
    ],

    section2Title: "2. Requisiti di base (semplificati, non legali)",
    section2Intro:
      "I requisiti possono cambiare e alcuni vengono interpretati in modo diverso a seconda dei casi. Controlla sempre le regole ufficiali. In forma molto semplificata, molte persone devono considerare:",
    section2Bullets: [
      "Da quanto tempo siete sposati o in unione civile registrata.",
      "Dove vivete tu e il/la partner (in Italia, nel Regno Unito o altrove).",
      "Se hai un livello di lingua italiana riconosciuto (ad esempio B1).",
      "I certificati del casellario penale dei Paesi in cui hai vissuto per un certo periodo.",
      "Se il matrimonio è stato correttamente registrato presso le autorità italiane.",
    ],
    section2Note:
      "Questa è solo una sintesi orientativa. Per una valutazione formale, o per situazioni complesse, fai sempre riferimento a fonti ufficiali o a un professionista qualificato.",

    section3Title: "3. Cosa cambia se vivi nel Regno Unito",
    section3Body: [
      "Se vivi nel Regno Unito, la tua pratica viene di solito gestita tramite il consolato italiano competente per zona. Ogni consolato può pubblicare una propria pagina con istruzioni specifiche.",
      "Oltre alle regole italiane, devi di solito gestire documenti emessi nel Regno Unito (casellari, prove di residenza e, a volte, traduzioni o apostille).",
      "Ricorda che vecchi PDF, screenshot o commenti sui social diventano facilmente obsoleti. Prima di spendere soldi, incrocia sempre le informazioni con il sito ufficiale del consolato e del Ministero.",
    ],

    section4Title:
      "4. Documenti tipici in una pratica per matrimonio (solo orientativo)",
    section4Intro:
      "Ogni caso è diverso, ma molte domande di cittadinanza per matrimonio includono combinazioni di documenti come:",
    section4Bullets: [
      "Documenti italiani che confermano la cittadinanza del/la partner e la registrazione del matrimonio.",
      "Il tuo certificato di nascita completo, nel formato corretto per l’uso internazionale.",
      "Certificati del casellario penale dal Regno Unito e da altri Paesi in cui hai vissuto per un periodo significativo.",
      "Prova del livello di lingua, se richiesto (ad esempio certificazione B1 da ente riconosciuto).",
      "Traduzioni e, dove necessario, apostille sui documenti esteri.",
    ],
    section4Outro:
      "L’importante non è solo “avere dei documenti”, ma averli nel formato, ordine e con la coerenza richiesti dalle autorità. Piccole differenze nei nomi o nelle date a volte si possono gestire, ma non dovrebbero essere una sorpresa allo sportello.",

    section5Title:
      "5. Quanto può durare la cittadinanza per matrimonio",
    section5Body: [
      "Questo percorso è noto per i tempi lunghi. A seconda delle regole in vigore e del carico di lavoro del Ministero dell’Interno, la procedura può richiedere diversi anni.",
      "Nessuna agenzia, consulente o servizio di supporto può controllare i tempi interni. Se qualcuno promette una decisione garantita entro una data precisa, è bene essere molto cauti.",
      "L’approccio di Resinaro è concentrarsi su ciò che puoi controllare: capire il percorso, preparare bene i documenti e avere aspettative realistiche.",
    ],

    section6Title:
      "6. Come Resinaro può aiutarti a restare organizzato/a",
    section6Body: [
      "Non possiamo accelerare il Ministero né garantire la cittadinanza. Possiamo però aiutarti con la parte pratica e un po’ caotica – soprattutto se vivi in UK e devi combinare procedure italiane e britanniche.",
      "La nostra guida scritta ti dà una panoramica da leggere con calma. Il supporto 1:1 è pensato per quando vuoi che qualcuno guardi la tua situazione e costruisca con te un piano su misura.",
      "In entrambi i casi, ci basiamo sempre su fonti ufficiali e siamo trasparenti sui limiti di ciò che possiamo e non possiamo fare.",
    ],

    faqTitle: "7. FAQ: cittadinanza italiana per matrimonio dall’UK",
    faqItems: [
      {
        q: "Questa guida o il servizio sono una consulenza legale?",
        a: "No. Nulla in questa pagina è un parere legale e non siamo uno studio legale. È un orientamento pratico per aiutarti a capire documenti e organizzazione. Per valutazioni formali o casi complessi, rivolgiti sempre a un professionista qualificato.",
      },
      {
        q: "Preparate o inviate voi la domanda online al posto mio?",
        a: "Ci concentriamo sull’aiutarti a capire il percorso, controllare in modo pratico i documenti e organizzare la pratica. Non possiamo agire come tuoi rappresentanti legali né garantire come le autorità valuteranno la domanda.",
      },
      {
        q: "Potete velocizzare il Ministero dell’Interno o il consolato?",
        a: "No. I tempi interni vengono decisi solo dalle autorità italiane. Chi promette un esito garantito entro una data precisa non è realistico.",
      },
      {
        q: "Posso iniziare dalla guida e poi prenotare il 1:1?",
        a: "Sì. Molte persone partono dalla guida da £35 per capire le basi e prenotano il supporto 1:1 solo quando sono pronte a fare passi concreti o vogliono un secondo parere sulla pratica.",
      },
    ],

    bottomCtaTitle: "Vuoi parlare della tua situazione con una persona vera?",
    bottomCtaBody:
      "Se non sai se ha senso andare avanti o temi di buttare soldi in documenti sbagliati, puoi mandarci un messaggio breve sulla tua situazione. Ti rispondiamo in modo onesto: solo guida, supporto 1:1 o, a volte, un percorso diverso.",
    bottomPrimary: "Parla con Resinaro del mio caso",
    bottomSecondary: "Richiedi la guida da £35",
  },
};

/* ================================ PAGE ================================= */

export default function CitizenshipByMarriageCommunityPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale ?? "en";
  const isIt = locale === "it";
  const t = copy[isIt ? "it" : "en"];
  const jsonLd = getArticleJsonLd(locale);

  const today = new Date();
  const formattedDate = today.toLocaleDateString(isIt ? "it-IT" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const path = (p: string) => `/${locale}${p}`;

  return (
    <main className="bg-slate-50 pb-16 pt-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sky-800 ring-1 ring-sky-100">
              {t.badge}
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 ring-1 ring-emerald-100">
              {t.audiencePill}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {t.heroTitle}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-slate-700">
                {t.heroIntro}
              </p>
              <p className="max-w-2xl text-xs text-slate-600">{t.heroSub}</p>

              <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
                <span>
                  {t.lastUpdated}: {formattedDate}
                </span>
                <span aria-hidden="true">·</span>
                <span>{t.readTime}</span>
              </div>
            </div>

            <div className="relative h-52 w-full overflow-hidden rounded-3xl bg-slate-900/5 sm:h-64 lg:h-72">
              <Image
                src="/images/service-passport.png"
                alt={
                  isIt
                    ? "Passaporto italiano, fedi e documenti su una scrivania nel Regno Unito"
                    : "Italian passport, wedding rings and documents on a desk in the United Kingdom"
                }
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>

        {/* SUPPORT + CTA CARDS */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-sm font-semibold text-slate-900">
                {t.supportTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-700">{t.supportBody}</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {/* Guide */}
                <div className="flex flex-col rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {t.guideLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-800">
                    {t.guideBody}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-700">
                    {t.guideBullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-1 items-end">
                    <Link
                      href={`${path(
                        "/contact"
                      )}?topic=citizenship-by-marriage-guide`}
                      className="inline-flex items-center text-xs font-semibold text-sky-800 underline underline-offset-4"
                    >
                      {t.guideCta}
                    </Link>
                  </div>
                </div>

                {/* 1:1 */}
                <div className="flex flex-col rounded-xl bg-slate-900 p-4 text-slate-50 ring-1 ring-slate-800">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-100">
                    {t.oneToOneLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-50">
                    {t.oneToOneBody}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-100">
                    {t.oneToOneBullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-1 items-end">
                    <Link
                      href={`${path(
                        "/contact"
                      )}?topic=citizenship-by-marriage-1-1`}
                      className="inline-flex items-center text-xs font-semibold text-slate-900 rounded-full bg-white px-3 py-1.5 hover:bg-slate-100"
                    >
                      {t.oneToOneCta}
                    </Link>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">{t.disclaimer}</p>
            </div>

            {/* Does this sound like you */}
            <div className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <h2 className="text-sm font-semibold text-slate-900">
                {t.soundsLikeTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-800">
                {t.soundsLikeIntro}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-800">
                {t.soundsLikeItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Simple “On this page” nav (not sticky) */}
          <aside className="space-y-4 lg:pt-1">
            <div className="rounded-2xl bg-white p-4 text-sm ring-1 ring-slate-200">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {isIt ? "In questa guida" : "On this page"}
              </h2>
              <ol className="mt-3 space-y-1.5 text-xs text-slate-800">
                <li>
                  <a href="#section-1" className="hover:underline">
                    1. {t.section1Title.replace(/^1\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="hover:underline">
                    2. {t.section2Title.replace(/^2\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="hover:underline">
                    3. {t.section3Title.replace(/^3\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#section-4" className="hover:underline">
                    4. {t.section4Title.replace(/^4\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#section-5" className="hover:underline">
                    5. {t.section5Title.replace(/^5\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#section-6" className="hover:underline">
                    6. {t.section6Title.replace(/^6\.\s*/, "")}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    7. {t.faqTitle.replace(/^7\.\s*/, "")}
                  </a>
                </li>
              </ol>
              <p className="mt-3 text-[11px] text-slate-500">
                {isIt
                  ? "Usa questa lista solo come orientamento. Prima di agire, controlla sempre le istruzioni ufficiali del tuo consolato."
                  : "Use this list as orientation only. Before acting, always check your consulate’s official instructions."}
              </p>
            </div>
          </aside>
        </section>

        {/* MAIN ARTICLE */}
        <article className="space-y-10 text-sm leading-relaxed text-slate-800">
          {/* Section 1 */}
          <section id="section-1" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section1Title}
            </h2>
            {t.section1Body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section2Title}
            </h2>
            <p>{t.section2Intro}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              {t.section2Bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-600">{t.section2Note}</p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section3Title}
            </h2>
            {t.section3Body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section4Title}
            </h2>
            <p>{t.section4Intro}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              {t.section4Bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-600">{t.section4Outro}</p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section5Title}
            </h2>
            {t.section5Body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.section6Title}
            </h2>
            {t.section6Body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.faqTitle}
            </h2>
            <div className="space-y-3">
              {t.faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.q}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* BOTTOM CTA */}
        <section className="border-t border-slate-200 pt-8">
          <div className="rounded-2xl bg-sky-900 px-5 py-6 text-sm text-slate-50 sm:px-6 sm:py-7">
            <p className="text-base font-semibold">{t.bottomCtaTitle}</p>
            <p className="mt-1 text-sm text-sky-100">{t.bottomCtaBody}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={`${path(
                  "/contact"
                )}?topic=citizenship-by-marriage-1-1`}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-slate-100"
              >
                {t.bottomPrimary}
              </Link>
              <Link
                href={`${path(
                  "/contact"
                )}?topic=citizenship-by-marriage-guide`}
                className="inline-flex items-center text-sm font-semibold text-sky-100 hover:text-white"
              >
                {t.bottomSecondary}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
