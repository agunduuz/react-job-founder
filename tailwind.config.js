/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      boxShadow: {
        custom: "0 10px 15px -3px #6D7BDC, 0 4px 6px -4px #6D7BDC",
      },
      colors: {
        text: "#353535",
        background: "#fbfbfb",
        primary: "#6d7bdc",
        secondary: "#2A469F",
        accent: "#001966",
      },
    },
  },
  plugins: [],
};
