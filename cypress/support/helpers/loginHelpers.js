import { LoginSelectors } from '../pageObjects/loginPageSelectors.js'

const LoginHelpers = {
    errorMessages: {
        emptyPassword: 'Epic sadface: Password is required',
        emptyUsername: 'Epic sadface: Username is required',
        lockedUser: 'Epic sadface: Sorry, this user has been locked out.'
    },

fillLoginSection(username, password, buttonClick = true) {
    if (username.trim()) LoginSelectors.usernameInput().type(username)
    if (password.trim()) LoginSelectors.passwordInput().type(password)
    
    buttonClick && LoginSelectors.loginButton().click()
},

getErrorMessageByType(errorType) {
    switch (errorType) {
        case 'empty password':
            return this.errorMessages.emptyPassword
        case 'empty username':
            return this.errorMessages.emptyUsername
        case 'locked user':
            return this.errorMessages.lockedUser
        default:
            return 'Error type invalid'
    }
}
}
export { LoginHelpers }