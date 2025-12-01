// src/app/[locale]/directory/[city]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  cities,
  listingsByCityAndCategory,
  type Listing,
} from "@/data/directory";

export const revalidate = 86400;

type Locale = "en" | "it";
type CategoryKey = "restaurants" | "delis" | "shops";

type Params = { locale: Locale; city: string };

const DIRECTORY_LAST_UPDATED = "November 2025";

/* ──────────────────────────────
   Metadata
────────────────────────────── */

const metaCopy = {
  en: {
    title: (city: string) =>
      `${city} Italian Restaurants, Delis & Shops | Resinaro Directory`,
    description: (city: string) =>
      `Discover the best Italian restaurants, delis and food shops in ${city}. Handpicked by Resinaro with maps, menus and contact details for Italians living in the UK.`,
  },
  it: {
    title: (city: string) =>
      `Ristoranti, gastronomie e negozi italiani a ${city} | Directory Resinaro`,
    description: (city: string) =>
      `Scopri i migliori ristoranti, gastronomie e negozi italiani a ${city}. Selezione Resinaro con mappe, menu e contatti utili per gli italiani nel Regno Unito.`,
  },
};

export async function generateStaticParams() {
  // Prebuild for both locales
  return ["en", "it"].flatMap((locale) =>
    cities.map((city) => ({ locale, city }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const city = capitalize(params.city);
  const meta = metaCopy[locale];

  return {
    title: meta.title(city),
    description: meta.description(city),
    alternates: {
      canonical: `/directory/${params.city}`,
      languages: {
        "en-GB": `/en/directory/${params.city}`,
        "it-IT": `/it/directory/${params.city}`,
      },
    },
    openGraph: {
      title: meta.title(city),
      description: meta.description(city),
      type: "article",
    },
  };
}

/* ──────────────────────────────
   Page
────────────────────────────── */

export default function CityDirectoryPage({ params }: { params: Params }) {
  const locale: Locale = params.locale === "it" ? "it" : "en";
  const cityKey = params.city.toLowerCase();
  const cityDataRaw = listingsByCityAndCategory[cityKey];

  if (!cityDataRaw) notFound();

  const city = capitalize(cityKey);
  const orderedCats = orderCategories(Object.keys(cityDataRaw));
  const cityData = cityDataRaw as Record<string, Listing[]>;

  const restaurantsCount = (cityData.restaurants || []).length;
  const delisCount = (cityData.delis || []).length;
  const shopsCount = (cityData.shops || []).length;
  const totalCount = restaurantsCount + delisCount + shopsCount;

  const stats = {
    restaurants: restaurantsCount,
    delis: delisCount,
    shops: shopsCount,
    total: totalCount,
  };

  // Flatten listings for schema
  const allListings: Listing[] = orderedCats.flatMap((cat) => {
    const list = cityData[cat] || [];
    return list;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Directory",
        item: `/${locale}/directory`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city,
        item: `/${locale}/directory/${cityKey}`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allListings.map((listing, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: listing.name,
      url: listing.website || listing.mapsUrl || undefined,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <Breadcrumbs
        locale={locale}
        crumbs={[
          { label: "Directory", href: `/${locale}/directory` },
          { label: city, href: `/${locale}/directory/${cityKey}` },
        ]}
      />

      <CityHero locale={locale} city={city} stats={stats} />

      <KeyStats locale={locale} stats={stats} />

      {/* Category grid */}
      <section className="mt-8 space-y-4 lg:space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">
          {locale === "it"
            ? `Categorie italiane a ${city}`
            : `Italian categories in ${city}`}
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {orderedCats.map((catKey) => {
            const cat = catKey as CategoryKey;
            const items = (cityData[cat] || []) as Listing[];
            const hasItems = items.length > 0;
            const cover = items[0]?.image || "/images/resinaro-general.png";

            return (
              <CategoryCard
                key={cat}
                locale={locale}
                city={city}
                cityKey={cityKey}
                category={cat}
                listings={items}
                cover={cover}
                hasItems={hasItems}
              />
            );
          })}
        </ul>
      </section>

      <HowToUseGuide locale={locale} city={city} />

      <LivingItalianSection locale={locale} city={city} />

      <FeatureCta locale={locale} city={city} />
    </div>
  );
}

/* ──────────────────────────────
   Components
────────────────────────────── */

function CityHero({
  locale,
  city,
  stats,
}: {
  locale: Locale;
  city: string;
  stats: { restaurants: number; delis: number; shops: number; total: number };
}) {
  const isIt = locale === "it";
  const { restaurants, delis, shops, total } = stats;

  return (
    <header className="mt-3 mb-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {isIt
          ? `Ristoranti, gastronomie e negozi italiani a ${city}`
          : `Italian Restaurants, Delis & Shops in ${city}`}
      </h1>
      <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
        {isIt ? (
          <>
            Abbiamo selezionato{" "}
            <strong>{total || "0"} posti italiani</strong> a {city}:{" "}
            <strong>{restaurants}</strong> ristoranti,{" "}
            <strong>{delis}</strong> gastronomie e{" "}
            <strong>{shops}</strong> negozi. Una guida pensata per chi
            vive qui o viene spesso, con luoghi dove gli italiani vanno
            davvero.
          </>
        ) : (
          <>
            We&apos;ve hand-picked{" "}
            <strong>{total || "0"} Italian places</strong> in {city}:{" "}
            <strong>{restaurants}</strong> restaurants,{" "}
            <strong>{delis}</strong> delis and{" "}
            <strong>{shops}</strong> shops. A local-friendly guide for
            people who live here or visit often, focused on spots where
            Italians actually go.
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
              ? "Non sponsorizzato • Guidato dalla community"
              : "Not sponsored • Community-guided"}
          </span>
        </div>
        <span className="text-muted-foreground">
          {isIt
            ? `Ultimo aggiornamento: ${DIRECTORY_LAST_UPDATED}`
            : `Last updated: ${DIRECTORY_LAST_UPDATED}`}
        </span>
      </div>
    </header>
  );
}

function KeyStats({
  locale,
  stats,
}: {
  locale: Locale;
  stats: { restaurants: number; delis: number; shops: number; total: number };
}) {
  const isIt = locale === "it";
  const { restaurants, delis, shops } = stats;

  const cards = [
    {
      label: isIt ? "Ristoranti italiani" : "Italian restaurants",
      value: restaurants,
      note: isIt
        ? "Per cene, pizze e primi piatti."
        : "For dinners, pizza and pasta nights.",
    },
    {
      label: isIt ? "Gastronomie e bar" : "Delis & cafés",
      value: delis,
      note: isIt
        ? "Per pranzo veloce, focacce e piatti pronti."
        : "For quick bites, focaccia and ready-made dishes.",
    },
    {
      label: isIt ? "Negozi e alimentari" : "Shops & groceries",
      value: shops,
      note: isIt
        ? "Per fare la spesa italiana e riempire la dispensa."
        : "For Italian groceries and pantry staples.",
    },
  ];

  return (
    <section className="mt-2 grid gap-3 text-sm md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border bg-white/70 px-4 py-3 text-left shadow-sm"
        >
          <p className="text-xs text-muted-foreground">{card.label}</p>
          <p className="mt-1 text-xl font-semibold">{card.value}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {card.note}
          </p>
        </div>
      ))}
    </section>
  );
}

function CategoryCard({
  locale,
  city,
  cityKey,
  category,
  listings,
  cover,
  hasItems,
}: {
  locale: Locale;
  city: string;
  cityKey: string;
  category: CategoryKey;
  listings: Listing[];
  cover: string;
  hasItems: boolean;
}) {
  const isIt = locale === "it";
  const count = listings.length;
  const catLabel = getCategoryLabel(locale, category);
  const catDescription = getCategoryDescription(locale, category, city);

  const categoryHref = `/${locale}/directory/${cityKey}/${category}`;

  return (
    <li className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={categoryHref} className="relative block aspect-[16/9]">
        <Image
          src={cover}
          alt={
            isIt
              ? `${catLabel} a ${city}`
              : `${catLabel} in ${city}`
          }
          fill
          className="object-cover"
          sizes="(min-width:768px) 33vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
          {isIt
            ? count === 1
              ? "1 posto in guida"
              : `${count} posti in guida`
            : count === 1
            ? "1 place in this guide"
            : `${count} places in this guide`}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">{catLabel}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {catDescription}
            </p>
          </div>
          <Link
            href={categoryHref}
            className="mt-0.5 text-xs font-medium underline underline-offset-4 hover:text-foreground"
          >
            {isIt ? "Apri guida" : "Open guide"}
          </Link>
        </div>

        {hasItems ? (
          <div className="mt-4 space-y-2">
            {listings.slice(0, 3).map((listing, index) => (
              <PreviewRow
                key={listing.slug}
                listing={listing}
                locale={locale}
                rank={index + 1}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs text-muted-foreground">
            {isIt ? (
              <>
                Presto aggiungeremo altri posti in questa categoria. Conosci
                un buon locale italiano a {city}?{" "}
                <a
                  className="underline underline-offset-4"
                  href={`mailto:resinaro@proton.me?subject=Consiglio per ${encodeURIComponent(
                    catLabel
                  )} a ${encodeURIComponent(
                    city
                  )}&body=Nome del posto:%0D%0AIndirizzo:%0D%0APerché lo consigli:`}
                >
                  Segnalalo
                </a>{" "}
                o{" "}
                <Link
                  href={`/${locale}/advertise`}
                  className="underline underline-offset-4"
                >
                  chiedi di essere inserito
                </Link>
                .
              </>
            ) : (
              <>
                We&apos;ll be adding more places in this category soon. Know a
                great Italian spot in {city}?{" "}
                <a
                  className="underline underline-offset-4"
                  href={`mailto:resinaro@proton.me?subject=Recommend ${encodeURIComponent(
                    catLabel
                  )} in ${encodeURIComponent(
                    city
                  )}&body=Place name:%0D%0AAddress:%0D%0AWhy you recommend it:`}
                >
                  Recommend it
                </a>{" "}
                or{" "}
                <Link
                  href={`/${locale}/advertise`}
                  className="underline underline-offset-4"
                >
                  ask to be featured
                </Link>
                .
              </>
            )}
          </div>
        )}

        <div className="mt-4 flex flex-1 items-end">
          <Link
            href={categoryHref}
            className="inline-flex h-9 items-center justify-center rounded-xl border px-4 text-xs font-medium hover:bg-emerald-50"
          >
            {isIt
              ? `Apri guida ${catLabel.toLowerCase()}`
              : `Open ${catLabel.toLowerCase()} guide`}
          </Link>
        </div>
      </div>
    </li>
  );
}

function PreviewRow({
  listing,
  locale,
  rank,
}: {
  listing: Listing;
  locale: Locale;
  rank: number;
}) {
  const isIt = locale === "it";
  const badge =
    rank === 1
      ? isIt
        ? "Scelta top"
        : "Top pick"
      : isIt
      ? "Da provare"
      : "Worth trying";

  return (
    <Link
      href={listing.website || listing.mapsUrl || "#"}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border px-2 py-2 text-xs hover:bg-slate-50"
    >
      <div className="relative h-10 w-10 overflow-hidden rounded-lg">
        <Image
          src={listing.image || "/images/resinaro-general.png"}
          alt={listing.name}
          fill
          className="object-cover transition group-hover:scale-[1.03]"
          sizes="40px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium">{listing.name}</p>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
            {badge}
          </span>
        </div>
        <p className="truncate text-[11px] text-muted-foreground">
          {listing.short || listing.address}
        </p>
      </div>
    </Link>
  );
}

function HowToUseGuide({
  locale,
  city,
}: {
  locale: Locale;
  city: string;
}) {
  const isIt = locale === "it";
  return (
    <section className="mt-10 space-y-3 border-t pt-6">
      <h2 className="text-lg font-semibold tracking-tight">
        {isIt
          ? `Come usare questa guida per ${city}`
          : `How to use this ${city} guide`}
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        {isIt ? (
          <>
            Usa questa pagina come punto di partenza: scegli la categoria
            che ti serve oggi (cena fuori, pranzo veloce, spesa italiana),
            apri la guida dedicata e salva i tuoi posti preferiti.
            Quando amici o parenti ti chiedono “dove si mangia italiano a{" "}
            {city}?”, puoi semplicemente condividere questa pagina.
          </>
        ) : (
          <>
            Use this page as your starting point: pick the category you
            need today (dinner out, quick lunch, weekly shop), open the
            dedicated guide and save your favourite spots. When friends
            ask “where&apos;s good for Italian in {city}?”, you can just
            share this page.
          </>
        )}
      </p>
    </section>
  );
}

function LivingItalianSection({
  locale,
  city,
}: {
  locale: Locale;
  city: string;
}) {
  const isIt = locale === "it";
  return (
    <section className="mt-8 space-y-3">
      <h2 className="text-lg font-semibold tracking-tight">
        {isIt
          ? `Vivere italiano a ${city}`
          : `Living Italian in ${city}`}
      </h2>
      <p className="max-w-3xl text-sm text-muted-foreground">
        {isIt ? (
          <>
            Se ti sei appena trasferito a {city} per lavoro, studio o
            famiglia, trovare i posti giusti per mangiare e fare la
            spesa è solo l&apos;inizio. Resinaro ti aiuta anche con
            questioni consolari come AIRE, appuntamenti per passaporti e
            altri servizi per italiani nel Regno Unito.
          </>
        ) : (
          <>
            If you&apos;ve just moved to {city} for work, study or
            family, finding the right places to eat and shop is just the
            start. Resinaro can also help with consular questions like
            AIRE registration, passport appointments and other services
            for Italians in the UK.
          </>
        )}
      </p>
      <div className="flex flex-wrap gap-3 text-xs">
        <Link
          href={`/${locale}/community/prenotami-uk-guide`}
          className="inline-flex items-center rounded-full border bg-white px-3 py-1 hover:bg-emerald-50"
        >
          {isIt
            ? "Guida Prenot@Mi e consolati nel Regno Unito"
            : "Prenot@Mi & consular appointments guide"}
        </Link>
        <Link
          href={`/${locale}/services/passports`}
          className="inline-flex items-center rounded-full border bg-white px-3 py-1 hover:bg-emerald-50"
        >
          {isIt
            ? "Aiuto con appuntamenti per passaporti"
            : "Help with passport appointments"}
        </Link>
      </div>
    </section>
  );
}

function FeatureCta({
  locale,
  city,
}: {
  locale: Locale;
  city: string;
}) {
  const isIt = locale === "it";

  return (
    <section className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6">
      <h3 className="text-2xl font-semibold">
        {isIt
          ? `Hai un’attività italiana a ${city}?`
          : `Run an Italian business in ${city}?`}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {isIt ? (
          <>
            La directory di {city} è pensata per far incontrare italiani
            e attività italiane locali. Mostriamo solo pochi posti per
            categoria, così chi cerca trova davvero te. Raccontaci di
            più sulla tua attività e ti contatteremo.
          </>
        ) : (
          <>
            This {city} directory is designed to connect Italians with
            local Italian-run businesses. We only highlight a small
            number per category so people genuinely looking for Italian
            spots can find you. Tell us about your business and we&apos;ll
            get in touch.
          </>
        )}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={`/${locale}/advertise`}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white hover:bg-emerald-700"
        >
          {isIt
            ? "Richiedi di essere inserito"
            : "Apply to be featured"}
        </Link>
        <a
          href={
            isIt
              ? `mailto:resinaro@proton.me?subject=Attivit%C3%A0 italiana a ${encodeURIComponent(
                  city
                )}&body=Nome dell'attivit%C3%A0:%0D%0AWebsite o social:%0D%0ABreve descrizione:`
              : `mailto:resinaro@proton.me?subject=Italian business in ${encodeURIComponent(
                  city
                )}&body=Business name:%0D%0AWebsite or social:%0D%0AShort description:`
          }
          className="inline-flex h-11 items-center justify-center rounded-xl border px-5 text-sm hover:bg-emerald-50"
        >
          {isIt ? "Scrivici via email" : "Email us details"}
        </a>
      </div>
    </section>
  );
}

function Breadcrumbs({
  crumbs,
  locale,
}: {
  locale: string;
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

/* ──────────────────────────────
   Helpers
────────────────────────────── */

function getCategoryLabel(locale: Locale, cat: CategoryKey): string {
  const isIt = locale === "it";
  if (cat === "restaurants") return isIt ? "Ristoranti italiani" : "Italian restaurants";
  if (cat === "delis") return isIt ? "Gastronomie e bar" : "Delis & cafés";
  return isIt ? "Negozi e alimentari" : "Shops & groceries";
}

function getCategoryDescription(
  locale: Locale,
  cat: CategoryKey,
  city: string
): string {
  const isIt = locale === "it";
  if (cat === "restaurants") {
    return isIt
      ? `Trattorie, pizzerie e ristoranti italiani a ${city} per una cena fuori o un pranzo speciale.`
      : `Trattorias, pizzerias and Italian restaurants in ${city} for dinner out or a special lunch.`;
  }
  if (cat === "delis") {
    return isIt
      ? `Gastronomie, bar e locali con banco caldo e freddo: perfetti per pranzo veloce o takeaway.`
      : `Delis, cafés and counters with hot and cold dishes – ideal for quick lunches and takeaway.`;
  }
  return isIt
    ? `Negozi di alimentari, enoteche e minimarket italiani dove fare la spesa e riempire la dispensa.`
    : `Italian grocers, wine shops and minimarkets where you can stock up your pantry.`;
}

function capitalize(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function orderCategories(cats: string[]) {
  const order: CategoryKey[] = ["restaurants", "delis", "shops"];
  return [...cats].sort(
    (a, b) => order.indexOf(a as CategoryKey) - order.indexOf(b as CategoryKey)
  );
}
