/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0140",
        secondary: "#FF9228",
        lightPurple: "#D6CDFE",
        lighterPurple: "#524B6B",
      },
    },
  },
  plugins: [],
};
