// app/community/council-tax-italians-2025/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import Image from "next/image";

/**
 * Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
 * Style: matches existing Resinaro community guides (easy English, short sentences).
 * Audience: Italians in the UK with average English.
 * Goal: outrank competitors with depth, clarity, tables, templates, and internal links.
 *
 * Sections:
 * - Hero
 * - Why this guide
 * - TOC
 * - 1) What is Council Tax (simple)
 * - 2) Find your band (A–H) + typical-costs explainer table
 * - 3) Discounts: single person, students, low income, exemptions
 * - 4) Moving-in steps (checklist)
 * - 5) Change address / moving out (templates)
 * - 6) Payments, arrears, and direct debit
 * - 7) Common mistakes (names, HMOs, flat shares)
 * - 8) Quick FAQ (onsite)
 * - Related guides, CTA, Disclosure
 * - Appendices (A–H) for SEO depth and real value
 * - JSON-LD (FAQ + HowTo)
 */

export const metadata = {
  title:
    "Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)",
  description:
    "Simple 2025 guide for Italians: what Council Tax is, find your band (A–H), typical costs, single-person and student discounts, moving-in checklist, change-of-address and appeal templates. Easy English, copy-paste letters.",
  alternates: {
    canonical: "/community/council-tax-italians-2025",
  },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // =========================================================
  // JSON-LD: FAQ (rich results)
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Council Tax and who pays it?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Council Tax is a local charge for services like rubbish collection and libraries. Most households pay it. Some people get discounts or exemptions (for example, students or single-person households).",
        },
      },
      {
        "@type": "Question",
        name: "How do I find my Council Tax band?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Every home has a band from A to H. You can find it by checking your address on your local council or valuation service. Your tenancy or estate agent may also tell you the band when you rent.",
        },
      },
      {
        "@type": "Question",
        name: "What is a single-person discount?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If only one adult lives in the property, you can often get 25% off the Council Tax bill. Apply with a short online form or letter to your council.",
        },
      },
      {
        "@type": "Question",
        name: "Do students pay Council Tax?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Full-time students are usually exempt. If everyone in the property is a full-time student, you may not pay. If one person is not a student, the discount rules are different—check with your council.",
        },
      },
      {
        "@type": "Question",
        name: "How do I set up payments after moving in?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Register with your council, give your tenancy dates and names of adult residents, and set up a monthly Direct Debit. Keep your meter readings and tenancy handy.",
        },
      },
      {
        "@type": "Question",
        name: "What if I cannot pay the full amount?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Contact the council early. You may arrange a payment plan. You can also check if you qualify for low-income support or other discounts.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (moving-in steps for council tax)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Register and set up Council Tax after moving in (2025)",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        name: "Find your council",
        text:
          "Use your postcode to find your local council website. Open the Council Tax section.",
      },
      {
        "@type": "HowToStep",
        name: "Create or sign in to an account",
        text:
          "Use an email you keep long-term. Enable two-factor authentication if offered.",
      },
      {
        "@type": "HowToStep",
        name: "Register your new address",
        text:
          "Provide tenancy start date, names of adult residents, and property band if you know it.",
      },
      {
        "@type": "HowToStep",
        name: "Apply for discounts",
        text:
          "Send a single-person discount request or student exemption if eligible.",
      },
      {
        "@type": "HowToStep",
        name: "Set up payments",
        text:
          "Set a Direct Debit or card payment plan. Choose monthly installments.",
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/council-tax-italians-hero.png"
            alt="Council Tax guide for Italians — bands, discounts, moving-in steps"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              HOUSING & BILLS
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Council Tax for Italians — Bands, Discounts & Moving-In Steps
              (2025)
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (short & clear)
          </h2>
          <p className="mb-3">
            Council Tax can feel complex, especially if your English is average
            and you just moved. This guide explains what it is, how to find your
            band, how discounts work, and what to do when you move in or out.
            Everything is written in simple words with templates you can copy.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Short sentences. Important words in bold.</li>
            <li>Real actions: who to contact, what to send, how to pay.</li>
            <li>Discounts explained and easy templates.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#what-is">1) What is Council Tax (simple)</a></li>
            <li><a className="underline text-green-900" href="#find-band">2) Find your band (A–H) + typical costs</a></li>
            <li><a className="underline text-green-900" href="#discounts">3) Discounts: single-person, students, low income</a></li>
            <li><a className="underline text-green-900" href="#move-in">4) Moving-in steps (checklist)</a></li>
            <li><a className="underline text-green-900" href="#change-address">5) Change address / moving out (templates)</a></li>
            <li><a className="underline text-green-900" href="#payments">6) Payments, arrears & Direct Debit</a></li>
            <li><a className="underline text-green-900" href="#mistakes">7) Common mistakes (flat shares & HMOs)</a></li>
            <li><a className="underline text-green-900" href="#faq">8) Quick FAQ</a></li>
            <li><a className="underline text-green-900" href="#related">Related Resinaro guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) WHAT IS COUNCIL TAX
        ========================================================= */}
        <section id="what-is" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            1) What is Council Tax (simple)
          </h2>
          <p className="mb-3">
            <strong>Council Tax</strong> is a local charge for services like
            rubbish collection, streets, libraries, and local police support. It
            is paid by households. The amount depends on your{" "}
            <strong>band</strong> (A–H) and your local council. Some people get
            <strong> discounts</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Who pays?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Most adult residents in a home share the bill.</li>
                <li>Tenants usually pay in rentals (check your tenancy).</li>
                <li>Owners pay if the home is empty or they live there.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Who gets discounts?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Single adult households (often 25% off).</li>
                <li>Full-time students (usually exempt).</li>
                <li>Some low-income households (council support).</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Rules vary by council but the idea is similar across the UK.
          </p>
        </section>

        {/* =========================================================
            2) FIND YOUR BAND
        ========================================================= */}
        <section id="find-band" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            2) Find your band (A–H) + typical-costs explainer
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              Every home is placed in a <strong>band</strong> from A to H.
              A = lower, H = higher. Your rent listing may show the band. You
              can also check on your council website. Each council sets the
              yearly charge for each band. Below is a non-official{" "}
              <em>example explainer</em> to understand the idea. Always check
              your own council for exact numbers.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <thead className="bg-[#F9F6F1]">
                  <tr>
                    <th className="text-left p-3 border-b">Band</th>
                    <th className="text-left p-3 border-b">Relative level</th>
                    <th className="text-left p-3 border-b">Monthly idea*</th>
                    <th className="text-left p-3 border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">A</td>
                    <td className="p-3">Lower</td>
                    <td className="p-3">Lower end in your area</td>
                    <td className="p-3">Smaller flats, some shared houses</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">B</td>
                    <td className="p-3">Lower-mid</td>
                    <td className="p-3">Below average</td>
                    <td className="p-3">Many one- or two-bed flats</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">C</td>
                    <td className="p-3">Mid</td>
                    <td className="p-3">Around average</td>
                    <td className="p-3">Typical for many flats/houses</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">D</td>
                    <td className="p-3">Mid</td>
                    <td className="p-3">Slightly above average</td>
                    <td className="p-3">Often family homes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">E</td>
                    <td className="p-3">Higher</td>
                    <td className="p-3">Higher than average</td>
                    <td className="p-3">Larger homes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">F</td>
                    <td className="p-3">Higher</td>
                    <td className="p-3">High</td>
                    <td className="p-3">Large houses, some premium areas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">G</td>
                    <td className="p-3">High</td>
                    <td className="p-3">Very high</td>
                    <td className="p-3">Large premium houses</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">H</td>
                    <td className="p-3">Highest</td>
                    <td className="p-3">Highest range</td>
                    <td className="p-3">Top-end properties</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              *This is only a relative explainer. Real amounts depend on your
              council, year, and any local changes. Always check official pages.
            </p>
          </div>
        </section>

        {/* =========================================================
            3) DISCOUNTS
        ========================================================= */}
        <section id="discounts" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            3) Discounts: single-person, students, low income (how to apply)
          </h2>
          <p className="mb-3">
            Many households qualify for a discount or even an exemption. Apply
            soon after moving in. Keep confirmation emails or letters.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Single-person</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Only one adult lives there? Often 25% off.</li>
                <li>Students do not count for this calculation.</li>
                <li>Apply online with your council.</li>
              </ul>
            </div>

            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Students</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full-time students are usually exempt.</li>
                <li>Mixed homes (student + non-student) are different.</li>
                <li>Ask your council how to provide proof.</li>
              </ul>
            </div>

            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Low income</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Each council has support schemes.</li>
                <li>Provide payslips or benefits proof if asked.</li>
                <li>Ask for a payment plan if needed.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-green-900 mb-1 text-sm">
              Short letter template (single-person discount)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`Subject: Council Tax — Single-Person Discount request

Hello Council Tax Team,

I live at <address, postcode>. I am the only adult in the property.
Please apply the Single-Person Discount (25%) from <move-in date>.

Name: <Your name>
Tenancy start: <date>
Phone/email: <contacts>

Thank you,
<Your name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            4) MOVING-IN STEPS
        ========================================================= */}
        <section id="move-in" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            4) Moving-in steps (checklist you can follow)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Do this in week 1</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Find your council website using your postcode.</li>
                  <li>Create an online account; save the login.</li>
                  <li>Register your new address and tenants’ names.</li>
                  <li>Set up Direct Debit for monthly payments.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Apply discounts</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Single-person: send a quick request.</li>
                  <li>Students: upload proof from your institution.</li>
                  <li>Low income: ask about local support schemes.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Keep your tenancy and move-in date handy. You may need meter
              photos for utilities, but they are separate from Council Tax.
            </p>
          </div>
        </section>

        {/* =========================================================
            5) CHANGE ADDRESS / MOVING OUT
        ========================================================= */}
        <section id="change-address" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            5) Change address / moving out (easy templates)
          </h2>
          <p className="mb-3">
            When you move, tell the council quickly. You only pay for the dates
            you lived there. Use these short templates in easy English.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Change of address</h3>
              <pre className="whitespace-pre-line text-sm">
{`Subject: Council Tax — Change of address

