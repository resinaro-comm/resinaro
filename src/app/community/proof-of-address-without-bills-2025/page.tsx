// app/community/proof-of-address-without-bills-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

/**
 * Proof of Address Without Bills (2025) — 12 Accepted Docs + Copy-Paste Templates
 * Audience: Italians in the UK (average English), newcomers, renters in flat shares, people waiting for their first bill.
 * Style: Matches existing Resinaro community guides: calm typography, clear sections, tables, scripts, JSON-LD.
 * Goal: Become the definitive UK “Proof of Address without bills” hub with premium clarity and real-life fix paths.
 *
 * Key features:
 * - 12 accepted documents with nuances and fallback routes
 * - Bank, GP, DVLA, Council Tax, Employer variations
 * - C/O (care of) best-practice wording & host permission
 * - Templates: letters, emails, branch scripts, portal messages
 * - Fast-path flows for bank KYC, GP registration, SIM/utility starter docs
 * - Evidence bundle checklist + file-naming hygiene
 * - Schema: FAQ + HowTo to surface in snippets
 * - Friendly “Easy English”, not boring; still premium, practical, and specific
 */

export const metadata = {
  title:
    "Proof of Address Without Bills (2025) — 12 Accepted Docs + Copy-Paste Templates",
  description:
    "No utility bills yet? Use these 12 accepted documents for UK proof of address: tenancy, employer/GP letters, bank welcome letter loop, C/O wording, and scripts for banks, GP, DVLA. Premium, practical guide for Italians and newcomers.",
  alternates: {
    canonical: "/community/proof-of-address-without-bills-2025",
  },
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
        name: "Can I prove my UK address without utility bills?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Newcomers often use alternatives: tenancy agreements, employer letters, GP registration letters, council letters, bank welcome letters, and more. This guide shows 12 accepted documents and exact templates.",
        },
      },
      {
        "@type": "Question",
        name: "What is a C/O address and is it accepted?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "C/O (care of) means you receive mail at someone else’s address temporarily. Some banks and services accept it with correct wording and a host permission note. Always verify the exact requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Which proof is fastest for bank KYC?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A tenancy agreement in your name or a bank’s own welcome letter sent to your address are often fastest. Some digital banks accept initial onboarding without proof, then ask for it later.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a letter from my employer or university?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Many institutions accept employer or university letters on headed paper confirming your UK address. The letter must include your name, address, and date.",
        },
      },
      {
        "@type": "Question",
        name: "What if my name has accents or special characters?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use the same format across all services. If a system rejects accents, remove them consistently (bank, council, GP) to avoid mismatches.",
        },
      },
      {
        "@type": "Question",
        name: "How do I bundle evidence to avoid rejections?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Create a tidy evidence bundle: tenancy PDF, official letters (council/GP), and a bank welcome letter. Name files clearly and use high-quality scans. Follow our checklist and templates.",
        },
      },
    ],
  };

  // =========================================================
  // JSON-LD: HowTo — build a proof-of-address bundle in 20 minutes
  // =========================================================
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Build a UK proof-of-address bundle in 20 minutes (without utility bills)",
    totalTime: "PT20M",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose your fastest document",
        text:
          "Start with your tenancy agreement or a bank welcome letter. If not available, use an employer/GP letter template from this guide.",
      },
      {
        "@type": "HowToStep",
        name: "Add a second backup",
        text:
          "Add a council letter, NHS/GP registration letter, or university letter if possible.",
      },
      {
        "@type": "HowToStep",
        name: "Use correct address format",
        text:
          "Include house number, street, city, and full postcode. For C/O lines, follow the wording tips in this guide.",
      },
      {
        "@type": "HowToStep",
        name: "Scan clearly and name files",
        text:
          "Use bright light and flat surfaces. Name files with date and type, like surname_doc_YYYY-MM-DD.pdf.",
      },
      {
        "@type": "HowToStep",
        name: "Submit and track",
        text:
          "Send only what the service asks for. Keep a log of dates and confirmations. If rejected, use our fix templates.",
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
            src="/images/proof-of-address-uk-hero.png"
            alt="Proof of address without bills in the UK — premium step-by-step guide"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">
              IDENTITY & SETUP
            </span>
            <h1 className="text-2xl md:text-4xl font-bold">
              Proof of Address Without Bills (2025) — 12 Accepted Docs + Copy-Paste Templates
            </h1>
          </div>
        </div>

        {/* =========================================================
            WHY THIS GUIDE
        ========================================================= */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Zero bills yet? You still have options. Here’s the playbook.
          </h2>
          <p className="mb-3">
            You just moved. You need to open a bank account, register with a GP, or sort out the
            council—but your name isn’t on any bill yet. This guide shows the exact, accepted ways
            to prove your address in the UK without waiting for utilities. Think of it as your
            “documents upgrade path”—with copy-paste letters, branch scripts, and neat evidence bundles.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>12 accepted documents</strong> with clear requirements and caveats.</li>
            <li><strong>C/O (care of) wording</strong> that doesn’t get rejected.</li>
            <li><strong>Premium clarity</strong>: easy English, no fluff, high-value templates.</li>
          </ul>
        </section>

        {/* =========================================================
            TOC
        ========================================================= */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#accepted-docs">1) The 12 accepted documents (quick table)</a></li>
            <li><a className="underline text-green-900" href="#fastest-routes">2) Fastest routes by goal (Bank / GP / DVLA / Council)</a></li>
            <li><a className="underline text-green-900" href="#co-setup">3) C/O address setup (host permission + mailbox)</a></li>
            <li><a className="underline text-green-900" href="#templates">4) Templates: letters, emails, branch scripts</a></li>
            <li><a className="underline text-green-900" href="#bundle">5) Your “evidence bundle” checklist</a></li>
            <li><a className="underline text-green-900" href="#naming">6) File naming, scanning & metadata hygiene</a></li>
            <li><a className="underline text-green-900" href="#fix">7) Rejection reasons & instant fixes</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ (onsite)</a></li>
            <li><a className="underline text-green-900" href="#related">Related Resinaro guides</a></li>
          </ul>
        </nav>

        {/* =========================================================
            1) THE 12 ACCEPTED DOCS (TABLE)
        ========================================================= */}
        <section id="accepted-docs" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            1) The 12 accepted documents (quick comparison)
          </h2>
          <p className="mb-3">
            Not all services accept the same items. Use this table to pick the fastest two for your case.
            Always check the specific service’s latest list to confirm.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">#</th>
                  <th className="text-left p-3 border-b">Document</th>
                  <th className="text-left p-3 border-b">Where it works best</th>
                  <th className="text-left p-3 border-b">How to get it fast</th>
                  <th className="text-left p-3 border-b">Caveats</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    i: "1",
                    name: "Tenancy agreement (your name)",
                    best: "Banks, councils, DVLA, HR",
                    how: "Ask agent/landlord to add your legal name and start date",
                    caveat: "Scan all pages; match name spelling and postcode",
                  },
                  {
                    i: "2",
                    name: "Landlord/agent confirmation letter",
                    best: "Banks, GP",
                    how: "Use our template on agency headed paper or PDF",
                    caveat: "Needs contact details and date",
                  },
                  {
                    i: "3",
                    name: "Employer letter (headed paper)",
                    best: "Banks, councils (supporting)",
                    how: "HR prints/ PDFs a simple address confirmation",
                    caveat: "Include your full name, job title, address",
                  },
                  {
                    i: "4",
                    name: "University/college letter",
                    best: "Banks, GP, councils",
                    how: "Student services issues proof of enrolment + address",
                    caveat: "Full-time status or enrolment dates help",
                  },
                  {
                    i: "5",
                    name: "GP registration letter / NHS doc",
                    best: "Banks, councils",
                    how: "Register with a GP; request confirmation printout",
                    caveat: "Ensure address lines are exact",
                  },
                  {
                    i: "6",
                    name: "Council letter (CTAX or generic)",
                    best: "Banks, other admin",
                    how: "Register with council; download/receive first letter",
                    caveat: "Name + address must match other docs",
                  },
                  {
                    i: "7",
                    name: "Bank welcome/statement letter",
                    best: "Banks (later checks), other services",
                    how: "Ask bank to send a letter to your address (loop)",
                    caveat: "Use the ‘welcome letter loop’ below",
                  },
                  {
                    i: "8",
                    name: "Mobile/broadband contract confirmation",
                    best: "Supporting doc for banks, GP",
                    how: "Order SIM/broadband to your address with your name",
                    caveat: "Some services accept only certain providers",
                  },
                  {
                    i: "9",
                    name: "HMRC/official government letter",
                    best: "Almost everywhere",
                    how: "Keep any official letter to your UK address",
                    caveat: "Ensure your name/address format is consistent",
                  },
                  {
                    i: "10",
                    name: "Insurance policy schedule",
                    best: "Supporting doc (not everywhere)",
                    how: "Car/home/contents cover in your name at address",
                    caveat: "Check if accepted before using",
                  },
                  {
                    i: "11",
                    name: "School letter (for dependants)",
                    best: "Council, GP (family context)",
                    how: "Request address confirmation letter from school",
                    caveat: "May be supporting evidence, not primary",
                  },
                  {
                    i: "12",
                    name: "C/O host permission + posted letter in your name",
                    best: "Some banks, GP",
                    how: "Use correct C/O wording + host note; get letter posted to you",
                    caveat: "Not all services accept C/O; verify first",
                  },
                ].map((row) => (
                  <tr className="border-b" key={row.i}>
                    <td className="p-3 font-semibold">{row.i}</td>
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.best}</td>
                    <td className="p-3">{row.how}</td>
                    <td className="p-3">{row.caveat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Acceptance lists evolve. When in doubt, ask the specific service what they accept this month.
          </p>
        </section>

        {/* =========================================================
            2) FASTEST ROUTES BY GOAL
        ========================================================= */}
        <section id="fastest-routes" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            2) Fastest routes by goal (Bank • GP • DVLA • Council)
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Open/upgrade a bank account</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Use tenancy agreement <em>or</em> bank welcome letter (loop below).</li>
                <li>If no tenancy, try employer letter on headed paper.</li>
                <li>For C/O setups, ensure mailbox shows your name; request a posted letter in your name.</li>
                <li>Keep address format identical across all apps and documents.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-2">
                Many digital banks allow onboarding first, then ask for proof later. Prepare your document stack now to avoid freezes.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Register with a GP / NHS number flow</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Take tenancy or employer letter + ID to the GP reception.</li>
                <li>If using C/O: prepare host note and ensure mailbox label.</li>
                <li>Ask for a registration confirmation letter or printout with your address.</li>
                <li>Use that letter as supporting proof for banks and other services.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-2">
                Some practices accept online forms; you can still request a confirmation letter after registration.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">DVLA (licence address updates, etc.)</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Use tenancy, council letter, or bank letter with your exact address.</li>
                <li>Ensure postcode is perfect—DVLA is strict on formats.</li>
                <li>Keep a copy of the submission confirmation/screenshots.</li>
              </ol>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Council Tax registration / discounts</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Register early with tenancy details.</li>
                <li>Apply for single-person/student discounts if eligible.</li>
                <li>Download the first council letter as PDF—use it as a secondary proof for other services.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* =========================================================
            3) C/O SETUP
        ========================================================= */}
        <section id="co-setup" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">3) C/O address done right (host, mailbox, wording)</h2>
          <p className="mb-3">
            A C/O (care of) address is a temporary arrangement where you receive mail at someone else’s place.
            Done right, it can help you bridge the first weeks. Some services accept C/O with a permission note.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Wording format</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Address line 1: <em>C/O &lt;HOST SURNAME&gt;</em></li>
                <li>Address line 2: House number + Street</li>
                <li>Town/City + Postcode</li>
                <li>Use your legal name as addressee on mailed letters.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Mailbox & host permission</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ask host to label the mailbox with your name.</li>
                <li>Keep a signed permission note (template below).</li>
                <li>Update your address with services when you move to your own place.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Not all services accept C/O. Always check acceptance first. Use C/O mainly as a bridge to full tenancy proof.
          </p>
        </section>

        {/* =========================================================
            4) TEMPLATES
        ========================================================= */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            4) Templates you can copy (letters, emails, scripts)
          </h2>

          {/* A) Employer letter for address confirmation */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">A) Employer letter (headed paper)</h3>
            <p className="mb-2">
              Ask HR to put this on letterhead or as a signed PDF. It works well for banks and councils as supporting proof.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`<Company Name and Logo>
<Company Address>
<Phone/Email>
<Date>

To whom it may concern,

This letter confirms that <Full Name> (employee ID: <ID>) is employed at <Company Name>.
Their current UK address is:

<House Number and Street>
<Town/City>
<Postcode>

This information is correct to the best of our knowledge as of the date above.

Signed,
<Manager/HR Name>
<Title>
<Contact details>`}
            </pre>
          </div>

          {/* B) Landlord/agent confirmation letter */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">B) Landlord/Agent confirmation letter</h3>
            <p className="mb-2">
              Use when tenancy is new or the agreement hasn’t landed yet in your inbox. Ask for a PDF with agency logo and contact.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`<Agency Name and Logo>
<Agency Address>
<Phone/Email>
<Date>

Re: Proof of address for <Full Name>

We confirm that <Full Name> resides at:

<House Number and Street>
<Town/City>
<Postcode>

Tenancy start date: <DD/MM/YYYY>.

If you require further information, please contact us.

Kind regards,
<Agent Name>
<Title>`}
            </pre>
          </div>

          {/* C) GP registration confirmation request */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">C) GP registration confirmation request</h3>
            <p className="mb-2">
              Present this at the practice or email it after online registration. A printed confirmation works as supporting proof.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Confirmation of registration — <Your Name>

Hello,

I recently registered at your practice. Could you please provide a brief letter confirming my registration and current address:

<Your Full Name>
<House Number and Street>
<Town/City>
<Postcode>

This helps me complete other UK setup steps. Thank you very much.

Kind regards,
<Your Name>
<Phone / Email>`}
            </pre>
          </div>

          {/* D) C/O host permission note */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">D) C/O host permission note</h3>
            <p className="mb-2">
              Keep this signed note and show a photo of the mailbox label with your name if asked.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`To whom it may concern,

I, <Host Full Name>, confirm that <Your Full Name> may receive mail at my address:

<House Number and Street>
<Town/City>
<Postcode>

They are temporarily staying with me. I understand that letters may be sent to them here.

Signed,
<Host Full Name>    <Date>
<Contact details>`}
            </pre>
          </div>

          {/* E) Bank welcome letter loop */}
          <div className="bg-white border rounded-xl p-5 text-sm mb-6">
            <h3 className="font-semibold text-green-900 mb-2">E) Bank “welcome letter loop” message</h3>
            <p className="mb-2">
              Some banks can post an official letter to the address you claim. When it arrives, you scan it and use it as proof.
              Use C/O if needed and make sure the mailbox carries your name.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello Support,

Could you please send a confirmation/welcome letter to my current address:

<Your Full Name>
C/O <Host Surname> (if relevant)
<House Number and Street>
<Town/City>
<Postcode>

This letter will be used to complete verification at other services. Many thanks!`}
            </pre>
            <p className="text-xs text-gray-600 mt-2">
              If your bank cannot post it, ask whether a statement with address can be generated and mailed.
            </p>
          </div>

          {/* F) “Rejection fix” reply */}
          <div className="bg-white border rounded-xl p-5 text-sm">
            <h3 className="font-semibold text-green-900 mb-2">F) Rejection fix — polite reply template</h3>
            <p className="mb-2">
              If they reject your proof, respond calmly with exactly what you changed and provide the improved document.
            </p>
            <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: Address proof — resubmission with corrected details

