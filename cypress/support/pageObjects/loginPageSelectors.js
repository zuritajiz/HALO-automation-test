export const LoginSelectors = {
/**
   * "Username" input located in the site login page
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
usernameInput: () => cy.get('input#user-name'),

/**
   * "Password" input located in the site login page
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
passwordInput: () => cy.get('input#password'),

/**
   * "Login" button located in the site login page
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
loginButton: () => cy.get('#login-button'),

/**
   * Error message container located in the site login page
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
errorMessageContainer: () => cy.get('.error-message-container.error > h3')
}