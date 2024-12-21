const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.brighthorizons.com",
    // setupNodeEvents(on, config) {
    // }
  },
});
