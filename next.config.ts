import type { NextConfig } from "next";

const headers = [
  {
    key: "Cache-Control",
    value: "no-store, no-cache, max-age=0",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: "/",
        headers: [...headers],
      },
    ];
  },
};

export default nextConfig;
