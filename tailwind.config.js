/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./export/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
