/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:"#697565",
        primaryContent:"#3C3D37",
        primarySubcontent:"#181C14",
        secondarycontent:"#000000",
        primaryBase:"#243642",
        primaryAccent:"#387478",
        primaryBg:"#ECDFCC",
      }
    },
  },
  plugins: [],
}

