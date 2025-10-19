// app/directory/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { listingsByCityAndCategory, type Listing } from "@/data/directory";
import { Suspense } from "react";

export const revalidate = 86400; // 60 * 60 * 24

export const metadata: Metadata = {
  title: "Italian Directory (UK) | Resinaro",
  description:
    "Looking for something Italian near you? Find the best Italian restaurants, delis and shops across UK cities—handpicked by Resinaro.",
  alternates: { canonical: "/directory" },
};

export default function DirectoryIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Header />

      {/* Filters and list are in a suspense boundary to avoid blocking TTFB */}
      <Suspense>
        <DirectoryIndexContent />
      </Suspense>

      <SubmitCta />
    </div>
  );
}

/* ---------------- content split ---------------- */
function DirectoryIndexContent() {
  const cityKeys = Object.keys(listingsByCityAndCategory || {});
  const cities = cityKeys.map((key) => ({
    key,
    label: capitalize(key),
    categories: Object.keys(listingsByCityAndCategory[key] || {}),
  }));

  const cityItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      url: `/directory/${c.key}`,
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityItemListSchema) }}
      />

      {/* Filter bar */}
      <FilterBar />

      {/* City grid */}
      <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cities.map((city) => {
          const cityData = listingsByCityAndCategory[city.key] as Record<
            string,
            Listing[]
          >;
          const firstImage =
            cityData?.restaurants?.[0]?.image ||
            cityData?.delis?.[0]?.image ||
            cityData?.shops?.[0]?.image ||
            "/images/resinaro-general.png";

          const counts = {
            restaurants: cityData?.restaurants?.length ?? 0,
            delis: cityData?.delis?.length ?? 0,
            shops: cityData?.shops?.length ?? 0,
          };

          return (
            <li
              key={city.key}
              className="rounded-2xl border bg-white/70 shadow-sm transition hover:shadow-md"
            >
              <Link href={`/directory/${city.key}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={firstImage}
                    alt={`${city.label} Italian directory`}
                    fill
                    className="rounded-t-2xl object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={false}
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{city.label}</h2>
                  <Link
                    href={`/directory/${city.key}`}
                    className="text-sm underline underline-offset-4 hover:text-foreground"
                  >
                    Open guide
                  </Link>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  The best Italian places in {city.label}. Restaurants for nights
                  out, delis for fresh counters, and shops for your pantry.
                </p>

                {/* Category chips with counts */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["restaurants", "delis", "shops"] as const).map((cat) => {
                    const has = city.categories.includes(cat);
                    const count = counts[cat];
                    return (
                      <Link
                        key={cat}
                        href={`/directory/${city.key}/${cat}`}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          has ? "hover:bg-emerald-50" : "opacity-50"
                        }`}
                        aria-disabled={!has}
                      >
                        {capitalize(cat)}
                        {count ? <span className="ml-1 opacity-70">({count})</span> : null}
                      </Link>
                    );
                  })}
                </div>

                {/* Quick preview */}
                <div className="mt-4 space-y-2">
                  {(["restaurants", "delis", "shops"] as const).map((cat) => {
                    const list = (cityData?.[cat] || []).slice(0, 2);
                    if (!list.length) return null;
                    return (
                      <div key={cat} className="text-sm">
                        <p className="mb-1 font-medium">{capitalize(cat)}:</p>
                        <ul className="flex flex-wrap gap-x-3 text-muted-foreground">
                          {list.map((l) => (
                            <li key={l.slug} className="truncate">
                              <a
                                className="underline underline-offset-4 hover:text-foreground"
                                href={l.website || l.mapsUrl || "#"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {l.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <Link
                    href={`/directory/${city.key}`}
                    className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm hover:bg-emerald-50"
                  >
                    View {city.label} picks
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* ---------------- UI bits ---------------- */
function Header() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <ol className="mb-3 flex flex-wrap gap-1 text-sm text-muted-foreground">
          <li className="flex items-center">
            <span className="hover:text-foreground">Directory</span>
          </li>
        </ol>
      </nav>

      {/* Hero / lead copy */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Find anything Italian in the UK
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
          Looking for real Italian flavour—wherever you are? You’re in the right
          place. Our city guides highlight the{" "}
          <strong>best-reviewed restaurants</strong>, authentic{" "}
          <strong>delis</strong>, and stocked <strong>Italian shops</strong>.
          Updated regularly with community tips and links to menus, maps and
          contact details.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs">
          <span className="rounded-full bg-emerald-600/90 px-2 py-0.5 font-semibold text-white">
            Local Picks
          </span>
          <span className="text-muted-foreground">
            Hand-checked • Community-guided
          </span>
        </div>
      </header>
    </>
  );
}

function FilterBar() {
  // Pure clientless filter UI: simple GET form with q param (city search)
  // We avoid JS here to keep it fast; Next will render the same page.
  return (
    <form className="mx-auto max-w-3xl">
      <label className="sr-only" htmlFor="q">
        Search cities
      </label>
      <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
        <svg
          aria-hidden
          className="h-4 w-4 opacity-60"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m21 21-4.3-4.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          id="q"
          name="q"
          placeholder="Search cities (e.g., Leeds, Manchester)…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          defaultValue={
            typeof window === "undefined"
              ? ""
              : new URLSearchParams(window.location.search).get("q") || ""
          }
        />
        <button className="rounded-lg border px-3 py-1 text-xs hover:bg-emerald-50">
          Search
        </button>
      </div>
      <SmallNote />
    </form>
  );
}

function SmallNote() {
  return (
    <p className="mt-2 text-center text-xs text-muted-foreground">
      Tip: use the global search in the top navbar to find{" "}
      <em>specific places</em>, guides and services across the whole site.
    </p>
  );
}

function SubmitCta() {
  return (
    <section className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6">
      <h3 className="text-2xl font-semibold">
        Can’t find your city—or want to be featured?
      </h3>
      <p className="mt-1 text-muted-foreground">
        We’re adding new areas and businesses all the time. Tell us what’s
        missing or apply for a feature slot.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          className="inline-flex h-11 items-center justify-center rounded-xl border px-5 text-sm hover:bg-emerald-50"
          href={`mailto:resinaro@proton.me?subject=Add my city to Resinaro Directory&body=City:%0D%0AWhat Italian places should we include:`}
        >
          Request a city
        </a>
        <a
          className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white hover:bg-emerald-700"
          href={`mailto:resinaro@proton.me?subject=Feature my business on Resinaro&body=Business:%0D%0ACity:%0D%0ACategory:%0D%0AWebsite:%0D%0APhone:`}
        >
          Feature my business
        </a>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function capitalize(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}
