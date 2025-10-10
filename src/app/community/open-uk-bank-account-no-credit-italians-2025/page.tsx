// app/community/open-uk-bank-account-no-credit-italians-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
 * Audience: Italians in the UK with average English. Step-by-step, short sentences.
 * Goal: outrank competitors with depth, clarity, tools (tables/templates), and internal links.
 * Style: matches existing Resinaro community guides.
 *
 * Notes:
 * - No dynamic fetch. Keep static and fast.
 * - Provide rich FAQ + HowTo JSON-LD.
 * - Include comparison tables, branch scripts, C/O wording, rejection fixes, starter credit moves.
 * - Strong CTAs to Banking & Credit Starter and related guides.
 */

export const metadata = {
  title:
    "Rejected by UK Banks? Fix KYC & Open Your Account (Easy English) — Italians’ 2025 Guide",
  description:
    "Step-by-step to pass UK bank KYC without credit history: documents that work, C/O address wording, digital vs high-street comparison, rejection fixes, branch scripts, and starter credit score moves. Tailored for Italians in simple English.",
  alternates: {
    canonical:
      "/community/open-uk-bank-account-no-credit-italians-2025",
  },
};

export default function Page() {
  // =========================================================
  // JSON-LD: FAQ (rich results)
  // =========================================================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Italians open a UK bank account without UK credit history?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Many banks accept passport or national ID plus UK contact details. If you lack proof of address, use alternatives like a tenancy, employer letter, or C/O wording. Digital banks often approve faster.",
        },
      },
      {
        "@type": "Question",
        name: "What if I was rejected by a UK bank?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Check why: blurry ID photo, address mismatch, name spelling, or missing UK phone. Fix the issue, wait a short time, and try again, or switch to a bank with easier KYC. A branch visit with the right script can also help.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a National Insurance Number to open a bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Many banks do not require a NIN to open an account. But you should apply for a NIN as soon as possible for your job and payroll records.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open an account with a C/O address (care of a friend)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some banks accept a C/O line when you are new in the UK. Use clear, correct wording and get permission from the host. Update your address later when you move to your own place.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for newcomers: digital banks or high-street banks?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Digital banks are fast and simple for ID checks. High-street banks are useful for cash deposits, in-branch support, and some visas. You can start with a digital bank and add a high-street account later.",
        },
      },
      {
        "@type": "Question",
        name: "How can I avoid account freezes?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use your own device and your own UK SIM. Keep transfers simple at first. Avoid sudden large amounts from unknown sources. If the bank asks for documents, reply fast with clear scans.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo (open an account smoothly)
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Open a UK bank account without UK credit history (Italians, 2025)",
    totalTime: "PT20M",
    step: [
      {
        "@type": "HowToStep",
        name: "Prepare documents",
        text:
          "Passport or Italian ID, UK mobile number, email. Add proof of address if available (tenancy, employer letter).",
      },
      {
        "@type": "HowToStep",
        name: "Choose bank type",
        text:
          "Start with a digital bank for quick KYC. Add a high-street account later if you need cash deposits or in-branch help.",
      },
      {
        "@type": "HowToStep",
        name: "Pass KYC checks",
        text:
          "Good light for selfie, steady hands, remove glasses. Name spelling exactly as in passport. Use UK SIM.",
      },
      {
        "@type": "HowToStep",
        name: "If rejected",
        text:
          "Fix the reason: clearer photos, C/O wording, correct address format. Try again or book a branch appointment.",
      },
      {
        "@type": "HowToStep",
        name: "Start using the account",
        text:
          "Activate the card, add to your phone wallet, and use small purchases. Keep transactions simple at the start.",
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
            src="/images/uk-bank-kyc-italians-hero.png"
            alt="Open UK bank account without credit history — simple steps for Italians"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              MONEY
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and who it’s for)
          </h2>
          <p className="mb-3">
            Many Italians arrive in the UK and try to open a bank account on the
            same day. Some apps reject them. Some branches ask for documents
            they do not have yet. It is stressful. This guide shows a simple,
            safe way to pass KYC, even if you have no UK credit history.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Short sentences, simple words, calm order.</li>
            <li>What to do first, what to say, what to show.</li>
            <li>Fix rejections fast and avoid freezes.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#who-can-open">1) Who can open (Italians) & quick requirements</a></li>
            <li><a className="underline text-green-900" href="#docs">2) Documents that work (with C/O wording)</a></li>
            <li><a className="underline text-green-900" href="#digital-vs-branch">3) Digital banks vs high-street (comparison)</a></li>
            <li><a className="underline text-green-900" href="#pass-kyc">4) Pass KYC first time (photo rules)</a></li>
            <li><a className="underline text-green-900" href="#rejected">5) If rejected — find the reason and fix</a></li>
            <li><a className="underline text-green-900" href="#branch-script">6) Branch script (easy English)</a></li>
            <li><a className="underline text-green-900" href="#proof-address">7) Proof of address without bills</a></li>
            <li><a className="underline text-green-900" href="#starter-credit">8) Starter credit score moves</a></li>
            <li><a className="underline text-green-900" href="#fees-transfers">9) Fees, limits, and transfers (basics)</a></li>
            <li><a className="underline text-green-900" href="#security">10) Security & how to avoid freezes</a></li>
            <li><a className="underline text-green-900" href="#templates">Templates: scripts, letters, and notes</a></li>
            <li><a className="underline text-green-900" href="#faq">Quick FAQ</a></li>
            <li><a className="underline text-green-900" href="#related">Related Resinaro guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) WHO CAN OPEN
        ========================================================= */}
        <section id="who-can-open" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            1) Who can open (Italians) & quick requirements
          </h2>
          <p className="mb-3">
            If you are Italian and living in the UK (or moving now), you can
            usually open a basic bank account. You do not need a UK credit
            history for this. You need identity, a UK mobile number, and a
            correct address format. Some banks ask for proof of address; some do
            not. Start with a bank that matches what you can provide today.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Minimum you need</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Italian passport or Carta d’Identità (valid).</li>
                <li>UK mobile number (SIM works best for SMS/ID).</li>
                <li>Email you can access (keep for years).</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Helpful extras</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Proof of address (tenancy, employer letter, C/O).</li>
                <li>UK payslip or job offer letter (optional).</li>
                <li>Backup ID (driving licence) if you have one.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Strategy</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open a digital account first for speed.</li>
                <li>Then add a high-street account for cash deposit.</li>
                <li>Keep both in good standing (helps later credit).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            2) DOCUMENTS THAT WORK (C/O)
        ========================================================= */}
        <section id="docs" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            2) Documents that work (with C/O address wording)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              You can open many accounts with only your ID and a UK mobile
              number. Some banks still ask for proof of address. If you do not
              have bills, use a tenancy or an employer letter. If you stay with
              a friend, use a C/O line (care of). Ask permission first.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Accepted items (common)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Passport or Carta d’Identità (photo and MRZ visible).</li>
                  <li>UK mobile number with SMS reception.</li>
                  <li>Tenancy agreement or letter from the landlord/agent.</li>
                  <li>Employer letter with company header and your address.</li>
                  <li>Official letter to your UK address (council, HMRC, GP).</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">C/O wording (care of)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Address line 1: <em>C/O &lt;HOST SURNAME&gt;</em></li>
                  <li>Address line 2: house number + street</li>
                  <li>Town/City and correct postcode</li>
                  <li>Ask host to label the mailbox with your name.</li>
                  <li>Update address later when you move.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Use the exact spelling from your ID. Remove accents if an app does not accept them.
            </p>
          </div>
        </section>

        {/* =========================================================
            3) DIGITAL vs HIGH-STREET (COMPARISON)
        ========================================================= */}
        <section id="digital-vs-branch" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            3) Digital banks vs high-street banks (which first?)
          </h2>
          <p className="mb-3">
            Digital banks are quick to start. High-street banks are useful for
            cash deposits and in-person help. Many people open both. Begin with
            what you can approve now, then add more features later.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Bank type</th>
                  <th className="text-left p-3 border-b">Pros</th>
                  <th className="text-left p-3 border-b">Cons</th>
                  <th className="text-left p-3 border-b">Best when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">Digital bank (app)</td>
                  <td className="p-3">
                    Fast KYC, easy onboarding, app control, spaces/savings
                    features, quick cards.
                  </td>
                  <td className="p-3">
                    Cash deposit can be limited, branch support is online only.
                  </td>
                  <td className="p-3">
                    You just arrived, need account number fast for salary.
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">High-street bank (branch)</td>
                  <td className="p-3">
                    Cash deposit, in-person help, sometimes better for certain
                    visas and formal letters.
                  </td>
                  <td className="p-3">
                    Slower onboarding, stricter proof of address rules, need an
                    appointment.
                  </td>
                  <td className="p-3">
                    You need cash services or you prefer a physical branch.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm mt-3">
            Strategy: open a digital account now, then book a branch for a
            second account when you have stable proof of address.
          </p>
        </section>

        {/* =========================================================
            4) PASS KYC FIRST TIME
        ========================================================= */}
        <section id="pass-kyc" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            4) Pass KYC first time (photo rules & name matching)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">
                  Photo & selfie rules
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Good light. Stand near a window; avoid backlight.</li>
                  <li>Hold the phone steady. Clean the camera lens.</li>
                  <li>Remove glasses and hats; tie back hair.</li>
                  <li>Frame the whole passport/ID page; no fingers on the MRZ.</li>
                  <li>Use the app’s live selfie guide; keep neutral face.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">
                  Name & address matching
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Write your name exactly like your passport.</li>
                  <li>If accents are not accepted, remove them consistently.</li>
                  <li>Address format: house number, street, town, postcode.</li>
                  <li>Use your own UK SIM number; do not borrow phones.</li>
                  <li>Keep the same email for all financial apps.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              If the first attempt fails, wait a little, then try again with
              better light and careful framing.
            </p>
          </div>
        </section>

        {/* =========================================================
            5) IF REJECTED
        ========================================================= */}
        <section id="rejected" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            5) If rejected — find the reason and fix it fast
          </h2>
          <p className="mb-3">
            Rejection does not mean “never”. It often means one small issue:
            blurry photo, address mismatch, or the app cannot read your MRZ. Fix
            the problem, then retry or switch bank type.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Common reasons</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Blurry ID or glare on the photo.</li>
                <li>Address format wrong or missing UK postcode.</li>
                <li>Foreign SIM (SMS fails) or borrowed device.</li>
                <li>Name spelling different between ID and app.</li>
                <li>Too many tries in a short time.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Fast fixes</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Retake photos with daylight and a plain background.</li>
                <li>Correct the address; add C/O line if staying with friends.</li>
                <li>Use your own UK SIM for SMS 2FA.</li>
                <li>Copy the name exactly as in your passport.</li>
                <li>Wait 24–48h before reapplying if the app blocks you.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Switch plan</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Try another digital bank with different KYC flow.</li>
                <li>Or book a branch appointment with documents ready.</li>
                <li>Bring employer letter if you have one.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) BRANCH SCRIPT
        ========================================================= */}
        <section id="branch-script" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            6) Branch script (easy English) — what to say in person
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <p className="mb-3">
              Use this at a high-street bank. Be polite and clear. Bring your
              ID, UK mobile, and any address proof you have.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I am Italian and new to the UK. I would like to open a basic current account.
