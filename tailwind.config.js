const { default: tailwindcss } = require("@tailwindcss/vite");

module.exports = {
  theme: {
    extend: {
      // ...existing code...
    },
  },
  plugins: [tailwindcss],
};
