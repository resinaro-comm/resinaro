// app/community/first-payslip-italians-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * First Payslip Explained (UK) — Italians’ Easy Guide (2025)
 * Audience: Italians in the UK with average English.
 * Style: Matches existing Resinaro community guides (short sentences, clear sections, tables, templates).
 * Goal: Outrank competitors with depth, clarity, and conversion to Priority checks.
 *
 * Sections:
 * - Hero
 * - Why this guide
 * - TOC
 * - 1) What’s on a UK payslip (at a glance)
 * - 2) Gross → Net walkthrough (simple numbers)
 * - 3) Tax code box (1257L, BR, 0T, W1/M1) — quick meanings + fix link
 * - 4) National Insurance (NI) letters (A, C, H, M, Z) — what they mean
 * - 5) Year-To-Date (YTD) figures and why they matter
 * - 6) Common surprises on first payslip (realistic issues)
 * - 7) If something looks wrong — exact steps
 * - 8) Email/Chat templates to payroll
 * - 9) Mini glossary (PAYE, NI, SSP, etc.)
 * - 10) Checklist you can follow in 10 minutes
 * - Related guides / CTAs / Disclosure
 * - Appendices A–N for SEO depth & practical value
 * - JSON-LD (FAQ + HowTo)
 */

export const metadata = {
  title:
    "First Payslip Explained (UK) — Italians’ Easy Guide (2025)",
  description:
    "Decode your first UK payslip in simple English: tax code (1257L/BR/0T/W1M1), NI letter (A/C/H/M/Z), gross→net, YTD, pro-rata, overtime, and fixes with copy-paste templates.",
  alternates: { canonical: "/community/first-payslip-italians-uk-2025" },
};

