import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060A",
        surface: "#0B0D14",
        "surface-2": "#12141F",
        "surface-3": "#191C2B",
        line: "rgba(255,255,255,0.07)",
        "line-strong": "rgba(255,255,255,0.12)",
        ink: "#EDEEF4",
        muted: "#8A8FA3",
        faint: "#5C6072",
        rext: {
          blue: "#4D7CFE",
          indigo: "#6D5CFF",
          violet: "#A855F7",
          glow: "#3B5BFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "rext-gradient":
          "linear-gradient(135deg, #4D7CFE 0%, #6D5CFF 55%, #A855F7 100%)",
        "hero-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(77,124,254,0.18), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(93,92,255,0.45)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.7)",
        phone:
          "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 120px -30px rgba(93,92,255,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
