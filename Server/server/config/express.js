const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

module.exports = (app, settings) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use((req, res, next) => {
    // res.locals.currentUser = req.user
    // handlebarsHelperFunctions.ifCommentOwner()
    next()
  })
  routes(app)
}
