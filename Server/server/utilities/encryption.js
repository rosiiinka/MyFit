const crypto = require('crypto')

module.exports = {
  gelerateSalt: () => {
    return crypto.randomBytes(128).toString('base64')
  },
  generateHashedPassword: (salt, password) => {
    return crypto.createHmac('sha256', salt).update(password).digest('hex')
  }
}
