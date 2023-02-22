const dotenv = require('dotenv');
// import dotenv from "dotenv";
dotenv.config();

module.exports = {
  allowedOrigins: ['http://localhost:5000/'],
  SERVER_PORT: process.env.PORT || 4000,
};