/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headbg': "url('/src/images/headerbg.jpg')",
        'headlogo': "url('/src/images/fmlogo.jpg')",
        
      },
    },
  },
  plugins: [],
}

