/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          to: { transform: 'translateX(calc(-100% - 1.25rem))' },
        },
      },
      animation: {
        slideIn: 'slideIn 20s linear infinite',
      },
    },
  },
  plugins: [],
};
