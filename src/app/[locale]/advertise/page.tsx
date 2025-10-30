// src/app/[locale]/advertise/page.tsx
import type { Metadata } from "next";
import AdvertiseForm from "@/components/AdvertiseForm";

type Locale = "en" | "it";

/* ----------------------------- i18n strings ----------------------------- */
function t(locale: Locale) {
  const it = locale === "it";
  return {
    title: it ? "Pubblicizza su Resinaro — Raggiungi gli italiani nel Regno Unito" : "Advertise with Resinaro — Reach Italians in the UK",
    desc: it
      ? "Fatti trovare da chi cerca aiuto: posizionamenti umani, intenzione calda e supporto operativo."
      : "Get featured where Italians in the UK actively look for help. Human placements, warm intent, and hands-on support.",
    heroH1: it ? "Fatti presentare su Resinaro" : "Get featured on Resinaro",
    heroLead: it
      ? "Fatti scoprire dagli italiani nel Regno Unito proprio quando cercano aiuto."
      : "Be discovered by Italians in the UK at the exact moment they’re searching for help.",
    ctaApply: it ? "Candidati per essere presentato" : "Apply to be featured",
    ctaHow: it ? "Come funziona" : "How it works",
    pillBrandSafe: it ? "Sicuro per i brand" : "Brand-safe",
    pillMeta: it
      ? "Cura editoriale • UX pulita • Privacy-friendly"
      : "Human curation • Clean UX • GDPR-friendly",

    whyH2: it ? "Perché i brand scelgono Resinaro" : "Why brands partner with Resinaro",
    why1H: it ? "Intenzione reale, non traffico freddo" : "Real intent, not cold traffic",
    why1P: it
      ? "Le persone arrivano alle nostre guide cercando ristoranti, gastronomie, negozi, visti, tasse e servizi quotidiani. Il tuo annuncio li incontra in quel momento."
      : "People land on our guides while looking for restaurants, delis, shops, visas, taxes, and everyday services. Your listing meets them in that moment.",
    why2H: it ? "Fiducia per associazione" : "Trust by association",
    why2P: it
      ? "Selezioniamo i consigli e manteniamo un design calmo e utile. Il tuo brand appare in un contesto utile — mai come pubblicità invadente."
      : "We hand-pick recommendations and keep the design calm and helpful. You’re presented in a helpful context—never as shouty ads.",
    why3H: it ? "Supporto operativo" : "Hands-on support",
    why3P: it
      ? "Serve testo, immagini o tracciamento? Pensiamo a tutto noi. Possiamo anche verificare la tua presenza online e suggerire quick wins."
      : "Need copy, images, or tracking set up? We’ll sort it. We can also audit your online presence and suggest quick wins.",

    whereH2: it ? "Dove può apparire la tua attività" : "Where your business can appear",
    where1H: it ? "Scheda in evidenza" : "Featured listing",
    where1P: it
      ? "Card curata nelle pagine città (es. Manchester → Ristoranti) con sito, mappe e breve citazione. Contrassegnata come “In evidenza”."
      : "A polished card on city pages (e.g., Manchester → Restaurants) with your website, maps, and a short quote. Marked as “Featured” for clarity.",
    where2H: it ? "Evidenza di categoria" : "Category highlight",
    where2P: it
      ? "Posizionamento in primo piano all’interno di una categoria (Ristoranti, Gastronomie, Negozi) in una guida città."
      : "Spotlight placement within a category (Restaurants, Delis, Shops) across a city guide.",
    where3H: it ? "Partner di città" : "City partner",
    where3P: it
      ? "Menção discreta nella pagina hub della città — ideale per studi legali, contabili, traslochi, scuole di lingua e servizi utili alla community."
      : "A soft, tasteful mention on the city hub page—ideal for law firms, accountants, movers, language schools, or any service helping our community.",
    whatUG: it ? "Cosa è incluso" : "What you get",
    whatList: it
      ? [
          "Posizionamento pulito e on-brand che gli utenti leggono davvero.",
          "Click verso sito, mappe, menu o WhatsApp — con tracciamento rispettoso della privacy.",
          "Testo utile e breve recensione (possiamo aiutare a reperirla).",
          "Onboarding semplice e termini flessibili — senza pressioni.",
        ]
      : [
          "Clean, on-brand placement that users actually read.",
          "Clicks to your website, maps, menu or WhatsApp—tracked in a privacy-friendly way.",
          "Helpful copy and a short review snippet (we can help source one).",
          "Simple onboarding and flexible terms—no pressure.",
        ],

    perfectH2: it ? "Perfetto per" : "Perfect for",
    perfectList: it
      ? [
          "Ristoranti, pizzerie, gastronomie e negozi italiani",
          "Avvocati immigrazione & famiglia",
          "Commercialisti & consulenti fiscali",
          "Traslochi, deposito & spedizioni",
          "Scuole di lingua & tutor",
          "Caffè, vino & retailer specializzati",
        ]
      : [
          "Italian restaurants, pizzerias, delis and shops",
          "Immigration & family lawyers",
          "Accountants & tax advisors",
          "Removals, storage & shipping",
          "Language schools & tutors",
          "Coffee, wine & specialty retailers",
        ],

    howH2: it ? "Come funziona" : "How it works",
    how1H: it ? "1) Raccontaci di te" : "1) Tell us about you",
    how1P: it
      ? "Inviaci sito e offerta. Due minuti. Al resto pensiamo noi."
      : "Share your website and what you offer. Two minutes. We’ll take it from there.",
    how2H: it ? "2) Proponiamo il posizionamento" : "2) We suggest a placement",
    how2P: it
      ? "Ti consigliamo lo spazio più adatto a obiettivi e pubblico. Niente vendite aggressive — solo un piano chiaro."
      : "We’ll recommend a spot that fits your goals and audience. No pushy sales—just a clear plan.",
    how3H: it ? "3) Online (con supporto)" : "3) Go live (with support)",
    how3P: it
      ? "Affiniamo la card, aggiungiamo link e tracciamento, e pubblichiamo. Riceverai un semplice resoconto performance."
      : "We polish your card, add links and tracking, and publish. You’ll get a simple performance summary.",

    trustH2: it ? "Costruito per la fiducia nel lungo periodo" : "Built for long-term trust",
    trustList: it
      ? [
          "Design pulito e disclosure chiara — niente banner o pop-up invadenti.",
          "Analytics rispettosi della privacy con tracciamento semplice di click e richieste.",
          "Contenuti utili prima di tutto. Il tuo brand vive dentro guide che le persone salvano e condividono.",
        ]
      : [
          "Clean design and clear disclosure—no shady banners or pop-ups.",
          "Privacy-friendly analytics with simple click and enquiry tracking.",
          "Helpful content first. Your brand sits inside useful guides people bookmark and share.",
        ],

    applyH2: it ? "Candidati per essere presentato" : "Apply to be featured",
    applyP: it
      ? "Nessun impegno. Racconta cosa fai e le città che servi — ti proporremo un piano semplice."
      : "No obligations. Tell us what you do and the cities you serve—we’ll come back with a simple plan.",
    preferEmail: it ? "Preferisci email?" : "Prefer email?",
    faqH2: "FAQ",
    faq: (it
      ? [
          ["Pubblicate i prezzi?", "Condividiamo i prezzi dopo un breve fit-check così da proporre il posizionamento più efficace per i tuoi obiettivi."],
          ["Quanto tempo per andare online?", "Di solito entro pochi giorni dopo aver confermato testo, link e tracciamento."],
          ["Cos’è una “richiesta qualificata”?", "Una persona reale che ti contatta dal nostro form o dai tuoi link con una richiesta chiara (non spam). Filtriamo bot e messaggi non pertinenti."],
          ["Potete aiutare con i contenuti?", "Sì. Scriviamo il testo, aiutiamo a scegliere l’immagine e verifichiamo link e tracciamento."],
          ["Serve un contratto lungo?", "Nessun vincolo lungo: termini semplici e flessibili, puntiamo a risultati che ti facciano restare."],
        ]
      : [
          ["Do you publish prices?", "We share pricing after a quick fit check so we can recommend the most effective placement for your goals."],
          ["How soon can we go live?", "Typically within a few days once we’ve confirmed copy, links and tracking."],
          ["What does a “qualified enquiry” look like?", "A real person reaching out via our form or your contact links with a clear request (not spam). We filter obvious bots and unrelated messages."],
          ["Can you help with creatives?", "Yes. We’ll draft the blurb, help choose an image, and make sure your links and tracking work cleanly."],
          ["Is there a long contract?", "No long commitments. We aim for simple, flexible terms and results that make you want to stay."],
        ]) as [string, string][],
    closingH2: it ? "Pronti quando lo sei" : "Ready when you are",
    closingP: it
      ? "Se la tua attività aiuta gli italiani nel Regno Unito, ci piacerebbe presentarti nel posto giusto."
      : "If your business helps Italians in the UK, we’d love to feature you in the right place.",
    closingCTA: it ? "Iniziamo la conversazione" : "Start the conversation",
    closingMeta: it ? "Onboarding umano e gentile. Nessuna pressione." : "Kind, human onboarding. No pressure.",
  };
}

