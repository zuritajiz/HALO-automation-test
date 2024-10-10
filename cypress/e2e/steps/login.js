import * as LoginData from '../../fixtures/loginData.json'
import { LoginHelpers } from '../../support/helpers/loginHelpers.js'
import { CommonHelpers } from '../../support/helpers/commonHelpers.js'
import { LoginSelectors } from '../../support/pageObjects/loginPageSelectors.js'

Given("I go to the site landing page", () => {
    cy.visit("/")
})

When("I login using {string} username", (username) => {
    cy.login(username, LoginData.e2e.password)
})

When("I login using {string} username and {string} password", (username, password) => {
    username = CommonHelpers.getTextDataByType(username)
    password = CommonHelpers.getTextDataByType(password)
    
    LoginHelpers.fillLoginSection(username, password)
})

When("I should validate that error message for {string} is displayed", (errorType) => {
    const errorText = CommonHelpers.getErrorMessageByType(errorType)
    LoginSelectors.errorMessageContainer().should('include.text', errorText)
})