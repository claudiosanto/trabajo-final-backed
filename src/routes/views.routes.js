import { Router } from "express"
import { about, dashboard, home, totalUsers } from '../controllers/views.controllers.js'

const router = new Router()

router.get('/', home)
router.get('/about', about)
router.get('/users', totalUsers)
router.get('/dashboard', dashboard)
export default router; 
