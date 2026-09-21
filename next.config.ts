import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* optional: set basePath or images configuration if hosting on GitHub Pages, S3, etc. */
  // basePath: "/subfolder",
  // images: { unoptimized: true },
};

export default nextConfig;
