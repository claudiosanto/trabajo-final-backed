import express from 'express'
import config from "./config.js";
import { engine } from 'express-handlebars'
import cors from 'cors'
import viewrouter from './routes/views.routes.js'
import usersRouters from './routes/api/users.routes.js'
import connectToDB from './connect.js';
const app = express();
connectToDB()
app.use(cors())
//configuracion de motor de plantilla
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: './src/views/layouts ',
  partialsDir: '.src/views/partials'
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.use(express.json())
app.use(express.static('public'))

app.use('/api/users', usersRouters)

app.use('/users', viewrouter)


app.listen(config.port, () => console.log(`escuhando al puerto http://localhost:${config.port}`))

