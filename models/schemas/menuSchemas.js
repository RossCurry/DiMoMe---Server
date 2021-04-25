const mongoose = require('../index');

const categorySchema = new mongoose.Schema({


    categoryName: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    menuItems: {
      type: [menuItemSchema], //TODO create menuItemSchema
      required: true, 
      default: []
    }


});

module.exports = { categorySchema };