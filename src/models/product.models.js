import mongoose from "mongoose";
//esquema
const productSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true,

  },
  stock: {
    type: Number,
    main: 0,

  },

  lote: {
    type: String,
    default: '100'
  },
  caducidad: {
    type: String,
    default: Date.now

  },
  descripcion: {
    String,

  },

  categoria: {
    type: String,
    default: null
  },
  precio: {
    type: String
  },


})
//crear el modelo
const Product = mongoose.model('Product', productSchema)
export default Product;