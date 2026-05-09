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
        'primary-light': '#aae5e5',
        'secondary': '#ff4500',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-light-extra': '#eee',
        'grey-light': '#dedede',
        'grey-medium': '#888',
        'grey-dark': '#333',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#dedede',
        'grey-5': '#eee',
        'grey-6': '#fafafa'
      },
    },
  },
  plugins: [],
}

