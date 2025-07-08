import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        animation: {
          'spin-slow': 'spin 2.5s linear infinite',
        },
        backgroundImage: {
          'grid-pattern': "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)",
        },
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
