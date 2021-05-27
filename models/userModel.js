const mongoose = require('./index');
const { userSchema } = require('./schemas/userSchema')
const Users = mongoose.model('usercol', userSchema);

async function addUser(newUser) {
  try {
    const userFromDB = await Users.create(newUser);
    const {_id, email, name, localType, localName} = userFromDB;
    const returnedUser = {_id, email, name, localType, localName};
    return returnedUser;
  } catch (error) {
    console.error(error);
  }
}

async function checkLogin(loginDetails) {
  try {
    const {email, password} = loginDetails;
    const {_id, name, localType, localName} = await Users.findOne({email, password});
    const userFromDB = {_id, email, name, localType, localName};
    return userFromDB;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { addUser, checkLogin }