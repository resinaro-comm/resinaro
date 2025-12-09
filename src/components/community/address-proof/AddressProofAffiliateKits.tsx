// src/components/community/address-proof/AddressProofAffiliateKits.tsx
"use client";

import AmazonLink from "@/components/affiliate/AmazonLink";
import type { Locale } from "@/lib/localePath";

const AMAZON_TAG = "resinaroamzn-21";

type KitProduct = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  note?: string;
  href: string;
};

type Copy = {
  sectionTitle: string;
  intro1: string;
  intro2: string;
  paperworkHeading: string;
  paperworkIntro: string;
  homeKitHeading: string;
  homeKitIntro: string;
  checkOnAmazonLabel: string;
  disclaimer: string;
};

const paperworkKitProductsEn: KitProduct[] = [
  {
    id: "a4-wallet",
    title: "A4 document wallet / folder",
    subtitle: "Best for keeping bank, council and consulate letters together.",
    bullets: [
      "Keeps all your proof-of-address letters in one place.",
      "Easy to grab before bank, GP or consulate appointments.",
      "Helps avoid losing original letters in your luggage or flat share.",
    ],
    note:
      "Usually a simple plastic or fabric wallet that fits A4 sheets. Look for something with a snap or zip so papers don’t fall out.",
    href: "https://www.amazon.co.uk/dp/B0C79VCHNT",
  },
  {
    id: "a4-sleeves",
    title: "A4 plastic sleeves / pockets",
    subtitle: "Best for protecting original letters from damage.",
    bullets: [
      "Keeps council and bank letters clean, flat and readable.",
      "Good if you carry documents in a backpack or handbag.",
      "Helps when scanning, because pages stay flat and aligned.",
    ],
    note:
      "Often sold in packs; you won’t use all of them, but it’s cheap peace of mind.",
    href: "https://www.amazon.co.uk/dp/B0DZ6CD16H",
  },
  {
    id: "label-stickers",
    title: "Simple label stickers",
    subtitle:
      "Best for labelling folders by service (bank, GP, DVLA, consulate).",
    bullets: [
      "Lets you create one folder per service or per year.",
      "Makes it faster to find documents before appointments.",
      "Useful if more than one person’s paperwork is in the same drawer.",
    ],
    note: "You don’t need anything fancy; even basic white labels are enough.",
    href: "https://www.amazon.co.uk/dp/B079N4BZS3",
  },
  {
    id: "ring-binder",
    title: "Ring binder for long-term paperwork",
    subtitle: "Best for storing older letters you might still need later.",
    bullets: [
      "Keeps older council, HMRC and employer letters organised.",
      "Helps you build a history of address proofs over time.",
      "Nice once you’ve been in the UK for more than a year.",
    ],
    note: "Check that it fits standard A4 punched pockets or sleeves.",
    href: "https://www.amazon.co.uk/dp/B08XZJWTYM",
  },
];

const paperworkKitProductsIt: KitProduct[] = [
  {
    id: "a4-wallet-it",
    title: "Cartellina portadocumenti A4",
    subtitle:
      "Ideale per tenere insieme lettere di banca, council e consolato.",
    bullets: [
      "Tieni tutte le lettere di prova di indirizzo nello stesso posto.",
      "Facile da prendere al volo prima di banca, GP o consolato.",
      "Aiuta a non perdere gli originali in valigia o in stanza condivisa.",
    ],
    note:
      "Di solito è una cartellina in plastica o tessuto per fogli A4. Meglio se ha bottone o zip così i fogli non scappano.",
    href: "https://www.amazon.co.uk/dp/B0C79VCHNT",
  },
  {
    id: "a4-sleeves-it",
    title: "Buste trasparenti A4 forate",
    subtitle: "Ideali per proteggere le lettere originali da danni e pieghe.",
    bullets: [
      "Mantengono pulite e leggibili le lettere di council e banca.",
      "Comode se porti i documenti in zaino o borsa.",
      "Aiutano durante la scansione perché le pagine restano piatte.",
    ],
    note:
      "Spesso sono in confezioni grandi: non le userai tutte, ma è una piccola spesa che dà molta tranquillità.",
    href: "https://www.amazon.co.uk/dp/B0DZ6CD16H",
  },
  {
    id: "label-stickers-it",
    title: "Etichette adesive semplici",
    subtitle:
      "Perfette per etichettare le cartelline per servizio (banca, GP, DVLA, consolato).",
    bullets: [
      "Ti permette di creare una cartellina per ogni servizio o per anno.",
      "Rende più veloce trovare i documenti prima degli appuntamenti.",
      "Utile se più persone usano lo stesso cassetto o scaffale.",
    ],
    note:
      "Non serve nulla di sofisticato: anche etichette bianche basiche vanno benissimo.",
    href: "https://www.amazon.co.uk/dp/B079N4BZS3",
  },
  {
    id: "ring-binder-it",
    title: "Raccoglitore ad anelli A4",
    subtitle: "Ottimo per archiviare le lettere più vecchie ma ancora utili.",
    bullets: [
      "Tiene in ordine vecchie lettere di council, HMRC e datore di lavoro.",
      "Ti aiuta a costruire uno storico di prove di indirizzo nel tempo.",
      "Molto comodo dopo il primo anno nel Regno Unito.",
    ],
    note: "Controlla che sia adatto a normali buste forate A4.",
    href: "https://www.amazon.co.uk/dp/B08XZJWTYM",
  },
];

