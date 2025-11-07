// app/[locale]/tax-and-money/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 21600; // 6h

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title:
    "Tax & Money for Italians in the UK — Banking, Credit Score, Self Assessment, Pensions, Double Taxation, Remittances | Resinaro",
  description:
    "Practical, source-linked guidance for Italians in the UK: how to open a bank account, build a UK credit score, apply for credit cards or mortgages, file HMRC Self Assessment, understand National Insurance and pensions, UK–Italy double taxation, send money to Italy, and use budgeting tools.",
  alternates: { canonical: "/tax-and-money" },
  openGraph: {
    title:
      "Tax & Money for Italians in the UK — Banking, Credit, Self Assessment, Pensions, Double Taxation | Resinaro",
    description:
      "Independent guide with links to GOV.UK, HMRC, FCA and official tools. Learn banking, credit building, taxes, NI, pensions, remittances, and budgeting.",
    url: "https://www.resinaro.com/tax-and-money",
    siteName: "Resinaro",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://www.resinaro.com/images/og-tax-money.png",
        width: 1200,
        height: 630,
        alt: "Resinaro — Tax and Money guide for Italians in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tax & Money for Italians in the UK — Banking, Credit, Self Assessment, Pensions | Resinaro",
    description:
      "Step-by-step, source-linked financial guidance for living in the UK.",
    images: ["https://www.resinaro.com/images/og-tax-money.png"],
  },
};

