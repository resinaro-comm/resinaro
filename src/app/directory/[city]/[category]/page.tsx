// app/directory/[city]/[category]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { cities, listingsByCityAndCategory } from "@/data/directory";

// Rebuild daily for freshness
export const revalidate = 86400;


type Params = { city: string; category: string };

export async function generateStaticParams() {
  const params: Params[] = [];
  for (const city of cities) {
    const categories = Object.keys(listingsByCityAndCategory[city] ?? {});
    categories.forEach((category) => params.push({ city, category }));
  }
  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const city = capitalize(params.city);
  const category = capitalize(params.category);
  return {
    title: `Top 3 Italian ${category} in ${city} | Resinaro`,
    description: `Handpicked Italian ${category} in ${city}. Reviews, details, and how to be featured on Resinaro.`,
    alternates: { canonical: `/directory/${params.city}/${params.category}` },
  };
}

export default function DirectoryPage({ params }: { params: Params }) {
  const cityKey = params.city.toLowerCase();
  const categoryKey = params.category.toLowerCase();

  const cityData = listingsByCityAndCategory[cityKey];
  const items = cityData?.[categoryKey];

  if (!items || items.length === 0) notFound();

  const city = capitalize(cityKey);
  const category = capitalize(categoryKey);

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
      { "@type": "ListItem", position: 1, name: "Directory", item: `/directory` },
      { "@type": "ListItem", position: 2, name: city, item: `/directory/${cityKey}` },
      { "@type": "ListItem", position: 3, name: category, item: `/directory/${cityKey}/${categoryKey}` },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Lead / value intro */}
      <div className="mb-6">
        <Breadcrumbs
          crumbs={[
            { label: "Directory", href: "/directory" },
            { label: city, href: `/directory/${cityKey}` },
            { label: category, href: `/directory/${cityKey}/${categoryKey}` },
          ]}
        />
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs">
          <span className="rounded-full bg-emerald-600/90 px-2 py-0.5 font-semibold text-white">Local Picks</span>
          <span className="text-muted-foreground">Updated daily • 4.5★ average or better</span>
        </div>
      </div>

      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Top 3 Italian {category} in {city}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Handpicked favourites by the Resinaro team. These places are popular with our community and consistently reviewed well.
        </p>

        {/* Quick picks that jump to cards */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {items.map((b) => (
            <a
              key={b.slug}
              href={`#${b.slug}`}
              className="rounded-full border px-3 py-1 text-sm hover:bg-emerald-50"
            >
              {b.name}
            </a>
          ))}
        </div>

        {/* Extra value text */}
        <p className="mx-auto mt-5 max-w-3xl text-balance text-sm text-muted-foreground">
          How we choose: steady recent reviews (not one-off viral spikes), authentic menus, and great service. If you’re after{" "}
          <strong>date-night classics</strong>, start with San Carlo. For a <strong>mozzarella fix</strong> and deli vibes, try Salvi’s.
          Craving <strong>proper Neapolitan pizza</strong>? Noi Quattro is your spot. Book ahead for weekends.
        </p>
      </header>

      {/* Cards */}
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((b) => (
          <li
            id={b.slug}
            key={b.slug}
            className="rounded-2xl border bg-white/70 shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={b.image || "/placeholder.jpg"}
                alt={b.name}
                fill
                className="rounded-t-2xl object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{b.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{b.short}</p>

              <div className="mt-3 space-y-1 text-sm">
                {b.address && <p>📍 {b.address}</p>}
                {b.phone && <p>☎️ {b.phone}</p>}
                <div className="flex flex-wrap gap-3">
                  {b.website && (
                    <Link href={b.website} className="underline underline-offset-4 hover:text-foreground" target="_blank">
                      Website
                    </Link>
                  )}
                  {b.mapsUrl && (
                    <Link href={b.mapsUrl} className="underline underline-offset-4 hover:text-foreground" target="_blank">
                      Maps
                    </Link>
                  )}
                  {b.menuUrl && (
                    <Link href={b.menuUrl} className="underline underline-offset-4 hover:text-foreground" target="_blank">
                      Menu
                    </Link>
                  )}
                </div>
              </div>

              {/* Review snippet */}
              {b.review && (
                <blockquote className="mt-4 rounded-xl bg-stone-50 p-3 text-sm">
                  “{b.review.snippet}”
                  <footer className="mt-1 text-xs text-muted-foreground">— {b.review.author} · {b.review.source}</footer>
                </blockquote>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Helpful local info */}
      <section className="mt-10 rounded-2xl border bg-white/70 p-6">
        <h3 className="text-2xl font-semibold">Before you go</h3>
        <div className="mt-3 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-medium">Booking tips</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Weekends fill fast—reserve 2–3 days ahead.</li>
              <li>Ask for outdoor seating in summer; limited tables.</li>
              <li>Allergy or halal/vegan? Call first to confirm options.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Price guide</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>£££ San Carlo (special occasions)</li>
              <li>££ Salvi’s (restaurant & deli plates)</li>
              <li>££ Noi Quattro (pizza + antipasti)</li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Prices can change—check menus linked above.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Nearby & alternatives</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore King Street for classic spots, the Corn Exchange for groups, and the Northern Quarter for casual pizza.
              Prefer to browse?{" "}
              <Link
                href="https://www.google.com/maps/search/italian+restaurants+manchester"
                target="_blank"
                className="underline underline-offset-4"
              >
                See all on Google Maps
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Feature block */}
      <section className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6">
        <h3 className="text-2xl font-semibold">Want your business featured?</h3>
        <p className="mt-1 text-muted-foreground">
          We feature 3 per city by default and offer sponsored placements. Tell us about your business:
        </p>

        {/* Form: works with Formspree / Google Apps Script / any webhook.
            Set NEXT_PUBLIC_FEATURE_FORM_ENDPOINT in Vercel to your endpoint URL. */}
        {process.env.NEXT_PUBLIC_FEATURE_FORM_ENDPOINT ? (
          <form
            className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
            method="POST"
            action={process.env.NEXT_PUBLIC_FEATURE_FORM_ENDPOINT}
          >
            <input type="hidden" name="context_city" value={city} />
            <input type="hidden" name="context_category" value={category} />
            <Input name="business_name" label="Business name" required />
            <Input name="contact_name" label="Your name" required />
            <Input name="email" type="email" label="Email" required />
            <Input name="phone" label="Phone (optional)" />
            <Input name="website" label="Website (optional)" />
            <div className="md:col-span-2">
              <Label>Message</Label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Tell us what you do, city areas you cover, and why you'd be a good fit."
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
          <div className="mt-4">
            <a
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white hover:bg-emerald-700"
              href={`mailto:resinaro@proton.me?subject=Feature my business in ${encodeURIComponent(
                city
              )}&body=Business:%0D%0ACategory:${encodeURIComponent(
                category
              )}%0D%0AWebsite:%0D%0APhone:%0D%0ADetails:`}
            >
              Email us to be featured
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Tip: set <code>NEXT_PUBLIC_FEATURE_FORM_ENDPOINT</code> to use the inline form (e.g., Formspree or Google Apps Script).
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

/* ------- tiny UI helpers (inline to keep 1-file page) -------- */
function Breadcrumbs({ crumbs }: { crumbs: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1 text-sm text-muted-foreground">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center">
            {i > 0 && <span className="mx-1">/</span>}
            <Link className="hover:text-foreground" href={c.href}>{c.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
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
