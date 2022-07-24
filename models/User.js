const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  layout: {
    type: Object,
    default: {}
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('User', UserSchema);
