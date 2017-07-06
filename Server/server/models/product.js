const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let productSchema = mongoose.Schema({
  name: { type: String, required: ERROR_VALIDATION_MESSAGE },
  calories: { type: Number, required: ERROR_VALIDATION_MESSAGE }
}) 

let Product = mongoose.model('Product', productSchema)

module.exports = Product
