/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: { colors: {
      "custom-gray": "#9ca49f", // Add your custom color here
    },},
  },
  plugins: [],
}

