/** @type {import('next').NextConfig} */
const config = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.iconify.design",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "api.iconify.design",
        port: "",
        pathname: "/*",
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(config);
