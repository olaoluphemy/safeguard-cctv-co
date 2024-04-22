/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Work Sans, sans-serif",
    },
    extend: {
      colors: {
        faintBlue: "#F2F8FF",
        bgDarkblue: "#002147",
        darkOrange: "#FF6D00",
        faintOrange: "rgba(255, 109, 0, 0.3)",
        textLight: "#858282",
        borderLight: "#C1BFBF",
        navHover: "rgba(255, 255, 255, 0.1)",
        navOverlay: "rgba(0, 33, 71, 0.2)",
      },
      textColor: {
        darkBlue: "#002147",
      },
      gridTemplateColumns: {
        table: "2fr 1fr 1fr 1fr 0.3fr",
        checkout: "2fr 1fr",
        test: "2fr 1fr",
      },
    },
  },
  plugins: [],
};
