/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    colors: {
      'gray1': '#121214',
      'gray2': '#202024',
      'gray3': '#323238',
      'gray4': '#7C7C8A',
      'gray5': '#8D8D99',
      'gray6': '#C4C4CC',
      'gray7': '#E1E1E6',
      'green-dark': '#00875F',
      'green-light': '#00B37E',
      'red-danger': '#F75A68',
      'white': '#FFFFFF'
    }
  },
  plugins: []
}
