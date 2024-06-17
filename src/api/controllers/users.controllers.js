import {users} from '../db/users.js'

export const  getAllUsers =  (req, res) => {
  return res.send(users)
};




