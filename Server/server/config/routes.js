const handlers = require('../handlers/index')
const multer = require('multer')
// const auth = require('./auth')

module.exports = (app) => {
  app.post('/users/register', handlers.user.register)
  app.post('/users/login', handlers.user.login)
  app.post('/users/logout', handlers.user.logout)
  app.post('/users/get', handlers.user.getByUsername)

  app.post('/products/add', handlers.product.add)
}
