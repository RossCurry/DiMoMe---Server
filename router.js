const router = require('express').Router();
const {newUser} = require('./controllers/userController')
const { userValidate } = require('./validation/validationControl')
//USERS
// post new user - subscribe
// get one user - login
// update one user - change details in DB
// delete one user - delete from DB
//TODO run through validation before controller
router.post('/user/subscribe', userValidate, newUser)
router.get('/user/login', (req, res)=> {console.log('login')})
// router.put('/user/:id', )
// router.delete('/user/:id', )


module.exports = router;