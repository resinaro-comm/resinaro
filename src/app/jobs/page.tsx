// app/jobs/page.tsx
import type { Metadata } from "next";
import { jobs as ALL_JOBS, type Job } from "@/data/jobs";
import Link from "next/link";

export const revalidate = 21600; // 60 * 60 * 6

export const metadata: Metadata = {
  title: "Italian-speaking Jobs in the UK | Resinaro",
  description:
    "Hand-checked roles that explicitly require Italian. Clean filters, direct links to company sites. Updated regularly.",
  alternates: { canonical: "/jobs" },
};

type SearchParams = {
  q?: string;
  loc?: string;
  remote?: string; // "1" = remote only
  src?: string; // Workday | Greenhouse | Workable | SmartRecruiters | Other
};

const SOURCES = ["Workday", "Greenhouse", "Workable", "SmartRecruiters", "Other"] as const;

/* ---------- helpers ---------- */
const uniq = (arr: string[]) => Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
const getInitials = (s: string) =>
  s
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

function filterJobs(list: Job[], params: SearchParams) {
  let data = list.slice();

  const q = (params.q || "").trim().toLowerCase();
  if (q) {
    data = data.filter((j) => {
      const hay = `${j.title} ${j.company} ${j.location} ${j.languageRequirement} ${
        j.tags?.join(" ") || ""
      }`.toLowerCase();
      return hay.includes(q);
    });
  }
  if (params.loc && params.loc !== "any") data = data.filter((j) => j.location === params.loc);
  if (params.src && params.src !== "any") data = data.filter((j) => j.source === params.src);
  if (params.remote === "1") data = data.filter((j) => j.remote);

  data.sort((a, b) => (a.title + a.company).localeCompare(b.title + b.company));
  return data;
}

function jsonLd(jobs: Job[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobs.slice(0, 24).map((j, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "JobPosting",
        title: j.title,
        hiringOrganization: { "@type": "Organization", name: j.company },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: j.location, addressCountry: "GB" },
        },
        description: `${j.languageRequirement} · ${j.location}`,
        directApply: true,
      },
    })),
  };
}

/* ---------- page ---------- */
export default function JobsPage({ searchParams }: { searchParams: SearchParams }) {
  const locations = uniq(ALL_JOBS.map((j) => j.location));
  const total = ALL_JOBS.length;
  const remoteTotal = ALL_JOBS.filter((j) => j.remote).length;

  const filtered = filterJobs(ALL_JOBS, searchParams);
  const q = searchParams.q || "";
  const loc = searchParams.loc || "any";
  const src = searchParams.src || "any";
  const remoteOnly = searchParams.remote === "1";

  return (
    <main className="bg-[#F7F3EB] text-green-950">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(filtered)) }} />

      {/* ---------- HERO (centered, high-contrast) ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0B5D3B] via-[#0B5D3B] to-[#B22222]" />
        <div className="absolute inset-0 -z-10 opacity-35 mix-blend-multiply bg-[url('/images/landscape-image.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(0,0,0,0.55),rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.25))]" />
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Italian-speaking Jobs in the UK
          </h1>
          <p className="mt-3 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            Only roles that explicitly ask for Italian. Clean filters, real links, no spam.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span>Curated</span>
            <span aria-hidden>•</span>
            <span>{total} live roles</span>
            <span aria-hidden>•</span>
            <span>{remoteTotal} remote-friendly</span>
          </div>
        </div>
      </section>

      {/* ---------- FILTER BAR (centered glass) ---------- */}
      <section className="-mt-8 pb-2">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-emerald-900/10 bg-white/80 shadow-sm backdrop-blur">
            <form method="GET" className="grid gap-3 p-4 text-center sm:grid-cols-5 sm:text-left">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-green-900">Search</label>
                <input
                  type="text"
                  name="q"
                  defaultValue={q}
                  placeholder="e.g. account manager, customer support…"
                  className="mt-1 w-full rounded-xl border bg-white/95 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-900">Location</label>
                <select
                  name="loc"
                  defaultValue={loc}
                  className="mt-1 w-full rounded-xl border bg-white/95 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="any">Anywhere</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-green-900">Source</label>
                <select
                  name="src"
                  defaultValue={src}
                  className="mt-1 w-full rounded-xl border bg-white/95 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="any">Any</option>
                  {SOURCES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <label className="block text-sm font-medium text-green-900">Remote</label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    id="remote"
                    type="checkbox"
                    name="remote"
                    value="1"
                    defaultChecked={remoteOnly}
                    className="h-4 w-4 rounded border-green-900 text-emerald-600 focus:ring-emerald-600"
                  />
                  <label htmlFor="remote" className="text-sm text-green-900/80">
                    Remote-only
                  </label>
                </div>
              </div>

              <div className="sm:col-span-5 flex items-center justify-center gap-3 pt-1">
                <Link
                  href="/jobs"
                  className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium hover:bg-emerald-50"
                >
                  Reset
                </Link>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
                >
                  Update results
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS (centered) ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 text-center text-sm text-green-900/70">
          Showing <strong>{filtered.length}</strong> of <strong>{total}</strong> roles
          {remoteOnly ? " • remote only" : ""}.
        </div>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </ul>
        )}

        {/* Employer CTA (centered) */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
          <h2 className="text-xl font-semibold">Hiring Italians in the UK?</h2>
          <p className="mt-1 text-green-900/80">
            Feature your opening here and in our city guides. Clean design, real reach, human curation.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/advertise"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
            >
              Promote a role
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
    </main>
  );
}

/* ---------- components ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-2.5 py-1 text-xs text-green-900/80">
      {children}
    </span>
  );
}

function JobCard({ job }: { job: Job }) {
  const initials = getInitials(job.company);
  return (
    <li className="group relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-all hover:shadow-md">
      {/* brand accent top stripe */}
      <div className="absolute inset-x-0 top-0 grid h-1 w-full grid-cols-3 opacity-90">
        <div className="bg-[#0B5D3B]" />
        <div className="bg-white" />
        <div className="bg-[#B22222]" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-xs font-bold text-white">
              {initials}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold leading-tight text-green-950">{job.title}</h3>
              <p className="text-sm text-green-900/70">{job.company}</p>
            </div>
          </div>
          <span className="rounded-full border bg-white/80 px-2 py-1 text-xs text-green-900/70">
            Company site ({job.source})
          </span>
        </div>

        <p className="mt-3 text-sm text-green-900/90">{job.languageRequirement}</p>

        <div className="mt-3 flex flex-wrap justify-start gap-2">
          <Chip>📍 {job.location}</Chip>
          {job.remote && <Chip>🌐 Remote (UK)</Chip>}
          {job.tags?.slice(0, 4).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Apply on site
          </a>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-900/70 underline underline-offset-4 hover:text-green-900"
          >
            View details
          </a>
        </div>
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 text-center shadow-sm">
      <h3 className="text-xl font-semibold text-green-950">No matches yet</h3>
      <p className="mt-2 text-green-900/80">
        Try clearing filters or broadening your search. We only list roles that explicitly mention{" "}
        <strong>Italian</strong>.
      </p>
      <div className="mt-4">
        <Link
          href="/jobs"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Reset filters
        </Link>
      </div>
    </div>
  );
}
