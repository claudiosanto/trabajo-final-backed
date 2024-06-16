import {users} from '../database/users.js'

export const getAllUsers = ("/users", (req, res) => {
  return res.send(users)
});




