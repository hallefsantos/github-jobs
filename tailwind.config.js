const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
