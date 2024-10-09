import { CommonHelpers } from '../../support/helpers/commonHelpers.js'
import { CommonSelectors } from '../../support/pageObjects/commonSelectors.js'

Then('I should be redirected to {string} section', (sectionName) => {
  const sectionUrl = CommonHelpers.getUrlBySectionName(sectionName)
  cy.url().should('include', sectionUrl)
})

Then('I should validate {string} section header title', (sectionName) => {
  const sectionTitle = CommonHelpers.getTitleBySectionName(sectionName)
  CommonSelectors.sectionTitle().should('include.text', sectionTitle)
})
