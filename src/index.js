import express from 'express'
import config from "./config.js";
import {engine} from 'express-handlebars'
import usersRouters from "./api/routes/users.routes.js";
import viewrouter from './api/routes/views.routes.js'
const app = express();
//configuracion de motor de plantilla
app.engine('handlebars', engine())
app.set('view engine','handlebars')
app.set('views' ,'./src/views' )

app.use(express.json())
app.use(express.static('public'))

app.use('/', viewrouter)
app.use('/', viewrouter)

app.use("api/users/id",usersRouters)
app.use("/api/users",usersRouters)
app.use("/api/user/createUser",usersRouters)





app.listen(config.port,() =>console.log (`escuhando al puerto http://localhost:${config.port}`))

