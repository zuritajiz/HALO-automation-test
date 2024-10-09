import faker from '@withshepherd/faker'
import { LoginHelpers } from './loginHelpers'
import * as LoginData from './../../fixtures/loginData.json'

const CommonHelpers = {
  urls: {
    products: 'inventory.html',
    cart: 'cart.html'
  },

  sectionTitles: {
    products: 'Products',
    cart: 'Cart'
  },

  /**
   * Get URL by section name
   * @param {String} sectionName - Section name from which we need to get its URL
   * @returns {String} URL from the required section
   */
  getUrlBySectionName(sectionName) {
    switch (sectionName) {
      case 'Products':
        return this.urls.products
      case 'Cart':
        return this.urls.cart
      default:
        return 'Section name invalid'
    }
  },
  /**
   * Get section title by section name
   * @param {String} sectionName - Section name from which we need to validate its title
   * @returns {String} Title from the required section
   */
  getTitleBySectionName(sectionName) {
    switch (sectionName) {
      case 'Products':
        return this.sectionTitles.products
      case 'Cart':
        return this.sectionTitles.cart
      default:
        return 'Section name invalid'
    }
  },

  /**
   * Get random name
   * @returns {String} A random name
   */
  getRandomName() {
    return faker.name.firstName()
},

  /**
   * Get text data according to parameter
   * @param {String} dataText - Type of data that you need to generate or return
   * @returns {String} - Text data
   */
  getTextDataByType(dataText) {
    switch (dataText) {
      case 'random name':
        return faker.name.firstName()
      case 'empty':
        return ' '
      case 'random text':
        return faker.random.alphaNumeric(8)
      case 'valid password':
        return LoginData.password
      default:
        return dataText
    }
  },
  /**
   * Get error message text according to error type
   * @param {String} errorType - Type of error to validate
   * @returns {String} - Error message data
   */
  getErrorMessageByType(errorType) {
    switch (errorType) {
      case 'empty password':
        return LoginHelpers.errorMessages.emptyPassword
      case 'empty username':
        return LoginHelpers.errorMessages.emptyUsername
      case 'locked user':
        return LoginHelpers.errorMessages.lockedUser
      default:
        return 'Error type invalid'
    }
  },

  /**
   * Validate if array items are sorted by sorting type
   * @param {String} items - Type of error to validate
   * @param {String} sortType - Type of error to validate
   * @returns {String} - Error message data
   */
  validateSortedItems(items, sortType) {
    const sorteditems = [...items].sort((a, b) => {
      return sortType === 'ascending' ? a - b : b - a // Ascending or descending sort
    })
    expect(items).to.deep.equal(sorteditems)
  }
}
export { CommonHelpers }
