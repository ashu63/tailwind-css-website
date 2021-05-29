module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "mdMobile":"600px"
      }
    },
  },
  variants: {
    extend: {
   
    },
  },
  plugins: [],
}
