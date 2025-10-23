// app/community/uk-tax-code-for-italians-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * UK Tax Code for Italians — 2025
 * Style: matches existing Resinaro community guides (easy English, short sentences).
 * Goal: outrank competitors with depth, clarity, and conversion to Priority checks.
 *
 * Notes:
 * - No external libs. Minimal interactive bits (simple calculator with client-only logic avoided).
 * - Provide JSON-LD for FAQ/HowTo.
 * - Many templates and checklists for genuine value.
 * - Heavily interlinked to NIN, Renting, Banking, First Payslip.
 */

export const metadata = {
  title:
    "UK Tax Code for Italians — 2025: Fix Emergency Tax (1257L, BR, 0T, W1/M1) + Templates",
  description:
    "Simple 2025 guide for Italians: tax codes 1257L, BR, D0, 0T, W1/M1 emergency tax, first payslip checks, how to correct wrong tax code with HMRC and employer, plus easy email templates and step-by-step HowTo.",
  alternates: { canonical: "/community/uk-tax-code-for-italians-2025" },
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
        name: "What does tax code 1257L mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "1257L is the standard tax code for many employees in 2025. It means you receive the standard Personal Allowance spread across the year before income tax is taken.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my code BR or 0T on my first UK payslip?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "BR or 0T often appears when HMRC or your payroll does not have full details yet (no P45 or new starter info). This can cause higher tax than normal. You can correct it using the steps in this guide.",
        },
      },
      {
        "@type": "Question",
        name: "What does W1/M1 mean on my tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "W1/M1 means a 'week 1/month 1' emergency basis. Your allowance is applied as if this is the first pay period of the year. It usually updates automatically after HMRC receives your details.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a refund if I paid too much tax?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. If your code was wrong and you overpaid, you can receive a refund via payroll in a later payslip or from HMRC, depending on the timing.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a National Insurance Number before the tax code is correct?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can be paid before your NIN arrives, but you should apply for a NIN as soon as possible. Employers can pay you while the NIN is pending, but the final code is easier when your details are complete.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have two jobs (or a job and a pension)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "HMRC usually assigns your personal allowance to one job. The second job can get a BR or other code. You can ask HMRC to split allowances differently if needed.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (Correct a wrong tax code)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Correct a wrong UK tax code on your payslip (2025)",
    totalTime: "PT30M",
    step: [
      {
        "@type": "HowToStep",
        name: "Check your payslip",
        text:
          "Find your current tax code on your first payslip. Note BR, 0T, or W1/M1 if present.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm your details with employer",
        text:
          "Give the payroll your NI application reference or NIN if you have it, and ensure your personal details match.",
      },
      {
        "@type": "HowToStep",
        name: "Submit the correct new starter info",
        text:
          "If you started without a P45, provide new starter details so payroll can report to HMRC.",
      },
      {
        "@type": "HowToStep",
        name: "Contact HMRC if needed",
        text:
          "If the code still looks wrong, contact HMRC. Provide your details, start date, and employer PAYE reference if possible.",
      },
      {
        "@type": "HowToStep",
        name: "Monitor next payslip",
        text:
          "Your code should update. If you overpaid, expect a refund in a later payslip or directly from HMRC.",
      },
    ],
  };

  // =========================================================
  // Static "calculator" copy: We provide an explainer box (no JS).
  // =========================================================
  // We avoid dynamic calculations to keep the page static and accessible.

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* =========================================================
            HERO
          ========================================================= */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/tax-codes-uk-italians-hero.png"
            alt="UK tax codes explained for Italians: 1257L, BR, 0T, W1/M1"
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
              UK Tax Code for Italians — 2025: Fix Emergency Tax (1257L, BR,
              0T, W1/M1) + Templates
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
          ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and what to do first)
          </h2>
          <p className="mb-3">
            Many Italians see a strange tax code on the first payslip. Maybe{" "}
            <strong>BR</strong>, <strong>0T</strong>, or{" "}
            <strong>W1/M1</strong>. You pay too much tax. Do not panic. This
            guide explains what each code means in simple words and shows how to
            correct it step by step.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Short sentences. Easy English.</li>
            <li>Real actions you can do today.</li>
            <li>Copy-paste templates for HR and HMRC.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
          ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a className="underline text-green-900" href="#codes-overview">
                Tax code overview (quick table)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#first-payslip">
                First payslip: what to check
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#step-by-step">
                Step-by-step: fix a wrong code quickly
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#templates">
                Templates: HR & HMRC emails/calls
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#calculator">
                Simple tax-code explainer (static)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#multiple-jobs">
                Multiple jobs or job + pension
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#student">
                Students, part-time, and first job in the UK
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#refunds">
                Refunds: how they work
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#faq">
                Quick FAQ (onsite)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#related">
                Related Resinaro guides
              </a>
            </li>
          </ul>
        </nav>

        {/* =========================================================
            TAX CODES OVERVIEW
          ========================================================= */}
        <section id="codes-overview" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Tax code overview (quick table)
          </h2>
          <p className="mb-3">
            Your tax code tells payroll how much Personal Allowance to apply and
            how to tax your pay. Here are common codes you will see in 2025.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Code</th>
                  <th className="text-left p-3 border-b">Simple meaning</th>
                  <th className="text-left p-3 border-b">Why you see it</th>
                  <th className="text-left p-3 border-b">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">1257L</td>
                  <td className="p-3">Standard allowance</td>
                  <td className="p-3">Most single employees, main job</td>
                  <td className="p-3">Usually correct. Just check details.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">BR</td>
                  <td className="p-3">Basic rate only on all pay</td>
                  <td className="p-3">Second job or HMRC missing info</td>
                  <td className="p-3">Provide new starter info, contact HMRC if needed</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">0T</td>
                  <td className="p-3">No personal allowance applied</td>
                  <td className="p-3">Missing details (often first payslip)</td>
                  <td className="p-3">Send missing info, ask payroll to re-check</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">D0 / D1</td>
                  <td className="p-3">Higher rate on all pay</td>
                  <td className="p-3">Usually second job or high income</td>
                  <td className="p-3">Check if allowances should be split</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">W1 / M1</td>
                  <td className="p-3">Emergency (week 1 / month 1)</td>
                  <td className="p-3">Temporary until HMRC updates records</td>
                  <td className="p-3">Often fixes automatically; chase if not</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Kxxx</td>
                  <td className="p-3">Negative allowances (benefits, debt)</td>
                  <td className="p-3">HMRC collects owed tax via code</td>
                  <td className="p-3">Read HMRC letter; confirm numbers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Codes can change during the year if your situation changes.
          </p>
        </section>

        {/* =========================================================
            FIRST PAYSLIP
          ========================================================= */}
        <section id="first-payslip" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            First payslip: what to check (5-minute list)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Check these</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tax code shown (top area of payslip).</li>
                  <li>Your name, address, and National Insurance Number (or reference if pending).</li>
                  <li>Employer name, pay date, payroll number.</li>
                  <li>Gross pay, tax deducted, NI deducted.</li>
                  <li>Year-to-date (YTD) figures (if provided).</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">If it looks wrong</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Take a photo or PDF copy for records.</li>
                  <li>Ask HR/payroll if they have your new starter info.</li>
                  <li>Provide P45 if you have one, or complete their form.</li>
                  <li>Confirm your NIN (or application reference) is recorded.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Employers can pay you even if your NIN is not yet issued. But
              provide it as soon as you receive it to avoid delays.
            </p>
          </div>
        </section>

        {/* =========================================================
            STEP-BY-STEP FIX
          ========================================================= */}
        <section id="step-by-step" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Step-by-step: fix a wrong tax code (quick wins)
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-sm">
            <li>
              <strong>Gather details.</strong> Your payslip, start date, job
              title, employer PAYE reference (if you have it), and your NIN or
              application reference.
            </li>
            <li>
              <strong>Check with payroll first.</strong> Ask if your new starter
              info is complete (or provide P45). Confirm your address and name
              spellings match official ID.
            </li>
            <li>
              <strong>Monitor your next payslip.</strong> W1/M1 often fixes
              itself after HMRC receives your details. If not, continue.
            </li>
            <li>
              <strong>Contact HMRC.</strong> Explain it is your first UK job and
              your code looks wrong (BR/0T). Provide your details and your
              employer’s name. Ask for the correct code to be issued.
            </li>
            <li>
              <strong>Refund handling.</strong> If you overpaid because of the
              wrong code, your employer can usually refund via payroll when the
              new code arrives. If your job ended, HMRC may send the refund.
            </li>
          </ol>
          <div className="mt-5 p-4 border rounded-lg bg-green-50 text-sm">
            <p className="font-semibold text-green-900">
              Pro tip: keep a mini log
            </p>
            <p>
              Write dates, names, and what you sent. Screenshots help if you
              need to chase a fix or request a refund later.
            </p>
          </div>
        </section>

        {/* =========================================================
            TEMPLATES
          ========================================================= */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Templates: emails & calls (easy English)
          </h2>

          {/* Payroll / HR Email */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">A) Email to payroll/HR: wrong code on first payslip</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Tax code on first payslip — request to check

Hello <HR/Payroll>,

I started on <date> and my first payslip shows tax code <BR/0T/W1-M1>.
I think this is an emergency code.

Here are my details:
• Full name: <Name Surname>
• National Insurance Number (or application ref): <NIN or ref>
• Address: <address>
• New starter details / P45: <attached or provided>

Can you please confirm my details are complete and advise next steps?
Thank you very much.

Kind regards,
<Your name>
<Employee ID, if any>`}
            </pre>
          </div>

          {/* HMRC Call Script */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">B) HMRC call script: code BR/0T, please review</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, my name is <Name Surname>. I am an Italian citizen working in the UK.
My first payslip shows tax code <BR/0T/W1-M1>.

• I started working on <date> at <employer name>.
• National Insurance Number (or application reference): <NIN or ref>.
• My personal details and address match my ID.

Could you please review my tax code and issue the correct one to my employer?
If you need more information, I am happy to provide it.

Thank you.`}
            </pre>
          </div>

          {/* Multi-job Split Request */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">C) Allowance split request (two jobs)</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Personal Allowance split request for two employments

Hello HMRC,

I currently have two jobs:
• Job 1 (main): <employer name>, start <date>
• Job 2 (secondary): <employer name>, start <date>

Please could you assign my Personal Allowance to Job 1 and set Job 2 as BR,
or advise the best split for my situation?

My details:
• Full name: <Name Surname>
• NIN: <number>
• Address: <address>

Thank you,
<Your name>`}
            </pre>
          </div>

          {/* Refund Follow-up */}
          <div className="bg-white border rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">D) Refund follow-up message</h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Overpaid tax — refund request

Hello <HR/Payroll/HMRC>,

I believe I overpaid tax due to the tax code <BR/0T/W1-M1> on my first payslip(s).
My code has now been corrected to <new code> on <date>.

Could you confirm when the refund will be processed?
If via payroll, will it appear on my next payslip? If not, please advise HMRC process.

Thank you,
<Your name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            CALCULATOR EXPLAINER (STATIC)
          ========================================================= */}
        <section id="calculator" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Simple tax-code explainer (static)
          </h2>
          <p className="mb-3 text-sm">
            This is not a live calculator. It is a simple explanation to help
            you read your payslip. For exact numbers always check your payslip
            and payroll portal.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">1257L idea</h3>
              <p>
                Your personal allowance is spread through the year. Early months
                can be lighter tax if you started after April. Year-to-date
                figures smooth it out.
              </p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">BR idea</h3>
              <p>
                All pay taxed at basic rate (no allowance). This is common for a
                second job or when data is missing. Fix by sending new starter
                info and contacting HMRC if needed.
              </p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">0T idea</h3>
              <p>
                No allowance used. Can be high tax on first payslip. Send the
                missing details and ask payroll to re-check with HMRC data.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Your tax code can change mid-year once HMRC updates records.
          </p>
        </section>

        {/* =========================================================
            MULTIPLE JOBS
          ========================================================= */}
        <section id="multiple-jobs" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Multiple jobs or a job + pension (how codes are assigned)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              If you have more than one source of income, HMRC usually assigns
              your personal allowance to one job. The other job may receive a{" "}
              <strong>BR</strong> or other code. You can ask HMRC to change the
              split if it helps your situation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900">Example split</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Main job: 1257L (allowance here).</li>
                  <li>Second job: BR (tax all at basic rate).</li>
                  <li>Adjust later if income changes.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keep all P45/P60 and payslips for records.</li>
                  <li>Update HMRC if your income pattern changes.</li>
                  <li>Ask payroll which code they received and when.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STUDENTS / FIRST JOB
          ========================================================= */}
        <section id="student" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Students, part-time, and first job in the UK
          </h2>
          <p className="mb-3">
            For many students and newcomers, the first payslip uses an emergency
            code until HMRC gets your details. This is normal. The fix is the
            same: ensure payroll has your correct data and contact HMRC if it
            does not update.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Prepare</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Give your new starter info early.</li>
                <li>Keep copy of your ID and address.</li>
                <li>Tell HR if you have another job.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Watch for W1/M1</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>It often corrects itself next pay.</li>
                <li>If not, call HMRC with employer details.</li>
                <li>Keep your log of dates and names.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Refunds</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payroll can refund on a later payslip.</li>
                <li>If the job ends, HMRC may refund you.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            REFUNDS
          ========================================================= */}
        <section id="refunds" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Refunds: how they work (and how to track)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              If you paid too much because of an emergency code, your employer
              can usually refund via payroll after the correct code arrives.
              Watch the next payslips. If you left the job, HMRC may send the
              refund directly to you after final checks.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900">What to keep</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Copies of payslips showing BR/0T/W1-M1.</li>
                  <li>Emails to payroll and HMRC replies.</li>
                  <li>Final payslip or P45 if job ended.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Timing</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Refund can appear next pay cycle.</li>
                  <li>If HMRC is involved, time varies.</li>
                  <li>Keep your bank details up to date.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Beware of scam emails pretending to be HMRC. Use official
              channels. Do not share bank details via random links.
            </p>
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
              <Link
                className="underline text-green-900"
                href="/community/national-insurance-number-italians-uk-2025"
              >
                National Insurance Number (NIN) — 2025 Step-by-Step + Phone
                Script
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/uk-renting-for-italians-2025">
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/life-in-uk">
                Life in the UK: Bank Account, Credit & First Payslips
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
          ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want us to check your tax code today?
          </h2>
          <p className="text-sm mb-4">
            We spot code errors fast and prepare the exact message to send to
            payroll or HMRC based on your case. Clear, same-day guidance.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/tax-code-priority"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Priority Tax Code Check (+£20)
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
          This community guide is general information, not financial or tax
          advice. Processes can change. Always follow the latest instructions
          from HMRC and your employer. Some links may earn us a small
          commission at no extra cost to you; this helps keep guides free and
          updated for the community.
        </p>

        {/* =========================================================
            LONG-FORM APPENDIX (SEO depth, plain English)
            The following sections add depth for SEO and reader value.
          ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix A — Understanding UK tax codes in plain English
          </h2>
          <p className="text-sm mb-3">
            A <strong>tax code</strong> is a short label used by payroll to
            calculate income tax on your salary. It is not the same as your{" "}
            <strong>National Insurance Number</strong>. Your NIN is a permanent
            identifier. Your tax code can change during the year if your
            situation changes (new job, benefits in kind, corrections).
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Letters & numbers</h3>
              <p>
                The number part is linked to the amount of allowance. The letters
                tell payroll how to apply it (L, BR, D0, 0T, K, and so on).
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Main vs second job</h3>
              <p>
                HMRC usually puts the allowance on your main job. The second job
                can be BR or another code. You can ask HMRC to move or split the
                allowance if helpful.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Emergency codes</h3>
              <p>
                W1/M1 means payroll treats the month like the first month only.
                It often corrects itself. BR/0T usually needs you to provide or
                confirm missing information.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix B — What your employer needs from you
          </h2>
          <p className="text-sm mb-3">
            Your employer cannot guess your history. They need your{" "}
            <strong>new starter information</strong> if you did not give a P45
            (document from a previous UK employer). Many Italians start their
            first UK job without a P45. That is fine. Just answer the new
            starter questions honestly.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Typical questions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Is this your first job since the 6 April tax year?</li>
                <li>Do you have another job or a pension?</li>
                <li>Are you a student with a loan? (loan plan type if yes)</li>
                <li>Your address and date you started.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Tips for Italians</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the same spelling of your name as on your passport.</li>
                <li>Write the correct postcode. UK postcodes are precise.</li>
                <li>If you live “care of” a friend, add C/O in address line 1.</li>
                <li>Give your NIN once you receive it by post.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix C — Common mistakes and quick fixes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Mistakes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name mismatch between ID and payroll profile.</li>
                <li>Different addresses between documents and HR forms.</li>
                <li>No new starter form or missing P45 details.</li>
                <li>NIN missing or typed wrong (when available).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Fixes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Update your details with HR; send clear scans.</li>
                <li>Resubmit the new starter questionnaire.</li>
                <li>Call HMRC if the code does not change after payroll update.</li>
                <li>Keep a log and request refund once corrected.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix D — Reading the payslip (fields explained)
          </h2>
          <p className="text-sm mb-3">
            Payslips can look different by employer, but most include these
            items. Use this list to understand the structure.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Top section</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Employer name and address.</li>
                <li>Employee name and address.</li>
                <li>Payroll number or employee ID.</li>
                <li>Pay period dates and pay date.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Tax/NI area</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tax code (e.g., 1257L, BR, 0T, W1/M1).</li>
                <li>National Insurance category letter.</li>
                <li>Tax deducted and YTD totals.</li>
                <li>NI deducted and YTD totals.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Pay lines</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Basic pay, overtime, bonuses.</li>
                <li>Deductions (pension, loans, benefits).</li>
                <li>Net pay to your bank account.</li>
                <li>Notes or messages from payroll.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix E — Two common scenarios (worked examples)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Scenario 1: First job, no P45</h3>
              <p className="mb-2">
                Maria arrives from Italy and starts in June. No P45. First
                payslip shows 0T. She emails HR with new starter info and her
                NIN application reference. HR updates payroll. Next payslip
                shows 1257L W1/M1. Third payslip shows 1257L without W1/M1. The
                extra tax is refunded via payroll automatically.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Scenario 2: Two jobs</h3>
              <p className="mb-2">
                Luca has a main job in a restaurant and a second job for
                deliveries. HMRC puts 1257L on the main job and BR on the
                second. Luca asks HMRC to keep it that way. He checks both
                payslips monthly and keeps YTD records for any future changes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix F — If you moved or changed name
          </h2>
          <p className="text-sm mb-3">
            When your address or name changes, update HR and HMRC. Differences
            between systems can delay code updates or letters. Use plain,
            consistent spelling across documents.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Address tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use correct postcode format (e.g., SW1A 1AA).</li>
                <li>If “care of”, add C/O and host surname.</li>
                <li>Tell HR and your bank after moving.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Name tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Match passport spelling.</li>
                <li>Provide marriage certificate or deed if changed.</li>
                <li>Update all systems at the same time where possible.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix G — Student loans and tax codes
          </h2>
          <p className="text-sm mb-3">
            If you have a student loan, payroll needs to know your loan plan
            type (for UK loans) or if you have an overseas loan. This affects
            deductions from pay but does not change your income tax code number
            directly. Always provide accurate details on your starter forms.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Confirm if you have Postgraduate Loan (PGL) as well.</li>
            <li>Tell payroll if you repaid the loan or if a payment holiday applies.</li>
            <li>Keep letters from the loan company for records.</li>
          </ul>
        </section>

        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix H — When to ask for professional help
          </h2>
          <p className="text-sm mb-3">
            Most code issues are simple and fix quickly. Ask for help when: you
            have multiple income sources, benefits in kind (company car, medical
            cover), or you suspect historic errors. A quick review can save you
            time and stress.
          </p>
          <div className="mt-4 text-sm">
            <Link href="/checkout/tax-code-priority" className="underline text-green-900">
              Priority Tax Code Check (+£20)
            </Link>{" "}
            — same-day action plan for your exact case.
          </div>
        </section>

        {/* =========================================================
            ONSITE FAQ (matches JSON-LD but expanded)
          ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Quick FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My code is 1257L W1/M1 — is this a problem?
              </summary>
              <p className="mt-2">
                W1/M1 means emergency basis for the current period. Often it
                updates on the next payslip when HMRC and payroll align. If it
                does not change, contact HR and HMRC using our templates.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                I do not have my National Insurance Number yet. Can I still be paid?
              </summary>
              <p className="mt-2">
                Yes. Employers can pay you with your details and your NIN
                application reference. Give your NIN to HR once you receive it
                by post to tidy up records.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My tax is very high with BR. What should I do first?
              </summary>
              <p className="mt-2">
                Send your new starter details or P45 to payroll. Ask them to
                confirm they submitted your information. If needed, call HMRC
                with your employer name and start date and ask them to issue the
                correct code.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I split my allowance between two jobs?
              </summary>
              <p className="mt-2">
                Yes, you can ask HMRC to do this, but many people keep the
                allowance on the main job and use BR on the second. It depends
                on your income and preferences.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                I changed address. Do I need to tell HMRC?
              </summary>
              <p className="mt-2">
                Yes, keep HMRC, your employer, and your bank updated. Use the
                same spelling and format to avoid mismatches.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
          ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Ready to fix your code and stop overpaying?
          </h2>
          <p className="text-sm mb-4">
            Send us your payslip and short summary. We reply with exact steps
            and your tailored email to HR/HMRC today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/tax-code-priority"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Priority Tax Code Check (+£20)
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
