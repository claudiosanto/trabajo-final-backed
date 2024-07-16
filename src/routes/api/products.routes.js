import { Router } from 'express'
import { createProductsControllers, getProducts } from '../../controllers/products.controllers.js'


const route = Router()
route.post('/', createProductsControllers)

route.get('/', getProducts)
export default route;