/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'fakestoreapi.com','img-c.udemycdn.com'],
  },
}

module.exports = nextConfig
