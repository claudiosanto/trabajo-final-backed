import { Router } from "express"
import {  user1} from '../controllers/user.controllers.js'

const routeUser= new Router()


routeUser.get('/', user1)
export default routeUser; 
