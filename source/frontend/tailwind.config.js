/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}