// src/app/[locale]/advertise/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import AdvertiseForm from "@/components/AdvertiseForm";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    metaTitle: it
      ? "Siti web & directory per attività italiane nel Regno Unito | Resinaro"
      : "Websites & Directory for Italian Businesses in the UK | Resinaro",
    metaDesc: it
      ? "Compra un sito web veloce e ottimizzato SEO o una revisione del tuo sito, e attiva una presenza nella directory Resinaro usata dagli italiani nel Regno Unito."
      : "Buy a fast, SEO-friendly website or a full site audit, and advertise on the Resinaro directory used by Italians living in the UK.",

    heroH1: it
      ? "Sito web & visibilità per attività italiane nel Regno Unito"
      : "Website & visibility for Italian businesses in the UK",
    heroLead: it
      ? "Un sito moderno come resinaro.com e, se vuoi, una pagina dedicata nella nostra directory usata dagli italiani nel Regno Unito."
      : "A modern site like resinaro.com and, if you like, a dedicated page in our directory used by Italians living in the UK.",
    heroPrimaryCta: it
      ? "Compra sito 5 pagine — £50"
      : "Buy 5-page website — £50",
    heroSecondaryCta: it
      ? "Vedi tutti i pacchetti"
      : "See all packages",
    heroToWebId: "#website-packages",
    heroToDirectoryId: "#directory",

    heroPillMain: it
      ? "Creato da italiani nel Regno Unito"
      : "Built by Italians in the UK",
    heroPillMeta: it
      ? "Stack moderno • SEO pulita • Design tranquillo"
      : "Modern stack • Clean SEO • Calm design",

    /* -------------------- Website packages (one-off) -------------------- */
    websitesH2: it
      ? "Pacchetti sito web (pagamento unico)"
      : "Website packages (one-off)",
    websitesLead: it
      ? "Prezzi chiari, tempi rapidi. Siti costruiti sullo stesso stack che usiamo per resinaro.com."
      : "Clear prices, fast turnaround. Sites built on the same stack we use for resinaro.com.",
    websitePackages: [
      {
        id: "website-5-page",
        name: it
          ? "Sito essenziale — fino a 5 pagine"
          : "Essential site — up to 5 pages",
        price: "£50",
        tag: it ? "Perfetto per iniziare" : "Perfect starter",
        short: it
          ? "Un sito semplice e veloce per farti trovare online."
          : "A simple, fast website so people can find you online.",
        bullets: it
          ? [
              "Fino a 5 pagine (es. Home, Chi siamo, Servizi, Prezzi, Contatti).",
              "Layout responsivo per mobile e desktop.",
              "SEO di base: titoli, meta description e struttura pulita.",
              "1 giro di modifiche incluso.",
              "Consegna tipica: entro pochi giorni dal brief completo.",
            ]
          : [
              "Up to 5 pages (e.g. Home, About, Services, Prices, Contact).",
              "Responsive layout for mobile and desktop.",
              "Basic SEO: titles, meta descriptions and clean structure.",
              "1 round of changes included.",
              "Typical delivery: within a few days of receiving your brief.",
            ],
        ctaLabel: it
          ? "Compra sito 5 pagine — £50"
          : "Buy 5-page website — £50",
        highlight: true,
      },
      {
        id: "website-seo-audit",
        name: it
          ? "SEO & conversion audit del tuo sito"
          : "SEO & conversion audit of your site",
        price: "£70",
        tag: it ? "Per siti già online" : "For existing sites",
        short: it
          ? "Analisi completa per aumentare traffico e richieste."
          : "Full review to grow traffic and enquiries.",
        bullets: it
          ? [
              "Analisi tecnica e contenuti del sito esistente.",
              "Video (es. Loom) con spiegazione pratica schermata per schermata.",
              "Documento con “quick wins” e piano semplice per i prossimi 90 giorni.",
              "Focus su SEO locale e conversioni (moduli, WhatsApp, call-to-action).",
              "Se poi rifacciamo noi il sito, possiamo scontare il costo dell’audit.",
            ]
          : [
              "Technical and content review of your existing website.",
              "Screen-recorded video (e.g. Loom) explaining everything step by step.",
              "Written report with quick wins and a simple 90-day plan.",
              "Focus on local SEO and conversions (forms, WhatsApp, call-to-actions).",
              "If we later rebuild your site, we can offset the audit cost.",
            ],
        ctaLabel: it ? "Compra SEO audit — £70" : "Buy SEO audit — £70",
        highlight: false,
      },
      {
        id: "website-50-page",
        name: it
          ? "Sito espanso — fino a 50 pagine"
          : "Expanded site — up to 50 pages",
        price: "£300",
        tag: it ? "Per scuole, studi, agenzie" : "For schools, firms, agencies",
        short: it
          ? "Struttura grande e SEO-ready per crescere nel tempo."
          : "Big, SEO-ready structure for long-term growth.",
        bullets: it
          ? [
              "Fino a 50 pagine (servizi, città, FAQ, blog, risorse).",
              "Struttura pensata per SEO locale e di contenuto.",
              "Set-up blog e categorie principali.",
              "Consigli su come organizzare contenuti e offerte.",
              "1–2 giri di modifiche inclusi sulle pagine chiave.",
            ]
          : [
              "Up to 50 pages (services, cities, FAQs, blog, resources).",
              "Structure designed for local and content SEO.",
              "Blog and main categories set up for you.",
              "Guidance on structuring content and offers.",
              "1–2 rounds of changes on the key pages.",
            ],
        ctaLabel: it
          ? "Compra sito fino a 50 pagine — £300"
          : "Buy up to 50-page site — £300",
        highlight: false,
      },
    ],

    websitesHowH2: it
      ? "Come funziona per i siti web"
      : "How the website service works",
    websitesHowSteps: it
      ? [
          {
            title: "1) Scegli il pacchetto e paga con Stripe",
            body: "Selezioni il pacchetto, paghi in modo sicuro e ti arriva subito un’email di conferma.",
          },
          {
            title: "2) Compili un breve questionario",
            body: "Ti mandiamo un modulo semplice per logo, testi, preferenze e siti di esempio che ti piacciono.",
          },
          {
            title: "3) Costruiamo, ti facciamo vedere e correggiamo",
            body: "Prepariamo il sito, ti mandiamo un link di anteprima e applichiamo le modifiche incluse. Quando sei d’accordo, andiamo online.",
          },
        ]
      : [
          {
            title: "1) Choose your package and pay via Stripe",
            body: "Pick a package, pay securely, and you’ll get an instant confirmation email.",
          },
          {
            title: "2) Fill in a short brief",
            body: "We send a simple form for your logo, text, preferences and example sites you like.",
          },
          {
            title: "3) We build, you review, we ship",
            body: "We build the site, send a preview link, apply your included changes, then help you go live.",
          },
        ],

    /* ---------------------- Directory / advertising ---------------------- */
    directoryH2: it
      ? "Directory Resinaro: presenza continuativa"
      : "Resinaro directory: ongoing visibility",
    directoryLead: it
      ? "Perfetto se vuoi che gli italiani nel Regno Unito ti trovino dentro guide utili, non tra mille annunci."
      : "Perfect if you want Italians in the UK to find you inside helpful guides, not lost in noisy ads.",

    directoryPlans: [
      {
        id: "directory-basic-monthly",
        name: it ? "Listing base" : "Basic listing",
        price: "£10",
        period: it ? "al mese" : "per month",
        tag: it ? "Ottimo per iniziare" : "Great entry point",
        bullets: it
          ? [
              "Pagina dedicata per la tua attività: /it/directory/il-tuo-nome (e/o /en).",
              "Foto, descrizione, contatti, link a sito / social / WhatsApp.",
              "Inserimento nelle guide e pagine città rilevanti.",
              "Puoi cancellare quando vuoi, con effetto dal periodo successivo.",
            ]
          : [
              "Dedicated page for your business: /en/directory/your-business-name (and/or /it).",
              "Photos, description, contact details, links to website / socials / WhatsApp.",
              "Included in relevant guides and city pages.",
              "Cancel any time with effect from the next billing period.",
            ],
        ctaLabel: it
          ? "Attiva listing base — £10/mese"
          : "Start basic listing — £10/month",
        highlight: false,
      },
      {
        id: "directory-premium-monthly",
        name: it
          ? "Listing premium (max 3 attività)"
          : "Premium listing (max 3 businesses)",
        price: "£60",
        period: it ? "al mese" : "per month",
        tag: it ? "Spinta massima" : "Maximum boost",
        bullets: it
          ? [
              "Tutto del listing base.",
              "Fino a 3 pagine sul nostro sito (es. intervista, offerte, guida dedicata).",
              "Un articolo sul blog che raccomanda la tua attività, con link SEO-friendly.",
              "Posizionamento più alto nelle guide e badge “Consigliato da Resinaro”.",
              "Report mensile semplice: visite alla pagina e click verso il tuo sito/contatti.",
            ]
          : [
              "Everything in Basic listing.",
              "Up to 3 pages on our site (e.g. interview, offers page, dedicated guide).",
              "A blog post recommending your business, with SEO-friendly links.",
              "Higher placement in guides plus a “Recommended by Resinaro” badge.",
              "Simple monthly snapshot of page views and clicks to your site/contacts.",
            ],
        ctaLabel: it
          ? "Richiedi listing premium — £60/mese"
          : "Request premium listing — £60/month",
        highlight: true,
      },
    ],

    directoryHowH2: it
      ? "Come funziona per la directory"
      : "How the directory listing works",
    directoryHowSteps: it
      ? [
          {
            title: "1) Scegli base o premium",
            body: "Attivi il piano con Stripe. Per il premium accettiamo solo poche attività al mese: se non è adatto, rimborsiamo.",
          },
          {
            title: "2) Ci mandi logo, foto e testo",
            body: "Ti inviamo un breve modulo per contenuti e preferenze. Possiamo aiutare noi a scrivere il testo.",
          },
          {
            title: "3) Andiamo online e ti mandiamo il link",
            body: "Creiamo la pagina (o le pagine), ti mandiamo il link per l’approvazione e poi ti inseriamo nelle guide rilevanti.",
          },
        ]
      : [
          {
            title: "1) Choose basic or premium",
            body: "Start your plan via Stripe. For premium we only accept a few businesses per month – if it’s not a fit, we refund.",
          },
          {
            title: "2) Send logo, photos and text",
            body: "We send a short content form. We can help write the copy if needed.",
          },
          {
            title: "3) We go live and share the link",
            body: "We build your page(s), send a link for sign-off, then plug you into the relevant guides.",
          },
        ],

    /* ---------------------------- Trust / notes -------------------------- */
    notesH2: it ? "Note importanti" : "Important notes",
    notesBullets: it
      ? [
          "I prezzi sopra riguardano il lavoro di Resinaro. Domini, hosting, email e app di terze parti non sono inclusi, ma possiamo consigliarti soluzioni semplici.",
          "Non possiamo garantire un numero preciso di visite o vendite. Lavoriamo per dare visibilità reale in contesti utili.",
          "Per dettagli su rimborsi e cancellazioni vedi la nostra Politica di Rimborso e i Termini di Servizio.",
        ]
      : [
          "Prices above cover Resinaro’s work. Domains, hosting, email and third-party tools are not included, but we can recommend simple options.",
          "We can’t guarantee a specific number of visits or sales. We focus on real visibility inside helpful content.",
          "For refunds and cancellations, please see our Refund Policy and Terms of Service.",
        ],

    whyH2: it ? "Perché farlo con Resinaro" : "Why do this with Resinaro",
    whyCards: it
      ? [
          {
            title: "Parliamo italiano e inglese",
            body: "Siamo abituati a lavorare con aziende italiane nel Regno Unito e a tradurre i messaggi per entrambi i pubblici.",
          },
          {
            title: "Stack moderno, niente siti lenti",
            body: "Costruiamo con tecnologie moderne (come questo sito) per performance, sicurezza e SEO pulita.",
          },
          {
            title: "Approccio calmo, niente pressioni",
            body: "Preferiamo relazioni lunghe: se il servizio non è giusto per te, te lo diciamo apertamente.",
          },
        ]
      : [
          {
            title: "We speak Italian & English",
            body: "We work with Italian businesses in the UK and know how to shape the message for both audiences.",
          },
          {
            title: "Modern stack, no slow sites",
            body: "We build with a modern stack (like this site) for speed, security and clean SEO.",
          },
          {
            title: "Calm, no-pressure approach",
            body: "We’re playing long-term: if a package isn’t right for you, we’ll say so openly.",
          },
        ],

    faqH2: "FAQ",
    faq: it
      ? [
          {
            q: "Potete fare il sito in italiano e inglese?",
            a: "Sì. Possiamo creare la struttura bilingue (IT/EN) e aiutarti a tradurre o adattare i testi principali.",
          },
          {
            q: "Serve che io abbia già dominio e hosting?",
            a: "Non per iniziare. Possiamo consigliarti soluzioni semplici e aiutarti a collegare il sito al tuo dominio quando sei pronto.",
          },
          {
            q: "Posso annullare il listing in directory quando voglio?",
            a: "Sì. Puoi annullare l’abbonamento; l’effetto è dal periodo di fatturazione successivo, secondo la nostra Politica di Rimborso.",
          },
          {
            q: "Cosa succede se non mi piace il design?",
            a: "Ogni pacchetto include almeno un giro di modifiche. Se ci sono limiti più grandi, ti spieghiamo le opzioni prima di iniziare.",
          },
        ]
      : [
          {
            q: "Can you build the site in Italian and English?",
            a: "Yes. We can set up a bilingual structure (IT/EN) and help you translate or adapt key pages.",
          },
          {
            q: "Do I need a domain and hosting already?",
            a: "Not to start. We can recommend simple options and help connect your finished site to a domain when you’re ready.",
          },
          {
            q: "Can I cancel the directory listing any time?",
            a: "Yes. You can cancel the subscription; it will take effect from the next billing period, in line with our Refund Policy.",
          },
          {
            q: "What if I don’t like the design?",
            a: "Each package includes at least one round of changes. If we hit bigger limits, we’ll explain options before starting.",
          },
        ],

    contactH2: it
      ? "Pronto a iniziare? Paga qui sotto"
      : "Ready to start? Pay below",
    contactP: it
      ? "Compila il modulo, scegli il pacchetto e completa il pagamento sicuro su questa pagina. Se hai dubbi, puoi sempre scriverci prima o dopo il pagamento."
      : "Fill in the form, choose your package and complete secure payment on this page. If you’re unsure, you can always email us before or after paying.",
    contactEmailLine: it
      ? "Preferisci scriverci direttamente?"
      : "Prefer to email us instead?",
    contactEmailLabel: "resinaro@proton.me",

    closingNote: it
      ? "Se aiuti italiani nel Regno Unito, possiamo aiutarti a essere trovato — con un sito solido e una presenza chiara nella nostra directory."
      : "If you help Italians in the UK, we can help people actually find you — with a solid website and a clear presence in our directory.",
  };
}