/* ------------------------------ Metadata ------------------------------- */
export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const copy = t(params.locale);
  return {
    title: copy.title,
    description: copy.desc,
    alternates: { canonical: "/advertise" },
    openGraph: {
      title: copy.title,
      description: copy.desc,
      url: "https://www.resinaro.com/advertise",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

/* -------------------------------- Page --------------------------------- */
export default function Page({ params }: { params: { locale: Locale } }) {
  const copy = t(params.locale);

  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* Hero */}
      <section className="px-4 pt-12 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {copy.heroH1}
          </h1>
          <p className="mt-3 text-lg text-green-800">{copy.heroLead}</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#apply"
              className="px-6 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-900"
            >
              {copy.ctaApply}
            </a>
            <a
              href="#options"
              className="px-6 py-3 rounded-xl border border-green-800 text-green-900 font-semibold hover:bg-emerald-50"
            >
              {copy.ctaHow}
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs">
            <span className="rounded-full bg-emerald-700 px-2 py-0.5 font-semibold text-white">
              {copy.pillBrandSafe}
            </span>
            <span className="text-green-800">{copy.pillMeta}</span>
          </div>
        </div>
      </section>

      {/* Value / benefits */}
      <section className="px-4 py-10 border-t bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.whyH2}</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3 text-green-900">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.why1H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.why1P}</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.why2H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.why2P}</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.why3H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.why3P}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where you appear */}
      <section id="options" className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.whereH2}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.where1H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.where1P}</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.where2H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.where2P}</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.where3H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.where3P}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border bg-white p-5">
            <h4 className="font-medium">{copy.whatUG}</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-green-800 space-y-1">
              {copy.whatList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.perfectH2}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {copy.perfectList.map((t) => (
              <div key={t} className="rounded-xl border bg-neutral-50 p-3">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.howH2}</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3">
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.how1H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.how1P}</p>
            </li>
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.how2H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.how2P}</p>
            </li>
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{copy.how3H}</h3>
              <p className="mt-2 text-sm text-green-800">{copy.how3P}</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Light trust layer */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.trustH2}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-green-800">
            {t(params.locale).trustList.map((s) => (
              <div key={s} className="rounded-2xl border bg-neutral-50 p-4">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="px-4 py-12 bg-neutral-50 border-t">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold">{copy.applyH2}</h2>
            <p className="mt-2 text-sm text-green-800">{copy.applyP}</p>
            <p className="mt-1 text-xs text-green-700">
              {copy.preferEmail}{" "}
              <a className="underline underline-offset-4" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
            </p>
          </div>
          <AdvertiseForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">{copy.faqH2}</h2>
          <div className="mt-3 space-y-3">
            {copy.faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border bg-neutral-50 p-4">
                <summary className="font-medium cursor-pointer">{q}</summary>
                <div className="mt-2 text-sm text-green-800">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-12 border-t bg-neutral-50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold">{copy.closingH2}</h2>
          <p className="mt-2 text-sm text-green-800">{copy.closingP}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#apply"
              className="px-6 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-900"
            >
              {copy.closingCTA}
            </a>
          </div>
          <p className="mt-3 text-xs text-green-700">{copy.closingMeta}</p>
        </div>
      </section>
    </main>
  );
}
