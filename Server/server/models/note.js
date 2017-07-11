const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let noteSchema = mongoose.Schema({
  quantity: [{ type: Number, requred: ERROR_VALIDATION_MESSAGE }],
  originalDate: { type: Date, required: ERROR_VALIDATION_MESSAGE },
  date: { type: Number, required: ERROR_VALIDATION_MESSAGE },
  month: { type: Number, required: ERROR_VALIDATION_MESSAGE },
  year: { type: Number, required: ERROR_VALIDATION_MESSAGE },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

let Note = mongoose.model('Note', noteSchema)

module.exports = Note
