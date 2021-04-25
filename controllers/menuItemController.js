
const { sendMenuItemToDB } = require('../models/menuItemModel');

const addNewMenuItem = async (req, res) => {
  const newProduct = req.body;
  const sentProduct = await sendMenuItemToDB(newProduct);
};

module.exports = { addNewMenuItem };