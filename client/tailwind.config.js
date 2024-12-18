/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: "#007BFF", // Blue
        primaryDark: "#0056b3", // Dark Blue
        secondary: "#FF6F61", // Coral
        secondaryDark: "#E05A4F", // Dark Coral
        tertiary: "#00ACCF", // Cyan
        tertiaryDark: "#0496b4", // Dark Cyan
=======
        primary: "#ada2ff",
        primaryDark: "#8f86d7",
        secondary: "#EE9B01",
        secondaryDark: "#d48b02",
        tertiary: "#00ACCF",
        tertiaryDark: "#0496b4",
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
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
