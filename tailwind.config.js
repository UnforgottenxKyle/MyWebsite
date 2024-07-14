/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Lexend"],
    },
    screens: {
      sm: "0px",
      lg: "1000px",
    },
  },
  plugins: [],
};
