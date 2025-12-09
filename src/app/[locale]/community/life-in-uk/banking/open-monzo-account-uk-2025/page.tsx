// src/app/[locale]/community/life-in-uk/banking/open-monzo-account-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

import ReadyToApplyChecklist from "@/components/community/monzo/ReadyToApplyChecklist";
import StickyHelperChip from "@/components/community/monzo/StickyHelperChip";
import MonzoBankingStarterKit from "@/components/community/monzo/MonzoBankingStarterKit";

export const metadata = {
  title:
    "How to Open a Monzo Account in the UK (2025) – Step-by-Step Guide for Migrants",
  description:
    "2025 guide to opening a Monzo account in the UK if you are a migrant or EU citizen: requirements, ID checks, proof of address, card delivery, salary payments, FSCS protection and common issues.",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/life-in-uk/banking/open-monzo-account-uk-2025",
  },
  keywords: [
    "open Monzo account UK",
    "Monzo account for migrants",
    "Italian in UK bank account",
    "digital bank UK 2025",
    "how to open Monzo UK",
  ],
  openGraph: {
    title:
      "How to Open a Monzo Account in the UK (2025) – Step-by-Step for Migrants",
    description:
      "Clear, friendly guide for migrants and EU citizens on opening a Monzo account in the UK in 2025: what you need, how checks work, and common problems.",
    type: "article",
    url: "/community/life-in-uk/banking/open-monzo-account-uk-2025",
    images: [
      {
        url: "/images/monzo-account-uk-hero-3840x1280.png",
        width: 1200,
        height: 630,
        alt: "Monzo banking app and debit card on a desk representing opening a Monzo account in the UK as a migrant",
      },
    ],
  },
};

