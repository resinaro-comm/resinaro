import type { Metadata } from "next";
import AdvertiseForm from "@/components/AdvertiseForm";

export const metadata: Metadata = {
  title: "Advertise with Resinaro — Reach Italians in the UK",
  description: "Reach Italians in the UK at the exact moment they need help. Transparent placements, qualified leads, GDPR-safe.",
  alternates: { canonical: "/advertise" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-green-900">
      {/* Hero */}
      <section className="px-4 pt-12 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Advertise with Resinaro</h1>
          <p className="mt-3 text-lg text-green-800">Reach Italians in the UK at the exact moment they need help.</p>
          <p className="text-sm italic text-green-700">IT: Raggiungi italiani nel Regno Unito quando cercano aiuto.</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#apply" className="px-6 py-3 rounded bg-green-800 text-white font-semibold hover:bg-green-900">Apply to advertise</a>
          </div>
        </div>
      </section>

      {/* Why advertise */}
      <section className="px-4 py-10 border-t bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Why advertise with Resinaro</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-green-900">
            <div>
              <h3 className="font-medium">Audience fit</h3>
              <p className="text-sm text-green-800 mt-1">Italians in the UK seeking help with visas, taxes, housing and more. Contextual intent via forms and guides.</p>
            </div>
            <div>
              <h3 className="font-medium">Placement quality</h3>
              <p className="text-sm text-green-800 mt-1">Sticky CTAs and in-content modules that respect UX. No spam. Apple-clean layouts.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Transparent reporting</h3>
              <p className="text-sm text-green-800 mt-1">GDPR-safe tracking, clear attribution and SLA-backed lead reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placements & packages */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Placements & packages</h2>
          <p className="text-sm text-green-800 mt-1">Non-binding ranges. Share of voice (SOV) indicates how often your placement appears relative to all eligible placements.</p>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "£300/mo",
                sov: "10–25% SOV",
                items: ["Shared rotation", "2 in-content modules", "Monthly report"],
              },
              {
                name: "Pro",
                price: "£600/mo",
                sov: "25–60% SOV",
                items: ["Sitewide eligibility", "Priority placement", "Lead SLA"],
              },
              {
                name: "Exclusive",
                price: "£900/mo",
                sov: "100% SOV (category)",
                items: ["Category exclusive", "Custom modules", "Dedicated report"],
              },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-lg border p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="text-sm text-green-800">{p.sov}</div>
                </div>
                <div className="text-xl font-bold mt-1">{p.price}</div>
                <ul className="mt-3 text-sm list-disc list-inside text-green-800">
                  {p.items.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualified lead definition */}
      <section className="px-4 py-10 bg-white border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">What we count as a qualified lead</h2>
          <ul className="mt-3 text-sm list-disc list-inside text-green-800">
            <li>Inbound contact via tracked form submission, email, or phone/WhatsApp with UTMs.</li>
            <li>Includes: complete contact details and clear enquiry (e.g. immigration consult, conveyancing).</li>
            <li>Excludes: spam, incomplete contact, unrelated enquiries.</li>
            <li>Attribution: UTMs, page context, and unique reference IDs; optional tracked phone numbers.</li>
          </ul>
        </div>
      </section>

      {/* Trust & proof */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Trust & proof</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm text-green-800">
            <div className="bg-white border rounded p-4">“We saw clear lift in qualified leads from Resinaro placements.” — Legal partner</div>
            <div className="bg-white border rounded p-4">Brand-safe. GDPR compliant. Zero-spam policy.</div>
            <div className="bg-white border rounded p-4">Case study slots reserved for launch partners.</div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="px-4 py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Application form</h2>
            <p className="text-sm text-green-800">Short, pre-qualifying. Typical response within 2 business days.</p>
          </div>
          <AdvertiseForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10 bg-neutral-50 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-3 space-y-3">
            {[
              ["How are leads measured?", "Form submissions with UTMs, unique IDs, and optional tracked phone/WhatsApp."],
              ["What’s in the report?", "Monthly summary: impressions, clicks, leads, sources, and top content."],
              ["Minimum term?", "Month-to-month for Starter/Pro; 3 months for Exclusive to guarantee SOV."],
              ["Creative specs?", "Simple image + text modules. We can assist with creative."],
            ].map(([q, a]) => (
              <details key={String(q)} className="bg-white rounded border p-4">
                <summary className="font-medium cursor-pointer">{q}</summary>
                <div className="text-sm text-green-800 mt-2">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-12 border-t bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Reach Italians in the UK when it matters most</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#apply" className="px-6 py-3 rounded bg-green-800 text-white font-semibold hover:bg-green-900">Apply now</a>
          </div>
          <p className="text-xs text-green-700 mt-3">GDPR-safe. Zero spam. Clear attribution.</p>
        </div>
      </section>
    </main>
  );
}
