import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Necessary for static app to deploy for Github Pages
  output: "export",
  basePath: "/IdleCompanion",

  // Does NOT work with: output: "export",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/marketplace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
