module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'CyGroteskGrandDemi': '"CyGroteskGrandDemi"',
      'CyGroteskWideDemi': '"CyGroteskWideDemi"',
      'GroteskWideRegular': '"GroteskWideRegular"'
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-aria-attributes'),
    require('@tailwindcss/typography')
  ],
}
