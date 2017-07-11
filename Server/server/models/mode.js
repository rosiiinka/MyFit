const mongoose = require('mongoose')

const ERROR_VALIDATION_MESSAGE = '{PATH} is required'

let modeSchema = mongoose.Schema({
  title: [{ type: String, requred: ERROR_VALIDATION_MESSAGE }],
  date: { type: Date, required: ERROR_VALIDATION_MESSAGE },
  content: { type: String, required: ERROR_VALIDATION_MESSAGE }
})

let Mode = mongoose.model('Mode', modeSchema)

module.exports = Mode
