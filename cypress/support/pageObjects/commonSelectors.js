export const CommonSelectors = {
    /**
   * "Section title" span located in the site header
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
sectionTitle: () => cy.get('.header_container > .header_secondary_container > .title'),

/**
   * "Cross" button located in the left side of site
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
crossButton: () => cy.get('.header_container > .header_secondary_container > .title')
}
