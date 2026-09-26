import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  expoerimental:{
    turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