Hello,

Thank you for your message. I have updated my proof of address with the exact format requested.
Please find attached:

• <Document name> (PDF) — full address with postcode and date
• <Optional second document> (PDF) — supporting letter

Could you please review this new submission? Thank you for your help.

Kind regards,
<Your Name>`}
            </pre>
          </div>
        </section>

        {/* =========================================================
            5) EVIDENCE BUNDLE
        ========================================================= */}
        <section id="bundle" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">5) Your “evidence bundle” (one folder, zero panic)</h2>
          <p className="mb-3">
            Build a small, clean folder you can reuse across banks, GP, council, and DVLA. Keep it in your
            cloud and update it when you move. This alone prevents 80% of delays.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Must-haves</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tenancy (PDF) or employer letter</li>
                <li>Official letter (council or GP)</li>
                <li>Bank welcome/statement letter (if possible)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Extras</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>SIM/broadband contract confirmation</li>
                <li>University/student letter</li>
                <li>Host permission + mailbox photo (C/O)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Naming</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><em>surname_docname_YYYY-MM.pdf</em></li>
                <li>Use clear scans (no glare, all corners visible)</li>
                <li>Keep a “sent_log.txt” with dates + who received</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) FILE NAMING & SCAN HYGIENE
        ========================================================= */}
        <section id="naming" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">6) File naming, scanning & metadata hygiene (premium polish)</h2>
          <div className="bg-white border rounded-xl p-5 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Scan quality rules</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Daylight or bright lamp; no shadows.</li>
                  <li>Flat surface; avoid curled pages.</li>
                  <li>Show full page; no fingers on edges.</li>
                  <li>Export as PDF if possible (or high-res JPG).</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Naming & metadata</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><em>rossi_tenancy_2025-02-05.pdf</em></li>
                  <li>Consider adding a short note in filename for clarity.</li>
                  <li>Keep EXIF stripped if you worry about personal metadata.</li>
                  <li>Use a consistent folder structure and dates.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Polished files get approved faster—reviewers are human. Help them say “yes”.
            </p>
          </div>
        </section>

        {/* =========================================================
            7) REJECTION REASONS & FIXES
        ========================================================= */}
        <section id="fix" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">7) Top rejection reasons (and instant fixes)</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Address format mismatch</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Postcode or line breaks differ.</li>
                <li><strong>Fix:</strong> Copy exact lines from tenancy; resubmit letter.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Name spelling differences</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Accents on one doc, none on others.</li>
                <li><strong>Fix:</strong> Choose one format and use it everywhere.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Outdated or undated letter</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Some services require a recent date window.</li>
                <li><strong>Fix:</strong> Request a fresh letter issued this month.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Always read the rejection message carefully; fix that exact item, then resubmit using our template above.
          </p>
        </section>

        {/* =========================================================
            FAQ (onsite)
        ========================================================= */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Does a bank statement screenshot count?
              </summary>
              <p className="mt-2">
                Screenshots are weak. Ask the bank for a posted letter or a formal PDF statement with your address.
                If posting is impossible, confirm what that service accepts as “statement”.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                I live in a flat share. The bills are not in my name. What now?
              </summary>
              <p className="mt-2">
                Try tenancy in your name, a landlord/agent letter, employer letter, GP letter, or the bank welcome letter loop.
                One of these usually lands within a week.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Will a digital-only letter be accepted?
              </summary>
              <p className="mt-2">
                Sometimes. But many services prefer posted letters or PDFs on headed paper with a date. If unsure, ask first.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                My GP won’t print a letter. Any alternative?
              </summary>
              <p className="mt-2">
                Ask for a registration confirmation email in PDF format or a summary printout at reception.
                Pair it with tenancy or employer letter if needed.
              </p>
            </details>
          </div>
        </section>

        {/* =========================================================
            RELATED GUIDES
        ========================================================= */}
        <section id="related" className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related Resinaro guides</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href="/community/open-uk-bank-account-no-credit-italians-2025">
                Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/council-tax-italians-2025">
                Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/uk-renting-for-italians-2025">
                UK Renting for Italians — Right to Rent, Referencing & Deposits
              </Link>
            </li>
          </ul>
        </section>

        {/* =========================================================
            CTA / SERVICES
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">Want us to assemble your proof-of-address bundle today?</h2>
          <p className="text-sm mb-4">
            We review your situation, craft the right letters, and guide you through bank/GP/council flows.
            You get a polished ZIP with everything formatted and named correctly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/proof-of-address-bundle"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Proof-of-Address Bundle (+£20)
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
          This guide is general information, not legal advice. Acceptance lists change by institution and time.
          Always follow the latest instructions in the specific service’s app or website. Some links may earn
          a small commission at no extra cost to you; this helps keep community guides free and updated.
        </p>

        {/* =========================================================
            PREMIUM APPENDICES (depth + practical value)
        ========================================================= */}

        {/* Appendix A: “Which two do I submit?” decision helper */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix A — Two-document decision helper</h2>
          <p className="text-sm mb-3">
            Many portals approve faster with two documents. Use these combos depending on what you have today.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-[#F9F6F1]">
                <tr>
                  <th className="text-left p-3 border-b">If you have…</th>
                  <th className="text-left p-3 border-b">Pair it with…</th>
                  <th className="text-left p-3 border-b">Why it works</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tenancy in your name</td>
                  <td className="p-3">Council letter or GP registration letter</td>
                  <td className="p-3">One contract + one official letter = strong match</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Employer letter</td>
                  <td className="p-3">Bank welcome letter (posted)</td>
                  <td className="p-3">Employment status + mailed proof confirms address</td>
                </tr>
                <tr>
                  <td className="p-3">C/O host permission</td>
                  <td className="p-3">GP letter addressed to you at that address</td>
                  <td className="p-3">Shows real mail delivery + host consent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Appendix B: Address formatting & postcode precision */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix B — Address formatting & postcode precision</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Preferred layout</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><em>Full Name</em></li>
                <li>House number + Street</li>
                <li>Town/City</li>
                <li>Postcode (exact)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Common pitfalls</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Wrong postcode letter/digit (B vs 8, O vs 0).</li>
                <li>Mixing “Road” with “Rd.” across documents.</li>
                <li>Using Italian order; use UK style consistently.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix C: Bank letter loop—field-tested flow */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix C — Bank letter loop (field-tested)</h2>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Confirm exact addressee format with the bank (include C/O if relevant).</li>
            <li>Ask support to post a confirmation/welcome letter to your address.</li>
            <li>Label your mailbox (host adds your surname).</li>
            <li>Wait for letter; scan it and store in your bundle.</li>
            <li>Submit to other services as “bank letter with address”.</li>
          </ol>
          <p className="text-xs text-gray-600 mt-2">
            Timing varies. Use a backup proof (employer/GP letter) if you’re in a hurry.
          </p>
        </section>

        {/* Appendix D: When a utility contract can help early */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix D — Early utility/telecom confirmations</h2>
          <p className="text-sm mb-3">
            Some providers issue an address confirmation as soon as you order a SIM or broadband, even before first bills.
            Not all services accept these, but they help as supporting evidence.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Order in your full name with correct address.</li>
            <li>Save the order confirmation PDF or email (convert to PDF).</li>
            <li>Pair with a stronger proof (tenancy/GP) for faster approval.</li>
          </ul>
        </section>

        {/* Appendix E: Name formats (accents, double surnames) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix E — Name formats (accents/double surnames)</h2>
          <p className="text-sm mb-3">
            If systems reject accents (é/ò/à), remove them consistently everywhere: bank, council, GP, DVLA.
            Consistency beats aesthetics; it reduces false mismatches and ticket back-and-forth.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Pick one “ASCII” spelling and stick to it.</li>
            <li>Use the same order for double surnames on all docs.</li>
            <li>Keep a personal “name format” note in your records.</li>
          </ul>
        </section>

        {/* Appendix F: Case studies (realistic scenarios) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix F — Case studies (what actually works)</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">New arrival, flat share</h3>
              <p className="mt-2">
                Employer letter + GP letter. Bank letter loop later for upgrades.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">C/O at a friend’s place</h3>
              <p className="mt-2">
                Host permission + mailbox label + posted letter in your name + GP registration.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Student moving mid-term</h3>
              <p className="mt-2">
                University letter + tenancy addendum + council letter once registered.
              </p>
            </div>
          </div>
        </section>

        {/* Appendix G: “Do this, not that” — reviewer’s perspective */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix G — Approver mindset: “Do this, not that”</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Do this</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Send the exact doc type they asked for.</li>
                <li>One clean PDF per doc; clear filenames.</li>
                <li>Consistent address and name across all items.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Avoid this</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Five photos of the same letter from different angles.</li>
                <li>Partial page scans or cropped corners.</li>
                <li>Creative address spellings that don’t match the tenancy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix H: If you move — smooth updates checklist */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix H — Moving? Update everything in one sweep</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Bank (ask for a posted letter to the new address).</li>
            <li>GP (request registration letter with new address).</li>
            <li>Council (CTAX, discounts, new tenancy dates).</li>
            <li>DVLA (driver’s licence and vehicle logbook).</li>
            <li>Employer/Payroll (payslip address for P60).</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            Keep a “move-out / move-in” mini-folder with confirmation PDFs for each update.
          </p>
        </section>

        {/* Appendix I: Quick scripts for live chat or branch visits */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix I — Live chat & branch scripts</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Bank — ask for posted letter</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I’m new in the UK and I’m building my address proof.
Could you please post a confirmation/welcome letter to my address?

<Your Full Name>
C/O <Host Surname> (if relevant)
<House Number and Street>
<Town/City>
<Postcode>`}
              </pre>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">GP reception — registration letter</h3>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Hello, I’m registering here. Could I please have a short letter confirming
