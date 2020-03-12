const router = require('express').Router()
const Burger = require('../models/burger.js')

router.get('/burgers', (req, res) => {
  Burger.findAll()
    .then(burger => res.json(burger))
    .catch(e => console.error(e))
})

module.export = router