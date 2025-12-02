// app/[locale]/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

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
      ? "Come Resinaro raccoglie, utilizza, conserva e protegge i dati personali di visitatori e clienti che usano i nostri servizi di supporto (ad es. passaporti, AIRE) e le directory nel Regno Unito."
      : "How Resinaro collects, uses, stores and protects personal data for visitors and customers using our support services (e.g. passports, AIRE) and city directories in the UK.";

  const canonical =
    locale === "it" ? "/it/privacy-policy" : "/privacy-policy";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-GB": "https://www.resinaro.com/privacy-policy",
        it: "https://www.resinaro.com/it/privacy-policy",
      },
    },
  };
}

const LAST_UPDATED_EN = "1 December 2025";
const LAST_UPDATED_IT = "1 Dicembre 2025";

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
    en: `Resinaro (“Resinaro”, “we”, “us”) provides practical support and information for Italians in the UK. We respect your privacy and are committed to protecting personal data. This policy explains what we collect, why, how we use and share it, where it is stored (for example Google services, Stripe and Vercel), and your rights. It applies to our website, forms, WhatsApp contact and services offered in the UK. It does not replace any contract we may have with you.`,
    it: `Resinaro (“Resinaro”, “noi”) offre servizi informativi e di supporto pratico per italiani nel Regno Unito. Rispettiamo la tua privacy e ci impegniamo a proteggere i dati personali. Questa informativa spiega quali dati raccogliamo, perché, come li utilizziamo e condividiamo, dove vengono conservati (ad esempio servizi Google, Stripe e Vercel) e quali sono i tuoi diritti. Si applica al nostro sito web, ai moduli, ai contatti via WhatsApp e ai servizi offerti nel Regno Unito. Non sostituisce eventuali contratti tra noi e te.`,
  },
  headIntroB: {
    en: `This page is for information only and is not legal advice. Please also read our`,
    it: `Questa pagina fornisce informazioni generali e non costituisce consulenza legale. Leggi anche i nostri`,
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
    ["ads-sponsors", "8) Directory & Future Advertisers", "8) Directory & Futuri Inserzionisti"],
    ["cookies", "9) Cookies, Analytics & Similar Tech", "9) Cookie, Analytics & Tecnologie Simili"],
    ["sharing", "10) Sharing with Service Providers", "10) Condivisione con Fornitori di Servizi"],
    ["intl", "11) International Transfers", "11) Trasferimenti Internazionali"],
    ["retention", "12) Retention", "12) Conservazione dei Dati"],
    ["security", "13) Security", "13) Sicurezza"],
    ["your-rights", "14) Your Rights (UK & EU)", "14) I Tuoi Diritti (UK & UE)"],
    ["dsar", "15) How to Make a Request", "15) Come Inoltrare una Richiesta"],
    ["children", "16) Children & Family Services", "16) Minori & Servizi per Famiglie"],
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
      ? "Informativa privacy per visitatori e clienti che usano i servizi e le directory di Resinaro nel Regno Unito."
      : "Privacy notice for visitors and customers using Resinaro’s services and directories in the UK.",
    dateModified: LAST_UPDATED,
    inLanguage: isIT ? "it-IT" : "en-GB",
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      url: "https://www.resinaro.com",
    },
    url: isIT
      ? "https://www.resinaro.com/it/privacy-policy"
      : "https://www.resinaro.com/privacy-policy",
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
                : renderEnglishSection(id as string)}
            </Section>
          ))}

          {/* Footer tip */}
          <div className="mt-12 rounded-2xl border bg-white/60 p-6 text-sm text-gray-600">
            {isIT ? (
              <p>
                <strong>Suggerimento per gli utenti aziendali:</strong> se in
                futuro utilizzerai Resinaro come azienda (es. inserzioni o
                promozioni) e ti serve un accordo sul trattamento dei dati
                firmato (DPA), scrivici a{" "}
                <a className="underline" href="mailto:resinaro@proton.me">
                  resinaro@proton.me
                </a>
                .
              </p>
            ) : (
              <p>
                <strong>Tip for business users:</strong> if you later use
                Resinaro as a business (e.g. ads or promotions) and need a
                signed data processing addendum (DPA), email us at{" "}
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

/* ---------- English content renderer ---------- */
function renderEnglishSection(id: string) {
  switch (id) {
    case "intro":
      return (
        <>
          <p>
            Resinaro currently operates as a small UK-based service run by an
            individual. For the purposes of UK data protection law, Resinaro is
            the{" "}
            <strong>
              data controller for personal data collected via the site, forms,
              WhatsApp and email
            </strong>
            .
          </p>
          <ul className="mt-3 list-disc pl-6 text-sm">
            <li>
              <strong>Controller:</strong> Resinaro, based in the United
              Kingdom.
            </li>
            <li>
              <strong>Contact for privacy matters:</strong>{" "}
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
          <p>This policy covers personal data processed when you:</p>
          <ul className="mt-3 list-disc pl-6">
            <li>browse our website and read our content;</li>
            <li>
              submit forms for support (e.g. passport or consular appointment
              help, AIRE and bureaucracy support, general enquiries, volunteer
              interest);
            </li>
            <li>contact us via email or WhatsApp Business;</li>
            <li>appear in our city guides and business listings.</li>
          </ul>
          <p className="mt-3">
            It does not cover third-party websites or services (for example
            Google Maps, government booking portals or social networks) that we
            link to. Those have their own privacy policies.
          </p>
        </>
      );

    case "definitions":
      return (
        <p>
          “<strong>Personal data</strong>” means information about an identified
          or identifiable person. “<strong>Processing</strong>” means any
          operation on personal data (collecting, storing, using, sharing,
          deleting). “<strong>UK GDPR</strong>” refers to the UK General Data
          Protection Regulation and the Data Protection Act 2018.
        </p>
      );

    case "data-we-collect":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              <strong>Basic contact details:</strong> name, email address and,
              if you provide it, phone number or WhatsApp contact.
            </li>
            <li>
              <strong>Service information for consular / bureaucracy help:</strong>{" "}
              details needed to handle your request such as date of birth,
              current UK address, proof-of-address details, height, eye colour,
              information on whether you are already registered with AIRE and
              copies or photos of official documents (for example an expired
              Italian passport or ID card). We ask you to share only what is
              necessary.
            </li>
            <li>
              <strong>Volunteer / community information:</strong> information
              about your interests, skills and availability if you submit a
              volunteer form.
            </li>
            <li>
              <strong>Directory information:</strong> public-facing information
              about local businesses and places (e.g. name, category, address,
              opening hours, links to Google Maps and websites).
            </li>
            <li>
              <strong>Payment information:</strong> payments are processed by
              Stripe. We receive payment confirmations and basic billing
              information (name, email, amount, time, last 4 digits of card
              where applicable) but we do not store full card numbers on our own
              systems.
            </li>
            <li>
              <strong>Communications content:</strong> messages you send us by
              email or WhatsApp Business and our replies.
            </li>
            <li>
              <strong>Technical data:</strong> device type, IP address,
              browser-type information and pages viewed, captured via hosting
              logs and Vercel Analytics. This is used in aggregate to keep the
              site running and improve content.
            </li>
          </ul>
          <p className="mt-3 text-sm text-amber-700">
            We <strong>do not</strong> intentionally collect or request
            information about your health, religion, political opinions, trade
            union membership, criminal record or similar special categories. We
            ask you not to include such information in documents or messages
            unless it is strictly necessary for the service you are asking us to
            perform.
          </p>
          <p className="mt-2 text-sm text-amber-700">
            In practice, copies of official identity documents may incidentally
            contain sensitive details (for example if an ID reveals religious or
            biometric information). Where this happens, we process such
            information only to the minimum extent needed to deliver the service
            you requested and apply additional safeguards described in this
            policy.
          </p>
        </>
      );

    case "sources":
      return (
        <ul className="list-disc pl-6">
          <li>
            Directly from you via our website forms (which send data to Google
            Sheets through a Google Apps Script) and via email or WhatsApp
            Business.
          </li>
          <li>
            From your device through cookies and analytics (see section 9),
            mainly via our hosting provider Vercel and its analytics.
          </li>
          <li>
            From publicly available sources (for example business websites,
            Google Maps entries or official registers) when we build or update
            city guides and business listings.
          </li>
        </ul>
      );

    case "purposes":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Providing services:</strong> to process your request (for
            example preparing information needed for consular appointments,
            AIRE-related support or other bureaucracy assistance), respond to
            your messages and deliver the services you have purchased.
          </li>
          <li>
            <strong>Operating the site and directories:</strong> to publish and
            maintain city guides, directory listings and other informational
            content.
          </li>
          <li>
            <strong>Communications:</strong> to send you service-related
            messages and, where you have opted in, low-volume updates or
            newsletter-style content that you can unsubscribe from at any time.
          </li>
          <li>
            <strong>Payments and accounting:</strong> to handle Stripe payments
            and keep the records we need for accounting and tax.
          </li>
          <li>
            <strong>Safety and abuse prevention:</strong> to monitor basic logs,
            detect misuse or attempted fraud and protect the security of our
            systems and users.
          </li>
          <li>
            <strong>Legal compliance and defence:</strong> to comply with legal
            obligations, respond to lawful requests, and establish or defend
            legal claims if necessary.
          </li>
        </ul>
      );

    case "legal-bases":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Contract (Article 6(1)(b) UK GDPR):</strong> most of our
            processing of your service data (for example to help you with a
            passport-related request or to answer a question you send us) is
            necessary to perform a contract or to take steps at your request
            before entering into a contract.
          </li>
          <li>
            <strong>Consent (Article 6(1)(a)):</strong> we rely on your consent
            for optional communications (for example newsletter-style updates),
            for any non-essential cookies and when you voluntarily choose to
            send us information that may include special-category data. You can
            withdraw consent at any time.
          </li>
          <li>
            <strong>Legitimate interests (Article 6(1)(f)):</strong> we rely on
            legitimate interests to operate a secure and useful website, publish
            city guides and business listings, keep basic analytics and logs,
            and defend our rights. When we do this, we balance our interests
            against your rights and expectations.
          </li>
          <li>
            <strong>Legal obligation (Article 6(1)(c)):</strong> we process
            certain data to comply with legal obligations, especially in
            relation to tax and accounting records or responding to lawful
            requests from authorities.
          </li>
        </ul>
      );

    case "ads-sponsors":
      return (
        <>
          <p>
            Our site currently provides{" "}
            <strong>editorial city guides and business listings</strong>. At the
            moment we:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>do not sell ad placements;</li>
            <li>do not run a lead-generation or “contact this business” form;</li>
            <li>do not forward enquiries directly to businesses on your behalf.</li>
          </ul>
          <p className="mt-3">
            Listings generally link out to public information such as a
            business’s website or Google Maps profile. If you click through and
            contact a business directly, they will act as an independent data
            controller under their own privacy policy.
          </p>
          <p className="mt-3 text-sm">
            In the future, we may introduce paid listings or an advertiser
            portal. If we do so, we will:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>update this privacy policy before such features go live;</li>
            <li>
              put written data protection terms in place with those businesses
              that receive leads through Resinaro; and
            </li>
            <li>
              clearly label any sponsored placements so you know when a business
              has paid to appear.
            </li>
          </ul>
        </>
      );

    case "cookies":
      return (
        <>
          <p>
            We use a small number of cookies and similar technologies to keep
            the site running and understand aggregate usage. At the time of this
            update we do not deploy advertising pixels (such as Meta or TikTok)
            on resinaro.com.
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Essential cookies and local storage:</strong> used for
              core site functionality and security. These are strictly necessary
              and cannot realistically be turned off without breaking the site.
            </li>
            <li>
              <strong>Analytics:</strong> Vercel Analytics and hosting logs may
              record information such as page views, approximate location
              derived from IP, and device/browser type. We use these in
              aggregate to improve content and performance.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            For more detail or if we add additional tools in future, see our{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              Cookies Policy
            </Link>
            .
          </p>
        </>
      );

    case "sharing":
      return (
        <p>
          We share personal data with trusted providers who help us run our
          services, under contracts that limit their ability to use the data for
          anything other than our instructions. Typical providers include:
          hosting and CDN (Vercel), email (ProtonMail), storage and documents
          (Google Drive and Google Sheets), payment processing (Stripe),
          website analytics (Vercel Analytics) and security/anti-abuse tools
          provided by our hosting platform. We do not permit these providers to
          use your personal data for their own direct marketing.
        </p>
      );

    case "intl":
      return (
        <p>
          Some of our providers are based outside the UK/EEA or store data in
          multiple regions (for example Google, Vercel, Stripe and Proton). When
          personal data is transferred outside the UK/EEA, we rely on appropriate
          safeguards such as adequacy regulations, Standard Contractual Clauses
          and the UK addendum where required by law, together with technical and
          organisational measures to protect the data.
        </p>
      );

    case "retention":
      return (
        <>
          <p>
            We keep personal data only for as long as reasonably necessary for
            the purposes described in this policy or to meet legal, accounting
            or reporting requirements. In practice:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Operational documents</strong> (such as copies of
              passports or ID cards used for a specific consular-related
              service) are usually deleted shortly after the service is
              completed. We aim to remove these within a reasonable period once
              the task is finished and there is no ongoing dispute or follow-up.
            </li>
            <li>
              <strong>Emails, WhatsApp conversations and form submissions</strong>{" "}
              may be retained for reference, repeat requests and record-keeping
              for a number of years, typically up to 3 years, unless a longer
              period is required for legal reasons.
            </li>
            <li>
              <strong>Payment and accounting records</strong> are normally kept
              for up to 6 years to comply with tax and accounting obligations.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            If you ask us to delete your data, we will review your request and
            remove information where we are not legally required to keep it (see
            sections 14 and 15).
          </p>
        </>
      );

    case "security":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              Use of reputable providers (Vercel, Google, Proton, Stripe) with
              industry-standard security.
            </li>
            <li>
              Encryption in transit (HTTPS) for data between your browser and
              our site and between us and most providers.
            </li>
            <li>
              Access to email, cloud storage and admin tools protected with
              strong passwords and two-factor authentication, and stored on
              devices with disk encryption and screen lock.
            </li>
            <li>
              Limited access: at the time of writing, only the core operator of
              Resinaro has access to personal data for service delivery and
              support.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            No system is 100% secure. If we become aware of a personal-data
            breach likely to result in a risk to your rights and freedoms, we
            will assess the situation promptly and notify the relevant authority
            and affected individuals where the law requires it.
          </p>
        </>
      );

    case "your-rights":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Access:</strong> to obtain a copy of your personal data and
            information about how we use it.
          </li>
          <li>
            <strong>Rectification:</strong> to correct inaccurate or incomplete
            data.
          </li>
          <li>
            <strong>Erasure:</strong> to request deletion of your data in
            certain circumstances (for example where it is no longer needed for
            the original purpose and we have no legal reason to keep it).
          </li>
          <li>
            <strong>Restriction:</strong> to ask us to limit processing in some
            situations (for example while we verify accuracy or handle an
            objection).
          </li>
          <li>
            <strong>Objection:</strong> to object to processing based on
            legitimate interests, and to object at any time to the use of your
            data for direct marketing.
          </li>
          <li>
            <strong>Portability:</strong> to receive certain data in a
            structured, commonly used format and have it transmitted to another
            controller, where technically feasible.
          </li>
          <li>
            <strong>Withdraw consent:</strong> where processing is based on
            consent, you can withdraw it at any time, without affecting the
            lawfulness of processing before withdrawal.
          </li>
        </ul>
      );

    case "dsar":
      return (
        <p>
          To exercise your rights, email{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>{" "}
          with the subject line “Data Request” and explain what you would like
          us to do. We may need to request additional information to verify your
          identity. We aim to respond within one month. For complex or numerous
          requests, we may extend this period by up to two further months as
          permitted by law and will inform you if this happens.
        </p>
      );

    case "children":
      return (
        <>
          <p>
            Our services and website are primarily aimed at adults. We do not
            knowingly enter into direct contracts with children or provide
            services directly to individuals under 18 without a parent or
            guardian involved.
          </p>
          <p className="mt-2">
            In some cases, a parent or guardian may ask us to assist with a
            consular-related process for a child (for example, passport renewal
            for a minor). In those situations:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              we expect the{" "}
              <strong>parent or legal guardian to be the main point of
              contact</strong> and contracting party; and
            </li>
            <li>
              we do not intentionally communicate directly with the child other
              than in the presence or under the supervision of the parent or
              guardian.
            </li>
          </ul>
          <p className="mt-2 text-sm">
            If you believe a child has provided us with personal data without
            appropriate consent, please contact us and we will review and delete
            the information where appropriate.
          </p>
        </>
      );

    case "automated":
      return (
        <p>
          We do not make decisions with legal or similarly significant effects
          based solely on automated processing. We may use basic analytics to
          understand which pages are most popular or which cities generate the
          most interest, but these insights do not involve automated decisions
          about individual users.
        </p>
      );

    case "third-parties":
      return (
        <p>
          Our content may include links to third-party websites or services such
          as Google Maps, government portals, booking systems or social media
          platforms. We do not control those sites or how they handle your
          personal data, and this privacy policy does not apply to them. You
          should review their privacy policies before submitting any personal
          data.
        </p>
      );

    case "business-listings":
      return (
        <p>
          We publish city guides and business listings that are mainly based on
          publicly available information (for example a business’s own website
          or Google Maps listing). If you represent a business and want us to
          update or remove a listing about you, contact us at{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          . We may ask you to verify your connection to the business before we
          make changes.
        </p>
      );

    case "ugcsafe":
      return (
        <p>
          Any community contributions in the future (such as reviews, Q&amp;A or
          event submissions) will be the responsibility of the users who submit
          them. We may moderate or remove content that appears unlawful,
          abusive, defamatory or otherwise in breach of our Terms of Service,
          and will respond to valid takedown requests.
        </p>
      );

    case "no-sell":
      return (
        <p>
          We do <strong>not</strong> sell personal data. We share data only with
          service providers acting on our behalf and, where applicable, with
          other parties as described in this policy (for example when you click
          through to a third-party site or contact a business directly).
        </p>
      );

    case "changes":
      return (
        <p>
          We may update this privacy policy from time to time to reflect changes
          to our services, technology or legal requirements. The “Last updated”
          date at the top of this page shows the current version. For material
          changes, we will take reasonable steps to draw your attention to the
          update (for example by highlighting it on this page).
        </p>
      );

    case "complaints":
      return (
        <p>
          If you have concerns about how we handle your personal data, please
          contact us first so we can try to resolve the issue. You also have the
          right to lodge a complaint with the UK Information Commissioner’s
          Office (ICO):{" "}
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
          Mailing location: Resinaro, United Kingdom
        </p>
      );

    case "legal-note":
      return (
        <ul className="list-disc pl-6 text-sm">
          <li>
            This policy is intended to explain how we process personal data and
            does not by itself create contractual rights. Any services are
            governed by our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
            .
          </li>
          <li>
            If any part of this policy conflicts with mandatory data protection
            law, the law will prevail to the extent of the conflict.
          </li>
          <li>
            As Resinaro grows, we may form a separate legal entity (for example
            a limited company). In that case we will update this policy to name
            the new controller and, where relevant, put written data processing
            terms in place with business customers.
          </li>
        </ul>
      );

    default:
      return null;
  }
}

