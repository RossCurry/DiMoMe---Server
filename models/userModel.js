
const mongoose = require('./index');
const { userSchema } = require('./schemas/userSchema')

const Users = mongoose.model('usercol', userSchema);

// CRUD OPERATIONS HERE: create, read, update, delete
// READ ALL: Model.find()

// async function readAll() {
//   try {
//     const allEvents = await Events.find();
//     return allEvents;
//   } catch (error) {
//     console.log(error);
//   }
// }

// CREATE ONE: Model.create()

async function addUser(newUser) {
  try {
    // console.log('Model user: ', newUser);
    const userFromDB = await Users.create(newUser);
    const {_id, email, name, localType, localName} = userFromDB;
    const returnedUser = {_id, email, name, localType, localName};
    return returnedUser;
  } catch (error) {
    console.log(error);
  }
}

async function checkLogin(loginDetails) {

  try {
    const {email, password} = loginDetails;
    const {_id, name, localType, localName} = await Users.findOne({email, password});
    const userFromDB = {_id, email, name, localType, localName};
    return userFromDB;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addUser, checkLogin }