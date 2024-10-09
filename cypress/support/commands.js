import { LoginHelpers } from '../support/helpers/loginHelpers.js'
import * as LoginData from '../fixtures/loginData.json'

Cypress.Commands.add('login', (username) => {
    LoginHelpers.fillLoginSection(username, LoginData.password)
})