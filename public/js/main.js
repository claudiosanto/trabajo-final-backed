import { getProducts } from "./api.js"
import { createProduct, productosHtml } from "./products.js"



async function main() {
  try {
    const result = await getProducts()
    console.log(result)

    productosHtml(result.payload);
    createProduct()

  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}
main()

