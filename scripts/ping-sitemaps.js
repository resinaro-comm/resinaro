// Pings Google & Bing after sitemap generation.
// Runs in postbuild: node ./scripts/ping-sitemaps.js
const https = require('https');

const SITE_URL = 'https://www.resinaro.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

function ping(host, path) {
  return new Promise((resolve) => {
    const url = `https://${host}${path}${encodeURIComponent(SITEMAP_URL)}`;
    https
      .get(url, (res) => {
        const ok = res.statusCode && res.statusCode >= 200 && res.statusCode < 400;
        console.log(`[ping] ${host} -> ${res.statusCode} ${ok ? 'OK' : 'WARN'}`);
        resolve(true);
      })
      .on('error', (err) => {
        console.warn(`[ping] ${host} error:`, err.message);
        resolve(false);
      });
  });
}

(async () => {
  await ping('www.google.com', '/ping?sitemap=');
  await ping('www.bing.com', '/webmaster/ping.aspx?siteMap=');
})();
