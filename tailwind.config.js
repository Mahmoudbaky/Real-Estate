/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#05746c",
        "brand-blue-light": "#5fafae",
      },
    },
  },
  plugins: [],
};
