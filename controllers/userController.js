const { addUser } = require('../models/userModel')


async function newUser(req, res) {
  try {
    const user = req.body;
    const sentUser = await addUser(user);
    // console.log('user from DB in controller', sentUser);
    res.send(sentUser).status(201);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {newUser}