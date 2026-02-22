import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for next/image with output: 'export'
  },
};

export default nextConfig;
