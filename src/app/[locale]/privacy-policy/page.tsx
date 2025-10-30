// app/[locale]/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

type Locale = "en" | "it";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = (params.locale || "en") as Locale;

  const title =
    locale === "it"
      ? "Informativa sulla Privacy | Resinaro"
      : "Privacy Policy | Resinaro";

  const description =
    locale === "it"
      ? "Come Resinaro raccoglie, utilizza, condivide e protegge i dati personali di visitatori, clienti, inserzionisti e partner di directory nel Regno Unito."
      : "How Resinaro collects, uses, shares and protects personal information for visitors, customers, advertisers and directory partners in the UK.";

  const canonical =
    locale === "it" ? "/it/privacy-policy" : "/privacy-policy";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-GB": "https://resinaro.co.uk/privacy-policy",
        "it": "https://resinaro.co.uk/it/privacy-policy",
      },
    },
  };
}

const LAST_UPDATED_EN = "17 October 2025";
const LAST_UPDATED_IT = "17 Ottobre 2025";

// ---- i18n helpers ----
const L = {
  h1: {
    en: "Privacy Policy",
    it: "Informativa sulla Privacy",
  },
  lastUpdated: {
    en: "Last updated",
    it: "Ultimo aggiornamento",
  },
  headIntroA: {
    en: `Resinaro (“Resinaro”, “we”, “us”) respects your privacy and is committed to protecting personal information. This policy explains what we collect, why, how we use and share it, and your rights. It applies to our website, forms, and services offered in the UK. It does not replace any contract we may have with you.`,
    it: `Resinaro (“Resinaro”, “noi”) rispetta la tua privacy e si impegna a proteggere i dati personali. Questa informativa spiega cosa raccogliamo, perché, come utilizziamo e condividiamo i dati e quali sono i tuoi diritti. Si applica al nostro sito web, ai moduli e ai servizi offerti nel Regno Unito. Non sostituisce alcun contratto tra noi e te.`,
  },
  headIntroB: {
    en: `Heads-up: This page is informational, not legal advice. Please also read our`,
    it: `Nota: Questa pagina fornisce informazioni generali, non consulenza legale. Leggi anche i nostri`,
  },
  terms: { en: "Terms of Service", it: "Termini di Servizio" },
  cookies: { en: "Cookies Policy", it: "Informativa sui Cookie" },
  // Section titles
  sections: [
    ["intro", "1) Introduction & Who We Are", "1) Introduzione & Chi Siamo"],
    ["scope", "2) Scope of this Policy", "2) Ambito di Applicazione"],
    ["definitions", "3) Key Definitions", "3) Definizioni Chiave"],
    ["data-we-collect", "4) Data We Collect", "4) Dati che Raccogliamo"],
    ["sources", "5) Where We Get Data From", "5) Origine dei Dati"],
    ["purposes", "6) Why We Use Your Data (Purposes)", "6) Perché Usiamo i Dati (Finalità)"],
    ["legal-bases", "7) Lawful Bases (UK GDPR)", "7) Basi Giuridiche (UK GDPR)"],
    ["ads-sponsors", "8) Advertisers, Sponsors & Directory Leads", "8) Inserzionisti, Sponsor & Lead della Directory"],
    ["cookies", "9) Cookies, Analytics & Similar Tech", "9) Cookie, Analytics & Tecnologie Simili"],
    ["sharing", "10) Sharing with Service Providers", "10) Condivisione con Fornitori di Servizi"],
    ["intl", "11) International Transfers", "11) Trasferimenti Internazionali"],
    ["retention", "12) Retention", "12) Conservazione dei Dati"],
    ["security", "13) Security", "13) Sicurezza"],
    ["your-rights", "14) Your Rights (UK & EU)", "14) I Tuoi Diritti (UK & UE)"],
    ["dsar", "15) How to Make a Request", "15) Come Inoltrare una Richiesta"],
    ["children", "16) Children", "16) Minori"],
    ["automated", "17) Automated Decision-Making / Profiling", "17) Decisioni Automatizzate / Profilazione"],
    ["third-parties", "18) Links to Third Parties", "18) Link a Terze Parti"],
    ["business-listings", "19) Business Listings & Public Info", "19) Schede Aziendali & Info Pubbliche"],
    ["ugcsafe", "20) User Content, Reviews & Moderation", "20) Contenuti Utente, Recensioni & Moderazione"],
    ["no-sell", "21) Do We Sell or Share Data?", "21) Vendiamo o Condividiamo Dati?"],
    ["changes", "22) Changes to this Policy", "22) Modifiche alla Presente Informativa"],
    ["complaints", "23) Complaints & Supervisory Authority", "23) Reclami & Autorità di Controllo"],
    ["contact", "24) How to Contact Us", "24) Come Contattarci"],
    ["legal-note", "25) Important Legal Notes", "25) Note Legali Importanti"],
  ] as const,
} as const;

