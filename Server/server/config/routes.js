const handlers = require('../handlers/index')
const multer = require('multer')
// const auth = require('./auth')

module.exports = (app) => {
  app.post('/users/register', handlers.user.register)
  app.post('/users/login', handlers.user.login)
  app.post('/users/logout', handlers.user.logout)
  app.post('/users/get', handlers.user.getByUsername)

  app.post('/products/add', handlers.product.add)
  app.get('/products/all', handlers.product.all)

  app.post('/notes/add', handlers.note.add)
<<<<<<< HEAD
  app.post('/notes/all', handlers.note.allByUser)
=======
  app.get('/notes/all', handlers.note.all)

  app.post('/mode/create', handlers.mode.add)
  app.get('/mode/all', handlers.mode.all)
>>>>>>> 1bc2e8c0d3ae2c9553e3d2a9e37b2c98f2e9b88e
}
