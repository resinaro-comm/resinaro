// src/app/[locale]/terms/page.tsx
import Link from "next/link";
import TermsAcceptance from "@/components/TermsAcceptance";
import { p } from "@/lib/localePath";

export const metadata = {
  title: "Terms of Service | Resinaro",
  description:
    "Resinaro Terms of Service — short summary and full legal terms. Read the TL;DR or the full text. Contact resinaro@proton.me for questions.",
  alternates: { canonical: "/terms" },
};

const sectionsEn = [
  { id: "intro", title: "Introduction" },
  { id: "services", title: "Our Services" },
  { id: "eligibility", title: "Eligibility and your commitments" },
  { id: "fees", title: "Fees, payment and billing" },
  { id: "refunds", title: "Cancellations and refunds" },
  { id: "safeguarding", title: "Safeguarding & duty of care" },
  { id: "privacy", title: "Confidentiality & data protection" },
  { id: "liability", title: "Limitation of liability" },
  { id: "complaints", title: "Complaints & disputes" },
  { id: "changes", title: "Changes to these Terms" },
  { id: "governing-law", title: "Governing law" },
  { id: "contact", title: "Contact" },
] as const;

const sectionsIt = [
  { id: "intro", title: "Introduzione" },
  { id: "services", title: "I nostri Servizi" },
  { id: "eligibility", title: "Idoneità e tuoi impegni" },
  { id: "fees", title: "Tariffe, pagamenti e fatturazione" },
  { id: "refunds", title: "Cancellazioni e rimborsi" },
  { id: "safeguarding", title: "Tutela & dovere di protezione" },
  { id: "privacy", title: "Riservatezza & protezione dati" },
  { id: "liability", title: "Limitazione di responsabilità" },
  { id: "complaints", title: "Reclami & controversie" },
  { id: "changes", title: "Modifiche ai Termini" },
  { id: "governing-law", title: "Legge applicabile" },
  { id: "contact", title: "Contatti" },
] as const;

