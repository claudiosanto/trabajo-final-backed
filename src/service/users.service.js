import Users from '../models/users.models.js'
//objeto burrito 
const UsersService = {
  //metodos
  createUsers: async function (users) {
    return await Users.create()
  },
  getAllUsers: async function (users) {
    return await Users.create(users)
  },

  getByid: async function (users) {
    return await Users.find(users)
  },



}
export default UsersService;