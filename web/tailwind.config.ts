import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fbff",
          100: "#e0f7ff",
          200: "#b8ecff",
          300: "#7dd9f7",
          400: "#38c4f0",
          500: "#00aeef",
          600: "#0099d4",
          700: "#007db3",
          800: "#006494",
          900: "#00527a",
          950: "#003550",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        earth: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        display: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #00aeef 0%, #00bcd4 35%, #3f51b5 70%, #8b5cf6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #e0f7ff 0%, #f0fbff 50%, #ede9fe 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #00aeef 0%, #00bcd4 25%, #5c6bc0 60%, #9575cd 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
