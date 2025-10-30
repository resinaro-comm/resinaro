// src/app/[locale]/cookies/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

export const metadata = {
  title: "Cookies Policy — Resinaro",
  description:
    "Resinaro cookies policy: what cookies we use, why we use them, third-party cookies, how to manage them and your rights under data protection law.",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: { canonical: "/cookies" },
};

function t(locale: Locale) {
  if (locale === "it") {
    return {
      title: "Informativa sui Cookie",
      subhead:
        "Ultimo aggiornamento: gennaio 2025. Questa pagina spiega quali cookie utilizziamo, perché li usiamo e come puoi gestire le preferenze.",
      intro1:
        "Resinaro utilizza cookie e tecnologie simili per fornire un servizio sicuro, personalizzato ed affidabile.",
      intro2:
        "Operiamo con i più alti standard di conformità e trasparenza. Questa informativa spiega le categorie di cookie che usiamo, la base giuridica, la durata e come puoi controllarli.",
      seePrivacy: "Per i dettagli sul trattamento dei dati personali in generale, vedi la nostra",
      privacyPolicy: "Informativa Privacy",
      purposeHeading: "Finalità & base giuridica",
      purposeLead: "Utilizziamo i cookie per quattro principali finalità:",
      purposeList: [
        "<strong>Funzionamento essenziale</strong> — cookie necessari per far funzionare il sito, mantenere sicura la sessione e consentire funzionalità come moduli e aree account. Questi cookie sono strettamente necessari e non richiedono consenso.",
        "<strong>Performance e analytics</strong> — cookie che ci aiutano a capire come i visitatori usano il sito per migliorare prestazioni ed esperienza. Dove richiesto dalla legge ci basiamo sul tuo consenso oppure su un legittimo interesse bilanciato.",
        "<strong>Funzionalità</strong> — cookie che ricordano preferenze come lingua o impostazioni di visualizzazione.",
        "<strong>Marketing e pubblicità</strong> — cookie utilizzati da noi o da terze parti per mostrare offerte rilevanti e misurare le campagne; vengono usati solo con il tuo consenso dove richiesto.",
      ],
      tableHeading: "Cookie comunemente utilizzati",
      tableCols: ["Categoria", "Cookie / Esempio", "Scopo", "Conservazione"],
      tableRows: [
        ["Essenziali", "sessionid, csrf_token", "Mantengono l’accesso, proteggono dal CSRF e abilitano funzionalità di base.", "Sessione o fino a 24 ore"],
        ["Analytics", "_ga, _gid, _gat, gaclient", "Misurano visite, pagine viste e performance per migliorare il sito. Dati aggregati e pseudonimizzati.", "Da 24 ore a 2 anni"],
        ["Funzionalità", "language, theme, cookieconsent_status", "Ricordano preferenze come lingua dell’interfaccia e scelte sui cookie.", "Da 30 giorni a 1 anno"],
        ["Marketing", "_fbp, fr, IDE, test_cookie", "Mostrano annunci personalizzati e misurano l’efficacia delle campagne (impostati dalle reti pubblicitarie).", "Da 30 giorni a 2 anni"],
      ],
      tableNote:
        'Nota: i nomi esatti dei cookie e i periodi di conservazione possono cambiare. Se i cookie sono impostati da terze parti, indichiamo il fornitore e un link alla sua policy nella sezione "Cookie di terze parti".',
      thirdHeading: "Cookie di terze parti e fornitori",
      thirdText:
        "Usiamo un numero limitato di servizi terzi affidabili per analytics, pagamenti e pubblicità. Questi provider impostano cookie sul nostro sito secondo le loro policy:",
      thirdItems: [
        "<strong>Google Analytics</strong> — fornitore di analytics. Consulta sul sito di Google la documentazione su cookie e privacy (con opzioni di opt-out).",
        "<strong>Fornitori di pagamento</strong> — ad es. Stripe o partner simili possono impostare cookie per pagamenti sicuri e prevenzione frodi.",
        "<strong>Reti pubblicitarie</strong> — quando mostriamo annunci personalizzati, i partner possono impostare cookie per misurare le performance. Puoi disattivarli con strumenti di settore (NAI) e controlli del browser.",
      ],
      retentionHeading: "Conservazione e gestione dei dati",
      retentionText:
        "Conserviamo i dati legati ai cookie solo per il tempo necessario agli scopi descritti o per adempiere a obblighi legali. Quando i cookie memorizzano identificatori che possono essere dati personali, li trattiamo in linea con la nostra Informativa Privacy e la normativa applicabile.",
      manageHeading: "Come gestire e revocare il consenso",
      manageLead: "Hai diverse opzioni:",
      manageItems: [
        '<strong>Impostazioni cookie su questo sito</strong> — apri il controllo nel footer o usa il controllo delle <a href="#cookie-settings" class="underline text-green-900">preferenze cookie</a> per accettare o rifiutare i cookie non essenziali.',
        "<strong>Controlli del browser</strong> — i browser moderni permettono di bloccare o eliminare i cookie (Chrome, Edge, Firefox, Safari).",
        "<strong>Opt-out dei fornitori</strong> — segui i link di opt-out dei vendor (es. componente aggiuntivo di opt-out di Google Analytics) o i meccanismi di settore.",
      ],
      securityHeading: "Sicurezza e uso responsabile",
      securityLead: "Per Resinaro privacy e sicurezza dei dati sono priorità aziendali. Garantiamo che:",
      securityItems: [
        "I fornitori terzi sono selezionati per criteri di sicurezza, privacy e affidabilità.",
        "Limitiamo la durata dei cookie al minimo necessario per ciascuna finalità.",
        "L’accesso a eventuali dati derivati dai cookie è strettamente controllato e tracciato nei nostri controlli interni.",
      ],
      contactHeading: "Contatti e reclami",
      contactLead:
        "Per domande su questa informativa, per revocare il consenso o segnalare un problema privacy contatta il nostro DPO:",
      icoText:
        "Hai anche il diritto di presentare reclamo all’ICO (UK Information Commissioner’s Office) se ritieni che i tuoi dati non siano stati trattati correttamente.",
      linksHeading: "Link utili",
      privacyResources: "Risorse sulla privacy",
      gaOptOut: "Opt-out Google Analytics",
      privacyLinkText: "Informativa Privacy di Resinaro",
      ctaText:
        "Hai bisogno di aiuto per capire come i cookie incidono sul tuo account o sulla privacy? Il nostro team può aiutarti a rivedere impostazioni e opt-out.",
      ctaBtn: "Contattaci →",
      switchLang: "Read in English",
    } as const;
  }
  return {
    title: "Cookies Policy",
    subhead:
      "Last updated: January 2025. This page explains the cookies we use, why we use them and how you can manage your preferences.",
    intro1:
      "Resinaro uses cookies and similar technologies to provide a secure, personalised and reliable service to our customers.",
    intro2:
      "We operate to the highest standards of compliance and transparency. This policy explains the categories of cookies we use, the legal basis for using them, how long they persist and how you can control them.",
    seePrivacy: "For details about how we process personal data generally, see our",
    privacyPolicy: "Privacy Policy",
    purposeHeading: "Purpose & legal basis",
    purposeLead: "We use cookies for four main purposes:",
    purposeList: [
      "<strong>Essential operation</strong> — cookies required to operate the site, keep your session secure and allow you to use features such as forms and account areas. These cookies are strictly necessary and do not require consent.",
      "<strong>Performance and analytics</strong> — cookies that help us understand how visitors use our site so we can improve performance and user experience. Where required by law we rely on your consent or perform a legitimate interest assessment.",
      "<strong>Functionality</strong> — cookies that remember preferences such as language or display settings so the site remembers your choices.",
      "<strong>Marketing and advertising</strong> — cookies used by us or third parties to show relevant offers and measure campaign performance; these are only used with your consent where required.",
    ],
    tableHeading: "Cookies we commonly use",
    tableCols: ["Category", "Cookie / Example", "Purpose", "Retention"],
    tableRows: [
      ["Essential", "sessionid, csrf_token", "Keep you logged in, protect against cross-site request forgery and enable core functionality.", "Session or up to 24 hours"],
      ["Analytics", "_ga, _gid, _gat, gaclient", "Measure visits, pages viewed and performance to improve the site. Data is aggregated and pseudonymised.", "From 24 hours to 2 years"],
      ["Functionality", "language, theme, cookieconsent_status", "Remember user preferences such as interface language and cookie consent choices.", "30 days to 1 year"],
      ["Marketing", "_fbp, fr, IDE, test_cookie", "Deliver personalised adverts and measure campaign effectiveness (set by advertising networks).", "30 days to 2 years"],
    ],
    tableNote:
      'Note: Exact cookie names and retention periods may change. Where cookies are set by third parties we list the provider and a link to their cookie policy in the "Third-party cookies" section below.',
    thirdHeading: "Third-party cookies and service providers",
    thirdText:
      "We use a small number of trusted third-party services to deliver analytics, payments and advertising. These providers set cookies on our site under their own privacy policies. Examples include:",
    thirdItems: [
      "<strong>Google Analytics</strong> — analytics provider. See Google's cookie and privacy documentation on its website for details and opt-out options.",
      "<strong>Payment providers</strong> — providers such as Stripe or other partners may set cookies to enable secure payments and fraud prevention.",
      "<strong>Advertising networks</strong> — where we show personalised ads, partners may set cookies to measure performance. You can opt out using industry-standard tools such as the Network Advertising Initiative and your browser controls.",
    ],
    retentionHeading: "Data retention and handling",
    retentionText:
      "We retain cookie-related data only for as long as it is needed to fulfil the purpose described above or to comply with legal obligations. Where cookies store identifiers that may be considered personal data, we treat that data in line with our Privacy Policy and with applicable data protection law.",
    manageHeading: "How to manage and withdraw consent",
    manageLead: "You have choices about cookies:",
    manageItems: [
      '<strong>Cookie settings on this site</strong> — open the cookie settings control in the footer or use the <a href="#cookie-settings" class="underline text-green-900">cookie preferences</a> control to accept or decline non-essential cookies.',
      "<strong>Browser controls</strong> — modern browsers allow you to block or delete cookies. Check the help pages for your browser (Chrome, Edge, Firefox, Safari) for step-by-step instructions.",
      "<strong>Third-party opt-out</strong> — follow vendor opt-out links (for example Google Analytics opt-out browser add-on) or use industry opt-out mechanisms.",
    ],
    securityHeading: "Security and responsible use",
    securityLead:
      "Resinaro treats customer privacy and data security as priority business obligations. We ensure that:",
    securityItems: [
      "Third-party providers are selected on security, privacy and trust criteria.",
      "We limit cookie lifetimes to the minimum necessary for each purpose.",
      "Access to any data derived from cookies is strictly controlled and logged as part of our internal compliance controls.",
    ],
    contactHeading: "Contact and complaints",
    contactLead:
      "If you have questions about this policy, want to withdraw consent or raise a privacy concern please contact our Data Protection Officer at:",
    icoText:
      "You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) if you believe we have not handled your data in accordance with applicable law.",
    linksHeading: "Useful links",
    privacyResources: "Privacy resources",
    gaOptOut: "Google Analytics Opt-out",
    privacyLinkText: "Resinaro Privacy Policy",
    ctaText:
      "Need help understanding how cookies affect your account or privacy? Our team can help you review settings and opt-outs.",
    ctaBtn: "Contact us →",
    switchLang: "Leggi in italiano",
  } as const;
}

