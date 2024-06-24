

export const home = (req, res) => {
  const datos = {
    title: 'home',
    users: 'Alice'
  }
   res.render('home', datos)
};
  export const about = (req, res) => {
    const datos = {
      title: ' about',
      style: 'about'
    }
    res.render('about', datos)
  }

export const users = (req, res) => {
  console.log(users)
  const usuarios = users.map(existUser=> {
    return {
    name:xistUser.name,
      id: existUser.id,
   email:existUser.email
  }
  
  })  
  
  const datos = {
      title: ' users',
      usuarios:usuarios
    }
    res.render('users', datos)
  }