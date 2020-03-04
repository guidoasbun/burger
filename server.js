const express = require('express')
const { join } = require('path')
const app = express()

app.set('views', join(__dirname + 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(require('./routes'))

app.listen(3000)
