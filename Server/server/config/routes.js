const handlers = require('../handlers/index')
const multer = require('multer')
// const auth = require('./auth')

module.exports = (app) => {
  app.post('/users/register', handlers.user.register)
  app.get('/users/:username', handlers.user.getByUsername)
}
