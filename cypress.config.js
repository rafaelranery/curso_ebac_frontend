const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMSS',
    charts: true,
    overwrite: true
  }
});
