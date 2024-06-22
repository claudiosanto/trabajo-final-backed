export const home = (req, res) => {
  const datos = {
    title: 'pagina principal',
    users:Charlie
  }
  res.render('home', datos)
}

export const about = (req, res) => {

   const datos = {
    title: 'about porque se llama asi',
style: 'about'
  } 
  res.render('about', datos );

 

}