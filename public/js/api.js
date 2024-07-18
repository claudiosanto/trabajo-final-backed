
export async function getProducts() {
  const response = await fetch('http://localhost4030/api/products')
  const data = response.json()
  console.log(data)
  return data
}




