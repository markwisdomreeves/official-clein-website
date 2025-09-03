// next.config.mjs
import withPWA from 'next-pwa';

/**
 * Next.js + PWA configuration
 * - Keeps Image Optimizer ON by default (AVIF/WebP when possible)
 * - Allows Unsplash / UI Avatars / RandomUser images via remotePatterns
 * - Sensible runtime caching for PWA
 */

const isDev = process.env.NODE_ENV !== 'production';

// Allow turning the Image Optimizer OFF via either env var.
const isUnoptimized =
  (process.env.NEXT_IMAGE_UNOPTIMIZED ?? '').toLowerCase() === 'true' ||
  (process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ?? '').toLowerCase() === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // Show web-vitals attribution for CLS/LCP during development
    webVitalsAttribution: ['CLS', 'LCP'],
  },

  images: {
    // Keep optimizer ON unless explicitly disabled via env
    unoptimized: isUnoptimized,

    // Harmless perf win: let Next serve modern formats when available
    formats: ['image/avif', 'image/webp'],

    // Remote image allowlist
    remotePatterns: [
      // RandomUser portraits
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      // UI Avatars
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
      // Unsplash (primary)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Unsplash (plus)
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // If you later need CSP headers for images, you can add a headers() block.
  // Keeping it out for now avoids accidentally breaking existing behavior.
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: [
  //             "img-src 'self' data: blob: https://images.unsplash.com https://plus.unsplash.com https://ui-avatars.com https://randomuser.me;",
  //           ].join(' '),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

const withPWAWrapped = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,

  // Disable service worker while developing to avoid cache confusion
  disable: isDev,

  // Keep SW path predictable (root scope)
  scope: '/',
  sw: 'sw.js',

  // Trim noisy build artifacts from the precache
  buildExcludes: [/middleware-manifest\.json$/],

  // Runtime caching rules
  runtimeCaching: [
    // Google Fonts - webfonts
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    // Google Fonts - stylesheets
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    // Font files
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font\.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-font-assets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    // Images
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Next/Image optimizer endpoint
    {
      urlPattern: /\/_next\/image\?url=.+$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'next-image',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Audio
    {
      urlPattern: /\.(?:mp3|wav|ogg)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-audio-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Video
    {
      urlPattern: /\.(?:mp4)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-video-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // JS
    {
      urlPattern: /\.(?:js)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-js-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // CSS
    {
      urlPattern: /\.(?:css|less)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-style-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Next.js data files
    {
      urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'next-data',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Data documents
    {
      urlPattern: /\.(?:json|xml|csv)$/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static-data-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Fallback: everything else
    {
      urlPattern: /.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
});

export default withPWAWrapped(nextConfig);
