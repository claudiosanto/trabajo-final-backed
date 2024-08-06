
import productService from '../../service/product.service.js'

export const createProductsControllers = async (req, res) => {
  try {
    const newProducts = await productService.createProduct(req.body)//argumento del llamado ala funcion 

    return res.status(201).json({ status: 201, message: 'producto creado', payload: newProducts })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts()
    console.log(products)
    const productMap = products.map(prod => {

      return {
        nombre: prod.nombre,
        id: prod._id,
        precio: prod.precio,
        stock: prod.stock
      }

    })

    return res.status(200).json({ status: 200, message: 'usuario encontrado', payload: productMap })

  } catch (error) {

    return res.status(500).json({ message: error.message })
  }





}

export const getProductById = async (req, res) => {

  try {
    const { id } = req.params

    const product = await productService.getProductById(id)
    const producto = {
      nombre: product.nombre

    }

    console.log(producto)
    return res.status(200).json({ message: "producto encontrado", payload: producto })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }

}


export const deleteProduct = async (req, res) => {
  try {

    const deleteProduct = await productService.deleteProduct(id)

    return res.status(200).json({ message: "producto eliminado", deleteProduct })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateProduct = async (req, res) => {
  const updateP = await productService.updateProduct(id, productdata)
  return res.status(200).json({ status: 200, message: 'producto eliminado', updateP })
}
export const getProductByNombre = async (req, res) => {

  try {
    const { nombre } = req.query
    console.log(nombre)
    const productNombre = await productService.getProductBynombre(nombre)
    const productId = {
      nombre: productNombre.nombre,
      id: productNombre._id,
      lote: productNombre.lote,
      precio: productNombre.precio
    }

    return res.status(200).json({ message: "producto encontrado", payload: productId })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 500, message: error.message })

  }

}
