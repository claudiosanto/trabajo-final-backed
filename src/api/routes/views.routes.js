import { Router } from "express"
import { home } from "../controllers/views.controllers.js"
const router = new Router()
router.get("/", home)
export default router;