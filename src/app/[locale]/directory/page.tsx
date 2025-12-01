// src/app/[locale]/directory/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import {
  listingsByCityAndCategory,
  type Listing,
} from "@/data/directory";

export const revalidate = 86400; // 24h

export const metadata: Metadata = {
  title: "Italian Directory (UK) | Resinaro",
  description:
    "Discover the best Italian restaurants, delis and food shops in UK cities. Browse Resinaro’s hand-checked directory of Italian places across Manchester, Leeds, Bradford and more.",
  alternates: {
    canonical: "/directory",
    languages: {
      "en-GB": "/en/directory",
      "it-IT": "/it/directory",
    },
  },
};

type Locale = "en" | "it";
type CategoryFilter = "all" | "restaurants" | "delis" | "shops";

type DirectoryIndexPageProps = {
  params: { locale: Locale };
  searchParams?: Record<string, string | string[] | undefined>;
};

const DIRECTORY_LAST_UPDATED = "November 2025";

export default function DirectoryIndexPage({
  params,
  searchParams = {},
}: DirectoryIndexPageProps) {
  const locale = params.locale;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      <Header locale={locale} lastUpdated={DIRECTORY_LAST_UPDATED} />
      <Suspense>
        <DirectoryIndexContent locale={locale} searchParams={searchParams} />
      </Suspense>
      <HowWePickSection locale={locale} />
      <SubmitCta locale={locale} />
    </div>
  );
}

type CityCardData = {
  key: string;
  label: string;
  categories: ("restaurants" | "delis" | "shops")[];
  data: Record<string, Listing[]>;
  firstImage: string;
  counts: {
    restaurants: number;
    delis: number;
    shops: number;
  };
  totalCount: number;
};

function DirectoryIndexContent({
  locale,
  searchParams,
}: {
  locale: Locale;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const isIt = locale === "it";

  // Category from query
  const catParam = Array.isArray(searchParams.cat)
    ? searchParams.cat[0]
    : searchParams.cat;
  const selectedCategory: CategoryFilter =
    catParam === "restaurants" ||
    catParam === "delis" ||
    catParam === "shops"
      ? catParam
      : "all";

  // Search query from query string
  const qParam = Array.isArray(searchParams.q)
    ? searchParams.q[0]
    : searchParams.q;
  const queryRaw = (qParam || "").toString().trim();
  const query = queryRaw.toLowerCase();

  const cityEntries = Object.entries(listingsByCityAndCategory || {});

  const allCities: CityCardData[] = cityEntries.map(([key, value]) => {
    const cityData = value as Record<string, Listing[]>;
    const restaurants = cityData.restaurants || [];
    const delis = cityData.delis || [];
    const shops = cityData.shops || [];

    const counts = {
      restaurants: restaurants.length,
      delis: delis.length,
      shops: shops.length,
    };

    const totalCount =
      counts.restaurants + counts.delis + counts.shops;

    const firstImage =
      restaurants[0]?.image ||
      delis[0]?.image ||
      shops[0]?.image ||
      "/images/resinaro-general.png";

    const categories = Object.keys(cityData || {}) as (
      | "restaurants"
      | "delis"
      | "shops"
    )[];

    return {
      key,
      label: capitalize(key),
      categories,
      data: cityData,
      firstImage,
      counts,
      totalCount,
    };
  });

  // Sort all cities alphabetically for schema + "All cities" section
  const allCitiesSorted = [...allCities].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  // Apply filters for the UI
  const filteredCities = allCitiesSorted.filter((city) => {
    const matchesQuery =
      !query ||
      city.label.toLowerCase().includes(query) ||
      city.key.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "all"
        ? city.totalCount > 0
        : city.counts[selectedCategory] > 0;

    return matchesQuery && matchesCategory;
  });

  // Featured cities: top 3 by total listings within the filtered set
  const featuredCities =
    filteredCities.length >= 3
      ? [...filteredCities]
          .sort((a, b) => b.totalCount - a.totalCount)
          .slice(0, 3)
      : [];

  const featuredKeys = new Set(featuredCities.map((c) => c.key));
  const remainingCities = filteredCities.filter(
    (c) => !featuredKeys.has(c.key)
  );

  // Schema.org – ItemList of all cities
  const cityItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allCitiesSorted.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      url: `/${locale}/directory/${c.key}`,
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isIt ? "Directory italiana" : "Italian Directory",
        item: `/${locale}/directory`,
      },
    ],
  };

  const totalMatching = filteredCities.length;

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityItemListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <SearchAndCategoryBar
        locale={locale}
        selectedCategory={selectedCategory}
        query={queryRaw}
        totalMatches={totalMatching}
        totalCities={allCitiesSorted.length}
      />

      {totalMatching === 0 ? (
        <NoResults locale={locale} />
      ) : (
        <div className="mt-8 space-y-10 lg:space-y-12">
          {featuredCities.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-semibold tracking-tight">
                  {isIt
                    ? "Città in evidenza"
                    : "Featured Italian city guides"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {isIt
                    ? "Basato sul numero di posti italiani nella nostra directory."
                    : "Based on the number of Italian places listed in each city."}
                </p>
              </div>
              <CityGrid
                locale={locale}
                cities={featuredCities}
                variant="featured"
              />
            </section>
          )}

          {remainingCities.length > 0 ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {isIt
                  ? "Tutte le città nella directory"
                  : "Browse all cities in the directory"}
              </h2>
              <CityGrid
                locale={locale}
                cities={remainingCities}
                variant="standard"
              />
            </section>
          ) : featuredCities.length > 0 ? null : (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {isIt
                  ? "Città nella directory"
                  : "Cities in the directory"}
              </h2>
              <CityGrid
                locale={locale}
                cities={filteredCities}
                variant="standard"
              />
            </section>
          )}
        </div>
      )}
    </>
  );
}

