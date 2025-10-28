// src/data/search-static.ts
import type { SearchItem } from "@/types/search";
import { p } from "@/lib/localePath";
import type { Locale } from "@/i18n";

/**
 * Static site-wide search items.
 * Pass the active locale so every URL is locale-prefixed.
 */
export function getStaticSearchItems(locale: Locale): SearchItem[] {
  const communityGuides: SearchItem[] = [
    { title: "Community Hub", url: p(locale, "/community"), type: "page", meta: "All guides, curated for Italians in the UK" },

    // Life-in-UK → Banking
    { title: "Open a Monzo Account (2025)", url: p(locale, "/community/life-in-uk/banking/open-monzo-account-uk-2025"), type: "community", meta: "banking monzo kyc" },
    { title: "Open a Revolut Account (2025)", url: p(locale, "/community/life-in-uk/banking/open-revolut-account-uk-2025"), type: "community", meta: "banking revolut kyc" },
    { title: "Open a Starling Account (2025)", url: p(locale, "/community/life-in-uk/banking/open-starling-account-uk-2025"), type: "community", meta: "banking starling kyc" },
    { title: "Bank KYC: No Credit? Italians (2025)", url: p(locale, "/community/open-uk-bank-account-no-credit-italians-2025"), type: "community", meta: "bank kyc address proof c/o" },

    // Proof of address
    { title: "Proof of Address Without Bills (2025)", url: p(locale, "/community/proof-of-address-without-bills-2025"), type: "community", meta: "tenancy employer letter gp council bank letter c/o" },

    // Bureaucracy / AIRE / CIE / Passport
    { title: "AIRE Registration — How to (UK)", url: p(locale, "/community/bureaucracy-guides/aire-registration-uk"), type: "community" },
    { title: "Keep AIRE Up to Date (UK)", url: p(locale, "/community/bureaucracy-guides/keep-aire-up-to-date-uk"), type: "community" },
    { title: "Italian CIE ID Card (UK)", url: p(locale, "/community/bureaucracy-guides/italian-cie-id-card-uk"), type: "community" },
    { title: "Passport — Docs Prep (UK)", url: p(locale, "/community/bureaucracy-guides/italian-passport-uk-docs-prep"), type: "community" },
    { title: "Register UK Events with Italy", url: p(locale, "/community/bureaucracy-guides/register-uk-events-with-italy"), type: "community" },
    { title: "SPID vs CIE for Italians Abroad", url: p(locale, "/community/bureaucracy-guides/spid-vs-cie-id-italians-abroad"), type: "community" },

    // NHS / Health
    { title: "Navigating NHS Healthcare (2025)", url: p(locale, "/community/life-in-uk/navigating-nhs-healthcare-italians-uk-2025"), type: "community", meta: "gp nhs number" },
    { title: "NHS Mental Health Access (UK)", url: p(locale, "/community/mental-health/nhs-mental-health-access-uk"), type: "community" },
    { title: "Stress & Anxiety Toolkit", url: p(locale, "/community/mental-health/stress-anxiety-toolkit-migrants-uk"), type: "community" },
    { title: "Loneliness to Belonging — 30 Day Plan", url: p(locale, "/community/mental-health/loneliness-belonging-uk-30-day-plan"), type: "community" },
    { title: "Home Pharmacy Basics", url: p(locale, "/community/home-pharmacy-uk"), type: "community" },

    // Work & Tax
    { title: "First UK Payslip (2025)", url: p(locale, "/community/first-payslip-italians-uk-2025"), type: "community" },
    { title: "UK Tax Code — Fix Emergency (2025)", url: p(locale, "/community/uk-tax-code-for-italians-2025"), type: "community" },
    { title: "National Insurance Number (Italians)", url: p(locale, "/community/national-insurance-number-italians-uk-2025"), type: "community" },
    { title: "National Insurance Number — legacy path", url: p(locale, "/community/life-in-uk/national-insurance-number-uk-italians"), type: "community" },

    // Housing / Utilities
    { title: "Affordable Housing in London (2025)", url: p(locale, "/community/life-in-uk/finding-affordable-housing-london-2025"), type: "community" },
    { title: "UK Renting for Italians (2025)", url: p(locale, "/community/uk-renting-for-italians-2025"), type: "community" },
    { title: "Utilities Setup (2025)", url: p(locale, "/community/utilities-setup-uk-2025"), type: "community" },
    { title: "Warmth & Energy Savers", url: p(locale, "/community/warmth-energy-savers-uk"), type: "community" },
    { title: "Move-in Cleaning Kit", url: p(locale, "/community/move-in-cleaning-kit-uk"), type: "community" },

    // Travel / Transport
    { title: "Exchange Italian Driving Licence (UK)", url: p(locale, "/community/life-in-uk/exchange-italian-driving-licence-uk"), type: "community" },
    { title: "Oyster vs Contactless (2025)", url: p(locale, "/community/oyster-vs-contactless-travelcards-2025"), type: "community" },

    // Kits & Essentials
    { title: "Starter UK Kitchen (Italian)", url: p(locale, "/community/starter-uk-kitchen-italian"), type: "community" },
    { title: "Buy Italian Staples in Bulk (UK)", url: p(locale, "/community/buying-in-bulk-uk-italian-staples"), type: "community" },
    { title: "Italian Essentials Kit", url: p(locale, "/community/italian-essentials"), type: "community" },
    { title: "UK Desk Setup for Newcomers", url: p(locale, "/community/uk-desk-setup-newcomers"), type: "community" },
    { title: "Travel to Italy Kit", url: p(locale, "/community/travel-to-italy-kit"), type: "community" },

    // Kids & Culture
    { title: "Kids: Italian at Home", url: p(locale, "/community/kids-italian-at-home"), type: "community" },

    // Misc life-in-uk landing
    { title: "Life in the UK — Banking & more", url: p(locale, "/community/life-in-uk"), type: "community" },
  ];

  const directory: SearchItem[] = [
    { title: "Browse the Directory", url: p(locale, "/directory"), type: "directory", meta: "Italian-run places & useful services" },
  ];

  const services: SearchItem[] = [
    { title: "Services", url: p(locale, "/services"), type: "service" },
    { title: "AIRE Support", url: p(locale, "/services/aire"), type: "service" },
    { title: "ID Card (CIE)", url: p(locale, "/services/id-card"), type: "service" },
    { title: "Passport Help", url: p(locale, "/services/passport"), type: "service" },
    { title: "Visa Help", url: p(locale, "/services/visa"), type: "service" },
    { title: "Visa Booking", url: p(locale, "/services/visa-booking"), type: "service" },
    { title: "Housing Advice", url: p(locale, "/services/housing"), type: "service" },
    { title: "NIN Support", url: p(locale, "/services/nin-support"), type: "service" },
    { title: "Benefits", url: p(locale, "/services/benefits"), type: "service" },
    { title: "Translation", url: p(locale, "/services/translation"), type: "service" },
    { title: "Community Services", url: p(locale, "/services/community"), type: "service" },
    { title: "Mental Health", url: p(locale, "/services/mental-health"), type: "service" },
    { title: "Settled Status", url: p(locale, "/services/settled-status"), type: "service" },
  ];

  // NEW: High-intent top-level hubs (present in your tree under /[locale])
  const hubs: SearchItem[] = [
    { title: "National Insurance Number (NIN)", url: p(locale, "/nin-number"), type: "page", meta: "Eligibility, application, timelines, right to work" },
    { title: "Utilities & Internet", url: p(locale, "/utilities-and-internet"), type: "page", meta: "Energy, water, broadband, mobile — setup & switching" },
    { title: "Education (UCAS, visas, diplomas)", url: p(locale, "/education"), type: "page", meta: "UCAS, ENIC/Ecctis, visas, Student Finance, English tests" },
    { title: "Tax & Money", url: p(locale, "/tax-and-money"), type: "page", meta: "Banking, credit score, self-assessment, NI, pensions, remittances" },
  ];

  const topPages: SearchItem[] = [
    { title: "Home", url: p(locale, "/"), type: "page" },
    { title: "About Resinaro", url: p(locale, "/about"), type: "page" },
    { title: "Contact", url: p(locale, "/contact"), type: "page" },
    { title: "Advertise", url: p(locale, "/advertise"), type: "page" },
    { title: "Jobs", url: p(locale, "/jobs"), type: "job" },
    { title: "Donate", url: p(locale, "/donate"), type: "page" },
    { title: "Governance", url: p(locale, "/governance"), type: "page" },
    { title: "Privacy Policy", url: p(locale, "/privacy-policy"), type: "page" },
    { title: "Refund Policy", url: p(locale, "/refund-policy"), type: "page" },
    { title: "Terms", url: p(locale, "/terms"), type: "page" },
    { title: "Cookies", url: p(locale, "/cookies"), type: "page" },
  ];

  return [...communityGuides, ...directory, ...services, ...hubs, ...topPages];
}