export default function Page() {
  // =========================================================
  // JSON-LD: FAQ
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is my first UK payslip lower than I expected?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Common reasons: emergency tax code (BR/0T/W1/M1), pro-rata pay if you started mid-period, unpaid waiting days, or missing overtime/allowances that will show next month.",
        },
      },
      {
        "@type": "Question",
        name: "What does tax code 1257L / BR / 0T / W1(M1) mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "1257L is the standard allowance for many employees. BR and 0T often mean emergency or second job coding. W1/M1 means emergency calculation per period. See the tax-code section and the dedicated guide for quick fixes.",
        },
      },
      {
        "@type": "Question",
        name: "What is NI (National Insurance) and the letter A/C/H/M/Z on my payslip?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NI is a contribution to state benefits and pensions. The letter shows your NI category. For example, A is common for most employees. Categories set NI rates depending on age, apprenticeships, etc.",
        },
      },
      {
        "@type": "Question",
        name: "What are YTD figures on the payslip?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "YTD stands for Year-To-Date totals. It shows cumulative gross pay, tax, and NI since the tax year start. It helps spot corrections or smoothing when you start mid-year.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my payslip has errors?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Take a copy, email payroll with clear bullet points, and ask for a correction or explanation. Use our templates to contact HR/payroll and see our Tax Code guide if the code looks wrong.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (Check your payslip in 5 steps)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Check your first UK payslip in five steps (2025)",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Find key boxes",
        text:
          "Locate your tax code, NI letter, gross pay, deductions, net pay, and YTD.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm personal details",
        text:
          "Check name, address, payroll number, and pay period dates.",
      },
      {
        "@type": "HowToStep",
        name: "Look for pro-rata or starter flags",
        text:
          "If you started mid-month, pay may be partial. W1/M1 may appear.",
      },
      {
        "@type": "HowToStep",
        name: "Compare to your contract",
        text:
          "Match hourly rate/salary, contracted hours, overtime, and allowances.",
      },
      {
        "@type": "HowToStep",
        name: "Escalate if needed",
        text:
          "Email payroll with our template. If tax code is wrong, follow the Tax Code guide steps.",
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
            src="/images/fisrt-payslip-uk-italian.jpg"
            alt="First UK payslip explained for Italians — simple labels and steps"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              WORK & MONEY
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              First Payslip Explained (UK) — Italians’ Easy Guide (2025)
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and what you’ll learn)
          </h2>
          <p className="mb-3">
            Your first payslip can be confusing. Many Italians see emergency
            codes, odd numbers, or missing overtime. This guide uses simple
            English to show what each line means, why amounts change, and what
            to do if it looks wrong.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Find and understand each payslip box in minutes.</li>
            <li>Know when low pay is normal (starter/pro-rata) vs. a mistake.</li>
            <li>Copy-paste templates to contact payroll and fix issues fast.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#at-a-glance">1) What’s on a UK payslip (at a glance)</a></li>
            <li><a className="underline text-green-900" href="#gross-to-net">2) Gross → Net walkthrough (simple numbers)</a></li>
            <li><a className="underline text-green-900" href="#tax-code">3) Tax code box — quick meanings & fixes</a></li>
            <li><a className="underline text-green-900" href="#ni-letter">4) NI letters (A/C/H/M/Z) explained</a></li>
            <li><a className="underline text-green-900" href="#ytd">5) YTD figures & why they matter</a></li>
            <li><a className="underline text-green-900" href="#surprises">6) Common surprises on first payslip</a></li>
            <li><a className="underline text-green-900" href="#fix-steps">7) If something looks wrong — do this</a></li>
            <li><a className="underline text-green-900" href="#templates">8) Templates to payroll/HR</a></li>
            <li><a className="underline text-green-900" href="#glossary">9) Mini glossary (easy English)</a></li>
            <li><a className="underline text-green-900" href="#checklist">10) 10-minute payslip checklist</a></li>
            <li><a className="underline text-green-900" href="#related">Related guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) AT A GLANCE
        ========================================================= */}
        <section id="at-a-glance" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            1) What’s on a UK payslip (at a glance)
          </h2>
          <p className="mb-3">
            Every company uses a different layout. But you will usually see
            these sections. Use this list to find them fast.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Top area</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Employer name and your employee/payroll number.</li>
                <li>Pay period and pay date.</li>
                <li>Your name and address (check spelling).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Middle area</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gross pay (basic + overtime + bonuses).</li>
                <li>Deductions (PAYE tax, NI, pension, student loan).</li>
                <li>Tax code and NI letter/category.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Bottom area</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Net pay (money to your bank).</li>
                <li>YTD figures (since April of the tax year).</li>
                <li>Notes (holiday pay, adjustments, messages).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            2) GROSS → NET WALKTHROUGH
        ========================================================= */}
        <section id="gross-to-net" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            2) Gross → Net walkthrough (simple example)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              This is not a live calculator. It is a simple explanation to help
              you understand how gross pay becomes net pay. Real numbers depend
              on your code, hours, and benefits.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <thead className="bg-[#F9F6F1]">
                  <tr>
                    <th className="text-left p-3 border-b">Line</th>
                    <th className="text-left p-3 border-b">Example</th>
                    <th className="text-left p-3 border-b">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Basic pay</td>
                    <td className="p-3">£1,500</td>
                    <td className="p-3">Hours × rate, or monthly salary pro-rata</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Overtime/bonus</td>
                    <td className="p-3">£150</td>
                    <td className="p-3">Extra hours or bonus this period</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Gross pay</td>
                    <td className="p-3">£1,650</td>
                    <td className="p-3">Before deductions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">PAYE tax</td>
                    <td className="p-3">£X</td>
                    <td className="p-3">Depends on tax code and YTD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">National Insurance</td>
                    <td className="p-3">£Y</td>
                    <td className="p-3">Depends on NI letter/category and pay</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Pension (if enrolled)</td>
                    <td className="p-3">£Z</td>
                    <td className="p-3">Employee share of pension contributions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Net pay</td>
                    <td className="p-3">£1,650 − (X + Y + Z)</td>
                    <td className="p-3">Money sent to your bank account</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              Your first month may be lower if you started part-way through the
              pay period or if emergency codes apply temporarily.
            </p>
          </div>
        </section>

        {/* =========================================================
            3) TAX CODE BOX — QUICK MEANINGS
        ========================================================= */}
        <section id="tax-code" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            3) Tax code box — quick meanings & fixes
          </h2>
          <p className="mb-3">
            Your payslip shows a tax code. It tells payroll how to apply your
            allowance and rate. Here are common ones.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Code</th>
                  <th className="text-left p-3 border-b">Meaning</th>
                  <th className="text-left p-3 border-b">Seen when</th>
                  <th className="text-left p-3 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">1257L</td>
                  <td className="p-3">Standard allowance for many employees</td>
                  <td className="p-3">Main job, full details known</td>
                  <td className="p-3">Usually fine</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">BR</td>
                  <td className="p-3">Basic rate on all pay (no allowance)</td>
                  <td className="p-3">Second job or missing starter info</td>
                  <td className="p-3">Provide details; see our Tax Code guide</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">0T</td>
                  <td className="p-3">No allowance applied</td>
                  <td className="p-3">Often first payslip; missing info</td>
                  <td className="p-3">Send info; ask payroll to re-check</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">W1/M1</td>
                  <td className="p-3">Emergency per-period basis</td>
                  <td className="p-3">Temporary starter basis</td>
                  <td className="p-3">Often auto-fixes next month; chase if not</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">D0/D1/Kxxx</td>
                  <td className="p-3">Higher/Additional/Negative allowance</td>
                  <td className="p-3">High income or adjustments</td>
                  <td className="p-3">Check HMRC letters if unsure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm">
            Need the full fix flow? Read{" "}
            <Link href="/community/uk-tax-code-for-italians-2025" className="underline text-green-900">
              UK Tax Code for Italians — Fix Emergency Tax
            </Link>{" "}
            with templates for HR and HMRC.
          </div>
        </section>

        {/* =========================================================
            4) NI LETTERS
        ========================================================= */}
        <section id="ni-letter" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            4) National Insurance (NI) letters (A/C/H/M/Z) in simple words
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              Your payslip shows an NI category letter. It sets the NI rate you
              pay. Here is a plain-English explainer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Common letters</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>A</strong> — Standard for most employees.</li>
                  <li><strong>C</strong> — Over state pension age (no employee NI).</li>
                  <li><strong>H</strong> — Apprentice under certain conditions.</li>
                  <li><strong>M</strong> — Under 21 (reduced employer NI rules).</li>
                  <li><strong>Z</strong> — Under 21 with certain reduced employer NI.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">What to do</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check the letter makes sense for your situation.</li>
                  <li>If unsure, ask payroll to confirm why this letter applies.</li>
                  <li>Keep your NI number safe and share with HR when issued.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5) YTD FIGURES
        ========================================================= */}
        <section id="ytd" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            5) YTD figures (Year-To-Date) and why they matter
          </h2>
          <p className="mb-3">
            The UK tax year runs from April to April. YTD totals help you and
            payroll see how much pay, tax, and NI you have had so far. When you
            start mid-year or the code changes later, YTD helps smooth things.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>YTD pay increases each month as you earn.</li>
            <li>YTD tax and NI show cumulative deductions.</li>
            <li>If a code was wrong, later YTD can correct totals.</li>
          </ul>
        </section>

        {/* =========================================================
            6) COMMON SURPRISES
        ========================================================= */}
        <section id="surprises" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            6) Common surprises on the first payslip
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Pro-rata pay</h3>
              <p className="mt-2">
                You started mid-period, so you are paid for part of the month
                only. Next month will be higher if you work the full period.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Emergency code</h3>
              <p className="mt-2">
                BR/0T or W1/M1 appears. It often fixes after HMRC receives your
                starter info. If not, see our Tax Code guide to correct it.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Missing overtime</h3>
              <p className="mt-2">
                Some firms pay overtime one period later. Check the company
                cutoff date. It may appear next month.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            7) IF SOMETHING LOOKS WRONG — DO THIS
        ========================================================= */}
        <section id="fix-steps" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            7) If something looks wrong — do this
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Take a clear photo or export a PDF of your payslip.</li>
            <li>Highlight the lines that look wrong (rate/hours/code).</li>
            <li>Check your contract for rate, hours, overtime policy.</li>
            <li>Email payroll with bullet points (use our templates).</li>
            <li>For code issues, follow the Tax Code fix steps.</li>
          </ol>
          <div className="mt-4 p-4 border rounded-lg bg-green-50 text-sm">
            <p className="font-semibold text-green-900">Pro tip</p>
            <p>
              Keep a small log: dates, who you spoke to, what they said. This
              helps if a correction or refund is needed later.
            </p>
          </div>
        </section>

        {/* =========================================================
            8) TEMPLATES TO PAYROLL/HR
        ========================================================= */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            8) Email/Chat templates to payroll (easy English)
          </h2>

          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              A) First payslip check — rate/hours
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: First payslip check — <Your Name>, <Employee ID>

