const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discountPrice: {
    type: Number,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  types: [{
    type: String,
  }],
  tag: [{
    type: String,
  }],
  brands: [{
    type: String,
  }],
  colors: [{
    type: String,
  }],
  titles: [{
    type: String,
  }],
  subTitles: [{
    type: String,
  }],
}, {
  timestamps: true, // Thêm createdAt và updatedAt
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;