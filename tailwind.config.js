/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./components/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "white",
        secondary: "#CECECE",
        darkGold: "#B8860B",
      },
    },
  },

  plugins: [],
};
