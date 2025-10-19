// src/data/search-static.ts
import type { SearchItem } from "@/types/search";

/**
 * Static site-wide search items.
 * Add/edit freely; keep titles short and human.
 * Tip: include helpful keywords to improve matching.
 */
export function getStaticSearchItems(): SearchItem[] {
  const communityGuides: SearchItem[] = [
    { title: "Community Hub", url: "/community", type: "page", meta: "All guides, curated for Italians in the UK" },

    // Life-in-UK → Banking
  { title: "Open a Monzo Account (2025)", url: "/community/life-in-uk/banking/open-monzo-account-uk-2025", type: "community", meta: "banking monzo kyc" },
  { title: "Open a Revolut Account (2025)", url: "/community/life-in-uk/banking/open-revolut-account-uk-2025", type: "community", meta: "banking revolut kyc" },
  { title: "Open a Starling Account (2025)", url: "/community/life-in-uk/banking/open-starling-account-uk-2025", type: "community", meta: "banking starling kyc" },
  { title: "Bank KYC: No Credit? Italians (2025)", url: "/community/open-uk-bank-account-no-credit-italians-2025", type: "community", meta: "bank kyc address proof c/o" },

    // Proof of address
  { title: "Proof of Address Without Bills (2025)", url: "/community/proof-of-address-without-bills-2025", type: "community", meta: "tenancy employer letter gp council bank letter c/o" },

    // Bureaucracy / AIRE / CIE / Passport
  { title: "AIRE Registration — How to (UK)", url: "/community/bureaucracy-guides/aire-registration-uk", type: "community" },
  { title: "Keep AIRE Up to Date (UK)", url: "/community/bureaucracy-guides/keep-aire-up-to-date-uk", type: "community" },
  { title: "Italian CIE ID Card (UK)", url: "/community/bureaucracy-guides/italian-cie-id-card-uk", type: "community" },
  { title: "Passport — Docs Prep (UK)", url: "/community/bureaucracy-guides/italian-passport-uk-docs-prep", type: "community" },
  { title: "Register UK Events with Italy", url: "/community/bureaucracy-guides/register-uk-events-with-italy", type: "community" },
  { title: "SPID vs CIE for Italians Abroad", url: "/community/bureaucracy-guides/spid-vs-cie-id-italians-abroad", type: "community" },

    // NHS / Health
  { title: "Navigating NHS Healthcare (2025)", url: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025", type: "community", meta: "gp nhs number" },
  { title: "NHS Mental Health Access (UK)", url: "/community/mental-health/nhs-mental-health-access-uk", type: "community" },
  { title: "Stress & Anxiety Toolkit", url: "/community/mental-health/stress-anxiety-toolkit-migrants-uk", type: "community" },
  { title: "Loneliness to Belonging — 30 Day Plan", url: "/community/mental-health/loneliness-belonging-uk-30-day-plan", type: "community" },
  { title: "Home Pharmacy Basics", url: "/community/home-pharmacy-uk", type: "community" },

    // Work & Tax
  { title: "First UK Payslip (2025)", url: "/community/first-payslip-italians-uk-2025", type: "community" },
  { title: "UK Tax Code — Fix Emergency (2025)", url: "/community/uk-tax-code-for-italians-2025", type: "community" },
  { title: "National Insurance Number (Italians)", url: "/community/national-insurance-number-italians-uk-2025", type: "community" },
  { title: "National Insurance Number — legacy path", url: "/community/life-in-uk/national-insurance-number-uk-italians", type: "community" },

    // Housing / Utilities
  { title: "Affordable Housing in London (2025)", url: "/community/life-in-uk/finding-affordable-housing-london-2025", type: "community" },
  { title: "UK Renting for Italians (2025)", url: "/community/uk-renting-for-italians-2025", type: "community" },
  { title: "Utilities Setup (2025)", url: "/community/utilities-setup-uk-2025", type: "community" },
  { title: "Warmth & Energy Savers", url: "/community/warmth-energy-savers-uk", type: "community" },
  { title: "Move-in Cleaning Kit", url: "/community/move-in-cleaning-kit-uk", type: "community" },

    // Travel / Transport
  { title: "Exchange Italian Driving Licence (UK)", url: "/community/life-in-uk/exchange-italian-driving-licence-uk", type: "community" },
  { title: "Oyster vs Contactless (2025)", url: "/community/oyster-vs-contactless-travelcards-2025", type: "community" },

    // Kits & Essentials
  { title: "Starter UK Kitchen (Italian)", url: "/community/starter-uk-kitchen-italian", type: "community" },
  { title: "Buy Italian Staples in Bulk (UK)", url: "/community/buying-in-bulk-uk-italian-staples", type: "community" },
  { title: "Italian Essentials Kit", url: "/community/italian-essentials", type: "community" },
  { title: "UK Desk Setup for Newcomers", url: "/community/uk-desk-setup-newcomers", type: "community" },
  { title: "Travel to Italy Kit", url: "/community/travel-to-italy-kit", type: "community" },

    // Kids & Culture
  { title: "Kids: Italian at Home", url: "/community/kids-italian-at-home", type: "community" },

    // Misc life-in-uk landing
  { title: "Life in the UK — Banking & more", url: "/community/life-in-uk", type: "community" },
  ];

  const directory: SearchItem[] = [
    { title: "Browse the Directory", url: "/directory", type: "directory", meta: "Italian-run places & useful services" },
    // City/category dynamic routes exist; we index the landing only for now.
  ];

  const services: SearchItem[] = [
    { title: "Services", url: "/services", type: "service" },
    { title: "AIRE Support", url: "/services/aire", type: "service" },
    { title: "ID Card (CIE)", url: "/services/id-card", type: "service" },
    { title: "Passport Help", url: "/services/passport", type: "service" },
    { title: "Visa Help", url: "/services/visa", type: "service" },
    { title: "Visa Booking", url: "/services/visa-booking", type: "service" },
    { title: "Housing Advice", url: "/services/housing", type: "service" },
    { title: "NIN Support", url: "/services/nin-support", type: "service" },
    { title: "Benefits", url: "/services/benefits", type: "service" },
    { title: "Translation", url: "/services/translation", type: "service" },
    { title: "Community Services", url: "/services/community", type: "service" },
    { title: "Mental Health", url: "/services/mental-health", type: "service" },
    { title: "Settled Status", url: "/services/settled-status", type: "service" },
  ];

  const topPages: SearchItem[] = [
    { title: "Home", url: "/", type: "page" },
    { title: "About Resinaro", url: "/about", type: "page" },
    { title: "Contact", url: "/contact", type: "page" },
    { title: "Advertise", url: "/advertise", type: "page" },
    { title: "Jobs", url: "/jobs", type: "job" },
    { title: "Donate", url: "/donate", type: "page" },
    { title: "Governance", url: "/governance", type: "page" },
    { title: "Privacy Policy", url: "/privacy-policy", type: "page" },
    { title: "Refund Policy", url: "/refund-policy", type: "page" },
    { title: "Terms", url: "/terms", type: "page" },
  ];

  // You can also push directory items and jobs dynamically at build-time
  // by generating a JSON and importing it here. For now, this covers the core.
  return [...communityGuides, ...directory, ...services, ...topPages];
}
