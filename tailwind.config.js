/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4D2E',
        accent: '#FFB347',
        beige: '#F9F6F1',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 80s linear infinite',
      },
    },
  },
  safelist: [
    'opacity-[0.35]'
  ],
  plugins: [],
};
