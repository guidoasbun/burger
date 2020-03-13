require('dotenv').config()

const morgan = require('morgan')

const express = require('express')
const path = require('path')
const { join } = require('path')
const app = express()
const Burger = require('./models/burger.js')

// Middleware
app.use(morgan('tiny'))
app.engine('jsx', require('express-react-views').createEngine())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/burger', (req, res) => {
  Burger.findAll()
    .then(burgers => res.json(burgers))
    .catch(e => console.error(e))
})

app.post('/burger', (req, res) => Burger.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

app.put('/burger', (req, res) => {
  Burger.update({ eaten: req.body.eaten }, { where: { id: req.body.id } })
    .then(res.sendStatus(200))
})

// Router
require('./config').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch((e) => console.log(e))
