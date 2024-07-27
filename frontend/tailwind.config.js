/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],

  theme: {
    extend: {},
    fontFamily: {
      myfont1: ["myFont1", "sans-serif"],
      myfont2: ["myFont2", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}

