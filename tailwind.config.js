const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      blue: {
        dark: '#334680',
        DEFAULT: '#1E86FF'
      },
      gray: {
        dark: '#282538',
        DEFAULT: '#B9BDCF',
        light: '#F6F7FB'
      },
      white: '#FFF'
    },
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
