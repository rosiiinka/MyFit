const Mode = require('mongoose').model('Mode')

module.exports.add = (req, res) => {
  let newMode = {
    title: req.body.title,
    date: new Date(),
    content: req.body.content
  }

  Mode.create(newMode)
    .then(product => {
      return res.status(200).json({
        success: true,
        message: 'Mode Created',
        mode: {
            title: req.body.title,
            date: new Date(),
            content: req.body.content
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

module.exports.all = (req, res) => {
  Mode.find().then(mode => {
    return res.status(200).json({
      mode
    })
  })
}
