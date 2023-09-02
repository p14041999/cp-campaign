/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/images/background.png')",
      },
      colors: {
        'primary-color' : "#ff814c",
        'secondary-color' : "#d11f92"
      }
    },
  },
  plugins: [],
}
