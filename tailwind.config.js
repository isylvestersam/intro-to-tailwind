/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/index.html"],
  theme: {
    extend: {
      colors: {
        "teal": "#e3f4fc",
        "custom-green": "#dbda2f",
        "dark-bg": "#133040"
      },
      fontFamily: {
        body: ["Plus Jakarta Sans"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem', 
        '7xl': '4rem',
        '8xl': '7.5rem',
        '9xl': '10rem',
      }
    },
  },
  plugins: [],
}

