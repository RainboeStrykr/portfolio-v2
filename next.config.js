/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
      "media2.dev.to",
      "miro.medium.com",
      "www.pymnts.com"
    ],
  },
};

module.exports = nextConfig;
