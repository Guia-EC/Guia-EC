/** @type {import('next').NextConfig} */

// 1. Importa a biblioteca PWA no topo
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Desativa em ambiente de desenvolvimento
});

// 2. Suas configurações atuais continuam aqui
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
};

// 3. A linha mais importante: envolvemos suas configs com o withPWA
module.exports = withPWA(nextConfig);
