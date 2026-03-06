import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/hizmetlerimiz", destination: "/hizmetler", permanent: true },
      { source: "/hizmetlerimiz/:path*", destination: "/hizmetler", permanent: true },
      { source: "/hakkimizda/ilkelerimiz", destination: "/hakkimizda", permanent: true },
      { source: "/urunlerimiz/:path*", destination: "/hizmetler", permanent: true },
    ];
  },
};

export default nextConfig;
