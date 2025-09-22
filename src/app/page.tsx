
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/services" className="bg-green-900 hover:bg-red-700 text-white px-6 py-3 rounded transition-transform duration-300 hover:scale-105">
              Get Help
            </Link>
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

      {/* Services Preview */}
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
            Our Services
          </motion.h2>
          <motion.p
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transparent, community-driven, and fairly priced. No hidden fees — just clear, affordable service costs.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              { title: "Passport Appointments", fee: "£40–£60" },
              { title: "ID Card (CIE)", fee: "£40" },
              { title: "NIN Support", fee: "£20" },
              { title: "Bureaucracy Help", fee: "£30" },
              { title: "Housing Guidance", fee: "£25" },
            ].map((service) => (
              <motion.div
                key={service.title}
                className="border rounded p-6 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">Service Fee: {service.fee}</p>
              </motion.div>
            ))}
          </motion.div>
          <Link href="/services" className="inline-block mt-8 bg-green-900 text-white px-6 py-3 rounded hover:bg-red-700 transition-transform duration-300 hover:scale-105">
            View All Services
          </Link>
        </div>
      </motion.section>

      {/* Community Image + Reviews Carousel */}
      <section className="py-16 text-center">
        <img
          src="/images/about/community-image.png"
          alt="Resinaro community: Italians and migrants in the UK supporting each other at an event."
          className="rounded-3xl max-w-5xl mx-auto block shadow-md mb-6"
          style={{ width: '100%', height: 'auto' }}
        />
        <h2 className="text-3xl font-bold text-green-900 mb-8">What Our Community Says</h2>
        <div className="bg-white p-8 rounded shadow max-w-2xl mx-auto relative">
          <p className="italic text-lg">“{reviews[current].text}”</p>
          <p className="mt-4 font-bold">— {reviews[current].author}</p>

          {/* Controls */}
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Trusted By</h2>
          <p className="mb-6">Resinaro works alongside community groups and institutions.</p>
          <div className="flex justify-center space-x-10 opacity-80">
            <img src="/logos/acli.png" alt="ACLI" className="h-12" />
            <img src="/logos/embassy.png" alt="Italian Embassy" className="h-12" />
            <img src="/logos/nhs.png" alt="NHS" className="h-12" />
            <img src="/logos/community.png" alt="Community Org" className="h-12" />
          </div>
        </div>
      </section>


    </main>
  );
}
