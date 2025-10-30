/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://www.resinaro.com';
const LOCALES = ['en', 'it'];
const DEFAULT_LANG = 'en';

const BLOG_POSTS = [
  { slug: 'do-you-need-italian-for-citizenship-by-descent', lastmod: '2025-08-14' },
  { slug: 'top-7-benefits-of-italian-citizenship-2025',      lastmod: '2025-07-05' },
  { slug: 'do-i-have-military-obligations-italian-citizenship', lastmod: '2025-09-03' },
];

// Normalize and split a path into { locale, subpath }.
// subpath always starts with "/" or is "" (home).
function splitLocale(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  const parts = p.split('/').filter(Boolean); // e.g., ['en','directory','london']
  const first = parts[0];
  const hasLocale = LOCALES.includes(first);
  const locale = hasLocale ? first : DEFAULT_LANG;
  const subparts = hasLocale ? parts.slice(1) : parts;
  const subpath = subparts.length ? `/${subparts.join('/')}` : '';
  return { locale, subpath };
}

export default {
  siteUrl: SITE_URL,
  outDir: 'public',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 45000,
  autoLastmod: true,
  trailingSlash: false,

  // Minimal, correct robots rules
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin', '/drafts', '/preview', '/_next/'] },
    ],
    // Leave empty—do NOT point to /sitemap.xml to avoid self-referencing loops
    additionalSitemaps: [],
  },

  // Never index build/system assets
  exclude: ['/api/*', '/_next/*', '/images/*', '/favicon*', '/icons/*'],

  // Build hreflang per-URL to avoid /en/en/... duplicates
  transform: async (_config, path) => {
    const { locale, subpath } = splitLocale(path);

    // Build clean alternates for each supported language
    const languages = {};
    for (const l of LOCALES) {
      languages[l] = `${SITE_URL}/${l}${subpath}`;
    }
    languages['x-default'] = `${SITE_URL}/${DEFAULT_LANG}${subpath}`;

    // Canonical loc matches the localized path we’re on
    const loc = `${SITE_URL}/${locale}${subpath}`.replace(/\/+$/, ''); // trim trailing '/'

    const isLangHome = subpath === '' && LOCALES.includes(locale);
    const isHome = path === '/' || isLangHome;

    return {
      loc,
      lastmod: new Date().toISOString(),
      changefreq: isHome ? 'daily' : 'weekly',
      priority: isHome ? 1.0 : 0.7,
      alternates: { languages }, // next-sitemap v4 emits <xhtml:link> from this
      // images: [...] // Optional: add <image:image> only for blog posts later
    };
  },

  // Explicit URLs to include; transform() will attach hreflang
  additionalPaths: async () => {
    const paths = [];

    // Localized static sections
    const staticSubpaths = ['', 'directory', 'services', 'community', 'about', 'contact', 'blog'];
    for (const l of LOCALES) {
      for (const sub of staticSubpaths) {
        const loc = sub ? `/${l}/${sub}` : `/${l}`;
        const isHome = sub === '';
        paths.push({
          loc,
          lastmod: new Date().toISOString(),
          changefreq: isHome ? 'daily' : 'weekly',
          priority: isHome ? 1.0 : 0.7,
        });
      }
    }

    // Localized blog posts
    for (const post of BLOG_POSTS) {
      for (const l of LOCALES) {
        paths.push({
          loc: `/${l}/blog/${post.slug}`,
          lastmod: `${post.lastmod}T00:00:00.000Z`,
          changefreq: 'monthly',
          priority: 0.8,
        });
      }
    }

    // ⛔ Do not add standalone images here.
    // If you want image sitemaps later, we’ll attach <image:image> per blog URL in transform().

    return paths;
  },
};
