/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Bellefair", "system-ui"],
      secondary: ["Barlow Condensed", "system-ui"],
      tertiary: ["Barlow", "system-ui"],
    },
    colors: {
      black: "#0b0d17",
      blue: "#d0d6f9",
      white: "#fff",
      separator: "#383b4b"
    },
  },
  plugins: [],
}

