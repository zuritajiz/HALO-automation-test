import { LoginHelpers } from '../support/helpers/loginHelpers.js'

Cypress.Commands.add('login', (username, password) => {
    LoginHelpers.fillLoginSection(username, password)
})