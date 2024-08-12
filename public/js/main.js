import { getProducts } from "./api.js"
import { productosHtml } from "./products.js"



async function main() {
  const result = await getProducts()
  productosHtml(result.payload)
}
main()

