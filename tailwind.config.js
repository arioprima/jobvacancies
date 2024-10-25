/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-custom": "#82FD6E",
        'primary': '#F1F2F4',
      },
    },
  },
  // plugins: [require("rippleui")],
  plugins: [
    require("rippleui")
  ],
}

