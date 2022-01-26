/** @type {import('next').NextConfig} */
const API_URL = "https://api.dongletrade.com";

module.exports = {
  reactStrictMode: true,
  env: {
    ApiUrl: `${API_URL}/api/v1`,
  },
};
