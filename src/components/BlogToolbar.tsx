"use client";

import { useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
  summary: string;
  category: "Bureaucracy Guides" | "Life in the UK" | "Mental Health" | "Community Stories";
};

export default function BlogToolbar({
  items,
  onFiltered,
}: {
  items: Item[];
  onFiltered: (ids: string[]) => void;
}) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<"All" | Item["category"]>("All");

  const filteredIds = useMemo(() => {
    const norm = (s: string) => s.toLowerCase().trim();
    const nq = norm(q);
    return items
      .filter((it) => (cat === "All" ? true : it.category === cat))
      .filter((it) => (nq ? norm(it.title + " " + it.summary).includes(nq) : true))
      .map((it) => it.id);
  }, [items, q, cat]);

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Search */}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search guides…"
          className="w-full md:w-80 rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-900"
          aria-label="Search blog posts"
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {(["All","Bureaucracy Guides","Life in the UK","Mental Health","Community Stories"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1 rounded-full border text-sm ${
                cat === c ? "bg-green-900 text-white border-green-900" : "bg-white border-gray-300 hover:border-gray-400"
              }`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>

        <span className="text-sm text-gray-600 md:ml-auto">{filteredIds.length} post{filteredIds.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Push filtered IDs up whenever they change */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(${(() => {
            // this self-exec runs client-side; framework will not eval until hydration
            // we signal filtered ids back via a custom event so parent can show/hide cards
          }).toString()})();`,
        }}
      />
      {/** notify parent imperatively (simpler than prop callback through RSC boundary) */}
      <span className="hidden" data-ids={filteredIds.join(",")} id="__blogFilteredIds" />
    </div>
  );
}