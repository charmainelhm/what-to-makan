/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        "blue-800": "#102b56",
        "blue-900": "#0e2346",
        "blue-1000": "#0a1a33",
        "red-400": "#d95e51",
        "yellow-100": "#f6f6f3",
        "yellow-200": "#fae896",
        "yellow-300": "#fbd737",
        "yellow-400": "#e9c835",
      },
    },
  },
  plugins: [],
  varients: {
    extend: {
      display: ["group-hover"],
    },
  },
};
