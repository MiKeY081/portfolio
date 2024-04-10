/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-24": "rgb(24,25,26)",
        "gray-36": "rgb(36,37,38)",
        "gray-60": "rgb(58,59,60)",
      },
    },
  },
  plugins: [],
};
