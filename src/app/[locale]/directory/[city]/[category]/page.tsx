// src/app/[locale]/directory/[city]/[category]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CopyLinkButton from "@/components/CopyLinkButton";
import {
  cities,
  listingsByCityAndCategory,
  type Listing,
} from "@/data/directory";
import { locales, type Locale } from "@/i18n";

// Rebuild daily for freshness
export const revalidate = 86400;

type RouteParams = {
  locale: Locale | string;
  city: string;
  category: string;
};

const CATEGORY_KEYS = ["restaurants", "delis", "shops"] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[number];

const DIRECTORY_LAST_UPDATED = "November 2025";

/* ──────────────────────────────
   Metadata helpers
────────────────────────────── */

const metaMessages = {
  en: {
    title: (city: string, catLabel: string) =>
      `Best ${catLabel} in ${city} | Resinaro`,
    description: (city: string, catLabel: string) =>
      `Discover the best ${catLabel.toLowerCase()} in ${city}. Handpicked Italian places with maps, menus and contact details, curated by Resinaro.`,
  },
  it: {
    title: (city: string, catLabel: string) =>
      `I migliori ${catLabel.toLowerCase()} a ${city} | Directory Resinaro`,
    description: (city: string, catLabel: string) =>
      `Scopri i migliori ${catLabel.toLowerCase()} a ${city}. Selezione di locali italiani con mappe, menu e contatti, curata da Resinaro.`,
  },
};

