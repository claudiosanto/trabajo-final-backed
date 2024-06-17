import express from "express"
import config from "./config.js";
import usersRouters from "./api/routes/users.routes.js";






 


const app = express(); 
app.use(express.json())


app.use("/api/users",usersRouters)





app.listen(config.port,() =>console.log (`escuhando al puerto localhost:${config.port}`))

