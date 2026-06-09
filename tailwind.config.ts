import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF0EA",
        "cream-dark": "#F5E6DF",
        peach: "#F2D5C8",
        orange: "#E8845A",
        "orange-bright": "#F0A050",
        navy: "#1E2D4A",
        "navy-light": "#2D3E5C",
        teal: "#2A6B7C",
        muted: "#9BA3B2",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
