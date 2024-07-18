import product from "../models/product.models.js";
const productService = {
  createProduct: async function (product) {
    return await product.create(products)

  },

  getProducts: async function () {
    return await product.find()
  }

}
export default productService;

