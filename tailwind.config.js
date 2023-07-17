/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        york: "0px 0px 29px 1px rgba(221, 170, 69, 0.6)",
      },
      backgroundColor: {
        main: {
          DEFAULT: "#FFAA00",
          light: "#FCF7EF",
          dark: "#FFF1DD",
        },
      },
      backgroundImage: {
        "gradient-york":
          "radial-gradient(62.5% 62.5% at 34.75% 37.5%, #FFCE6D 0%, #FFAA00 83.85%, rgba(252, 168, 1, 0.9) 100%)",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
