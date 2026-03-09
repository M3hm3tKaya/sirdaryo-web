import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/hizmetler", destination: "/cozumler", permanent: true },
      { source: "/hizmetler/:path*", destination: "/cozumler/:path*", permanent: true },
      { source: "/hizmetlerimiz", destination: "/cozumler", permanent: true },
      { source: "/hizmetlerimiz/:path*", destination: "/cozumler", permanent: true },
      { source: "/hakkimizda/ilkelerimiz", destination: "/hakkimizda", permanent: true },
      { source: "/urunlerimiz/:path*", destination: "/cozumler", permanent: true },
      { source: "/cozumlerimiz", destination: "/cozumler", permanent: true },
    ];
  },
};

export default nextConfig;
