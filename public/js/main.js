import { getProducts } from "./api.js"
import { productosHtml } from "./products.js"



async function main() {
  try {
    const result = await getProducts()
    console.log(result)

    productosHtml(result.payload);


  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}
main()

