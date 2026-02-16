import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './app/**/*.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      // Monochrome palette
      primary: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
      },
      yellow: {
        500: '#eab308',
        600: '#ca8a04',
      },
    },
    fontFamily: {
      mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

