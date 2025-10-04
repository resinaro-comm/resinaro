// app/community/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// ---------- SEO ----------
export const metadata: Metadata = {
  title: "Community Knowledge Hub | Resinaro",
  description:
    "Practical, judgement-free guides for Italians and migrants in the UK — paperwork, housing, health, and everyday life.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Community Knowledge Hub | Resinaro",
    description:
      "Practical, judgement-free guides for Italians and migrants in the UK.",
    url: "https://www.resinaro.com/community",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// ---------- Data ----------
type Post = {
  title: string;
  description: string;
  slug: string;
  category: string;
  image?: string;
  minutes?: number; // read time
  tags?: string[];
  updatedAt?: string; // ISO date
  lang?: "en" | "it";
  featured?: boolean;
};

// Your existing list (kept) + optional fields for nicer UI
const posts: Post[] = [
  // Mini-guides
  {
    title: "The No-Machine Italian Coffee Kit (UK Edition)",
    description:
      "Everything you need for moka coffee in a UK kitchen: pot sizes, the right grind, spare gaskets, and a tiny milk frother for cappuccino vibes.",
    slug: "/community/moka-coffee-kit",
    category: "lifestyle",
    image: "/images/mokapot.png",
    minutes: 8,
    tags: ["moka", "kitchen"],
    updatedAt: "2025-10-04",
    featured: true,
  },
  {
    title: "Tiny UK Kitchen, Big Italian Flavour: Starter Kit",
    description:
      "Compact tools and pantry picks for Italian cooking in a shared flat or studio. One pan, one pot, airtight storage and pantry heroes.",
    slug: "/community/starter-uk-kitchen-italian",
    category: "lifestyle",
    image: "/images/starterkitchen.png",
    minutes: 12,
    tags: ["kitchen", "budget"],
    updatedAt: "2025-10-07",
  },
  {
    title: "Save Money: Bulk Italian Pantry Buys in the UK",
    description:
      "Cut weekly costs by buying Italian staples in bulk: pasta, tomatoes, olive oil, beans and coffee — what to bulk, what not to.",
    slug: "/community/bulk-italian-pantry-uk",
    category: "lifestyle",
    image: "/images/resinaro-general.png",
    minutes: 7,
    tags: ["bulk", "pantry", "saving"],
  },
  {
    title: "Stay Warm, Spend Less: Energy-Saving Comfort Picks",
    description:
      "Simple buys that cut drafts and keep you warm in UK rentals: door seals, thermal curtains, hot-water bottles and low-watt heaters.",
    slug: "/community/warmth-energy-savers-uk",
    category: "lifestyle",
    image: "/images/warmth-energy-hero-3840x1280.png",
    minutes: 9,
    tags: ["housing", "winter"],
  },
  {
    title: "Work & Study: Compact UK Desk Setup That Feels Pro",
    description:
      "Laptop stand, keyboard, lighting and cable basics that turn a rented room into a focused workspace.",
    slug: "/community/uk-desk-setup-newcomers",
    category: "lifestyle",
    image: "/images/resinaro-general.png",
    minutes: 8,
    tags: ["work", "study", "setup"],
  },
  {
    title: "Quick Trip to Italy: Light Travel Kit from the UK",
    description:
      "EU carry-on bag sizes, packing cubes, UK→EU adapters, document wallets and security tips for quick trips home.",
    slug: "/community/travel-to-italy-kit",
    category: "travel",
    image: "/images/quicktrip.png",
    minutes: 10,
    tags: ["travel", "airlines"],
  },
  {
    title: "Move-In Day: Cleaning & Fix-It Kit for UK Rentals",
    description:
      "Apartment-friendly cleaning and small fixes: microfibre set, mop, command hooks, WD-40, and moisture control.",
    slug: "/community/move-in-cleaning-kit-uk",
    category: "housing",
    image: "/images/cleaning.png",
    minutes: 11,
    tags: ["deposit", "cleaning"],
  },
  {
    title: "Raising Bilingual Kids: Italian at Home Starter Pack",
    description:
      "Games, books and tools to keep Italian alive in the UK: picture dictionaries, story time, labels and music.",
    slug: "/community/kids-italian-at-home",
    category: "family",
    image: "/images/resinaro-general.png",
    minutes: 9,
    tags: ["family", "language"],
  },
  {
    title: "Home Pharmacy Basics (UK): Be Ready, Spend Less",
    description:
      "Simple, non-prescription items many households keep on hand in the UK: thermometer, plasters, electrolytes and more.",
    slug: "/community/home-pharmacy-uk",
    category: "health",
    image: "/images/resinaro-general.png",
    minutes: 7,
    tags: ["health", "first aid"],
  },
  {
    title: "Plugs, Adapters & Power: Italy ↔ UK Without the Sparks",
    description:
      "Grounded EU→UK and UK→EU adapters, multi-port chargers, and safe surge-protected extensions for renters.",
    slug: "/community/power-adapters-uk-italy",
    category: "housing",
    image: "/images/resinaro-general.png",
    minutes: 8,
    tags: ["power", "adapters"],
  },

  // Full length
  {
    title:
      "Save Money in the UK: Buy Italian Staples in Bulk (Smart Storage, Real Prices, Zero Waste Tips)",
    description:
      "A practical guide to bulk-buying Italian pantry essentials in the UK—what to buy, how to store it in small flats, and how to split costs with friends. Includes price targets, shelf life, and storage solutions.",
    slug: "/community/buying-in-bulk-uk-italian-staples",
    category: "lifestyle",
    image: "/images/bulkessentials.png",
    minutes: 18,
    tags: ["bulk", "pantry", "saving"],
  },
  {
    title: "New in the UK? 12 Italian Cupboard Essentials (No Fridge Needed)",
    description:
      "Essential Italian pantry staples for UK living — shelf-stable ingredients, no fridge required. Perfect for shared kitchens, temporary accommodation or small flats.",
    slug: "/community/italian-essentials",
    category: "lifestyle",
    image: "/images/italian-essentials.png",
    minutes: 14,
    tags: ["pantry", "newcomers"],
  },
  {
    title: "Open a Revolut Account in the UK (2025) — Quick Guide",
    description:
      "Step-by-step guide to opening a Revolut account in the UK for migrants: verification, proof-of-address, payroll, fees and troubleshooting (2025).",
    slug: "/community/life-in-uk/banking/open-revolut-account-uk-2025",
    category: "banking",
    image: "/images/revolut-hero-3840x1280.png",
    minutes: 9,
    tags: ["banking"],
  },
  {
    title: "Open a Monzo Account in the UK (2025) — Guide for Migrants",
    description:
      "How to sign up for Monzo from the UK: ID & liveness checks, receiving your debit card, proof-of-address options and common signup issues.",
    slug: "/community/life-in-uk/banking/open-monzo-account-uk-2025",
    category: "banking",
    image: "/images/monzo-account-uk-hero-3840x1280.png",
    minutes: 9,
    tags: ["banking"],
  },
  {
    title: "Open a Starling Account in the UK (2025) — Guide for Migrants",
    description:
      "Starling Bank walkthrough for migrants: setup, FSCS protection, card delivery, business options and troubleshooting (2025).",
    slug: "/community/life-in-uk/banking/open-starling-account-uk-2025",
    category: "banking",
    image: "/images/starling-hero-3840x1280.png",
    minutes: 9,
    tags: ["banking"],
  },
  {
    title: "Finding Affordable Housing in London (2025): Guide for New Arrivals",
    description:
      "Practical advice for finding safe, affordable housing in London: where to search, referencing, deposit protection, avoiding scams and emergency help.",
    slug: "/community/life-in-uk/finding-affordable-housing-london-2025",
    category: "housing",
    image: "/images/housing-london-hero-3840x1280.png",
    minutes: 16,
    tags: ["housing", "london"],
  },
  {
    title: "Navigating NHS Healthcare as an Italian in the UK (2025)",
    description:
      "How Italians and EU nationals can register with a GP, get an NHS number, access interpreters, urgent care, prescriptions and GHIC guidance.",
    slug: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025",
    category: "health",
    image: "/images/nhs-healthcare-italians-uk-hero-3840x1280.png",
    minutes: 15,
    tags: ["health", "NHS"],
  },
  {
    title:
      "Italian Passport in the UK (2025): Documents, Preparation & What to Expect",
    description:
      "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.",
    slug: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
    category: "bureaucracy-guides",
    image: "/images/italian-passport-uk-hero-3840x1280.png",
    minutes: 17,
    tags: ["passport", "consulate"],
  },
  {
    title:
      "Italian Electronic ID Card (CIE) in the UK (2025): Eligibility, Documents, Booking & Uses",
    description:
      "Complete guide to the Italian CIE from the UK: who can apply, required documents, how to book, fingerprints, minors, fees, and how to use the CIE for digital services (SPID/CIE ID).",
    slug: "/community/bureaucracy-guides/italian-cie-id-card-uk",
    category: "bureaucracy-guides",
    image: "/images/cie-hero-3840x1280.png",
    minutes: 18,
    tags: ["CIE", "AIRE", "SPID"],
  },
  {
    title:
      "Registering UK Birth/Marriage/Divorce in Italy (2025): Documents, Apostille & Consular Transcriptions",
    description: "",
    slug: "/community/bureaucracy-guides/register-uk-events-with-italy",
    category: "bureaucracy-guides",
    image: "/images/register-events-hero-3840x1280.png",
    minutes: 12,
    tags: ["apostille", "consulate"],
  },
  {
    title:
      "Exchange Italian Driving Licence for a UK Licence (2025): DVLA Steps, Documents & Timelines",
    description: "",
    slug: "/community/life-in-uk/exchange-italian-driving-licence-uk",
    category: "life-in-uk",
    image: "/images/italian-licence-exchange-hero-3840x1280.png",
    minutes: 10,
    tags: ["DVLA"],
  },
  {
    title:
      "National Insurance Number (NIN) for Italians in the UK: Apply, Replace & Timelines (2025)",
    description: "",
    slug: "/community/life-in-uk/national-insurance-number-uk-italians",
    category: "life-in-uk",
    image: "/images/nationalinsurance.png",
    minutes: 9,
    tags: ["NIN", "work"],
  },
  {
    title:
      "Loneliness to Belonging (2025): A 30-Day Community Plan for Migrants in the UK",
    description: "",
    slug: "/community/mental-health/loneliness-belonging-uk-30-day-plan",
    category: "mental-health",
    image: "/images/loneliness-belonging-uk-30day-hero-3840x1280.png",
    minutes: 13,
    tags: ["community", "mental health"],
  },
  {
    title:
      "NHS Mental Health Support in the UK (2025): How to Access Help, Self-Referral & What to Expect",
    description: "",
    slug: "/community/mental-health/nhs-mental-health-access-uk",
    category: "mental-health",
    image: "/images/nhs-mental-health-access-hero-3840x1280.png",
    minutes: 15,
    tags: ["NHS", "mental health"],
  },
  {
    title:
      "AIRE Updates from the UK (2025): Change Address, Marriage, Birth, Name — FAST IT Guide",
    description: "",
    slug: "/community/bureaucracy-guides/keep-aire-up-to-date-uk",
    category: "bureaucracy-guides",
    image: "/images/aire-updates-hero-3840x1280.png",
    minutes: 12,
    tags: ["AIRE", "FAST IT"],
  },
  {
    title:
      "AIRE Registration from the UK (2025): FAST IT Steps, Proofs & Common Errors",
    description: "",
    slug: "/community/bureaucracy-guides/aire-registration-uk",
    category: "bureaucracy-guides",
    image: "/images/aire-registration-hero-3840x1280.png",
    minutes: 14,
    tags: ["AIRE", "FAST IT"],
  },
];

// ---------- Helpers ----------
function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
function toBlogJSONLD(list: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Resinaro Community Knowledge Hub",
    "url": "https://www.resinaro.com/community",
    "blogPost": list.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "description": p.description,
      "url": `https://www.resinaro.com${p.slug}`,
      "image": p.image
        ? `https://www.resinaro.com${p.image}`
        : "https://www.resinaro.com/og-default.png",
      "dateModified": p.updatedAt || undefined,
      "author": { "@type": "Organization", "name": "Resinaro" },
    })),
  };
}

