import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypePrism],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

// Merge MDX config with Next.js config
export default nextConfig
