/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wordpress-821607-5011314.cloudwaysapps.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
