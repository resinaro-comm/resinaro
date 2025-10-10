// src/app/services/nin-support/page.tsx
import React from "react";
import { Metadata } from "next";
import NinForm from "../../../components/NinForm";

export const metadata: Metadata = {
  title: "National Insurance (NIN) Support | Resinaro",
  description:
    "Step-by-step help with National Insurance Number applications and replacements for Italians and migrants in the UK.",
  alternates: { canonical: "/services/nin-support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to receive a NIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Timelines vary. Initial HMRC verification can take a few days to several weeks. We help prepare documents and follow up to reduce avoidable delays.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an appointment to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most applicants start the process by applying online or by phone with HMRC. We support you with the application and will contact HMRC where appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "What if I do not have proof of address?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We advise on acceptable alternatives such as council tax letters, benefit letters or NHS correspondence. We can help obtain or prepare a cover letter explaining your circumstances.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "National Insurance Number (NIN) Support",
  provider: {
    "@type": "Organization",
    name: "Resinaro",
    url: "https://www.resinaro.com",
  email: "resinaro@proton.me",
  },
  serviceType: "Document support and liaison with HMRC",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Practical support to apply for a new National Insurance Number or recover a lost/forgotten number. We help prepare documents, contact HMRC and explain timelines.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "GBP",
    price: "20.00",
  },
};

