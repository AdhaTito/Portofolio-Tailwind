/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        mainColor: "#FF7A00",
        secondaryColor: "#3F4F6F",
        ascentColor: "#F09C4E",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), "prettier-plugin-tailwindcss"],
};
