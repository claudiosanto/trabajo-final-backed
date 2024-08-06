import { Router } from 'express'
import { createProductsControllers, deleteProduct, getProductById, getProductByNombre, getProducts } from '../../controllers/api/products.controllers.js'





const route = Router()
route.post('/', createProductsControllers)
route.get('/', getProducts)
route.get('/nombre', getProductByNombre)
route.get("/:id", getProductById)
route.delete("/:id", deleteProduct)

export default route;