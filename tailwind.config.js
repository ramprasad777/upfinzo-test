// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marqueeLTR: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marqueeRTL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        animationTB: {
          "0%":   { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "50% 100%" },
        },
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        marqueeLTR: 'marqueeLTR 5s linear infinite',
        marqueeRTL: 'marqueeRTL 2s linear infinite',
        animationTB: 'animationTB 5s linear infinite',
      },
    },
  },
  plugins: [],
};