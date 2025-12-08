// src/app/[locale]/help/installments/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "it";

const PUBLISHED = "2025-12-05";
const UPDATED = "2025-12-05";

/* ----------------------------- i18n strings ---------------------------- */

function t(locale: Locale) {
  const it = locale === "it";

  return {
    inLang: it ? "it-IT" : "en-GB",

    // HERO
    heroAlt: it
      ? "Laptop aperto su una pagina di pagamento, accanto a passaporto italiano, tazza di tè e piccoli dettagli da ufficio."
      : "Laptop open on a payment page with an Italian passport, a mug of tea and small desk details.",
    heroBadge: it
      ? "Pagamenti a rate • Clearpay & Klarna"
      : "Installments • Clearpay & Klarna",
    heroTitleA: it
      ? "Come pagare a rate con Resinaro"
      : "How to pay in instalments",
    heroTitleB: it
      ? "Clearpay & Klarna (guida facile)"
      : "with Resinaro (simple guide)",
    heroLead: it
      ? "Guida super semplice per usare Clearpay (paga in 4) o Klarna (paga in 3) quando ricevi il link di pagamento Stripe da Resinaro."
      : "Super simple guide to use Clearpay (Pay in 4) or Klarna (Pay in 3) when you receive a Stripe payment link from Resinaro.",
    ctaCopy: it
      ? "Se hai dubbi mentre paghi, scrivici: possiamo guidarti passo per passo con screenshot o un breve video."
      : "If you get stuck while paying, message us: we can guide you step by step with screenshots or a short video.",
    ctaSub: it
      ? "Servizio privato, indipendente. Non siamo Clearpay, Klarna né una banca."
      : "Private, independent support. We are not Clearpay, Klarna or a bank.",
    ctaBtnPrimary: it ? "Contatta Resinaro" : "Contact Resinaro",
    ctaBtnSecondary: it ? "Vedi tutti i servizi" : "View all services",
    pub: it ? "Pubblicato: 5 Dic 2025" : "Published: 5 Dec 2025",
    upd: it ? "Aggiornato: 5 Dic 2025" : "Updated: 5 Dec 2025",
    read: it ? "~5 min lettura" : "~5 min read",

    // USPs
    usps: it
      ? [
          {
            h: "Linguaggio semplice",
            p: "Niente termini complicati: solo 3–5 passaggi chiari per ogni metodo di pagamento.",
          },
          {
            h: "Paghi in piccole parti",
            p: "Clearpay in 4 rate, Klarna in 3 rate (se disponibili sul tuo account).",
          },
          {
            h: "Sempre tramite Stripe",
            p: "Tutti i pagamenti partono da un link Stripe sicuro inviato da Resinaro.",
          },
        ]
      : [
          {
            h: "Plain language",
            p: "No jargon: just 3–5 clear steps for each payment method.",
          },
          {
            h: "Small parts, same service",
            p: "Clearpay in 4 parts, Klarna in 3 parts (where available on your account).",
          },
          {
            h: "Always via Stripe",
            p: "All payments start from a secure Stripe link sent by Resinaro.",
          },
        ],

    // Quick summary
    quickH: it
      ? "Versione super veloce — in 3 passaggi"
      : "Super short version — 3 steps",
    quickSteps: it
      ? [
          "1) Apri il link di pagamento Resinaro che ti arriva su WhatsApp o email.",
          "2) Nella pagina Stripe, scegli Clearpay o Klarna (se li vedi tra i metodi).",
          "3) Accedi o crea l’account, controlla le rate e premi Conferma.",
        ]
      : [
          "1) Open the Resinaro payment link we send on WhatsApp or email.",
          "2) On the Stripe page, choose Clearpay or Klarna (if you see them).",
          "3) Log in or create an account, check the instalments and press Confirm.",
        ],

    // Clearpay
    clearpayH: it
      ? "Clearpay — paga in 4 rate"
      : "Clearpay — Pay in 4 instalments",
    clearpayIntro: it
      ? "Con Clearpay dividi l’importo in 4 parti. Ecco il flusso base, come se lo spiegassimo a un bimbo di 4 anni:"
      : "With Clearpay you split the amount into 4 parts. Here’s the basic flow, explained super simply:",
    clearpaySteps: it
      ? [
          [
            "Passo 1 — Apri il link Resinaro",
            "Clicca sul link di pagamento che ti mandiamo su WhatsApp o email. Si aprirà una pagina Stripe con l’importo totale.",
          ],
          [
            "Passo 2 — Trova Clearpay",
            "Nella sezione dei metodi di pagamento scorri finché non vedi Clearpay (paga in 4). Cliccaci sopra.",
          ],
          [
            "Passo 3 — Accedi o crea un account",
            "Clearpay ti chiede di accedere o di creare un account veloce. Segui le domande sullo schermo (telefono, email, dati base).",
          ],
          [
            "Passo 4 — Controlla le 4 rate",
            "Vedi quanto paghi oggi e le date delle altre 3 rate. Se ti va bene, premi su Conferma.",
          ],
          [
            "Passo 5 — Fine, rate attive 🎉",
            "Il piano in 4 rate è attivo. Stripe ci avvisa che il pagamento è approvato e la tua pratica con Resinaro è confermata.",
          ],
        ]
      : [
          [
            "Step 1 — Open the Resinaro link",
            "Tap the payment link we send you on WhatsApp or email. A Stripe page opens with the full amount.",
          ],
          [
            "Step 2 — Find Clearpay",
            "In the list of payment methods, scroll until you see Clearpay (Pay in 4). Tap it.",
          ],
          [
            "Step 3 — Log in or create an account",
            "Clearpay asks you to log in or create an account. Just follow the questions on screen (phone, email, basic details).",
          ],
          [
            "Step 4 — Check the 4 payments",
            "You see how much you pay today and the dates of the other 3 payments. If it looks good, press Confirm.",
          ],
          [
            "Step 5 — Done, plan active 🎉",
            "Your 4-part plan is active. Stripe tells us the payment is approved and your service with Resinaro is confirmed.",
          ],
        ],

    // Klarna
    klarnaH: it
      ? "Klarna — paga in 3 rate"
      : "Klarna — Pay in 3 instalments",
    klarnaIntro: it
      ? "Klarna funziona in modo molto simile, ma con 3 rate invece di 4."
      : "Klarna works very similarly, but with 3 instalments instead of 4.",
    klarnaSteps: it
      ? [
          [
            "Passo 1 — Apri il link Resinaro",
            "Clicca sul link di pagamento che ti inviamo. Vedrai la pagina Stripe con il totale.",
          ],
          [
            "Passo 2 — Scegli Klarna",
            "Nella sezione dei metodi di pagamento seleziona Klarna (paga in 3) o un’opzione rate Klarna simile.",
          ],
          [
            "Passo 3 — Accedi o crea un account Klarna",
            "Klarna ti chiede telefono o email e qualche dato base. Rispondi alle domande sullo schermo.",
          ],
          [
            "Passo 4 — Controlla le 3 rate",
            "Vedi quanto paghi oggi e le date delle altre 2 rate. Se per te va bene, premi Conferma.",
          ],
          [
            "Passo 5 — Fine, piano attivo 🎉",
            "Il piano in 3 rate è attivo. Stripe ci manda la conferma e il tuo servizio con Resinaro è confermato.",
          ],
        ]
      : [
          [
            "Step 1 — Open the Resinaro link",
            "Tap the payment link we send you. You’ll see the Stripe page with the total.",
          ],
          [
            "Step 2 — Choose Klarna",
            "In the payment methods, select Klarna (Pay in 3) or a similar Klarna instalment option.",
          ],
          [
            "Step 3 — Log in or create a Klarna account",
            "Klarna asks for your phone or email and some basic details. Just follow the on-screen steps.",
          ],
          [
            "Step 4 — Check the 3 payments",
            "You see how much you pay now and the dates of the next 2 payments. If you’re happy, press Confirm.",
          ],
          [
            "Step 5 — Done, plan active 🎉",
            "Your 3-part plan is active. Stripe sends us the confirmation and your Resinaro service is confirmed.",
          ],
        ],

    // Missing options
    missingH: it
      ? "Se non vedi Clearpay o Klarna"
      : "If you don’t see Clearpay or Klarna",
    missingIntro: it
      ? "A volte Clearpay o Klarna NON compaiono tra i metodi di pagamento. Di solito dipende da controlli interni, dalla banca o dal Paese, non da Resinaro."
      : "Sometimes Clearpay or Klarna do NOT appear in the payment methods. Usually this depends on internal checks, your bank or your country, not Resinaro.",
    missingBullets: it
      ? [
          "Prova con un’altra carta (Visa, Mastercard, carta di debito diversa).",
          "Prova da un altro dispositivo o browser (es. da telefono invece che da PC).",
          "Se non compaiono proprio, puoi pagare con carta normale senza rate.",
        ]
      : [
          "Try a different card (Visa, Mastercard, another debit card).",
          "Try a different device or browser (e.g. phone instead of laptop).",
          "If they never show, you can still pay by normal card without instalments.",
        ],

    // FAQ
    faqH: it
      ? "Domande frequenti sui pagamenti a rate"
      : "FAQ about paying in instalments",
    faqs: it
      ? [
          [
            "Pagare a rate con Clearpay o Klarna costa di più?",
            "Resinaro non aggiunge costi extra per l’uso di Clearpay o Klarna. Eventuali costi, commissioni o interessi dipendono solo da Clearpay/Klarna e dalle loro condizioni.",
          ],
          [
            "I pagamenti sono sicuri?",
            "Sì. Usiamo Stripe per il link di pagamento, che è una piattaforma internazionale sicura. Clearpay e Klarna sono servizi separati, regolamentati nei Paesi in cui operano.",
          ],
          [
            "Chi devo contattare se una rata non va a buon fine?",
            "In quel caso ti contatteranno direttamente Clearpay o Klarna (email/SMS/app). L’accordo per le rate è tra te e loro: Resinaro vede solo che il pagamento è andato a buon fine o meno.",
          ],
          [
            "Posso cambiare metodo di pagamento dopo aver confermato?",
            "Di solito no, una volta confermato il piano va avanti con quel metodo. Se hai fatto un errore, contatta subito Clearpay/Klarna e informaci.",
          ],
        ]
      : [
          [
            "Does using Clearpay or Klarna cost more?",
            "Resinaro does not add extra fees for using Clearpay or Klarna. Any costs, fees or interest come from Clearpay/Klarna and their own terms.",
          ],
          [
            "Is this payment method safe?",
            "Yes. We use Stripe for the payment link, which is a secure global platform. Clearpay and Klarna are separate services, regulated in the countries where they operate.",
          ],
          [
            "Who do I contact if a payment fails?",
            "Clearpay or Klarna will contact you directly (email/SMS/app). Your instalment agreement is with them, not Resinaro. We only see whether the payment was successful or not.",
          ],
          [
            "Can I change payment method after confirming?",
            "Usually no: once the plan is confirmed, it continues with that method. If you made a mistake, contact Clearpay/Klarna as soon as possible and let us know.",
          ],
        ],

    // Help / CTA
    helpH: it ? "Hai ancora dubbi?" : "Still unsure?",
    helpBody: it
      ? "Se durante il pagamento qualcosa non ti torna, fermati e scrivici. Possiamo controllare insieme lo schermo e dirti cosa cliccare, senza fretta."
      : "If something doesn’t look right while paying, pause and message us. We can look at the same flow and tell you what to click, calmly.",
    helpBtnPrimary: it ? "Scrivi a Resinaro" : "Message Resinaro",
    helpBtnSecondary: it ? "Vedi i servizi Resinaro" : "View Resinaro services",
    legalNote: it
      ? "Nota importante: Resinaro non è Clearpay, Klarna, Stripe né una banca. Noi non possiamo decidere se ti approvano o meno il pagamento a rate; questo dipende solo dai loro controlli interni."
      : "Important note: Resinaro is not Clearpay, Klarna, Stripe or a bank. We cannot decide if an instalment plan is approved; this depends only on their internal checks.",
  };
}