const homeOfficeKitProductsEn: KitProduct[] = [
  {
    id: "phone-stand",
    title: "Adjustable phone stand",
    subtitle:
      "Best for taking clear photos of documents for online uploads.",
    bullets: [
      "Holds your phone steady above letters and ID documents.",
      "Reduces blur when apps ask for photos of proof-of-address.",
      "Helpful during video calls or KYC checks where your ID must be visible.",
    ],
    note: "Look for a stand that can tilt and adjust height.",
    href: "https://www.amazon.co.uk/dp/B087QBTM6R",
  },
  {
    id: "desk-lamp",
    title: "Desk lamp / small ring light",
    subtitle: "Best for avoiding shadows and glare on scans and photos.",
    bullets: [
      "Provides consistent light when taking photos at night.",
      "Helps apps recognise your face and documents during KYC.",
      "Improves readability of uploaded letters and contracts.",
    ],
    note:
      "You don’t need studio gear – a basic lamp near your desk is enough.",
    href: "https://www.amazon.co.uk/dp/B0D1DLY4H4",
  },
  {
    id: "printer-scanner",
    title: "Compact printer / scanner",
    subtitle:
      "Best for families or couples who often scan letters for banks and consulates.",
    bullets: [
      "Creates clean PDFs of council, HMRC and bank letters.",
      "Makes it easier to send documents to multiple services without damaging originals.",
      "Useful if you work from home and handle a lot of paperwork.",
    ],
    note: "Check reviews for how easy the app/software is to use.",
    href: "https://www.amazon.co.uk/dp/B0DG5SWB17",
  },
];

const homeOfficeKitProductsIt: KitProduct[] = [
  {
    id: "phone-stand-it",
    title: "Supporto regolabile per smartphone",
    subtitle:
      "Perfetto per fare foto nitide dei documenti da caricare online.",
    bullets: [
      "Tiene fermo il telefono sopra lettere e documenti d’identità.",
      "Riduce il rischio di foto mosse quando le app chiedono la prova di indirizzo.",
      "Utile anche per videochiamate o controlli KYC dove devi mostrare il documento.",
    ],
    note: "Meglio se è inclinabile e regolabile in altezza.",
    href: "https://www.amazon.co.uk/dp/B087QBTM6R",
  },
  {
    id: "desk-lamp-it",
    title: "Lampada da scrivania / piccola ring light",
    subtitle:
      "Ideale per evitare ombre e riflessi su scansioni e fotografie.",
    bullets: [
      "Dà una luce uniforme quando scatti foto la sera.",
      "Aiuta le app a riconoscere volto e documenti durante i controlli.",
      "Migliora la leggibilità di lettere e contratti caricati online.",
    ],
    note:
      "Non serve attrezzatura da studio: basta una lampada base vicino alla scrivania.",
    href: "https://www.amazon.co.uk/dp/B0D1DLY4H4",
  },
  {
    id: "printer-scanner-it",
    title: "Stampante / scanner compatta",
    subtitle:
      "Comoda per famiglie o coppie che scansionano spesso documenti per banca e consolato.",
    bullets: [
      "Crea PDF puliti di lettere di council, HMRC e banca.",
      "Ti permette di inviare i documenti a più servizi senza rovinare gli originali.",
      "Utile se lavori da casa e gestisci molta burocrazia.",
    ],
    note: "Controlla nelle recensioni che l’app/software sia semplice da usare.",
    href: "https://www.amazon.co.uk/dp/B0DG5SWB17",
  },
];

