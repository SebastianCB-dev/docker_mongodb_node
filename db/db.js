const mongoose = require('mongoose');

export async function databaseConnection() {
  return await mongoose.connect('mongodb://sebastiancb:password@localhost:27017/pruebaDocker?authSource=admin');
}