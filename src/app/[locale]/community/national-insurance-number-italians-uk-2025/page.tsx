// app/community/national-insurance-number-italians-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "National Insurance Number (NIN) for Italians in the UK — 2025 Step-by-Step + Phone Script",
  description:
    "Exactly how Italians apply for a UK National Insurance Number in 2025: who needs it, documents, the online form, the phone script, timelines, common errors, and what to do if delayed. Includes checklists, templates, and links to priority help.",
  alternates: {
    canonical: "/community/national-insurance-number-italians-uk-2025",
  },
};

export default function Page() {
  // =============================
  // SEO: FAQ + HowTo (rich results)
  // =============================
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do all Italians working in the UK need a National Insurance Number?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you work, are self-employed, or claim certain benefits in the UK, you need a National Insurance Number (NIN). Some employers will onboard you and pay you before your NIN arrives, but you should still apply as soon as possible.",
        },
      },
      {
        "@type": "Question",
        name: "Can I start a job before receiving my NIN?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—most employers can pay you without the physical letter while the application is in progress. Give them your application reference when you have it.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the NIN application take in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The online application takes around 10–15 minutes. Processing time varies; many people receive their NIN letter within a few weeks. If it is delayed, you can follow up using your reference number.",
        },
      },
      {
        "@type": "Question",
        name: "What documents do Italians typically use for a NIN application?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Valid passport or national ID, UK address, proof of immigration status (if applicable), employment or job-seeking details, and UK contact information.",
        },
      },
      {
        "@type": "Question",
        name: "Is the NIN the same as the tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Your National Insurance Number is a personal identifier for social security contributions. Your tax code is assigned by HMRC and can change depending on your circumstances.",
        },
      },
      {
        "@type": "Question",
        name: "Can I change my address after applying for a NIN?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. You can still receive your NIN even if you move. Keep proof of both addresses and be ready to contact support with your application reference.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      "Apply for a UK National Insurance Number (NIN) as an Italian citizen in 2025",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        name: "Prepare your documents",
        text:
          "Passport or Italian ID, UK address, contact details, job or job-seeking information, and immigration status if relevant.",
      },
      {
        "@type": "HowToStep",
        name: "Complete the online application",
        text:
          "Answer identity, residency, and employment questions carefully. Save your reference number.",
      },
      {
        "@type": "HowToStep",
        name: "Respond to any follow-up requests",
        text:
          "If asked for evidence, upload clear photos or scans. Keep file names readable (e.g., surname_passport.jpg).",
      },
      {
        "@type": "HowToStep",
        name: "Receive your NIN letter",
        text:
          "Your NIN arrives by post. Share it securely with your employer and store a copy in a safe place.",
      },
    ],
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* HERO */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/nin-hero.png"
            alt="National Insurance Number guidance for Italians in the UK"
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
              National Insurance Number (NIN) for Italians in the UK — 2025
              Step-by-Step + Phone Script
            </h1>
          </div>
        </div>

        {/* WHY THIS MATTERS */}
        <section className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Why this guide (and how it helps you start work faster)
          </h2>
          <p className="mb-3">
            Whether you’re new to the UK or updating your details, your{" "}
            <strong>National Insurance Number</strong> is essential for legal
            work, self-employment, and certain benefits. Employers often ask for
            it on day one, but you can usually start with the{" "}
            <strong>application reference</strong> while the card arrives by
            post. This guide shows Italians exactly how to apply in 2025—with
            screenshots logic, a ready-to-use phone script, and what to do if
            the process stalls.
          </p>
          <p className="text-sm text-gray-700">
            We answer NIN questions from the community every week. Everything
            below is practical, up-to-date, and written so you can complete your
            application in one sitting.
          </p>
        </section>

        {/* TOC */}
        <nav aria-label="Contents" className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a className="underline text-green-900" href="#who-needs">
                Who needs a NIN (and who doesn’t)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#docs">
                Documents checklist (Italian citizen)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#apply-online">
                Apply online: 10-minute walkthrough
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#phone-script">
                Phone script (if you must call)
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#timelines">
                Timelines & tracking your application
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#errors">
                Common errors & how to fix them
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#after">
                After you get your NIN: tax code, payslips, HMRC
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#templates">
                Templates & downloads
              </a>
            </li>
            <li>
              <a className="underline text-green-900" href="#faq">
                Quick FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* WHO NEEDS IT */}
        <section id="who-needs" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Who needs a National Insurance Number (and who doesn’t)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-900 mb-1">You need a NIN if:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>You are employed in the UK (even part-time or casual work).</li>
                <li>You are self-employed or planning freelance/contract work.</li>
                <li>You claim certain UK benefits or tax credits.</li>
                <li>You need to prove your contribution history (e.g., pension).</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-1">You might not need one yet if:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>You’re not working and not claiming benefits.</li>
                <li>Your employer uses a temporary process while your NIN is in progress.</li>
                <li>You already have a NIN (it never changes—even if you move house or change employer).</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            Unsure if you already have a NIN from a previous stay? Check old
            payslips or P60/P45 documents. If you find it,{" "}
            <strong>do not apply again</strong>—keep using that number.
          </p>
        </section>

        {/* DOCUMENTS */}
        <section id="docs" className="bg-white border rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Documents checklist for Italians (2025)
          </h2>
          <p className="mb-3">
            You don’t need a huge dossier—just clear identity and UK presence.
            Gather these before you open the form:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Identity & status</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Italian passport or Carta d’Identità (valid).</li>
                <li>Immigration status if applicable (e.g., pre-settled/settled, visa category).</li>
                <li>Date you entered the UK and travel history if requested.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">UK details</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>UK address (where you can receive post—ask your host if needed).</li>
                <li>UK phone number and email address.</li>
                <li>Employment info (employer name) or “seeking work”.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            Tip: Take clear, glare-free photos of documents. Rename files like{" "}
            <em>rossi_passport.jpg</em> or <em>rossi_proof-address.pdf</em> so
            they’re easy to upload if asked.
          </p>
          <div className="mt-4 text-sm">
            Need a second pair of eyes?{" "}
            <Link href="/services" className="underline text-green-900">
              View Resinaro Services →
            </Link>{" "}
            —we verify your answers & attachments the same day.
          </div>
        </section>

        {/* APPLY ONLINE */}
        <section id="apply-online" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Apply online: the 10-minute walkthrough
          </h2>
          <div className="bg-white border rounded-xl p-5">
            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li>
                <strong>Create or sign in to your account.</strong> Use a
                personal email you keep long-term. Enable two-factor if offered.
              </li>
              <li>
                <strong>Identity details.</strong> Enter your name exactly as on
                your passport. Avoid accents if the form rejects them. Use{" "}
                <em>ROSSI</em> instead of <em>Róssi</em>.
              </li>
              <li>
                <strong>Address for post.</strong> This must be an address where
                mail is secure. If staying with friends, ask permission to use
                their address and add “C/O” in address line 1.
              </li>
              <li>
                <strong>Employment status.</strong> Choose one: employed,
                self-employed, or looking for work. All are valid to apply.
              </li>
              <li>
                <strong>Contact preferences.</strong> Add a UK number if you
                have one; otherwise, keep your email active and check spam.
              </li>
              <li>
                <strong>Upload documents if requested.</strong> Not everyone is
                asked. If you are, submit clear scans/photos and double check
                that corners and MRZ lines are visible.
              </li>
              <li>
                <strong>Submit and save your reference number.</strong> Take a
                screenshot and write it down. You’ll need it to track or chase.
              </li>
            </ol>

            <div className="mt-5 p-4 border rounded-lg bg-green-50 text-sm">
              <p className="font-semibold text-green-900">
                Pro tip: match details across all fields
              </p>
              <p>
                Use the same spelling for your name and address everywhere:
                application, scans, payslips. Small mismatches cause delays.
              </p>
            </div>
          </div>
        </section>

        {/* PHONE SCRIPT */}
        <section id="phone-script" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Phone script (if you need to call)
          </h2>
          <p className="mb-3">
            Most people can apply online. If you’re asked to call or prefer to
            speak with someone, use this short script. Replace names and dates.
          </p>
          <div className="bg-[#0b3d2e] text-white rounded-lg p-5 text-sm">
            <p className="font-mono whitespace-pre-line">
{`Hello, my name is <NAME SURNAME>. I'm an Italian citizen living in the UK.
I'd like to apply for a National Insurance Number.

• Date of birth: <DD/MM/YYYY>
• Address for correspondence: <Full UK address, postcode>
• Phone: <07...>   Email: <you@example.com>
• Employment: <Employed / Self-employed / Looking for work>
• I arrived in the UK on <date> and I can provide my passport if needed.

If you need to verify anything else, I'm happy to answer. 
Can I have a reference for this application, please?`}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Be near your documents when you call. Write down the reference and
            the name of the person you spoke with, plus date and time.
          </p>
        </section>

        {/* TIMELINES */}
        <section id="timelines" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Timelines & tracking your application
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Day 0</h3>
              <p>Submit form and save your reference. Tell your employer it’s in progress.</p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Week 1–3</h3>
              <p>Most applicants receive the letter in a few weeks. Keep your mailbox labelled.</p>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">If delayed</h3>
              <p>
                Use your reference to follow up. Confirm address spelling and
                request re-issue if mail was returned.
              </p>
            </div>
          </div>
          <p className="text-sm mt-3">
            Moving house? Keep proof of old and new address. If mail might be
            lost, ask to redirect or to collect at a secure address.
          </p>
        </section>

        {/* ERRORS */}
        <section id="errors" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Common errors (and how to fix them quickly)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Address issues</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>Post not arriving:</strong> add <em>C/O</em> and the
                  host’s surname; label the mailbox; confirm postcode format.
                </li>
                <li>
                  <strong>Moved during processing:</strong> keep written proof
                  of both addresses; call with your reference to update.
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Identity mismatch</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Ensure your name matches your passport. Remove unsupported
                  accents if the form rejects them.
                </li>
                <li>
                  If your surname changed, upload evidence (marriage certificate
                  or deed poll) when requested.
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Duplicate application</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  If you already have a NIN (from a previous job/study), do not
                  reapply. Retrieve it from old payslips or HMRC letters.
                </li>
                <li>
                  If you accidentally submitted twice, keep the most recent
                  reference and inform support to avoid confusion.
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-2">Evidence rejected</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Rescan with higher resolution; include full page edges.</li>
                <li>Use neutral light; avoid shadows; flatten documents.</li>
                <li>Rename files clearly and avoid special characters.</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 text-sm">
            Want us to check everything before you resubmit?{" "}
            <Link
              href="/services"
              className="underline text-green-900"
            >
              View Resinaro Services →
            </Link>
            .
          </div>
        </section>

        {/* AFTER YOU GET IT */}
        <section id="after" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            After you get your NIN: what to do next
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900">
                Share it securely with your employer
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Never post your NIN publicly.</li>
                <li>Send via a secure HR system or hand it in person.</li>
              </ul>
            </div>
            <div className="bg-[#F9F6F1] border rounded-lg p-4 text-sm">
              <h3 className="font-semibold text-green-900">Check your first payslip</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirm your <strong>tax code</strong> and NIN appear correctly.</li>
                <li>If the tax code seems wrong, see our quick guide below.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-3">
            Keep a photo of your NIN letter and store the original safely; the
            number will stay the same for life.
          </p>
          <div className="mt-4 text-sm">
            Related services:{" "}
            <Link href="/services" className="underline text-green-900">
              View Resinaro Services →
            </Link>
            .
          </div>
        </section>

        {/* TEMPLATES & DOWNLOADS */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Templates & downloads (free)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-5 text-sm">
              <h3 className="font-semibold text-green-900 mb-2">Employer notice</h3>
              <p className="mb-2">
                Tell HR you’ve applied and will share the number when it arrives:
              </p>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`Subject: National Insurance Number application in progress

Hello <HR/Manager>,

I have submitted my National Insurance Number application today and will share the number as soon as I receive it by post. 
In the meantime you can process my payroll using my application reference: <REF>.

Thanks,
<NAME>`}
              </pre>
            </div>

            <div className="bg-white border rounded-xl p-5 text-sm">
              <h3 className="font-semibold text-green-900 mb-2">Address permission (C/O)</h3>
              <p className="mb-2">
                Use this if you need to receive the letter at a friend’s place:
              </p>
              <pre className="whitespace-pre-line bg-[#F9F6F1] p-3 rounded border">
{`To whom it may concern,

I, <HOST NAME>, give permission for <YOUR NAME> to receive official correspondence
regarding their National Insurance Number at my address:
<ADDRESS, POSTCODE>. They currently stay with me.

Signed,
<HOST NAME>  <DATE>`}
              </pre>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            These templates are for guidance only. Always adapt to your
            situation and keep copies of everything you send.
          </p>
        </section>

        {/* QUICK FAQ (onsite, mirrors JSON-LD) */}
        <section id="faq" className="bg-white border rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Quick FAQ</h2>
          <div className="space-y-4 text-sm">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Can I work while waiting for my NIN?
              </summary>
              <p className="mt-2">
                Usually yes. Give your employer the application reference and
                submit the number when it arrives.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Do I need proof of address?
              </summary>
              <p className="mt-2">
                You need somewhere reliable to receive post. Proof is sometimes
                requested—bank statement, tenancy, or a simple host permission
                note (use our template above).
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                I lost my NIN—how do I find it?
              </summary>
              <p className="mt-2">
                Check old payslips/P60 letters or contact support with your
                personal details to retrieve it. The number does not change.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-green-900">
                Is the NIN the same as my tax code?
              </summary>
              <p className="mt-2">
                No. Your NIN is permanent; your tax code can change. If your
                first tax code looks unusual, read our quick guide below.
              </p>
            </details>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Related Resinaro guides
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <Link
                className="underline text-green-900"
                href="/community/bureaucracy-guides/italian-cie-id-card-uk"
              >
                Carta d’Identità (CIE) in the UK: Documents & Appointments
              </Link>
            </li>
            <li>
              <Link
                className="underline text-green-900"
                href="/community/bureaucracy-guides/aire-registration-uk"
              >
                AIRE Registration: Step-by-Step for Italians in the UK
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href="/community/life-in-uk">
                Life in the UK: Bank Account, Credit, and First Payslips
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA / SERVICES */}
        <section className="mt-10 bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Want a same-day check before you submit?
          </h2>
          <p className="text-sm mb-4">
            We’ll confirm your answers, fix common mistakes, and prep your
            uploads so your application sails through.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/checkout/nin-priority"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium"
            >
              Priority NIN Application Check (+£20)
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-900 font-medium border"
            >
              View Resinaro Services →
            </Link>
          </div>
        </section>

        {/* DISCLOSURE */}
        <p className="mt-8 text-xs text-gray-500 italic">
          This is a community guide. It’s not legal advice. Processes can
          change—always follow official instructions shown during your
          application. Some links may earn us a small commission at no extra
          cost to you. It helps keep guides like this free and updated.
        </p>

        {/* JSON-LD */}
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
