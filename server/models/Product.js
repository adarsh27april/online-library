const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    author:{
      type:String,
      maxlength:32,
      required: true
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    rating:{
      type: String,
    },
    comments:{
      type: Array,
      default: [],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
