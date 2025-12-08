// src/components/proof/AppointmentProofGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n";
import {
  appointmentProofCases,
  type AppointmentProofCase,
} from "@/content/appointmentProofCases";

type Variant = "section" | "strip" | "sidebar";
type Emphasis = "default" | "strong";

type Props = {
  locale: Locale;

  // Content
  limit?: number;
  title?: string;
  subtitle?: string;

  // Layout / styling
  variant?: Variant;
  emphasis?: Emphasis;
  highlightFirst?: boolean; // kept for backwards-compat, no special layout now
  className?: string;
};

function getContainerClasses(
  variant: Variant,
  emphasis: Emphasis,
  extra?: string
) {
  let base = "";

  if (variant === "section") {
    base =
      "mt-8 rounded-3xl border p-6 md:p-8 shadow-sm " +
      (emphasis === "strong"
        ? "border-emerald-200 bg-emerald-50"
        : "border-gray-200 bg-white");
  } else if (variant === "strip") {
    // Minimal, meant to sit inside other coloured sections
    base = "mt-4";
  } else if (variant === "sidebar") {
    base =
      "mt-6 rounded-2xl border p-4 md:p-5 shadow-sm " +
      (emphasis === "strong"
        ? "border-emerald-200 bg-emerald-50"
        : "border-gray-200 bg-white");
  }

  return [base, extra].filter(Boolean).join(" ");
}

function getDefaults(locale: Locale) {
  const isIt = locale === "it";

  const title = isIt
    ? "Appuntamenti passaporto recenti che abbiamo prenotato"
    : "Recent passport appointments we’ve actually booked";

  const subtitle = isIt
    ? "Screenshot reali da account dei clienti. Tutti i dati personali sono oscurati; il passaporto è sempre rilasciato dal consolato."
    : "Real screenshots from client accounts. All personal data is blurred; passports are always issued by the consulate.";

  return { title, subtitle };
}

/**
 * Sort appointments so that:
 * - Upcoming/today’s appointments come first
 * - Then recent past ones
 * - Within each group, closest dates to today appear first
 */
function getItemsClosestToToday(limit: number): AppointmentProofCase[] {
  if (!appointmentProofCases.length) return [];

  const today = new Date();
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();

  const sorted = [...appointmentProofCases].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
      // Fallback: keep original order if dates are invalid
      return 0;
    }

    const aTime = new Date(
      aDate.getFullYear(),
      aDate.getMonth(),
      aDate.getDate()
    ).getTime();
    const bTime = new Date(
      bDate.getFullYear(),
      bDate.getMonth(),
      bDate.getDate()
    ).getTime();

    const aFutureOrToday = aTime >= todayMidnight;
    const bFutureOrToday = bTime >= todayMidnight;

    // Prefer upcoming / today over past
    if (aFutureOrToday !== bFutureOrToday) {
      return aFutureOrToday ? -1 : 1;
    }

    const aDiff = Math.abs(aTime - todayMidnight);
    const bDiff = Math.abs(bTime - todayMidnight);

    return aDiff - bDiff;
  });

  return sorted.slice(0, limit);
}

export function AppointmentProofGallery({
  locale,
  limit = 10,
  title,
  subtitle,
  variant = "section",
  emphasis = "default",
  className,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = getItemsClosestToToday(limit);

  if (!items.length) return null;

  const current = items[activeIndex];

  const defaults = getDefaults(locale);
  const displayTitle = title || defaults.title;
  const displaySubtitle = subtitle || defaults.subtitle;

  const containerClasses = getContainerClasses(variant, emphasis, className);

  const disclaimer =
    locale === "it"
      ? "Dati personali oscurati. Il passaporto è sempre rilasciato dal consolato."
      : "Personal data is blurred. The passport is always issued only by the consulate.";

  const isSidebar = variant === "sidebar";

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const slideHeightClasses = isSidebar
    ? "h-28 sm:h-32 md:h-36"
    : "h-52 sm:h-64 md:h-72";

  const imgSizes = isSidebar
    ? "(min-width: 768px) 260px, 100vw"
    : "(min-width: 1024px) 900px, 100vw";

  return (
    <section className={containerClasses}>
      {/* Header */}
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-900">
            {displayTitle}
          </h3>
          <p className="mt-1 max-w-xl text-xs md:text-[13px] text-gray-600">
            {displaySubtitle}
          </p>
        </div>

        {!isSidebar && items.length > 1 && (
          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
            {activeIndex + 1} / {items.length}
          </p>
        )}
      </div>

      {/* Single-slide carousel */}
      <figure
        className={
          isSidebar
            ? "group rounded-2xl border border-emerald-100 bg-emerald-50/50 p-2"
            : "group rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
        }
      >
        <div
          className={`relative w-full overflow-hidden rounded-xl bg-neutral-100 ${slideHeightClasses}`}
        >
          <Image
            src={current.image}
            alt={current.alt[locale]}
            fill
            className="object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            sizes={imgSizes}
            priority={isSidebar}
          />

          {/* Arrows */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label={locale === "it" ? "Appuntamento precedente" : "Previous appointment"}
                className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-black/5 bg-white/95 text-gray-700 shadow-sm hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={locale === "it" ? "Appuntamento successivo" : "Next appointment"}
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-black/5 bg-white/95 text-gray-700 shadow-sm hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <figcaption
          className={
            isSidebar
              ? "mt-2 text-[11px] leading-snug text-emerald-900/90"
              : "mt-3 text-xs leading-snug text-neutral-700 text-center sm:text-[13px]"
          }
        >
          {current.caption[locale]}{" "}
          <span className={isSidebar ? "block" : "inline"}>
            {disclaimer}
          </span>
          {!isSidebar && items.length > 1 && (
            <span className="mt-1 block text-[11px] text-neutral-500">
              {activeIndex + 1} / {items.length}
            </span>
          )}
        </figcaption>
      </figure>
    </section>
  );
}
