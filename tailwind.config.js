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
        'primary': '#F8F9FC',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("rippleui")],
}

