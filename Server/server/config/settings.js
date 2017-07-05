const path = require('path')

module.exports = {
  development: {
    port: 1337,
    connectionString: 'mongodb://localhost:27017/MyFit',
    rootPath: path.normalize(path.join(__dirname, '/../../'))
  },
  production: {

  }
}
