import { Router } from "express"
import { CreateUsersControllers, getAllUsers, updateUser, deleteUsers, getUserById } from '../../controllers/api/users.controllers.js'

const usersRouters = Router()

usersRouters.post("/", CreateUsersControllers)
usersRouters.get('/:id', getUserById)
usersRouters.get("/", getAllUsers)
usersRouters.get('/updateUser', updateUser)
usersRouters.get('/deleteUsers', deleteUsers)
export default usersRouters

