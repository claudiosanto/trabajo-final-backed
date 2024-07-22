import users from "../models/users.models.js";


const UsersService = {

  createUsers: async function (usersData) {
    return await users.create(usersData)
  },
  getAllUsers: async function () {
    return await users.find()
  },
  getUserById: async function (id) {
    return await users.findById(id)
  },
  updateUser: async function (id, usersData) {
    return await users.findByIdAndUpdate(id, usersData)
  },
  deleteUsers: async function (id) {
    return await users.findByIdAndDelete(id)
  }

}
export default UsersService;
