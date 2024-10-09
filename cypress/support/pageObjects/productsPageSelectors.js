export const ProductsPageSelectors = {
    /**
   * "Product Sort" select located in Products page header
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
productSortSelect: () => cy.get('.product_sort_container'),

    /**
   * "Inventory Item Price" element from each Inventory item
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
    inventoryItemPrice: () => cy.get('.inventory_item .inventory_item_price')
}