import { Router } from "express"
import { CreateUsersControllers, getAllUsers, } from '../../controllers/api/users.controllers.js'
const usersRouters = Router()

usersRouters.post("/", CreateUsersControllers)

usersRouters.get("/", getAllUsers)

export default usersRouters

