/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': {'min': '365px', 'max': '616px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '617px', 'max': '1032px'},
      // => @media (min-width: 768px) { ... }

      'lg': '1033px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#0EB9F0',
        dark: '#1C1C1C'
      }
    },
  },
  plugins: [],
}

