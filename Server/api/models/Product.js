var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  sellerName: {
    type: String,
<<<<<<< HEAD
    default: 'Omar'
  }
=======
    required: true,
    trim: true
  },
  stock: Number
>>>>>>> 48ed3ee89b05990453416e9f1bb73dbcbe942739
});

mongoose.model('Product', productSchema);
