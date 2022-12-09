/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(0,-1px,0)",
          },
          "20%, 80%": {
            transform: "translate3d(0,2px,0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(0,-4px,0)",
          },
          "40%, 60%": {
            transform: "translate3d(0,4px,0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
