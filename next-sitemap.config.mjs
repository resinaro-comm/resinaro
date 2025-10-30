// next-sitemap.config.mjs
/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://www.resinaro.com';
const LOCALES = ['en', 'it'];

// -------- DATA (edit as your site grows) --------
const CITIES = [
  'birmingham','bradford','edinburgh','glasgow','leeds',
  'liverpool','london','manchester','newcastle','york'
];
const DIR_CATEGORIES = ['delis','restaurants','shops'];

const CORE_STATIC = [
  '', 'about', 'contact', 'community', 'directory', 'services',
  'advertise', 'volunteer', 'privacy-policy', 'refund-policy', 'terms', 'cookies'
];

const COMMUNITY_SLUGS = [
  'bulk-italian-pantry-uk',
  'bureaucracy-guides/aire-registration-uk',
  'bureaucracy-guides/italian-cie-id-card-uk',
  'bureaucracy-guides/italian-passport-uk-docs-prep',
  'bureaucracy-guides/keep-aire-up-to-date-uk',
  'bureaucracy-guides/register-uk-events-with-italy',
  'buying-in-bulk-uk-italian-staples',
  'council-tax-italians-2025',
  'euss-italians-2025-share-codes-update-passport',
  'first-payslip-italians-uk-2025',
  'home-pharmacy-uk',
  'italian-essentials',
  'kids-italian-at-home',
  'life-in-uk/banking/open-monzo-account-uk-2025',
  'life-in-uk/banking/open-revolut-account-uk-2025',
  'life-in-uk/banking/open-starling-account-uk-2025',
  'life-in-uk/exchange-italian-driving-licence-uk',
  'life-in-uk/finding-affordable-housing-london-2025',
  'life-in-uk/national-insurance-number-uk-italians',
  'life-in-uk/navigating-nhs-healthcare-italians-uk-2025',
  'mental-health/loneliness-belonging-uk-30-day-plan',
  'mental-health/nhs-mental-health-access-uk',
  'moka-coffee-kit',
  'move-in-cleaning-kit-uk',
  'national-insurance-number-italians-uk-2025',
  'open-uk-bank-account-no-credit-italians-2025',
  'oyster-vs-contactless-travelcards-2025',
  'power-adapters-uk-italy',
  'proof-of-address-without-bills-2025',
  'starter-uk-kitchen-italian',
  'travel-to-italy-kit',
  'uk-desk-setup-newcomers',
  'uk-renting-for-italians-2025',
  'uk-sim-esim-newcomers-2025',
  'uk-tax-code-for-italians-2025',
  'utilities-setup-uk-2025',
  'warmth-energy-savers-uk',
];

const SERVICES = [
  '', // /services landing
  'aire','benefits','housing','id-card','nin-support','passport','settled-status','translation','visa',
];

const BLOG_POSTS = [
  { slug: 'do-you-need-italian-for-citizenship-by-descent', lastmod: '2025-08-14' },
  { slug: 'top-7-benefits-of-italian-citizenship-2025',      lastmod: '2025-07-05' },
  { slug: 'do-i-have-military-obligations-italian-citizenship', lastmod: '2025-09-03' },
];

// --------------------------- HELPERS ---------------------------
const nowISO = () => new Date().toISOString();

function pushLocalized(paths, seen, base, opts = {}) {
  // base: path WITHOUT leading slash, e.g. '', 'directory/london', 'community/foo'
  for (const lang of LOCALES) {
    const loc = base ? `/${lang}/${base}` : `/${lang}`;
    if (seen.has(loc)) continue;
    seen.add(loc);
    paths.push({
      loc,
      lastmod: opts.lastmod || nowISO(),
      changefreq: opts.changefreq || (base ? 'weekly' : 'daily'),
      priority: typeof opts.priority === 'number' ? opts.priority : (base ? 0.7 : 1.0),
      // NOTE: intentionally no hreflang here (we’ll keep hreflang in HTML head).
    });
  }
}

// --------------------------- CONFIG ---------------------------
export default {
  siteUrl: SITE_URL,
  outDir: 'public',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 45000,
  autoLastmod: true,
  trailingSlash: false,

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin', '/drafts', '/preview', '/_next/'] },
    ],
    additionalSitemaps: [],
  },

  exclude: [
    '/api/*', '/_next/*', '/images/*', '/icons/*', '/assets/*',
    '/*.png', '/*.ico', '/*.svg', '/site.webmanifest', '/*.pdf',
    '/*?*', // drop querystring URLs (?category=..., ?tag=...)
  ],

  // Minimal transform: no alternates here to avoid library quirks
  transform: async (_config, path) => ({
    loc: path.startsWith('http') ? path : `${SITE_URL}${path}`,
    lastmod: nowISO(),
    changefreq: 'weekly',
    priority: 0.7,
  }),

  additionalPaths: async () => {
    const paths = [];
    const seen = new Set();

    // 1) Core static pages
    for (const slug of CORE_STATIC) {
      pushLocalized(paths, seen, slug, {
        changefreq: slug === '' ? 'daily' : 'weekly',
        priority: slug === '' ? 1.0 : 0.7,
      });
    }

    // 2) Community articles
    for (const slug of COMMUNITY_SLUGS) {
      pushLocalized(paths, seen, `community/${slug}`, { changefreq: 'weekly', priority: 0.7 });
    }

    // 3) Services (landing + detail)
    for (const s of SERVICES) {
      const base = s ? `services/${s}` : 'services';
      pushLocalized(paths, seen, base, { changefreq: 'weekly', priority: 0.7 });
    }

    // 4) Directory index + cities + categories
    pushLocalized(paths, seen, 'directory', { changefreq: 'weekly', priority: 0.7 });
    for (const city of CITIES) {
      pushLocalized(paths, seen, `directory/${city}`, { changefreq: 'weekly', priority: 0.7 });
      for (const cat of DIR_CATEGORIES) {
        pushLocalized(paths, seen, `directory/${city}/${cat}`, { changefreq: 'weekly', priority: 0.7 });
      }
    }

    // 5) Blog posts (localized)
    for (const post of BLOG_POSTS) {
      for (const lang of LOCALES) {
        const loc = `/${lang}/blog/${post.slug}`;
        if (seen.has(loc)) continue;
        seen.add(loc);
        paths.push({
          loc,
          lastmod: `${post.lastmod}T00:00:00.000Z`,
          changefreq: 'monthly',
          priority: 0.8,
        });
      }
    }

    return paths;
  },
};
