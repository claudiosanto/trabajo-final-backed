import { Router } from "express"

import { getAllUsers } from "../users.controllers/users.controllers.js"

const usersRouters = Router()

usersRouters.get("/", getAllUsers)


