const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DVD = new Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  },
  pieces: {
    type: Number
  },
  user: {
	type: String
  }
}, {
  collection: 'dvds'
})

module.exports = mongoose.model('DVD', DVD)