export default function NINSupportPage(): React.ReactElement {
  return (
    <main className="bg-neutral-50 text-green-900 py-12 px-4 min-h-screen">
      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">National Insurance (NIN) Support</h1>
        <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
          Practical, step-by-step help for National Insurance Number applications and replacements.
        </p>
      </section>

      <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left column: Details */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              We support Italians and other migrants to obtain or recover a National Insurance Number (NIN). Our service reduces uncertainty and saves time by making sure applications are complete and by liaising with HMRC where needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">What is included</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Review of your documents and a checklist tailored to your case.</li>
              <li>Assistance drafting or completing the HMRC application or replacement request.</li>
              <li>Contacting HMRC on your behalf where appropriate and following up.</li>
              <li>Written summary of next steps and expected timelines.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Documents you will need</h2>
            <p className="text-gray-700 mb-2">Gather where possible before booking so we can work efficiently:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Passport or national identity document.</li>
              <li>Proof of UK address: council tax, utilities, bank statement or NHS letter.</li>
              <li>Employment details if you already have an offer or appointment.</li>
            </ul>
            <p className="text-sm italic text-green-800 mt-2">
              If you do not have standard address proof we will advise on acceptable alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How we work: simple process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Book:</strong> Use the form to tell us about your need and availability.
              </li>
              <li>
                <strong>Prepare:</strong> We review documents and confirm the application approach.
              </li>
              <li>
                <strong>Submit & follow up:</strong> We help complete the application and contact HMRC as required until the matter is resolved.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Expected timelines</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Initial review and guidance: within 2 business days of booking.</li>
              <li>Application processing by HMRC: typically several days to a few weeks; this is set by HMRC and outside our direct control.</li>
              <li>Follow up attempts: we will make reasonable follow up calls or emails for up to 4 weeks after submission as part of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Who is this for</h2>
            <p className="text-gray-700">
              This service is for people who need a first National Insurance Number, people who have lost their number and require recovery, and people who need help understanding HMRC correspondence about the NIN.
            </p>
          </section>

          {/* GOV.UK guidance block */}
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-900">Official GOV.UK guidance</h2>

            <p className="text-gray-700 mb-2">
              The following is the official guidance from GOV.UK on National Insurance numbers. For the original source and to apply online, visit{" "}
              <a
                href="https://www.gov.uk/apply-national-insurance-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 underline"
              >
                GOV.UK — Apply for a National Insurance number
              </a>.
            </p>

            <h3 className="font-semibold mt-2">Who can apply for a National Insurance number</h3>
            <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
              <li>you live in the UK</li>
              <li>you have the right to work in the UK</li>
              <li>you are working, looking for work or have an offer to start work</li>
            </ul>

            <p className="text-gray-700 mb-3">
              You can start work before you receive your National Insurance number if you can prove you have the right to work in the UK. If you already have a National Insurance number, you do not need to apply for a new one — it stays the same for life.
            </p>

            <h3 className="font-semibold mt-2">When you do not need a National Insurance number</h3>
            <p className="text-gray-700 mb-2">
              You do not need a National Insurance number to start an application for benefits or a student loan. If you need a National Insurance number to get your benefit or student loan paid, you’ll be contacted and told how to get one. You do not need a National Insurance number to apply to the EU Settlement Scheme.
            </p>

            <h3 className="font-semibold mt-2">Finding your National Insurance number</h3>
            <p className="text-gray-700 mb-2">
              Check how to find a National Insurance number on GOV.UK if you already have one. If you have a biometric residence permit (BRP) or eVisa, you might have a National Insurance number on the back of your BRP or visible in your UKVI eVisa account.
            </p>

            <h3 className="font-semibold mt-2">If you did not get a NIN or have already applied</h3>
            <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
              <li>If you&apos;re aged 16–19 and didn&apos;t get a number, check whether a parent/guardian filled a Child Benefit form for you.</li>
              <li>If you do not have a National Insurance number and plan to work, you must apply while you are in the UK.</li>
              <li>If you&apos;ve already applied it can take up to 4 weeks to get your National Insurance number. You can call the application helpline if it&apos;s been longer, you&apos;ve moved house, or your personal details changed — have your application reference ready if you have one.</li>
            </ul>

            <p className="text-sm italic text-gray-600">
              This guidance is also available in Welsh (Cymraeg) on GOV.UK. For the authoritative and most up-to-date instructions, always refer to the GOV.UK page linked above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Price, concessions and refunds</h2>
            <p className="text-gray-700 mb-2">
              The standard service fee is <strong>£20</strong>. Concessionary rates are available on request for people in financial hardship. Contact resinaro@proton.me to ask about concessions before booking.
            </p>
            <p className="text-gray-700">
              Refunds: If we cannot provide the agreed service due to our error, we will offer a full refund or a credit toward other Resinaro services. Refund requests should be emailed to resinaro@proton.me and will be reviewed within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data protection and confidentiality</h2>
            <p className="text-gray-700">
              We treat personal data with care. Documents you provide are used only to deliver the service and are stored securely. You may ask us to remove your data after the completion of the case. See our Privacy Policy for full details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Outcomes we deliver</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Complete HMRC application or recovery request prepared and submitted.</li>
              <li>Clear instructions for next steps and documentation for employers.</li>
              <li>Follow up record and written summary of communications with HMRC where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
            <div className="space-y-3 text-gray-700">
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Resinaro made the NIN process straightforward. They explained what I needed and helped me follow up with HMRC.&quot; — Martina
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic">
                &quot;Quick, professional and supportive. I got my number with minimal stress.&quot; — Roberto
              </blockquote>
            </div>
          </section>
        </div>

        {/* Right column: form and CTA */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Book NIN Support</h2>
            <p className="text-sm text-gray-700 mb-4">
              Complete the form and we will contact you to confirm the booking and next steps.
            </p>

            <NinForm />
          </div>

          <div className="bg-green-900 text-white rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-2">Need urgent help?</h3>
            <p className="text-sm mb-4">
              Email <a href="mailto:resinaro@proton.me" className="underline text-amber-300">resinaro@proton.me</a> and mark the message &quot;Urgent&quot; if the matter is time sensitive.
            </p>
            <div className="flex gap-3">
              <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg w-full text-center">Contact</a>
              <a href="/services" className="border border-white px-4 py-2 rounded-lg w-full text-center">All services</a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
            <h4 className="font-semibold mb-2">Before you book</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Have your ID and address proof ready.</li>
              <li>Expect an introductory call or email to confirm details.</li>
              <li>Bring any HMRC correspondence if you have it.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQs section (interactive details) */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Frequently asked questions</h2>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">What is a National Insurance Number?</summary>
          <div className="mt-2 text-gray-700">
            A National Insurance Number is a unique identifier used by HMRC for National Insurance and tax records.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">Can you guarantee a NIN will be issued?</summary>
          <div className="mt-2 text-gray-700">
            We cannot guarantee HMRC outcomes. We will however prepare applications and follow up on your behalf to maximise the chance of a timely positive outcome.
          </div>
        </details>

        <details className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
          <summary className="font-semibold cursor-pointer">How do I request a concession or refund?</summary>
          <div className="mt-2 text-gray-700">
            Email resinaro@proton.me to request a concession before booking. For refunds, contact resinaro@proton.me and include your booking reference and reason.
          </div>
        </details>
      </section>

      {/* JSON-LD for FAQ and Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
