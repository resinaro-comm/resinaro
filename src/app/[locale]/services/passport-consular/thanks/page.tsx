// src/app/services/passport-consular/thanks/page.tsx
import Link from "next/link";
import Image from "next/image";
import { p, type Locale } from "@/lib/localePath";

export const metadata = {
  title: "Thanks — Passport Assistance | Resinaro",
  description: "Thank you for your payment. We’ll review your passport request and email you next steps shortly.",
};

const blog = [
  {
    title: "How to apply for your Italian Passport",
    desc: "Up-to-date documents, minor applications, fees and booking tips.",
    link: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
    img: "/images/italian-passport-uk-hero-3840x1280.png",
    alt: "Italian passport and documents on a desk",
  },
  {
    title: "Italian Electronic ID Card (CIE) in the UK",
    desc: "Eligibility, documents, booking and biometric tips.",
    link: "/community/bureaucracy-guides/italian-cie-id-card-uk",
    img: "/images/cie-hero-3840x1280.png",
    alt: "Italian CIE card and documents",
  },
  {
    title: "What is AIRE and how to register",
    desc: "FAST IT, proofs, common errors, timelines and local tips.",
    link: "/community/bureaucracy-guides/aire-registration-uk",
    img: "/images/aire-registration.png",
    alt: "AIRE registration documents",
  },
];

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="bg-neutral-50 text-green-900 min-h-screen pb-20 px-4">
      <div className="max-w-4xl mx-auto pt-14">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Thank you — Passport Assistance</h1>
          <p className="text-lg text-green-800 italic max-w-2xl mx-auto">
            Payment received. We’ll confirm your consulate, until you get the date of appointment, do NOT log in to your prenotami account - this could block the system.
          </p>
        </header>

        <section className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">What happens next</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>We match your payment with your form via reference and email.</li>
            <li>We review documents for your consulate (AIRE, proof of address, ID, photos).</li>
            <li>We email a brief checklist and proposed booking steps/timings.</li>
          </ul>
        </section>

        {/* Priority Review Upsell */}
        <section className="mt-10 rounded-xl bg-amber-50 border border-amber-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-amber-900">Add Priority Review (+£20)</h3>
          <p className="text-sm text-amber-900 mt-2">
            Need it sooner? Upgrade today and we&apos;ll prioritise your service. We&apos;re experiencing high demand — this
            helps us put you closer to the front of the line. No problem if not — we&apos;ll still take good care of your case.
          </p>
          <div className="mt-3">
            <a
              href="https://buy.stripe.com/4gMfZhbBAbZJ4A9bV8aMU05"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-4 py-2 hover:bg-amber-700"
            >
              Add Priority Review
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Helpful reads while you wait</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {blog.map((b) => (
              <Link key={b.link} href={p(locale, b.link)} className="group rounded-lg overflow-hidden border bg-white shadow-sm">
                <div className="relative h-32 w-full">
                  <Image src={b.img} alt={b.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform group-hover:scale-[1.03]" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold group-hover:underline">{b.title}</h4>
                  <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 text-sm text-gray-700 space-y-2">
          <h3 className="text-base font-semibold">Fairness & refunds</h3>
          <p>
            If we fail to deliver what we agreed due to our error, we’ll refund or credit you. Please review our
            <Link href={p(locale, "/refund-policy")} className="underline text-green-800"> refund policy</Link> and
            <Link href={p(locale, "/terms")} className="underline text-green-800 ml-1"> terms</Link>.
          </p>
          <p className="text-gray-600">We process personal data in line with our <Link href={p(locale, "/privacy-policy")} className="underline text-green-800">privacy policy</Link>.</p>
        </section>

        <div className="mt-10 text-center">
          <Link href={p(locale, "/services/passport")} className="inline-flex items-center gap-2 rounded-lg border border-green-900 text-green-900 px-5 py-2 hover:bg-green-900 hover:text-white transition">
            Back to Passport support
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
