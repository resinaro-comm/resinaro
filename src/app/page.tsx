"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Local components you already have
import ServiceCard from "../components/ServiceCard";
import Typewriter from "../components/Typewriter";


/**
 * Premium homepage for Resinaro
 * - Brand-consistent hero with composite background + soft gradient veil
 * - Services preview with tasteful motion and clear CTAs
 * - “How we help” steps for credibility and clarity
 * - Outcomes section (what people actually get)
 * - Testimonials carousel (lightweight, keyboard accessible)
 * - Blog row (3 posts)
 * - Trust band with Italy↔UK image + tricolore overlay
 * - FAQ + micro newsletter + strong closing CTA
 * - Motion-safe, WCAG-friendly, semantic HTML
 */

// ---------- Variants & helpers ----------

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const blurIn = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(6px)", y: 12 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.55, delay } },
});

type Testimonial = { name: string; quote: string; meta?: string; avatar?: string };
type Feature = { title: string; desc: string; icon: string };
type Step = { title: string; desc: string; meta?: string };
type Faq = { q: string; a: React.ReactNode };

// ---------- Page ----------

export default function Home() {
  // ------- Content (could be moved to CMS later) -------

  const features: Feature[] = [
    {
      title: "Clear pricing first",
      desc: "No upsells or surprise fees. You see the scope and cost before you book.",
      icon: "💬",
    },
    {
      title: "Community-first",
      desc: "Empathy + professional execution.",
      icon: "🤝",
    },
    {
      title: "Fast, practical outcomes",
      desc: "We focus on the next concrete step—documents, booking, confirmation.",
      icon: "🚀",
    },  
  ];

  const steps: Step[] = [
    {
      title: "Describe your case",
      desc: "Share your situation (passport/CIE/AIRE, timelines, location). Attach what you already have.",
      meta: "5–10 minutes",
    },
    {
      title: "We check and plan",
      desc: "We review documents, confirm your consulate and send a short plan with a fee and ETA.",
      meta: "1–2 business days",
    },
    {
      title: "We execute",
      desc: "We book or prepare the application pack, and keep you updated with any consulate requests.",
      meta: "Varies by service",
    },
    {
      title: "Follow-up & handover",
      desc: "You get a simple summary: what to bring, what to expect, and who to contact if needed.",
      meta: "Included",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Giulia R.",
      quote:
        "I was anxious about my passport renewal. They checked my documents, found a slot and sent me a clear step-by-step. Easy.",
      meta: "Passport renewal, London",
      avatar: "/images/avatars/giulia.png",
    },
    {
      name: "Marco B.",
      quote:
        "For my CIE they explained AIRE issues and photo specs, then helped with the booking. Felt like a friend who knows the system.",
      meta: "CIE, Manchester",
      avatar: "/images/avatars/marco.png",
    },
    {
      name: "Elena S.",
      quote:
        "Great value. No fluff—just documents, appointments and follow-up. I’d happily pay more for this clarity.",
      meta: "AIRE update & SPID",
      avatar: "/images/avatars/elena.png",
    },
  ];

  const blog = [
    {
      title: "How to apply for your Italian Passport",
      desc: "Up-to-date documents, minor applications, fees and booking tips.",
      link: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
      img: "/images/italian-passport-uk-hero-3840x1280.png",
      alt: "Italian passport and documents on a desk",
      delay: 0.1,
    },
    {
      title: "NHS Resources for People Online",
      desc: "Register with a GP, interpreters, urgent care, prescriptions and GHIC.",
      link: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025",
      img: "/images/nhs-healthcare-italians-uk-hero-3840x1280.png",
      alt: "NHS healthcare hero",
      delay: 0.2,
    },
    {
      title: "What is AIRE and how to register",
      desc: "FAST IT, proofs, common errors, timelines and local tips.",
      link: "/community/bureaucracy-guides/aire-registration-uk",
      img: "/images/aire-registration.png",
      alt: "AIRE registration documents",
      delay: 0.3,
    },
  ];

  const faqs: Faq[] = [
    {
      q: "Is Resinaro only for Italians?",
      a: (
        <>
          No. We support Italians and <em>all migrants</em> living in the UK. Many of our guides are bilingual (EN/IT)
          and we can usually adapt documentation checks to your country’s requirements.
        </>
      ),
    },
    {
      q: "How fast do you reply?",
      a: <>Initial review is typically 24–48h on business days. Urgent cases: mention that in your first message.</>,
    },
    {
      q: "What if I’m missing a document?",
      a: (
        <>
          Tell us what you’re missing—proof of address, AIRE status, birth certificate—and we’ll propose acceptable
          alternatives or the fastest way to obtain them.
        </>
      ),
    },
    {
      q: "Refunds and fairness?",
      a: (
        <>
          If we fail to deliver what we agreed due to our error, we’ll refund or credit you. Clear scope, clear outcomes.
        </>
      ),
    },
  ];

  // ------- Testimonial carousel -------

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // ------- JSON-LD for SEO (Organization + WebSite + Breadcrumb + Product/Service summary) -------

  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Resinaro",
        url: "https://www.resinaro.com",
        logo: "https://www.resinaro.com/icon.svg",
        areaServed: "GB",
        sameAs: [
          "https://www.youtube.com/@resinaroUK",
          "https://www.instagram.com/resinaro",
          "https://x.com/resinaro",
          "https://facebook.com/resinaro",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "resinaro@proton.me",
          contactType: "customer support",
          availableLanguage: ["it", "en"],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.resinaro.com",
        name: "Resinaro",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.resinaro.com/community?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.resinaro.com" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "Service",
            name: "Passport Assistance",
            description: "Consulate booking, document pack checks, urgent support.",
          },
          {
            "@type": "Service",
            name: "CIE (Italian ID Card)",
            description: "Biometric guidance, minors/consent help, booking support.",
          },
          {
            "@type": "Service",
            name: "AIRE Registration & Updates",
            description: "Full AIRE registration, address/name updates, FAST IT guidance.",
          },
        ],
      },
    ],
    []
  );

  // ---------- Page ----------

  return (
    <main className="bg-[#F9F6F1] text-gray-800 [--brand:#0B5D3B] [--italy:#0B5D3B] [--uk:#B22222]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -------------------- HERO -------------------- */}
      <motion.section
        aria-label="Welcome"
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
      >
        {/* Background composite image (Amalfi ↔ London) */}
  <div className="relative h-[70vh] md:h-[72vh] lg:h-[78vh] w-full">
          <Image
            src="/images/landscape-image.png"
            alt="Italy and UK combined skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Soft gradient veil for readability */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(0,0,0,0.45),rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.0))]" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative max-w-4xl text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              {...fadeUp(0.05)}
            >
              Inclusive support for all people in the UK
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl/relaxed max-w-3xl mx-auto"
              {...fadeUp(0.2)}
            >
              Help with documents and integration — powered by community and fair service fees.
            </motion.p>

            <motion.div className="mt-6" {...fadeUp(0.35)}>
              <Typewriter
                texts={[
                  "Passport appointments & consular support",
                  "AIRE registration & consular guidance",
                  "NHS & housing guidance, clearly explained",
                  "No hidden fees — outcomes you can use",
                ]}
                typingSpeed={34}
                deletingSpeed={20}
                pause={1400}
                loop
                className="text-2xl md:text-3xl font-semibold text-white"
                cursorClassName="ml-2"
                ariaLive="polite"
              />
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" {...fadeUp(0.45)}>
              <Link
                href="/services"
                className="inline-flex whitespace-nowrap text-center rounded-lg bg-white/90 text-green-900 font-semibold px-5 py-3 hover:bg-white transition shadow"
              >
                See services
              </Link>
              <Link
                href="/contact"
                className="inline-flex whitespace-nowrap text-center rounded-lg bg-emerald-600 text-white font-semibold px-5 py-3 hover:bg-emerald-700 transition shadow"
              >
                Get help now
              </Link>
              <Link
                href="/community"
                className="inline-flex whitespace-nowrap text-center rounded-lg bg-white/10 text-white backdrop-blur px-5 py-3 hover:bg-white/20 transition"
              >
                Read guides
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* -------------------- FEATURE PILLARS -------------------- */}
      <section className="relative">
        <div className="container mx-auto px-6 -mt-8 md:-mt-10">
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-xl bg-white/90 backdrop-blur border border-gray-200 shadow-sm p-5"
                {...blurIn(0.05 * i)}
              >
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-2 font-semibold text-green-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -------------------- SERVICES PREVIEW -------------------- */}
      <section className="py-16 mt-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-extrabold text-green-900" {...fadeUp(0)}>
            Our Most Popular Services
          </motion.h2>
          <motion.p className="mt-2 text-gray-700" {...fadeUp(0.15)}>
            Transparent, community-driven and fairly priced. No hidden fees — just clear, affordable service costs.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto"
            variants={staggerChildren}
          >
            <motion.div {...blurIn(0.05)}>
              <ServiceCard
                title="Passport Assistance / Appointments"
                price="£35"
                href="/services/passport"
                turnaround="1–3 weeks"
              />
            </motion.div>
            <motion.div {...blurIn(0.12)}>
              <ServiceCard title="ID Card (CIE)" price="£35" href="/services/id-card" turnaround="1–3 weeks" />
            </motion.div>
            <motion.div {...blurIn(0.2)}>
              <ServiceCard title="AIRE Registration" price="£35" href="/services/aire" turnaround="1–3 weeks" />
            </motion.div>
            <motion.div {...blurIn(0.27)}>
              <ServiceCard title="Visa Appointment Support" price="£35" href="/services/visa" turnaround="1–3 weeks" />
            </motion.div>
          </motion.div>

          <motion.div className="mt-8" {...fadeUp(0.25)}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-green-900 text-green-900 px-5 py-2 hover:bg-green-900 hover:text-white transition"
            >
              View all services
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* -------------------- HOW WE HELP (STEPS) -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-extrabold text-green-900 text-center" {...fadeUp(0)}>
            How we help (simple and fast)
          </motion.h2>
          <motion.p className="mt-2 text-gray-700 text-center max-w-2xl mx-auto" {...fadeUp(0.15)}>
            We don’t waste time. We get the right documents in the right order and keep you moving.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 relative"
                {...blurIn(0.05 * i)}
              >
                <div className="absolute -top-3 left-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold shadow">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold text-green-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
                {s.meta && <div className="mt-3 text-xs text-gray-500">{s.meta}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- OUTCOMES -------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/70 to-transparent" />
        <div className="container mx-auto px-6 py-16">
          <motion.h2 className="text-3xl font-extrabold text-green-900 text-center" {...fadeUp(0)}>
            What you walk away with
          </motion.h2>
          <motion.p className="mt-2 text-gray-700 text-center max-w-3xl mx-auto" {...fadeUp(0.15)}>
            We translate bureaucracy into plain steps. You get a practical pack, not a lecture.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div className="rounded-xl bg-white border p-6 shadow-sm" {...blurIn(0.05)}>
              <h3 className="font-semibold text-green-900">Prepared application pack</h3>
              <p className="mt-2 text-sm text-gray-700">
                Documents checked, named correctly, arranged for the consulate. You’ll know exactly what to bring.
              </p>
            </motion.div>

            <motion.div className="rounded-xl bg-white border p-6 shadow-sm" {...blurIn(0.12)}>
              <h3 className="font-semibold text-green-900">Booking & timeline advice</h3>
              <p className="mt-2 text-sm text-gray-700">
                We guide you on official booking platforms (Prenot@Mi/consulate portals) and share realistic timelines.
              </p>
            </motion.div>

            <motion.div className="rounded-xl bg-white border p-6 shadow-sm" {...blurIn(0.2)}>
              <h3 className="font-semibold text-green-900">Clear follow-up</h3>
              <p className="mt-2 text-sm text-gray-700">
                A short written summary: next steps, who to contact, and what to expect at appointments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- TESTIMONIALS (CAROUSEL) -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-extrabold text-green-900 text-center" {...fadeUp(0)}>
            What people say
          </motion.h2>
          <motion.p className="mt-2 text-gray-700 text-center max-w-2xl mx-auto" {...fadeUp(0.15)}>
            Real feedback from people we’ve helped. Short, honest and to the point.
          </motion.p>

          <div className="mt-8 relative max-w-3xl mx-auto">
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-lg text-gray-800">&ldquo;{testimonials[index].quote}&rdquo;</p>
                  <footer className="mt-4 flex items-center gap-3 text-sm text-gray-600">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-emerald-100">
                      <Image
                        src={testimonials[index].avatar || "/images/resinaro-general.png"}
                        alt={testimonials[index].name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{testimonials[index].name}</div>
                      {testimonials[index].meta && <div className="text-xs">{testimonials[index].meta}</div>}
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Controls (keyboard accessible) */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="rounded-full border bg-white px-3 py-2 text-sm hover:bg-gray-50"
              >
                ←
              </button>
              <div className="text-xs text-gray-600">
                {index + 1} / {testimonials.length}
              </div>
              <button
                aria-label="Next testimonial"
                onClick={next}
                className="rounded-full border bg-white px-3 py-2 text-sm hover:bg-gray-50"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- BLOG PREVIEW -------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/70 pointer-events-none -z-10" aria-hidden="true" />
        <motion.div className="py-16" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container mx-auto px-6 text-center">
            <motion.h2 className="text-3xl font-extrabold text-green-900" {...fadeUp(0)}>
              From the Blog
            </motion.h2>
            <motion.p className="mt-2 text-gray-700" {...fadeUp(0.15)}>
              Fresh, practical and free. No fluff—just what you need to move forward.
            </motion.p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {blog.map((b) => (
                <motion.article
                  key={b.title}
                  className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white text-left"
                  {...blurIn(b.delay)}
                >
                  <div className="w-full aspect-[3/1] mb-4 rounded overflow-hidden bg-gray-200 relative">
                    <Image
                      src={b.img}
                      alt={b.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-green-900">{b.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                  <Link
                    href={b.link}
                    className="inline-flex items-center gap-1 text-green-900 underline mt-2 hover:decoration-4"
                  >
                    Read more <span aria-hidden>→</span>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div className="mt-8" {...fadeUp(0.25)}>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-lg border border-green-900 text-green-900 px-5 py-2 hover:bg-green-900 hover:text-white transition"
              >
                Browse all guides <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* -------------------- TRUST BAND with composite background -------------------- */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/uk-italy-composite.png"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            aria-hidden
          />
          {/* Even tricolore overlay thirds */}
          <div className="absolute inset-0 mix-blend-multiply pointer-events-none" aria-hidden>
            <div className="absolute inset-0 grid grid-cols-3">
              <div className="bg-[#0B5D3B]/15" />
              <div className="bg-white/15" />
              <div className="bg-[#B22222]/15" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-green-900">Trusted By</h2>
          <p className="text-gray-700 mt-2">
            Resinaro works alongside community groups and institutions.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            <a
              href="https://amblondra.esteri.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Image
                src="/Emblem_of_Italy.svg.png"
                alt="Italian Embassy - Emblem of Italy"
                width={80}
                height={80}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </a>

            <a href="https://www.nhs.uk/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image
                src="/nhs-logo.svg"
                alt="NHS logo"
                width={80}
                height={80}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </a>

            <a href="/community" className="flex flex-col items-center">
              <Image
                src="/handshake-solid-full.svg"
                alt="Community organisation"
                width={80}
                height={80}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </a>

            <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image
                src="/trust/govuk.png"
                alt="GOV.UK logo"
                width={140}
                height={50}
                className="w-auto h-12 object-contain grayscale hover:grayscale-0 transition"
              />
              <span className="mt-2 text-sm font-semibold text-gray-800">GOV.UK</span>
            </a>
          </div>
        </div>
      </section>

      {/* -------------------- FAQ -------------------- */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-green-900 text-center">Questions, answered</h2>
          <p className="mt-2 text-gray-700 text-center max-w-3xl mx-auto">
            Short answers to the most common questions. For anything else,{" "}
            <Link href="/contact" className="underline text-green-900">
              contact us
            </Link>
            .
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {faqs.map((f) => (
                <li key={f.q} className="rounded-xl bg-white border p-5 shadow-sm">
                  <details className="group">
                    <summary className="marker-none list-none cursor-pointer font-semibold text-green-900 flex items-center justify-between">
                      <span>{f.q}</span>
                      <span
                        className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm group-open:rotate-45 transition"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-2 text-sm text-gray-700">{f.a}</div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
</main>
  );
}
