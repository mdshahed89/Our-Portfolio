/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {},
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
