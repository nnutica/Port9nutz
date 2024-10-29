/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#0AFFA0",      
        primaryContent: "#29FFB5",    
        primarySubcontent: "#56FFC1", 
        secondaryContent: "#A0FFDA",  
        primaryBase: "#303030",       
        primaryAccent: "#444444",     
        primaryBg: "#1A1A1A",
        primarybadge:"#1A1A19",         
      }
    },
  },
  plugins: [],
}

