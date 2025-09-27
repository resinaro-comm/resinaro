"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import Typewriter from "../components/Typewriter";

const reviews = [
  {
    text: "Resinaro helped me book my passport when I was lost. Fast, kind, and supportive.",
    author: "Maria R.",
  },
  {
    text: "Unlike other services, Resinaro felt like a real community, not just a business.",
    author: "Ahmed K.",
  },
  {
    text: "They even connected me to mental health resources. Truly inclusive.",
    author: "Sofia L.",
  },
  {
    text: "The pricing model makes it feel fair. I paid a clear fee, and they still helped me.",
    author: "Luca D.",
  },
  {
    text: "Very professional and transparent — I trust them completely.",
    author: "Chiara B.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-r from-green-900 via-white to-red-700 text-white relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Italian roots, inclusive support for all people in the UK
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Help with documents, mental health, and integration — powered by community and fair service fees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <Typewriter
              texts={[
                "Passport appointments & consular support",
                "AIRE registration & SPID guidance",
                "Help finding local NHS and mental health resources",
                "Practical, fair services for Italians and migrants",
              ]}
              typingSpeed={36}
              deletingSpeed={22}
              pause={1500}
              loop
              className="text-2xl md:text-3xl font-semibold text-white"
              cursorClassName="ml-2"
              ariaLive="polite"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold text-green-900 mb-2">Bureaucracy Help</h3>
          <p>Passports, ID cards, NIN, SPID, AIRE, benefits — support with transparency and care.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold text-green-900 mb-2">Mental Health</h3>
          <p>Resources, guidance, and signposting to NHS & community support for your wellbeing.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold text-green-900 mb-2">Inclusive Community</h3>
          <p>Open to all races and ethnicities — Resinaro is here for every person in the UK.</p>
        </div>
      </section>

      {/* Services Preview (updated heading + cards) */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Most Popular Services
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transparent, community-driven, and fairly priced. No hidden fees — just clear, affordable service costs.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <ServiceCard
              title="Passport Assistance / Appointments"
              price="£35"
              href="/services?service=passport"
              turnaround="1–3 weeks"
            />

            <ServiceCard
              title="ID Card (CIE)"
              price="£35"
              href="/services?service=idcard"
              turnaround="1–3 weeks"
            />

            <ServiceCard
              title="Italian Citizenship Application"
              price="£35"
              href="/services?service=citizenship"
              turnaround="1–3 weeks"
            />

            <ServiceCard
              title="AIRE Registration"
              price="£35"
              href="/services?service=aire"
              turnaround="1–3 weeks"
            />
          </motion.div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-block mt-4 bg-transparent border border-green-900 text-green-900 px-5 py-2 rounded hover:bg-green-900 hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* rest of page unchanged... (reviews, blog, trust badges, privacy) */}
      {/* Community Image + Reviews Carousel */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto mb-6 px-4">
          <div className="w-full overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/images/about/community-image.png"
              alt="Resinaro community: Italians and migrants in the UK supporting each other at an event."
              width={1200}
              height={640}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 85vw, 1200px"
              className="w-full max-w-full h-auto object-cover block"
              priority={false}
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-green-900 mb-8">What Our Community Says</h2>

        <div className="bg-white p-8 rounded shadow max-w-2xl mx-auto relative">
          <p className="italic text-lg">“{reviews[current].text}”</p>
          <p className="mt-4 font-bold">— {reviews[current].author}</p>

          <div className="flex justify-between mt-6">
            <button
              onClick={prevReview}
              className="px-4 py-2 bg-green-900 text-white rounded hover:bg-red-700"
            >
              ← Prev
            </button>
            <button
              onClick={nextReview}
              className="px-4 py-2 bg-green-900 text-white rounded hover:bg-red-700"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            From the Blog
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "How to apply for your Italian Passport",
                desc: "Step by step guide for 2025...",
                link: "/community",
                delay: 0.1,
              },
              {
                title: "Mental Health Resources for People",
                desc: "Where to find support in the UK...",
                link: "/community",
                delay: 0.2,
              },
              {
                title: "What is AIRE and how to register",
                desc: "Everything you need to know...",
                link: "/community",
                delay: 0.3,
              },
            ].map((blog) => (
              <motion.div
                key={blog.title}
                className="border rounded p-6 shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blog.delay }}
              >
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.desc}</p>
                <Link href={blog.link} className="text-green-900 underline mt-2 inline-block transition-all duration-300 hover:underline hover:decoration-4 hover:decoration-green-900">Read more</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Badges Section */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Trusted By</h2>
          <p className="mb-8 text-gray-700">
            Resinaro works alongside community groups and institutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
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

            <a
              href="https://www.nhs.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
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

            <a
              href="https://www.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
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

    {/* Privacy & Safety — emoji icons kept, short summary removed, four feature cards inside */ }
<section className="py-12 bg-[#F9F6F1]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-green-900">Your privacy & safety</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        We treat your documents seriously — clear processes, limited access, and straightforward rights for you.
      </p>
    </div>

    <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white px-8 py-5">
        <div className="max-w-6xl mx-auto text-sm md:text-base">
          <span className="opacity-95">Clear processes · Minimal access · Simple rights</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Four feature "cards" inside the big card.
            To add more later: update the `features` array below and adjust the grid classes (e.g. lg:grid-cols-4). */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              emoji: "🔒",
              title: "GDPR compliant",
              text: "We comply with UK & EU data protection rules. Documents are used only for the service you requested.",
            },
            {
              emoji: "📂",
              title: "Secure storage",
              text: "Files are stored securely with strict access controls. We do not share documents externally without your consent.",
            },
            {
              emoji: "👩‍💼",
              title: "Controlled access",
              text: "Only verified Resinaro staff who need to process your case can view your files.",
            },
            {
              emoji: "🗑️",
              title: "Right to deletion",
              text: "Request permanent deletion at any time — email help@resinaro.com.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 items-start bg-white rounded-md p-4 border border-gray-50">
              <div className="flex-shrink-0 h-12 w-12 rounded-md bg-green-50 text-green-900 flex items-center justify-center text-xl">
                <span aria-hidden>{f.emoji}</span>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>




</main>
  ); // <-- close the JSX returned by your component
} // <-- close export default function Home()


