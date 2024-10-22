/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [
      {
        // Allow images from dummyjson.com
        protocol: 'https',
        hostname: 'dummyjson.com',
        pathname: '/**', // Allows all paths under dummyjson.com
      },
    ],
  },
};

export default nextConfig;
