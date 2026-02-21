import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: ["i.scdn.co", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
