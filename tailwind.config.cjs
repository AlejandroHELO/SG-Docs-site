/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        "theme-navbar-height": "6rem",
      },
      width: {
        "banner-width": "50rem",
      },
      colors: {
        "theme-navbar-bg": "black",
        "color-base-gray": "#4b4b4b",
        "color-base-gray-1": "#7a7a7a",
      },
      padding: {
        "home-layout-px": "4rem",
      },
      screens: {
        sm: "480px",
        md: "900px",
        lg: "1024px",
        xl: "1440px",
      },
      spacing: {
        78: "312px",
      },
    },
  },
  plugins: [],
};
