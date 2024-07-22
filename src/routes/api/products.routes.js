import { Router } from 'express'
import { createProductsControllers, DeleteProduct, GetProductById, getProducts, } from '../../controllers/products.controllers.js'


const route = Router()
route.post('/', createProductsControllers)
route.get('/', getProducts)
route.get("/:id", GetProductById)
route.delete("/:id", DeleteProduct)
export default route;