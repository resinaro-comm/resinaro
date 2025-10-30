/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://www.resinaro.com';

const locales = ['en', 'it'];
const BLOG_POSTS = [
  { slug: 'do-you-need-italian-for-citizenship-by-descent', lastmod: '2025-08-14' },
  { slug: 'top-7-benefits-of-italian-citizenship-2025',      lastmod: '2025-07-05' },
  { slug: 'do-i-have-military-obligations-italian-citizenship', lastmod: '2025-09-03' },
];

function altLinks(path) {
  return locales.map((l) => ({
    href: `${SITE_URL}/${l}/${path}`,
    hreflang: l,
  }));
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 45000,
  outDir: 'public',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin', '/drafts', '/preview'] }
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`
    ]
  },
  additionalPaths: async () => {
    const paths = [];

    // Static pages (localized)
    const staticPaths = ['', 'directory', 'services', 'community', 'about', 'contact', 'blog'];
    for (const l of locales) {
      for (const p of staticPaths) {
        const path = p ? `${l}/${p}` : `${l}`;
        paths.push({
          loc: `/${path}`,
          changefreq: 'weekly',
          priority: p === '' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: altLinks(p),
        });
      }
    }

    // Blog posts (localized)
    for (const post of BLOG_POSTS) {
      for (const l of locales) {
        const sub = `blog/${post.slug}`;
        paths.push({
          loc: `/${l}/${sub}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: `${post.lastmod}T00:00:00.000Z`,
          alternateRefs: altLinks(sub),
        });
      }
    }

    // Image hints (OG + logo)
    paths.push({
      loc: `/images/og/resinaro-og.png`,
      lastmod: new Date().toISOString(),
      img: [
        { loc: `${SITE_URL}/images/og/resinaro-og.png`, title: 'Resinaro — Open Graph image' },
        { loc: `${SITE_URL}/logo.png`, title: 'Resinaro — Logo' },
      ],
    });

    return paths;
  },
};
