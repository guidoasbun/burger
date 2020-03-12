const {Model, STRING, BOOLEAN} = require('sequelize')
const sequelize = require('../config')

class Burger extends Model {}

Burger.init({
  burgerName: {
    type: STRING,
    allowNull: false
  },
  eaten: {
    type: BOOLEAN,
    allowNull: false
  }
}, {sequelize, modelName: 'burger'})

module.exports = Burger