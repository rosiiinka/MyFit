let User = require('mongoose').model('User')
let encryption = require('../utilities/encryption')

module.exports.login = (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      let hashedPassword = encryption.generateHashedPassword(user.salt, req.body.password)
      if (user.hashedPassword === hashedPassword) {
        let randomNum = encryption.gelerateSalt()
        let token = encryption.generateHashedPassword(req.body.username, randomNum)

        user.token = token
        user.save()

        return res.status(200).json({
          success: true,
          message: 'successfuly logged in',
          user: {
            username: user.username,
            token: token,
            roles: user.roles,
            id: user._id
          }
        })
      } else {
        return res.status(200).json({
          success: false,
          message: 'invalid credentials'
        })
      }
    } else {
      return res.status(200).json({
        success: false,
        message: 'invalid credentials'
      })
    }
  })
}

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
      return res.status(200).json({
        success: false,
        message: err
      })
    })
}

module.exports.logout = (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      user.token = ''
      user.save()
      return res.status(200).json({
        success: true,
        message: 'successfuly logout'
      })
    } else {
      return res.status(200).json({
        success: false,
        message: `cannot find user ${req.body.username}`
      })
    }
  })
}

module.exports.getByUsername = (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    res.status(200).json({
      success: true,
      message: 'found',
      user
    })
  })
}
