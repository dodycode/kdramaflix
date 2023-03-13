/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.TMD_API_BASE_URL,
    API_KEY: process.env.TMD_API_KEY,
    IMAGE_API_URL: process.env.TMD_IMAGE_API_BASE_URL,
    YOUTUBE_API_URL: process.env.TMD_VIDEO_API_BASE_URL,
    VIMEO_API_URL: process.env.TMD_VIMEO_API_BASE_URL,
  },
};

module.exports = nextConfig;
