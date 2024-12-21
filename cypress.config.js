const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.brighthorizons.com",
    "video": true,
    "videoUploadOnPasses": false,  
    "videosFolder": "cypress/videos"
    // setupNodeEvents(on, config) {
    // }
  },
});
