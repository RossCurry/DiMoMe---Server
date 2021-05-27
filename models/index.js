const mongoose = require('mongoose');
require('dotenv').config()

const mongoURL = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

mongoose.connect(mongoURL+'/'+dbName, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
}, 
(err) => {
  if (err) return console.error(err);
  console.log('Mongoose connected! 🦫');
});



module.exports = mongoose;