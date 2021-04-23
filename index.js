const express = require('express')
const app = express();
require('dotenv').config(); 
const session = require('express-session');


const port = process.env.SV_PORT;
const router = require('./router');
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))


app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost/${port} 🔥`);
})