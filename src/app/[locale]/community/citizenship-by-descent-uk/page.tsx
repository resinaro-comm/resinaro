import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n";

type PageParams = {
  params: { locale: Locale };
};

const baseMetadata: Metadata = {
  title:
    "Italian Citizenship by Descent (Jure Sanguinis) from the UK (2025) – Practical Guide",
  description:
    "2025 guide to Italian citizenship by descent (jure sanguinis) from the UK: eligibility, Italian dual citizenship, UK & Italian documents, consulate procedures (London, Manchester, Edinburgh) and practical support with a £35 guide or £170 1:1 help.",
  alternates: { canonical: "/community/citizenship-by-descent-uk" },
  openGraph: {
    title:
      "Italian Citizenship by Descent (Jure Sanguinis) from the UK (2025) – Practical Guide",
    description:
      "Clear overview of Italian citizenship by descent and dual citizenship from the UK: who qualifies, how jure sanguinis works, documents checklist, timelines and practical support options.",
    type: "article",
    url: "/community/citizenship-by-descent-uk",
    images: ["/images/community/citizenship-descent-hero.jpg"],
  },
};

// locale-aware SEO
export function generateMetadata({ params }: PageParams): Metadata {
  const locale = params.locale ?? "en";

  if (locale === "it") {
    const title =
      "Cittadinanza italiana per discendenza (jure sanguinis) dal Regno Unito (2025) – guida pratica";
    const description =
      "Guida 2025 alla cittadinanza italiana per discendenza (jure sanguinis) dal Regno Unito: requisiti, doppia cittadinanza, documenti italiani e UK, consolati di Londra, Manchester, Edimburgo e supporto pratico con guida da £35 o pacchetto 1:1 da £170.";

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

const updatedDate = "2025-12-01";
const readingTimeMinutes = 11;

const tocItems = {
  en: [
    { id: "what-is", label: "1. What Italian citizenship by descent means" },
    { id: "requirements", label: "2. Requirements for jure sanguinis" },
    {
      id: "how-to-apply-uk",
      label: "3. How to apply from the UK (London, Manchester, Edinburgh)",
    },
    {
      id: "documents-checklist",
      label: "4. Documents checklist (Italy + UK)",
    },
    {
      id: "timelines",
      label: "5. How long Italian citizenship by descent takes",
    },
    { id: "support", label: "6. How Resinaro can help you" },
    { id: "faq", label: "7. FAQ: Italian dual citizenship by descent" },
  ],
  it: [
    {
      id: "what-is",
      label: "1. Cosa significa cittadinanza italiana per discendenza",
    },
    {
      id: "requirements",
      label: "2. Requisiti per la cittadinanza jure sanguinis",
    },
    {
      id: "how-to-apply-uk",
      label: "3. Come fare domanda dal Regno Unito",
    },
    {
      id: "documents-checklist",
      label: "4. Lista documenti (Italia + UK)",
    },
    {
      id: "timelines",
      label: "5. Tempi per la cittadinanza per discendenza",
    },
    {
      id: "support",
      label: "6. Come può aiutarti Resinaro",
    },
    {
      id: "faq",
      label: "7. FAQ: doppia cittadinanza per discendenza",
    },
  ],
};

export default function CitizenshipByDescentPage({ params }: PageParams) {
  const locale = params.locale ?? "en";
  const isIt = locale === "it";
  const t = isIt ? translations.it : translations.en;
  const toc = isIt ? tocItems.it : tocItems.en;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.heroTitle,
    description: t.heroSubtitle,
    inLanguage: locale,
    dateModified: updatedDate,
    datePublished: "2025-12-01",
    author: {
      "@type": "Organization",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/images/logo-resinaro.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.resinaro.com/${locale}/community/citizenship-by-descent-uk`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.sections.faq.items.slice(0, 4).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Script id="citizenship-descent-article-jsonld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="citizenship-descent-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <main className="bg-slate-50 pb-16 pt-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sky-800 ring-1 ring-sky-100">
                {t.heroTag}
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 ring-1 ring-emerald-100">
                {t.heroPill}
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-4">
                <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {t.heroTitle}
                </h1>
                <p className="max-w-2xl text-sm sm:text-base text-slate-700">
                  {t.heroSubtitle}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>
                    {t.lastUpdatedLabel}{" "}
                    {formatDateForLocale(updatedDate, locale)}
                  </span>
                  <span className="h-3 w-px bg-slate-300" />
                  <span>
                    {readingTimeMinutes} {t.minutes}
                  </span>
                </div>
              </div>

              <div className="relative h-52 w-full overflow-hidden rounded-3xl bg-slate-900/5 sm:h-64 lg:h-72">
                <Image
                  src="/images/community/citizenship-descent-hero.jpg"
                  alt={
                    isIt
                      ? "Documenti e passaporto italiano su una scrivania nel Regno Unito"
                      : "Italian passport, UK documents and laptop on a desk in the United Kingdom"
                  }
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </header>

          {/* BODY: article + simple TOC (non-sticky) */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">
            {/* ARTICLE */}
            <article className="space-y-10">
              {/* Service block */}
              <section aria-labelledby="resinaro-support">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100 sm:p-6">
                  <p
                    id="resinaro-support"
                    className="text-sm font-semibold text-sky-900"
                  >
                    {t.supportTitle}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {t.supportIntro}
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-sky-50 p-4">
                      <p className="text-[11px] font-semibold tracking-wide text-sky-900">
                        £35 · {t.guideLabel}
                      </p>
                      <p className="mt-2 text-sm text-slate-800">
                        {t.guideText}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-700">
                        {t.guideBullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        href={`/${locale}/contact?topic=citizenship-descent-guide`}
                        className="mt-3 inline-flex items-center text-sm font-semibold text-sky-800 hover:text-sky-900"
                      >
                        {t.guideCta}
                        <span aria-hidden="true" className="ml-1">
                          →
                        </span>
                      </Link>
                    </div>

                    <div className="rounded-xl bg-slate-900 p-4 text-slate-50">
                      <p className="text-[11px] font-semibold tracking-wide text-sky-100">
                        £170 · {t.oneToOneLabel}
                      </p>
                      <p className="mt-2 text-sm text-slate-50">
                        {t.oneToOneText}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-100">
                        {t.oneToOneBullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        href={`/${locale}/contact?topic=citizenship-descent-1-1`}
                        className="mt-3 inline-flex items-center text-sm font-semibold text-slate-50 hover:text-white"
                      >
                        {t.oneToOneCta}
                        <span aria-hidden="true" className="ml-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500">
                    {t.disclaimerShort}
                  </p>
                </div>
              </section>

              {/* “Is this you?” emotional callout */}
              <section aria-label={t.isThisYou.title}>
                <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                  <p className="text-xs font-semibold tracking-wide text-amber-900">
                    {t.isThisYou.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-800">
                    {t.isThisYou.intro}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-800">
                    {t.isThisYou.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/contact?topic=citizenship-descent-1-1`}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-amber-900 hover:text-amber-950"
                  >
                    {t.isThisYou.cta}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </section>

              {/* MAIN SECTIONS */}

              <section
                id="what-is"
                className="border-t border-slate-200 pt-8"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {t.sections.whatIs.title}
                </h2>
                {t.sections.whatIs.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 text-sm text-slate-700">
                    {p}
                  </p>
                ))}
              </section>

              <section
                id="requirements"
                className="border-t border-slate-200 pt-8"
              >
                <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {t.sections.requirements.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-700">
                    {t.sections.requirements.intro}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {t.sections.requirements.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-500">
                    {t.sections.requirements.note}
                  </p>
                </div>
              </section>

              <section
                id="how-to-apply-uk"
                className="border-t border-slate-200 pt-8"
              >
                <div className="rounded-2xl bg-slate-900 p-5 text-slate-50">
                  <h2 className="text-lg font-semibold">
                    {t.sections.howToApply.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-100">
                    {t.sections.howToApply.intro}
                  </p>
                  <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-100">
                    {t.sections.howToApply.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  <p className="mt-3 text-xs text-slate-200">
                    {t.sections.howToApply.note}
                  </p>
                </div>
              </section>

              <section
                id="documents-checklist"
                className="border-t border-slate-200 pt-8"
              >
                <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {t.sections.documents.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-700">
                    {t.sections.documents.intro}
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {t.sections.documents.subtitles.italy}
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                        {t.sections.documents.italyItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {t.sections.documents.subtitles.uk}
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                        {t.sections.documents.ukItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    {t.sections.documents.note}
                  </p>
                </div>
              </section>

              <section
                id="timelines"
                className="border-t border-slate-200 pt-8"
              >
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {t.sections.timelines.title}
                  </h2>
                  {t.sections.timelines.paragraphs.map((p, i) => (
                    <p key={i} className="mt-3 text-sm text-slate-700">
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              <section id="support" className="border-t border-slate-200 pt-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  {t.sections.support.title}
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  {t.sections.support.intro}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-sky-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      £35 · {t.sections.support.guideTitle}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700">
                      {t.sections.support.guideIntro}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      {t.sections.support.guideItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-4 text-slate-50">
                    <h3 className="text-sm font-semibold">
                      £170 · {t.sections.support.oneToOneTitle}
                    </h3>
                    <p className="mt-2 text-sm text-slate-100">
                      {t.sections.support.oneToOneIntro}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-100">
                      {t.sections.support.oneToOneItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {t.sections.support.note}
                </p>
              </section>

              <section id="faq" className="border-t border-slate-200 pt-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  {t.sections.faq.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {t.sections.faq.items.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {faq.q}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom CTA */}
              <section className="border-t border-slate-200 pt-8">
                <div className="rounded-2xl bg-sky-900 px-5 py-6 text-sm text-slate-50 sm:px-6 sm:py-7">
                  <p className="text-base font-semibold">
                    {t.bottomCta.title}
                  </p>
                  <p className="mt-1 text-sm text-sky-100">
                    {t.bottomCta.text}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link
                      href={`/${locale}/contact?topic=citizenship-descent-1-1`}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-slate-100"
                    >
                      {t.bottomCta.primary}
                    </Link>
                    <Link
                      href={`/${locale}/contact?topic=citizenship-descent-guide`}
                      className="inline-flex items-center text-sm font-semibold text-sky-100 hover:text-white"
                    >
                      {t.bottomCta.secondary}
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* TOC – normal card, no sticky */}
            <aside className="hidden lg:block">
              <div className="space-y-4 rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-slate-100">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    {t.tocTitle}
                  </p>
                  <nav className="mt-2 space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-slate-600 hover:text-sky-800"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <p>{t.tocHint}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

const translations = {
  en: {
    heroTag: "Italian citizenship · Jure sanguinis",
    heroPill: "For people living in the UK",
    heroTitle:
      "Italian Citizenship by Descent from the UK (2025): Practical Guide",
    heroSubtitle:
      "A clear, non-legal overview of Italian citizenship by descent (jure sanguinis) and Italian dual citizenship for people living in the United Kingdom: who can qualify, how the process works via the Italian consulates in London, Manchester and Edinburgh, what documents you usually need and how to avoid wasting time and money.",
    lastUpdatedLabel: "Last updated:",
    minutes: "min read",
    supportTitle: "How Resinaro can support you",
    supportIntro:
      "We don’t promise miracles and we can’t guarantee recognition. What we can do is help you stop guessing: understand the rules, organise your documents and build a realistic plan before you spend more money.",
    guideLabel: "self-guided written guide",
    guideText:
      "Best if you want to understand Italian citizenship by descent from the UK by yourself, but you’re tired of conflicting posts and half answers.",
    guideBullets: [
      "Explains jure sanguinis and Italian dual citizenship in plain language.",
      "Shows you what consulates in London, Manchester and Edinburgh usually ask for.",
      "Includes a structured checklist and example emails in English and Italian.",
    ],
    guideCta: "Start with the £35 guide",
    oneToOneLabel: "1:1 practical support",
    oneToOneText:
      "Ideal if you want someone in the UK who speaks Italian & English to look at your situation and tell you what actually makes sense next.",
    oneToOneBullets: [
      "We review your family line and documents at a practical level.",
      "We map out a step-by-step plan tailored to you.",
      "You leave with a clean digital folder and clear next actions.",
    ],
    oneToOneCta: "Get my documents checked (£170)",
    disclaimerShort:
      "Resinaro is not a law firm and cannot give legal advice or guarantee citizenship. We focus on practical support with documents, organisation and communication with the authorities.",
    isThisYou: {
      title: "Does this sound like you?",
      intro: "If you recognise yourself in at least one of these, you’re not alone:",
      items: [
        "You’ve read ten different posts about Italian citizenship by descent and they all say something slightly different.",
        "You’re scared of ordering the wrong UK certificates, translations or apostilles and wasting hundreds of pounds.",
        "You keep putting things off because you don’t know if you’re “doing it right” or if you even qualify.",
      ],
      cta: "Send us a quick summary of your case",
    },
    tocTitle: "On this page",
    tocHint:
      "Use this as orientation only. Before you act, always double-check the latest instructions on your Italian consulate’s website.",
    bottomCta: {
      title: "Turn a vague idea into a clear, organised file.",
      text: "Tell us briefly about your family line and where you are in the process. We’ll tell you honestly whether the £35 guide, the £170 1:1 package or something else is the best next step.",
      primary: "Talk to Resinaro about my case",
      secondary: "Read the £35 guide first",
    },
    sections: {
      whatIs: {
        title: "1. What Italian citizenship by descent (jure sanguinis) means",
        paragraphs: [
          "“Italian citizenship by descent” – also called jure sanguinis – is based on the idea that Italian citizenship passes down through the blood line from parent to child. When you apply, you are not asking for a “new” citizenship but asking Italy to recognise that, on paper, you have always been Italian through your ancestry.",
          "In practice, you try to show an uninterrupted line from you back to an Italian ancestor using birth, marriage and (sometimes) death certificates. Authorities look at when and where that ancestor was born, whether they became a citizen of another country, and whether that naturalisation happened before or after the birth of the next person in the line.",
          "There is no simple “maximum number of generations” written in the law. What really matters is the chain, the dates and the consistency of data across all documents.",
        ],
      },
      requirements: {
        title: "2. Requirements for Italian citizenship by descent (simplified)",
        intro:
          "Only the Italian authorities can give you a definitive answer, but most jure sanguinis routes involve checks like:",
        items: [
          "Is there at least one Italian-born ancestor (grandparent, great-grandparent etc.) in your direct line?",
          "Was that ancestor still an Italian citizen after the birth of their child in your line (for example, did they naturalise as British only later)?",
          "Can you document the direct line from that ancestor down to you with official certificates of birth, marriage and – where applicable – death?",
          "Are there any naturalisations in the line, and did they happen before or after key births?",
          "Is the line maternal, and do the relevant dates fall within the rules that allow transmission through women?",
        ],
        note:
          "This summary is only for orientation. If your situation is unusual or you’re unsure about naturalisation dates and maternal lines, treat this page as a starting point and not a legal opinion.",
      },
      howToApply: {
        title:
          "3. How to apply for Italian citizenship by descent from the UK (London, Manchester, Edinburgh)",
        intro:
          "Every consulate and every family story is different, but most people living in the UK follow some version of these steps:",
        steps: [
          "Map your family line: write down each person from you back to the Italian ancestor, with approximate dates and places of birth, marriage and naturalisation.",
          "Check basic eligibility using official consulate information and, if needed, professional advice – especially where there are naturalisations or maternal lines.",
          "Request Italian documents: usually starting from the Italian comune where the ancestor was born or where events were recorded.",
          "Request UK documents: long-form birth and marriage certificates for events that happened in England, Wales, Scotland or Northern Ireland, using the correct formats.",
          "Plan translations and apostilles: understand which documents need to be translated into Italian and which need apostilles for use in Italy.",
          "Follow the consulate’s procedure: each consulate (London, Manchester, Edinburgh) explains how to submit your jure sanguinis application. Some steps may be online, others by post or in person.",
          "Prepare for waiting times and follow-ups: once you submit, expect months (sometimes more) of processing, possible requests for extra documents and back-and-forth with offices.",
        ],
        note:
          "Official consulate pages change frequently. Always treat screenshots and old PDFs as historical examples and double-check the live website before acting.",
      },
      documents: {
        title:
          "4. Documents checklist for Italian citizenship by descent (Italy + UK)",
        intro:
          "You will build your own checklist based on your family line and the consulate’s requirements. As a rough idea, many applications include some mix of the following:",
        subtitles: {
          italy: "Documents from Italy",
          uk: "Documents from the UK and other countries",
        },
        italyItems: [
          "Birth certificate of the Italian ancestor, issued by the Italian comune of birth.",
          "Marriage certificate of the Italian ancestor, where applicable.",
          "Certificates or records from the comune relating to residence or family status, if asked for by the consulate.",
          "Certificates of birth, marriage and death for later generations that took place in Italy.",
        ],
        ukItems: [
          "Full (long-form) UK birth and marriage certificates for the people in the line who were born or married in the UK.",
          "Evidence of foreign naturalisation (for example British naturalisation certificates or Home Office records), with clear dates.",
          "Criminal record certificates or police checks, if required as part of the process.",
          "Certified translations into Italian where requested, and apostilles on foreign documents that need to be legally valid in Italy.",
        ],
        note:
          "The goal is not just to collect random documents, but to have the right ones, in the right format, with names and dates that make sense together. Small discrepancies can sometimes be explained, but it is better to discover them early rather than at the consulate counter.",
      },
      timelines: {
        title: "5. How long does Italian citizenship by descent take from the UK?",
        paragraphs: [
          "There is no single guaranteed timeline. People online will mention one or two years; others will talk about much longer waits. The reality is that timeframes depend on your consulate (London, Manchester or Edinburgh), the comune in Italy and the complexity of your family history.",
          "In very rough terms, you can expect months just to collect and legalise documents, plus many more months – sometimes years – of waiting once your file is with the authorities. This is exactly why it is worth getting your documents right the first time and avoiding preventable delays.",
          "Anyone who promises a specific recognition date is over-selling. A more honest promise is: a clearer file, fewer obvious mistakes and more realistic expectations.",
        ],
      },
      support: {
        title:
          "6. How Resinaro can help with Italian citizenship by descent from the UK",
        intro:
          "Resinaro exists for people in the UK who are stuck between Italian rules and British paperwork. We don’t decide who qualifies and we don’t replace lawyers or the consulate, but we can make the administrative side much less painful.",
        guideTitle: "written guide – Italian citizenship by descent from the UK",
        guideIntro:
          "If you’re still at the research stage, the written guide is usually the safest starting point:",
        guideItems: [
          "It explains jure sanguinis, Italian dual citizenship and common myths in practical language.",
          "It walks you through the typical path for someone applying from the UK via the Italian consulates.",
          "You get a printable checklist and an example folder structure to keep everything organised.",
          "You also get email templates (in English and Italian) you can adapt when writing to comunes or consulates.",
        ],
        oneToOneTitle: "1:1 support – personalised document & plan check",
        oneToOneIntro:
          "If you already know you want to move forward and don’t want to build the whole path alone, the 1:1 package is more appropriate:",
        oneToOneItems: [
          "We ask you to complete a short online intake form and upload the certificates you already have.",
          "We review them at a practical level and flag obvious issues (missing links in the line, unclear naturalisation dates, risky document formats).",
          "We prepare a personalised, step-by-step plan with a realistic order of actions and a sense of where you might hit delays.",
          "We propose a simple digital folder structure, rename files and show you how to keep things tidy as you add new documents.",
          "We go through everything in a live video call where you can ask questions in English or Italian.",
          "After the call, you receive a written summary and a short window for follow-up clarifications by message or email.",
        ],
        note:
          "Only Italian authorities can grant or refuse citizenship. Our role is to help you approach them with a file that makes sense on the first try.",
      },
      faq: {
        title: "7. FAQ: Italian dual citizenship by descent",
        items: [
          {
            q: "Can I get Italian dual citizenship by descent if I was born in the UK?",
            a: "Yes, many people who were born in the UK qualify for Italian citizenship by descent, as long as there is an Italian ancestor in the direct line and the legal conditions are met. This often results in dual citizenship (British and Italian). Whether your specific line works is something only the authorities can confirm, but you can usually get a good sense by looking at documents and naturalisation dates.",
          },
          {
            q: "Do I have to give up my British passport to get Italian citizenship by descent?",
            a: "In most standard cases, no: Italy and the UK both allow dual citizenship. However, rules can interact differently if you have other nationalities or special circumstances, so you should always double-check using official sources or professional advice.",
          },
          {
            q: "Does my mother’s line count for Italian citizenship by descent?",
            a: "In many situations, yes – citizenship can pass through the maternal line as well as the paternal one. However, for older generations there are date-based rules on when transmission through women is recognised. This is a classic area where it’s worth checking details carefully with official sources.",
          },
          {
            q: "Can I apply in Italy instead of through the UK consulate?",
            a: "Some people choose to establish residency in Italy and apply via the local comune rather than their consulate abroad. This route has its own requirements, timeframes and practical difficulties. If you live stably in the UK and cannot spend long periods in Italy, the consulate route is usually the realistic path.",
          },
        ],
      },
    },
  },

  it: {
    heroTag: "Cittadinanza italiana · jure sanguinis",
    heroPill: "Per chi vive nel Regno Unito",
    heroTitle:
      "Cittadinanza italiana per discendenza dal Regno Unito (2025): guida pratica",
    heroSubtitle:
      "Una panoramica chiara – non legale – sulla cittadinanza italiana per discendenza (jure sanguinis) e sulla doppia cittadinanza per chi vive nel Regno Unito: chi può avere diritto, come funziona la procedura tramite i consolati italiani di Londra, Manchester ed Edimburgo, quali documenti servono e come evitare di sprecare tempo e soldi.",
    lastUpdatedLabel: "Ultimo aggiornamento:",
    minutes: "min di lettura",
    supportTitle: "Come può aiutarti Resinaro",
    supportIntro:
      "Non promettiamo miracoli e non possiamo garantire il riconoscimento. Possiamo però aiutarti a smettere di andare a tentoni: capire le regole, sistemare i documenti e costruire un piano realistico prima di spendere altri soldi.",
    guideLabel: "guida scritta per chi fa da sé",
    guideText:
      "Pensata per chi vuole capire la cittadinanza per discendenza dal Regno Unito in autonomia, ma è stanco di leggere informazioni contraddittorie sui social.",
    guideBullets: [
      "Spiega jure sanguinis e doppia cittadinanza italiana in linguaggio semplice.",
      "Mostra cosa chiedono di solito i consolati di Londra, Manchester ed Edimburgo.",
      "Include una checklist strutturata e email di esempio in italiano e in inglese.",
    ],
    guideCta: "Parti dalla guida da £35",
    oneToOneLabel: "supporto pratico 1:1",
    oneToOneText:
      "Ideale se vuoi che qualcuno in UK, che parla italiano e inglese, guardi la tua situazione e ti dica cosa ha senso fare davvero.",
    oneToOneBullets: [
      "Facciamo un controllo pratico della tua linea familiare e dei documenti.",
      "Costruiamo con te un piano passo-per-passo personalizzato.",
      "Ti lasciamo con una cartella digitale ordinata e azioni chiare da seguire.",
    ],
    oneToOneCta: "Fatti controllare i documenti (£170)",
    disclaimerShort:
      "Resinaro non è uno studio legale e non offre pareri giuridici né garanzie di cittadinanza. Ci occupiamo di supporto pratico su documenti, organizzazione e comunicazione con le autorità.",
    isThisYou: {
      title: "Ti rivedi in questa situazione?",
      intro: "Se ti riconosci almeno in uno di questi punti, sei in buona compagnia:",
      items: [
        "Hai letto dieci post diversi sulla cittadinanza per discendenza e ognuno dice qualcosa di leggermente diverso.",
        "Hai paura di ordinare i certificati UK sbagliati, pagare traduzioni inutili o apostille non richieste e buttare via centinaia di sterline.",
        "Rimandi da mesi perché non sai se lo stai “facendo giusto” o se in realtà non rientri nei requisiti.",
      ],
      cta: "Mandaci due righe sulla tua situazione",
    },
    tocTitle: "In questa guida",
    tocHint:
      "Usa l’indice per orientarti. Prima di fare passi concreti, controlla sempre le indicazioni aggiornate del consolato competente.",
    bottomCta: {
      title: "Trasforma un’idea vaga in una pratica ordinata.",
      text: "Raccontaci in breve la tua linea familiare e a che punto sei. Ti diremo in modo onesto se ha più senso partire dalla guida da £35, dal pacchetto 1:1 da £170 o da altro.",
      primary: "Parla con Resinaro del tuo caso",
      secondary: "Leggi prima la guida da £35",
    },
    sections: {
      whatIs: {
        title:
          "1. Cosa significa cittadinanza italiana per discendenza (jure sanguinis)",
        paragraphs: [
          "La “cittadinanza italiana per discendenza” – jure sanguinis – parte dall’idea che la cittadinanza si trasmetta lungo la linea di sangue, da genitore a figlio. Quando presenti la domanda non stai chiedendo una cittadinanza nuova, ma che lo Stato italiano riconosca una cittadinanza che, sulla carta, hai già per via delle tue origini.",
          "In pratica cerchi di dimostrare, con certificati di nascita, matrimonio e (a volte) morte, un collegamento ininterrotto tra te e un antenato nato cittadino italiano. Le autorità guardano dove e quando è nato quell’antenato, se e quando ha ottenuto un’altra cittadinanza e se questa naturalizzazione è avvenuta prima o dopo la nascita dei discendenti.",
          "Non esiste un semplice “massimo numero di generazioni” scritto così. Contano soprattutto la catena, le date e la coerenza dei dati sui documenti.",
        ],
      },
      requirements: {
        title:
          "2. Requisiti per la cittadinanza italiana per discendenza (versione semplificata)",
        intro:
          "La risposta definitiva la possono dare solo le autorità italiane, ma nella maggior parte dei percorsi jure sanguinis si guarda a elementi come:",
        items: [
          "C’è almeno un antenato nato in Italia (nonno, bisnonno, trisavolo, ecc.) nella tua linea diretta?",
          "Quell’antenato era ancora cittadino italiano dopo la nascita del figlio successivo nella tua linea (ad esempio si è naturalizzato britannico solo in seguito)?",
          "Riesci a collegare quell’antenato fino a te attraverso atti ufficiali di nascita, matrimonio e – dove serve – morte?",
          "Ci sono naturalizzazioni nella linea e, se sì, sono avvenute prima o dopo le nascite chiave?",
          "La linea passa da una donna e, in tal caso, le date rientrano nelle regole che permettono la trasmissione materna?",
        ],
        note:
          "Questa sezione serve solo per orientarsi. Se la tua situazione è particolare o hai dubbi su naturalizzazioni e linee materne, considera questa pagina un punto di partenza e non un parere legale.",
      },
      howToApply: {
        title:
          "3. Come fare domanda di cittadinanza per discendenza dal Regno Unito (Londra, Manchester, Edimburgo)",
        intro:
          "Ogni consolato e ogni storia familiare è diversa, ma per chi vive nel Regno Unito il percorso assomiglia spesso a questi passaggi:",
        steps: [
          "Disegna la tua linea familiare: scrivi ogni persona da te all’antenato italiano, con date e luoghi indicativi di nascita, matrimonio e naturalizzazione.",
          "Controlla i requisiti di base usando le informazioni ufficiali dei consolati e, se necessario, un parere professionale – soprattutto se ci sono naturalizzazioni o linee materne.",
          "Richiedi gli atti in Italia: in genere partendo dal comune italiano di nascita dell’antenato e dagli altri eventi registrati lì.",
          "Richiedi i certificati nel Regno Unito: certificati di nascita e matrimonio in formato completo (long-form) per gli eventi avvenuti in Inghilterra, Galles, Scozia o Irlanda del Nord.",
          "Pianifica traduzioni e apostille: capisci quali documenti vanno tradotti in italiano e quali richiedono l’apostille per essere validi in Italia.",
          "Segui la procedura del consolato: i consolati di Londra, Manchester ed Edimburgo spiegano sul proprio sito come presentare una domanda jure sanguinis. Alcuni passaggi sono online, altri per posta o di persona.",
          "Metti in conto tempi di attesa e richieste integrative: una volta consegnata la pratica, possono volerci molti mesi (a volte anni), con possibili richieste di documenti aggiuntivi.",
        ],
        note:
          "Le pagine dei consolati vengono aggiornate spesso. Tratta sempre screenshot e PDF vecchi come materiale storico e verifica il sito ufficiale prima di muoverti.",
      },
      documents: {
        title:
          "4. Lista documenti per la cittadinanza italiana per discendenza (Italia + UK)",
        intro:
          "La tua checklist finale dipenderà dalla tua storia familiare e da quanto chiede il consolato. Come idea di massima, molte pratiche contengono una combinazione di questi documenti:",
        subtitles: {
          italy: "Documenti dall’Italia",
          uk: "Documenti dal Regno Unito e da altri Paesi",
        },
        italyItems: [
          "Certificato di nascita dell’antenato italiano, rilasciato dal comune di nascita.",
          "Certificato di matrimonio dell’antenato italiano, se pertinente.",
          "Altri certificati o estratti richiesti dal comune (residenza, stato di famiglia, ecc.), se richiesti dal consolato.",
          "Certificati di nascita, matrimonio e morte delle generazioni successive quando gli eventi sono avvenuti in Italia.",
        ],
        ukItems: [
          "Certificati di nascita e matrimonio in formato completo (long-form) per le persone della linea nati o sposati nel Regno Unito.",
          "Prove di eventuali naturalizzazioni estere (ad esempio certificati di naturalizzazione britannica o documenti dell’Home Office) con date chiare.",
          "Certificati penali o controlli di polizia, se previsti dalla procedura.",
          "Traduzioni giurate in italiano, dove richieste, e apostille sui documenti stranieri che devono valere in Italia.",
        ],
        note:
          "L’obiettivo non è mettere insieme documenti a caso, ma avere quelli giusti, nel formato corretto, con nomi e date che “parlano la stessa lingua”. Piccole differenze a volte si spiegano, ma è meglio scoprirle prima di andare allo sportello.",
      },
      timelines: {
        title:
          "5. Quanto tempo ci vuole per la cittadinanza italiana per discendenza dal Regno Unito?",
        paragraphs: [
          "Non esiste una tempistica garantita. Online c’è chi parla di uno o due anni, altri raccontano attese molto più lunghe. La verità è che i tempi dipendono dal consolato (Londra, Manchester o Edimburgo), dal comune italiano coinvolto e dalla complessità della tua storia familiare.",
          "Molto spesso ci vogliono mesi solo per raccogliere e legalizzare tutti i documenti, più molti mesi – a volte anni – dopo che la pratica è arrivata alle autorità competenti. Proprio per questo vale la pena preparare una pratica pulita fin dall’inizio, per evitare ritardi evitabili.",
          "Chi ti promette una data precisa sta esagerando. Una promessa più onesta è: una pratica più chiara, meno errori evidenti e aspettative più realistiche.",
        ],
      },
      support: {
        title:
          "6. Come può aiutarti Resinaro con la cittadinanza per discendenza dal Regno Unito",
        intro:
          "Resinaro esiste per chi vive nel Regno Unito e si trova in mezzo tra burocrazia italiana e documenti britannici. Non decidiamo noi chi ha diritto e non sostituiamo avvocati o consolati, ma possiamo rendere la parte pratica molto meno stressante.",
        guideTitle:
          "guida scritta – cittadinanza per discendenza dal Regno Unito",
        guideIntro:
          "Se sei ancora nella fase di informazione, la guida scritta è quasi sempre il punto di partenza più sicuro:",
        guideItems: [
          "Spiega in modo pratico jure sanguinis, doppia cittadinanza e i falsi miti più diffusi.",
          "Ti accompagna lungo il percorso tipico per chi presenta domanda dal Regno Unito tramite i consolati.",
          "Ti offre una checklist stampabile e una struttura di cartelle di esempio per tenere tutto in ordine.",
          "Include modelli di email (in italiano e in inglese) da adattare quando scrivi a comuni o consolati.",
        ],
        oneToOneTitle:
          "supporto 1:1 – controllo documenti e piano personalizzato",
        oneToOneIntro:
          "Se sai già di voler procedere e non vuoi costruire il percorso da solo, il pacchetto 1:1 è la scelta più adatta:",
        oneToOneItems: [
          "Compili un breve modulo online e carichi i certificati che hai già raccolto.",
          "Facciamo un controllo pratico e segnaliamo problemi evidenti (anelli mancanti nella linea, date di naturalizzazione poco chiare, formati rischiosi).",
          "Prepariamo un piano passo-per-passo personalizzato con un ordine realistico delle azioni e delle possibili fonti di ritardo.",
          "Ti proponiamo una struttura di cartelle digitale semplice, rinominando i file e mostrandoti come tenere tutto aggiornato.",
          "Rivediamo insieme il piano in videocall, dove puoi fare domande sia in italiano che in inglese.",
          "Dopo la call ricevi un riepilogo scritto e una breve finestra di follow-up per chiarimenti veloci.",
        ],
        note:
          "Solo le autorità italiane possono concedere o negare la cittadinanza. Il nostro ruolo è aiutarti a presentar loro una pratica che abbia senso al primo colpo.",
      },
      faq: {
        title: "7. FAQ: doppia cittadinanza italiana per discendenza",
        items: [
          {
            q: "Se sono nato nel Regno Unito, posso ottenere la doppia cittadinanza italiana per discendenza?",
            a: "Sì, molte persone nate nel Regno Unito hanno diritto alla cittadinanza italiana per discendenza, se c’è un antenato italiano nella linea diretta e se le condizioni di legge sono rispettate. Spesso questo porta alla doppia cittadinanza (britannica e italiana). Se la tua linea specifica funziona lo possono dire solo le autorità, ma con documenti e date delle naturalizzazioni puoi farti un’idea abbastanza chiara.",
          },
          {
            q: "Devo rinunciare al passaporto britannico per ottenere la cittadinanza italiana per discendenza?",
            a: "Nella maggior parte dei casi standard no: sia l’Italia che il Regno Unito permettono la doppia cittadinanza. Tuttavia, se hai altre cittadinanze o situazioni particolari, le regole potrebbero interagire in modo diverso: in questi casi è bene verificare con fonti ufficiali o un professionista.",
          },
          {
            q: "La linea materna vale per la cittadinanza per discendenza?",
            a: "In molti casi sì: la cittadinanza può passare anche attraverso la linea materna. Per generazioni più lontane, però, esistono regole legate alle date entro cui la trasmissione da parte di donne è riconosciuta. È uno dei temi su cui conviene verificare con attenzione usando fonti ufficiali.",
          },
          {
            q: "Posso fare la pratica direttamente in Italia invece che tramite il consolato nel Regno Unito?",
            a: "Alcune persone scelgono di stabilire la residenza in Italia e presentare la domanda al comune, invece che al consolato all’estero. È un percorso con requisiti, tempi e difficoltà pratiche propri. Se vivi stabilmente nel Regno Unito e non puoi fermarti a lungo in Italia, nella maggior parte dei casi la strada realistica resta quella consolare.",
          },
        ],
      },
    },
  },
};

function formatDateForLocale(dateString: string, locale: Locale): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "it" ? "it-IT" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
