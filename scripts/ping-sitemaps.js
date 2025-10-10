// scripts/ping-sitemaps.js
// Notifies Google and Bing that the sitemap has changed.
// Requires SITE_URL env to be set (e.g., https://www.resinaro.com)
import https from 'node:https';
import { URL } from 'node:url';

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
const sitemapUrl = new URL('/sitemap.xml', SITE_URL).toString();

const endpoints = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
];

function ping(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        // consume and ignore body
        res.on('data', () => {});
        res.on('end', () => resolve({ url, status: res.statusCode }));
      })
      .on('error', () => resolve({ url, status: 0 }));
  });
}

Promise.all(endpoints.map(ping)).then((results) => {
  for (const r of results) {
    console.log(`Pinged ${r.url} -> ${r.status}`);
  }
});
