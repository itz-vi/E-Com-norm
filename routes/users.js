const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/E-COMMERCE")


const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: []
  },
  orders: {
    type: Array,
    default: []
  },
  contact: String,
  picture: String
});

module.exports = mongoose.model('user', userSchema)