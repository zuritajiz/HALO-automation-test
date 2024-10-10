const ApiHelpers = {
    errorMessages: {
        invalidCredentials: 'Invalid credentials'
    },

    /**
    * Login through API and get accesToken and responseBody if needed 
    * @param {String} username - API service username
    * @param {String} password - API service password
    */
    loginAndGetToken(username, password, responseStatus = null, returnBody = false) {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/auth/login`,
            body: {
                username,
                password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(responseStatus ?? 200)
            cy.wrap(response.body.accessToken).as('accessToken')
            returnBody && cy.wrap(response.body).as('responseBody')
        })
    },

    /**
    * Get all products list
    */
    getProducts() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/products`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
            cy.wrap(response.body).as('responseBody')
        })
    },

    /**
    * Get all products list filtered by product name
    * @param {String} productName - Product name to filter
    */
    getProductsByName(productName) {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/products/search?q=${productName}`
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
            cy.wrap(response.body).as('responseBody')
        })
    },

    /**
    * Add product with multiple attributes
    * @param {JSON} attributes - Product attributes to add
    */
    addProduct(attributes) {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/products/add`, // The API endpoint
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: {
                title: attributes.producTitle,
                price: attributes.productPrice
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.empty
            cy.wrap(response.body).as('responseBody')
        })
    }
}
export { ApiHelpers }
