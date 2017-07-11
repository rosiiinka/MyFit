const Note = require('mongoose').model('Note')
const Product = require('mongoose').model('Product')

module.exports.add = (req, res) => {
  Product.findById(req.body.product).then(product => {
    Note.create({
      quantity: Number(req.body.quantity),
      date: req.body.date,
      products: [product]
    }).then(note => {
      return res.status(200).json({
        success: true,
        message: 'successfuly added',
        note
      })
    }).catch(err => {
      return res.status(200).json({
        success: false,
        message: err
      })
    })
  })
}

module.exports.all = (req, res) => {
  Note.find().then(notes => {
    return res.status(200).json({
      success: true,
      notes
    })
  })
}
