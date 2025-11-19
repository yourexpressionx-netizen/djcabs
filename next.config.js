/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fixb6-1.fna.fbcdn.net',
      },
    ],
  },
  // Server components and API routes enabled by default in Next.js 13+
}

module.exports = nextConfig