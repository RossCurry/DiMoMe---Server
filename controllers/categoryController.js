const { addCategoryToDB } = require('../models/categoryModel');


const addNewCategory = async (req, res) => {

  try {
    const newCategory = req.body;
    const addedCategory = await addCategoryToDB(newCategory);
    res.send(addedCategory).status(201);
  } catch (error) {
    res.status(400);
    res.send({ error, message: 'Controller: could not add New Category' });
    console.error(error); // eslint-disable-line
  }

}


module.exports = { addNewCategory }