// app/[locale]/jobs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 21600; // 6h

export const metadata: Metadata = {
  title: "Italian-speaking Jobs in the UK | Resinaro",
  description:
    "Promote your Italian-speaking roles to a UK-based community. Clean, human curation and city placements available.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* ---------- HERO (ads-only) ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0B5D3B] via-[#0B5D3B] to-[#B22222]" />
        <div className="absolute inset-0 -z-10 opacity-35 mix-blend-multiply bg-[url('/images/landscape-image.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(0,0,0,0.55),rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.25))]" />

        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Italian-speaking Jobs in the UK
          </h1>
          <p className="mt-3 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            Get your role in front of Italians across the UK. Clean design, no spam, real reach.
          </p>

          <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/advertise"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
            >
              Advertise a role
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 text-sm font-medium text-white/95 backdrop-blur hover:bg-white/20"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHY RESINARO ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-4 rounded-2xl border bg-white p-5 md:grid-cols-3">
          <Stat title="Audience fit">Italians in the UK</Stat>
          <Stat title="Distribution">Jobs page + city guides</Stat>
          <Stat title="Curation">Human-checked listings</Stat>
        </div>
      </section>

      {/* ---------- AVAILABLE PLACEMENTS (empty slots) ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="mb-4 text-center text-xl font-semibold">Available placements</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AdSlot
            label="Featured (Top of page)"
            note="Hero band placement. Best for visibility."
            heightClass="h-40"
          />
          <AdSlot
            label="Standard listing"
            note="Appears in the jobs stream with logo, tags and direct apply."
            heightClass="h-40"
          />
          <AdSlot
            label="City placement add-on"
            note="Pinned in 1–3 city directories (e.g., London, Manchester)."
            heightClass="h-36"
          />
          <AdSlot
            label="Category add-on"
            note="Pinned under relevant site categories (Customer Support, SaaS, Retail...)."
            heightClass="h-36"
          />
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
          <h3 className="text-lg font-semibold">Ready to promote a role?</h3>
          <p className="mt-1 text-green-900/80">
            Send us the job link and basics (title, location, employment type). We’ll format and publish it.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/advertise"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
            >
              Apply to be featured →
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- GUIDELINES ---------- */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Submission guidelines</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-green-900/90">
            <li>Role must explicitly require Italian (written and/or spoken).</li>
            <li>Location anywhere in the UK, or remote with UK eligibility.</li>
            <li>Direct company or verified recruiter links (no aggregators).</li>
            <li>We reserve the right to edit for clarity and format consistency.</li>
          </ul>
          <p className="mt-4 text-sm text-green-900/70">
            Tip: include employment type, seniority, and application deadline for best results.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ---------- small bits ---------- */

function Stat({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-[13px] font-semibold uppercase tracking-wide text-gray-700">{title}</div>
      <div className="mt-1 text-[15px] text-green-950">{children}</div>
    </div>
  );
}

function AdSlot({
  label,
  note,
  heightClass = "h-40",
}: {
  label: string;
  note?: string;
  heightClass?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      {/* brand accent top stripe */}
      <div className="mb-4 grid h-1 w-full grid-cols-3 opacity-90">
        <div className="bg-[#0B5D3B]" />
        <div className="bg-white" />
        <div className="bg-[#B22222]" />
      </div>

      <div
        className={`grid place-items-center rounded-xl border-2 border-dashed border-emerald-900/25 bg-emerald-50/40 ${heightClass}`}
        aria-label="Available ad slot"
      >
        <div className="text-center">
          <div className="text-sm font-semibold text-green-950">{label}</div>
          {note && <div className="mt-1 text-xs text-green-900/70">{note}</div>}
          <div className="mt-3">
            <Link
              href="/advertise"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-emerald-700 px-3 text-xs font-medium text-white hover:bg-emerald-800"
            >
              Book this placement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
