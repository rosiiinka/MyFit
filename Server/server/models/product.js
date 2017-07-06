const mongoose = require('mongoose')

let productSchema = mongoose.Schema({
  name: { type: String },
  calories: { type: Number }
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product
