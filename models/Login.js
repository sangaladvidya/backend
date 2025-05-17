const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
 mobileno: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
   required:true,
  }
});

module.exports = mongoose.model('Login', LoginSchema); 