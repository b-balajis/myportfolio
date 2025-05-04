/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      animation: {
        blink: "blink 2s infinite ease-in-out",
        float: "float 30s linear infinite",
      },
    },
  },
  plugins: [],
};
