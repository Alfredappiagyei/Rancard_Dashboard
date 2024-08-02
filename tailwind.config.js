 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #2D2D2D, #4A4A4A)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}