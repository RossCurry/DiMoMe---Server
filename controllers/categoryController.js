const { addCategoryToDB, fetchAllCategoriesDB } = require('../models/categoryModel');

const addNewCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const addedCategory = await addCategoryToDB(newCategory);
    res.send(addedCategory).status(201);
  } catch (error) {
    res.status(500);
    res.send({ error, message: 'Controller: could not add New Category' });
    console.error(error); // eslint-disable-line
  }
};

const getAllCategories = async (req, res) => {
  try {
    const userId = req.params.id;
    const allCategories = await fetchAllCategoriesDB(userId);
    res.send(allCategories).status(200);
  } catch (error) {
    res.status(500);
    res.send({ error, message: 'Controller: could load all Categories' });
    console.error(error); // eslint-disable-line
  }
};

module.exports = { addNewCategory, getAllCategories }