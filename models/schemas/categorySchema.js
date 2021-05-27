const { Schema } = require('../index');
const { menuItemSchema } = require('./menuItemSchema');

const categorySchema = new Schema({

    categoryName: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    //TODO in client side assign menu items to categories
    // menuItems: {
    //   type: [menuItemSchema],
    //   required: true, 
    //   default: {} 
    // }
});

module.exports = { categorySchema };