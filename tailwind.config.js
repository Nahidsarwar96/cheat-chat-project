/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        blue_color: '#5F35F5',
        promary_text_color: '11175D',
        secondary_text_color: 'rgba(0, 0, 0, 0.50)'
      },
      fontFamily: {
        'Nunito': ["Nunito Sans", "sans-serif"],
      }
    },

  },
  plugins: [],
}