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
      email: "help@resinaro.com",
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
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-700 hover:text-green-900"
              >
                {/* Instagram glyph */}
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.5-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-green-900"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56A1.94 1.94 0 0 1 6.94 6.5M4.5 8h5v12h-5zm7.25 0h4.78v1.65h.07a5.23 5.23 0 0 1 4.68-2.57c5 0 5.93 3.29 5.93 7.56V20h-5v-6.29c0-1.5 0-3.43-2.09-3.43s-2.41 1.63-2.41 3.32V20h-5z"
                  />
                </svg>
              </a>
              <a
                href="mailto:help@resinaro.com"
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
            <a href="mailto:help@resinaro.com" className="hover:underline">
              help@resinaro.com
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
