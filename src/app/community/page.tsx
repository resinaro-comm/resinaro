import Link from "next/link";

export const metadata = { title: "Community Knowledge Hub | Resinaro", description: "Guides, checklists, and resources for Italians and migrants in the UK.", alternates: { canonical: "/community" }, };

const posts = [
  {
    title: "Italian Passport in the UK (2025): Documents, Preparation & What to Expect",
    description: "A clear, up-to-date checklist to renew or apply for an Italian passport in the UK. Required documents, minor applications, fees, and booking tips—with help options.",
    slug: "/community/bureaucracy-guides/italian-passport-uk-docs-prep",
    category: "bureaucracy-guides"
  },
  {
    title: "Italian Electronic ID Card (CIE) in the UK (2025): Eligibility, Documents, Booking & Uses",
    description: "Complete guide to the Italian CIE from the UK: who can apply, required documents, how to book, fingerprints, minors, fees, and how to use the CIE for digital services (SPID/CIE ID).",
    slug: "/community/bureaucracy-guides/italian-cie-id-card-uk",
    category: "bureaucracy-guides"
  },
  {
    title: "Registering UK Birth/Marriage/Divorce in Italy (2025): Documents, Apostille & Consular Transcriptions",
    description: "",
    slug: "/community/bureaucracy-guides/register-uk-events-with-italy",
    category: "bureaucracy-guides"
  },
  {
    title: "Exchange Italian Driving Licence for a UK Licence (2025): DVLA Steps, Documents & Timelines",
    description: "",
    slug: "/community/life-in-uk/exchange-italian-driving-licence-uk",
    category: "life-in-uk"
  },
  {
    title: "National Insurance Number (NIN) for Italians in the UK: Apply, Replace & Timelines (2025)",
    description: "",
    slug: "/community/life-in-uk/national-insurance-number-uk-italians",
    category: "life-in-uk"
  },
  {
    title: "Loneliness to Belonging (2025): A 30-Day Community Plan for Migrants in the UK",
    description: "",
    slug: "/community/mental-health/loneliness-belonging-uk-30-day-plan",
    category: "mental-health"
  },
  {
    title: "NHS Mental Health Support in the UK (2025): How to Access Help, Self-Referral & What to Expect",
    description: "",
    slug: "/community/mental-health/nhs-mental-health-access-uk",
    category: "mental-health"
  },
  {
    title: "AIRE Updates from the UK (2025): Change Address, Marriage, Birth, Name — FAST IT Guide",
    description: "",
    slug: "/community/bureaucracy-guides/keep-aire-up-to-date-uk",
    category: "bureaucracy-guides"
  },
  {
    title: "AIRE Registration from the UK (2025): FAST IT Steps, Proofs & Common Errors",
    description: "",
    slug: "/community/bureaucracy-guides/aire-registration-uk",
    category: "bureaucracy-guides"
  }
];

export default async function CommunityHub({ searchParams }: { searchParams?: Promise<unknown> }) {
  // Accept searchParams possibly as a Promise of unknown to avoid `any`.
  // At runtime we resolve then narrow to the expected shape.
  const resolvedUnknown = await Promise.resolve(searchParams) as unknown;
  const resolved = (resolvedUnknown as { q?: string; category?: string; sort?: string } | undefined);


  let filtered = posts;
  const { q, category, sort } = (resolved ?? {}) as { q?: string; category?: string; sort?: string };
  if (q) filtered = filtered.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()));
  if (category) filtered = filtered.filter(p => p.category === category);
  if (sort === "title") filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "category") filtered = filtered.sort((a, b) => a.category.localeCompare(b.category));

  const categories = Array.from(new Set(posts.map(p => p.category)));


  return (
    <main className="bg-[#F9F6F1] text-gray-800 min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">Community Knowledge Hub</h1>
        <form className="flex flex-wrap gap-4 mb-8 justify-center">
          <input name="q" placeholder="Search..." defaultValue={q} className="border rounded px-3 py-2" />
          <select name="category" defaultValue={category || ""} className="border rounded px-3 py-2">
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select name="sort" defaultValue={sort || ""} className="border rounded px-3 py-2">
            <option value="">Sort by</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
          <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded">Apply</button>
        </form>
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.length === 0 && <div className="col-span-2 text-center text-gray-500">No posts found.</div>}
          {filtered.map(post => (
            <Link key={post.slug} href={post.slug} className="block bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-green-900 mb-2">{post.title}</h2>
              <div className="text-sm text-gray-600 mb-2">{post.category}</div>
              <p className="text-gray-700">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}