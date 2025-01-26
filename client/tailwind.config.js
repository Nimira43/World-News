/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008080',
        'secondary': '#ff4500',
        'light': '#fffcfa',
        'grey-light': '#ffd700',
        'grey-medium': '#888',
        'grey-dark': '#333',
      },
    },
  },
  plugins: [],
}

