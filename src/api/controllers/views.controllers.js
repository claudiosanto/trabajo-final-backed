export const home = (req, res) => {
  const datos = {
   title:"pagina principal"

  } 
  res.render('home', datos );


}