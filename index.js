const express = require('express');
const app = express();
require('dotenv').config(); 
const session = require('express-session');

const port = process.env.PORT;
const router = require('./router');
const cors = require('cors');

app.use(cors({
  // todo change to .env when netfli
  // origin: 'https://dimome-v1.herokuapp.com',
  origin: '*',
  credentials: true,
}))

// app.use(express.static('public'))
app.use(express.json({limit: '50mb'}));
app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost/${port} 🔥`);
})