/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com']

  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /** Redirect /store to external storepage */
  async redirects() {
    return [
      {
        source: '/store',
        destination: `${process.env.PIXIESET_URL}`,
        permanent: true,
      },
      {
        source: '/',
        destination: '/portfolio',
        permanent: true,
      },]
  },
};

export default nextConfig;
