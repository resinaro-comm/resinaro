// app/community/uk-renting-for-italians-2025/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import Image from "next/image";

/**
 * UK Renting for Italians — 2025 Guide
 * Goal: win vs competitors by being clearer, deeper, and more actionable.
 * Audience: Italians in the UK with average English — use short sentences and plain words.
 */

export const metadata = {
  title:
    "UK Renting for Italians — 2025 Guide: Right to Rent, Referencing, Deposits, Templates",
  description:
    "Simple step-by-step renting guide for Italians in the UK: Right to Rent for EU citizens, referencing without a UK credit score, guarantors, deposits and protection schemes, viewing checklists, scam warnings, and email templates in easy English.",
  alternates: {
    canonical: "/community/uk-renting-for-italians-2025",
  },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // =========================================================
  // JSON-LD: FAQ
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can Italians rent in the UK without a UK credit score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. You can still pass referencing using alternatives: a larger deposit, paying rent in advance (for example 3 months), a UK guarantor, or employer reference. Many agents accept these options when you explain your situation clearly."
        }
      },
      {
        "@type": "Question",
        "name": "What is Right to Rent for EU/Italian citizens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Landlords must check that every adult tenant can live in the UK. Italians usually prove this with a share code for immigration status, or valid visa evidence. The landlord checks your documents and keeps a copy. It is a legal requirement for them."
        }
      },
      {
        "@type": "Question",
        "name": "How big is a typical deposit and where is it kept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "For Assured Shorthold Tenancy, the maximum standard deposit is usually up to 5 weeks’ rent (6 weeks for high-rent). The landlord must protect it in a government-approved scheme and give you the prescribed information. Keep the certificate and scheme reference safe."
        }
      },
      {
        "@type": "Question",
        "name": "Can I negotiate rent or contract terms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. You can politely ask for a small reduction, an extra clause (for example, professional clean not required if the property is cleaned to the same standard), or small repairs before move-in. Put all agreements in writing before you sign."
        }
      },
      {
        "@type": "Question",
        "name": "What if the landlord refuses repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Report the problem in writing with photos. Give a reasonable time to fix. If ignored, escalate: letting agent, local council (Environmental Health), or deposit scheme at end of tenancy if deductions are unfair. Keep all messages and photos as evidence."
        }
      },
      {
        "@type": "Question",
        "name": "How can I avoid rental scams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Never pay money before a viewing or without a proper contract. Use trusted portals or agents. Be careful with social media ads and WhatsApp-only landlords. If the price is far below market, be suspicious. Always check that the agent is registered and the property exists."
        }
      }
    ]
  };

  // =========================================================
  // JSON-LD: HowTo (high-level renting process)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Rent a home in the UK as an Italian citizen (2025)",
    "totalTime": "P21D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": "3000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Define your budget",
        "text": "Net income × 0.35 is a safe rent target. Add council tax and utilities.",
        "image": "/images/renting/budget.png"
      },
      {
        "@type": "HowToStep",
        "name": "Collect documents",
        "text": "Passport/ID, immigration share code or visa, UK contact details, job offer or employer letter, references.",
        "image": "/images/renting/docs.png"
      },
      {
        "@type": "HowToStep",
        "name": "Search and book viewings",
        "text": "Use trusted portals and registered agents. Prepare your questions and checklist.",
        "image": "/images/renting/viewings.png"
      },
      {
        "@type": "HowToStep",
        "name": "Pass referencing",
        "text": "Provide income evidence. If new in the UK, offer alternatives: rent in advance, larger deposit, or guarantor.",
        "image": "/images/renting/referencing.png"
      },
      {
        "@type": "HowToStep",
        "name": "Sign the tenancy and pay",
        "text": "Read the contract carefully. Pay deposit + first month only after receiving the signed agreement and move-in date.",
        "image": "/images/renting/contract.png"
      },
      {
        "@type": "HowToStep",
        "name": "Inventory and check-in",
        "text": "Take photos of every room and meter readings. Send notes within the agent’s deadline.",
        "image": "/images/renting/inventory.png"
      },
      {
        "@type": "HowToStep",
        "name": "Set up bills",
        "text": "Council tax, gas, electricity, water, broadband. Share meter photos on day one.",
        "image": "/images/renting/bills.png"
      }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
           ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/renting-uk-italians-hero.png"
            alt="UK renting guide for Italians: simple steps and templates"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              HOUSING
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              UK Renting for Italians — 2025: Right to Rent, Referencing &
              Deposits (Easy English)
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
           ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and how to use it)
          </h2>
          <p className="mb-3">
            Renting in the UK can feel complex, especially if your English is
            average and you do not have UK history yet. This guide explains each
            step in simple words. We also give you templates and checklists you
            can copy and send. Follow the order below and you will move faster,
            avoid scams, and protect your money.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Short sentences, simple vocabulary, important words in bold.</li>
            <li>Real actions: what to say, what to show, how to reply.</li>
            <li>Printable checklists and email templates you can use today.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
           ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#budget">1) Budget: how much can you pay?</a></li>
            <li><a className="underline text-green-900" href="#areas">2) Areas & types of housing</a></li>
            <li><a className="underline text-green-900" href="#documents">3) Documents to prepare</a></li>
            <li><a className="underline text-green-900" href="#right-to-rent">4) Right to Rent (EU/Italian)</a></li>
            <li><a className="underline text-green-900" href="#search">5) Search & book viewings</a></li>
            <li><a className="underline text-green-900" href="#viewing-checklist">6) Viewing checklist (printable)</a></li>
            <li><a className="underline text-green-900" href="#referencing">7) Referencing without UK credit</a></li>
            <li><a className="underline text-green-900" href="#guarantor">8) Guarantors, advance rent, alternatives</a></li>
            <li><a className="underline text-green-900" href="#offer">9) Make an offer & negotiate</a></li>
            <li><a className="underline text-green-900" href="#tenancy">10) Tenancy types & key clauses</a></li>
            <li><a className="underline text-green-900" href="#deposit">11) Deposit protection & fees</a></li>
            <li><a className="underline text-green-900" href="#inventory">12) Inventory, check-in, meter photos</a></li>
            <li><a className="underline text-green-900" href="#bills">13) Set up council tax & utilities</a></li>
            <li><a className="underline text-green-900" href="#problems">14) Repairs, mould, and disputes</a></li>
            <li><a className="underline text-green-900" href="#end">15) Ending the tenancy and deposits back</a></li>
            <li><a className="underline text-green-900" href="#templates">Templates: emails & letters (copy-paste)</a></li>
            <li><a className="underline text-green-900" href="#faq">Quick FAQ</a></li>
            <li><a className="underline text-green-900" href="#related">Related Resinaro guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) BUDGET
           ========================================================= */}
        <section id="budget" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            1) Budget: how much rent is safe?
          </h2>
          <p className="mb-3">
            A simple rule: take your net monthly income (after tax) and multiply
            by <strong>0.35</strong>. This should be near your maximum rent.
            Then add council tax and utilities. Many agents use income
            multiples, for example your income should be at least{" "}
            <strong>30× the monthly rent per year</strong>. If your income is
            lower because you just arrived, use an alternative like a guarantor
            or paying rent in advance.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Example A</h3>
              <p>Income £2,000/month → safe rent ≈ £700.</p>
              <p>Add bills: £250–350. Total ≈ £950–1,050.</p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Example B</h3>
              <p>Couple income £3,600/month → safe rent ≈ £1,250.</p>
              <p>Bills: £350–450. Total ≈ £1,600–1,700.</p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Quick checklist</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Set a hard limit before you search.</li>
                <li>Ask if council tax is included (rare).</li>
                <li>For HMOs (house shares) bills are often included.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Prices change by city and area. If a place is much cheaper than
            similar homes nearby, check carefully for problems or scams.
          </p>
        </section>

        {/* =========================================================
            2) AREAS & TYPES
           ========================================================= */}
        <section id="areas" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            2) Areas & types of housing (simple overview)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              In big cities you will see many property types. Learn the words
              agents use, so you can search better:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">
                  Common types
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Studio:</strong> one main room + bathroom. Kitchen
                    is inside the same room.
                  </li>
                  <li>
                    <strong>1-bed/2-bed flat:</strong> separate bedroom(s),
                    living room, kitchen, bathroom.
                  </li>
                  <li>
                    <strong>HMO / house share:</strong> room in shared house.
                    Bills often included. Check the license if &gt;3 tenants.
                  </li>
                  <li>
                    <strong>Terraced/Semi-detached house:</strong> more space,
                    good for families, higher bills.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">
                  Important words
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Furnished/Unfurnished:</strong> furniture included
                    or not. “Part-furnished” = some furniture only.
                  </li>
                  <li>
                    <strong>EPC rating:</strong> energy efficiency A (best) to G
                    (worst). Better EPC → lower bills.
                  </li>
                  <li>
                    <strong>Council tax band:</strong> A–H. Lower letter =
                    cheaper tax.
                  </li>
                  <li>
                    <strong>Leasehold/Freehold:</strong> ownership words; not a
                    big concern for tenants but can affect building rules.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3) DOCUMENTS
           ========================================================= */}
        <section id="documents" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            3) Documents to prepare (before you book viewings)
          </h2>
          <p className="mb-3">
            Put everything in one folder on your phone and laptop. Name files
            clearly. This makes agents take you seriously and speeds up offers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Identity & status</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Italian passport or Carta d’Identità.</li>
                <li>Share code / visa evidence (if applicable).</li>
                <li>UK phone number and email address.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Money & work</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Job offer or employer letter (simple English is fine).</li>
                <li>Recent bank statements or payslips (UK or Italian).</li>
                <li>Reference from previous landlord (Italian is ok + short translation).</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            If you are new in the UK, prepare one alternative from the section
            about <a className="underline text-green-900" href="#guarantor">guarantors and rent in advance</a>.
          </p>
        </section>

        {/* =========================================================
            4) RIGHT TO RENT
           ========================================================= */}
        <section id="right-to-rent" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            4) Right to Rent (EU/Italian citizens)
          </h2>
          <div className="bg-white border rounded-xl p-5">
            <p className="mb-3">
              Landlords must check that every adult can live in the UK. This is
              called <strong>Right to Rent</strong>. They ask for your
              documents, see them in person or online, and keep a copy.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">How to show it</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use a government share code (if you have digital status).</li>
                  <li>Or show immigration documents/visa as requested.</li>
                  <li>Bring your passport or national ID at check-in.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ensure your names match exactly across documents.</li>
                  <li>Keep copies and the share code result page.</li>
                  <li>Right to Rent check is not discrimination; it is the law.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5) SEARCH & VIEWINGS
           ========================================================= */}
        <section id="search" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            5) Search and book viewings (be first in line)
          </h2>
          <p className="mb-3">
            Good places go fast. Prepare a short message and send it as soon as
            a property appears. Use official portals or registered agents when
            possible. Be careful with social media adverts.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Checklist</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Have your documents folder ready to share.</li>
                <li>Prepare your <em>Offer Pack</em>: who you are, job, move-in date.</li>
                <li>Ask about bills, council tax band, and EPC rating.</li>
                <li>Confirm if the property allows couples, children, or pets.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Red flags</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Wants money before viewing or contract → scam risk.</li>
                <li>Unrealistic low price for the area → investigate.</li>
                <li>Communication only via private WhatsApp with no company info.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) VIEWING CHECKLIST
           ========================================================= */}
        <section id="viewing-checklist" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            6) Viewing checklist (simple English — save and print)
          </h2>
          <div className="bg-white border rounded-xl p-5">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-green-900">Inside the home</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Windows shut well? Any condensation or mould?</li>
                  <li>Heating works? Ask to turn it on for 2–3 minutes.</li>
                  <li>Water pressure in shower and kitchen.</li>
                  <li>Smoke alarm and CO alarm present.</li>
                  <li>Fridge, cooker, washing machine included?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Outside & rules</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Transport: bus/metro stops and time to work.</li>
                  <li>Noise levels at night; look for bars/clubs close by.</li>
                  <li>Rubbish collection days; bike storage; parking permit?</li>
                  <li>Building rules: pets, smoking, deliveries.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Take photos or short videos. If you later find problems, your
              photos will help you discuss repairs or negotiate.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) REFERENCING
           ========================================================= */}
        <section id="referencing" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            7) Referencing without UK credit history
          </h2>
          <p className="mb-3">
            Agents check if you can pay rent and if you respected past
            tenancies. If you just arrived from Italy, do not worry—you have
            options. Be honest and proactive.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">If you have a UK job</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Send job offer/contract and HR contact.</li>
                <li>Send last 3 payslips (if available).</li>
                <li>Ask HR for a short employment letter.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">If you are new</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Share Italian payslips or bank statements.</li>
                <li>Offer 3–6 months’ rent in advance.</li>
                <li>Provide a UK guarantor (see below).</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">For students</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>University letter of enrolment.</li>
                <li>Parental guarantee or rent in advance.</li>
                <li>Ask about student-friendly HMOs.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            Be ready to answer: <em>how long you plan to stay</em>,{" "}
            <em>who will live there</em>, and <em>when you can move in</em>.
          </p>
        </section>

        {/* =========================================================
            8) GUARANTOR & ALTERNATIVES
           ========================================================= */}
        <section id="guarantor" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            8) Guarantors, rent in advance, and other alternatives
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              If referencing is hard because you are new, propose one of these.
              Be polite and clear. Many agents will agree.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900">Options</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Guarantor:</strong> a UK-based person with stable income who promises to pay if you cannot.</li>
                  <li><strong>Rent in advance:</strong> 3–6 months up front to show commitment (keep proof of transfer).</li>
                  <li><strong>Higher deposit:</strong> sometimes accepted, but the legal cap still applies for the official deposit.</li>
                  <li><strong>Company guarantor products:</strong> some agents accept third-party guarantee services.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">What to send</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Short letter explaining you are new to the UK and your plan to work/study.</li>
                  <li>Evidence of savings to cover 3–6 months of rent.</li>
                  <li>Contact for guarantor (name, job, phone, email).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            9) MAKE AN OFFER
           ========================================================= */}
        <section id="offer" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            9) Make an offer & negotiate (polite and clear)
          </h2>
          <p className="mb-3">
            After viewing, send your offer quickly. Include your move-in date,
            length of tenancy, and any requests. Keep it short and friendly.
          </p>
          <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
            <p className="font-semibold text-green-900">Negotiation ideas</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Small rent reduction if you can move in fast.</li>
              <li>Minor repairs before move-in (for example, broken blinds).</li>
              <li>Replace “professional clean required” with “leave as clean as received”.</li>
              <li>Ask for a break clause if the tenancy is 12 months fixed.</li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            10) TENANCY TYPES
           ========================================================= */}
        <section id="tenancy" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            10) Tenancy types & key clauses (read before you sign)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900">Common tenancies</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Assured Shorthold Tenancy (AST):</strong> most common. Fixed term (for example 6–12 months) then periodic.</li>
                  <li><strong>License/Room only:</strong> often for house shares with bills included. Rules set by the house manager.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Clauses to check</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Break clause: when and how you can leave early.</li>
                  <li>Notice periods for tenant and landlord.</li>
                  <li>Who pays for professional cleaning.</li>
                  <li>Pet policy; sub-letting and guests rules.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Ask for the contract in advance to translate slowly if needed.
            </p>
          </div>
        </section>

        {/* =========================================================
            11) DEPOSIT
           ========================================================= */}
        <section id="deposit" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            11) Deposit protection & fees (keep your money safe)
          </h2>
          <p className="mb-3">
            The deposit must be protected in a government scheme. You should
            receive the certificate and “prescribed information” shortly after
            payment. Keep these documents safe until the end of the tenancy.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Numbers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Usually 5 weeks’ rent (cap) for standard AST.</li>
                <li>First month’s rent is paid separately.</li>
                <li>Holding deposit (to reserve) is often 1 week’s rent.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">You must receive</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deposit scheme certificate + reference number.</li>
                <li>How to rent guide; gas safety; EPC; EICR (electrical).</li>
                <li>Inventory report at move-in.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Protection tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pay only to the agent’s official account.</li>
                <li>Keep receipts and all emails.</li>
                <li>If you don’t get the deposit certificate, chase in writing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            12) INVENTORY & CHECK-IN
           ========================================================= */}
        <section id="inventory" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            12) Inventory, check-in, and meter photos (protect your deposit)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              On move-in day you receive an <strong>inventory</strong> (a list
              with photos of the property’s condition). Check everything and
              send your comments within the deadline (often 7 days).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900">What to do</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Take your own photos of every room and any damage.</li>
                  <li>Record meter readings (gas/electric/water) with photos.</li>
                  <li>Test smoke alarms; report if not working.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Send notes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reply to the inventory email with your corrections.</li>
                  <li>Keep your email copy and photos in a safe folder.</li>
                  <li>Ask for confirmation that your notes are attached to the report.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            13) BILLS
           ========================================================= */}
        <section id="bills" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            13) Set up council tax and utilities (day-one list)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Day 1 actions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Send meter photos to gas/electric companies.</li>
                <li>Register for council tax; ask about discounts (students, single person).</li>
                <li>Arrange broadband; ask about minimum contract length.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Money tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Direct debit often gives a small discount.</li>
                <li>Smart meters help you track energy use.</li>
                <li>Keep all account numbers and login details together.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            14) PROBLEMS & DISPUTES
           ========================================================= */}
        <section id="problems" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            14) Repairs, damp, mould, and disputes (step-by-step)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              Homes must be safe and in good repair. If something breaks, report
              it in writing with photos. Be polite but firm.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-green-900">Repair steps</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Send an email with photos and a clear description.</li>
                  <li>Give a reasonable time to fix (for example 7–14 days, faster for emergencies).</li>
                  <li>If ignored, escalate to the agent manager or landlord.</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Keep evidence</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Photos, videos, dates, and names of people you spoke with.</li>
                  <li>Copy of your tenancy and inventory.</li>
                  <li>Maintenance tickets from the agent portal.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">If still no action</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contact local council Environmental Health.</li>
                  <li>Ask for compensation or rent reduction if you lost use of rooms (case-by-case).</li>
                  <li>At the end, challenge unfair deposit deductions with the scheme.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            15) END OF TENANCY
           ========================================================= */}
        <section id="end" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            15) Ending the tenancy & getting your deposit back
          </h2>
          <p className="mb-3">
            Read your notice period and cleaning clauses. Take new photos after
            cleaning and keep receipts. Hand back all keys and get a written
            handover. If deductions are proposed, ask for itemised costs and the
            check-out report. You can use the deposit scheme’s free dispute
            service if you disagree.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Moving-out list</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Deep clean kitchen and bathroom; defrost freezer.</li>
                <li>Fill small nail holes with filler (if allowed).</li>
                <li>Return to the same condition as your inventory.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">If they claim damages</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ask for invoices and photos.</li>
                <li>Compare to move-in inventory photos.</li>
                <li>Use the deposit scheme adjudication if needed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            TEMPLATES & DOWNLOADS
           ========================================================= */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Templates you can copy (easy English)
          </h2>

          {/* Offer Email */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">A) Offer email after viewing</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Offer for <Property address> — <Your name>

Hello <Agent/Landlord>,

Thank you for the viewing today. I would like to make an offer for <address>.
• Move-in date: <dd mmm yyyy>
• Rent: <£amount> per month
• Tenancy length: <12 months> with <6 month break clause> if possible
• Occupants: <names, ages>, <jobs/study>
• Right to Rent: Italian citizens — documents ready
• Referencing: <UK job attached / rent in advance for 3 months / UK guarantor>

I attach my ID and employment letter. I can pay the holding deposit today if the offer is accepted.
Thank you and best regards,

<Full name>
<Phone>
<Email>`}
            </pre>
          </div>

          {/* Guarantor Intro */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">B) Guarantor introduction</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Guarantor details for <Your name> — <Property address>

Hello <Agent/Landlord>,

As I am new in the UK, I will provide a guarantor to support my application.
Guarantor: <Name Surname>, <job title>, employed since <year>, annual income <£amount>.
Contact: <phone>, <email>, <address>.
They are happy to complete your checks and forms.

Kind regards,
<Your name>`}
            </pre>
          </div>

          {/* Repairs Request */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">C) Repair request with photos</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Repair request — <Issue> at <address>

Hello <Agent/Landlord>,

I report the following problem at <address>:
• <Short description> — started on <date>.
I attach photos/videos.

Please advise the next steps. For health and safety reasons I kindly ask for repair within the usual time (for example 7–14 days; sooner for urgent issues).
Thank you,
<Your name>`}
            </pre>
          </div>

          {/* Deposit Dispute */}
          <div className="bg-white border rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">D) Deposit deduction challenge</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Deposit deductions — request for itemised costs

Hello <Agent/Landlord>,

Thank you for the check-out report. I disagree with the following proposed deductions:
• <Item> — please see my move-in inventory photo attached (taken on <date>).
• <Item> — fair wear and tear after <length of tenancy> months.

Please send itemised invoices/quotes. If we cannot agree, I am happy to use the deposit scheme's free adjudication service.

Kind regards,
<Your name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            QUICK FAQ (onsite)
           ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Quick FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I rent with a short-term job contract?
              </summary>
              <p className="mt-2">
                Yes, but the agent may ask for extra security. Offer 3 months
                in advance or a guarantor. Keep copies of your payslips.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Are bills included in house shares?
              </summary>
              <p className="mt-2">
                Often yes, but confirm which bills and any caps (for example,
                “energy included up to £X per month”).
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                What if my English is not strong?
              </summary>
              <p className="mt-2">
                Ask for the contract early. Translate key parts slowly. You can
                bring a friend to the viewing or call with you. Use our
                templates to write short, clear emails.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I sub-let a room?
              </summary>
              <p className="mt-2">
                Usually no unless the contract allows it. Always check the
                clause and get written permission first.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            RELATED GUIDES
           ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Related Resinaro guides
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/national-insurance-number-italians-uk-2025")}>
                National Insurance Number (NIN) — 2025 Step-by-Step + Phone Script
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/life-in-uk")}>
                Life in the UK: Bank Account, Credit & First Payslips
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/bureaucracy-guides/italian-cie-id-card-uk")}>
                Italian CIE (ID card) in the UK — Documents & Appointments
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
           ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want help passing referencing or checking your tenancy?
          </h2>
          <p className="text-sm mb-4">
            We review your offer email, check your documents, and suggest the
            best alternative (guarantor vs. rent in advance). We also read your
            contract and highlight risks in simple English.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/renting-priority"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Priority Renting Pack Review (+£20)
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              View Resinaro Services →
            </Link>
          </div>
        </section>

        {/* =========================================================
            DISCLOSURE
           ========================================================= */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This community guide is general information, not legal advice.
          Processes and rules change. Always follow the latest instructions from
          your agent, landlord, and local council. Some links may earn us a
          small commission at no extra cost to you; this helps keep guides free
          and updated for the community.
        </p>

        {/* =========================================================
            JSON-LD SCRIPTS
           ========================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      </div>
    </main>
  );
}
