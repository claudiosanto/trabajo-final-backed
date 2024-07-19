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
    required: true
  },
  edad: {
    type: String,
    required: false
  },
  fechaRegistro: {
    type: date,
    default: date.now
  },
  direccion: {
    calle: String,
    estado: String,
    codigopostal: String
  },
  carrito: [
    type = objectId
  ]

});
const Users = mongoose.model('users', usersschema)
export default Users;









