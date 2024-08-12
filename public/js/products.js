export function productosHtml(data) {
  const productLength = document.querySelector('productos')
  productLength.textContent = `cantidad de producto${data.length}`

}
