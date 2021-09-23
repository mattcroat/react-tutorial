module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '40% 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
