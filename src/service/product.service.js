import Product from "../models/product.models.js";
const productService = {
  createProduct: async function (productData) {
    return await Product.create(productData)//parametro

  },

  getProducts: async function () {
    return await Product.find()

  },
  getProductById: async function (_id) {
    return await Product.findById(_id)

  },
  updateProduct: async function (id, productData) {
    return await Product.findByIdAndUpdate(id, productData, { new: true })
  },
  deleteProduct: async function (id) {
    return await Product.findByIdAndDelete(id)
  },


  delete: async function ({ }) {
    return await Product.deleteMany({})
  }
}


export default productService;
