import { Router } from "express"
import {  about, home } from "../controllers/views.controllers.js"
const router = new Router()

router.get('/home', home)
router.get('/about', about)

export default router; 
