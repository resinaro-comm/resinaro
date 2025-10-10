// src/app/community/health/navigating-nhs-healthcare-italians-uk-2025/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Navigating NHS Healthcare as an Italian in the UK (2025): Register, access & tips",
  description:
    "Step-by-step guide for Italians and EU nationals using the NHS in the UK: GP registration, NHS number, interpreters, urgent care, prescriptions, GHIC/EHIC and practical tips (2025).",
  metadataBase: new URL("https://www.resinaro.com"),
  alternates: {
    canonical: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025",
  },
};

export default function Page() {
  const pageUrl =
    "https://www.resinaro.com/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need immigration status to register with a GP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No — registering with a GP is free and available to everyone living in England; you do not need to prove immigration status to register in most cases.",
        },
      },
      {
        "@type": "Question",
        name: "What is an NHS number and how do I get one?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Your NHS number is a unique 10-digit identifier for healthcare records. If you are not registered, registering with a GP typically results in an NHS number being created for you.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get help in Italian during NHS calls or appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NHS 111 and many local services can arrange confidential interpreters; practices may also provide language support or signpost local interpreting services.",
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
    headline: "Navigating NHS Healthcare as an Italian in the UK (2025)",
    description:
      "Step-by-step guide for Italians and EU nationals using the NHS in the UK: GP registration, NHS number, interpreters, urgent care, prescriptions, GHIC/EHIC and practical tips (2025).",
    image: ["https://www.resinaro.com/images/nhs-healthcare-hero.jpg"],
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
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-900 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Navigating NHS Healthcare as an Italian in the UK (2025)
          </h1>
          <p className="mt-3 text-white/90">
            How to register with a GP, get an NHS number, use urgent care and
            access language support — practical steps for Italians and EU
            nationals living in the UK.
          </p>
          {/* Hero image prompt:
              "Editorial photo: NHS building entrance with a healthcare worker handing a leaflet to a person holding an EU/Italian passport; soft daylight, 3840×1600."
          */}
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 mt-10">
        {/* Hero Image */}
        <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/images/nhs-healthcare-italians-uk-hero-3840x1280.png"
            alt="NHS healthcare center entrance with staff helping patients with translation services"
            width={3840}
            height={1280}
            priority
            quality={85}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <figcaption className="text-sm text-gray-600 px-4 py-3 bg-white/60">
            NHS healthcare services welcome all residents — register with a GP and access free healthcare support.
          </figcaption>
        </figure>

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="leading-relaxed">
            The NHS provides a broad range of free and low-cost services to
            residents. This guide explains how to register with a GP, find
            urgent care, use interpreters, and practical tips for prescriptions,
            GHIC/EHIC when travelling, and where to get extra help.
          </p>
          <p className="mt-3">
            Need hands-on support with registration or paperwork?{" "}
            <Link href="/services" className="underline text-green-900 hover:text-green-800">
              View Resinaro Services →
            </Link>
          </p>
        </div>

        {/* Quick checklist */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Quick checklist</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Passport or BRP (for ID)</li>
            <li>Proof of address (if available) — helps but not always required</li>
            <li>UK mobile number / email for GP login and appointment messages</li>
            <li>Bring a short list of medicines you take (names & dosages)</li>
          </ul>
        </section>

        {/* Registering with a GP */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Registering with a GP (step-by-step)</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Find local surgeries</strong> by postcode using the NHS website or NHS App.
            </li>
            <li>
              <strong>Complete the registration form</strong> — most practices offer online registration or a paper form at reception. You usually do not need to prove immigration status to register. 
            </li>
            <li>
              <strong>Provide ID & contact details</strong> — passport/BRP is typical; proof of address is helpful but not always mandatory.
            </li>
            <li>
              <strong>Confirm registration</strong> — once registered, you can book appointments and your records will be created. If you didn&apos;t have an NHS number, registering with a GP usually results in one being created for you. 
            </li>
          </ol>
        </section>

        {/* NHS number */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">NHS number — what it is & how to find it</h2>
          <p className="mb-3">
            Your NHS number is a unique 10-digit identifier used in medical records.
            You don&apos;t need to know it to use services, but it helps when transferring records or booking. You can ask your GP to look it up or use NHS online services where available. 
          </p>
        </section>

        {/* Urgent & emergency care */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Urgent care, walk-ins & emergencies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>NHS 111</strong> — free 24/7 advice for urgent but non-life-threatening problems (call 111 or use 111 online).</li>
            <li><strong>A&E / 999</strong> — for life-threatening emergencies call 999 or go to Accident & Emergency immediately.</li>
            <li><strong>Urgent Treatment Centres</strong> — local clinics for injuries and illnesses that need same-day attention but are not life-threatening.</li>
          </ul>
        </section>

        {/* Interpreters & language support */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Language support & interpreters</h2>
          <p className="mb-3">
            If English is not your first language, NHS 111 and many services can provide a confidential interpreter by phone or video — tell them which language you need when you call. Practices may also be able to book face-to-face interpreters or point you to local translation services.
          </p>
        </section>

        {/* Prescriptions & repeat medicines */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Prescriptions & repeat medicines</h2>
          <p className="mb-3">
            GPs can issue prescriptions — in England prescriptions usually have a charge unless you’re exempt. Ask your GP about setting up repeat prescriptions and using online pharmacy services to collect medicines. Keep a list of brand/generic names when you move from Italy to avoid confusion.
          </p>
        </section>

        {/* GHIC / EHIC when travelling */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Travelling to the EU — GHIC / EHIC</h2>
          <p className="mb-3">
            If you hold a valid GHIC / EHIC, it can help you access state healthcare when visiting EU countries on the same basis as locals — check NHS guidance and apply for a GHIC if needed before travel. GHIC does not replace travel insurance and rules vary by country.
          </p>
        </section>

        {/* Where to get help */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">If you need help registering or have complex needs</h2>
          <p className="mb-3">
            Local NHS patient advice, Doctors of the World, and other charities provide practical help registering with GPs, getting documents in order, and language support. Your local practice or NHS England can also point you to community services.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Doctors of the World — practical help for migrants</li>
            <li>NHS England patient advice — contact via local NHS pages</li>
            <li>Local practice reception — ask for help or an advocate</li>
          </ul>
        </section>

        {/* Useful links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Useful links</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Register with a GP — NHS:{" "}
              <a href="https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/" target="_blank" rel="noopener noreferrer" className="underline text-green-900">
                nhs.uk (how to register)
              </a>
            </li>
            <li>
              Apply for GHIC — NHS:{" "}
              <a href="https://www.nhs.uk/using-the-nhs/healthcare-abroad/apply-for-a-free-uk-global-health-insurance-card-ghic/" target="_blank" rel="noopener noreferrer" className="underline text-green-900">
                nhs.uk (GHIC)
              </a>
            </li>
            <li>
              Find your NHS number — NHS:{" "}
              <a href="https://www.nhs.uk/nhs-services/online-services/find-nhs-number/" target="_blank" rel="noopener noreferrer" className="underline text-green-900">
                nhs.uk (find NHS number)
              </a>. 
            </li>
            <li>
              Doctors of the World — practical migrant support (local clinics & help).
            </li>
          </ul>
        </section>

        {/* FAQs interactive */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-3">FAQs</h2>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">Can I register with a GP without proof of address?</summary>
            <p className="mt-2">
              Many practices will accept registration without UK address proof; bring any ID you have and explain your situation — the practice reception or patient advice service can help. 
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-3">
            <summary className="font-semibold cursor-pointer">How do I get an interpreter for appointments?</summary>
            <p className="mt-2">
              Ask your GP practice or call NHS 111 and state the language required — an interpreter can be arranged for calls, video or face-to-face where available.
            </p>
          </details>

          <details className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">Are emergency services free?</summary>
            <p className="mt-2">
              Emergency 999 calls and A&E are available regardless of immigration status; follow local guidance and call 999 in life-threatening situations.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              Need help registering, filling forms, or arranging interpreters? Resinaro can help with hands-on support and document checks.
            </p>
            <Link href="/services" className="inline-flex items-center rounded-lg bg-green-900 text-white px-5 py-3 font-medium shadow hover:bg-green-800">
              View Resinaro Services →
            </Link>
          </div>
        </section>
      </div>

      {/* JSON-LD scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