my registration and my address for my bank and other services?

Name: <Your Full Name>
Address: <House Number and Street, Town/City, Postcode>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Appendix J: Evidence age windows (freshness matters) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix J — Evidence “freshness” windows</h2>
          <p className="text-sm mb-3">
            Some services require a document dated within the last 3 months. Others accept 6 months.
            Check the rule; if your letter is old, request a fresh one with today’s date.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Bank letters and statements — often 3 months.</li>
            <li>Council/official letters — often 3–6 months.</li>
            <li>Employer letters — aim for 1–2 weeks old for onboarding.</li>
          </ul>
        </section>

        {/* Appendix K: Digital vs posted letters — which is stronger? */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix K — Digital vs posted letters</h2>
          <p className="text-sm mb-3">
            Posted letters tend to carry more weight, because they prove mail is delivered to you at that address.
            When in doubt, ask for a posted letter—even if you already have the PDF.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Digital pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fast to obtain and share.</li>
                <li>Easy to store and back up.</li>
                <li>Good for initial checks.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Posted pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Proves delivery and physical presence.</li>
                <li>Stronger for stricter services (some banks, DVLA).</li>
                <li>Pairs well with a second digital letter for a strong bundle.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix L: Right-to-Rent vs Proof of Address — don’t confuse them */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix L — Right to Rent vs Proof of Address</h2>
          <p className="text-sm mb-3">
            Right to Rent is about your immigration permission. Proof of Address is about where you receive mail and live.
            Landlords/agents may ask for both; banks and GP are usually focused on address proof + ID.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Keep the two concepts separate in your documents and language.</li>
            <li>Use our Renting guide for Right to Rent specifics.</li>
          </ul>
        </section>

        {/* Appendix M: Master checklist (printable feel) */}
        <section className="bg-white border rounded-xl shadow-sm p-6 my-12">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Appendix M — Master checklist (10 minutes)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Pick two proofs that your target service accepts.</li>
            <li>Confirm address lines and postcode with tenancy.</li>
            <li>Get a fresh dated letter (employer, GP, council) if needed.</li>
            <li>Scan cleanly; save as PDF; name files clearly.</li>
            <li>Submit only what they ask; keep a sent log.</li>
            <li>If rejected, fix that one issue and resubmit politely.</li>
          </ul>
        </section>

        {/* =========================================================
            FINAL CTA (premium)
        ========================================================= */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Need it done right now? We’ll build your accepted bundle today.
          </h2>
          <p className="text-sm mb-4">
            You send us your situation; we return a polished set of proofs with correct wording, filenames,
            and a step-by-step submission plan for your bank/GP/council. No back-and-forth, no guesswork.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/proof-of-address-bundle"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Get the Proof-of-Address Bundle (+£20)
            </Link>
            <Link
              href="/community/open-uk-bank-account-no-credit-italians-2025"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              Next: Bank KYC Fast-Track
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


