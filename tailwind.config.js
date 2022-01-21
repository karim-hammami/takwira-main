module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '768px'},
        'is': {'max': '950px'},
        'fl': {'max': '1047px'},
        'cl': {'max': '1055px'},
        'lc': {'min': '1054px'},
      },
    },
    colors: {
      green: '#2f9e5a',
      white: '#fff',
      black: '#000',
      grey: '#000',
      kinda: '#7d8285',
      greenish: '#4bd681'
    }
  },
  plugins: [],
}