function SearchAndCategoryBar({
  locale,
  selectedCategory,
  query,
  totalMatches,
  totalCities,
}: {
  locale: Locale;
  selectedCategory: CategoryFilter;
  query: string;
  totalMatches: number;
  totalCities: number;
}) {
  const isIt = locale === "it";

  const baseHref = `/${locale}/directory`;

  const buildHref = (cat: CategoryFilter) => {
    const params = new URLSearchParams();
    if (cat !== "all") params.set("cat", cat);
    if (query) params.set("q", query);
    const qs = params.toString();
    return qs ? `${baseHref}?${qs}` : baseHref;
  };

  const countText = isIt
    ? totalMatches === totalCities
      ? `${totalCities} città nella directory`
      : `${totalMatches} città trovate`
    : totalMatches === totalCities
    ? `${totalCities} cities in the directory`
    : `${totalMatches} cities found`;

  return (
    <section className="mt-4 space-y-3 border-b pb-4">
      {/* Category pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              "all",
              "restaurants",
              "delis",
              "shops",
            ] as CategoryFilter[]
          ).map((cat) => {
            const isActive = selectedCategory === cat;
            const label = isIt
              ? cat === "all"
                ? "Tutto"
                : cat === "restaurants"
                ? "Ristoranti"
                : cat === "delis"
                ? "Gastronomie"
                : "Negozi"
              : cat === "all"
              ? "All"
              : capitalize(cat);
            return (
              <Link
                key={cat}
                href={buildHref(cat)}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                  isActive
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">{countText}</p>
      </div>

      {/* Search form */}
      <form
        method="GET"
        className="mx-auto mt-1 max-w-3xl"
        action={baseHref}
      >
        <label className="sr-only" htmlFor="q">
          {isIt ? "Cerca città" : "Search cities"}
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
            defaultValue={query}
            placeholder={
              isIt
                ? "Cerca città (es. Leeds, Manchester)…"
                : "Search cities (e.g., Leeds, Manchester)…"
            }
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          {/* Preserve selected category on search */}
          {selectedCategory !== "all" && (
            <input
              type="hidden"
              name="cat"
              value={selectedCategory}
            />
          )}
          <button className="rounded-lg border px-3 py-1 text-xs hover:bg-emerald-50">
            {isIt ? "Cerca" : "Search"}
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {isIt ? (
            <>
              Suggerimento: usa la ricerca globale nella barra superiore
              per trovare <em>luoghi specifici</em>, guide e servizi in
              tutto il sito.
            </>
          ) : (
            <>
              Tip: use the global search in the top navbar to find{" "}
              <em>specific places</em>, guides and services across the
              site.
            </>
          )}
        </p>
      </form>
    </section>
  );
}

function NoResults({ locale }: { locale: Locale }) {
  const isIt = locale === "it";
  return (
    <section className="mt-8 rounded-2xl border bg-slate-50 px-4 py-6 text-center text-sm text-slate-700 sm:px-6">
      <p className="font-semibold">
        {isIt
          ? "Nessuna città trovata per questa ricerca."
          : "No cities match this search yet."}
      </p>
      <p className="mt-1">
        {isIt
          ? "Prova a rimuovere i filtri oppure scrivici se pensi che manchi una città importante."
          : "Try removing some filters, or tell us if there’s an important city we should add."}
      </p>
      <div className="mt-3 flex justify-center gap-3">
        <Link
          href={`/${locale}/directory`}
          className="inline-flex rounded-full border bg-white px-4 py-1.5 text-xs font-medium hover:bg-slate-100"
        >
          {isIt ? "Pulisci filtri" : "Clear filters"}
        </Link>
        <a
          href={
            isIt
              ? "mailto:resinaro@proton.me?subject=Nuova città per la Directory Resinaro"
              : "mailto:resinaro@proton.me?subject=New city for Resinaro Directory"
          }
          className="inline-flex rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
        >
          {isIt ? "Suggerisci una città" : "Suggest a city"}
        </a>
      </div>
    </section>
  );
}

