// app/community/proof-of-address-without-bills-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Proof of Address Without Bills (2025) — 12 Accepted Docs + Copy-Paste Templates",
  description:
    "No utility bills yet? Use these 12 accepted documents for UK proof of address: tenancy, employer/GP letters, bank welcome letter loop, C/O wording, and scripts for banks, GP, DVLA. Premium, practical guide for Italians and newcomers.",
  alternates: { canonical: "/community/proof-of-address-without-bills-2025" },
};

export default function Page() {
  // —— JSON-LD ——
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
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* —— HERO —— */}
      <section className="relative w-full h-[62vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/proof-of-address-uk-hero.png"
          alt="Proof of address without bills in the UK — premium step-by-step guide"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide bg-emerald-700/85 px-3 py-1 rounded-full">
                IDENTITY • SETUP
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Proof of Address Without Bills (2025)
              </h1>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                12 accepted documents, C/O wording that works, copy-paste letters, and a fast
                “evidence bundle” so banks, GP, council and DVLA say yes the first time.
              </p>
              <p className="mt-4 text-[12px] text-white/80">
                Updated for 2025 • Written for Italians in the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* —— Meta bar —— */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xs text-gray-600 flex flex-wrap gap-x-6 gap-y-2">
          <span>✔ Easy English</span>
          <span>✔ Deposit & KYC-safe wording</span>
          <span>✔ Templates included</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          {/* —— MAIN —— */}
          <div>
            {/* Quick answers (replaces long button strip) */}
            <section className="mb-8">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { href: "#fastest-routes", title: "Bank fast-track", sub: "KYC options now" },
                  { href: "#co-setup", title: "C/O done right", sub: "Host + mailbox + copy" },
                  { href: "#accepted-docs", title: "12 documents", sub: "What works where" },
                  { href: "#templates", title: "Templates", sub: "Letters & scripts" },
                ].map((c) => (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="group rounded-2xl bg-white border shadow-sm px-4 py-4 hover:border-emerald-300 transition"
                  >
                    <p className="font-semibold text-emerald-900">{c.title} →</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">{c.sub}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Why this guide */}
            <section className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                Zero bills yet? You still have options. Here’s the playbook.
              </h2>
              <p className="mb-3">
                You just moved. You need to open a bank account, register with a GP, or sort the
                council—but your name isn’t on any bill yet. This guide shows exact, accepted ways
                to prove your address without waiting. Copy, paste, submit.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>12 accepted documents</strong> with caveats.</li>
                <li><strong>C/O wording</strong> that doesn’t get rejected.</li>
                <li><strong>Evidence bundle</strong> + file-naming hygiene.</li>
              </ul>
            </section>

            {/* 1) table */}
            <section id="accepted-docs" className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                1) The 12 accepted documents (quick comparison)
              </h2>
              <p className="mb-3">
                Not every service accepts the same proof. Pick the fastest two below for your case.
              </p>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-[#F4EFE8]">
                    <tr className="[&>th]:text-left [&>th]:p-3 [&>th]:border-b">
                      <th>#</th><th>Document</th><th>Where it works best</th><th>How to get it fast</th><th>Caveats</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:nth-child(even)]:bg-[#FBF9F6]">
                    {[
                      {i:"1",name:"Tenancy agreement (your name)",best:"Banks, councils, DVLA, HR",how:"Ask agent/landlord to add your legal name and start date",caveat:"Scan all pages; match name spelling and postcode"},
                      {i:"2",name:"Landlord/agent confirmation letter",best:"Banks, GP",how:"Use our template on agency headed paper or PDF",caveat:"Needs contact details and date"},
                      {i:"3",name:"Employer letter (headed paper)",best:"Banks, councils (supporting)",how:"HR prints/PDFs a simple address confirmation",caveat:"Include your full name, job title, address"},
                      {i:"4",name:"University/college letter",best:"Banks, GP, councils",how:"Student services issues proof of enrolment + address",caveat:"Full-time status or enrolment dates help"},
                      {i:"5",name:"GP registration letter / NHS doc",best:"Banks, councils",how:"Register with a GP; request confirmation printout",caveat:"Ensure address lines are exact"},
                      {i:"6",name:"Council letter (CTAX or generic)",best:"Banks, other admin",how:"Register with council; download/receive first letter",caveat:"Name + address must match other docs"},
                      {i:"7",name:"Bank welcome/statement letter",best:"Banks (later checks), other services",how:"Ask bank to send a letter to your address (loop)",caveat:"See ‘welcome letter loop’"},
                      {i:"8",name:"Mobile/broadband contract confirmation",best:"Supporting doc for banks, GP",how:"Order SIM/broadband to your address with your name",caveat:"Some services accept only certain providers"},
                      {i:"9",name:"HMRC/official government letter",best:"Almost everywhere",how:"Keep any official letter to your UK address",caveat:"Ensure your name/address format is consistent"},
                      {i:"10",name:"Insurance policy schedule",best:"Supporting doc (not everywhere)",how:"Car/home/contents cover in your name at address",caveat:"Check if accepted before using"},
                      {i:"11",name:"School letter (dependants)",best:"Council, GP (family context)",how:"Request address confirmation letter from school",caveat:"Often supporting, not primary"},
                      {i:"12",name:"C/O host note + posted letter in your name",best:"Some banks, GP",how:"Correct C/O wording + host note; get letter posted to you",caveat:"Not all services accept C/O"},
                    ].map((row)=>(
                      <tr key={row.i} className="[&>td]:p-3 border-b align-top">
                        <td className="font-semibold">{row.i}</td>
                        <td>{row.name}</td>
                        <td>{row.best}</td>
                        <td>{row.how}</td>
                        <td>{row.caveat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3">Acceptance lists evolve—confirm the exact list in the app/portal you’re using.</p>
            </section>

            {/* 2) fastest routes */}
            <section id="fastest-routes" className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                2) Fastest routes by goal (Bank • GP • DVLA • Council)
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {[
                  {
                    h:"Open/upgrade a bank account",
                    items:[
                      "Use tenancy OR bank welcome letter (loop below).",
                      "If no tenancy, ask HR for an address letter on headed paper.",
                      "For C/O: mailbox label with your name + a posted letter addressed to you.",
                      "Keep identical address lines across all apps."
                    ],
                    note:"Many digital banks onboard first, then ask for proof later. Prepare now to avoid freezes."
                  },
                  {
                    h:"Register with a GP / NHS number",
                    items:[
                      "Take tenancy or employer letter + ID to reception.",
                      "If C/O: bring host note and show mailbox label.",
                      "Request a registration confirmation printout with your address.",
                      "Reuse that letter as supporting proof elsewhere."
                    ],
                    note:"Some practices accept online forms; you can still request a printed confirmation."
                  },
                  {
                    h:"DVLA updates",
                    items:[
                      "Use tenancy, council letter, or a bank letter with exact address.",
                      "Postcode format must be perfect.",
                      "Keep submission confirmations/screenshots."
                    ],
                    note:""
                  },
                  {
                    h:"Council Tax setup / discounts",
                    items:[
                      "Register early with tenancy details.",
                      "Apply for single-person/student discounts if eligible.",
                      "Save the first council letter PDF; it strengthens other submissions."
                    ],
                    note:""
                  }
                ].map(card=>(
                  <div key={card.h} className="bg-white border rounded-2xl p-5 shadow-sm">
                    <h3 className="font-semibold text-emerald-900 mb-2">{card.h}</h3>
                    <ol className="list-decimal pl-5 space-y-1">{card.items.map((t,i)=>(<li key={i}>{t}</li>))}</ol>
                    {card.note ? <p className="text-xs text-gray-600 mt-2">{card.note}</p> : null}
                  </div>
                ))}
              </div>
            </section>

            {/* 3) C/O */}
            <section id="co-setup" className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                3) C/O address done right (host, mailbox, wording)
              </h2>
              <p className="mb-3">
                C/O lets you receive post at someone else’s place while you settle. Some services accept it with the right wording.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">Wording format</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Line 1: <em>C/O &lt;HOST SURNAME&gt;</em></li>
                    <li>Line 2: House number + Street</li>
                    <li>Town/City + Postcode</li>
                    <li>Use your legal name as addressee on mailed letters.</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">Mailbox & host permission</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Label the mailbox with your name.</li>
                    <li>Keep a signed host note (template below).</li>
                    <li>Update to your own address once you move.</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Not every service accepts C/O—check first. Use it as a bridge to full tenancy proof.</p>
            </section>

            {/* 4) Templates (unchanged content, nicer shell) */}
            <section id="templates" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                4) Templates you can copy (letters, emails, scripts)
              </h2>

              {/* A */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">A) Employer letter (headed paper)</h3>
                <p className="mb-2">Ask HR to put this on letterhead or as a signed PDF.</p>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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

              {/* B */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">B) Landlord/Agent confirmation letter</h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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

              {/* C */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">C) GP registration confirmation request</h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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

              {/* D */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">D) C/O host permission note</h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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

              {/* E */}
              <div className="bg-white border rounded-2xl p-5 text-sm mb-6 shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">E) Bank “welcome letter loop” message</h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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
                  If posting isn’t possible, ask for a PDF statement with address to be mailed.
                </p>
              </div>

              {/* F */}
              <div className="bg-white border rounded-2xl p-5 text-sm shadow-sm">
                <h3 className="font-semibold text-emerald-900 mb-2">F) Rejection fix — polite reply</h3>
                <pre className="whitespace-pre-line bg-[#F4EFE8] p-3 rounded border text-[13px]">
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

            {/* 5) Evidence bundle */}
            <section id="bundle" className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                5) Your “evidence bundle” (one folder, zero panic)
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">Must-haves</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tenancy (PDF) or employer letter</li>
                    <li>Official letter (council or GP)</li>
                    <li>Bank welcome/statement letter</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">Extras</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SIM/broadband confirmation</li>
                    <li>University letter</li>
                    <li>Host note + mailbox photo (C/O)</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-900">Naming</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><em>surname_doc_YYYY-MM.pdf</em></li>
                    <li>Clear scans (no glare; full page)</li>
                    <li>Keep a simple “sent_log.txt”</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6) naming & scans */}
            <section id="naming" className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">
                6) File naming, scanning & metadata hygiene
              </h2>
              <div className="bg-white border rounded-2xl p-5 text-sm shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">Scan quality rules</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Daylight or bright lamp; no shadows.</li>
                      <li>Flat surface; no curled pages.</li>
                      <li>Show all corners; don’t cover text.</li>
                      <li>Export as PDF if possible.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">Naming & metadata</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><em>rossi_tenancy_2025-02-05.pdf</em></li>
                      <li>Consistent dates and folder structure.</li>
                      <li>Strip EXIF if privacy-sensitive.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7) fixes */}
            <section id="fix" className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
                7) Top rejection reasons (and instant fixes)
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                  {
                    h:"Address format mismatch",
                    pts:["Postcode or line breaks differ.","Fix: copy exact lines from tenancy; resubmit."]
                  },
                  {
                    h:"Name spelling differences",
                    pts:["Accents in one doc, not in others.","Fix: choose one format and use it everywhere."]
                  },
                  {
                    h:"Outdated/undated letter",
                    pts:["Some portals require fresh dates.","Fix: request a letter issued this month."]
                  }
                ].map(card=>(
                  <div key={card.h} className="bg-[#FBF9F6] border rounded-xl p-4">
                    <h3 className="font-semibold text-emerald-900">{card.h}</h3>
                    <ul className="list-disc pl-5 space-y-1 mt-1">{card.pts.map((t,i)=>(<li key={i}>{t}</li>))}</ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3">FAQ</h2>
              <div className="space-y-4 text-sm">
                {[
                  {
                    q:"Does a bank statement screenshot count?",
                    a:"Screenshots are weak. Ask the bank for a posted letter or a formal PDF statement with address."
                  },
                  {
                    q:"Flat share and no bills in my name—what now?",
                    a:"Try tenancy in your name, a landlord/agent letter, employer letter, GP letter, or the bank welcome-letter loop."
                  },
                  {
                    q:"Will a digital-only letter be accepted?",
                    a:"Sometimes. Posted letters carry more weight. If unsure, ask the service first."
                  },
                  {
                    q:"My GP won’t print a letter—alternative?",
                    a:"Request a PDF registration confirmation or summary printout; pair with tenancy/employer letter."
                  }
                ].map((f,i)=>(
                  <details key={i} className="group bg-neutral-50 rounded-lg p-4 border">
                    <summary className="cursor-pointer font-semibold text-emerald-900">{f.q}</summary>
                    <p className="mt-2 text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section id="related" className="mt-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-2">Related Resinaro guides</h2>
              <ul className="list-disc pl-6">
                <li>
                  <Link className="underline text-emerald-900" href="/community/open-uk-bank-account-no-credit-italians-2025">
                    Rejected by UK Banks? Fix KYC & Open Your Account (Easy English)
                  </Link>
                </li>
                <li>
                  <Link className="underline text-emerald-900" href="/community/council-tax-italians-2025">
                    Council Tax for Italians — Bands, Discounts & Moving-In Steps (2025)
                  </Link>
                </li>
                <li>
                  <Link className="underline text-emerald-900" href="/community/uk-renting-for-italians-2025">
                    UK Renting for Italians — Right to Rent, Referencing & Deposits
                  </Link>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="mt-10 bg-white border rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
                Want us to assemble your proof-of-address bundle today?
              </h2>
              <p className="text-sm mb-4">
                We review your situation, craft the right letters, and return a polished ZIP with filenames and a step-by-step submission plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/checkout/proof-of-address-bundle" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium">
                  Proof-of-Address Bundle (+£20)
                </Link>
                <Link href="/services" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-100 text-emerald-900 font-medium border">
                  View Resinaro Services →
                </Link>
              </div>
            </section>

            {/* Disclosure */}
            <p className="mt-8 text-xs text-gray-500 italic">
              This is general information, not legal advice. Acceptance lists change—always follow the latest instructions in the service’s app or site.
              Some links may earn a small commission at no extra cost to you; it helps keep guides free and updated.
            </p>
          </div>

          {/* —— RIGHT RAIL (sticky) —— */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <p className="text-xs font-semibold text-emerald-900 mb-2">On this page</p>
                <nav className="text-sm space-y-2">
                  <a className="block hover:underline" href="#accepted-docs">12 accepted documents</a>
                  <a className="block hover:underline" href="#fastest-routes">Fastest routes by goal</a>
                  <a className="block hover:underline" href="#co-setup">C/O address setup</a>
                  <a className="block hover:underline" href="#templates">Templates</a>
                  <a className="block hover:underline" href="#bundle">Evidence bundle</a>
                  <a className="block hover:underline" href="#naming">Scan & naming hygiene</a>
                  <a className="block hover:underline" href="#fix">Rejection fixes</a>
                  <a className="block hover:underline" href="#faq">FAQ</a>
                </nav>
                <div className="mt-5 border-t pt-4">
                  <Link href="/checkout/proof-of-address-bundle" className="inline-flex items-center px-3 py-2 rounded-lg bg-emerald-700 text-white text-sm font-medium">
                    Get the bundle
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* —— JSON-LD —— */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </main>
  );
}
