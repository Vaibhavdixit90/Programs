/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "programs.guruatmananda.com",
      },
      // Add more domains here as needed
    ],
  },
};

export default nextConfig;
