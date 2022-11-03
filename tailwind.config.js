/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "blue-900": "#102b56",
      "red-400": "#d95e51",
      "yellow-200": "#fae896",
      "yellow-400": "#e1c544",
    },
  },
  plugins: [],
};
