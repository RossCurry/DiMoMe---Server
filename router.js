const router = require('express').Router();
const { newUser, userLogin } = require('./controllers/userController');
const { addNewCategory, getAllCategories } = require('./controllers/categoryController');
const { addNewMenuItem, editMenuItem, getAllMenuItems } = require('./controllers/menuItemController');
const { userValidate, validateLogin } = require('./validation/validationControl');
const { cloudinary } = require('./utils/cloudinary.utils');

//USERS
// update one user - change details in DB
// delete one user - delete from DB

//TODO run through validation before controller
// post new user - subscribe
router.post('/user/subscribe', userValidate, newUser);
// get one user - login
router.post('/user/login', validateLogin, userLogin);
// router.put('/user/:id', )
// router.delete('/user/:id', )


// MENU ITEMS
// CATEGORIES
// add new category
router.post('/category', addNewCategory);
// get all categories
router.get('/categories/:id', getAllCategories);


// ITEMS AKA PRODUCTS
// add new product
router.post('/item', addNewMenuItem);
// edit product
router.put('/item/:id', editMenuItem);
// get all menu items
router.get('/items/:id', getAllMenuItems);

//IMAGES 
//image upload
router.post('/image/upload', async (req, res) => {
  try {
    // had to send IMAGE data in an object
    const image = req.body.data;
    const itemId = req.body.itemId;
    const uploadedResponse = await cloudinary.uploader.upload(image, {upload_preset: 'dimome_test'}); 
    console.log('uploadedResponse', uploadedResponse);
    res.send(uploadedResponse).status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'image didnt send!'});
  }
})

//TODO create my own GET endpoint for the front end
//image download
router.get('/image', async (req, res) => {
  try {
    //TODO research docs to get more options as needed. This is for multiple images
    const { resources } = await cloudinary.search.expression(
      'folder:test-images')
    // .sort_by('public_id', 'desc')
    .execute();
    // gets an array of matching results
    console.log('resources', resources);
    const publicIds = resources.map( file => file.public_id);
    console.log('publicIds from cloud', publicIds);
    res.send(publicIds).status(201);
    
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;