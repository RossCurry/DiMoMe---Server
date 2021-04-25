const { Schema } = require('../index');

const menuItemSchema = new Schema({

  itemName: {
    type: String,
    required: true
  },
  //TODO in client side, assign a category to each menu item
  // categortyId: { 
  //   type: Schema.Types.ObjectId,
  //   required: true
  // },
  description: {
    type: String,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  allergyContent: {
    type: [String]
  },
  dietaryContent: {
    type: [String]
  }

});

module.exports = { menuItemSchema }