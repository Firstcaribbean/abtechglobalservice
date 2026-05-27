import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#06142e",
        royal: "#1455ff",
        gold: "#f5bf36",
        ink: "#07111f"
      },
      boxShadow: {
        glow: "0 0 45px rgba(20, 85, 255, 0.35)",
        gold: "0 0 38px rgba(245, 191, 54, 0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
