import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows production builds to succeed even if there are TypeScript errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
