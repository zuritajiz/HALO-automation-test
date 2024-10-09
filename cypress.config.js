const { defineConfig } = require("cypress")
const cucumber = require("cypress-cucumber-preprocessor").default
module.exports = defineConfig({
  failOnStatusCode: false,
  defaultCommandTimeout: 10000,
 e2e: {
  chromeWebSecurity: false,
  baseUrl: 'https://www.saucedemo.com/',
  specPattern: "**/*.feature",
  setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber())
  },
 },
})