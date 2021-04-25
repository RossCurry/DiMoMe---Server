const mongoose = require('./index');

const { categorySchema } = require('./schemas/categorySchema');

const Categories = mongoose.model('categorycol', categorySchema);



const addCategoryToDB = async (newCategory) => {

  try {
    const categoryFromDB = await Categories.create(newCategory);
    return categoryFromDB;
  } catch (error) {
    console.log('Model: NEW category NOT saved to the DB');
    console.error(error);
  }

}

const fetchAllCategoriesDB = async (userId) => {

  try {
    const allUserCategories = await Categories.find({userId});
    return allUserCategories;
  } catch (error) {
    console.log('Model: All Categoies NOT returned from the DB');
    console.error(error);
  }
};

module.exports = { addCategoryToDB, fetchAllCategoriesDB }