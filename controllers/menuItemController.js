
const { sendMenuItemToDB, editItemDB, fetchAllMenuItemsDB } = require('../models/menuItemModel');

const addNewMenuItem = async (req, res) => {
  try {
    const newMenuItem = req.body;
    const sentMenuItem = await sendMenuItemToDB(newMenuItem);
    res.send(sentMenuItem).status(201);
  } catch (error) {
    res.status(400);
    res.send({ error, message: 'Controller: could not add New Menu Item' });
    console.error(error); // eslint-disable-line
  }
};

const editMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const itemToEdit = req.body;
    const editedItem = await editItemDB(id, itemToEdit);
    res.send(editedItem).status(201);
  } catch (error) {
    res.status(400);
    res.send({ error, message: 'Controller: could not EDIT Menu Item' });
    console.error(error); // eslint-disable-line
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const userId = req.params.id;
    const allMenuItems = await fetchAllMenuItemsDB(userId);
    res.send(allMenuItems).status(200);
  } catch (error) {
    res.status(500);
    res.send({ error, message: 'Controller: could load all MenuItems' });
    console.error(error); // eslint-disable-line
  }
};


module.exports = { addNewMenuItem, editMenuItem, getAllMenuItems };