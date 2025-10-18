// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <main
      className="relative isolate min-h-[80vh] px-4 py-10 md:py-14"
      style={{ paddingTop: "calc(var(--ad-banner-offset, 0px) + 56px)" }}
    >
      {/* Soft background vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 50% 0%, rgba(16,185,129,0.10), rgba(255,255,255,0))",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left: copy + actions */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs text-emerald-900">
            Oops — page not found
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            Questa pagina non esiste (yet).
          </h1>
          <p className="mt-2 max-w-prose text-sm text-stone-700 sm:text-base">
            You’ve reached a broken or moved link. No stress — here are the best places to go next. 
            Our guides are hand-checked and community-guided.
          </p>

          {/* Primary CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-green-800 px-4 font-medium text-green-900 hover:bg-emerald-50"
            >
              ← Go back
            </button>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700"
            >
              Go to Home
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <NavCard href="/directory" title="Browse the Directory" desc="Find the best Italian places by city." />
            <NavCard href="/community" title="Community (blog hub)" desc="Tips, guides, and local favourites." />
            <NavCard href="/services" title="Service Hub" desc="Passports, NIN, bureaucracy & housing." />
            <NavCard href="/contact" title="Contact us" desc="Spotted a broken link? Tell us." />
          </div>

          {/* Contact line */}
          <p className="mt-5 text-xs text-stone-500">
            Prefer email?{" "}
            <a className="underline underline-offset-2 hover:text-stone-700" href="mailto:resinaro@proton.me">
              resinaro@proton.me
            </a>
          </p>
        </div>

        {/* Right: playful-but-classy illustration */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
          aria-hidden="true"
        >
          {/* Tricolour 404 */}
          <div className="relative select-none rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full">
              <div className="flex h-full">
                <div className="flex-1 bg-green-600" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-red-600" />
              </div>
            </div>

            <div className="flex items-center justify-center py-6">
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="text-[68px] font-extrabold leading-none tracking-tighter text-green-900 sm:text-[84px]"
              >
                4<span className="opacity-80">0</span>4
              </motion.div>
            </div>

            <div className="mx-auto h-40 w-40">
              {/* Simple compass/map-pin SVG with subtle motion */}
              <motion.svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                initial={{ rotate: -6 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="96" fill="url(#g)" />
                <circle cx="100" cy="100" r="72" fill="#fff" stroke="#065F46" strokeWidth="3" />
                <path d="M100 40c22 0 40 18 40 40 0 28-40 80-40 80S60 108 60 80c0-22 18-40 40-40z" fill="#10B981" opacity="0.15" />
                <circle cx="100" cy="80" r="16" fill="#10B981" stroke="#065F46" strokeWidth="3" />
                <path d="M100 30v20M170 100h-20M100 170v-20M30 100h20" stroke="#065F46" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

/* --- tiny helper --- */
function NavCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white/80 p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-medium text-green-900">{title}</div>
          <div className="mt-0.5 text-xs text-stone-600">{desc}</div>
        </div>
        <svg
          className="h-5 w-5 flex-none text-green-900/80 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