function getCopy(locale: Locale): Copy {
  if (locale === "it") {
    return {
      sectionTitle: "Mini kit per scansioni e organizzazione (opzionale)",
      intro1:
        "Non serve spendere tanto: 2–3 strumenti semplici rendono molto più facile tenere in ordine la prova di indirizzo, soprattutto in stanze in condivisione o se viaggi spesso tra Italia e UK.",
      intro2:
        "Queste sono idee opzionali: scegli solo ciò che ti semplifica davvero la vita.",
      paperworkHeading: "Kit organizzazione documenti",
      paperworkIntro:
        "Un piccolo set di cartelline e buste evita che le lettere importanti finiscano sparse ovunque. Utile quando stai gestendo banca, council, GP e consolato allo stesso tempo.",
      homeKitHeading: "Kit scansioni & foto da casa",
      homeKitIntro:
        "Una buona luce e un supporto per il telefono migliorano subito la qualità delle foto dei documenti. Meno rifiuti per “documento illeggibile” nelle app di banca o sui portali ufficiali.",
      checkOnAmazonLabel: "Vedi su Amazon",
      disclaimer:
        "Come affiliato Amazon, Resinaro guadagna da acquisti idonei. Il prezzo per te non cambia e ci aiuta a mantenere queste guide gratuite e aggiornate.",
    };
  }

  return {
    sectionTitle: "Mini kits for scanning & organisation (optional)",
    intro1:
      "You don’t need to spend a lot, but 2–3 small tools can make it much easier to keep clean proof-of-address documents – especially in flat shares or if you travel back and forth.",
    intro2:
      "These are optional ideas only. Pick what genuinely makes your life easier, not what looks nice in a drawer.",
    paperworkHeading: "Paperwork organiser kit",
    paperworkIntro:
      "A small set of folders and pockets stops your documents turning into chaos. Very handy if you share a flat or deal with multiple services (bank, council, GP, consulate) at the same time.",
    homeKitHeading: "Home scanning & photo kit",
    homeKitIntro:
      "Decent light and a phone stand instantly upgrade your document photos. That means fewer rejections for “unreadable” uploads in bank apps or official portals.",
    checkOnAmazonLabel: "Check on Amazon",
    disclaimer:
      "As an Amazon Associate, Resinaro earns from qualifying purchases. This does not change the price you pay and helps us keep these guides free and up to date.",
  };
}

function getProducts(locale: Locale) {
  if (locale === "it") {
    return {
      paperwork: paperworkKitProductsIt,
      home: homeOfficeKitProductsIt,
    };
  }

  return {
    paperwork: paperworkKitProductsEn,
    home: homeOfficeKitProductsEn,
  };
}

export function AmazonDisclaimer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <p className="mt-3 text-[11px] leading-snug text-gray-500">
      {copy.disclaimer}
    </p>
  );
}

export default function AddressProofAffiliateKits({
  locale,
}: {
  locale: Locale;
}) {
  const copy = getCopy(locale);
  const { paperwork, home } = getProducts(locale);

  return (
    <section className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
      <header className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
          {copy.sectionTitle}
        </h2>
        <p className="text-sm text-gray-700">{copy.intro1}</p>
        <p className="mt-1 text-sm text-gray-700">{copy.intro2}</p>
        <AmazonDisclaimer locale={locale} />
      </header>

      <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm">
        {/* Paperwork organiser kit */}
        <article className="border rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-emerald-900 mb-1">
            {copy.paperworkHeading}
          </h3>
          <p className="text-sm text-gray-700 mb-3">{copy.paperworkIntro}</p>

          <div className="space-y-3">
            {paperwork.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 flex flex-col justify-between bg-[#FBF9F6]"
              >
                <div>
                  <p className="font-semibold text-emerald-900">
                    {product.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    {product.subtitle}
                  </p>
                  <ul className="mt-2 list-disc pl-4 text-xs text-gray-700 space-y-1">
                    {product.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {product.note && (
                    <p className="mt-2 text-[11px] text-gray-500">
                      {product.note}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <AmazonLink
                    href={product.href}
                    tag={AMAZON_TAG}
                    className="inline-flex text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                  >
                    {copy.checkOnAmazonLabel}
                  </AmazonLink>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Home scanning & photo kit */}
        <article className="border rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-emerald-900 mb-1">
            {copy.homeKitHeading}
          </h3>
          <p className="text-sm text-gray-700 mb-3">{copy.homeKitIntro}</p>

          <div className="space-y-3">
            {home.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 flex flex-col justify-between bg-[#FBF9F6]"
              >
                <div>
                  <p className="font-semibold text-emerald-900">
                    {product.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    {product.subtitle}
                  </p>
                  <ul className="mt-2 list-disc pl-4 text-xs text-gray-700 space-y-1">
                    {product.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {product.note && (
                    <p className="mt-2 text-[11px] text-gray-500">
                      {product.note}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <AmazonLink
                    href={product.href}
                    tag={AMAZON_TAG}
                    className="inline-flex text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                  >
                    {copy.checkOnAmazonLabel}
                  </AmazonLink>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
