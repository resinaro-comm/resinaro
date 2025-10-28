// Lightweight typed dataset for Italian-language roles in the UK / remote-UK.
// This board is currently ad-only; no live roles are listed.
// Last-updated: 2025-10-28

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Temporary"
  | "Other";

export type Job = {
  id: string; // slug
  title: string;
  company: string;
  location: string; // e.g. "London, UK" or "Remote (UK)"
  remote?: boolean;
  languageRequirement: string;
  applyUrl: string;
  source: "Workday" | "Greenhouse" | "Workable" | "SmartRecruiters" | "Other";
  tags?: string[];
  postedAt?: string; // ISO date (YYYY-MM-DD)
  employmentType?: EmploymentType;
};

// Empty dataset (ads-only mode)
export const jobs: Job[] = [];
