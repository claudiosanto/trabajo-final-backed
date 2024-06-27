import express from 'express'
import config from "./config.js";
import {engine} from 'express-handlebars'
import usersRouters from "../src/routes/users.routes.js";
import viewrouter from '../src/routes/views.routes.js'
import routeUser from '../src/routes/user.routes.js'
const app = express();
//configuracion de motor de plantilla
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: './src/views/layouts',
  partialsDir:'./src/views/partials'
}))
app.set('view engine','handlebars')
app.set('views', './src/views')


app.use(express.json()) 
app.use(express.static('public'))

app.use('/', viewrouter)
app.use('/', viewrouter)
app.use('/', viewrouter)
app.use('/user', routeUser)

app.use("api/users/id",usersRouters)
app.use("/api/users",usersRouters)
app.use("/api/user/createUser", usersRouters)

app.listen(config.port,() =>console.log (`escuhando al puerto http://localhost:${config.port}`))

