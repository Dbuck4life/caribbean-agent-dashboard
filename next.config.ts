import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Optimize for production
  swcMinify: true,
  // Handle images
  images: {
    unoptimized: true
  }
}

export default nextConfig
