/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    './node_modules/@my-company/tailwind-components/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
