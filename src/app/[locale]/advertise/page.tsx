import type { Metadata } from "next";
import AdvertiseForm from "@/components/AdvertiseForm";

export const metadata: Metadata = {
  title: "Advertise with Resinaro — Reach Italians in the UK",
  description:
    "Get featured where Italians in the UK actively look for help. Human placements, warm intent, and hands-on support.",
  alternates: { canonical: "/advertise" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* Hero */}
      <section className="px-4 pt-12 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get featured on Resinaro
          </h1>
          <p className="mt-3 text-lg text-green-800">
            Be discovered by Italians in the UK at the exact moment they’re searching for help.
          </p>
          <p className="text-sm italic text-green-700">
            IT: Fatti trovare dagli italiani nel Regno Unito proprio quando cercano un aiuto.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#apply"
              className="px-6 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-900"
            >
              Apply to be featured
            </a>
            <a
              href="#options"
              className="px-6 py-3 rounded-xl border border-green-800 text-green-900 font-semibold hover:bg-emerald-50"
            >
              How it works
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs">
            <span className="rounded-full bg-emerald-700 px-2 py-0.5 font-semibold text-white">
              Brand-safe
            </span>
            <span className="text-green-800">Human curation • Clean UX • GDPR-friendly</span>
          </div>
        </div>
      </section>

      {/* Value / benefits */}
      <section className="px-4 py-10 border-t bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Why brands partner with Resinaro</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3 text-green-900">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">Real intent, not cold traffic</h3>
              <p className="mt-2 text-sm text-green-800">
                People land on our guides while looking for restaurants, delis, shops, visas, taxes, and
                everyday services. Your listing meets them in that moment.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">Trust by association</h3>
              <p className="mt-2 text-sm text-green-800">
                We hand-pick recommendations and keep the design calm and helpful.
                You’re presented in a helpful context—never as shouty ads.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">Hands-on support</h3>
              <p className="mt-2 text-sm text-green-800">
                Need copy, images, or tracking set up? We’ll sort it. We can also audit your online presence
                and suggest quick wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where you appear */}
      <section id="options" className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Where your business can appear</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">Featured listing</h3>
              <p className="mt-2 text-sm text-green-800">
                A polished card on city pages (e.g., <em>Manchester → Restaurants</em>) with your
                website, maps, and a short quote. Marked as “Featured” for clarity.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">Category highlight</h3>
              <p className="mt-2 text-sm text-green-800">
                Spotlight placement within a category (Restaurants, Delis, Shops) across a city guide.
                Great for visibility without feeling like an ad.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">City partner</h3>
              <p className="mt-2 text-sm text-green-800">
                A soft, tasteful mention on the city hub page—ideal for law firms, accountants,
                movers, language schools, or any service helping our community.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border bg-white p-5">
            <h4 className="font-medium">What you get</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-green-800 space-y-1">
              <li>Clean, on-brand placement that users actually read.</li>
              <li>Clicks to your website, maps, menu or WhatsApp—tracked in a privacy-friendly way.</li>
              <li>Helpful copy and a short review snippet (we can help source one).</li>
              <li>Simple onboarding and flexible terms—no pressure.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Perfect for</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {[
              "Italian restaurants, pizzerias, delis and shops",
              "Immigration & family lawyers",
              "Accountants & tax advisors",
              "Removals, storage & shipping",
              "Language schools & tutors",
              "Coffee, wine & specialty retailers",
            ].map((t) => (
              <div key={t} className="rounded-xl border bg-neutral-50 p-3">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3">
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">1) Tell us about you</h3>
              <p className="mt-2 text-sm text-green-800">
                Share your website and what you offer. Two minutes. We’ll take it from there.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">2) We suggest a placement</h3>
              <p className="mt-2 text-sm text-green-800">
                We’ll recommend a spot that fits your goals and audience. No pushy sales—just a clear plan.
              </p>
            </li>
            <li className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">3) Go live (with support)</h3>
              <p className="mt-2 text-sm text-green-800">
                We polish your card, add links and tracking, and publish. You’ll get a simple performance summary.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Light trust layer */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Built for long-term trust</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 text-sm text-green-800">
            <div className="rounded-2xl border bg-neutral-50 p-4">
              Clean design and clear disclosure—no shady banners or pop-ups.
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-4">
              Privacy-friendly analytics with simple click and enquiry tracking.
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-4">
              Helpful content first. Your brand sits inside useful guides people bookmark and share.
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="px-4 py-12 bg-neutral-50 border-t">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold">Apply to be featured</h2>
            <p className="mt-2 text-sm text-green-800">
              No obligations. Tell us what you do and the cities you serve—we’ll come back with a simple plan.
            </p>
            <p className="mt-1 text-xs text-green-700">
              Prefer email? <a className="underline underline-offset-4" href="mailto:resinaro@proton.me">resinaro@proton.me</a>
            </p>
          </div>
          <AdvertiseForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-3 space-y-3">
            {[
              [
                "Do you publish prices?",
                "We share pricing after a quick fit check so we can recommend the most effective placement for your goals.",
              ],
              [
                "How soon can we go live?",
                "Typically within a few days once we’ve confirmed copy, links and tracking.",
              ],
              [
                "What does a “qualified enquiry” look like?",
                "A real person reaching out via our form or your contact links with a clear request (not spam). We filter obvious bots and unrelated messages.",
              ],
              [
                "Can you help with creatives?",
                "Yes. We’ll draft the blurb, help choose an image, and make sure your links and tracking work cleanly.",
              ],
              [
                "Is there a long contract?",
                "No long commitments. We aim for simple, flexible terms and results that make you want to stay.",
              ],
            ].map(([q, a]) => (
              <details key={String(q)} className="rounded-2xl border bg-neutral-50 p-4">
                <summary className="font-medium cursor-pointer">{q}</summary>
                <div className="mt-2 text-sm text-green-800">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-12 border-t bg-neutral-50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold">
            Ready when you are
          </h2>
          <p className="mt-2 text-sm text-green-800">
            If your business helps Italians in the UK, we’d love to feature you in the right place.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#apply"
              className="px-6 py-3 rounded-xl bg-green-800 text-white font-semibold hover:bg-green-900"
            >
              Start the conversation
            </a>
          </div>
          <p className="mt-3 text-xs text-green-700">Kind, human onboarding. No pressure.</p>
        </div>
      </section>
    </main>
  );
}
