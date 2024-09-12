
import productService from '../../service/product.service.js'

export const createProductsControllers = async (req, res) => {
  try {
    const newProducts = await productService.createProduct(req.body)//argumento del llamado ala funcion 

    return res.status(201).json({ status: 200, message: 'producto creado', payload: newProducts })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts()
    console.log(products)
    const result = products.map(prod => {

      return {

        nombre: prod.nombre,
        id: prod._id,
        precio: prod.precio,
        stock: prod.stock,
        caducidad: prod.caducidad,
        categoria: prod.categoria,
        precio: prod.precio
      }

    })

    return res.status(200).json({ status: 200, message: 'producto encontrado', payload: result })

  } catch (error) {

    return res.status(500).json({ message: error.message })
  }





}

export const getProductById = async (req, res) => {

  try {
    const { id } = req.params

    const product = await productService.getProductById(id)
    const producto = {
      nombre: product.nombre,
      precio: product.precio,
      lote: product.lote,
      caducidad: product.caducidad,
      stock: product.stock
    }

    console.log(producto)
    return res.status(200).json({ message: "producto encontrado", payload: producto })

  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message })
  }

}

export const removeProducts = async (req, res) => {
  try {
    const eliminar = await productService.delete()
    return res.status(200).json({ message: 'productos eliminados', eliminar })
    console.log(eliminar)
  } catch (error) {
    console.log({ message: 'productos eliminados', error })
    res.status(500).json({ message: "error al eliminar productos" });
  }


}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productService.deleteProduct(id)
    console.log(deleteProduct)
    return res.status(200).json({ message: "producto eliminado", deleteProduct })
    //no elimina el producto , corregir urgente
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }

}

export const updateProduct = async (req, res) => {
  const updateP = await productService.updateProduct(id, productdata)
  return res.status(200).json({ status: 200, message: 'producto eliminado', updateP })
}
export const getProductByNombre = async (req, res) => {

  try {

    let { nombre } = req.query
    nombre = decodeURIComponent(nombre);
    console.log(nombre)
    const productNombre = await productService.getProductByNombre(nombre)
    if (!productNombre) {
      return res.status(404).json({ status: 404, message: "producto no encontrado" });
    }
    console.log(productNombre)
    const product = {
      _id: productNombre._id,
      nombre: productNombre.nombre,
      lote: productNombre.lote,
      caducidad: productNombre.caducidad,
      stock: productNombre.stock,
      precio: productNombre.precio,
      descripcion: productNombre.descripcion,

    }

    return res.status(200).json({
      message: "producto encontrado", payload: product
    })


  } catch (error) {
    console.log("error en getProductByNombre ", error)
    return res.status(500).json({ status: 500, message: error.message })

  }

}
