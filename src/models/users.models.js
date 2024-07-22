import mongoose from 'mongoose';

const usersschema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unided: true
  },

  contraseña: {
    type: String,

  },
  edad: {
    type: String,
    required: false
  },
  apellido: {
    type: String,
    required: false
  },
  fechaRegistro: {
    type: String
  },
  direccion: {
    calle: String,
    estado: String,
    codigopostal: String
  },
  carrito: {
    type: [

    ]
  }



});
const users = mongoose.model('users', usersschema)
export default users;









