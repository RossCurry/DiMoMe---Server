// MODELS need DB connection, Model Schema and to create the Model

const mongoose = require('./index');
const { menuItemSchema } = require('./schemas/menuItemSchema');
const MenuItems = mongoose.model('menuitemcol', menuItemSchema);


const sendMenuItemToDB = async (newItem) => {

  try {
    console.log('newItem before DB ', newItem);
    const newItemFromDB = await MenuItems.create(newItem);
    console.log('return item from DB', newItemFromDB );
    return newItemFromDB;
  } catch (error) {
    console.log('Model: NEW menu item NOT saved to the DB');
    console.error(error);
  }


};

module.exports = { sendMenuItemToDB }