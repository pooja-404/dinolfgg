/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chewy': 'Chewy',
        'bal': 'Balsamiq Sans',
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
      animation: {
        'bounce-slow': 'bounce 2s linear'
      }
    },
  },
  plugins: [],
}