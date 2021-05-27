const router = require('express').Router();
const { newUser, userLogin } = require('./controllers/userController');
const { addNewCategory, getAllCategories } = require('./controllers/categoryController');
const { addNewMenuItem, editMenuItem, getAllMenuItems } = require('./controllers/menuItemController');
const { userValidate, validateLogin } = require('./validation/validationControl');
const { cloudinary } = require('./utils/cloudinary.utils');

//USERS
// post new user - subscribe
router.post('/user/subscribe', userValidate, newUser);
router.post('/user/login', validateLogin, userLogin);

// MENU ITEMS
// CATEGORIES
router.post('/category', addNewCategory);
router.get('/categories/:id', getAllCategories);

// ITEMS AKA PRODUCTS
router.post('/item', addNewMenuItem);
router.put('/item/:id', editMenuItem);
router.get('/items/:id', getAllMenuItems);


//IMAGES 
// TODO Add controllers for these endpoints
//image upload
router.post('/image/upload', async (req, res) => {
  try {
    const image = req.body.data;
    const itemId = req.body.itemId;
    const uploadedResponse = await cloudinary.uploader.upload(image, {upload_preset: 'dimome_test'}); 
    res.send(uploadedResponse).status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'image didnt send!'});
  }
})

//image download
router.get('/image', async (req, res) => {
  try {
    const { resources } = await cloudinary.search.expression(
      'folder:test-images')
    .execute();
    const publicIds = resources.map( file => file.public_id);
    res.send(publicIds).status(201);
    
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


module.exports = router;