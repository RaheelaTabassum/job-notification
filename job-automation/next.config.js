/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
};

module.exports = nextConfig;
