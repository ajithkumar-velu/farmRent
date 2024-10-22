/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern1': "url('./src/assets/bernd-dittrich-iu3rfmYLuzI-unsplash.jpg')",
      },
      colors: {
        primary: "#4caf50"
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fill, minmax(230px, 1fr))"
      }
    },
  },
  plugins: [],
}