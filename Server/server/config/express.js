const routes = require('./routes')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
// const path = require('path')
// const express = require('express')
const passport = require('passport')
const session = require('express-session')
const handlebarsHelperFunctions = require('./handlebarsHelperFunctions')

module.exports = (app, settings) => {
  // app.engine('handlebars', handlebars({
  //   defaultLayout: 'main'
  // }))
  // app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
  // app.set('view engine', 'handlebars')
  // app.set('views', path.normalize(path.join(settings.rootPath, '/views')))
  // app.use('/public', express.static(path.normalize(path.join(settings.rootPath, '/public'))))
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use((req, res, next) => {
    // res.locals.currentUser = req.user
    // handlebarsHelperFunctions.ifCommentOwner()
    next()
  })
  routes(app)
}
