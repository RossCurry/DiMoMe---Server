
const { sendMenuItemToDB, editItemDB } = require('../models/menuItemModel');

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

  const id = req.params.id;
  const itemToEdit = req.body;
  const editedItem = await editItemDB(id, itemToEdit);
};


module.exports = { addNewMenuItem, editMenuItem };