/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'google.com',
      },
    ],
  },
}
