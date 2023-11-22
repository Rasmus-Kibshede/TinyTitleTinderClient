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
        orange: '#FFCA80',
        green: '#D6FBE4',
      },
    },
    fontFamily: {
      main: 'Josefin Sans, sans-serif',
    },
  },
  plugins: [],
};
