// src/app/[locale]/404/page.tsx
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";

/**
 * Localized 404 entrypoint.
 * Unwraps the (async) params to satisfy Next 15,
 * then defers to /[locale]/not-found.tsx for the actual UI.
 */
export default async function Localized404({
  params,
}: {
  params: Promise<{ locale: Locale | string }> | { locale: Locale | string };
}) {
  // Unwrap params (supports both shapes during migration).
  const { locale } = await Promise.resolve(params);

  // You could sanity-check the locale here if you like,
  // but we just delegate to the route's not-found UI:
  notFound();
}
