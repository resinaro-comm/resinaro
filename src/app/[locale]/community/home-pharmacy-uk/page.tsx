// app/community/home-pharmacy-uk/page.tsx
import Link from "next/link";
import { p, type Locale } from "@/lib/localePath";
import Image from "next/image";

export const metadata = {
  title: "Home Pharmacy Basics (UK): Be Ready, Spend Less",
  description:
    "Simple, non-prescription items many households keep on hand in the UK: thermometer, plasters, electrolytes and more.",
  alternates: { canonical: "/community/home-pharmacy-uk" },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 mb-6 overflow-hidden rounded-xl">
          <Image
            src="/images/home-pharmacy-basics.png" 
            alt="Home Pharmacy Basics"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700 text-white shadow-sm">
              HEALTH
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Home Pharmacy Basics (UK): Be Ready, Spend Less
        </h1>

        {/* Publication info */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Published: October 9, 2025</span>
          <span className="mx-2">•</span>
          <span>By Resinaro Team</span>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm font-medium">General information only — not medical advice. For concerns, speak to your pharmacist or GP.</p>
        </div>

        <p className="mb-6">Having these basic items at home can save you late-night trips to the pharmacy and help you manage minor health issues effectively.</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Digital thermometer (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=digital+thermometer&tag=resinaroamzn-21">compare</a>)</li>
          <li>Plasters + antiseptic wipes (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=first+aid+kit+small&tag=resinaroamzn-21">mini kits</a>)</li>
          <li>Electrolyte sachets (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=electrolyte+sachets&tag=resinaroamzn-21">options</a>)</li>
          <li>Cold/flu basics (paracetamol/ibuprofen) — check labels (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=paracetamol&tag=resinaroamzn-21">see</a>)</li>
          <li>Reusable ice/hot pack (<a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=reusable+hot+cold+pack&tag=resinaroamzn-21">packs</a>)</li>
        </ul>

        {/* UK Healthcare Tips */}
        <div className="mt-8 bg-white rounded-lg border shadow-sm p-5">
          <h2 className="text-xl font-semibold text-green-900 mb-3">UK Healthcare Resources</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>NHS 111: Call for non-emergency medical advice</li>
            <li>Local pharmacy: Many offer free consultations for minor ailments</li>
            <li>NHS website: Reliable health information in English</li>
            <li>Register with a GP as soon as possible after arriving in the UK</li>
            <li>Keep medications in original packaging with clear labels</li>
          </ul>
        </div>

        {/* Related Articles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href={p(locale, "/services")}>
                View Resinaro Services →
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-8 text-xs text-gray-500 italic">Affiliate note: we may earn a small commission.</p>
      </div>
    </main>
  );
}