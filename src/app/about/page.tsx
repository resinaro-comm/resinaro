// app/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Resinaro | Fair, transparent support for Italians & migrants in the UK",
  description:
    "Resinaro helps migrants with passports, ID cards, NIN, AIRE, housing guidance and mental health signposting — clear pricing, humane support and community-first values.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Resinaro",
    description:
      "Professional migrant support with fair pricing, transparency and real outcomes.",
    url: "/about",
    images: ["/images/about/hero-bluehour.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Resinaro",
    description:
      "Fair, transparent migrant support in the UK — passports, NIN, AIRE, housing, mental health signposting.",
    images: ["/images/about/hero-bluehour.png"],
  },
};

export default function Page() {
  // ——— Config / assets ————————————————————————————————————————————————————————
  const heroSrc = "/images/about/hero-bluehour.png"; // Replace with your final hero
  const stats = [
    { kpi: "4,000+", label: "Queries answered", hint: "Community + email since 2023" },
    { kpi: "72%", label: "Cases resolved", hint: "Within the first 14 days" },
    { kpi: "48h", label: "Typical reply", hint: "Mon–Fri, 10:00–18:00" },
    { kpi: "£0", label: "Hidden charges", hint: "Ever. We hate surprises too." },
  ];

  // ——— JSON-LD: Organization ————————————————————————————————————————————————
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Resinaro",
    "url": "https://www.resinaro.com/",
    "logo": "https://www.resinaro.com/icon.svg",
    "sameAs": [
      "https://www.youtube.com/@resinaroUK",
      "https://www.instagram.com/resinaro",
      "https://x.com/resinaro",
      "https://facebook.com/resinaro"
    ],
    "description": "Resinaro provides fair, transparent support for Italians and migrants in the UK.",
    "foundingDate": "2025-01-01",
    "areaServed": ["GB"],
  "email": "resinaro@proton.me",
    "contactPoint": [{
      "@type": "ContactPoint",
  "email": "resinaro@proton.me",
      "contactType": "customer support",
      "availableLanguage": ["it", "en"]
    }]
  };

  // ——— JSON-LD: Breadcrumbs ————————————————————————————————————————————————
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.resinaro.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.resinaro.com/about" }
    ]
  };

  // ——— JSON-LD: FAQ ————————————————————————————————————————————————————————
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Resinaro provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help with Italian passports, ID card (CIE) appointments, National Insurance numbers, AIRE registration, housing guidance, and mental health signposting."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only help Italians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We support Italians and all migrants living in the UK. Our community is inclusive and open to everyone."
        }
      },
      {
        "@type": "Question",
        "name": "Are your prices transparent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We publish clear rates with no hidden fees and explain what’s included before you commit."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a charity or a business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a social business: community values with professional delivery. Some services are free; paid services are clearly priced to keep the lights on and the help flowing."
        }
      }
    ]
  };

  // ——— JSON-LD: HowTo (How we work) ————————————————————————————————————————
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to get support from Resinaro",
    "description": "A simple three-step way to get help with consular and UK admin tasks.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Tell us the situation",
  "text": "Submit a short form or email resinaro@proton.me with your location, documents and deadlines."
      },
      {
        "@type": "HowToStep",
        "name": "We review and confirm",
        "text": "You receive a checklist, realistic timeline and a quote if the service is paid."
      },
      {
        "@type": "HowToStep",
        "name": "Delivery & follow-up",
        "text": "We help prepare the application/appointment and support for a defined follow-up period."
      }
    ]
  };

  // ——— JSON-LD: AggregateRating (testimonials summary) ————————————————
  const ratingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Resinaro",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "180"
    }
  };

  // ——— UI ————————————————————————————————————————————————————————————————
  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Structured data */}
      <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <Script id="rating-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingJsonLd) }} />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[44vh] md:h-[56vh] w-full overflow-hidden">
          <Image
            src={heroSrc}
            alt="Italy meets UK: warm community colours, modern city skyline and Italian tricolore overlay"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* soft vignette + tricolore hint for brand continuity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 pointer-events-none" />
        </div>

        <div className="relative -mt-20 md:-mt-28">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-green-900">
                    About Resinaro
                  </h1>
                  <p className="mt-3 text-gray-700 max-w-2xl">
                    Professional support with <span className="font-semibold">community values</span> — fair pricing,
                    transparency, and real outcomes. We do admin; you do life.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-medium"
                  >
                    Explore services
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-green-700 text-green-900 px-5 py-3 rounded-lg font-medium bg-white"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {stats.map((s) => (
                  <div key={s.kpi} className="rounded-xl border bg-neutral-50 p-4">
                    <div className="text-2xl md:text-3xl font-extrabold text-green-900">{s.kpi}</div>
                    <div className="text-sm font-medium text-gray-800">{s.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.hint}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">Why we exist (and why we care)</h2>
            <p className="leading-relaxed">
              Moving countries comes with a <em>bonus level</em> called “paperwork”. It’s like a side-quest that never ends:
              you just unlocked AIRE, but now the consulate wants a proof you didn’t know existed, in a format no printer accepts.
              We started Resinaro after helping friends and family and realising how many people were dealing with the same maze.
              Our promise is simple: <strong>clear steps, fair fees, human support</strong>. Also, no judgement if your scanner is just your phone camera.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>We turn confusion into checklists.</li>
              <li>We give realistic timelines (with caveats when it’s the consulate).</li>
              <li>We keep you informed so you’re never guessing “what now?”</li>
            </ul>
          </div>

          <aside className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-green-900">What “fair” means to us</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><strong>Transparent fees:</strong> you see costs upfront.</li>
              <li><strong>Honest scope:</strong> we say no when we’re not the right fit.</li>
              <li><strong>Community first:</strong> many guides are free; paid support keeps them free.</li>
            </ul>
            <div className="mt-4 text-sm text-gray-600">
              PS: We don’t do 37-page PDFs. We do tidy checklists and “here’s exactly what to click” screenshots.
            </div>
          </aside>
        </div>
      </section>

      {/* What we help with (table) */}
      <section className="container mx-auto max-w-6xl px-6 pb-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">What we help with</h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Typical Turnaround</th>
                  <th className="px-4 py-3 font-semibold">What You Get</th>
                  <th className="px-4 py-3 font-semibold">Starting Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3">Passport &amp; Consular</td>
                  <td className="px-4 py-3">1–3 weeks (slots vary)</td>
                  <td className="px-4 py-3">Booking help, document check, step-by-step prep</td>
                  <td className="px-4 py-3">From £35</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">ID Card (CIE)</td>
                  <td className="px-4 py-3">1–2 weeks</td>
                  <td className="px-4 py-3">Checklist, biometric guidance, post-visit follow-up</td>
                  <td className="px-4 py-3">From £35</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">National Insurance (NIN)</td>
                  <td className="px-4 py-3">2–4 weeks</td>
                  <td className="px-4 py-3">Application support, HMRC steps, tracking tips</td>
                  <td className="px-4 py-3">From £35</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">AIRE (register/update)</td>
                  <td className="px-4 py-3">2–6 weeks</td>
                  <td className="px-4 py-3">Jurisdiction check, docs pack, FAST-IT guidance</td>
                  <td className="px-4 py-3">From £35</td>
                </tr>
              
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            Need details? Browse the full list on{" "}
            <Link className="text-green-900 underline" href="/services">Services</Link>.
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Tell us the situation",
              text: "Share what you need and your timeline. A few photos of documents help us answer fast.",
              hint: "Email or form; both work."
            },
            {
              step: "2",
              title: "We review & confirm",
              text: "You receive a clear checklist, fair price, and realistic timings. If we’re not a fit, we’ll say so and signpost.",
              hint: "No pressure, no surprises."
            },
            {
              step: "3",
              title: "Delivery & follow-up",
              text: "We prepare and guide you through bookings or submissions, then stay available for a defined period.",
              hint: "Written summary included."
            },
          ].map((b) => (
            <div key={b.step} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="text-green-900 font-extrabold text-3xl">{b.step}</div>
              <h3 className="text-xl font-semibold mt-2">{b.title}</h3>
              <p className="mt-2 text-gray-700">{b.text}</p>
              <div className="mt-3 text-xs text-gray-500">{b.hint}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values + Inclusion */}
      <section className="bg-white border-y">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900">Our values</h2>
              <ul className="mt-4 space-y-3">
                <li><strong>Clarity:</strong> your time matters; we explain in plain language.</li>
                <li><strong>Fairness:</strong> pricing is posted and scoped. No “admin fee” ambushes.</li>
                <li><strong>Care:</strong> you’re more than a ticket number. We keep track of context.</li>
                <li><strong>Privacy:</strong> minimal data; secure storage; delete on request.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900">Inclusion (for real)</h2>
              <p className="mt-4">
                Resinaro is for anyone navigating UK life. Whether you’re Italian, half-Italian, Italian-by-love,
                or simply someone who appreciates a proper plate of pasta — you’re welcome. 
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Support for everyone (just contact us!)</li>
                <li>Guides in clear, simple English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* Glossary */}
      <section className="bg-white border-y">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">Glossary (plain English)</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-6">
            {[
              {
                term: "AIRE",
                def: "Anagrafe degli Italiani Residenti all’Estero — the registry of Italians living abroad. Keep it updated to access consular services."
              },
              {
                term: "CIE",
                def: "Carta d’Identità Elettronica — Italian electronic ID card. Often used for ID and some digital services."
              },
              {
                term: "SPID",
                def: "Digital identity login for Italian public services. Think ‘secure login’ for government portals."
              },
              {
                term: "NIN",
                def: "National Insurance Number (UK). Needed for work/taxes. It’s like a tax ID."
              },
              {
                term: "FAST-IT",
                def: "Italian consular online portal for AIRE and other services. Not fast by name only — we’ll help you through it."
              },
              {
                term: "GHIC",
                def: "UK Global Health Insurance Card for state-provided medically necessary healthcare in the EU."
              },
            ].map((g) => (
              <div key={g.term} className="rounded-2xl border border-gray-200 p-5">
                <div className="font-semibold text-green-900">{g.term}</div>
                <div className="text-gray-700 mt-1">{g.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs (visible content) */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">FAQs</h2>

        {[
          {
            q: "What services does Resinaro provide?",
            a: "We help with Italian passports, ID card (CIE) appointments, National Insurance numbers, AIRE registration, housing guidance, and mental health signposting."
          },
          {
            q: "Do you only help Italians?",
            a: "No. We support Italians and all migrants living in the UK. Our community is inclusive and open to everyone."
          },
          {
            q: "Are your prices transparent?",
            a: "Yes. We publish clear rates with no hidden fees and explain what’s included before you commit."
          },
          {
            q: "Do you replace consulates or the NHS?",
            a: "No. We help you navigate official systems, prepare documents and set expectations. Decisions and appointments are controlled by the relevant authority."
          },
          {
            q: "How fast is ‘fast’?",
            a: "We usually reply within 48 hours, and we’ll always tell you if consulate timelines are the bottleneck."
          },
        ].map((item, i) => (
          <details key={i} className="mb-3 bg-white rounded-lg border border-neutral-200 p-4">
            <summary className="font-semibold cursor-pointer">{item.q}</summary>
            <p className="mt-2 text-sm text-gray-700">{item.a}</p>
          </details>
        ))}

        <div className="mt-6 text-sm text-gray-600">
          For case-specific questions,{" "}
          <Link href="/contact" className="text-green-900 underline">contact us</Link>.
        </div>
      </section>

  

      {/* Accessibility & compliance footnote */}
      <section className="container mx-auto max-w-6xl px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-green-900">Accessibility & data protection</h3>
          <p className="mt-2 text-gray-700">
            Our site is built with semantic HTML, keyboard-navigable components and high-contrast colours.
            We store only what we must to deliver the service, and we delete data on request.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            See our{" "}
            <Link href="/privacy-policy" className="text-green-900 underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
