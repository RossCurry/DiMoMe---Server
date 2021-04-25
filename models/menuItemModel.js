// MODELS need DB connection, Model Schema and to create the Model

const mongoose = require('./index');
const { menuItemSchema } = require('./schemas/menuItemSchema');
const MenuItems = mongoose.model('menuitemcol', menuItemSchema);


const sendMenuItemToDB = async (newItem) => {

  try {
    const newItemFromDB = await MenuItems.create(newItem);
    return newItemFromDB;
  } catch (error) {
    console.log('Model: NEW menu item NOT saved to the DB');
    console.error(error);
  }

};

const editItemDB = async (id, menuItem) => {
  try {
    const matchedItem = await MenuItems.findByIdAndUpdate(id, menuItem);
    const returnItem = await MenuItems.findById(id);
    return returnItem;
  } catch (error) {
    console.log('Model: menu item NOT edited in the DB');
    console.error(error); 
  }

}

module.exports = { sendMenuItemToDB, editItemDB }