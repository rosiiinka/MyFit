const userHandler = require('./user')
const noteHandler = require('./note')
const productHandler = require('./product')
const modeHandler = require('./mode')

module.exports = {
  user: userHandler,
  note: noteHandler,
  product: productHandler,
  mode: modeHandler
}
