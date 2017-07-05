const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let noteSchema = mongoose.Schema({
  name: { type: String, required: ERROR_VALIDATION_MESSAGE },
  calories: { type: String, required: ERROR_VALIDATION_MESSAGE }
})

let Note = mongoose.model('Note', noteSchema)

module.exports = Note