Hello Council Tax Team,

I moved out of <old address, postcode> on <date>.
Please close my Council Tax account from that date and send any final bill.
My new address is <new address, postcode>.

Name: <Your name>
Phone/email: <contacts>

Thank you,
<Your name>`}
              </pre>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900 mb-1">Moving in (notify)</h3>
              <pre className="whitespace-pre-line text-sm">
{`Subject: Council Tax — New tenancy registration

Hello Council Tax Team,

I moved into <new address, postcode> on <date>.
Adults in the property: <names>.
Band (if known): <band>.
Please set up my Council Tax account and advise on discounts.

Thank you,
<Your name>`}
              </pre>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) PAYMENTS, ARREARS & DD
        ========================================================= */}
        <section id="payments" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            6) Payments, arrears, and Direct Debit (stay on track)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Direct Debit</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Set monthly DD to avoid missing payments.</li>
                  <li>Choose the day of month that fits your salary.</li>
                  <li>Keep enough balance 1–2 days before the DD date.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">If you fall behind</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contact the council early for a plan.</li>
                  <li>Ask if discounts or support apply to you.</li>
                  <li>Keep emails and payment confirmations.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Avoid ignoring letters. Councils are usually fair if you speak to
              them early and keep promises.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) COMMON MISTAKES
        ========================================================= */}
        <section id="mistakes" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            7) Common mistakes (names, HMOs, flat shares)
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Name mismatch</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Spelling different across tenancy and council.</li>
                <li>Use passport spelling; remove accents if needed.</li>
                <li>Keep same format for all bills and bank.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Flat shares & HMOs</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ask who is responsible for Council Tax in your contract.</li>
                <li>Some HMOs include Council Tax in the rent.</li>
                <li>If not included, discuss how to split fairly.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Late registration</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Delays cause larger first bills.</li>
                <li>Register quickly and ask for monthly plan.</li>
                <li>Apply for discounts early.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            8) QUICK FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">8) Quick FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My tenancy says “Council Tax included”. Do I still register?
              </summary>
              <p className="mt-2">
                If rent includes Council Tax, the landlord usually pays it. You
                may not need to register yourself. Keep a copy of the tenancy
                clause for your records. If in doubt, ask your agent in writing.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                I live with two friends. Who should be on the bill?
              </summary>
              <p className="mt-2">
                Usually all adult tenants are jointly responsible. The council
                may put two names on the bill. Share costs fairly and keep
                payment evidence.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I get a discount if I work part-time?
              </summary>
              <p className="mt-2">
                Part-time work alone is not a discount reason, but your council
                may have low-income support. Ask about local schemes and apply
                with payslips if needed.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My English is not strong. Can someone help me apply?
              </summary>
              <p className="mt-2">
                Yes. Many councils offer phone support. You can also ask a
                friend to help or use our quick check service for forms and
                templates in easy English.
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
              <Link className="underline text-green-900" href={p(locale, "/community/uk-renting-for-italians-2025")}>
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/open-uk-bank-account-no-credit-italians-2025")}>
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/uk-tax-code-for-italians-2025")}>
                UK Tax Code for Italians — Fix Emergency Tax (1257L, BR, 0T)
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want help setting up Council Tax & discounts today?
          </h2>
          <p className="text-sm mb-4">
            We check your tenancy and band, prepare your single-person or
            student request, and set a clean payment plan in easy English.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/council-tax-setup"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Council Tax Setup & Discount Check (+£20)
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
          This community guide is general information, not legal advice. Rules
          and costs vary by council and may change. Always follow the latest
          instructions on your council website. Some links may earn us a small
          commission at no extra cost to you; this helps keep guides free and
          updated for the community.
        </p>

        {/* =========================================================
            APPENDICES (SEO depth & practical value)
        ========================================================= */}

        {/* Appendix A: Band look-up tips */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix A — Band look-up tips (find it fast)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Before you rent</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ask the agent or landlord “What Council Tax band is this?”</li>
                <li>Check the listing; many include the band.</li>
                <li>Compare bands for nearby streets to estimate cost.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">After moving</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirm band on your council website using the postcode.</li>
                <li>Keep a PDF or screenshot for your files.</li>
                <li>If your bill looks wrong, ask the council to check.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix B: Discount evidence examples */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix B — Discount evidence (what councils often ask)
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Single-person</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tenancy showing only your name, or</li>
                <li>Letter or declaration that you are the only adult.</li>
                <li>Photo ID if asked to confirm identity.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Students</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Student status letter/enrolment proof.</li>
                <li>Course dates. Full-time hours (as defined by school).</li>
                <li>Names of all residents in the property.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Low income</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Recent payslips or benefit letters.</li>
                <li>Bank statements if requested.</li>
                <li>Any change of work hours or status.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix C: Monthly planning & payday alignment */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix C — Monthly planning (align with your payday)
          </h2>
          <p className="text-sm mb-3">
            A small setup today prevents stress all year. Match your Direct
            Debit date to your payday and keep a small buffer in your account.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Checklist</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pick a DD date 1–3 days after payday.</li>
                <li>Enable payment alerts in your banking app.</li>
                <li>Keep a separate savings pot for bills.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">If income changes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tell your council early if you expect difficulty.</li>
                <li>Ask to adjust the plan to smaller amounts.</li>
                <li>Check if new discounts now apply to you.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix D: Appeal basics (when band or bill seems wrong) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix D — Appeal basics (if something seems wrong)
          </h2>
          <p className="text-sm mb-3">
            If you believe your band or bill is incorrect, you can ask the
            council to check. Be polite and provide clear reasons. Keep copies.
          </p>
          <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
            <h3 className="font-semibold text-green-900 mb-1">
              Short letter to query a bill/band
            </h3>
            <pre className="whitespace-pre-line">
{`Subject: Council Tax band/bill query — <address, postcode>

