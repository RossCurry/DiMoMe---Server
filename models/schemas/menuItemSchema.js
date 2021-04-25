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
    default: '',
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
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true
  }

});

module.exports = { menuItemSchema }