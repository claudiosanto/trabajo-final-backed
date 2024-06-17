import { Router } from "express"
import {getAllUsers} from "../controllers/users.controllers.js"

const usersRouters = Router()

usersRouters.get("/", getAllUsers)


export default usersRouters;

