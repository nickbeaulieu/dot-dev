/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
