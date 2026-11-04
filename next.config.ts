/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Old v1 URLs -> new structure
    async redirects() {
        return [
            { source: '/:lang(en|th)/destinations', destination: '/:lang#tours', permanent: true },
            { source: '/:lang(en|th)/destinations/:id', destination: '/:lang/tours/:id', permanent: true },
            { source: '/:lang(en|th)/fleet', destination: '/:lang#boats', permanent: true },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
