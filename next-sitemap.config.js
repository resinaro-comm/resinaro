// next-sitemap.config.js
// Set SITE_URL in your env (e.g., https://www.resinaro.com) for correct canonical URLs.
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  autoLastmod: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/drafts/*', '/dashboard', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
    ],
    additionalSitemaps: [
      // Add more if you split sitemaps later
    ],
  },
  transform: async (config, path) => {
    // Boost priority for key landing pages and reduce for utility pages.
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/' || path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'daily';
    }
    if (path.startsWith('/community')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    if (path.startsWith('/privacy') || path.startsWith('/cookies') || path.startsWith('/terms')) {
      priority = 0.3;
      changefreq = 'yearly';
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        // If you add i18n later, list hreflang alternates here.
        // { href: config.siteUrl, hreflang: 'x-default' }
      ],
    };
  },
};
