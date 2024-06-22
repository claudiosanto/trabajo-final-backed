export const home = (req, res) => {
  const datos = {
    title: 'pagina principal',
    users:null
  }
  res.render('home', datos)
}
