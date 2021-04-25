
const addNewCategory = (req, res) => {

  const newCategory = req.body;
  const addedCategory = addCategoryToDB(newCategory);

}


module.exports = { addNewCategory }