const userHandler = require('./user')
const noteHandler = require('./note')
const productHandler = require('./product')

module.exports = {
  user: userHandler,
  note: noteHandler,
  product: productHandler
}
