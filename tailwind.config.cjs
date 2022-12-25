/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#772CE8",
        "primary-light": "#9146FF",
        "gray-1": "#E5E5E5",
        "gray-2": "#EFEFF1",
        "gray-3": "#F7F7F8",
      },
    },
  },
  plugins: [],
};
