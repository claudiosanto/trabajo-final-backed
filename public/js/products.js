export function productosHtml(data) {
  const productLength = document.querySelector('.productos')
  productLength.textContent = `cantidad de producto${data.length}`

}
export function createProduct(data) {
  const form = document.querySelector('form')
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    fetch('http://localhost:4030/api/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
  })
}
