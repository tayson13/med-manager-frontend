module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",

    // toaster
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  theme: {
    extend: {},
  },

  plugins: [
    // require("daisyui")
  ],


}
