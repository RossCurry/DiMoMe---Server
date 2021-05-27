const { addUser, checkLogin } = require('../models/userModel')

async function newUser(req, res) {
  try {
    const user = req.body;
    const sentUser = await addUser(user);
    res.send(sentUser).status(201);
  } catch (error) {
    console.error(error);
  }
}

async function userLogin(req, res) {
  try {
    const userLogin = req.body;
    const userDetails = await checkLogin(userLogin);
    res.send(userDetails).status(201);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {newUser, userLogin}