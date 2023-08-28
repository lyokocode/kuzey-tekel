/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      // => @media (min-width: 480px) { ... }
      'phone': '480px',

      // => @media (min-width: 640px) { ... }
      'tablet': '640px',

      // => @media (min-width: 1024px) { ... }
      'laptop': '1024px',

      // => @media (min-width: 1280px) { ... }
      'desktop': '1280px',
    },

  },
  plugins: [],
}