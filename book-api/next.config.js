/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE: "oq08i2ngazpk",
    CONTENTFUL_ENV: "master"
  }
}

module.exports = nextConfig
