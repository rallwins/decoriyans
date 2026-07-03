import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf7f2",
          100: "#f3ebe0",
          200: "#e5d4bc",
          300: "#d4b896",
          400: "#c19a6f",
          500: "#b07d4f",
          600: "#9a6640",
          700: "#7f5136",
          800: "#684330",
          900: "#56382a",
          950: "#2e1c14",
        },
        earth: {
          50: "#f6f5f0",
          100: "#e9e6db",
          200: "#d4cdb8",
          300: "#bbb08f",
          400: "#a3946f",
          500: "#8f7d58",
          600: "#7a6749",
          700: "#63523c",
          800: "#534435",
          900: "#483b31",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
