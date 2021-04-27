const { Schema } = require('../index');

const allergenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true
  }

})

const menuItemSchema = new Schema({

  itemName: {
    type: String,
    required: true
  },
  //TODO in client side, assign a category to each menu item
  categoryId: { 
    type: Schema.Types.ObjectId,
    required: true
  },
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
    type: {allergenSchema}
  },
  dietaryContent: {
    type: [String]
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  public_id: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  }

});

module.exports = { menuItemSchema }