export default function CookiesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const ui = t(locale);
  const otherLocale: Locale = locale === "it" ? "en" : "it";
  const pageUrl = `https://www.resinaro.com/${locale}/cookies`;

  const faqJsonLd =
    locale === "it"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Cosa sono i cookie?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "I cookie sono piccoli file di testo salvati sul tuo dispositivo che aiutano un sito a ricordare informazioni sulla visita, migliorare le prestazioni e fornire funzionalità.",
              },
            },
            {
              "@type": "Question",
              name: "Come posso cambiare le preferenze sui cookie?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Usa il pannello delle impostazioni cookie su questo sito, modifica le impostazioni del browser oppure segui i link di opt-out indicati in questa informativa per servizi terzi come Google Analytics e reti pubblicitarie.",
              },
            },
            {
              "@type": "Question",
              name: "I cookie incidono sulla mia privacy?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "I cookie essenziali sono necessari al funzionamento del sito. I cookie non essenziali (analytics/marketing) sono usati solo con il tuo consenso, dove richiesto dalla legge.",
              },
            },
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are cookies?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Cookies are small text files stored on your device that help a website remember information about your visit, improve performance and deliver features.",
              },
            },
            {
              "@type": "Question",
              name: "How do I change my cookie preferences?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Use the cookie settings control on this site, change your browser settings, or follow the opt-out links supplied in this policy for third-party services such as Google Analytics and advertising networks.",
              },
            },
            {
              "@type": "Question",
              name: "Will cookies affect my privacy?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Essential cookies are necessary for the website to function. Non-essential cookies relate to analytics or marketing and are only used with your consent where required by law.",
              },
            },
          ],
        };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: `${ui.title} — Resinaro`,
    description:
      "Resinaro cookies policy: what cookies we use, why we use them, third-party cookies, how to manage them and your rights under data protection law.",
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: { "@type": "ImageObject", url: "https://www.resinaro.com/logo.png" },
    },
    datePublished: "2025-01-01",
    inLanguage: locale,
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900 pb-20">
      {/* Lang switch */}
      <div className="container mx-auto max-w-4xl px-6 pt-6 flex justify-end">
        <Link
          href={p(otherLocale, "/cookies")}
          className="text-sm underline text-green-900"
          hrefLang={otherLocale}
        >
          {ui.switchLang}
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">{ui.title}</h1>
          <p className="mt-3 text-white/90">{ui.subhead}</p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="leading-relaxed">{ui.intro1}</p>
          <p className="mt-2 leading-relaxed">{ui.intro2}</p>
          <p className="mt-3 text-sm text-gray-600">
            {ui.seePrivacy}{" "}
            <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">
              {ui.privacyPolicy}
            </Link>
            .
          </p>
        </div>

        {/* Purpose & legal basis */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.purposeHeading}</h2>
          <p>{ui.purposeLead}</p>
          <ol
            className="list-decimal list-inside ml-4 mt-2 space-y-2"
            dangerouslySetInnerHTML={{
              __html: ui.purposeList.map((li) => `<li>${li}</li>`).join(""),
            }}
          />
        </section>

        {/* Cookie table */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.tableHeading}</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  {ui.tableCols.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                {ui.tableRows.map(([cat, name, purpose, retention]) => (
                  <tr key={`${cat}-${name}`} className="[&>td]:px-4 [&>td]:py-3 align-top">
                    <td>{cat}</td>
                    <td>{name}</td>
                    <td>{purpose}</td>
                    <td>{retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-600">{ui.tableNote}</p>
        </section>

        {/* Third-party cookies */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.thirdHeading}</h2>
          <p>{ui.thirdText}</p>
          <ul
            className="list-disc list-inside mt-3"
            dangerouslySetInnerHTML={{
              __html: ui.thirdItems.map((li) => `<li>${li}</li>`).join(""),
            }}
          />
        </section>

        {/* Retention and data handling */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.retentionHeading}</h2>
          <p>{ui.retentionText}</p>
        </section>

        {/* How to manage cookies */}
        <section className="mt-8" id="cookie-settings">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.manageHeading}</h2>
          <p>{ui.manageLead}</p>
          <ul
            className="list-disc list-inside mt-3"
            dangerouslySetInnerHTML={{
              __html: ui.manageItems.map((li) => `<li>${li}</li>`).join(""),
            }}
          />
        </section>

        {/* Security and business-level practices */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.securityHeading}</h2>
          <p>{ui.securityLead}</p>
          <ul className="list-disc list-inside mt-3">
            {ui.securityItems.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </section>

        {/* Contact & complaints */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.contactHeading}</h2>
          <p>{ui.contactLead}</p>
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:resinaro@proton.me" className="underline text-green-900">
              resinaro@proton.me
            </a>
          </p>
          <p className="mt-3">{ui.icoText}</p>
        </section>

        {/* Useful links */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">{ui.linksHeading}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://www.privacyguides.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                {ui.privacyResources}
              </a>{" "}
              {locale === "it" ? "(sito utile con guide alla privacy)." : "(helpful site for privacy guides)."}
            </li>
            <li>
              <a
                href="https://support.google.com/analytics/answer/181881"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                {ui.gaOptOut}
              </a>
            </li>
            <li>
              <Link href={p(locale, "/privacy-policy")} className="underline text-green-900">
                {ui.privacyLinkText}
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">{ui.ctaText}</p>
            <Link
              href={p(locale, "/contact")}
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              {ui.ctaBtn}
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