Hello Payroll,

Could you please help me confirm my first payslip?

• Pay period: <dates>
• My rate/hours in contract: <rate/hours>
• Payslip shows: <line from payslip>

I want to be sure everything matches my contract.
Thank you very much!

Kind regards,
<Your Name>`}
            </pre>
          </div>

          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              B) Missing overtime or bonus
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Overtime/bonus not shown — <Your Name>

Hello Payroll,

I cannot see my overtime/bonus for <date/work>. Could you confirm the cutoff date,
and if it will appear on the next payslip?

Thanks for your help,
<Your Name>`}
            </pre>
          </div>

          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              C) Tax code query (links to fix)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Tax code on payslip — request to check

Hello Payroll,

My payslip shows tax code <1257L/BR/0T/W1-M1>. I started on <date>.
Do you have my new starter information/P45 and my National Insurance Number (or application ref)?

If needed, I will also contact HMRC to correct the code. Thank you!

Kind regards,
<Your Name>`}
            </pre>
            <p className="text-xs text-gray-600 mt-2">
              Need the full correction flow? See{" "}
              <Link className="underline text-green-900" href="/community/uk-tax-code-for-italians-2025">
                UK Tax Code for Italians — Fix Emergency Tax
              </Link>
              .
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">
              D) NI letter clarification
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: NI category on payslip — clarification

Hello Payroll,

My payslip shows NI category <A/C/H/M/Z>. Could you confirm that this is correct for my situation?
If anything needs updating, please let me know what you need from me.

Thank you,
<Your Name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            9) MINI GLOSSARY
        ========================================================= */}
        <section id="glossary" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">9) Mini glossary (easy English)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>PAYE</strong>: “Pay As You Earn” tax system through your payroll.</li>
                <li><strong>NI</strong>: National Insurance contributions.</li>
                <li><strong>Gross pay</strong>: Before deductions.</li>
                <li><strong>Net pay</strong>: Money paid to your bank.</li>
                <li><strong>YTD</strong>: Totals since April of the tax year.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>P45</strong>: Form from a previous job in the UK.</li>
                <li><strong>P60</strong>: Year-end summary from your employer.</li>
                <li><strong>SSP/SMP/SAP</strong>: Statutory payments (sick, maternity, adoption).</li>
                <li><strong>Auto-enrolment</strong>: Automatic pension enrolment rules.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            10) CHECKLIST
        ========================================================= */}
        <section id="checklist" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            10) 10-minute payslip checklist (save this)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Correct name/address, payroll number, and pay dates.</li>
              <li>Rate/hours match your contract; overtime policy understood.</li>
              <li>Tax code and NI letter look right for you.</li>
              <li>Gross → deductions → net makes sense; compare to last month later.</li>
              <li>YTD figures appear and grow month by month.</li>
              <li>Keep a PDF copy; email payroll if something is unclear.</li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            RELATED GUIDES
        ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/uk-tax-code-for-italians-2025">
                UK Tax Code for Italians — Fix Emergency Tax (1257L, BR, 0T, W1/M1)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/open-uk-bank-account-no-credit-italians-2025">
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/national-insurance-number-italians-uk-2025">
                National Insurance Number (NIN) — 2025 Step-by-Step + Phone Script
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want us to check your payslip today?
          </h2>
          <p className="text-sm mb-4">
            Send your payslip and contract. We highlight the issues, prepare the
            exact message to payroll, and link the right tax-code fix if needed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              View Resinaro Services →
            </Link>
            <Link
              href="/checkout/tax-code-priority"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Priority Tax Code Check (+£20)
            </Link>
          </div>
        </section>

        {/* =========================================================
            DISCLOSURE
        ========================================================= */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This guide is general information, not financial or tax advice.
          Employers and payroll systems differ. Always follow your employer’s
          official payslip and HR guidance, and HMRC instructions when needed.
          Some links may earn us a small commission at no extra cost to you.
        </p>

        {/* =========================================================
            APPENDICES FOR SEO DEPTH & PRACTICAL VALUE
        ========================================================= */}

        {/* Appendix A: Where to find each item on different layouts */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix A — Finding items on different payslip layouts
          </h2>
          <p className="text-sm mb-3">
            Some payslips are landscape PDFs, others are portal screenshots.
            If you cannot find a box, search for these keywords:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Tax code & NI</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Look near “Tax details” or “PAYE”.</li>
                <li>Sometimes in a right-hand column sidebar.</li>
                <li>NI letter may sit next to NI totals.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Gross & net</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gross is above deductions lines.</li>
                <li>Net is often bold or at the bottom.</li>
                <li>YTD totals near the bottom or on last page.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Notes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Watch for footnotes about overtime cutoffs.</li>
                <li>Read messages from payroll about code changes.</li>
                <li>Save a copy with file name “YYYY-MM_payslip.pdf”.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix B: Pro-rata examples (starter mid-month) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix B — Pro-rata examples (starter mid-month)
          </h2>
          <p className="text-sm mb-3">
            If you start on the 15th, many employers pay half a month first,
            then full months after. Here is a simple idea:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Scenario</th>
                  <th className="text-left p-3 border-b">What you see</th>
                  <th className="text-left p-3 border-b">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Start 15th on monthly salary</td>
                  <td className="p-3">Half a month of basic pay</td>
                  <td className="p-3">Only half the period worked</td>
                </tr>
                <tr>
                  <td className="p-3">Start 3rd on weekly pay</td>
                  <td className="p-3">Partial first week</td>
                  <td className="p-3">Cutoff may be mid-week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Appendix C: Overtime & cutoff rules */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix C — Overtime and cutoff rules (why it shows later)
          </h2>
          <p className="text-sm mb-3">
            Many firms have a cutoff date. Hours after that date appear next
            month. Ask HR which date applies to you.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Submit timesheets early and keep copies/screenshots.</li>
            <li>Confirm your overtime rate and approval process.</li>
            <li>Escalate politely if approved hours are missing later.</li>
          </ul>
        </section>

        {/* Appendix D: Pension auto-enrolment timing */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix D — Pension auto-enrolment timing
          </h2>
          <p className="text-sm mb-3">
            You may be enrolled after a few weeks/months depending on employer
            rules and thresholds. Your contribution then appears as a deduction.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Read the welcome email from the pension provider.</li>
            <li>Decide if you stay in or opt out (deadline applies).</li>
            <li>Keep letters safe for future reference.</li>
          </ul>
        </section>

        {/* Appendix E: Student loan and postgraduate loan lines */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix E — Student loan deductions (and PGL)
          </h2>
          <p className="text-sm mb-3">
            If you told payroll you have a student loan (or PGL), you may see a
            line for it. It is not tax; it is a loan deduction rule.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Check the plan type you told HR (1, 2, 4, or PGL).</li>
            <li>If it looks wrong, email payroll to confirm plan type.</li>
            <li>Keep official letters from your loan company.</li>
          </ul>
        </section>

        {/* Appendix F: Benefits in kind & K codes (concept) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix F — Benefits in kind & K codes (concept only)
          </h2>
          <p className="text-sm mb-3">
            Some jobs have taxable benefits (car, medical, etc.). HMRC may use a
            K code to collect extra tax during the year.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Read HMRC letters carefully and keep them safe.</li>
            <li>Ask payroll to explain how benefits show on payslips.</li>
            <li>Check our Tax Code guide if a K code appears.</li>
          </ul>
        </section>

        {/* Appendix G: Name formatting & address consistency for Italians */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix G — Name & address consistency (Italians’ tip)
          </h2>
          <p className="text-sm mb-3">
            Use the same spelling as your passport. If a system rejects accents,
            remove them everywhere (HR, bank, council) to avoid mismatches.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Keep a note with your exact chosen format.</li>
            <li>Update HR if your address changes (postcodes are precise).</li>
            <li>Save letters as PDFs in a cloud folder.</li>
          </ul>
        </section>

        {/* Appendix H: Termination pay / final payslip basics */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix H — Final payslip when you leave
          </h2>
          <p className="text-sm mb-3">
            Your final payslip may include holiday pay balance, last overtime,
            and a P45 for your next employer.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ask when the P45 will be available.</li>
            <li>Confirm your address is updated for final documents.</li>
            <li>Keep copies for your records and future jobs.</li>
          </ul>
        </section>

        {/* Appendix I: Weekly vs monthly payslips differences */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix I — Weekly vs monthly payslips
          </h2>
          <p className="text-sm mb-3">
            Weekly pays some lines differently than monthly, but the same boxes
            exist: code, NI, gross, deductions, net.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Cutoff is usually mid-week for weekly payroll.</li>
            <li>YTD still accumulates across the tax year.</li>
            <li>Keep each PDF; weekly can be many files.</li>
          </ul>
        </section>

        {/* Appendix J: Holiday pay methods (rolled vs accrued) — concept only */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix J — Holiday pay methods (rolled vs accrued)
          </h2>
          <p className="text-sm mb-3">
            Some employers roll holiday pay into each wage; others accrue it and
            pay when you take time off. Check your contract or HR.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Rolled pay: extra % shown each period.</li>
            <li>Accrued: balance tracked, paid when used.</li>
            <li>Ask HR to explain your method in writing.</li>
          </ul>
        </section>

        {/* Appendix K: Statutory payments lines (SSP/SMP/SAP) quick glance */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix K — Statutory payments (SSP/SMP/SAP) at a glance
          </h2>
          <p className="text-sm mb-3">
            If you are sick, on maternity, or adoption leave, you may see
            statutory payment lines. Ask HR for eligibility rules.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>SSP: Statutory Sick Pay — waiting days may apply.</li>
            <li>SMP/SAP: maternity/adoption pay with set rates and weeks.</li>
            <li>Keep official letters and dates carefully.</li>
          </ul>
        </section>

        {/* Appendix L: Bank account & sort code checks for payroll */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix L — Bank account & sort code tips
          </h2>
          <p className="text-sm mb-3">
            If net pay does not reach your account, check the account number and
            sort code HR has on file. Typos can delay payments.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Confirm numbers when you start your job.</li>
            <li>Use your own UK account; avoid shared accounts.</li>
            <li>Notify payroll early if you change bank details.</li>
          </ul>
        </section>

        {/* Appendix M: Keep records like a pro (naming, storage) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix M — Keep records like a pro
          </h2>
          <p className="text-sm mb-3">
            Good records make everything easier (mortgages, visas, benefits,
            future jobs).
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>File names: <em>surname_payslip_YYYY-MM.pdf</em></li>
            <li>Backups: cloud + local copy.</li>
            <li>A folder per year for payslips and P60s.</li>
          </ul>
        </section>

        {/* Appendix N: When to ask for professional help */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix N — When to ask for help
          </h2>
          <p className="text-sm mb-3">
            If you have multiple incomes, benefits in kind, or repeated errors,
            ask for a quick review. A short expert look can save time and stress.
          </p>
          <div className="text-sm">
            Try our{" "}
            <Link href="/services" className="underline text-green-900">
              View Resinaro Services →
            </Link>{" "}
            and{" "}
            <Link href="/checkout/tax-code-priority" className="underline text-green-900">
              Priority Tax Code Check (+£20)
            </Link>
            .
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Ready to feel confident about your payslip?
          </h2>
          <p className="text-sm mb-4">
            We check your numbers, explain the code and NI letter, and draft the
            exact message to payroll or HMRC for any corrections.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              View Resinaro Services →
            </Link>
            <Link
              href="/community/uk-tax-code-for-italians-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Fix Emergency Tax Codes Next
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
