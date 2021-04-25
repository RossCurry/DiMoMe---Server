const router = require('express').Router();
const { newUser, userLogin } = require('./controllers/userController')
const { addNewCategory, getAllCategories } = require('./controllers/categoryController')
const { addNewMenuItem, editMenuItem } = require('./controllers/menuItemController')
const { userValidate, validateLogin } = require('./validation/validationControl')

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
router.get('/categories/:id', getAllCategories);


// ITEMS AKA PRODUCTS
// add new product
router.post('/item', addNewMenuItem);
// edit product
router.put('/item/:id', editMenuItem);



module.exports = router;