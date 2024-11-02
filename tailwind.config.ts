import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // borderRadius: {
    //   none: "0",
    //   sm: ".125rem",
    //   DEFAULT: ".25rem",
    //   lg: ".5rem",
    //   full: "9999px",
    // },
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    //   fontFamily: {
    //     sans: ["Inter", ...defaultTheme.fontFamily.sans],
    //     mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
    //   },
    // },
  },
  plugins: [],
};
export default config;
