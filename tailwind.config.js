/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        gray: {
          100: "#D1D5DB",
          600: "#6B7280",
          900: "#1F2937",
        },
        teal: {
          800: "#164E63",
        },
      },
    },
  },
  plugins: [],
};
