import { ApiHelpers } from '../../support/helpers/apiHelpers.js'
import * as LoginData from './../../fixtures/loginData.json'
import { CommonHelpers } from '../../support/helpers/commonHelpers.js'

When('I login via API', () => {
    ApiHelpers.loginAndGetToken(LoginData.api.username, LoginData.api.password)
  })

Then('I validate that token is valid', () => {
    cy.get('@accessToken').then((token) => {
        expect(token).to.not.be.empty
        expect(token).to.exist
    })
  })

  When('I login via API using invalid credentials', () => {
    ApiHelpers.loginAndGetToken(LoginData.api.username, 
        CommonHelpers.getTextDataByType('random text'), 
        400, true)
  })

  Then('I validate that API response contains Invalid credentials message', () => {
    cy.get('@responseBody').then((responseBody) => {
        expect(responseBody.message).to.equal(ApiHelpers.errorMessages.invalidCredentials)
    })
  })

  When('I get Products list via API', () => {
    ApiHelpers.getProducts()
  })

  When('I get Products list filtered by {string} name via API', (productName) => {
    ApiHelpers.getProductsByName(productName)
  })

  Then('I validate that exists {int} products in the list', (productTotal) => {
    cy.get('@responseBody').then((responseBody) => {
        expect(responseBody.total).to.equal(productTotal)
    })
  })

  When('I add a new Product with the following attributes', (dataTable) => {
    let body = {}
    dataTable.rows().forEach(attr => {
        body.producTitle = attr[0],
        body.producPrice = attr[1]
        ApiHelpers.addProduct(body)
    })
    
  })