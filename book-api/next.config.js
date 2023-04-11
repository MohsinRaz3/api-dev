/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID : "oq08i2ngazpk",
    CONTENTFUL_ENVIRONMENT : "master"
  }
}

module.exports = nextConfig
