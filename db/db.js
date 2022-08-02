const mongoose = require('mongoose');

async function databaseConnection() {
  return await mongoose.connect('mongodb://sebastiancb:password@mongodb:27017/pruebaDocker?authSource=admin');
}

module.exports = { databaseConnection }