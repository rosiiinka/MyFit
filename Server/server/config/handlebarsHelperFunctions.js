const handlebars = require('handlebars')

module.exports.ifCommentOwner = () => {
  handlebars.registerHelper('ifCommentOwner', function (comment, user, options) {
    if (user.createdComments.indexOf(comment._id) !== -1) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })
}