const monzoReferralUrl = process.env.NEXT_PUBLIC_MONZO_REFERRAL_URL;

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/life-in-uk/banking/open-monzo-account-uk-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a Monzo account with an EU passport or BRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — Monzo accepts passports (EU and non-EU) and BRPs for ID checks. If a document is rejected, try better lighting or a different document, and follow the latest guidance inside the Monzo app.",
        },
      },
      {
        "@type": "Question",
        name: "Does Monzo send a debit card to the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — Monzo sends a Mastercard debit card to the UK address you register when opening the account. Delivery times can vary by area, so always check the latest information in the app.",
        },
      },
      {
        "@type": "Question",
        name: "Is money in Monzo protected by FSCS?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Monzo provides FSCS protection for eligible deposits up to the standard limit where applicable. For the latest coverage details, always check Monzo’s official help pages and documentation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open Monzo if I have just arrived in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Many people start the Monzo signup process soon after arriving, as long as they have an acceptable ID document and a UK address. Requirements can change, so follow the instructions in the Monzo app and check their help centre for the latest rules.",
        },
      },
      {
        "@type": "Question",
        name: "Is Monzo okay for receiving my salary in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Many employers pay salaries into Monzo using the sort code and account number shown in the app. Some employers may prefer traditional banks, so always confirm with your employer and consult Monzo’s official information. This guide is informational only and not financial advice.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep my home-country bank and still use Monzo?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes — lots of migrants keep a bank account in their home country and use Monzo for everyday spending in the UK. Be aware of exchange rates and fees when moving money between accounts, and always check the most up-to-date terms with your banks.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Open a Monzo Account in the UK (2025) — Guide for Migrants",
    description:
      "Step-by-step guide to opening a Monzo account in the UK for migrants: requirements, verification, debit cards, FSCS protection, and troubleshooting (2025).",
    image: ["https://www.resinaro.com/images/monzo-hero.jpg"],
    author: {
      "@type": "Person",
      name: "Resinaro",
    },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/logo.png",
      },
    },
    datePublished: "2025-09-24",
    dateModified: "2025-12-08",
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            How to Open a Monzo Account in the UK (2025) – Step-by-Step for
            Migrants
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/80">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1">
              Banking in the UK
            </span>
            <span>Updated December 2025</span>
            <span>Approx. 7-minute read</span>
          </div>

          <p className="mt-3 text-white/90">
            Monzo is a popular app-first UK bank with simple sign-up, budgeting
            tools, and an easy debit card — often a top choice for migrants
            starting life in the UK. This guide explains each step so you know
            what to expect before you open the app.
          </p>
          {/* Hero image prompt (design workflow):
              "Editorial shot: smartphone showing Monzo app, Monzo debit card partially visible, neat desk, natural soft light, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/monzo-account-uk-hero-3840x1280.png"
            alt="Smartphone showing the Monzo banking app and coral debit card on a desk, representing opening a Monzo account in the UK as a migrant"
            width={3840}
            height={1280}
            priority
            quality={85}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            Opening a Monzo account in the UK — digital banking made simple for
            migrants and residents.
          </figcaption>
        </figure>

        {/* Intro card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            This guide walks you through the Monzo sign-up flow, the documents
            you may need (ID and proof of address), how to receive your debit
            card, what to expect for payroll, and quick fixes for common signup
            problems in 2025. It is informational only and not official Monzo
            advice — always double-check details in the Monzo app and on their
            website.
          </p>
          <p className="mt-3">
            If you are also preparing documents for the Italian consulate or
            other UK bureaucracy, having everything organised helps a lot.{" "}
            <Link
              href="/community/prenotami-uk-guide"
              className="underline text-green-900 hover:text-green-800"
            >
              See our Prenot@Mi &amp; consulate guide →
            </Link>
          </p>
          <p className="mt-2">
            Want someone to check your documents before you apply or before a
            consulate appointment?{" "}
            <Link
              href="/services"
              className="underline text-green-900 hover:text-green-800"
            >
              View Resinaro services →
            </Link>
          </p>
        </div>

        {/* Interactive checklist */}
        <ReadyToApplyChecklist />

        {/* Quick checklist */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Quick checklist (before you start)
          </h2>
          <p className="mb-2 text-sm text-gray-700">
            Before you start filming selfie videos, make sure you have these
            basics ready. They don&apos;t guarantee approval, but they avoid the
            most common blockers for migrants opening app-based UK accounts.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Passport or BRP (good, readable photos)</li>
            <li>UK mobile number for verification SMS</li>
            <li>Address in the UK where you can receive the card</li>
            <li>Possible proof of UK address (if requested)</li>
            <li>Monzo app installed and updated</li>
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Step-by-step: from download to first salary
          </h2>
          <p className="mb-3 text-sm text-gray-700">
            The Monzo signup flow is usually fast, but each step exists for a
            reason — UK banks must check your identity and where you live.
            Follow calmly and read the small tips so you don&apos;t get stuck
            on technical details.
          </p>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Download the Monzo app</strong> from the App Store or
              Google Play.
              <p className="mt-1 text-sm text-gray-600">
                Resinaro tip: update your phone&apos;s operating system first —
                older versions sometimes cause issues with the camera or video
                upload.
              </p>
            </li>
            <li>
              <strong>Start registration</strong> with your email and UK mobile.
              <p className="mt-1 text-sm text-gray-600">
                Check you can receive emails and SMS on the same phone you will
                use for the app, so you don&apos;t lose codes.
              </p>
            </li>
            <li>
              <strong>ID check</strong> — Monzo typically asks for a short
              selfie video (liveness) and a photo of your passport or BRP.
              <p className="mt-1 text-sm text-gray-600">
                Use a well-lit room, clean the camera lens and follow the frame
                lines carefully. Hold your document steady and avoid covering
                any corner.
              </p>
            </li>
            <li>
              <strong>Address verification</strong> — if requested, upload a
              recent utility, bank or council tax statement or tenancy
              agreement.
              <p className="mt-1 text-sm text-gray-600">
                Documents usually need to be recent and clearly show your name
                and UK postcode. If you live in a house share or &quot;all
                bills included&quot; room, building your own proof can take a
                bit longer — meglio saperlo prima.
              </p>
            </li>
            <li>
              <strong>Receive card</strong> — Monzo posts a Mastercard debit
              card to your UK address; you&apos;ll activate it in-app.
              <p className="mt-1 text-sm text-gray-600">
                Make sure your name is visible on the postbox or let your
                flatmates know to expect a letter in your name.
              </p>
            </li>
            <li>
              <strong>Set up salary</strong> — provide your Monzo sort code and
              account number to your employer for payroll.
              <p className="mt-1 text-sm text-gray-600">
                Always copy and paste the details directly from the Monzo app
                into the form or email to your employer to avoid typos.
              </p>
            </li>
          </ol>
        </section>

        {/* Monzo referral CTA (optional) */}
        {monzoReferralUrl && (
          <section
            className="mt-8 bg-white border border-green-100 rounded-xl p-5 shadow-sm"
            aria-labelledby="monzo-referral-cta-title"
          >
            <h2
              id="monzo-referral-cta-title"
              className="text-xl font-semibold text-green-900 mb-2"
            >
              Already decided Monzo is right for you?
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              If you&apos;re comfortable that Monzo fits your situation and you
              want to open an account, you can support Resinaro by using our
              referral link. We may receive a small bonus from Monzo if your
              signup is successful, and you may also receive a reward under
              their current referral scheme.
            </p>
            <a
              href={monzoReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-green-800"
            >
              Open Monzo with referral link
            </a>
            <p className="mt-2 text-xs text-gray-500">
              This is not financial advice. Always read Monzo&apos;s latest
              referral terms and account information on their official website
              before applying.
            </p>
          </section>
        )}

        {/* Timeline infographic */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            From download to first salary: simple timeline
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <ol className="relative border-l border-gray-200 ml-3 space-y-5">
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-green-800" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Step 1 – Download &amp; basic details
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Install the app, enter your email and UK mobile number, and
                  confirm your inbox/SMS codes.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-green-800" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Step 2 – ID &amp; address checks
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Record a short selfie video and upload your passport/BRP and,
                  if requested, a proof-of-address document.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-green-800" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Step 3 – Card arrives
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Your debit card is posted to your UK address. Activate it in
                  the app once it arrives.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-green-800" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Step 4 – First salary paid in
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Give your employer the sort code and account number from the
                  app, and check your first salary payment goes through
                  correctly.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Proof of address details */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Proof of address — common documents (especially if you just moved)
          </h2>
          <p className="mb-3">
            Proof of address is where many migrants get stuck. Monzo can be
            flexible, but they still need to see that you really live at the UK
            address you write in the app. Documents usually need to be recent
            and clearly show your name and postcode.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bank statement with your name &amp; UK postcode</li>
            <li>Council tax bill</li>
            <li>Utility bill (electricity, gas, water)</li>
            <li>Tenancy agreement or rent book</li>
            <li>Official government letters (HMRC, DWP)</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            If you lack UK address proof — for example if you live in a house
            share with all bills included — it may take longer to collect your
            own documents. In the meantime, follow the options offered in the
            Monzo app and consider how you can start receiving letters in your
            own name. The same documents are often useful for consulate
            appointments and other UK services.
          </p>
        </section>

        {/* App banks vs traditional banks – quick overview */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            App banks vs traditional banks – quick overview
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                App banks (Monzo, etc.)
              </h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Fast signup and modern app experience.</li>
                <li>Great for everyday spending and budgeting.</li>
                <li>
                  Features and limits can change — always read the latest
                  information inside the app.
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Traditional UK banks
              </h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Often more branches and in-person services.</li>
                <li>Common choice for some long-term financial products.</li>
                <li>
                  Opening an account may take longer and require more paperwork.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            This is a simplified overview, not financial advice. Always check
            each bank&apos;s official website and documentation before making a
            decision.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Monzo vs Revolut vs Starling vs traditional banks
          </h2>
          <p className="mb-3 text-sm text-gray-700">
            You don&apos;t have to choose only one bank forever. Many migrants
            use an app bank for everyday spending and a traditional bank for
            other purposes. The table below is a quick, high-level comparison
            based on typical features, not personalised advice.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-gray-900">
                  <th>Feature</th>
                  <th>Monzo</th>
                  <th>Revolut</th>
                  <th>Starling</th>
                  <th>Traditional Bank</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-gray-200">
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>App &amp; budgeting</td>
                  <td>Excellent (pots, budgets)</td>
                  <td>Good (multi-currency)</td>
                  <td>Good (business features)</td>
                  <td>Varies</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Account setup speed</td>
                  <td>Fast</td>
                  <td>Very fast</td>
                  <td>Fast</td>
                  <td>Often slower</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Debit card</td>
                  <td>Yes — Mastercard</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>FSCS protection</td>
                  <td>FSCS for eligible deposits (check Monzo)</td>
                  <td>Varies by product</td>
                  <td>FSCS protected</td>
                  <td>FSCS protected</td>
                </tr>
                <tr className="[&>td]:px-4 [&>td]:py-3 align-top">
                  <td>Best for</td>
                  <td>Everyday banking &amp; budgeting</td>
                  <td>International transfers &amp; multi-currency</td>
                  <td>Business &amp; personal banking</td>
                  <td>Full-service banking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fun tips / KYC quick wins */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            3 quick tips for smoother Monzo ID checks
          </h2>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-2">
            <summary className="font-semibold cursor-pointer">
              1. Clean the camera and use front-facing light
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              A quick wipe of the camera lens and standing facing a window or
              lamp can dramatically improve selfie video quality and reduce
              rejections — useful for Monzo and many other apps in the UK.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-2">
            <summary className="font-semibold cursor-pointer">
              2. Keep your ID on a dark, flat surface
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Place your passport or BRP on a dark table and hold the phone
              directly above it. Avoid patterned bedsheets or shiny surfaces
              that confuse the camera and cause glare.
            </p>
          </details>
          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              3. Avoid public Wi-Fi during video upload
            </summary>
            <p className="mt-2 text-sm text-gray-700">
              Use a stable home Wi-Fi or mobile data connection so the app
              doesn&apos;t hang or time out during uploads. This also helps when
              you open other digital accounts or services in the UK.
            </p>
          </details>
        </section>

        {/* Common issues */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Common issues (and calm fixes)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Video selfie rejected</strong> → Retry in a well-lit area,
              follow the app frame guidance, and avoid hats/glasses during the
              check.
            </li>
            <li>
              <strong>Card not delivered</strong> → Confirm your postcode and
              address spelling in-app; make sure your name is on the postbox and
              contact Monzo support if it&apos;s late.
            </li>
            <li>
              <strong>Cannot add salary</strong> → Give your employer the exact
              sort code and account number from the Monzo app (copy/paste avoids
              errors).
            </li>
            <li>
              <strong>Address proof flagged</strong> → Upload a different
              document (bank statement or council tax) and ensure the date is
              visible and recent.
            </li>
          </ol>
        </section>

        {/* Amazon affiliate – banking starter kit */}
        <MonzoBankingStarterKit />

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            Useful links
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="https://monzo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Visit Monzo&apos;s official site
              </a>
            </li>
            <li>
              <a
                href="https://revolut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Visit Revolut&apos;s official site
              </a>
            </li>
            <li>
              <a
                href="https://starlingbank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-900"
              >
                Visit Starling Bank&apos;s official site
              </a>
            </li>
          </ul>
        </section>

        {/* FAQs (interactive) */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">
            FAQs about opening Monzo as a migrant
          </h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Do I need a UK address to open Monzo?
            </summary>
            <p className="mt-2">
              You usually need a UK address to receive a card. If you&apos;re
              temporarily without one, Monzo may offer alternative checks —
              follow the instructions in the app or contact support for the most
              up-to-date options.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              How long until my Monzo card arrives?
            </summary>
            <p className="mt-2">
              Card delivery times vary by area but typically take a few working
              days. Always follow the latest information inside the app and
              contact Monzo support if the card is delayed.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I open Monzo for joint or business use?
            </summary>
            <p className="mt-2">
              Monzo offers business accounts and some joint account features —
              see Monzo&apos;s product pages and help centre for eligibility,
              limits and the most recent terms.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">
              Can I open Monzo if I just arrived in the UK?
            </summary>
            <p className="mt-2">
              Many people start the process soon after arriving, as long as they
              have acceptable ID and a UK address. However, requirements can
              change, so always follow the instructions inside the Monzo app and
              check their official help centre.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Is Monzo okay to use for my salary?
            </summary>
            <p className="mt-2">
              Many employers pay salaries into Monzo using the sort code and
              account number shown in the app. Some employers prefer traditional
              banks, so always confirm with your HR or payroll team and check
              Monzo&apos;s official information. This page is informational only
              and not financial advice.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Want help preparing proof-of-address or checking documents before
              you apply — or before your next consulate appointment?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800"
            >
              View Resinaro services →
            </Link>
          </div>
        </section>
      </div>

      <StickyHelperChip />

      {/* JSON-LD scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
