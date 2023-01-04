/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ['Ubuntu', "sans-serif"],
    },
    colors: {
      "spotify":{
        green: "#1DB954",
        dark: "#191414",
        gray: "#7C7C7C",
      },
      "white": "#ffffff",
      "frame": "#121010",
    }
  },
  plugins: [],
}
