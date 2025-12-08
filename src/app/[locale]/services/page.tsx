// src/app/[locale]/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { p } from "@/lib/localePath";

/* -------------------------------- SEO -------------------------------- */

export async function generateMetadata(
  { params }: { params: { locale: "en" | "it" } }
): Promise<Metadata> {
  const isIt = params.locale === "it";
  const title = isIt
    ? "Servizi — Resinaro | Supporto pratico per migranti nel Regno Unito"
    : "Services — Resinaro | Practical support for migrants in the UK";
  const description = isIt
    ? "Elenco completo dei servizi Resinaro: passaporti, NIN, AIRE, casa, traduzioni, benefici, salute mentale e integrazione. Tariffe trasparenti e tempistiche chiare."
    : "Full list of Resinaro services: passports, NIN, AIRE, housing, translations, benefits support, mental health and community integration. Transparent fees and clear timelines.";

  return {
    title,
    description,
    alternates: { canonical: "/services" },
    openGraph: {
      title,
      description,
      url: "https://www.resinaro.com/services",
      type: "website"
    },
    twitter: { card: "summary_large_image" }
  };
}

/* ------------------------------- Types -------------------------------- */

type Service = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  bullets?: string[];
  fee: string;
  path: string;
  turnaround?: string;
  badge?: string;
  image?: string;
};

/* -------------------------- Localized content ------------------------- */

function getCopy(locale: "en" | "it") {
  const isIt = locale === "it";
  return {
    isIt,
    heroKicker: isIt ? "Servizi" : "Services",
    heroH1: isIt ? "Supporto professionale per vivere nel Regno Unito" : "Professional support for life in the UK",
    heroP: isIt ? "Prezzi trasparenti. Tempistiche chiare. Approccio community-first." : "Transparent pricing. Clear timelines. Community-first delivery.",
    heroMeta: isIt
      ? <>Risposta tipica entro <strong>48 ore</strong> · Allineati al GDPR · Partner di fiducia</>
      : <>Typical response within <strong>48 hours</strong> · GDPR-aligned · Trusted partners</>,
    filterPlaceholder: isIt ? "Cerca servizi (es. passaporto, AIRE, casa)…" : "Search services (e.g. passport, AIRE, housing)…",
    filterSortLabel: isIt ? "Ordina" : "Sort",
    filterSortTitle: isIt ? "Titolo (A–Z)" : "Title (A–Z)",
    filterSortFee: isIt ? "Tariffa (bassa → alta)" : "Fee (low → high)",
    filterApply: isIt ? "Applica" : "Apply",
    countSuffix: isIt ? "servizio" : "service",
    countSuffixPlural: isIt ? "servizi" : "services",
    countFoundFor: isIt ? " trovati per " : " found for ",
    countQuoteStart: "“",
    countQuoteEnd: "”",
    subline: isIt ? "Seleziona una card per vedere i dettagli e prenotare." : "Select a card to view the full details and book.",
    turnaroundLabel: isIt ? "Tempistica tipica" : "Typical turnaround",
    turnaroundFallback: isIt ? "Dipende dal servizio" : "Service dependent",
    book: isIt ? "Prenota" : "Book",
    diffH2: isIt ? "Cosa rende Resinaro diverso" : "How Resinaro is different",
    diff1H: isIt ? "Prezzi trasparenti" : "Transparent pricing",
    diff1P: isIt ? "Vedi tariffe e inclusioni prima della prenotazione. Nessun costo nascosto." : "You see fees and inclusions before you book. No hidden charges.",
    diff2H: isIt ? "Community-first" : "Community-first",
    diff2P: isIt ? "Supporto guidato dai volontari, con partner professionali selezionati quando necessario." : "Volunteer-led support, with vetted professional partners when required.",
    diff3H: isIt ? "Tempistiche chiare" : "Clear timelines",
    diff3P: isIt ? "Aspettative realistiche e aggiornamenti a ogni passo." : "Realistic expectations and updates at every step.",
    needHelp: isIt ? "Ti serve aiuto a scegliere un servizio?" : "Need help choosing a service?",
    needHelpP: isIt
      ? "Raccontaci la tua situazione e ti indicheremo l’opzione giusta — da AIRE a NIN, prenotazioni consolari e traduzioni."
      : "Tell us your situation and we’ll point you to the right option — from AIRE to NIN, consular bookings to translations.",
    needHelpCta: isIt ? "Contattaci — ti guidiamo noi" : "Contact us — we’ll guide you",
    proTipH: isIt ? "Pro-tip" : "Pro-tip",
    proTipP: isIt
      ? "Per i servizi consolari (Passaporto, CIE, AIRE), prepara in anticipo le scansioni dei documenti: velocizza la revisione e la prenotazione."
      : "For consular services (Passport, CIE, AIRE), prepare scans of your documents in advance. It speeds up our review and your booking.",
    featuredBadgePopular: isIt ? "Popolare" : "Popular",
    featuredBadgeNew: isIt ? "Nuovo" : "New",
    featuredBadgeFast: isIt ? "Veloce" : "Fast",
  };
}

