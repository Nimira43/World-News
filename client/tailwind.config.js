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
        'light': '#fffcfa',
        'grey-light-extra': '#eee',
        'grey-light': '#dedede',
        'grey-medium': '#888',
        'grey-dark': '#333',
        'red-theme': '#f13a3a',    
        'blue-theme': '#5584fc',
        'green-theme': '#2fc32f',      
        'purple-theme': '#f266f2',    
        'orange-theme': '#fcae1d',    
      },
    },
  },
  plugins: [],
}

