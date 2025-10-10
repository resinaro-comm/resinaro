// src/app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Resinaro | Practical support for migrants in the UK",
  description:
    "Full list of Resinaro services: passports, NIN, AIRE, housing, translations, benefits support, mental health and community integration. Transparent fees and clear timelines.",
  alternates: { canonical: "/services" },
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
  // optional hero override for the card image (falls back to resinaro-general.png)
  image?: string;
};

const services: Service[] = [
  { id: "passport", icon: "🛂", title: "Passport & Consular Services", desc: "Booking, paperwork review and urgent consular support for Italian passports from the UK.", bullets: ["Consulate bookings (London/Manchester)", "Document pack checks", "Urgent support"], fee: "£35", path: "/services/passport", turnaround: "1–3 weeks", badge: "Popular", image: "/images/passportreg.png" },
  { id: "visa", icon: "🛃", title: "Visa Appointment Support", desc: "Booking and document prep help for visa/biometrics appointments in the UK and Schengen (where eligible).", bullets: ["Portal setup (UKVI/TLS/VFS)", "Tailored checklist", "Appointment search & booking"], fee: "£35", path: "/services/visa", turnaround: "1–3 weeks", badge: "New", image: "/images/service-visa.png" },
  { id: "nin", icon: "💼", title: "National Insurance (NIN) Support", desc: "Apply for a new NIN or replace a lost one with a step-by-step guide and HMRC contact support.", bullets: ["Prepare documents", "Contact HMRC where needed", "Explain timelines"], fee: "£35", path: "/services/nin-support", turnaround: "1–3 weeks", badge: "Fast", image: "/images/nationalinsurance.png" },
  { id: "bureaucracy", icon: "📄", title: "Bureaucracy Help (AIRE / Benefits)", desc: "AIRE registration and benefit application help — cut through red tape.", bullets: ["AIRE registration & updates", "Benefits paperwork signposting"], fee: "£35", path: "/services/bureaucracy", turnaround: "1–3 weeks", image: "/images/aire-registration.png" },
  { id: "aire", icon: "🗂️", title: "AIRE Registration & Updates", desc: "Register or update your AIRE record to keep consular services and rights in order.", bullets: ["Full AIRE registration", "Address/name updates", "Document checklist & submission"], fee: "£35", path: "/services/aire", turnaround: "1–3 weeks", image: "/images/aire-registration-hero-3840x1280.png" },
  { id: "idcard", icon: "🆔", title: "Italian ID Card Assistance (CIE)", desc: "Help obtaining or renewing the Carta d’Identità Elettronica from the UK consulate.", bullets: ["Consular booking guidance", "Biometric & photo requirements", "Minor/consent guidance"], fee: "£35", path: "/services/id-card", turnaround: "1–3 weeks", image: "/images/cie-hero-3840x1280.png" },
  { id: "translations", icon: "📝", title: "Certified Translations", desc: "Professional, certified translations (Italian ↔ English) for legal and official documents.", bullets: ["Certified translator partners", "Fast turnaround options", "Formatting for official use"], fee: "£35", path: "/services/translation", turnaround: "1–3 weeks", image: "/images/service-passport.png" },
  { id: "housing", icon: "🏠", title: "Housing Guidance", desc: "Find housing safely, avoid scams, and understand tenant rights across the UK.", bullets: ["Search checklist & vetted partners", "Deposit protection guidance", "Council housing advice"], fee: "£35", path: "/services/housing", turnaround: "1–3 weeks", image: "/images/housing-london-hero-3840x1280.png" },
  { id: "benefits", icon: "💷", title: "Benefits Guidance", desc: "Clear advice on eligibility and applications for UK benefits and entitlements.", bullets: ["Eligibility checks", "Application support", "Appeals signposting"], fee: "£35", path: "/services/benefits", turnaround: "1–3 weeks", image: "/images/nhs-mental-health-access-hero-3840x1280.png" },
  { id: "settled", icon: "🔒", title: "Settled Status Support", desc: "Guidance for EU Settlement Scheme applications, status checks and appeals.", bullets: ["Application review", "Appeals and evidence help", "Rights explained"], fee: "£35", path: "/services/settled-status", turnaround: "1–3 weeks", image: "/images/italian-essentials.png" },
  
  
];

