/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        text: '#2C3E50',
        'light-bg': '#F7F9FC'
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}