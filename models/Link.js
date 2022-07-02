const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  section: {
    type: String,
    default: "main"
  },
  date: {
    type: Date,
    defailt: Date.now
  }
})
module.exports = Link = mongoose.model('Link', LinkSchema)