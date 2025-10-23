// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import ClientLayout from "@/components/ClientLayout";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resinaro – Italian Roots, UK Support",
  description:
    "Resinaro helps Italians in the UK with bureaucracy, housing, mental health, and community support.",
  metadataBase: new URL("https://www.resinaro.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

function isSupportedLocale(l: string): l is Locale {
  return (locales as readonly string[]).includes(l);
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  // Accept both shapes (plain object or Promise) to satisfy generated types
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const { children } = props;

  // ✅ Always normalize params (handles Promise or plain object)
  const { locale: incoming } = await Promise.resolve(props.params);

  if (!isSupportedLocale(incoming)) {
    notFound();
  }
  const locale: Locale = incoming;

  // Load i18n messages for this locale
  const messages = (await import(`@/messages/${locale}.json`)).default;

  // ---- CTA translations with safe fallback ----
  const ctaFallback = {
    unsureTitle: "Not sure what you need?",
    unsureBody:
      "Tell us your situation. We’ll point you to the right guide or service.",
    contact: "Contact us",
    services: "Browse services",
  };
  let tCta: (key: keyof typeof ctaFallback) => string;
  try {
    const t = await getTranslations({ locale, namespace: "cta" });
    tCta = (k) => {
      try {
        return t(k as unknown as string);
      } catch {
        return ctaFallback[k];
      }
    };
  } catch {
    tCta = (k) => ctaFallback[k];
  }

  // Trustpilot locale for the footer button (keep the loader once, globally)
  const trustpilotLocale = locale === "it" ? "it-IT" : "en-GB";

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} font-inter bg-beige min-h-screen antialiased pt-20 md:pt-20 sm:pt-16`}
      >
        {/* Trustpilot bootstrap (needed for footer review button). Non-blocking */}
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="lazyOnload"
          data-locale={trustpilotLocale}
        />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          <main>
            <ClientLayout>{children}</ClientLayout>
          </main>

          {/* Global CTA */}
          <section className="bg-green-700 text-white py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {tCta("unsureTitle")}
            </h2>
            <p className="mb-6">{tCta("unsureBody")}</p>
            <div className="flex justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-green-800 font-semibold px-6 py-3 rounded shadow hover:bg-green-100 transition"
              >
                {tCta("contact")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="bg-green-900 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-800 transition"
              >
                {tCta("services")}
              </Link>
            </div>
          </section>

          {/* (Optional) Review strip was removed to avoid duplication with footer */}

          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
