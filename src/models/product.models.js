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
    type: Date,
    default: Date.now

  },
  descriptions: {
    String,
    categoria: {
      type: String,

      default: null
    }

  },
});
//crear el modelo
const product = mongoose.model('product', productSchema)
export default product;