export default function Terms({ params }: { params: { locale: "en" | "it" } }) {
  const locale = params.locale;
  const isIt = locale === "it";
  const sections = isIt ? sectionsIt : sectionsEn;
  const otherLocale = isIt ? "en" : "it";

  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Language switch */}
        <div className="mb-4 flex justify-end">
          <Link
            href={p(otherLocale, "/terms")}
            className="text-sm underline text-green-800"
            hrefLang={otherLocale}
          >
            {isIt ? "Read in English" : "Leggi in italiano"}
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-green-900">
            {isIt ? "Termini di Servizio" : "Terms of Service"}
          </h1>
          <div className="mt-2 text-sm text-gray-600">
            {isIt ? "Ultimo aggiornamento" : "Last updated"}: 24 September 2025 ·{" "}
            {isIt ? "Versione" : "Version"}: 2025.09
          </div>
        </header>

        {/* TL;DR + acceptance */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <div className="md:flex md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  {isIt ? "Riassunto veloce (TL;DR)" : "Quick summary (TL;DR)"}
                </h2>

                {isIt ? (
                  <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2" lang="it">
                    <li>Usa i servizi Resinaro in modo lecito e fornisci informazioni accurate.</li>
                    <li>
                      I costi sono mostrati prima della prenotazione. I pagamenti sono gestiti da provider affidabili; Resinaro non
                      conserva i dati completi della carta.
                    </li>
                    <li>
                      Forniamo guida ma non possiamo garantire esiti che dipendono da terzi (es. decisioni consolari).
                    </li>
                    <li>
                      Per usare i servizi a pagamento devi accettare questi Termini; l’accettazione è registrata localmente e si gestisce
                      dalle impostazioni dei cookie.
                    </li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2" lang="en">
                    <li>Use Resinaro services lawfully and provide accurate information.</li>
                    <li>
                      Fees are shown before booking. Payments processed by trusted providers; card data is not stored by Resinaro.
                    </li>
                    <li>
                      We provide guidance but cannot guarantee outcomes from third parties (for example consulate decisions).
                    </li>
                    <li>
                      You must accept these Terms to use paid services; acceptance is recorded locally and can be managed via the cookie
                      settings.
                    </li>
                  </ul>
                )}

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="/assets/resinaro-terms-summary.pdf"
                    className="inline-block bg-white border rounded px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    {isIt ? "Scarica il riepilogo (PDF) su una pagina" : "Download one-page summary (PDF)"}
                  </a>

                  <Link href={p(locale, "/cookies")} className="inline-block text-sm underline text-green-800">
                    {isIt ? "Gestisci i cookie" : "Manage cookies"}
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-72 mt-4 md:mt-0">
                {/* Pass locale explicitly to keep hrefs stable in the client component */}
                <TermsAcceptance locale={locale} />
              </div>
            </div>
          </div>
        </section>

        {/* Main content grid: TOC (non-sticky) + content */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* TOC (non-sticky as requested) */}
          <aside className="md:col-span-1 self-start">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                {isIt ? "Contenuti della pagina" : "On this page"}
              </h3>
              <nav className="text-sm text-gray-700 space-y-2">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block hover:text-green-900 hover:underline">
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-4 text-xs text-gray-500">
                <div>{isIt ? "Hai bisogno di aiuto a scegliere un servizio?" : "Need help choosing a service?"}</div>
                <Link href={p(locale, "/contact")} className="underline text-green-800">
                  {isIt ? "Contattaci" : "Contact us"}
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            {/* 1. Introduction */}
            <article id="intro" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                1. {isIt ? "Introduzione" : "Introduction"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  Questi Termini regolano il rapporto legale tra te e Resinaro. Usando il sito o i servizi di Resinaro accetti questi
                  Termini. Se non li accetti, per favore non utilizzare i Servizi.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  These Terms set out the legal relationship between you and Resinaro. By using Resinaro&apos;s website or services you
                  accept these Terms. If you do not accept these Terms, please do not use the Services.
                </p>
              )}

              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Questi Termini regolano l’accesso e l’uso del sito e dei servizi di Resinaro. Usando i Servizi accetti integralmente
                    questi Termini, che costituiscono un accordo tra te e Resinaro.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    These Terms of Service govern your access to and use of Resinaro&apos;s website and services (the Services). By using
                    the Services you accept and agree to these Terms. They form a binding agreement between you and Resinaro in relation
                    to the Services described on this site.
                  </div>
                )}
              </details>
            </article>

            {/* 2. Services */}
            <article id="services" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                2. {isIt ? "I nostri Servizi" : "Our Services"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  Resinaro offre supporto pratico per migranti nel Regno Unito su temi consolari, identità, casa e benefici.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Resinaro provides practical guidance and assistance to migrants in the UK across consular, identity, housing and
                  benefits topics.
                </p>
              )}

              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    I servizi sono erogati in modo professionale e confidenziale. Quando presentiamo terze parti (es. consulenti legali,
                    traduttori o provider di identità) si tratta solo di presentazioni: Resinaro non controlla gli standard dei terzi e
                    non è responsabile della loro prestazione.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    Services are delivered professionally and confidentially. Where Resinaro introduces third parties (for example legal
                    advisers, translators, or identity providers), such introductions are only introductions: Resinaro does not control
                    third party standards and is not responsible for their performance.
                  </div>
                )}
              </details>
            </article>

            {/* 3. Eligibility */}
            <article id="eligibility" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                3. {isIt ? "Idoneità e tuoi impegni" : "Eligibility and your commitments"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: fornisci informazioni accurate e utilizza i servizi in modo lecito.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: provide accurate information and use services lawfully.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Dichiari di avere capacità di contrarre e che le informazioni fornite sono accurate e aggiornate. Fornirai le
                    informazioni ragionevolmente necessarie per il servizio richiesto e userai i Servizi solo per scopi leciti.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    You represent that you are able to enter into a contract and that any information you provide is accurate and up to
                    date. You agree to provide all information reasonably required to deliver the requested service and to use the
                    Services for lawful purposes only.
                  </div>
                )}
              </details>
            </article>

            {/* 4. Fees */}
            <article id="fees" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                4. {isIt ? "Tariffe, pagamenti e fatturazione" : "Fees, payment and billing"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: i costi sono chiari alla prenotazione; i pagamenti sono processati da provider affidabili.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: fees are clear at booking; payments processed by trusted providers.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Quando è previsto un costo, sarà indicato chiaramente prima della conferma. Il pagamento è anticipato salvo diverso
                    accordo scritto. Usiamo processori di pagamento affidabili; Resinaro non conserva i dati completi della carta.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    When a fee applies we will make the fee clear before you confirm booking. Payment is required in advance unless
                    otherwise agreed in writing. We use reputable third party payment processors to handle card payments; Resinaro does
                    not store full payment card details.
                  </div>
                )}
              </details>
            </article>

            {/* 5. Refunds */}
            <article id="refunds" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                5. {isIt ? "Cancellazioni e rimborsi" : "Cancellations and refunds"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: i rimborsi dipendono dal servizio e dal lavoro già svolto.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: refunds depend on service and work completed.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Se il servizio è stato completato o il lavoro è iniziato, il rimborso può essere ridotto per riflettere l’attività
                    già svolta. In caso di nostro errore, offriremo un rimedio che può includere rimborso o credito. I dettagli specifici
                    sono indicati al momento dell’acquisto o nella conferma.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    If a Service is fully delivered or work has started, refunds may be reduced to reflect work already completed. If
                    Resinaro fails to deliver an agreed service due to our error, we will offer a remedy which may include a refund or a
                    credit toward other Services. Specific refund terms will be set out at the point of sale or in the booking
                    confirmation.
                  </div>
                )}
              </details>
            </article>

            {/* 6. Safeguarding */}
            <article id="safeguarding" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                6. {isIt ? "Tutela & dovere di protezione" : "Safeguarding & duty of care"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: diamo priorità alla sicurezza e agiamo in caso di rischi.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: we prioritise safety and will act on safeguarding concerns.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Resinaro tutela la sicurezza degli utenti. Se riteniamo che qualcuno sia a rischio di danno, abuso o sfruttamento,
                    potremmo effettuare una segnalazione alle autorità competenti. Adotteremo misure ragionevoli per proteggere i dati,
                    dando priorità alla sicurezza. Segnalazioni: resinaro@proton.me.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    Resinaro is committed to the safety and welfare of service users. If any member of our team believes someone may be
                    at risk of harm, abuse or exploitation we may make a safeguarding referral to relevant statutory agencies in line
                    with applicable guidance. We will take reasonable steps to protect personal data in these circumstances while
                    prioritising safety. To report a safeguarding concern contact resinaro@proton.me.
                  </div>
                )}
              </details>
            </article>

            {/* 7. Privacy */}
            <article id="privacy" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                7. {isIt ? "Riservatezza & protezione dati" : "Confidentiality & data protection"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: trattiamo i dati personali secondo la nostra Privacy Policy.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: personal information is handled per our Privacy Policy.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Trattiamo i dati personali in modo confidenziale e secondo la nostra Privacy Policy. Usando i Servizi acconsenti alla
                    raccolta, conservazione e uso dei dati come descritto nella Privacy Policy.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    We treat personal information as confidential and process personal data in accordance with our Privacy Policy. By
                    using the Services you consent to the collection, storage and use of your personal data as described in the Privacy
                    Policy.
                  </div>
                )}
              </details>
            </article>

            {/* 8. Liability */}
            <article id="liability" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                8. {isIt ? "Limitazione di responsabilità" : "Limitation of liability"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: forniamo guida, ma gli esiti dipendono spesso da terzi e non sono garantiti.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: guidance is provided but outcomes depending on third parties cannot be guaranteed.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Forniamo supporto ma non possiamo garantire esiti che dipendono da terzi (es. uffici pubblici/consolati). Nei limiti
                    di legge, Resinaro non risponde di perdite indirette o conseguenziali. Nulla esclude la responsabilità per morte o
                    lesioni personali da nostra negligenza o per frode.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    Resinaro provides guidance and support but cannot guarantee outcomes which depend on third parties, including
                    government departments and consular offices. To the fullest extent permitted by law, Resinaro will not be liable for
                    indirect, special or consequential losses arising from your use of the Services. Nothing in these Terms excludes
                    liability for death or personal injury caused by our negligence or for fraud.
                  </div>
                )}
              </details>
            </article>

            {/* 9. Complaints */}
            <article id="complaints" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                9. {isIt ? "Reclami & controversie" : "Complaints & disputes"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: scrivi a resinaro@proton.me — obiettivo di riscontro: 3 giorni lavorativi.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: contact resinaro@proton.me — acknowledgement target: 3 business days.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Se non sei soddisfatto, scrivi a resinaro@proton.me. Miriamo a dare riscontro entro tre giorni lavorativi e a
                    risolvere rapidamente. Se la controversia non si risolve informalmente, potrà essere avviata mediazione o azione
                    giudiziaria come previsto dai Termini.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    If you are unhappy with a part of our service contact resinaro@proton.me. We aim to acknowledge complaints within
                    three business days and to resolve them promptly. Where a dispute cannot be resolved informally the matter may be
                    referred to mediation or the courts as set out in these Terms.
                  </div>
                )}
              </details>
            </article>

            {/* 10. Changes */}
            <article id="changes" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                10. {isIt ? "Modifiche ai Termini" : "Changes to these Terms"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: pubblichiamo gli aggiornamenti in questa pagina; l’uso continuato vale come accettazione.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: we will post updates on this page; continued use after changes equals acceptance.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    Potremmo aggiornare i Termini; pubblicheremo la versione aggiornata in questa pagina e la relativa data. In caso di
                    modifiche sostanziali cercheremo di informarti; in alcuni casi potrebbe essere richiesta una nuova accettazione.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    We may update these Terms from time to time. We will post the revised Terms on this page and update the last updated
                    date accordingly. Where we make material changes we will attempt to notify users; in some cases re-acceptance may be
                    required.
                  </div>
                )}
              </details>
            </article>

            {/* 11. Governing law */}
            <article id="governing-law" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                11. {isIt ? "Legge applicabile" : "Governing law"}
              </h2>
              {isIt ? (
                <p className="text-gray-700 mb-2" lang="it">
                  In breve: legge d’Inghilterra e Galles.
                </p>
              ) : (
                <p className="text-gray-700 mb-2" lang="en">
                  Short summary: governed by the law of England and Wales.
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-green-800 underline">
                  {isIt ? "Leggi il testo completo" : "Read full text"}
                </summary>
                {isIt ? (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="it">
                    I presenti Termini sono regolati dalla legge inglese e gallese. Le controversie saranno devolute alla giurisdizione
                    esclusiva dei tribunali di Inghilterra e Galles, salvo diverse norme imperative.
                  </div>
                ) : (
                  <div className="mt-3 text-gray-700 leading-relaxed" lang="en">
                    These Terms are governed by the laws of England and Wales. Any dispute arising out of or in connection with these
                    Terms will be subject to the exclusive jurisdiction of the courts of England and Wales, save where mandatory laws
                    require otherwise.
                  </div>
                )}
              </details>
            </article>

            {/* 12. Contact */}
            <article id="contact" className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                12. {isIt ? "Contatti" : "Contact"}
              </h2>
              {isIt ? (
                <p className="text-gray-700" lang="it">
                  Per domande su questi Termini o sui nostri Servizi contatta:
                </p>
              ) : (
                <p className="text-gray-700" lang="en">
                  For questions about these Terms or our Services contact:
                </p>
              )}
              <div className="mt-3 text-gray-700">
                <div>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:resinaro@proton.me" className="text-green-800 underline">
                    resinaro@proton.me
                  </a>
                </div>
              </div>
            </article>

            <div className="text-sm text-gray-500 mt-4">
              {isIt ? (
                <p lang="it">
                  Questi Termini non incidono sui tuoi diritti legali. Se una clausola è illecita o inapplicabile, sarà limitata o
                  rimossa al minimo necessario e il resto dei Termini rimarrà valido.
                </p>
              ) : (
                <p lang="en">
                  These Terms do not affect your statutory rights. If any provision of these Terms is found unlawful or unenforceable,
                  that provision will be limited or removed to the minimum extent necessary and the remainder of the Terms will remain in
                  full force.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