export default async function ServicesPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; sort?: string }>;
}) {
  const params = await Promise.resolve(searchParams);
  const q = params?.q?.toLowerCase() ?? "";
  const sort = params?.sort;

  let filtered = services.filter(
    (s) => !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
  );

  if (sort === "title") filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "fee") {
    filtered = [...filtered].sort((a, b) => {
      const av = parseFloat(a.fee.replace(/[^\d.]/g, "")) || 0;
      const bv = parseFloat(b.fee.replace(/[^\d.]/g, "")) || 0;
      return av - bv;
    });
  }

  // JSON-LD for basic service listing (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Resinaro Services",
    provider: {
      "@type": "Organization",
      name: "Resinaro",
  email: "resinaro@proton.me",
      url: "https://www.resinaro.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Resinaro Service Catalog",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        priceSpecification: { "@type": "PriceSpecification", price: s.fee },
        url: `https://www.resinaro.com${s.path}`,
      })),
    },
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen">
      {/* HERO */}
      <section className="relative">
  <div className="relative h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/resinaro-general.png"
            alt="Resinaro — practical support for migrants in the UK"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-white">
                <p className="inline-block text-xs tracking-widest uppercase bg-white/10 rounded-full px-3 py-1 mb-3">
                  Services
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Professional support for life in the UK
                </h1>
                <p className="mt-3 md:mt-4 text-white/90">
                  Transparent pricing. Clear timelines. Community-first delivery.
                </p>
                <div className="mt-4 text-sm text-white/80">
                  Typical response within <strong>48 hours</strong> · GDPR-aligned · Trusted partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <form className="container mx-auto px-6 max-w-7xl -mt-10 relative z-10">
        <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-2xl p-4 md:p-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search services (e.g. passport, AIRE, housing)…"
            className="border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-700/30"
            aria-label="Search services"
          />
          <select
            name="sort"
            defaultValue={sort || ""}
            className="border border-gray-300 rounded-xl px-4 py-2.5 bg-white"
            aria-label="Sort services"
          >
            <option value="">Sort</option>
            <option value="title">Title (A–Z)</option>
            <option value="fee">Fee (low → high)</option>
          </select>
          <button
            type="submit"
            className="rounded-xl bg-green-900 text-white px-6 py-2.5 font-medium hover:bg-green-800 transition"
          >
            Apply
          </button>
        </div>
      </form>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 max-w-7xl pb-16 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-900">
            {filtered.length} {filtered.length === 1 ? "service" : "services"}
            {q ? ` found for “${params?.q}”` : ""}
          </h2>
          <div className="text-sm text-gray-600">
            Select a card to view the full details and book.
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, idx) => (
            <article
              key={s.id}
              className="group overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              {/* Card image header with fee ribbon */}
              <div className="relative h-44">
                <Image
                  src={s.image || "/images/resinaro-general.png"}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                {s.badge && (
                  <span className="absolute top-3 left-3 bg-amber-100 text-amber-900 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {s.badge}
                  </span>
                )}
                <span
                  className={`absolute top-3 right-3 text-[12px] font-semibold px-2.5 py-1 rounded-full shadow-sm ${
                    s.fee.startsWith("Free")
                      ? "bg-green-100 text-green-800"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {s.fee}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none" aria-hidden>
                    {s.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">{s.desc}</p>
                  </div>
                </div>

                {s.bullets && (
                  <ul className="mt-4 text-sm text-gray-700 space-y-1">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-800 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Typical turnaround: {s.turnaround ?? "Service dependent"}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={s.path}
                      className="inline-flex items-center rounded-lg bg-green-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-green-800 transition"
                      aria-label={`Book ${s.title}`}
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-6 max-w-7xl py-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            How Resinaro is different
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">Transparent pricing</h3>
              <p className="text-sm text-gray-700 mt-1">
                You see fees and inclusions before you book. No hidden charges.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">Community-first</h3>
              <p className="text-sm text-gray-700 mt-1">
                Volunteer-led support, with vetted professional partners when required.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-xl border">
              <h3 className="font-semibold">Clear timelines</h3>
              <p className="text-sm text-gray-700 mt-1">
                Realistic expectations and updates at every step.
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border p-6 bg-green-50">
              <h3 className="font-semibold text-green-900">
                Need help choosing a service?
              </h3>
              <p className="text-sm text-green-900/90 mt-1">
                Tell us your situation and we’ll point you to the right option—
                from AIRE to NIN, consular bookings to translations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center mt-3 rounded-lg bg-green-900 text-white px-4 py-2 text-sm font-medium hover:bg-green-800"
              >
                Contact us — we&apos;ll guide you
              </Link>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Pro-tip</h3>
              <p className="text-sm text-gray-700 mt-1">
                For consular services (Passport, CIE, AIRE), prepare scans of your
                documents in advance. It speeds up our review and your booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
