// app/community/power-adapters-uk-italy/page.tsx
import Link from "next/link";
import Image from "next/image";
import { p, type Locale } from "@/lib/localePath";

export const metadata = {
  title: "Plugs, Adapters & Power: Italy ↔ UK Without the Sparks",
  description:
    "Type G (UK) vs. Type C/F/L (Italy), grounded adapters, GaN USB-C chargers, surge-protected extensions, fuses, and real-world safety for renters and travellers.",
  alternates: { canonical: "/community/power-adapters-uk-italy" },
};

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // --- SEO: FAQ rich snippets ---
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a voltage converter between the UK and Italy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Usually no. The UK and Italy are both ~230V/50Hz. Modern laptops, phones, tablets, cameras and many small appliances are dual-voltage (100–240V). Check the label on your power brick. Hair tools can be an exception—verify before use."
        }
      },
      {
        "@type": "Question",
        "name": "Which plug types are used in Italy and the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "UK uses Type G (three rectangular prongs with a fuse in the plug). Italy commonly uses Type F (Schuko) and Type L, plus the slimmer Type C on low-power devices. Many Italian walls accept both Type F and Type L in multi-standard outlets."
        }
      },
      {
        "@type": "Question",
        "name": "What’s the safest way to power multiple devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Use a quality, surge-protected UK extension lead (BS 1363) in the UK, or the local standard in Italy—avoid stacking adapters. A GaN USB-C multi-port charger reduces bricks and heat, and keeps sockets uncluttered."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need grounded (earthed) adapters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes for any device with a third (earth) prong or metal chassis. Always match grounded to grounded. Only use ungrounded adapters for double-insulated two-prong devices (phone bricks, many cameras, etc.)."
        }
      }
    ]
  };

  return (
    <main className="bg-[#F9F6F1] text-gray-800 py-12">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/desk-chargers-adapter.jpg"
            alt="Safe power setup for UK and Italy with adapters, chargers and surge-protected extensions"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-green-700">HOUSING</span>
            <h1 className="text-2xl md:text-4xl font-bold">Plugs, Adapters & Power: Italy ↔ UK Without the Sparks</h1>
          </div>
        </div>

        {/* Intro */}
        <section className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span>Published: October 10, 2025</span>
            <span className="mx-2">•</span>
            <span>By Resinaro Team</span>
          </div>
          <p className="mb-3">
            Whether you’ve just moved for work, you split time between countries, or you’re visiting family, safe power
            is non-negotiable. This guide is a Resinaro staple because it solves everyday headaches: which adapter, when
            to use a grounded plug, how to protect your laptop in a drafty rental, and how to charge everything with one
            small GaN brick. Fewer sparks, fewer fines from landlords, fewer fried chargers.
          </p>
          <p className="text-sm text-gray-700">
            Below you’ll find fast picks, then a deeper breakdown with wiring standards, fuses, and common pitfalls in UK
            HMOs and older Italian flats—explained in plain language.
          </p>
        </section>

        {/* Quick Picks (keep your affiliate links) */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border p-5 rounded-lg shadow-sm">
            <h2 className="font-semibold text-green-900 mb-2">Field-tested essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Grounded EU→UK adapter (Type G) —{" "}
                <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=eu+to+uk+adapter+grounded&tag=resinaroamzn-21">
                  safe picks
                </a>
              </li>
              <li>
                UK→EU compact adapter (Type C/F) —{" "}
                <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter&tag=resinaroamzn-21">
                  travel size
                </a>
              </li>
              <li>
                GaN USB-C multi-port charger (65–100W) —{" "}
                <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=gan+usb+c+charger+65w&tag=resinaroamzn-21">
                  options
                </a>
              </li>
              <li>
                Surge-protected extension lead (BS 1363) —{" "}
                <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=surge+protected+extension+lead&tag=resinaroamzn-21">
                  with USB
                </a>
              </li>
              <li>
                Travel tech organiser —{" "}
                <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=tech+organiser+pouch&tag=resinaroamzn-21">
                  pouches
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white border p-5 rounded-lg shadow-sm">
            <h2 className="font-semibold text-green-900 mb-2">Why these picks?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Grounded when needed:</strong> Protects metal-body laptops/chargers from faults.</li>
              <li><strong>GaN charger:</strong> One brick, multiple ports, less heat → safer, tidier.</li>
              <li><strong>Surge protection:</strong> UK storms, old wiring, and cheap extensions are a recipe for fried gear—don’t risk it.</li>
              <li><strong>Compact adapters:</strong> Fit behind furniture and in airplane outlets, no wobble.</li>
            </ul>
          </div>
        </section>

        {/* Contents */}
        <nav aria-label="Contents" className="mb-6">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li><a className="underline text-green-900" href="#types">Plug & socket types</a></li>
            <li><a className="underline text-green-900" href="#voltage">Voltage, fuses & grounding</a></li>
            <li><a className="underline text-green-900" href="#setups">Safe apartment setups (UK & Italy)</a></li>
            <li><a className="underline text-green-900" href="#travel">Carry-on travel kit</a></li>
            <li><a className="underline text-green-900" href="#troubleshoot">Troubleshooting & landlord-proofing</a></li>
            <li><a className="underline text-green-900" href="#faq">FAQ</a></li>
          </ul>
        </nav>

        {/* Plug & socket types */}
        <section id="types" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Plug & socket types (what fits where)</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">United Kingdom</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Type G</strong> plug with three rectangular prongs.</li>
                <li>Every UK plug has a <strong>fuse</strong> (commonly 3A, 5A, or 13A).</li>
                <li><strong>BS 1363</strong> standard for sockets and extensions.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Italy</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Type F</strong> (Schuko, round pins with side earth) is widespread.</li>
                <li><strong>Type L</strong> (Italian three inline pins) also common; many outlets accept both.</li>
                <li><strong>Type C</strong> (two-pin, ungrounded) for low-power phone bricks and similar.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Voltage, fuses & grounding */}
        <section id="voltage" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Voltage, fuses & grounding (the safety core)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Voltage:</strong> UK and Italy both operate around <strong>230V / 50Hz</strong> → usually no converter required.
            </li>
            <li>
              <strong>Dual voltage:</strong> Check your brick: “<em>Input 100–240V 50/60Hz</em>” means you’re good worldwide with the right plug.
            </li>
            <li>
              <strong>Fuses (UK):</strong> The fuse is in the plug. Use <strong>3A–5A for small electronics</strong>; <strong>13A</strong> for high-draw appliances. Don’t replace with a higher rating “to stop it blowing”—that defeats protection.
            </li>
            <li>
              <strong>Grounding:</strong> If your device has a third prong or metal chassis, use a <strong>grounded (earthed)</strong> adapter/lead. Two-prong, double-insulated bricks can use ungrounded.
            </li>
            <li>
              <strong>Surge protection:</strong> Old rentals + thunderstorms + cheap extensions = risk. Use a <strong>BS 1363 surge-protected</strong> UK extension (and the equivalent local standard in Italy).
            </li>
          </ul>
        </section>

        {/* Safe apartment setups */}
        <section id="setups" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Safe apartment setups you can copy</h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">UK desk setup (rental-friendly)</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Plug a <strong>surge-protected UK extension</strong> into a wall socket (no daisy-chains).</li>
                <li>Add a <strong>GaN USB-C charger</strong> to the first socket; feed laptop/phone/tablet.</li>
                <li>Use a <strong>grounded EU→UK adapter</strong> only when the device itself is grounded.</li>
                <li>Route all cables through a <strong>cable sleeve</strong>; keep off heaters and rugs.</li>
              </ol>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Italy living room (mixed outlets)</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Identify sockets: Type F? Type L? Use the <strong>matching adapter</strong>—avoid loose fit.</li>
                <li>Prefer a <strong>local-standard power strip</strong> (Schuko/L) rather than importing a UK strip.</li>
                <li>Charge through your <strong>GaN USB-C</strong> to reduce bricks and heat.</li>
                <li>Keep ventilation around chargers; don’t cover with clothing or curtains.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Travel kit */}
        <section id="travel" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Carry-on travel kit (EU weekend & remote work)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              1× grounded UK→EU adapter and 1× grounded EU→UK adapter (label them).{" "}
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter&tag=resinaroamzn-21">
                UK→EU
              </a>{" "}
              /{" "}
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=eu+to+uk+adapter+grounded&tag=resinaroamzn-21">
                EU→UK
              </a>
            </li>
            <li>
              1× compact <strong>GaN USB-C charger</strong> (65–100W) + short USB-C cables for each device.{" "}
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=gan+usb+c+charger+65w&tag=resinaroamzn-21">
                options
              </a>
            </li>
            <li>
              1× <strong>tech organiser pouch</strong> (no tangles at security).{" "}
              <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=tech+organiser+pouch&tag=resinaroamzn-21">
                pouches
              </a>
            </li>
            <li>Printed <strong>adapter cheat card</strong>: which plug for which device, fuse ratings.</li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshoot" className="bg-white border rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-green-900 mb-3">Troubleshooting & landlord-proofing</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Common issues</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Warm plug or smell:</strong> Unplug, check fit and fuse; replace low-quality adapters.</li>
                <li><strong>Frequent fuse blows:</strong> Wrong rating or faulty device; match 3A/5A/13A to device draw.</li>
                <li><strong>Loose, wobbly adapter:</strong> Use a slim, well-fitting model; avoid multi-block “towers”.</li>
                <li><strong>Hair tools:</strong> Confirm voltage. If single-voltage and mismatched, use a proper converter—or buy local.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-900">Rental etiquette & safety</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Don’t drill or replace sockets without consent—use tidy cable management instead.</li>
                <li>Keep extensions <strong>visible and ventilated</strong>; never under rugs or bedding.</li>
                <li>Photograph any damaged outlets and report immediately; it protects your deposit.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Affiliate list (retain original links) */}
        <section className="mt-8 bg-white rounded-lg border shadow-sm p-5">
          <h2 className="text-xl font-semibold text-green-900 mb-3">Fast shopping links (same as above)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Grounded EU→UK adapters (Type G) — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=eu+to+uk+adapter+grounded&tag=resinaroamzn-21">safe picks</a></li>
            <li>UK→EU compact adapters (Type C/F) — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=uk+to+eu+adapter&tag=resinaroamzn-21">travel size</a></li>
            <li>GaN USB-C multi-port charger — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=gan+usb+c+charger+65w&tag=resinaroamzn-21">65–100W options</a></li>
            <li>Surge-protected extension lead — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=surge+protected+extension+lead&tag=resinaroamzn-21">with USB</a></li>
            <li>Travel cable organiser — <a rel="nofollow sponsored" className="underline text-green-800" href="https://www.amazon.co.uk/s?k=tech+organiser+pouch&tag=resinaroamzn-21">pouches</a></li>
          </ul>
        </section>

        {/* Related Articles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">Related reads</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/travel-to-italy-kit")}>
                Quick Trip to Italy: Light Travel Kit from the UK
              </Link>
            </li>
            <li>
              <Link className="underline text-green-900" href={p(locale, "/community/uk-desk-setup-newcomers")}>
                Work & Study: Compact UK Desk Setup That Feels Pro
              </Link>
            </li>
          </ul>
        </section>

        {/* Disclosure */}
        <p className="mt-8 text-xs text-gray-500 italic">
          Affiliate note: we may earn a small commission at no extra cost to you. It helps keep guides like this free and updated.
        </p>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </main>
  );
}
