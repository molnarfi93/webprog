const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  email: {
    type: String
  },
  passw: {
    type: String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)