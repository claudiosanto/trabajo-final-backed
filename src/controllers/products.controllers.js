
import { json } from 'express';
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
    const products = await productService.getProducts()
    if (products.lenght === 0) return res.status(404).json({ status: 404, messege: "producto no encontrado" })

    return res.status(200).json({ status: 200, message: `cantida de productos:${products.length}`, payload: products })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }

}
export const GetProductById = async (req, res) => {
  const productId = req.params.id;
  try {

    const Product = await productService.GetProductById()

    return res.status(200).json({ message: "producto encontrado" })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }
}

export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const DeleteProduct = await productService.DeleteProduct()

    return res.status(200).json({ message: "producto eliminado" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateProduct = async (req, res) => {
  return
}