Here are my documents:
• Passport / Italian ID (original)
• UK mobile number
• Address: <C/O Host Surname, number street, postcode> (I will update when I move)
• Employer letter / Tenancy (if you have it)

I am happy to complete any checks you need.
Could you please advise the simplest account I can open today?`}
            </pre>
            <p className="text-xs text-gray-600 mt-2">
              If they refuse C/O, ask kindly which document they accept and how
              to get it. Then return with that exact document.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) PROOF OF ADDRESS WITHOUT BILLS
        ========================================================= */}
        <section id="proof-address" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            7) Proof of address without bills (realistic options)
          </h2>
          <p className="mb-3">
            Many newcomers do not have bills for months. Use one of these
            alternatives. Always ask the bank which versions they accept.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Options</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tenancy agreement with your name.</li>
                <li>Employer letter on company letterhead.</li>
                <li>Letter from your university or college.</li>
                <li>Official letter from council / GP registration.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">C/O tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ask host to put your name on the mailbox.</li>
                <li>Keep a simple permission note signed by host.</li>
                <li>Update the bank when you move to your own place.</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            Each bank has its lists. If one bank says no, try another that
            accepts newcomers.
          </p>
        </section>

        {/* =========================================================
            8) STARTER CREDIT SCORE MOVES
        ========================================================= */}
        <section id="starter-credit" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            8) Starter credit score moves (build trust slowly)
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-green-900">Month 1–2</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use your account weekly for small purchases.</li>
                  <li>Receive salary into the account if possible.</li>
                  <li>Keep address consistent across services.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Month 3–4</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Add a simple bill in your name (SIM, broadband).</li>
                  <li>Consider a savings pot and pay in monthly.</li>
                  <li>Avoid overdrafts at the start.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Month 5–6</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Add a second account (high-street) if needed.</li>
                  <li>Keep all payments on time; no returned payments.</li>
                  <li>Start thinking about credit products only when stable.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Patience beats speed. One clean account with regular activity is
              better than many apps with errors.
            </p>
          </div>
        </section>

        {/* =========================================================
            9) FEES & TRANSFERS
        ========================================================= */}
        <section id="fees-transfers" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            9) Fees, limits, and transfers (basics to know)
          </h2>
          <p className="mb-3">
            Check fees before you move money. Start with small amounts. Keep
            notes of any limits in your app.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Common fees</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Card delivery or replacement (some banks).</li>
                <li>Cash deposit fees or partner shop fees.</li>
                <li>Overseas ATM or FX conversion costs.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Limits</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Daily card limits for new accounts.</li>
                <li>Transfer limits (raise later after KYC checks).</li>
                <li>Cash deposit caps per month.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            If a transfer is blocked, do not try ten times. Pause and read the
            message. The app may need extra documents first.
          </p>
        </section>

        {/* =========================================================
            10) SECURITY & FREEZES
        ========================================================= */}
        <section id="security" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            10) Security & how to avoid account freezes
          </h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Do this</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use your own phone and UK SIM.</li>
                  <li>Enable app lock, FaceID/TouchID, and 2FA.</li>
                  <li>Reply fast if the bank asks for documents.</li>
                  <li>Keep transactions simple in the first weeks.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Avoid this</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Do not receive money from strangers.</li>
                  <li>Do not let others use your account or card.</                  li>
                  <li>Do not send scans to random email addresses.</li>
                  <li>Do not click links in suspicious messages.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              If your account is paused, stay calm. Provide the documents they
              ask for. Keep copies and note the dates you sent them.
            </p>
          </div>
        </section>

        {/* =========================================================
            TEMPLATES & SCRIPTS
        ========================================================= */}
        <section id="templates" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Templates: scripts, letters, and notes (copy-paste)
          </h2>

          {/* A) Branch intro script */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              A) Branch intro (no bills yet)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`Hello, I am Italian and new to the UK. I would like to open a basic current account.
