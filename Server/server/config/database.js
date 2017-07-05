const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('../models/user')
require('../models/note')

module.exports = (settings) => {
  mongoose.connect(settings.connectionString).then().catch(err => console.log(err))

  let database = mongoose.connection

  database.once('open', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Database connected')
  })

  database.on('error', (err) => {
    if (err) {
      console.log(err)
      
    }
  })
}
