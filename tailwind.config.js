/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'card': '400px',
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    }
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'petal': '#FFEBF3',
      'wolf': '#D7CCC8',
      'light-blue': '#CFDBF2',
      'green': '#CAE3CF',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'error': '#EF9A9A'
    },
  },
}