I have:
• Passport / Italian ID
• UK mobile number
• Address: C/O <Host Surname>, <house number and street>, <postcode>
I will update my address when I move to my own place.

Do you accept this today? If not, could you tell me which document you need, exactly?`}
            </pre>
          </div>

          {/* B) Employer letter request */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              B) Employer letter request (for proof of address)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`Subject: Letter for bank account — proof of address

Hello <HR/Manager>,

Could you please provide a short letter on company letterhead confirming:
• My name: <Name Surname>
• My employment status: <Job title / start date>
• My current address: <C/O Host Surname, number street, postcode>

The bank asked for a letter to open my account. Thank you very much!
Best regards,
<Your name>`}
            </pre>
          </div>

          {/* C) Host permission note */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              C) Host permission note for C/O address
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`To whom it may concern,

I, <Host Name>, give permission to <Your Name> to receive correspondence at:
<house number, street, town, postcode>.
They currently stay with me.

Signed,
<Host Name>  <Date>`}
            </pre>
          </div>

          {/* D) App rejection follow-up */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              D) App rejection follow-up (support chat/email)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`Hello support,

I tried to open an account today and received a rejection. I am Italian and new to the UK.
Could you please confirm the reason? I can re-submit clearer photos and correct address format:
C/O <Host Surname>, <house number and street>, <postcode>.

