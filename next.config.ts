import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  async redirects() {
    return [
      // Room URLs from the previous site version (they were serving a 200 "404" page).
      { source: "/rooms/andrews-villa", destination: "/rooms/the-andrews-villa/", permanent: true },
      { source: "/rooms/the-zenith", destination: "/rooms/zenith-luxury-cottage/", permanent: true },
    ];
  },
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "eazotel-client-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },

      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
  },
};

export default nextConfig;
