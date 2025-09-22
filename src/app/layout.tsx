import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";

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
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter bg-beige min-h-screen antialiased pt-20 md:pt-20 sm:pt-16`}
      >
        <Navbar />
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
        <section className="bg-green-700 text-white py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Not sure what service you need?
          </h2>
          <p className="mb-6">
            Contact us directly — we’ll guide you step by step.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-green-800 font-semibold px-6 py-3 rounded shadow hover:bg-green-100 transition"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="bg-green-900 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-800 transition"
            >
              Get Help
            </a>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
