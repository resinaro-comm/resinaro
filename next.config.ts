// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

// Use your root-level next-intl.config.ts
const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // Prefer AVIF, then WebP; browsers without support fall back to the original
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/community/blog/bureaucracy-guides", destination: "/community/bureaucracy-guides", permanent: true },
      { source: "/community/blog/life-in-uk", destination: "/community/life-in-uk", permanent: true },
      { source: "/community/blog/community-stories", destination: "/community/community-stories", permanent: true },
      { source: "/community/blog/mental-health", destination: "/community/mental-health", permanent: true }
    ];
  }
};

// Compose plugins (intl + MDX)
export default withNextIntl(withMDX(nextConfig));
