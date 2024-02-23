/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.ytimg.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
