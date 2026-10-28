/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Static export so the catalog can be hosted on GitHub Pages at /shipyard.
const nextConfig = {
  output: "export",
  basePath: isProd ? "/shipyard" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
