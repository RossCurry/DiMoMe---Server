require('dotenv').config;
const cloudinary = require('cloudinary').v2
//TODO send file names to dotenv
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

module.exports = { cloudinary }
