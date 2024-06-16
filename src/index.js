import express from "express"
import config from "../src/config.js";
import { getAllUsers } from "./api/users.controllers/users.controllers.js";






const app = express();
app.use(express.json())


app.use("api/users", getAllUsers)

app.get("/", (req, res) => {
  res.send("HOLA ")

})




app.listen(config.port,() =>console.log (`escuhando al puerto localhost:${config.port}`))

