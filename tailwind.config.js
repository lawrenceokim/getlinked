/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1206px",
        xl: "1440px",
      },
      colors: {
        primary: "#150E28",
        pink: "#d434fe",
        purple: "#903AFF",
        red: "#FF26B9",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["poppins", "Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
        serrat: [" Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
