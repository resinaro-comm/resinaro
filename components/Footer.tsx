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
      availableLanguage: ["English", "Italian"]
    }
  ]
};

export default function FooterCompact() {
  return (
    <footer className="bg-[#F9F6F1] border-t border-gray-200">
      <div className="h-1 w-full flex" aria-hidden="true">
        <div className="flex-1 bg-green-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold text-green-900">Resinaro</h3>
            <p className="text-xs text-gray-700 max-w-xs mt-1">Italian roots — practical support for people in the UK.</p>
          </div>

          {/* Links */}
          <div className="hidden sm:flex gap-8">
            <nav aria-label="Explore" className="text-sm">
              <div className="font-semibold text-gray-800 mb-1">Explore</div>
              <Link href="/about" className="block text-gray-700 hover:text-green-900">About</Link>
              <Link href="/community" className="block text-gray-700 hover:text-green-900">Community</Link>
              <Link href="/volunteer" className="block text-gray-700 hover:text-green-900">Volunteer</Link>
            </nav>

            <nav aria-label="Services" className="text-sm">
              <div className="font-semibold text-gray-800 mb-1">Services</div>
              {services.map(s => (
                <Link key={s.href} href={s.href} className="block text-gray-700 hover:text-green-900">{s.title}</Link>
              ))}
            </nav>

            <nav aria-label="Legal" className="text-sm">
              <div className="font-semibold text-gray-800 mb-1">Legal</div>
              <Link href="/privacy-policy" className="block text-gray-700 hover:text-green-900">Privacy</Link>
              <Link href="/terms" className="block text-gray-700 hover:text-green-900">Terms</Link>
              <Link href="/cookies" className="block text-gray-700 hover:text-green-900">Cookies</Link>
            </nav>
          </div>

          {/* Micro CTA */}
          <div className="flex-shrink-0">
            <a
              href="mailto:help@resinaro.com?subject=Website%20enquiry"
              className="inline-flex items-center gap-2 rounded-md bg-green-900 text-white text-sm font-medium px-3 py-2 shadow-sm hover:bg-green-800"
              aria-label="Email Resinaro — typical reply in 48 hours"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 8.5L12 13 3 8.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email — reply in 48h
            </a>
            <div className="text-xs text-gray-500 mt-2 hidden sm:block">Sitemap · <Link href="/sitemap.xml" className="underline">XML</Link></div>
          </div>
        </div>
      </div>

      <div className="bg-green-900 text-white text-center py-2 text-xs">
        © {new Date().getFullYear()} Resinaro · All rights reserved.
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </footer>
  );
}
