
import productService from '../service/product.service.js'

export const createProductsControllers = async (req, res) => {
  try {
    const newProducts = await productService.createProduct(req.body)
    return res.status(201).json({ status: 201, message: 'producto creado', payload: newProducts })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProduct()
    if (products.lenght === 0) return res.status(404).json({ status: 404, messege: "producto no encontrado" })

    return res.status(200).json({ status: 200, message: `cantida de productos:${products.length}`, payload: getProducts })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }

}
