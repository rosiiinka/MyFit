let User = require('mongoose').model('User')
let encryption = require('../utilities/encryption')

module.exports.register = (req, res) => {
  let salt = encryption.gelerateSalt()
  let hashedPassword = encryption.generateHashedPassword(salt, req.body.password)
  let token = encryption.generateHashedPassword(req.body.username, req.body.password)
  let newUser = {
    username: req.body.username,
    hashedPassword: hashedPassword,
    roles: ['User'],
    salt: salt,
    token: token
  }
  User.create(newUser)
    .then(user => {
      return res.status(200).json({
        success: true,
        message: 'successfuly logged',
        createdUser: {
          username: req.body.username,
          token: user.token,
          roles: user.roles
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports.getByUsername = (req, res) => {
  User.find({ username: req.params.username }).then(user => {
    res.status(200).json({
      success: true,
      message: 'found',
      user
    })
  })
}