// ---------- PAGE ----------
export default function TaxAndMoneyPage() {
  // Unified outbound link
  const A = (props: { href: string; children: React.ReactNode }) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
    >
      {props.children}
    </a>
  );

  // Official links
  const links = {
    govProofOfAddress:
      "https://www.gov.uk/government/publications/proof-of-address-checks-guidance",
    basicBankAccounts:
      "https://www.gov.uk/government/publications/basic-bank-accounts/basic-bank-accounts",
    fcaRegister: "https://register.fca.org.uk/",
    fscs: "https://www.fscs.org.uk/",
    ico: "https://ico.org.uk/your-data-matters/credit/",
    experian: "https://www.experian.co.uk/",
    equifax: "https://www.equifax.co.uk/",
    transUnion: "https://www.transunion.co.uk/",
    electoralRegister: "https://www.gov.uk/register-to-vote",
    hmrcSelfAssessment: "https://www.gov.uk/self-assessment-tax-returns",
    hmrcUtr: "https://www.gov.uk/register-for-self-assessment",
    hmrcDeadlines: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
    hmrcPayments: "https://www.gov.uk/pay-self-assessment-tax-bill",
    hmrcNi: "https://www.gov.uk/national-insurance",
    hmrcNiNumber: "https://www.gov.uk/apply-national-insurance-number",
    hmrcNiVoluntary:
      "https://www.gov.uk/voluntary-national-insurance-contributions",
    statePension: "https://www.gov.uk/new-state-pension",
    pensionForecast: "https://www.gov.uk/check-state-pension",
    pensionTracing: "https://www.gov.uk/find-pension-contact-details",
    workplacePensions: "https://www.gov.uk/workplace-pensions",
    moneyHelperBudget: "https://www.moneyhelper.org.uk/en/everyday-money/budgeting/budget-planner",
    moneyHelperDebt: "https://www.moneyhelper.org.uk/en/money-troubles/dealing-with-debt",
    citizensAdviceDebt: "https://www.citizensadvice.org.uk/debt-and-money/",
    hmrcDtaItaly:
      "https://www.gov.uk/government/publications/italy-tax-treaties",
    hmrcResidency: "https://www.gov.uk/tax-foreign-income/taxed-twice",
    rbsCostOfLiving:
      "https://www.moneyhelper.org.uk/en/blog/cost-of-living",
    onsInflationCalc:
      "https://www.ons.gov.uk/economy/inflationandpriceindices/articles/personalisedinflationcalculator/2023-03-22",
    overseasBankTransfer:
      "https://www.fca.org.uk/consumers/money-transfer-remittances",
    mortgageAffordability:
      "https://www.moneyhelper.org.uk/en/homes/buying-a-home/how-much-can-i-borrow",
    creditCardsGuide:
      "https://www.moneyhelper.org.uk/en/everyday-money/credit-and-purchases/credit-cards-explained",
    mortgageCharter:
      "https://www.gov.uk/government/publications/mortgage-charter",
    sanctionsCheck: "https://www.gov.uk/guidance/financial-sanctions-faqs",
    ofgem: "https://www.ofgem.gov.uk/",
    taxReliefItalyUk:
      "https://www.agenziaentrate.gov.it/portale/web/guest/schede/informazioni/italiani-all-estero",
    // brand-neutral remittance comparison
    compareRemittance: "https://www.fca.org.uk/consumers/money-transfer-remittances",
  };

  // JSON-LD (Article + FAQ + HowTo flows + Breadcrumbs + Organization)
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Tax & Money for Italians in the UK — Banking, Credit, Self Assessment, Pensions, Double Taxation, Remittances",
    description:
      "Independent guide for Italians living in the UK with official links: bank accounts, UK credit score, credit cards, mortgages, HMRC Self Assessment, National Insurance, pensions, UK–Italy double taxation and sending money to Italy.",
    mainEntityOfPage: "https://www.resinaro.com/tax-and-money",
    author: { "@type": "Organization", name: "Resinaro" },
    publisher: {
      "@type": "Organization",
      name: "Resinaro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.resinaro.com/images/logo.png",
      },
    },
    inLanguage: "en-GB",
  };

  const jsonLdHowToBank = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Open a UK bank account",
    description:
      "General steps to open a UK bank account as a resident. Requirements vary by provider.",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose a regulated provider",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Use an FCA-regulated bank or e-money firm. Check the firm on the FCA Register.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Prepare ID and address",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Have a valid photo ID and proof of UK address. Some digital providers allow alternative checks.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Apply and verify",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Complete the application and pass identity/anti-fraud checks.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Activate and use safely",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Enable security controls. Learn FSCS protection rules for deposits.",
          },
        ],
      },
    ],
  };

  const jsonLdHowToSelfAssessment = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "File HMRC Self Assessment",
    description:
      "Overview of registering for Self Assessment, gathering records and submitting your tax return to HMRC.",
    step: [
      {
        "@type": "HowToStep",
        name: "Check if you need to file",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "See HMRC criteria (self-employment, untaxed income, higher income child benefit, etc.).",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Register and get UTR",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Register with HMRC to receive your Unique Taxpayer Reference (UTR).",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Collect information",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Gather income, expenses, bank interest, pension statements, foreign income details.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Submit and pay",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Submit online by 31 January (paper earlier) and pay by deadlines.",
          },
        ],
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Resinaro",
        item: "https://www.resinaro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tax & Money",
        item: "https://www.resinaro.com/tax-and-money",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a UK bank account without a UK address?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most banks require a UK address for standard current accounts. Some digital providers may accept alternative address or ID checks. Basic bank accounts are available for those who meet eligibility. Always check provider rules.",
        },
      },
      {
        "@type": "Question",
        name: "How do I build a UK credit score as a newcomer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Open and responsibly use UK-reported accounts (e.g., current account, SIM on credit, credit builder card). Pay on time, keep utilisation low and register your details correctly with the credit reference agencies.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to file HMRC Self Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You must file if HMRC asks you to, or if you have taxable income not collected through PAYE (self-employment, rental, foreign income, certain savings, or other triggers). Check HMRC’s guidance and register in time.",
        },
      },
      {
        "@type": "Question",
        name: "How does the UK–Italy double taxation treaty work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The treaty allocates taxing rights between the UK and Italy and provides relief to avoid the same income being taxed twice. Your tax residency and income types determine the outcome. Consult the treaty text and official guidance; seek professional advice for complex situations.",
        },
      },
      {
        "@type": "Question",
        name: "Is my money protected in the bank?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Eligible deposits with UK banks and building societies are protected up to the FSCS limit per person, per firm. E-money accounts are not deposits but must safeguard client funds. Confirm status and coverage with your provider.",
        },
      },
    ],
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
    sameAs: [
      "https://www.instagram.com/resinarouk/",
      "https://www.youtube.com/@resinaroUK",
      "https://www.tiktok.com/@resinaro.uk",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["English", "Italian"],
        email: "resinaro@proton.me",
      },
    ],
    logo: "https://www.resinaro.com/images/logo.png",
  };

  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowToBank) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdHowToSelfAssessment),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />

      {/* ---------- HERO (light, legible) ---------- */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/landscape-image.png')] bg-cover bg-center"
          style={{
            backgroundImage:
              "image-set(url('/images/landscape-image.avif') type('image/avif'), url('/images/landscape-image.webp') type('image/webp'), url('/images/landscape-image.png') type('image/png'))",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-white/85 backdrop-blur-[1px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 grid h-1 w-40 grid-cols-3 rounded-b">
          <div className="bg-[#0B5D3B]" />
          <div className="bg-white" />
          <div className="bg-[#B22222]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950">
            Tax & Money in the UK — for Italians
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-green-900/90">
            Banking, credit score, credit cards and mortgages, Self Assessment
            tax returns, pensions and National Insurance, UK–Italy double
            taxation, sending money to Italy, budgeting and cost-of-living tools.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-green-900/80">
            <span>Independent</span>
            <span aria-hidden>•</span>
            <span>Links to official sources</span>
            <span aria-hidden>•</span>
            <span>Last updated {new Date().toLocaleDateString("en-GB")}</span>
          </div>
        </div>
      </section>

      {/* ---------- DISCLAIMER BANNER ---------- */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <div className="rounded-2xl border border-emerald-900/15 bg-white p-4 text-sm shadow-sm">
          <p className="text-green-900/90">
            <strong>Important:</strong> This is general information, not legal,
            tax, immigration, financial or investment advice. Policies and
            eligibility change; always confirm with official sources and, if
            needed, a qualified professional.{" "}
            <strong>Resinaro is not liable</strong> for decisions made based on
            this page.
          </p>
        </div>
      </section>

      {/* ---------- QUICK NAV (top chips) ---------- */}
      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="rounded-2xl border bg-white/90 p-3">
          <div className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-gray-700">
            Quick navigation
          </div>
          <nav className="flex snap-x gap-2 overflow-x-auto pb-1">
            {[
              ["banking", "Open a bank account"],
              ["credit-score", "Build a credit score"],
              ["credit-cards", "Credit cards"],
              ["mortgages", "Mortgages"],
              ["self-assessment", "Self Assessment"],
              ["ni-pensions", "NI & Pensions"],
              ["double-taxation", "Double taxation (IT–UK)"],
              ["remittances", "Send money to Italy"],
              ["budgeting", "Budgeting & calculators"],
              ["consumer", "Consumer protection"],
              ["faqs", "FAQs"],
              ["disclaimer", "Disclaimer"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="snap-start whitespace-nowrap rounded-full border px-3 py-1.5 text-sm text-green-900 hover:bg-emerald-50"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <article className="prose prose-emerald max-w-none prose-headings:text-green-950 prose-p:text-green-900/90 prose-li:marker:text-emerald-700">
          {/* Banking */}
          <section id="banking" aria-labelledby="banking-title">
            <h2 id="banking-title">Open a UK Bank Account</h2>
            <p>
              Most residents can open a UK current account with a bank or a
              digital provider. Requirements vary, but you typically need
              identity and address verification. If you are new to the UK and do
              not yet have bills or a tenancy in your name, some providers allow
              alternative proofs. A{" "}
              <A href={links.basicBankAccounts}>basic bank account</A> may be
              available if you are eligible and do not qualify for a standard
              account.
            </p>
            <h3>General steps</h3>
            <ol>
              <li>
                Choose a regulated firm (bank, building society or e-money
                institution). Check the{" "}
                <A href={links.fcaRegister}>FCA Register</A>.
              </li>
              <li>
                Prepare your ID and proof of address (passport/ID card; utility
                bill, tenancy, council letter). See general guidance on{" "}
                <A href={links.govProofOfAddress}>proof-of-address checks</A>.
              </li>
              <li>Apply (in-branch or app) and complete verification.</li>
              <li>
                Understand protection: eligible deposits are covered up to the{" "}
                <A href={links.fscs}>FSCS</A> limit per person per firm. E-money
                accounts are safeguarded but not covered by FSCS.
              </li>
            </ol>
            <p className="!mt-2">
              <strong>Tip:</strong> Turn on security (biometrics, strong
              authentication, card controls) and keep your address and contact
              details up to date to avoid service interruptions.
            </p>
          </section>

          {/* Credit score */}
          <section id="credit-score" aria-labelledby="credit-score-title">
            <h2 id="credit-score-title">Build a UK Credit Score</h2>
            <p>
              Lenders consult the UK credit reference agencies (CRAs):{" "}
              <A href={links.experian}>Experian</A>,{" "}
              <A href={links.equifax}>Equifax</A> and{" "}
              <A href={links.transUnion}>TransUnion</A>. Your UK profile starts
              when you open accounts reported to them (e.g., current account
              overdraft, mobile contract, credit card).
            </p>
            <ul>
              <li>
                Ensure your personal details are correct across providers. Learn
                your data rights via the{" "}
                <A href={links.ico}>ICO — credit files</A>.
              </li>
              <li>
                Consider a UK SIM or broadband contract in your name (paid on
                time). Keep utilisation low on any revolving credit.
              </li>
              <li>
                If eligible, you may appear on the electoral register at your UK
                address (<A href={links.electoralRegister}>register to vote</A>).
              </li>
              <li>
                Avoid multiple hard credit applications in a short window. Use
                eligibility checkers (soft searches) where possible.
              </li>
            </ul>
          </section>

          {/* Credit cards */}
          <section id="credit-cards" aria-labelledby="credit-cards-title">
            <h2 id="credit-cards-title">Credit Cards — Getting Started</h2>
            <p>
              Credit cards can help you build history if used carefully. Read
              about rates, fees and Section 75 protection in{" "}
              <A href={links.creditCardsGuide}>MoneyHelper’s guide</A>. As a new
              resident you may begin with lower limits or specialist “credit
              builder” products.
            </p>
            <ul>
              <li>
                Pay statements in full and on time to avoid interest and build a
                positive track record.
              </li>
              <li>
                Keep utilisation (balance/limit) low; high utilisation can hurt
                scores.
              </li>
              <li>
                Check your provider is FCA-authorised (see{" "}
                <A href={links.fcaRegister}>FCA Register</A>).
              </li>
            </ul>
          </section>

          {/* Mortgages */}
          <section id="mortgages" aria-labelledby="mortgages-title">
            <h2 id="mortgages-title">Mortgages — Overview</h2>
            <p>
              Lenders assess affordability (income, outgoings), credit history,
              deposit, and visa/residency. Newcomers may need a larger deposit
              or more evidence. Use an independent, regulated broker if you want
              help comparing options.
            </p>
            <ul>
              <li>
                Estimate borrowing with{" "}
                <A href={links.mortgageAffordability}>
                  MoneyHelper’s affordability guidance
                </A>
                .
              </li>
              <li>
                If you already have a mortgage and face difficulty, read the{" "}
                <A href={links.mortgageCharter}>Mortgage Charter</A> for support
                options offered by many UK lenders.
              </li>
            </ul>
          </section>

          {/* Self Assessment */}
          <section id="self-assessment" aria-labelledby="self-assessment-title">
            <h2 id="self-assessment-title">
              HMRC Self Assessment — Returns & Deadlines
            </h2>
            <p>
              You must file a return if HMRC tells you to or if you meet certain
              criteria (e.g., self-employment, rental income, foreign income,
              higher income child benefit charge). Check official guidance and
              register for a UTR in time.
            </p>
            <ul>
              <li>
                Do you need to file? —{" "}
                <A href={links.hmrcSelfAssessment}>HMRC Self Assessment</A>
              </li>
              <li>
                Register & get your UTR —{" "}
                <A href={links.hmrcUtr}>Register for Self Assessment</A>
              </li>
              <li>
                Deadlines — <A href={links.hmrcDeadlines}>Key dates</A>
              </li>
              <li>
                Ways to pay — <A href={links.hmrcPayments}>Pay your bill</A>
              </li>
            </ul>
            <h3>Records to gather</h3>
            <ul>
              <li>Employment P60/P45/P11D</li>
              <li>Self-employment income & allowable expenses</li>
              <li>Bank interest/dividends</li>
              <li>Rental, foreign income and any relief claims</li>
              <li>Pension contributions and gift aid</li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> Keep digital copies of invoices/receipts and
              consider cloud bookkeeping to simplify totals.
            </p>
          </section>

          {/* NI & Pensions */}
          <section id="ni-pensions" aria-labelledby="ni-pensions-title">
            <h2 id="ni-pensions-title">National Insurance & Pensions</h2>
            <p>
              Your National Insurance (NI) record affects benefits and the State
              Pension. Most workers are assigned contributions through payroll.
              Ensure you have an NI number and that your details are correct.
            </p>
            <ul>
              <li>
                NI overview — <A href={links.hmrcNi}>GOV.UK: National Insurance</A>
              </li>
              <li>
                Apply for NI number —{" "}
                <A href={links.hmrcNiNumber}>How to apply</A>
              </li>
              <li>
                Voluntary NI (fill gaps) —{" "}
                <A href={links.hmrcNiVoluntary}>Class 2/3 guidance</A>
              </li>
            </ul>
            <h3>State & Workplace Pensions</h3>
            <ul>
              <li>
                New State Pension — <A href={links.statePension}>Overview</A> ·{" "}
                <A href={links.pensionForecast}>Check your forecast</A>
              </li>
              <li>
                Workplace pensions (auto-enrolment) —{" "}
                <A href={links.workplacePensions}>Employer duties & your rights</A>
              </li>
              <li>
                Find old pensions — <A href={links.pensionTracing}>Pension Tracing Service</A>
              </li>
            </ul>
          </section>

          {/* Double Taxation */}
          <section
            id="double-taxation"
            aria-labelledby="double-taxation-title"
          >
            <h2 id="double-taxation-title">
              Double Taxation — Italy & the United Kingdom
            </h2>
            <p>
              The UK and Italy have a double taxation treaty that allocates
              taxing rights and provides methods of relief. The outcome depends
              on your tax residency, domestic rules and the type of income
              (employment, pensions, dividends, rental, etc.).
            </p>
            <ul>
              <li>
                Treaty documents —{" "}
                <A href={links.hmrcDtaItaly}>HMRC: Italy tax treaties</A>
              </li>
              <li>
                General “taxed twice” guidance —{" "}
                <A href={links.hmrcResidency}>GOV.UK: Tax on foreign income</A>
              </li>
              <li>
                Italian guidance for citizens abroad —{" "}
                <A href={links.taxReliefItalyUk}>
                  Agenzia delle Entrate (IT)
                </A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Note:</strong> Residence rules and tie-breaker tests can be
              complex. When in doubt, speak to a qualified cross-border tax
              adviser.
            </p>
          </section>

          {/* Remittances */}
          <section id="remittances" aria-labelledby="remittances-title">
            <h2 id="remittances-title">Send Money to Italy — Remittances</h2>
            <p>
              Fees include transfer charges and exchange-rate margins. Compare
              total cost and speed across providers. Ensure the firm is
              regulated and understand whether funds are protected as deposits
              or safeguarded as e-money.
            </p>
            <ul>
              <li>
                FCA guidance & choosing a provider —{" "}
                <A href={links.overseasBankTransfer}>
                  Money transfer & remittances (FCA)
                </A>
              </li>
              <li>
                Compare providers (brand-neutral) —{" "}
                <A href={links.compareRemittance}>What to check</A>
              </li>
              <li>
                Sanctions & compliance —{" "}
                <A href={links.sanctionsCheck}>GOV.UK: financial sanctions</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Tip:</strong> For large sums, ask for an{" "}
              <em>all-in</em> quote, compare rate locks, and confirm receiving
              bank fees in Italy (SHA/OUR options for wires).
            </p>
          </section>

          {/* Budgeting */}
          <section id="budgeting" aria-labelledby="budgeting-title">
            <h2 id="budgeting-title">Budgeting & Cost-of-Living Tools</h2>
            <p>
              Track spending and plan for UK living costs with reputable tools.
              If you’re struggling, seek free, impartial support early.
            </p>
            <ul>
              <li>
                Budget planner —{" "}
                <A href={links.moneyHelperBudget}>MoneyHelper</A>
              </li>
              <li>
                Debt help — <A href={links.moneyHelperDebt}>MoneyHelper</A> ·{" "}
                <A href={links.citizensAdviceDebt}>Citizens Advice</A>
              </li>
              <li>
                Personalised inflation —{" "}
                <A href={links.onsInflationCalc}>ONS calculator</A>
              </li>
              <li>
                Energy bills & price-cap info — <A href={links.ofgem}>Ofgem</A>
              </li>
            </ul>
          </section>

          {/* Consumer protection */}
          <section id="consumer" aria-labelledby="consumer-title">
            <h2 id="consumer-title">Consumer Protection & Safety</h2>
            <ul>
              <li>
                Check a financial firm — <A href={links.fcaRegister}>FCA Register</A>
              </li>
              <li>
                Deposit protection — <A href={links.fscs}>FSCS</A>
              </li>
              <li>
                Your credit file rights — <A href={links.ico}>ICO</A>
              </li>
            </ul>
            <p className="!mt-2">
              <strong>Beware of scams:</strong> Never share passcodes, avoid
              pressure to transfer “for safety”, and contact your bank using the
              number on the official website if unsure.
            </p>
          </section>

          {/* FAQs */}
          <section id="faqs" aria-labelledby="faqs-title">
            <h2 id="faqs-title">Frequently Asked Questions</h2>

            <details className="group rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Can I open a bank account before I have a job?
              </summary>
              <div className="mt-2 text-green-900/90">
                Often yes, if you meet identity and address checks. Some banks
                request employment details; many accept “student” or “unemployed”
                at onboarding. Consider{" "}
                <A href={links.basicBankAccounts}>basic accounts</A> where
                eligible.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Will my Italian credit history transfer to the UK?
              </summary>
              <div className="mt-2 text-green-900/90">
                Credit histories don’t directly transfer across countries. You’ll
                need to build a UK profile with UK-reported accounts. Keep your
                Italian accounts in good order for future references if needed.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What if I miss the Self Assessment deadline?
              </summary>
              <div className="mt-2 text-green-900/90">
                HMRC may charge penalties and interest. File as soon as possible
                and arrange a{" "}
                <A href={links.hmrcPayments}>payment plan</A> if required.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Are private pensions from Italy taxable in the UK?
              </summary>
              <div className="mt-2 text-green-900/90">
                It depends on the treaty article and your tax residency. Review
                the <A href={links.hmrcDtaItaly}>UK–Italy treaty</A> and seek
                advice for your specific pension type and residency.
              </div>
            </details>

            <details className="group mt-3 rounded-xl border bg-white p-4">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Is it cheaper to send money by bank wire or a money transfer
                company?
              </summary>
              <div className="mt-2 text-green-900/90">
                It varies by amount and provider. Compare the total cost (fees +
                FX rate) and speed. See{" "}
                <A href={links.overseasBankTransfer}>FCA remittance guidance</A>{" "}
                and request all-in quotes.
              </div>
            </details>
          </section>

          {/* CTA */}
          <section className="mt-10">
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
              <h3 className="text-xl font-semibold">Need practical help?</h3>
              <p className="mt-1 text-green-900/80">
                We can’t give personalised tax or financial advice, but we can
                point you to the right official pages and checklists.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  Contact Resinaro
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50"
                >
                  Browse our directory
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mt-10">
            <h2>Disclaimer</h2>
            <p>
              The information on this page is provided “as is” for general
              guidance. It does not constitute legal, tax, immigration,
              financial, investment or mortgage advice. Policies, product
              eligibility and protections change and differ by provider and your
              personal circumstances. Always follow the latest requirements on{" "}
              <A href="https://www.gov.uk/">GOV.UK</A>,{" "}
              <A href="https://www.gov.uk/government/organisations/hm-revenue-customs">
                HMRC
              </A>
              , <A href={links.fcaRegister}>FCA</A>,{" "}
              <A href={links.fscs}>FSCS</A> and other official bodies linked on
              this page, and consult a qualified professional for personal
              advice. <strong>Resinaro is not liable</strong> for decisions or
              outcomes arising from use of this guide.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}