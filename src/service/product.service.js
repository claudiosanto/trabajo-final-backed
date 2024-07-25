import Product from "../models/product.models.js";
const productService = {
  createProduct: async function (productsData) {
    return await Product.create(productsData)

  },

  getProducts: async function () {
    return await Product.find()
  },
  GetProductById: async function (ProductId) {
    return await Product.findById(ProductId)

  },
  updateProduct: async function (id, ProductId) {
    return await Product.findByIdAndUpdate(id, ProductId)
  },
  DeleteProduct: async function (ProductId) {
    try {
      return await Product.findByIdAndDelete(ProductId)
    } catch (error) {
      return res.status(200).json({ message: "producto eliminado" })
    }
  }
}
export default productService;
