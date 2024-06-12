/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteI': '#91B3FA',
        'whiteF': '#D7E2F9',
        'blueI': '#4E51FE',
        'blueF': '#7D97F4',
        'inputI': '#91B3FA',
        'inputF': '#5A5CEB',
        'btnI': '#91B3FA',
        'btnF': '#797AE0',
        'btnColor': '#6E70D9',
        'titleC': '#4F52FF',
        'secondS': '#E9F0FF',
        'light': '#8E8E8E',
        'dark': '#5E5E5E'
      },
      fontFamily: {
        'fontCaveat': '"Caveat", cursive'
      },
    },
  },
  plugins: [],
}

