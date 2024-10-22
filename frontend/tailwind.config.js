/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'shake' : {
                    '10%': {
                        transform: 'translate3d(-1px, 0, 0)'
                    },
                    '20%' : {
                        transform: 'translate3d(7px, 0, 0)'
                    },
                    '30%': {
                        transform: 'translate3d(-7px, 0, 0)'
                    },
                    '40%': {
                        transform: 'translate3d(7px, 0, 0)'
                    },
                    '50%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                    '60%' : {
                        transform: 'translate3d(6px, 0, 0)'
                    },
                    '70%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                    '80%': {
                        transform: 'translate3d(7px, 0, 0)'
                    },
                    '90%': {
                        transform: 'translate3d(7px, 0, 0)'
                    },
                    '100%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'shake': 'shake .2s infinite',
      },
      backgroundImage: {
        'hero-pattern1': "url('./src/assets/bernd-dittrich-iu3rfmYLuzI-unsplash.jpg')",
        
        
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