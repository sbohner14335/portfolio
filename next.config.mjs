/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

export default nextConfig