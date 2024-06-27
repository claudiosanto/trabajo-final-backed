import {user} from '../db/user.js'
export const user1 = (req, res) => {
  console.log(user)
  const usuarios = user.map(user1=> {
    return {
    nombre: user1.nombre,
      apellido: user1.apellido,
   dedicacion:user1.dedicacion
  }
  
  })  
  const datos = {
      title: ' user',
      payload:usuarios
    }
    res.status(200).json (datos)
  }