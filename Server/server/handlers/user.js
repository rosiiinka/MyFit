let User = require('mongoose').model('User')
let encryption = require('../utilities/encryption')

module.exports.register = (req, res) => {
  let salt = encryption.gelerateSalt()
  let hashedPassword = encryption.generateHashedPassword(salt, req.body.password)
  let newUser = {
    username: req.body.username,
    hashedPassword: hashedPassword,
    roles: ['User'],
    salt: salt
    // image: '/' + req.file.path
  }
  User.create(newUser)
    .then(user => {
      let token = encryption.generateHashedPassword(user.username, req.body.password)
      return res.status(200).json({
        success: true,
        message: 'evala',
        token
      })
    })
    .catch(err => {
      console.log(err)
    })
}
