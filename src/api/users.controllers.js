import { users } from '../db/users.js'

export const  getAllUsers =  (req, res) => {
  return res.send(users)
};
export const getByid = (req, res) => {
  const { id } = req.params.id
  const existid = users.find(userId => userId.id === Number(id) ) 
  if (!existid) {
   res.status(404).json("usuario no existe") 
  }
res.status(200).json("usuarios")
}
export const createUsers=(req, res) => {
  const { body } = req.body 
  const limitUsers=users.find(limitUser=>limitUser.name=== body.name)
  if (limitUsers) {
  res.status(400).json({producto:body, menssage:"usuario ya existe"})
  }
  users.push(body)
res.status(200).json("usuario creado")
}