/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#10b981",
        "dark-bg": "#0f172a",
      },
    },
  },
  plugins: [],
};
