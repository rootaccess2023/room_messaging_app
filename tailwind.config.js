/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neurial-extrabold': ['"Neurial Grotesk Extrabold"', 'sans-serif'],
        'rubik-regular': ['"Rubik Regular"', 'sans-serif'],
        'rubik-light': ['"Rubik"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

