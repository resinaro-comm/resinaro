// src/app/services/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Resinaro | Practical support for migrants in the UK",
  description:
    "Full list of Resinaro services: passports, NIN, AIRE, SPID, housing, translations, benefits support, mental health and community integration. Transparent fees and clear timelines.",
};

type Service = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  bullets?: string[];
  fee: string;
  path: string;
  turnaround?: string;
  badge?: string;
};

const services: Service[] = [
  { id: "passport", icon: "🛂", title: "Passport & Consular Services", desc: "Booking, paperwork review and urgent consular support for Italian passports from the UK.", bullets: ["Consulate bookings (London/Manchester)", "Document pack checks", "Urgent support"], fee: "£35", path: "/services/passport", turnaround: "1–4 weeks", badge: "Popular" },
  { id: "nin", icon: "💼", title: "National Insurance (NIN) Support", desc: "Apply for a new NIN or replace a lost one with a step-by-step guide and HMRC contact support.", bullets: ["Prepare documents", "Contact HMRC where needed", "Explain timelines"], fee: "£20", path: "/services/nin-support", turnaround: "Same day–48hrs", badge: "Fast" },
  { id: "bureaucracy", icon: "📄", title: "Bureaucracy Help (AIRE / SPID / Benefits)", desc: "AIRE registration, SPID setup, and benefit application help — cut through red tape.", bullets: ["AIRE registration & updates", "SPID setup & troubleshooting", "Benefits paperwork signposting"], fee: "£30", path: "/services/bureaucracy", turnaround: "1–14 days" },
  { id: "aire", icon: "🗂️", title: "AIRE Registration & Updates", desc: "Register or update your AIRE record to keep consular services and rights in order.", bullets: ["Full AIRE registration", "Address/name updates", "Document checklist & submission"], fee: "£25", path: "/services/aire", turnaround: "3–14 days" },
  { id: "idcard", icon: "🆔", title: "Italian ID Card Assistance (CIE)", desc: "Help obtaining or renewing the Carta d’Identità Elettronica from the UK consulate.", bullets: ["Consular booking guidance", "Biometric & photo requirements", "Minor/consent guidance"], fee: "£35", path: "/services/id-card", turnaround: "2–6 weeks" },
  { id: "translations", icon: "📝", title: "Certified Translations", desc: "Professional, certified translations (Italian ↔ English) for legal and official documents.", bullets: ["Certified translator partners", "Fast turnaround options", "Formatting for official use"], fee: "From £25 per page", path: "/services/translation", turnaround: "24–72 hours" },
  { id: "housing", icon: "🏠", title: "Housing Guidance", desc: "Find housing safely, avoid scams, and understand tenant rights across the UK.", bullets: ["Search checklist & vetted partners", "Deposit protection guidance", "Council housing advice"], fee: "£25", path: "/services/housing", turnaround: "1–14 days" },
  { id: "benefits", icon: "💷", title: "Benefits Guidance", desc: "Clear advice on eligibility and applications for UK benefits and entitlements.", bullets: ["Eligibility checks", "Application support", "Appeals signposting"], fee: "From £15 (advice)", path: "/services/benefits", turnaround: "1–7 days" },
  { id: "settled", icon: "🔒", title: "Settled Status Support", desc: "Guidance for EU Settlement Scheme applications, status checks and appeals.", bullets: ["Application review", "Appeals and evidence help", "Rights explained"], fee: "£30", path: "/services/settled-status", turnaround: "1–14 days" },
  { id: "spid", icon: "🔑", title: "SPID Digital Identity", desc: "SPID registration and troubleshooting so you can access Italian digital services from the UK.", bullets: ["ID provider guidance", "NFC/phone compatibility checks", "Login troubleshooting"], fee: "£20", path: "/services/spid", turnaround: "1–7 days" },
  { id: "mental", icon: "🧠", title: "Mental Health Support", desc: "Free community guidance and signposting to NHS and local mental health resources.", bullets: ["Confidential listening", "Peer & support groups", "How to access NHS services"], fee: "Free Service", path: "/services/mental-health", turnaround: "Varies" },
  { id: "community", icon: "🌍", title: "Community Integration & Events", desc: "Cultural workshops, language meetups and volunteer opportunities to build local networks.", bullets: ["Workshops & meetups", "Volunteer programmes", "Practical integration support"], fee: "Free Service", path: "/services/community", turnaround: "Ongoing" },
];

export default function ServicesPage() {
  // JSON-LD for basic service listing (improves discoverability)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Resinaro Services",
    "provider": {
      "@type": "Organization",
      "name": "Resinaro",
      "email": "help@resinaro.com",
      "url": "https://www.resinaro.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Resinaro Service Catalog",
      "itemListElement": services.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": typeof s.fee === "string" ? s.fee : s.fee,
        },
        "url": `https://www.resinaro.com${s.path}`
      })),
    },
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen">
      <header className="py-16">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">Professional support for life in the UK</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Resinaro offers expert, transparent and community-driven services — clearly priced and delivered with care.
            Choose a service below to see details, what’s included and how we help.
          </p>
          <div className="mt-6 text-sm text-gray-600">
            Typical response within <strong>48 hours</strong> · GDPR-aligned · Trusted partners
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 max-w-7xl pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-green-900">All services</h2>
          <div className="text-sm text-gray-600">Select a card to view the full service page and book.</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-900">{s.title}</h3>
                  <p className="text-gray-700 mt-1 text-sm">{s.desc}</p>
                </div>
                <div className="text-right ml-4">
                  {s.badge && <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">{s.badge}</span>}
                  <div className={`mt-2 text-sm font-semibold ${s.fee.startsWith("Free") ? "text-green-700" : "text-gray-700"}`}>{s.fee}</div>
                </div>
              </div>

              {s.bullets && (
                <ul className="mt-4 list-disc list-inside text-gray-700 text-sm space-y-1">
                  {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}

              <div className="mt-6 flex items-center gap-3">
                <Link href={s.path} className="inline-block bg-green-900 text-white px-4 py-2 rounded text-sm hover:bg-green-800">
                  Book / Learn more
                </Link>
                <Link href="/contact" className="inline-block text-sm underline text-gray-700">Ask a question</Link>
              </div>

              <div className="mt-4 text-xs text-gray-400">Typical turnaround: {s.turnaround ?? "Service dependent"}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-t py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-green-900 mb-4">How Resinaro is different</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded border">
              <h3 className="font-semibold">Transparent pricing</h3>
              <p className="text-sm text-gray-700 mt-1">You see fees and inclusions before you book. No hidden charges.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded border">
              <h3 className="font-semibold">Community-first</h3>
              <p className="text-sm text-gray-700 mt-1">Volunteer-led support plus vetted professional partners when required.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded border">
              <h3 className="font-semibold">Clear timelines</h3>
              <p className="text-sm text-gray-700 mt-1">We set realistic expectations and keep you updated at every step.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow">
              Contact us — we&apos;ll guide you
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
