/** @type {import('next').NextConfig} */
const API_URL = "http://192.168.112.108:9090";

module.exports = {
  reactStrictMode: true,
  env: {
    ApiUrl_: "http://61ca012220ac1c0017ed8f53.mockapi.io/get/1",
    ApiUrl: `${API_URL}/api/v1`,
  },
};
