import Product from "../models/product.models.js";
const productService = {
  createProduct: async function (products) {
    return await Product.create(products)

  },

  getProducts: async function () {
    return await Product.find()
  }

}
export default productService;
