// src/components/community/monzo/MonzoBankingStarterKit.tsx
"use client";

import AmazonLink from "@/components/affiliate/AmazonLink";

type AffiliateProduct = {
  id: string;
  title: string;
  bestFor: string;
  bullets: string[];
  notes?: string[];
  /** Amazon ASIN or full Amazon URL */
  href: string;
};

const products: AffiliateProduct[] = [
  {
    id: "rfid-card-holder",
    title: "Slim RFID card holder",
    bestFor: "Keeping your UK debit cards together and easy to reach.",
    bullets: [
      "Helps keep Monzo and other cards in one place instead of loose in pockets.",
      "Useful when you switch from cash to contactless payments in the UK.",
      "Fits easily in a small bag or coat pocket when commuting.",
    ],
    notes: ["Check that it fits standard UK debit card size."],
    href: "B07M8M5WKQ", // POWR RFID wallet
  },
  {
    id: "document-wallet",
    title: "A4 document wallet / organiser",
    bestFor: "Storing bank letters, payslips and proof-of-address documents.",
    bullets: [
      "Keeps all your UK paperwork in one place (bank, HMRC, landlord, consulate).",
      "Helps you quickly find a recent letter when an app asks for proof of address.",
      "Can be re-used for consulate appointments and translations.",
    ],
    notes: ["Look for wallets with multiple labelled sections."],
    href: "B0B2RPLS45", // JIKIOU plastic envelopes
  },
  {
    id: "phone-stand",
    title: "Adjustable phone stand",
    bestFor: "Stabilising your phone during selfie videos and ID photos.",
    bullets: [
      "Reduces shaky video when recording KYC selfies for Monzo or other apps.",
      "Keeps both hands free to hold your passport or BRP at the right angle.",
      "Also handy for video calls with family or support services.",
    ],
    notes: ["Choose a stable base that works on your desk or table."],
    href: "B0FPC3G9RN", // Lamicall phone stand
  },
  {
    id: "power-bank",
    title: "Compact power bank",
    bestFor: "Avoiding low battery during signup and document upload flows.",
    bullets: [
      "Helps when you're travelling or waiting in public spaces while completing checks.",
      "Useful beyond banking: maps, tickets, and consulate emails on the move.",
    ],
    notes: ["Check airline cabin rules if you travel often."],
    href: "B0D4MDHB21", // Anker 10000mAh power bank
  },
];

function AmazonDisclaimer() {
  return (
    <p className="mt-2 text-xs text-gray-500">
      As an Amazon Associate, Resinaro earns from qualifying purchases. This
      does not change the price you pay.
    </p>
  );
}

function AffiliateProductCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-green-900">
          Best for: {product.bestFor}
        </p>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
          {product.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {product.notes && product.notes.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            {product.notes.map((note) => (
              <p key={note}>• {note}</p>
            ))}
          </div>
        )}
      </div>

      <AmazonLink
        href={product.href}
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-amber-700"
      >
        Check on Amazon
      </AmazonLink>
    </div>
  );
}

export default function MonzoBankingStarterKit() {
  return (
    <section
      className="mt-10"
      aria-labelledby="banking-starter-kit-title"
    >
      <h2
        id="banking-starter-kit-title"
        className="text-2xl font-bold text-green-900 mb-3"
      >
        Optional banking starter kit for migrants in the UK
      </h2>
      <p className="text-sm md:text-base text-gray-700">
        You don&apos;t need special tools to open Monzo, but a few simple accessories
        make UK banking and paperwork much less stressful. These items are useful
        for any bank or consulate appointment – not just Monzo – and help you
        keep cards, letters and ID checks under control.
      </p>
      <AmazonDisclaimer />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <AffiliateProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
