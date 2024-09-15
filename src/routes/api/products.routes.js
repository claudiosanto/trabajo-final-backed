import { Router } from 'express'
import { createProductsControllers, deleteProduct, getProductById, getProducts, removeProducts } from '../../controllers/api/products.controllers.js'
const route = Router()
route.post('/', createProductsControllers)
route.get('/', getProducts)
route.get("/:id", getProductById)
route.delete("/:id", deleteProduct)
route.delete('/', removeProducts)
export default route;