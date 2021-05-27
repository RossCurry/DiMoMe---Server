var atob = require('atob');

const userValidate = (req, res, next) => {
  const user = req.body;
  // todo add check that send res.send() if not true
  const { email, name, localSelector, localName, password} = user;
  if (!email || !name || !localSelector || !localName || !password) res.send('an input is missing or wrongly spelt')
  //this gets changed in the DB
  const localType = localSelector;
  console.log('email', email);
  console.log('name -> ', name);
  req.body = {
    email: atob(email), 
    name: atob(name), 
    localType: atob(localType), 
    localName: atob(localName),
    password: atob(password)
  }
  next();
}

const validateLogin = (req,res, next) => {
  const user = req.body;
  const { email, password} = user;
  req.body = {
    email: atob(email), 
    password: atob(password)
  }
  next();
}

//TODO if things were going better we would be encrypting too Bcrypt


module.exports = { userValidate, validateLogin }