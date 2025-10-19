export type SearchItem = {
  title: string;
  url: string;
  type: "page" | "community" | "service" | "directory" | "job" | "other";
  meta?: string;
};
// src/types/search.ts
export type SearchKind =
  | "Guide"
  | "Service"
  | "Directory"
  | "Jobs"
  | "About"
  | "Legal"
  | "Donate"
  | "Governance"
  | "Home";

export type SearchItem = {
  title: string;
  href: string;
  kind: SearchKind;
  // Optional extra text to improve matching (will not display)
  keywords?: string;
  // Optional short description for the results list
  description?: string;
};
