// require('dotenv').config()
const express = require('express')
const path = require('path')
const { join } = require('path')
const app = express()
const Burger = require('./models/burger.js')


// middleware
app.engine('jsx', require('express-react-views').createEngine())
app.set('views', join(__dirname + 'views'))
app.set('view engine', 'jsx')


// app.use(require('./routes'))

app.listen(3000)
