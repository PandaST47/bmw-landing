/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bmw-blue': '#0066CC',
        'bmw-accent': '#FF6B35',
        'bmw-black': '#000000',
        'bmw-white': '#FFFFFF',
        'bmw-gray': '#F5F5F5',
      },
      fontFamily: {
        bmw: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}