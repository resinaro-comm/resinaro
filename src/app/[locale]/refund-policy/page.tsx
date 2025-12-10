// src/app/[locale]/refund-policy/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";

export const metadata = {
  title: "Refund & Credit Policy | Resinaro",
  description:
    "How refunds, credits and cancellations work at Resinaro, including 14-day cooling-off rights, timelines and when full refunds apply.",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: { canonical: "/refund-policy" },
};

type UI = ReturnType<typeof t>;

function t(locale: Locale) {
  const en = {
    pageTitle: "Refund & Credit Policy",
    lastUpdated: "Last updated: 9 December 2025",
    tldrTitle: "Quick summary",
    tldrBullets: [
      "Our service fee covers the full agreed service. We usually start immediately after payment.",
      "As a general rule, we don’t offer cash refunds for voluntary cancellations. Instead, we issue a Resinaro credit by default, valid for 12 months and usable on any service (always subject to your legal rights).",
      "You have a 14-day cooling-off right for distance/off-premises purchases. If you ask us to start now and we fully perform the service within that period, the right to cancel ends. If you cancel before completion, we’ll provide credit for the part not supplied (you can request any legally required cash refund instead).",
      "Where the law requires a refund (e.g., duplicate/unauthorised charge or failure to supply), we will refund in full.",
    ],
    s1Title: "1. Scope",
    s1P:
      "This policy applies to payments made for Resinaro services ordered online or by direct agreement. It covers support such as document checks, booking assistance and similar services. It does not cover voluntary donations or third-party official fees.",
    s2Title: "2. Immediate start & your 14-day cooling-off right",
    s2P1:
      "We typically begin work immediately after payment so we can act quickly. On our forms, we ask you to confirm that you want us to start now and acknowledge:",
    s2List: [
      "You have a 14-day cooling-off period from purchase for distance/off-premises contracts.",
      "If you cancel during that period before the service is fully performed, we will provide a proportionate remedy for the part not yet supplied (see Section 4).",
      "Once the service is fully performed within the cooling-off period, you lose the right to cancel.",
    ],
    s2Note:
      "This reflects the UK Consumer Contracts Regulations, which allow performance to start within 14 days if you request it and acknowledge losing the right to cancel once fully performed.",
    s3Title: "3. Our default remedy: credit (not cash)",
    s3P:
      "As a general rule, we do not offer cash refunds for voluntary cancellations. Instead we issue a Resinaro account credit, valid for 12 months, redeemable against any of our services (always subject to your legal rights). Credits are not redeemable for cash (except where the law requires a cash refund). If you’re unable to use the credit within 12 months, contact us before it expires and we’ll do our best to extend it where reasonable.",
    s4Title: "4. If you cancel",
    s4List: [
      "Before we start — we’ll issue a 12-month credit for the full amount. (You may request any legally required cash refund.)",
      "After we start but before completion (within 14 days) — we’ll issue a proportionate credit for the part not yet supplied. (You may request any legally required cash refund for the unused portion.)",
      "After the service is completed — no cancellation right applies and no refund/credit is due unless required by law or we choose to offer goodwill credit.",
    ],
    s4Note:
      "We usually calculate this based on the time and work already carried out (for example, document checks or booking attempts already made).",
    s5Title: "5. When we refund in full (statutory)",
    s5List: [
      "Duplicate payment or processing error by us or our provider;",
      "Unauthorised transaction (fraud);",
      "Failure to deliver the service as agreed, where we cannot reasonably remedy the issue.",
    ],
    s6Title: "6. Third-party fees",
    s6P:
      "Fees charged by third parties (for example, official consular fees) are non-refundable where the third party will not refund them. We’ll assist you in contacting the third party where possible.",
    s7Title: "7. Common non-refundable situations",
    s7List: [
      "Services that have been fully completed as agreed.",
      "Time already spent reviewing documents, preparing submissions or attempting bookings before a cancellation.",
      "No-shows for booked appointments where notice wasn’t given under the booking terms.",
      "Third-party fees that are non-refundable by the third party.",
    ],
    s8Title: "8. How to request a credit or statutory refund",
    s8Lead: "Email",
    s8AfterEmail: "or use our",
    s8FormText: "contact form",
    s8Include: "and include:",
    s8List: [
      "Name, date and amount paid, order/transaction ID;",
      "Reason and any evidence (e.g., screenshots, bank statement).",
    ],
    s8PrivacyBeforeLink:
      "We’ll handle any evidence you send (like screenshots or statements) in line with our",
    s8PrivacyLinkText: "Privacy Policy",
    s8PrivacyAfterLink: ".",
    s9Title: "9. Processing timeline",
    s9P:
      "We aim to acknowledge within 3 business days. Approved credits are applied immediately to your account; approved refunds (where legally required) are sent to the original payment method where possible and typically appear within 5–10 business days, depending on the provider and your bank.",
    s10Title: "10. Chargebacks and disputes",
    s10P:
      "If you raise a chargeback, we’ll provide evidence to the issuer where we believe the charge was valid. Please contact us first so we can resolve issues quickly.",
    s11Title: "11. Your legal rights",
    s11P:
      "This policy does not affect your statutory rights under UK consumer law. In particular, the Consumer Contracts Regulations provide a 14-day cancellation right for distance/off-premises services, which can be lost once a service is fully performed after you asked us to start within the 14 days; and any cancellation charges must reflect only actual/proportionate costs. Where the law requires a cash refund, we will provide it.",
    ctaTitle: "Need help now?",
    ctaP:
      "Contact our support team with your order details and we will respond within 3 business days.",
    ctaContact: "Contact form",
    ctaEmail: "Email support",
  } as const;

  const it = {
    pageTitle: "Politica di Rimborso e Credito",
    lastUpdated: "Ultimo aggiornamento: 9 dicembre 2025",
    tldrTitle: "Riassunto veloce",
    tldrBullets: [
      "La nostra tariffa di servizio copre l’intero servizio concordato. Di solito iniziamo subito dopo il pagamento.",
      "Di regola non offriamo rimborsi in denaro per annullamenti volontari. In caso di annullamento forniamo un credito Resinaro, valido 12 mesi e utilizzabile su qualsiasi servizio (sempre nel rispetto dei tuoi diritti di legge).",
      "Hai un diritto di recesso di 14 giorni per acquisti a distanza/fuori dai locali. Se chiedi di iniziare subito e completiamo il servizio entro tale periodo, il diritto di recesso termina. Se annulli prima del completamento, riconosceremo un credito per la parte non ancora fornita (puoi richiedere l’eventuale rimborso in denaro previsto dalla legge).",
      "Quando la legge lo richiede (ad es. addebito duplicato/non autorizzato o mancata fornitura), effettueremo un rimborso totale.",
    ],
    s1Title: "1. Ambito",
    s1P:
      "Questa politica si applica ai pagamenti per servizi Resinaro ordinati online o tramite accordo diretto. Copre attività come verifica documenti, assistenza prenotazioni e servizi simili. Non copre donazioni volontarie o tariffe ufficiali di terzi.",
    s2Title: "2. Avvio immediato e diritto di recesso di 14 giorni",
    s2P1:
      "In genere iniziamo il lavoro subito dopo il pagamento per agire con rapidità. Nei moduli chiediamo di confermare che desideri che iniziamo ora e di prendere atto che:",
    s2List: [
      "Hai 14 giorni di recesso dall’acquisto per contratti a distanza/fuori dai locali.",
      "Se annulli in quel periodo prima che il servizio sia completato, forniremo un rimedio proporzionato per la parte non ancora erogata (vedi Sezione 4).",
      "Se il servizio viene completato entro il periodo di 14 giorni, il diritto di recesso decade.",
    ],
    s2Note:
      "Ciò riflette i Consumer Contracts Regulations del Regno Unito, che consentono di iniziare l’esecuzione entro 14 giorni se lo richiedi e accetti la perdita del recesso una volta completato il servizio.",
    s3Title: "3. Rimedio predefinito: credito (non rimborso in denaro)",
    s3P:
      "Di regola non offriamo rimborsi in denaro per annullamenti volontari. Invece emettiamo un credito Resinaro, valido 12 mesi, utilizzabile per qualsiasi nostro servizio (sempre nel rispetto dei tuoi diritti di legge). I crediti non sono convertibili in denaro (salvo obblighi di legge). Se non riesci a usare il credito entro 12 mesi, contattaci prima della scadenza e faremo il possibile per prorogarlo quando è ragionevole.",
    s4Title: "4. Se annulli",
    s4List: [
      "Prima dell’avvio — emetteremo un credito di 12 mesi per l’intero importo. (Puoi richiedere l’eventuale rimborso in denaro previsto dalla legge.)",
      "Dopo l’avvio ma prima del completamento (entro 14 giorni) — emetteremo un credito proporzionato per la parte non ancora fornita. (Puoi richiedere l’eventuale rimborso in denaro per la quota non utilizzata ove previsto.)",
      "Dopo il completamento del servizio — non si applica alcun diritto di annullamento e non è dovuto rimborso/credito salvo obblighi di legge o credito di cortesia a nostra discrezione.",
    ],
    s4Note:
      "Di solito calcoliamo questa parte in base al tempo e al lavoro già svolti (ad esempio verifiche dei documenti o tentativi di prenotazione già effettuati).",
    s5Title: "5. Quando rimborsiamo integralmente (per legge)",
    s5List: [
      "Pagamento duplicato o errore di elaborazione nostro o del provider;",
      "Transazione non autorizzata (frode);",
      "Mancata erogazione del servizio come concordato, quando non sia ragionevolmente possibile rimediare.",
    ],
    s6Title: "6. Tariffe di terzi",
    s6P:
      "Le tariffe applicate da terzi (ad es. tasse consolari) non sono rimborsabili quando il terzo non le rimborsa. Ti aiuteremo a contattare il terzo ove possibile.",
    s7Title: "7. Casi comuni non rimborsabili",
    s7List: [
      "Servizi completati come concordato.",
      "Tempo già impiegato per revisione documenti, preparazione pratiche o tentativi di prenotazione prima dell’annullamento.",
      "Mancata presentazione agli appuntamenti prenotati senza il preavviso previsto dai termini.",
      "Tariffe di terzi non rimborsabili dal terzo.",
    ],
    s8Title: "8. Come richiedere un credito o un rimborso previsto dalla legge",
    s8Lead: "Scrivi a",
    s8AfterEmail: "oppure usa il nostro",
    s8FormText: "modulo di contatto",
    s8Include: "e indica:",
    s8List: [
      "Nome, data e importo pagato, ID ordine/transazione;",
      "Motivo ed eventuali prove (es. screenshot, estratto conto).",
    ],
    s8PrivacyBeforeLink:
      "Tratteremo eventuali prove che ci invii (es. screenshot, estratti conto) in linea con la nostra",
    s8PrivacyLinkText: "Informativa sulla Privacy",
    s8PrivacyAfterLink: ".",
    s9Title: "9. Tempi di elaborazione",
    s9P:
      "Miriamo a dare riscontro entro 3 giorni lavorativi. I crediti approvati sono applicati subito al tuo account; i rimborsi approvati (quando previsti dalla legge) sono inviati, se possibile, al metodo di pagamento originale e in genere compaiono entro 5–10 giorni lavorativi, a seconda del provider e della banca.",
    s10Title: "10. Chargeback e controversie",
    s10P:
      "Se avvii un chargeback, forniremo prove all’emittente quando riteniamo l’addebito valido. Contattaci prima: risolviamo più velocemente.",
    s11Title: "11. I tuoi diritti legali",
    s11P:
      "Questa politica non pregiudica i tuoi diritti previsti dalla legge dei consumatori del Regno Unito. In particolare, i Consumer Contracts Regulations prevedono 14 giorni di recesso per servizi a distanza/fuori dai locali, che può andare perso una volta completato il servizio dopo tua richiesta di avvio entro i 14 giorni; eventuali costi di annullamento devono riflettere solo costi effettivi/proporzionati. Quando la legge richiede un rimborso in denaro, lo forniremo.",
    ctaTitle: "Ti serve aiuto subito?",
    ctaP:
      "Contatta il nostro supporto indicando i dettagli dell’ordine: risponderemo entro 3 giorni lavorativi.",
    ctaContact: "Modulo di contatto",
    ctaEmail: "Supporto email",
  } as const;

  return locale === "it" ? it : en;
}

