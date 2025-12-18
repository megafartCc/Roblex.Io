/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-background": "var(--collection-1-background)",
        "collection-1-background-hover": "var(--collection-1-background-hover)",
        "collection-1-buttons-glyphs": "var(--collection-1-buttons-glyphs)",
        "collection-1-buttons-primary-default":
          "var(--collection-1-buttons-primary-default)",
        "collection-1-buttons-primary-hover":
          "var(--collection-1-buttons-primary-hover)",
        "collection-1-buttons-stroke": "var(--collection-1-buttons-stroke)",
        "collection-1-glyphs-body": "var(--collection-1-glyphs-body)",
        "collection-1-glyphs-title": "var(--collection-1-glyphs-title)",
        "collection-1-impr-default": "var(--collection-1-impr-default)",
        "collection-1-stroke": "var(--collection-1-stroke)",
        "collection-1-sub-default": "var(--collection-1-sub-default)",
        "collection-1-sub-hover": "var(--collection-1-sub-hover)",
      },
    },
  },
  plugins: [],
};
