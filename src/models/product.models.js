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
    type: string,
    default: '1000'

  },
  caducidad: {
    type: Date,
    default: Date.now

  },
  descriptions: string,
  categoria: {
    type: string,

    default: null
  }
});
//crear el modelo
const product = mongoose.model('product', productSchema)
export default product;