/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#9AA4D9',
        'light-gray': '#E5E5E5',
        'skyblue': '#35BCE7',
        'darkblue': '#39468C',
        'graycustom': '#999999',
        'orangecustom': '#FF6B38',
        'darkgray': '#1E1E1E',
      },
      backgroundImage: {
        'gradient-sunset-sunrise': 'linear-gradient(84.67deg, #FF6B38 0%, #FFD201 100%)',
        'gradient-sky-green': 'linear-gradient(84.67deg, #BFE27D 0%, #35BCE7 100%)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

