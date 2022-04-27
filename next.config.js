/** @type {import('next').NextConfig} */
const API_URL = "https://api.dongletrade.com";
// const API_URL = "http://192.168.112.108:9090";

module.exports = {
  reactStrictMode: true,
  env: {
    ApiUrl: `${API_URL}/api/v1`,
    expiretime: 86400,
    firstStage: "2022-03-1",
    secondStage: "2022-03-15",
    thirdStage: "2022-04-15",
    lastStage: "2022-12-31",
  },
  staticPageGenerationTimeout: 1000,
};
