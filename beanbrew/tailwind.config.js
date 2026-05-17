/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E7CB8",
        "primary-light": "#E8F4FD",
        "text-dark": "#1A1A1A",
        "text-mid": "#999999",
        "bb-border": "#EDE8E2",
        "bb-bg": "#FAFAF8",
        danger: "#E24B4A",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

