import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