function getServices(locale: "en" | "it"): Service[] {
  const t = getCopy(locale);
  const isIt = t.isIt;

  return [
    {
      id: "passport",
      icon: "🛂",
      title: isIt ? "Passaporto & Servizi consolari" : "Passport & Consular Services",
      desc: isIt
        ? "Prenotazioni, controllo documenti e supporto urgente per passaporti italiani dal Regno Unito."
        : "Booking, paperwork review and urgent consular support for Italian passports from the UK.",
      bullets: isIt
        ? ["Prenotazioni consolari (Londra/Manchester)", "Controllo pacchetto documenti", "Supporto urgente"]
        : ["Consulate bookings (London/Manchester)", "Document pack checks", "Urgent support"],
      fee: "£35",
      path: "/services/passport",
      turnaround: "1–3 weeks",
      badge: t.featuredBadgePopular,
      image: "/images/passportreg.png",
    },

    /* ---------- NEW: Citizenship by descent support ---------- */
    {
      id: "citizenship-descent",
      icon: "🌳",
      title: isIt
        ? "Supporto cittadinanza per discendenza"
        : "Citizenship by Descent Support",
      desc: isIt
        ? "Orientamento pratico, piano documenti e controllo base pratica per cittadinanza italiana per discendenza (jure sanguinis) dal Regno Unito."
        : "Practical orientation, document planning and basic file checks for Italian citizenship by descent (jure sanguinis) from the UK.",
      bullets: isIt
        ? [
            "Panoramica non legale sulla possibile idoneità in base alla tua storia familiare",
            "Strategia documenti per certificati italiani ed esteri",
            "Checklist e organizzazione pratica prima di spendere in viaggi o agenzie",
          ]
        : [
            "Non-legal overview of your potential eligibility based on your family story",
            "Document strategy for Italian and foreign certificates",
            "Checklist and file organisation before spending on travel or agencies",
          ],
      fee: "From £35",
      path: "/services/citizenship-by-descent",
      turnaround: "1–3 weeks",
      badge: t.featuredBadgeNew,
      image: "/images/italian-essentials.png",
    },

    /* ---------- NEW: Citizenship by marriage support ---------- */
    {
      id: "citizenship-marriage",
      icon: "💍",
      title: isIt
        ? "Supporto cittadinanza per matrimonio"
        : "Citizenship by Marriage Support",
      desc: isIt
        ? "Supporto pratico e non legale per la cittadinanza italiana per matrimonio (jure matrimonii) vivendo nel Regno Unito."
        : "Practical, non-legal support for Italian citizenship by marriage (jure matrimonii) while living in the UK.",
      bullets: isIt
        ? [
            "Spiegazione semplice del percorso per matrimonio basata su fonti ufficiali",
            "Revisione base dei documenti e checklist personalizzata",
            "Piano passo-per-passo per sapere sempre cosa fare dopo",
          ]
        : [
            "Plain-language explanation of the marriage route using official sources",
            "Basic document review and personalised checklist",
            "Step-by-step plan so you always know what to do next",
          ],
      fee: "From £35",
      path: "/services/citizenship-by-marriage",
      turnaround: "1–3 weeks",
      badge: t.featuredBadgeNew,
      image: "/images/service-passport.png",
    },

    {
      id: "visa",
      icon: "🛃",
      title: isIt ? "Supporto appuntamento Visto" : "Visa Appointment Support",
      desc: isIt
        ? "Prenotazione e preparazione documenti per appuntamenti visti/biometria in UK e Schengen (se idonei)."
        : "Booking and document prep help for visa/biometrics appointments in the UK and Schengen (where eligible).",
      bullets: isIt
        ? ["Setup portale (UKVI/TLS/VFS)", "Checklist personalizzata", "Ricerca & prenotazione appuntamenti"]
        : ["Portal setup (UKVI/TLS/VFS)", "Tailored checklist", "Appointment search & booking"],
      fee: "£35",
      path: "/services/visa",
      turnaround: "1–3 weeks",
      badge: t.featuredBadgeNew,
      image: "/images/service-visa.png",
    },
    {
      id: "nin",
      icon: "💼",
      title: isIt ? "Supporto National Insurance (NIN)" : "National Insurance (NIN) Support",
      desc: isIt
        ? "Domanda per un nuovo NIN o recupero: guida passo-passo e supporto contatto HMRC."
        : "Apply for a new NIN or replace a lost one with a step-by-step guide and HMRC contact support.",
      bullets: isIt
        ? ["Prepara i documenti", "Contatto HMRC se necessario", "Spiegazione delle tempistiche"]
        : ["Prepare documents", "Contact HMRC where needed", "Explain timelines"],
      fee: "£35",
      path: "/services/nin-support",
      turnaround: "1–3 weeks",
      badge: t.featuredBadgeFast,
      image: "/images/nationalinsurance.png",
    },
    {
      id: "aire",
      icon: "🗂️",
      title: isIt ? "Registrazione & Aggiornamenti AIRE" : "AIRE Registration & Updates",
      desc: isIt
        ? "Registrati o aggiorna il tuo AIRE per mantenere in ordine diritti e servizi consolari."
        : "Register or update your AIRE record to keep consular services and rights in order.",
      bullets: isIt
        ? ["Registrazione AIRE completa", "Aggiornamenti indirizzo/nome", "Checklist documenti & invio"]
        : ["Full AIRE registration", "Address/name updates", "Document checklist & submission"],
      fee: "£35",
      path: "/services/aire",
      turnaround: "1–3 weeks",
      image: "/images/aire-registration-hero-3840x1280.png",
    },
    {
      id: "idcard",
      icon: "🆔",
      title: isIt ? "Assistenza Carta d’Identità Elettronica (CIE)" : "Italian ID Card Assistance (CIE)",
      desc: isIt
        ? "Aiuto per ottenere o rinnovare la CIE dal consolato in UK."
        : "Help obtaining or renewing the Carta d’Identità Elettronica from the UK consulate.",
      bullets: isIt
        ? ["Guida alla prenotazione consolare", "Requisiti biometrici & foto", "Minori/consenso genitori"]
        : ["Consular booking guidance", "Biometric & photo requirements", "Minor/consent guidance"],
      fee: "£50",
      path: "/services/id-card",
      turnaround: "1–3 weeks",
      image: "/images/cie-hero-3840x1280.png",
    },
    {
      id: "translations",
      icon: "📝",
      title: isIt ? "Traduzioni certificate" : "Certified Translations",
      desc: isIt
        ? "Traduzioni professionali certificate (Italiano ↔ Inglese) per documenti ufficiali."
        : "Professional, certified translations (Italian ↔ English) for legal and official documents.",
      bullets: isIt
        ? ["Partner traduttori certificati", "Opzioni rapide", "Formattazione per uso ufficiale"]
        : ["Certified translator partners", "Fast turnaround options", "Formatting for official use"],
      fee: "£35",
      path: "/services/translation",
      turnaround: "1–3 weeks",
      image: "/images/service-passport.png",
    },
    {
      id: "housing",
      icon: "🏠",
      title: isIt ? "Guida alla casa" : "Housing Guidance",
      desc: isIt
        ? "Trova casa in sicurezza, evita truffe e conosci i diritti degli inquilini nel Regno Unito."
        : "Find housing safely, avoid scams, and understand tenant rights across the UK.",
      bullets: isIt
        ? ["Checklist ricerca & partner selezionati", "Guida protezione deposito", "Indicazioni alloggi comunali"]
        : ["Search checklist & vetted partners", "Deposit protection guidance", "Council housing advice"],
      fee: "£35",
      path: "/services/housing",
      turnaround: "1–3 weeks",
      image: "/images/housing-london-hero-3840x1280.png",
    },
    {
      id: "benefits",
      icon: "💷",
      title: isIt ? "Guida ai benefici" : "Benefits Guidance",
      desc: isIt
        ? "Consigli chiari su requisiti e domande per benefici e agevolazioni nel Regno Unito."
        : "Clear advice on eligibility and applications for UK benefits and entitlements.",
      bullets: isIt
        ? ["Verifica requisiti", "Supporto alla domanda", "Indicazioni per ricorsi"]
        : ["Eligibility checks", "Application support", "Appeals signposting"],
      fee: "£35",
      path: "/services/benefits",
      turnaround: "1–3 weeks",
      image: "/images/nhs-mental-health-access-hero-3840x1280.png",
    },
    {
      id: "settled",
      icon: "🔒",
      title: isIt ? "Supporto Settled Status" : "Settled Status Support",
      desc: isIt
        ? "Guida per il Regolamento di Residenza (EUSS): domande, verifica stato e ricorsi."
        : "Guidance for EU Settlement Scheme applications, status checks and appeals.",
      bullets: isIt
        ? ["Revisione domanda", "Supporto ricorsi ed evidenze", "Spiegazione dei diritti"]
        : ["Application review", "Appeals and evidence help", "Rights explained"],
      fee: "£35",
      path: "/services/settled-status",
      turnaround: "1–3 weeks",
      image: "/images/italian-essentials.png",
    },
  ];
}

