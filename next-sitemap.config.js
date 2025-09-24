// next-sitemap.config.js
/** Adjust siteUrl to your production URL before you deploy. */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  // exclude any admin or staging paths:
  exclude: ['/admin/*', '/drafts/*'],
  // optional transform fn to tweak URLs:
  // transform: async (config, path) => ({ loc: path, changefreq: 'monthly', priority: 0.5 })
}
