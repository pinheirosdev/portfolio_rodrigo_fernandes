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
        executive: {
          bg: "#020617", // slate-950
          card: "#0f172a", // slate-900
          accent: "#f59e0b", // amber-500 (Gold)
          corporate: "#2563eb", // blue-600
        },
      },
    },
  },
  plugins: [],
};
export default config;