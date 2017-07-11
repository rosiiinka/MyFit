const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let noteSchema = mongoose.Schema({
  quantity: { type: Number, requred: ERROR_VALIDATION_MESSAGE },
  date: { type: Date, required: ERROR_VALIDATION_MESSAGE },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

let Note = mongoose.model('Note', noteSchema)

module.exports = Note
