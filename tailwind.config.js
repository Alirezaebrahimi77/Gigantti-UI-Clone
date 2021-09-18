module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gigYellow': '#FFF000',
        'gigPink': '#E82F8A',
        'gigGreen': '#88D000'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out forwards',
       }
      
    },
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
