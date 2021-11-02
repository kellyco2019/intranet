module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],},
  },
  plugins: [require('@tailwindcss/forms'),],
}
