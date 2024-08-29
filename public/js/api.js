
export async function getProducts() {
  const response = await fetch('http://localhost:4030/api/products')
  const data = await response.json()
  console.log(data)
  return data
}






