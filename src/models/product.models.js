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
  descripcion: {
    String,
    categoria: {
      type: String,

      default: null
    },

    precio: {
      type: String
    }



  },
});
//crear el modelo
const product = mongoose.model('product', productSchema)
export default product;