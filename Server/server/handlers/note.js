const Note = require('mongoose').model('Note')
const Product = require('mongoose').model('Product')

module.exports.add = (req, res) => {
  Product.findById(req.body.product).then(product => {
    let newDate = new Date(req.body.date)
    let date = newDate.getDate()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    Note.findOne({ date: date, month: month, year: year }).then(note => {
      if (note) {
        note.quantity.push(Number(req.body.quantity))
        note.products.push(product)
        note.save().then(note => {
          return res.status(200).json({
            success: true,
            message: 'successfuly updated',
            note
          })
        }).catch(err => {
          return res.status(200).json({
            success: false,
            message: err
          })
        })
      } else {
        Note.create({
          quantity: [Number(req.body.quantity)],
          originalDate: req.body.date,
          date,
          month,
          year,
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
      }
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
