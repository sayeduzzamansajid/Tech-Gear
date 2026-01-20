/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // This allows the build to finish even if there are linting errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;