/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "hsl(162, 100%, 42%)",
      primary50: "hsl(162, 100%, 56%)",
      white: "#ffffff",
      black: "#000000",
      red: "#ff0000",
      grey50: "#f8fafc",
      grey100: "#f1f5f9",
      grey200: "#e2e8f0",
      grey300: "#cbd5e1",
      grey400: "#94a3b8",
      grey500: "#64748b",
      grey600: "#475569",
      grey700: "#334155",
      grey800: "#1e293b",
      grey900: "#0f172a",
      grey950: "#020617",
      purple: "#00d69638",

      //gradient Combo
      gradient11: "#c94b4b",
      gradient12: "#4b134f",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      1000: "14em",
      900: "6em",
      700: "2.986rem",
      600: "2.488rem",
      500: "2.074rem",
      450: "1.875rem",
      400: "1.728rem",
      300: "1.44rem",
      250: "1.25rem",
      200: "1.2rem",
      100: "1rem",
      50: "0.833rem",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xs: "6px",
        "4xl": "2rem",
      },
      shadows: {
        xs: "0 6px 8px rgba(0, 0, 0, 0.1)",
        sm: "0px 0px 10px 0px #000",
        md: "hsla(215, 16%, 47%, 10%)",
        lg: "1.5px 3px 0px hsl(162, 100%, 42%)",
      },
      animation: {
        "pulse-animation": "pulse-animation 2s infinite",
        shimmer: "shimmer 2.2s infinite forwards linear",
      },
      keyframes: {
        "pulse-animation": {
          "0%": { "box-shadow": "0 0 0 0px #f1f5f9" },
          "100%": { "box-shadow": "0 0 0 8px rgba(0, 0, 0, 0)" },
        },
        shimmer: {
          "0%": {
            "background-position": "-400px 0",
          },
          "100%": {
            "background-position": "400px 0",
          },
        },
      },
    },
  },
  plugins: [],
};
