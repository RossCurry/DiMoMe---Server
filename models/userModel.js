
const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  

  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  localType: {
    type: String,
    required: true
  },
  localName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }


});



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

module.exports = { addUser }