Hello Council Tax Team,

I would like to query my Council Tax <band/bill> for <address>.
Reason: <brief reason, e.g., neighbouring similar properties show a different band / amount seems inconsistent>.

Could you please review and advise the next steps?
Thank you very much.

<Your name>
<Contact details>`}
            </pre>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            An inquiry does not always change the outcome, but councils will
            explain their calculation and tell you the formal steps if you still
            disagree.
          </p>
        </section>

        {/* Appendix E: House shares & bills splitting tips */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix E — House shares: how to split fairly
          </h2>
          <p className="text-sm mb-3">
            In a flat share, decide early how to split the bill. Keep records.
            One person can pay the council and collect from others, or each can
            send their part to the payer before the due date.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Use a shared spreadsheet or notes app.</li>
            <li>Set a reminder 5 days before the DD date.</li>
            <li>If someone moves out, recalculate from the next month.</li>
          </ul>
        </section>

        {/* Appendix F: Name formats & Italian characters */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix F — Names & Italian characters (keep it consistent)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Use one format</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Match your passport spelling.</li>
                <li>If systems reject accents, remove them everywhere.</li>
                <li>Keep the same format in bank, council, utilities.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Proof bundle</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tenancy PDF, first council letter, one bill.</li>
                <li>Store in a cloud folder named “Address_YYYY”.</li>
                <li>Helps with future checks and renewals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix G: Students in mixed households */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix G — Students in mixed households (one student + one worker)
          </h2>
          <p className="text-sm mb-3">
            If not all residents are full-time students, the property may not be
            fully exempt. Ask how your local rules apply. Sometimes discounts
            still help. Provide documents from the university for the student
            and job details for the worker, if requested.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Clarify who is counted for the bill.</li>
            <li>Ask about any special local discount rules.</li>
            <li>Keep copies of everything you send.</li>
          </ul>
        </section>

        {/* Appendix H: If you receive a reminder or summons */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix H — If you receive a reminder letter
          </h2>
          <p className="text-sm mb-3">
            Do not panic. Contact the council quickly and explain. Make a small
            payment if you can and agree a plan for the rest. Keep notes of who
            you spoke to and when.
          </p>
          <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
            <h3 className="font-semibold text-green-900 mb-1">
              Short reply template
            </h3>
            <pre className="whitespace-pre-line">
{`Subject: Council Tax reminder — request for payment plan

Hello Council Tax Team,

I received a reminder for <address>. I had difficulty this month but I wish to pay.
Could we set a payment plan starting <date> with monthly installments?
I will make an initial payment of <£amount> now.

Thank you for your help,
<Your name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Need quick help? We’ll set up your Council Tax today.
          </h2>
          <p className="text-sm mb-4">
            Send us your tenancy and move-in date. We prepare your discount
            request and payment plan in easy English and keep you on track.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/council-tax-setup"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Council Tax Setup & Discount Check (+£20)
            </Link>
            <Link
              href="/community/uk-renting-for-italians-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Read the Renting Guide Next
            </Link>
          </div>
        </section>

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
