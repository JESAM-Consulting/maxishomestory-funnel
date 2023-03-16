/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      visby: ["Visby", "system-ui"],
    },

    extend: {
      colors: {
        green: {
          1: "#a18a7d",
          // 1: "#a18a7d",
        },
      },
    },
  },
  plugins: [],
};
