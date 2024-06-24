

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
  const usuarios = users.map(users=> {
    return {
    name:users.name,
      id: users.id,
   email:users.email
  }
  
  })  
  
  const datos = {
      title: ' users',
      users:usuarios
    }
    res.render('users', datos)
  }