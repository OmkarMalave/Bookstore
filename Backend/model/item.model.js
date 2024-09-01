const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  img: String,
});

module.exports = mongoose.model('Item', itemSchema);