Thanks for your help!
<Your name>`}
            </pre>
          </div>

          {/* E) Address update to bank */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-900 mb-2">
              E) Address update to bank (after moving)
            </h3>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 text-sm rounded border">
{`Subject: Address update

Hello,

I moved to a new address. Please update my records to:
<New house number and street>
<Town/City>
<Postcode>

Thank you,
<Your name>`}
            </pre>
          </div>

          {/* F) KYC document naming tips */}
          <div className="bg-green-50 border rounded-lg p-4 text-sm">
            <p className="font-semibold text-green-900">Document naming tip</p>
            <p>
              Save files as <em>surname_document_YYYY-MM-DD</em> (e.g.,{" "}
              <em>rossi_passport_2025-01-15.jpg</em>). Use neutral light and
              flat paper. Avoid shadows and cropped edges.
            </p>
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
                Do I need a job to open a UK bank account?
              </summary>
              <p className="mt-2">
                Not always. A basic account is possible without a job. If you
                have a job offer, bring the letter because it helps show
                stability.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Will a digital bank be enough for my salary?
              </summary>
              <p className="mt-2">
                Usually yes. Many employers pay into digital banks. If your
                employer prefers a high-street bank, open that second account.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I use a friend’s address for the bank?
              </summary>
              <p className="mt-2">
                Ask permission and use a C/O line. Some banks accept it, some
                do not. Be ready to update your address later.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                What if I only have an Italian phone number?
              </summary>
              <p className="mt-2">
                Many KYC flows need a UK number. Buy a UK SIM with your name,
                then try the app again with that number.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My app keeps crashing during selfie. What now?
              </summary>
              <p className="mt-2">
                Close other apps, clean the camera, use daylight, and hold the
                phone steady. If it still fails, try another device you own or a
                branch account.
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
              <Link
                className="underline text-green-900"
                href="/community/national-insurance-number-italians-uk-2025"
              >
                National Insurance Number (NIN) — 2025 Step-by-Step + Phone Script
              </Link>
            </li>
            <li>
              <Link
                className="underline text-green-900"
                href="/community/uk-renting-for-italians-2025"
              >
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
            <li>
              <Link
                className="underline text-green-900"
                href="/community/uk-tax-code-for-italians-2025"
              >
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
            Want same-day help passing KYC and choosing the right bank?
          </h2>
          <p className="text-sm mb-4">
            We check your documents, address format, and app steps. We also give
            you the exact script for branch or chat support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/banking-credit-starter"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Banking & Credit Starter (+£20)
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
          This community guide is general information, not financial advice.
          Bank policies change. Always follow the latest instructions shown in
          your banking app or branch. Some links may earn us a small commission
          at no extra cost to you; this helps keep guides free and updated for
          the community.
        </p>

        {/* =========================================================
            EXPANDED APPENDICES (SEO depth and real value)
        ========================================================= */}

        {/* Appendix A: Digital banks quick-look table */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix A — Digital banks quick-look (features & onboarding feel)
          </h2>
          <p className="text-sm mb-3">
            Names vary over time; use this table as a concept. The idea is to
            compare approval speed, proof needs, and common features. Always
            check the current requirements in the bank app.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Bank (type)</th>
                  <th className="text-left p-3 border-b">Onboarding speed</th>
                  <th className="text-left p-3 border-b">Proof of address</th>
                  <th className="text-left p-3 border-b">Cash deposit</th>
                  <th className="text-left p-3 border-b">Card arrival</th>
                  <th className="text-left p-3 border-b">Useful for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">Digital A</td>
                  <td className="p-3">Very fast</td>
                  <td className="p-3">Often not needed at start</td>
                  <td className="p-3">Limited or via partner shops</td>
                  <td className="p-3">Few days</td>
                  <td className="p-3">Salary, daily spend, budgets</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">Digital B</td>
                  <td className="p-3">Fast</td>
                  <td className="p-3">Sometimes required later</td>
                  <td className="p-3">Often no direct cash deposit</td>
                  <td className="p-3">Few days</td>
                  <td className="p-3">Travel payments, FX</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Digital C</td>
                  <td className="p-3">Fast</td>
                  <td className="p-3">Accepts a wider range</td>
                  <td className="p-3">Partner stores with fee</td>
                  <td className="p-3">Few days</td>
                  <td className="p-3">Newcomers, simple KYC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            We avoid specific brand claims here. Always check your chosen bank’s official help pages in-app.
          </p>
        </section>

        {/* Appendix B: High-street banks quick-look */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix B — High-street banks quick-look (what branches like to see)
          </h2>
          <p className="text-sm mb-3">
            For many branches, the process is slower but stable. Bring original
            documents. Ask what they accept before the visit.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">Bank (type)</th>
                  <th className="text-left p-3 border-b">Appointment needed</th>
                  <th className="text-left p-3 border-b">Proof of address</th>
                  <th className="text-left p-3 border-b">Cash deposit</th>
                  <th className="text-left p-3 border-b">Extra notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">High-Street A</td>
                  <td className="p-3">Often yes</td>
                  <td className="p-3">Stricter; tenancy/official letters</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Bring employer letter for support</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="p-3 font-semibold">High-Street B</td>
                  <td className="p-3">Sometimes walk-in</td>
                  <td className="p-3">Accepts some alternatives</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Ask for a “basic account” if new</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">High-Street C</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Formal proof usually required</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Take your original passport/ID</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Each branch can be different. If one is strict, try another nearby.
          </p>
        </section>

        {/* Appendix C: Address formatting and postcodes */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix C — Address formatting & UK postcodes
          </h2>
          <p className="text-sm mb-3">
            UK postcodes are very precise. A single letter error can block mail
            or KYC. Always copy the exact format.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Format example</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Line 1: <em>C/O BIANCHI</em> (if using host)</li>
                <li>Line 2: 21 Example Street</li>
                <li>Town/City: London</li>
                <li>Postcode: SW1A 1AA</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check the postcode online if unsure.</li>
                <li>Ask your host to confirm the exact spelling.</li>
                <li>Put your name on the mailbox or door buzzer.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix D: If you need cash deposits often */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix D — If you need cash deposits regularly
          </h2>
          <p className="text-sm mb-3">
            Choose a bank with easy cash deposit. Some digital banks use partner
            shops with fees. High-street banks accept cash at ATM or counter.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ask about deposit limits per day/month.</li>
            <li>Keep receipts or screenshots of ATM confirmations.</li>
            <li>Avoid accepting cash for others; only your money.</li>
          </ul>
        </section>

        {/* Appendix E: Troubleshooting selfie and MRZ scans */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix E — Troubleshooting selfie & passport scans
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Selfie issues</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Turn off “beauty” filters; use the default camera.</li>
                <li>Hold still for 3 seconds after the prompt.</li>
                <li>Try a different room with better daylight.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Passport/ID issues</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Place the document on a dark, flat surface.</li>
                <li>Keep all corners visible; avoid fingers on the page.</li>
                <li>Clean the plastic cover; tilt slightly to avoid glare.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix F: When to add a second account */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix F — When to add a second account (upgrade path)
          </h2>
          <p className="text-sm mb-3">
            You can open a high-street account after your first digital account
            is working well. This gives you branch access and alternative
            features. Keep both accounts with the same name and address spelling
            for fewer problems.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Wait until you have stable proof of address.</li>
            <li>Bring original ID and a printed tenancy or letter.</li>
            <li>Ask for a basic account if your credit history is short.</li>
          </ul>
        </section>

        {/* Appendix G: Common Q&A for payroll and banks */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix G — Common questions banks and payroll ask
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Bank may ask</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Why you need the account (salary, rent, bills).</li>
                <li>Where you live now; when you moved to the UK.</li>
                <li>Source of funds (salary, savings).</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Payroll may ask</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account number and sort code (after opening).</li>
                <li>Your full name and current address.</li>
                <li>NIN or NIN application reference (when available).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix H: Red flags and scam awareness */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Appendix H — Red flags & scam awareness (stay safe)
          </h2>
          <p className="text-sm mb-3">
            Banks will never ask you to read your full card number and PIN to a
            stranger. If something feels wrong, stop and verify on the official
            app or phone number.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ignore emails asking for “urgent” bank login.</li>
            <li>Do not share one-time codes with anyone.</li>
            <li>Check the URL and use the official app store.</li>
          </ul>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Need help now? We’ll guide you through KYC today.
          </h2>
          <p className="text-sm mb-4">
            Send us photos of your ID and your address situation. We reply with
            the exact steps and a custom script for your bank or branch.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/banking-credit-starter"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Banking & Credit Starter (+£20)
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
