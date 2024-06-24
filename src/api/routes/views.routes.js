import { Router } from "express"
import {  about, home, totalUsers,  } from "../controllers/views.controllers.js"
const router = new Router()

router.get('/home', home)
router.get('/about', about)
router.get('/users', totalUsers)
export default router; 
