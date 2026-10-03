/** @type {import('tailwindcss').Config} */
// NOTE: Tailwind v4 uses CSS-first configuration via src/styles/tokens.css
// This file is kept as a reference skeleton for future plugin/content overrides.
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // TODO: Add Mobaryn brand colors, fonts, and spacing tokens here
    },
  },
  plugins: [],
}
