import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["prompt", "sans-serif"],
        gilroy: ["gilroy", "sans"],
        circularstd: ["circularstd", "sans"],
        graphik: ["graphik", "sans"],
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
