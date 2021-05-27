// MODELS need DB connection, Model Schema and to create the Model

const mongoose = require('./index');
const { menuItemSchema } = require('./schemas/menuItemSchema');
const MenuItems = mongoose.model('menuitemcol', menuItemSchema);

const sendMenuItemToDB = async (newItem) => {
  try {
    const newItemFromDB = await MenuItems.create(newItem);
    return newItemFromDB;
  } catch (error) {
    console.error(error);
  }

};

const editItemDB = async (id, menuItem) => {
  try {
    const matchedItem = await MenuItems.findByIdAndUpdate(id, menuItem);
    const returnItem = await MenuItems.findById(id);
    return returnItem;
  } catch (error) {
    console.error(error); 
  }
}

const fetchAllMenuItemsDB = async (userId) => {
  try {
    const allUserMenuItems = await MenuItems.find({userId});
    return allUserMenuItems;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendMenuItemToDB, editItemDB, fetchAllMenuItemsDB }