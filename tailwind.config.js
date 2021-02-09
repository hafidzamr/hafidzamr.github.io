const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', ...fontFamily.sans, ...fontFamily.mono]
    }
  },
  variants: {
    extend: {
      textColor: ['visited']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
