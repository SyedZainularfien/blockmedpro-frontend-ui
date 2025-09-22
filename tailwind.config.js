/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
      },
      colors: {
        white: "#ffffff",
        gray: "#999",
        "light-gray": "#e3e3e3",
        "medium-gray": "#111",
        "dark-gray": "#0d0d0d",
        blue: "#1140ff",
        "sky-blue": "#00a3ff",
        "river-blue": "#0d2a52",
        "light-blue": "#edf9ff",
        "vavid-gray": "#969696",
        "dark-blue": "#000f1f",
        "purple-blue": "#0f1c51",
        "button-light-blue": "#2faef5",
        "button-dark-blue": "#0f2686",
      },
      fontSize: {
        h1: ["var(--h1)"],
        h2: ["var(--h2)"],
        h3: ["var(--h3)"],
        h4: ["var(--h4)"],
        h5: ["var(--h5)"],
        h6: ["var(--h6)"],
        xl: ["var(--xl)"],
        lg: ["var(--lg)"],
        md: ["var(--md)"],
        sm: ["var(--sm)"],
      },
      screens: {
        "md-475": "475px",
      },
    },
  },
  plugins: [],
};
