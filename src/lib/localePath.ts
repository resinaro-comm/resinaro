// src/lib/localePath.ts
export type Locale = "en" | "it";

/**
 * Creates a locale-prefixed path for internal navigation.
 * @param locale - The locale to prefix with
 * @param path - The path to localize (can start with / or not)
 * @returns A path like "/en/contact" or "/it/services/passport"
 */
export const p = (locale: Locale, path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath}`.replace(/\/{2,}/g, "/");
};

/**
 * Hook to extract locale from current pathname in client components
 * Returns the locale from the first segment of the path
 */
export const useLocaleFromPathname = (): Locale => {
  if (typeof window === 'undefined') return 'en'; // SSR fallback
  
  const pathname = window.location.pathname;
  const firstSegment = pathname.split('/')[1];
  
  if (firstSegment === 'en' || firstSegment === 'it') {
    return firstSegment;
  }
  
  return 'en'; // fallback
};