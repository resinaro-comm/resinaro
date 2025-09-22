"use client";

import React, {useState, useId} from "react";

type QA = {
  q: string;
  a: React.ReactElement;
};

const qa: QA[] = [
  {
    q: "What visa do I need to move from Italy to the UK?",
    a: (
      <>
        <p className="mb-2">
          If you already hold <strong>pre-settled or settled status</strong> under the EU Settlement Scheme,
          you can live and work in the UK under that status. New arrivals typically need a
          <em> points-based visa</em> (e.g., Skilled Worker), a Student visa, the Youth Mobility Scheme (if eligible),
          or a Family route. Use the official visa checker to confirm your best route
          and required documents.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Check eligibility/routes with the official UK visa finder and read your route’s guidance carefully.</li>
          <li>Confirm whether <em>“No Recourse to Public Funds”</em> applies to your visa conditions.</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          Official sources: UKVI visa routes and sponsor guidance; definition of public funds and who can access them.
        </p>
      </>
    ),
  },
  {
    q: "Can I start work before I get my National Insurance (NI) number?",
    a: (
      <>
        <p className="mb-2">
          Yes. You can start work if you have the right to work; apply for your NI number as soon as possible.
          Your employer will operate PAYE in the meantime.
        </p>
        <p className="text-sm text-gray-600">
          Source (example GOV.UK guidance referencing this rule): “You can start work without a National
          Insurance number” (context page). 
        </p>
      </>
    ),
  },
  {
    q: "How do I apply for a National Insurance number?",
    a: (
      <>
        <ol className="list-decimal list-inside space-y-1">
          <li>Gather proof of identity (passport/BRP) and proof of UK address (if available).</li>
          <li>Apply online via GOV.UK (you may be asked for selfies/video or an interview).</li>
          <li>Wait for HMRC’s confirmation letter with your NI number.</li>
        </ol>
        <p className="mt-2 text-sm text-gray-600">
          Tip: keep copies of everything; you can work while the application is processed. 
        </p>
      </>
    ),
  },
  {
    q: "What documents do landlords check before renting?",
    a: (
      <>
        <p className="mb-2">
          In England, landlords must complete a <strong>Right to Rent</strong> check. You’ll usually show
          a physical document (e.g., passport/BRP) or give an <em>online share code</em> if your status is digital.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Checks happen before the tenancy starts and can be repeated for time-limited permission.</li>
          <li>You should also receive a written tenancy agreement and prescribed information about any deposit.</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          Official guidance: Right to Rent checks for landlords and tenants. 
        </p>
      </>
    ),
  },
  {
    q: "How much can a landlord charge as a tenancy deposit?",
    a: (
      <>
        <p className="mb-2">
          In England, most private tenancies are capped at <strong>5 weeks’ rent</strong> for the security deposit
          (<em>6 weeks</em> if annual rent is over £50,000). Holding deposits are usually capped at 1 week’s rent.
          Deposits must be protected in a government-approved scheme.
        </p>
        <p className="text-sm text-gray-600">
          Official source: Tenant Fees Act guidance (caps & permitted payments). 
        </p>
      </>
    ),
  },
  {
    q: "Can I register with an NHS GP without proof of address or ID?",
    a: (
      <>
        <p className="mb-2">
          Yes—GP practices are advised to register patients even if they don’t have ID or proof of address.
          Bring any documents you do have; emergency/urgent care is always available.
        </p>
        <p className="text-sm text-gray-600">
          NHS guidance on GP registration and patient access. 
        </p>
      </>
    ),
  },
  {
    q: "Do I need private health insurance if I have a UK visa?",
    a: (
      <>
        <p className="mb-2">
          Many visas over 6 months include the <em>Immigration Health Surcharge (IHS)</em>, which entitles you to use the NHS.
          Private insurance is optional (e.g., for faster elective care) but not required for general NHS access. Always check
          your visa terms.
        </p>
      </>
    ),
  },
  {
    q: "Can I open a bank account without a UK address?",
    a: (
      <>
        <p className="mb-2">
          Yes. Several UK banks and e-money institutions accept alternative address proofs or allow you to open an account
          using the app (e.g., digital statements, employer letter, university letter). We also offer step-by-step guides
          for Monzo, Starling, and Revolut on our blog.
        </p>
        <p className="text-sm">
          See: <a className="underline text-green-800" href="/community/life-in-uk/bank-account">Opening a UK bank account guide</a>.
        </p>
      </>
    ),
  },
  {
    q: "Can I drive with my Italian licence in the UK?",
    a: (
      <>
        <p className="mb-2">
          EU licences are generally valid for driving in Great Britain. Many drivers keep using their EU licence while resident,
          or can exchange it with the DVLA without a test in certain cases. Rules vary by age, categories, and medical conditions—always
          confirm your exact position using DVLA guidance and the licence-exchange tool.
        </p>
        <p className="text-sm">
          Start here: search “GOV.UK DVLA exchange a foreign driving licence”.
        </p>
      </>
    ),
  },
  {
    q: "Do I have to pay Council Tax?",
    a: (
      <>
        <p className="mb-2">
          Most households in England, Scotland, and Wales pay Council Tax. You may qualify for a discount
          or exemption (e.g., full-time students, single-person discount, certain low-income reliefs).
          Check your local council’s website for band and eligibility.
        </p>
      </>
    ),
  },
  {
    q: "How do UK taxes and NI work when I get a job?",
    a: (
      <>
        <p className="mb-2">
          Employees are usually paid via <strong>PAYE</strong> (your employer deducts Income Tax and NI). If you are
          <strong> self-employed</strong>, you must register for Self Assessment, get a UTR, and pay Income Tax +
          Class 2/4 NI. Keep your payslips and P60/P45.
        </p>
      </>
    ),
  },
  {
    q: "Can I claim UK benefits when I arrive?",
    a: (
      <>
        <p className="mb-2">
          Many visas include <em>No Recourse to Public Funds</em>. EU Settlement Scheme status and some other statuses may allow access.
          Always check your BRP/visa conditions and the official list of what counts as “public funds”.
        </p>
        <p className="text-sm text-gray-600">
          Official definition & list: Public Funds (UKVI).
        </p>
      </>
    ),
  },
  {
    q: "How do I get my child into school?",
    a: (
      <>
        <p className="mb-2">
          Apply via your local council’s admissions service. You’ll typically provide your address, your child’s details,
          and any visa/settled status evidence. Schools can help if you need support with English or special educational needs.
        </p>
      </>
    ),
  },
  {
    q: "Do I need to register with the Italian AIRE or the Consulate?",
    a: (
      <>
        <p className="mb-2">
          Italians who reside abroad for over 12 months generally register with <strong>AIRE</strong> via their consulate.
          You’ll also use the consulate for passports, civil status records (births/marriage), and other services. Booking is
          usually via official systems—avoid third-party “slots” sellers.
        </p>
        <p className="text-sm">
          We can guide you through AIRE, passports, CIE, and more: see <a className="underline text-green-800" href="/services/bureaucracy">Bureaucracy Help</a>.
        </p>
      </>
    ),
  },
  {
    q: "What scams should I watch out for?",
    a: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>“Appointment sellers” for consulates/visa centres.</li>
          <li>Landlords demanding cash/higher deposits or skipping Right to Rent paperwork.</li>
          <li>Fake “NI number” services—application is via GOV.UK, not a paid middleman.</li>
          <li>Phishing messages claiming to be HMRC, DVLA, or your bank.</li>
        </ul>
        <p className="mt-2">
          When in doubt, message us—we’ll sanity-check it for you at no cost.
        </p>
      </>
    ),
  },
];

function QAItem({item, idx}: {item: QA; idx: number}) {
  const [open, setOpen] = useState(false);
  const btnId = useId();
  const panelId = useId();
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        id={btnId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 font-medium flex items-center justify-between"
      >
        <span className="pr-4">{item.q}</span>
        <span className="ml-4 text-green-900">{open ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`px-5 pb-5 ${open ? "block" : "hidden"}`}
      >
        <div className="prose max-w-none text-gray-700 leading-relaxed">{item.a}</div>
      </div>
    </div>
  );
}

export default function ServicesFAQ() {
  // Minimal JSON-LD for FAQ rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qa.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": (
          // Strip tags for JSON-LD; keep it simple
          item.q +
          " — see official GOV.UK / NHS guidance where linked above."
        ),
      },
    })),
  };

  return (
    <section className="mt-20 mb-24">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Common Questions About Moving to the UK
        </h2>
        <p className="text-gray-700 mb-8">
          Practical answers for Italians and other migrants — with links to official guidance.
          If you need one-to-one help,{" "}
          <a className="underline text-green-800" href="/contact">contact us</a>.
        </p>

        <div className="space-y-3">
          {qa.map((item, i) => (<QAItem key={i} item={item} idx={i} />))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
