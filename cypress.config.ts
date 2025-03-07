const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // ✅ Ensure this matches your local dev server
    setupNodeEvents(on, config) {
      // Node event listeners if needed
    },
  },
});
