import type { NextConfig } from 'next'

const repo = 'girlfriend-helper'

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig