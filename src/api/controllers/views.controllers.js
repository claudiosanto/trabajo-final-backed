export const home = (req, res) => {
  const datos = {
    title: 'home',
    users:null
  }
  res.render('home', datos)
}

export const about = (req, res) => {
  const datos = {
    title: ' about',
    style:'about'
  }
  res.render('about', datos)
}
