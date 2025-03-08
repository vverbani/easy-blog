module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')], // ✅ Ensures Markdown gets typography styles
};
