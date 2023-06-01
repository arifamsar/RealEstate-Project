/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#06b6d4',
      'secondary' : '#5eead4'
    },
    extend: {},
  },
  plugins: [],
})

