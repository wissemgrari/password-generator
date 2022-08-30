/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontWeight: {
      md: '500',
      lg: '700',
    },
    screens: {
      mobile: '375px',
      desktop: '768px',
    },
    extend: {
      colors: {
        darkBlue: '#131218',
        lightBlue: '#24232B',
        green: '#ABF0B5',
        white: '#D2D0D9',
        grey: '#787878',
      },
    },
  },
  plugins: [],
};