/* ------------------------------- Page -------------------------------- */

export const revalidate = 86400; // 24h

export default async function ServicesPage({
  params,
  searchParams,
}: {
  params: { locale: "en" | "it" };
  searchParams?: Promise<{ q?: string; sort?: string }>;
}) {
  const locale = params.locale;
  const t = getCopy(locale);
  const services = getServices(locale);

  const resolved = await Promise.resolve(searchParams);
  const q = resolved?.q?.toLowerCase() ?? "";
  const sort = resolved?.sort;

  let filtered = services.filter(
    (s) => !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
  );

  if (sort === "title") filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "fee") {
    filtered = [...filtered].sort((a, b) => {
      const av = parseFloat(a.fee.replace(/[^\d.]/g, "")) || 0;
      const bv = parseFloat(b.fee.replace(/[^\d.]/g, "")) || 0;
      return av - bv;
    });
  }

  // JSON-LD localized with current names/descriptions and locale URLs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Resinaro Services",
    provider: {
      "@type": "Organization",
      name: "Resinaro",
      email: "resinaro@proton.me",
      url: "https://www.resinaro.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Resinaro Service Catalog",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        priceSpecification: { "@type": "PriceSpecification", price: s.fee },
        url: `https://www.resinaro.com${p(locale, s.path)}`,
      })),
    },
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/resinaro-general.png"
            alt={t.isIt ? "Resinaro — supporto pratico per migranti nel Regno Unito" : "Resinaro — practical support for migrants in the UK"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-white">
                <p className="inline-block text-xs tracking-widest uppercase bg-white/10 rounded-full px-3 py-1 mb-3">
                  {t.heroKicker}
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  {t.heroH1}
                </h1>
                <p className="mt-3 md:mt-4 text-white/90">{t.heroP}</p>
                <div className="mt-4 text-sm text-white/80">{t.heroMeta}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <form className="container mx-auto px-6 max-w-7xl -mt-10 relative z-10">
        <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-2xl p-4 md:p-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            name="q"
            defaultValue={q}
            placeholder={t.filterPlaceholder}
            className="border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-700/30"
            aria-label={t.isIt ? "Cerca servizi" : "Search services"}
          />
          <select
            name="sort"
            defaultValue={sort || ""}
            className="border border-gray-300 rounded-xl px-4 py-2.5 bg-white"
            aria-label={t.isIt ? "Ordina servizi" : "Sort services"}
          >
            <option value="">{t.filterSortLabel}</option>
            <option value="title">{t.filterSortTitle}</option>
            <option value="fee">{t.filterSortFee}</option>
          </select>
          <button
            type="submit"
            className="rounded-xl bg-green-900 text-white px-6 py-2.5 font-medium hover:bg-green-800 transition"
          >
            {t.filterApply}
          </button>
        </div>
      </form>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 max-w-7xl pb-16 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-900">
            {filtered.length}{" "}
            {filtered.length === 1 ? t.countSuffix : t.countSuffixPlural}
            {q ? `${t.countFoundFor}${t.countQuoteStart}${q}${t.countQuoteEnd}` : ""}
          </h2>
          <div className="text-sm text-gray-600">{t.subline}</div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, idx) => (
            <article
              key={s.id}
              className="group overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              {/* Card image header with fee ribbon */}
              <div className="relative h-44">
                <Image
                  src={s.image || "/images/resinaro-general.png"}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                {s.badge && (
                  <span className="absolute top-3 left-3 bg-amber-100 text-amber-900 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {s.badge}
                  </span>
                )}
                <span
                  className={`absolute top-3 right-3 text-[12px] font-semibold px-2.5 py-1 rounded-full shadow-sm ${
                    s.fee.startsWith("Free")
                      ? "bg-green-100 text-green-800"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {s.fee}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none" aria-hidden>
                    {s.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">{s.desc}</p>
                  </div>
                </div>

                {s.bullets && (
                  <ul className="mt-4 text-sm text-gray-700 space-y-1">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-800 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {t.turnaroundLabel}: {s.turnaround ?? t.turnaroundFallback}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={p(locale, s.path)}
                      className="inline-flex items-center rounded-lg bg-green-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-green-800 transition"
                      aria-label={`${t.book} ${s.title}`}
                    >
                      {t.book}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-6 max-w-7xl py-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            {t.diffH2}
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">{t.diff1H}</h3>
              <p className="text-sm text-gray-700 mt-1">{t.diff1P}</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">{t.diff2H}</h3>
              <p className="text-sm text-gray-700 mt-1">{t.diff2P}</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">{t.diff3H}</h3>
              <p className="text-sm text-gray-700 mt-1">{t.diff3P}</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border p-6 bg-green-50">
              <h3 className="font-semibold text-green-900">{t.needHelp}</h3>
              <p className="text-sm text-green-900/90 mt-1">{t.needHelpP}</p>
              <Link
                href={p(locale, "/contact")}
                className="inline-flex items-center mt-3 rounded-lg bg-green-900 text-white px-4 py-2 text-sm font-medium hover:bg-green-800"
              >
                {t.needHelpCta}
              </Link>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">{t.proTipH}</h3>
              <p className="text-sm text-gray-700 mt-1">{t.proTipP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
