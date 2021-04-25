const mongoose = require('../index');

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  localType: {
    type: String,
    required: true
  },
  localName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});


module.exports = { userSchema }