/* ------------------------- Localised metadata / SEO ------------------------- */

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = params.locale;
  const it = locale === "it";

  const title = it
    ? "Come pagare a rate con Resinaro: Clearpay & Klarna (guida facile)"
    : "How to pay in instalments with Resinaro: Clearpay & Klarna (simple guide)";

  const description = it
    ? "Guida 2025 super semplice per usare Clearpay (paga in 4) o Klarna (paga in 3) con il link di pagamento Stripe di Resinaro."
    : "Super simple 2025 guide to using Clearpay (Pay in 4) or Klarna (Pay in 3) with Resinaro’s Stripe payment link.";

  return {
    title,
    description,
    alternates: {
      canonical: "/help/installments",
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/images/passport-cie-hero.jpg", // reuse existing hero image
          width: 1200,
          height: 630,
          alt: it
            ? "Laptop aperto su una pagina di pagamento, passaporto italiano e tazza di tè su una scrivania."
            : "Laptop open on a payment page with an Italian passport and a mug of tea on a desk.",
        },
      ],
    },
  };
}

/* ---------------------------------- Page ---------------------------------- */

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale as Locale;
  const copy = t(locale);

  // JSON-LD: simple HowTo + FAQ
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "it"
        ? "Come pagare a rate con Resinaro usando Clearpay o Klarna"
        : "How to pay in instalments with Resinaro using Clearpay or Klarna",
    totalTime: "PT5M",
    inLanguage: copy.inLang,
    step:
      locale === "it"
        ? [
            {
              "@type": "HowToStep",
              name: "Apri il link di pagamento Resinaro",
              text: "Clicca sul link Stripe che ricevi da Resinaro via WhatsApp o email.",
            },
            {
              "@type": "HowToStep",
              name: "Scegli Clearpay o Klarna",
              text: "Nella lista dei metodi di pagamento seleziona Clearpay (paga in 4) o Klarna (paga in 3), se disponibili.",
            },
            {
              "@type": "HowToStep",
              name: "Accedi, controlla le rate e conferma",
              text: "Accedi o crea un account sul servizio scelto, controlla importi e date delle rate, poi conferma.",
            },
          ]
        : [
            {
              "@type": "HowToStep",
              name: "Open the Resinaro payment link",
              text: "Open the Stripe link you receive from Resinaro via WhatsApp or email.",
            },
            {
              "@type": "HowToStep",
              name: "Choose Clearpay or Klarna",
              text: "In the list of payment methods, select Clearpay (Pay in 4) or Klarna (Pay in 3), if available.",
            },
            {
              "@type": "HowToStep",
              name: "Log in, check the instalments and confirm",
              text: "Log in or create an account with the chosen service, check the amount and dates of each payment, then confirm.",
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
              name: "Pagare a rate con Clearpay o Klarna costa di più?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Resinaro non aggiunge costi extra per l’uso di Clearpay o Klarna. Eventuali costi, commissioni o interessi dipendono solo da Clearpay/Klarna.",
              },
            },
            {
              "@type": "Question",
              name: "I pagamenti sono sicuri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Usiamo Stripe per il link di pagamento, una piattaforma internazionale sicura. Clearpay e Klarna sono servizi separati e regolamentati.",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "Does using Clearpay or Klarna cost more?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Resinaro does not add extra fees for using Clearpay or Klarna. Any fees or interest depend on Clearpay/Klarna.",
              },
            },
            {
              "@type": "Question",
              name: "Is this payment method safe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use Stripe for the payment link, a secure global platform. Clearpay and Klarna are separate regulated services.",
              },
            },
          ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 antialiased">
      {/* JSON-LD */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 sm:pt-28 md:pt-36 md:pb-40">
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
            <span className="opacity-70">•</span>
            <span>{copy.upd}</span>
            <span className="opacity-70">•</span>
            <span>{copy.read}</span>
          </div>
        </div>

        {/* Soft fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F9F6F1] to-transparent" />
      </section>

      {/* ===== USPs ===== */}
      <section className="mx-auto mt-10 max-w-7xl px-6 md:mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {copy.usps.map((x) => (
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

      {/* ===== Quick summary ===== */}
      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-lg font-semibold text-emerald-800">{copy.quickH}</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-800">
            {copy.quickSteps.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-600">
            {locale === "it"
              ? "Sotto trovi la versione lunga, con ogni passaggio spiegato meglio e spazio per aggiungere screenshot."
              : "Below you’ll find the longer version, with each step explained and space to add screenshots."}
          </p>
        </div>
      </section>

      {/* ===== Clearpay & Klarna steps ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Clearpay */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.clearpayH}
            </h2>
            <p className="mt-2 text-sm text-gray-700">{copy.clearpayIntro}</p>

            <ol className="mt-4 space-y-4 text-sm text-gray-800">
              {copy.clearpaySteps.map(([title, body], idx) => (
                <li key={idx} className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-800">{body}</p>
                  <div className="mt-2 rounded-xl border border-dashed border-gray-300 bg-white/60 p-3 text-xs text-gray-500">
                    {locale === "it"
                      ? `Spazio per screenshot ${idx + 1} (pagina Stripe / Clearpay).`
                      : `Space for screenshot ${idx + 1} (Stripe / Clearpay screen).`}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Klarna */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {copy.klarnaH}
            </h2>
            <p className="mt-2 text-sm text-gray-700">{copy.klarnaIntro}</p>

            <ol className="mt-4 space-y-4 text-sm text-gray-800">
              {copy.klarnaSteps.map(([title, body], idx) => (
                <li key={idx} className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-800">{body}</p>
                  <div className="mt-2 rounded-xl border border-dashed border-gray-300 bg-white/60 p-3 text-xs text-gray-500">
                    {locale === "it"
                      ? `Spazio per screenshot ${idx + 1} (pagina Stripe / Klarna).`
                      : `Space for screenshot ${idx + 1} (Stripe / Klarna screen).`}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== If you don’t see options ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">{copy.missingH}</h2>
          <p className="mt-2 text-sm text-gray-700">{copy.missingIntro}</p>
          <ul className="mt-3 list-disc pl-6 text-sm text-gray-800">
            {copy.missingBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-600">
            {locale === "it"
              ? "Se dopo questi tentativi non vedi ancora le opzioni a rate, non possiamo “forzare” Clearpay/Klarna ad approvarti: dipende solo dai loro sistemi interni."
              : "If after these attempts you still don’t see instalment options, we can’t “force” Clearpay/Klarna to approve you: it depends entirely on their internal systems."}
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">{copy.faqH}</h2>
          {copy.faqs.map(([q, a]) => (
            <details
              key={q}
              className="group mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">
                {q}
              </summary>
              <div className="mt-2 text-sm text-gray-700">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Help / CTA ===== */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">{copy.helpH}</h2>
          <p className="mt-1 text-sm text-gray-700">{copy.helpBody}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              {copy.helpBtnPrimary}
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              {copy.helpBtnSecondary}
            </Link>
          </div>
          <p className="mt-4 text-xs text-emerald-900/90">{copy.legalNote}</p>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}