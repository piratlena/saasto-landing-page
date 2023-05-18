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
        'dark-blue': '#221ECA',
        purple: '#7562E0',
        'orange-1': '#FA865F',
        'dark-1': '#40201E',
        'dark-2': '#1C0E0D',
        gray: '#18181B',
        'light-gray': '#404040',
        pink: '#FE6292',
        white: '#fff',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
