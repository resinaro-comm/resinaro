// src/types/search.ts
// Canonical search item used by the SearchBox index
export type SearchItem = {
  title: string;
  url: string;
  type: "page" | "community" | "service" | "directory" | "job" | "other";
  // Optional extra text for display; SearchBox will show meta when present
  meta?: string;
};
