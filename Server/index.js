const express = require('express')
const settings = require('./server/config/settings')
let app = express()
let environment = process.env.NODE_ENV || 'development'
const port = 1337

require('./server/config/database')(settings[environment])
require('./server/config/express')(app, settings[environment])
require('./server/config/passport')

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
