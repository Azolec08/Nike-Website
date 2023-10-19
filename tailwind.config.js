/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg1.png')",
        "about-hero": "url('/images/loging_bg.png')",
      },
    },
  },
  plugins: [],
};
