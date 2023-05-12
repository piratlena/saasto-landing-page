/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF553E',
        'background-1': '#FFF8F2',
        'background-2': '#F3FDFE',
        blue: '#70D0DC',
        purple: '#7562E0',
        'orange-1': '#FA865F',
        'dark-1': '#40201E',
        'dark-2': '#1C0E0D',
        'light-gray': '#404040',
        white: '#fff',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
  },
  plugins: [],
};
