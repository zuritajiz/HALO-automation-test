import { ProductsPageSelectors } from "../pageObjects/productsPageSelectors"

const ProductsHelpers = {
    getAllItemsPrice() {
        return ProductsPageSelectors.inventoryItemPrice()
          .then(($prices) => {
            // Extract text values from the prices and convert them to numbers
            const priceArray = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')))
            return priceArray
          })
      }      
}
export { ProductsHelpers }