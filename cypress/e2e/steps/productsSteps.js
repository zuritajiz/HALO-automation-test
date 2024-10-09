import { ProductsPageSelectors } from "../../support/pageObjects/productsPageSelectors"
import { ProductsHelpers } from "../../support/helpers/productsHelpers"
import { CommonHelpers } from "../../support/helpers/commonHelpers"

When("I select {string} option from Product Sort select", (selectOption) => {
  ProductsPageSelectors.productSortSelect().select(selectOption)
})

Then(
  "I get all Items price and validate that are sorted in {string} order",
  (sortType) => {
    if (sortType !== "ascending" && sortType !== "descending") {
      throw new Error(
        `Invalid order type: ${sortType}. Expected 'ascending' or 'descending'.`,
      )
    }

    ProductsHelpers.getAllItemsPrice().then((prices) => {
      CommonHelpers.validateSortedItems(prices, sortType)
    })
})