function CityGrid({
  locale,
  cities,
  variant,
}: {
  locale: Locale;
  cities: CityCardData[];
  variant: "featured" | "standard";
}) {
  const isIt = locale === "it";

  const gridClasses =
    variant === "featured"
      ? "mt-4 grid grid-cols-1 gap-6 md:grid-cols-3"
      : "mt-2 grid grid-cols-1 gap-6 md:grid-cols-3";

  return (
    <ul className={gridClasses}>
      {cities.map((city) => (
        <li
          key={city.key}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <Link
            href={`/${locale}/directory/${city.key}`}
            className="relative block aspect-[16/9]"
          >
            <Image
              src={city.firstImage}
              alt={
                isIt
                  ? `Luoghi italiani a ${city.label}`
                  : `Italian places in ${city.label}`
              }
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
              {isIt
                ? `${city.totalCount} posti italiani`
                : `${city.totalCount} Italian places`}
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {city.label}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isIt ? (
                    <>
                      Ristoranti, gastronomie e negozi italiani a{" "}
                      {city.label}. Guide pensate per italiani nel Regno
                      Unito e per chi ama la cucina italiana.
                    </>
                  ) : (
                    <>
                      Italian restaurants, delis and food shops in{" "}
                      {city.label}. Curated for Italians in the UK and
                      anyone who loves Italian food.
                    </>
                  )}
                </p>
              </div>
              <Link
                href={`/${locale}/directory/${city.key}`}
                className="mt-0.5 text-xs font-medium underline underline-offset-4 hover:text-foreground"
              >
                {isIt ? "Apri guida" : "Open guide"}
              </Link>
            </div>

            {/* Category chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                ["restaurants", "delis", "shops"] as const
              ).map((cat) => {
                const has = city.counts[cat] > 0;
                const label = isIt
                  ? cat === "restaurants"
                    ? "Ristoranti"
                    : cat === "delis"
                    ? "Gastronomie"
                    : "Negozi"
                  : capitalize(cat);
                return (
                  <Link
                    key={cat}
                    href={`/${locale}/directory/${city.key}/${cat}`}
                    aria-disabled={!has}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] ${
                      has
                        ? "border-slate-200 bg-slate-50 text-slate-800 hover:bg-emerald-50"
                        : "border-slate-100 bg-slate-50/70 text-slate-400"
                    }`}
                  >
                    {label}
                    {has && (
                      <span className="ml-1 opacity-70">
                        ({city.counts[cat]})
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Sample listings */}
            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              {(
                ["restaurants", "delis", "shops"] as const
              ).map((cat) => {
                const list = (city.data?.[cat] || []).slice(0, 2);
                if (!list.length) return null;
                const label = isIt
                  ? cat === "restaurants"
                    ? "Ristoranti"
                    : cat === "delis"
                    ? "Gastronomie"
                    : "Negozi"
                  : capitalize(cat);
                return (
                  <div key={cat}>
                    <p className="font-medium text-foreground">
                      {label}:
                    </p>
                    <ul className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1">
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

            <div className="mt-4 flex flex-1 items-end">
              <Link
                href={`/${locale}/directory/${city.key}`}
                className="inline-flex h-9 items-center justify-center rounded-xl border px-4 text-xs font-medium hover:bg-emerald-50"
              >
                {isIt
                  ? `Vedi i posti di ${city.label}`
                  : `View ${city.label} picks`}
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Header({
  locale,
  lastUpdated,
}: {
  locale: Locale;
  lastUpdated: string;
}) {
  const isIt = locale === "it";
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="mb-3 flex flex-wrap gap-1 text-sm text-muted-foreground">
          <li className="flex items-center">
            <span className="hover:text-foreground">Directory</span>
          </li>
        </ol>
      </nav>
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {isIt
            ? "Trova tutto l’italiano nel Regno Unito"
            : "Find anything Italian in the UK"}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
          {isIt ? (
            <>
              Cerchi ristoranti, gastronomie e negozi italiani in città
              come Manchester, Leeds o Bradford? La directory Resinaro
              raccoglie i luoghi italiani più consigliati, con link a
              menu, mappe e contatti, pensata per italiani nel Regno
              Unito e per chi ama l’Italia.
            </>
          ) : (
            <>
              Looking for Italian restaurants, delis and shops in cities
              like Manchester, Leeds or Bradford? The Resinaro
              directory brings together the most recommended Italian
              places, with links to menus, maps and contact details —
              designed for Italians in the UK and anyone who loves
              Italy.
            </>
          )}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1">
            <span className="rounded-full bg-emerald-600/90 px-2 py-0.5 font-semibold text-white">
              {isIt ? "Scelte locali" : "Local picks"}
            </span>
            <span className="text-muted-foreground">
              {isIt
                ? "Verificate a mano • Guidate dalla comunità"
                : "Hand-checked • Community-guided"}
            </span>
          </div>
          <span className="text-muted-foreground">
            {isIt
              ? `Ultimo aggiornamento: ${lastUpdated}`
              : `Last updated: ${lastUpdated}`}
          </span>
        </div>
      </header>
    </>
  );
}

function HowWePickSection({ locale }: { locale: Locale }) {
  const isIt = locale === "it";
  return (
    <section className="mt-12 space-y-5 border-t pt-8">
      <h2 className="text-xl font-semibold tracking-tight">
        {isIt
          ? "Come selezioniamo i luoghi nella directory"
          : "How we choose places for the directory"}
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        {isIt ? (
          <>
            Resinaro è gestito da italiani che vivono nel Regno Unito. La
            nostra directory non è un elenco automatico: partiamo da
            segnalazioni della community, recensioni pubbliche e visite
            personali quando possibile. Aggiorniamo le schede quando un
            locale chiude, cambia gestione o peggiora in modo
            significativo.
          </>
        ) : (
          <>
            Resinaro is run by Italians living in the UK. Our directory
            is not an automated list: we start from community
            recommendations, public reviews and, when possible, visits
            in person. We update entries when places close, change
            ownership or drop significantly in quality.
          </>
        )}
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <HowWePickCard
          locale={locale}
          title={
            isIt ? "Focus su qualità reale" : "Focused on real quality"
          }
          body={
            isIt
              ? "Diamo priorità ai locali con buon rapporto qualità/prezzo, prodotti autentici e feedback positivi da parte di italiani."
              : "We prioritise places with good value, authentic products and positive feedback from Italians."
          }
        />
        <HowWePickCard
          locale={locale}
          title={
            isIt ? "Pensato per chi vive qui" : "Built for people living here"
          }
          body={
            isIt
              ? "Non solo pizzerie del weekend: includiamo gastronomie, negozi di alimentari, bar e altri luoghi utili nella vita di tutti i giorni."
              : "Not just weekend pizza spots: we also include delis, grocers, cafés and other places useful for everyday life."
          }
        />
        <HowWePickCard
          locale={locale}
          title={
            isIt ? "Aperta alla comunità" : "Open to the community"
          }
          body={
            isIt
              ? "Puoi suggerire nuovi posti o segnalarci aggiornamenti: così la directory migliora per tutti."
              : "You can suggest new places or corrections so the directory keeps getting better for everyone."
          }
        />
      </div>
    </section>
  );
}

function HowWePickCard({
  locale,
  title,
  body,
}: {
  locale: Locale;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border bg-white px-4 py-4 text-sm shadow-sm">
      <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
        <span className="text-xs text-emerald-700">✓</span>
      </div>
      <h3 className="text-sm font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">{body}</p>
    </div>
  );
}

function SubmitCta({ locale }: { locale: Locale }) {
  const isIt = locale === "it";
  return (
    <section className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6">
      <h3 className="text-2xl font-semibold">
        {isIt
          ? "Non trovi la tua città — o vuoi far conoscere la tua attività italiana?"
          : "Can’t see your city yet — or want your Italian business to be discovered?"}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {isIt
          ? "Aggiungiamo nuove zone e attività italiane in modo continuo. Segnalaci ciò che manca o chiedi di inserire il tuo ristorante, negozio o servizio per raggiungere più italiani nel Regno Unito."
          : "We’re constantly adding new areas and Italian-run businesses. Tell us what’s missing or ask to list your restaurant, shop or service so more Italians in the UK can find you."}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          className="inline-flex h-11 items-center justify-center rounded-xl border px-5 text-sm hover:bg-emerald-50"
          href={
            isIt
              ? `mailto:resinaro@proton.me?subject=Aggiungi la mia città alla Directory Resinaro&body=Città:%0D%0ALuoghi italiani da includere:`
              : `mailto:resinaro@proton.me?subject=Add my city to Resinaro Directory&body=City:%0D%0AItalian places you think we should include:`
          }
        >
          {isIt ? "Richiedi una città" : "Request a city"}
        </a>
        <Link
          href={`/${locale}/advertise`}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white hover:bg-emerald-700"
        >
          {isIt ? "Metti in evidenza la tua attività" : "Feature my business"}
        </Link>
      </div>
    </section>
  );
}

/* helpers */
function capitalize(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
