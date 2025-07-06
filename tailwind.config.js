/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./signup.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

