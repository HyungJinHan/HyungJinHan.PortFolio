/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
