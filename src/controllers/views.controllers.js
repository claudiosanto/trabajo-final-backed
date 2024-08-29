import { users } from "../db/users.js";



export const home = (req, res) => {
  const datos = {
    title: 'home',
    users: 'Charlie'
  }
  res.render('home', datos)
};
export const about = (req, res) => {
  const datos = {
    title: ' about',
    style: 'about'
  }
  res.render('about', datos)
}

export const totalUsers = (req, res) => {
  const usuarios = users.map(us => {
    return {
      nombre: us.nombre,
      contraseña: us.contraseña,
      apellido: us.apellido
    }
  })

  const datos = {
    title: 'users',
    usuarios: usuarios
  }

  res.render('users', datos)

}


export const dashboard = (req, res) => {


  res.render('dashboard')
}