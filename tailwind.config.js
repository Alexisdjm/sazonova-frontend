/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-beige": "var(--secondary-beige)",
        "primary-red": "var(--gradient-dark-red)",
        "brand-orange": "var(--adobo-orange-bg)",
      },
      fontFamily: {
        "calling-heart": ['"Calling Heart"', "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sugo: ['"Sugo Pro Classic Trial"', "sans-serif"],
        pangolin: ["Pangolin", "cursive", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle, var(--gradient-light-red) 0%, var(--gradient-dark-red) 100%)",
        "brand-orange-bg": "var(--adobo-orange-bg)",
      },
      keyframes: {
        "up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
      },
      animation: {
        "up-down": "up-down 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
