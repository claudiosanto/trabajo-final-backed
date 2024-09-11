import Product from "../models/product.models.js";
const productService = {
  createProduct: async function (productData) {
    return await Product.create(productData)//parametro

  },

  getProducts: async function () {
    return await Product.find()

  },
  getProductById: async function (id) {
    return await Product.findById(id)

  },
  updateProduct: async function (id, productData) {
    return await Product.findByIdAndUpdate(id, productData)
  },
  deleteProduct: async function (id) {
    return await Product.findByIdAndDelete(id)
  },
  getProductByNombre: async function (nombre) {
    return await Product.findOne({ nombre: nombre })
  },

  delete: async function ({ }) {
    return await Product.deleteMany({})
  }
}


export default productService;