// ---------- Page ----------
export default async function CommunityHub({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | undefined>>;
}) {
  const resolved = ((await Promise.resolve(searchParams)) ||
    {}) as Record<string, string | undefined>;
  const q = resolved.q?.toLowerCase().trim() || "";
  const category = resolved.category || "";
  const tag = resolved.tag || "";
  const sort = resolved.sort || ""; // "title" | "category" | "recent" | "readtime"
  const lang = (resolved.lang as "en" | "it" | undefined) || ""; // future-proof

  // Filter
  let filtered = posts.slice();
  if (q)
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (tag) filtered = filtered.filter((p) => (p.tags || []).includes(tag));
  if (lang) filtered = filtered.filter((p) => (p.lang || "en") === lang);

  // Sort
  if (sort === "title")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "category")
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  else if (sort === "readtime")
    filtered.sort((a, b) => (a.minutes || 0) - (b.minutes || 0));
  else if (sort === "recent")
    filtered.sort(
      (a, b) =>
        new Date(b.updatedAt || "2000-01-01").getTime() -
        new Date(a.updatedAt || "2000-01-01").getTime()
    );

  const categories = unique(posts.map((p) => p.category)).sort();
  const tags = unique(posts.flatMap((p) => p.tags || [])).sort();

  const featured =
    filtered.find((p) => p.featured) ||
    filtered[0]; // sensible fallback if filter trimmed result

  const listWithoutFeatured = filtered.filter((p) => p !== featured);

  const jsonLd = toBlogJSONLD(filtered);

  return (
    <main className="bg-[#F9F6F1] text-gray-800 pb-16">
      {/* HERO */}
      <section className="relative border-b">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/images/community-background.png)' }} aria-hidden="true"></div>
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center drop-shadow-lg">
            Community Knowledge Hub
          </h1>
          <p className="mt-3 text-center text-gray-800 max-w-3xl mx-auto drop-shadow">
            Curated, hands-on guides written by and for Italians and migrants in
            the UK. Practical steps, clear checklists, zero fluff.
          </p>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <form
        className="sticky top-14 z-10 bg-[#F9F6F1]/90 backdrop-blur supports-[backdrop-filter]:bg-[#F9F6F1]/70 border-b"
        role="search"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-3 items-center">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search guides…"
            aria-label="Search community guides"
            className="flex-1 min-w-[220px] rounded-lg border border-gray-300 px-4 py-2"
          />
          <select
            name="category"
            defaultValue={category}
            aria-label="Filter by category"
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            name="tag"
            defaultValue={tag}
            aria-label="Filter by tag"
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            name="sort"
            defaultValue={sort}
            aria-label="Sort results"
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">Sort</option>
            <option value="recent">Recently updated</option>
            <option value="title">Title A–Z</option>
            <option value="category">Category</option>
            <option value="readtime">Shortest read</option>
          </select>

          {/* Language toggle ready (if/when you localise posts) */}
          <select
            name="lang"
            defaultValue={lang}
            aria-label="Language"
            className="rounded-lg border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">EN + IT</option>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-green-800 text-white px-5 py-2 font-medium hover:bg-green-900"
          >
            Apply
          </button>
          <Link
            href="/community"
            className="text-sm underline text-gray-600 hover:text-green-900"
          >
            Reset
          </Link>
        </div>
      </form>

      {/* COUNTS */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b py-4">
          <h2 className="text-xl md:text-2xl font-semibold text-green-900">
            {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
            {category ? ` in ${category}` : ""}
            {tag ? ` · ${tag}` : ""}
            {q ? ` · “${q}”` : ""}
          </h2>
          <p className="text-sm text-gray-600">Fresh, practical and free.</p>
        </div>
      </div>

      {/* FEATURED CARD */}
      {featured && (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <Link
            href={featured.slug}
            className="block rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={featured.image || "/images/resinaro-general.png"}
                alt={featured.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8 text-white">
                <span className="inline-block text-[11px] bg-emerald-600/90 px-2 py-1 rounded">
                  Featured
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                  {featured.title}
                </h3>
                <p className="mt-1 max-w-3xl text-sm md:text-base opacity-95 line-clamp-2">
                  {featured.description}
                </p>
                <div className="mt-2 text-xs opacity-80">
                  {featured.minutes ? `${featured.minutes} min read · ` : ""}
                  {featured.updatedAt ? `Updated ${featured.updatedAt}` : ""}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* GRID */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {listWithoutFeatured.length === 0 ? (
          <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
            No posts match your filters. Try clearing some filters above.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listWithoutFeatured.map((post, i) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-44">
                  <Image
                    src={post.image || "/images/resinaro-general.png"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {post.category}
                    </span>
                    {post.updatedAt && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        Updated {post.updatedAt}
                      </span>
                    )}
                    {post.minutes && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {post.minutes} min
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-green-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                    {post.description || "Read the full guide →"}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-gray-50 border text-gray-600"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 text-sm font-medium text-green-800 group-hover:underline">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Curated bundles */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-xl border bg-white p-5">
          <h3 className="text-lg font-semibold text-green-900">
            Quick bundles
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/community?tag=pantry"
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              Italian Kitchen
            </Link>
            <Link
              href="/community?category=housing"
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              Housing & Utilities
            </Link>
            <Link
              href="/community?category=bureaucracy-guides"
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              Consular & Documents
            </Link>
            <Link
              href="/community?category=banking"
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              Banking & Money
            </Link>
            <Link
              href="/community?category=health"
              className="text-sm px-3 py-1 rounded-full border hover:border-green-700 hover:text-green-900"
            >
              Health & NHS
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SEO structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
