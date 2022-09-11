const mongoose = require('mongoose');

async function databaseConnection() {
  // return await mongoose.connect('mongodb://sebastiancb:password@mongodb:27017/test?authSource=admin');
  return await mongoose.connect('mongodb+srv://sebastiancb:A0H1LeP8mrMlxF1Q@pruebadocker.6pzpfzk.mongodb.net/test');
}

module.exports = { databaseConnection }