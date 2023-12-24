module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      gridTemplateRows: {
        layout: "1fr auto",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-40deg)" },
          "50%": { transform: "rotate(40deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
      },
    },
    container: {
      center: true,
      width: "90%",
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  darkMode: "class",
};
