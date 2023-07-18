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
    ],
  },
};
export default config;
