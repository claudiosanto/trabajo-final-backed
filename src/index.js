import express from "express"
import config from "./config.js";
import {engine} from 'express-handlebars'
import usersRouters from "./api/routes/users.routes.js";
import viewRouter from './api/routes/views.routes.js'

const app = express();
//configuracion de motor de plantilla
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json())
app.use("/",viewRouter)


app.use("/api/users",usersRouters)





app.listen(config.port,() =>console.log (`escuhando al puerto http://localhost:${config.port}`))

