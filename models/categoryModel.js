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

module.exports = { addCategoryToDB }