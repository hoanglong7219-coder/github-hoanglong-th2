/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: ["./**/*.{html,js,jsx,cjs,mjs,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

