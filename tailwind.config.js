/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('src/assets/images/logo.png')",
      },
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
        tertiary: '#0000ff',
      },
    },
    fontFamily: {
      main: 'Josefin Sans, sans-serif',
    },
  },
  plugins: [],
};
