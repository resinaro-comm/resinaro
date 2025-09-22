import Link from "next/link";
import { Metadata } from "next";
import ServicesTrust from "@/components/ServicesTrust";
import ServicesFAQ from "@/components/ServicesFAQ";

export const metadata: Metadata = {
  title: "Services to Support People in the UK | Resinaro",
  description:
    "Transparent, community-driven support for people in the UK: passports, NIN, bureaucracy, housing, mental health, and integration. Fair, clear service fees.",
};

const services = [
  {
    icon: "🛂",
    title: "Passport & Consular Services",
    desc: "Help with passports, consular registrations, and urgent appointments.",
  fee: "£40–£60",
    href: "/services/passport",
  },
  {
    icon: "💼",
    title: "National Insurance (NIN) Support",
    desc: "Guidance through applications and replacements.",
  fee: "£20",
    href: "/services/nin-support",
  },
  {
    icon: "📄",
    title: "Bureaucracy Help",
    desc: "SPID, AIRE, benefits, and UK documentation made simpler.",
  fee: "£30",
    href: "/services/bureaucracy",
  },
  {
    icon: "🏠",
    title: "Housing Guidance",
    desc: "Advice on renting, avoiding scams, and understanding tenant rights.",
  fee: "£25",
    href: "/services/housing",
  },
  {
    icon: "❤️",
    title: "Mental Health Support",
    desc: "Free community-driven guidance and signposting to NHS support.",
  fee: "Free Service",
    href: "/services/mental-health",
  },
  {
    icon: "🌍",
    title: "Community Integration",
    desc: "Events, cultural workshops, and peer support groups.",
  fee: "Free Service",
    href: "/services/community",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <header className="w-full bg-emerald-50 md:bg-neutral-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Services to Support People in the UK</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            At Resinaro, we provide transparent, community-driven services to help you with documents, integration, and wellbeing. All support is provided at clear, fair service fees — no hidden costs.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section aria-label="Resinaro Services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group outline-none focus:ring-2 focus:ring-green-700 rounded-xl"
                aria-labelledby={`service-title-${i}`}
              >
                <article
                  className="rounded-xl border bg-white shadow-sm group-hover:shadow-lg group-hover:border-green-700 transition-shadow duration-200 p-6 flex flex-col h-full cursor-pointer focus:outline-none"
                  tabIndex={-1}
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                  <h3 id={`service-title-${i}`} className="text-xl font-bold text-green-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <div className="mt-auto text-gray-500 italic">{service.fee.startsWith('Free') ? service.fee : `Service Fee: ${service.fee}`}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesTrust />

      <ServicesFAQ />

    </main>
  );
}
