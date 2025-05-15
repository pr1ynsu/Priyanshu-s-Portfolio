module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#222222",
        foreground: "#faebd7",
        surface: "#282727",
        accent: "#333333",
        primary: "#ffffff",
        secondary: "#d1d5db", // Example: Tailwind gray-300
        cream: "#faebd7",  // Add more as needed
      },
    },
  },
  plugins: [],
};