export async function generateStaticParams() {
  const params: Array<{ locale: Locale; city: string; category: string }> = [];
  for (const locale of locales as readonly Locale[]) {
    for (const city of cities) {
      const categories = Object.keys(
        listingsByCityAndCategory[city] ?? {}
      );
      categories.forEach((category) =>
        params.push({ locale, city, category })
      );
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams | Promise<RouteParams>;
}): Promise<Metadata> {
  const { locale, city, category } = await Promise.resolve(params);
  const resolvedLocale: Locale =
    (locale as Locale) === "it" ? "it" : "en";

  const cityCap = capitalize(city);
  const categoryKey = category.toLowerCase();
  const catKey = normalizeCategoryKey(categoryKey);
  const catLabel = getCategoryLabel(resolvedLocale, catKey ?? categoryKey);

  const meta = metaMessages[resolvedLocale];
  const prefix = `/${resolvedLocale}`;

  return {
    title: meta.title(cityCap, catLabel),
    description: meta.description(cityCap, catLabel),
    alternates: {
      canonical: `${prefix}/directory/${city}/${category}`,
      languages: {
        "en-GB": `/en/directory/${city}/${category}`,
        "it-IT": `/it/directory/${city}/${category}`,
      },
    },
    openGraph: {
      title: meta.title(cityCap, catLabel),
      description: meta.description(cityCap, catLabel),
      type: "article",
    },
  };
}

/* ──────────────────────────────
   Page component
────────────────────────────── */

export default async function DirectoryCategoryPage({
  params,
}: {
  params: RouteParams | Promise<RouteParams>;
}) {
  const { locale, city, category } = await Promise.resolve(params);
  const resolvedLocale: Locale =
    (locale as Locale) === "it" ? "it" : "en";

  const cityKey = city.toLowerCase();
  const categoryKey = category.toLowerCase();

  const cityData = listingsByCityAndCategory[cityKey];
  const items = cityData?.[categoryKey];

  if (!items || items.length === 0) notFound();

  const cityCap = capitalize(cityKey);
  const catKey = normalizeCategoryKey(categoryKey);
  const categoryLabel = getCategoryLabel(
    resolvedLocale,
    catKey ?? categoryKey
  );

  const prefix = `/${resolvedLocale}`;

  // JSON-LD ItemList for this category
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: b.website || b.mapsUrl,
      name: b.name,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name:
          resolvedLocale === "it" ? "Directory italiana" : "Directory",
        item: `${prefix}/directory`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cityCap,
        item: `${prefix}/directory/${cityKey}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${prefix}/directory/${cityKey}/${categoryKey}`,
      },
    ],
  };

  const isIt = resolvedLocale === "it";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Lead / value intro */}
      <div className="mb-6">
        <Breadcrumbs
          locale={resolvedLocale}
          crumbs={[
            {
              label: isIt ? "Directory italiana" : "Directory",
              href: `${prefix}/directory`,
            },
            {
              label: cityCap,
              href: `${prefix}/directory/${cityKey}`,
            },
            {
              label: categoryLabel,
              href: `${prefix}/directory/${cityKey}/${categoryKey}`,
            },
          ]}
        />
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs">
          <span className="rounded-full bg-emerald-600/90 px-2 py-0.5 font-semibold text-white">
            {isIt ? "Scelte locali" : "Local picks"}
          </span>
          <span className="text-muted-foreground">
            {isIt
              ? "Non sponsorizzato • Guidato dalla community"
              : "Not sponsored • Community-guided"}
          </span>
        </div>
      </div>

      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {isIt
            ? `I migliori ${categoryLabel.toLowerCase()} a ${cityCap}`
            : `Best ${categoryLabel.toLowerCase()} in ${cityCap}`}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isIt ? (
            <>
              Abbiamo selezionato{" "}
              <strong>{items.length}</strong>{" "}
              {items.length === 1 ? "posto" : "posti"} in questa
              categoria a {cityCap}. Sono locali italiani o in stile
              italiano dove la community torna spesso.
            </>
          ) : (
            <>
              We&apos;ve picked <strong>{items.length}</strong>{" "}
              {items.length === 1 ? "place" : "places"} in this
              category in {cityCap}. These are Italian or Italian-style
              spots that our community goes back to again and again.
            </>
          )}
        </p>

        {/* Quick picks that jump to cards */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {items.map((b) => (
            <a
              key={b.slug}
              href={`#${b.slug}`}
              className="rounded-full border bg-white px-3 py-1 text-xs hover:bg-emerald-50"
            >
              {b.name}
            </a>
          ))}
        </div>

        {/* Extra value text */}
        <p className="mx-auto mt-5 max-w-3xl text-balance text-xs text-muted-foreground">
          {isIt ? (
            <>
              Come scegliamo questi posti: recensioni recenti e
              costanti, menu con vera impronta italiana e un servizio
              che invoglia a tornare. Gli orari e i menu possono
              cambiare: controlla sempre il sito o i social prima di
              andare.
            </>
          ) : (
            <>
              How we choose these places: steady recent reviews,
              Italian-style menus and service that makes people want to
              come back. Opening hours and menus can change – always
              double-check their website or socials before you go.
            </>
          )}
        </p>
      </header>

      {/* Cards */}
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((b, index) => (
          <li
            id={b.slug}
            key={b.slug}
            className="rounded-2xl border bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={b.image || "/images/resinaro-general.png"}
                alt={b.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-semibold text-white">
                #{index + 1}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold">{b.name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {b.short}
                  </p>
                </div>
                <Badges
                  badges={b.badges}
                  locale={resolvedLocale}
                />
              </div>

              <div className="mt-3 space-y-1 text-sm">
                {b.address && (
                  <p className="text-xs">📍 {b.address}</p>
                )}
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {b.price && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px]">
                      {b.price}
                    </span>
                  )}
                  {b.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {b.phone && (
                  <p className="text-xs">☎️ {b.phone}</p>
                )}
                <div className="mt-1 flex flex-wrap gap-3 text-xs">
                  {b.website && (
                    <Link
                      href={b.website}
                      className="underline underline-offset-4 hover:text-foreground"
                      target="_blank"
                    >
                      {isIt ? "Sito web" : "Website"}
                    </Link>
                  )}
                  {b.menuUrl && (
                    <Link
                      href={b.menuUrl}
                      className="underline underline-offset-4 hover:text-foreground"
                      target="_blank"
                    >
                      {isIt ? "Menu" : "Menu"}
                    </Link>
                  )}
                  {b.mapsUrl && (
                    <Link
                      href={b.mapsUrl}
                      className="underline underline-offset-4 hover:text-foreground"
                      target="_blank"
                    >
                      {isIt ? "Mappa" : "Maps"}
                    </Link>
                  )}
                  <CopyLinkButton
                    path={`${prefix}/directory/${cityKey}/${categoryKey}#${b.slug}`}
                    label={
                      isIt
                        ? `Copia link per ${b.name}`
                        : `Copy link to ${b.name}`
                    }
                    className="text-xs text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                  >
                    {isIt ? "Condividi" : "Share"}
                  </CopyLinkButton>
                </div>
              </div>

              {/* Review snippet */}
              {b.review && (
                <blockquote className="mt-4 rounded-xl bg-slate-50 p-3 text-xs">
                  “{b.review.snippet}”
                  <footer className="mt-1 text-[11px] text-muted-foreground">
                    — {b.review.author} · {b.review.source}
                  </footer>
                </blockquote>
              )}

              {/* Per-item JSON-LD (LocalBusiness / Restaurant / Store) */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    toLocalBusinessSchema(
                      b,
                      catKey ?? categoryKey
                    )
                  ),
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* How we choose */}
      <section className="mt-10 rounded-2xl border bg-white/80 p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          {isIt
            ? "Come scegliamo questi posti"
            : "How we choose these places"}
        </h2>
        <div className="mt-3 grid gap-4 text-xs md:grid-cols-3">
          <div>
            <h3 className="font-medium">
              {isIt ? "Recensioni recenti" : "Recent reviews"}
            </h3>
            <p className="mt-1 text-muted-foreground">
              {isIt
                ? "Guardiamo al quadro generale delle recensioni negli ultimi mesi, non solo a una settimana virale."
                : "We look at the overall review pattern over recent months, not just one viral weekend."}
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              {isIt
                ? "Impronta italiana"
                : "Italian flavour first"}
            </h3>
            <p className="mt-1 text-muted-foreground">
              {isIt
                ? "Diamo priorità a locali con menu italiani o in stile italiano, ingredienti curati e atmosfera adatta."
                : "We prioritise Italian or Italian-inspired menus, good ingredients and the right atmosphere."}
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              {isIt
                ? "Aggiornata nel tempo"
                : "Kept up to date"}
            </h3>
            <p className="mt-1 text-muted-foreground">
              {isIt
                ? "Se un locale chiude, cambia gestione o peggiora nettamente, lo rimuoviamo o aggiorniamo la guida."
                : "If a place closes, changes ownership or drops significantly, we remove it or update the guide."}
            </p>
          </div>
        </div>
      </section>

      {/* Helpful local info */}
      <section className="mt-8 rounded-2xl border bg-white/80 p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          {isIt ? "Prima di andare" : "Before you go"}
        </h2>
        <div className="mt-3 grid gap-6 text-xs md:grid-cols-3">
          <div>
            <h3 className="font-medium">
              {isIt ? "Prenotazioni" : "Booking tips"}
            </h3>
            <ul className="mt-2 list-disc pl-4 text-muted-foreground">
              <li>
                {isIt
                  ? "Per i weekend prenota con qualche giorno di anticipo."
                  : "For weekends, book a few days in advance."}
              </li>
              <li>
                {isIt
                  ? "Segnala allergie o esigenze particolari quando prenoti."
                  : "Mention allergies or special requirements when you book."}
              </li>
              <li>
                {isIt
                  ? "Per tavoli all’esterno o gruppi numerosi, chiama prima."
                  : "For outdoor tables or large groups, call ahead."}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">
              {isIt ? "Fascia di prezzo" : "Price guide"}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {isIt
                ? "Indicativamente: £ per locali informali, ££ per trattorie e pizzerie, £££ per serate speciali."
                : "Roughly: £ for casual spots, ££ for trattorias & pizzerias, £££ for special occasions."}
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              {isIt ? "Altre opzioni" : "More options"}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {isIt
                ? "Se vuoi esplorare anche altri posti, puoi sempre cercare una panoramica completa su Google Maps."
                : "If you want to explore beyond our picks, you can always get a full overview on Google Maps."}{" "}
              <Link
                href={`https://www.google.com/maps/search/italian+${encodeURIComponent(
                  categoryLabel.toLowerCase()
                )}+${encodeURIComponent(cityCap)}`}
                target="_blank"
                className="underline underline-offset-4"
              >
                {isIt
                  ? "Vedi su Google Maps"
                  : "View on Google Maps"}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Back to city + feature */}
      <section className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            {isIt
              ? `Vuoi vedere anche le altre categorie italiane a ${cityCap}?`
              : `Want to see other Italian categories in ${cityCap}?`}
          </p>
          <Link
            href={`${prefix}/directory/${cityKey}`}
            className="inline-flex items-center text-xs font-medium underline underline-offset-4 hover:text-foreground"
          >
            {isIt
              ? `Torna alla guida italiana di ${cityCap}`
              : `Back to the Italian guide for ${cityCap}`}
          </Link>
        </div>
        <FeatureBlock
          locale={resolvedLocale}
          city={cityCap}
          categoryLabel={categoryLabel}
          categoryKey={catKey ?? categoryKey}
        />
      </section>
    </div>
  );
}

