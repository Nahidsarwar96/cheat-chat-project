
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
        promary_auth_color: '#11175D',
        secondary_auth_color: 'rgba(0, 0, 0, 0.50)',
        common_color: "rgba(17, 23, 93, 1)"
      },
      fontFamily: {
        'Nunito': ["Nunito Sans", "sans-serif"],
        'Poppins': ["Poppins", "sans-serif"]
      }
    },

  },
  plugins: [require('tailwind-scrollbar')],
}