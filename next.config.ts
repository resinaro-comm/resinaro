import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      { source: "/community/blog/bureaucracy-guides", destination: "/community/bureaucracy-guides", permanent: true },
      { source: "/community/blog/life-in-uk", destination: "/community/life-in-uk", permanent: true },
      { source: "/community/blog/community-stories", destination: "/community/community-stories", permanent: true },
      { source: "/community/blog/mental-health", destination: "/community/mental-health", permanent: true }
    ];
  },
};

export default withMDX(nextConfig);
