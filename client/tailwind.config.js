/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Blue
        primaryDark: "#0056b3", // Dark Blue
        secondary: "#FF6F61", // Coral
        secondaryDark: "#E05A4F", // Dark Coral
        tertiary: "#00ACCF", // Cyan
        tertiaryDark: "#0496b4", // Dark Cyan
      },
    },
    fontFamily: {
      serif: ["Open Sans", "sans-serif"],
      display: ["Righteous", "sans-serif"],
      roboto: ["Roboto Condensed", "sans-serif"],
      robotoNormal: ["Roboto", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
