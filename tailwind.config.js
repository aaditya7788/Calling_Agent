/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color' : 'var(--bg-color)',
        'main-color' : 'var(--main-color)',
        'support-color' : 'var(--support-color)',
      }
    },
  },
  plugins: [],
}

