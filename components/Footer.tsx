// src/components/Footer.tsx
import Link from "next/link";
import React from "react";

const services = [
  { title: "Passport", href: "/services/passport" },
  { title: "NIN Support", href: "/services/nin-support" },
  { title: "Bureaucracy", href: "/services/bureaucracy" },
  { title: "Housing", href: "/services/housing" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resinaro",
  url: "https://resinaro.org",
  logo: "https://resinaro.org/images/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-20-1234-5678",
      contactType: "customer service",
  email: "resinaro@proton.me",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F9F6F1] border-t border-gray-200">
      {/* tricolore hairline */}
      <div className="h-1 w-full flex" aria-hidden="true">
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-600" />
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Brand + newsletter */}
          <div>
            <h3 className="text-xl font-bold text-green-900">Resinaro</h3>
            <p className="mt-1 text-sm text-gray-700 max-w-xs">
              Practical support for people in the UK.
            </p>

            {/* Email subscription - simplified professional version */}
            <div className="mt-4">
              <label htmlFor="newsletter" className="block text-sm font-medium text-gray-900 mb-2">
                Type your email for updates
              </label>
              <form
                method="post"
                action="/api/newsletter"
                aria-label="Subscribe to updates"
              >
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Low-volume updates. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-4" aria-label="Social links">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/resinarouk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-700 hover:text-green-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.5-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"
                  />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@resinaroUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-700 hover:text-green-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path fill="currentColor" d="M21.8 8.001a2.75 2.75 0 0 0-1.936-1.945C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.864.556A2.75 2.75 0 0 0 2.2 8.001C1.643 9.765 1.643 12 1.643 12s0 2.235.557 3.999a2.75 2.75 0 0 0 1.936 1.945C5.9 18.5 12 18.5 12 18.5s6.1 0 7.864-.556a2.75 2.75 0 0 0 1.936-1.945C22.357 14.235 22.357 12 22.357 12s0-2.235-.557-3.999zM10.5 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@resinaro.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-700 hover:text-green-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path fill="currentColor" d="M17.25 2A3.25 3.25 0 0 0 14 5.25V17a2.75 2.75 0 1 1-2.75-2.75h.25V12h-.25A5.25 5.25 0 1 0 16.5 17v-5.5h1.25A3.25 3.25 0 0 0 21 8.25V5.5h-2.25A1.25 1.25 0 0 1 17.25 4.25V2z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:resinaro@proton.me"
                aria-label="Email"
                className="text-gray-700 hover:text-green-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore - visible on all screen sizes */}
          <nav aria-label="Explore">
            <div className="font-semibold text-gray-900 mb-2">Explore</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-700 hover:text-green-900">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-700 hover:text-green-900">
                  Volunteer
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services - visible on all screen sizes */}
          <nav aria-label="Services">
            <div className="font-semibold text-gray-900 mb-2">Services</div>
            <ul className="space-y-1 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-700 hover:text-green-900">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal - visible on all screen sizes */}
          <nav aria-label="Legal">
            <div className="font-semibold text-gray-900 mb-2">Legal</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-green-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-green-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-700 hover:text-green-900">
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Amazon Associate disclosure */}
      <div className="bg-[#F2EEE6] text-gray-600 border-t border-gray-200">
        <div className="container mx-auto px-6 py-2 text-xs">
          <p>As an Amazon Associate, Resinaro earns from qualifying purchases.</p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-3 text-xs flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Resinaro · All rights reserved.</div>
          <div className="opacity-90">
            <span className="text-white/70">Mon–Fri · 9:00–17:00 (UK)</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <a href="mailto:resinaro@proton.me" className="hover:underline">
              resinaro@proton.me
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </footer>
  );
}