export default function RefundPolicy({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const ui: UI = t(locale);

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          {ui.pageTitle}
        </h1>
        <p className="mb-6 text-sm text-gray-600">{ui.lastUpdated}</p>

        {/* TL;DR summary box */}
        <div className="bg-white border border-amber-100 p-4 rounded-md shadow-sm mb-8">
          <h2 className="font-semibold text-green-900 mb-2">
            {ui.tldrTitle}
          </h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {ui.tldrBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 1. Scope */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s1Title}</h2>
          <p className="text-gray-700">{ui.s1P}</p>
        </section>

        {/* 2. Immediate start & cooling-off */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s2Title}</h2>
          <p className="text-gray-700 mb-2">{ui.s2P1}</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {ui.s2List.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-2">{ui.s2Note}</p>
        </section>

        {/* 3. Default remedy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s3Title}</h2>
          <p className="text-gray-700">{ui.s3P}</p>
        </section>

        {/* 4. If you cancel */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s4Title}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {ui.s4List.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-2">{ui.s4Note}</p>
        </section>

        {/* 5. Statutory full refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s5Title}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {ui.s5List.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </section>

        {/* 6. Third-party fees */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s6Title}</h2>
          <p className="text-gray-700">{ui.s6P}</p>
        </section>

        {/* 7. Non-refundable situations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s7Title}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {ui.s7List.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </section>

        {/* 8. How to request */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s8Title}</h2>
          <p className="text-gray-700 mb-2">
            {ui.s8Lead}{" "}
            <a
              href="mailto:resinaro@proton.me"
              className="underline text-green-900"
            >
              resinaro@proton.me
            </a>{" "}
            {ui.s8AfterEmail}{" "}
            <Link
              href={p(locale, "/contact")}
              className="underline text-green-900"
            >
              {ui.s8FormText}
            </Link>{" "}
            {ui.s8Include}
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {ui.s8List.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-2">
            {ui.s8PrivacyBeforeLink}{" "}
            <Link
              href={p(locale, "/privacy-policy")}
              className="underline text-green-900"
            >
              {ui.s8PrivacyLinkText}
            </Link>
            {ui.s8PrivacyAfterLink}
          </p>
        </section>

        {/* 9. Processing timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s9Title}</h2>
          <p className="text-gray-700 mb-2">{ui.s9P}</p>
        </section>

        {/* 10. Chargebacks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s10Title}</h2>
          <p className="text-gray-700">{ui.s10P}</p>
        </section>

        {/* 11. Legal rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{ui.s11Title}</h2>
          <p className="text-gray-700">{ui.s11P}</p>
        </section>

        {/* CTA */}
        <section className="mt-6">
          <div className="bg-white border-l-4 border-green-900 p-4 rounded-md">
            <h3 className="font-semibold text-green-900 mb-2">
              {ui.ctaTitle}
            </h3>
            <p className="text-gray-700 mb-3">{ui.ctaP}</p>
            <div className="flex gap-3">
              <Link
                href={p(locale, "/contact")}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded"
              >
                {ui.ctaContact}
              </Link>
              <a
                href="mailto:resinaro@proton.me"
                className="inline-block bg-green-900 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded"
              >
                {ui.ctaEmail}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
