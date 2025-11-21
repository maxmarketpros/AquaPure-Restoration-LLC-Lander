/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // <CHANGE> Added output: 'export' for static export compatible with Netlify
  output: 'export',
  // <CHANGE> Added trailing slash for better Netlify routing
  trailingSlash: true,
}

export default nextConfig
