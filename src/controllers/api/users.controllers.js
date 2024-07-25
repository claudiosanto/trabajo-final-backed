
import UsersService from '../../service/users.service.js'

export const CreateUsersControllers = async (req, res) => {
  try {
    const newUsers = await UsersService.createUsers(req.body)
    return res.status(201).json({ message: 'usuario creado', payload: newUsers })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      payload: newUsers
    })

  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await UsersService.getAllUsers()
    if (!users) return res.status(404).json({ status: 404, message: "usuarios no encontrados" })

    res.status(200).json({ users, status: 200, message: `usuarios encontrados:`, users })
  } catch (error) {
    return res.status(500).json({ status: (500), message: error.message })
  }
}


export const getUserById = async (req, res) => {
  const usersId = req.params.id
  try {
    const getId = await productService.getUserById(usersId)
    return res.status(200).json({ getId })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}





export const updateUser = async (req, res) => {
  const updateId = await productService.updateUser(id, usersData)
  return res.status(200).json({ message: `se elimino el usuario`, updateId })

}

export const deleteUsers = async (req, res) => {
  const deleteId = await productService.deleteUsers(id)
  return res.status(200).json({ message: `todos los usuarios han sido eliminados`, deleteId })
}