/* ──────────────────────────────
   UI helpers
────────────────────────────── */

function Breadcrumbs({
  crumbs,
  locale,
}: {
  locale: Locale;
  crumbs: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1 text-sm text-muted-foreground">
        {crumbs.map((c, i) => (
          <li key={`${locale}-${c.href}`} className="flex items-center">
            {i > 0 && <span className="mx-1">/</span>}
            <Link className="hover:text-foreground" href={c.href}>
              {c.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Badges({
  badges,
  locale,
}: {
  badges?: Listing["badges"];
  locale: Locale;
}) {
  if (!badges || badges.length === 0) return null;

  const isIt = locale === "it";
  const labels: Record<
    NonNullable<Listing["badges"]>[number],
    string
  > = {
    "editors-pick": isIt ? "Scelta della redazione" : "Editor’s pick",
    "hand-checked": isIt ? "Verificato da Resinaro" : "Hand-checked",
    community: isIt
      ? "Preferito dalla community"
      : "Community favourite",
  };

  return (
    <div className="flex flex-wrap gap-1">
      {badges.slice(0, 2).map((b) => (
        <span
          key={b}
          className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"
        >
          {labels[b]}
        </span>
      ))}
    </div>
  );
}

function FeatureBlock({
  locale,
  city,
  categoryLabel,
  categoryKey,
}: {
  locale: Locale;
  city: string;
  categoryLabel: string;
  categoryKey: string;
}) {
  const isIt = locale === "it";

  const subject = isIt
    ? `Attività italiana (${categoryLabel}) a ${city}`
    : `Italian business (${categoryLabel}) in ${city}`;

  const body = isIt
    ? `Nome dell'attività:%0D%0ACategoria (es. ${encodeURIComponent(
        categoryKey
      )}):%0D%0AWebsite o social:%0D%0AZone della città coperte:%0D%0APerché pensi di essere adatto alla directory:`
    : `Business name:%0D%0ACategory (e.g. ${encodeURIComponent(
        categoryKey
      )}):%0D%0AWebsite or social:%0D%0AAreas of the city you cover:%0D%0AWhy you'd be a good fit for the directory:`;

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white px-4 py-4 text-xs sm:px-5">
      <h3 className="text-sm font-semibold">
        {isIt
          ? `Gestisci un’attività italiana in questa categoria a ${city}?`
          : `Run an Italian business in this category in ${city}?`}
      </h3>
      <p className="mt-1 text-muted-foreground">
        {isIt ? (
          <>
            La directory di {city} aiuta gli italiani a trovare locali e
            servizi italiani nella loro zona. Inseriamo solo un numero
            limitato di posti per categoria, così chi cerca ti trova
            davvero.
          </>
        ) : (
          <>
            The {city} directory helps Italians find Italian-run
            businesses in their area. We only highlight a limited number
            of places per category so people genuinely looking for
            Italian spots can find you.
          </>
        )}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href={`/${locale}/advertise`}
          className="inline-flex h-9 items-center justify-center rounded-xl bg-emerald-600 px-4 text-xs font-medium text-white hover:bg-emerald-700"
        >
          {isIt
            ? "Richiedi di essere inserito"
            : "Apply to be featured"}
        </Link>
        <a
          href={`mailto:resinaro@proton.me?subject=${encodeURIComponent(
            subject
          )}&body=${body}`}
          className="inline-flex h-9 items-center justify-center rounded-xl border px-4 text-xs hover:bg-emerald-50"
        >
          {isIt ? "Scrivici via email" : "Email us details"}
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────
   Helpers
────────────────────────────── */

function normalizeCategoryKey(
  key: string
): CategoryKey | null {
  if (key === "restaurants") return "restaurants";
  if (key === "delis") return "delis";
  if (key === "shops") return "shops";
  return null;
}

function getCategoryLabel(
  locale: Locale,
  cat: CategoryKey | string
): string {
  const isIt = locale === "it";
  if (cat === "restaurants") {
    return isIt ? "Ristoranti italiani" : "Italian restaurants";
  }
  if (cat === "delis") {
    return isIt
      ? "Gastronomie e bar italiani"
      : "Italian delis & cafés";
  }
  if (cat === "shops") {
    return isIt
      ? "Negozi e alimentari italiani"
      : "Italian food shops";
  }
  // Fallback
  return capitalize(cat);
}

function toLocalBusinessSchema(
  b: Listing,
  category: CategoryKey | string
) {
  let type: string = "LocalBusiness";
  if (category === "restaurants" || category === "delis") {
    type = "Restaurant";
  } else if (category === "shops") {
    type = "Store";
  }

  const sameAs = [b.website, b.mapsUrl].filter(Boolean);
  const servesCuisine =
    category === "restaurants" || category === "delis"
      ? "Italian"
      : undefined;
  const priceRange = b.price ? b.price : undefined;

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: b.name,
    image: b.image,
    url: b.website || undefined,
    telephone: b.phone || undefined,
    address: b.address
      ? { "@type": "PostalAddress", streetAddress: b.address }
      : undefined,
    sameAs,
    priceRange,
    servesCuisine,
  };
}

function capitalize(s: string) {
  return s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
