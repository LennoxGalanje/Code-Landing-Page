/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html",
    "./src/index.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'green': {
          600: '#059669',
          700: '#047857',
        },
        'custom': {
          'teal': '#064B49',
          'light-teal': '#1F7A77',
          'cream': '#F3E2C8',
        }
      }
    },
  },
  plugins: [],
}
