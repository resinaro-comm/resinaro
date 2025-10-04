// src/components/ServiceCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  price?: string;
  href?: string;
  turnaround?: string;
};

export default function ServiceCard({
  title,
  price = "£35",
  href = "/services",
  turnaround = "1–3 weeks",
}: Props) {
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36 } },
  };

  // visual-only "button" (non-interactive) inside the anchor; whole card is clickable
  return (
    <Link href={href} className="block" aria-label={`Open ${title}`}>
      <motion.article
        initial={shouldReduce ? undefined : "hidden"}
        whileInView={shouldReduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        variants={variants}
        className="h-full flex flex-col justify-between rounded-xl border border-gray-200 bg-neutral-100 overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-200 transform-gpu hover:-translate-y-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-100"
        role="link"
        aria-roledescription="clickable card"
        tabIndex={0}
      >
        {/* Image area - conditionally shown for services with images */}
        {title.toLowerCase().includes('passport') && (
          <div className="w-full">
            <img
              src="/images/service-passport.png"
              alt="Italian passport service"
              className="w-full h-auto block"
            />
          </div>
        )}
        {(title.toLowerCase().includes('id card') || title.toLowerCase().includes('cie')) && (
          <div className="w-full">
            <img
              src="/images/spid-digital-id.png"
              alt="Italian electronic ID card (CIE)"
              className="w-full h-auto block"
            />
          </div>
        )}
        {(title.toLowerCase().includes('aire') || title.toLowerCase().includes('anagrafe')) && (
          <div className="w-full">
            <img
              src="/images/aire-registration.png"
              alt="AIRE registration service"
              className="w-full h-auto block"
            />
          </div>
        )}
        {/* Centered title area */}
        <div className="flex-1 flex items-center justify-center px-6 mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-green-900 text-center">
            {title}
          </h3>
        </div>

        {/* Bottom block: turnaround and button with price */}
        <div className="mt-4 mb-6 flex flex-col items-center gap-3 px-6">
          <div className="text-xs text-gray-500">Avg turnaround: {turnaround}</div>

          {/* Visual CTA with price — whole card is clickable via the Link, so this is a styled span */}
          <span
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-green-900 text-white text-sm font-medium select-none"
            aria-hidden
          >
            <span className="font-semibold">{price}</span>
            <span className="border-l border-white/30 pl-2">Click to book</span>
          </span>
        </div>

        <style jsx>{`
          article:focus {
            transform: translateY(-2px);
          }
          @media (prefers-reduced-motion: reduce) {
            article { transition: none !important; transform: none !important; }
          }
        `}</style>
      </motion.article>
    </Link>
  );
}
