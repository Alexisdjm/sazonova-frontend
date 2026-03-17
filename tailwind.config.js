/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-beige': 'var(--secondary-beige)',
      },
      fontFamily: {
        'calling-heart': ['"Calling Heart"', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'sugo': ['"Sugo Pro Classic Trial"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle, var(--gradient-light-red) 0%, var(--gradient-dark-red) 100%)',
      }
    },
  },
  plugins: [],
}
