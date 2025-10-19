// app/directory/[city]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  cities,
  listingsByCityAndCategory,
  type Listing,
} from "@/data/directory";

// Rebuild daily for freshness
export const revalidate = 86400;

type Params = { city: string };

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const city = capitalize(params.city);
  return {
    title: `${city} Italian Directory | Resinaro`,
    description: `Best Italian restaurants, delis and shops in ${city}. Handpicked by Resinaro with quick tips, maps and contact details.`,
    alternates: { canonical: `/directory/${params.city}` },
  };
}

export default function CityDirectoryPage({ params }: { params: Params }) {
  const cityKey = params.city.toLowerCase();
  const cityData = listingsByCityAndCategory[cityKey];
  if (!cityData) notFound();

  const city = capitalize(cityKey);
  const orderedCats = orderCategories(Object.keys(cityData));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Directory", item: `/directory` },
      { "@type": "ListItem", position: 2, name: city, item: `/directory/${cityKey}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: orderedCats.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: capitalize(cat),
      url: `/directory/${cityKey}/${cat}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Lead / hero */}
      <Breadcrumbs
        crumbs={[
          { label: "Directory", href: "/directory" },
          { label: city, href: `/directory/${cityKey}` },
        ]}
      />
      <header className="mt-4 mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Best Italian Spots in {city}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
          New in town or planning a treat? We’ve curated the top Italian places
          in {city}—from date-night restaurants to deli counters and pantry
          shops. Each pick has steady reviews, real Italian flavour, and
          reliable service. Tap a category to see our top 3 with maps, menus and
          contact info.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs">
          <span className="rounded-full bg-emerald-600/90 px-2 py-0.5 font-semibold text-white">
            Local Picks
          </span>
          <span className="text-muted-foreground">
            Updated regularly • Community-guided
          </span>
        </div>
      </header>

      {/* Category cards */}
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {orderedCats.map((cat) => {
          const items = (cityData as Record<string, Listing[]>)[cat] ?? [];
          const hasItems = items && items.length > 0;
          const catName = capitalize(cat);
          const cover =
            items?.[0]?.image ||
            "/images/resinaro-general.png";

          return (
            <li
              key={cat}
              className="rounded-2xl border bg-white/70 shadow-sm transition hover:shadow-md"
            >
              <Link href={`/directory/${cityKey}/${cat}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={cover}
                    alt={`${city} ${catName}`}
                    fill
                    className="rounded-t-2xl object-cover"
                    sizes="(min-width:768px) 33vw, 100vw"
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{catName}</h2>
                  <Link
                    href={`/directory/${cityKey}/${cat}`}
                    className="text-sm underline underline-offset-4 hover:text-foreground"
                  >
                    View {catName}
                  </Link>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cat === "restaurants" && "Sit-down meals, pizza and pasta favourites."}
                  {cat === "delis" && "Mozzarella bars, fresh counters, and takeaway classics."}
                  {cat === "shops" && "Pantry goods, coffee, wine and Italian staples."}
                </p>

                {/* Preview */}
                {hasItems ? (
                  <div className="mt-4 space-y-3">
                    {items.slice(0, 3).map((b) => (
                      <PreviewRow key={b.slug} listing={b} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 rounded-xl bg-stone-50 p-4 text-sm text-muted-foreground">
                    Coming soon. Know a great {catName.slice(0, -1)}?{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:resinaro@proton.me?subject=Recommend ${encodeURIComponent(
                        catName
                      )} in ${encodeURIComponent(city)}&body=Name:%0D%0AAddress:%0D%0AWhy it's great:`}
                    >
                      Recommend one
                    </a>{" "}
                    or{" "}
                    <Link
                      href={`/directory/${cityKey}/${cat}`}
                      className="underline underline-offset-4"
                    >
                      get featured
                    </Link>
                    .
                  </div>
                )}

                <div className="mt-5">
                  <Link
                    href={`/directory/${cityKey}/${cat}`}
                    className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm hover:bg-emerald-50"
                  >
                    See top 3 {catName}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Helpful local info */}
      <section className="mt-10 rounded-2xl border bg-white/70 p-6">
        <h3 className="text-2xl font-semibold">Quick tips for eating Italian in {city}</h3>
        <div className="mt-3 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-medium">Booking & peak times</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Fridays & Saturdays book up—reserve a few days ahead.</li>
              <li>Walk-ins are easier before 6pm or after 8:30pm.</li>
              <li>Let them know about allergies or dietary needs when booking.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Price guide</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>£££ Special-occasion dining in the centre.</li>
              <li>££ Casual pizza & trattorie in the Northern Quarter.</li>
              <li>£ Delis for quick plates and takeaway.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Explore more</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer browsing everything at once?{" "}
              <Link
                href={`https://www.google.com/maps/search/italian+${encodeURIComponent(
                  "restaurants"
                )}+${encodeURIComponent(city)}`}
                target="_blank"
                className="underline underline-offset-4"
              >
                See all on Google Maps
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FeatureCta city={city} />
    </div>
  );
}

/* ------------ tiny UI helpers ------------ */
function PreviewRow({ listing }: { listing: Listing }) {
  return (
    <Link
      href={listing.website || listing.mapsUrl || "#"}
      target="_blank"
      className="group flex items-center gap-3 rounded-xl border p-2 hover:bg-stone-50"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
        <Image
          src={listing.image || "/images/resinaro-general.png"}
          alt={listing.name}
          fill
          className="object-cover transition group-hover:scale-[1.03]"
          sizes="48px"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{listing.name}</p>
        <p className="truncate text-xs text-muted-foreground">
          {listing.short || listing.address}
        </p>
      </div>
    </Link>
  );
}

function Breadcrumbs({ crumbs }: { crumbs: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1 text-sm text-muted-foreground">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center">
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

function FeatureCta({ city }: { city: string }) {
  return (
    <section className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6">
      <h3 className="text-2xl font-semibold">
        Want your business featured in {city}?
      </h3>
      <p className="mt-1 text-muted-foreground">
        We highlight three per category and offer sponsored placements. Share
        your details and we’ll be in touch.
      </p>
      <div className="mt-4">
        {process.env.NEXT_PUBLIC_FEATURE_FORM_ENDPOINT ? (
          <form
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            method="POST"
            action={process.env.NEXT_PUBLIC_FEATURE_FORM_ENDPOINT}
          >
            <input type="hidden" name="context_city" value={city} />
            <Input name="business_name" label="Business name" required />
            <Input name="contact_name" label="Your name" required />
            <Input name="email" type="email" label="Email" required />
            <Input name="website" label="Website (optional)" />
            <div className="md:col-span-2">
              <Label>Message</Label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Tell us what you do, areas you cover, and why you'd be a good fit."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <>
            <a
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700"
              href={`mailto:resinaro@proton.me?subject=Feature my business in ${encodeURIComponent(
                city
              )}&body=Business:%0D%0ACategory:%0D%0AWebsite:%0D%0APhone:%0D%0ADetails:`}
            >
              Email us to be featured
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Tip: set <code>NEXT_PUBLIC_FEATURE_FORM_ENDPOINT</code> to enable
              the inline form.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium">{children}</label>;
}
function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-400"
      />
    </div>
  );
}
function capitalize(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}
function orderCategories(cats: string[]) {
  const order = ["restaurants", "delis", "shops"];
  return [...cats].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
