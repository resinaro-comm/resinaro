// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Supported locales and defaults */
const LOCALES = ["en", "it"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";
const LOCALE_COOKIE = "NEXT_LOCALE";

/** Skip patterns: Next internals, API, assets, files with extensions, SEO assets, etc. */
const SKIP_PATTERNS: RegExp[] = [
  /^\/_next/,          // Next internals
  /^\/api/,            // API routes
  /^\/assets/,         // /assets
  /^\/static/,         // /static
  /^\/images/,         // images folder
  /^\/fonts/,          // fonts
  /^\/favicon\.ico$/,  // favicon
  /^\/robots\.txt$/,   // robots
  /^\/sitemap(\.xml|-\d+\.xml)?$/, // sitemap.xml, sitemap-*.xml
  /\.[a-z0-9]+$/i,     // any file with an extension (.png, .css, .js, etc.)
];

/** Extra paths to skip to avoid redirect loops (404s, etc.). */
const SKIP_EXACT: string[] = [
  "/404",
  "/en/404",
  "/it/404",
];

/** Does the path already start with a supported locale? */
function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

/** Should we skip middleware processing for this path? */
function shouldSkip(pathname: string): boolean {
  if (SKIP_EXACT.includes(pathname)) return true;
  return SKIP_PATTERNS.some((re) => re.test(pathname));
}

/** Pick a locale from Accept-Language (very small helper) */
function pickFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  const tokens = header
    .split(",")
    .map((s) => s.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const t of tokens) {
    const base = t!.split("-")[0]; // "it-IT" -> "it"
    if ((LOCALES as readonly string[]).includes(base as Locale)) {
      return base as Locale;
    }
  }
  return DEFAULT_LOCALE;
}

/** Build URL: /{locale}{pathname}, preserving query string */
function toLocalizedUrl(req: NextRequest, locale: Locale): URL {
  const url = req.nextUrl.clone();
  const path = url.pathname;
  url.pathname = `/${locale}${path.startsWith("/") ? "" : "/"}${path}`.replace(/\/{2,}/g, "/");
  // url.search is preserved by clone()
  return url;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Skip files, assets, Next internals, API, SEO assets, and exact skip list
  if (shouldSkip(pathname)) {
    return NextResponse.next();
  }

  // 2) If already localized, sync cookie (for nicer subsequent redirects) and continue
  if (hasLocalePrefix(pathname)) {
    const current = pathname.split("/")[1] as Locale;
    const cookieLocale = (req.cookies.get(LOCALE_COOKIE)?.value || "") as Locale;

    if (cookieLocale !== current) {
      const res = NextResponse.next();
      res.cookies.set(LOCALE_COOKIE, current, {
        path: "/",
        maxAge: 60 * 60 * 24 * 180, // 180 days
        sameSite: "lax",
      });
      return res;
    }
    return NextResponse.next();
  }

  // 3) No locale in path -> choose: cookie -> Accept-Language -> default
  const cookieLocale = (req.cookies.get(LOCALE_COOKIE)?.value || "") as Locale;
  const chosen: Locale =
    ((LOCALES as readonly string[]).includes(cookieLocale) && cookieLocale) ||
    pickFromAcceptLanguage(req.headers.get("accept-language")) ||
    DEFAULT_LOCALE;

  const target = toLocalizedUrl(req, chosen);

  const res = NextResponse.redirect(target, 307); // preserve method/body on POSTs
  res.cookies.set(LOCALE_COOKIE, chosen, {
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
    sameSite: "lax",
  });
  return res;
}

/** Apply to everything except _next, api and files (extensions) */
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
