const handlers = require('../handlers/index')
const multer = require('multer')
// const auth = require('./auth')

module.exports = (app) => {
  app.post('/users/register', handlers.user.register)
  app.post('/users/login', handlers.user.login)
  app.post('/users/:username', handlers.user.getByUsername)
}
