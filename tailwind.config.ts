import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#121318",
        surface: "#121318",
        "surface-dim": "#121318",
        "surface-container-lowest": "#0d0e13",
        "surface-container-low": "#1a1b21",
        "surface-container": "#1e1f25",
        "surface-container-high": "#292a2f",
        "surface-container-highest": "#34343a",
        "surface-bright": "#38393f",
        "surface-variant": "#34343a",
        "on-surface": "#e3e1e9",
        "on-surface-variant": "#b9cacb",
        outline: "#849495",
        "outline-variant": "#3a494b",
        primary: "#e1fdff",
        "primary-container": "#00f2ff",
        "primary-fixed": "#74f5ff",
        "primary-fixed-dim": "#00dbe7",
        "on-primary": "#00363a",
        "on-primary-fixed": "#002022",
        secondary: "#ddb7ff",
        "secondary-container": "#6f00be",
        "secondary-fixed": "#f0dbff",
        "secondary-fixed-dim": "#ddb7ff",
        tertiary: "#e1ffec",
        "tertiary-container": "#67f4b7",
        "tertiary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#4edea3",
        error: "#ffb4ab",
        "error-container": "#93000a"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem"
      },
      spacing: {
        base: "8px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "container-max": "1200px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        cyan: "0 0 18px rgba(0, 219, 231, 0.22)",
        green: "0 0 18px rgba(78, 222, 163, 0.2)"
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0, 219, 231, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 219, 231, 0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
