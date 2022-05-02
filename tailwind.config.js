module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      black: 'hsl(0, 0%, 6%)',
      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(217, 12%, 63%)',
      mediumGrey: 'hsl(216, 12%, 54%)',
      darkBlue: 'hsl(213, 19%, 18%)',
      veryDarkBlue: 'hsl(216, 12%, 8%)',
      veryDarkBlueLighter: 'hsl(216, 10%, 13%)',
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
    extend: {
      'gradient-radial': 'radial-gradient(var(darkBlue, veryDarkBlue))',
    },
  },
  plugins: [],
};