/* ---------- Italian content renderer ---------- */
function renderItalianSection(id: string) {
  switch (id) {
    case "intro":
      return (
        <>
          <p>
            Resinaro al momento è gestito come un piccolo servizio con sede nel
            Regno Unito e gestito da una persona fisica. Ai fini della normativa
            sulla protezione dei dati del Regno Unito, Resinaro è il{" "}
            <strong>
              titolare del trattamento per i dati personali raccolti tramite
              sito, moduli, WhatsApp e email
            </strong>
            .
          </p>
          <ul className="mt-3 list-disc pl-6 text-sm">
            <li>
              <strong>Titolare:</strong> Resinaro, con sede nel Regno Unito.
            </li>
            <li>
              <strong>Contatto per la privacy:</strong>{" "}
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
          <p>Questa informativa riguarda i dati personali trattati quando:</p>
          <ul className="mt-3 list-disc pl-6">
            <li>visiti il nostro sito e leggi i contenuti;</li>
            <li>
              invii moduli per richiedere supporto (es. aiuto per passaporto o
              appuntamenti consolari, supporto AIRE e burocrazia, richieste
              generali, interesse per volontariato);
            </li>
            <li>
              ci contatti tramite email o WhatsApp Business;
            </li>
            <li>
              vieni menzionato nelle nostre guide cittadine e schede aziendali.
            </li>
          </ul>
          <p className="mt-3">
            Non copre siti o servizi di terze parti (ad esempio Google Maps,
            portali governativi o social network) a cui rimandiamo. Questi hanno
            proprie informative privacy.
          </p>
        </>
      );

    case "definitions":
      return (
        <p>
          “<strong>Dati personali</strong>” significa informazioni riguardanti
          una persona identificata o identificabile. “<strong>Trattamento</strong>
          ” significa qualsiasi operazione sui dati personali (raccolta,
          conservazione, uso, condivisione, cancellazione). “
          <strong>UK GDPR</strong>” indica il Regolamento Generale sulla
          Protezione dei Dati del Regno Unito e il Data Protection Act 2018.
        </p>
      );

    case "data-we-collect":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              <strong>Dati di contatto di base:</strong> nome, indirizzo email
              e, se fornito, numero di telefono o contatto WhatsApp.
            </li>
            <li>
              <strong>Dati di servizio per supporto consolare/burocrazia:</strong>{" "}
              informazioni necessarie per gestire la richiesta, ad esempio data
              di nascita, attuale indirizzo nel Regno Unito, dettagli della
              prova di residenza, altezza, colore degli occhi, informazione se
              sei già iscritto all’AIRE e copie o foto di documenti ufficiali
              (ad esempio passaporto italiano scaduto o carta d’identità). Ti
              chiediamo di condividere solo quanto strettamente necessario.
            </li>
            <li>
              <strong>Informazioni su volontariato/comunità:</strong>{" "}
              informazioni su interessi, competenze e disponibilità se invii il
              modulo volontari.
            </li>
            <li>
              <strong>Dati per la directory:</strong> informazioni pubbliche
              sulle attività locali (nome, categoria, indirizzo, orari,
              collegamenti a Google Maps e siti web).
            </li>
            <li>
              <strong>Dati di pagamento:</strong> i pagamenti sono gestiti da
              Stripe. Noi riceviamo conferme di pagamento e dati di fatturazione
              di base (nome, email, importo, orario, ultime 4 cifre della carta
              se applicabile) ma non memorizziamo i numeri completi di carta sui
              nostri sistemi.
            </li>
            <li>
              <strong>Contenuto delle comunicazioni:</strong> messaggi che ci
              invii via email o WhatsApp Business e le nostre risposte.
            </li>
            <li>
              <strong>Dati tecnici:</strong> tipo di dispositivo, indirizzo IP,
              informazioni sul browser e pagine visitate, raccolti tramite log
              di hosting e Vercel Analytics. Usiamo questi dati in forma
              aggregata per mantenere il sito e migliorare i contenuti.
            </li>
          </ul>
          <p className="mt-3 text-sm text-amber-700">
            <strong>Non</strong> richiediamo intenzionalmente informazioni su
            salute, religione, opinioni politiche, appartenenza sindacale,
            casellario giudiziale o altre categorie particolari. Ti chiediamo di
            non includere tali informazioni nei documenti o nei messaggi a meno
            che non siano strettamente necessari per il servizio richiesto.
          </p>
          <p className="mt-2 text-sm text-amber-700">
            In pratica, copie di documenti di identità possono incidentalmente
            contenere dati particolari (ad esempio se un documento rivela
            informazioni religiose o biometriche). In questi casi trattiamo tali
            dati solo nella misura minima necessaria per erogare il servizio
            richiesto, applicando ulteriori garanzie come descritto in questa
            informativa.
          </p>
        </>
      );

    case "sources":
      return (
        <ul className="list-disc pl-6">
          <li>
            Direttamente da te tramite i nostri moduli sul sito (che inviano i
            dati a Google Sheets tramite uno script Apps Script), nonché tramite
            email o WhatsApp Business.
          </li>
          <li>
            Dal tuo dispositivo tramite cookie e analytics (vedi sezione 9),
            principalmente tramite il nostro provider di hosting Vercel e i suoi
            strumenti di analisi.
          </li>
          <li>
            Da fonti pubblicamente disponibili (ad esempio siti web aziendali,
            schede Google Maps o registri ufficiali) quando costruiamo o
            aggiorniamo guide cittadine e schede aziendali.
          </li>
        </ul>
      );

    case "purposes":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Erogare i servizi:</strong> per gestire la tua richiesta
            (es. preparare le informazioni per appuntamenti consolari, supporto
            AIRE o altre pratiche), rispondere ai messaggi ed erogare i servizi
            che hai acquistato.
          </li>
          <li>
            <strong>Gestire sito e directory:</strong> per pubblicare e
            mantenere guide cittadine, schede aziendali e altri contenuti
            informativi.
          </li>
          <li>
            <strong>Comunicazioni:</strong> per inviarti messaggi legati al
            servizio e, se hai acconsentito, aggiornamenti a basso volume o
            contenuti in stile newsletter dai quali puoi disiscriverti in ogni
            momento.
          </li>
          <li>
            <strong>Pagamenti e contabilità:</strong> per gestire i pagamenti
            tramite Stripe e conservare le registrazioni necessarie a fini
            contabili e fiscali.
          </li>
          <li>
            <strong>Sicurezza e prevenzione abusi:</strong> per monitorare i log
            di base, rilevare uso improprio o tentativi di frode e proteggere la
            sicurezza dei nostri sistemi e degli utenti.
          </li>
          <li>
            <strong>Adempimenti legali e difesa:</strong> per rispettare
            obblighi di legge, rispondere a richieste legittime delle autorità e
            tutelare i nostri diritti in caso di controversie.
          </li>
        </ul>
      );

    case "legal-bases":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Contratto (art. 6(1)(b) UK GDPR):</strong> la maggior parte
            del trattamento dei dati di servizio (ad esempio per aiutarti con
            una pratica legata al passaporto o per rispondere a una tua
            richiesta) è necessaria per eseguire un contratto o misure
            precontrattuali su tua richiesta.
          </li>
          <li>
            <strong>Consenso (art. 6(1)(a)):</strong> usiamo il tuo consenso per
            comunicazioni facoltative (es. aggiornamenti stile newsletter), per
            eventuali cookie non essenziali e quando scegli volontariamente di
            inviarci informazioni che possono includere dati particolari. Puoi
            revocare il consenso in qualsiasi momento.
          </li>
          <li>
            <strong>Interesse legittimo (art. 6(1)(f)):</strong> ci basiamo su
            legittimo interesse per gestire un sito sicuro e utile, pubblicare
            guide cittadine e schede aziendali, mantenere analytics e log di
            base e difendere i nostri diritti. Quando lo facciamo, bilanciamo i
            nostri interessi con i tuoi diritti e le tue aspettative.
          </li>
          <li>
            <strong>Obbligo legale (art. 6(1)(c)):</strong> trattiamo alcuni
            dati per adempiere a obblighi di legge, in particolare per
            registrazioni fiscali e contabili o per rispondere a richieste
            legittime delle autorità.
          </li>
        </ul>
      );

    case "ads-sponsors":
      return (
        <>
          <p>
            Al momento il nostro sito offre{" "}
            <strong>guide cittadine e schede aziendali editoriali</strong>.
            Attualmente:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>non vendiamo spazi pubblicitari;</li>
            <li>
              non gestiamo moduli “contatta questa attività” che inoltrano lead;
            </li>
            <li>
              non inoltriamo direttamente richieste di utenti alle aziende.
            </li>
          </ul>
          <p className="mt-3">
            Le schede in genere rimandano a informazioni pubbliche come il sito
            dell’attività o la relativa scheda su Google Maps. Se clicchi e
            contatti direttamente un’azienda, questa agirà come titolare
            indipendente del trattamento secondo la propria informativa privacy.
          </p>
          <p className="mt-3 text-sm">
            In futuro potremmo introdurre schede sponsorizzate o un portale per
            inserzionisti. In tal caso:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm">
            <li>
              aggiorneremo questa informativa prima che tali funzionalità siano
              attive;
            </li>
            <li>
              definiremo per iscritto i termini sul trattamento dati con le
              aziende che ricevono lead tramite Resinaro; e
            </li>
            <li>
              segnaleremo chiaramente gli spazi sponsorizzati così da
              riconoscerli.
            </li>
          </ul>
        </>
      );

    case "cookies":
      return (
        <>
          <p>
            Utilizziamo un numero limitato di cookie e tecnologie simili per
            mantenere il sito funzionante e comprendere l’uso in forma
            aggregata. Alla data di questo aggiornamento{" "}
            <strong>non</strong> utilizziamo pixel pubblicitari (ad esempio Meta
            o TikTok) su resinaro.com.
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Cookie e storage essenziali:</strong> servono a
              funzionalità core del sito e alla sicurezza. Sono strettamente
              necessari e non possono essere realisticamente disattivati senza
              compromettere il funzionamento.
            </li>
            <li>
              <strong>Analytics:</strong> Vercel Analytics e i log di hosting
              possono registrare informazioni come pagine viste, posizione
              approssimativa derivata dall’IP e tipo di browser/dispositivo. Li
              utilizziamo in forma aggregata per migliorare contenuti e
              prestazioni.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            Per maggiori dettagli o se in futuro aggiungeremo altri strumenti,
            consulta la nostra{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              Informativa sui Cookie
            </Link>
            .
          </p>
        </>
      );

    case "sharing":
      return (
        <p>
          Condividiamo dati personali con fornitori fidati che ci aiutano a
          gestire i servizi, in base a contratti che ne limitano l’uso alle
          nostre istruzioni. I fornitori tipici includono: hosting e CDN
          (Vercel), email (ProtonMail), archiviazione e documenti (Google Drive
          e Google Sheets), elaborazione pagamenti (Stripe), analytics (Vercel
          Analytics) e strumenti di sicurezza/anti-abuso messi a disposizione
          dalla piattaforma di hosting. Non permettiamo a questi fornitori di
          utilizzare i tuoi dati personali per loro marketing diretto.
        </p>
      );

    case "intl":
      return (
        <p>
          Alcuni fornitori hanno sede fuori da Regno Unito/SEE o memorizzano
          dati in più regioni (ad esempio Google, Vercel, Stripe e Proton).
          Quando i dati personali sono trasferiti fuori da UK/SEE, ci basiamo su
          adeguate garanzie come decisioni di adeguatezza, Clausole Contrattuali
          Standard e addendum UK, ove richiesto dalla legge, insieme a misure
          tecniche e organizzative per proteggere i dati.
        </p>
      );

    case "retention":
      return (
        <>
          <p>
            Conserviamo i dati personali solo per il tempo ragionevolmente
            necessario alle finalità descritte in questa informativa o per
            adempiere a obblighi legali, contabili o di rendicontazione. In
            pratica:
          </p>
          <ul className="mt-3 list-disc pl-6">
            <li>
              <strong>Documenti operativi</strong> (ad esempio copie di
              passaporti o carte d’identità utilizzate per uno specifico
              servizio consolare) vengono in genere eliminati poco dopo il
              completamento del servizio. Miriamo a rimuoverli entro un periodo
              ragionevole una volta conclusa la pratica e in assenza di dispute
              o follow-up.
            </li>
            <li>
              <strong>Email, conversazioni WhatsApp e invii tramite modulo</strong>{" "}
              possono essere conservati come riferimento, per richieste
              successive e per tenuta dei registri per alcuni anni, in genere
              fino a 3 anni, salvo periodi più lunghi richiesti dalla legge.
            </li>
            <li>
              <strong>Registrazioni di pagamento e contabili</strong> sono in
              genere conservate fino a 6 anni per adempiere a obblighi fiscali e
              contabili.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            Se chiedi la cancellazione dei tuoi dati, valuteremo la richiesta e
            elimineremo le informazioni per le quali non siamo tenuti per legge
            a mantenerle (vedi sezioni 14 e 15).
          </p>
        </>
      );

    case "security":
      return (
        <>
          <ul className="list-disc pl-6">
            <li>
              Utilizzo di fornitori affidabili (Vercel, Google, Proton, Stripe)
              con standard di sicurezza di settore.
            </li>
            <li>
              Cifratura in transito (HTTPS) per i dati tra il tuo browser e il
              nostro sito e tra noi e la maggior parte dei fornitori.
            </li>
            <li>
              Accesso a email, storage cloud e strumenti amministrativi protetto
              da password robuste e autenticazione a due fattori, su dispositivi
              con cifratura del disco e blocco schermo.
            </li>
            <li>
              Accesso limitato: al momento solo l’operatore principale di
              Resinaro ha accesso ai dati personali per erogare e supportare i
              servizi.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            Nessun sistema è sicuro al 100%. Se veniamo a conoscenza di una
            violazione dei dati personali suscettibile di comportare un rischio
            per i tuoi diritti e le tue libertà, valuteremo rapidamente la
            situazione e informeremo l’autorità competente e gli interessati
            quando richiesto dalla legge.
          </p>
        </>
      );

    case "your-rights":
      return (
        <ul className="list-disc pl-6">
          <li>
            <strong>Accesso:</strong> ottenere una copia dei tuoi dati personali
            e informazioni su come li utilizziamo.
          </li>
          <li>
            <strong>Rettifica:</strong> correggere dati inesatti o incompleti.
          </li>
          <li>
            <strong>Cancellazione:</strong> richiedere la cancellazione dei dati
            in determinate circostanze (ad esempio quando non sono più necessari
            e non abbiamo motivi legali per conservarli).
          </li>
          <li>
            <strong>Limitazione:</strong> chiedere di limitare il trattamento in
            alcune situazioni (ad esempio mentre verifichiamo l’esattezza o
            gestiamo un’opposizione).
          </li>
          <li>
            <strong>Opposizione:</strong> opporti al trattamento basato su
            interessi legittimi e, in qualsiasi momento, all’uso dei tuoi dati
            per marketing diretto.
          </li>
          <li>
            <strong>Portabilità:</strong> ricevere alcuni dati in formato
            strutturato, di uso comune, e trasmetterli a un altro titolare, ove
            tecnicamente possibile.
          </li>
          <li>
            <strong>Revoca del consenso:</strong> quando il trattamento si basa
            sul consenso, puoi revocarlo in qualsiasi momento senza pregiudicare
            la liceità del trattamento precedente alla revoca.
          </li>
        </ul>
      );

    case "dsar":
      return (
        <p>
          Per esercitare i tuoi diritti, invia un’email a{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>{" "}
          con oggetto “Data Request” e descrivi cosa desideri che facciamo.
          Potremmo richiedere ulteriori informazioni per verificare la tua
          identità. Miriamo a rispondere entro un mese; per richieste complesse
          o numerose possiamo estendere il termine fino a due mesi aggiuntivi
          come consentito dalla legge, informandoti dell’estensione.
        </p>
      );

    case "children":
      return (
        <>
          <p>
            I nostri servizi e il sito sono destinati principalmente agli
            adulti. Non stipuliamo consapevolmente contratti diretti con minori
            né forniamo servizi direttamente a persone sotto i 18 anni senza il
            coinvolgimento di un genitore o tutore.
          </p>
          <p className="mt-2">
            In alcuni casi un genitore o tutore può chiedere il nostro aiuto per
            una pratica consolare riferita a un minore (ad esempio rinnovo del
            passaporto). In tali situazioni:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              ci aspettiamo che il{" "}
              <strong>
                genitore o tutore legale sia il principale referente e
                contraente
              </strong>
              ; e
            </li>
            <li>
              non comunichiamo intenzionalmente in modo diretto con il minore se
              non in presenza o sotto la supervisione del genitore/tutore.
            </li>
          </ul>
          <p className="mt-2 text-sm">
            Se ritieni che un minore ci abbia fornito dati personali senza
            adeguato consenso, contattaci e valuteremo la situazione,
            cancellando le informazioni quando opportuno.
          </p>
        </>
      );

    case "automated":
      return (
        <p>
          Non prendiamo decisioni con effetti legali o similari basate
          esclusivamente su trattamenti automatizzati. Possiamo utilizzare
          analytics di base per capire quali pagine sono più popolari o quali
          città generano più interesse, ma tali analisi non comportano decisioni
          automatizzate su singoli utenti.
        </p>
      );

    case "third-parties":
      return (
        <p>
          I nostri contenuti possono includere link a siti o servizi di terze
          parti come Google Maps, portali governativi, sistemi di prenotazione o
          piattaforme social. Non controlliamo tali siti né il modo in cui
          trattano i tuoi dati, e questa informativa non si applica a loro. Ti
          invitiamo a leggere le loro informative prima di fornire dati
          personali.
        </p>
      );

    case "business-listings":
      return (
        <p>
          Pubblico guide cittadine e schede aziendali principalmente sulla base
          di informazioni disponibili al pubblico (ad esempio sito web
          dell’attività o relativa scheda su Google Maps). Se rappresenti un’azienda
          e desideri che aggiorniamo o rimuoviamo una scheda su di te, scrivici
          a{" "}
          <a className="underline" href="mailto:resinaro@proton.me">
            resinaro@proton.me
          </a>
          . Potremmo chiederti di verificare il legame con l’attività prima di
          effettuare modifiche.
        </p>
      );

    case "ugcsafe":
      return (
        <p>
          Eventuali contributi della community in futuro (come recensioni, Q&amp;A
          o segnalazioni di eventi) saranno responsabilità degli utenti che li
          inviano. Potremo moderare o rimuovere contenuti che appaiano illeciti,
          offensivi, diffamatori o comunque in violazione dei Termini di
          Servizio e risponderemo a richieste di rimozione valide.
        </p>
      );

    case "no-sell":
      return (
        <p>
          <strong>Non</strong> vendiamo dati personali. Condividiamo dati solo
          con fornitori di servizi che agiscono per nostro conto e, ove
          applicabile, con altri soggetti come descritto in questa informativa
          (ad esempio quando clicchi su un sito di terzi o contatti direttamente
          un’azienda).
        </p>
      );

    case "changes":
      return (
        <p>
          Possiamo aggiornare questa informativa privacy nel tempo per riflettere
          cambiamenti ai servizi, alla tecnologia o ai requisiti legali. La data
          “Ultimo aggiornamento” all’inizio della pagina indica la versione
          corrente. Per modifiche rilevanti adotteremo misure ragionevoli per
          informarti (ad esempio evidenziandole in questa pagina).
        </p>
      );

    case "complaints":
      return (
        <p>
          Se hai dubbi su come trattiamo i tuoi dati personali, contattaci
          innanzitutto così da provare a risolvere il problema. Hai anche il
          diritto di presentare reclamo all’ICO (UK Information Commissioner’s
          Office):{" "}
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
          Località di riferimento: Resinaro, Regno Unito
        </p>
      );

    case "legal-note":
      return (
        <ul className="list-disc pl-6 text-sm">
          <li>
            Questa informativa spiega come trattiamo i dati personali e non crea
            di per sé diritti contrattuali. I servizi sono regolati dai nostri{" "}
            <Link href="/terms" className="underline">
              Termini di Servizio
            </Link>
            .
          </li>
          <li>
            Se una parte di questa informativa confligge con norme imperative in
            materia di protezione dei dati, prevarranno tali norme nella misura
            del conflitto.
          </li>
          <li>
            Con la crescita di Resinaro potremmo costituire una società distinta
            (ad esempio una limited). In tal caso aggiorneremo questa
            informativa per indicare il nuovo titolare e, se del caso, definire
            per iscritto i termini sul trattamento dati con i clienti aziendali.
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
  children: ReactNode;
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
