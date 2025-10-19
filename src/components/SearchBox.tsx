"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import type { SearchItem } from "@/types/search";
import { getStaticSearchItems } from "@/data/search-static";

type Props = {
  className?: string;
  placeholder?: string;
};

const MAX_RESULTS = 10;

/* ----------------------------- helpers ----------------------------- */

function slugToTitle(slug: string) {
  return slug
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .slice(-1)[0]
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

async function fetchSitemapUrls(): Promise<string[]> {
  const endpoints = ["/sitemap.xml", "/sitemap-0.xml"];
  const urls: string[] = [];
  for (const path of endpoints) {
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) continue;
      const xml = await res.text();
      const locs = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);
      urls.push(...locs);
    } catch {
      /* ignore */
    }
  }
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return urls
    .filter(Boolean)
    .map((u) => {
      try {
        const url = new URL(u);
        return origin && u.startsWith(origin) ? url.pathname : url.pathname;
      } catch {
        return u;
      }
    });
}

/* ----------------------------- component ----------------------------- */

export default function SearchBox({
  className = "",
  placeholder = "Search the site…",
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Build the index once (sitemap + static enrichers) */
  useEffect(() => {
    let mounted = true;
    (async () => {
      const staticItems = getStaticSearchItems();
      const urlPaths = await fetchSitemapUrls();

      const pageItems: SearchItem[] = urlPaths.map((path) => {
        const type: SearchItem["type"] =
          path.includes("/community")
            ? "community"
            : path.includes("/services")
            ? "service"
            : path.includes("/directory")
            ? "directory"
            : "page";
        return { title: slugToTitle(path), url: path, type };
      });

      // De-dup by URL (prefer enriched static titles)
      const map = new Map<string, SearchItem>();
      for (const it of pageItems) map.set(it.url, it);
      for (const it of staticItems) map.set(it.url, it);

      const final = Array.from(map.values());
      if (!mounted) return;
      setItems(final);

      const f = new Fuse(final, {
        keys: [
          { name: "title", weight: 0.7 },
          { name: "url", weight: 0.2 },
          { name: "meta", weight: 0.1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        includeScore: true,
      });
      setFuse(f);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const results = useMemo(() => {
    if (!fuse || !query.trim()) return [];
    return fuse.search(query.trim()).slice(0, MAX_RESULTS).map((r) => r.item);
  }, [fuse, query]);

  /* Keyboard shortcuts */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const tag = (document.activeElement?.tagName || "").toUpperCase();
    const inField = tag === "INPUT" || tag === "TEXTAREA";
    if (e.key === "/" && !inField) {
      e.preventDefault();
      inputRef.current?.focus();
      setOpen(true);
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      inputRef.current?.focus();
      setOpen(true);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  /* Click outside to close */
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      {/* Input */}
      <div className="flex items-center rounded-full border border-green-800/60 bg-white pl-3 pr-2 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-emerald-600">
        <svg
          className="h-5 w-5 text-green-900/70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="ml-2 w-full bg-transparent placeholder:text-stone-400 text-[15px] outline-none"
          aria-label="Search"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="rounded-full p-1 text-stone-500 hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
        <kbd className="ml-1 hidden md:inline-flex select-none items-center gap-1 rounded border px-1.5 text-[10px] leading-4 text-stone-500">
          /
        </kbd>
      </div>

      {/* Results panel */}
      {open && query.trim() !== "" && (
        <div
          className="
            absolute left-0 right-0 w-full
            max-w-[calc(100vw-1rem)]  /* prevent tiny-screen spill */
            z-50 mt-2 overflow-hidden rounded-2xl border border-stone-200
            bg-white/95 backdrop-blur shadow-2xl
          "
          role="listbox"
        >
          {results.length > 0 ? (
            <ul className="max-h-[70vh] overflow-y-auto">
              {results.map((r, i) => (
                <li key={`${r.url}-${i}`} role="option">
                  <Link
                    href={r.url}
                    onClick={() => setOpen(false)}
                    className="
                      group block px-4 py-3
                      hover:bg-emerald-50/70 focus:bg-emerald-50/70 focus:outline-none
                    "
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="text-[15px] font-semibold text-green-900 leading-tight group-hover:underline">
                        {r.title}
                      </h4>
                      <span className="ml-auto rounded-full border px-2 py-0.5 text-[11px] leading-none text-emerald-800 border-emerald-700/30 bg-emerald-50">
                        {r.type}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12.5px] text-stone-500 truncate">
                      {r.meta || r.url}
                    </p>
                  </Link>
                  {i < results.length - 1 && (
                    <div className="mx-3 border-t border-stone-100" />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-sm text-stone-600">
              No matches. Try a city, topic, or service name.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
