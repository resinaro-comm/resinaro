// src/data/search-static.ts
import type { SearchItem } from "@/types/search";

/**
 * Static site-wide search items.
 * Add/edit freely; keep titles short and human.
 * Tip: include helpful keywords to improve matching.
 */
export function getStaticSearchItems(): SearchItem[] {
  const communityGuides: SearchItem[] = [
    { title: "Community Hub", href: "/community", kind: "Guide", description: "All guides, curated for Italians in the UK" },

    // Life-in-UK → Banking
    { title: "Open a Monzo Account (2025)", href: "/community/life-in-uk/banking/open-monzo-account-uk-2025", kind: "Guide", keywords: "banking monzo kyc" },
    { title: "Open a Revolut Account (2025)", href: "/community/life-in-uk/banking/open-revolut-account-uk-2025", kind: "Guide", keywords: "banking revolut kyc" },
    { title: "Open a Starling Account (2025)", href: "/community/life-in-uk/banking/open-starling-account-uk-2025", kind: "Guide", keywords: "banking starling kyc" },
    { title: "Bank KYC: No Credit? Italians (2025)", href: "/community/open-uk-bank-account-no-credit-italians-2025", kind: "Guide", keywords: "bank kyc address proof co c/o" },

    // Proof of address
    { title: "Proof of Address Without Bills (2025)", href: "/community/proof-of-address-without-bills-2025", kind: "Guide", keywords: "tenancy employer letter gp council bank letter c/o" },

    // Bureaucracy / AIRE / CIE / Passport
    { title: "AIRE Registration — How to (UK)", href: "/community/bureaucracy-guides/aire-registration-uk", kind: "Guide" },
    { title: "Keep AIRE Up to Date (UK)", href: "/community/bureaucracy-guides/keep-aire-up-to-date-uk", kind: "Guide" },
    { title: "Italian CIE ID Card (UK)", href: "/community/bureaucracy-guides/italian-cie-id-card-uk", kind: "Guide" },
    { title: "Passport — Docs Prep (UK)", href: "/community/bureaucracy-guides/italian-passport-uk-docs-prep", kind: "Guide" },
    { title: "Register UK Events with Italy", href: "/community/bureaucracy-guides/register-uk-events-with-italy", kind: "Guide" },
    { title: "SPID vs CIE for Italians Abroad", href: "/community/bureaucracy-guides/spid-vs-cie-id-italians-abroad", kind: "Guide" },

    // NHS / Health
    { title: "Navigating NHS Healthcare (2025)", href: "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025", kind: "Guide", keywords: "gp nhs number" },
    { title: "NHS Mental Health Access (UK)", href: "/community/mental-health/nhs-mental-health-access-uk", kind: "Guide" },
    { title: "Stress & Anxiety Toolkit", href: "/community/mental-health/stress-anxiety-toolkit-migrants-uk", kind: "Guide" },
    { title: "Loneliness to Belonging — 30 Day Plan", href: "/community/mental-health/loneliness-belonging-uk-30-day-plan", kind: "Guide" },
    { title: "Home Pharmacy Basics", href: "/community/home-pharmacy-uk", kind: "Guide" },

    // Work & Tax
    { title: "First UK Payslip (2025)", href: "/community/first-payslip-italians-uk-2025", kind: "Guide" },
    { title: "UK Tax Code — Fix Emergency (2025)", href: "/community/uk-tax-code-for-italians-2025", kind: "Guide" },
    { title: "National Insurance Number (Italians)", href: "/community/national-insurance-number-italians-uk-2025", kind: "Guide" },
    { title: "National Insurance Number — legacy path", href: "/community/life-in-uk/national-insurance-number-uk-italians", kind: "Guide" },

    // Housing / Utilities
    { title: "Affordable Housing in London (2025)", href: "/community/life-in-uk/finding-affordable-housing-london-2025", kind: "Guide" },
    { title: "UK Renting for Italians (2025)", href: "/community/uk-renting-for-italians-2025", kind: "Guide" },
    { title: "Utilities Setup (2025)", href: "/community/utilities-setup-uk-2025", kind: "Guide" },
    { title: "Warmth & Energy Savers", href: "/community/warmth-energy-savers-uk", kind: "Guide" },
    { title: "Move-in Cleaning Kit", href: "/community/move-in-cleaning-kit-uk", kind: "Guide" },

    // Travel / Transport
    { title: "Exchange Italian Driving Licence (UK)", href: "/community/life-in-uk/exchange-italian-driving-licence-uk", kind: "Guide" },
    { title: "Oyster vs Contactless (2025)", href: "/community/oyster-vs-contactless-travelcards-2025", kind: "Guide" },

    // Kits & Essentials
    { title: "Starter UK Kitchen (Italian)", href: "/community/starter-uk-kitchen-italian", kind: "Guide" },
    { title: "Buy Italian Staples in Bulk (UK)", href: "/community/buying-in-bulk-uk-italian-staples", kind: "Guide" },
    { title: "Italian Essentials Kit", href: "/community/italian-essentials", kind: "Guide" },
    { title: "UK Desk Setup for Newcomers", href: "/community/uk-desk-setup-newcomers", kind: "Guide" },
    { title: "Travel to Italy Kit", href: "/community/travel-to-italy-kit", kind: "Guide" },

    // Kids & Culture
    { title: "Kids: Italian at Home", href: "/community/kids-italian-at-home", kind: "Guide" },

    // Misc life-in-uk landing
    { title: "Life in the UK — Banking & more", href: "/community/life-in-uk", kind: "Guide" },
  ];

  const directory: SearchItem[] = [
    { title: "Browse the Directory", href: "/directory", kind: "Directory", description: "Italian-run places & useful services" },
    // City/category dynamic routes exist; we index the landing only for now.
  ];

  const services: SearchItem[] = [
    { title: "Services", href: "/services", kind: "Service" },
    { title: "AIRE Support", href: "/services/aire", kind: "Service" },
    { title: "ID Card (CIE)", href: "/services/id-card", kind: "Service" },
    { title: "Passport Help", href: "/services/passport", kind: "Service" },
    { title: "Visa Help", href: "/services/visa", kind: "Service" },
    { title: "Visa Booking", href: "/services/visa-booking", kind: "Service" },
    { title: "Housing Advice", href: "/services/housing", kind: "Service" },
    { title: "NIN Support", href: "/services/nin-support", kind: "Service" },
    { title: "Benefits", href: "/services/benefits", kind: "Service" },
    { title: "Translation", href: "/services/translation", kind: "Service" },
    { title: "Community Services", href: "/services/community", kind: "Service" },
    { title: "Mental Health", href: "/services/mental-health", kind: "Service" },
    { title: "Settled Status", href: "/services/settled-status", kind: "Service" },
  ];

  const topPages: SearchItem[] = [
    { title: "Home", href: "/", kind: "Home" },
    { title: "About Resinaro", href: "/about", kind: "About" },
    { title: "Contact", href: "/contact", kind: "About" },
    { title: "Advertise", href: "/advertise", kind: "About" },
    { title: "Jobs", href: "/jobs", kind: "Jobs" },
    { title: "Donate", href: "/donate", kind: "Donate" },
    { title: "Governance", href: "/governance", kind: "Governance" },
    { title: "Privacy Policy", href: "/privacy-policy", kind: "Legal" },
    { title: "Refund Policy", href: "/refund-policy", kind: "Legal" },
    { title: "Terms", href: "/terms", kind: "Legal" },
  ];

  // You can also push directory items and jobs dynamically at build-time
  // by generating a JSON and importing it here. For now, this covers the core.
  return [...communityGuides, ...directory, ...services, ...topPages];
}