/* ------------------------------ Metadata ------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    alternates: {
      canonical: "/advertise",
      languages: {
        en: "/en/advertise",
        it: "/it/advertise",
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDesc,
      url: "https://www.resinaro.com/advertise",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDesc,
    },
  };
}

/* -------------------------------- Page --------------------------------- */

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const copy = t(locale);

  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* HERO */}
      <section className="px-4 pt-12 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {copy.heroH1}
          </h1>
          <p className="mt-3 text-lg text-green-800">{copy.heroLead}</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#checkout"
              className="px-6 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-900"
            >
              {copy.heroPrimaryCta}
            </a>
            <a
              href="#website-packages"
              className="px-6 py-3 rounded-xl border border-green-800 text-green-900 font-semibold hover:bg-emerald-50"
            >
              {copy.heroSecondaryCta}
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs">
            <span className="rounded-full bg-emerald-700 px-2 py-0.5 font-semibold text-white">
              {copy.heroPillMain}
            </span>
            <span className="text-green-800">{copy.heroPillMeta}</span>
          </div>
        </div>
      </section>

      {/* WEBSITE PACKAGES */}
      <section id="website-packages" className="px-4 py-10 border-t bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.websitesH2}</h2>
          <p className="mt-2 text-sm text-green-800">{copy.websitesLead}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {copy.websitePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl border bg-neutral-50 p-5 ${
                  pkg.highlight
                    ? "border-green-800 shadow-sm shadow-green-800/20"
                    : "border-gray-200"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-green-900">
                    {pkg.name}
                  </h3>
                  {pkg.tag && (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">
                      {pkg.tag}
                    </span>
                  )}
                </div>
                <div className="mb-2 text-lg font-bold text-green-900">
                  {pkg.price}
                </div>
                <p className="text-sm text-green-800">{pkg.short}</p>
                <ul className="mt-3 flex-1 list-disc pl-4 text-sm text-green-800 space-y-1">
                  {pkg.bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href="#checkout"
                  className="mt-4 inline-flex justify-center rounded-xl bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900"
                >
                  {pkg.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – WEBSITES */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.websitesHowH2}</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-green-800">
            {copy.websitesHowSteps.map((step, idx) => (
              <li
                key={step.title}
                className="rounded-2xl border bg-white p-5"
              >
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-800 text-xs font-semibold text-white">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-green-900">{step.title}</h3>
                <p className="mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIRECTORY PLANS */}
      <section id="directory" className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.directoryH2}</h2>
          <p className="mt-2 text-sm text-green-800">{copy.directoryLead}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {copy.directoryPlans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-2xl border bg-neutral-50 p-5 ${
                  plan.highlight
                    ? "border-green-800 shadow-sm shadow-green-800/20"
                    : "border-gray-200"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-green-900">
                    {plan.name}
                  </h3>
                  {plan.tag && (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">
                      {plan.tag}
                    </span>
                  )}
                </div>
                <div className="mb-1 text-lg font-bold text-green-900">
                  {plan.price}{" "}
                  <span className="text-xs font-normal text-green-800">
                    / {plan.period}
                  </span>
                </div>
                <ul className="mt-3 flex-1 list-disc pl-4 text-sm text-green-800 space-y-1">
                  {plan.bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href="#checkout"
                  className="mt-4 inline-flex justify-center rounded-xl bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900"
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – DIRECTORY */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.directoryHowH2}</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-green-800">
            {copy.directoryHowSteps.map((step, idx) => (
              <li
                key={step.title}
                className="rounded-2xl border bg-white p-5"
              >
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-800 text-xs font-semibold text-white">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-green-900">{step.title}</h3>
                <p className="mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl rounded-2xl border bg-neutral-50 p-5">
          <h2 className="text-xl font-semibold text-green-900">
            {copy.notesH2}
          </h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-green-800 space-y-1">
            {copy.notesBullets.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-green-700">
            <Link
              href={`/${locale}/refund-policy`}
              className="underline underline-offset-4"
            >
              {locale === "it" ? "Politica di rimborso" : "Refund Policy"}
            </Link>{" "}
            ·{" "}
            <Link
              href={`/${locale}/terms`}
              className="underline underline-offset-4"
            >
              {locale === "it" ? "Termini di Servizio" : "Terms of Service"}
            </Link>
          </p>
        </div>
      </section>

      {/* WHY RESINARO */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.whyH2}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-green-800">
            {copy.whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border bg-white p-5"
              >
                <h3 className="font-medium text-green-900">{card.title}</h3>
                <p className="mt-2">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKOUT / FORM */}
      <section
        id="checkout"
        className="px-4 py-12 bg-neutral-50 border-t"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold">{copy.contactH2}</h2>
            <p className="mt-2 text-sm text-green-800">{copy.contactP}</p>
            <p className="mt-1 text-xs text-green-700">
              {copy.contactEmailLine}{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${copy.contactEmailLabel}`}
              >
                {copy.contactEmailLabel}
              </a>
            </p>
          </div>
          <AdvertiseForm locale={locale} />
          <p className="mt-4 text-xs text-green-700 text-center">
            {copy.closingNote}
          </p>
        </div>
      </section>
    </main>
  );
}