export default function PrivacyPolicy({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = (params.locale || "en") as Locale;
  const isIT = locale === "it";
  const LAST_UPDATED = isIT ? LAST_UPDATED_IT : LAST_UPDATED_EN;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: isIT ? "Informativa sulla Privacy Resinaro" : "Resinaro Privacy Policy",
    description: isIT
      ? "Informativa privacy per visitatori, clienti, inserzionisti e partner di directory che usano Resinaro nel Regno Unito."
      : "Privacy notice covering visitors, customers, advertisers and directory partners using Resinaro in the UK.",
    dateModified: LAST_UPDATED,
    inLanguage: isIT ? "it-IT" : "en-GB",
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      url: "https://resinaro.co.uk",
    },
    url: isIT
      ? "https://resinaro.co.uk/it/privacy-policy"
      : "https://resinaro.co.uk/privacy-policy",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top header (no sticky nav) */}
        <header className="mb-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">
              {L.h1[locale]}
            </h1>

            {/* Simple locale switch */}
            <div className="text-sm">
              {isIT ? (
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2"
                >
                  English
                </Link>
              ) : (
                <Link
                  href="/it/privacy-policy"
                  className="underline underline-offset-2"
                >
                  Italiano
                </Link>
              )}
            </div>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            {L.lastUpdated[locale]}: {LAST_UPDATED}
          </p>

          {/* Intro lead */}
          <p className="mt-4 max-w-3xl text-gray-700">{L.headIntroA[locale]}</p>
          <p className="mt-2 text-xs text-gray-500">
            <em>{L.headIntroB[locale]}</em>{" "}
            <Link href="/terms" className="underline underline-offset-2">
              {L.terms[locale]}
            </Link>{" "}
            {isIT ? "e" : "and"}{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              {L.cookies[locale]}
            </Link>
            .
          </p>
        </header>

        {/* Content */}
        <article className="w-full">
          {L.sections.map(([id, enTitle, itTitle]) => (
            <Section
              key={id}
              id={id}
              title={isIT ? itTitle : enTitle}
            >
              {isIT
                ? renderItalianSection(id as string)
                : renderOriginalSection(id as string)}
            </Section>
          ))}

          {/* Footer tip unchanged (minor i18n) */}
          <div className="mt-12 rounded-2xl border bg-white/60 p-6 text-sm text-gray-600">
            {isIT ? (
              <p>
                <strong>Suggerimento per le aziende:</strong> Se ti serve un
                accordo sul trattamento dei dati (DPA) firmato, scrivici a{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>
                .
              </p>
            ) : (
              <p>
                <strong>Tip for businesses:</strong> If you need a signed data
                processing addendum (DPA) for your records, email us at{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>
                .
              </p>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

/* ---------- Original EN content renderer (keeps everything) ---------- */
function renderOriginalSection(id: string) {
  switch (id) {
    case "intro":
      return (
        <>
          <p>
            Resinaro operates community support and information services for
            Italians in the UK, including guides, directories, lead forms and
            partner promotions. For most activities, Resinaro is the{" "}
            <strong>data controller</strong>. For certain advertiser or
            directory lead-routing services we may act as a{" "}
            <strong>data processor</strong> on behalf of that business (see section 8).
          </p>
          {/* FIX: ul must NOT be inside <p> */}
          <ul className="mt-3 list-disc pl-6 text-sm">
            <li>
              <strong>Controller:</strong> Resinaro, London, United Kingdom.
            </li>
            <li>
              <strong>Contact:</strong>{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
            </li>
          </ul>
        </>
      );

    case "scope":
      return (
        <>
          <p>This policy covers:</p>
          <ul className="mt-3 list-disc pl-6">
            <li>Visitors to our website and readers of our content.</li>
            <li>People who enquire about or purchase our services.</li>
            <li>Advertisers, sponsors and businesses listed in our directories.</li>
            <li>Individuals who submit forms (e.g., “feature my business”, jobs, events).</li>
          </ul>
          <p className="mt-3">
            It does not cover third-party websites, apps or services we link to. See section 18.
          </p>
        </>
      );

    case "definitions":
      return (
        <p>
          “<strong>Personal data</strong>” means information about an identified or identifiable person. “
          <strong>Processing</strong>” means any operation on personal data (collect, store, use, share…). “
          <strong>UK GDPR</strong>” is the UK General Data Protection Regulation and the Data Protection Act 2018.
        </p>
      );

    case "data-we-collect":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              <strong>Contact & account data</strong>: name, email, phone, preferred contact method, messages.
            </li>
            <li>
              <strong>Service data</strong>: details you provide for support (e.g., appointment preferences, document
              information necessary to prepare your request). We ask you to share only what is needed.
            </li>
            <li>
              <strong>Payment data</strong>: processed by our payment providers (e.g., Stripe/PayPal). We do not store
              full card numbers on our servers.
            </li>
            <li>
              <strong>Directory & advertiser data</strong>: business contact details, images, categories, service
              coverage, messaging and lead-routing choices.
            </li>
            <li>
              <strong>User content</strong>: reviews, Q&A submissions, event/job listings and attachments you upload.
            </li>
            <li>
              <strong>Technical data</strong>: device type, IP, pages viewed, referrer, cookies or similar IDs; see
              section 9.
            </li>
            <li>
              <strong>Public information</strong>: information available on public websites or registers relevant to a
              business listing (see section 19).
            </li>
          </ul>
          <p className="mt-3 text-sm text-amber-700">
            Sensitive (special category) information: we do not seek this intentionally. If your documents contain
            such data, we process it only where necessary to provide the requested service and with appropriate
            safeguards.
          </p>
        </>
      );

    case "sources":
      return (
        <ul className="list-disc pl-6">
          <li>Directly from you (forms, email, WhatsApp, phone).</li>
          <li>From your device via cookies/analytics (see section 9).</li>
          <li>From publicly available sources about businesses for directory accuracy (section 19).</li>
          <li>From partners when you ask us to connect you (e.g., an advertiser receiving your lead).</li>
        </ul>
      );

    case "purposes":
      return (
        <ul className="list-disc pl-6">
          <li>To provide services you request and respond to enquiries.</li>
          <li>To operate directories, listings, jobs and events submissions.</li>
          <li>To route leads to advertisers or sponsors when you opt in.</li>
          <li>To run our website, prevent abuse and improve content.</li>
          <li>To process payments and manage accounting/tax records.</li>
          <li>To send service messages; and with consent, newsletters or marketing you can opt out of anytime.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>
      );

    case "legal-bases":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Contract</strong>: where processing is necessary to deliver what you asked for.
          </li>
          <li>
            <strong>Consent</strong>: for optional marketing, cookies that aren’t strictly necessary, or when you ask
            us to share your enquiry with a partner.
          </li>
          <li>
            <strong>Legitimate interests</strong>: running a safe, useful website, preventing fraud, showing
            relevant directory results, measuring performance—balanced against your rights.
          </li>
          <li>
            <strong>Legal obligation</strong>: tax, accounting, fraud prevention and responding to lawful requests.
          </li>
        </ul>
      );

    case "ads-sponsors":
      return (
        <>
          <p>
            We provide placements for businesses (sponsored or organic). If you submit a form requesting contact from
            a listed business or sponsor, we will share your enquiry with that business. In those cases:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              Resinaro acts as <strong>independent controller</strong> for operating the website and capturing your enquiry, and
              generally as a <strong>processor</strong> when transmitting the enquiry to the chosen business.
            </li>
            <li>
              The recipient business becomes an <strong>independent controller</strong> of your data once it receives
              your enquiry and will process it under its own privacy policy.
            </li>
            <li>
              Sponsored/featured labels: we disclose paid placements. Payment does not affect how we process your
              personal data.
            </li>
            <li>
              We prohibit advertisers from adding you to marketing lists unless you have given them your consent.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            If you believe a listing is inaccurate or you want us to stop routing your enquiry, contact{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>
            .
          </p>
        </>
      );

    case "cookies":
      return (
        <>
          <p>
            We use essential cookies for core functionality (security, forms) and, if enabled, optional analytics to
            understand aggregate usage. You can manage preferences in our{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              Cookies Policy
            </Link>
            .
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Essential</strong>: required to deliver pages and keep the site secure. These cannot be turned
              off.
            </li>
            <li>
              <strong>Analytics/Performance</strong>: page views, referrers, events (e.g., Vercel Analytics, GA4 or
              similar). We use aggregated reports; IPs may be processed transiently.
            </li>
            <li>
              <strong>Advertising/Attribution</strong>: only if we run campaigns or affiliates; we limit identifiers
              and respect your choices.
            </li>
          </ul>
        </>
      );

    case "sharing":
      return (
        <p>
          We share data with trusted providers under contracts that restrict use to our instructions, including:
          hosting, analytics, email, payment processing, form handling, file storage, content delivery, and security
          services. Examples include (as relevant to our stack): hosting/CDN, analytics (e.g., Vercel Analytics),
          email, payment processors (e.g., Stripe/PayPal), form processors, and anti-abuse tools. We do not sell
          personal data.
        </p>
      );

    case "intl":
      return (
        <p>
          If we transfer data outside the UK/EEA, we rely on adequacy regulations or Standard Contractual Clauses
          with additional safeguards as required by UK GDPR.
        </p>
      );

    case "retention":
      return (
        <p>
          We retain data only as long as necessary for the purposes described or to comply with legal obligations.
          Documents you upload for one-off services are deleted once the service is complete unless we must keep a
          copy for legal reasons (e.g., tax records).
        </p>
      );

    case "security":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>Encryption in transit, access controls and least-privilege administration.</li>
            <li>Vendor due diligence and data processing agreements where appropriate.</li>
            <li>Regular backups and logging to detect abuse or fraud.</li>
          </ul>
          <p className="mt-3 text-sm">
            No system is 100% secure. If we become aware of a personal-data breach likely to result in a risk to your
            rights, we will notify the relevant authorities and, where required, affected individuals.
          </p>
        </>
      );

    case "your-rights":
      return (
        <ul className="list-disc pl-6">
          <li>Access, rectification, erasure and restriction.</li>
          <li>Objection to processing based on legitimate interests.</li>
          <li>Portability (where applicable).</li>
          <li>Withdraw consent at any time (for activities based on consent).</li>
        </ul>
      );

    case "dsar":
      return (
        <p>
          Email{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>{" "}
          with the subject line “Data Request”. We may need to verify your identity. We aim to respond within one
          month. If your request is complex, we may extend by up to two months as permitted by law.
        </p>
      );

    case "children":
      return (
        <p>
          Our services are designed for adults. We do not knowingly collect personal data from children under 16
          without appropriate consent. If you believe a child has provided us data, please contact us for deletion.
        </p>
      );

    case "automated":
      return (
        <p>
          We do not make decisions with legal or similarly significant effects based solely on automated processing.
          We may use basic analytics to improve the site and measure interest in categories or cities.
        </p>
      );

    case "third-parties":
      return (
        <p>
          Our content may link to third-party websites (e.g., Google Maps, booking portals, government pages). We do
          not control those sites or their privacy practices. Please review their policies before sharing data.
        </p>
      );

    case "business-listings":
      return (
        <p>
          We publish business listings and city directories. To create accurate listings we may process information
          from public sources (official registers, business websites, publicly available profiles). If you represent
          a business and want to update or remove your listing, contact us at{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          . We will verify ownership before making changes.
        </p>
      );

    case "ugcsafe":
      return (
        <p>
          Community submissions (reviews, Q&A, events, jobs) are provided by users. Users are responsible for the
          content they submit. We may moderate or remove content that violates our Terms (e.g., unlawful, abusive,
          defamatory, or privacy-invasive material) and we respond to valid takedown notices.
        </p>
      );

    case "no-sell":
      return (
        <p>
          We do not sell personal data. We share data with service providers under contract and with businesses you
          explicitly ask us to contact, as described above.
        </p>
      );

    case "changes":
      return (
        <p>
          We may update this policy to reflect changes to our services or the law. The “Last updated” date shows the
          current version. Significant changes will be highlighted on this page.
        </p>
      );

    case "complaints":
      return (
        <p>
          If you have concerns, please contact us first so we can try to resolve them. You also have the right to
          complain to the UK Information Commissioner’s Office (ICO):{" "}
          <Link
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            className="underline underline-offset-2"
          >
            ico.org.uk/make-a-complaint
          </Link>
          .
        </p>
      );

    case "contact":
      return (
        <p>
          Email:{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          <br />
          Address: Resinaro, London, United Kingdom
        </p>
      );

    case "legal-note":
      return (
        <ul className="list-disc pl-6 text-sm">
          <li>
            This policy does not create contractual rights. Any services are governed by our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
            .
          </li>
          <li>
            If any part of this policy conflicts with mandatory law, the law prevails to the extent of the conflict.
          </li>
          <li>
            If you are an advertiser or directory partner, our data processing terms apply to lead-routing and will
            form part of your commercial agreement with us.
          </li>
        </ul>
      );

    default:
      return null;
  }
}

/* ---------- Italian content renderer (faithful translation) ---------- */
function renderItalianSection(id: string) {
  switch (id) {
    case "intro":
      return (
        <>
          <p>
            Resinaro offre servizi informativi e di supporto per italiani nel Regno Unito, incluse guide,
            directory, moduli di contatto e promozioni di partner. Nella maggior parte dei casi Resinaro è il{" "}
            <strong>titolare del trattamento</strong>. Per alcuni servizi di instradamento lead per inserzionisti
            o schede directory possiamo agire come <strong>responsabile del trattamento</strong> per conto
            di quell’azienda (vedi sezione 8).
          </p>
          <ul className="mt-3 list-disc pl-6 text-sm">
            <li>
              <strong>Titolare:</strong> Resinaro, Londra, Regno Unito.
            </li>
            <li>
              <strong>Contatti:</strong>{" "}
              <a className="underline" href="mailto:resinaro@proton.me">
                resinaro@proton.me
              </a>
            </li>
          </ul>
        </>
      );

    case "scope":
      return (
        <>
          <p>Questa informativa riguarda:</p>
          <ul className="mt-3 list-disc pl-6">
            <li>Visitatori del nostro sito e lettori dei contenuti.</li>
            <li>Persone che richiedono informazioni o acquistano i nostri servizi.</li>
            <li>Inserzionisti, sponsor e aziende elencate nelle nostre directory.</li>
            <li>Chi invia moduli (es. “inserisci la mia attività”, lavoro, eventi).</li>
          </ul>
          <p className="mt-3">
            Non copre siti, app o servizi di terze parti a cui rimandiamo. Vedi sezione 18.
          </p>
        </>
      );

    case "definitions":
      return (
        <p>
          “<strong>Dati personali</strong>” significa informazioni riguardanti una persona identificata o
          identificabile. “<strong>Trattamento</strong>” significa qualsiasi operazione sui dati personali
          (raccolta, conservazione, uso, condivisione…). “<strong>UK GDPR</strong>” è il Regolamento Generale
          sulla Protezione dei Dati nel Regno Unito e il Data Protection Act 2018.
        </p>
      );

    case "data-we-collect":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              <strong>Dati di contatto e account</strong>: nome, email, telefono, metodo di contatto preferito, messaggi.
            </li>
            <li>
              <strong>Dati di servizio</strong>: dettagli forniti per l’assistenza (es. preferenze appuntamento, informazioni
              documentali necessarie). Chiediamo di condividere solo quanto strettamente necessario.
            </li>
            <li>
              <strong>Dati di pagamento</strong>: gestiti dai nostri fornitori (es. Stripe/PayPal). Non memorizziamo
              numeri completi di carta sui nostri server.
            </li>
            <li>
              <strong>Dati per directory/inserzionisti</strong>: contatti aziendali, immagini, categorie, copertura,
              messaggistica e preferenze di instradamento lead.
            </li>
            <li>
              <strong>Contenuti utente</strong>: recensioni, Q&A, annunci eventi/lavoro e allegati caricati.
            </li>
            <li>
              <strong>Dati tecnici</strong>: tipo di dispositivo, IP, pagine viste, referrer, cookie o identificatori
              simili; vedi sezione 9.
            </li>
            <li>
              <strong>Informazioni pubbliche</strong>: dati disponibili su siti o registri pubblici rilevanti per
              una scheda aziendale (vedi sezione 19).
            </li>
          </ul>
          <p className="mt-3 text-sm text-amber-700">
            Dati particolari (categorie speciali): non li richiediamo intenzionalmente. Se i tuoi documenti li
            includono, li trattiamo solo quando necessari per il servizio richiesto e con adeguate garanzie.
          </p>
        </>
      );

    case "sources":
      return (
        <ul className="list-disc pl-6">
          <li>Direttamente da te (moduli, email, WhatsApp, telefono).</li>
          <li>Dal tuo dispositivo tramite cookie/analytics (vedi sezione 9).</li>
          <li>Da fonti pubbliche su attività per l’accuratezza della directory (sezione 19).</li>
          <li>Da partner quando chiedi di metterti in contatto (es. un inserzionista che riceve il tuo lead).</li>
        </ul>
      );

    case "purposes":
      return (
        <ul className="list-disc pl-6">
          <li>Fornire i servizi richiesti e rispondere alle richieste.</li>
          <li>Gestire directory, schede, invii di lavoro ed eventi.</li>
          <li>Instradare lead a inserzionisti o sponsor quando acconsenti.</li>
          <li>Gestire il sito, prevenire abusi e migliorare i contenuti.</li>
          <li>Elaborare pagamenti e gestire contabilità/obblighi fiscali.</li>
          <li>Inviare messaggi di servizio; con consenso, newsletter/marketing (opt-out in qualsiasi momento).</li>
          <li>Adempiere a obblighi legali e far rispettare i nostri termini.</li>
        </ul>
      );

    case "legal-bases":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Contratto</strong>: quando il trattamento è necessario per erogare ciò che hai richiesto.
          </li>
          <li>
            <strong>Consenso</strong>: per marketing facoltativo, cookie non strettamente necessari o quando chiedi
            di condividere la tua richiesta con un partner.
          </li>
          <li>
            <strong>Interesse legittimo</strong>: gestione sicura/utile del sito, prevenzione frodi, risultati directory
            pertinenti, misurazione prestazioni—bilanciati con i tuoi diritti.
          </li>
          <li>
            <strong>Obbligo legale</strong>: fiscale, contabile, prevenzione frodi e risposte a richieste legittime.
          </li>
        </ul>
      );

    case "ads-sponsors":
      return (
        <>
          <p>
            Offriamo spazi per aziende (sponsorizzati o organici). Se invii un modulo chiedendo il contatto da parte
            di un’azienda elencata o sponsor, condivideremo la tua richiesta con tale azienda. In tali casi:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              Resinaro agisce come <strong>titolare indipendente</strong> per l’operatività del sito e la raccolta
              della richiesta, e in genere come <strong>responsabile</strong> nel trasmettere la richiesta
              all’azienda scelta.
            </li>
            <li>
              L’azienda destinataria diventa <strong>titolare indipendente</strong> dei tuoi dati una volta ricevuta
              la richiesta e li tratterà secondo la propria informativa.
            </li>
            <li>
              Etichette “sponsorizzato/in evidenza”: segnaliamo gli spazi a pagamento. Il pagamento non influisce su
              come trattiamo i tuoi dati personali.
            </li>
            <li>
              Vietiamo agli inserzionisti di aggiungerti a liste marketing senza il tuo consenso.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            Se ritieni che una scheda sia imprecisa o vuoi che smettiamo di instradare la tua richiesta, contattaci a{" "}
            <a className="underline" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>
            .
          </p>
        </>
      );

    case "cookies":
      return (
        <>
          <p>
            Usiamo cookie essenziali per funzionalità core (sicurezza, moduli) e, se abilitati, analytics opzionali
            per comprendere l’uso aggregato. Puoi gestire le preferenze nella nostra{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              Informativa sui Cookie
            </Link>
            .
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Essenziali</strong>: necessari per erogare le pagine e mantenere il sito sicuro. Non possono essere disattivati.
            </li>
            <li>
              <strong>Analytics/Prestazioni</strong>: pagine viste, referrer, eventi (es. Vercel Analytics, GA4 o simili).
              Usiamo report aggregati; gli IP possono essere trattati in modo transitorio.
            </li>
            <li>
              <strong>Advertising/Attribution</strong>: solo se svolgiamo campagne o affiliati; limitiamo gli identificatori
              e rispettiamo le tue scelte.
            </li>
          </ul>
        </>
      );

    case "sharing":
      return (
        <p>
          Condividiamo dati con fornitori fidati tramite contratti che ne limitano l’uso alle nostre istruzioni:
          hosting, analytics, email, pagamenti, gestione moduli, storage, CDN, sicurezza. Esempi (in base al nostro stack):
          hosting/CDN, analytics (es. Vercel Analytics), email, processori di pagamento (es. Stripe/PayPal),
          processori di moduli e strumenti anti-abuso. Non vendiamo dati personali.
        </p>
      );

    case "intl":
      return (
        <p>
          Se trasferiamo dati fuori da UK/SEE, ci basiamo su decisioni di adeguatezza o Clausole Contrattuali Standard
          con garanzie aggiuntive come richiesto dall’UK GDPR.
        </p>
      );

    case "retention":
      return (
        <p>
          Conserviamo i dati solo per il tempo necessario alle finalità descritte o per obblighi legali. I documenti
          caricati per servizi “una tantum” vengono eliminati al termine del servizio salvo obblighi (es. fiscali).
        </p>
      );

    case "security":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>Cifratura in transito, controlli di accesso e principio del privilegio minimo.</li>
            <li>Due diligence sui fornitori e accordi di trattamento dati quando opportuno.</li>
            <li>Backup regolari e logging per rilevare abusi o frodi.</li>
          </ul>
          <p className="mt-3 text-sm">
            Nessun sistema è sicuro al 100%. Se veniamo a conoscenza di una violazione suscettibile di comportare un
            rischio per i tuoi diritti, informeremo le autorità competenti e, se richiesto, gli interessati.
          </p>
        </>
      );

    case "your-rights":
      return (
        <ul className="list-disc pl-6">
          <li>Accesso, rettifica, cancellazione e limitazione.</li>
          <li>Opposizione al trattamento basato su interessi legittimi.</li>
          <li>Portabilità (se applicabile).</li>
          <li>Revoca del consenso in qualsiasi momento (per attività basate sul consenso).</li>
        </ul>
      );

    case "dsar":
      return (
        <p>
          Invia un’email a{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>{" "}
          con oggetto “Data Request”. Potremmo dover verificare la tua identità. Miriamo a rispondere entro un mese;
          per richieste complesse possiamo estendere fino a due mesi come consentito dalla legge.
        </p>
      );

    case "children":
      return (
        <p>
          I nostri servizi sono destinati agli adulti. Non raccogliamo consapevolmente dati di minori di 16 anni senza
          adeguato consenso. Se ritieni che un minore ci abbia fornito dati, contattaci per la cancellazione.
        </p>
      );

    case "automated":
      return (
        <p>
          Non prendiamo decisioni con effetti legali o similari basate esclusivamente su trattamenti automatizzati.
          Possiamo usare analytics di base per migliorare il sito e misurare l’interesse per categorie o città.
        </p>
      );

    case "third-parties":
      return (
        <p>
          I nostri contenuti possono collegarsi a siti di terze parti (es. Google Maps, portali di prenotazione, pagine
          governative). Non controlliamo tali siti o le loro pratiche. Ti invitiamo a leggere le loro informative.
        </p>
      );

    case "business-listings":
      return (
        <p>
          Pubblichiamo schede aziendali e directory cittadine. Per accuratezza possiamo trattare informazioni da fonti
          pubbliche (registri ufficiali, siti aziendali, profili pubblici). Se rappresenti un’azienda e vuoi aggiornare
          o rimuovere la scheda, scrivici a{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          . Verificheremo la titolarità prima di modificare.
        </p>
      );

    case "ugcsafe":
      return (
        <p>
          I contributi della community (recensioni, Q&A, eventi, lavoro) sono forniti dagli utenti, che ne sono
          responsabili. Possiamo moderare o rimuovere contenuti che violano i Termini (es. illeciti, offensivi,
          diffamatori o invasivi della privacy) e rispondiamo a richieste di rimozione valide.
        </p>
      );

    case "no-sell":
      return (
        <p>
          Non vendiamo dati personali. Condividiamo dati con fornitori sotto contratto e con aziende che ci chiedi
          esplicitamente di contattare, come descritto sopra.
        </p>
      );

    case "changes":
      return (
        <p>
          Possiamo aggiornare questa informativa per riflettere cambiamenti ai servizi o alla legge. La data “Ultimo
          aggiornamento” indica la versione corrente. Le modifiche rilevanti verranno evidenziate in questa pagina.
        </p>
      );

    case "complaints":
      return (
        <p>
          Se hai dubbi, contattaci prima per provare a risolverli. Hai anche il diritto di presentare reclamo all’ICO
          (UK Information Commissioner’s Office):{" "}
          <Link
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            className="underline underline-offset-2"
          >
            ico.org.uk/make-a-complaint
          </Link>
          .
        </p>
      );

    case "contact":
      return (
        <p>
          Email:{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          <br />
          Indirizzo: Resinaro, Londra, Regno Unito
        </p>
      );

    case "legal-note":
      return (
        <ul className="list-disc pl-6 text-sm">
          <li>
            Questa informativa non crea diritti contrattuali. I servizi sono regolati dai nostri{" "}
            <Link href="/terms" className="underline">
              Termini di Servizio
            </Link>
            .
          </li>
          <li>
            Se una parte di questa informativa confligge con norme imperative, prevarranno tali norme nella misura del conflitto.
          </li>
          <li>
            Se sei inserzionista o partner directory, i nostri termini di trattamento dati per l’instradamento lead
            fanno parte del tuo accordo commerciale con noi.
          </li>
        </ul>
      );

    default:
      return null;
  }
}

/* ---------- Small UI helper ---------- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-10 scroll-mt-24 rounded-2xl border bg-white/70 p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-emerald-900">{title}</h2>
      <div className="prose prose-stone mt-3 max-w-none prose-a:text-emerald-800">
        {children}
      </div>
    </section>
  );
}
