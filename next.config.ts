import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ukcatalogue.oup.com",
      },
    ],
  },
};

export default nextConfig;
